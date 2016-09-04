/* exported init, cleanup, add_text_shadow, add_icon_shadow, has_text_shadow, has_icon_shadow, exported remove_text_shadow, remove_icon_shadow, register_text_color, register_style, exported get_background_alpha, set_background_alpha, set_text_color, set_corner_color, set_panel_color, remove_text_color, strip_panel_background, strip_panel_styling, reapply_panel_background, reapply_panel_styling, clear_corner_color */

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Util = Me.imports.util;

const Clutter = imports.gi.Clutter;
const St = imports.gi.St;

const Params = imports.misc.params;

const Main = imports.ui.main;

const Panel = Main.panel;




const SCALE_FACTOR = 255;

/**
 * Intialize.
 *
 */

function init() { this.stylesheets = []; this.styles = []; }

/**
 * Used to release any held assets of this file.
 *
 */

function cleanup() {
    for (let sheet of this.stylesheets) {
        let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();
        theme.unload_stylesheet(Util.get_file(sheet));
        Util.remove_file(sheet);
    }
    for (let style of this.styles) {
        Panel.actor.remove_style_class_name(style);
    }
    this.stylesheets = null;
    this.styles = null;
}

/**
 * Adds a shadow stylesheet to text in the panel.
 *
 * @param {Object} text_color - Object representing an RGBA color.
 * @param {Number} text_color.red - Red value ranging from 0-255.
 * @param {Number} text_color.green - Green value ranging from 0-255.
 * @param {Number} text_color.blue - Blue value ranging from 0-255.
 * @param {Number} text_color.alpha - Alpha value ranging from 0-1.0 with support for two decimal places.
 * @param {Number[]} text_position - Integer array containing horizontal offset, vertical offset, radius. (in that order)
 */

function add_text_shadow(text_color, text_position) {
    let text_color_css = 'rgba(' + text_color.red + ', ' + text_color.green + ', ' + text_color.blue + ', ' + text_color.alpha.toFixed(2) + ')';
    let text_position_css = '' + text_position[0] + 'px ' + text_position[1] + 'px ' + text_position[2] + 'px';

    apply_stylesheet_css('.dpt-panel-text-shadow .panel-button { text-shadow: ' + text_position_css + ' ' + text_color_css + '; }', 'panel-text-shadow');

    Panel.actor.add_style_class_name('dpt-panel-text-shadow');

    register_style('dpt-panel-text-shadow');
}

/**
 * Adds a shadow stylesheet to icons in the panel.
 *
 * @param {Object} icon_color - Object representing an RGBA color.
 * @param {Number} icon_color.red - Red value ranging from 0-255.
 * @param {Number} icon_color.green - Green value ranging from 0-255.
 * @param {Number} icon_color.blue - Blue value ranging from 0-255.
 * @param {Number} icon_color.alpha - Alpha value ranging from 0-1.0 with support for two decimal places.
 * @param {Number[]} icon_position - Integer array containing horizontal offset, vertical offset, radius. (in that order)
 */

function add_icon_shadow(icon_color, icon_position) {
    let icon_color_css = 'rgba(' + icon_color.red + ', ' + icon_color.green + ', ' + icon_color.blue + ', ' + icon_color.alpha.toFixed(2) + ')';
    let icon_position_css = '' + icon_position[0] + 'px ' + icon_position[1] + 'px ' + icon_position[2] + 'px';


    apply_stylesheet_css('.dpt-panel-icon-shadow .system-status-icon { icon-shadow: ' + icon_position_css + ' ' + icon_color_css + '; }', 'panel-icon-shadow');
    apply_stylesheet_css('.dpt-panel-arrow-shadow .popup-menu-arrow { icon-shadow: ' + icon_position_css + ' ' + icon_color_css + '; }', 'panel-arrow-shadow');

    Panel.actor.add_style_class_name('dpt-panel-icon-shadow');
    Panel.actor.add_style_class_name('dpt-panel-arrow-shadow');

    register_style('dpt-panel-icon-shadow');
    register_style('dpt-panel-arrow-shadow');
}

/**
 * Determines if the panel currently has text shadowing applied.
 *
 * @returns {Boolean} If the panel has text shadowing.
 */

function has_text_shadow() {
    return Panel.actor.has_style_class_name('dpt-panel-text-shadow');
}

/**
 * Determines if the panel currently has icon shadowing applied.
 *
 * @returns {Boolean} If the panel has icon shadowing.
 */

function has_icon_shadow() {
    return (Panel.actor.has_style_class_name('dpt-panel-icon-shadow') || Panel.actor.has_style_class_name('dpt-panel-arrow-shadow'));
}

/**
 * Removes any text shadowing; deregistering the stylesheet and removing the css.
 *
 */

function remove_text_shadow() {
    deregister_style('dpt-panel-text-shadow');
    Panel.actor.remove_style_class_name('dpt-panel-text-shadow');
}

/**
 * Removes any icon shadowing; deregistering the stylesheet and removing the css.
 *
 */

function remove_icon_shadow() {
    deregister_style('dpt-panel-icon-shadow');
    deregister_style('dpt-panel-arrow-shadow');
    Panel.actor.remove_style_class_name('dpt-panel-icon-shadow');
    Panel.actor.remove_style_class_name('dpt-panel-arrow-shadow');
}

/**
 * Registers text & icon coloring.
 *
 * @param {Object} color - Object containing an RGB color value.
 * @param {Number} color.red - Red value ranging from 0-255.
 * @param {Number} color.green - Green value ranging from 0-255.
 * @param {Number} color.blue - Blue value ranging from 0-255.
 * @param {string} prefix - What prefix to apply to the stylesheet. '-' is the default.
 */

function register_text_color(color, prefix) {
    let color_css = 'color: rgb(' + color.red + ', ' + color.green + ', ' + color.blue + ');';

    if (!Util.is_undef(prefix)) {
        prefix = '-' + prefix + '-';
    } else {
        prefix = '-';
    }

    apply_stylesheet_css('.dpt-panel' + prefix + 'text-color .panel-button { ' + color_css + ' }', 'panel' + prefix + 'text-color');
    apply_stylesheet_css('.dpt-panel' + prefix + 'icon-color .system-status-icon { ' + color_css + ' }', 'panel' + prefix + 'icon-color');
    apply_stylesheet_css('.dpt-panel' + prefix + 'arrow-color .popup-menu-arrow { ' + color_css + ' }', 'panel' + prefix + 'arrow-color');

    register_style('dpt-panel' + prefix + 'text-color');
    register_style('dpt-panel' + prefix + 'icon-color');
    register_style('dpt-panel' + prefix + 'arrow-color');

}

/**
 * Sets which registered text color stylesheet to use for the text coloring. @see register_text_color
 *
 * @param {string} prefix - What stylesheet prefix to retrieve. '-' is the default.
 */

function set_text_color(prefix) {
    if (this.current_prefix !== null) {
        Panel.actor.remove_style_class_name('dpt-panel' + this.current_prefix + 'text-color');
        Panel.actor.remove_style_class_name('dpt-panel' + this.current_prefix + 'icon-color');
        Panel.actor.remove_style_class_name('dpt-panel' + this.current_prefix + 'arrow-color');
    }

    if (!Util.is_undef(prefix)) {
        prefix = '-' + prefix + '-';
    } else {
        prefix = '-';
    }

    this.current_prefix = prefix;

    Panel.actor.add_style_class_name('dpt-panel' + prefix + 'text-color');
    Panel.actor.add_style_class_name('dpt-panel' + prefix + 'icon-color');
    Panel.actor.add_style_class_name('dpt-panel' + prefix + 'arrow-color');
}


/**
 * Remove a registered text color stylesheet from the text coloring. @see register_text_color
 *
 * @param {string} prefix - What stylesheet prefix to retrieve. '-' is the default.
 */
function remove_text_color(prefix) {
    if (!Util.is_undef(prefix)) {
        prefix = '-' + prefix + '-';
    } else {
        prefix = '-';
    }

    deregister_style('dpt-panel' + prefix + 'text-color');
    deregister_style('dpt-panel' + prefix + 'icon-color');
    deregister_style('dpt-panel' + prefix + 'arrow-color');

    Panel.actor.remove_style_class_name('dpt-panel' + prefix + 'text-color');
    Panel.actor.remove_style_class_name('dpt-panel' + prefix + 'icon-color');
    Panel.actor.remove_style_class_name('dpt-panel' + prefix + 'arrow-color');
}

/**
 * Registers any custom style so that it can be removed when the extension is disabled.
 *
 * @param {string} style - The name of a CSS styling.
 */
function register_style(style) {
    if (this.styles.indexOf(style) === -1)
        this.styles.push(style);
}

/**
 * Deregisters any custom style. Only use this if the style is definately not in the extension's scope anymore.
 *
 * @param {string} style - The name of a CSS styling.
 */
function deregister_style(style) {
    let index = this.styles.indexOf(style);
    this.styles.splice(index, 1);//.concat(this.styles.splice(index + 1, this.styles.length));
}

/**
 * Set's the panel's actor to a specific background color.
 *
 * @param {Object} color [color={}] - Object containing an RGBA color value.
 * @param {Number} color.red - Red value ranging from 0-255.
 * @param {Number} color.green - Green value ranging from 0-255.
 * @param {Number} color.blue - Blue value ranging from 0-255.
 * @param {Number} color.alpha - Alpha value ranging from 0-255.
 */

function set_panel_color(color) {
    let panel_color = get_background_color();
    let current_alpha = get_background_alpha(Panel.actor);

    color = Params.parse(color, {
        red: panel_color.red,
        green: panel_color.green,
        blue: panel_color.blue,
        alpha: current_alpha
    });

    Panel.actor.set_background_color(new Clutter.Color({
        red: color.red,
        green: color.green,
        blue: color.blue,
        alpha: color.alpha
    }));
}

/**
 * Set's the panel corners' actors to a specific background color.
 *
 * @param {Object} color [color={}] - Object containing an RGBA color value.
 * @param {Number} color.red - Red value ranging from 0-255.
 * @param {Number} color.green - Green value ranging from 0-255.
 * @param {Number} color.blue - Blue value ranging from 0-255.
 * @param {Number} color.alpha - Alpha value ranging from 0-255.
 */
function set_corner_color(color) {
    let panel_color = get_background_color();
    let current_alpha = get_background_alpha(Panel._leftCorner.actor);

    color = Params.parse(color, {
        red: panel_color.red,
        green: panel_color.green,
        blue: panel_color.blue,
        alpha: current_alpha
    });

    let opacity = Util.clamp(color.alpha / SCALE_FACTOR, 0, 1);


    /* I strongly dislike using a deprecated method (set_style)
     * but this is a hold over from the older extension code and
     * the only way to keep per-app coloring working with corners. */
    let coloring = '-panel-corner-background-color: rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + opacity + ');' +
        '' + '-panel-corner-border-color: transparent;';

    // TODO: Update this code. We're using @deprecated code.
    Panel._leftCorner.actor.set_style(coloring);
    Panel._rightCorner.actor.set_style(coloring);
}

/**
 * Removes any corner styling this extension has applied.
 *
 */

function clear_corner_color() {
    Panel._leftCorner.actor.set_style(null);
    Panel._rightCorner.actor.set_style(null);
}

/**
 * Returns the user's desired panel color from Settings. Formerly handled theme detection.
 *
 * @returns {Object} color - Object containing an RGBA color value.
 * @returns {Number} color.red - Red value ranging from 0-255.
 * @returns {Number} color.green - Green value ranging from 0-255.
 * @returns {Number} color.blue - Blue value ranging from 0-255.
 * @returns {Number} color.alpha - Alpha value ranging from 0-255.
 */

function get_background_color() {
    return Settings.get_panel_color();
}

/**
 * Applies the style class 'panel-full-transparency' and removes the basic CSS preventing this extension's transitions.
 *
 */

function strip_panel_styling() {
    Panel.actor.add_style_class_name('panel-full-transparency');
}

/**
 * Removes the style class 'panel-full-transparency' and enables the stock CSS preventing this extension's transitions.
 *
 */

function reapply_panel_styling() {
    Panel.actor.remove_style_class_name('panel-full-transparency');
}

/**
 * Applies the style class 'panel-strip-background' and removes any CSS embellishments.
 *
 */

function strip_panel_background() {
    Panel.actor.add_style_class_name('panel-strip-background');
}

/**
 * Reapplies the style class 'panel-strip-background' and enables any CSS embellishments.
 *
 */

function reapply_panel_background() {
    Panel.actor.remove_style_class_name('panel-strip-background');
}

/**
 * Writes CSS data to a file and loads the stylesheet into the Shell.
 *
 * @param {string} css - CSS data.
 * @param {string} name - Name of the intended CSS stylesheet.
 *
 * @returns {string} Filename of the stylesheet.
 */

function apply_stylesheet_css(css, name) {
    let file_name = Me.dir.get_path() + '/styles/' + name + '.dpt.css';
    /* Write to the file. */
    if (!Util.write_to_file(file_name, css)) {
        log('Dynamic Panel Transparency cannot be installed as a system extension.');
    }
    let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();
    if (theme.load_stylesheet(Util.get_file(file_name))) {
        this.stylesheets.push(file_name);
    } else {
        log('Error Loading Temporary Stylesheet: ' + name);
    }
    return file_name;
}

// TODO: Document?

/* Methods to extend Tweener's properties. */

function get_background_alpha(actor) {
    return actor.get_background_color().alpha;
}

function set_background_alpha(actor, alpha) {
    let background_color = actor.get_background_color();

    /* Some transition algorithms go overboard. */
    alpha = Util.clamp(alpha, 0, 255);

    actor.set_background_color(new Clutter.Color({
        red: background_color.red,
        green: background_color.green,
        blue: background_color.blue,
        alpha: alpha
    }));
}



