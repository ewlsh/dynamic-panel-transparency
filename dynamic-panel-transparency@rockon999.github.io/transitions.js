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
}

export class Transitions {
    /**
     * @param {import('./main.js').DptExtension} extension
     */
    constructor(extension) {
        this.extension = extension;
        /* Objects to track where the transparency is and where it's going. */
        this.status = new TransparencyStatus();

        this.corner_timeout_id = 0;
    }

    /**
     * Freeup any held assets on disable.
     *
     */
    cleanup() {
        this.status = null;

        this.corner_timeout_id = null;
    }

    /**
     * Get the current status of the panel's transparency.
     *
     * @returns {Object} Current transparency. @see TransparencyStatus
     */
    get_transparency_status() {
        return this.status;
    }

    /**
     * Get any animation that the panel is currently doing.
     * DEPRECATED.
     *
     * @returns {Object} Current animation status. @see AnimationStatus
     */
    get_animation_status() {
        return { destination: null, action: null };
    }

    /**
     * Fades the panel into the unmaximized (minimum) alpha. Used for closing the overview.
     *
     */
    minimum_fade_in() {
        /* The CSS backend doesn't need different starting/ending values */
        this.fade_out();
    }

    /**
     * Fades the panel into the nmaximized (maximum) alpha.
     *
     */
    fade_in() {
        const { theming, settings } = this.extension;

        if (settings.enable_custom_background_color()) {
            theming.set_maximized_background_color('custom');

            theming.remove_unmaximized_background_color();
            theming.remove_unmaximized_background_color('custom');
        } else {
            theming.set_maximized_background_color();

            theming.remove_unmaximized_background_color();
            theming.remove_unmaximized_background_color('custom');
        }

        if (!settings.remove_panel_styling()) {
            theming.reapply_panel_styling();
            theming.reapply_panel_background_image();
        }

        theming.remove_panel_transparency();

        this.status.set_transparent(false);
        this.status.set_blank(false);
    }

    /**
     * Fades the panel into the unmaximized (minimum) alpha.
     *
     */
    fade_out() {
        const { theming, settings } = this.extension;

        theming.strip_panel_background_image();
        theming.strip_panel_styling();

        if (settings.enable_custom_background_color()) {
            theming.set_unmaximized_background_color('custom');

            theming.remove_maximized_background_color();
            theming.remove_maximized_background_color('custom');
        } else {
            theming.set_unmaximized_background_color();

            theming.remove_maximized_background_color();
            theming.remove_maximized_background_color('custom');
        }

        theming.remove_panel_transparency();

        if (settings.get_hide_corners()) {
            theming.remove_hide_corners();
            theming.add_hide_corners();
        }

        /* Keep the status up to date */
        this.status.set_transparent(true);
        this.status.set_blank(false);
    }

    /**
     * Fades the panel's alpha to 0. Used for opening the overview & displaying the screenShield.
     *
     */
    blank_fade_out() {
        const { theming } = this.extension;

        this.status.set_transparent(true);
        this.status.set_blank(true);

        /* Completely remove every possible background style... */
        theming.remove_background_color();

        theming.strip_panel_background_image();
        theming.strip_panel_styling();

        theming.apply_panel_transparency();
    }
}
