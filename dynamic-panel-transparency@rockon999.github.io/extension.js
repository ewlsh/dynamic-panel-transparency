const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Clutter = imports.gi.Clutter;
const Main = imports.ui.main;
const Lang = imports.lang;
const Config = imports.misc.config;
const Panel = Main.panel;

/* Default Settings Values */
const DEFAULT_TRANSITION_SPEED = 1000;
const DEFAULT_MAXIMIZED_OPACITY = 255;
const DEFAULT_UNMAXIMIZED_OPACITY = 0;
const DEFAULT_PANEL_COLOR = [0, 0, 0];
const DEFAULT_HIDE_CORNERS = true;
const DEFAULT_FORCE_ANIMATION = false;

const SETTINGS_HIDE_CORNERS = 'hide-corners';
const SETTINGS_TRANSITION_SPEED = 'transition-speed';
const SETTINGS_FORCE_ANIMATION = 'force-animation';
const SETTINGS_UNMAXIMIZED_OPACITY = 'unmaximized-opacity';
const SETTINGS_MAXIMIZED_OPACITY = 'maximized-opacity';
const SETTINGS_PANEL_COLOR = 'panel-color';

/* Settings Schema */
const SETTINGS_SCHEMA = 'org.gnome.shell.extensions.dynamic-panel-transparency';

/* Color Array Indices */
const RED = 0;
const GREEN = 1;
const BLUE = 2;

/* Color Scaling Factor (Byte to Decimal) */
const SCALE_FACTOR = 255.9999999;

/* Gnome Versioning */
const MAJOR_VERSION = parseInt(Config.PACKAGE_VERSION.split('.')[0]);
const MINOR_VERSION = parseInt(Config.PACKAGE_VERSION.split('.')[1]);

/* Initialize */
function init() {

    /* Global Variables */
    this.tweener = null;
    this.settings = null;
    this.settings_manager = null;
    this.transparent = false;

    /* Signal IDs */
    this._lockScreenSig = null;
    this._lockScreenShownSig = null;
    this._overviewShowingSig = null;
    this._overviewHiddenSig = null;
    this._windowMapSig = null;
    this._windowDestroySig = null;
    this._windowMinimizeSig = null;
    this._windowUnminimizeSig = null;
    this._maximizeSig = null;
    this._unmaximizeSig = null;
    this._workspaceSwitchSig = null;
}

function enable() {
    this.settings = Convenience.getSettings(SETTINGS_SCHEMA);

    bind_settings();

    /* Set the appropriate tweener */
    if (get_force_animation()) {
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
     * active-changed: occurs when the screen shield is toggled
     * workspace-switched: occurs after a workspace is switched
     * map: monitors both new windows and unminimizing windows
     * minimize: occurs as the window is minimized
     * unminimize: occurs as the window is unminimized
     * destroy: occurs as the window is destroyed
     */
    this._overviewHiddenSig = Main.overview.connect('hidden', Lang.bind(this, this._windowUpdated));
    this._overviewShowingSig = Main.overview.connect('showing', Lang.bind(this, function() {
        blank_fade_out();
    }));
    this._lockScreenSig = Main.screenShield.connect('active-changed', Lang.bind(this, function() {
        if (!Main.screenShield._isActive)
            _windowUpdated({
                /* make sure we don't have any odd coloring on the screenShield */
                blank: true
            });
    }));
    this._workspaceSwitchSig = global.window_manager.connect('switch-workspace', Lang.bind(this, this._workspaceSwitched));
    this._windowMinimizeSig = global.window_manager.connect('minimize', Lang.bind(this, this._windowUpdated));
    this._windowUnminimizeSig = global.window_manager.connect('unminimize', Lang.bind(this, this._windowUpdated));
    this._windowMapSig = global.window_manager.connect('map', Lang.bind(this, this._windowUpdated));
    this._windowDestroySig = global.window_manager.connect('destroy', Lang.bind(this, function(wm, window_actor) {
        this._windowUpdated({
            excluded_window: window_actor.get_meta_window()
        });
    }));


    /* Register Proxy Property With Tweener */
    this.tweener.registerSpecialProperty('background_alpha', get_background_alpha, set_background_alpha);
    /* Get Rid of Panel's CSS Background */
    strip_panel_css();
    /* Initial Coloring */
    set_panel_color({
        opacity: 0.0
    });
    set_corner_color({
        opacity: 0.0
    });

    /* Corners :( */
    if (get_hide_corners()) {
        hide_corners();
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
    global.window_manager.disconnect(this._windowUnminimizeSig);
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
    this._windowUnminimizeSig = null;
    this._maximizeSig = null;
    this._unmaximizeSig = null;
    this._workspaceSwitchSig = null;

    unbind_settings();

    /* Remove Transparency */
    fade_out();

    /* Remove Our Panel Coloring */
    set_panel_color({
        red: 0,
        green: 0,
        blue: 0,
        opacity: 0.0
    });
    /* Remove Our Corner Coloring */
    set_corner_color({
        red: 0,
        green: 0,
        blue: 0,
        opacity: 255
    });
    /* Remove Our Styling */
    reapply_panel_css();
    /* Cleanup Global Variables */
    this.transparent = null;
    this.settings = null;
    this.tweener = null;
}

function bind_settings() {
    let transition_speed = this.settings.get_int(SETTINGS_TRANSITION_SPEED);
    let maximized_opacity = this.settings.get_int(SETTINGS_MAXIMIZED_OPACITY);
    let unmaximized_opacity = this.settings.get_int(SETTINGS_UNMAXIMIZED_OPACITY);
    let panel_color = this.settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack();
    let hide_corners = this.settings.get_boolean(SETTINGS_HIDE_CORNERS);
    let force_animation = this.settings.get_boolean(SETTINGS_FORCE_ANIMATION);

    this.settings_manager = new SettingsManager(this.settings, transition_speed, maximized_opacity, unmaximized_opacity, panel_color, hide_corners, force_animation);

    this.settingsBoundIds = [];

    this.settingsBoundIds.push(this.settings.connect('changed::' + SETTINGS_TRANSITION_SPEED, Lang.bind(this, function() {
            this.settings_manager.update({
                transition_speed: this.settings.get_int(SETTINGS_TRANSITION_SPEED)
            });
        })),
        this.settings.connect('changed::' + SETTINGS_MAXIMIZED_OPACITY, Lang.bind(this, function() {
            this.settings_manager.update({
                maximized_opacity: this.settings.get_int(SETTINGS_MAXIMIZED_OPACITY)
            });
        })),
        this.settings.connect('changed::' + SETTINGS_UNMAXIMIZED_OPACITY, Lang.bind(this, function() {
            this.settings_manager.update({
                unmaximized_opacity: this.settings.get_int(SETTINGS_UNMAXIMIZED_OPACITY)
            });
        })),
        this.settings.connect('changed::' + SETTINGS_PANEL_COLOR, Lang.bind(this, function() {
            this.settings_manager.update({
                panel_color: this.settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack()
            });
        })),
        this.settings.connect('changed::' + SETTINGS_HIDE_CORNERS, Lang.bind(this, function() {
            this.settings_manager.update({
                hide_corners: this.settings.get_boolean(SETTINGS_HIDE_CORNERS)
            });
        })),
        this.settings.connect('changed::' + SETTINGS_FORCE_ANIMATION, Lang.bind(this, function() {
            this.settings_manager.update({
                force_animation: this.settings.get_boolean(SETTINGS_FORCE_ANIMATION)
            });
        })));

}

function unbind_settings() {
    for (let i = 0; i < this.settingsBoundIds.length; ++i) {
        this.settings.disconnect(this.settingsBoundIds[i]);
    }
}


const SettingsManager = new Lang.Class({
    Name: 'SettingsManager',
    _init: function(settings, transition_speed, maximized_opacity, unmaximized_opacity, panel_color, hide_corners, force_animation) {
        this.settings = settings;
        this.transition_speed = transition_speed;
        this.maximized_opacity = maximized_opacity;
        this.unmaximized_opacity = unmaximized_opacity;
        this.panel_color = panel_color;
        this.hide_corners = hide_corners;
        this.force_animation = force_animation;
    },
    update: function(params = null) {
        if (params === null)
            params = {
                transition_speed: this.settings.get_int(SETTINGS_TRANSITION_SPEED),
                maximized_opacity: this.settings.get_int(SETTINGS_MAXIMIZED_OPACITY),
                unmaximized_opacity: this.settings.get_int(SETTINGS_UNMAXIMIZED_OPACITY),
                panel_color: this.settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack(),
                hide_corners: this.settings.get_boolean(SETTINGS_HIDE_CORNERS),
                force_animation: this.settings.get_boolean(SETTINGS_FORCE_ANIMATION)
            };

        this.transition_speed = is_undef(params.transition_speed) ? this.settings.get_int(SETTINGS_TRANSITION_SPEED) : params.transition_speed;
        this.maximized_opacity = is_undef(params.maximized_opacity) ? this.settings.get_int(SETTINGS_MAXIMIZED_OPACITY) : params.maximized_opacity;
        this.unmaximized_opacity = is_undef(params.unmaximized_opacity) ? this.settings.get_int(SETTINGS_UNMAXIMIZED_OPACITY) : params.unmaximized_opacity;
        this.panel_color = is_undef(params.panel_color) ? this.settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack() : params.panel_color;
        this.hide_corners = is_undef(params.hide_corners) ? this.settings.get_boolean(SETTINGS_HIDE_CORNERS) : params.hide_corners;
        this.force_animation = is_undef(params.force_animation) ? this.settings.get_boolean(SETTINGS_FORCE_ANIMATION) : params.force_animation;
    }
});


/* Animation Controls */

function strip_panel_css() {
    Panel.actor.add_style_class_name('panel-transparency');
}

function reapply_panel_css() {
    Panel.actor.remove_style_class_name('panel-transparency');
}

function fade_in() {
    if (Main.overview._shown)
        return;
    this.transparent = false;
    let time = (get_transition_speed() / 1000);
    set_panel_color({
        opacity: get_minimum_opacity()
    });
    this.tweener.addTween(Panel.actor, {
        background_alpha: get_minimum_opacity()
    });
    this.tweener.addTween(Panel.actor, {
        time: time,
        transition: 'linear',
        background_alpha: get_maximum_opacity(),
        onComplete: fade_in_complete
    });
}

function fade_in_complete() {
    if (!get_hide_corners()) {
        show_corners();
    }
}

function fade_out(params = null) {
    if (params === null || is_undef(params.time))
        params = {
            time: get_transition_speed()
        };
    let time = params.time / 1000;
    this.transparent = true;
    /* we can't actually fade these, so we'll attempt to hide the fact we're jerkily removing them */
    /* always hide to update preference changes */
    if (!get_hide_corners()) {
        hide_corners();
    } else {
        hide_corners({
            opacity: 0
        });
    }
    set_panel_color();
    if (time <= 0 || Main.overview._shown) {
        set_background_alpha(Panel.actor, get_minimum_opacity());
    } else {
        this.tweener.addTween(Panel.actor, {
            background_alpha: get_maximum_opacity()
        });
        this.tweener.addTween(Panel.actor, {
            time: time,
            transition: 'linear',
            background_alpha: get_minimum_opacity(),
        });
    }
}


/* Doesn't adhere to opacity settings. For overview and screenShield. */
function blank_fade_out(params = null) {
    if (params === null || is_undef(params.time))
        params = {
            time: get_transition_speed()
        };
    let time = params.time / 1000;
    this.transparent = true;
    /* we can't actually fade these, so we'll attempt to hide the fact we're jerkily removing them */
    /* always hide to update preference changes */
    if (!get_hide_corners()) {
        hide_corners();
    } else {
        hide_corners({
            opacity: 0
        });
    }
    set_panel_color();
    if (time <= 0) {
        set_background_alpha(Panel.actor, 0);
    } else {
        this.tweener.addTween(Panel.actor, {
            background_alpha: get_maximum_opacity()
        });
        this.tweener.addTween(Panel.actor, {
            time: time,
            transition: 'linear',
            background_alpha: 0,
        });
    }
}

/* Sadly, the current corner/panel overlap is very awkward */
function hide_corners(params = null) {
    if (params === null || is_undef(params.opacity))
        params = {
            opacity: get_minimum_opacity()
        };
    set_corner_color({
        opacity: params.opacity
    });
}

function show_corners(params = null) {
    if (params === null || is_undef(params.opacity))
        params = {
            opacity: get_maximum_opacity()
        };
    set_corner_color({
        opacity: params.opacity
    });
}

function set_panel_color(params = null) {
    let panel_color = get_panel_color();
    let current_alpha = get_background_alpha(Panel.actor);
    if (params === null)
        params = {
            red: panel_color[RED],
            green: panel_color[GREEN],
            blue: panel_color[BLUE],
            opacity: get_maximum_opacity()
        };
    Panel.actor.set_background_color(new Clutter.Color({
        red: validate(params.red, panel_color[RED]),
        green: validate(params.green, panel_color[GREEN]),
        blue: validate(params.blue, panel_color[BLUE]),
        alpha: (is_undef(params.opacity) ? current_alpha : params.opacity)
    }));
}

function set_corner_color(params = null) {
    let panel_color = get_panel_color();
    let current_alpha = get_background_alpha(Panel._leftCorner.actor);
    if (params === null)
        params = {
            red: panel_color[RED],
            green: panel_color[GREEN],
            blue: panel_color[BLUE],
            opacity: get_maximum_opacity()
        };
    let opacity = is_undef(params.opacity) ? current_alpha : params.opacity;
    let red = validate(params.red, panel_color[RED]);
    let green = validate(params.green, panel_color[GREEN]);
    let blue = validate(params.blue, panel_color[BLUE]);
    let coloring = '-panel-corner-background-color: rgba(' + red + ', ' + green + ', ' + blue + ', ' + (opacity / SCALE_FACTOR) + ');' +
        '' + '-panel-corner-border-color: transparent;';
    Panel._leftCorner.actor.set_style(coloring);
    Panel._rightCorner.actor.set_style(coloring);
}





/* Event Handlers */
function _windowUpdated(params = null) {
    let workspace = global.screen.get_active_workspace();
    let excluded_window = null;
    if (params !== null) {
        if (!is_undef(params.workspace)) {
            workspace = params.workspace;
        }
        if (!is_undef(params.excluded_window)) {
            excluded_window = params.excluded_window;
        }
    }

    let primary_monitor = global.screen.get_primary_monitor();
    let focused_window = global.display.focus_window;
    let windows = workspace.list_windows();

    let add_transparency = true;

    /* save processing by checking the current window (most likely to be maximized) */
    /* check that the focused window is in the right workspace */
    if (!is_undef(focused_window) && focused_window !== excluded_window && focused_window.maximized_vertically && focused_window.get_monitor() === primary_monitor && focused_window.get_workspace() === workspace && !focused_window.minimized) {
        add_transparency = false;
    } else {
        for (let i = 0; i < windows.length; ++i) {
            let current_window = windows[i];
            if (current_window !== excluded_window && current_window.maximized_vertically && current_window.get_monitor() === primary_monitor && !current_window.minimized) {
                add_transparency = false;
                break;
            }
        }
    }
    /* only change if the transparency isn't already correct */
    if (this.transparent !== add_transparency) {
        if (add_transparency) {
            if (params !== null && !is_undef(params.blank) && params.blank) {
                blank_fade_out();
            } else {
                fade_out();
            }
        } else {
            fade_in();
        }
    }
}

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



/* Settings Accessors */

function get_force_animation() {
    if (!is_undef(this.settings_manager)) {
        return this.settings_manager.force_animation;
    } else {
        return DEFAULT_FORCE_ANIMATION;
    }
}

function get_hide_corners() {
    if (!is_undef(this.settings_manager)) {
        return this.settings_manager.hide_corners;
    } else {
        log('Failed to access setting: ' + 'hide-corners');
        return DEFAULT_HIDE_CORNERS;
    }
}

function get_maximum_opacity() {
    if (!is_undef(this.settings_manager)) {
        return this.settings_manager.maximized_opacity;
    } else {
        log('Failed to access setting: ' + 'maximized-opacity');
        return DEFAULT_MAXIMIZED_OPACITY;
    }
}

function get_minimum_opacity() {
    if (!is_undef(this.settings_manager)) {
        return this.settings_manager.unmaximized_opacity;
    } else {
        log('Failed to access setting: ' + 'unmaximized-opacity');
        return DEFAULT_UNMAXIMIZED_OPACITY;
    }
}

function get_panel_color() {
    if (!is_undef(this.settings_manager)) {
        return this.settings_manager.panel_color;
    } else {
        log('Failed to access setting: ' + 'panel-color');
        return DEFAULT_PANEL_COLOR;
    }
}

function get_transition_speed() {
    if (!is_undef(this.settings)) {
        return this.settings_manager.transition_speed;
    } else {
        log('Failed to access setting: ' + 'transition-speed');
        return DEFAULT_TRANSITION_SPEED;
    }
}



/* Special Property Methods */

function get_background_alpha(actor) {
    return actor.get_background_color().alpha;
}

function set_background_alpha(actor, alpha) {
    let background_color = actor.get_background_color();
    actor.set_background_color(new Clutter.Color({
        red: background_color.red,
        green: background_color.green,
        blue: background_color.blue,
        alpha: alpha
    }));
}

/* Utilities */

function validate(a, b) {
    return (!is_undef(a) ? a : b);
}

function is_undef(a) {
    return (typeof(a) === 'undefined' || a === null);
}