/* exported init, enable, disable */

const Lang = imports.lang;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Transitions = Me.imports.transitions;
const Theming = Me.imports.theming;
const Settings = Me.imports.settings;
const Events = Me.imports.events;
const Util = Me.imports.util;

/* eslint-disable */

/* Simple function that converts stored color tuples and/or arrays into js objects. */
const COLOR_PARSER = function (input) {
    let color = { red: input[0], green: input[1], blue: input[2] };
    if (input.length === 4) {
        color.alpha = input[3];
    }
    return color;
};

/* eslint-enable */


const Main = imports.ui.main;
const Panel = Main.panel;

/* Initialize */
function init() { }

const Mainloop = imports.mainloop;

function enable() {
    /* Initialize Settings */
    initialize_settings();

    /* Initialize Utilities */
    Transitions.init();
    Theming.init();

    /* Delay the extension so we can retreive the theme background color (why are user themes an extensions?). */
    Mainloop.idle_add(Lang.bind(this, function () {
        let bg = Panel.actor.get_theme_node().get_background_color();

        /* Store user theme values. */
        Theming.set_theme_background_color(Util.clutter_to_native_color(bg));
        Theming.set_theme_opacity(bg.alpha);

        // DEBUG: log('Detected user theme style: rgba(' + bg.red + ', ' + bg.green + ', ' + bg.blue + ', ' + bg.alpha + ')');
        /* Start the event loop. */
        Events.init();

        /* Modify the panel. */
        modify_panel();

        /* Setup maximization listeners. */
        Events._workspacesChanged();

        /* Simulate window changes. */
        Events._windowUpdated({
            force: true
        });
    }));
}

function initialize_settings() {
    /* Setup settings... */
    Settings.init();
    /* Register settings... */
    Settings.add({
        settings_key: 'hide-corners',
        name: 'hide_corners',
        type: 'b',
        handler: Lang.bind(this, function () {
            Events._windowUpdated({
                force: true
            });
        })
    });
    Settings.add({
        settings_key: 'transition-speed',
        name: 'transition_speed',
        type: 'i'
    });
    Settings.add({
        settings_key: 'force-animation',
        name: 'force_animation',
        type: 'b'
    });
    Settings.add({
        settings_key: 'unmaximized-opacity',
        name: 'unmaximized_opacity',
        type: 'i',
        getter: 'get_unmaximized_opacity',
        handler: Lang.bind(this, function () {
            Events._windowUpdated({
                force: true
            });
        })
    });
    Settings.add({
        settings_key: 'maximized-opacity',
        name: 'maximized_opacity',
        type: 'i',
        getter: 'get_maximized_opacity',
        handler: Lang.bind(this, function () {
            Events._windowUpdated({
                force: true
            });
        })
    });
    Settings.add({
        settings_key: 'panel-color',
        name: 'panel_color',
        type: 'ai',
        parser: COLOR_PARSER,
        handler: Lang.bind(this, function () {
            Theming.set_panel_color();
        })
    });
    Settings.add({
        settings_key: 'trigger-apps',
        name: 'trigger_apps',
        type: 'as'
    });
    Settings.add({
        settings_key: 'trigger-windows',
        name: 'trigger_windows',
        type: 'as'
    });
    Settings.add({
        settings_key: 'text-shadow',
        name: 'text_shadow',
        type: 'b',
        getter: 'add_text_shadow',
        handler: Lang.bind(this, function () {
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
        getter: 'add_icon_shadow',
        handler: Lang.bind(this, function () {
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
        handler: Lang.bind(this, function () {
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
        handler: Lang.bind(this, function () {
            if (Settings.add_icon_shadow() && !Theming.has_icon_shadow()) {
                Theming.add_icon_shadow(Settings.get_icon_shadow_color(), Settings.get_icon_shadow_position());
            } else if (!Settings.add_icon_shadow() && Theming.has_icon_shadow()) {
                Theming.remove_icon_shadow();
            }
        })
    });
    Settings.add({
        settings_key: 'icon-shadow-color',
        name: 'icon_shadow_color',
        type: '(iiid)',
        parser: COLOR_PARSER,
        handler: Lang.bind(this, function () {
            if (Settings.add_icon_shadow() && !Theming.has_icon_shadow()) {
                Theming.add_icon_shadow(Settings.get_icon_shadow_color(), Settings.get_icon_shadow_position());
            } else if (!Settings.add_icon_shadow() && Theming.has_icon_shadow()) {
                Theming.remove_icon_shadow();
            }
        })
    });
    Settings.add({
        settings_key: 'text-shadow-color',
        name: 'text_shadow_color',
        type: '(iiid)',
        parser: COLOR_PARSER,
        handler: Lang.bind(this, function () {
            if (Settings.add_text_shadow() && !Theming.has_text_shadow()) {
                Theming.add_text_shadow(Settings.get_text_shadow_color(), Settings.get_text_shadow_position());
            } else if (!Settings.add_text_shadow() && Theming.has_text_shadow()) {
                Theming.remove_text_shadow();
            }
        })
    });
    Settings.add({
        settings_key: 'text-color',
        name: 'text_color',
        type: '(iii)',
        parser: COLOR_PARSER
    });
    Settings.add({
        settings_key: 'maximized-text-color',
        name: 'maximized_text_color',
        type: '(iii)',
        parser: COLOR_PARSER
    });
    Settings.add({
        settings_key: 'enable-maximized-text-color',
        name: 'enable_maximized_text_color',
        type: 'b'
    });
    Settings.add({
        settings_key: 'remove-panel-styling',
        name: 'remove_panel_styling',
        getter: 'remove_panel_styling',
        type: 'b'
    });
    Settings.add({
        settings_key: 'enable-overview-text-color',
        name: 'enable_overview_text_color',
        type: 'b'
    });
    Settings.add({
        settings_key: 'enable-text-color',
        name: 'enable_text_color',
        type: 'b'
    });

    Settings.add({
        settings_key: 'transition-type',
        name: 'transition_type',
        type: 'i',
        handler: Lang.bind(this, function () {
            Transitions.update_transition_type();
        })
    });
    Settings.add({
        settings_key: 'enable-opacity',
        name: 'enable_custom_opacity',
        getter: 'enable_custom_opacity',
        type: 'b'
    });
    Settings.add({
        settings_key: 'enable-background-color',
        name: 'enable_custom_background_color',
        getter: 'enable_custom_background_color',
        type: 'b'
    });

    /* App-Specific Settings */

    Settings.add_app_setting({
        settings_key: 'enable-background-tweaks',
        name: 'enable_background_tweaks',
        getter: 'enable_background_tweaks',
        type: 'b'
    });
    Settings.add_app_override({
        settings_key: 'maximized-opacity',
        name: 'maximized_opacity',
        type: 'i'
        // TODO: This is a hack of the parsing system.
        /* parser: Lang.bind(this,function(a,b,c,d=false){if(d){if(Settings.window_settings_manager.enable_background_tweaks[c])return a}else if(Settings.app_settings_manager.enable_background_tweaks[c])return a;return!Settings.enable_custom_opacity()&&Theming.theme_opacity>=Theming.THEME_DETECTION_MINIMUM_OPACITY?Theming.theme_opacity:b}); */
    });
    Settings.add_app_override({
        settings_key: 'panel-color',
        name: 'panel_color',
        type: '(iii)',
        parser: COLOR_PARSER
        // TODO: This is a hack of the parsing system.
        /* parser: Lang.bind(this,function(a,b,c,d=false){if(d){if(Settings.window_settings_manager.enable_background_tweaks[c])return COLOR_PARSER(a)}else if(Settings.app_settings_manager.enable_background_tweaks[c])return COLOR_PARSER(a);return Settings.enable_custom_background_color()?b:Theming.theme_background_color}); */
    });

    /* After we've given Settings the necessary information... let's bind these. */

    Settings.bind();
}


function modify_panel() {
    /* Get Rid of the Panel's CSS Background */
    Theming.strip_panel_background();

    /* Initial Coloring */
    Theming.set_panel_color({
        alpha: 0.0
    });

    /* Update the corners. */
    Transitions.update_corner_alpha(0);

    /* Add Shadowing */
    if (Settings.add_text_shadow()) {
        Theming.add_text_shadow(Settings.get_text_shadow_color(), Settings.get_text_shadow_position());
    }

    if (Settings.add_icon_shadow()) {
        Theming.add_icon_shadow(Settings.get_icon_shadow_color(), Settings.get_icon_shadow_position());
    }

    /* Register text color styling. */
    Theming.register_text_color(Settings.get_text_color());
    Theming.register_text_color(Settings.get_maximized_text_color(), 'maximized');

    if (Settings.get_enable_text_color()) {
        Theming.set_text_color();
    }
}


function disable() {
    /* Do this first in case any of the upcoming methods fail. */
    Theming.set_panel_color({ red: 0, green: 0, blue: 0, alpha: 0 });

    /* Disconnect & Null Signals */
    Events.cleanup();

    /* Remove our custom coloring *again* just to be sure no events recolored it while we were cleaning up. */
    Theming.set_panel_color({
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0
    });

    /* Remove shadowing */
    if (Theming.has_text_shadow()) {
        Theming.remove_text_shadow();
    }
    if (Theming.has_icon_shadow()) {
        Theming.remove_icon_shadow();
    }

    /* Remove text coloring */
    Theming.remove_text_color();

    /* Remove Our Corner Coloring */
    Theming.clear_corner_color();

    /* Remove Our Styling */
    Theming.reapply_panel_styling();
    Theming.reapply_panel_background();

    /* Cleanup Theming */
    Theming.cleanup();

    /* Cleanup Settings */
    Settings.unbind();
    Settings.cleanup();

    /* Cleanup Transitions */
    Transitions.cleanup();
}









