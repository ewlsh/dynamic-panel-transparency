/* exported init, buildPrefsWidget */

const Lang = imports.lang;

const GObject = imports.gi.GObject;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;
const Gio = imports.gi.Gio;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Util = Me.imports.util;
const AppChooser = imports.app_chooser;
const AppRow = imports.app_row;
const DemoPanel = imports.demo_panel;

const Gettext = imports.gettext.domain('dynamic-panel-transparency');
const _ = Gettext.gettext;

const gtk30_ = imports.gettext.domain('gtk30').gettext;

const Dictionary = {
    'default': _("default"),
    'App Tweaks': _("App Tweaks")
};

/* Settings Keys */
const SETTINGS_HIDE_CORNERS = 'hide-corners';
const SETTINGS_TRANSITION_SPEED = 'transition-speed';
const SETTINGS_TRANSITION_TYPE = 'transition-type';
const SETTINGS_TEXT_SHADOW = 'text-shadow';
const SETTINGS_TEXT_SHADOW_COLOR = 'text-shadow-color';
const SETTINGS_FORCE_ANIMATION = 'force-animation';
const SETTINGS_UNMAXIMIZED_OPACITY = 'unmaximized-opacity';
const SETTINGS_MAXIMIZED_OPACITY = 'maximized-opacity';
const SETTINGS_PANEL_COLOR = 'panel-color';
const SETTINGS_ICON_SHADOW = 'icon-shadow';
const SETTINGS_TEXT_COLOR = 'text-color';
const SETTINGS_ICON_SHADOW_COLOR = 'icon-shadow-color';
const SETTINGS_ICON_SHADOW_POSITION = 'icon-shadow-position';
const SETTINGS_TEXT_SHADOW_POSITION = 'text-shadow-position';
const SETTINGS_MAXIMIZED_TEXT_COLOR = 'maximized-text-color';
const SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR = 'enable-maximized-text-color';
const SETTINGS_ENABLE_TEXT_COLOR = 'enable-text-color';
const SETTINGS_REMOVE_PANEL_STYLING = 'remove-panel-styling';
const SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR = 'enable-overview-text-color';
const SETTINGS_ENABLE_BACKGROUND_TWEAKS = 'enable-background-tweaks';

/* Color Array Indices */
const RED = 0;
const GREEN = 1;
const BLUE = 2;
const ALPHA = 3;

/* Color Scaling Factor (Byte to Decimal) */
const SCALE_FACTOR = 255.9999999;

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
        store: function (key, value) {
            this.storage[key] = value;
        }, store_enum: function (key, value) {
            this.enum_storage[key] = value;
        }, get: function (key) {
            let a = this.enum_storage[key];
            if (!Util.is_undef(a))
                return this.enum_storage[key];
            return this.storage[key];
        }, has: function (key) {
            let a = this.get(key);
            return (typeof (a) !== 'undefined' && a !== null);
        }, apply: function () {
            Object.keys(this.enum_storage).forEach(function (key) {
                if (this.has(key)) {
                    settings.set_enum(key, this.get(key));
                }
            }, this);
            Object.keys(this.storage).forEach(function (key) {
                if (this.has(key)) {
                    settings.set_value(key, this.get(key));
                }
            }, this);
        }, restart_required: function (b) {
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
    builder.add_from_file(Me.path + '/ui/prefs.ui');

    /* Main Widget (Grid) */
    let main_widget = builder.get_object('main_box');

    /* Tabs */
    let main_notebook = builder.get_object('main_notebook');

    /* Hides demo panel on irrelevant pages. */
    let panel_revealer = builder.get_object('panel_revealer');

    /* Used for special functions occasionally. */
    let extra_btn = builder.get_object('extra_btn');


    /* Only show the panel & extra button on relevant pages. */
    main_notebook.connect('switch-page', Lang.bind(this, function (notebook, page, index) {
        if (index === 1 || index === 2) {
            panel_revealer.set_reveal_child(true);
        } else {
            panel_revealer.set_reveal_child(false);
        }

        if (index === 3) {
            extra_btn.show();
        } else {
            extra_btn.hide();
        }
    }));

    /* Panel used to demonstrate the user's settings. */
    // TODO: actually take from settings
    let panel_background = builder.get_object('panel_demo_background');
    let panel_demo = new DemoPanel.DemoPanel(panel_background);
    panel_demo.set_background_color({ red: 0, green: 0, blue: 0, alpha: 1.0 });
    panel_demo.set_text_color({ red: 255, green: 255, blue: 255, alpha: 1.0 });
    panel_demo.set_opacity(255);
    {
        /* Transition speed control */
        let speed_scale = builder.get_object('speed_scale');
        /* Init value. */
        speed_scale.adjustment.set_value(settings.get_int(SETTINGS_TRANSITION_SPEED));
        /* Add default marking. */
        speed_scale.add_mark(1000, Gtk.PositionType.BOTTOM, Dictionary['default']);
        /* Add formatting */
        speed_scale.connect('format-value', Lang.bind(this, function (scale, value) {
            return value + 'ms';
        }));
        speed_scale.connect('value-changed', Lang.bind(this, function (widget) {
            temp_settings.store(SETTINGS_TRANSITION_SPEED, new GLib.Variant('i', widget.adjustment.get_value()));
        }));

        let transition_type_box = builder.get_object('transition_type_box');
        transition_type_box.connect('changed', Lang.bind(this, function (box) {
            temp_settings.store('transition-type', new GLib.Variant('i', +(box.get_active_id())));
        }));
        transition_type_box.set_active_id('' + settings.get_int(SETTINGS_TRANSITION_TYPE) + '');


        let force_transition = builder.get_object('force_transition_check');
        force_transition.set_active(settings.get_boolean(SETTINGS_FORCE_ANIMATION));

        force_transition.connect('toggled', Lang.bind(this, function (widget) {
            temp_settings.store(SETTINGS_FORCE_ANIMATION, new GLib.Variant('b', widget.get_active()));
            temp_settings.restart_required(true);
        }));
    }

    /* Setup foreground tab */
    {
        /* Used for version-specific properties */
        let shell_version = Util.get_shell_version();


        let text_color_switch = builder.get_object('text_color_switch');
        let text_color_revealer = builder.get_object('text_color_revealer');

        text_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR));
        text_color_switch.connect('state-set', Lang.bind(this, function (widget, state) {
            temp_settings.store(SETTINGS_ENABLE_TEXT_COLOR, new GLib.Variant('b', state));
            text_color_revealer.set_reveal_child(state);
        }));

        let maximized_text_color_switch = builder.get_object('maximized_text_color_check');
        maximized_text_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR));

        maximized_text_color_switch.connect('toggled', Lang.bind(this, function (widget) {
            temp_settings.store(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR, new GLib.Variant('b', widget.get_active()));
        }));

        let overview_text_color_switch = builder.get_object('overview_text_color_check');
        overview_text_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR));

        overview_text_color_switch.connect('toggled', Lang.bind(this, function (widget) {
            temp_settings.store(SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR, new GLib.Variant('b', widget.get_active()));
        }));

        let remove_panel_styling_check = builder.get_object('remove_panel_styling_check');
        remove_panel_styling_check.set_active(settings.get_boolean(SETTINGS_REMOVE_PANEL_STYLING));

        remove_panel_styling_check.connect('toggled', Lang.bind(this, function (widget) {
            temp_settings.store(SETTINGS_REMOVE_PANEL_STYLING, new GLib.Variant('b', widget.get_active()));
            temp_settings.restart_required(true);
        }));


        let maximized_text_color_btn = builder.get_object('maximized_text_color_btn');
        let maximized_text_color = settings.get_value(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();

        let css_color = 'rgba(' + maximized_text_color[RED] + ',' + maximized_text_color[GREEN] + ',' + maximized_text_color[BLUE] + ', 1.0)';
        let scaled_color = new Gdk.RGBA();

        if (scaled_color.parse(css_color))
            maximized_text_color_btn.set_rgba(scaled_color);
        maximized_text_color_btn.connect('color-set', Lang.bind(this, function (color_btn) {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let rgb = [color.red, color.green, color.blue];

            temp_settings.store(SETTINGS_MAXIMIZED_TEXT_COLOR, new GLib.Variant('(iii)', rgb));
            temp_settings.restart_required(true);
            panel_demo.set_text_color({ red: rgb[RED], green: rgb[GREEN], blue: rgb[BLUE], alpha: 1.0 });
        }));


        let text_color_btn = builder.get_object('text_color_btn');
        let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();

        css_color = 'rgba(' + text_color[RED] + ',' + text_color[GREEN] + ',' + text_color[BLUE] + ', 1.0)';
        scaled_color = new Gdk.RGBA();
        if (scaled_color.parse(css_color))
            text_color_btn.set_rgba(scaled_color);

        text_color_btn.connect('color-set', Lang.bind(this, function (color_btn) {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let rgb = [color.red, color.green, color.blue];

            temp_settings.store(SETTINGS_TEXT_COLOR, new GLib.Variant('(iii)', rgb));
            temp_settings.restart_required(true);
            panel_demo.set_text_color({ red: rgb[RED], green: rgb[GREEN], blue: rgb[BLUE], alpha: 1.0 });
        }));


        let text_shadow_switch = builder.get_object('text_shadow_switch');
        text_shadow_switch.set_active(settings.get_boolean(SETTINGS_TEXT_SHADOW));

        text_shadow_switch.connect('state-set', Lang.bind(this, function (widget, state) {
            temp_settings.store(SETTINGS_TEXT_SHADOW, new GLib.Variant('b', state));
            temp_settings.restart_required(true);
        }));

        let text_shadow_vertical_offset = builder.get_object('text_shadow_vertical_offset');
        temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, settings.get_value(SETTINGS_TEXT_SHADOW_POSITION));
        text_shadow_vertical_offset.set_value(settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[1]);
        text_shadow_vertical_offset.connect('value-changed', Lang.bind(this, function (widget) {
            let position = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
            position[1] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);
        }));

        let text_shadow_horizontal_offset = builder.get_object('text_shadow_horizontal_offset');
        text_shadow_horizontal_offset.set_value(settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[0]);
        text_shadow_horizontal_offset.connect('value-changed', Lang.bind(this, function (widget) {
            let position = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
            position[0] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);
        }));

        let text_shadow_radius = builder.get_object('text_shadow_radius');
        text_shadow_radius.set_value(settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[2]);
        text_shadow_radius.connect('value-changed', Lang.bind(this, function (widget) {
            let position = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
            position[2] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);
        }));

        let text_shadow_color_btn = builder.get_object('text_shadow_color');

        if (shell_version.major === 3 && shell_version.minor > 18) {
            text_shadow_color_btn.show_editor = true;
        }

        let text_shadow_color = settings.get_value(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();

        css_color = 'rgba(' + text_shadow_color[RED] + ',' + text_shadow_color[GREEN] + ',' + text_shadow_color[BLUE] + ',' + text_shadow_color[ALPHA].toFixed(2) + ')';
        scaled_color = new Gdk.RGBA();
        if (scaled_color.parse(css_color))
            text_shadow_color_btn.set_rgba(scaled_color);

        text_shadow_color_btn.connect('color-set', Lang.bind(this, function (color_btn) {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let alpha = +(color_btn.get_rgba().alpha.toFixed(2));

            let rgba = [color.red, color.green, color.blue, alpha];
            temp_settings.store(SETTINGS_TEXT_SHADOW_COLOR, new GLib.Variant('(iiid)', rgba));
            temp_settings.restart_required(true);
        }));


        let icon_shadow = builder.get_object('icon_shadow_switch');
        icon_shadow.set_active(settings.get_boolean(SETTINGS_ICON_SHADOW));

        icon_shadow.connect('state-set', Lang.bind(this, function (widget, state) {
            temp_settings.store(SETTINGS_ICON_SHADOW, new GLib.Variant('b', state));
            temp_settings.restart_required(true);
        }));

        let icon_shadow_vertical_offset = builder.get_object('icon_shadow_vertical_offset');

        temp_settings.store(SETTINGS_ICON_SHADOW_POSITION, settings.get_value(SETTINGS_ICON_SHADOW_POSITION));
        icon_shadow_vertical_offset.set_value(settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[1]);
        icon_shadow_vertical_offset.connect('value-changed', Lang.bind(this, function (widget) {
            let position = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
            position[1] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);
        }));
        let icon_shadow_horizontal_offset = builder.get_object('icon_shadow_horizontal_offset');
        icon_shadow_horizontal_offset.set_value(settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[0]);
        icon_shadow_horizontal_offset.connect('value-changed', Lang.bind(this, function (widget) {
            let position = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
            position[0] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);
        }));
        let icon_shadow_radius = builder.get_object('icon_shadow_radius');
        icon_shadow_radius.set_value(settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[2]);
        icon_shadow_radius.connect('value-changed', Lang.bind(this, function (widget) {
            let position = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
            position[2] = widget.get_value_as_int();
            temp_settings.store(SETTINGS_ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
            temp_settings.restart_required(true);
        }));

        let icon_shadow_color_btn = builder.get_object('icon_shadow_color');

        if (shell_version.major === 3 && shell_version.minor > 18) {
            icon_shadow_color_btn.show_editor = true;
        }

        let icon_shadow_color = settings.get_value(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();

        css_color = 'rgba(' + icon_shadow_color[RED] + ',' + icon_shadow_color[GREEN] + ',' + icon_shadow_color[BLUE] + ',' + icon_shadow_color[ALPHA].toFixed(2) + ')';
        scaled_color = new Gdk.RGBA();
        if (scaled_color.parse(css_color))

            icon_shadow_color_btn.set_rgba(scaled_color);

        icon_shadow_color_btn.connect('color-set', Lang.bind(this, function (color_btn) {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let alpha = +(color_btn.get_rgba().alpha.toFixed(2));


            let rgba = [color.red, color.green, color.blue, alpha];

            //settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('ai', rgb));
            temp_settings.store(SETTINGS_ICON_SHADOW_COLOR, new GLib.Variant('(iiid)', rgba));
            //panel_demo.set_background_color({ red: rgb[0], green: rgb[1], blue: rgb[2] });
            temp_settings.restart_required(true);
        }));
    }



    /* Setup Background Tab */
    {
        /* Maximum opacity control */
        let maximum_scale = builder.get_object('maximum_scale');
        /* Init value. */
        maximum_scale.adjustment.set_value(settings.get_int(SETTINGS_MAXIMIZED_OPACITY));
        /* Add formatting */
        maximum_scale.connect('format-value', Lang.bind(this, function (scale, value) {
            return (((value / SCALE_FACTOR) * 100).toFixed(0) + '%');
        }));
        maximum_scale.connect('value-changed', Lang.bind(this, function (widget) {
            panel_demo.set_opacity(widget.get_value(), true);
            temp_settings.store(SETTINGS_MAXIMIZED_OPACITY, new GLib.Variant('i', widget.adjustment.get_value()));
            //panel_demo.fade_in();
        }));



        /* Minimum opacity control */
        let minimum_scale = builder.get_object('minimum_scale');
        /* Init value. */
        minimum_scale.adjustment.set_value(settings.get_int(SETTINGS_UNMAXIMIZED_OPACITY));
        /* Add formatting */
        minimum_scale.connect('format-value', Lang.bind(this, function (scale, value) {
            return ((value / SCALE_FACTOR) * 100).toFixed(0) + '%';
        }));
        minimum_scale.connect('value-changed', Lang.bind(this, function (widget) {
            panel_demo.set_opacity(widget.get_value(), true);
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
        color_btn.connect('color-set', Lang.bind(this, function (color_btn) {
            //let alpha = +(color_btn.get_rgba().alpha.toFixed(2));
            let color = Util.gdk_to_css_color(color_btn.get_rgba());


            let rgb = [color.red, color.green, color.blue];
            temp_settings.store(SETTINGS_PANEL_COLOR, new GLib.Variant('ai', rgb));
            panel_demo.set_background_color({ red: rgb[0], green: rgb[1], blue: rgb[2] });
        }));


        let hide_corners = builder.get_object('hide_corners_check');
        hide_corners.set_active(settings.get_boolean(SETTINGS_HIDE_CORNERS));

        hide_corners.connect('toggled', Lang.bind(this, function (widget) {
            temp_settings.store(SETTINGS_HIDE_CORNERS, new GLib.Variant('b', widget.get_active()));
        }));
    }



    /* Setup App Settings Tab */
    {
        let app_list = builder.get_object('app_list');
        app_list.set_sort_func(Lang.bind(this, function (a, b) {
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

        let window_rmv = Lang.bind(this, function (wm_class, row) {
            let overrides = settings.get_strv('window-overrides');
            let index = overrides.indexOf(wm_class);

            overrides = overrides.splice(0, index).concat(overrides.splice(index + 1, overrides.length));
            settings.set_strv('window-overrides', overrides);
            app_list.remove(row);
        });
        let rmv = Lang.bind(this, function (app_id, row) {
            let overrides = settings.get_strv('app-overrides');
            let index = overrides.indexOf(app_id);

            overrides = overrides.splice(0, index).concat(overrides.splice(index + 1, overrides.length));
            settings.set_strv('app-overrides', overrides);
            app_list.remove(row);
        });

        let cfg = Lang.bind(this, function (app_name, app_id, path) {
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
            app_prefs_builder.add_from_file(Me.path + '/ui/app-prefs.ui');

            let dialog = new Gtk.Dialog({
                use_header_bar: true,
                modal: true,
                title: app_name
            });

            dialog.get_header_bar().set_subtitle(Dictionary['App Tweaks']);

            dialog.add_button(gtk30_('_Cancel'), Gtk.ResponseType.CANCEL);
            dialog.add_button(gtk30_('_Apply'), Gtk.ResponseType.APPLY);

            dialog.transient_for = main_widget.get_toplevel();
            log(path);
            log(app_id);
            log(app_name);
            let custom_path = path + '' + app_id + '/';
            let obj = Convenience.getSchemaObj('org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides');
            log('path gen: ' + custom_path);
            let app_settings = new Gio.Settings({ path: custom_path, settings_schema: obj });


            let content_area = dialog.get_content_area();
            content_area.add(app_prefs_builder.get_object('main_box'));

            let background_tweaks_switch = app_prefs_builder.get_object('background_tweaks_switch');
            let background_tweaks_revealer = app_prefs_builder.get_object('background_tweaks_revealer');
            background_tweaks_switch.set_active(app_settings.get_boolean(SETTINGS_ENABLE_BACKGROUND_TWEAKS));
            background_tweaks_revealer.set_reveal_child(background_tweaks_switch.get_active());
            background_tweaks_switch.connect('state-set', Lang.bind(this, function (widget, state) {
                temp_app_settings.background_tweaks = true;
                background_tweaks_revealer.set_reveal_child(state);
            }));

            let _maximum_scale = app_prefs_builder.get_object('maximum_scale');
            /* Init value. */
            _maximum_scale.adjustment.set_value(app_settings.get_int(SETTINGS_MAXIMIZED_OPACITY));
            /* Add formatting */
            _maximum_scale.connect('format-value', Lang.bind(this, function (scale, value) {
                return (((value / SCALE_FACTOR) * 100).toFixed(0) + '%');
            }));
            _maximum_scale.connect('value-changed', Lang.bind(this, function (widget) {
                temp_app_settings.maximum_opacity = widget.adjustment.get_value();
            }));
            let _always_trigger = app_prefs_builder.get_object('always_trigger');
            _always_trigger.connect('toggled', Lang.bind(this, function (widget) {
                temp_app_settings.always_trigger = widget.get_active();
            }));

            let _color_btn = app_prefs_builder.get_object('color_btn');

            let _panel_color = app_settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack();

            let css_color = 'rgba(' + _panel_color[RED] + ',' + _panel_color[GREEN] + ',' + _panel_color[BLUE] + ', 1.0)';
            let scaled_color = new Gdk.RGBA();
            if (scaled_color.parse(css_color))
                _color_btn.set_rgba(scaled_color);

            _color_btn.connect('color-set', Lang.bind(this, function (color_btn) {
                let color = Util.gdk_to_css_color(color_btn.get_rgba());
                let rgb = [color.red, color.green, color.blue];

                temp_app_settings.panel_color = rgb;
                panel_demo.set_background_color({ red: rgb[0], green: rgb[1], blue: rgb[2] });
            }));

            dialog.connect('response', Lang.bind(this, function (dialog, response) {
                if (response === Gtk.ResponseType.APPLY) {
                    if (temp_app_settings.background_tweaks !== null)
                        app_settings.set_value(SETTINGS_ENABLE_BACKGROUND_TWEAKS, new GLib.Variant('b', temp_app_settings.background_tweaks));
                    if (temp_app_settings.panel_color !== null)
                        app_settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('(iii)', temp_app_settings.panel_color));
                    if (temp_app_settings.maximum_opacity !== null)
                        app_settings.set_value(SETTINGS_MAXIMIZED_OPACITY, new GLib.Variant('i', temp_app_settings.maximum_opacity));
                    if (temp_app_settings.always_trigger !== null) {
                        let trigger_key = null;
                        if (path.indexOf('window') !== -1) {
                            trigger_key = 'trigger-windows';
                        } else {
                            trigger_key = settings.get_strv('trigger-apps');
                        }

                        let triggers = settings.get_strv(trigger_key);

                        if (temp_app_settings.always_trigger) {
                            triggers.push(app_id);
                            settings.set_strv(trigger_key, triggers);
                        } else {
                            let index = triggers.indexOf(app_id);
                            if (index !== -1) {
                                triggers = triggers.splice(0, index).concat(triggers.splice(index + 1, triggers.length));
                                settings.set_strv(trigger_key, triggers);
                            }
                        }
                    }

                    //dialog.close();
                } else if (response === Gtk.ResponseType.CANCEL) {
                    //dialog.close();
                }
            }));
            dialog.show_all();
            dialog.run();
            // HM?
            dialog.hide();
        });

        let app_cfg = function (a, b) { cfg.call(this, a, b, '/org/gnome/shell/extensions/dynamic-shell-transparency/appOverrides/'); };
        let window_cfg = function (a) { cfg.call(this, a, a, '/org/gnome/shell/extensions/dynamic-shell-transparency/windowOverrides/'); };

        for (let override of app_overrides) {
            let app_info = Gio.DesktopAppInfo.new(override);
            if (app_info) {
                let row = new AppRow.AppRow(app_info, app_cfg, rmv);
                row.show_all();
                app_list.add(row);
            }
        }

        for (let override of window_overrides) {
            let row = new AppRow.CustomRow(override, window_cfg, window_rmv);
            //log('adding override: ' + override);
            row.show_all();
            app_list.add(row);
        }

        let add = new AppRow.AddAppRow();
        add.btn.connect('clicked', Lang.bind(this, function () {
            Gio.Application.get_default().mark_busy();
            let overrides = settings.get_strv('app-overrides');
            let a2 = new AppChooser.AppChooser(main_widget.get_toplevel(), overrides);
            a2.show_all();
            Gio.Application.get_default().unmark_busy();
            let response = a2.run();
            if (response === Gtk.ResponseType.OK) {
                let selected_app = a2.get_selected_app();
                if (selected_app) {
                    let row = new AppRow.AppRow(selected_app, app_cfg, rmv);
                    row.show_all();
                    app_list.add(row);
                    overrides = settings.get_strv('app-overrides');
                    overrides.push(selected_app.get_id());
                    settings.set_strv('app-overrides', overrides);
                }
            }
            a2.destroy();
        }));

        extra_btn.connect('clicked', Lang.bind(this, function () {
            log('as');
            if (main_notebook.get_current_page() === 3) {
                /* let custom_entry = builder.get_object('custom_entry');
                 let custom_text_entry = builder.get_object('custom_text_entry');

                 custom_entry.transient_for = main_widget.get_toplevel();


                 let response = custom_entry.run();
                 let text = custom_text_entry.get_text();

                 // Prevent empty content.
                 while (response === Gtk.ResponseType.OK && (Util.is_undef(text) || text === null || text === '')) {
                     response = custom_entry.run();
                 }

                 if (response === Gtk.ResponseType.OK) {
                     let row = new AppRow.CustomRow(text, window_cfg, window_rmv);
                     row.show_all();
                     app_list.add(row);
                     let overrides = settings.get_strv('window-overrides');
                     overrides.push(text);
                     settings.set_strv('window-overrides', overrides);
                 }

                 custom_entry.hide();*/
                let dialog = new Gtk.Dialog({
                    //use_header_bar: true,
                    modal: true,
                    title: "Custom WM_CLASS"
                });

                //dialog.get_header_bar().set_subtitle();

                dialog.add_button(gtk30_('_Cancel'), Gtk.ResponseType.CANCEL);
                dialog.add_button(gtk30_('_OK'), Gtk.ResponseType.OK);


                let content_area = dialog.get_content_area();
                content_area.add(builder.get_object('wm_class_contents'));

                let revealer = builder.get_object('error_revealer');
                let entry = builder.get_object('wm_class_entry');

                dialog.connect('response', Lang.bind(this, function (dialog, response) {
                    if (response === Gtk.ResponseType.OK) {
                        let text = entry.get_text();
                        if ((Util.is_undef(text) || text === null || text === '')) {
                            revealer.set_reveal_child(true);
                            GObject.signal_stop_emission_by_name(dialog, 'response');
                        }
                    }
                }));


                dialog.show_all();

                let response = dialog.run();
                let text = entry.get_text();

                if (response === Gtk.ResponseType.OK) {
                    let row = new AppRow.CustomRow(text, window_cfg, window_rmv);
                    row.show_all();
                    app_list.add(row);
                    let overrides = settings.get_strv('window-overrides');
                    overrides.push(text);
                    settings.set_strv('window-overrides', overrides);
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
        container.forall(function (child) {
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
        let website_label = find(stack, ['page_vbox', 'hbox', 'website_label']);
        if (website_label !== null) {
            website_label.set_selectable(false);
            website_label.set_margin_top(20);
            website_label.set_margin_bottom(50);
        }
    }

    let widget_parent = main_widget.get_toplevel();

    /* Fix revealer sizing issues. */
    widget_parent.connect('realize', Lang.bind(this, function () {
        panel_revealer.set_reveal_child(false);
        extra_btn.hide();
        // We have to regrab this object as it isn't in this scope.
        let text_color_revealer = builder.get_object('text_color_revealer');
        text_color_revealer.set_reveal_child(settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR));
    }));


    let restart_dialog = builder.get_object('restart_dialog');

    restart_dialog.connect('response', Lang.bind(this, function (dialog, response) {
        if (response === Gtk.ResponseType.YES) {
            GLib.spawn_command_line_async('dbus-send --type=method_call --print-reply --dest=org.gnome.Shell /org/gnome/Shell org.gnome.Shell.Eval string:\'global.reexec_self()\'');
            restart_dialog.close();
        } else if (response === Gtk.ResponseType.NO) {
            restart_dialog.close();
        }
    }));

    /* Setup buttons. */
    let apply_btn = builder.get_object('apply_btn');
    let cancel_btn = builder.get_object('cancel_btn');

    apply_btn.connect('clicked', Lang.bind(this, function () {
        let widget_parent = main_widget.get_toplevel();
        if (temp_settings.restart_required()) {
            restart_dialog.run();
        }
        temp_settings.apply();
        widget_parent.close();
    }));

    cancel_btn.connect('clicked', Lang.bind(this, function () {
        let widget_parent = main_widget.get_toplevel();
        widget_parent.close();
    }));

    /* Return main widget. */
    main_widget.show_all();
    return main_widget;
}




