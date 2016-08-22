/* exported DemoPanel */

const Lang = imports.lang;

const Gtk = imports.gi.Gtk;

const SCALE_FACTOR = 255.9999999;

const DemoPanel = new Lang.Class({
    Name: 'DynamicPanelTransparency_DemoPanel',
    _init: function (eventbox) {
        this.panel = eventbox;
        this.text_color_provider = new Gtk.CssProvider();
        this.background_color_provider = new Gtk.CssProvider();
        this.transition_provider = new Gtk.CssProvider();
        this.background_color = { red: 0, green: 0, blue: 0, alpha: 1.0 };
        this.color = { red: 0, green: 0, blue: 0, alpha: 1.0 };
    },
    set_background_color: function (color) {
        this.panel.get_style_context().remove_provider(this.background_color_provider);
        if (typeof (color.alpha) === 'undefined' || color.alpha === null)
            color.alpha = 1.0;
        this.background_color_provider.load_from_data('.demo-panel-color { background: rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + color.alpha + '); }');
        this.panel.get_style_context().add_provider(this.background_color_provider, 3);
        this.panel.get_style_context().add_class('demo-panel-color');
        this.background_color = color;
    },
    set_text_color: function (color) {
        this.panel.get_style_context().remove_provider(this.text_color_provider);
        this.text_color_provider.load_from_data('.demo-panel-text-color { color: rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + color.alpha + '); }');
        this.panel.get_style_context().add_provider(this.text_color_provider, 3);
        this.panel.get_style_context().add_class('demo-panel-text-color');
        this.color = color;
    },
    set_opacity: function (opacity, force_change = false) {
        if (!this.background_color) {
            this.background_color = {};
        }

        this.background_color.alpha = ((opacity / SCALE_FACTOR).toFixed(2));

        if (force_change) {
            this.set_background_color(this.background_color);
        }

    }
});