const MAXIMIZED_WIDTH_BUFFER = 5;

/* Utilities */

function validate(a, b) {
    return (is_undef(a) === false ? a : b);
}

function is_undef(a) {
    return (typeof(a) === 'undefined' || a === null);
}

function is_maximized(window) {
    if (window.maximized_vertically)
        return true;
    let frame = window.get_frame_rect();
    if (frame.y <= imports.ui.main.panel.actor.get_height()) {
        return (window.maximized_horizontally || frame.width >= (window.get_screen().get_size()[0] - MAXIMIZED_WIDTH_BUFFER))
    }
    return false;
}