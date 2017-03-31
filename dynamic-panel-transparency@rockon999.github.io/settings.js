/* exported init, cleanup, add, add_app_setting, add_app_override, check_overrides, check_triggers, bind, unbind */

const Lang = imports.lang;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Params = imports.misc.params;

const Convenience = Me.imports.convenience;
const Events = Me.imports.events;
const Util = Me.imports.util;

const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;

/* This might impair visibility of the code, but it makes my life a thousand times simpler */
/* settings.js takes a key and watches for it to change in Gio.Settings & creates a getter for it. */
/* Also can parse, handle, etc. a setting. */

const WINDOW_OVERRIDES_SCHEMA_PATH = '/org/gnome/shell/extensions/dynamic-panel-transparency/windowOverrides/';
const APP_OVERRIDES_SCHEMA_PATH = '/org/gnome/shell/extensions/dynamic-panel-transparency/appOverrides/';
const OVERRIDES_SCHEMA_ID = 'org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides';

const SETTINGS_WINDOW_OVERRIDES = 'window-overrides';
const SETTINGS_APP_OVERRIDES = 'app-overrides';

const GNOME_BACKGROUND_SCHEMA = 'org.gnome.desktop.background';
const SETTINGS_SHOW_DESKTOP_ICONS = 'show-desktop-icons';

function init() {
    this._settings = Convenience.getSettings();
    this._background_settings = null;

    /* Setup background settings. */

    try {
        let schemaObj = Convenience.getSchemaObj(GNOME_BACKGROUND_SCHEMA, true);

        if (!Util.is_undef(schemaObj)) {
            this._background_settings = new Gio.Settings({
                settings_schema: schemaObj
            });
        }
    } catch (error) { } // eslint-disable-line

    this._keys = [];
    this._app_keys = {};
    this._overriden_keys = [];

    this.settingsBoundIds = [];

    this._app_overrides = this._settings.get_strv(SETTINGS_APP_OVERRIDES);
    this._window_overrides = this._settings.get_strv(SETTINGS_WINDOW_OVERRIDES);
    this._show_desktop_icons = null;

    if (this._background_settings) {
        this._show_desktop_icons = this._background_settings.get_boolean(SETTINGS_SHOW_DESKTOP_ICONS);
    }

    this.settingsBoundIds.push(this._settings.connect('changed::' + SETTINGS_APP_OVERRIDES, Lang.bind(this, function() {
        this._app_overrides = this._settings.get_strv(SETTINGS_APP_OVERRIDES);
        this.app_settings_manager.unbind();
        this.app_settings_manager = new AppSettingsManager(this._app_keys, this.get_app_overrides(), APP_OVERRIDES_SCHEMA_PATH);
    })));

    this.settingsBoundIds.push(this._settings.connect('changed::' + SETTINGS_WINDOW_OVERRIDES, Lang.bind(this, function() {
        this._window_overrides = this._settings.get_strv(SETTINGS_WINDOW_OVERRIDES);
        this.window_settings_manager.unbind();
        this.window_settings_manager = new AppSettingsManager(this._app_keys, this.get_window_overrides(), WINDOW_OVERRIDES_SCHEMA_PATH);
    })));

    if (this._background_settings) {
        this.settingsBoundIds.push(this._background_settings.connect('changed::' + SETTINGS_SHOW_DESKTOP_ICONS, Lang.bind(this, function() {
            this._show_desktop_icons = this._background_settings.get_boolean(SETTINGS_SHOW_DESKTOP_ICONS);
        })));
    }

    this.get_app_overrides = function() {
        return this._app_overrides;
    };

    this.get_window_overrides = function() {
        return this._window_overrides;
    };

    this.gs_show_desktop_icons = function() {
        return this._show_desktop_icons;
    };
}

function cleanup() {
    for (let i = 0; i < this._keys.length; ++i) {
        let setting = this._keys[i];
        if (Util.is_undef(setting.getter)) {
            this['get_' + setting.name] = null;
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
function add(params) {
    let key = {
        key: params.settings_key,
        name: params.name,
        type: params.type,
        parser: null,
        getter: null,
        handler: null
    };
    if (!Util.is_undef(params.getter))
        key.getter = params.getter;
    if (!Util.is_undef(params.handler))
        key.handler = params.handler;
    if (!Util.is_undef(params.parser))
        key.parser = params.parser;
    this._keys.push(key);
}

function add_app_setting(params) {
    let key = {
        key: params.settings_key,
        name: params.name,
        type: params.type,
        parser: null,
        getter: null,
        handler: null,
    };
    if (!Util.is_undef(params.getter))
        key.getter = params.getter;
    if (!Util.is_undef(params.handler))
        key.handler = params.handler;
    if (!Util.is_undef(params.parser))
        key.parser = params.parser;

    this._app_keys[params.settings_key] = key;
}

function add_app_override(params) {
    add_app_setting(params);
    this._overriden_keys.push(params.settings_key);
}

function check_overrides() {
    return (this.get_app_overrides().length > 0) || (this.get_window_overrides().length > 0);
}

function check_triggers() {
    return (this.get_trigger_apps().length > 0) || (this.get_trigger_windows().length > 0);
}

function bind() {
    this.settings_manager = new SettingsManager(this._settings, this._keys);
    this.app_settings_manager = new AppSettingsManager(this._app_keys, this.get_app_overrides(), APP_OVERRIDES_SCHEMA_PATH);
    this.window_settings_manager = new AppSettingsManager(this._app_keys, this.get_window_overrides(), WINDOW_OVERRIDES_SCHEMA_PATH);

    for (let i = 0; i < this._keys.length; ++i) {
        let setting = this._keys[i];

        /* Watch for changes */
        this.settingsBoundIds.push(this._settings.connect('changed::' + setting.key, Lang.bind(this, function() {
            this.settings_manager.update(setting);
        })));

        if (!Util.is_undef(setting.handler)) {
            this.settingsBoundIds.push(this._settings.connect('changed::' + setting.key, function() {
                // TODO: Find a better way to handle settings being changed right as the extension starts up.
                try {
                    setting.handler.call(this);
                } catch (e) {
                    log('[Dynamic Panel Transparency] Error handling setting (' + setting.key + ') change.');
                    log(e);
                }
            }));
        }

        let parser = (setting.parser !== null ? setting.parser : function(input) {
            return input;
        });

        let getter = function(params) {
            params = Params.parse(params, { app_settings: true, app_info: false, default: false });

            if (params.app_info) {
                if (params.default) {
                    return { value: parser(this._settings.get_default_value(setting.key).unpack()), app_info: null };
                }
                return { value: parser(this.settings_manager[setting.name]), app_info: null };
            }

            if (params.default) {
                return parser(this._settings.get_default_value(setting.key).unpack());
            }

            return parser(this.settings_manager[setting.name]);
        };

        /* Add function */

        if (this._overriden_keys.indexOf(setting.key) !== -1) {
            getter = function(params) {
                params = Params.parse(params, { app_settings: true, app_info: false, default: false });

                if (params.app_info && params.default) {
                    return { value: parser(this._settings.get_default_value(setting.key).unpack()), app_info: null };
                }

                if (params.default) {
                    return this._settings.get_default_value(setting.key).unpack();
                }

                let maximized_window = Events.get_current_maximized_window();

                if (!Util.is_undef(maximized_window) && this.check_overrides() && params.app_settings) {
                    if (!Util.is_undef(this.window_settings_manager[setting.name])) {
                        let value = this.window_settings_manager[setting.name][maximized_window.get_wm_class()];
                        if (!Util.is_undef(value)) {
                            let window_setting = this._app_keys[setting.key];
                            let window_parser = ((!Util.is_undef(window_setting) && window_setting.parser !== null) ? window_setting.parser : function(input) {
                                return input;
                            });
                            if (!Util.is_undef(value)) {
                                let result = window_parser(value, parser(this.settings_manager[setting.name]), maximized_window.get_wm_class(), true);
                                if (params.app_info) {
                                    return { value: result, app_info: maximized_window.get_wm_class() };
                                }
                                return result;
                            }
                        }
                    }
                    if (!Util.is_undef(Events._wm_tracker) && !Util.is_undef(this.app_settings_manager[setting.name])) {
                        let shell_app = Events._wm_tracker.get_window_app(maximized_window);
                        if (!Util.is_undef(shell_app) && !Util.is_undef(shell_app.get_id())) {
                            let app_id = shell_app.get_id();
                            let app_setting = this._app_keys[setting.key];
                            let app_parser = ((!Util.is_undef(app_setting) && app_setting.parser !== null) ? app_setting.parser : function(input) {
                                return input;
                            });
                            let value = this.app_settings_manager[setting.name][app_id];

                            if (!Util.is_undef(value)) {
                                let result = app_parser(value, parser(this.settings_manager[setting.name]), app_id);
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

        if (Util.is_undef(setting.getter)) {
            this['get_' + setting.name] = getter;
        } else {
            this[setting.getter] = getter;
        }
    }
}

function unbind() {
    this.app_settings_manager.unbind();

    for (let i = 0; i < this.settingsBoundIds.length; ++i) {
        this._settings.disconnect(this.settingsBoundIds[i]);
    }
}

/* Basic class to hold settings values */
const SettingsManager = new Lang.Class({
    Name: 'DynamicPanelTransparency_SettingsManager',
    _init: function(settings, params) {

        this.values = [];
        this.settings = settings;

        for (let i = 0; i < params.length; ++i) {
            let setting = params[i];
            this.values.push(setting);
            if (this.settings.list_keys().indexOf(setting.key) === -1 || Util.is_undef(setting))
                continue;
            let variant = GLib.VariantType.new(setting.type);
            if (variant.is_array() || variant.is_tuple()) {
                this[setting.name] = this.settings.get_value(setting.key).deep_unpack();
            } else {
                this[setting.name] = this.settings.get_value(setting.key).unpack();
            }
        }
    },
    update: function(setting) {
        if (this.settings.list_keys().indexOf(setting.key) === -1)
            return;

        let variant = GLib.VariantType.new(setting.type);

        if (variant.is_array() || variant.is_tuple()) {
            this[setting.name] = this.settings.get_value(setting.key).deep_unpack();
        } else {
            this[setting.name] = this.settings.get_value(setting.key).unpack();
        }
    }
});

const AppSettingsManager = new Lang.Class({
    Name: 'DynamicPanelTransparency_AppSettingsManager',
    _init: function(params, apps, path) {
        this.values = [];
        this.settings = {};
        this.settingsBoundIds = {};

        for (let setting_key of Object.keys(params)) {
            let setting = params[setting_key];
            this[setting.name] = {};

            this.values.push(setting);
        }

        for (let a = 0; a < apps.length; ++a) {
            let app_id = apps[a];
            let app_path = path + app_id + '/';
            let sett = null;

            let obj = Convenience.getSchemaObj(OVERRIDES_SCHEMA_ID);
            sett = new Gio.Settings({ path: app_path, settings_schema: obj });

            this.settings[app_id] = sett;

            for (let setting_key of Object.keys(params)) {
                let setting = params[setting_key];

                if (Util.is_undef(setting) || this.settings[app_id].list_keys().indexOf(setting.key) === -1) {
                    continue;
                }

                if (Util.is_undef(this.settingsBoundIds[app_id])) {
                    this.settingsBoundIds[app_id] = [];
                }

                this.settingsBoundIds[app_id].push(this.settings[app_id].connect('changed::' + setting.key, Lang.bind(this, function() {
                    this.update(setting, app_id);
                })));

                let variant = GLib.VariantType.new(setting.type);

                if (variant.is_array() || variant.is_tuple()) {
                    this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).deep_unpack();
                } else {
                    this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).unpack();
                }
            }
        }
    },
    update: function(setting, app_id) {
        if (Util.is_undef(setting) || this.settings[app_id].list_keys().indexOf(setting.key) === -1)
            return;
        let variant = GLib.VariantType.new(setting.type);
        if (Util.is_undef(this[setting.name]))
            this[setting.name] = {};
        if (variant.is_array() || variant.is_tuple()) {
            this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).deep_unpack();
        } else {
            this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).unpack();
        }
    },
    unbind: function() {
        for (let app_id of Object.keys(this.settings)) {
            for (let id of this.settingsBoundIds[app_id]) {
                this.settings[app_id].disconnect(id);
            }
        }
    }
});