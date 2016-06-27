const Meta = imports.gi.Meta;
const Gio = imports.gi.Gio;
const Shell = imports.gi.Shell;
const GLib = imports.gi.GLib;

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

function is_maximized(window) {
    let type = window.get_window_type();

    if (type == Meta.WindowType.DESKTOP || type == Meta.WindowType.DOCK) {
        return false;
    }

    if (window.maximized_vertically) {
        return true;
    }

    let frame = window.get_frame_rect();

    if (frame.y <= imports.ui.main.panel.actor.get_height()) {
        return (window.maximized_horizontally || frame.width >= (window.get_screen().get_size()[0] - MAXIMIZED_WIDTH_BUFFER))
    }

    return false;
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
        // let data_output = new Gio.DataOutputStream({ base_stream: stream });
        // if (data_output.put_string(text, null))
        //     if (data_output.close_finish() && stream.close_finish())

        return success; //      return true;
    } catch (error) { }

    return false;
}

function remove_file(filename) {
    try {
        let file = get_file(filename);
        return file.delete(null);
    } catch (error) { }

    return false;
}

function get_app(window) {
    let shell_app = Shell.WindowTracker.get_default().get_app_from_pid(window.get_pid());
    if (!shell_app)
        shell_app = Shell.AppSystem.get_default().lookup_startup_wmclass(window.get_wm_class());
    if (!shell_app)
        shell_app = Shell.AppSystem.get_default().lookup_desktop_wmclass(window.get_wm_class());
    return shell_app;
}