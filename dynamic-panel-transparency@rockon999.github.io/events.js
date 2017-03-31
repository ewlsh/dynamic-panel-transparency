/* exported init, cleanup, get_current_maximized_window */

const Mainloop = imports.mainloop;
const Lang = imports.lang;

const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Meta = imports.gi.Meta;
const Shell = imports.gi.Shell;

const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Params = imports.misc.params;

const Compatibility = Me.imports.compatibility;
const Convenience = Me.imports.convenience;
const Settings = Me.imports.settings;
const Theming = Me.imports.theming;
const Transitions = Me.imports.transitions;
const Util = Me.imports.util;

const USER_THEME_SCHEMA = 'org.gnome.shell.extensions.user-theme';

/**
 * Signal Connections
 * js/ui/overview.js/hidden: occurs after the overview is hidden
 * js/ui/overview.js/shown: occurs after the overview is open
 * MetaScreen/window-entered-monitor: occurs when a window enters a monitor
 * MetaScreen/window-left-monitor: occurs when a window leaves a monitor
 * MetaScreen/restacked: occurs when the window Z-ordering changes
 * MetaDisplay/window-created: occurs when a new window is created
 * wm/switch-workspace: occurs after a workspace is switched
 * wm/unminimize: occurs as the window is unminimized
 * wm/minimize: occurs as the window is minimized
 * wm/destroy: occurs as the window is destroyed
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

    this._wm_tracker = Shell.WindowTracker.get_default();

    this._overviewHiddenSig = Main.overview.connect('hidden', Lang.bind(this, Util.strip_args(_windowUpdated)));

    this._overviewShownSig = Main.overview.connect('shown', Lang.bind(this, _overviewShown));

    let windows = global.get_window_actors();
    let display = global.screen.get_display();

    for (let window_actor of windows) {
        /* Simulate window creation event */
        let window = window_actor.get_meta_window();
        _windowCreated(display, window);
    }

    // COMPATIBILITY: No unminimize signal on 3.14
    this._windowUnminimizeSig = Compatibility.g_signal_connect(global.window_manager, 'unminimize', Lang.bind(this, Util.strip_args(_windowUpdated)));

    this._workspaceSwitchSig = global.window_manager.connect_after('switch-workspace', Lang.bind(this, _workspaceSwitched));
    this._windowMinimizeSig = global.window_manager.connect('minimize', Lang.bind(this, _windowMinimized));
    this._windowDestroySig = global.window_manager.connect('destroy', Lang.bind(this, _windowDestroyed));

    this._windowRestackedSig = global.screen.connect_after('restacked', Lang.bind(this, _windowRestacked));
    this._windowEnteredSig = global.screen.connect('window-entered-monitor', Lang.bind(this, _windowEntered));
    this._windowLeftSig = global.screen.connect('window-left-monitor', Lang.bind(this, _windowLeft));

    this._windowCreatedSig = display.connect_after('window-created', Lang.bind(this, _windowCreated));

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
        log('[Dynamic Panel Transparency] Failed to find shell theme settings. Ignore this if you are not using a custom theme.');
    }

    if (!Util.is_undef(this._theme_settings)) {
        this._userThemeChangedSig = this._theme_settings.connect('changed::name', Lang.bind(this, _userThemeChanged));
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

    Main.overview.disconnect(this._overviewShownSig);
    Main.overview.disconnect(this._overviewHiddenSig);

    global.window_manager.disconnect(this._windowDestroySig);
    global.window_manager.disconnect(this._windowMinimizeSig);
    global.window_manager.disconnect(this._workspaceSwitchSig);

    global.screen.get_display().disconnect(this._windowCreatedSig);

    global.screen.disconnect(this._windowRestackedSig);
    global.screen.disconnect(this._windowLeftSig);
    global.screen.disconnect(this._windowEnteredSig);

    if (!Util.is_undef(this._theme_settings) && !Util.is_undef(this._userThemeChangedSig)) {
        this._theme_settings.disconnect(this._userThemeChangedSig);
    }

    for (let window_container of this.windows) {
        for (let signalId of window_container.signalIds) {
            window_container.window.disconnect(signalId);
        }
        delete window_container.window.dpt_tracking;
    }

    /* Cleanup Signals */
    this._windowRestackedSig = null;
    this._overviewShownSig = null;
    this._overviewHiddenSig = null;
    this._windowDestroySig = null;
    this._windowMinimizeSig = null;
    this._windowUnminimizeSig = null;
    this._workspaceSwitchSig = null;
    this._userThemeChangedSig = null;
    this._windowCreatedSig = null;

    this._theme_settings = null;

    this._wm_tracker = null;

    this.workspaces = null;
    this.windows = null;
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
 * Called whenever a window is destroyed.
 *
 */
function _windowDestroyed(wm, window_actor) {
    let window = window_actor.get_meta_window();

    if (Util.is_undef(window.dpt_tracking)) {
        return;
    }

    /* Remove our tracking variable. */
    delete window.dpt_tracking;

    let index = this.windows.indexOf(window);
    if (index !== -1) {
        this.windows.splice(index, 1);
    }

    this._windowUpdated({
        excluded_window: window
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

    Mainloop.idle_add(Lang.bind(this, function() {
        log('[Dynamic Panel Transparency] Updating user theme data.');

        let theme = Main.panel.actor.get_theme_node();

        /* Store user theme values. */
        let background = null;

        let image_background = Theming.get_background_image_color(theme);
        let theme_background = theme.get_background_color();

        if (image_background !== null) {
            background = image_background;
        } else {
            background = theme_background;
        }

        Theming.set_theme_background_color(Util.clutter_to_native_color(background));
        Theming.set_theme_opacity(background.alpha);

        Settings._settings.set_string('current-user-theme', this._theme_settings.get_string('name'));
        Settings._settings.set_value('panel-theme-color', new GLib.Variant('(iii)', [background.red, background.green, background.blue]));
        Settings._settings.set_value('theme-opacity', new GLib.Variant('i', background.alpha));

        log('[Dynamic Panel Transparency] Detected user theme style: rgba(' + background.red + ', ' + background.green + ', ' + background.blue + ', ' + background.alpha + ')');
        log('[Dynamic Panel Transparency] Using theme data for: ' + Settings.get_current_user_theme());

        Theming.strip_panel_background();

        /* Simulate window changes. */
        _windowUpdated({
            force: true
        });

        return false;
    }));
}

/**
 * Called whenever a window is created in the shell.
 *
 */
function _windowCreated(display, window) {
    if (window && Util.is_undef(window.dpt_tracking)) {
        if (Util.is_valid(window)) {
            window.dpt_tracking = true;

            const v_wId = window.connect('notify::maximized-vertically', Lang.bind(this, function(obj, property) {
                if (!obj['maximized_vertically']) {
                    this._windowUpdated({ trigger_window: obj });
                    return;
                }
                this._windowUpdated();
            }));

            const f_wId = window.connect('notify::fullscreen', Lang.bind(this, function(obj, property) {
                this._windowUpdated();
            }));

            this.windows.push({ 'window': window, 'signalIds': [v_wId, f_wId] });

            _windowUpdated();
        }
    }
}

/**
 * Handles any window updates. Contains the core logic of this extension.
 *
 * @param {Object} params - List of parameters for the update.
 * @param {Object} params.excluded_window - Optional. A Meta.Window that should be ignored when updating. Usually this is force events that don't remove a window before this is called.
 * @param {Object} params.focused_window - Optional. A Meta.Window that should be treated as the main window of interest. Usually this is for situations in which the window isn't actually 'focused' but essentially should be.
 * @param {Object} params.trigger_window - Optional. A Meta.Window that should be ignored when updating everything except App Tweaks.
 * @param {Boolean} params.force - Optional. Updates even if the current state is believed to be identical.
 * @param {Boolean} params.blank - Optional. Whether or not the panel alpha should be set to 0 instead of the unmaximized opacity.
 * @param {Number} params.time - Optional. The amount of time any invoked transition should take.
 */
function _windowUpdated(params) {
    if (Main.overview._shown) {
        return;
    }

    params = Params.parse(params, {
        workspace: global.screen.get_active_workspace(),
        focused_window: global.display.get_focus_window(),
        excluded_window: null,
        trigger_window: null,
        blank: false,
        force: false
    }, true);

    let excluded_window = params.excluded_window;
    let focused_window = params.focused_window;
    let trigger_window = params.trigger_window;
    let workspace = params.workspace;

    this.maximized_window = null;

    let add_transparency = true;

    /* Save processing time by checking the current focused window (most likely to be maximized) */
    /* Check that the focused window is in the right workspace. (I really hope it always is...) */
    /* Don't do the 'quick check' if we have trigger apps/windows as they might not be focused. */
    if (!Settings.check_triggers() && focused_window && focused_window !== excluded_window && focused_window !== trigger_window && Util.is_valid(focused_window) && Util.is_maximized(focused_window) && focused_window.is_on_primary_monitor() && !focused_window.minimized && focused_window.get_workspace().index() === workspace.index()) {
        add_transparency = false;
        this.maximized_window = focused_window;
    } else {
        let windows = workspace.list_windows();
        windows = global.display.sort_windows_by_stacking(windows);

        for (let i = windows.length - 1; i >= 0; i--) {
            let current_window = windows[i];

            if (Settings.check_triggers()) {
                /* Check if the current WM_CLASS is a trigger. */
                if (Settings.get_trigger_windows().indexOf(current_window.get_wm_class()) !== -1) {
                    /* Make sure the window is on the correct monitor, isn't minimized, and isn't supposed to be excluded. */
                    if (current_window !== excluded_window && current_window.is_on_primary_monitor() && !current_window.minimized) {
                        add_transparency = false;
                        this.maximized_window = current_window;
                        break;
                    }
                }

                let app = this._wm_tracker.get_window_app(current_window);

                /* Check if the found app exists and if it is a trigger app. */
                if (app && Settings.get_trigger_apps().indexOf(app.get_id()) !== -1) {
                    /* Make sure the window is on the correct monitor, isn't minimized, and isn't supposed to be excluded. */
                    if (current_window !== excluded_window && current_window.is_on_primary_monitor() && !current_window.minimized) {
                        add_transparency = false;
                        this.maximized_window = current_window;
                        break;
                    }
                }
            }

            /* Make sure the window is on the correct monitor, isn't minimized, isn't supposed to be excluded, and is actually maximized. */
            if (current_window !== excluded_window && current_window !== trigger_window && Util.is_valid(current_window) && Util.is_maximized(current_window) && current_window.is_on_primary_monitor() && !current_window.minimized) {
                /* Make sure the top-most window is selected */
                if (this.maximized_window === null) {
                    this.maximized_window = current_window;
                }

                add_transparency = false;

                if (!Settings.check_triggers()) {
                    break;
                }
            }
        }
    }

    /* Handle desktop icons (they're a window too) */
    if (focused_window && focused_window.get_window_type() === Meta.WindowType.DESKTOP) {
        add_transparency = true;
        this.maximized_window = focused_window;
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
        if (!add_transparency) {
            Transitions.fade_in(transition_params);
        }
    }

    /* Reset text coloring. */
    if (Settings.get_enable_text_color() && (Settings.get_enable_maximized_text_color() || Settings.get_enable_overview_text_color())) {
        if (!add_transparency && Settings.get_enable_maximized_text_color()) {
            Theming.remove_text_color();
            Theming.set_text_color('maximized');
        } else {
            Theming.remove_text_color('maximized');
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
 * SPECIAL_CASE: Only update if we're using per-app settings or is desktop icons are enabled.
 *
 */
function _windowRestacked() {
    /* Don't allow restacks while the overview is transitioning. */
    if (!Main.overview.visible) {
        /* Detect if desktop icons are enabled. */
        if (Settings.gs_show_desktop_icons() || Settings.check_overrides() || Settings.check_triggers()) {
            log('restack success');
            _windowUpdated();
        }
    }
}

// TODO: Combine these event handlers.

/**
 * SPECIAL_CASE: Don't update during overview transitions or for the incorrect monitor.
 *
 */
function _windowEntered(screen, index, window) {
    /* Don't detect windows leaving while the overview is transitioning and/or shown. */
    /* Avoid windows entering monitors that are not the primary. */
    if (!Main.overview.visible && index === global.screen.get_primary_monitor()) {
        _windowUpdated({ focused_window: window });
    }
}

/**
 * SPECIAL_CASE: Don't update during overview transitions or for the incorrect monitor.
 *
 */
function _windowLeft(screen, index, window) {
    /* Don't detect windows leaving while the overview is transitioning and/or shown. */
    /* Avoid windows leaving monitors that are not the primary. */
    if (!Main.overview.visible && index === global.screen.get_primary_monitor()) {
        _windowUpdated({ excluded_window: window });
    }
}

/**
 * SPECIAL_CASE: Update logic requires the workspace that we'll be switching to.
 *
 */
function _workspaceSwitched(wm, from, to, direction) {
    /* Detect if desktop icons are enabled. */
    if (!Settings.gs_show_desktop_icons() && !Settings.check_overrides() && !Settings.check_triggers()) {
        let workspace_to = global.screen.get_workspace_by_index(to);

        if (workspace_to !== null) {
            this._windowUpdated({
                workspace: workspace_to
            });
        } else {
            /* Maybe this will do something? */
            this._windowUpdated();
        }
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