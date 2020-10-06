/* exported init, cleanup, lock, unlock, get_animation_status, get_transparency_status, minimum_fade_in, update_transition_type */
/* exported fade_in, fade_out, blank_fade_out */

const Lang = imports.lang;
const Mainloop = imports.mainloop;

const St = imports.gi.St;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Settings = Me.imports.settings;
const Theming = Me.imports.theming;

const Equations = imports.tweener.equations;

const CORNER_UPDATE_FREQUENCY = 30;

/**
 * Intialize.
 *
 */
function init() {
    /* Objects to track where the transparency is and where it's going. */
    this.status = new TransparencyStatus();

    this.corner_timeout_id = 0;
}

/**
 * Freeup any held assets on disable.
 *
 */
function cleanup() {
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
 * DEPRECATED.
 *
 * @returns {Object} Current animation status. @see AnimationStatus
 */
function get_animation_status() {
    return { destination: null, action: null };
}

/**
 * Fades the panel into the unmaximized (minimum) alpha. Used for closing the overview.
 *
 */
function minimum_fade_in() {
    /* The CSS backend doesn't need different starting/ending values */
    fade_out();
}

/**
 * Fades the panel into the nmaximized (maximum) alpha.
 *
 */
function fade_in() {
    if (!Settings.remove_panel_styling()) {
        Theming.reapply_panel_styling();
        Theming.reapply_panel_background_image();
    }

    Theming.remove_panel_transparency();

    if (Settings.enable_custom_background_color()) {
        Theming.set_maximized_background_color('custom');

        Theming.remove_unmaximized_background_color();
        Theming.remove_unmaximized_background_color('custom');
    } else {
        Theming.set_maximized_background_color();

        Theming.remove_unmaximized_background_color();
        Theming.remove_unmaximized_background_color('custom');
    }

    if (!Settings.get_hide_corners()) {
        let speed = St.Settings.get().slow_down_factor * Settings.get_transition_speed();

        let maximized = Settings.get_maximized_opacity();
        let unmaximized = !this.status.is_transparent() ? maximized : Settings.get_unmaximized_opacity();

        this.status.set_transparent(false);
        this.status.set_blank(false);

        let count = 0;

        const id = this.corner_timeout_id = Mainloop.timeout_add(Math.floor(speed / CORNER_UPDATE_FREQUENCY), (function() {
            if (id === this.corner_timeout_id && !this.status.is_transparent()) {
                count++;

                let alpha = Equations.linear(Math.floor(count * (speed / CORNER_UPDATE_FREQUENCY)), unmaximized, maximized - unmaximized, speed);

                update_corner_alpha(alpha);

                if (count > CORNER_UPDATE_FREQUENCY) {
                    update_corner_alpha(maximized);
                    return false;
                }
            } else {
                return false;
            }

            return true;
        }).bind(this));
    } else {
        update_corner_alpha();
    }

    this.status.set_transparent(false);
    this.status.set_blank(false);
}

/**
 * Fades the panel into the unmaximized (minimum) alpha.
 *
 */
function fade_out() {
    Theming.strip_panel_background_image();
    Theming.strip_panel_styling();

    if (Settings.enable_custom_background_color()) {
        Theming.set_unmaximized_background_color('custom');

        Theming.remove_maximized_background_color();
        Theming.remove_maximized_background_color('custom');
    } else {
        Theming.set_unmaximized_background_color();

        Theming.remove_maximized_background_color();
        Theming.remove_maximized_background_color('custom');
    }

    Theming.remove_panel_transparency();

    // TODO: Figure out how to write the panel corners in pure CSS.
    if (!Settings.get_hide_corners()) {
        let speed = St.Settings.get().slow_down_factor * Settings.get_transition_speed();

        let unmaximized = Settings.get_unmaximized_opacity();
        let maximized = this.status.is_transparent() ? unmaximized : Settings.get_maximized_opacity();

        /* Keep the status up to date */
        this.status.set_transparent(true);
        this.status.set_blank(false);

        let count = 0;

        const id = this.corner_timeout_id = Mainloop.timeout_add(Math.floor(speed / CORNER_UPDATE_FREQUENCY), (function() {
            if (id === this.corner_timeout_id && this.status.is_transparent()) {
                count++;

                let alpha = Equations.linear(Math.floor(count * (speed / CORNER_UPDATE_FREQUENCY)), maximized, unmaximized - maximized, speed);

                update_corner_alpha(alpha);

                if (count > CORNER_UPDATE_FREQUENCY) {
                    update_corner_alpha(unmaximized);
                    return false;
                }
            } else {
                return false;
            }
            return true;
        }).bind(this));
    } else {
        update_corner_alpha();
    }

    /* Keep the status up to date */
    this.status.set_transparent(true);
    this.status.set_blank(false);
}

/**
 * Fades the panel's alpha to 0. Used for opening the overview & displaying the screenShield.
 *
 */
function blank_fade_out() {
    this.status.set_transparent(true);
    this.status.set_blank(true);

    /* Completely remove every possible background style... */
    Theming.remove_background_color();

    Theming.strip_panel_background_image();
    Theming.strip_panel_styling();

    Theming.apply_panel_transparency();

    // TODO: These corners...
    if (!Settings.get_hide_corners()) {
        let speed = St.Settings.get().slow_down_factor * Settings.get_transition_speed();

        let maximized = Settings.get_maximized_opacity();

        let count = 0;

        const id = this.corner_timeout_id = Mainloop.timeout_add(Math.floor(speed / CORNER_UPDATE_FREQUENCY), (function() {
            if (id === this.corner_timeout_id && this.status.is_transparent()) {
                count++;

                let alpha = Equations.linear(Math.floor(count * (speed / CORNER_UPDATE_FREQUENCY)), maximized, -maximized, speed);

                update_corner_alpha(alpha);

                if (count > CORNER_UPDATE_FREQUENCY) {
                    update_corner_alpha(0);
                    return false;
                }
            } else {
                return false;
            }
            return true;
        }).bind(this));
    } else {
        update_corner_alpha();
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
            alpha = this.status.is_transparent() ? Theming.get_unmaximized_opacity() : Theming.get_maximized_opacity();
        }
    }

    Theming.set_corner_color({
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