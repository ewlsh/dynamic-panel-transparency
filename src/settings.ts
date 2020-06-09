import type * as gio from 'gio';

import * as Util from './util';
import * as Convenience from './convenience';

const Params = imports.misc.params;

const { GLib, Gio } = imports.gi;

const GNOME_BACKGROUND_SCHEMA = 'org.gnome.desktop.wm.keybindings';
const SETTINGS_SHOW_DESKTOP = 'show-desktop';

const GNOME_INTERFACE_SCHEMA = 'org.gnome.desktop.interface';
const SETTINGS_ENABLE_ANIMATIONS = 'enable-animations';

/**
 * @typedef SettingsKey
 * @property {string} key
 * @property {string} name
 * @property {string} type
 * @property {string} [getter]
 * @property {(t: any) => void} [handler]
 * @property {(t: any) => any} [parser]
 * @property {BooleanConstructor | StringConstructor | NumberConstructor | ArrayConstructor | null} [returnType]
 */

/* Basic class to hold settings values */
class SettingsManager {
    definitions: any[];
    values: { [key: string]: any};
    settings: gio.Settings;

    constructor(settings: any) {
        /** @type {SettingsKey[]} */
        this.definitions = [];
        /** @type {{ [key: string]: any }} */
        this.values = {};
        this.settings = settings;
    }

    /**
     * @param {SettingsKey} setting
     */
    add(setting: { key: any; type: string; name: string | number; }) {
        this.definitions.push(setting);
        if (this.settings.list_keys().indexOf(setting.key) === -1 || !setting)
            return;
        let variant = GLib.VariantType.new(setting.type);
        if (variant.is_array() || variant.is_tuple()) {
            this.values[setting.name] = this.settings.get_value(setting.key).deep_unpack();
        } else {
            this.values[setting.name] = this.settings.get_value(setting.key).unpack();
        }
    }

    /**
     * @param {SettingsKey} setting
     */
    update(setting: { key: any; type: string; name: string | number; }) {
        if (this.settings.list_keys().indexOf(setting.key) === -1)
            return;

        let variant = GLib.VariantType.new(setting.type);

        if (variant.is_array() || variant.is_tuple()) {
            this.values[setting.name] = this.settings.get_value(setting.key).deep_unpack();
        } else {
            this.values[setting.name] = this.settings.get_value(setting.key).unpack();
        }
    }
};

class Settings {
    settings_manager: any;
    settingsBoundIds: any;
    _settings: any;
    _keys: any;
    _background_settings: any;
    _interface_settings: any;
    _show_desktop: any;
    _enable_animations: any;
    _useWallpaper: any;
    _transitionSpeed: any;
    _unmaximizedOpacity: any;
    _maximizedOpacity: any;
    _panelColor: any;
    _themeOpacity: any;
    _forceThemeUpdate: any;
    _textShadow: any;
    _iconShadow: any;
    _enableMaximizedTextColor: any;
    _removePanelStyling: any;
    _enable_overview_text_color: any;
    _enable_text_color: any;
    _enable_opacity: any;
    _enable_background_color: any;
    _transition_with_overview: any;
    _transition_windows_touch: any;
    /**
     *
     * @type {<T extends SettingsKey>(key: T) => (
        () =>
          T["returnType"] extends BooleanConstructor ? boolean :
          T["returnType"] extends StringConstructor ? string :
          T["returnType"] extends NumberConstructor ? number :
          T["returnType"] extends ArrayConstructor ? any[] : any
        )}
     */
    fromKey(setting: { key: string; handler: { call: (arg0: any) => void; }; parser: (input: any) => any; name: string | number; }) {
        this.settings_manager.add(setting);

        /* Watch for changes */
        this.settingsBoundIds.push(this._settings.connect('changed::' + setting.key, () => {
            this.settings_manager.update(setting);
        }));

        if (setting.handler) {
            this.settingsBoundIds.push(this._settings.connect('changed::' + setting.key, function() {
                try {
                    setting.handler.call(this);
                } catch (error) {
                    log('[Dynamic Panel Transparency] Error handling setting (' + setting.key + ') change.');
                    log(error);
                }
            }));
        }

        const parser = setting.parser || ((input: any) => {
            return input;
        });

        const getter = (params: { default: any; }) => {
            params = Params.parse(params, { default: false });

            if (params.default) {
                return parser(this._settings.get_default_value(setting.key).unpack());
            }

            return parser(this.settings_manager.values[setting.name]);
        };

        return getter;
    }

    cleanup() {
        for (let i = 0; i < this.settingsBoundIds.length; ++i) {
            this._settings.disconnect(this.settingsBoundIds[i]);
        }

        this._keys = null;
        this.settingsBoundIds = null;
        this._settings = null;
    }

    constructor() {
        this._settings = Convenience.getSettings();
        this._background_settings = null;
        this._interface_settings = null;

        /* Setup background settings. */

        try {
            let schemaObj = Convenience.getSchemaObj(GNOME_BACKGROUND_SCHEMA, true);

            if (schemaObj) {
                this._background_settings = new Gio.Settings({
                    settings_schema: schemaObj
                });
            }
        } catch (error) { } // eslint-disable-line

        try {
            let schemaObj = Convenience.getSchemaObj(GNOME_INTERFACE_SCHEMA, true);

            if (schemaObj) {
                this._interface_settings = new Gio.Settings({
                    settings_schema: schemaObj
                });
            }
        } catch (error) { } // eslint-disable-line

        this._keys = [];

        this.settingsBoundIds = [];

        this._show_desktop = null;

        if (this._background_settings) {
            this._show_desktop = this._background_settings.get_strv(SETTINGS_SHOW_DESKTOP).length > 0;

            this.settingsBoundIds.push(this._background_settings.connect('changed::' + SETTINGS_SHOW_DESKTOP, (function() {
                this._show_desktop = this._background_settings.get_strv(SETTINGS_SHOW_DESKTOP).length > 0;
            }).bind(this)));
        }

        if (this._interface_settings) {
            this._enable_animations = this._interface_settings.get_boolean(SETTINGS_ENABLE_ANIMATIONS);

            this.settingsBoundIds.push(this._interface_settings.connect('changed::' + SETTINGS_ENABLE_ANIMATIONS, (function() {
                this._enable_animations = this._interface_settings.get_boolean(SETTINGS_ENABLE_ANIMATIONS);
            }).bind(this)));
        }

        const fromKey = this.fromKey.bind(this);

        this.settings_manager = new SettingsManager(this._settings);

        this._useWallpaper = fromKey({
            key: 'use-wallpaper',
            name: '',
            type: 'b',
            returnType: Boolean
        });

        /* Register settings... */
        this._transitionSpeed = fromKey({
            key: 'transition-speed',
            name: 'transition_speed',
            type: 'i',
            returnType: Number
        });
        this._unmaximizedOpacity = fromKey({
            key: 'unmaximized-opacity',
            name: 'unmaximized_opacity',
            type: 'i',
            getter: 'get_unmaximized_opacity',
            returnType: Number
        });
        this._maximizedOpacity = fromKey({
            key: 'maximized-opacity',
            name: 'maximized_opacity',
            type: 'i',
            getter: 'get_maximized_opacity',
            returnType: Number
        });
        this._panelColor = fromKey({
            key: 'panel-color',
            name: 'panel_color',
            type: 'ai',
            parser: Util.tuple_to_native_color,
            returnType: Array,
        });
        this._themeOpacity = fromKey({
            key: 'theme-opacity',
            name: 'theme_opacity',
            type: 'i',
            returnType: Number
        });
        this._forceThemeUpdate = fromKey({
            key: 'force-theme-update',
            name: 'force_theme_update',
            type: 'b',
            getter: 'force_theme_update',
            returnType: Boolean
        });
        this._textShadow = fromKey({
            key: 'text-shadow',
            name: 'text_shadow',
            type: 'b',
            getter: 'add_text_shadow',
            returnType: Boolean
        });
        this._iconShadow = fromKey({
            key: 'icon-shadow',
            name: 'icon_shadow',
            type: 'b',
            getter: 'add_icon_shadow',
            returnType: Boolean
        });
        this._enableMaximizedTextColor = fromKey({
            key: 'enable-maximized-text-color',
            name: 'enable_maximized_text_color',
            type: 'b',
            returnType: Boolean
        });
        this._removePanelStyling = fromKey({
            key: 'remove-panel-styling',
            name: 'remove_panel_styling',
            getter: 'remove_panel_styling',
            type: 'b',
            returnType: Boolean
        });
        this._enable_overview_text_color = fromKey({
            key: 'enable-overview-text-color',
            name: 'enable_overview_text_color',
            type: 'b',
            returnType: Boolean
        });
        this._enable_text_color = fromKey({
            key: 'enable-text-color',
            name: 'enable_text_color',
            type: 'b',
            returnType: Boolean
        });
        this._enable_opacity = fromKey({
            key: 'enable-opacity',
            name: 'enable_custom_opacity',
            getter: 'enable_custom_opacity',
            type: 'b',
            returnType: Boolean
        });
        this._enable_background_color = fromKey({
            key: 'enable-background-color',
            name: 'enable_custom_background_color',
            getter: 'enable_custom_background_color',
            type: 'b',
            returnType: Boolean
        });
        this._transition_with_overview = fromKey({
            key: 'transition-with-overview',
            name: 'transition_with_overview',
            getter: 'transition_with_overview',
            type: 'b',
            returnType: Boolean
        });
        this._transition_windows_touch = fromKey({
            key: 'transition-windows-touch',
            name: 'transition_windows_touch',
            getter: 'transition_when_windows_touch_panel',
            type: 'b',
            returnType: Boolean
        });
    }

    gs_show_desktop() {
        return this._show_desktop;
    };

    gs_enable_animations() {
        return this._enable_animations;
    };

    transitionWithOverview() {
        return this._transition_with_overview;
    }

    panelColor() {
        return this._panelColor();
    }

    enableCustomBackgroundColor() {
        return this._enable_background_color();
    }

    useWallpaper() {
        return this._useWallpaper();
    }

    enableMaximizedTextColor() {
        return this._enableMaximizedTextColor();
    }
    enableOverviewTextColor() {
        return this._enable_overview_text_color();
    }
    addTextShadow() {
        return this._textShadow();
    }
    addIconShadow() {
        return this._iconShadow();
    }
    enableTextColor() {
        return this._enable_text_color();
    }
}

/** @type {Settings} */
let settings: Settings;

export function init() {
    if (settings) {
        settings.cleanup();
        settings = null;
    }

    settings = new Settings();
}

export function cleanup() {
    settings.cleanup();
    settings = null;
}

/**
 * @return {Settings}
 */
export function get() {
    return settings;
}
