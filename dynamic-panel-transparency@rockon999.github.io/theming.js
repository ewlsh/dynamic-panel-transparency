import St from 'gi://St';
import GLib from 'gi://GLib';

import * as Util from './util.js';
import { extensionUtils, main } from './shell.js';

/* Scale factor for color conversion. */
const SCALE_FACTOR = 255.9999999;

/**
 * @typedef {Object} Color - Represents a standard color object
 * @property {number} red - Red value ranging from 0-255.
 * @property {number} green - Green value ranging from 0-255.
 * @property {number} blue - Blue value ranging from 0-255.
 * @property {number=} [alpha] - Alpha value ranging from 0-1.0 with support for two decimal places.
 */

export class Theming {
    /**
     * @param {import('./main.js').DptExtension} extension
     */
    constructor(extension) {
        this.extension = extension;

        this.panel = main.panel;

        this.stylesheets = [];
        this.styles = [];

        this.background_styles = [];
    }

    setup() {
        this.update_transition_css();
    }

    /**
     * Used to release any held assets of theming.
     *
     */
    cleanup() {
        let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

        for (let style of this.styles) {
            this.panel.remove_style_class_name(style);
        }

        for (let style of this.background_styles) {
            this.panel.remove_style_class_name(style);
        }

        for (let sheet of this.stylesheets) {
            theme.unload_stylesheet(Util.get_file(sheet));
            Util.remove_file(sheet);
        }

        this.background_styles = null;
        this.stylesheets = null;
        this.styles = null;
    }

    /**
     * Registers a shadow stylesheet for text in the panel.
     *
     * @param {Color} text_color - Object representing an RGBA color.
     * @param {Number[]} text_position - Integer array containing horizontal offset, vertical offset, radius. (in that order)
     */
    register_text_shadow(text_color, text_position) {
        let text_color_css =
            'rgba(' +
            text_color.red +
            ', ' +
            text_color.green +
            ', ' +
            text_color.blue +
            ', ' +
            text_color.alpha.toFixed(2) +
            ')';
        let text_position_css =
            '' + text_position[0] + 'px ' + text_position[1] + 'px ' + text_position[2] + 'px';

        this.register_style('dpt-panel-text-shadow');

        return this.apply_stylesheet_css(
            '.dpt-panel-text-shadow .panel-button { text-shadow: ' +
                text_position_css +
                ' ' +
                text_color_css +
                '; }',
            'foreground/panel-text-shadow'
        );
    }

    /**
     * Adds the currently registered shadow stylesheet to the text in the panel.
     */
    add_text_shadow() {
        this.panel.add_style_class_name('dpt-panel-text-shadow');
    }

    /**
     * Register a shadow stylesheet for icons in the panel.
     *
     * @param {Color} icon_color - Object representing an RGBA color.
     * @param {Number[]} icon_position - Integer array containing horizontal offset, vertical offset, radius. (in that order)
     */
    register_icon_shadow(icon_color, icon_position) {
        let icon_color_css =
            'rgba(' +
            icon_color.red +
            ', ' +
            icon_color.green +
            ', ' +
            icon_color.blue +
            ', ' +
            icon_color.alpha.toFixed(2) +
            ')';
        let icon_position_css =
            '' + icon_position[0] + 'px ' + icon_position[1] + 'px ' + icon_position[2] + 'px';

        let stylesheet = this.apply_stylesheet_css(
            '.dpt-panel-icon-shadow .system-status-icon { icon-shadow: ' +
                icon_position_css +
                ' ' +
                icon_color_css +
                '; }\n.dpt-panel-arrow-shadow .popup-menu-arrow { icon-shadow: ' +
                icon_position_css +
                ' ' +
                icon_color_css +
                '; }',
            'foreground/panel-icon-shadow'
        );

        this.register_style('dpt-panel-icon-shadow');
        this.register_style('dpt-panel-arrow-shadow');

        return stylesheet;
    }

    /**
     * Adds the currently register shadow stylesheet to icons in the panel.
     *
     */
    add_icon_shadow() {
        this.panel.add_style_class_name('dpt-panel-icon-shadow');
        this.panel.add_style_class_name('dpt-panel-arrow-shadow');
    }

    /**
     * Determines if the panel currently has text shadowing applied.
     *
     * @returns {Boolean} If the panel has text shadowing.
     */
    has_text_shadow() {
        return this.panel.has_style_class_name('dpt-panel-text-shadow');
    }

    /**
     * Determines if the panel currently has icon shadowing applied.
     *
     * @returns {Boolean} If the panel has icon shadowing.
     */
    has_icon_shadow() {
        return (
            this.panel.has_style_class_name('dpt-panel-icon-shadow') ||
            this.panel.has_style_class_name('dpt-panel-arrow-shadow')
        );
    }

    /**
     * Removes any text shadowing; deregistering the stylesheet and removing the css.
     *
     */
    remove_text_shadow() {
        this.panel.remove_style_class_name('dpt-panel-text-shadow');
    }

    /**
     * Adds the currently registered hide corners stylesheet to the corners of the panel.
     *
     */
    add_hide_corners() {
        this.panel.add_style_class_name('dpt-panel-hide-corners');
    }
    /**
     * Unhides corners; deregistering the stylesheet and removing the css.
     *
     */
    remove_hide_corners() {
        this.panel.remove_style_class_name('dpt-panel-hide-corners');
    }

    /**
     * Removes any icon shadowing; deregistering the stylesheet and removing the css.
     *
     */
    remove_icon_shadow() {
        this.panel.remove_style_class_name('dpt-panel-icon-shadow');
        this.panel.remove_style_class_name('dpt-panel-arrow-shadow');
    }

    /**
     * Registers text & icon coloring.
     *
     * @param {Color} color - Object containing an RGB color value.
     * @param {string} [prefix] - What prefix to apply to the stylesheet. '-' is the default.
     */
    register_text_color(color, prefix) {
        let color_css = 'color: rgb(' + color.red + ', ' + color.green + ', ' + color.blue + ');';

        if (prefix) {
            prefix = '-' + prefix + '-';
        } else {
            prefix = '-';
        }

        let stylesheet = this.apply_stylesheet_css(
            '.dpt-panel' +
                prefix +
                'text-color .panel-button { ' +
                color_css +
                ' }\n.dpt-panel' +
                prefix +
                'icon-color .system-status-icon { ' +
                color_css +
                ' }\n.dpt-panel' +
                prefix +
                'arrow-color .popup-menu-arrow { ' +
                color_css +
                ' }',
            'foreground/panel' + prefix + 'text-color'
        );

        this.register_style('dpt-panel' + prefix + 'text-color');
        this.register_style('dpt-panel' + prefix + 'icon-color');
        this.register_style('dpt-panel' + prefix + 'arrow-color');

        return stylesheet;
    }

    /**
     * Sets which registered text color stylesheet to use for the text coloring. @see register_text_color
     *
     * @param {string} [prefix] - What stylesheet prefix to retrieve. '-' is the default.
     */
    set_text_color(prefix) {
        if (prefix) {
            prefix = '-' + prefix + '-';
        } else {
            prefix = '-';
        }

        this.panel.add_style_class_name(`dpt-panel${prefix}text-color`);
        this.panel.add_style_class_name(`dpt-panel${prefix}icon-color`);
        this.panel.add_style_class_name(`dpt-panel${prefix}arrow-color`);
    }

    /**
     * Remove a registered text color stylesheet from the panel. @see set_text_color
     *
     * @param {string} [prefix] - What stylesheet prefix to retrieve. '-' is the default.
     */
    remove_text_color(prefix) {
        if (prefix) {
            prefix = `-${prefix}-`;
        } else {
            prefix = '-';
        }

        this.panel.remove_style_class_name(`dpt-panel${prefix}text-color`);
        this.panel.remove_style_class_name(`dpt-panel${prefix}icon-color`);
        this.panel.remove_style_class_name(`dpt-panel${prefix}arrow-color`);
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
        const { settings } = this.extension;

        if (!settings.enable_custom_background_color()) {
            return {
                red: 0,
                blue: 0,
                green: 0,
            };
        }

        return settings.get_panel_color();
    }

    /**
     * Returns the user's desired maximized panel opacity from Settings or their theme.
     * DEPENDENCY: Settings
     * TODO: Needs better system to determine when default theme opacities are too low.
     *
     * @returns {Number} Alpha value from 0-255.
     */
    get_maximized_opacity() {
        const { settings } = this.extension;

        let maximized_opacity = settings.get_maximized_opacity();

        if (!settings.enable_custom_opacity()) {
            return 255;
        } else {
            return maximized_opacity;
        }
    }

    /**
     * Returns the user's desired unmaximized panel opacity from Settings or their theme.
     * DEPENDENCY: Settings
     *
     * @returns {Number} Alpha value from 0-255.
     */
    get_unmaximized_opacity() {
        const { settings } = this.extension;

        if (settings.enable_custom_opacity()) {
            return settings.get_unmaximized_opacity();
        } else {
            return 50;
        }
    }

    /**
     * Applies the style class 'panel-transparency' which makes the panel fully transparent.
     *
     */
    apply_panel_transparency() {
        this.panel.add_style_class_name('panel-transparency');
    }

    /**
     * Applies the style class 'panel-transparency' which makes the panel fully transparent.
     *
     */
    remove_panel_transparency() {
        this.panel.remove_style_class_name('panel-transparency');
    }

    /**
     * Applies the style class 'panel-effect-transparency' and removes the basic CSS preventing this extension's transitions.
     *
     */
    strip_panel_styling() {
        this.panel.add_style_class_name('panel-effect-transparency');
    }

    /**
     * Removes the style class 'panel-effect-transparency' and enables the stock CSS preventing this extension's transitions.
     *
     */
    reapply_panel_styling() {
        this.panel.remove_style_class_name('panel-effect-transparency');
    }

    /**
     * Applies the style class 'panel-background-image-transparency' and removes the basic CSS preventing this extension's transitions.
     *
     */
    strip_panel_background_image() {
        this.panel.add_style_class_name('panel-background-image-transparency');
    }

    /**
     * Removes the style class 'panel-background-image-transparency' and enables the stock CSS preventing this extension's transitions.
     *
     */
    reapply_panel_background_image() {
        this.panel.remove_style_class_name('panel-background-image-transparency');
    }

    /**
     * Writes CSS data to a file and loads the stylesheet into the Shell.
     *
     * @param {string} css - CSS data.
     * @param {string} name - Name of the intended CSS stylesheet.
     *
     * @returns {string} Filename of the stylesheet.
     */
    apply_stylesheet_css(css, name) {
        const Me = extensionUtils.getCurrentExtension();

        let file_name = GLib.build_filenamev([
            GLib.get_user_data_dir(),
            'gnome-shell',
            'extensions',
            Me.uuid,
            'styles',
            name + '.dpt.css',
        ]);

        /* Write to the file. */
        if (!Util.write_to_file(file_name, css)) {
            log(`[Dynamic Panel Transparency] Could not access: ${file_name}`);
            log('[Dynamic Panel Transparency] The extension will not until access is granted.');
            return null;
        }

        let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

        if (theme.load_stylesheet(Util.get_file(file_name))) {
            this.stylesheets.push(file_name);
        } else {
            log(`[Dynamic Panel Transparency] Error Loading Temporary Stylesheet: ${name}`);
            return null;
        }

        return file_name;
    }

    initialize_background_styles() {
        const { settings } = this.extension;

        this.panel.add_style_class_name('dpt');

        this.register_background_color(settings.get_panel_color(), 'custom');
        this.register_background_color({
            red: 0,
            green: 0,
            blue: 0,
        });
    }

    cleanup_background_styles() {
        this.panel.remove_style_class_name('dpt');

        this.remove_background_color();
    }

    register_background_style(style) {
        if (this.background_styles.indexOf(style) === -1) {
            this.background_styles.push(style);
        }
    }

    register_background_color(bg_color, prefix) {
        let suffix = prefix ? '-' + prefix : '';

        if (prefix) {
            prefix = `-${prefix}-`;
        } else {
            prefix = '-';
        }

        const maximized_opacity = Util.clamp(
            this.get_maximized_opacity() / SCALE_FACTOR,
            0,
            1
        ).toFixed(2);
        const unmaximized_opacity = Util.clamp(
            this.get_unmaximized_opacity() / SCALE_FACTOR,
            0,
            1
        ).toFixed(2);

        const rgb = [bg_color.red, bg_color.green, bg_color.blue].join(', ');
        const maximized_bg_color_css = `rgba(${rgb}, ${maximized_opacity})`;
        const unmaximized_bg_color_css = `rgba(${rgb}, ${unmaximized_opacity})`;
        const maximized_corner_color_css = `rgb(${rgb})`;
        const unmaximized_corner_color_css = `rgb(${rgb})`;

        this.register_background_style('dpt-panel' + prefix + 'maximized');
        this.register_background_style('dpt-panel' + prefix + 'unmaximized');

        const file_prefix = 'background/panel';

        const panel = this.apply_stylesheet_css(
            `
    .dpt-panel${prefix}unmaximized {
        background-color: ${unmaximized_bg_color_css};
    }

    .dpt.dpt-panel${prefix}unmaximized .panel-corner {
        -panel-corner-background-color: ${unmaximized_corner_color_css};
        -panel-corner-opacity: ${unmaximized_opacity};
    }

    .dpt-panel${prefix}maximized {
        background-color: ${maximized_bg_color_css};
    }

    .dpt.dpt-panel${prefix}maximized .panel-corner {
        -panel-corner-background-color: ${maximized_corner_color_css};
        -panel-corner-opacity: ${maximized_opacity};
    }`,
            file_prefix + suffix
        );

        return panel;
    }

    set_unmaximized_background_color(prefix) {
        if (prefix) {
            prefix = '-' + prefix + '-';
        } else {
            prefix = '-';
        }

        this.panel.add_style_class_name(`dpt-panel${prefix}unmaximized`);
    }

    set_maximized_background_color(prefix) {
        if (prefix) {
            prefix = `-${prefix}-`;
        } else {
            prefix = '-';
        }

        this.panel.add_style_class_name(`dpt-panel${prefix}maximized`);
    }

    remove_unmaximized_background_color(prefix) {
        if (prefix) {
            prefix = '-' + prefix + '-';
        } else {
            prefix = '-';
        }

        this.panel.remove_style_class_name(`dpt-panel${prefix}unmaximized`);
    }

    remove_maximized_background_color(prefix) {
        if (prefix) {
            prefix = `-${prefix}-`;
        } else {
            prefix = '-';
        }

        this.panel.remove_style_class_name(`dpt-panel${prefix}maximized`);
    }

    remove_background_color() {
        this.remove_unmaximized_background_color('custom');
        this.remove_unmaximized_background_color();

        this.remove_maximized_background_color('custom');
        this.remove_maximized_background_color();
    }

    update_transition_css() {
        const { settings } = this.extension;

        const duration_css = settings.get_transition_speed();

        const stylesheet = this.apply_stylesheet_css(
            `.dpt-panel-transition-duration {
            transition-duration: ${duration_css}ms;
        }`,
            'transitions/panel-transition-duration'
        );

        this.panel.add_style_class_name('dpt-panel-transition-duration');

        this.register_style('dpt-panel-transition-duration');

        return stylesheet;
    }
}
