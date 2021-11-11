// @ts-nocheck

/* exported init, buildPrefsWidget */

const GLib = imports.gi.GLib;
const GObject = imports.gi.GObject;
const Gdk = imports.gi.Gdk;
const Gio = imports.gi.Gio;
const Gtk = imports.gi.Gtk;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const Gettext = imports.gettext.domain('dynamic-panel-transparency');
const _ = Gettext.gettext;

const gtk30_ = imports.gettext.domain('gtk30').gettext;

/**
 * Evaluates parameter 'value' and returns either 'value' or 'min'/'max' if 'value' is outside of the range.
 *
 * @param {Number} value - Test value.
 * @param {Number} min - Minimum value.
 * @param {Number} max - Maximum value.
 *
 * @returns {Number} 'value' or the minimum or maximum.
 *
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Converts a GdkColor into a JS/CSS color object.
 *
 * @param {Object} color - GdkColor to convert.
 *
 * @returns {Object} Converted RGB color.
 *
 */
function gdk_to_css_color(color) {
    let red = Math.round(clamp(color.red * 255, 0, 255));
    let green = Math.round(clamp(color.green * 255, 0, 255));
    let blue = Math.round(clamp(color.blue * 255, 0, 255));

    return { red: red, green: green, blue: blue };
}

/* Settings Keys */
const SETTINGS_ENABLE_BACKGROUND_COLOR = 'enable-background-color';
const SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR = 'enable-maximized-text-color';
const SETTINGS_ENABLE_OPACITY = 'enable-opacity';
const SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR = 'enable-overview-text-color';
const SETTINGS_ENABLE_TEXT_COLOR = 'enable-text-color';
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
const SETTINGS_TRANSITION_WITH_OVERVIEW = 'transition-with-overview';
const SETTINGS_TRANSITION_WINDOWS_TOUCH = 'transition-windows-touch';
const SETTINGS_UNMAXIMIZED_OPACITY = 'unmaximized-opacity';

const Page = { TRANSITIONS: 0, FOREGROUND: 1, BACKGROUND: 2, ABOUT: 3 };
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
const WEBSITE_LABEL_BOTTOM_MARGIN = 50;
const WEBSITE_LABEL_TOP_MARGIN = 20;

/* Color Scaling Factor (Byte to Decimal) */
const SCALE_FACTOR = 255.9999999;

function init() {
    ExtensionUtils.initTranslations();
}

/* UI Setup */
function buildPrefsWidget() {
    /* Stores settings until the user applies them. */

    /* Get Settings */
    let settings = ExtensionUtils.getSettings();
    /* Create a UI Builder */
    let builder = new Gtk.Builder();
    /* Setup Translation */
    builder.set_translation_domain(Me.metadata['gettext-domain']);
    /* Get UI File */
    builder.add_from_file(Me.path + '/prefs.ui');

    /* Main Widget (Grid) */
    let main_widget = builder.get_object('main_box');

    {
        /* Transition speed control */
        let speed_scale = builder.get_object('speed_scale');
        /* Init value. */
        speed_scale.adjustment.set_value(settings.get_int(SETTINGS_TRANSITION_SPEED));
        /* Add default marking. */
        speed_scale.add_mark(
            settings.get_default_value(SETTINGS_TRANSITION_SPEED).unpack(),
            Gtk.PositionType.BOTTOM,
            _('default')
        );
        /* Add formatting */
        speed_scale.set_format_value_func((scale, value) => {
            return value + 'ms';
        });
        speed_scale.connect(
            'value-changed',
            function (widget) {
                settings.set_value(
                    SETTINGS_TRANSITION_SPEED,
                    new GLib.Variant('i', widget.adjustment.get_value())
                );
            }.bind(this)
        );

        let transition_windows_touch = builder.get_object('transition_windows_touch_check');
        transition_windows_touch.set_active(
            settings.get_boolean(SETTINGS_TRANSITION_WINDOWS_TOUCH)
        );

        transition_windows_touch.connect(
            'toggled',
            function (widget) {
                settings.set_value(
                    SETTINGS_TRANSITION_WINDOWS_TOUCH,
                    new GLib.Variant('b', widget.get_active())
                );
            }.bind(this)
        );

        let transition_with_overview = builder.get_object('transition_with_overview_check');
        transition_with_overview.set_active(
            settings.get_boolean(SETTINGS_TRANSITION_WITH_OVERVIEW)
        );

        transition_with_overview.connect(
            'toggled',
            function (widget) {
                settings.set_value(
                    SETTINGS_TRANSITION_WITH_OVERVIEW,
                    new GLib.Variant('b', widget.get_active())
                );
            }.bind(this)
        );
    }

    /* Setup foreground tab */
    {
        let text_color_switch = builder.get_object('text_color_switch');
        let text_color_revealer = builder.get_object('text_color_revealer');

        text_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR));
        text_color_switch.connect(
            'state-set',
            function (widget, state) {
                settings.set_value(SETTINGS_ENABLE_TEXT_COLOR, new GLib.Variant('b', state));
                text_color_revealer.set_reveal_child(state);
            }.bind(this)
        );

        let maximized_text_color_switch = builder.get_object('maximized_text_color_check');
        maximized_text_color_switch.set_active(
            settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR)
        );

        maximized_text_color_switch.connect(
            'toggled',
            function (widget) {
                settings.set_value(
                    SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR,
                    new GLib.Variant('b', widget.get_active())
                );
            }.bind(this)
        );

        let overview_text_color_switch = builder.get_object('overview_text_color_check');
        overview_text_color_switch.set_active(
            settings.get_boolean(SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR)
        );

        overview_text_color_switch.connect(
            'toggled',
            function (widget) {
                settings.set_value(
                    SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR,
                    new GLib.Variant('b', widget.get_active())
                );
            }.bind(this)
        );

        let remove_panel_styling_check = builder.get_object('remove_panel_styling_check');
        remove_panel_styling_check.set_active(settings.get_boolean(SETTINGS_REMOVE_PANEL_STYLING));

        remove_panel_styling_check.connect(
            'toggled',
            function (widget) {
                settings.set_value(
                    SETTINGS_REMOVE_PANEL_STYLING,
                    new GLib.Variant('b', widget.get_active())
                );
            }.bind(this)
        );

        let maximized_text_color_btn = builder.get_object('maximized_text_color_btn');
        let maximized_text_color = settings.get_value(SETTINGS_MAXIMIZED_TEXT_COLOR).deep_unpack();

        let css_color =
            'rgba(' +
            maximized_text_color[RED] +
            ',' +
            maximized_text_color[GREEN] +
            ',' +
            maximized_text_color[BLUE] +
            ', 1.0)';
        let scaled_color = new Gdk.RGBA();

        if (scaled_color.parse(css_color)) {
            maximized_text_color_btn.set_rgba(scaled_color);
        }

        maximized_text_color_btn.connect(
            'color-set',
            function (color_btn) {
                let color = gdk_to_css_color(color_btn.get_rgba());
                let rgb = [color.red, color.green, color.blue];

                settings.set_value(SETTINGS_MAXIMIZED_TEXT_COLOR, new GLib.Variant('(iii)', rgb));
            }.bind(this)
        );

        let text_color_btn = builder.get_object('text_color_btn');
        let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();

        css_color =
            'rgba(' + text_color[RED] + ',' + text_color[GREEN] + ',' + text_color[BLUE] + ', 1.0)';
        scaled_color = new Gdk.RGBA();

        if (scaled_color.parse(css_color)) {
            text_color_btn.set_rgba(scaled_color);
        }

        text_color_btn.connect(
            'color-set',
            function (color_btn) {
                let color = gdk_to_css_color(color_btn.get_rgba());
                let rgb = [color.red, color.green, color.blue];

                settings.set_value(SETTINGS_TEXT_COLOR, new GLib.Variant('(iii)', rgb));
            }.bind(this)
        );

        let text_shadow_switch = builder.get_object('text_shadow_switch');
        let text_shadow_revealer = builder.get_object('text_shadow_revealer');

        text_shadow_switch.set_active(settings.get_boolean(SETTINGS_TEXT_SHADOW));

        text_shadow_switch.connect(
            'state-set',
            function (widget, state) {
                settings.set_value(SETTINGS_TEXT_SHADOW, new GLib.Variant('b', state));
                text_shadow_revealer.set_reveal_child(state);
            }.bind(this)
        );

        let text_shadow_vertical_offset = builder.get_object('text_shadow_vertical_offset');
        settings.set_value(
            SETTINGS_TEXT_SHADOW_POSITION,
            settings.get_value(SETTINGS_TEXT_SHADOW_POSITION)
        );
        text_shadow_vertical_offset.set_value(
            settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[VERTICAL_OFFSET]
        );
        text_shadow_vertical_offset.connect(
            'value-changed',
            function (widget) {
                let position = settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                position[VERTICAL_OFFSET] = widget.get_value_as_int();
                settings.set_value(
                    SETTINGS_TEXT_SHADOW_POSITION,
                    new GLib.Variant('(iii)', position)
                );
            }.bind(this)
        );

        let text_shadow_horizontal_offset = builder.get_object('text_shadow_horizontal_offset');
        text_shadow_horizontal_offset.set_value(
            settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[HORIZONTAL_OFFSET]
        );
        text_shadow_horizontal_offset.connect(
            'value-changed',
            function (widget) {
                let position = settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                position[HORIZONTAL_OFFSET] = widget.get_value_as_int();
                settings.set_value(
                    SETTINGS_TEXT_SHADOW_POSITION,
                    new GLib.Variant('(iii)', position)
                );
            }.bind(this)
        );

        let text_shadow_radius = builder.get_object('text_shadow_radius');
        text_shadow_radius.set_value(
            settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack()[BLUR_RADIUS]
        );
        text_shadow_radius.connect(
            'value-changed',
            function (widget) {
                let position = settings.get_value(SETTINGS_TEXT_SHADOW_POSITION).deep_unpack();
                position[BLUR_RADIUS] = widget.get_value_as_int();
                settings.set_value(
                    SETTINGS_TEXT_SHADOW_POSITION,
                    new GLib.Variant('(iii)', position)
                );
            }.bind(this)
        );

        let text_shadow_color_btn = builder.get_object('text_shadow_color');
        text_shadow_color_btn.show_editor = true;

        let text_shadow_color = settings.get_value(SETTINGS_TEXT_SHADOW_COLOR).deep_unpack();

        css_color =
            'rgba(' +
            text_shadow_color[RED] +
            ',' +
            text_shadow_color[GREEN] +
            ',' +
            text_shadow_color[BLUE] +
            ',' +
            text_shadow_color[ALPHA].toFixed(2) +
            ')';
        scaled_color = new Gdk.RGBA();
        if (scaled_color.parse(css_color)) text_shadow_color_btn.set_rgba(scaled_color);

        text_shadow_color_btn.connect(
            'color-set',
            function (color_btn) {
                let color = gdk_to_css_color(color_btn.get_rgba());
                let alpha = +color_btn.get_rgba().alpha.toFixed(2);

                let rgba = [color.red, color.green, color.blue, alpha];
                settings.set_value(SETTINGS_TEXT_SHADOW_COLOR, new GLib.Variant('(iiid)', rgba));
            }.bind(this)
        );

        let icon_shadow = builder.get_object('icon_shadow_switch');
        let icon_shadow_revealer = builder.get_object('icon_shadow_revealer');

        icon_shadow.set_active(settings.get_boolean(SETTINGS_ICON_SHADOW));

        icon_shadow.connect(
            'state-set',
            function (widget, state) {
                settings.set_value(SETTINGS_ICON_SHADOW, new GLib.Variant('b', state));
                icon_shadow_revealer.set_reveal_child(state);
            }.bind(this)
        );

        let icon_shadow_vertical_offset = builder.get_object('icon_shadow_vertical_offset');

        settings.set_value(
            SETTINGS_ICON_SHADOW_POSITION,
            settings.get_value(SETTINGS_ICON_SHADOW_POSITION)
        );
        icon_shadow_vertical_offset.set_value(
            settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[VERTICAL_OFFSET]
        );
        icon_shadow_vertical_offset.connect(
            'value-changed',
            function (widget) {
                let position = settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                position[VERTICAL_OFFSET] = widget.get_value_as_int();
                settings.set_value(
                    SETTINGS_ICON_SHADOW_POSITION,
                    new GLib.Variant('(iii)', position)
                );
            }.bind(this)
        );
        let icon_shadow_horizontal_offset = builder.get_object('icon_shadow_horizontal_offset');
        icon_shadow_horizontal_offset.set_value(
            settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[HORIZONTAL_OFFSET]
        );
        icon_shadow_horizontal_offset.connect(
            'value-changed',
            function (widget) {
                let position = settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                position[HORIZONTAL_OFFSET] = widget.get_value_as_int();
                settings.set_value(
                    SETTINGS_ICON_SHADOW_POSITION,
                    new GLib.Variant('(iii)', position)
                );
            }.bind(this)
        );
        let icon_shadow_radius = builder.get_object('icon_shadow_radius');
        icon_shadow_radius.set_value(
            settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack()[BLUR_RADIUS]
        );
        icon_shadow_radius.connect(
            'value-changed',
            function (widget) {
                let position = settings.get_value(SETTINGS_ICON_SHADOW_POSITION).deep_unpack();
                position[BLUR_RADIUS] = widget.get_value_as_int();
                settings.set_value(
                    SETTINGS_ICON_SHADOW_POSITION,
                    new GLib.Variant('(iii)', position)
                );
            }.bind(this)
        );

        let icon_shadow_color_btn = builder.get_object('icon_shadow_color');
        icon_shadow_color_btn.show_editor = true;

        let icon_shadow_color = settings.get_value(SETTINGS_ICON_SHADOW_COLOR).deep_unpack();

        css_color =
            'rgba(' +
            icon_shadow_color[RED] +
            ',' +
            icon_shadow_color[GREEN] +
            ',' +
            icon_shadow_color[BLUE] +
            ',' +
            icon_shadow_color[ALPHA].toFixed(2) +
            ')';
        scaled_color = new Gdk.RGBA();
        if (scaled_color.parse(css_color)) {
            icon_shadow_color_btn.set_rgba(scaled_color);
        }

        icon_shadow_color_btn.connect(
            'color-set',
            function (color_btn) {
                let color = gdk_to_css_color(color_btn.get_rgba());
                let alpha = +color_btn.get_rgba().alpha.toFixed(2);

                let rgba = [color.red, color.green, color.blue, alpha];

                settings.set_value(SETTINGS_ICON_SHADOW_COLOR, new GLib.Variant('(iiid)', rgba));
            }.bind(this)
        );
    }

    /* Setup Background Tab */
    {
        let background_color_switch = builder.get_object('background_color_switch');
        let opacity_switch = builder.get_object('opacity_switch');
        let background_color_revealer = builder.get_object('background_color_revealer');
        let opacity_revealer = builder.get_object('opacity_revealer');

        background_color_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_BACKGROUND_COLOR));
        background_color_switch.connect(
            'state-set',
            function (widget, state) {
                settings.set_value(SETTINGS_ENABLE_BACKGROUND_COLOR, new GLib.Variant('b', state));
                background_color_revealer.set_reveal_child(state);
            }.bind(this)
        );

        opacity_switch.set_active(settings.get_boolean(SETTINGS_ENABLE_OPACITY));
        opacity_switch.connect(
            'state-set',
            function (widget, state) {
                settings.set_value(SETTINGS_ENABLE_OPACITY, new GLib.Variant('b', state));
                opacity_revealer.set_reveal_child(state);
            }.bind(this)
        );

        /* Maximum opacity control */
        let maximum_scale = builder.get_object('maximum_scale');
        /* Init value. */
        maximum_scale.adjustment.set_value(settings.get_int(SETTINGS_MAXIMIZED_OPACITY));
        /* Add formatting */
        maximum_scale.set_format_value_func((scale, value) => {
            return ((value / SCALE_FACTOR) * 100).toFixed(0) + '%'; // eslint-disable-line no-magic-numbers
        });
        maximum_scale.connect(
            'value-changed',
            function (widget) {
                settings.set_value(
                    SETTINGS_MAXIMIZED_OPACITY,
                    new GLib.Variant('i', widget.adjustment.get_value())
                );
            }.bind(this)
        );

        /* Minimum opacity control */
        let minimum_scale = builder.get_object('minimum_scale');
        /* Init value. */
        minimum_scale.adjustment.set_value(settings.get_int(SETTINGS_UNMAXIMIZED_OPACITY));
        /* Add formatting */
        minimum_scale.set_format_value_func((scale, value) => {
            return ((value / SCALE_FACTOR) * 100).toFixed(0) + '%'; // eslint-disable-line no-magic-numbers
        });
        minimum_scale.connect(
            'value-changed',
            function (widget) {
                settings.set_value(
                    SETTINGS_UNMAXIMIZED_OPACITY,
                    new GLib.Variant('i', widget.adjustment.get_value())
                );
            }.bind(this)
        );

        /* Convert & scale color. */
        let panel_color = settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack();

        let color_btn = builder.get_object('color_btn');
        let css_color =
            'rgba(' +
            panel_color[RED] +
            ',' +
            panel_color[GREEN] +
            ',' +
            panel_color[BLUE] +
            ', 1.0)';

        let scaled_color = new Gdk.RGBA();
        if (scaled_color.parse(css_color)) {
            color_btn.set_rgba(scaled_color);
        }
        color_btn.connect(
            'color-set',
            function (color_btn) {
                let color = gdk_to_css_color(color_btn.get_rgba());
                let rgb = [color.red, color.green, color.blue];

                settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('ai', rgb));
            }.bind(this)
        );

        let hide_corners = builder.get_object('hide_corners_check');
        hide_corners.set_active(settings.get_boolean(SETTINGS_HIDE_CORNERS));

        hide_corners.connect(
            'toggled',
            function (widget) {
                settings.set_value(
                    SETTINGS_HIDE_CORNERS,
                    new GLib.Variant('b', widget.get_active())
                );
            }.bind(this)
        );
    }

    let about_button = builder.get_object('about_button');
    let about_dialog = builder.get_object('about_dialog');
    about_dialog.set_version('v' + Me.metadata['version']);
    about_button.connect('clicked', () => {
        about_dialog.set_transient_for(main_widget.get_root());
        about_dialog.set_modal(true);
        about_dialog.present();
    });

    return main_widget;
}
