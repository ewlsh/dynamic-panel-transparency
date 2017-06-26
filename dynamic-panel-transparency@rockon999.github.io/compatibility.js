/* exported meets, get_transition_manager, get_theming_manager, st_border_image_get_file, st_theme_load_stylesheet, st_theme_unload_stylesheet, g_signal_connect, g_signal_connect_after, gtk_color_button_set_show_editor, gtk_scrolled_window_set_overlay_scrolling, parse_css */

/* Provides a version compatibility layer for Gtk, GObject, St, etc. functions.*/
/* Uses C function names. */

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Util = Me.imports.util;

const SHELL_VERSION = Util.get_shell_version();

const Compatibility = {
    st_theme_load_stylesheet: { major: 3, minor: 16 },
    st_theme_unload_stylesheet: { major: 3, minor: 16 },
    st_border_image_get_file: { major: 3, minor: 16 },
    gtk_color_button_set_show_editor: { major: 3, minor: 20 },
    gtk_scrolled_window_set_overlay_scrolling: { major: 3, minor: 16 },
    css: { '-gtk-icon-shadow': { major: 3, minor: 20, fallback: 'icon-shadow' } },
    backend24: { major: 3, minor: 24 }
};
Util.deep_freeze(Compatibility, true);

/* A function to a) directly access the compatibility table when 'a' is a string and b) check compatibility again the major/minor version (a/b) */
const meets = function(a, b) {
    if (typeof (a) === 'string') {
        return SHELL_VERSION.major === Compatibility[a].major && SHELL_VERSION.minor >= Compatibility[a].minor;
    }
    return SHELL_VERSION.major === a && SHELL_VERSION.minor >= b;
};


/* Compatibility related convenience functions. */


/* Transitions using CSS did not work prior to 3.24 due to a bug. Restrict the new backend to 3.24+ */
const get_theming_manager = function() {
    if (meets('backend24')) {
        return Me.imports['theming-3-24'];
    }
    return Me.imports.theming;
};

/* See above... */
const get_transition_manager = function() {
    if (meets('backend24')) {
        return Me.imports['transitions-3-24'];
    }
    return Me.imports.transitions;
};

/* Parses CSS... not a C function */
const parse_css = function(css) {
    for (let key of Object.keys(Compatibility.css)) {
        if (SHELL_VERSION.major === Compatibility.css[key].major && SHELL_VERSION.minor < Compatibility.css[key].minor) {
            css = css.replace(key, Compatibility.css[key].fallback);
        }
    }
    return css;
};

/* Wrappers for functions broken by API changes since 3.14. */


/* st-border-image in 3.14 uses strings, not Gio.File */
const st_border_image_get_file = function(border_image) {
    if (meets('st_border_image_get_file')) {
        return border_image.get_file();
    }
    return Util.get_file(border_image.get_filename());
};

/* st-theme in 3.14 uses strings, not Gio.File */
const st_theme_load_stylesheet = function(theme, file_name) {
    if (meets('st_theme_load_stylesheet')) {
        file_name = Util.get_file(file_name);
    }
    return theme.load_stylesheet(file_name);

};

/* st-theme in 3.14 uses strings, not Gio.File */
const st_theme_unload_stylesheet = function(theme, file_name) {
    if (meets('st_theme_unload_stylesheet')) {
        file_name = Util.get_file(file_name);
    }
    return theme.unload_stylesheet(file_name);
};

/* show-editor apparently only exists in 3.20+. */
const gtk_color_button_set_show_editor = function(widget, value) {
    if (meets('gtk_color_button_set_show_editor')) {
        widget.show_editor = value;
    }
};

/* 3.14 lacks a lot of useful features */
const gtk_scrolled_window_set_overlay_scrolling = function(widget, value) {
    if (meets('gtk_scrolled_window_set_overlay_scrolling')) {
        widget.set_overlay_scrolling(value);
    }
};