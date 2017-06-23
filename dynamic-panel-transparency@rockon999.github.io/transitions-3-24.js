/* exported init, cleanup, lock, unlock, get_animation_status, get_transparency_status, minimum_fade_in, update_transition_type */
/* exported fade_in, fade_out, blank_fade_out */

const Lang = imports.lang;
const Mainloop = imports.mainloop;

const St = imports.gi.St;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Settings = Me.imports.settings;
const Theming24 = Me.imports['theming-3-24'];
const Util = Me.imports.util;

const Equations = imports.tweener.equations;

const CORNER_UPDATE_FREQUENCY = 30;

/**
 * Intialize.
 *
 */
function init() {
    /* Objects to track where the transparency is and where it's going. */
    this.status = new TransparencyStatus();
    this.animation_status = new AnimationStatus();

    this.corner_timeout_id = 0;
}

/**
 * Freeup any held assets on disable.
 *
 */
function cleanup() {
    this.animation_status = null;
    this.status = null;
    this.corner_timeout_id = null;
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
 */
function minimum_fade_in() {
    /* The CSS backend doesn't need different starting/ending values */
    fade_out();

    this.status.set_transparent(true);
    this.status.set_blank(false);
}

/**
 * Fades the panel into the nmaximized (maximum) alpha.
 *
 */
function fade_in() {
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

    if (!Settings.remove_panel_styling()) {
        Theming24.reapply_panel_styling();
    }

    this.status.set_transparent(false);
    this.status.set_blank(false);

    if (!Settings.get_hide_corners()) {
        let speed = St.get_slow_down_factor() * Settings.get_transition_speed();

        let maximized = Settings.get_maximized_opacity();
        let unmaximized = Settings.get_unmaximized_opacity();

        let count = 0;

        const id = this.corner_timeout_id = Mainloop.timeout_add(Math.floor(speed / CORNER_UPDATE_FREQUENCY), Lang.bind(this, function() {
            if (id === this.corner_timeout_id && !this.status.is_transparent()) {
                count++;

                let alpha = Equations.linear(Math.floor(count * CORNER_UPDATE_FREQUENCY), unmaximized, maximized - unmaximized, speed);

                update_corner_alpha(alpha);

                if (count > CORNER_UPDATE_FREQUENCY) {
                    update_corner_alpha(maximized);
                    return false;
                }
            } else {
                return false;
            }

            return true;
        }));
    }
}

/**
 * Fades the panel into the unmaximized (minimum) alpha.
 *
 */
function fade_out() {
    if (Settings.enable_custom_background_color()) {
        Theming24.remove_background_color({
            exclude_base: true,
            exclude_unmaximized_variant_only: true
        });
        Theming24.set_unmaximized_background_color();
    } else {
        Theming24.remove_background_color({
            exclude: Settings.get_current_user_theme(),
            exclude_unmaximized_variant_only: true
        });
        Theming24.set_unmaximized_background_color(Settings.get_current_user_theme());
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

        const id = this.corner_timeout_id = Mainloop.timeout_add(Math.floor(speed / CORNER_UPDATE_FREQUENCY), Lang.bind(this, function() {
            if (id === this.corner_timeout_id && this.status.is_transparent()) {
                count++;

                let alpha = Equations.linear(Math.floor(count * CORNER_UPDATE_FREQUENCY), maximized, unmaximized - maximized, speed);

                update_corner_alpha(alpha);

                if (count > CORNER_UPDATE_FREQUENCY) {
                    update_corner_alpha(unmaximized);
                    return false;
                }
            } else {
                return false;
            }
            return true;
        }));
    }
}

/**
 * Fades the panel's alpha to 0. Used for opening the overview & displaying the screenShield.
 *
 */
function blank_fade_out() {
    Theming24.remove_background_color();

    Theming24.strip_panel_background_image();
    Theming24.strip_panel_styling();

    this.status.set_transparent(true);
    this.status.set_blank(true);

    if (!Settings.get_hide_corners()) {
        let speed = St.get_slow_down_factor() * Settings.get_transition_speed();

        let maximized = Settings.get_maximized_opacity();
        let unmaximized = Settings.get_unmaximized_opacity();

        let count = 0;

        const id = this.corner_timeout_id = Mainloop.timeout_add(Math.floor(speed / CORNER_UPDATE_FREQUENCY), Lang.bind(this, function() {
            if (id === this.corner_timeout_id && this.status.is_transparent()) {
                count++;

                let alpha = Equations.linear(Math.floor(count * CORNER_UPDATE_FREQUENCY), maximized, unmaximized - maximized, speed);

                update_corner_alpha(alpha);

                if (count > CORNER_UPDATE_FREQUENCY) {
                    update_corner_alpha(unmaximized);
                    return false;
                }
            } else {
                return false;
            }
            return true;
        }));
    }
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