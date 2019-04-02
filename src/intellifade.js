/* exported init, cleanup, asyncCheck, syncCheck, forceAsyncCheck, forceSyncCheck, get_current_maximized_window */ // eslint-disable-line max-len

const {
  gi: {
    GLib, Meta, Shell, St
  },
  ui: { main: Main }
} = imports;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
  settings: Settings, util: Util, transitions: Transitions, theming: Theming
} = Me.imports;

/* Determines whether to continue the async loop checks. */
let continueCheck = false;
/* Variable for current detected maximized window... */
let maximized_window = null;
/* Run the next change regardless of the whether it is the same as the current status. */
// TODO: Find a nicer way to override optimization code.
let override_optimization = false;
/* Current ID of the async loop (0 if no loop is running) */
let timeoutId = 0;

/* How often the asynchronous loop should run in milliseconds... */
const ASYNC_UPDATE_FREQUENCY = 200; // ms

function init() {
  this._wm_tracker = Shell.WindowTracker.get_default();

  _updateBounds();
}

function cleanup() {
  this._wm_tracker = null;
}

function forceSyncCheck() {
  override_optimization = true;
  syncCheck();
}

function syncCheck() {
  if (Settings.check_overrides() || Settings.check_triggers()) {
    override_optimization = true;
  }

  /* Prevent any asynchronous checks from occuring in the loop. */
  continueCheck = false;
  /* Stop the asynchronous loop... */
  if (timeoutId > 0) {
    GLib.source_remove(timeoutId);
  }
  /* Remove the old loop ID */
  timeoutId = 0;
  /* Update bounds when a check is done in sync. */
  _updateBounds();
  /* Run a check. */
  _check();
}

function forceAsyncCheck() {
  override_optimization = true;
  asyncCheck();
}

function asyncCheck() {
  if (Settings.check_overrides() || Settings.check_triggers()) {
    override_optimization = true;
  }

  if (timeoutId <= 0) {
    _check();

    timeoutId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, ASYNC_UPDATE_FREQUENCY, () => {
      _check();

      if (continueCheck) {
        continueCheck = false;
        return GLib.SOURCE_CONTINUE;
      }
      timeoutId = 0;
      return GLib.SOURCE_REMOVE;
    });
  } else {
    continueCheck = true;
  }
}

function _updateBounds() {
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

/* Main extension logic. Modified to fit Gnome Shell 3.26 design patterns. */

// TODO: Cleanup use of variable flags.
function _check() {
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

  maximized_window = null;

  let add_transparency = true;
  let force_transparency = false;

  /* Handle desktop icons (they're a window too) */
  if (focused_window && focused_window.get_window_type() === Meta.WindowType.DESKTOP) {
    add_transparency = true;
    maximized_window = focused_window;
  } else {
    // TODO: Always negative? Is pivot negative?
    const win_test = win => win.showing_on_its_workspace() && win.is_on_primary_monitor();
    const cur_windows = windows.filter(win => win_test(win));

    for (let i = cur_windows.length - 1; i >= 0; i -= 1) {
      const current_window = cur_windows[i];

      if (Settings.check_triggers()) {
        /* Check if the current WM_CLASS is a trigger. */
        if (Settings.get_trigger_windows().indexOf(current_window.get_wm_class()) !== -1) {
          add_transparency = false;
          maximized_window = current_window;

          break;
        }

        const app = this._wm_tracker.get_window_app(current_window);

        /* Check if the found app exists and if it is a trigger app. */
        if (app && Settings.get_trigger_apps().indexOf(app.get_id()) !== -1) {
          add_transparency = false;
          maximized_window = current_window;

          break;
        }
      }

      /* Make sure the window is on the correct monitor, isn't minimized */
      /* isn't supposed to be excluded, and is actually maximized. */
      if (!Util.is_valid(current_window)) {
        // TODO
        continue; // eslint-disable-line no-continue
      }

      if (current_window.maximized_vertically) {
        /* Make sure the top-most window is selected */
        if (maximized_window === null && !force_transparency) {
          maximized_window = current_window;
        }

        add_transparency = false;

        if (!Settings.check_triggers()) {
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
          maximized_window = null;

          if (!Settings.check_triggers()) {
            break;
          }
        }
      }

      if (Settings.transition_when_windows_touch_panel()) {
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

          if (maximized_window === null && !force_transparency) {
            maximized_window = current_window;
          }

          if (!Settings.check_triggers()) {
            break;
          }
        }
      }
    }
  }

  if (force_transparency) {
    Transitions.fade_out();
    force_transparency = false;
    /* Only change if the transparency isn't already correct or if */
    /* override_optimization has been called */
  } else if (Transitions.get_transparency_status().is_blank()) {
    if (add_transparency) {
      Transitions.minimum_fade_in();
    } else {
      Transitions.fade_in();
    }
  } else if (
    override_optimization
    || Transitions.get_transparency_status().is_transparent() !== add_transparency
  ) {
    override_optimization = false;

    if (add_transparency) {
      Transitions.fade_out();
    } else {
      Transitions.fade_in();
    }
  }

  /* Reset text coloring. */
  if (
    Settings.get_enable_text_color()
    && (Settings.get_enable_maximized_text_color() || Settings.get_enable_overview_text_color())
  ) {
    if (!add_transparency && Settings.get_enable_maximized_text_color()) {
      Theming.remove_text_color();
      Theming.set_text_color('maximized');
    } else {
      Theming.remove_text_color('maximized');
      Theming.set_text_color();
    }
  }
}

/**
 * Returns the current visible maximized window as understood by the events' logic.
 * The maximized window is not necessarily the highest window in the z-order.
 *
 * @returns {Object} The current visible maximized window.
 */
function get_current_maximized_window() {
  return maximized_window;
}
