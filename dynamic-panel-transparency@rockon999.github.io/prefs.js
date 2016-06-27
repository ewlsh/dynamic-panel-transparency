const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;
const Gio = imports.gi.Gio;
const GObject = imports.gi.GObject;
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
    'Add Text Shadow': _("Add Text Shadow"),
    'Text Color': _("Text Color"),
    'Default': _("Default"),
    'Light': _("Light"),
    'Dark': _("Dark"),
    'Darker': _("Darker")
};

/* Settings Keys */
const SETTINGS_HIDE_CORNERS = 'hide-corners';
const SETTINGS_TRANSITION_SPEED = 'transition-speed';
const SETTINGS_DETECT_THEME = 'detect-user-theme';
const SETTINGS_TEXT_SHADOW = 'text-shadow';
const SETTINGS_FORCE_ANIMATION = 'force-animation';
const SETTINGS_UNMAXIMIZED_OPACITY = 'unmaximized-opacity';
const SETTINGS_MAXIMIZED_OPACITY = 'maximized-opacity';
const SETTINGS_PANEL_COLOR = 'panel-color';
const SETTINGS_TEXT_COLOR = 'panel-text-color';
const SETTINGS_USER_THEME_SOURCE = 'user-theme-source';

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
    let main_widget = builder.get_object('main_box');

    let panel_background = builder.get_object('panel_demo_background');
    let panel_demo = new DemoPanel(panel_background);
    //panel_background.override_background_color(Gtk.StateType.NORMAL, new Gdk.RGBA({red:0,green:0,blue:0,alpha:1.0}));
    //panel_background.override_color(Gtk.StateType.NORMAL, new Gdk.RGBA({red:255,green:255,blue:255,alpha:1.0}));
    panel_demo.set_bg_color(new Gdk.RGBA({ red: 0, green: 0, blue: 0, alpha: 1.0 }));
    panel_demo.set_text_color(new Gdk.RGBA({ red: 255, green: 255, blue: 255, alpha: 1.0 }));


    /* Util function for easily setting labels */
    //function //setLabel(obj, label) {
    //    builder.get_object(obj).set_label(label);
    //}

    ////setLabel('speed_label', '<b>' + Dictionary['Transition Speed'] + '</b>');

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


       // panel_demo.set_opacity(widget.get_value(), true);
         temp_settings.store(SETTINGS_TRANSITION_SPEED, new GLib.Variant('i', widget.adjustment.get_value()));
      //   panel_demo.fade_in();
    }));

    ////setLabel('maximum_label', '<b>' + Dictionary['Maximum Opacity'] + '</b>');

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
      //   panel_demo.fade_in();
    }));

    //setLabel('minimum_label', '<b>' + Dictionary['Minimum Opacity'] + '</b>');

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

    //setLabel('detect_theme_label', '<b>' + Dictionary['Detect User Theme'] + '</b>');

    let theme_switch = builder.get_object('theme_switch');
    theme_switch.set_active(settings.get_boolean(SETTINGS_DETECT_THEME));

    theme_switch.connect('activate', Lang.bind(this, function(){
         temp_settings.store(SETTINGS_DETECT_THEME, new GLib.Variant('b', widget.get_active()));
    }));

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


    builder.get_object('theme_switch').connect('state-set', Lang.bind(this, function (widget, state) {
        if (state) {
            detect_theme_label.set_sensitive(true);
            theme_label.set_label(Dictionary['Theme Source']);
            theme_stack.set_visible_child(theme_source_box);
        } else {
            detect_theme_label.set_sensitive(false);
            theme_label.set_label(Dictionary['Panel Color']);
            theme_stack.set_visible_child(color_btn);
        }

    }));

    theme_source_box.append_text(Dictionary['Panel']);
    theme_source_box.append_text(Dictionary['Dash']);
    theme_source_box.set_active(settings.get_enum(SETTINGS_USER_THEME_SOURCE));
    theme_source_box.connect('changed', Lang.bind(this, function (widget) {
        //settings.set_enum(SETTINGS_USER_THEME_SOURCE, widget.get_active());
        temp_settings.store(SETTINGS_USER_THEME_SOURCE, widget.get_active());
    }));

    //setLabel('text_color_label', Dictionary['Text Color']);

    let text_color_box = builder.get_object('text_color_btn');

    text_color_box.connect('color-set', Lang.bind(this, function (color) {
        let rgba = color.rgba.to_string();
        let parsed_red = parseInt(rgba.split('(')[1].split(')')[0].split(',')[RED], 10);
        let parsed_green = parseInt(rgba.split('(')[1].split(')')[0].split(',')[GREEN], 10);
        let parsed_blue = parseInt(rgba.split('(')[1].split(')')[0].split(',')[BLUE], 10);

        let rgb = [];
        rgb[RED] = parsed_red;
        rgb[GREEN] = parsed_green;
        rgb[BLUE] = parsed_blue;
        //settings.set_value(SETTINGS_TEXT_COLOR, new GLib.Variant(')', rgb));
        temp_settings.store(SETTINGS_TEXT_COLOR, new GLib.Variant('(iii)', rgb));
        panel_demo.set_text_color({ red: rgb[RED], green: rgb[GREEN], blue: rgb[BLUE], alpha: 100 });
    }));

    /* Convert & scale color. */
    let panel_color = settings.get_value(SETTINGS_PANEL_COLOR).deep_unpack();

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
    hide_corners.set_label(Dictionary['Hide Corners']);

    let force_transition = builder.get_object('force_transition_check');
    force_transition.set_active(settings.get_boolean(SETTINGS_FORCE_ANIMATION));
    force_transition.set_label(Dictionary['Force Animation']);

    let text_shadow = builder.get_object('text_shadow_check');
    text_shadow.set_active(settings.get_boolean(SETTINGS_TEXT_SHADOW));
    text_shadow.set_label(Dictionary['Add Text Shadow']);

    /* Bind settings. */
    /*settings.bind(SETTINGS_TRANSITION_SPEED, speed_scale.adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_DETECT_THEME, theme_switch, 'active', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_UNMAXIMIZED_OPACITY, minimum_scale.adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_HIDE_CORNERS, hide_corners, 'active', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_FORCE_ANIMATION, force_transition, 'active', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_TEXT_SHADOW, text_shadow, 'active', Gio.SettingsBindFlags.DEFAULT);
    settings.bind(SETTINGS_MAXIMIZED_OPACITY, maximum_scale.adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);*/


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
    for (let override of overrides) {
        let app_info = Gio.DesktopAppInfo.new(override);
        if (app_info) {
            let row = new AppRow(app_info);
            row.show_all();
            app_list.add(row);
        }
    }

    let add = new AddAppRow();
    add.btn.connect('clicked', Lang.bind(this, function () {
        Gio.Application.get_default().mark_busy();
        let a2 = new AppChooser(main_widget.get_toplevel());
        a2.show_all();
        Gio.Application.get_default().unmark_busy();
        let response = a2.run();
        if (response == Gtk.ResponseType.OK) {
            let selected_app = a2.get_selected_app();
            if (selected_app) {
                let row = new AppRow(selected_app);
                row.show_all();
                app_list.add(row);
                let overrides = settings.get_strv('app-overrides');
             //   log(overrides);
                overrides.push(selected_app.get_id());
               // log(overrides);
                settings.set_strv('app-overrides', overrides);
            }
        }
        a2.destroy();
    }));
    app_list.add(add);

    let apply_btn = builder.get_object('apply_btn');
    let cancel_btn = builder.get_object('cancel_btn');

    apply_btn.connection('clicked', Lang.bind(this, function(){
        settings.set_value(SETTINGS_TEXT_COLOR, temp_settings.get(SETTINGS_TEXT_COLOR));
        settings.set_value(SETTINGS_PANEL_COLOR,temp_settings.get(SETTINGS_PANEL_COLOR));
        settings.set_enum(SETTINGS_USER_THEME_SOURCE, temp_settings.get(SETTINGS_USER_THEME_SOURCE));
    }));

    cancel_btn.connection('clicked', Lang.bind(this, function(){

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
        this.bg_color = {red: 0, green: 0, blue: 0};
        this.color = {red:0, green:0, blue: 0};
    },
    set_bg_color: function (color) {
        this.panel.get_style_context().remove_provider(this.bg_color_provider);
 //       if(!this.bg_color.alpha)
 //         this.bg_color.alpha = this.bg_color.alpha;
        this.bg_color_provider.load_from_data(".demo-panel-color { background: rgba(" + color.red + ", " + color.green + ", " + color.blue + ", " + color.alpha+ "); }");
        this.panel.get_style_context().add_provider(this.bg_color_provider, 3);
        this.panel.get_style_context().add_class("demo-panel-color");
        this.bg_color = color;
    },
    set_text_color: function (color) {
        this.panel.get_style_context().remove_provider(this.text_color_provider);
        this.text_color_provider.load_from_data(".demo-panel-text-color { color: rgba(" + color.red + ", " + color.green + ", " + color.blue + ", " + color.alpha+ "); }");
        this.panel.get_style_context().add_provider(this.text_color_provider, 3);
        this.panel.get_style_context().add_class("demo-panel-text-color");
        this.color = color;
    },
    set_opacity: function (opacity, change = false) {
        if (!this.bg_color) {
            this.bg_color = {};
        }
        log('2 ' + opacity);
        this.bg_color.alpha = ((opacity / SCALE_FACTOR).toFixed(2));
        log('1 ' + this.bg_color.alpha);
        if(change) {
          this.set_bg_color(this.bg_color);
        }

    },
    set_transition: function (minimum_opacity, time) {
        this.panel.get_style_context().remove_provider(this.transition_provider);
        this.transition_provider.load_from_data(".demo-panel-transition { transition: " + time + "ms linear; }");
        this.panel.get_style_context().add_provider(this.transition_provider);
        this.panel.get_style_context().add_class("demo-panel-transition");
    },
    fade_in: function () {
this.set_bg_color(this.bg_color);
    },
    fade_out: function () {
this.set_bg_color(this.bg_color);
    }
});

const AppRow = new Lang.Class({
    Name: 'DynamicPanelTransparency_AppRow',
    Extends: Gtk.ListBoxRow,
    _init: function (df) {
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
        btn = new Gtk.Button({ label: 'Remove' });
        grid.attach_next_to(btn, lbl, Gtk.PositionType.RIGHT, 1, 1);
        btn.vexpand = false;
        btn.valign = Gtk.Align.CENTER;
        this.add(grid);
        this.margin_start = 1;
        this.margin_end = 1;

        this.btn = btn;
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
        img.set_from_icon_name("list-add-symbolic", Gtk.IconSize.BUTTON);
        this.btn = new Gtk.Button({ label: "", image: img, always_show_image: true });
        this.btn.get_style_context().remove_class("button");
        this.add(this.btn);
        this.get_style_context().add_class('tweak-startup');

    }
});

const AppChooser = new Lang.Class({
    Name: 'DynamicPanelTransparency_AppChooser',
    Extends: Gtk.Dialog,
    _init: function (main_window) {
        this.parent({ title: "Applications", use_header_bar: true });
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
            if (a.should_show()) {
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
        let image = new Gtk.Image({ icon_name: "edit-find-symbolic", icon_size: Gtk.IconSize.MENU })
        searchbtn.add(image);
        let context = searchbtn.get_style_context();
        context.add_class("image-button");
        context.remove_class("text-button");
        this.get_header_bar().pack_end(searchbtn);
        this._binding = searchbtn.bind_property("active", this.searchbar, "search-mode-enabled", GObject.BindingFlags.BIDIRECTIONAL)
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



