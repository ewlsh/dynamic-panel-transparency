/* exported init, cleanup, get_current_maximized_window */

const { GLib, Gio, Shell } = imports.gi;

const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Convenience = Me.imports.convenience;
const Extension = Me.imports.extension;
const Intellifade = Me.imports.intellifade;
const Settings = Me.imports.settings;
const Util = Me.imports.util;

const Theming = Me.imports.theming;
const Transitions = Me.imports.transitions;

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

/**
 * Intialize.
 *
 */
function init() {
  this.windows = [];

  this._wm_tracker = Shell.WindowTracker.get_default();

  this._overviewHidingSig = Main.overview.connect(
    'hiding',
    Util.strip_args(Intellifade.syncCheck).bind(this)
  );

  if (Settings.transition_with_overview()) {
    this._overviewShownSig = Main.overview.connect('showing', _overviewShown.bind(this));
  } else {
    this._overviewShownSig = Main.overview.connect('shown', _overviewShown.bind(this));
  }

  const windows = global.get_window_actors();

  /* Simulate window creation event, null container because _windowActorAdded doesn't
  /* utilize containers */
  windows.forEach(window_actor => _windowActorAdded(null, window_actor, false));

  this._workspaceSwitchSig = global.window_manager.connect_after(
    'switch-workspace',
    _workspaceSwitched.bind(this)
  );

  const screen = global.screen || global.display;

  if (screen) {
    this._windowRestackedSig = screen.connect_after('restacked', _windowRestacked.bind(this));
  } else {
    log('[Dynamic Panel Transparency] Error could not register \'restacked\' event.');
  }

  this._windowActorAddedSig = global.window_group.connect(
    'actor-added',
    _windowActorAdded.bind(this)
  );
  this._windowActorRemovedSig = global.window_group.connect(
    'actor-removed',
    _windowActorRemoved.bind(this)
  );

  this._appFocusedSig = this._wm_tracker.connect_after(
    'notify::focus-app',
    _windowRestacked.bind(this)
  );

  this._theme_settings = null;
  this._userThemeChangedSig = null;

  try {
    const schemaObj = Convenience.getSchemaObj(USER_THEME_SCHEMA, true);

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
      _userThemeChanged.bind(this)
    );
  }
}

/**
 * Don't want to hold onto anything that isn't ours.
 *
 */
function cleanup() {
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
function _overviewShown() {
  if (!Transitions.get_transparency_status().is_blank()) {
    Transitions.blank_fade_out();
  }

  if (
    Settings.get_enable_text_color()
    && (Settings.get_enable_maximized_text_color() || Settings.get_enable_overview_text_color())
  ) {
    if (Settings.get_enable_overview_text_color()) {
      Theming.remove_text_color();
      Theming.set_text_color('maximized');
    } else {
      Theming.remove_text_color('maximized');
      Theming.set_text_color();
    }
  }
}

/**
 * Called whenever a window actor is removed.
 *
 */
function _windowActorRemoved(container, window_actor) {
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

  Intellifade.asyncCheck();
}

/**
 * Called whenever the User Theme extension updates the current theme.
 *
 */

function _userThemeChanged() {
  log('[Dynamic Panel Transparency] User theme changed.');

  /* Remove Our Styling */
  Extension.unmodify_panel();
  Theming.cleanup();
  Theming.init();

  /* Hopefully every computer is fast enough to apply a theme in three seconds. */
  const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 3000, () => {
    // eslint-disable-line no-magic-numbers
    if (id !== this.theme_detection_id) {
      return false;
    }

    log('[Dynamic Panel Transparency] Updating user theme data.');

    const theme = Main.panel.actor.get_theme_node();

    /* Store user theme values. */
    let background = null;

    const image_background = Theming.get_background_image_color(theme);
    const theme_background = theme.get_background_color();

    if (image_background !== null) {
      background = image_background;
    } else {
      background = theme_background;
    }

    Theming.set_theme_background_color(Util.clutter_to_native_color(background));
    Theming.set_theme_opacity(background.alpha);

    let theme_name = this._theme_settings.get_string('name');
    theme_name = theme_name === '' ? 'Adwaita' : theme_name;
    Settings._settings.set_string('current-user-theme', theme_name);
    Settings._settings.set_boolean('force-theme-update', true);
    Settings._settings.set_value(
      'panel-theme-color',
      new GLib.Variant('(iii)', [background.red, background.green, background.blue])
    );
    Settings._settings.set_value('theme-opacity', new GLib.Variant('i', background.alpha));

    log(
      `[Dynamic Panel Transparency] Detected user theme style: rgba(${background.red}, ${
        background.green
      }, ${background.blue}, ${background.alpha})`
    );
    log(`[Dynamic Panel Transparency] Using theme data for: ${Settings.get_current_user_theme()}`);

    Extension.modify_panel();

    Intellifade.forceSyncCheck();

    return false;
  });

  this.theme_detection_id = id;
}

/**
 * Called whenever a window is created in the shell.
 *
 */
function _windowActorAdded(window_group, window_actor, force = true) {
  if (window_actor && (force || typeof window_actor._dpt_tracking === 'undefined')) {
    window_actor._dpt_tracking = true; // eslint-disable-line

    const ac_wId = window_actor.connect('allocation-changed', () => {
      Intellifade.asyncCheck();
    });

    const v_wId = window_actor.connect('notify::visible', () => {
      Intellifade.asyncCheck();
    });

    window_actor._dpt_signals = [ac_wId, v_wId]; // eslint-disable-line
    this.windows.push(window_actor);

    Intellifade.asyncCheck();
  }
}

/**
 * SPECIAL_CASE: Only update if we're using per-app settings or is desktop icons are enabled.
 *
 */
function _windowRestacked() {
  /* Don't allow restacks while the overview is transitioning. */
  if (!Main.overview.visible) {
    /* Detect if desktop icons are enabled. */
    if (Settings.gs_show_desktop() || Settings.check_overrides() || Settings.check_triggers()) {
      Intellifade.asyncCheck();
    }
  }
}

/**
 * SPECIAL_CASE: Update logic requires the workspace that we'll be switching to.
 *
 */
function _workspaceSwitched(wm, from, to, direction) {
  /* Detect if desktop icons are enabled. */
  if (!Settings.gs_show_desktop() && !Settings.check_overrides() && !Settings.check_triggers()) {
    Intellifade.syncCheck();
  }
}
