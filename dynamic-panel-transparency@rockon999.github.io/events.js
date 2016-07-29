const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Settings = Me.imports.settings;
const Transitions = Me.imports.transitions;
const Theming = Me.imports.theming;
const Util = Me.imports.util;

const Main = imports.ui.main;
const Lang = imports.lang;
const Config = imports.misc.config;
const Panel = Main.panel;

const Clutter = imports.gi.Clutter;



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

function init() {
    let version = Util.get_shell_version();
    this._overviewHiddenSig = Main.overview.connect('hidden', Lang.bind(this, function () {
        _windowUpdated();
    }));
    this._overviewShowingSig = Main.overview.connect('showing', Lang.bind(this, function () {
        if (!status.is_blank()) {
            Transitions.blank_fade_out();
        }
    }));

    /* No unminimize signal on 3.14 (TBD: If this harms the extension) */
    if (version.major == 3 && version.minor > 14) {
        this._windowUnminimizeSig = global.window_manager.connect('unminimize', Lang.bind(this, this._windowUpdated));
    }
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
    this._windowDestroySig = global.window_manager.connect('destroy', Lang.bind(this, function (wm, window_actor) {
        this._windowUpdated({
            excluded_window: window_actor.get_meta_window()
        });
    }));
}

function cleanup() {
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

    for (let container in this.workspaces) {
        for (let window_container in container.windows) {
            window_container.window.disconnect(window_container.signalId);
           delete window_container.window.dpt_tracking;
        }
        if (!Util.is_undef(container) && !Util.is_undef(container.workspace))
            container.workspace.disconnect(container.signalId);
    }

    /* Cleanup Signals */
    this._windowRestackedSig = null;
    //this._lockScreenSig = null;
    //this._lockScreenShownSig = null;
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

// Monitors the maximization of windows. (Because GNOME removed that signal :\)
function _workspacesChanged() {
    if (typeof (this.workspaces) === 'undefined' || this.workspaces === null) {
        this.workspaces = [];
    }

    for (let container in this.workspaces) {
        for (let window_container in container.windows) {
            window_container.window.disconnect(window_container.signalId);
        }
        if (!Util.is_undef(container) && !Util.is_undef(container.workspace))
            container.workspace.disconnect(container.signalId);
    }

    for (let i = 0; i < global.screen.get_n_workspaces(); i++) {
        let workspace = global.screen.get_workspace_by_index(i);
        if (typeof (workspace) === 'undefined' || workspace === null) {
            continue;
        }
        const id = workspace.connect('window-added', Lang.bind(this, function (workspace, window) {
            if (!Util.is_undef(window)) {
                log('gogo:+' + window);
                log('gogo2:+' + workspace);
                if (Util.is_undef(window.dpt_tracking)) {
                    window.dpt_tracking = true;

                    let wId = window.connect('notify::maximized-vertically', Lang.bind(this, function () {
                        this._windowUpdated();
                        for (let workspace_container in this.workspaces) {
                            if (workspace_container.signalId == id) {
                                workspace_container.windows.push({ 'window': window, 'signalId': wId });
                            }
                        }
                    }));
                }
            }
        }));
        let windows = [];

        log(Object.getOwnPropertyNames(workspace.list_windows()));
        for (let w = 0; w < workspace.list_windows().length; w++) {
            let window = workspace.list_windows()[w];
            if (!Util.is_undef(window) && Util.is_undef(window.dpt_tracking)) {
                window.dpt_tracking = true;
                log('gogo3:+' + window);
                log('gogo23:+' + workspace);
                let wId = window.connect('notify::maximized-vertically', Lang.bind(this, function () {
                    this._windowUpdated();
                }));
                windows.push({ 'window': window, 'signalId': wId });
            }
        }

        this.workspaces.push({ 'workspace': workspace, 'signalId': id, 'windows': windows });
    }
}


// main logic of the extension.
function _windowUpdated(params = null) {
    if (Main.overview._shown)
        return;

    let workspace = global.screen.get_active_workspace();
    let excluded_window = null;
    if (params !== null) {
        if (!Util.is_undef(params.workspace)) {
            workspace = params.workspace;
        }
        if (!Util.is_undef(params.excluded_window)) {
            excluded_window = params.excluded_window;
        }
    }

    //let primary_monitor = global.screen.get_primary_monitor();
    let focused_window = global.display.focus_window;
    let windows = workspace.list_windows();

    let add_transparency = true;

    /* save processing by checking the current window (most likely to be maximized) */
    /* check that the focused window is in the right workspace */
    this.maximized_window = null;

    if (!Util.is_undef(focused_window) && focused_window !== excluded_window && Util.is_maximized(focused_window) && focused_window.is_on_primary_monitor() && focused_window.get_workspace() === workspace && !focused_window.minimized) {
        add_transparency = false;
        this.maximized_window = focused_window;
    } else {
        for (let i = windows.length - 1; i >= 0; --i) {
            let current_window = windows[i];

            if (current_window !== excluded_window && Util.is_maximized(current_window) && current_window.is_on_primary_monitor() && !current_window.minimized) {
                this.maximized_window = current_window;
                add_transparency = false;
                if (!Settings.check_app_settings())
                    break;
            }
        }
    }

    if (!Util.is_undef(focused_window)) {
        for (let app_id of Settings.get_trigger_apps()) {
            let app = Util.get_app(focused_window);
            if (!Util.is_undef(app) && app.get_id() == app_id) {
                add_transparency = false;
                this.maximized_window = focused_window;
                break;
            }
        }
    }

    let time = (params !== null && !Util.is_undef(params.time)) ? {
        time: params.time
    } : null;
    /* only change if the transparency isn't already correct */
    if ((Transitions.get_transparency_status().is_transparent() !== add_transparency) || (params !== null && !Util.is_undef(params.force) && params.force)) {
        if (add_transparency) {
            if (params !== null && !Util.is_undef(params.blank) && params.blank) {
                Transitions.blank_fade_out({ time: time });
            } else {
                Transitions.fade_out({ time: time });
            }
        } else {
            Transitions.fade_in({ time: time });
        }
    } else if (Transitions.get_transparency_status().is_blank() && !add_transparency) {
        Transitions.fade_in({ time: time });//_from_blank(time);
    } else if (Settings.check_app_settings() && add_transparency) {
        Transitions.update_transparent();
    } else if (Settings.check_app_settings() && !add_transparency) {
        Transitions.update_solid();
    }

    if (Settings.get_enable_maximized_text_color()) {
        if (Settings.get_enable_text_color() && add_transparency) {
            Theming.set_text_color();
        } else if (!add_transparency) {
            Theming.set_text_color('-maximized-');
        }
    }


}

// special case: blank the panel if the screenShield is activated.
function _screenShieldActivated() {
    if (Main.screenShield !== null && !Main.screenShield._isActive) {
        _windowUpdated({
            blank: true,
            time: 0
        });
        // Why did we do this?
        /*Transitions.hide_corners({
            opacity: 0
        });*/
    } else {
        /* make sure we don't have any odd coloring on the screenShield */
        Transitions.blank_fade_out({
            time: 0
        });
    }
}

// special case: Don't rerun the logic if we aren't using per-app settings.
function _windowRestacked() {
    if (Settings.check_app_settings()) {
        _windowUpdated();
    }
}

// special case: Pass the expected workspace to the _windowUpdated logic.
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


// Function that returns the current VISIBLE maximized window based on the _windowUpdated function.
// This does not mean the maximized window is necessarily the highest window in the z-order.
function get_current_maximized_window() {
    return this.maximized_window;
}