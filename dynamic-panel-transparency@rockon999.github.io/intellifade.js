import Meta from 'gi://Meta';
import Shell from 'gi://Shell';
import St from 'gi://St';

import * as Util from './util.js';
import { main } from './shell.js';
import { setInterval, clearInterval } from './timers.js';

/* How often the asynchronous loop should run in milliseconds... */
const ASYNC_UPDATE_FREQUENCY = 200; // ms

export class Intellifader {
    /**
     * @param {import('./main.js').DptExtension} extension
     */
    constructor(extension) {
        this.extension = extension;

        this._wm_tracker = Shell.WindowTracker.get_default();

        /* Determines whether to continue the async loop checks. */
        this.continueCheck = false;
        /* Variable for current detected maximized window... */
        this.maximized_window = null;
        /* Run the next change regardless of the whether it is the same as the current status. */
        // TODO: Find a nicer way to override optimization code.
        this.override_optimization = false;
        /* Current ID of the async loop (0 if no loop is running) */
        this.timeoutId = 0;

        this.panel = main.panel;

        this._updateBounds();
    }

    cleanup() {
        this._wm_tracker = null;

        if (this.timeoutId > 0) {
            clearInterval(this.timeoutId);
        }
    }

    forceSyncCheck() {
        this.override_optimization = true;
        this.syncCheck();
    }

    syncCheck() {
        /* Prevent any asynchronous checks from occuring in the loop. */
        this.continueCheck = false;
        /* Stop the asynchronous loop... */
        if (this.timeoutId > 0) clearInterval(this.timeoutId);
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

            const id = (this.timeoutId = setInterval(() => {
                this._check();

                if (this.continueCheck) {
                    this.continueCheck = false;
                } else {
                    this.timeoutId = -1;
                    return clearInterval(id);
                }
            }, ASYNC_UPDATE_FREQUENCY));
        } else {
            this.continueCheck = true;
        }
    }

    _updateBounds() {
        const { panel } = this;

        this.panel_bounds = {
            x: panel.get_x(),
            y: panel.get_y(),
            height: panel.get_height(),
            width: panel.get_width(),
            is_top: true,
        };

        this.scale_factor = St.ThemeContext.get_for_stage(global.stage).scale_factor;

        let [, pivot_y] = main.layoutManager.panelBox.get_pivot_point();

        // Adjust for bottom panel.
        if (pivot_y < 0) {
            this.panel_bounds.y = -pivot_y;
            this.panel_bounds.is_top = false;
        }
    }

    /* Main extension logic. Modified to fit Gnome Shell 3.26 design patterns. */

    // TODO: Cleanup use of variable flags.
    _check() {
        if (main.overview._shown) {
            return;
        }

        const { theming, transitions, settings } = this.extension;

        let workspace = null;

        const manager = global.workspace_manager;

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

                if (
                    !current_window.showing_on_its_workspace() ||
                    !current_window.is_on_primary_monitor()
                ) {
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

                if (main.layoutManager._rightPanelBarrier) {
                    let overlap =
                        this.panel_bounds.x < frame.x + frame.width &&
                        this.panel_bounds.x + this.panel_bounds.width > frame.x &&
                        this.panel_bounds.y < frame.y + frame.height &&
                        this.panel_bounds.height + this.panel_bounds.y > frame.y;

                    if (overlap) {
                        force_transparency = true;
                        this.maximized_window = null;

                        break;
                    }
                }

                if (settings.transition_when_windows_touch_panel()) {
                    let touching_panel = false;

                    if (this.panel_bounds.is_top) {
                        touching_panel =
                            frame.y >= this.panel_bounds.y + this.panel_bounds.height &&
                            frame.y <= this.panel_bounds.y + this.panel_bounds.height;
                    } else {
                        touching_panel =
                            frame.y + frame.height >= this.panel_bounds.y &&
                            frame.y + frame.height <= this.panel_bounds.y;
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

        if (force_transparency) {
            transitions.fade_out();
            force_transparency = false;
            /* Only change if the transparency isn't already correct or if override_optimization has been called */
        } else if (transitions.get_transparency_status().is_blank()) {
            if (add_transparency) {
                transitions.minimum_fade_in();
            } else {
                transitions.fade_in();
            }
        } else if (
            this.override_optimization ||
            transitions.get_transparency_status().is_transparent() !== add_transparency
        ) {
            this.override_optimization = false;

            if (add_transparency) {
                transitions.fade_out();
            } else {
                transitions.fade_in();
            }
        }

        /* Reset text coloring. */
        if (
            settings.get_enable_text_color() &&
            (settings.get_enable_maximized_text_color() ||
                settings.get_enable_overview_text_color())
        ) {
            if (!add_transparency && settings.get_enable_maximized_text_color()) {
                theming.remove_text_color();
                theming.set_text_color('maximized');
            } else {
                theming.remove_text_color('maximized');
                theming.set_text_color();
            }
        }
    }

    /**
     * Returns the current visible maximized window as understood by the events' logic.
     * The maximized window is not necessarily the highest window in the z-order.
     *
     * @returns {Object} The current visible maximized window.
     */
    get_current_maximized_window() {
        return this.maximized_window;
    }
}
