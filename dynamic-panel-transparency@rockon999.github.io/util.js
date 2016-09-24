/* exported get_maximized_width_buffer, get_shell_version,validate, is_undef, clamp, is_maximized, match_colors, remove_file, get_file, write_to_file, get_app_for_window, get_app_for_wmclass, gdk_to_css_color, clutter_to_native_color, deep_freeze */

const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;

/* Global Utility Variables */
const MAXIMIZED_WIDTH_BUFFER = 5;

/* Gnome Versioning */
const MAJOR_VERSION = parseInt(imports.misc.config.PACKAGE_VERSION.split('.')[0], 10);
const MINOR_VERSION = parseInt(imports.misc.config.PACKAGE_VERSION.split('.')[1], 10);

/* Permission setting for created files. */
const PERMISSIONS_MODE = parseInt('0744', 8);


/* Utility Variable Access */

/**
 * Returns the width buffer for horiztonally maximized windows.
 *
 * @returns {Number} The width buffer.
 *
 */
function get_maximized_width_buffer() {
    return MAXIMIZED_WIDTH_BUFFER;
}

/**
 * Returns the current shell version.
 *
 * @returns {Object} The current shell version.
 *
 */
function get_shell_version() {
    return { major: MAJOR_VERSION, minor: MINOR_VERSION };
}


/* Utility Functions */

/**
 * Evaluates parameter 'a' and returns 'b' if 'a' is undefined or null.
 *
 * @param {Object} a - Test value.
 * @param {Object} b - Default return value.
 *
 * @returns {Object} 'b' when 'a' is null or undefined, 'a' otherwise.
 *
 */
function validate(a, b) {
    return (is_undef(a) === false ? a : b);
}

/**
 * Evaluates parameter 'a' and returns true if 'a' is undefined or null or false when not.
 *
 * @param {Object} a - Test value.
 *
 * @returns {Boolean} Whether 'a' is undefined or null.
 *
 */
function is_undef(a) {
    return (typeof (a) === 'undefined' || a === null);
}

/**
 * Evaluates parameter 'value' and returns either 'value' or 'min'/'max' if 'value' is outside of the range.
 *
 * @param {Number} value - Test value.
 * @param {Number} min - Minimum value.
 * @param {Number} max - Maximum value.
 *
 * @returns {Number} 'value' or the minimum or maximum.
 *
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Determines if 'window' is maximized.
 *
 * @param {Object} window - Window to check.
 *
 * @returns {Boolean} Whether 'window' is maximized.
 *
 */
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

/**
 * Retrieves the GFile for a file path.
 *
 * @param {string} file_path - Path for a file.
 *
 * @returns {Object} GFile for the path or null if the path is not valid.
 *
 */
function get_file(file_path) {
    try {
        let file = Gio.file_new_for_path(file_path);
        return file;
    } catch (error) {
        return null;
    }
}

/**
 * Write the given string to a file path; creating the necessary files and directories.
 *
 * @param {string} file_path - Path for a file.
 * @param {string} text - Text to write to the file.
 *
 * @returns {Boolean} Whether the file write was a success.
 *
 */
function write_to_file(file_path, text) {
    try {
        let file = get_file(file_path);
        let parent = file.get_parent();

        if (GLib.mkdir_with_parents(parent.get_path(), PERMISSIONS_MODE) === 0) {
            let success = file.replace_contents(text, null, false, Gio.FileCreateFlags.REPLACE_DESTINATION, null, null);
            return success[0];
        }
    } catch (error) {
        log('[Dynamic Panel Transparency] Error writing to file: ' + file_path);
        log(error);
    }

    return false;
}

/**
 * Deletes the given file_path.
 *
 * @param {string} file_path - Path for a file.
 *
 * @returns {Boolean} Whether the file deletion was a success.
 *
 */
function remove_file(file_path) {
    try {
        let file = get_file(file_path);
        return file.delete(null);
    } catch (error) {
        log('[Dynamic Panel Transparency] Error removing file: ' + file_path);
        log(error);
    }

    return false;
}

/**
 * Retrieve GAppInfo for a given MetaWindow.
 *
 * @param {Object} window - MetaWindow object.
 *
 * @returns {Object} GAppInfo describing the given MetaWindow.
 *
 */
function get_app_for_window(window) {
    const Shell = imports.gi.Shell;

    let shell_app = Shell.WindowTracker.get_default().get_app_from_pid(window.get_pid());
    if (is_undef(shell_app))
        shell_app = Shell.AppSystem.get_default().lookup_startup_wmclass(window.get_wm_class());
    if (is_undef(shell_app))
        shell_app = Shell.AppSystem.get_default().lookup_desktop_wmclass(window.get_wm_class());
    return shell_app;
}

/**
 * Converts a GdkColor into a JS/CSS color object.
 *
 * @param {Object} color - GdkColor to convert.
 *
 * @returns {Object} Converted RGB color.
 *
 */
function gdk_to_css_color(color) {
    let red = Math.round(clamp((color.red * 255), 0, 255));
    let green = Math.round(clamp((color.green * 255), 0, 255));
    let blue = Math.round(clamp((color.blue * 255), 0, 255));

    return { 'red': red, 'green': green, 'blue': blue };
}

/**
 * Converts a ClutterColor into a JS/CSS color object.
 *
 * @param {Object} color - ClutterColor to convert.
 * @param {Boolean} [alpha = false] - Whether to transfer the alpha value.
 *
 * @returns {Object} Converted RGB(A) color.
 *
 */
function clutter_to_native_color(color, alpha = false) {
    let output = { red: color.red, green: color.green, blue: color.blue };
    if (alpha) {
        output.alpha = color.alpha;
    }
    return output;
}

/**
 * Compares two colors for equivalency.
 *
 * @param {Object} a - First color.
 * @param {Object} a - Second color.
 * @param {Boolean} [alpha = false] - Whether to check the alpha value.
 *
 * @returns {Boolean} Whether the two colors are equal.
 *
 */
function match_colors(a, b, alpha = false) {
    let result = (a.red === b.red);
    result = result && (a.green === b.green);
    result = result && (a.blue === b.blue);
    if (alpha) {
        result = result && (a.alpha === b.alpha);
    }
    return result;
}

/**
 * Freezes an Object's and its children.
 *
 * @param {Object} type - Object to freeze.
 * @param {Boolean} [recursive = false] - Whether to recursively traverse the object's children.
 *
 */
function deep_freeze(type, recursive = false) {
    const freeze_children = function (obj) {
        Object.keys(obj).forEach(function (value, index, arr) {
            if (typeof (value) === 'object' && !Object.isFrozen(value)) {
                Object.freeze(value);
                if (recursive) {
                    freeze_children(value);
                }
            }
        });
    };
    Object.freeze(type);
    freeze_children(type);
}