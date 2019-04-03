/* exported init, cleanup, add, add_app_setting, add_app_override, check_overrides, check_triggers, bind, unbind */ // eslint-disable-line max-len

import * as Convenience from '../lib/convenience';

const Params = imports.misc.params;
const { GLib, Gio } = imports.gi;

/* This might impair visibility of the code, but it makes my life a thousand times simpler */
/* settings.js takes a key and watches for it to change in Gio.Settings & creates a getter */
/* for it. Also can parse, handle, etc. a setting. */

const WINDOW_OVERRIDES_SCHEMA_PATH = '/org/gnome/shell/extensions/dynamic-panel-transparency/windowOverrides/';
const APP_OVERRIDES_SCHEMA_PATH = '/org/gnome/shell/extensions/dynamic-panel-transparency/appOverrides/';
const OVERRIDES_SCHEMA_ID = 'org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides';
const Me = imports.misc.extensionUtils.getCurrentExtension();

const SETTINGS_WINDOW_OVERRIDES = 'window-overrides';
const SETTINGS_APP_OVERRIDES = 'app-overrides';

const GNOME_BACKGROUND_SCHEMA = 'org.gnome.desktop.wm.keybindings';
const SETTINGS_SHOW_DESKTOP = 'show-desktop';

const GNOME_INTERFACE_SCHEMA = 'org.gnome.desktop.interface';
const SETTINGS_ENABLE_ANIMATIONS = 'enable-animations';

export default class Settings {
  initialize(intellifader) {
    this.intellifader = intellifader;

    this._settings = Convenience.getSettings(Me);
    this._background_settings = null;
    this._interface_settings = null;

    /* Setup background settings. */

    try {
      const schemaObj = Convenience.getSchemaObj(Me, GNOME_BACKGROUND_SCHEMA, true);

      if (schemaObj) {
        this._background_settings = new Gio.Settings({
          settings_schema: schemaObj
        });
      }
    } catch (error) {} // eslint-disable-line

    try {
      const schemaObj = Convenience.getSchemaObj(Me, GNOME_INTERFACE_SCHEMA, true);

      if (schemaObj) {
        this._interface_settings = new Gio.Settings({
          settings_schema: schemaObj
        });
      }
    } catch (error) {} // eslint-disable-line

    this._keys = [];
    this._app_keys = {};
    this._overriden_keys = [];

    this.settingsBoundIds = [];

    this._app_overrides = this._settings.get_strv(SETTINGS_APP_OVERRIDES);
    this._window_overrides = this._settings.get_strv(SETTINGS_WINDOW_OVERRIDES);
    this._show_desktop = null;

    if (this._background_settings) {
      this._show_desktop = this._background_settings.get_strv(SETTINGS_SHOW_DESKTOP).length > 0;

      this.settingsBoundIds.push(
        this._background_settings.connect(`changed::${SETTINGS_SHOW_DESKTOP}`, () => {
          this._show_desktop = this._background_settings.get_strv(SETTINGS_SHOW_DESKTOP).length > 0;
        })
      );
    }

    if (this._interface_settings) {
      this._enable_animations = this._interface_settings.get_boolean(SETTINGS_ENABLE_ANIMATIONS);

      this.settingsBoundIds.push(
        this._interface_settings.connect(`changed::${SETTINGS_ENABLE_ANIMATIONS}`, () => {
          this._enable_animations = this._interface_settings.get_boolean(
            SETTINGS_ENABLE_ANIMATIONS
          );
        })
      );
    }

    this.settingsBoundIds.push(
      this._settings.connect(`changed::${SETTINGS_APP_OVERRIDES}`, () => {
        this._app_overrides = this._settings.get_strv(SETTINGS_APP_OVERRIDES);
        this.app_settings_manager.unbind();
        this.app_settings_manager = new AppSettingsManager(
          this._app_keys,
          this.get_app_overrides(),
          APP_OVERRIDES_SCHEMA_PATH
        );
      })
    );

    this.settingsBoundIds.push(
      this._settings.connect(`changed::${SETTINGS_WINDOW_OVERRIDES}`, () => {
        this._window_overrides = this._settings.get_strv(SETTINGS_WINDOW_OVERRIDES);
        this.window_settings_manager.unbind();
        this.window_settings_manager = new AppSettingsManager(
          this._app_keys,
          this.get_window_overrides(),
          WINDOW_OVERRIDES_SCHEMA_PATH
        );
      })
    );

    this.get_app_overrides = () => this._app_overrides;

    this.get_window_overrides = () => this._window_overrides;

    this.gs_show_desktop = () => this._show_desktop;

    this.gs_enable_animations = () => this._enable_animations;
  }

  cleanup() {
    for (let i = 0; i < this._keys.length; i += 1) {
      const setting = this._keys[i];
      if (!setting.getter) {
        this[`get_${setting.name}`] = null;
      } else {
        this[setting.getter] = null;
      }
    }

    this._keys = null;
    this._app_keys = null;
    this._overriden_keys = null;
    this._app_overrides = null;
    this.settingsBoundIds = null;
    this._settings = null;
  }

  /* Settings Management */
  add(params) {
    const key = {
      key: params.key,
      name: params.name,
      type: params.type,
      parser: null,
      getter: null,
      handler: null
    };

    if (typeof params.getter !== 'undefined') key.getter = params.getter;
    if (typeof params.handler !== 'undefined') key.handler = params.handler;
    if (typeof params.parser !== 'undefined') key.parser = params.parser;

    this._keys.push(key);
  }

  add_app_setting(params) {
    const key = {
      key: params.key,
      name: params.name,
      type: params.type,
      parser: null,
      getter: null,
      handler: null
    };

    if (typeof params.getter !== 'undefined') key.getter = params.getter;
    if (typeof params.handler !== 'undefined') key.handler = params.handler;
    if (typeof params.parser !== 'undefined') key.parser = params.parser;

    this._app_keys[params.key] = key;
  }

  add_app_override(params) {
    this.add_app_setting(params);
    this._overriden_keys.push(params.key);
  }

  check_overrides() {
    return this.get_app_overrides().length > 0 || this.get_window_overrides().length > 0;
  }

  check_triggers() {
    return this.get_trigger_apps().length > 0 || this.get_trigger_windows().length > 0;
  }

  static gen_override_getter(setting, parser) {
    return function override_getter(def_params) {
      const params = Params.parse(def_params, {
        app_settings: true,
        app_info: false,
        default: false
      });

      if (params.app_info && params.default) {
        return {
          value: parser(this._settings.get_default_value(setting.key).unpack()),
          app_info: null
        };
      }

      if (params.default) {
        return this._settings.get_default_value(setting.key).unpack();
      }

      const maximized_window = this.intellifader.get_current_maximized_window();

      if (maximized_window && this.check_overrides() && params.app_settings) {
        if (this.window_settings_manager[setting.name]) {
          const value = this.window_settings_manager[setting.name][maximized_window.get_wm_class()];
          if (value) {
            const window_setting = this._app_keys[setting.key];
            const window_parser = window_setting && window_setting.parser !== null
              ? window_setting.parser
              : input => input;
            if (value) {
              const result = window_parser(
                value,
                parser(this.settings_manager[setting.name]),
                maximized_window.get_wm_class(),
                true
              );
              if (params.app_info) {
                return { value: result, app_info: maximized_window.get_wm_class() };
              }
              return result;
            }
          }
        }
        if (this.intellifader._wm_tracker && this.app_settings_manager[setting.name]) {
          const shell_app = this.intellifader._wm_tracker.get_window_app(maximized_window);
          if (shell_app && shell_app.get_id()) {
            const app_id = shell_app.get_id();
            const app_setting = this._app_keys[setting.key];
            const app_parser = app_setting && app_setting.parser !== null //
              ? app_setting.parser
              : input => input;
            const value = this.app_settings_manager[setting.name][app_id];

            if (value) {
              const result = app_parser(value, parser(this.settings_manager[setting.name]), app_id);
              if (params.app_info) {
                return { value: result, app_info: app_id };
              }
              return result;
            }
          }
        }
      }
      if (params.app_info) {
        return { value: parser(this.settings_manager[setting.name]), app_info: null };
      }
      return parser(this.settings_manager[setting.name]);
    };
  }

  static gen_getter(setting, parser) {
    return function getter(def_params) {
      const params = Params.parse(def_params, {
        app_settings: true,
        app_info: false,
        default: false
      });

      if (params.app_info) {
        if (params.default) {
          return {
            value: parser(this._settings.get_default_value(setting.key).unpack()),
            app_info: null
          };
        }
        return { value: parser(this.settings_manager[setting.name]), app_info: null };
      }

      if (params.default) {
        return parser(this._settings.get_default_value(setting.key).unpack());
      }

      return parser(this.settings_manager[setting.name]);
    };
  }

  bind() {
    this.settings_manager = new SettingsManager(this._settings, this._keys);
    this.app_settings_manager = new AppSettingsManager(
      this._app_keys,
      this.get_app_overrides(),
      APP_OVERRIDES_SCHEMA_PATH
    );
    this.window_settings_manager = new AppSettingsManager(
      this._app_keys,
      this.get_window_overrides(),
      WINDOW_OVERRIDES_SCHEMA_PATH
    );

    for (let i = 0; i < this._keys.length; i += 1) {
      const setting = this._keys[i];

      /* Watch for changes */
      this.settingsBoundIds.push(
        this._settings.connect(`changed::${setting.key}`, () => {
          this.settings_manager.update(setting);
        })
      );

      if (setting.handler) {
        this.settingsBoundIds.push(
          this._settings.connect(`changed::${setting.key}`, () => {
            // TODO: Find a better way to handle settings being changed right
            // as the extension starts up.
            try {
              setting.handler.call(this);
            } catch (error) {
              log(`[Dynamic Panel Transparency] Error handling setting (${setting.key}) change.`);
              log(error);
            }
          })
        );
      }

      const parser = setting.parser !== null ? setting.parser : input => input;

      /* Add */
      let getter = this.constructor.gen_getter(setting, parser);

      if (this._overriden_keys.indexOf(setting.key) !== -1) {
        getter = this.constructor.gen_override_getter(setting, parser);
      }

      if (!setting.getter) {
        this[`get_${setting.name}`] = getter;
      } else {
        this[setting.getter] = getter;
      }
    }
  }

  unbind() {
    this.app_settings_manager.unbind();

    for (let i = 0; i < this.settingsBoundIds.length; i += 1) {
      this._settings.disconnect(this.settingsBoundIds[i]);
    }
  }
}

/* Basic class to hold settings values */
class SettingsManager {
  constructor(settings, params) {
    this.values = [];
    this.settings = settings;

    for (let i = 0; i < params.length; i += 1) {
      const setting = params[i];
      this.values.push(setting);

      if (this.settings.list_keys().indexOf(setting.key) !== -1 && setting) {
        const variant = GLib.VariantType.new(setting.type);
        if (variant.is_array() || variant.is_tuple()) {
          this[setting.name] = this.settings.get_value(setting.key).deep_unpack();
        } else {
          this[setting.name] = this.settings.get_value(setting.key).unpack();
        }
      }
    }
  }

  update(setting) {
    if (this.settings.list_keys().indexOf(setting.key) === -1) return;

    const variant = GLib.VariantType.new(setting.type);

    if (variant.is_array() || variant.is_tuple()) {
      this[setting.name] = this.settings.get_value(setting.key).deep_unpack();
    } else {
      this[setting.name] = this.settings.get_value(setting.key).unpack();
    }
  }
}

class AppSettingsManager {
  constructor(params, apps, path) {
    this.settings = {};
    this.settingsBoundIds = {};

    this.values = Object.keys(params).map((setting_key) => {
      const setting = params[setting_key];
      this[setting.name] = {};

      return setting;
    });

    for (let a = 0; a < apps.length; a += 1) {
      const app_id = apps[a];
      const app_path = `${path + app_id}/`;
      let sett = null;

      const obj = Convenience.getSchemaObj(Me, OVERRIDES_SCHEMA_ID);
      sett = new Gio.Settings({ path: app_path, settings_schema: obj });

      this.settings[app_id] = sett;

      Object.keys(params).forEach((setting_key) => {
        const setting = params[setting_key];

        if (!setting || this.settings[app_id].list_keys().indexOf(setting.key) === -1) {
          return;
        }

        if (!this.settingsBoundIds[app_id]) {
          this.settingsBoundIds[app_id] = [];
        }

        this.settingsBoundIds[app_id].push(
          this.settings[app_id].connect(`changed::${setting.key}`, () => {
            this.update(setting, app_id);
          })
        );

        const variant = GLib.VariantType.new(setting.type);

        if (variant.is_array() || variant.is_tuple()) {
          this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).deep_unpack();
        } else {
          this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).unpack();
        }
      });
    }
  }

  update(setting, app_id) {
    if (!setting || this.settings[app_id].list_keys().indexOf(setting.key) === -1) return;
    const variant = GLib.VariantType.new(setting.type);
    if (!this[setting.name]) this[setting.name] = {};
    if (variant.is_array() || variant.is_tuple()) {
      this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).deep_unpack();
    } else {
      this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).unpack();
    }
  }

  unbind() {
    Object.keys(this.settings).forEach((app_id) => {
      this.settingsBoundIds[app_id].forEach((id) => {
        this.settings[app_id].disconnect(id);
      });
    });
  }
}
