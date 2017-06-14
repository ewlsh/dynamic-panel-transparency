/* exported init, cleanup, asyncCheck, syncCheck, forceSyncCheck */

const GLib = imports.gi.GLib;
const Mainloop = imports.mainloop;
const Lang = imports.lang;

const Meta = imports.gi.Meta;
const Shell = imports.gi.Shell;

const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Compatibility = Me.imports.compatibility;
const Settings = Me.imports.settings;
const Util = Me.imports.util;

let Transitions = Compatibility.get_transition_manager();
let Theming = Compatibility.get_theming_manager();

/* Determines whether to continue the async loop checks. */
let continueCheck = false;
/* Variable for current detected maximized window... */
let maximized_window = null;
/* Run the next change regardless of the whether it is the same as the current status. */
let override_optimization = false;
/* Current ID of the async loop (0 if no loop is running) */
let timeoutId = 0;

/* How often the asynchronous loop should run in milliseconds... */
const ASYNC_UPDATE_FREQUENCY = 200; // ms

function init() {
    this._wm_tracker = Shell.WindowTracker.get_default();
}

function cleanup() {
    this._wm_tracker = null;
}

function forceSyncCheck() {
    override_optimization = true;
    syncCheck();
}

function syncCheck() {
    /* Prevent any asynchronous checks from occuring in the loop. */
    continueCheck = false;
    /* Stop the asynchronous loop... */
    Mainloop.source_remove(timeoutId);
    /* Remove the old loop ID */
    timeoutId = 0;
    /* Run a check. */
    _check();
}

function asyncCheck() {
    if (timeoutId <= 0) {
        _check();

        timeoutId = Mainloop.timeout_add(ASYNC_UPDATE_FREQUENCY, Lang.bind(this, function() {
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

/* Main extension logic. Modified to fit Gnome Shell 3.26 design patterns. */

// TODO: Cleanup use of variable flags.
function _check() {
    if (Main.overview._shown) {
        return;
    }

    let workspace = global.screen.get_active_workspace();
    let windows = workspace.list_windows();
    windows = global.display.sort_windows_by_stacking(windows);

    let focused_window = global.display.get_focus_window();

    maximized_window = null;

    let add_transparency = true;
    let force_transparency = false;

    /* Handle desktop icons (they're a window too) */
    if (focused_window && focused_window.get_window_type() === Meta.WindowType.DESKTOP) {
        add_transparency = true;
        maximized_window = focused_window;
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
                    maximized_window = current_window;
                    break;
                }

                let app = this._wm_tracker.get_window_app(current_window);

                /* Check if the found app exists and if it is a trigger app. */
                if (app && Settings.get_trigger_apps().indexOf(app.get_id()) !== -1) {
                    add_transparency = false;
                    maximized_window = current_window;
                    break;
                }
            }

            /* Make sure the window is on the correct monitor, isn't minimized, isn't supposed to be excluded, and is actually maximized. */
            if (!Util.is_valid(current_window)) {
                continue;
            }

            if (current_window.maximized_vertically) {
                /* Make sure the top-most window is selected */
                if (maximized_window === null) {
                    maximized_window = current_window;
                }

                add_transparency = false;

                if (!Settings.check_triggers()) {
                    break;
                }
            }

            let frame = current_window.get_frame_rect();

            let scale_factor = imports.gi.St.ThemeContext.get_for_stage(global.stage).scale_factor;

            let ERROR = 2;

            let panel_height = Main.panel.actor.get_height();
            let window_touching_panel = frame.y <= (panel_height + ERROR * scale_factor);
            let window_overlapping_panel = (panel_height - frame.y) > ERROR * scale_factor;
            let vertical_override = window_touching_panel && frame.height >= panel_height - ERROR * scale_factor;
            let horizontal_override = window_touching_panel && frame.x <= ERROR * scale_factor && frame.width >= panel_height - ERROR * scale_factor;

            if (window_touching_panel && window_overlapping_panel) {
                force_transparency = true;
                maximized_window = null;
            } else if (horizontal_override || vertical_override) {
                add_transparency = false;
                maximized_window = current_window;
            }
        }
    }

    if (force_transparency) {
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