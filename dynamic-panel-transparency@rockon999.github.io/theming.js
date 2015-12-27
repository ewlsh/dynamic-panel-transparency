const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Settings = Me.imports.settings;
const Transitions = Me.imports.transitions;
const Extension = Me.imports.extension;
const Clutter = imports.gi.Clutter;
const Main = imports.ui.main;
const Lang = imports.lang;
const Config = imports.misc.config;
const Panel = Main.panel;
const Util = Me.imports.util;

/* Color Array Indices */
const RED = 0;
const GREEN = 1;
const BLUE = 2;
const SCALE_FACTOR = 255.9999999;

function init() {}

function cleanup() {}

function set_panel_color(params = null) {
    let panel_color = get_background_color();
    let current_alpha = get_background_alpha(Panel.actor);
    if (params === null)
        params = {
            red: panel_color[RED],
            green: panel_color[GREEN],
            blue: panel_color[BLUE],
            opacity: Settings.get_maximum_opacity()
        };
    Panel.actor.set_background_color(new Clutter.Color({
        red: Util.validate(params.red, panel_color[RED]),
        green: Util.validate(params.green, panel_color[GREEN]),
        blue: Util.validate(params.blue, panel_color[BLUE]),
        alpha: (Util.is_undef(params.opacity) ? current_alpha : params.opacity)
    }));
}

function set_corner_color(params = null) {
    let panel_color = Settings.get_panel_color();
    let current_alpha = get_background_alpha(Panel._leftCorner.actor);
    if (params === null)
        params = {
            red: panel_color[RED],
            green: panel_color[GREEN],
            blue: panel_color[BLUE],
            opacity: Settings.get_maximum_opacity()
        };
    let opacity = Util.is_undef(params.opacity) ? current_alpha : params.opacity;
    let red = Util.validate(params.red, panel_color[RED]);
    let green = Util.validate(params.green, panel_color[GREEN]);
    let blue = Util.validate(params.blue, panel_color[BLUE]);
    let coloring = '-panel-corner-background-color: rgba(' + red + ', ' + green + ', ' + blue + ', ' + (opacity / SCALE_FACTOR) + ');' +
        '' + '-panel-corner-border-color: transparent;';
    Panel._leftCorner.actor.set_style(coloring);
    Panel._rightCorner.actor.set_style(coloring);
}

function clear_corner_color() {
    Panel._leftCorner.actor.set_style(null);
    Panel._rightCorner.actor.set_style(null);
}


function get_user_background_color_from_dash() {

    // Prevent shell crash if the actor is not on the stage.
    // It happens enabling/disabling repeatedly the extension
    if (Util.is_undef(Main.overview._dash._container.get_stage()))
        return Settings.get_panel_color();
    let theme = Main.overview._dash._container.get_theme_node();
    let user_theme = theme.get_parent();
    if (user_theme === null)
        user_theme = theme;
    let background_color = user_theme.get_background_color();
    if (background_color === null)
        background_color = user_theme.lookup_color('background-color', true);
    return {
        red: background_color.r,
        green: background_color.g,
        blue: background_color.b,
        opacity: background_color.a
    };
}

function get_user_background_color_from_dock() {
    let theme = Panel.actor.get_theme_node();
    let user_theme = theme.get_parent();
    if (user_theme === null)
        user_theme = theme;
    let background_color = user_theme.get_background_color();
    if (background_color === null)
        background_color = user_theme.lookup_color('background-color', true);
    return {
        red: background_color.r,
        green: background_color.g,
        blue: background_color.b,
        opacity: background_color.a
    };
}

function get_background_color() {
    if (Settings.detect_user_theme()) {
        if (Settings.get_user_theme_source().toLowerCase() == 'dock') {
            return get_user_background_color_from_dock();
        } else {
            return get_user_background_color_from_dash();
        }
    } else {
        return Settings.get_panel_color();
    }
}

function strip_panel_css() {
    Panel.actor.add_style_class_name('panel-transparency');
}

function reapply_panel_css() {
    Panel.actor.remove_style_class_name('panel-transparency');
}

/* Special Property Methods */

function get_background_alpha(actor) {
    return actor.get_background_color().alpha;
}

function set_background_alpha(actor, alpha) {
    let background_color = actor.get_background_color();
    actor.set_background_color(new Clutter.Color({
        red: background_color.red,
        green: background_color.green,
        blue: background_color.blue,
        alpha: alpha
    }));
}