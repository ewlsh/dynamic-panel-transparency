/* exported init, cleanup, asyncCheck, syncCheck, forceAsyncCheck, forceSyncCheck, get_current_maximized_window */ // eslint-disable-line max-len

import * as Util from '../lib/util';
import { Shell, GLib } from '../imports/gi';
import { Main } from '../imports/ui';

const { St, Meta, Actor } = Shell;

/* How often the asynchronous loop should run in milliseconds... */
const ASYNC_UPDATE_FREQUENCY = 200; // ms

export default class Intellifader {
  constructor(settings, transitions, theming) {
    this.settingsManager = settings;
    this.transitions = transitions;
    this.theming = theming;
  }

  initialize() {
    this._wm_tracker = Actor.WindowTracker.get_default();

    this._updateBounds();

    /* Determines whether to continue the async loop checks. */
    this.continueCheck = false;
    /* Variable for current detected maximized window... */
    this.maximized_window = null;
    /* Run the next change regardless of the whether it is the same as the current status. */
    // TODO: Find a nicer way to override optimization code.
    this.override_optimization = false;
    /* Current ID of the async loop (0 if no loop is running) */
    this.timeoutId = 0;
  }

  cleanup() {
    this._wm_tracker = null;
  }

  forceSyncCheck() {
    this.override_optimization = true;
    this.syncCheck();
  }

  syncCheck() {
    if (this.settingsManager.check_overrides() || this.settingsManager.check_triggers()) {
      this.override_optimization = true;
    }

    /* Prevent any asynchronous checks from occuring in the loop. */
    this.continueCheck = false;
    /* Stop the asynchronous loop... */
    if (this.timeoutId > 0) {
      GLib.source_remove(this.timeoutId);
    }
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
    if (this.settingsManager.check_overrides() || this.settingsManager.check_triggers()) {
      this.override_optimization = true;
    }

    if (this.timeoutId <= 0) {
      this._check();

      this.timeoutId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, ASYNC_UPDATE_FREQUENCY, () => {
        this._check();

        if (this.continueCheck) {
          this.continueCheck = false;
          return GLib.SOURCE_CONTINUE;
        }
        this.timeoutId = 0;
        return GLib.SOURCE_REMOVE;
      });
    } else {
      this.continueCheck = true;
    }
  }

  _updateBounds() {
    const panel = Main.panel.actor;

    this.panel_bounds = {
      x: panel.get_x(),
      y: panel.get_y(),
      height: panel.get_height(),
      width: panel.get_width(),
      is_top: true
    };

    this.scale_factor = St.ThemeContext.get_for_stage(global.stage).scale_factor;

    const anchor_y = -Main.layoutManager.panelBox.get_anchor_point()[1];
    const pivot_y = -Main.layoutManager.panelBox.get_pivot_point()[1];

    // Adjust for bottom panel.
    if (anchor_y > 0) {
      this.panel_bounds.y = anchor_y;
      this.panel_bounds.is_top = false;
    } else if (pivot_y > 0) {
      this.panel_bounds.y = pivot_y;
      this.panel_bounds.is_top = false;
    }
  }

  _check() {
    if (Main.overview._shown) {
      return;
    }

    let workspace = null;

    const manager = global.screen || global.workspace_manager;

    if (manager) {
      workspace = manager.get_active_workspace();
    } else {
      log('[Dynamic Panel Transparency] Error could not get active workspace.');
    }

    let windows = workspace.list_windows();
    windows = global.display.sort_windows_by_stacking(windows);

    const focused_window = global.display.get_focus_window();

    this.maximized_window = null;

    let add_transparency = true;
    let force_transparency = false;

    /* Handle desktop icons (they're a window too) */
    if (focused_window && focused_window.get_window_type() === Meta.WindowType.DESKTOP) {
      add_transparency = true;
      this.maximized_window = focused_window;
    } else {
      // TODO: Always negative? Is pivot negative?
      const win_test = win => win.showing_on_its_workspace() && win.is_on_primary_monitor();
      const cur_windows = windows.filter(win => win_test(win));

      for (let i = cur_windows.length - 1; i >= 0; i -= 1) {
        const current_window = cur_windows[i];

        if (this.settingsManager.check_triggers()) {
          /* Check if the current WM_CLASS is a trigger. */
          if (
            this.settingsManager.get_trigger_windows().indexOf(current_window.get_wm_class()) !== -1
          ) {
            add_transparency = false;
            this.maximized_window = current_window;

            break;
          }

          const app = this._wm_tracker.get_window_app(current_window);

          /* Check if the found app exists and if it is a trigger app. */
          if (app && this.settingsManager.get_trigger_apps().indexOf(app.get_id()) !== -1) {
            add_transparency = false;
            this.maximized_window = current_window;

            break;
          }
        }

        /* Make sure the window is on the correct monitor, isn't minimized */
        /* isn't supposed to be excluded, and is actually maximized. */
        if (!Util.is_valid(current_window)) {
          continue; // eslint-disable-line no-continue
        }

        if (current_window.maximized_vertically) {
          /* Make sure the top-most window is selected */
          if (this.maximized_window === null && !force_transparency) {
            this.maximized_window = current_window;
          }

          add_transparency = false;

          if (!this.settingsManager.check_triggers()) {
            break;
          }
        }

        const frame = current_window.get_frame_rect();

        if (Main.layoutManager._rightPanelBarrier) {
          const overlap = this.panel_bounds.x < frame.x + frame.width
            && this.panel_bounds.x + this.panel_bounds.width > frame.x
            && this.panel_bounds.y < frame.y + frame.height
            && this.panel_bounds.height + this.panel_bounds.y > frame.y;

          if (overlap) {
            force_transparency = true;
            this.maximized_window = null;

            if (!this.settingsManager.check_triggers()) {
              break;
            }
          }
        }

        if (this.settingsManager.transition_when_windows_touch_panel()) {
          let touching_panel = false;

          if (this.panel_bounds.is_top) {
            touching_panel = frame.y >= this.panel_bounds.y + this.panel_bounds.height
              && frame.y <= this.panel_bounds.y + this.panel_bounds.height;
          } else {
            touching_panel = frame.y + frame.height >= this.panel_bounds.y
              && frame.y + frame.height <= this.panel_bounds.y;
          }

          if (!force_transparency && touching_panel) {
            add_transparency = false;

            if (this.maximized_window === null && !force_transparency) {
              this.maximized_window = current_window;
            }

            if (!this.settingsManager.check_triggers()) {
              break;
            }
          }
        }
      }
    }

    if (force_transparency) {
      this.transitions.fade_out();
      force_transparency = false;
      /* Only change if the transparency isn't already correct or if */
      /* override_optimization has been called */
    } else if (this.transitions.get_transparency_status().is_blank()) {
      if (add_transparency) {
        this.transitions.minimum_fade_in();
      } else {
        this.transitions.fade_in();
      }
    } else if (
      this.override_optimization
      || this.transitions.get_transparency_status().is_transparent() !== add_transparency
    ) {
      this.override_optimization = false;

      if (add_transparency) {
        this.transitions.fade_out();
      } else {
        this.transitions.fade_in();
      }
    }

    /* Reset text coloring. */
    if (
      this.settingsManager.get_enable_text_color()
      && (this.settingsManager.get_enable_maximized_text_color()
        || this.settingsManager.get_enable_overview_text_color())
    ) {
      if (!add_transparency && this.settingsManager.get_enable_maximized_text_color()) {
        this.theming.remove_text_color();
        this.theming.set_text_color('maximized');
      } else {
        this.theming.remove_text_color('maximized');
        this.theming.set_text_color();
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
