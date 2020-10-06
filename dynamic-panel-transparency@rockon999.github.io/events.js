/* exported init, cleanup, get_current_maximized_window */

const Mainloop = imports.mainloop;
const Lang = imports.lang;

const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Shell = imports.gi.Shell;

const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Convenience = Me.imports.convenience;
const Extension = Me.imports.extension;
const Intellifade = Me.imports.intellifade;
const Settings = Me.imports.settings;
const Util = Me.imports.util;

const Theming = Me.imports.theming;
const Transitions = Me.imports.transitions;

/**
 * Signal Connections
 * js/ui/overview.js/hidden: occurs after the overview is hidden
 * js/ui/overview.js/shown: occurs after the overview is open
 * MetaScreen/restacked: occurs when the window Z-ordering changes
 * window_group/actor-added: occurs when a window actor is added
 * window_group/actor-removed: occurs when a window actor is removed
 * wm/switch-workspace: occurs after a workspace is switched
 */

/**
 * Intialize.
 *
 */
function init() {
    this._wm_tracker = Shell.WindowTracker.get_default();

    this._overviewHidingSig = Main.overview.connect('hiding', Util.strip_args(Intellifade.syncCheck).bind(this));

    if (Settings.transition_with_overview()) {
        this._overviewShownSig = Main.overview.connect('showing', _overviewShown.bind(this));
    } else {
        this._overviewShownSig = Main.overview.connect('shown', _overviewShown.bind(this));
    }

    let windows = global.get_window_actors();

    for (let window_actor of windows) {
        /* Simulate window creation event, null container because _windowActorAdded doesn't utilize containers */
        _windowActorAdded(null, window_actor, false);
    }

    this._workspaceSwitchSig = global.window_manager.connect_after('switch-workspace', _workspaceSwitched.bind(this));

    const screen = global.screen || global.display;

    if (screen) {
        this._windowRestackedSig = screen.connect_after('restacked', _windowRestacked.bind(this));
    } else {
        log('[Dynamic Panel Transparency] Error could not register \'restacked\' event.');
    }

    this._windowActorAddedSig = global.window_group.connect('actor-added', _windowActorAdded.bind(this));
    this._windowActorRemovedSig = global.window_group.connect('actor-removed', _windowActorRemoved.bind(this));

    this._appFocusedSig = this._wm_tracker.connect_after('notify::focus-app', _windowRestacked.bind(this));
}

function disconnect(obj, sig) {
    try {
        if (sig != null && obj) {
            obj.disconnect(sig);
        }
    } catch (error) {
        log('[Dynamic Panel Transparency] Failed to disconnect signal: ' + error);
    }
}

/**
 * Don't want to hold onto anything that isn't ours.
 *
 */
function cleanup() {
    /* Disconnect Signals */
    if (this._windowUnminimizeSig) {
        disconnect(global.window_manager, this._windowUnminimizeSig);
    }

    disconnect(Main.overview, this._overviewShownSig);
    disconnect(Main.overview, this._overviewHidingSig);

    disconnect(global.window_manager, this._workspaceSwitchSig);

    disconnect(global.window_group, this._windowActorAddedSig);
    disconnect(global.window_group, this._windowActorRemovedSig);

    const screen = global.screen || global.display;

    if (screen) {
        disconnect(screen, this._windowRestackedSig);
    } else {
        log('[Dynamic Panel Transparency] Error could not disconnect \'restacked\' event.');
    }

    disconnect(this._wm_tracker, this._appFocusedSig);

    let windows = global.get_window_actors();

    for (let window_actor of windows) {
        if (typeof (window_actor._dpt_signals) !== 'undefined') {
            for (let signalId of window_actor._dpt_signals) {
                disconnect(window_actor, signalId);
            }
        }

        delete window_actor._dpt_signals;
        delete window_actor._dpt_tracking;
    }

    /* Cleanup Signals */
    this._windowRestackedSig = null;
    this._overviewShownSig = null;
    this._overviewHidingSig = null;
    this._windowActorRemovedSig = null;
    this._workspaceSwitchSig = null;
    this._windowActorAddedSig = null;

    this._wm_tracker = null;
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

    if (Settings.get_enable_text_color() && (Settings.get_enable_maximized_text_color() || Settings.get_enable_overview_text_color())) {
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
    if (typeof (window_actor._dpt_tracking) === 'undefined') {
        return;
    }

    /* Remove our tracking variable. */
    delete window_actor._dpt_tracking;

    if (typeof (window_actor._dpt_signals) !== 'undefined') {
        for (let signalId of window_actor._dpt_signals) {
            window_actor.disconnect(signalId);
        }
    }

    delete window_actor._dpt_signals;

    Intellifade.asyncCheck();
}

const { major, minor } = Util.get_shell_version();

/**
 * Called whenever a window is created in the shell.
 *
 */
function _windowActorAdded(window_group, window_actor, force = true) {
    if (window_actor && (force || typeof (window_actor._dpt_tracking) === 'undefined')) {
        window_actor._dpt_tracking = true;

        let ac_wId = -1;

        if (major >= 40 || minor > 36) {
            ac_wId = window_actor.connect('notify::allocation', (function() {
                Intellifade.asyncCheck();
            }).bind(this));
        } else {
            ac_wId = window_actor.connect('allocation-changed', (function() {
                Intellifade.asyncCheck();
            }).bind(this));
        }

        const v_wId = window_actor.connect('notify::visible', (function() {
            Intellifade.asyncCheck();
        }).bind(this));
        window_actor._dpt_signals = [ac_wId, v_wId];

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
        if (Settings.gs_show_desktop()) {
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
    if (!Settings.gs_show_desktop()) {
        Intellifade.syncCheck();
    }
}