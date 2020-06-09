/** @type {Module} */
const module = {};

const St = imports.gi.St;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Settings = Me.imports.settings;
const Util = Me.imports.util;
const ColorUtil = Me.imports.color_util;

const { GLib } = imports.gi;

/* Scale factor for color conversion. */
const SCALE_FACTOR = 255.9999999;

/**
 * @typedef {Object} Color - Represents a standard color object
 * @property {number} red - Red value ranging from 0-255.
 * @property {number} green - Green value ranging from 0-255.
 * @property {number} blue - Blue value ranging from 0-255.
 * @property {number} [alpha=1.0] - Alpha value ranging from 0-1.0 with support for two decimal places.
 */

const BackgroundState = {
    MAXIMIZED: 1,
    TRANSLUCENT_DARK: 2,
    TRANSLUCENT_LIGHT: 3,
    DARK: 4,
    LIGHT: 5
};

const Translucency = {
    LOW: 0,
    LOW_MID: 1,
    MID: 2,
    MID_HIGH: 3,
    HIGH: 4,
    SOLID: 5
};

const ACUTANCE_THRESHOLD = 8;
const STD_THRESHOLD = 45;
const LUMINANCE_THRESHOLD = 180;

function load_panel_theme() {
    let file_name = GLib.build_filenamev([GLib.get_user_data_dir(), 'gnome-shell', 'extensions', Me.uuid, 'theme.css']);

    let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

    if (!theme.load_stylesheet(Util.get_file(file_name))) {
        log('[Dynamic Panel Transparency] Error Loading Theme Stylesheet');
        return null;
    }

    return file_name;
}

var Themer = class Themer {

    /**
     * Initialize.
     * @param {ImportMap["extension"]["DynamicPanel"]["prototype"]} dp
     */
    constructor(dp) {
        this.dp = dp;
        this.panel = dp.panel;

        /** @type {any[]} */
        this.stylesheets = [];
        /** @type {string[]} */
        this.styles = [];

        this.bk_color_info = null;

        /** @type {Map.<string, Object.<string, string>>} */
        this.styleStrings = new Map();

        /** @type {string[]} */
        this.background_styles = [];

        this.update_transition_css();

        this.panel.add_style_class_name('dpt-panel');
    }

    loadBackgroundInfo() {
        // TODO
        let primary_index = 0;

        ColorUtil.getBackgroundColorInfo(primary_index, (info) => {
            log(`Updating background info: ${JSON.stringify(info)}`);
            this.bk_color_info = info;

            this.initialize_background_styles();

            this.dp.intellifader.asyncCheck();
        });
    }

    /**
     *
     * @param {*} has_maximized_window
     * @returns {{translucency: number, background: number}}
     */
    calculateState(has_maximized_window) {
        let new_state = BackgroundState.TRANSLUCENT_DARK;
        let translucency = Translucency.HIGH;

        if (has_maximized_window) {
            new_state = BackgroundState.MAXIMIZED;
            translucency = Translucency.SOLID;
        } else if (this.bk_color_info == null) {
            new_state = BackgroundState.DARK;
            translucency = Translucency.SOLID;
        } else {
            const luminance_std = Math.sqrt(this.bk_color_info.luminance_variance);

            const bg_is_busy = luminance_std > STD_THRESHOLD ||
                (this.bk_color_info.mean_luminance < LUMINANCE_THRESHOLD &&
                    this.bk_color_info.mean_luminance + 1.645 * luminance_std > LUMINANCE_THRESHOLD) ||
                this.bk_color_info.mean_acutance > ACUTANCE_THRESHOLD;

            const bg_is_dark = this.bk_color_info.mean_luminance > LUMINANCE_THRESHOLD;
            const bg_is_busy_dark = this.bk_color_info.mean_luminance * 1.25 > LUMINANCE_THRESHOLD;

            let translucency_difference = this.bk_color_info.mean_luminance - LUMINANCE_THRESHOLD;

            if (translucency_difference <= -40) {
                translucency = Translucency.SOLID;
            } else if (translucency_difference <= -30) {
                translucency = Translucency.LOW;
            } else if (translucency_difference <= -20) {
                translucency = Translucency.LOW_MID;
            } else if (translucency_difference <= -10) {
                translucency = Translucency.MID;
            } else if (translucency_difference <= 0) {
                translucency = Translucency.MID_HIGH;
            } else {
                translucency = Translucency.HIGH;
            }

            if (bg_is_busy && bg_is_busy_dark) {
                new_state = BackgroundState.TRANSLUCENT_LIGHT;
            } else if (bg_is_busy) {
                new_state = BackgroundState.TRANSLUCENT_DARK;
            } else if (bg_is_dark) {
                new_state = BackgroundState.LIGHT;
            } else {
                new_state = BackgroundState.DARK;
            }
        }

        log(`new state: ${new_state} : trans: ${translucency}`);

        return { translucency, background: new_state };
    }

    /**
     * @param {Object.<string, string>} styles
     */
    update_style(styles) {
        const { panel } = this;

        /** @type {string} */
        const current_style = panel.get_style();

        const style_map = (current_style || '')
            .split(';')
            .map(s => s.split(':').map(x => x.trim()))
            .reduce((prev, [key, val]) => {
                if (typeof key === 'string' && typeof val === 'string' && key) {
                    prev[key] = val;
                }

                return prev;
            }, /** @type {Object.<string, string>} */ ({}));
        log(JSON.stringify(style_map));
        const updated_style_map = Object.assign(style_map, styles);
        log(JSON.stringify(updated_style_map));
        const updated_style = Object.keys(updated_style_map).map(k => `${k}: ${style_map[k]}`).join(";");
        log(JSON.stringify(updated_style));
        panel.set_style(updated_style);
    }

    remove_all_unmaximized_classes() {
        const { panel } = this;

        panel.remove_style_class_name('dpt-panel-unmaximized-dark');
        panel.remove_style_class_name('dpt-panel-unmaximized-light');

        [0, 1, 2, 3, 4].forEach(x => {
            panel.remove_style_class_name(`dpt-panel-unmaximized-dark-${x}`);
            panel.remove_style_class_name(`dpt-panel-unmaximized-light-${x}`);
        });
    }

    remove_all_maximized_classes() {
        const { panel } = this;

        panel.remove_style_class_name('dpt-panel-maximized');
    }

    set_blank() {
        const { panel } = this;

        panel.remove_style_class_name('dpt-panel-light');
    }

    set_maximized_auto_background_color() {
        const { panel } = this;

        panel.remove_style_class_name('dpt-panel-light');

        this.remove_all_unmaximized_classes();

        panel.add_style_class_name('dpt-panel-maximized');
    }

    set_unmaximized_auto_background_color() {
        const { background, translucency } = this.calculateState(false);

        log(`state: ${background} / ${translucency}`);

        const { panel } = this;

        this.remove_all_maximized_classes();

        switch (background) {
            case BackgroundState.DARK:
            case BackgroundState.TRANSLUCENT_DARK:
                panel.remove_style_class_name('dpt-panel-light');
                break;
            case BackgroundState.LIGHT:
            case BackgroundState.TRANSLUCENT_LIGHT:
                panel.add_style_class_name('dpt-panel-light');
                break;
        }

        switch (background) {
            case BackgroundState.DARK:
                panel.add_style_class_name('dpt-panel-unmaximized-dark');
                break;
            case BackgroundState.LIGHT:
                panel.add_style_class_name('dpt-panel-unmaximized-light');
                break;
            case BackgroundState.MAXIMIZED:
                panel.add_style_class_name('dpt-panel-unmaximized-dark');
                break;
            case BackgroundState.TRANSLUCENT_DARK:
                if (translucency == Translucency.SOLID) {
                    panel.add_style_class_name('dpt-panel-unmaximized-dark');
                } else {
                    panel.add_style_class_name(`dpt-panel-unmaximized-dark-${translucency}`);
                }
                break;
            case BackgroundState.TRANSLUCENT_LIGHT:
                if (translucency == Translucency.SOLID) {
                    panel.add_style_class_name('dpt-panel-unmaximized-light');
                } else {
                    panel.add_style_class_name(`dpt-panel-unmaximized-light-${translucency}`);
                }
                break;
        }
    }

    /**
     * @param {string} name
     */
    add_class(name) {
        const styles = this.styleStrings.get(name);

        if (styles) {
            this.update_style(styles);
        }
    }

    /**
     * Used to release any held assets of theming.
     *
     */
    cleanup() {
        const { panel } = this;

        for (let style of this.styles) {
            panel.remove_style_class_name(style);
        }

        for (let style of this.background_styles) {
            panel.remove_style_class_name(style);
        }

        panel.remove_style_class_name('dpt-panel');
        panel.remove_style_class_name('dpt-panel-light');

        this.remove_all_maximized_classes();
        this.remove_all_unmaximized_classes();

        panel.set_style("");

        this.background_styles = null;
        this.stylesheets = null;
        this.styles = null;
    }

    /**
     * Adds the currently registered shadow stylesheet to the text in the panel.
     *
     */
    add_text_shadow() {
        const { panel } = this;

        panel.add_style_class_name('panel-text-shadow');
    }



    /**
     * Adds the currently register shadow stylesheet to icons in the panel.
     *
     */
    add_icon_shadow() {
        const { panel } = this;

        panel.add_style_class_name('panel-icon-shadow');
        panel.add_style_class_name('panel-arrow-shadow');
    }

    /**
     * Determines if the panel currently has text shadowing applied.
     *
     * @returns {Boolean} If the panel has text shadowing.
     */
    has_text_shadow() {
        const { panel } = this;

        return panel.has_style_class_name('panel-text-shadow');
    }

    /**
     * Determines if the panel currently has icon shadowing applied.
     *
     * @returns {Boolean} If the panel has icon shadowing.
     */
    has_icon_shadow() {
        const { panel } = this;

        return (panel.has_style_class_name('panel-icon-shadow') || panel.has_style_class_name('panel-arrow-shadow'));
    }

    /**
     * Removes any text shadowing; de-registering the stylesheet and removing the css.
     *
     */
    remove_text_shadow() {
        const { panel } = this;

        panel.remove_style_class_name('panel-text-shadow');
    }

    /**
     * Removes any icon shadowing; de-registering the stylesheet and removing the css.
     *
     */
    remove_icon_shadow() {
        const { panel } = this;

        panel.remove_style_class_name('panel-icon-shadow');
        panel.remove_style_class_name('panel-arrow-shadow');
    }



    /**
     * Sets which registered text color stylesheet to use for the text coloring. @see register_text_color
     */
    set_text_color() {
        const { panel } = this;

        panel.add_style_class_name('panel-text-color');
        panel.add_style_class_name('panel-icon-color');
        panel.add_style_class_name('panel-arrow-color');
    }

    /**
     * Remove a registered text color stylesheet from the panel. @see set_text_color
     */
    remove_text_color() {
        const { panel } = this;

        panel.remove_style_class_name('panel-text-color');
        panel.remove_style_class_name('panel-icon-color');
        panel.remove_style_class_name('panel-arrow-color');
    }

    /**
     * Registers any custom style so that it can be removed when the extension is disabled.
     *
     * @param {string} style - The name of a CSS styling.
     */
    register_style(style) {
        if (this.styles.indexOf(style) === -1) {
            this.styles.push(style);
        }
    }

    /**
     * Returns the user's desired panel color from Settings. Handles theme detection again.
     * DEPENDENCY: Settings
     *
     * @returns {Object} Object containing an RGBA color value.
     */
    get_background_color() {
        const settings = Settings.get();
        let custom = settings.panelColor();


        if (!settings.enableCustomBackgroundColor()) {
            return null;
        } else {
            return custom.value;
        }
    }

    /**
     * Applies the style class 'panel-effect-transparency' and removes the basic CSS preventing this extension's transitions.
     *
     */
    strip_panel_styling() {
        const { panel } = this;
        panel.add_style_class_name('panel-effect-transparency');
    }

    /**
     * Removes the style class 'panel-effect-transparency' and enables the stock CSS preventing this extension's transitions.
     *
     */
    reapply_panel_styling() {
        const { panel } = this;
        panel.remove_style_class_name('panel-effect-transparency');
    }

    /**
     * Applies the style class 'panel-background-image-transparency' and removes the basic CSS preventing this extension's transitions.
     *
     */
    strip_panel_background_image() {
        const { panel } = this;
        panel.add_style_class_name('panel-background-image-transparency');
    }

    /**
     * Removes the style class 'panel-background-image-transparency' and enables the stock CSS preventing this extension's transitions.
     *
     */
    reapply_panel_background_image() {
        const { panel } = this;
        panel.remove_style_class_name('panel-background-image-transparency');
    }


    // panel.set_style(`
    // ${style || ''}
    // /*START OF ${name}*/
    // ${css}
    // /*END OF ${name}*/`);
    //     }
    /**
     * Writes CSS data to a file and loads the stylesheet into the Shell.
     *
     * @param {Object.<string, string>} css - CSS data.
     * @param {string} class_name - Name of the intended CSS stylesheet.
     *
     */
    apply_stylesheet_css(class_name, css) {
        this.styleStrings.set(class_name, css);
    }

    /* Backend24 (3.24+) Specific Functions (Not backwards compatible) */

    initialize_background_styles() {
        const settings = Settings.get();

        let max, min;
        if (settings._enable_opacity()) {
            max = settings._maximizedOpacity();
            min = settings._unmaximizedOpacity();
        } else {
            const { translucency } = this.calculateState(false);
            max = 255;

            switch (translucency) {
                case Translucency.LOW:
                    min = 0.1;
                case Translucency.LOW_MID:
                    min = 0.2;
                case Translucency.MID:
                    min = 0.3;
                case Translucency.MID_HIGH:
                    min = 0.4;
                case Translucency.HIGH:
                    min = 0.5;
                case Translucency.SOLID:
                    min = 1.0;
            }
        }

        this.register_custom_background_color(settings.panelColor(), max, min);
    }

    cleanup_background_styles() {
        this.remove_background_color();
    }

    /**
     * @param {string} style
     */
    register_background_style(style) {
        if (this.background_styles.indexOf(style) === -1) {
            this.background_styles.push(style);
        }
    }

    /**
     * @param {{ red: string; green: string; blue: string; }} bg_color
     * @param {number} [maximized_opacity]
     * @param {number} [unmaximized_opacity]
     */
    register_custom_background_color(bg_color, maximized_opacity, unmaximized_opacity) {
        let _maximized_opacity = Util.clamp(((maximized_opacity) / SCALE_FACTOR), 0, 1).toFixed(2);
        let _unmaximized_opacity = Util.clamp(((unmaximized_opacity) / SCALE_FACTOR), 0, 1).toFixed(2);

        let maximized_bg_color_css = 'rgba(' + bg_color.red + ', ' + bg_color.green + ', ' + bg_color.blue + ', ' + _maximized_opacity + ')';
        let unmaximized_bg_color_css = 'rgba(' + bg_color.red + ', ' + bg_color.green + ', ' + bg_color.blue + ', ' + _unmaximized_opacity + ')';

        this.register_background_style(`dpt-panel-custom-maximized`);
        this.register_background_style(`dpt-panel-custom-unmaximized`);

        this.apply_stylesheet_css(`dpt-panel-custom-unmaximized`, { 'background-color': unmaximized_bg_color_css });

        this.apply_stylesheet_css(`dpt-panel-custom-maximized`, { 'background-color': maximized_bg_color_css });
    }

    set_unmaximized_background_color(prefix = 'custom') {
        if (prefix) {
            prefix = '-' + prefix + '-';
        } else {
            prefix = '-';
        }

        let style = 'dpt-panel' + prefix + 'unmaximized';

        this.add_class(style);
    }

    set_maximized_background_color(prefix = 'custom') {
        if (prefix) {
            prefix = '-' + prefix + '-';
        } else {
            prefix = '-';
        }

        let style = 'dpt-panel' + prefix + 'maximized';

        this.add_class(style);
    }

    remove_unmaximized_background_color(prefix = 'custom') {
        const { panel } = this;
        if (prefix) {
            prefix = '-' + prefix + '-';
        } else {
            prefix = '-';
        }

        panel.remove_style_class_name('dpt-panel' + prefix + 'unmaximized');
    }

    remove_maximized_background_color(prefix = 'custom') {
        const { panel } = this;
        if (prefix) {
            prefix = '-' + prefix + '-';
        } else {
            prefix = '-';
        }

        panel.remove_style_class_name('dpt-panel' + prefix + 'maximized');
    }

    remove_background_color() {
        const { panel } = this;

        this.remove_all_maximized_classes();
        this.remove_all_unmaximized_classes();

        for (let style of this.background_styles) {
            panel.remove_style_class_name(style);
        }
    }

    update_transition_css() {
        let duration_css = Settings.get()._transitionSpeed();

        this.apply_stylesheet_css('panel-transition-duration', { 'transition-duration': `${duration_css}ms;` });

        this.add_class('panel-transition-duration');

        this.register_style('panel-transition-duration');

    }
}

module.exports = { Themer, Translucency, BackgroundState, load_panel_theme };