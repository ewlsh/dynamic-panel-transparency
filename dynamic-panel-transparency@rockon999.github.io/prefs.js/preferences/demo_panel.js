/* exported DemoPanel */

const Lang = imports.lang;

const Gtk = imports.gi.Gtk;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Compatibility = Me.imports.compatibility;

const SCALE_FACTOR = 255.9999999;

const DemoPanel = new Lang.Class({
    Name: 'DynamicPanelTransparency_DemoPanel',
    _init: function(eventbox, text_labels, icon_labels) {
        this.panel = eventbox;
        this.text_labels = text_labels;
        this.icon_labels = icon_labels;
        this.text_color_provider = new Gtk.CssProvider();
        this.background_color_provider = new Gtk.CssProvider();
        this.text_shadow_provider = new Gtk.CssProvider();
        this.icon_shadow_provider = new Gtk.CssProvider();
        this.background_color = { red: 0, green: 0, blue: 0, alpha: 1.0 };
        this.color = { red: 0, green: 0, blue: 0, alpha: 1.0 };
        this.icon_shadow = { h_offset: 0, y_offset: 0, blur: 0, color: { red: 0, green: 0, blue: 0, alpha: 1.0 } };
        this.text_shadow = { h_offset: 0, y_offset: 0, blur: 0, color: { red: 0, green: 0, blue: 0, alpha: 1.0 } };
    },
    set_background_color: function(color) {
        this.panel.get_style_context().remove_provider(this.background_color_provider);

        /* Make sure that the alpha parameter is correct. */
        color.alpha = this.background_color.alpha;

        this.background_color_provider.load_from_data('.demo-panel-color { background: rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + color.alpha + '); }');
        this.panel.get_style_context().add_provider(this.background_color_provider, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
        this.panel.get_style_context().add_class('demo-panel-color');
        this.background_color = color;
    },
    set_icon_shadow: function(shadow) {
        for (let lbl of this.icon_labels) {
            lbl.get_style_context().remove_provider(this.icon_shadow_provider);
        }
        if (shadow === null)
            return;

        // COMPATIBILITY: Gtk CSS added '-gtk-icon-shadow' to replace 'icon-shadow'.
        this.icon_shadow_provider.load_from_data(Compatibility.parse_css('.demo-panel-shadow { -gtk-icon-shadow: ' + shadow.h_offset + 'px ' + shadow.y_offset + 'px ' + shadow.blur + 'px rgba(' + shadow.color.red + ', ' + shadow.color.green + ', ' + shadow.color.blue + ', ' + shadow.color.alpha + '); }'));

        for (let lbl of this.icon_labels) {
            lbl.get_style_context().add_provider(this.icon_shadow_provider, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
            lbl.get_style_context().add_class('demo-panel-shadow');
        }
        this.icon_shadow = shadow;
    },
    set_text_shadow: function(shadow) {
        for (let lbl of this.text_labels) {
            lbl.get_style_context().remove_provider(this.text_shadow_provider);
        }
        if (shadow === null) {
            return;
        }
        this.text_shadow_provider.load_from_data('.demo-panel-shadow { text-shadow: ' + shadow.h_offset + 'px ' + shadow.y_offset + 'px ' + shadow.blur + 'px rgba(' + shadow.color.red + ', ' + shadow.color.green + ', ' + shadow.color.blue + ', ' + shadow.color.alpha + '); }');
        for (let lbl of this.text_labels) {
            lbl.get_style_context().add_provider(this.text_shadow_provider, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
            lbl.get_style_context().add_class('demo-panel-shadow');
        }
        this.text_shadow = shadow;
    },
    set_text_color: function(color) {
        this.panel.get_style_context().remove_provider(this.text_color_provider);
        this.text_color_provider.load_from_data('.demo-panel-text-color { color: rgba(' + color.red + ', ' + color.green + ', ' + color.blue + ', ' + color.alpha + '); }');
        this.panel.get_style_context().add_provider(this.text_color_provider, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
        this.panel.get_style_context().add_class('demo-panel-text-color');
        this.color = color;
    },
    set_opacity: function(opacity, force_change = false) {
        if (!this.background_color) {
            this.background_color = {};
        }

        this.background_color.alpha = ((opacity / SCALE_FACTOR).toFixed(2));

        if (force_change) {
            this.set_background_color(this.background_color);
        }

    }
});