/* exported init, cleanup, _workspacesChanged, _userThemeChanged, _windowMinimized, _windowDestroyed, _windowRestacked, _screenShieldActivated, _workspaceSwitched, get_current_maximized_window */

const Mainloop = imports.mainloop;
const Lang = imports.lang;

const Params = imports.misc.params;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Compatibility = Me.imports.compatibility;
const Convenience = Me.imports.convenience;
const Transitions = Me.imports.transitions;
const Settings = Me.imports.settings;
const Theming = Me.imports.theming;
const Util = Me.imports.util;

const Gio = imports.gi.Gio;

const Main = imports.ui.main;
const Panel = Main.panel;

const USER_THEME_SCHEMA = 'org.gnome.shell.extensions.user-theme';
const EXTENSION_SCHEMA = 'org.gnome.shell';

// TODO: Do I still need this? const USER_THEME_EXTENSION_UUID = 'user-theme@gnome-shell-extensions.gcampax.github.com';

/**
 * Signal Connections
 * hidden: occurs after the overview is hidden
 * showing: occurs as the overview is opening
 * unminimize: occurs as the window is unminimized
 * active-changed: occurs when the screen shield is toggled.
 * notify::n-workspaces: occurs when the number of workspaces changes
 * restacked: occurs when the window Z-ordering changes
 * switch-workspace: occurs after a workspace is switched
 * minimize: occurs as the window is minimized
 * map: monitors both new windows and unminimizing windows
 * destroy: occurs as the window is destroyed
 * changed::enabled-extensions: occurs when an extension is disabled and/or enabled.
 * user-theme/changed::name: occurs when the user's theme changes
 *
 */


/**
 * Intialize.
 *
 */
function init() {
    this.workspaces = [];
    this.windows = [];

    this._overviewHiddenSig = Main.overview.connect('hidden', Lang.bind(this, function () {
        _windowUpdated();
    }));
    this._overviewShowingSig = Main.overview.connect('showing', Lang.bind(this, function () {
        if (!Transitions.get_transparency_status().is_blank()) {
            Transitions.blank_fade_out();
        }

        if (Settings.get_enable_text_color() && (Settings.get_enable_maximized_text_color() || Settings.get_enable_overview_text_color())) {
            if (Settings.get_enable_overview_text_color()) {
                Theming.set_text_color('maximized');
            } else {
                Theming.set_text_color();
            }
        }
    }));

    // COMPATIBILITY: No unminimize signal on 3.14
    this._windowUnminimizeSig = Compatibility.g_signal_connect(global.window_manager, 'unminimize', Lang.bind(this, this._windowUpdated));


    /* Check to see if the screenShield exists (doesn't if user can't lock) */
    if (Main.screenShield !== null) {
        this._lockScreenSig = Main.screenShield.connect('active-changed', Lang.bind(this, this._screenShieldActivated));
    }

    this._workspaceSwitchSig = global.window_manager.connect('switch-workspace', Lang.bind(this, this._workspaceSwitched));
    this._workspacesChangedSig = global.screen.connect('notify::n-workspaces', Lang.bind(this, this._workspacesChanged));
    this._windowMinimizeSig = global.window_manager.connect('minimize', Lang.bind(this, this._windowMinimized));
    this._windowDestroySig = global.window_manager.connect('destroy', Lang.bind(this, this._windowDestroyed));
    this._windowRestackedSig = global.screen.connect('restacked', Lang.bind(this, this._windowRestacked));
    this._windowMapSig = global.window_manager.connect('map', Lang.bind(this, this._windowUpdated));


    /* This should never fail, but let's be careful */

    try {
        let schemaObj = Convenience.getSchemaObj(EXTENSION_SCHEMA, true);

        if (!Util.is_undef(schemaObj)) {
            this._extension_settings = new Gio.Settings({
                settings_schema: schemaObj
            });
        }
    } catch (error) {
        log('[Dynamic Panel Transparency] Failed find User Themes extension.');
    }


    /* Apparently Ubuntu is wierd and does this different than a common Gnome installation. */
    // TODO: Look into this.

    try {
        let schemaObj = Convenience.getSchemaObj(USER_THEME_SCHEMA, true);

        if (!Util.is_undef(schemaObj)) {
            this._theme_settings = new Gio.Settings({
                settings_schema: schemaObj
            });
        }
    } catch (error) {
        log('[Dynamic Panel Transparency] Failed to find Gnome Shell settings. This should not occur.');
    }

    if (!Util.is_undef(this._extension_settings)) {
        this._extensionsChangedSig = this._extension_settings.connect('changed::enabled-extensions', Lang.bind(this, this._userThemeChanged));
    }

    if (!Util.is_undef(this._theme_settings)) {
        this._userThemeChangedSig = this._theme_settings.connect('changed::name', Lang.bind(this, this._userThemeChanged));
    }
}

/**
 * Don't want to hold onto anything that isn't ours.
 *
 */
function cleanup() {
    /* Disconnect Signals */
    if (!Util.is_undef(this._windowUnminimizeSig)) {
        global.window_manager.disconnect(this._windowUnminimizeSig);
    }

    if (Main.screenShield !== null) {
        Main.screenShield.disconnect(this._lockScreenSig);
    }

    Main.overview.disconnect(this._overviewShowingSig);
    Main.overview.disconnect(this._overviewHiddenSig);
    global.window_manager.disconnect(this._windowMapSig);
    global.window_manager.disconnect(this._windowDestroySig);
    global.window_manager.disconnect(this._windowMinimizeSig);
    global.window_manager.disconnect(this._workspaceSwitchSig);
    global.screen.disconnect(this._windowRestackedSig);
    global.screen.disconnect(this._workspacesChangedSig);

    if (!Util.is_undef(this._theme_settings) && !Util.is_undef(this._userThemeChangedSig)) {
        this._theme_settings.disconnect(this._userThemeChangedSig);
    }

    if (!Util.is_undef(this._extension_settings) && !Util.is_undef(this._extensionsChangedSig)) {
        this._extension_settings.disconnect(this._extensionsChangedSig);
    }

    /* Remove window tracking properties. */
    for (let container of this.workspaces) {
        if (!Util.is_undef(container) && !Util.is_undef(container.workspace)) {
            for (let signalId of container.signalIds) {
                container.workspace.disconnect(signalId);
            }
        }
    }

    for (let window_container of this.windows) {
        window_container.window.disconnect(window_container.signalId);
        delete window_container.window.dpt_tracking;
    }

    /* Cleanup Signals */
    this._windowRestackedSig = null;
    this._overviewShowingSig = null;
    this._overviewHiddenSig = null;
    this._windowMapSig = null;
    this._windowDestroySig = null;
    this._windowMinimizeSig = null;
    this._windowUnminimizeSig = null;
    this._workspaceSwitchSig = null;
    this._workspacesChangedSig = null;
    this._extensionsChangedSig = null;
    this._userThemeChangedSig = null;

    this._extension_settings = null;
    this._theme_settings = null;

    this.workspaces = null;
    this.windows = null;
}


/* Event Handlers */

function _windowDestroyed(wm, window_actor) {
    if (!Util.is_undef(window_actor.get_meta_window().dpt_tracking)) {
        delete window_actor.get_meta_window().dpt_tracking;
    }

    let index = this.windows.indexOf(window_actor.get_meta_window());
    if (index !== -1) {
        this.windows.splice(index, 1);
    }

    this._windowUpdated({
        excluded_window: window_actor.get_meta_window()
    });
}

/**
 * Called whenever the User Theme extension updates the current theme.
 *
 */
function _userThemeChanged() {
    log('[Dynamic Panel Transparency] User theme changed.');

    /* Remove Our Styling */
    Theming.reapply_panel_styling();
    Theming.reapply_panel_background();
    Theming.reapply_panel_background_image();

    Mainloop.idle_add(Lang.bind(this, function () {
        let theme = Panel.actor.get_theme_node();
        let theme_background = theme.get_background_color();

        /* Store user theme values. */
        let image_background = Theming.get_background_image_color(theme);

        if (image_background !== null) {
            log('[Dynamic Panel Transparency] Detected user theme style: rgba(' + image_background.red + ', ' + image_background.green + ', ' + image_background.blue + ', ' + image_background.alpha + ')');
            Theming.set_theme_background_color(Util.clutter_to_native_color(image_background));
            Theming.set_theme_opacity(image_background.alpha);
        } else {
            log('[Dynamic Panel Transparency] Detected user theme style: rgba(' + theme_background.red + ', ' + theme_background.green + ', ' + theme_background.blue + ', ' + theme_background.alpha + ')');
            Theming.set_theme_background_color(Util.clutter_to_native_color(theme_background));
            Theming.set_theme_opacity(theme_background.alpha);
        }

        Theming.strip_panel_background();

        /* Simulate window changes. */
        _windowUpdated({
            force: true
        });
    }));
}

/**
 * Called whenever a workspace changes.
 * Used to monitor when any window maximized, because GNOME removed the maximization signal in 3.14. (Ugh.)
 *
 */
function _workspacesChanged() {
    /* Reset tracking arrays everytime a workspace is added. */
    this.workspaces = [];
    this.windows = [];

    for (let container of this.workspaces) {
        if (!Util.is_undef(container) && !Util.is_undef(container.workspace)) {
            for (let signalId of container.signalIds) {
                container.workspace.disconnect(signalId);
            }
        }
    }
    for (let window_container of this.windows) {
        window_container.window.disconnect(window_container.signalId);
    }

    for (let i = 0; i < global.screen.get_n_workspaces(); i++) {
        let workspace = global.screen.get_workspace_by_index(i);

        if (typeof (workspace) === 'undefined' || workspace === null) {
            continue;
        }

        const nId = workspace.connect('notify::workspace-index', Lang.bind(this, this._workspacesChanged));

        const id = workspace.connect('window-added', Lang.bind(this, function (workspace, window) {
            if (!Util.is_undef(window)) {
                if (Util.is_undef(window.dpt_tracking)) {
                    window.dpt_tracking = true;
                    const wId = window.connect('notify::maximized-vertically', Lang.bind(this, function () {
                        this._windowUpdated();
                    }));
                    this.windows.push({ 'window': window, 'signalId': wId });
                }
            }
        }));


        for (let w = 0; w < workspace.list_windows().length; w++) {
            let window = workspace.list_windows()[w];
            if (!Util.is_undef(window) && Util.is_undef(window.dpt_tracking)) {
                window.dpt_tracking = true;
                const wId = window.connect('notify::maximized-vertically', Lang.bind(this, function () {
                    this._windowUpdated();
                }));
                this.windows.push({ 'window': window, 'signalId': wId });
            }
        }
        this.workspaces.push({ 'workspace': workspace, 'signalIds': [nId, id], index: i });
    }
}


/**
 * Handles any window updates. Contains the core logic of this extension.
 *
 * @param {Object} params - List of parameters for the update.
 * @param {Object} params.excluded_window - Optional. A Meta.Window that should be ignored when updating. Usually this is force events that don't remove a window before this is called.
 * @param {Boolean} params.force - Optional. Updates even if the current state is believed to be identical.
 * @param {Boolean} params.blank - Optional. Whether or not the panel alpha should be set to 0 instead of the unmaximized opacity.
 * @param {Number} params.time - Optional. The amount of time any invoked transition should take.
 */
function _windowUpdated(params) {
    if (Main.overview._shown)
        return;

    params = Params.parse(params, {
        workspace: global.screen.get_active_workspace(),
        excluded_window: null,
        blank: false,
        force: false
    }, true);

    let excluded_window = params.excluded_window;
    let workspace = params.workspace;

    let focused_window = global.display.get_focus_window();

    let windows = workspace.list_windows();
    windows = global.display.sort_windows_by_stacking(windows);

    // TODO: Faster way than nulling & updating?
    this.maximized_window = null;

    let add_transparency = true;

    /* Save processing time by checking the current focused window (most likely to be maximized) */
    /* Check that the focused window is in the right workspace. (I really hope it always is...) */
    /* Don't do the 'quick check' if we have trigger apps/windows as they might not be focused. */
    if (!Util.is_undef(focused_window) && focused_window !== excluded_window && Util.is_maximized(focused_window) && focused_window.is_on_primary_monitor() && focused_window.get_workspace().index() === workspace.index() && !focused_window.minimized && !Settings.check_triggers()) {
        add_transparency = false;
        this.maximized_window = focused_window;
    } else {
        for (let i = windows.length - 1; i >= 0; i--) {
            let current_window = windows[i];
            let is_trigger = false;

            if (Settings.check_triggers()) {
                /* Check if the current WM_CLASS is a trigger. */
                if (Settings.get_trigger_windows().indexOf(current_window.get_wm_class()) !== -1) {
                    /* Make sure the window is on the correct monitor, isn't minimized, and isn't supposed to be excluded. */
                    if (current_window !== excluded_window && current_window.is_on_primary_monitor() && !current_window.minimized) {
                        add_transparency = false;
                        is_trigger = true;
                        this.maximized_window = current_window;
                        break;
                    }
                }

                let app = Util.get_app_for_window(current_window);
                /* Check if the found app exists and if it is a trigger app. */
                if (!Util.is_undef(app) && Settings.get_trigger_apps().indexOf(app.get_id()) !== -1) {
                    /* Make sure the window is on the correct monitor, isn't minimized, and isn't supposed to be excluded. */
                    if (current_window !== excluded_window && current_window.is_on_primary_monitor() && !current_window.minimized) {
                        add_transparency = false;
                        is_trigger = true;
                        this.maximized_window = current_window;
                        break;
                    }
                }
            }

            /* Make sure the window is on the correct monitor, isn't minimized, isn't supposed to be excluded, and is actually maximized. */
            if (current_window !== excluded_window && Util.is_maximized(current_window) && current_window.is_on_primary_monitor() && !current_window.minimized) {
                if (Util.is_undef(this.maximized_window) && !is_trigger) {
                    this.maximized_window = current_window;
                    add_transparency = false;
                    if (!Settings.check_triggers()) {
                        break;
                    }
                }
            }
        }
    }

    let transition_params = {};

    if ('time' in params) {
        transition_params.time = params.time;
    }

    /* Only change if the transparency isn't already correct */
    if ((Transitions.get_transparency_status().is_transparent() !== add_transparency) || params.force) {
        if (add_transparency) {
            if (params.blank) {
                Transitions.blank_fade_out(transition_params);
            } else {
                Transitions.fade_out(transition_params);
            }
        } else {
            Transitions.fade_in(transition_params);
        }
    } else if (Transitions.get_transparency_status().is_blank()) {
        if (add_transparency) {
            Transitions.minimum_fade_in(transition_params);
        } else {
            Transitions.fade_in(transition_params);
        }
    } else if (Settings.check_overrides() || Settings.check_triggers()) {
        // TODO: Debug this more.

        /* Mark as interruptible in case another more important transition is needed. */
        transition_params.interruptible = true;

        if (!add_transparency) {
            Transitions.fade_in(transition_params);
        }
    }

    if (Settings.get_enable_text_color() && (Settings.get_enable_maximized_text_color() || Settings.get_enable_overview_text_color())) {
        if (!add_transparency && Settings.get_enable_maximized_text_color()) {
            Theming.set_text_color('maximized');
        } else {
            Theming.set_text_color();
        }
    }

}

/**
 * SPECIAL CASE: Exclude the minimized window from the event.
 *
 */
function _windowMinimized(wm, window_actor) {
    this._windowUpdated({ excluded_window: window_actor.get_meta_window() });
}

/**
 * SPECIAL CASE: Handle the screenShield when the lock screen isn't active.
 *
 */
function _screenShieldActivated() {
    if (Main.screenShield !== null && !Main.screenShield._isActive) {
        _windowUpdated({
            blank: true,
            time: 0
        });
    } else {
        /* Make sure we don't have any odd coloring on the screenShield */
        Transitions.blank_fade_out({
            time: 0
        });
    }
}

/**
 * SPECIAL_CASE: Only update if we're using per-app settings.
 *
 */
function _windowRestacked() {
    if (Settings.check_overrides() || Settings.check_triggers()) {
        _windowUpdated();
    }
}

/**
 * SPECIAL_CASE: Update logic requires the workspace that we'll be switching to.
 *
 */
function _workspaceSwitched(wm, from, to, direction) {
    let workspace_to = global.screen.get_workspace_by_index(to);
    if (workspace_to !== null) {
        this._windowUpdated({
            workspace: workspace_to
        });
    } else {
        /* maybe this will do something? */
        this._windowUpdated();
    }
}

/**
 * Returns the current visible maximized window as understood by the events' logic.
 * The maximized window is not necessarily the highest window in the z-order.
 *
 * @returns {Object} The current visible maximized window.
 */
function get_current_maximized_window() {
    return this.maximized_window;
}
