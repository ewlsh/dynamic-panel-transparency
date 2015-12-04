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

/* Default Settings Values */
const DEFAULT_TRANSITION_SPEED = 1000;
const DEFAULT_MAXIMIZED_OPACITY = 255;
const DEFAULT_UNMAXIMIZED_OPACITY = 0;
const DEFAULT_PANEL_COLOR = [0, 0, 0];
const DEFAULT_HIDE_CORNERS = true;
const DEFAULT_FORCE_ANIMATION = false;

/* Settings Keys */
const KEY_HIDE_CORNERS = 'hide-corners';
const KEY_TRANSITION_SPEED = 'transition-speed';
const KEY_FORCE_ANIMATION = 'force-animation';
const KEY_UNMAXIMIZED_OPACITY = 'unmaximized-opacity';
const KEY_MAXIMIZED_OPACITY = 'maximized-opacity';
const KEY_PANEL_COLOR = 'panel-color';

function init(){
    this.settings = Convenience.getSettings();
}

function cleanup(){
    this.settings = null;
}

/* Settings Management */

function bind_settings() {
    let transition_speed = this.settings.get_int(KEY_TRANSITION_SPEED);
    let maximized_opacity = this.settings.get_int(KEY_MAXIMIZED_OPACITY);
    let unmaximized_opacity = this.settings.get_int(KEY_UNMAXIMIZED_OPACITY);
    let panel_color = this.settings.get_value(KEY_PANEL_COLOR).deep_unpack();
    let hide_corners = this.settings.get_boolean(KEY_HIDE_CORNERS);
    let force_animation = this.settings.get_boolean(KEY_FORCE_ANIMATION);

    this.settings_manager = new SettingsManager(this.settings, transition_speed, maximized_opacity, unmaximized_opacity, panel_color, hide_corners, force_animation);

    this.settingsBoundIds = [];

    this.settingsBoundIds.push(this.settings.connect('changed::' + KEY_TRANSITION_SPEED, Lang.bind(this, function() {
            this.settings_manager.update({
                transition_speed: this.settings.get_int(KEY_TRANSITION_SPEED)
            });
        })),
        this.settings.connect('changed::' + KEY_MAXIMIZED_OPACITY, Lang.bind(this, function() {
            this.settings_manager.update({
                maximized_opacity: this.settings.get_int(KEY_MAXIMIZED_OPACITY)
            });
        })),
        this.settings.connect('changed::' + KEY_UNMAXIMIZED_OPACITY, Lang.bind(this, function() {
            this.settings_manager.update({
                unmaximized_opacity: this.settings.get_int(KEY_UNMAXIMIZED_OPACITY)
            });
        })),
        this.settings.connect('changed::' + KEY_PANEL_COLOR, Lang.bind(this, function() {
            this.settings_manager.update({
                panel_color: this.settings.get_value(KEY_PANEL_COLOR).deep_unpack()
            });
        })),
        this.settings.connect('changed::' + KEY_HIDE_CORNERS, Lang.bind(this, function() {
            this.settings_manager.update({
                hide_corners: this.settings.get_boolean(KEY_HIDE_CORNERS)
            });
        })),
        this.settings.connect('changed::' + KEY_FORCE_ANIMATION, Lang.bind(this, function() {
            this.settings_manager.update({
                force_animation: this.settings.get_boolean(KEY_FORCE_ANIMATION)
            });
        })));

}

function unbind_settings() {
    for (let i = 0; i < this.settingsBoundIds.length; ++i) {
        this.settings.disconnect(this.settingsBoundIds[i]);
    }
}

/* Basic class to hold settings values */
const SettingsManager = new Lang.Class({
    Name: 'SettingsManager',
    _init: function(settings, transition_speed, maximized_opacity, unmaximized_opacity, panel_color, hide_corners, force_animation) {
        this.settings = settings;
        this.transition_speed = transition_speed;
        this.maximized_opacity = maximized_opacity;
        this.unmaximized_opacity = unmaximized_opacity;
        this.panel_color = panel_color;
        this.hide_corners = hide_corners;
        this.force_animation = force_animation;
    },
    update: function(params = null) {
        if (params === null)
            params = {
                transition_speed: this.settings.get_int(KEY_TRANSITION_SPEED),
                maximized_opacity: this.settings.get_int(KEY_MAXIMIZED_OPACITY),
                unmaximized_opacity: this.settings.get_int(KEY_UNMAXIMIZED_OPACITY),
                panel_color: this.settings.get_value(KEY_PANEL_COLOR).deep_unpack(),
                hide_corners: this.settings.get_boolean(KEY_HIDE_CORNERS),
                force_animation: this.settings.get_boolean(KEY_FORCE_ANIMATION)
            };

        this.transition_speed = Util.is_undef(params.transition_speed) ? this.settings.get_int(KEY_TRANSITION_SPEED) : params.transition_speed;
        this.maximized_opacity = Util.is_undef(params.maximized_opacity) ? this.settings.get_int(KEY_MAXIMIZED_OPACITY) : params.maximized_opacity;
        this.unmaximized_opacity = Util.is_undef(params.unmaximized_opacity) ? this.settings.get_int(KEY_UNMAXIMIZED_OPACITY) : params.unmaximized_opacity;
        this.panel_color = Util.is_undef(params.panel_color) ? this.settings.get_value(KEY_PANEL_COLOR).deep_unpack() : params.panel_color;
        this.hide_corners = Util.is_undef(params.hide_corners) ? this.settings.get_boolean(KEY_HIDE_CORNERS) : params.hide_corners;
        this.force_animation = Util.is_undef(params.force_animation) ? this.settings.get_boolean(KEY_FORCE_ANIMATION) : params.force_animation;
    }
});

/* Settings Accessors */

function get_force_animation() {
    if (!Util.is_undef(this.settings_manager)) {
        return this.settings_manager.force_animation;
    } else {
        return DEFAULT_FORCE_ANIMATION;
    }
}

function get_hide_corners() {
    if (!Util.is_undef(this.settings_manager)) {
        return this.settings_manager.hide_corners;
    } else {
        log('Failed to access setting: ' + 'hide-corners');
        return DEFAULT_HIDE_CORNERS;
    }
}

function get_maximum_opacity() {
    if (!Util.is_undef(this.settings_manager)) {
        return this.settings_manager.maximized_opacity;
    } else {
        log('Failed to access setting: ' + 'maximized-opacity');
        return DEFAULT_MAXIMIZED_OPACITY;
    }
}

function get_minimum_opacity() {
    if (!Util.is_undef(this.settings_manager)) {
        return this.settings_manager.unmaximized_opacity;
    } else {
        log('Failed to access setting: ' + 'unmaximized-opacity');
        return DEFAULT_UNMAXIMIZED_OPACITY;
    }
}

function get_panel_color() {
    if (!Util.is_undef(this.settings_manager)) {
        return this.settings_manager.panel_color;
    } else {
        log('Failed to access setting: ' + 'panel-color');
        return DEFAULT_PANEL_COLOR;
    }
}

function get_transition_speed() {
    if (!Util.is_undef(this.settings)) {
        return this.settings_manager.transition_speed;
    } else {
        log('Failed to access setting: ' + 'transition-speed');
        return DEFAULT_TRANSITION_SPEED;
    }
}