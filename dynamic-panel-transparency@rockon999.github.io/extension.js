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
const Events = Me.imports.events;

/* Color Scaling Factor (Byte to Decimal) */
const SCALE_FACTOR = 255.9999999;

/* Initialize */
function init() {
    /* Panel Status */
    /* Signal IDs */
}

function enable() {
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
                Theming.add_text_shadow(Settings.get_text_shadow_color(), Settings.get_text_shadow_position());
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
                Theming.add_icon_shadow(Settings.get_icon_shadow_color(), Settings.get_icon_shadow_position());
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
                Theming.add_text_shadow(Settings.get_text_shadow_color(), Settings.get_text_shadow_position());
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

                    Settings.get_icon_shadow_position()
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

                    Settings.get_icon_shadow_position()
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


    Events.init();


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
        Theming.add_text_shadow(Settings.get_text_shadow_color(), Settings.get_text_shadow_position());
    }

    if (Settings.add_icon_shadow()) {
        Theming.add_icon_shadow(Settings.get_icon_shadow_color(), Settings.get_icon_shadow_position());
    }

    /* Register text coloring. */
    Theming.register_text_color(Settings.get_text_color());
    Theming.register_text_color(Settings.get_maximized_text_color(), '-maximized-');

    if (Settings.get_enable_text_color()) {
        Theming.set_text_color();
    }

    /* Setup maximization listeners. */
    Events._workspacesChanged();

    /* Simulate Window Changes */
    Events._windowUpdated({
        force: true
    });
}


function disable() {

    /* Disconnect & Null Signals */
Events.cleanup();

    /* Remove Transparency */
    //Transitions.blank_fade_out();


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


    Transitions.cleanup();

    /* Cleanup Status */
    this.status = null;
}









