const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Transitions = Me.imports.transitions;
const Theming = Me.imports.theming;
const Extension = Me.imports.extension;

const Util = Me.imports.util;
const Main = imports.ui.main;
const Lang = imports.lang;
const Config = imports.misc.config;
const Panel = Main.panel;

const GLib = imports.gi.GLib;

/* This might impair visibility of the code, but it makes my life a thousand times simpler */
/* Dynamic settings takes a key and watches for it to change in Gio.Settings & creates a getter for it */

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
        getter: null
    };
    if (!Util.is_undef(params.getter))
        key.getter = params.getter;
    this.keys[this.keys.length] = key;
    this.defaults[params.name] = params.default;
}

function bind() {

    this.settings_manager = new SettingsManager(this.settings, this.keys);

    for (let i = 0; i < this.keys.length; ++i) {
        let setting = keys[i];

        /* Watch for changes */
        this.settingsBoundIds.push(this.settings.connect('changed::' + setting.key, Lang.bind(this, function() {
            this.settings_manager.update(setting);
        })));

        /* Create getter */
        let getter = function() {
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
    _init: function(settings, params) {
        this.values = [];
        this.settings = settings;
        for (let i = 0; i < params.length; ++i) {
            let setting = params[i];
            this.values.push(setting);
            if (this.settings.list_keys().indexOf(setting.key) == -1 || Util.is_undef(setting))
                continue;
            let variant = GLib.VariantType.new(setting.type);
            if (variant.is_array()) {
                this[setting.name] = this.settings.get_value(setting.key).deep_unpack();
            } else {
                this[setting.name] = this.settings.get_value(setting.key).unpack();
            }
        }
    },
    update: function(setting) {
        if (this.settings.list_keys().indexOf(setting.key) == -1)
            return;
        let variant = GLib.VariantType.new(setting.type);
        if (variant.is_array()) {
            this[setting.name] = this.settings.get_value(setting.key).deep_unpack();
        } else {
            this[setting.name] = this.settings.get_value(setting.key).unpack();
        }
    }
});