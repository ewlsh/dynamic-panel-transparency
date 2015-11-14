const Gio = imports.gi.Gio;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;

/* Settings Keys */
const SETTINGS_HIDE_CORNERS = "hide-corners";
const SETTINGS_TRANSITION_SPEED = "transition-speed";
const SETTINGS_FORCE_ANIMATION = "force-animation";

function init() {}

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
        let test = 0;

        this.margin = 24;

        this.row_spacing = 6;

        this.orientation = Gtk.Orientation.VERTICAL;

        this._settings = Convenience.getSettings('org.gnome.shell.extensions.dynamic-panel-transparency');

        let presentLabel = '<b>' + "Transition Speed" + '</b>';
        this.add(new Gtk.Label({
            label: presentLabel,
            use_markup: true,
            halign: Gtk.Align.START
        }));

        let align = new Gtk.Alignment({
            left_padding: 12
        });
        this.add(align);

        let grid = new Gtk.Grid({
            orientation: Gtk.Orientation.VERTICAL,
            row_spacing: 6,
            column_spacing: 6
        });
        align.add(grid);


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
        slider.add_mark(1000, Gtk.PositionType.BOTTOM, "default");

        slider.connect('format-value', Lang.bind(this, function(scale, value) {
            return value + "ms";
        }));
        slider.connect('value-changed', Lang.bind(this, function(range) {
            log('val' + range.get_value());
            this._settings.set_int(SETTINGS_TRANSITION_SPEED, range.get_value());
        }));
        grid.add(slider);

        /* control corners */
        let check = new Gtk.CheckButton({
            label: "Hide Corners",
            margin_top: 6
        });
        check.set_active(this._settings.get_boolean(SETTINGS_HIDE_CORNERS));
        check.connect('toggled', Lang.bind(this, function(value) {
            this._settings.set_boolean(SETTINGS_HIDE_CORNERS, value.get_active());
        }));
        this.add(check);

        /* force animation */
        let check_2 = new Gtk.CheckButton({
            label: "Force Animation (override 'gtk-enable-animations')",
            margin_top: 6
        });
        check_2.set_active(this._settings.get_boolean(SETTINGS_FORCE_ANIMATION));
        check_2.connect('toggled', Lang.bind(this, function(value) {
            this._settings.set_boolean(SETTINGS_FORCE_ANIMATION, value.get_active());
        }));
        this.add(check_2);
    },
});
