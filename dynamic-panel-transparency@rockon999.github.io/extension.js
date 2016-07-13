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
    this.maximized_window = null;
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
    this._windowRestackedSig = null;
    this._unmaximizeSig = null;
    this._workspaceSwitchSig = null;
    this._workspacesChangedSig = null;
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
        default: true,
        handler: Lang.bind(this, function () {
            _windowUpdated({
                force: true
            });
        })
    });
    Settings.add({
        settings_key: 'transition-speed',
        name: 'transition_speed',
        type: 'i',
        default: 1000
    });
    Settings.add({
        settings_key: 'force-animation',
        name: 'force_animation',
        type: 'b',
        default: false
    });
    Settings.add({
        settings_key: 'unmaximized-opacity',
        name: 'unmaximized_opacity',
        type: 'i',
        default: 0,
        getter: 'get_minimum_opacity',
        handler: Lang.bind(this, function () {
            _windowUpdated({
                force: true
            });
        })
    });
    Settings.add({
        settings_key: 'maximized-opacity',
        name: 'maximized_opacity',
        type: 'i',
        default: 255,
        getter: 'get_maximum_opacity',
        handler: Lang.bind(this, function () {
            _windowUpdated({
                force: true
            });
        })
    });
    Settings.add({
        settings_key: 'panel-color',
        name: 'panel_color',
        type: 'ai',
        default: [0, 0, 0],
        handler: Lang.bind(this, function () {
            Theming.set_panel_color();
        })
    });
    Settings.add({
        settings_key: 'app-overrides',
        name: 'app_overrides',
        type: 'as',
        default: []
    });
    Settings.add({
        settings_key: 'trigger-apps',
        name: 'trigger_apps',
        type: 'as',
        default: []
    });
    Settings.add({
        settings_key: 'detect-user-theme',
        name: 'detect_user_theme',
        type: 'b',
        default: false,
        getter: 'detect_user_theme'
    });
    Settings.add({
        settings_key: 'user-theme-source',
        name: 'user_theme_source',
        type: 's',
        default: 'Dash',
        handler: Lang.bind(this, function () {
            Theming.set_panel_color();
        })
    });
    Settings.add({
        settings_key: 'text-shadow',
        name: 'text_shadow',
        type: 'b',
        default: false,
        getter: 'add_text_shadow',
        handler: Lang.bind(this, function () {
            /* Fix text shadowing if need exists */
            /* TODO: Better place to check this? */
            if (Settings.add_text_shadow() && !Theming.has_text_shadow()) {
                Theming.add_text_shadow(Settings.get_text_shadow_color(),

                    Settings.get_text_shadow_position());
            } else if (!Settings.add_text_shadow() && Theming.has_text_shadow()) {
                Theming.remove_text_shadow();
            }
        })
    });
     Settings.add({
        settings_key: 'icon-shadow',
        name: 'icon_shadow',
        type: 'b',
        default: false,
        getter: 'add_icon_shadow',
         handler: Lang.bind(this, function () {
            /* Fix text shadowing if need exists */
            /* TODO: Better place to check this? */
            if (Settings.add_icon_shadow() && !Theming.has_icon_shadow()) {
                Theming.add_icon_shadow(Settings.get_icon_shadow_color(),

                    Settings.get_icon_shadow_position(),
                 );
            } else if (!Settings.add_icon_shadow() && Theming.has_icon_shadow()) {
                Theming.remove_icon_shadow();
            }
        })
    });
    Settings.add({
        settings_key: 'text-shadow-position',
        name: 'text_shadow_position',
        type: '(iii)',
        default: [0, 0, 0],
        //getter: 'add_text_shadow',
        handler: Lang.bind(this, function () {
            /* Fix text shadowing if need exists */
            /* TODO: Better place to check this? */
            if (Settings.add_text_shadow() && !Theming.has_text_shadow()) {
                Theming.add_text_shadow(Settings.get_text_shadow_color(),

                    Settings.get_text_shadow_position());
            } else if (!Settings.add_text_shadow() && Theming.has_text_shadow()) {
                Theming.remove_text_shadow();
            }
        })
    });
    Settings.add({
        settings_key: 'icon-shadow-position',
        name: 'icon_shadow_position',
        type: '(iii)',
        default: [0, 0, 0],
        //getter: 'add_text_shadow',
        handler: Lang.bind(this, function () {
            /* Fix text shadowing if need exists */
            /* TODO: Better place to check this? */
            if (Settings.add_icon_shadow() && !Theming.has_icon_shadow()) {
                Theming.add_icon_shadow(Settings.get_icon_shadow_color(),

                    Settings.get_icon_shadow_position(),
                 );
            } else if (!Settings.add_icon_shadow() && Theming.has_icon_shadow()) {
                Theming.remove_icon_shadow();
            }
        })
    });
    Settings.add({
        settings_key: 'icon-shadow-color',
        name: 'icon_shadow_color',
        type: '(iiii)',
        default: [0, 0, 0, 0],
        //getter: 'add_text_shadow',
        handler: Lang.bind(this, function () {
            /* Fix text shadowing if need exists */
            /* TODO: Better place to check this? */
            if (Settings.add_icon_shadow() && !Theming.has_icon_shadow()) {
                Theming.add_icon_shadow(Settings.get_icon_shadow_color(),

                    Settings.get_icon_shadow_position(),
                 );
            } else if (!Settings.add_icon_shadow() && Theming.has_icon_shadow()) {
                Theming.remove_icon_shadow();
            }
        })
    });
    Settings.add({
        settings_key: 'text-shadow-color',
        name: 'text_shadow_color',
        type: '(iiii)',
        default: [0, 0, 0, 0],
        //getter: 'add_text_shadow',
        handler: Lang.bind(this, function () {
            /* Fix text shadowing if need exists */
            /* TODO: Better place to check this? */
            if (Settings.add_text_shadow() && !Theming.has_text_shadow()) {
                Theming.add_text_shadow(Settings.get_text_shadow_color(),

                    Settings.get_text_shadow_position());
            } else if (!Settings.add_text_shadow() && Theming.has_text_shadow()) {
                Theming.remove_text_shadow();
            }
        })
    });
    Settings.add({
        settings_key: 'text-color',
        name: 'text_color',
        type: '(iii)',
        default: [0, 0, 0],

    });
    Settings.add({
        settings_key: 'maximized-text-color',
        name: 'maximized_text_color',
        type: '(iii)',
        default: [0, 0, 0],

    });
    Settings.add({
        settings_key: 'enable-maximized-text-color',
        name: 'enable_maximized_text_color',
        type: 'b',
        default: false,

    });
    Settings.add({
        settings_key: 'enable-text-color',
        name: 'enable_text_color',
        type: 'b',
        default: false,

    });

    Settings.bind();
    Settings.load_app_overrides();
    Settings.bind_app_overrides();

    /* Initialize */

    Transitions.init();
    Theming.init();

    let version = Util.get_shell_version();

    /* Add support for older Gnome Shell versions (most likely down to 3.12) */
    /*if (version.major == 3 && version.minor < 17) {
        this._maximizeSig = global.window_manager.connect('maximize', Lang.bind(this, this._windowUpdated));
        this._unmaximizeSig = global.window_manager.connect('unmaximize', Lang.bind(this, this._windowUpdated));
    } else {
        /*this._maximizeSig = global.window_manager.connect('hide-tile-preview', Lang.bind(this, function () {
            log(/*Date.now() "" + ': hide-tile-preview');
       //     this._windowUpdated();
        }));
        this._unmaximizeSig = global.window_manager.connect('size-change', Lang.bind(this, function () {
            log(/*Date.now() "" + ': size-change');
            this._windowUpdated();
        }));*/


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
    this._overviewHiddenSig = Main.overview.connect('hidden', Lang.bind(this, function () {
        _windowUpdated();
    }));
    this._overviewShowingSig = Main.overview.connect('showing', Lang.bind(this, function () {
        if (!status.is_transparent() && !status.is_blank()) {
            Transitions.blank_fade_out();
        } else if (status.is_transparent() && !status.is_blank()) {
            Transitions.blank_fade_out();//_from_minimum();
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
    this._windowMinimizeSig = global.window_manager.connect('minimize', Lang.bind(this, this._windowUpdated));
    this._windowMapSig = global.window_manager.connect('map', Lang.bind(this, function () {
        log('window mapped');
        this._windowUpdated()
    }));
    this._windowDestroySig = global.window_manager.connect('destroy', Lang.bind(this, function (wm, window_actor) {
        this._windowUpdated({
            excluded_window: window_actor.get_meta_window()
        });
    }));

    /* Get Rid of the Panel's CSS Background */
    Theming.strip_panel_css();

    /* Initial Coloring */
    Theming.set_panel_color({
        opacity: 0.0
    });

    Transitions.hide_corners({
        opacity: 0.0
    });

    /* Add Text Shadowing */
    // TODO: Add new settings.
    if (Settings.add_text_shadow()) {
       Theming.add_text_shadow(Settings.get_text_shadow_color(),
                    Settings.get_icon_shadow_color(),
                    Settings.get_text_shadow_position(),
                    Settings.get_icon_shadow_position());
    }

    /* Register text coloring. */
    Theming.register_text_color(Settings.get_text_color());
    Theming.register_text_color(Settings.get_maximized_text_color(), '-maximized-');

    if (Settings.get_enable_text_color()) {
        Theming.set_text_color();
    }

    /* Setup maximization listeners. */
    _workspacesChanged();

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
    //global.window_manager.disconnect(this._maximizeSig);
    //global.window_manager.disconnect(this._unmaximizeSig);
    global.window_manager.disconnect(this._workspaceSwitchSig);
    global.screen.disconnect(this._windowRestackedSig);
    global.screen.disconnect(this._workspacesChangedSig);

    for (let container in this.workspaces) {
        for (let window_container in container.windows) {
            window_container.window.disconnect(window_container.signalId);
        }
        container.workspace.disconnect(container.signalId);
    }

    /* Cleanup Signals */
    this._windowRestackedSig = null;
    this._lockScreenSig = null;
    this._lockScreenShownSig = null;
    this._overviewShowingSig = null;
    this._overviewHiddenSig = null;
    this._windowMapSig = null;
    this._windowDestroySig = null;
    this._windowMinimizeSig = null;
    this._windowUnminimizeSig = null;
    //this._maximizeSig = null;
    //this._unmaximizeSig = null;
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
    if (Theming.has_text_shadow()) {
        Theming.remove_text_shadow();
    }

    Theming.remove_text_color();

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




function get_maximized_window() {
    return this.maximized_window;
}


/* Event Handlers */


function _workspacesChanged() {
    if (typeof (this.workspaces) === 'undefined' || this.workspaces === null) {
        this.workspaces = [];
    }

    for (let container in this.workspaces) {
        for (let window_container in container.windows) {
            window_container.window.disconnect(window_container.signalId);
        }
        container.workspace.disconnect(container.signalId);
    }

    for (let i = 0; i < global.screen.get_n_workspaces(); i++) {
        let workspace = global.screen.get_workspace_by_index(i);
        let id = workspace.connect('window-added', Lang.bind(this, function (workspace, window) {
            window.connect('notify::maximized-vertically', Lang.bind(this, function () {
                this._windowUpdated();
            }));
        }));
        let windows = [];
        for (let window in workspace.list_windows()) {
            wId = window.connect('notify::maximized-vertically', Lang.bind(this, function () {
                this._windowUpdated();

            }));
            windows.push({ 'window': window, 'signalId': wId });
        }

        this.workspaces.push({ 'workspace': workspace, 'signalId': id, 'windows': windows });
    }
}

function _windowRestacked() {
    if (Settings.check_app_settings()) {
        _windowUpdated();
    }
}

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
               log('set max win dif');
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
    if ((status.is_transparent() !== add_transparency) || (params !== null && !Util.is_undef(params.force) && params.force)) {
        if (add_transparency) {
            if (params !== null && !Util.is_undef(params.blank) && params.blank) {
                Transitions.blank_fade_out({time: time});
            } else {
                Transitions.fade_out({time: time});
            }
        } else {
            Transitions.fade_in({time: time});
        }
    } else if (status.is_blank() && !add_transparency) {
        Transitions.fade_in({time: time});//_from_blank(time);
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
    Name: 'DynamicPanelTransparency_TransparencyStatus',
    _init: function () {
        this.transparent = false;
        this.blank = false;
    },
    is_transparent: function () {
        log('used');
        return this.transparent;
    },
    is_blank: function () {
         log('used 2');
        return this.blank;
    },
    set_transparent: function (transparent) {
        this.transparent = transparent;
    },
    set_blank: function (blank) {
        this.blank = blank;
    }
});


