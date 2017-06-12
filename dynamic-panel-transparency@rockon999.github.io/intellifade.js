/* exported asyncCheck, syncCheck, forceSyncCheck */

const GLib = imports.gi.GLib;
const Mainloop = imports.mainloop;
const Lang = imports.lang;

const Meta = imports.gi.Meta;

const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Compatibility = Me.imports.compatibility;

let Transitions = Compatibility.get_transition_manager();
let Theming = Compatibility.get_theming_manager();

let timeoutId = 0;
let continueCheck = false;

let override_optimization = false;

const Events = Me.imports.events;
const Settings = Me.imports.settings;

const Util = Me.imports.util;

function forceSyncCheck() {
    override_optimization = true;
    syncCheck();
}

function syncCheck() {
    continueCheck = false;
    Mainloop.source_remove(timeoutId);
    timeoutId = 0;
    _check();
}

function asyncCheck() {
    if (timeoutId <= 0) {
        _check();

        timeoutId = Mainloop.timeout_add(400, Lang.bind(this, function() {
            _check();

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

function _check() {
    if (Main.overview._shown) {
        return;
    }

    let workspace = global.screen.get_active_workspace();
    let windows = workspace.list_windows();
    windows = global.display.sort_windows_by_stacking(windows);

    let focused_window = global.display.get_focus_window();

    Events.maximized_window = null;

    let add_transparency = true;
    let force_transparency = false;

    /* Handle desktop icons (they're a window too) */
    if (focused_window && focused_window.get_window_type() === Meta.WindowType.DESKTOP) {
        add_transparency = true;
        Events.maximized_window = focused_window;
    } else {
        /* Save processing time by checking the current focused window (most likely to be maximized) */
        /* Check that the focused window is in the right workspace. (I really hope it always is...) */
        /* Don't do the 'quick check' if we have trigger apps/windows as they might not be focused. */
        for (let i = windows.length - 1; i >= 0; i--) {
            let current_window = windows[i];

            if (!current_window.showing_on_its_workspace() || !current_window.is_on_primary_monitor()) {
                continue;
            }

            if (Settings.check_triggers()) {
                /* Check if the current WM_CLASS is a trigger. */
                if (Settings.get_trigger_windows().indexOf(current_window.get_wm_class()) !== -1) {
                    add_transparency = false;
                    Events.maximized_window = current_window;
                    break;
                }

                let app = this._wm_tracker.get_window_app(current_window);

                /* Check if the found app exists and if it is a trigger app. */
                if (app && Settings.get_trigger_apps().indexOf(app.get_id()) !== -1) {
                    add_transparency = false;
                    Events.maximized_window = current_window;
                    break;
                }
            }

            /* Make sure the window is on the correct monitor, isn't minimized, isn't supposed to be excluded, and is actually maximized. */
            if (!Util.is_valid(current_window)) {
                continue;
            }

            if (current_window.maximized_vertically) {
                /* Make sure the top-most window is selected */
                if (Events.maximized_window === null) {
                    Events.maximized_window = current_window;
                }

                add_transparency = false;

                if (!Settings.check_triggers()) {
                    break;
                }
            }

            let frame = current_window.get_frame_rect();

            let scale_factor = imports.gi.St.ThemeContext.get_for_stage(global.stage).scale_factor;

            let panel_height = Main.panel.actor.get_height();
            let window_touching_panel = frame.y <= (panel_height + 5 * scale_factor);
            let window_overlapping_panel = (panel_height - frame.y) > 5 * scale_factor;
            let vertical_override = window_touching_panel && frame.height >= panel_height - 5 * scale_factor;
            let horizontal_override = window_touching_panel && frame.x <= 5 * scale_factor && frame.width >= panel_height - 5 * scale_factor;

            if (window_touching_panel && window_overlapping_panel) {
                force_transparency = true;
                Events.maximized_window = null;
            } else if (horizontal_override || vertical_override) {
                add_transparency = false;
                Events.maximized_window = current_window;
            }
        }
    }

    if (force_transparency) {
        log('transparency forced');
        Transitions.fade_out();
        force_transparency = false;
        /* Only change if the transparency isn't already correct or if override_optimization has been called */
    } else if (override_optimization || (Transitions.get_transparency_status().is_transparent() !== add_transparency)) {
        override_optimization = false;

        if (add_transparency) {
            Transitions.fade_out();
        } else {
            Transitions.fade_in();
        }
    } else if (Transitions.get_transparency_status().is_blank()) {
        if (add_transparency) {
            Transitions.minimum_fade_in();
        } else {
            Transitions.fade_in();
        }
    } else if (Settings.check_overrides() || Settings.check_triggers()) {
        if (!add_transparency) {
            Transitions.fade_in();
        }
    }

    /* Reset text coloring. */
    if (Settings.get_enable_text_color() && (Settings.get_enable_maximized_text_color() || Settings.get_enable_overview_text_color())) {
        if (!add_transparency && Settings.get_enable_maximized_text_color()) {
            Theming.remove_text_color();
            Theming.set_text_color('maximized');
        } else {
            Theming.remove_text_color('maximized');
            Theming.set_text_color();
        }
    }
}