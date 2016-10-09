/* exported init, enable, disable */

const Mainloop = imports.mainloop;
const Lang = imports.lang;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Transitions = Me.imports.transitions;
const Settings = Me.imports.settings;
const Theming = Me.imports.theming;
const Events = Me.imports.events;
const Util = Me.imports.util;

const ExtensionSystem = imports.ui.extensionSystem;
const Main = imports.ui.main;
const Panel = Main.panel;

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


/* Initialize */
function init() { }

function enable() {
    /* Initialize Settings */
    initialize_settings();

    /* Initialize Utilities */
    Transitions.init();
    Theming.init();

    /* Delay the extension so we can retreive the theme background color (why are user themes an extension?). */
    Mainloop.idle_add(Lang.bind(this, function () {
        let extension = imports.misc.extensionUtils.getCurrentExtension();

        if (!Util.is_undef(extension) && extension.extensionState === ExtensionSystem.ExtensionState.DISABLED) {
            return false;
        }

        let theme = Panel.actor.get_theme_node();
        let theme_background = theme.get_background_color();

        /* Store user theme values. */
        let image_background = Theming.get_background_image_color(theme);

        if (image_background !== null) {
            log('[Dynamic Panel Transparency] Detected user theme style: rgba(' + image_background.red + ', ' + image_background.green + ', ' + image_background.blue + ', ' + image_background.alpha + ')');
            Theming.set_theme_background_color(Util.clutter_to_native_color(image_background));
            Theming.set_theme_opacity(image_background.alpha);
        } else {
            log('[Dynamic Panel Transparency] Detected user theme style: rgba(' + theme_background.red + ', ' + theme_background.green + ', ' + theme_background.blue + ', ' + theme_background.alpha + ')');
            Theming.set_theme_background_color(Util.clutter_to_native_color(theme_background));
            Theming.set_theme_opacity(theme_background.alpha);
        }

        /* Modify the panel. */
        modify_panel();

        /* Start the event loop. */
        Events.init();

        /* Setup maximization listeners. */
        Events._workspacesChanged();

        /* Simulate window changes. */
        Events._windowUpdated({
            force: true
        });

        return false;
    }));
}

function disable() {
    /* Do this first in case any of the upcoming methods fail. */
    unmodify_panel();

    /* Disconnect & Null Signals */
    Events.cleanup();

    /* Cleanup Settings */
    Settings.unbind();
    Settings.cleanup();

    /* Cleanup Transitions */
    Transitions.cleanup();

    /* Remove our custom styling *again* just to be sure no events and/or enabling restyled it while we were cleaning up. */
    unmodify_panel();

    /* Cleanup Theming */
    Theming.cleanup();

    return false;
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

function unmodify_panel() {
    Theming.set_panel_color({ red: 0, green: 0, blue: 0, alpha: 0 });

    /* Remove shadowing */
    if (Theming.has_text_shadow()) {
        Theming.remove_text_shadow();
    }
    if (Theming.has_icon_shadow()) {
        Theming.remove_icon_shadow();
    }

    /* Remove corner styling */
    Theming.clear_corner_color();

    /* Remove text coloring */
    Theming.remove_text_color();

    /* Remove Our Corner Coloring */
    Theming.clear_corner_color();

    /* Remove Our Styling */
    Theming.reapply_panel_styling();
    Theming.reapply_panel_background();
    Theming.reapply_panel_background_image();
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
        getter: 'add_text_shadow'
    });
    Settings.add({
        settings_key: 'icon-shadow',
        name: 'icon_shadow',
        type: 'b',
        getter: 'add_icon_shadow'
    });
    Settings.add({
        settings_key: 'text-shadow-position',
        name: 'text_shadow_position',
        type: '(iii)'
    });
    Settings.add({
        settings_key: 'icon-shadow-position',
        name: 'icon_shadow_position',
        type: '(iii)'
    });
    Settings.add({
        settings_key: 'icon-shadow-color',
        name: 'icon_shadow_color',
        type: '(iiid)',
        parser: COLOR_PARSER
    });
    Settings.add({
        settings_key: 'text-shadow-color',
        name: 'text_shadow_color',
        type: '(iiid)',
        parser: COLOR_PARSER
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
        type: 'b'
    });
    Settings.add_app_override({
        settings_key: 'maximized-opacity',
        name: 'maximized_opacity',
        type: 'i'
    });
    Settings.add_app_override({
        settings_key: 'panel-color',
        name: 'panel_color',
        type: '(iii)',
        parser: COLOR_PARSER
    });

    /* After we've given Settings the necessary information... let's bind it. */
    Settings.bind();
}









