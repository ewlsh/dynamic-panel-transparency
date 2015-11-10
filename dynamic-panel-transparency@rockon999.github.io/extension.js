const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Clutter = imports.gi.Clutter;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Lang = imports.lang;

// defaults
const DEFAULT_TRANSITION_SPEED = 1000;
const DEFAULT_HIDE_CORNERS = true;

// GNOME version
const MAJOR_VERSION = parseInt(Config.PACKAGE_VERSION.split('.')[0]);
const MINOR_VERSION = parseInt(Config.PACKAGE_VERSION.split('.')[1]);

// initialize variables
function init() {
    this._transparent = false;
    this._sizeChangeSig1 = null;
    this._sizeChangeSig2 = null;
    this._sizeChangeSig3 = null;
    this._overviewChangeSig1 = null;
    this._overviewChangeSig2 = null;
}

let settings;

function enable() {
    settings = Convenience.getSettings('org.gnome.shell.extensions.dynamic-panel-transparency');
    // add support for 3.16 & 3.14
    if (MAJOR_VERSION == 3 && MINOR_VERSION < 17) {
      register_old();
    } else {
      register();
    }
    // always occurs AFTER the workspace is fully switched
    this._sizeChangeSig3 = global.screen.connect('workspace-switched', Lang.bind(this, this._workspaceSwitched));
    // manage overview
    this._overviewChangeSig1 = Main.overview.connect('hiding', Lang.bind(this, this._windowSizeChanged));
    this._overviewChangeSig2 = Main.overview.connect('showing', Lang.bind(this, this._overviewOpened));

    // register special properties
    Tweener.registerSpecialProperty("ccAlpha", cc_alpha_get, cc_alpha_set);
    // get rid of the css style preventing actor.set_background_color
    Main.panel.actor.add_style_class_name('panel-transparency');
    if (hide_corners()) {
        Main.panel._leftCorner.actor.add_style_class_name('corner-transparency');
        Main.panel._rightCorner.actor.add_style_class_name('corner-transparency');
    }
    // simulate window change to check for maximized windows
    _windowSizeChanged();

}

function register_old() {
    this._sizeChangeSig1 = global.window_manager.connect('maximize', Lang.bind(this, this._windowSizeChanged));
    this._sizeChangeSig2 = global.window_manager.connect('unmaximize', Lang.bind(this, this._windowSizeChanged));
}

function register() {
    // hacky, but gnome got rid of max/unmax
    this._sizeChangeSig1 = global.window_manager.connect('size-change', Lang.bind(this, this._windowSizeChanged));
    this._sizeChangeSig2 = global.window_manager.connect('hide-tile-preview', Lang.bind(this, this._windowSizeChanged));
}

function disable() {
    // null listeners
    this._sizeChangeSig1 = null;
    this._sizeChangeSig2 = null;
    this._sizeChangeSig3 = null;
    this._overviewChangeSig1 = null;
    this._overviewChangeSig2 = null;
    // no deregister function, but we'll at least clear out our data
    //Tweener.registerSpecialProperty("ccAlpha", null, null, null, null);
    // remove our styling
    Main.panel.actor.remove_style_class_name('panel-transparency');
    Main.panel._leftCorner.actor.remove_style_class_name('corner-transparency');
    Main.panel._rightCorner.actor.remove_style_class_name('corner-transparency');
    // remove transparency
    set_transparency(false);
    // cleanup
    this._transparent = null;
    this.settings = null;
}

function fade_in() {
    var time = (transition_speed() / 1000);
    if (Main.overview._shown)
        return;
    Tweener.addTween(Main.panel.actor, {
        ccAlpha: 0
    });
    Tweener.addTween(Main.panel.actor, {
        time: time,
        transition: 'linear',
        ccAlpha: 255,
        onComplete: fade_in_completed()
    });
}

function fade_out() {
    var time = (transition_speed() / 1000);
    this._transparent = true;
    // we can't actually fade these, so attempt to hide the fact we're jerkily removing them
    if (!hide_corners()) {
        Main.panel._leftCorner.actor.add_style_class_name('corner-transparency');
        Main.panel._rightCorner.actor.add_style_class_name('corner-transparency');
    }
    Tweener.addTween(Main.panel.actor, {
        ccAlpha: 255
    });
    Tweener.addTween(Main.panel.actor, {
        time: time,
        transition: 'linear',
        ccAlpha: 0,
        onComplete: fade_out_completed()
    });
}

function fade_in_completed() {
    set_is_transparent(false);
    // we can't actually fade these, so attempt to hide the fact we're jerkily removing them
    if (!hide_corners()) {
        Main.panel._leftCorner.actor.remove_style_class_name('corner-transparency');
        Main.panel._rightCorner.actor.remove_style_class_name('corner-transparency');
    }
}


function fade_out_completed() {}

var set_is_transparent = function(value) {
    this._transparent = value;
}

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
    // check if it is already transparent
    if (status && !this._transparent) {
        fade_out();
        // check if it is already solid
    } else if (this._transparent) {
        fade_in();
    }
}

function _overviewOpened() {
    if (!this._transparent) {
        fade_out();
    }
}

function _workspaceSwitched() {
    _windowSizeChanged();
}

// handles window size changes
function _windowSizeChanged() {
    let workspace = global.screen.get_active_workspace();
    let windows = workspace.list_windows();
    let _transparency = true;
    // save a little processing by checking the current window (most likely to be maximized)
    // check that the focused window is in the right workspace (odd)
    let focused_window = global.display.focus_window;
    if (focused_window != null && focused_window.get_workspace() == workspace && focused_window.maximized_vertically && !focused_window.is_hidden()) {
        _transparency = false;
    } else {
        for (let i = 0; i < windows.length; ++i) {
            let currentWindow = windows[i];
            if (currentWindow.maximized_vertically && !currentWindow.is_hidden()) {
                _transparency = false;
                break;
            }
        }
    }
    // only change if the transparency isn't already correct
    if (this._transparent != _transparency) {
        set_transparency(_transparency);
    }
}

// access settings

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
