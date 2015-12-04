/* Utilities */

function validate(a, b) {
    return (!is_undef(a) ? a : b);
}

function is_undef(a) {
    return (typeof(a) === 'undefined' || a === null);
}

function is_maximized(window) {
    if (window.maximized_vertically)
        return true;
    var frame = window.get_frame_rect();
    /* Debugging */
    /*log('start --');
    log(frame.y);
    log(imports.ui.main.panel.actor.get_height());
    log(window.maximized_horizontally);
    log(frame.width);
    log(window.get_screen().get_size()[0]);
    log('--end')*/
    if (frame.y <= imports.ui.main.panel.actor.get_height()) {
        return (window.maximized_horizontally || frame.width >= (window.get_screen().get_size()[0] - 5))
    }
    return false;
}