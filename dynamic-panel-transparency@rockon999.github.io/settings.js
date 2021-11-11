import Gio from 'gi://Gio';

import * as Util from './util.js';
import { extensionUtils } from './shell.js';

const GNOME_BACKGROUND_SCHEMA = 'org.gnome.desktop.wm.keybindings';
const SETTINGS_SHOW_DESKTOP = 'show-desktop';

const GNOME_INTERFACE_SCHEMA = 'org.gnome.desktop.interface';
const SETTINGS_ENABLE_ANIMATIONS = 'enable-animations';

/** @typedef {import('./theming.js').Color} Color */

export class Settings {
    constructor() {
        this._settings = extensionUtils.getSettings();
        this._background_settings = null;
        this._interface_settings = null;

        /* Setup background settings. */

        try {
            let schemaObj = extensionUtils.getSchemaObj(GNOME_BACKGROUND_SCHEMA, true);

            if (schemaObj) {
                this._background_settings = new Gio.Settings({
                    settings_schema: schemaObj,
                });
            }
        } catch (error) {} // eslint-disable-line

        try {
            let schemaObj = extensionUtils.getSchemaObj(GNOME_INTERFACE_SCHEMA, true);

            if (schemaObj) {
                this._interface_settings = new Gio.Settings({
                    settings_schema: schemaObj,
                });
            }
        } catch (error) {} // eslint-disable-line

        this._keys = [];
        this._app_keys = {};
        this._overriden_keys = [];

        this.settingsBoundIds = [];

        this._show_desktop = null;

        if (this._background_settings) {
            this._show_desktop =
                this._background_settings.get_strv(SETTINGS_SHOW_DESKTOP).length > 0;

            this.settingsBoundIds.push(
                this._background_settings.connect('changed::' + SETTINGS_SHOW_DESKTOP, () => {
                    this._show_desktop =
                        this._background_settings.get_strv(SETTINGS_SHOW_DESKTOP).length > 0;
                })
            );
        }

        if (this._interface_settings) {
            this._enable_animations = this._interface_settings.get_boolean(
                SETTINGS_ENABLE_ANIMATIONS
            );

            this.settingsBoundIds.push(
                this._interface_settings.connect('changed::' + SETTINGS_ENABLE_ANIMATIONS, () => {
                    this._enable_animations = this._interface_settings.get_boolean(
                        SETTINGS_ENABLE_ANIMATIONS
                    );
                })
            );
        }

        this.gs_show_desktop = function () {
            return this._show_desktop;
        };

        this.gs_enable_animations = function () {
            return this._enable_animations;
        };
    }

    cleanup() {
        this.settingsBoundIds = null;
        this._settings = null;
    }

    unbind() {
        for (let i = 0; i < this.settingsBoundIds.length; ++i) {
            this._settings.disconnect(this.settingsBoundIds[i]);
        }
    }

    on(key, handler) {
        this.settingsBoundIds.push(
            this._settings.connect('changed::' + key, function () {
                // TODO: Find a better way to handle settings being changed right as the extension starts up.
                try {
                    handler.call(this);
                } catch (error) {
                    log(
                        '[Dynamic Panel Transparency] Error handling setting (' + key + ') change.'
                    );
                    log(error);
                }
            })
        );
    }

    get_hide_corners() {
        return this._settings.get_boolean('hide-corners');
    }

    get_transition_speed() {
        return this._settings.get_int('transition-speed');
    }

    get_unmaximized_opacity() {
        return this._settings.get_int('unmaximized-opacity');
    }

    get_maximized_opacity() {
        return this._settings.get_int('maximized-opacity');
    }

    get_panel_color() {
        return Util.tuple_to_native_color(this._settings.get_value('panel-color').deep_unpack());
    }

    add_text_shadow() {
        return this._settings.get_boolean('text-shadow');
    }

    add_icon_shadow() {
        return this._settings.get_boolean('icon-shadow');
    }

    get_tuple(key, parser) {
        const value = this._settings.get_value(key).deep_unpack();
        return parser?.(value) ?? value;
    }

    /**
     * @returns {[number, number, number]}
     */
    get_text_shadow_position() {
        return this.get_tuple('text-shadow-position');
    }

    /**
     * @returns {[number, number, number]}
     */
    get_icon_shadow_position() {
        return this.get_tuple('icon-shadow-position');
    }

    /**
     * @returns {Color}
     */
    get_icon_shadow_color() {
        return this.get_tuple('icon-shadow-color', Util.tuple_to_native_color);
    }

    /**
     * @returns {Color}
     */
    get_text_shadow_color() {
        return this.get_tuple('text-shadow-color', Util.tuple_to_native_color);
    }

    /**
     * @returns {Color}
     */
    get_text_color() {
        return this.get_tuple('text-color', Util.tuple_to_native_color);
    }

    /**
     * @returns {Color}
     */
    get_maximized_text_color() {
        return this.get_tuple('maximized-text-color', Util.tuple_to_native_color);
    }

    get_enable_maximized_text_color() {
        return this._settings.get_boolean('enable-maximized-text-color');
    }

    remove_panel_styling() {
        return this._settings.get_boolean('remove-panel-styling');
    }

    get_enable_overview_text_color() {
        return this._settings.get_boolean('enable-overview-text-color');
    }

    get_enable_text_color() {
        return this._settings.get_boolean('enable-text-color');
    }

    enable_custom_opacity() {
        return this._settings.get_boolean('enable-opacity');
    }

    enable_custom_background_color() {
        return this._settings.get_boolean('enable-background-color');
    }

    transition_with_overview() {
        return this._settings.get_boolean('transition-with-overview');
    }

    transition_when_windows_touch_panel() {
        return this._settings.get_boolean('transition-windows-touch');
    }
}
