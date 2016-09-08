/* exported init, cleanup, _workspacesChanged, _windowRestacked, _screenShieldActivated, _workspaceSwitched, get_current_maximized_window */

const Lang = imports.lang;

const Params = imports.misc.params;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Compatibility = Me.imports.compatibility;
const Transitions = Me.imports.transitions;
const Settings = Me.imports.settings;
const Theming = Me.imports.theming;
const Util = Me.imports.util;

const Main = imports.ui.main;


// TODO: is this description of signal connections correct?

/* Signal Connections
 * hidden: occurs after the overview is hidden
 * showing: occurs as the overview is opening
 * active-changed: occurs when the screen shield is toggled.
 * notify::n-workspaces: occurs when the number of workspaces changes
 * restacked: occurs when the window Z-ordering changes
 * workspace-switched: occurs after a workspace is switched
 * map: monitors both new windows and unminimizing windows
 * minimize: occurs as the window is minimized
 * unminimize: occurs as the window is unminimized
 * destroy: occurs as the window is destroyed
 */


/**
 * Intialize.
 *
 */
function init() {
    this._overviewHiddenSig = Main.overview.connect('hidden', Lang.bind(this, function () {
        _windowUpdated();
    }));
    this._overviewShowingSig = Main.overview.connect('showing', Lang.bind(this, function () {
        if (!Transitions.get_transparency_status().is_blank()) {
            Transitions.blank_fade_out();
        }
        if (Settings.get_enable_overview_text_color()) {
            Theming.set_text_color('maximized');
        } else {
            Theming.set_text_color();
        }
    }));

    // COMPATIBILITY: No unminimize signal on 3.14
    // TODO: Figure out if this harms the extension behaviour
    this._windowUnminimizeSig = Compatibility.g_signal_connect(global.window_manager, 'unminimize', Lang.bind(this, this._windowUpdated));


    /* Check to see if the screenShield exists (doesn't if user can't lock) */
    if (Main.screenShield !== null) {
        this._lockScreenSig = Main.screenShield.connect('active-changed', Lang.bind(this, this._screenShieldActivated));
    }

    this._workspacesChangedSig = global.screen.connect('notify::n-workspaces', Lang.bind(this, this._workspacesChanged));
    this._windowRestackedSig = global.screen.connect('restacked', Lang.bind(this, this._windowRestacked));
    this._workspaceSwitchSig = global.window_manager.connect('switch-workspace', Lang.bind(this, this._workspaceSwitched));
    this._windowMinimizeSig = global.window_manager.connect('minimize', Lang.bind(this, function (wm, window_actor) {
        this._windowUpdated({ excluded_window: window_actor.get_meta_window() });
    }));
    this._windowMapSig = global.window_manager.connect('map', Lang.bind(this, function () {
        this._windowUpdated();
    }));

    // TODO: Seperate function.
    this._windowDestroySig = global.window_manager.connect('destroy', Lang.bind(this, function (wm, window_actor) {
        if (!Util.is_undef(window_actor.get_meta_window().dpt_tracking)) {
            delete window_actor.get_meta_window().dpt_tracking;
        }

        /* Find the workspace that this window should be in. */
        let workspace_container = null;
        for (let container in this.workspaces) {
            if (window_actor.get_meta_window().get_workspace() === container.workspace) {
                workspace_container = container;
                break;
            }
        }

        /* If the workspace exists then lets find the window inside and remove it. */
        if (!Util.is_undef(workspace_container)) {
            let index = workspace_container.windows.indexOf(window_actor.get_meta_window());
            if (index > -1) {
                workspace_container.windows.splice(index, 1);
            }
        }

        this._windowUpdated({
            excluded_window: window_actor.get_meta_window()
        });
    }));
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

    /* Remove window tracking properties. */
    for (let container in this.workspaces) {
        for (let window_container in container.windows) {
            window_container.window.disconnect(window_container.signalId);
            delete window_container.window.dpt_tracking;
        }
        if (!Util.is_undef(container) && !Util.is_undef(container.workspace)) {
            container.workspace.disconnect(container.signalId);
        }
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
    this.workspaces = null;

}

/* Event Handlers */


/**
 * Called whenever a workspace changes.
 * Used to monitor when any window maximized, because GNOME removed the maximization signal in 3.14. (Ugh.)
 *
 */
function _workspacesChanged() {
    if (typeof (this.workspaces) === 'undefined' || this.workspaces === null) {
        this.workspaces = [];
    }

    for (let container in this.workspaces) {
        for (let window_container in container.windows) {
            window_container.window.disconnect(window_container.signalId);
        }
        if (!Util.is_undef(container) && !Util.is_undef(container.workspace)) {
            container.workspace.disconnect(container.signalId);
        }
    }

    for (let i = 0; i < global.screen.get_n_workspaces(); i++) {
        let workspace = global.screen.get_workspace_by_index(i);
        if (typeof (workspace) === 'undefined' || workspace === null) {
            continue;
        }
        const id = workspace.connect('window-added', Lang.bind(this, function (workspace, window) {
            if (!Util.is_undef(window)) {
                if (Util.is_undef(window.dpt_tracking)) {
                    window.dpt_tracking = true;

                    let wId = window.connect('notify::maximized-vertically', Lang.bind(this, function () {
                        this._windowUpdated();
                        for (let workspace_container in this.workspaces) {
                            if (workspace_container.signalId === id) {
                                workspace_container.windows.push({ 'window': window, 'signalId': wId });
                            }
                        }
                    }));
                }
            }
        }));
        let windows = [];
        for (let w = 0; w < workspace.list_windows().length; w++) {
            let window = workspace.list_windows()[w];
            if (!Util.is_undef(window) && Util.is_undef(window.dpt_tracking)) {
                window.dpt_tracking = true;
                let wId = window.connect('notify::maximized-vertically', Lang.bind(this, function () {
                    this._windowUpdated();
                }));
                windows.push({ 'window': window, 'signalId': wId });
            }
        }

        this.workspaces.push({ 'workspace': workspace, 'signalId': id, 'windows': windows });
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

    let add_transparency = true;

    // TODO: Faster way than nulling & updating?
    this.maximized_window = null;

    /* Save processing time by checking the current window (most likely to be maximized) */
    /* Check that the focused window is in the right workspace. (I really hope it always is...) */
    if (!Util.is_undef(focused_window) && focused_window !== excluded_window && Util.is_maximized(focused_window) && focused_window.is_on_primary_monitor() && focused_window.get_workspace() === workspace && !focused_window.minimized) {
        add_transparency = false;
        this.maximized_window = focused_window;
    } else {
        for (let i = windows.length - 1; i >= 0; --i) {
            let current_window = windows[i];
            if (current_window !== excluded_window && Util.is_maximized(current_window) && current_window.is_on_primary_monitor() && !current_window.minimized) {
                this.maximized_window = current_window;
                add_transparency = false;
                if (!Settings.check_app_settings()) {
                    break;
                }
            }
        }
    }

    if (!Util.is_undef(focused_window)) {
        let found = false;

        for (let wm_class of Settings.get_trigger_windows()) {
            // DEBUG: log(focused_window.get_wm_class().toLowerCase() + '===' + wm_class.toLowerCase());
            if (focused_window.get_wm_class().toLowerCase() === wm_class.toLowerCase()) {
                add_transparency = false;
                found = true;
                this.maximized_window = focused_window;
                break;
            }
        }

        if (!found) {
            for (let app_id of Settings.get_trigger_apps()) {
                let app = Util.get_app_for_window(focused_window);
                if (!Util.is_undef(app) && app.get_id() === app_id) {
                    add_transparency = false;
                    this.maximized_window = focused_window;
                    break;
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
    } else if (Settings.check_app_settings()) {
        // TODO: Double check this removed logic.
        // Oh no... this is messed up.
        // Theming.set_panel_color();
        /* Mark as interruptible in case any other more important transition is needed. */
        transition_params.interruptible = true;
        if (!add_transparency) {
            Transitions.fade_in(transition_params);
        }
    }

    if (Settings.get_enable_text_color() && (Settings.get_enable_maximized_text_color() || Settings.get_enable_overview_text_color())) {
        if (add_transparency) {
            Theming.set_text_color();
        } else if (Settings.get_enable_maximized_text_color()) {
            Theming.set_text_color('maximized');
        }
    }

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

        // TODO: Figure out why I did this...

        /* Transitions.hide_corners({ opacity: 0 }); */
    } else {
        /* make sure we don't have any odd coloring on the screenShield */
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
    if (Settings.check_app_settings()) {
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