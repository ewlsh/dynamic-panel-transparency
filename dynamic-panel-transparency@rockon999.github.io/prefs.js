const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;
const Lang = imports.lang;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;

/* Settings Keys */
const SETTINGS_HIDE_CORNERS = "hide-corners";
const SETTINGS_TRANSITION_SPEED = "transition-speed";
const SETTINGS_FORCE_ANIMATION = "force-animation";
const SETTINGS_UNMAXIMIZED_OPACITY = "unmaximized-opacity";
const SETTINGS_MAXIMIZED_OPACITY = "maximized-opacity";
const SETTINGS_PANEL_COLOR = "panel-color";

/* Color Array Indices */
const RED = 0;
const GREEN = 1;
const BLUE = 2;

const SCALE_FACTOR = 255.9999999;

const Gettext = imports.gettext.domain('dynamic-panel-transparency');
const _ = Gettext.gettext;

function init() {
    Convenience.initTranslations("dynamic-panel-transparency");
}

function buildPrefsWidget() {
    let widget = new SettingsUI();
    widget.show_all();

    return widget;
}

/* UI Setup */
const SettingsUI = new Lang.Class({
    Name: 'DynamicPanelTransparency.Prefs.SettingsUI',
    GTypeName: 'SettingsUI',
    Extends: Gtk.Grid,

    _init: function(params) {

        this.parent(params);

        this.margin = 24;

        this.row_spacing = 6;

        this.orientation = Gtk.Orientation.VERTICAL;

        this._settings = Convenience.getSettings('org.gnome.shell.extensions.dynamic-panel-transparency');

        let presentLabel = '<b>' + _("Transition Speed") + '</b>';
        this.add(new Gtk.Label({
            label: presentLabel,
            use_markup: true,
            halign: Gtk.Align.START
        }));

        /* control transition speed */
        let slider = Gtk.Scale.new_with_range(Gtk.Orientation.HORIZONTAL, 0, 5000, 100);
        slider.adjustment.set_value(this._settings.get_int(SETTINGS_TRANSITION_SPEED));
        /* show the user where they're at */
        slider.set_draw_value(true);
        /* lets add some color */
        slider.set_has_origin(true);
        /* make it legible */
        slider.set_size_request(400, 10);
        /* add a tick at the default */
        slider.add_mark(1000, Gtk.PositionType.BOTTOM, _("default"));
        /* right margin */
        slider.margin_right = 20;

        slider.connect('format-value', Lang.bind(this, function(scale, value) {
            return value + "ms";
        }));
        slider.connect('value-changed', Lang.bind(this, function(range) {
            this._settings.set_int(SETTINGS_TRANSITION_SPEED, range.get_value());
        }));
        
        this.add(slider);



        presentLabel = '<b>' + _("Maximum Opacity") + '</b>';
        let label = new Gtk.Label({
            label: presentLabel,
            use_markup: true,
            halign: Gtk.Align.START
        });
        label.set_size_request(20, -1);


        slider = Gtk.Scale.new_with_range(Gtk.Orientation.HORIZONTAL, 0, 255, 1);
        slider.adjustment.set_value(this._settings.get_int(SETTINGS_MAXIMIZED_OPACITY));
        /* show the user where they're at */
        slider.set_draw_value(true);
        /* lets add some color */
        slider.set_has_origin(true);
        /* make it legible */
        slider.set_size_request(400, 10);

        slider.connect('value-changed', Lang.bind(this, function(range) {
            this._settings.set_int(SETTINGS_MAXIMIZED_OPACITY, range.get_value());
        }));
        slider.connect('format-value', Lang.bind(this, function(scale, value) {
            return ((value / SCALE_FACTOR) * 100).toFixed(0) + "%";
        }));

        let max_opacity = new Gtk.Box(Gtk.Orientation.HORIZTONAL);
        label.valign = Gtk.Align.END;
        label.margin_bottom = 3;
        max_opacity.pack_start(label, false, false, 0);
        max_opacity.pack_end(slider, true, true, 20);
        this.add(max_opacity);
        presentLabel = '<b>' + _("Minimum Opacity") + '</b>';
        label = new Gtk.Label({
            label: presentLabel,
            use_markup: true,
            halign: Gtk.Align.START
        });
        label.set_size_request(20, -1);

        slider = Gtk.Scale.new_with_range(Gtk.Orientation.HORIZONTAL, 0, 255, 1);
        slider.adjustment.set_value(this._settings.get_int(SETTINGS_UNMAXIMIZED_OPACITY));
        /* show the user where they're at */
        slider.set_draw_value(true);
        /* lets add some color */
        slider.set_has_origin(true);
        /* make it legible */
        slider.set_size_request(400, 10);


        slider.connect('value-changed', Lang.bind(this, function(range) {
            this._settings.set_int(SETTINGS_UNMAXIMIZED_OPACITY, range.get_value());
        }));
        slider.connect('format-value', Lang.bind(this, function(scale, value) {
            return ((value / SCALE_FACTOR) * 100).toFixed(0) + "%";
        }));

        let min_opacity = new Gtk.Box(Gtk.Orientation.HORIZTONAL);
        label.valign = Gtk.Align.END;
        min_opacity.margin_bottom = 10;
        label.margin_bottom = 3;
        min_opacity.pack_start(label, false, false, 0);
        min_opacity.pack_end(slider, true, true, 20);
        this.add(min_opacity);


        presentLabel = '<b>' + _("Panel Color") + '</b>';
        this.add(new Gtk.Label({
            label: presentLabel,
            use_markup: true,
            halign: Gtk.Align.START
        }));




        let color = new Gtk.ColorButton();
        color.halign = Gtk.Align.START;
        let pcolor = this._settings.get_value('panel-color').deep_unpack();


        let r_display = pcolor[RED];
        r_display = r_display / SCALE_FACTOR;

        let b_display = pcolor[BLUE];
        b_display = b_display / SCALE_FACTOR;

        let g_display = pcolor[GREEN];
        g_display = g_display / SCALE_FACTOR;


        let c = new Gdk.RGBA({
            red: r_display,
            green: g_display,
            blue: b_display,
            alpha: 1.0
        });


        color.connect('color-set', Lang.bind(this, function(c) {
            let rgba = c.rgba.to_string();

            let r = parseInt(rgba.split('(')[1].split(')')[0].split(',')[RED], 10);
            let g = parseInt(rgba.split('(')[1].split(')')[0].split(',')[GREEN], 10);
            let b = parseInt(rgba.split('(')[1].split(')')[0].split(',')[BLUE], 10);

            let rgb = [];
            rgb[RED] = r;
            rgb[GREEN] = g;
            rgb[BLUE] = b;
            let done = this._settings.set_value(SETTINGS_PANEL_COLOR, new GLib.Variant('ai', rgb));
        }));

        color.set_use_alpha(false);
        color.set_rgba(c);
        this.add(color);

        /* control corners */
        let check = new Gtk.CheckButton({
            label: _("Hide Corners"),
            margin_top: 6
        });
        check.set_active(this._settings.get_boolean(SETTINGS_HIDE_CORNERS));
        check.connect('toggled', Lang.bind(this, function(value) {
            this._settings.set_boolean(SETTINGS_HIDE_CORNERS, value.get_active());
        }));
        this.add(check);

        /* force animation */
        check = new Gtk.CheckButton({
            label: _("Force Animation (override 'gtk-enable-animations')"),
            margin_top: 6
        });
        check.set_active(this._settings.get_boolean(SETTINGS_FORCE_ANIMATION));
        check.connect('toggled', Lang.bind(this, function(value) {
            this._settings.set_boolean(SETTINGS_FORCE_ANIMATION, value.get_active());
        }));
        this.add(check);
    },
});
