/* exported get_maximized_width_buffer, get_shell_version,validate, is_undef, clamp, is_maximized */
/* exported remove_file, get_file, write_to_file, get_app_for_window, get_app_for_wmclass, gdk_to_css_color */

const Gio = imports.gi.Gio;

/* Global Utility Variables */
const MAXIMIZED_WIDTH_BUFFER = 5;

/* Gnome Versioning */
const MAJOR_VERSION = parseInt(imports.misc.config.PACKAGE_VERSION.split('.')[0]);
const MINOR_VERSION = parseInt(imports.misc.config.PACKAGE_VERSION.split('.')[1]);

/* Utility Variable Access */

function get_maximized_width_buffer() {
    return MAXIMIZED_WIDTH_BUFFER;
}

function get_shell_version() {
    return { major: MAJOR_VERSION, minor: MINOR_VERSION };
}

/* Utility Functions */

function validate(a, b) {
    return (is_undef(a) === false ? a : b);
}

function is_undef(a) {
    return (typeof (a) === 'undefined' || a === null);
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function is_maximized(window) {
    let type = window.get_window_type();

    if (type === imports.gi.Meta.WindowType.DESKTOP) {
        return false;
    }

    if (window.maximized_vertically) {
        return true;
    }

    let frame = window.get_frame_rect();

    if (frame.y <= imports.ui.main.panel.actor.get_height()) {
        return (window.maximized_horizontally || frame.width >= (window.get_screen().get_size()[0] - MAXIMIZED_WIDTH_BUFFER));
    }

    return false;
}

function join() {

}

function get_file(filename) {
    try {
        let file = Gio.file_new_for_path(filename);
        return file;
    } catch (error) {
        return null;
    }
}

function write_to_file(filename, text) {
    try {
        let file = get_file(filename);
        let success = file.replace_contents(text, null, false, Gio.FileCreateFlags.REPLACE_DESTINATION, null, null);
        return success;
    } catch (error) {
        log(error);
    }

    return false;
}

function remove_file(filename) {
    try {
        let file = get_file(filename);
        return file.delete(null);
    } catch (error) {
        log(error);
    }

    return false;
}

function get_app_for_window(window) {
    const Shell = imports.gi.Shell;

    let shell_app = Shell.WindowTracker.get_default().get_app_from_pid(window.get_pid());
    if (is_undef(shell_app))
        shell_app = Shell.AppSystem.get_default().lookup_startup_wmclass(window.get_wm_class());
    if (is_undef(shell_app))
        shell_app = Shell.AppSystem.get_default().lookup_desktop_wmclass(window.get_wm_class());
    return shell_app;
}

function gdk_to_css_color(color) {
    let red = Math.round(clamp((color.red * 255), 0, 255));
    let green = Math.round(clamp((color.green * 255), 0, 255));
    let blue = Math.round(clamp((color.blue * 255), 0, 255));

    return { 'red': red, 'green': green, 'blue': blue };
}

