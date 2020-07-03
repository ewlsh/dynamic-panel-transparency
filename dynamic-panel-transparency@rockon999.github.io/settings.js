/* exported init, cleanup, add, bind, unbind */

const Lang = imports.lang;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Params = imports.misc.params;

const Convenience = Me.imports.convenience;
const Intellifade = Me.imports.intellifade;

const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;

/* This might impair visibility of the code, but it makes my life a thousand times simpler */
/* settings.js takes a key and watches for it to change in Gio.Settings & creates a getter for it. */
/* Also can parse, handle, etc. a setting. */

const WINDOW_OVERRIDES_SCHEMA_PATH = '/org/gnome/shell/extensions/dynamic-panel-transparency/windowOverrides/';
const APP_OVERRIDES_SCHEMA_PATH = '/org/gnome/shell/extensions/dynamic-panel-transparency/appOverrides/';
const OVERRIDES_SCHEMA_ID = 'org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides';

const GNOME_BACKGROUND_SCHEMA = 'org.gnome.desktop.wm.keybindings';
const SETTINGS_SHOW_DESKTOP = 'show-desktop';

const GNOME_INTERFACE_SCHEMA = 'org.gnome.desktop.interface';
const SETTINGS_ENABLE_ANIMATIONS = 'enable-animations';

function init() {
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
    this._app_keys = {};
    this._overriden_keys = [];

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

    this.gs_show_desktop = function() {
        return this._show_desktop;
    };

    this.gs_enable_animations = function() {
        return this._enable_animations;
    };
}

function cleanup() {
    for (let i = 0; i < this._keys.length; ++i) {
        let setting = this._keys[i];
        if (!setting.getter) {
            this['get_' + setting.name] = null;
        } else {
            this[setting.getter] = null;
        }
    }

    this._keys = null;
    this.settingsBoundIds = null;
    this._settings = null;
}

/* Settings Management */
function add(params) {
    let key = {
        key: params.key,
        name: params.name,
        type: params.type,
        parser: null,
        getter: null,
        handler: null
    };

    if (typeof(params.getter) !== 'undefined')
        key.getter = params.getter;
    if (typeof(params.handler)!== 'undefined')
        key.handler = params.handler;
    if (typeof(params.parser) !== 'undefined')
        key.parser = params.parser;

    this._keys.push(key);
}

function bind() {
    this.settings_manager = new SettingsManager(this._settings, this._keys);

    for (let i = 0; i < this._keys.length; ++i) {
        let setting = this._keys[i];

        /* Watch for changes */
        this.settingsBoundIds.push(this._settings.connect('changed::' + setting.key, (function() {
            this.settings_manager.update(setting);
        }).bind(this)));

        if (setting.handler) {
            this.settingsBoundIds.push(this._settings.connect('changed::' + setting.key, function() {
                // TODO: Find a better way to handle settings being changed right as the extension starts up.
                try {
                    setting.handler.call(this);
                } catch (error) {
                    log('[Dynamic Panel Transparency] Error handling setting (' + setting.key + ') change.');
                    log(error);
                }
            }));
        }

        let parser = (setting.parser !== null ? setting.parser : function(input) {
            return input;
        });

        let getter = function() {
            return parser(this.settings_manager[setting.name]);
        };

        if (!setting.getter) {
            this['get_' + setting.name] = getter;
        } else {
            this[setting.getter] = getter;
        }
    }
}

function unbind() {
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
            if (this.settings.list_keys().indexOf(setting.key) === -1 || !setting)
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

                if (!setting || this.settings[app_id].list_keys().indexOf(setting.key) === -1) {
                    continue;
                }

                if (!this.settingsBoundIds[app_id]) {
                    this.settingsBoundIds[app_id] = [];
                }

                this.settingsBoundIds[app_id].push(this.settings[app_id].connect('changed::' + setting.key, (function() {
                    this.update(setting, app_id);
                }).bind(this)));

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
        if (!setting || this.settings[app_id].list_keys().indexOf(setting.key) === -1)
            return;
        let variant = GLib.VariantType.new(setting.type);
        if (!this[setting.name])
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