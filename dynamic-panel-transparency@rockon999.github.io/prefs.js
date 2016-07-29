const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;
const Gio = imports.gi.Gio;
const GObject = imports.gi.GObject;
const Lang = imports.lang;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Config = imports.misc.config;
const Tweener = imports.tweener.tweener;

const Gettext = imports.gettext.domain('dynamic-panel-transparency');
const _ = Gettext.gettext;

const Dictionary = {
    'Panel Color': _("Panel Color"),
    'Theme Source': _("Theme Source"),
    'Panel': _("Panel"),
    'Dash': _("Dash"),
    'default': _("default"),
    'Default': _("Default"),
};

/* Settings Keys */
const SETTINGS_HIDE_CORNERS = 'hide-corners';
const SETTINGS_TRANSITION_SPEED = 'transition-speed';
const SETTINGS_DETECT_THEME = 'detect-user-theme';
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
const SETTINGS_ICON_COLOR = 'icon-color';
const SETTINGS_MAXIMIZED_TEXT_COLOR = 'maximized-text-color';
const SETTINGS_USER_THEME_SOURCE = 'user-theme-source';
const SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR = 'enable-maximized-text-color';
const SETTINGS_ENABLE_TEXT_COLOR = 'enable-text-color';

/* Color Array Indices */
const RED = 0;
const GREEN = 1;
const BLUE = 2;

/* Color Scaling Factor (Byte to Decimal) */
const SCALE_FACTOR = 255.9999999;

function init() {
    Convenience.initTranslations();
}

function buildPrefsWidget() {
    let widget = getPrefsWidget();
    widget.show_all();
    return widget;
}

/* UI Setup */
function getPrefsWidget() {

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
            if (typeof (a) !== 'undefined' && a !== null)
                return this.enum_storage[key];
            return this.storage[key];
        }, has: function (key) {
            let a = this.get(key);
            return (typeof (a) !== 'undefined' && a !== null);
        }, apply: function () {
            for (let key in this.enum_storage) {
                if (this.has(key)) {
                    settings.set_enum(key, this.get(key));
                }
            }
            for (let key in this.storage) {
                if (this.has(key)) {
                    settings.set_value(key, this.get(key));
                }
            }
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


    main_notebook.connect('switch-page', Lang.bind(this, function (notebook, page, index) {
        if (index == 1 || index == 2) {
            panel_revealer.set_reveal_child(true);
        } else {
            panel_revealer.set_reveal_child(false);
        }
    }));

    /* Panel used for visual demostrations. */
    // TODO: actually take from settings
    let panel_background = builder.get_object('panel_demo_background');
    let panel_demo = new DemoPanel(panel_background);
    panel_demo.set_bg_color(new Gdk.RGBA({ red: 0, green: 0, blue: 0, alpha: 1.0 }));
    panel_demo.set_text_color(new Gdk.RGBA({ red: 255, green: 255, blue: 255, alpha: 1.0 }));
    panel_demo.set_opacity(255);

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
        //log('thing 1');
        //panel_demo.set_transition(widget.adjustment.get_value());
        temp_settings.store(SETTINGS_TRANSITION_SPEED, new GLib.Variant('i', widget.adjustment.get_value()));
    }));


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
        panel_demo.fade_in();
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
        // panel_demo.fade_out();
        temp_settings.store(SETTINGS_UNMAXIMIZED_OPACITY, new GLib.Variant('i', widget.adjustment.get_value()));
    }));



    let theme_switch = builder.get_object('theme_switch');
    theme_switch.set_active(settings.get_boolean(SETTINGS_DETECT_THEME));

    let detect_theme_label = builder.get_object('detect_theme_label');
    let theme_source_box = builder.get_object('theme_source_box');
    let theme_label = builder.get_object('theme_label');
    let theme_stack = builder.get_object('theme_stack');
    let color_btn = builder.get_object('color_btn');

    if (settings.get_boolean(SETTINGS_DETECT_THEME)) {
        detect_theme_label.set_sensitive(true);
        theme_label.set_label(Dictionary['Theme Source']);
        theme_stack.set_visible_child(theme_source_box);
    } else {
        detect_theme_label.set_sensitive(false);
        theme_label.set_label(Dictionary['Panel Color']);
        theme_stack.set_visible_child(color_btn);
    }

    theme_switch.connect('state-set', Lang.bind(this, function (widget, state) {
        if (state) {
            detect_theme_label.set_sensitive(true);
            theme_label.set_label(Dictionary['Theme Source']);
            theme_stack.set_visible_child(theme_source_box);
        } else {
            detect_theme_label.set_sensitive(false);
            theme_label.set_label(Dictionary['Panel Color']);
            theme_stack.set_visible_child(color_btn);
        }
        temp_settings.store(SETTINGS_DETECT_THEME, new GLib.Variant('b', state));
    }));

    theme_source_box.append_text(Dictionary['Panel']);
    theme_source_box.append_text(Dictionary['Dash']);
    theme_source_box.set_active(settings.get_enum(SETTINGS_USER_THEME_SOURCE));
    theme_source_box.connect('changed', Lang.bind(this, function (widget) {
        temp_settings.store_enum(SETTINGS_USER_THEME_SOURCE, widget.get_active());
    }));

    let text_color_switch = builder.get_object('text_color_switch');
    let maximized_text_color_switch = builder.get_object('maximized_text_color_switch');
    let text_color_revealer = builder.get_object('text_color_revealer');
    let maximized_text_color_revealer = builder.get_object('maximized_text_color_revealer');


    text_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR));
    maximized_text_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR));

    maximized_text_color_switch.connect('state-set', Lang.bind(this, function (widget, state) {
        temp_settings.store(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR, new GLib.Variant('b', state));
        maximized_text_color_revealer.set_reveal_child(state);
    }));

    text_color_switch.connect('state-set', Lang.bind(this, function (widget, state) {
        temp_settings.store(SETTINGS_ENABLE_TEXT_COLOR, new GLib.Variant('b', state));
        text_color_revealer.set_reveal_child(state);
    }));

    //let text_color_btn = builder.get_object('text_color_btn');
    let maximized_text_color_btn = builder.get_object('maximized_text_color_btn');

    let maximized_text_color = settings.get_value(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();

    let scaled_red = maximized_text_color[RED];
    scaled_red = scaled_red / SCALE_FACTOR;

    let scaled_blue = maximized_text_color[BLUE];
    scaled_blue = scaled_blue / SCALE_FACTOR;

    let scaled_green = maximized_text_color[GREEN];
    scaled_green = scaled_green / SCALE_FACTOR;

    let scaled_color = new Gdk.RGBA({
        red: scaled_red,
        green: scaled_green,
        blue: scaled_blue,
        alpha: 1.0
    });

    maximized_text_color_btn.set_rgba(scaled_color);
    maximized_text_color_btn.connect('color-set', Lang.bind(this, function (color) {
        let rgba = color.rgba.to_string();
        let parsed_red = parseInt(rgba.split('(')[1].split(')')[0].split(',')[RED], 10);
        let parsed_green = parseInt(rgba.split('(')[1].split(')')[0].split(',')[GREEN], 10);
        let parsed_blue = parseInt(rgba.split('(')[1].split(')')[0].split(',')[BLUE], 10);

        let rgb = [];
        rgb[RED] = parsed_red;
        rgb[GREEN] = parsed_green;
        rgb[BLUE] = parsed_blue;
        temp_settings.store(SETTINGS_MAXIMIZED_TEXT_COLOR, new GLib.Variant('(iii)', rgb));
        temp_settings.restart_required(true);
        panel_demo.set_text_color(new Gdk.RGBA({ red: rgb[RED], green: rgb[GREEN], blue: rgb[BLUE], alpha: 1.0 }));
    }));


    let text_color_btn = builder.get_object('text_color_btn');
    let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();

    scaled_red = text_color[RED];
    scaled_red = scaled_red / SCALE_FACTOR;

    scaled_blue = text_color[BLUE];
    scaled_blue = scaled_blue / SCALE_FACTOR;

    scaled_green = text_color[GREEN];
    scaled_green = scaled_green / SCALE_FACTOR;

    scaled_color = new Gdk.RGBA({
        red: scaled_red,
        green: scaled_green,
        blue: scaled_blue,
        alpha: 1.0
    });

    text_color_btn.set_rgba(scaled_color);

    text_color_btn.connect('color-set', Lang.bind(this, function (color) {
        let rgba = color.rgba.to_string();
        let parsed_red = parseInt(rgba.split('(')[1].split(')')[0].split(',')[RED], 10);
        let parsed_green = parseInt(rgba.split('(')[1].split(')')[0].split(',')[GREEN], 10);
        let parsed_blue = parseInt(rgba.split('(')[1].split(')')[0].split(',')[BLUE], 10);

        let rgb = [];
        rgb[RED] = parsed_red;
        rgb[GREEN] = parsed_green;
        rgb[BLUE] = parsed_blue;
        temp_settings.store(SETTINGS_TEXT_COLOR, new GLib.Variant('(iii)', rgb));
        temp_settings.restart_required(true);
        panel_demo.set_text_color(new Gdk.RGBA({ red: rgb[RED], green: rgb[GREEN], blue: rgb[BLUE], alpha: 1.0 }));
    }));

    /* Convert & scale color. */
    let panel_color = settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack();

    scaled_red = panel_color[RED];
    scaled_red = scaled_red / SCALE_FACTOR;

    scaled_blue = panel_color[BLUE];
    scaled_blue = scaled_blue / SCALE_FACTOR;

    scaled_green = panel_color[GREEN];
    scaled_green = scaled_green / SCALE_FACTOR;

    scaled_color = new Gdk.RGBA({
        red: scaled_red,
        green: scaled_green,
        blue: scaled_blue,
        alpha: 1.0
    });

    color_btn.set_rgba(scaled_color);

    color_btn.connect('color-set', Lang.bind(this, function (color) {
        let rgba = color.rgba.to_string();
        let parsed_red = parseInt(rgba.split('(')[1].split(')')[0].split(',')[RED], 10);
        let parsed_green = parseInt(rgba.split('(')[1].split(')')[0].split(',')[GREEN], 10);
        let parsed_blue = parseInt(rgba.split('(')[1].split(')')[0].split(',')[BLUE], 10);

        let rgb = [];
        rgb[RED] = parsed_red;
        rgb[GREEN] = parsed_green;
        rgb[BLUE] = parsed_blue;
        //settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('ai', rgb));
        temp_settings.store(SETTINGS_PANEL_COLOR, new GLib.Variant('ai', rgb));
        panel_demo.set_bg_color({ red: rgb[0], green: rgb[1], blue: rgb[2] });
    }));


    let hide_corners = builder.get_object('hide_corners_check');
    hide_corners.set_active(settings.get_boolean(SETTINGS_HIDE_CORNERS));

    hide_corners.connect('toggled', Lang.bind(this, function (widget) {
        temp_settings.store(SETTINGS_HIDE_CORNERS, new GLib.Variant('b', widget.get_active()));
    }));

    let force_transition = builder.get_object('force_transition_check');
    force_transition.set_active(settings.get_boolean(SETTINGS_FORCE_ANIMATION));

    force_transition.connect('toggled', Lang.bind(this, function (widget) {
        temp_settings.store(SETTINGS_FORCE_ANIMATION, new GLib.Variant('b', widget.get_active()));
    }));

    let text_shadow = builder.get_object('text_shadow_switch');
    text_shadow.set_active(settings.get_boolean(SETTINGS_TEXT_SHADOW));

    text_shadow.connect('state-set', Lang.bind(this, function (widget, state) {
        temp_settings.store(SETTINGS_TEXT_SHADOW, new GLib.Variant('b', state));
temp_settings.restart_required(true);
 }));

    let text_shadow_vertical_offset = builder.get_object('text_shadow_vertical_offset');
  //  let current_value = text_shadow_vertical_offset.get_value_as_int();
    temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, settings.get_value(SETTINGS_TEXT_SHADOW_POSITION));
    text_shadow_vertical_offset.set_value(settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[1]);
    text_shadow_vertical_offset.connect('value-changed', Lang.bind(this, function (widget) {
        let position = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
        position[1] = widget.get_value_as_int();
        temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
temp_settings.restart_required(true);
}));
    let text_shadow_horizontal_offset = builder.get_object('text_shadow_horizontal_offset');
  //  current_value = text_shadow_horizontal_offset.get_value_as_int();
    text_shadow_horizontal_offset.set_value(settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[0]);
    text_shadow_horizontal_offset.connect('value-changed', Lang.bind(this, function (widget) {
               let position = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
        position[0] = widget.get_value_as_int();
        temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
temp_settings.restart_required(true);
 }));
    let text_shadow_radius = builder.get_object('text_shadow_radius');
  //  current_value = text_shadow_horizontal_offset.get_value_as_int();
    text_shadow_radius.set_value(settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[2]);
    text_shadow_radius.connect('value-changed', Lang.bind(this, function (widget) {
        let position = temp_settings.get(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
        position[2] = widget.get_value_as_int();
        temp_settings.store(SETTINGS_TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
temp_settings.restart_required(true);
 }));
    let text_shadow_color_btn = builder.get_object('text_shadow_color');


    let text_shadow_color = settings.get_value(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();

    scaled_red = text_shadow_color[RED];
    scaled_red = scaled_red / SCALE_FACTOR;

    scaled_blue = text_shadow_color[BLUE];
    scaled_blue = scaled_blue / SCALE_FACTOR;

    scaled_green = text_shadow_color[GREEN];
    scaled_green = scaled_green / SCALE_FACTOR;

  let  scaled_alpha = text_shadow_color[4];
    scaled_alpha = scaled_alpha / SCALE_FACTOR;

    scaled_color = new Gdk.RGBA({
        red: scaled_red,
        green: scaled_green,
        blue: scaled_blue,
        alpha: scaled_alpha
    });

    text_shadow_color_btn.set_rgba(scaled_color);

    text_shadow_color_btn.connect('color-set', Lang.bind(this, function (color) {
        let rgba = color.rgba.to_string();
        let parsed_red = parseInt(rgba.split('(')[1].split(')')[0].split(',')[RED], 10);
        let parsed_green = parseInt(rgba.split('(')[1].split(')')[0].split(',')[GREEN], 10);
        let parsed_blue = parseInt(rgba.split('(')[1].split(')')[0].split(',')[BLUE], 10);
        let parsed_alpha = parseInt(rgba.split('(')[1].split(')')[0].split(',')[4], 10);

        let rgb = [];
        rgb[RED] = parsed_red;
        rgb[GREEN] = parsed_green;
        rgb[BLUE] = parsed_blue;
        rgb[4] = parsed_alpha;
        //settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('ai', rgb));
        temp_settings.store(SETTINGS_TEXT_SHADOW_COLOR, new GLib.Variant('(iiid)', rgb));
        //panel_demo.set_bg_color({ red: rgb[0], green: rgb[1], blue: rgb[2] });
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
  //  current_value = icon_shadow_horizontal_offset.get_value_as_int();
    icon_shadow_horizontal_offset.set_value(settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[0]);
    icon_shadow_horizontal_offset.connect('value-changed', Lang.bind(this, function (widget) {
        let position = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
        position[0] =widget.get_value_as_int();
        temp_settings.store(SETTINGS_ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
temp_settings.restart_required(true);
 }));
    let icon_shadow_radius = builder.get_object('icon_shadow_radius');
   // current_value = icon_shadow_horizontal_offset.get_value_as_int();
    icon_shadow_radius.set_value(settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[2]);
    icon_shadow_radius.connect('value-changed', Lang.bind(this, function (widget) {
        let position = temp_settings.get(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
        position[2] =widget.get_value_as_int();
        temp_settings.store(SETTINGS_ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
temp_settings.restart_required(true);
}));
    let icon_shadow_color_btn = builder.get_object('icon_shadow_color');


    let icon_shadow_color = settings.get_value(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();

    scaled_red = icon_shadow_color[RED];
    scaled_red = scaled_red / SCALE_FACTOR;

    scaled_blue = icon_shadow_color[BLUE];
    scaled_blue = scaled_blue / SCALE_FACTOR;

    scaled_green = icon_shadow_color[GREEN];
    scaled_green = scaled_green / SCALE_FACTOR;

    scaled_alpha = icon_shadow_color[4];
    scaled_alpha = scaled_alpha / SCALE_FACTOR;

    scaled_color = new Gdk.RGBA({
        red: scaled_red,
        green: scaled_green,
        blue: scaled_blue,
        alpha: scaled_alpha
    });

    icon_shadow_color_btn.set_rgba(scaled_color);

    icon_shadow_color_btn.connect('color-set', Lang.bind(this, function (color) {
        let rgba = color.rgba.to_string();
        let parsed_red = parseInt(rgba.split('(')[1].split(')')[0].split(',')[RED], 10);
        let parsed_green = parseInt(rgba.split('(')[1].split(')')[0].split(',')[GREEN], 10);
        let parsed_blue = parseInt(rgba.split('(')[1].split(')')[0].split(',')[BLUE], 10);
        let parsed_alpha = parseInt(rgba.split('(')[1].split(')')[0].split(',')[4], 10);

        let rgb = [];
        rgb[RED] = parsed_red;
        rgb[GREEN] = parsed_green;
        rgb[BLUE] = parsed_blue;
        rgb[4] = parsed_alpha;
        //settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('ai', rgb));
        temp_settings.store(SETTINGS_ICON_SHADOW_COLOR, new GLib.Variant('(iiid)', rgb));
        //panel_demo.set_bg_color({ red: rgb[0], green: rgb[1], blue: rgb[2] });
temp_settings.restart_required(true);
 }));

    /* Setup App Settings Tab */
    let app_list = builder.get_object('app_list');
    app_list.set_sort_func(Lang.bind(this, function (a, b, user_data) {
        if (a.constructor == AddAppRow) {
            return 1;
        } else if (b.constructor == AddAppRow) {
            return -1;
        }

        if (a.constructor != AppRow) {
            return 1;
        } else if (b.constructor != AppRow) {
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

    let overrides = settings.get_strv('app-overrides');
    let rmv = Lang.bind(this, function (app_id, row) {
        let overrides = settings.get_strv('app-overrides');
        let index = overrides.indexOf(app_id);

        overrides = overrides.splice(0, index).concat(overrides.splice(index + 1, overrides.length));
        settings.set_strv('app-overrides', overrides);
        app_list.remove(row);
    });
    let cfg = Lang.bind(this, function (app_name, app_id) {
        let sett = {
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
        dialog.add_button('Cancel', Gtk.ResponseType.CANCEL);
        dialog.add_button('Apply', Gtk.ResponseType.APPLY);


        dialog.transient_for = main_widget.get_toplevel();

        let path = '/org/gnome/shell/extensions/dynamic-shell-transparency/appOverrides/' + app_id + '/';
        let obj = Convenience.getSchemaObj('org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides');
        let app_settings = new Gio.Settings({ path: path, settings_schema: obj });


        let content_area = dialog.get_content_area();
        content_area.add(app_prefs_builder.get_object('main_box'));

        let _maximum_scale = app_prefs_builder.get_object('maximum_scale');
        /* Init value. */
        _maximum_scale.adjustment.set_value(app_settings.get_int(SETTINGS_MAXIMIZED_OPACITY)[1]);
        /* Add formatting */
        _maximum_scale.connect('format-value', Lang.bind(this, function (scale, value) {
            return (((value / SCALE_FACTOR) * 100).toFixed(0) + '%');
        }));
        _maximum_scale.connect('value-changed', Lang.bind(this, function (widget) {
            ///app_settings.set_value(SETTINGS_MAXIMIZED_OPACITY, new GLib.Variant('(bi)', [true, widget.adjustment.get_value()]));
            sett.maximum_opacity = widget.adjustment.get_value();
        }));
        let _always_trigger = app_prefs_builder.get_object('always_trigger');
        _always_trigger.connect('toggled', Lang.bind(this, function (widget) {
            sett.always_trigger = widget.get_active();
        }));

        let _color_btn = app_prefs_builder.get_object('color_btn');

        let _panel_color = app_settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack()[1];

        let scaled_red = panel_color[1][RED];
        scaled_red = scaled_red / SCALE_FACTOR;

        let scaled_blue = panel_color[1][BLUE];
        scaled_blue = scaled_blue / SCALE_FACTOR;

        let scaled_green = panel_color[1][GREEN];
        scaled_green = scaled_green / SCALE_FACTOR;

        let scaled_color = new Gdk.RGBA({
            red: scaled_red,
            green: scaled_green,
            blue: scaled_blue,
            alpha: 1.0
        });

        _color_btn.set_rgba(scaled_color);

        _color_btn.connect('color-set', Lang.bind(this, function (color) {
            let rgba = color.rgba.to_string();
            let parsed_red = parseInt(rgba.split('(')[1].split(')')[0].split(',')[RED], 10);
            let parsed_green = parseInt(rgba.split('(')[1].split(')')[0].split(',')[GREEN], 10);
            let parsed_blue = parseInt(rgba.split('(')[1].split(')')[0].split(',')[BLUE], 10);

            let rgb = [];
            rgb[RED] = parsed_red;
            rgb[GREEN] = parsed_green;
            rgb[BLUE] = parsed_blue;
            //app_settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('(bai)', [true, rgb]));
            sett.panel_color = rgb;
            panel_demo.set_bg_color({ red: rgb[0], green: rgb[1], blue: rgb[2] });
        }));

        dialog.connect('response', Lang.bind(this, function (dialog, response) {
            //    widget;
            if (response == Gtk.ResponseType.APPLY) {
                if (sett.panel_color !== null)
                    app_settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('(bai)', [true, sett.panel_color]));
                if (sett.maximum_opacity !== null)
                    app_settings.set_value(SETTINGS_MAXIMIZED_OPACITY, new GLib.Variant('(bi)', [true, sett.maximum_opacity]));
                if (sett.always_trigger !== null) {
                    if (sett.always_trigger) {
                        let triggers = settings.get_strv('trigger-apps');
                        //   log(overrides);
                        triggers.push(app_id);
                        // log(overrides);
                        settings.set_strv('trigger-apps', triggers);
                    } else {
                        let triggers = settings.get_strv('trigger-apps');
                        let index = triggers.indexOf(app_id);
                        triggers = triggers.splice(0, index).concat(triggers.splice(index + 1, triggers.length));
                        settings.set_strv('trigger-apps', triggers);
                    }
                }

                dialog.close();
            } else if (response == Gtk.ResponseType.CANCEL) {
                dialog.close();
            }
        }));
        dialog.run();
    });

    for (let override of overrides) {
        let app_info = Gio.DesktopAppInfo.new(override);
        if (app_info) {

            let row = new AppRow(app_info, cfg, rmv);
            row.show_all();
            app_list.add(row);
        }
    }

    let add = new AddAppRow();
    add.btn.connect('clicked', Lang.bind(this, function () {
        Gio.Application.get_default().mark_busy();
        let overrides = settings.get_strv('app-overrides');
        let a2 = new AppChooser(main_widget.get_toplevel(), overrides);
        a2.show_all();
        Gio.Application.get_default().unmark_busy();
        let response = a2.run();
        if (response == Gtk.ResponseType.OK) {
            let selected_app = a2.get_selected_app();
            if (selected_app) {
                let row = new AppRow(selected_app, cfg, rmv);
                row.show_all();
                app_list.add(row);
                //let
                overrides = settings.get_strv('app-overrides');
                //   log(overrides);
                overrides.push(selected_app.get_id());
                // log(overrides);
                settings.set_strv('app-overrides', overrides);
            }
        }
        a2.destroy();
    }));
    app_list.add(add);



    /* Setup About Tab */

    // Find the stack
    let about_dialog = builder.get_object('about_dialog');
    let contents = about_dialog.get_child();

    function find(container, names, level = 0) {
        let target = null;
        container.forall(function (child) {
            if (child.get_name() == names[level]) {
                if (++level === names.length) {
                    target = child;
                } else {
                    target = find(child, names, level);
                }
            }
        });
        return target;
    }

    let stack = find(contents, ['box', 'stack']);

    let website_label = find(stack, ['page_vbox', 'hbox', 'website_label']);
    website_label.set_selectable(false);

    // Find the license page.
    let license_page = find(stack, ['license_page']);

    // Get rid of that pesky license page.
    stack.remove(license_page);

    // Strip the dialog of its content
    about_dialog.remove(contents);

    // Link the stack switcher (I hate header bars sometimes.)
    let stack_switcher = builder.get_object('about_switcher');
    stack_switcher.set_stack(stack);

    // Transfer the contents.
    let about_box = builder.get_object('about_box');
    about_box.add(contents);



    /* Setup buttons. */
    let apply_btn = builder.get_object('apply_btn');
    let cancel_btn = builder.get_object('cancel_btn');
    let widget_parent = main_widget.get_toplevel();

    // Fix revealer issue.
    widget_parent.connect('realize', Lang.bind(this, function () {
        panel_revealer.set_reveal_child(false);
        text_color_revealer.set_reveal_child(settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR));
        maximized_text_color_revealer.set_reveal_child(settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR));
    }));

    let restart_dialog = builder.get_object('restart_dialog');

    restart_dialog.connect('response', Lang.bind(this, function (dialog, response) {
        if (response === Gtk.ResponseType.YES) {
            let d = Gio.bus_get_sync(Gio.BusType.SESSION, null);

            GLib.spawn_command_line_async('dbus-send --type=method_call --print-reply --dest=org.gnome.Shell /org/gnome/Shell org.gnome.Shell.Eval string:\'global.reexec_self()\'');
            restart_dialog.close();
        } else if (response === Gtk.ResponseType.NO) {
            restart_dialog.close();
        }
    }));

    // Setup apply button.
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
    return main_widget;
}

const DemoPanel = new Lang.Class({
    Name: 'DynamicPanelTransparency_DemoPanel',
    _init: function (eventbox) {
        this.panel = eventbox;
        this.text_color_provider = new Gtk.CssProvider();
        this.bg_color_provider = new Gtk.CssProvider();
        this.transition_provider = new Gtk.CssProvider();
        this.bg_color = { red: 0, green: 0, blue: 0 };
        this.color = { red: 0, green: 0, blue: 0 };
    },
    set_bg_color: function (color) {
        this.panel.get_style_context().remove_provider(this.bg_color_provider);
        if (typeof (color.alpha) === 'undefined' || color.alpha === null)
            color.alpha = 1.0;
        this.bg_color_provider.load_from_data('.demo-panel-color { background: rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + color.alpha + '); }');
        this.panel.get_style_context().add_provider(this.bg_color_provider, 3);
        this.panel.get_style_context().add_class('demo-panel-color');
        this.bg_color = color;
    },
    set_text_color: function (color) {
        this.panel.get_style_context().remove_provider(this.text_color_provider);
        this.text_color_provider.load_from_data('.demo-panel-text-color { color: rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + color.alpha + '); }');
        this.panel.get_style_context().add_provider(this.text_color_provider, 3);
        this.panel.get_style_context().add_class('demo-panel-text-color');
        this.color = color;
    },
    set_opacity: function (opacity, change = false) {
        if (!this.bg_color) {
            this.bg_color = {};
        }

        this.bg_color.alpha = ((opacity / SCALE_FACTOR).toFixed(2));

        if (change) {
            this.set_bg_color(this.bg_color);
        }

    },
    fade_in: function () {
        //this.set_bg_color(this.bg_color);
        Tweener.addTween(this.panel, {
            opacity: 1.0,
            time: 1.00,
            transition: 'easeOutQuad'
        });



    },
    fade_out: function () {
        // this.set_bg_color(this.bg_color);
        Tweener.addTween(this.panel, {
            opacity: 0,
            time: 1.00,
            transition: 'easeOutQuad'
        });
    }
});

const AppRow = new Lang.Class({
    Name: 'DynamicPanelTransparency_AppRow',
    Extends: Gtk.ListBoxRow,
    _init: function (df, cfg, rmv) {
        this.cfg = cfg;
        this.rmv = rmv;
        //this.info = df;

        this.parent();

        let grid = new Gtk.Grid({ column_spacing: 10 });
        let icn = df.get_icon();
        let img = null;
        if (icn) {
            let img = image_from_gicon(icn);
            grid.attach(img, 0, 0, 1, 1);
        }
        let lbl = new Gtk.Label({ label: df.get_name(), xalign: 0.0 });
        grid.attach_next_to(lbl, img, Gtk.PositionType.RIGHT, 1, 1);
        lbl.hexpand = true;
        lbl.halign = Gtk.Align.START;
        let btn = new Gtk.Button({ label: 'Configure' });
        grid.attach_next_to(btn, lbl, Gtk.PositionType.RIGHT, 1, 1);
        btn.vexpand = false;
        btn.valign = Gtk.Align.CENTER;
        let btn_ = new Gtk.Button({ label: 'Remove' });
        grid.attach_next_to(btn_, btn, Gtk.PositionType.RIGHT, 1, 1);
        btn_.vexpand = false;
        btn_.valign = Gtk.Align.CENTER;
        this.add(grid);
        this.margin_start = 1;
        this.margin_end = 1;
        this.btn_ = btn_;
        this.btn = btn;
        this.btn.connect('clicked', Lang.bind(this, this.configure));
        this.btn_.connect('clicked', Lang.bind(this, this.remove));
        this.app_name = df.get_name();
        this.app_id = df.get_id();
        this.connect('key-press-event', Lang.bind(this, this.on_key_press_event));
    },
    on_key_press_event: function (row, event) {
        if (event.keyval === Gdk.KEY_Delete || event.keyval === Gdk.KEY_KP_Delete || event.keyval === Gdk.KEY_BackSpace) {
            this.btn.activate();
            return true;
        }
        return false;
    },
    configure: function () {
        this.cfg.call(this, this.app_name, this.app_id);
    },
    remove: function () {
        this.rmv.call(this, this.app_id, this);
    }
});

const Clutter = imports.gi.Clutter;
const St = imports.gi.St;


function image_from_gicon(gicon) {
    let image = Gtk.Image.new_from_gicon(gicon, Gtk.IconSize.DIALOG);
    let b = 16; let w = 16; let h = 16;
    let response = Gtk.IconSize.lookup(Gtk.IconSize.DIALOG, b, w, h);
    image.set_pixel_size(h);
    return image;
}

function list_header_func(row, before, user_data) {
    if (before && !row.get_header()) {
        row.set_header(new Gtk.Separator({ orientation: Gtk.Orientation.HORIZONTAL }));
    }
}

const AddAppRow = new Lang.Class({
    Name: 'DynamicPanelTransparency_AddAppRow',
    Extends: Gtk.ListBoxRow,
    _init: function (options) {
        this.parent();
        let img = new Gtk.Image();
        img.set_from_icon_name('list-add-symbolic', Gtk.IconSize.BUTTON);
        this.btn = new Gtk.Button({ label: '', image: img, always_show_image: true });
        this.btn.get_style_context().remove_class('button');
        this.add(this.btn);
        this.get_style_context().add_class('tweak-startup');

    }
});

const AppChooser = new Lang.Class({
    Name: 'DynamicPanelTransparency_AppChooser',
    Extends: Gtk.Dialog,
    _init: function (main_window, excluded_apps) {
        this.parent({ title: 'Applications', use_header_bar: true });
        //this.running = {};
        this.all = {};
        this.entry = new Gtk.SearchEntry();
        this.entry.set_placeholder_text('Search Applications...');
        this.entry.set_width_chars(30);
        this.entry.activates_default = true;
        this.searchbar = new Gtk.SearchBar();
        this.searchbar.add(this.entry);
        this.searchbar.hexpand = true;
        let lb = new Gtk.ListBox();
        // lb.margin = 5;
        lb.activate_on_single_click = false;
        lb.set_sort_func(Lang.bind(this, this.sort_apps), null);
        lb.set_header_func(Lang.bind(this, list_header_func), null);
        lb.set_filter_func(Lang.bind(this, this.list_filter_func), null);
        this.entry.connect('search-changed', Lang.bind(this, this.on_search_entry_changed));
        lb.connect('row-activated', Lang.bind(this, function (b, r) {
            return this.response(Gtk.ResponseType.OK) ? r.get_mapped() : null;
        }));
        lb.connect('row-selected', Lang.bind(this, this.on_row_selected));
        let apps = Gio.app_info_get_all();

        for (let x = 0; x < apps.length; x++) {
            let a = apps[x];
            if (a.should_show() && excluded_apps.indexOf(a.get_id()) === -1) {
                let w = this.build_widget(a);
                if (w) {
                    this.all[w] = a;

                    lb.add(w);
                }

            }

        }

        let sw = new Gtk.ScrolledWindow();
        sw.hscrollbar_policy = Gtk.PolicyType.NEVER;
        sw.add(lb);
        sw.margin = 5;

        this.add_button('_Close', Gtk.ResponseType.CANCEL);
        this.add_button('_Add', Gtk.ResponseType.OK);
        this.set_default_response(Gtk.ResponseType.OK);
        let searchbtn = new Gtk.ToggleButton();
        searchbtn.valign = Gtk.Align.CENTER;
        let image = new Gtk.Image({ icon_name: 'edit-find-symbolic', icon_size: Gtk.IconSize.MENU })
        searchbtn.add(image);
        let context = searchbtn.get_style_context();
        context.add_class('image-button');
        context.remove_class('text-button');
        this.get_header_bar().pack_end(searchbtn);
        this._binding = searchbtn.bind_property('active', this.searchbar, 'search-mode-enabled', GObject.BindingFlags.BIDIRECTIONAL)
        this.get_content_area().pack_start(this.searchbar, false, false, 0);
        this.get_content_area().pack_start(sw, true, true, 0);
        //this.get_content_area().add();
        this.set_modal(true);
        this.set_transient_for(main_window);
        this.set_size_request(400, 300);
        this.listbox = lb;
        this.connect('key-press-event', Lang.bind(this, this.on_key_press));
    },

    sort_apps: function (a, b, user_data) {

        let aname = this.all[a].get_name();
        let bname = this.all[b].get_name();
        if (aname < bname) {
            return -1;
        } else if (aname > bname) {
            return 1;
        } else {
            return 0;
        }

    },

    build_widget: function (a) {
        let row = new Gtk.ListBoxRow();
        let g = new Gtk.Grid();
        if (!a.get_name()) {
            return null;
        }
        let icn = a.get_icon();
        let img;
        if (icn) {
            img = image_from_gicon(icn);
            g.attach(img, 0, 0, 1, 1);
            img.hexpand = false;
        } else {
            img = null; //attach_next_to treats this correctly
        }
        let lbl = new Gtk.Label({ label: a.get_name(), xalign: 0 });
        g.attach_next_to(lbl, img, Gtk.PositionType.RIGHT, 1, 1);
        lbl.hexpand = true;
        lbl.halign = Gtk.Align.START;
        lbl.vexpand = false;
        lbl.valign = Gtk.Align.CENTER;

        row.add(g);
        row.show_all();
        return row;
    },

    list_filter_func: function (row, unused) {
        let txt = this.entry.get_text().toLowerCase();
        let grid = row.get_child();
        for (let sib of grid.get_children()) {
            if (sib.constructor == Gtk.Label) {
                if (sib.get_text().toLowerCase().indexOf(txt) !== -1) {
                    return true;
                }
            }
        }
        return false;
    },

    on_search_entry_changed: function (editable) {
        this.listbox.invalidate_filter();
        let selected = this.listbox.get_selected_row();
        if (selected && selected.get_mapped()) {
            this.set_response_sensitive(Gtk.ResponseType.OK, true);
        } else {
            this.set_response_sensitive(Gtk.ResponseType.OK, false);
        }
    },

    on_row_selected: function (box, row) {
        if (row && row.get_mapped()) {
            this.set_response_sensitive(Gtk.ResponseType.OK, true);
        } else {
            this.set_response_sensitive(Gtk.ResponseType.OK, false);
        }
    },

    on_key_press: function (widget, event) {
        let mods = event.state & Gtk.accelerator_get_default_mod_mask();
        if (event.keyval == this.search_key && mods == this.search_mods) {
            this.searchbar.set_search_mode(!this.searchbar.get_search_mode());
            return true;
        }
        let keyname = Gdk.keyval_name(event.keyval);
        if (keyname == 'Escape') {
            if (this.searchbar.get_search_mode()) {
                this.searchbar.set_search_mode(false);
                return true;
            }
            //
        } else if (!(keyname == 'Up' || keyname == 'Down')) {
            if (!this.entry.has_focus && this.searchbar.get_search_mode()) {
                if (this.entry.im_context_filter_keypress(event)) {
                    this.entry.grab_focus();
                    let l = this.entry.get_text_length();
                    this.entry.select_region(l, l);
                    return true;
                }
                return this.searchbar.handle_event(event);
            }
            return false;
        }
        return false;
    },

    get_selected_app: function () {
        let row = this.listbox.get_selected_row();
        if (row) {
            return this.all[row];
        }
        return null;
    }
});


