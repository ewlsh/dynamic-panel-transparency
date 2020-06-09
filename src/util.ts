import type * as clutter from 'clutter';
import type * as gdk from 'gdk';
import type * as shell from 'shell';

const { GLib, Gio } = imports.gi;

/* This import can't be a constant as it requires lazy initialization. */
let Meta = null as null | any;

/* Gnome Versioning */
const MAJOR_VERSION = parseInt(imports.misc.config.PACKAGE_VERSION.split('.')[0], 10);
const MINOR_VERSION = parseInt(imports.misc.config.PACKAGE_VERSION.split('.')[1], 10);

/* Permission setting for created files. */
const PERMISSIONS_MODE = parseInt('0744', 8);

/* Utility Variable Access */

/**
 * Returns the current shell version.
 *
 * @returns {Object} The current shell version.
 *
 */
export function get_shell_version() {
    return { major: MAJOR_VERSION, minor: MINOR_VERSION };
}

/* Utility Functions */

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
export function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Determines if 'window' is a valid window to watch.
 * Will not work outside the extension code.
 *
 * @param {Object} window - Window to check.
 *
 * @returns {Boolean} Whether 'window' is a valid window to watch.
 *
 */
export function is_valid(window: shell.EmbeddedWindow) {
    if (!Meta) {
        Meta = imports.gi.Meta;
    }

    let windowTypes = [
        Meta.WindowType.NORMAL,
        Meta.WindowType.DIALOG,
        Meta.WindowType.MODAL_DIALOG,
        Meta.WindowType.TOOLBAR,
        Meta.WindowType.MENU,
        Meta.WindowType.UTILITY,
    ];

    let type = window.get_window_type();

    return (windowTypes.indexOf(type) !== -1);
}

/**
 * Retrieves the GFile for a file path.
 *
 * @param {string} file_path - Path for a file.
 *
 * @returns {Object} GFile for the path or null if the path is not valid.
 *
 */
export function get_file(file_path: string) {
    try {
        return Gio.file_new_for_path(file_path);
    } catch (error) {
        log('[Dynamic Panel Transparency] Error getting file: ' + error);
    }

    return null;
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
export function write_to_file(file_path: string, text: string) {
    try {
        let file = get_file(file_path);
        let parent = file.get_parent();

        if (GLib.mkdir_with_parents(parent.get_path(), PERMISSIONS_MODE) === 0) {
            let success = file.replace_contents(text, null, false, Gio.FileCreateFlags.REPLACE_DESTINATION, null);
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
export function remove_file(file_path: string) {
    try {
        let file = get_file(file_path);
        let result = file.delete(null);
        return result;
    } catch (error) {
        log('[Dynamic Panel Transparency] Error removing file: ' + file_path);
        log(error);
    }

    return false;
}

/**
 * Converts a GdkColor into a JS/CSS color object.
 *
 * @param {import("gdk").RGBA} color - GdkColor to convert.
 *
 * @returns {{ red: number; green: number; blue: number;}} Converted RGB color.
 *
 */
export function gdk_to_css_color(color: gdk.RGBA) {
    let red = Math.round(clamp((color.red * 255), 0, 255));
    let green = Math.round(clamp((color.green * 255), 0, 255));
    let blue = Math.round(clamp((color.blue * 255), 0, 255));

    return { 'red': red, 'green': green, 'blue': blue };
}

/**
 * Converts a ClutterColor into a JS/CSS color object.
 *
 * @param {clutter.Color} color - ClutterColor to convert.
 * @param {Boolean} [alpha = false] - Whether to transfer the alpha value.
 *
 * @returns {Object} Converted RGB(A) color.
 *
 */
export function clutter_to_native_color(color: clutter.Color, alpha = false) {
    let output = { red: color.red, green: color.green, blue: color.blue } as NativeColor;
    if (alpha) {
        output.alpha = color.alpha;
    }
    return output;
}

type NativeColor = {red:number; green: number; blue: number; alpha?: number;};

/**
 * Converts a tuple from a GVariant (typically) into a JS/CSS color object.
 *
 * @param {[number, number, number] | [number, number, number, number]} tuple - Tuple to convert.
 *
 * @returns {NativeColor} Converted RGB(A) color.
 *
 */
export function tuple_to_native_color(tuple: [number, number, number] | [number, number, number, number]) {
    let color = { red: tuple[0], green: tuple[1], blue: tuple[2] } as NativeColor;
    if (tuple.length === 4) {
        color.alpha = tuple[3];
    }
    return color;
}

/**
 * Compares two colors for equivalency.
 *
 * @param {NativeColor} a - First color.
 * @param {NativeColor} b - Second color.
 * @param {boolean} [alpha = false] - Whether to check the alpha value.
 *
 * @returns {boolean} Whether the two colors are equal.
 *
 */
export function match_colors(a: NativeColor, b: NativeColor, alpha = false) {
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
 * @param {object} type - Object to freeze.
 * @param {boolean} [recursive = false] - Whether to recursively traverse the object's children.
 */
export function deep_freeze(type: any, recursive = false) {
    /**
    * @param {object} obj
    */
    function freeze_children(obj: any) {
        Object.keys(obj).forEach(function(value) {
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

/**
 * Prevents any arguments from passing on.
 *
 * @param {Function} method - Method to call.
 *
 */
export function strip_args(method: Function) {
    return function() {
        method.call(this);
    };
}
