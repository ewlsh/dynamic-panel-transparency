const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Clutter = imports.gi.Clutter;
const Main = imports.ui.main;
const Lang = imports.lang;
const Config = imports.misc.config;

/* Default Settings Values */
const DEFAULT_TRANSITION_SPEED = 1000;
const DEFAULT_HIDE_CORNERS = true;
const DEFAULT_FORCE_ANIMATION = false;

/* Gnome Versioning */
const MAJOR_VERSION = parseInt(Config.PACKAGE_VERSION.split('.')[0]);
const MINOR_VERSION = parseInt(Config.PACKAGE_VERSION.split('.')[1]);

/* Initialize */
function init() {
    /* Global Variables */
    this.tweener = null;
    this.settings = null;
    this.transparent = false;

    /* Signal IDs */
    this._sizeChangeSig1 = null;
    this._sizeChangeSig2 = null;
    this._sizeChangeSig3 = null;
    this._overviewChangeSig1 = null;
    this._overviewChangeSig2 = null;
    this._windowCreateSig = null;
    this._windowDestroySig = null;
    this._windowMinimizeSig = null;
    this._lockScreenSig = null;
}

function enable() {
    this.settings = Convenience.getSettings('org.gnome.shell.extensions.dynamic-panel-transparency');

    /* Set the appropriate tweener */
    if (force_animation()) {
        this.tweener = imports.tweener.tweener;
    } else {
        this.tweener = imports.ui.tweener;
    }

    /* Add support for older Gnome Shell versions (most likely down to 3.12) */
    if (MAJOR_VERSION == 3 && MINOR_VERSION < 17) {
        this._maximizeSig = global.window_manager.connect('maximize', Lang.bind(this, this._windowUpdated));
        this._unmaximizeSig = global.window_manager.connect('unmaximize', Lang.bind(this, this._windowUpdated));
    } else {
        this._maximizeSig = global.window_manager.connect('hide-tile-preview', Lang.bind(this, this._windowUpdated));
        this._unmaximizeSig = global.window_manager.connect('size-change', Lang.bind(this, this._windowUpdated));
    }

    /* Signal Connections 
     * hidden: occurs after the overview is hidden
     * showing: occurs as the overview is opening
     * locked-changed: occurs when the lock screen is toggled
     * workspace-switched: occurs after a workspace is switched
     * map: monitors both new windows and unminimizing windows
     * minimize: occurs as the window is minimized
     * destroy: occurs as the window is destroyed
     */
    this._overviewHiddenSig = Main.overview.connect('hidden', Lang.bind(this, this._windowUpdated));
    this._overviewShowingSig = Main.overview.connect('showing', Lang.bind(this, function() {
        if (!this.transparent)
            fade_out();
    }));
    this._lockScreenSig = Main.screenShield.connect('active-changed', Lang.bind(this, function() {
        if (!Main.screenShield._isActive)
            _windowUpdated();
    }));
    this._workspaceSwitchSig = global.window_manager.connect('switch-workspace', Lang.bind(this, this._workspaceSwitched));
    this._windowMinimizeSig = global.window_manager.connect('minimize', Lang.bind(this, this._windowUpdated));
    this._windowMapSig = global.window_manager.connect('map', Lang.bind(this, this._windowUpdated));
    this._windowDestroySig = global.window_manager.connect('destroy', Lang.bind(this, function(wm, window_actor) {
        this._windowUpdated({
            excluded_window: window_actor.get_meta_window()
        });
    }));


    /* Register Proxy Property With Tweener */
    tweener.registerSpecialProperty("ccAlpha", cc_alpha_get, cc_alpha_set);
    /* Get Rid of Panel's CSS Background */
    Main.panel.actor.add_style_class_name('panel-transparency');
    /* Corners :( */
    if (hide_corners()) {
        Main.panel._leftCorner.actor.add_style_class_name('corner-transparency');
        Main.panel._rightCorner.actor.add_style_class_name('corner-transparency');
    }
    /* Simulate Window Changes */
    _windowUpdated();
}


function disable() {
    /* Disconnect & Null Signals */
    Main.screenShield.disconnect(this._lockScreenSig);
    Main.overview.disconnect(this._overviewShowingSig);
    Main.overview.disconnect(this._overviewHiddenSig);
    global.window_manager.disconnect(this._windowMapSig);
    global.window_manager.disconnect(this._windowDestroySig);
    global.window_manager.disconnect(this._windowMinimizeSig);
    global.window_manager.disconnect(this._maximizeSig);
    global.window_manager.disconnect(this._unmaximizeSig);
    global.screen.disconnect(this._workspaceSwitchSig);
    /* Cleanup Signals */
    this._lockScreenSig = null;
    this._lockScreenShownSig = null;
    this._overviewShowingSig = null;
    this._overviewHiddenSig = null;
    this._windowMapSig = null;
    this._windowDestroySig = null;
    this._windowMinimizeSig = null;
    this._maximizeSig = null;
    this._unmaximizeSig = null;
    this._workspaceSwitchSig = null;
    /* Remove Styling */
    Main.panel.actor.remove_style_class_name('panel-transparency');
    Main.panel._leftCorner.actor.remove_style_class_name('corner-transparency');
    Main.panel._rightCorner.actor.remove_style_class_name('corner-transparency');
    /* Remove Transparency */
    fade_out();
    /* Cleanup Global Variables */
    this.transparent = null;
    this.settings = null;
    this.tweener = null;
}



/* Animation Controls */

function fade_in() {
    var time = (transition_speed() / 1000);
    if (Main.overview._shown)
        return;
    tweener.addTween(Main.panel.actor, {
        ccAlpha: 0
    });
    tweener.addTween(Main.panel.actor, {
        time: time,
        transition: 'linear',
        ccAlpha: 255,
        onComplete: fade_in_completed()
    });
}

function fade_out() {
    var time = (transition_speed() / 1000);
    this.transparent = true;
    /* we can't actually fade these, so we'll attempt to hide the fact we're jerkily removing them */
    if (!hide_corners()) {
        Main.panel._leftCorner.actor.add_style_class_name('corner-transparency');
        Main.panel._rightCorner.actor.add_style_class_name('corner-transparency');
    }
    tweener.addTween(Main.panel.actor, {
        ccAlpha: 255
    });
    tweener.addTween(Main.panel.actor, {
        time: time,
        transition: 'linear',
        ccAlpha: 0,
        onComplete: fade_out_completed()
    });
}

function _in() {
    if (Main.overview._shown)
        return;
    var ccolor = new Clutter.Color({
        red: 0,
        green: 0,
        blue: 0,
        alpha: 255
    });
    Main.panel.actor.set_background_color(ccolor);
    fade_in_completed();
}



function _out() {
    this.transparent = true;
    /* we can't actually fade these, so we'll attempt to hide the fact we're jerkily removing them */
    if (!hide_corners()) {
        Main.panel._leftCorner.actor.add_style_class_name('corner-transparency');
        Main.panel._rightCorner.actor.add_style_class_name('corner-transparency');
    }
    var ccolor = new Clutter.Color({
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0
    });
    Main.panel.actor.set_background_color(ccolor);
    fade_out_completed();
}

function fade_in_completed() {
    this.transparent = false;
    /* we can't actually fade these, so we'll attempt to hide the fact we're jerkily removing them */
    if (!hide_corners()) {
        Main.panel._leftCorner.actor.remove_style_class_name('corner-transparency');
        Main.panel._rightCorner.actor.remove_style_class_name('corner-transparency');
    }
}


function fade_out_completed() {}



/* Event Handlers */
function _windowUpdated(params) {
    let workspace = global.screen.get_active_workspace();
    if (params != null && params.workspace != null) {
        workspace = params.workspace;
    }
    let excluded_window = null;
    if (params != null && params.excluded_window != null)
        excluded_window = params.excluded_window;
    let windows = workspace.list_windows();
    let primary_monitor = global.screen.get_primary_monitor();

    let _transparency = true;
    /* save processing by checking the current window (most likely to be maximized) */
    /* check that the focused window is in the right workspace */
    let focused_window = global.display.focus_window;

    if (focused_window != null && focused_window != excluded_window && focused_window.get_workspace() == workspace && focused_window.maximized_vertically && !focused_window.is_hidden() && !focused_window.minimized && focused_window.get_monitor() == primary_monitor) {
        _transparency = false;
    } else {
        for (let i = 0; i < windows.length; ++i) {
            let currentWindow = windows[i];
            if (currentWindow != excluded_window && currentWindow.maximized_vertically //&& !currentWindow.is_hidden() 
                && !currentWindow.minimized && currentWindow.get_monitor() == primary_monitor) {
                _transparency = false;

                break;
            }
        }
    }
    /* only change if the transparency isn't already correct */
    if (this.transparent != _transparency) {
        if (_transparency) {
            fade_out();
        } else {
            fade_in();
        }
    }
}

function _workspaceSwitched(wm, from, to, direction) {
    let workspace_to = global.screen.get_workspace_by_index(to);
    if (workspace_to != null) {
        log('found workspace: ' + to);
        this._windowUpdated({
            workspace: workspace_to
        });
    } else {
        // maybe this will do something?
        this._windowUpdated();
    }
}



/* Settings Accessors */

function force_animation() {
    if (settings != null)
        return settings.get_boolean('force-animation');
    else
        return DEFAULT_FORCE_ANIMATION;
}

function hide_corners() {
    if (settings != null)
        return settings.get_boolean('hide-corners');
    else
        return DEFAULT_HIDE_CORNERS;
}

function transition_speed() {
    if (settings != null)
        return settings.get_int('transition-speed');
    else
        return DEFAULT_TRANSITION_SPEED;
}



/* Special Property Methods */

function cc_alpha_get(actor) {
    return actor.get_background_color().alpha;
}

function cc_alpha_set(actor, alpha) {
    var ccolor = new Clutter.Color({
        red: 0,
        green: 0,
        blue: 0,
        alpha: alpha
    });
    actor.set_background_color(ccolor);
}
