/* exported init, cleanup, get_current_maximized_window */

import * as Convenience from '../lib/convenience';
import * as Util from '../lib/util';

const { GLib, Gio, Shell } = imports.gi;

const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const USER_THEME_SCHEMA = 'org.gnome.shell.extensions.user-theme';

/**
 * Signal Connections
 * js/ui/overview.js/hidden: occurs after the overview is hidden
 * js/ui/overview.js/shown: occurs after the overview is open
 * MetaScreen/restacked: occurs when the window Z-ordering changes
 * org/gnome/shell/extensions/user-theme/changed::name: occurs when the user's theme changes
 * window_group/actor-added: occurs when a window actor is added
 * window_group/actor-removed: occurs when a window actor is removed
 * wm/switch-workspace: occurs after a workspace is switched
 *
 */

export default class EventsManager {
  /**
   * Intialize.
   *
   */
  constructor(ext, transitions, settings, intellifader, theming) {
    this.intellifader = intellifader;
    this.transitions = transitions;
    this.settingsManager = settings;
    this.ext = ext;
    this.theming = theming;
    this.windows = [];
    this._wm_tracker = Shell.WindowTracker.get_default();
  }

  initialize() {
    this._overviewHidingSig = Main.overview.connect('hiding', () => this.intellifader.syncCheck());

    log('testing');

    if (this.settingsManager.transition_with_overview()) {
      this._overviewShownSig = Main.overview.connect('showing', this._overviewShown.bind(this));
    } else {
      this._overviewShownSig = Main.overview.connect('shown', this._overviewShown.bind(this));
    }

    const windows = global.get_window_actors();

    /* Simulate window creation event, null container because _windowActorAdded doesn't
  /* utilize containers */
    windows.forEach(window_actor => this._windowActorAdded(null, window_actor, false));

    this._workspaceSwitchSig = global.window_manager.connect_after(
      'switch-workspace',
      this._workspaceSwitched.bind(this)
    );

    const screen = global.screen || global.display;

    if (screen) {
      this._windowRestackedSig = screen.connect_after(
        'restacked',
        this._windowRestacked.bind(this)
      );
    } else {
      log('[Dynamic Panel Transparency] Error could not register \'restacked\' event.');
    }

    this._windowActorAddedSig = global.window_group.connect(
      'actor-added',
      this._windowActorAdded.bind(this)
    );
    this._windowActorRemovedSig = global.window_group.connect(
      'actor-removed',
      this._windowActorRemoved.bind(this)
    );

    this._appFocusedSig = this._wm_tracker.connect_after(
      'notify::focus-app',
      this._windowRestacked.bind(this)
    );

    this._theme_settings = null;
    this._userThemeChangedSig = null;

    try {
      const schemaObj = Convenience.getSchemaObj(Me, USER_THEME_SCHEMA, true);

      if (schemaObj) {
        this._theme_settings = new Gio.Settings({
          settings_schema: schemaObj
        });
      }
    } catch (error) {
      log(
        '[Dynamic Panel Transparency] Failed to find shell theme settings. Ignore this if you are not using a custom theme.'
      );
    }

    if (this._theme_settings) {
      this._userThemeChangedSig = this._theme_settings.connect_after(
        'changed::name',
        this._userThemeChanged.bind(this)
      );
    }
  }

  /**
   * Don't want to hold onto anything that isn't ours.
   *
   */
  cleanup() {
    /* Disconnect Signals */
    if (this._windowUnminimizeSig) {
      global.window_manager.disconnect(this._windowUnminimizeSig);
    }

    Main.overview.disconnect(this._overviewShownSig);
    Main.overview.disconnect(this._overviewHidingSig);

    global.window_manager.disconnect(this._workspaceSwitchSig);

    global.window_group.disconnect(this._windowActorAddedSig);
    global.window_group.disconnect(this._windowActorRemovedSig);

    const screen = global.screen || global.display;

    if (screen) {
      screen.disconnect(this._windowRestackedSig);
    } else {
      log('[Dynamic Panel Transparency] Error could not disconnect \'restacked\' event.');
    }

    this._wm_tracker.disconnect(this._appFocusedSig);

    if (this._theme_settings && this._userThemeChangedSig) {
      this._theme_settings.disconnect(this._userThemeChangedSig);
    }

    this.windows
      .filter(window_actor => typeof window_actor._dpt_signals !== 'undefined')
      .forEach((window_actor) => {
        window_actor._dpt_signals.forEach(signalId => window_actor.disconnect(signalId));

        delete window_actor._dpt_signals; // eslint-disable-line
        delete window_actor._dpt_tracking; // eslint-disable-line
      });

    /* Cleanup Signals */
    this._windowRestackedSig = null;
    this._overviewShownSig = null;
    this._overviewHidingSig = null;
    this._windowActorRemovedSig = null;
    this._workspaceSwitchSig = null;
    this._userThemeChangedSig = null;
    this._windowActorAddedSig = null;

    this._theme_settings = null;

    this._wm_tracker = null;

    this.windows = null;
  }

  /* Event Handlers */

  /**
   * Called whenever the overview is shown.
   *
   */
  _overviewShown() {
    if (!this.transitions.get_transparency_status().is_blank()) {
      this.transitions.blank_fade_out();
    }

    if (
      this.settingsManager.get_enable_text_color()
      && (this.settingsManager.get_enable_maximized_text_color()
        || this.settingsManager.get_enable_overview_text_color())
    ) {
      if (this.settingsManager.get_enable_overview_text_color()) {
        this.theming.remove_text_color();
        this.theming.set_text_color('maximized');
      } else {
        this.theming.remove_text_color('maximized');
        this.theming.set_text_color();
      }
    }
  }

  /**
   * Called whenever a window actor is removed.
   *
   */
  _windowActorRemoved(container, window_actor) {
    if (typeof window_actor._dpt_tracking === 'undefined') {
      return;
    }

    /* Remove our tracking variable. */
    delete window_actor._dpt_tracking; // eslint-disable-line

    if (typeof window_actor._dpt_signals !== 'undefined') {
      window_actor._dpt_signals.forEach(signalId => window_actor.disconnect(signalId));
    }

    delete window_actor._dpt_signals; // eslint-disable-line
    delete window_actor._dpt_tracking; // eslint-disable-line

    const index = this.windows.indexOf(window_actor);

    if (index !== -1) {
      this.windows.splice(index, 1);
    }

    this.intellifader.asyncCheck();
  }

  /**
   * Called whenever the User Theme extension updates the current theme.
   *
   */

  _userThemeChanged() {
    log('[Dynamic Panel Transparency] User theme changed.');

    /* Remove Our Styling */
    this.ext.unmodify_panel();
    this.theming.cleanup();
    this.theming.initialize();

    /* Hopefully every computer is fast enough to apply a theme in three seconds. */
    const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 3000, () => {
      if (id !== this.theme_detection_id) {
        return false;
      }

      log('[Dynamic Panel Transparency] Updating user theme data.');

      const theme = Main.panel.actor.get_theme_node();

      /* Store user theme values. */
      let background = null;

      const image_background = this.theming.get_background_image_color(theme);
      const theme_background = theme.get_background_color();

      if (image_background !== null) {
        background = image_background;
      } else {
        background = theme_background;
      }

      this.theming.set_theme_background_color(Util.clutter_to_native_color(background));
      this.theming.set_theme_opacity(background.alpha);

      let theme_name = this._theme_settings.get_string('name');
      theme_name = theme_name === '' ? 'Adwaita' : theme_name;
      this.settingsManager._settings.set_string('current-user-theme', theme_name);
      this.settingsManager._settings.set_boolean('force-theme-update', true);
      this.settingsManager._settings.set_value(
        'panel-theme-color',
        new GLib.Variant('(iii)', [background.red, background.green, background.blue])
      );
      this.settingsManager._settings.set_value(
        'theme-opacity',
        new GLib.Variant('i', background.alpha)
      );

      log(
        `[Dynamic Panel Transparency] Detected user theme style: rgba(${background.red}, ${
          background.green
        }, ${background.blue}, ${background.alpha})`
      );
      log(
        `[Dynamic Panel Transparency] Using theme data for: ${this.settingsManager.get_current_user_theme()}`
      );

      this.ext.modify_panel();

      this.intellifader.forceSyncCheck();

      return false;
    });

    this.theme_detection_id = id;
  }

  /**
   * Called whenever a window is created in the shell.
   *
   */
  _windowActorAdded(window_group, window_actor, force = true) {
    if (window_actor && (force || typeof window_actor._dpt_tracking === 'undefined')) {
      window_actor._dpt_tracking = true; // eslint-disable-line

      const ac_wId = window_actor.connect('allocation-changed', () => {
        this.intellifader.asyncCheck();
      });

      const v_wId = window_actor.connect('notify::visible', () => {
        this.intellifader.asyncCheck();
      });

      window_actor._dpt_signals = [ac_wId, v_wId]; // eslint-disable-line
      this.windows.push(window_actor);

      this.intellifader.asyncCheck();
    }
  }

  /**
   * SPECIAL_CASE: Only update if we're using per-app settings or is desktop icons are enabled.
   *
   */
  _windowRestacked() {
    /* Don't allow restacks while the overview is transitioning. */
    if (!Main.overview.visible) {
      /* Detect if desktop icons are enabled. */
      if (
        this.settingsManager.gs_show_desktop()
        || this.settingsManager.check_overrides()
        || this.settingsManager.check_triggers()
      ) {
        this.intellifader.asyncCheck();
      }
    }
  }

  /**
   * SPECIAL_CASE: Update logic requires the workspace that we'll be switching to.
   *
   */
  _workspaceSwitched(wm, from, to, direction) {
    /* Detect if desktop icons are enabled. */
    if (
      !this.settingsManager.gs_show_desktop()
      && !this.settingsManager.check_overrides()
      && !this.settingsManager.check_triggers()
    ) {
      this.intellifader.syncCheck();
    }
  }
}
