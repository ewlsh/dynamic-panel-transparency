/* exported init, cleanup, lock, unlock, get_animation_status, get_transparency_status, minimum_fade_in, update_transition_type */
/* exported fade_in, fade_out, blank_fade_out */

const Mainloop = imports.mainloop;

const St = imports.gi.St;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Settings = Me.imports.settings;
const Theming = Me.imports.theming;

const Equations = imports.tweener.equations;

const CORNER_UPDATE_FREQUENCY = 30;

class TransparencyStatus {
    constructor() {
        this.transparent = false;
        this.blank = false;
    }

    is_transparent() {
        return this.transparent;
    }

    is_blank() {
        return this.blank;
    }

    set_transparent(transparent) {
        this.transparent = transparent;
    }

    set_blank(blank) {
        this.blank = blank;
    }
};

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

    if (Settings.get_hide_corners()) {
        Theming.remove_hide_corners();
        Theming.add_hide_corners();
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
}
