const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Transitions = Me.imports.transitions;
const Theming = Me.imports.theming;
const Extension = Me.imports.extension;
//const Settings = this;
const Util = Me.imports.util;
const Main = imports.ui.main;
const Lang = imports.lang;
const Config = imports.misc.config;
const Panel = Main.panel;
const Shell = imports.gi.Shell;
const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Events = Me.imports.events;
/* This might impair visibility of the code, but it makes my life a thousand times simpler */
/* Dynamic settings takes a key and watches for it to change in Gio.Settings & creates a getter for it */

const APP_SETTINGS_PARAMS = [
    { key: 'maximized-opacity', name: 'maximized_opacity', type: '(bi)' },
    { key: 'panel-color', name: 'panel_color', type: '(bai)' }];

const APP_SETTINGS_KEYS = ['maximized-opacity', 'panel-color'];

const APP_SETTINGS_OVERRIDES = { 'detect-user-theme': false }

function init() {
    this.settings = Convenience.getSettings();
    this.app_settings_enabled = false;
    this.keys = [];
    this.defaults = {};
    this.settingsBoundIds = [];
}

function cleanup() {
    this.app_settings_manager.cleanup();

    for (let i = 0; i < keys.length; ++i) {
        let setting = keys[i];
        if (Util.is_undef(setting.getter)) {
            this['get_' + setting.name] = null;
        } else {
            this[setting.getter] = null;
        }
    }
    this.keys = null;
    this.defaults = null;
    this.settingsBoundIds = null;
    this.settings = null;
    this.app_settings_enabled = null;
}

/* Settings Management */

function add(params) {
    let key = {
        key: params.settings_key,
        name: params.name,
        type: params.type,
        getter: null,
        handler: null
    };
    if (!Util.is_undef(params.getter))
        key.getter = params.getter;
    if (!Util.is_undef(params.handler))
        key.handler = params.handler;
    this.keys[this.keys.length] = key;
    this.defaults[params.name] = params.default;
}

function load_app_overrides() {
    this.app_settings_manager = new AppSettingsManager(APP_SETTINGS_PARAMS, get_app_overrides());
}

function check_app_settings() {
    return (get_app_overrides().length > 0) || (get_trigger_apps().length > 0);
}

function bind_app_overrides() {
    let app_overrides = get_app_overrides();
    for (let app_id of app_overrides) {
        for (let i = 0; i < APP_SETTINGS_PARAMS.length; ++i) {
            let setting = APP_SETTINGS_PARAMS[i];

            if (!Util.is_undef(this.app_settings_manager[setting]) && !Util.is_undef(setting)) {
                /* Watch for changes */
                this.settingsBoundIds.push(this.settings.connect('changed::' + setting.key, Lang.bind(this, function () {
                    this.app_settings_manager.update(setting, app_id);
                })));
            }
        }
    }
}

function bind() {

    this.settings_manager = new SettingsManager(this.settings, this.keys);

    for (let i = 0; i < this.keys.length; ++i) {
        let setting = this.keys[i];

        /* Watch for changes */
        this.settingsBoundIds.push(this.settings.connect('changed::' + setting.key, Lang.bind(this, function () {
            this.settings_manager.update(setting);
        })));

        if (!Util.is_undef(setting.handler)) {
            this.settingsBoundIds.push(this.settings.connect('changed::' + setting.key, setting.handler));
        }


        let getter = function () {
            if (!Util.is_undef(this.settings_manager) && !Util.is_undef(this.settings_manager[setting.name])) {
                return this.settings_manager[setting.name];
            } else {
                return this.defaults[setting.name];
            }
        }

        /* Add function */
        if (APP_SETTINGS_KEYS.indexOf(setting.key) !== -1) {

            getter = function () {
                let override = APP_SETTINGS_OVERRIDES[setting.key];

                if (!Util.is_undef(override)) {
                    return override;
                }

                let maximized_window = Events.get_current_maximized_window();

                if (!Util.is_undef(maximized_window) && this.check_app_settings() && !Util.is_undef(this.app_settings_manager[setting.name])) {

                    let shell_app = Util.get_app(maximized_window);

                    if (!Util.is_undef(shell_app)) {
                        let app_id = shell_app.get_id();
                        if (!Util.is_undef(app_id)) {

                            let value = this.app_settings_manager[setting.name][app_id];
                            if (!Util.is_undef(value) && !Util.is_undef(value[1]) && value[0]) {
                                return value[1];
                            }
                        }
                    }
                }

                if (!Util.is_undef(this.settings_manager) && !Util.is_undef(this.settings_manager[setting.name])) {
                    return this.settings_manager[setting.name];
                } else {
                    return this.defaults[setting.name];
                }
            }
        }

        if (Util.is_undef(setting.getter)) {
            this['get_' + setting.name] = getter;
        } else {
            this[setting.getter] = getter;
        }
    }
}

function unbind() {
    for (let i = 0; i < this.settingsBoundIds.length; ++i) {
        this.settings.disconnect(this.settingsBoundIds[i]);
    }
}

/* Basic class to hold settings values */
const SettingsManager = new Lang.Class({
    Name: 'DynamicPanelTransparency_SettingsManager',
    _init: function (settings, params) {

        this.values = [];
        this.settings = settings;

        for (let i = 0; i < params.length; ++i) {
            let setting = params[i];
            this.values.push(setting);
            if (this.settings.list_keys().indexOf(setting.key) == -1 || Util.is_undef(setting))
                continue;
            let variant = GLib.VariantType.new(setting.type);
            if (variant.is_array() || variant.is_tuple()) {
                this[setting.name] = this.settings.get_value(setting.key).deep_unpack();
            } else {
                this[setting.name] = this.settings.get_value(setting.key).unpack();
            }
        }
    },
    update: function (setting) {
        if (this.settings.list_keys().indexOf(setting.key) == -1)
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
    _init: function (params, apps) {
        let b = 1;
        this.values = [];
        this.settings = {};
        this.settingsBoundIds = {};

        for (let a = 0; a < apps.length; ++a) {
            let app_id = apps[a];
            //let app = apps[a].split(".")[0];
            let path = '/org/gnome/shell/extensions/dynamic-shell-transparency/appOverrides/' + app_id + "/";
            let sett = null;

            let obj = Convenience.getSchemaObj('org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides');
            sett = new Gio.Settings({ path: path, settings_schema: obj });

            this.settings[app_id] = sett;

            for (let i = 0; i < params.length; ++i) {
                let setting = params[i];
                this.values.push(setting);
                if (Util.is_undef(setting) || this.settings[app_id].list_keys().indexOf(setting.key) == -1) {
                    log('continued');
                    continue;

                }
                if (this.settingsBoundIds[app_id] == null)
                    this.settingsBoundIds[app_id] = [];
                this.settingsBoundIds[app_id].push(this.settings[app_id].connect('changed::' + setting.key, Lang.bind(this, function () {
                    this.update(setting, app_id);
                })));
                let variant = GLib.VariantType.new(setting.type);
                if (Util.is_undef(this[setting.name]))
                    this[setting.name] = {};
                if (variant.is_array() || variant.is_tuple()) {
                    this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).deep_unpack();
            } else {
                    this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).unpack();
                }
            }
        }
    },
    update: function (setting, app_id) {
        if (Util.is_undef(setting) || this.settings[app_id].list_keys().indexOf(setting.key) == -1)
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
    cleanup: function () {
        for (let app_id in Object.keys(this.settings)) {
            for (let id in this.settingsBoundIds[app_id]) {
                this.settings[app_id].disconnect(id);
            }
        }
    }
});