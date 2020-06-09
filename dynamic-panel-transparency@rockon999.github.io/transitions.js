/** @type {Module} */
const module = {};

const Mainloop = imports.mainloop;

const { St } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Settings = Me.imports.settings;

const Equations = imports.tweener.equations;

const { Themer } = Me.imports.theming;

const CORNER_UPDATE_FREQUENCY = 30;

var TransitionManager = class TransitionManager {
    /**
     * Initialize.
     * @param {typeof Themer.prototype} themer
     */
    constructor(themer) {
        this.themer = themer;

        this.blank = false;
        this.transparent = false;
    }

    is_transparent() {
        return this.transparent;
    }

    is_blank() {
        return this.blank;
    }

    /**
     * Free-up any held assets on disable.
     *
     */
    cleanup() {
    }

    /**
     * Fades the panel into the unmaximized (minimum) alpha. Used for closing the overview.
     */
    minimum_fade_in() {
        /* The CSS backend doesn't need different starting/ending values */
        this.fade_out();
    }

    /**
     * Fades the panel into the unmaximized (maximum) alpha.
     *
     */
    fade_in() {
        const settings = Settings.get();
        if (!settings._removePanelStyling()) {
            this.themer.reapply_panel_styling();
            this.themer.reapply_panel_background_image();
        }

        if (settings.enableCustomBackgroundColor()) {
            this.themer.set_maximized_background_color();
            this.themer.remove_background_color({
                exclude_base: true
            });
        } else {
            this.themer.set_maximized_auto_background_color();
        }

        this.blank = false;
        this.transparent = false;
    }

    /**
     * Fades the panel into the unmaximized (minimum) alpha.
     *
     */
    fade_out() {
        const settings = Settings.get();

        this.themer.strip_panel_background_image();
        this.themer.strip_panel_styling();

        if (settings.enableCustomBackgroundColor()) {
            this.themer.set_unmaximized_background_color();
            this.themer.remove_background_color({
                exclude_base: true,
                exclude_unmaximized_variant_only: true
            });
        } else {
            this.themer.set_unmaximized_auto_background_color();
        }

        /* Keep the status up to date */
        this.blank = false;
        this.transparent = true;
    }

    /**
     * Fades the panel's alpha to 0. Used for opening the overview & displaying the screenShield.
     *
     */
    blank_fade_out() {
        /* Completely remove every possible background style... */
        this.themer.remove_background_color();
        this.themer.set_blank();

        this.themer.strip_panel_background_image();
        this.themer.strip_panel_styling();

        this.blank = true;
        this.transparent = true;
    }
}

module.exports = { TransitionManager };