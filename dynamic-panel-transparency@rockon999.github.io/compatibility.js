/* exported get_transitions, st_border_image_get_file, st_theme_load_stylesheet, st_theme_unload_stylesheet, g_signal_connect, g_signal_connect_after, gtk_color_button_set_show_editor, gtk_scrolled_window_set_overlay_scrolling, parse_css */

/* Provides a version compatibility layer for Gtk, GObject, St, etc. functions.*/
/* Uses C function names. */

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Util = Me.imports.util;

const SHELL_VERSION = Util.get_shell_version();

const Compatibility = {
    st_theme_load_stylesheet: { major: 3, minor: 14 },
    st_theme_unload_stylesheet: { major: 3, minor: 14 },
    st_border_image_get_file: { major: 3, minor: 14 },
    gtk_color_button_set_show_editor: { major: 3, minor: 18 },
    gtk_scrolled_window_set_overlay_scrolling: { major: 3, minor: 14 },
    css: { '-gtk-icon-shadow': { major: 3, minor: 18, fallback: 'icon-shadow' } },
    transitions: { major: 3, minor: 22 }
};
Util.deep_freeze(Compatibility, true);

const get_theming_manager = function() {
    if (SHELL_VERSION.major === Compatibility.transitions.major && SHELL_VERSION.minor > Compatibility.transitions.minor) {
        log("using modern theming");
        return Me.imports['theming-3-24'];
    }
    return Me.imports.theming;
};

const get_transition_manager = function() {
    if (SHELL_VERSION.major === Compatibility.transitions.major && SHELL_VERSION.minor > Compatibility.transitions.minor) {
        log("using transition theming");
        return Me.imports['transitions-3-24'];
    }
    return Me.imports.transitions;
};

/* st-border-image in 3.14 uses strings, not Gio.File */
const st_border_image_get_file = function(border_image) {
    if (SHELL_VERSION.major === Compatibility.st_border_image_get_file.major && SHELL_VERSION.minor > Compatibility.st_border_image_get_file.minor) {
        return border_image.get_file();
    }
    return Util.get_file(border_image.get_filename());
};

/* st-theme in 3.14 uses strings, not Gio.File */
const st_theme_load_stylesheet = function(theme, file_name) {
    if (SHELL_VERSION.major === Compatibility.st_theme_load_stylesheet.major && SHELL_VERSION.minor > Compatibility.st_theme_load_stylesheet.minor) {
        file_name = Util.get_file(file_name);
    }
    return theme.load_stylesheet(file_name);

};

/* st-theme in 3.14 uses strings, not Gio.File */
const st_theme_unload_stylesheet = function(theme, file_name) {
    if (SHELL_VERSION.major === Compatibility.st_theme_unload_stylesheet.major && SHELL_VERSION.minor > Compatibility.st_theme_unload_stylesheet.minor) {
        file_name = Util.get_file(file_name);
    }
    return theme.unload_stylesheet(file_name);
};

/* show-editor apparently only exists in 3.20+. */
const gtk_color_button_set_show_editor = function(widget, value) {
    if (SHELL_VERSION.major === Compatibility.gtk_color_button_set_show_editor.major && SHELL_VERSION.minor > Compatibility.gtk_color_button_set_show_editor.minor) {
        widget.show_editor = value;
    }
};

/* 3.14 lacks a lot of useful features */
const gtk_scrolled_window_set_overlay_scrolling = function(widget, value) {
    if (SHELL_VERSION.major === Compatibility.gtk_scrolled_window_set_overlay_scrolling.major && SHELL_VERSION.minor > Compatibility.gtk_scrolled_window_set_overlay_scrolling.minor) {
        widget.set_overlay_scrolling(value);
    }
};

/* Parses CSS... not a C function */
const parse_css = function(css) {
    for (let key of Object.keys(Compatibility.css)) {
        if (SHELL_VERSION.major === Compatibility.css[key].major && SHELL_VERSION.minor <= Compatibility.css[key].minor) {
            css = css.replace(key, Compatibility.css[key].fallback);
        }
    }
    return css;
};