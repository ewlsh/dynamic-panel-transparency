/* exported init, cleanup, lock, unlock, get_animation_status, get_transparency_status, minimum_fade_in, update_transition_type */
/* exported fade_in, fade_out, blank_fade_out */

const Lang = imports.lang;
const Mainloop = imports.mainloop;

const St = imports.gi.St;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Settings = Me.imports.settings;
const Util = Me.imports.util;

let Theming24 = Me.imports['theming-3-24'];
let Equations = imports.tweener.equations;


/**
 * Intialize.
 *
 */
function init() {
    /* Objects to track where the transparency is and where it's going. */
    this.status = new TransparencyStatus();
    this.animation_status = new AnimationStatus();
    this.transition_type = TransitionType.from_index(Settings.get_transition_type());

    this.corner_id = 0;
}

/**
 * Freeup any held assets on disable.
 *
 */
function cleanup() {
    this.animation_status = null;
    this.transition_type = null;
    this.status = null;
    this.tweener = null;
    this.corner_id = null;
}

/**
 * Updates the default transition type from settings.
 *
 */
function update_transition_type() {
    //this.transition_type = TransitionType.from_index(Settings.get_transition_type());

    Theming24._updatePanelCSS();
}

/**
 * Get the current status of the panel's transparency.
 *
 * @returns {Object} Current transparency. @see TransparencyStatus
 */
function get_transparency_status() {
    return this.status;
}

/**
 * Get any animation that the panel is currently doing.
 *
 * @returns {Object} Current animation status. @see AnimationStatus
 */
function get_animation_status() {
    return this.animation_status;
}

/**
 * Fades the panel into the unmaximized (minimum) alpha. Used for closing the overview.
 *
 * @param {Object} params [params=null] - Parameters for the transition.
 * @param {Number} params.time - Transition speed in milliseconds.
 */
function minimum_fade_in(params) {
    // TODO: Nothing required here... right?

    this.status.set_transparent(true);
    this.status.set_blank(false);
}

/**
 * Fades the panel into the nmaximized (maximum) alpha.
 *
 * @param {Object} params [params=null] - Parameters for the transition.
 * @param {Number} params.time - Transition speed in milliseconds.
 */
function fade_in(params) {
    let custom = Settings.get_panel_color({ app_info: true });

    if (custom.app_info !== null && Settings.check_overrides() && (Settings.window_settings_manager['enable_background_tweaks'][custom.app_info] || Settings.app_settings_manager['enable_background_tweaks'][custom.app_info])) {
        let prefix = custom.app_info.split('.').join('-');
        Theming24.remove_background_color({
            exclude: 'tweak-' + prefix,
            exclude_maximized_variant_only: true
        });
        Theming24.set_maximized_background_color('tweak-' + prefix);
    } else if (Settings.enable_custom_background_color()) {
        Theming24.remove_background_color({
            exclude_base: true,
            exclude_maximized_variant_only: true
        });
        Theming24.set_maximized_background_color();
    } else {
        Theming24.remove_background_color({
            exclude: Settings.get_current_user_theme(),
            exclude_maximized_variant_only: true
        });
        Theming24.set_maximized_background_color(Settings.get_current_user_theme());
    }

    if (Settings.get_enable_text_color() && (Settings.get_enable_maximized_text_color() || Settings.get_enable_overview_text_color())) {
        if (Settings.get_enable_overview_text_color()) {
            Theming24.remove_text_color();
            Theming24.set_text_color('maximized');
        } else {
            Theming24.remove_text_color('maximized');
            Theming24.set_text_color();
        }
    }

    if (!Settings.remove_panel_styling()) {
        if (custom.app_info !== null && Settings.check_overrides() && (Settings.window_settings_manager['enable_background_tweaks'][custom.app_info] || Settings.app_settings_manager['enable_background_tweaks'][custom.app_info])) {
            Theming24.strip_panel_background_image();
        } else if (!Settings.enable_custom_background_color()) {
            Theming24.reapply_panel_background_image();
        } else {
            Theming24.strip_panel_background_image();
        }

        Theming24.reapply_panel_styling();
    } else {
        Theming24.strip_panel_background_image();
        Theming24.strip_panel_styling();
    }

    this.status.set_transparent(false);
    this.status.set_blank(false);

    if (!Settings.get_hide_corners()) {
        let speed = St.get_slow_down_factor() * Settings.get_transition_speed();

        let maximized = Settings.get_maximized_opacity();
        let unmaximized = Settings.get_unmaximized_opacity();

        let count = 0;

        const id = this.corner_id = Mainloop.timeout_add(Math.floor(speed / 30), Lang.bind(this, function() {
            if (id === this.corner_id && !this.status.is_transparent()) {
                count++;

                let alpha = Equations.linear(Math.floor(count * 30), unmaximized, maximized - unmaximized, speed);

                update_corner_alpha(alpha);

                if (count > 30) {
                    update_corner_alpha(maximized);
                    return false;
                }
            } else {
                return false;
            }

            return true;
        }));
    }



    log('transparency in');

}

/**
 * Fades the panel into the unmaximized (minimum) alpha.
 * TODO: Could this be used for minimum_fade_in?
 *
 * @param {Object} params [params=null] - Parameters for the transition.
 * @param {Number} params.time - Transition speed in milliseconds.
 */
function fade_out(params) {
    let custom = Settings.get_panel_color({ app_info: true });

    if (custom.app_info !== null && Settings.check_overrides() && (Settings.window_settings_manager['enable_background_tweaks'][custom.app_info] || Settings.app_settings_manager['enable_background_tweaks'][custom.app_info])) {
        let prefix = custom.app_info.split('.').join('-');
        Theming24.remove_background_color({
            exclude: 'tweak-' + prefix,
            exclude_maximized_variant_only: true
        });
        Theming24.set_unmaximized_background_color('tweak-' + prefix);
    } else if (Settings.enable_custom_background_color()) {
        Theming24.remove_background_color({
            exclude_base: true,
            exclude_maximized_variant_only: true
        });
        Theming24.set_unmaximized_background_color();
    } else {
        Theming24.remove_background_color({
            exclude: Settings.get_current_user_theme(),
            exclude_maximized_variant_only: true
        });
        Theming24.set_unmaximized_background_color(Settings.get_current_user_theme());
    }

    if (Settings.get_enable_text_color() && (Settings.get_enable_maximized_text_color() || Settings.get_enable_overview_text_color())) {
        if (Settings.get_enable_overview_text_color()) {
            Theming24.remove_text_color();
            Theming24.set_text_color('maximized');
        } else {
            Theming24.remove_text_color('maximized');
            Theming24.set_text_color();
        }
    }

    Theming24.strip_panel_background_image();
    Theming24.strip_panel_styling();

    this.status.set_transparent(true);
    this.status.set_blank(false);

    if (!Settings.get_hide_corners()) {
        let speed = St.get_slow_down_factor() * Settings.get_transition_speed();

        let maximized = Settings.get_maximized_opacity();
        let unmaximized = Settings.get_unmaximized_opacity();

        let count = 0;

        const id = this.corner_id = Mainloop.timeout_add(Math.floor(speed / 30), Lang.bind(this, function() {
            if (id === this.corner_id && this.status.is_transparent()) {
                count++;

                let alpha = Equations.linear(Math.floor(count * 30), maximized, unmaximized - maximized, speed);

                update_corner_alpha(alpha);

                if (count > 30) {
                    update_corner_alpha(unmaximized);
                    return false;
                }
            } else {
                return false;
            }
            return true;
        }));
    }



    log('transparency out');


}

/**
 * Fades the panel's alpha to 0. Used for opening the overview & displaying the screenShield.
 *
 * @param {Object} params [params=null] - Parameters for the transition.
 * @param {Number} params.time - Transition speed in milliseconds.
 */
function blank_fade_out(params) {
    fade_out(params);

    this.status.set_blank(true);
}

/**
 * Updates the alpha value of the corners' coloring. Slightly awkward overlap is unavoidable.
 *
 * @param {Number} alpha - Alpha value ranging from 0-255.
 */
function update_corner_alpha(alpha = null) {
    if (alpha === null) {
        if (Settings.get_hide_corners()) {
            alpha = 0;
        } else {
            alpha = this.status.is_transparent() ? Theming24.get_unmaximized_opacity() : Theming24.get_maximized_opacity();
        }
    }

    Theming24.set_corner_color({
        alpha: alpha
    });
}

const TransparencyStatus = new Lang.Class({
    Name: 'DynamicPanelTransparency_TransparencyStatus',
    _init: function() {
        this.transparent = false;
        this.blank = false;
    },
    is_transparent: function() {
        return this.transparent;
    },
    is_blank: function() {
        return this.blank;
    },
    set_transparent: function(transparent) {
        this.transparent = transparent;
    },
    set_blank: function(blank) {
        this.blank = blank;
    }
});

const AnimationStatus = new Lang.Class({
    Name: 'DynamicPanelTransparency_AnimationStatus',
    _init: function() {
        this.destination = null;
        this.action = null;
    },
    get_action: function() {
        return this.action;
    },
    get_destination: function() {
        return this.destination;
    },
    set: function(action, destination) {
        this.action = action;
        this.destination = destination;
    },
    set_done: function() {
        this.action = null;
        this.destination = null;
    },
    equals: function(action, destination) {
        return (this.action === action && this.destination === destination);
    },
    is_done: function() {
        return (this.action === null && this.destination === null);
    }
});

const TransitionType = {
    LINEAR: { code: 'linear', name: 'Linear', index: 1 },
    SINE: { code: 'Sine', name: 'Sine', index: 2 },
    QUAD: { code: 'Quad', name: 'Quadratic', index: 3 },
    CUBIC: { code: 'Cubic', name: 'Cubic', index: 4 },
    QUARTIC: { code: 'Quart', name: 'Quartic', index: 5 },
    QUINTIC: { code: 'Quint', name: 'Quintic', index: 6 },
    EXPONENTIAL: { code: 'Expo', name: 'Exponential', index: 7 },
    CIRCULAR: { code: 'Circ', name: 'Circle', index: 8 },
    BACK: { code: 'Back', name: 'Back', index: 15 },
    ELASTIC: { code: 'Elastic', name: 'Elastic', index: 9 },
    BOUNCE: { code: 'Bounce', name: 'Bounce', index: 10 },
    from_index: function(search_index) {
        for (let key in this) {
            let value = this[key];
            if (typeof (value) === 'object' && search_index === value.index) {
                return value;
            }
        }
        return null;
    },
    to_code_string: function(type, action) {
        /* 'linear' is a special case. It doesn't have in/out modes. */
        if (type.code === this.LINEAR.code) {
            return this.LINEAR.code;
        }
        return (action === AnimationAction.FADING_IN ? 'easeIn' : 'easeOut') + type.code;
    }
};
Util.deep_freeze(TransitionType);

const AnimationAction = {
    FADING_OUT: 0,
    FADING_IN: 1
};
Util.deep_freeze(AnimationAction);

const AnimationDestination = {
    BLANK: 0,
    MINIMUM: 1,
    MAXIMUM: 2
};
Util.deep_freeze(AnimationDestination);