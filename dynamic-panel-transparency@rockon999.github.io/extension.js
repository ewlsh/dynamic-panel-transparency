/* exported init, enable, disable */

const Lang = imports.lang;
const Mainloop = imports.mainloop;

const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;

const ExtensionSystem = imports.ui.extensionSystem;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Convenience = Me.imports.convenience;
const Events = Me.imports.events;
const Settings = Me.imports.settings;
const Theming = Me.imports.theming;
const Transitions = Me.imports.transitions;
const Util = Me.imports.util;

const USER_THEME_SCHEMA = 'org.gnome.shell.extensions.user-theme';

// TODO: Something isn't obeying custom coloring...

/* eslint-disable */

/* Simple function that converts stored color tuples and/or arrays into js objects. */
const COLOR_PARSER = function(input) {
    let color = { red: input[0], green: input[1], blue: input[2] };
    if (input.length === 4) {
        color.alpha = input[3];
    }
    return color;
};

/* eslint-enable */

/* Only way to prevent multiple runs apparently. Hacky. */
let modified = false;

/* Initialize */
function init() { }

function enable() {
    /* Initialize Settings */
    initialize_settings();

    /* Initialize Utilities */
    Transitions.init();
    Theming.init();

    let theme_settings = null;

    /* Try to load settings for the User Theme plugin. */
    // TODO: Why doesn't this work on some Ubuntu installations?
    try {
        let schemaObj = Convenience.getSchemaObj(USER_THEME_SCHEMA, true);

        if (!Util.is_undef(schemaObj)) {
            theme_settings = new Gio.Settings({
                settings_schema: schemaObj
            });
        }
    } catch (error) {
        log('[Dynamic Panel Transparency] Failed to find the user theme extension.');
    }

    if (!theme_settings) {
        idle_enable(false);
    } else {
        /* Is our data current? */
        let theme_name = theme_settings.get_string('name');
        let current = Settings.get_current_user_theme();

        if (current !== theme_name) {
            /* Wait for the theme extension to initialize and enable. */
            idle_enable(true, theme_settings);
        } else {
            /* Start the plugin. We have our data. */
            let color = Settings.get_panel_theme_color();
            let opacity = Settings.get_theme_opacity();

            let background = { red: color.red, blue: color.blue, green: color.green, alpha: opacity };

            log('[Dynamic Panel Transparency] Using theme data for: ' + Settings._settings.get_string('current-user-theme'));

            Theming.set_theme_background_color(Util.clutter_to_native_color(background));
            Theming.set_theme_opacity(background.alpha);

            /* Modify the panel. */
            modify_panel();

            /* Start the event loop. */
            Events.init();

            /* Simulate window changes. */
            Events._windowUpdated({
                force: true
            });
        }
    }
}

function idle_enable(update, theme_settings = null) {
    /* Delay the extension so we can retreive the theme background color (why are user themes an extension?). */
    Mainloop.idle_add(Lang.bind(this, function() {
        let extension = imports.misc.extensionUtils.getCurrentExtension();

        if (modified) {
            log('[Dynamic Panel Transparency] Attempted to run modifications multiple times.');
            return false;
        }

        if (!extension || (extension && !Util.is_undef(extension.extensionState) && extension.extensionState === ExtensionSystem.ExtensionState.DISABLED)) {
            log('[Dynamic Panel Transparency] Tried to modify the panel while disabled.');
            return false;
        }

        modified = true;

        let background = null;

        if (update) {
            log('[Dynamic Panel Transparency] Updating user theme data.');

            let theme = Main.panel.actor.get_theme_node();

            let image_background = Theming.get_background_image_color(theme);
            let theme_background = theme.get_background_color();

            background = (image_background !== null ? image_background : theme_background);

            Settings._settings.set_string('current-user-theme', theme_settings.get_string('name'));
            Settings._settings.set_value('panel-theme-color', new GLib.Variant('(iii)', [background.red, background.green, background.blue]));
            Settings._settings.set_value('theme-opacity', new GLib.Variant('i', background.alpha));

            log('[Dynamic Panel Transparency] Detected user theme style: rgba(' + background.red + ', ' + background.green + ', ' + background.blue + ', ' + background.alpha + ')');
        } else {
            let color = Settings.get_panel_theme_color();
            let opacity = Settings.get_theme_opacity();

            background = { red: color.red, blue: color.blue, green: color.green, alpha: opacity };
        }

        log('[Dynamic Panel Transparency] Using theme data for: ' + Settings.get_current_user_theme());

        Theming.set_theme_background_color(Util.clutter_to_native_color(background));
        Theming.set_theme_opacity(background.alpha);

        /* Modify the panel. */
        modify_panel();

        /* Start the event loop. */
        Events.init();

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

    /* Shouldn't be an issue, but let's make sure it isn't. */
    modified = false;

    return false;
}

function modify_panel() {
    /* Initial Coloring */

    let theme_color = Theming.get_theme_background_color();
    let theme_opacity = Theming.get_theme_opacity();

    /* Hack to avoid "flashing" */

    Theming.set_panel_color({
        red: theme_color.red,
        green: theme_color.green,
        blue: theme_color.blue,
        alpha: theme_opacity
    });

    /* Update the corners. */

    Theming.set_corner_color({
        red: theme_color.red,
        green: theme_color.green,
        blue: theme_color.blue
    });

    /* Get Rid of the Panel's CSS Background */
    Theming.strip_panel_background();

    let text_shadow = Theming.register_text_shadow(Settings.get_text_shadow_color(), Settings.get_text_shadow_position());
    let [icon_shadow, arrow_shadow] = Theming.register_icon_shadow(Settings.get_icon_shadow_color(), Settings.get_icon_shadow_position());

    /* Add Text Shadowing */
    if (Settings.add_text_shadow()) {
        if (text_shadow !== null) {
            Theming.add_text_shadow();
        } else {
            log('[Dynamic Panel Transparency] Failed to enabled text shadowing.');
        }
    }

    /* Add Icon Shadowing */
    if (Settings.add_icon_shadow()) {
        if (icon_shadow !== null && arrow_shadow !== null) {
            Theming.add_icon_shadow();
        } else {
            log('[Dynamic Panel Transparency] Failed to enabled icon shadowing.');
        }
    }

    /* Register text color styling. */
    let [text, icon, arrow] = Theming.register_text_color(Settings.get_text_color()); // eslint-disable-line no-unused-vars
    let [maximized_text, maximized_icon, maximized_arrow] = Theming.register_text_color(Settings.get_maximized_text_color(), 'maximized'); // eslint-disable-line no-unused-vars

    if (Settings.get_enable_text_color()) {
        if (text !== null) {
            Theming.set_text_color();
        } else {
            log('[Dynamic Panel Transparency] Failed to enabled text coloring.');
        }
    }
}

function unmodify_panel() {
    Theming.set_panel_color({ red: 0, green: 0, blue: 0, alpha: 0 });

    /* Remove corner styling */
    Theming.clear_corner_color();

    /* Remove Our Styling */
    Theming.reapply_panel_styling();
    Theming.reapply_panel_background();
    Theming.reapply_panel_background_image();

    /* Remove shadowing */
    if (Theming.has_text_shadow()) {
        Theming.remove_text_shadow();
    }
    if (Theming.has_icon_shadow()) {
        Theming.remove_icon_shadow();
    }

    /* Remove text coloring */
    Theming.remove_text_color();

    /* Remove maximized text coloring */
    Theming.remove_text_color('maximized');
}

function initialize_settings() {
    /* Setup settings... */
    Settings.init();

    /* Register settings... */
    Settings.add({
        settings_key: 'hide-corners',
        name: 'hide_corners',
        type: 'b',
        handler: Lang.bind(this, function() {
            Transitions.update_corner_alpha();
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
        handler: Lang.bind(this, function() {
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
        handler: Lang.bind(this, function() {
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
        handler: Lang.bind(this, function() {
            Theming.set_panel_color();
        })
    });
    Settings.add({
        settings_key: 'panel-theme-color',
        name: 'panel_theme_color',
        type: '(iii)',
        parser: COLOR_PARSER
    });
    Settings.add({
        settings_key: 'theme-opacity',
        name: 'theme_opacity',
        type: 'i',
    });
    Settings.add({
        settings_key: 'current-user-theme',
        name: 'current_user_theme',
        type: 's',
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
        handler: Lang.bind(this, function() {
            if (Settings.add_text_shadow()) {
                Theming.add_text_shadow();
            } else {
                Theming.remove_text_shadow();
            }
        })
    });
    Settings.add({
        settings_key: 'icon-shadow',
        name: 'icon_shadow',
        type: 'b',
        getter: 'add_icon_shadow',
        handler: Lang.bind(this, function() {
            if (Settings.add_icon_shadow()) {
                Theming.add_icon_shadow();
            } else {
                Theming.remove_icon_shadow();
            }
        })
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
        type: 'b',
        handler: Lang.bind(this, function() {
            Events._windowUpdated({
                force: true
            });
        })
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
        type: 'b',
        handler: Lang.bind(this, function() {
            if (Settings.get_enable_text_color()) {
                Events._windowUpdated({
                    force: true
                });
            } else {
                Theming.remove_text_color();
                Theming.remove_text_color('maximized');
            }
        })
    });
    Settings.add({
        settings_key: 'transition-type',
        name: 'transition_type',
        type: 'i',
        handler: Lang.bind(this, function() {
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