/* exported init, cleanup, add, add_app_override, check_app_settings, bind, unbind, bind_app_settings */

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;

const Util = Me.imports.util;
const Lang = imports.lang;

const Params = imports.misc.params;

const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Events = Me.imports.events;

/* This might impair visibility of the code, but it makes my life a thousand times simpler */
/* Dynamic settings takes a key and watches for it to change in Gio.Settings & creates a getter for it. */
/* Also can parse, handle, etc. a setting. */

function init() {
    this.settings = Convenience.getSettings();
    this.keys = [];
    this.app_keys = {};
    this.overriden_keys = [];
    this.settingsBoundIds = [];
    this._app_overrides = this.settings.get_strv('app-overrides');
    this._window_overrides = this.settings.get_strv('window-overrides');

    this.settingsBoundIds.push(this.settings.connect('changed::app-overrides', Lang.bind(this, function () {
        this._app_overrides = this.settings.get_strv('app-overrides');
        this.app_settings_manager.unbind();
        this.app_settings_manager = new AppSettingsManager(this.app_keys, this.get_app_overrides(), '/org/gnome/shell/extensions/dynamic-shell-transparency/appOverrides/');
    })));

    this.settingsBoundIds.push(this.settings.connect('changed::window-overrides', Lang.bind(this, function () {
        this._window_overrides = this.settings.get_strv('window-overrides');
        this.window_settings_manager.unbind();
        this.window_settings_manager = new AppSettingsManager(this.app_keys, this.get_window_overrides(), '/org/gnome/shell/extensions/dynamic-shell-transparency/windowOverrides/');
    })));

    this.get_app_overrides = function () {
        return this._app_overrides;
    };

    this.get_window_overrides = function () {
        return this._window_overrides;
    };
}

function cleanup() {
    for (let i = 0; i < this.keys.length; ++i) {
        let setting = this.keys[i];
        if (Util.is_undef(setting.getter)) {
            this['get_' + setting.name] = null;
        } else {
            this[setting.getter] = null;
        }
    }

    this.keys = null;
    this.app_keys = null;
    this.overriden_keys = null;
    this._app_overrides = null;
    this.settingsBoundIds = null;
    this.settings = null;
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
    this.keys.push(key);
}

function add_app_setting(params) {
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
    this.app_keys[params.settings_key] = key;
}

function add_app_override(params) {
    add_app_setting(params);
    this.overriden_keys.push(params.settings_key);

}

function check_app_settings() {
    return (this.get_app_overrides().length > 0) || (this.get_window_overrides().length > 0) || (this.get_trigger_apps().length > 0) || (this.get_trigger_windows().length > 0);
}

// TODO: Determine if this code is completely useless.
// function bind_app_settings(){for(let a of this.get_app_overrides())for(let b of Object.keys(this.app_keys)){let c=this.app_keys[b];Util.is_undef(this.app_settings_manager[c])||Util.is_undef(c)||this.settingsBoundIds.push(this.settings.connect("changed::"+c.key,Lang.bind(this,function(){this.app_settings_manager.update(c,a)})))}for(let b of this.get_window_overrides())for(let a of Object.keys(this.app_keys)){let c=this.app_keys[a];Util.is_undef(this.window_settings_manager[c])||Util.is_undef(c)||this.settingsBoundIds.push(this.settings.connect("changed::"+c.key,Lang.bind(this,function(){this.window_settings_manager.update(c,b)})))}}

function bind() {
    this.settings_manager = new SettingsManager(this.settings, this.keys);
    this.app_settings_manager = new AppSettingsManager(this.app_keys, this.get_app_overrides(), '/org/gnome/shell/extensions/dynamic-shell-transparency/appOverrides/');
    this.window_settings_manager = new AppSettingsManager(this.app_keys, this.get_window_overrides(), '/org/gnome/shell/extensions/dynamic-shell-transparency/windowOverrides/');

    for (let i = 0; i < this.keys.length; ++i) {
        let setting = this.keys[i];

        /* Watch for changes */
        this.settingsBoundIds.push(this.settings.connect('changed::' + setting.key, Lang.bind(this, function () {
            this.settings_manager.update(setting);
        })));

        if (!Util.is_undef(setting.handler)) {
            this.settingsBoundIds.push(this.settings.connect('changed::' + setting.key, setting.handler));
        }

        let parser = (setting.parser !== null ? setting.parser : function (input) {
            return input;
        });

        let getter = function (params) {
            params = Params.parse(params, { app_settings: true, app_info: false, default: false });

            if (params.app_info) {
                if (params.default) {
                    return { value: parser(this.settings.get_default_value(setting.key).unpack()), app_info: null };
                }
                return { value: parser(this.settings_manager[setting.name]), app_info: null };
            }

            if (params.default) {
                return parser(this.settings.get_default_value(setting.key).unpack());
            }

            return parser(this.settings_manager[setting.name]);
        };

        /* Add function */

        if (this.overriden_keys.indexOf(setting.key) !== -1) {
            getter = function (params) {
                params = Params.parse(params, { app_settings: true, app_info: false, default: false });

                if (params.app_info && params.default) {
                    return { value: parser(this.settings.get_default_value(setting.key).unpack()), app_info: null };
                }

                if (params.default) {
                    return this.settings.get_default_value(setting.key).unpack();
                }

                let maximized_window = Events.get_current_maximized_window();

                if (!Util.is_undef(maximized_window) && this.check_app_settings() && params.app_settings) {
                    if (!Util.is_undef(this.window_settings_manager[setting.name])) {
                        let value = this.window_settings_manager[setting.name][maximized_window.get_wm_class().toLowerCase()];
                        if (!Util.is_undef(value)) {
                            let window_setting = this.app_keys[setting.key];
                            let window_parser = ((!Util.is_undef(window_setting) && window_setting.parser !== null) ? window_setting.parser : function (input) {
                                return input;
                            });
                            if (!Util.is_undef(value)) {
                                let result = window_parser(value, parser(this.settings_manager[setting.name]), maximized_window.get_wm_class().toLowerCase(), true);
                                if (params.app_info) {
                                    return { value: result, app_info: maximized_window.get_wm_class().toLowerCase() };
                                }
                                return result;
                            }
                        }
                    }
                    if (!Util.is_undef(this.app_settings_manager[setting.name])) {
                        let shell_app = Util.get_app_for_window(maximized_window);
                        if (!Util.is_undef(shell_app) && !Util.is_undef(shell_app.get_id())) {
                            let app_id = shell_app.get_id();
                            let app_setting = this.app_keys[setting.key];
                            let app_parser = ((!Util.is_undef(app_setting) && app_setting.parser !== null) ? app_setting.parser : function (input) {
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
    update: function (setting) {
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
    _init: function (params, apps, path) {
        this.values = [];
        this.settings = {};
        this.settingsBoundIds = {};

        for (let a = 0; a < apps.length; ++a) {
            let app_id = apps[a];
            let app_path = path + app_id + '/';
            let sett = null;

            let obj = Convenience.getSchemaObj('org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides');
            sett = new Gio.Settings({ path: app_path, settings_schema: obj });

            this.settings[app_id] = sett;

            for (let setting_key of Object.keys(params)) {
                let setting = params[setting_key];
                this.values.push(setting);
                if (Util.is_undef(setting) || this.settings[app_id].list_keys().indexOf(setting.key) === -1) {
                    continue;
                }
                if (Util.is_undef(this.settingsBoundIds[app_id]))
                    this.settingsBoundIds[app_id] = [];
                this.settingsBoundIds[app_id].push(this.settings[app_id].connect('changed::' + setting.key, Lang.bind(this, function () {
                    this.update(setting, app_id);
                })));
                let variant = GLib.VariantType.new(setting.type);

                if (Util.is_undef(this[setting.name])) {
                    this[setting.name] = {};
                }

                if (variant.is_array() || variant.is_tuple()) {
                    this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).deep_unpack();
                } else {
                    this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).unpack();
                }
            }
        }
    },
    update: function (setting, app_id) {
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
    unbind: function () {
        for (let app_id in Object.keys(this.settings)) {
            for (let id in this.settingsBoundIds[app_id]) {
                this.settings[app_id].disconnect(id);
            }
        }
    }
});