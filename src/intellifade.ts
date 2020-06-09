/** @type {Module} */
const module: Module = {};

const { GLib, Meta, Shell, St } = imports.gi;
const Mainloop = imports.mainloop;

const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

import {Themer, load_panel_theme} from './theming';
import { TransitionManager } from './transitions';
import * as Settings from './settings';
import * as Util from './util';

/* How often the asynchronous loop should run in milliseconds... */
const ASYNC_UPDATE_FREQUENCY = 200; // ms

export class Intellifader {
    transitions: TransitionManager;
    themer: Themer;
    continueCheck: boolean;
    override_optimization: boolean;
    timeoutId: number;
    maximized_window: any;
    _wm_tracker: any;
    panel_bounds: { x: any; y: any; height: any; width: any; is_top: boolean; };
    scale_factor: number;

    /**
     * @param {typeof TransitionManager.prototype} transitions
     * @param {typeof Themer.prototype} themer
     */
    constructor(transitions: typeof TransitionManager.prototype, themer: typeof Themer.prototype) {
        this.transitions = transitions;
        this.themer = themer;


        /* Determines whether to continue the async loop checks. */
        this.continueCheck = false;
        /* Variable for current detected maximized window... */

        /* Run the next change regardless of the whether it is the same as the current status. */
        this.override_optimization = false;
        /* Current ID of the async loop (0 if no loop is running) */
        this.timeoutId = 0;

        this.maximized_window = null;

        this._wm_tracker = Shell.WindowTracker.get_default();

        this._updateBounds();
    }

    cleanup() {
        this._wm_tracker = null;

        if (this.timeoutId > 0) {
            Mainloop.source_remove(this.timeoutId);
        }
    }

    forceSyncCheck() {
        this.override_optimization = true;
        this.syncCheck();
    }

    syncCheck() {
        /* Prevent any asynchronous checks from occurring in the loop. */
        this.continueCheck = false;
        /* Stop the asynchronous loop... */
        if (this.timeoutId > 0)
            Mainloop.source_remove(this.timeoutId);
        /* Remove the old loop ID */
        this.timeoutId = 0;
        /* Update bounds when a check is done in sync. */
        this._updateBounds();
        /* Run a check. */
        this._check();
    }

    forceAsyncCheck() {
        this.override_optimization = true;
        this.asyncCheck();
    }

    asyncCheck() {
        if (this.timeoutId <= 0) {
            this._check();

            this.timeoutId = Mainloop.timeout_add(ASYNC_UPDATE_FREQUENCY, () => {
                this._check();

                if (this.continueCheck) {
                    this.continueCheck = false;
                    return GLib.SOURCE_CONTINUE;
                } else {
                    this.timeoutId = 0;
                    return GLib.SOURCE_REMOVE;
                }
            });
        } else {
            this.continueCheck = true;
        }

    }


    _updateBounds() {
        const { panel } = Main;

        this.panel_bounds = {
            x: panel.get_x(),
            y: panel.get_y(),
            height: panel.get_height(),
            width: panel.get_width(),
            is_top: true
        };

        this.scale_factor = St.ThemeContext.get_for_stage(global.stage).scale_factor;

        const box = Main.layoutManager.panelBox;

        if ('get_anchor_point' in box) {
            let [, anchor_y] = box.get_anchor_point();

            if (anchor_y <= 0) {
                this.panel_bounds.y = -anchor_y;
                this.panel_bounds.is_top = false;

                return;
            }
        }

        let [, pivot_y] = Main.layoutManager.panelBox.get_pivot_point();

        // Adjust for bottom panel.
        if (pivot_y <= 0) {
            this.panel_bounds.y = -pivot_y;
            this.panel_bounds.is_top = false;
        }
    }

    /* Main extension logic. Modified to fit Gnome Shell 3.26 design patterns. */

    // TODO: Cleanup use of variable flags.
    _check() {
        if (Main.overview._shown) {
            return;
        }

        const settings = Settings.get();

        let workspace = null;

        const manager = global.screen || global.workspace_manager;

        if (manager) {
            workspace = manager.get_active_workspace();
        } else {
            log('[Dynamic Panel Transparency] Error could not get active workspace.');
        }

        let windows = workspace.list_windows();
        windows = global.display.sort_windows_by_stacking(windows);

        let focused_window = global.display.get_focus_window();

        this.maximized_window = null;

        let add_transparency = true;
        let force_transparency = false;

        /* Handle desktop icons (they're a window too) */
        if (focused_window && focused_window.get_window_type() === Meta.WindowType.DESKTOP) {
            add_transparency = true;
            this.maximized_window = focused_window;
        } else {
            // TODO: Always negative? Is pivot negative?
            for (let i = windows.length - 1; i >= 0; i--) {

                let current_window = windows[i];

                if (!current_window.showing_on_its_workspace() || !current_window.is_on_primary_monitor()) {
                    continue;
                }

                /* Make sure the window is on the correct monitor, isn't minimized, isn't supposed to be excluded, and is actually maximized. */
                if (!Util.is_valid(current_window)) {
                    continue;
                }

                if (current_window.maximized_vertically) {
                    /* Make sure the top-most window is selected */
                    if (this.maximized_window === null && !force_transparency) {
                        this.maximized_window = current_window;
                    }

                    add_transparency = false;

                    break;
                }

                let frame = current_window.get_frame_rect();

                if (Main.layoutManager._rightPanelBarrier) {
                    let overlap = this.panel_bounds.x < frame.x + frame.width &&
                        this.panel_bounds.x + this.panel_bounds.width > frame.x &&
                        this.panel_bounds.y < frame.y + frame.height &&
                        this.panel_bounds.height + this.panel_bounds.y > frame.y;

                    if (overlap) {
                        force_transparency = true;
                        this.maximized_window = null;

                        break;
                    }
                }

                if (settings._transition_windows_touch()) {
                    let touching_panel = false;

                    if (this.panel_bounds.is_top) {
                        touching_panel = frame.y >= (this.panel_bounds.y + this.panel_bounds.height) &&
                            frame.y <= (this.panel_bounds.y + this.panel_bounds.height);
                    } else {
                        touching_panel = (frame.y + frame.height) >= (this.panel_bounds.y) &&
                            (frame.y + frame.height) <= (this.panel_bounds.y);
                    }

                    if (!force_transparency && touching_panel) {
                        add_transparency = false;

                        if (this.maximized_window === null && !force_transparency) {
                            this.maximized_window = current_window;
                        }

                        break;
                    }
                }
            }
        }

        log(`current state: ${add_transparency} vs. X(${this.transitions.is_transparent()})`)

        if (force_transparency) {
            this.transitions.fade_out();
            force_transparency = false;
            /* Only change if the transparency isn't already correct or if override_optimization has been called */
        } else if (this.transitions.is_blank()) {
            if (add_transparency) {
                this.transitions.minimum_fade_in();
            } else {
                this.transitions.fade_in();
            }
        } else if (this.override_optimization || (this.transitions.is_transparent() !== add_transparency)) {
            this.override_optimization = false;

            if (add_transparency) {
                this.transitions.fade_out();
            } else {
                this.transitions.fade_in();
            }
        }

        /* Reset text coloring. */
        if (settings.enableTextColor() && (settings.enableMaximizedTextColor() || settings.enableOverviewTextColor())) {
            if (!add_transparency && settings.enableMaximizedTextColor()) {
                this.themer.remove_text_color();
                this.themer.set_text_color();
            } else {
                this.themer.remove_text_color();
                this.themer.set_text_color();
            }
        }
    }

    /**
     * Returns the current visible maximized window as understood by the events' logic.
     * The maximized window is not necessarily the highest window in the z-order.
     *
     * @returns {Object} The current visible maximized window.
     */
    get_current_maximized_window(): object {
        return this.maximized_window;
    }
}
