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

/* Color Scaling Factor (Byte to Decimal) */
const SCALE_FACTOR = 255.9999999;

/* Initialize */
function init() {
    /* Panel Status */
    this.status = null;
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
    /* Create transparency status manager */
    this.status = new TransparencyStatus();

    /* Setup settings... */
    Settings.init();
    Settings.add({
        settings_key: 'hide-corners',
        name: 'hide_corners',
        type: 'b',
        value: true
    });
    Settings.add({
        settings_key: 'transition-speed',
        name: 'transition_speed',
        type: 'i',
        value: 1000
    });
    Settings.add({
        settings_key: 'force-animation',
        name: 'force_animation',
        type: 'b',
        value: false
    });
    Settings.add({
        settings_key: 'unmaximized-opacity',
        name: 'unmaximized_opacity',
        type: 'i',
        value: 0,
        getter: 'get_minimum_opacity'
    });
    Settings.add({
        settings_key: 'maximized-opacity',
        name: 'maximized_opacity',
        type: 'i',
        value: 255,
        getter: 'get_maximum_opacity'
    });
    Settings.add({
        settings_key: 'panel-color',
        name: 'panel_color',
        type: 'ai',
        value: [0, 0, 0]
    });
    Settings.add({
        settings_key: 'window-touching',
        name: 'window_touching',
        type: 'b',
        value: false
    });
    Settings.add({
        settings_key: 'detect-user-theme',
        name: 'detect_user_theme',
        type: 'b',
        value: false,
        getter: 'detect_user_theme'
    });
    Settings.add({
        settings_key: 'user-theme-source',
        name: 'user_theme_source',
        type: 's',
        value: 'Dash'
    });
    Settings.add({
        settings_key: 'text-shadow',
        name: 'text_shadow',
        type: 'b',
        value: false,
        getter: 'add_text_shadow'
    });
    Settings.bind();

    /* Initialize */
    Transitions.init();
    Theming.init();

    let version = Util.get_shell_version();

    /* Add support for older Gnome Shell versions (most likely down to 3.12) */
    if(version.major == 3 && version.minor < 17) {
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
    this._overviewHiddenSig = Main.overview.connect('hidden', Lang.bind(this, function() {
        _windowUpdated();
    }));
    this._overviewShowingSig = Main.overview.connect('showing', Lang.bind(this, function() {
        if (!status.is_transparent() && !status.is_blank()) {
            Transitions.blank_fade_out();
        } else if (status.is_transparent() && !status.is_blank()) {
            Transitions.blank_fade_out({
                time: 0
            });
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
    this._workspaceSwitchSig = global.window_manager.connect('switch-workspace', Lang.bind(this, this._workspaceSwitched));
    this._windowMinimizeSig = global.window_manager.connect('minimize', Lang.bind(this, this._windowUpdated));
    this._windowMapSig = global.window_manager.connect('map', Lang.bind(this, this._windowUpdated));
    this._windowDestroySig = global.window_manager.connect('destroy', Lang.bind(this, function(wm, window_actor) {
        this._windowUpdated({
            excluded_window: window_actor.get_meta_window()
        });
    }));

    /* Get Rid of Panel's CSS Background */
    Theming.strip_panel_css();
    /* Initial Coloring */
    Theming.set_panel_color({
        opacity: 0.0
    });

    /* Initial Coloring */
    Transitions.hide_corners({
        opacity: 0.0
    });

    /* Add Text Shadowing */
    if(Settings.add_text_shadow()) {
      Theming.add_text_shadow();
    }

    //Theming.set_text_color();

    /* Simulate Window Changes */
    _windowUpdated({
        force: true
    });

}


function disable() {
    /* Disconnect & Null Signals */
    if (!Util.is_undef(Main.screenShield)) {
        Main.screenShield.disconnect(this._lockScreenSig);
    }
    if (!Util.is_undef(this._windowUnminimizeSig)) {
        global.window_manager.disconnect(this._windowUnminimizeSig);
    }
    Main.overview.disconnect(this._overviewShowingSig);
    Main.overview.disconnect(this._overviewHiddenSig);
    global.window_manager.disconnect(this._windowMapSig);
    global.window_manager.disconnect(this._windowDestroySig);
    global.window_manager.disconnect(this._windowMinimizeSig);
    global.window_manager.disconnect(this._maximizeSig);
    global.window_manager.disconnect(this._unmaximizeSig);
    global.window_manager.disconnect(this._workspaceSwitchSig);
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

    /* Remove Transparency */
    Transitions.blank_fade_out();
    Transitions.cleanup();

    /* Remove Our Panel Coloring */
    Theming.set_panel_color({
        red: 0,
        green: 0,
        blue: 0,
        opacity: 0
    });

    /* Remove text shadowing */
    if(Theming.has_text_shadow()) {
      Theming.remove_text_shadow();
    }

    /* Remove Our Corner Coloring */
    Theming.clear_corner_color();
    /* Remove Our Styling */
    Theming.reapply_panel_css();
    Theming.cleanup();

    /* Cleanup Settings */
    Settings.unbind();
    Settings.cleanup();

    /* Cleanup Status */
    this.status = null;
}


function get_panel_status() {
    return this.status;
}



/* Event Handlers */

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

    let primary_monitor = global.screen.get_primary_monitor();
    let focused_window = global.display.focus_window;
    let windows = workspace.list_windows();

    /* Fix text shadowing if need exists */
    /* TODO: Better place to check this? */
    if(Settings.add_text_shadow() && !Theming.has_text_shadow()){
        Theming.add_text_shadow();
    }else if (!Settings.add_text_shadow() && Theming.has_text_shadow()){
        Theming.remove_text_shadow();
    }

    let add_transparency = true;

    /* save processing by checking the current window (most likely to be maximized) */
    /* check that the focused window is in the right workspace */
    if (!Util.is_undef(focused_window) && focused_window !== excluded_window && Util.is_maximized(focused_window) && focused_window.get_monitor() === primary_monitor && focused_window.get_workspace() === workspace && !focused_window.minimized) {
        add_transparency = false;
    } else {
        for (let i = 0; i < windows.length; ++i) {
            let current_window = windows[i];
            if (current_window !== excluded_window && Util.is_maximized(current_window) && current_window.get_monitor() === primary_monitor && !current_window.minimized) {
                add_transparency = false;
                break;
            }
        }
    }
    let time = (params !== null && !Util.is_undef(params.time)) ? {
        time: params.time
    } : null;
    /* only change if the transparency isn't already correct */
    if ((status.is_transparent() !== add_transparency) || (params !== null && !Util.is_undef(params.force) && params.force)) {
        if (add_transparency) {
            if (params !== null && !Util.is_undef(params.blank) && params.blank) {
                Transitions.blank_fade_out(time);
            } else {
                Transitions.fade_out(time);
            }
        } else {
            Transitions.fade_in(time);
        }
    } else if (status.is_blank()) {
        Transitions.fade_in_from_blank(time);
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

function _screenShieldActivated() {
    if (Main.screenShield !== null && !Main.screenShield._isActive) {
        _windowUpdated({
            blank: true,
            time: 0
        });
        Transitions.hide_corners({
            opacity: 0
        });
    } else {
        /* make sure we don't have any odd coloring on the screenShield */
        Transitions.blank_fade_out({
            time: 0
        });
    }
}

const TransparencyStatus = new Lang.Class({
    Name: 'DynamicPanelTransparency.TransparencyStatus',
    _init: function() {
        this.transparent = false;
        this.blank = false;
    },
    is_transparent: function() {
        return this.transparent;
    },
    is_blank: function() {
        return this.blank;
    },
    set_transparent: function(transparent) {
        this.transparent = transparent;
    },
    set_blank: function(blank) {
        this.blank = blank;
    }
});
