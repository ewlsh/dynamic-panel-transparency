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
    this.tweener = imports.ui.tweener;
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
    }

    /* Add support for older Gnome Shell versions (most likely down to 3.12) */
    if (MAJOR_VERSION == 3 && MINOR_VERSION < 17) {
        this._maximizeSig = global.window_manager.connect('maximize', Lang.bind(this, this._windowUpdate));
        this._unmaximizeSig = global.window_manager.connect('unmaximize', Lang.bind(this, this._windowUpdate));
    } else {
        this._maximizeSig = global.window_manager.connect('hide-tile-preview', Lang.bind(this, this._windowUpdate));
        this._unmaximizeSig = global.window_manager.connect('size-change', Lang.bind(this, this._windowUpdate));
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
    this._overviewHiddenSig = Main.overview.connect('hidden', Lang.bind(this, this._windowUpdate));
    this._overviewShowingSig = Main.overview.connect('showing', Lang.bind(this, this._overviewOpened));
    this._lockScreenSig = Main.screenShield.connect('locked-changed', Lang.bind(this, function() {
        this._screenLocked(Main.screenShield._isLocked);
    }));
    this._workspaceSwitchSig = global.screen.connect('workspace-switched', Lang.bind(this, this._workspaceSwitched));
    this._windowMinimizeSig = global.window_manager.connect('minimize', Lang.bind(this, this._windowUpdate));
    this._windowMapSig = global.window_manager.connect('map', Lang.bind(this, this._windowUpdate));
    this._windowDestroySig = global.window_manager.connect('destroy', Lang.bind(this, function(wm, window_actor) {
        this._windowUpdate(window_actor.get_meta_window());
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
    _windowUpdate();

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
    this._lockScreenSig = null;
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
    set_transparency(false);
    /* Cleanup */
    this.transparent = null;
    this.settings = null;
    this.tweener = null;
}

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

function fade_in_completed() {
    this.transparent = false;
    /* we can't actually fade these, so we'll attempt to hide the fact we're jerkily removing them */
    if (!hide_corners()) {
        Main.panel._leftCorner.actor.remove_style_class_name('corner-transparency');
        Main.panel._rightCorner.actor.remove_style_class_name('corner-transparency');
    }
}


function fade_out_completed() {}

function cc_alpha_get(actor) {
    return actor.get_background_color().alpha;
};

function cc_alpha_set(actor, alpha) {
    var ccolor = new Clutter.Color({
        red: 0,
        green: 0,
        blue: 0,
        alpha: alpha
    });
    actor.set_background_color(ccolor);
};


function set_transparency(status) {
    /* check current transparency first */
    if (status && !this.transparent) {
        fade_out();
    } else if (this.transparent) {
        fade_in();
    }
}

function _overviewOpened() {
    if (!this.transparent) {
        fade_out();
    }
}

function _workspaceSwitched() {
    _windowUpdate();
}

function _screenLocked(locked) {
    if (locked) {
        fade_out();
    } else {
        fade_in();
    }
}

function _windowUpdate() {
    _windowUpdate(null);
}

function _windowUpdate(window) {
    let workspace = global.screen.get_active_workspace();
    let windows = workspace.list_windows();

    let _transparency = true;
    /* save processing by checking the current window (most likely to be maximized) */
    /* check that the focused window is in the right workspace */
    let focused_window = global.display.focus_window;

    if (focused_window != null && focused_window != window && focused_window.get_workspace() == workspace && focused_window.maximized_vertically && !focused_window.is_hidden() && !focused_window.minimized) {
        _transparency = false;
    } else {
        for (let i = 0; i < windows.length; ++i) {
            let currentWindow = windows[i];
            if (currentWindow != window && currentWindow.maximized_vertically && !currentWindow.is_hidden() && !currentWindow.minimized) {
                _transparency = false;
                break;
            }
        }
    }
    /* only change if the transparency isn't already correct */
    if (this.transparent != _transparency) {
        set_transparency(_transparency);
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
