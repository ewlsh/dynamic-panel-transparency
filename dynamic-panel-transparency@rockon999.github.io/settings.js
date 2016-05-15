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

const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;

/* This might impair visibility of the code, but it makes my life a thousand times simpler */
/* Dynamic settings takes a key and watches for it to change in Gio.Settings & creates a getter for it */

const APP_SETTINGS_PARAMS = [{
    settings_key: 'maximized-opacity',
    name: 'maximized_opacity',
    type: '(si)',
    value: ['default', 255],
},
    {
        settings_key: 'panel-color',
        name: 'panel_color',
        type: '(sai)',
        value: ['default', [0, 0, 0]],
    }, {
        settings_key: 'text-shadow',
        name: 'text_shadow',
        type: '(sb)',
        value: ['default', false],
        getter: 'add_text_shadow',
        handler: Lang.bind(this, function () {
            /* Fix text shadowing if need exists */
            /* TODO: Better place to check this? */
            if (add_text_shadow() && !Theming.has_text_shadow()) {
                Theming.add_text_shadow();
            } else if (!add_text_shadow() && Theming.has_text_shadow()) {
                Theming.remove_text_shadow();
            }
        })
    }, {
        settings_key: 'panel-text-color',
        name: 'text_color',
        type: 's',
        value: 'Default',
        handler: Lang.bind(this, function () {
            log(get_text_color());
            log(Theming.get_current_text_color());
            if (get_text_color() != Theming.get_current_text_color()) {
                Theming.set_text_color(get_text_color());
            }
        })
    }];

function init() {
    this.settings = Convenience.getSettings();

    this.keys = [];
    this.defaults = {};
    this.settingsBoundIds = [];
}

function cleanup() {
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
    return (get_app_overrides().length > 0);
}

function bind_app_overrides() {
    let app_overrides = get_app_overrides();
    for (let app_id of app_overrides) {
        for (let i = 0; i < APP_SETTINGS_PARAMS.length; ++i) {
            let setting = APP_SETTINGS_PARAMS[i];
            if (!Util.is_undef(this.app_settings_manager[setting])) {
                /* Watch for changes */
                this.settingsBoundIds.push(this.settings.connect('changed::' + setting.key, Lang.bind(this, function () {
                    this.app_settings_manager.update(setting, app_id);
                })));

                if (!Util.is_undef(setting.handler)) {
                    this.settingsBoundIds.push(this.settings.connect('changed::' + setting.key, setting.handler));
                }
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

        /* Create getter */
        let getter = function () {

            /*if (this.check_app_settings()) {
                let app_id = Extension.get_maximized_window().get_gtk_application_id();
                let value = this.app_settings_manager[setting.name][app_id];
                if (!Util.is_undef(value) && !Util.is_undef(value[1]) && value[0]) {
                    return value[1];
                }
            }*/

            if (!Util.is_undef(this.settings_manager) && !Util.is_undef(this.settings_manager[setting.name])) {
                return this.settings_manager[setting.name];
            } else {
                return this.defaults[setting.name];
            }
        }

        /* Add function */
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
    Name: 'DynamicPanelTransparency.SettingsManager',
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
    Name: 'DynamicPanelTransparency.SettingsManager',
    _init: function (params, apps) {
        this.values = [];
this.settings = {};
        for (let i = 0; i < params.length; ++i) {
            for (let a = 0; a < apps.length; ++i) {
                let app = apps[a];
                let path = '/org/gnome/shell/extensions/dynamic-shell-transparency/appOverrides/' + app + "/";
                this.settings[app] = Gio.Settings.new_with_path('org.gnome.shell.extensions.dynamic-shell-transparency.appOverrides', path);

                let setting = params[i];
                this.values.push(setting);
                if (this.settings[app].list_keys().indexOf(setting.key) == -1 || Util.is_undef(setting))
                    continue;
                let variant = GLib.VariantType.new(setting.type);
                if (variant.is_array() || variant.is_tuple()) {
                    this[setting.name][app] = this.settings[app].get_value(setting.key).deep_unpack();
                } else {
                    this[setting.name][app] = this.settings[app].get_value(setting.key).unpack();
                }
            }
        }
    },
    update: function (setting, app_id) {
        if (this.settings.list_keys().indexOf(setting.key) == -1)
            return;

        let variant = GLib.VariantType.new(setting.type);

        if (variant.is_array() || variant.is_tuple()) {
            this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).deep_unpack();
        } else {
            this[setting.name][app_id] = this.settings[app_id].get_value(setting.key).unpack();
        }

    }
});