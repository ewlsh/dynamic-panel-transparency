/* exported init, enable, disable */

const Lang = imports.lang;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Transitions = Me.imports.transitions;
const Theming = Me.imports.theming;
const Settings = Me.imports.settings;
const Events = Me.imports.events;

const COLOR_PARSER = function (input) {
    let color = { red: input[0], green: input[1], blue: input[2] };
    if (input.length === 4) {
        color.alpha = input[3];
    }
    return color;
};

/* Initialize */
function init() { }

function enable() {
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
        getter: 'get_minimum_opacity',
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
        getter: 'get_maximum_opacity',
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
        type: 'i',
        parser: Lang.bind(this, function (input, def, uuid, window = false) {
            if (window) {
                if (Settings.window_settings_manager['enable_background_tweaks'][uuid]) {
                    return input;
                }
            } else {
                if (Settings.app_settings_manager['enable_background_tweaks'][uuid]) {
                    return input;

                }
            }
            return def;
        })
    });
    Settings.add_app_override({
        settings_key: 'panel-color',
        name: 'panel_color',
        type: '(iii)',
        parser: Lang.bind(this, function (input, def, uuid, window = false) {
            if (window) {
                if (Settings.window_settings_manager['enable_background_tweaks'][uuid]) {
                    return COLOR_PARSER(input);
                }
            } else {
                if (Settings.app_settings_manager['enable_background_tweaks'][uuid]) {
                    return COLOR_PARSER(input);

                }
            }
            return def;
        })
    });

    /* After we've given Settings the necessary information... let's bind these. */

    Settings.bind();
    Settings.bind_app_settings();

    /* Initialize */

    Transitions.init();
    Theming.init();
    Events.init();

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

    /* Setup maximization listeners. */
    Events._workspacesChanged();

    /* Simulate window changes. */
    Events._windowUpdated({
        force: true
    });
}


function disable() {
    /* Disconnect & Null Signals */
    Events.cleanup();

    /* Remove Our Panel Coloring */
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









