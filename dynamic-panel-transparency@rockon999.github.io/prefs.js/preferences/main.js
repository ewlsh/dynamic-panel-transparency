/* exported init, buildPrefsWidget */

const Lang = imports.lang;

const GLib = imports.gi.GLib;
const GObject = imports.gi.GObject;
const Gdk = imports.gi.Gdk;
const GdkPixbuf = imports.gi.GdkPixbuf;
const Gio = imports.gi.Gio;
const Gtk = imports.gi.Gtk;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Compatibility = Me.imports.compatibility;
const Convenience = Me.imports.convenience;
const Util = Me.imports.util;

const AppChooser = imports.preferences.app_chooser;
const AppRow = imports.preferences.app_row;
const DemoPanel = imports.preferences.demo_panel;
const Tweaks = imports.preferences.tweaks;

const Gettext = imports.gettext.domain('dynamic-panel-transparency');
const _ = Gettext.gettext;

const gs_ = imports.gettext.domain('gnome-shell').gettext;
const gtk30_ = imports.gettext.domain('gtk30').gettext;

const GNOME_BACKGROUND_SCHEMA = 'org.gnome.desktop.background';

/* Settings Keys */
const SETTINGS_ENABLE_BACKGROUND_COLOR = 'enable-background-color';
const SETTINGS_ENABLE_BACKGROUND_TWEAKS = 'enable-background-tweaks';
const SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR = 'enable-maximized-text-color';
const SETTINGS_ENABLE_OPACITY = 'enable-opacity';
const SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR = 'enable-overview-text-color';
const SETTINGS_ENABLE_TEXT_COLOR = 'enable-text-color';
const SETTINGS_FORCE_ANIMATION = 'force-animation';
const SETTINGS_HIDE_CORNERS = 'hide-corners';
const SETTINGS_ICON_SHADOW = 'icon-shadow';
const SETTINGS_ICON_SHADOW_COLOR = 'icon-shadow-color';
const SETTINGS_ICON_SHADOW_POSITION = 'icon-shadow-position';
const SETTINGS_MAXIMIZED_OPACITY = 'maximized-opacity';
const SETTINGS_MAXIMIZED_TEXT_COLOR = 'maximized-text-color';
const SETTINGS_PANEL_COLOR = 'panel-color';
const SETTINGS_REMOVE_PANEL_STYLING = 'remove-panel-styling';
const SETTINGS_TEXT_COLOR = 'text-color';
const SETTINGS_TEXT_SHADOW = 'text-shadow';
const SETTINGS_TEXT_SHADOW_COLOR = 'text-shadow-color';
const SETTINGS_TEXT_SHADOW_POSITION = 'text-shadow-position';
const SETTINGS_TRANSITION_SPEED = 'transition-speed';
const SETTINGS_TRANSITION_TYPE = 'transition-type';
const SETTINGS_UNMAXIMIZED_OPACITY = 'unmaximized-opacity';

const Page = { TRANSITIONS: 0, FOREGROUND: 1, BACKGROUND: 2, APP_TWEAKS: 3, ABOUT: 4 };
Object.freeze(Page);

/* Color Array Indices */
const RED = 0;
const GREEN = 1;
const BLUE = 2;
const ALPHA = 3;

/* Shadow Positioning Indices */
const HORIZONTAL_OFFSET = 0;
const VERTICAL_OFFSET = 1;
const BLUR_RADIUS = 2;

/* UI spacing & similar values. */
const PANEL_HEIGHT = 30;
const PANEL_WIDTH = 700;
const WEBSITE_LABEL_BOTTOM_MARGIN = 50;
const WEBSITE_LABEL_TOP_MARGIN = 20;

/* Color Scaling Factor (Byte to Decimal) */
const SCALE_FACTOR = 255.9999999;

/* Timeout for all dbus requests (in milliseconds) */
const DBUS_TIMEOUT = 1000;

function init() {
    Convenience.initTranslations();
}

/* UI Setup */
function buildPrefsWidget() {
    /* Stores settings until the user applies them. */
    let temp_settings = {
        storage: {},
        enum_storage: {},
        _foreground: false,
        store: function(key, value) {
            this.storage[key] = value;
        }, store_enum: function(key, value) {
            this.enum_storage[key] = value;
        }, get: function(key) {
            let stored = this.enum_storage[key];
            return stored ? stored : this.storage[key];
        }, has: function(key) {
            let a = this.get(key);
            return (typeof (a) !== 'undefined' && a !== null);
        }, apply: function() {
            Object.keys(this.enum_storage).forEach(function(key) {
                if (this.has(key)) {
                    settings.set_enum(key, this.get(key));
                }
            }, this);
            Object.keys(this.storage).forEach(function(key) {
                if (this.has(key)) {
                    settings.set_value(key, this.get(key));
                }
            }, this);
        }, restart_required: function(b) {
            if (typeof (b) !== 'undefined' && b !== null)
                this._foreground = b;
            return this._foreground;
        }
    };

    /* Get Settings */
    let settings = Convenience.getSettings();
    /* Create a UI Builder */
    let builder = new Gtk.Builder();
    /* Setup Translation */
    builder.set_translation_domain(Me.metadata['gettext-domain']);
    /* Get UI File */
    builder.add_from_file(Me.path + '/prefs.js/ui/prefs.ui');

    /* Main Widget (Grid) */
    let main_widget = builder.get_object('main_box');

    /* Tabs */
    let main_notebook = builder.get_object('main_notebook');

    /* Hides demo panel on irrelevant pages. */
    let panel_revealer = builder.get_object('panel_revealer');

    /* Used for special functions occasionally. */
    let extra_btn = builder.get_object('extra_btn');

    /* Only show the panel & extra button on relevant pages. */
    main_notebook.connect('switch-page', Lang.bind(this, function(notebook, page, index) {
        if (index === Page.FOREGROUND || index === Page.BACKGROUND) {
            panel_revealer.set_reveal_child(true);
        } else {
            panel_revealer.set_reveal_child(false);
        }

        if (index === Page.APP_TWEAKS) {
            extra_btn.show();
        } else {
            extra_btn.hide();
        }
    }));

    /* Panel used to demonstrate the user's settings. */
    // TODO: Theme detection in the preview.
    let panel_scrolled_window = builder.get_object('panel_scrolled_window');
    let panel_background = builder.get_object('panel_demo_background');
    let panel_overlay = builder.get_object('panel_overlay');
    panel_overlay.add_overlay(panel_background);

    Compatibility.gtk_scrolled_window_set_overlay_scrolling(panel_scrolled_window, true);

    let panel_wallpaper = builder.get_object('panel_wallpaper');

    let bg_settings = null;

    try {
        let schemaObj = Convenience.getSchemaObj(GNOME_BACKGROUND_SCHEMA, true);

        if (!Util.is_undef(schemaObj)) {
            bg_settings = new Gio.Settings({
                settings_schema: schemaObj
            });
        }
    } catch (error) { } // eslint-disable-line

    if (bg_settings) {
        let wallpaper_path = bg_settings.get_string('picture-uri').replace('file://', '');

        if (wallpaper_path.endsWith('.xml')) {
            log('[Dynamic Panel Transparency] Demo panel is not compatible with timed wallpapers.');
        } else {
            try {
                let pixbuf = GdkPixbuf.Pixbuf.new_from_file_at_scale(wallpaper_path, PANEL_WIDTH, -1, true);
                panel_wallpaper.pixbuf = pixbuf.new_subpixbuf(0, 0, PANEL_WIDTH, PANEL_HEIGHT);

                panel_background.connect('size-allocate', Lang.bind(this, function(widget, rect) {
                    pixbuf = GdkPixbuf.Pixbuf.new_from_file_at_scale(wallpaper_path, rect.width, -1, true);
                    panel_wallpaper.pixbuf = pixbuf.new_subpixbuf(0, 0, rect.width, PANEL_HEIGHT);
                }));
            } catch (error) {
                log('[Dynamic Panel Transparency] Could not open user\'s wallpaper settings for demo panel.');
                log(error);
            }
        }
    } else {
        log('[Dynamic Panel Transparency] Failed to retrieve user\'s wallpaper settings.');
    }

    let demo_panel_activities_label = builder.get_object('panel_demo_activities_label');
    let demo_panel_clock_label = builder.get_object('panel_demo_clock_label');

    let text_labels = [demo_panel_activities_label, demo_panel_clock_label];
    let icons = [builder.get_object('panel_demo_network_icon'), builder.get_object('panel_demo_volume_icon'), builder.get_object('panel_demo_battery_icon')];

    let panel_demo = new DemoPanel.DemoPanel(panel_background, text_labels, icons);

    demo_panel_activities_label.set_label(gs_("Activities"));
    demo_panel_clock_label.set_label(((new Date()).toLocaleTimeString()));

    let enable_bg_color = settings.get_boolean(SETTINGS_ENABLE_BACKGROUND_COLOR);
    let bg_color = settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack();
    if (enable_bg_color) {
        panel_demo.set_background_color({ red: bg_color[RED], green: bg_color[GREEN], blue: bg_color[BLUE] });
    } else {
        panel_demo.set_background_color({ red: 0, green: 0, blue: 0 });
    }

    let enable_text_color = settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR);
    let enable_maximized_text_color = settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR);

    if (enable_maximized_text_color && enable_text_color) {
        let maximized_text_color = settings.get_value(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();
        panel_demo.set_text_color({ red: maximized_text_color[RED], green: maximized_text_color[GREEN], blue: maximized_text_color[BLUE], alpha: 1.0 });
    } else if (enable_text_color) {
        let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();
        panel_demo.set_text_color({ red: text_color[RED], green: text_color[GREEN], blue: text_color[BLUE], alpha: 1.0 });
    } else {
        panel_demo.set_text_color({ red: 255, green: 255, blue: 255, alpha: 1.0 });
    }
    let opacity = settings.get_int(SETTINGS_MAXIMIZED_OPACITY);

    let enable_opacity = settings.get_boolean(SETTINGS_ENABLE_OPACITY);

    if (enable_opacity) {
        panel_demo.set_opacity(opacity, true);
    } else {
        panel_demo.set_opacity(255, true);
    }

    {
        /* Transition speed control */
        let speed_scale = builder.get_object('speed_scale');
        /* Init value. */
        speed_scale.adjustment.set_value(settings.get_int(SETTINGS_TRANSITION_SPEED));
        /* Add default marking. */
        speed_scale.add_mark(settings.get_default_value(SETTINGS_TRANSITION_SPEED).unpack(), Gtk.PositionType.BOTTOM, _("default"));
        /* Add formatting */
        speed_scale.connect('format-value', Lang.bind(this, function(scale, value) {
            return value + 'ms';
        }));
        speed_scale.connect('value-changed', Lang.bind(this, function(widget) {
            temp_settings.store(SETTINGS_TRANSITION_SPEED, new GLib.Variant('i', widget.adjustment.get_value()));
        }));

        let transition_type_box = builder.get_object('transition_type_box');
        transition_type_box.connect('changed', Lang.bind(this, function(box) {
            temp_settings.store('transition-type', new GLib.Variant('i', +(box.get_active_id())));
        }));
        transition_type_box.set_active_id('' + settings.get_int(SETTINGS_TRANSITION_TYPE) + '');

        let force_transition = builder.get_object('force_transition_check');
        force_transition.set_active(settings.get_boolean(SETTINGS_FORCE_ANIMATION));

        force_transition.connect('toggled', Lang.bind(this, function(widget) {
            temp_settings.store(SETTINGS_FORCE_ANIMATION, new GLib.Variant('b', widget.get_active()));
            temp_settings.restart_required(true);
        }));
    }

    /* Setup foreground tab */
    {
        let text_color_switch = builder.get_object('text_color_switch');
        let text_color_revealer = builder.get_object('text_color_revealer');

        text_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR));
        text_color_switch.connect('state-set', Lang.bind(this, function(widget, state) {
            temp_settings.store(SETTINGS_ENABLE_TEXT_COLOR, new GLib.Variant('b', state));
            text_color_revealer.set_reveal_child(state);

            let enable_maximized_text_color = settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR);
            if (temp_settings.has(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR)) {
                enable_maximized_text_color = temp_settings.get(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR).unpack();
            }

            if (enable_maximized_text_color && state) {
                let maximized_text_color = settings.get_value(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_MAXIMIZED_TEXT_COLOR)) {
                    maximized_text_color = temp_settings.get(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();
                }
                panel_demo.set_text_color({ red: maximized_text_color[RED], green: maximized_text_color[GREEN], blue: maximized_text_color[BLUE], alpha: 1.0 });
            } else if (state) {
                let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_COLOR)) {
                    text_color = temp_settings.get(SETTINGS_TEXT_COLOR).deep_unpack();
                }
                panel_demo.set_text_color({ red: text_color[RED], green: text_color[GREEN], blue: text_color[BLUE], alpha: 1.0 });
            } else {
                panel_demo.set_text_color({ red: 255, green: 255, blue: 255, alpha: 1.0 });
            }
        }));

        let maximized_text_color_switch = builder.get_object('maximized_text_color_check');
        maximized_text_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR));

        maximized_text_color_switch.connect('toggled', Lang.bind(this, function(widget) {
            temp_settings.store(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR, new GLib.Variant('b', widget.get_active()));

            let enable_text_color = settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR);
            let enable_maximized_text_color = settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR);
            if (temp_settings.has(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR)) {
                enable_maximized_text_color = temp_settings.get(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR).unpack();
            }
            if (temp_settings.has(SETTINGS_ENABLE_TEXT_COLOR)) {
                enable_text_color = temp_settings.get(SETTINGS_ENABLE_TEXT_COLOR).unpack();
            }
            if (enable_maximized_text_color && enable_text_color) {
                let maximized_text_color = settings.get_value(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_MAXIMIZED_TEXT_COLOR)) {
                    maximized_text_color = temp_settings.get(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();
                }
                panel_demo.set_text_color({ red: maximized_text_color[RED], green: maximized_text_color[GREEN], blue: maximized_text_color[BLUE], alpha: 1.0 });
            } else if (enable_text_color) {
                let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_COLOR)) {
                    text_color = temp_settings.get(SETTINGS_TEXT_COLOR).deep_unpack();
                }
                panel_demo.set_text_color({ red: text_color[RED], green: text_color[GREEN], blue: text_color[BLUE], alpha: 1.0 });
            } else {
                panel_demo.set_text_color({ red: 255, green: 255, blue: 255, alpha: 1.0 });
            }
        }));

        let overview_text_color_switch = builder.get_object('overview_text_color_check');
        overview_text_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR));

        overview_text_color_switch.connect('toggled', Lang.bind(this, function(widget) {
            temp_settings.store(SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR, new GLib.Variant('b', widget.get_active()));
        }));

        let remove_panel_styling_check = builder.get_object('remove_panel_styling_check');
        remove_panel_styling_check.set_active(settings.get_boolean(SETTINGS_REMOVE_PANEL_STYLING));

        remove_panel_styling_check.connect('toggled', Lang.bind(this, function(widget) {
            temp_settings.store(SETTINGS_REMOVE_PANEL_STYLING, new GLib.Variant('b', widget.get_active()));
        }));

        let maximized_text_color_btn = builder.get_object('maximized_text_color_btn');
        let maximized_text_color = settings.get_value(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();

        let css_color = 'rgba(' + maximized_text_color[RED] + ',' + maximized_text_color[GREEN] + ',' + maximized_text_color[BLUE] + ', 1.0)';
        let scaled_color = new Gdk.RGBA();

        if (scaled_color.parse(css_color)) {
            maximized_text_color_btn.set_rgba(scaled_color);
        }

        maximized_text_color_btn.connect('color-set', Lang.bind(this, function(color_btn) {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let rgb = [color.red, color.green, color.blue];

            temp_settings.store(SETTINGS_MAXIMIZED_TEXT_COLOR, new GLib.Variant('(iii)', rgb));
            temp_settings.restart_required(true);

            let enable_text_color = settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR);
            let enable_maximized_text_color = settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR);
            if (temp_settings.has(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR)) {
                enable_maximized_text_color = temp_settings.get(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR).unpack();
            }
            if (temp_settings.has(SETTINGS_ENABLE_TEXT_COLOR)) {
                enable_text_color = temp_settings.get(SETTINGS_ENABLE_TEXT_COLOR).unpack();
            }
            if (enable_maximized_text_color && enable_text_color) {
                let maximized_text_color = settings.get_value(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_MAXIMIZED_TEXT_COLOR)) {
                    maximized_text_color = temp_settings.get(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();
                }
                panel_demo.set_text_color({ red: maximized_text_color[RED], green: maximized_text_color[GREEN], blue: maximized_text_color[BLUE], alpha: 1.0 });
            } else if (enable_text_color) {
                let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_COLOR)) {
                    text_color = temp_settings.get(SETTINGS_TEXT_COLOR).deep_unpack();
                }
                panel_demo.set_text_color({ red: text_color[RED], green: text_color[GREEN], blue: text_color[BLUE], alpha: 1.0 });
            } else {
                panel_demo.set_text_color({ red: 255, green: 255, blue: 255, alpha: 1.0 });
            }
        }));

        let text_color_btn = builder.get_object('text_color_btn');
        let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();

        css_color = 'rgba(' + text_color[RED] + ',' + text_color[GREEN] + ',' + text_color[BLUE] + ', 1.0)';
        scaled_color = new Gdk.RGBA();

        if (scaled_color.parse(css_color)) {
            text_color_btn.set_rgba(scaled_color);
        }

        text_color_btn.connect('color-set', Lang.bind(this, function(color_btn) {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let rgb = [color.red, color.green, color.blue];

            temp_settings.store(SETTINGS_TEXT_COLOR, new GLib.Variant('(iii)', rgb));
            temp_settings.restart_required(true);
            panel_demo.set_text_color({ red: rgb[RED], green: rgb[GREEN], blue: rgb[BLUE], alpha: 1.0 });
        }));

        let text_shadow_switch = builder.get_object('text_shadow_switch');
        text_shadow_switch.set_active(settings.get_boolean(SETTINGS_TEXT_SHADOW));

        text_shadow_switch.connect('state-set', Lang.bind(this, function(widget, state) {
            temp_settings.store(SETTINGS_TEXT_SHADOW, new GLib.Variant('b', state));

            if (state) {
                let text_shadow = settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_SHADOW_POSITION)) {
                    text_shadow = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                }
                let text_shadow_color = settings.get_value(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_SHADOW_COLOR)) {
                    text_shadow_color = temp_settings.get(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
                }
                panel_demo.set_text_shadow({
                    h_offset: text_shadow[HORIZONTAL_OFFSET], y_offset: text_shadow[VERTICAL_OFFSET], blur: text_shadow[BLUR_RADIUS], color: {
                        red: text_shadow_color[RED],
                        green: text_shadow_color[GREEN],
                        blue: text_shadow_color[BLUE],
                        alpha: text_shadow_color[ALPHA]
                    }
                });
            } else {
                panel_demo.set_text_shadow(null);
            }
        }));

        let enable_text_shadow = settings.get_boolean(SETTINGS_TEXT_SHADOW);

        if (enable_text_shadow) {
            let text_shadow = settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
            if (temp_settings.has(SETTINGS_TEXT_SHADOW_POSITION)) {
                text_shadow = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
            }
            let text_shadow_color = settings.get_value(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
            if (temp_settings.has(SETTINGS_TEXT_SHADOW_COLOR)) {
                text_shadow_color = temp_settings.get(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
            }
            panel_demo.set_text_shadow({
                h_offset: text_shadow[HORIZONTAL_OFFSET], y_offset: text_shadow[VERTICAL_OFFSET], blur: text_shadow[BLUR_RADIUS], color: {
                    red: text_shadow_color[RED],
                    green: text_shadow_color[GREEN],
                    blue: text_shadow_color[BLUE],
                    alpha: text_shadow_color[ALPHA]
                }
            });
        } else {
            panel_demo.set_text_shadow(null);
        }

        let text_shadow_vertical_offset = builder.get_object('text_shadow_vertical_offset');
        temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, settings.get_value(SETTINGS_TEXT_SHADOW_POSITION));
        text_shadow_vertical_offset.set_value(settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[VERTICAL_OFFSET]);
        text_shadow_vertical_offset.connect('value-changed', Lang.bind(this, function(widget) {
            let position = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
            position[VERTICAL_OFFSET] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);

            let enable_text_shadow = settings.get_boolean(SETTINGS_TEXT_SHADOW);
            if (temp_settings.has(SETTINGS_TEXT_SHADOW)) {
                enable_text_shadow = temp_settings.get(SETTINGS_TEXT_SHADOW).deep_unpack();
            }

            if (enable_text_shadow) {
                let text_shadow = settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_SHADOW_POSITION)) {
                    text_shadow = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                }
                let text_shadow_color = settings.get_value(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_SHADOW_COLOR)) {
                    text_shadow_color = temp_settings.get(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
                }
                panel_demo.set_text_shadow({
                    h_offset: text_shadow[HORIZONTAL_OFFSET], y_offset: text_shadow[VERTICAL_OFFSET], blur: text_shadow[BLUR_RADIUS], color: {
                        red: text_shadow_color[RED],
                        green: text_shadow_color[GREEN],
                        blue: text_shadow_color[BLUE],
                        alpha: text_shadow_color[ALPHA]
                    }
                });
            } else {
                panel_demo.set_text_shadow(null);
            }
        }));

        let text_shadow_horizontal_offset = builder.get_object('text_shadow_horizontal_offset');
        text_shadow_horizontal_offset.set_value(settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[HORIZONTAL_OFFSET]);
        text_shadow_horizontal_offset.connect('value-changed', Lang.bind(this, function(widget) {
            let position = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
            position[HORIZONTAL_OFFSET] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);

            let enable_text_shadow = settings.get_boolean(SETTINGS_TEXT_SHADOW);
            if (temp_settings.has(SETTINGS_TEXT_SHADOW)) {
                enable_text_shadow = temp_settings.get(SETTINGS_TEXT_SHADOW).deep_unpack();
            }

            if (enable_text_shadow) {
                let text_shadow = settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_SHADOW_POSITION)) {
                    text_shadow = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                }
                let text_shadow_color = settings.get_value(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_SHADOW_COLOR)) {
                    text_shadow_color = temp_settings.get(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
                }
                panel_demo.set_text_shadow({
                    h_offset: text_shadow[HORIZONTAL_OFFSET], y_offset: text_shadow[VERTICAL_OFFSET], blur: text_shadow[BLUR_RADIUS], color: {
                        red: text_shadow_color[RED],
                        green: text_shadow_color[GREEN],
                        blue: text_shadow_color[BLUE],
                        alpha: text_shadow_color[ALPHA]
                    }
                });
            } else {
                panel_demo.set_text_shadow(null);
            }
        }));

        let text_shadow_radius = builder.get_object('text_shadow_radius');
        text_shadow_radius.set_value(settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[BLUR_RADIUS]);
        text_shadow_radius.connect('value-changed', Lang.bind(this, function(widget) {
            let position = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
            position[BLUR_RADIUS] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);

            let enable_text_shadow = settings.get_boolean(SETTINGS_TEXT_SHADOW);
            if (temp_settings.has(SETTINGS_TEXT_SHADOW)) {
                enable_text_shadow = temp_settings.get(SETTINGS_TEXT_SHADOW).deep_unpack();
            }

            if (enable_text_shadow) {
                let text_shadow = settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_SHADOW_POSITION)) {
                    text_shadow = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                }
                let text_shadow_color = settings.get_value(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_SHADOW_COLOR)) {
                    text_shadow_color = temp_settings.get(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
                }
                panel_demo.set_text_shadow({
                    h_offset: text_shadow[HORIZONTAL_OFFSET], y_offset: text_shadow[VERTICAL_OFFSET], blur: text_shadow[BLUR_RADIUS], color: {
                        red: text_shadow_color[RED],
                        green: text_shadow_color[GREEN],
                        blue: text_shadow_color[BLUE],
                        alpha: text_shadow_color[ALPHA]
                    }
                });
            } else {
                panel_demo.set_text_shadow(null);
            }
        }));

        let text_shadow_color_btn = builder.get_object('text_shadow_color');

        // COMPATIBILITY: In 3.18 and lower there is no 'show-editor' property.
        Compatibility.gtk_color_button_set_show_editor(text_shadow_color_btn, true);

        let text_shadow_color = settings.get_value(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();

        css_color = 'rgba(' + text_shadow_color[RED] + ',' + text_shadow_color[GREEN] + ',' + text_shadow_color[BLUE] + ',' + text_shadow_color[ALPHA].toFixed(2) + ')';
        scaled_color = new Gdk.RGBA();
        if (scaled_color.parse(css_color))
            text_shadow_color_btn.set_rgba(scaled_color);

        text_shadow_color_btn.connect('color-set', Lang.bind(this, function(color_btn) {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let alpha = +(color_btn.get_rgba().alpha.toFixed(2));

            let rgba = [color.red, color.green, color.blue, alpha];
            temp_settings.store(SETTINGS_TEXT_SHADOW_COLOR, new GLib.Variant('(iiid)', rgba));
            temp_settings.restart_required(true);

            let enable_text_shadow = settings.get_boolean(SETTINGS_TEXT_SHADOW);
            if (temp_settings.has(SETTINGS_TEXT_SHADOW)) {
                enable_text_shadow = temp_settings.get(SETTINGS_TEXT_SHADOW).deep_unpack();
            }

            if (enable_text_shadow) {
                let text_shadow = settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_SHADOW_POSITION)) {
                    text_shadow = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                }
                let text_shadow_color = settings.get_value(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_SHADOW_COLOR)) {
                    text_shadow_color = temp_settings.get(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();
                }
                panel_demo.set_text_shadow({
                    h_offset: text_shadow[HORIZONTAL_OFFSET], y_offset: text_shadow[VERTICAL_OFFSET], blur: text_shadow[BLUR_RADIUS], color: {
                        red: text_shadow_color[RED],
                        green: text_shadow_color[GREEN],
                        blue: text_shadow_color[BLUE],
                        alpha: text_shadow_color[ALPHA]
                    }
                });
            } else {
                panel_demo.set_text_shadow(null);
            }
        }));

        let icon_shadow = builder.get_object('icon_shadow_switch');
        icon_shadow.set_active(settings.get_boolean(SETTINGS_ICON_SHADOW));

        let enable_icon_shadow = settings.get_boolean(SETTINGS_ICON_SHADOW);

        if (enable_icon_shadow) {
            let icon_shadow = settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
            if (temp_settings.has(SETTINGS_ICON_SHADOW_POSITION)) {
                icon_shadow = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
            }
            let icon_shadow_color = settings.get_value(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
            if (temp_settings.has(SETTINGS_ICON_SHADOW_COLOR)) {
                icon_shadow_color = temp_settings.get(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
            }
            panel_demo.set_icon_shadow({
                h_offset: icon_shadow[HORIZONTAL_OFFSET], y_offset: icon_shadow[VERTICAL_OFFSET], blur: icon_shadow[BLUR_RADIUS], color: {
                    red: icon_shadow_color[RED],
                    green: icon_shadow_color[GREEN],
                    blue: icon_shadow_color[BLUE],
                    alpha: icon_shadow_color[ALPHA]
                }
            });
        } else {
            panel_demo.set_icon_shadow(null);
        }

        icon_shadow.connect('state-set', Lang.bind(this, function(widget, state) {
            temp_settings.store(SETTINGS_ICON_SHADOW, new GLib.Variant('b', state));

            if (state) {
                let icon_shadow = settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                if (temp_settings.has(SETTINGS_ICON_SHADOW_POSITION)) {
                    icon_shadow = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                }
                let icon_shadow_color = settings.get_value(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_ICON_SHADOW_COLOR)) {
                    icon_shadow_color = temp_settings.get(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
                }
                panel_demo.set_icon_shadow({
                    h_offset: icon_shadow[HORIZONTAL_OFFSET], y_offset: icon_shadow[VERTICAL_OFFSET], blur: icon_shadow[BLUR_RADIUS], color: {
                        red: icon_shadow_color[RED],
                        green: icon_shadow_color[GREEN],
                        blue: icon_shadow_color[BLUE],
                        alpha: icon_shadow_color[ALPHA]
                    }
                });
            } else {
                panel_demo.set_icon_shadow(null);
            }
        }));

        let icon_shadow_vertical_offset = builder.get_object('icon_shadow_vertical_offset');

        temp_settings.store(SETTINGS_ICON_SHADOW_POSITION, settings.get_value(SETTINGS_ICON_SHADOW_POSITION));
        icon_shadow_vertical_offset.set_value(settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[VERTICAL_OFFSET]);
        icon_shadow_vertical_offset.connect('value-changed', Lang.bind(this, function(widget) {
            let position = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
            position[VERTICAL_OFFSET] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);

            let enable_icon_shadow = settings.get_boolean(SETTINGS_ICON_SHADOW);
            if (temp_settings.has(SETTINGS_ICON_SHADOW)) {
                enable_icon_shadow = temp_settings.get(SETTINGS_ICON_SHADOW).deep_unpack();
            }

            if (enable_icon_shadow) {
                let icon_shadow = settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                if (temp_settings.has(SETTINGS_ICON_SHADOW_POSITION)) {
                    icon_shadow = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                }
                let icon_shadow_color = settings.get_value(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_ICON_SHADOW_COLOR)) {
                    icon_shadow_color = temp_settings.get(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
                }
                panel_demo.set_icon_shadow({
                    h_offset: icon_shadow[HORIZONTAL_OFFSET], y_offset: icon_shadow[VERTICAL_OFFSET], blur: icon_shadow[BLUR_RADIUS], color: {
                        red: icon_shadow_color[RED],
                        green: icon_shadow_color[GREEN],
                        blue: icon_shadow_color[BLUE],
                        alpha: icon_shadow_color[ALPHA]
                    }
                });
            } else {
                panel_demo.set_icon_shadow(null);
            }
        }));
        let icon_shadow_horizontal_offset = builder.get_object('icon_shadow_horizontal_offset');
        icon_shadow_horizontal_offset.set_value(settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[HORIZONTAL_OFFSET]);
        icon_shadow_horizontal_offset.connect('value-changed', Lang.bind(this, function(widget) {
            let position = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
            position[HORIZONTAL_OFFSET] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);

            let enable_icon_shadow = settings.get_boolean(SETTINGS_ICON_SHADOW);
            if (temp_settings.has(SETTINGS_ICON_SHADOW)) {
                enable_icon_shadow = temp_settings.get(SETTINGS_ICON_SHADOW).deep_unpack();
            }

            if (enable_icon_shadow) {
                let icon_shadow = settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                if (temp_settings.has(SETTINGS_ICON_SHADOW_POSITION)) {
                    icon_shadow = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                }
                let icon_shadow_color = settings.get_value(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_ICON_SHADOW_COLOR)) {
                    icon_shadow_color = temp_settings.get(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
                }
                panel_demo.set_icon_shadow({
                    h_offset: icon_shadow[HORIZONTAL_OFFSET], y_offset: icon_shadow[VERTICAL_OFFSET], blur: icon_shadow[BLUR_RADIUS], color: {
                        red: icon_shadow_color[RED],
                        green: icon_shadow_color[GREEN],
                        blue: icon_shadow_color[BLUE],
                        alpha: icon_shadow_color[ALPHA]
                    }
                });
            } else {
                panel_demo.set_icon_shadow(null);
            }
        }));
        let icon_shadow_radius = builder.get_object('icon_shadow_radius');
        icon_shadow_radius.set_value(settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[BLUR_RADIUS]);
        icon_shadow_radius.connect('value-changed', Lang.bind(this, function(widget) {
            let position = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
            position[BLUR_RADIUS] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);

            let enable_icon_shadow = settings.get_boolean(SETTINGS_ICON_SHADOW);
            if (temp_settings.has(SETTINGS_ICON_SHADOW)) {
                enable_icon_shadow = temp_settings.get(SETTINGS_ICON_SHADOW).deep_unpack();
            }

            if (enable_icon_shadow) {
                let icon_shadow = settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                if (temp_settings.has(SETTINGS_ICON_SHADOW_POSITION)) {
                    icon_shadow = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                }
                let icon_shadow_color = settings.get_value(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_ICON_SHADOW_COLOR)) {
                    icon_shadow_color = temp_settings.get(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
                }
                panel_demo.set_icon_shadow({
                    h_offset: icon_shadow[HORIZONTAL_OFFSET], y_offset: icon_shadow[VERTICAL_OFFSET], blur: icon_shadow[BLUR_RADIUS], color: {
                        red: icon_shadow_color[RED],
                        green: icon_shadow_color[GREEN],
                        blue: icon_shadow_color[BLUE],
                        alpha: icon_shadow_color[ALPHA]
                    }
                });
            } else {
                panel_demo.set_icon_shadow(null);
            }
        }));

        let icon_shadow_color_btn = builder.get_object('icon_shadow_color');

        // COMPATIBILITY: In 3.18 and lower there is no 'show-editor' property.
        Compatibility.gtk_color_button_set_show_editor(icon_shadow_color_btn, true);

        let icon_shadow_color = settings.get_value(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();

        css_color = 'rgba(' + icon_shadow_color[RED] + ',' + icon_shadow_color[GREEN] + ',' + icon_shadow_color[BLUE] + ',' + icon_shadow_color[ALPHA].toFixed(2) + ')';
        scaled_color = new Gdk.RGBA();
        if (scaled_color.parse(css_color))

            icon_shadow_color_btn.set_rgba(scaled_color);

        icon_shadow_color_btn.connect('color-set', Lang.bind(this, function(color_btn) {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let alpha = +(color_btn.get_rgba().alpha.toFixed(2));

            let rgba = [color.red, color.green, color.blue, alpha];

            temp_settings.store(SETTINGS_ICON_SHADOW_COLOR, new GLib.Variant('(iiid)', rgba));
            temp_settings.restart_required(true);

            let enable_icon_shadow = settings.get_boolean(SETTINGS_ICON_SHADOW);
            if (temp_settings.has(SETTINGS_ICON_SHADOW)) {
                enable_icon_shadow = temp_settings.get(SETTINGS_ICON_SHADOW).deep_unpack();
            }

            if (enable_icon_shadow) {
                let icon_shadow = settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                if (temp_settings.has(SETTINGS_ICON_SHADOW_POSITION)) {
                    icon_shadow = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                }
                let icon_shadow_color = settings.get_value(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_ICON_SHADOW_COLOR)) {
                    icon_shadow_color = temp_settings.get(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();
                }
                panel_demo.set_icon_shadow({
                    h_offset: icon_shadow[HORIZONTAL_OFFSET], y_offset: icon_shadow[VERTICAL_OFFSET], blur: icon_shadow[BLUR_RADIUS], color: {
                        red: icon_shadow_color[RED],
                        green: icon_shadow_color[GREEN],
                        blue: icon_shadow_color[BLUE],
                        alpha: icon_shadow_color[ALPHA]
                    }
                });
            } else {
                panel_demo.set_icon_shadow(null);
            }
        }));
    }

    /* Setup Background Tab */
    {
        let background_color_switch = builder.get_object('background_color_switch');
        let opacity_switch = builder.get_object('opacity_switch');
        let background_color_revealer = builder.get_object('background_color_revealer');
        let opacity_revealer = builder.get_object('opacity_revealer');

        background_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_BACKGROUND_COLOR));
        background_color_switch.connect('state-set', Lang.bind(this, function(widget, state) {

            if (state) {
                let rgb = settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack();
                panel_demo.set_background_color({ red: rgb[RED], green: rgb[GREEN], blue: rgb[BLUE] });
            } else {
                panel_demo.set_background_color({ red: 0, green: 0, blue: 0 });
            }

            temp_settings.store(SETTINGS_ENABLE_BACKGROUND_COLOR, new GLib.Variant('b', state));
            background_color_revealer.set_reveal_child(state);
        }));

        opacity_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_OPACITY));
        opacity_switch.connect('state-set', Lang.bind(this, function(widget, state) {
            temp_settings.store(SETTINGS_ENABLE_OPACITY, new GLib.Variant('b', state));
            opacity_revealer.set_reveal_child(state);
            let opacity = settings.get_int(SETTINGS_MAXIMIZED_OPACITY);
            if (temp_settings.has(SETTINGS_MAXIMIZED_OPACITY)) {
                opacity = temp_settings.get(SETTINGS_MAXIMIZED_OPACITY).unpack();
            }
            if (state) {
                panel_demo.set_opacity(opacity, true);
            } else {
                panel_demo.set_opacity(255, true);
            }
        }));

        /* Maximum opacity control */
        let maximum_scale = builder.get_object('maximum_scale');
        /* Init value. */
        maximum_scale.adjustment.set_value(settings.get_int(SETTINGS_MAXIMIZED_OPACITY));
        /* Add formatting */
        maximum_scale.connect('format-value', Lang.bind(this, function(scale, value) {
            return (((value / SCALE_FACTOR) * 100).toFixed(0) + '%'); // eslint-disable-line no-magic-numbers
        }));
        maximum_scale.connect('value-changed', Lang.bind(this, function(widget) {
            panel_demo.set_opacity(widget.get_value(), true);

            let enable_text_color = settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR);
            let enable_maximized_text_color = settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR);

            if (temp_settings.has(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR)) {
                enable_maximized_text_color = temp_settings.get(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR).unpack();
            }
            if (temp_settings.has(SETTINGS_ENABLE_TEXT_COLOR)) {
                enable_text_color = temp_settings.get(SETTINGS_ENABLE_TEXT_COLOR).unpack();
            }

            if (enable_maximized_text_color && enable_text_color) {
                let maximized_text_color = settings.get_value(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_MAXIMIZED_TEXT_COLOR)) {
                    maximized_text_color = temp_settings.get(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();
                }
                panel_demo.set_text_color({ red: maximized_text_color[RED], green: maximized_text_color[GREEN], blue: maximized_text_color[BLUE], alpha: 1.0 });
            } else if (enable_text_color) {
                let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();
                if (temp_settings.has(SETTINGS_TEXT_COLOR)) {
                    text_color = temp_settings.get(SETTINGS_TEXT_COLOR).deep_unpack();
                }
                panel_demo.set_text_color({ red: text_color[RED], green: text_color[GREEN], blue: text_color[BLUE], alpha: 1.0 });
            } else {
                panel_demo.set_text_color({ red: 255, green: 255, blue: 255, alpha: 1.0 });
            }

            temp_settings.store(SETTINGS_MAXIMIZED_OPACITY, new GLib.Variant('i', widget.adjustment.get_value()));
        }));

        /* Minimum opacity control */
        let minimum_scale = builder.get_object('minimum_scale');
        /* Init value. */
        minimum_scale.adjustment.set_value(settings.get_int(SETTINGS_UNMAXIMIZED_OPACITY));
        /* Add formatting */
        minimum_scale.connect('format-value', Lang.bind(this, function(scale, value) {
            return ((value / SCALE_FACTOR) * 100).toFixed(0) + '%'; // eslint-disable-line no-magic-numbers
        }));
        minimum_scale.connect('value-changed', Lang.bind(this, function(widget) {
            panel_demo.set_opacity(widget.get_value(), true);

            let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();
            let enable_text_color = settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR);
            if (temp_settings.has(SETTINGS_ENABLE_TEXT_COLOR)) {
                enable_text_color = temp_settings.get(SETTINGS_ENABLE_TEXT_COLOR).unpack();
            }
            if (temp_settings.has(SETTINGS_TEXT_COLOR)) {
                text_color = temp_settings.get(SETTINGS_TEXT_COLOR).deep_unpack();
            }
            if (enable_text_color) {
                panel_demo.set_text_color({ red: text_color[RED], green: text_color[GREEN], blue: text_color[BLUE], alpha: 1.0 });
            }
            temp_settings.store(SETTINGS_UNMAXIMIZED_OPACITY, new GLib.Variant('i', widget.adjustment.get_value()));
        }));

        /* Convert & scale color. */
        let panel_color = settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack();

        let color_btn = builder.get_object('color_btn');
        let css_color = 'rgba(' + panel_color[RED] + ',' + panel_color[GREEN] + ',' + panel_color[BLUE] + ', 1.0)';

        let scaled_color = new Gdk.RGBA();
        if (scaled_color.parse(css_color)) {
            color_btn.set_rgba(scaled_color);
        }
        color_btn.connect('color-set', Lang.bind(this, function(color_btn) {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let rgb = [color.red, color.green, color.blue];

            temp_settings.store(SETTINGS_PANEL_COLOR, new GLib.Variant('ai', rgb));
            panel_demo.set_background_color({ red: rgb[RED], green: rgb[GREEN], blue: rgb[BLUE] });
        }));

        let hide_corners = builder.get_object('hide_corners_check');
        hide_corners.set_active(settings.get_boolean(SETTINGS_HIDE_CORNERS));

        hide_corners.connect('toggled', Lang.bind(this, function(widget) {
            temp_settings.store(SETTINGS_HIDE_CORNERS, new GLib.Variant('b', widget.get_active()));
        }));
    }

    /* Setup App Settings Tab */
    {
        let app_list = builder.get_object('app_list');
        app_list.set_sort_func(Lang.bind(this, function(a, b) {
            if (a.constructor === AppRow.AddAppRow) {
                return 1;
            } else if (b.constructor === AppRow.AddAppRow) {
                return -1;
            }

            if (a.constructor !== AppRow.AppRow) {
                return 1;
            } else if (b.constructor !== AppRow.AppRow) {
                return -1;
            }
            let aname = a.app_name;
            let bname = b.app_name;
            if (aname < bname) {
                return -1;
            } else if (aname > bname) {
                return 1;
            } else {
                return 0;
            }
        }), null);

        let app_overrides = settings.get_strv('app-overrides');
        let window_overrides = settings.get_strv('window-overrides');

        let window_rmv = Lang.bind(this, function(wm_class, row) {
            let overrides = settings.get_strv('window-overrides');
            let index = overrides.indexOf(wm_class);
            if (index !== -1) {
                overrides.splice(index, 1);
            }
            settings.set_strv('window-overrides', overrides);

            let triggers = settings.get_strv('trigger-windows');
            index = triggers.indexOf(wm_class);
            if (index !== -1) {
                triggers.splice(index, 1);
            }
            settings.set_strv('trigger-windows', triggers);

            app_list.remove(row);
        });
        let tweak_rmv = Lang.bind(this, function(wm_class, row, extra_wm_class) {
            let overrides = settings.get_strv('window-overrides');
            let index = overrides.indexOf(wm_class);
            if (index !== -1) {
                overrides.splice(index, 1);
            }
            settings.set_strv('window-overrides', overrides);

            let triggers = settings.get_strv('trigger-windows');
            index = triggers.indexOf(wm_class);
            if (index !== -1) {
                triggers.splice(index, 1);
            }
            settings.set_strv('trigger-windows', triggers);

            for (let extra of extra_wm_class) {
                let overrides = settings.get_strv('window-overrides');
                let index = overrides.indexOf(extra);
                if (index !== -1) {
                    overrides.splice(index, 1);
                }
                settings.set_strv('window-overrides', overrides);

                let triggers = settings.get_strv('trigger-windows');
                index = triggers.indexOf(extra);
                if (index !== -1) {
                    triggers.splice(index, 1);
                }
                settings.set_strv('trigger-windows', triggers);
            }

            app_list.remove(row);
        });
        let rmv = Lang.bind(this, function(app_id, row) {
            let overrides = settings.get_strv('app-overrides');
            let index = overrides.indexOf(app_id);
            if (index !== -1) {
                overrides.splice(index, 1);
            }
            settings.set_strv('app-overrides', overrides);

            let triggers = settings.get_strv('trigger-apps');
            index = triggers.indexOf(app_id);
            if (index !== -1) {
                triggers.splice(index, 1);
            }
            settings.set_strv('trigger-apps', triggers);

            app_list.remove(row);
        });

        let cfg = Lang.bind(this, function(app_name, app_id, path, extras = []) {
            let temp_app_settings = {
                background_tweaks: null,
                maximum_opacity: null,
                panel_color: null,
                always_trigger: null
            };

            let app_prefs_builder = new Gtk.Builder();
            /* Setup Translation */
            app_prefs_builder.set_translation_domain(Me.metadata['gettext-domain']);
            /* Get UI File */
            app_prefs_builder.add_from_file(Me.path + '/prefs.js/ui/app-prefs.ui');

            let dialog = new Gtk.Dialog({
                use_header_bar: true,
                modal: true,
                title: app_name
            });

            dialog.get_header_bar().set_subtitle(_("App Tweaks"));

            dialog.add_button(gtk30_("_Cancel"), Gtk.ResponseType.CANCEL);
            dialog.add_button(gtk30_("_Apply"), Gtk.ResponseType.APPLY);

            dialog.transient_for = main_widget.get_toplevel();
            let custom_path = path + '' + app_id + '/';
            let obj = Convenience.getSchemaObj('org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides');
            let app_settings = new Gio.Settings({ path: custom_path, settings_schema: obj });

            let content_area = dialog.get_content_area();
            content_area.add(app_prefs_builder.get_object('main_box'));

            let background_tweaks_switch = app_prefs_builder.get_object('background_tweaks_switch');
            let background_tweaks_revealer = app_prefs_builder.get_object('background_tweaks_revealer');
            background_tweaks_switch.set_active(app_settings.get_boolean(SETTINGS_ENABLE_BACKGROUND_TWEAKS));
            background_tweaks_revealer.set_reveal_child(background_tweaks_switch.get_active());
            background_tweaks_switch.connect('state-set', Lang.bind(this, function(widget, state) {
                temp_app_settings.background_tweaks = state;
                background_tweaks_revealer.set_reveal_child(state);
            }));

            let _maximum_scale = app_prefs_builder.get_object('maximum_scale');
            /* Init value. */
            _maximum_scale.adjustment.set_value(app_settings.get_int(SETTINGS_MAXIMIZED_OPACITY));
            /* Add formatting */
            _maximum_scale.connect('format-value', Lang.bind(this, function(scale, value) {
                return (((value / SCALE_FACTOR) * 100).toFixed(0) + '%'); // eslint-disable-line no-magic-numbers
            }));
            _maximum_scale.connect('value-changed', Lang.bind(this, function(widget) {
                temp_app_settings.maximum_opacity = widget.adjustment.get_value();
            }));

            let _always_trigger = app_prefs_builder.get_object('always_trigger');
            _always_trigger.connect('toggled', Lang.bind(this, function(widget) {
                temp_app_settings.always_trigger = widget.get_active();
            }));

            {
                let trigger_key = null;
                if (path.indexOf('windowOverrides') !== -1) {
                    trigger_key = 'trigger-windows';
                } else {
                    trigger_key = 'trigger-apps';
                }
                let triggers = settings.get_strv(trigger_key);
                _always_trigger.set_active(triggers.indexOf(app_id) !== -1);
            }

            let _color_btn = app_prefs_builder.get_object('color_btn');

            let _panel_color = app_settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack();

            let css_color = 'rgba(' + _panel_color[RED] + ',' + _panel_color[GREEN] + ',' + _panel_color[BLUE] + ', 1.0)';
            let scaled_color = new Gdk.RGBA();
            if (scaled_color.parse(css_color))
                _color_btn.set_rgba(scaled_color);

            _color_btn.connect('color-set', Lang.bind(this, function(color_btn) {
                let color = Util.gdk_to_css_color(color_btn.get_rgba());
                let rgb = [color.red, color.green, color.blue];

                temp_app_settings.panel_color = rgb;
            }));

            dialog.show_all();

            let response = dialog.run();

            if (response === Gtk.ResponseType.APPLY) {
                if (temp_app_settings.background_tweaks !== null)
                    app_settings.set_value(SETTINGS_ENABLE_BACKGROUND_TWEAKS, new GLib.Variant('b', temp_app_settings.background_tweaks));
                if (temp_app_settings.panel_color !== null)
                    app_settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('(iii)', temp_app_settings.panel_color));
                if (temp_app_settings.maximum_opacity !== null)
                    app_settings.set_value(SETTINGS_MAXIMIZED_OPACITY, new GLib.Variant('i', temp_app_settings.maximum_opacity));
                if (temp_app_settings.always_trigger !== null) {
                    let trigger_key = null;

                    if (path.indexOf('windowOverrides') !== -1) {
                        trigger_key = 'trigger-windows';
                    } else {
                        trigger_key = 'trigger-apps';
                    }

                    let triggers = settings.get_strv(trigger_key);
                    let index = triggers.indexOf(app_id);

                    if (temp_app_settings.always_trigger && index === -1) {
                        triggers.push(app_id);
                    } else if (!temp_app_settings.always_trigger && index !== -1) {
                        triggers.splice(index, 1);
                    }
                    settings.set_strv(trigger_key, triggers);
                }

                for (let extra of extras) {
                    let extra_custom_path = path + '' + extra + '/';
                    let extra_obj = Convenience.getSchemaObj('org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides');
                    let extra_settings = new Gio.Settings({ path: extra_custom_path, settings_schema: extra_obj });

                    if (temp_app_settings.background_tweaks !== null)
                        extra_settings.set_value(SETTINGS_ENABLE_BACKGROUND_TWEAKS, new GLib.Variant('b', temp_app_settings.background_tweaks));
                    if (temp_app_settings.panel_color !== null)
                        extra_settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('(iii)', temp_app_settings.panel_color));
                    if (temp_app_settings.maximum_opacity !== null)
                        extra_settings.set_value(SETTINGS_MAXIMIZED_OPACITY, new GLib.Variant('i', temp_app_settings.maximum_opacity));
                    if (temp_app_settings.always_trigger !== null) {
                        let trigger_key = null;

                        if (path.indexOf('windowOverrides') !== -1) {
                            trigger_key = 'trigger-windows';
                        } else {
                            trigger_key = 'trigger-apps';
                        }

                        let triggers = settings.get_strv(trigger_key);
                        let index = triggers.indexOf(app_id);

                        if (temp_app_settings.always_trigger && index === -1) {
                            triggers.push(app_id);
                        } else if (!temp_app_settings.always_trigger && index !== -1) {
                            triggers.splice(index, 1);
                        }
                        settings.set_strv(trigger_key, triggers);
                    }
                }
            }

            content_area.remove(app_prefs_builder.get_object('main_box'));
            dialog.destroy();
        });

        let app_cfg = function(app_name, app_id) {
            cfg.call(this, app_name, app_id, '/org/gnome/shell/extensions/dynamic-panel-transparency/appOverrides/');
        };
        let window_cfg = function(name, wm_class) {
            cfg.call(this, wm_class, wm_class, '/org/gnome/shell/extensions/dynamic-panel-transparency/windowOverrides/');
        };
        let tweak_cfg = function(name, wm_class, extra_wm_class) {
            cfg.call(this, name, wm_class, '/org/gnome/shell/extensions/dynamic-panel-transparency/windowOverrides/', extra_wm_class);
        };

        for (let override of app_overrides) {
            let app_info = Gio.DesktopAppInfo.new(override);
            if (app_info) {
                let row = new AppRow.AppRow(app_info, app_cfg, rmv);
                row.show_all();
                app_list.add(row);
            }
        }

        let current_tweaks = [];

        for (let override of window_overrides) {
            let tweak = Tweaks.by_wm_class(override);
            if (tweak) {
                let found = false;

                for (let added_tweak of current_tweaks) {
                    for (let wm_class of added_tweak.wm_class) {
                        if (tweak.wm_class.indexOf(wm_class) !== -1) {
                            found = true;
                        }
                    }
                }
                if (!found) {
                    let extra_wm_class = tweak.wm_class.length <= 1 ? [] : tweak.wm_class.slice(1);
                    let row = new AppRow.CustomRow(tweak.name, tweak.wm_class[0], tweak_cfg, tweak_rmv, extra_wm_class);
                    row.show_all();
                    app_list.add(row);
                    current_tweaks.push(tweak);
                }
            } else {
                let row = new AppRow.CustomRow(override, override, window_cfg, window_rmv);
                row.show_all();
                app_list.add(row);
            }
        }

        let add = new AppRow.AddAppRow();
        add.btn.connect('clicked', Lang.bind(this, function() {
            Gio.Application.get_default().mark_busy();
            let overrides = settings.get_strv('app-overrides');
            let a2 = new AppChooser.AppChooser(main_widget.get_toplevel(), overrides);
            a2.show_all();
            Gio.Application.get_default().unmark_busy();
            let response = a2.run();
            if (response === Gtk.ResponseType.OK) {
                let selected_app = a2.get_selected_app();
                if (selected_app) {
                    if (typeof selected_app === 'string') {
                        let tweak = Tweaks.by_uuid(selected_app);
                        if (tweak) {
                            let row = new AppRow.CustomRow(tweak.name, tweak.wm_class[0], tweak_cfg, tweak_rmv, tweak.wm_class.slice(1));
                            row.show_all();
                            app_list.add(row);
                            overrides = settings.get_strv('window-overrides');
                            for (let wm_class of tweak.wm_class) {
                                if (overrides.indexOf(wm_class) === -1) {
                                    overrides.push(wm_class);
                                }
                            }
                            settings.set_strv('window-overrides', overrides);

                            if (!Util.is_undef(tweak.trigger) && tweak.trigger) {
                                let triggers = settings.get_strv('trigger-windows');
                                for (let wm_class of tweak.wm_class) {
                                    if (triggers.indexOf(wm_class) === -1) {
                                        triggers.push(wm_class);
                                    }
                                }
                                settings.set_strv('trigger-windows', triggers);
                            }
                        }
                    } else {
                        let row = new AppRow.AppRow(selected_app, app_cfg, rmv);
                        row.show_all();
                        app_list.add(row);
                        overrides = settings.get_strv('app-overrides');
                        if (overrides.indexOf(selected_app.get_id()) === -1) {
                            overrides.push(selected_app.get_id());
                        }
                        settings.set_strv('app-overrides', overrides);
                    }
                }
            }
            a2.destroy();
        }));

        extra_btn.connect('clicked', Lang.bind(this, function() {
            if (main_notebook.get_current_page() === Page.APP_TWEAKS) {

                let dialog = new Gtk.Dialog({
                    modal: true,
                    title: _("Add a Custom WM_CLASS")
                });

                dialog.add_button(gtk30_("_Cancel"), Gtk.ResponseType.CANCEL);
                dialog.add_button(gtk30_("_OK"), Gtk.ResponseType.OK);

                let content_area = dialog.get_content_area();
                content_area.add(builder.get_object('wm_class_contents'));

                let revealer = builder.get_object('error_revealer');
                let entry = builder.get_object('wm_class_entry');

                dialog.connect('response', Lang.bind(this, function(dialog, response) {
                    if (response === Gtk.ResponseType.OK) {
                        let text = entry.get_text();
                        if (!text) {
                            revealer.set_reveal_child(true);
                            GObject.signal_stop_emission_by_name(dialog, 'response');
                        }
                    }
                }));

                dialog.set_size_request(400, 100); // eslint-disable-line
                dialog.show_all();

                let response = dialog.run();
                let text = entry.get_text();

                if (response === Gtk.ResponseType.OK) {
                    let row = new AppRow.CustomRow(text, window_cfg, window_rmv);
                    row.show_all();
                    app_list.add(row);
                    let overrides = settings.get_strv('window-overrides');
                    if (overrides.indexOf(text) === -1) {
                        overrides.push(text);
                        settings.set_strv('window-overrides', overrides);
                    }
                }

                content_area.remove(builder.get_object('wm_class_contents'));
                dialog.destroy();
            }
        }));
        app_list.add(add);
    }

    /* Util function to find UI elements in a GTK dialog. */
    function find(container, names, level = 0) {
        let target = null;
        container.forall(function(child) {
            if (child.get_name() === names[level]) {
                if (++level === names.length) {
                    target = child;
                } else {
                    target = find(child, names, level);
                }
            }
        });
        return target;
    }

    /* Setup About Tab */
    {
        /* Find the stack */
        let about_dialog = builder.get_object('about_dialog');
        about_dialog.set_version('v' + Me.metadata['version']);

        let contents = about_dialog.get_child();

        let stack = find(contents, ['box', 'stack']);

        /* Find the license page. */
        let license_page = find(stack, ['license_page']);

        /* Get rid of that pesky license page. */
        stack.remove(license_page);

        /* Strip the dialog of its content. */
        about_dialog.remove(contents);

        /* Link the stack switcher (I hate header bars sometimes.) */
        let stack_switcher = builder.get_object('about_switcher');
        stack_switcher.set_stack(stack);

        /* Transfer the contents. */
        let about_box = builder.get_object('about_box');
        about_box.add(contents);

        /* Add some space to the about page. Was a little cramped... */
        let found_box = find(stack, ['page_vbox', 'hbox']);
        if (found_box === null) {
            found_box = find(stack, ['page_vbox']);
        }

        if (found_box !== null) {
            let website_label = find(found_box, ['website_label']);

            if (website_label !== null) {
                found_box.remove(website_label);

                let new_label = Gtk.LinkButton.new_with_label('http://evanwelsh.com/dynamic-panel-transparency', 'Website');

                new_label.set_margin_top(WEBSITE_LABEL_TOP_MARGIN);
                new_label.set_margin_bottom(WEBSITE_LABEL_BOTTOM_MARGIN);
                found_box.add(new_label);
            }
        }
    }

    let widget_parent = main_widget.get_toplevel();

    /* Fix revealer sizing issues. */
    widget_parent.connect('realize', Lang.bind(this, function() {
        panel_revealer.set_reveal_child(false);
        extra_btn.hide();
        /* We have to regrab this object as it isn't in this scope. */
        let text_color_revealer = builder.get_object('text_color_revealer');
        text_color_revealer.set_reveal_child(settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR));
        let background_color_revealer = builder.get_object('background_color_revealer');
        background_color_revealer.set_reveal_child(settings.get_boolean(SETTINGS_ENABLE_BACKGROUND_COLOR));
        let opacity_revealer = builder.get_object('opacity_revealer');
        opacity_revealer.set_reveal_child(settings.get_boolean(SETTINGS_ENABLE_OPACITY));
    }));

    let restart_dialog = builder.get_object('restart_dialog');

    /* Setup buttons. */
    let apply_btn = builder.get_object('apply_btn');
    let cancel_btn = builder.get_object('cancel_btn');

    apply_btn.connect('clicked', Lang.bind(this, function() {
        let widget_parent = main_widget.get_toplevel();
        if (temp_settings.restart_required()) {
            let response = restart_dialog.run();
            restart_dialog.destroy();

            if (response === Gtk.ResponseType.YES) {
                let bus = Gio.bus_get_sync(Gio.BusType.SESSION, null);
                let proxy = Gio.DBusProxy.new_sync(bus, Gio.DBusProxyFlags.NONE, null, 'org.gnome.SessionManager', '/org/gnome/SessionManager', 'org.gnome.SessionManager', null);

                proxy.call('Logout', new GLib.Variant('(u)', [0]), Gio.DBusCallFlags.NONE, DBUS_TIMEOUT, null, Lang.bind(this, function() {
                    temp_settings.apply();
                    widget_parent.close();
                }));

                return;
            }
        }
        temp_settings.apply();
        widget_parent.close();
    }));

    cancel_btn.connect('clicked', Lang.bind(this, function() {
        let widget_parent = main_widget.get_toplevel();
        widget_parent.close();
    }));

    /* Return main widget. */
    main_widget.show_all();
    return main_widget;
}