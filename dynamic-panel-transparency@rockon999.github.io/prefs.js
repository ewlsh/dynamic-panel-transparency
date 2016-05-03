const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;
const Gio = imports.gi.Gio;
const Lang = imports.lang;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Config = imports.misc.config;

const Gettext = imports.gettext.domain('dynamic-panel-transparency');
const _ = Gettext.gettext;

const Dictionary = {
    'Transition Speed': _("Transition Speed"),
    'Maximum Opacity': _("Maximum Opacity"),
    'Minimum Opacity': _("Minimum Opacity"),
    'Panel Color': _("Panel Color"),
    'Theme Source': _("Theme Source"),
    'Detect User Theme': _("Detect User Theme"),
    'Hide Corners': _("Hide Corners"),
    'Some shell themes already do this.': _("Some shell themes already do this."),
    'Force Animation': _("Force Animation"),
    'Overrides \'gtk-enable-animations\'.': _("Overrides 'gtk-enable-animations'."),
    'Panel': _("Panel"),
    'Dash': _("Dash"),
    'default': _("default"),
    'Add Text Shadow': _("Add Text Shadow")
}

/* Settings Keys */
const SETTINGS_HIDE_CORNERS = 'hide-corners';
const SETTINGS_TRANSITION_SPEED = 'transition-speed';
const SETTINGS_DETECT_THEME = 'detect-user-theme';
const SETTINGS_TEXT_SHADOW = 'text-shadow';
const SETTINGS_FORCE_ANIMATION = 'force-animation';
const SETTINGS_UNMAXIMIZED_OPACITY = 'unmaximized-opacity';
const SETTINGS_MAXIMIZED_OPACITY = 'maximized-opacity';
const SETTINGS_PANEL_COLOR = 'panel-color';

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
    /* Get Settings */
    let settings = Convenience.getSettings();
    /* Create a UI Builder */
    let builder = new Gtk.Builder();
    /* Setup Translation */
    builder.set_translation_domain(Me.metadata['gettext-domain']);
    /* Get UI File */
    builder.add_from_file(Me.path + '/ui/prefs.ui');

    /* Main Widget (Grid) */
    let main_widget = builder.get_object('main');

    /* Util function for easily setting labels */
    function setLabel(obj, label) {
        builder.get_object(obj).set_label(label);
    }

    setLabel('speed_label', '<b>' + Dictionary['Transition Speed'] + '</b>');

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

    setLabel('maximum_label', '<b>' + Dictionary['Maximum Opacity'] + '</b>');

    /* Maximum opacity control */
    let maximum_scale = builder.get_object('maximum_scale');
    /* Init value. */
    maximum_scale.adjustment.set_value(settings.get_int(SETTINGS_MAXIMIZED_OPACITY));
    /* Add formatting */
    maximum_scale.connect('format-value', Lang.bind(this, function (scale, value) {
        return ((value / SCALE_FACTOR) * 100).toFixed(0) + '%';
    }));

    setLabel('minimum_label', '<b>' + Dictionary['Minimum Opacity'] + '</b>');

    /* Minimum opacity control */
    let minimum_scale = builder.get_object('minimum_scale');
    /* Init value. */
    minimum_scale.adjustment.set_value(settings.get_int(SETTINGS_UNMAXIMIZED_OPACITY));
    /* Add formatting */
    minimum_scale.connect('format-value', Lang.bind(this, function (scale, value) {
        return ((value / SCALE_FACTOR) * 100).toFixed(0) + '%';
    }));

    setLabel('detect_theme_label', '<b>' + Dictionary['Detect User Theme'] + '</b>');

    let theme_switch = builder.get_object('theme_switch');
    theme_switch.set_active(settings.get_boolean(SETTINGS_DETECT_THEME));

    let theme_source_box = builder.get_object('theme_source_box');
    let color_btn = builder.get_object('color_btn');
    let detect_theme_label = builder.get_object('detect_theme_label');
    let theme_label = builder.get_object('theme_label');
    let theme_stack = builder.get_object('theme_stack');


        if (settings.get_boolean(SETTINGS_DETECT_THEME)) {
            detect_theme_label.set_sensitive(true);
            theme_label.set_label(Dictionary['Theme Source']);
            theme_stack.set_visible_child(theme_source_box);
        } else {
            detect_theme_label.set_sensitive(false);
            theme_label.set_label(Dictionary['Panel Color']);
           theme_stack.set_visible_child(color_btn);
        }


    builder.get_object('theme_switch').connect('state-set', Lang.bind(this, function (widget, state) {
            if (state){
                detect_theme_label.set_sensitive(true);
                theme_label.set_label(Dictionary['Theme Source']);
                theme_stack.set_visible_child(theme_source_box);
            } else {
                detect_theme_label.set_sensitive(false);
                theme_label.set_label(Dictionary['Panel Color']);
                theme_stack.set_visible_child(color_btn);
            }
    }));


    let theme_source_box = builder.get_object('theme_source_box');
    theme_source_box.append_text(Dictionary['Panel']);
    theme_source_box.append_text(Dictionary['Dash']);
    theme_source_box.set_active(settings.get_enum('user-theme-source'));
    theme_source_box.connect('changed', Lang.bind(this, function (widget) {
        settings.set_enum('user-theme-source', widget.get_active());
    }));

    let color_btn = builder.get_object('color_btn');

    /* Convert & scale color. */ {
        let panel_color = settings.get_value('panel-color').deep_unpack();

        let scaled_red = panel_color[RED];
        scaled_red = scaled_red / SCALE_FACTOR;

        let scaled_blue = panel_color[BLUE];
        scaled_blue = scaled_blue / SCALE_FACTOR;

        let scaled_green = panel_color[GREEN];
        scaled_green = scaled_green / SCALE_FACTOR;

        let scaled_color = new Gdk.RGBA({
            red: scaled_red,
            green: scaled_green,
            blue: scaled_blue,
            alpha: 1.0
        });

        color_btn.set_rgba(scaled_color);
    }

    color_btn.connect('color-set', Lang.bind(this, function (color) {
        let rgba = color.rgba.to_string();
        let parsed_red = parseInt(rgba.split('(')[1].split(')')[0].split(',')[RED], 10);
        let parsed_green = parseInt(rgba.split('(')[1].split(')')[0].split(',')[GREEN], 10);
        let parsed_blue = parseInt(rgba.split('(')[1].split(')')[0].split(',')[BLUE], 10);

        let rgb = [];
        rgb[RED] = parsed_red;
        rgb[GREEN] = parsed_green;
        rgb[BLUE] = parsed_blue;
        settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('ai', rgb));
    }));


    let hide_corners = builder.get_object('hide_corners_check');
    hide_corners.set_active(settings.get_boolean(SETTINGS_HIDE_CORNERS));
    hide_corners.set_label(Dictionary['Hide Corners']);

    let force_transition = builder.get_object('force_transition_check');
    force_transition.set_active(settings.get_boolean(SETTINGS_FORCE_ANIMATION));
    force_transition.set_label(Dictionary['Force Animation']);

    let text_shadow = builder.get_object('text_shadow_check');
    text_shadow.set_active(settings.get_boolean(SETTINGS_TEXT_SHADOW));
    text_shadow.set_label(Dictionary['Add Text Shadow']);

    /* Bind settings. */
    settings.bind(SETTINGS_TRANSITION_SPEED, speed_scale.adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_DETECT_THEME, theme_switch, 'active', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_UNMAXIMIZED_OPACITY, minimum_scale.adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_HIDE_CORNERS, hide_corners, 'active', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_FORCE_ANIMATION, force_transition, 'active', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_TEXT_SHADOW, text_shadow, 'active', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_MAXIMIZED_OPACITY, maximum_scale.adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);

    /* Return main widget. */
    return main_widget;
}