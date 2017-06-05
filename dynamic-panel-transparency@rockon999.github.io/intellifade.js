/* exported check */

const GLib = imports.gi.GLib;
const Mainloop = imports.mainloop;
const Lang = imports.lang;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Transitions = Me.imports.transitions;

let timeoutId = 0;
let continueCheck = false;

function check() {


    if (timeoutId <= 0) {
        runCheck();

        timeoutId = Mainloop.timeout_add(500, Lang.bind(this, function() {
            runCheck();
            if (continueCheck) {
                continueCheck = false;
                return GLib.SOURCE_CONTINUE;
            } else {
                timeoutId = 0;
                return GLib.SOURCE_REMOVE;
            }
        }));
    } else {
        continueCheck = true;
    }

}

function runCheck() {
    let windows = global.get_window_actors();

    for (let window of windows) {
        let frame = window.get_frame_rect();

        let scale_factor = imports.gi.St.ThemeContext.get_for_stage(global.stage).scale_factor;

        let height_buffer = MAXIMIZED_HEIGHT_BUFFER * scale_factor;
        let width_buffer = MAXIMIZED_WIDTH_BUFFER * scale_factor;

        let window_touching_panel = frame.y <= (imports.ui.main.panel.actor.get_height() + height_buffer);
        let vertical_override = window_touching_panel && frame.height >= imports.ui.main.panel.actor.get_height() - height_buffer;
        let horizontal_override = window_touching_panel && frame.x <= width_buffer && frame.width >= imports.ui.main.panel.actor.get_height() - width_buffer;

        if (horizontal_override || vertical_override) {
            Transitions.fade_in();
        } else {
            return false;
        }
    }

    /* TODO: Something? Anything?

                */
}