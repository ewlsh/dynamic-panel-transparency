const Meta = imports.gi.Meta;

/* Global Utility Variables */
const MAXIMIZED_WIDTH_BUFFER = 5;

/* Gnome Versioning */
const MAJOR_VERSION = parseInt(imports.misc.config.PACKAGE_VERSION.split('.')[0]);
const MINOR_VERSION = parseInt(imports.misc.config.PACKAGE_VERSION.split('.')[1]);

/* Utility Variable Access */

function get_maximized_width_buffer(){
    return MAXIMIZED_WIDTH_BUFFER;
}

function get_shell_version(){
    return {major: MAJOR_VERSION, minor: MINOR_VERSION};
}

/* Utility Functions */

function validate(a, b) {
    return (is_undef(a) === false ? a : b);
}

function is_undef(a) {
    return (typeof(a) === 'undefined' || a === null);
}

function is_maximized(window) {
    let type = window.get_window_type();

    if(type == Meta.WindowType.DESKTOP || type == Meta.WindowType.DOCK){
        return false;
    }

    if (window.maximized_vertically){
        return true;
    }

    let frame = window.get_frame_rect();

    if (frame.y <= imports.ui.main.panel.actor.get_height()) {
        return (window.maximized_horizontally || frame.width >= (window.get_screen().get_size()[0] - MAXIMIZED_WIDTH_BUFFER))
    }

    return false;
}