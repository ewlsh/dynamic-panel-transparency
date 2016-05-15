// Totally stolen from Gnome Tweak Tool
// :p

// Translation: rockon999





const AppRow = new Lang.Class({
    Name: 'DynamicPanelTransparency.AppRow',
    Extends: Gtk.ListBoxRow,
    _init: function (df, options) {
        this.parent();

        let grid = new Gtk.Grid({ column_spacing: 10 });
        let icn = df.get_icon();
        if (icn) {
            img = image_from_gicon(icn);
            grid.attach(img, 0, 0, 1, 1);
        } else {
            img = null;
        }
        let lbl = new Gtk.Label(label = df.get_name(), xalign = 0.0);
        grid.attach_next_to(lbl, img, Gtk.PositionType.RIGHT, 1, 1);
        lbl.hexpand = true;
        lbl.halign = Gtk.Align.START;
        let btn = new Gtk.Button(label = 'Remove');
        grid.attach_next_to(btn, lbl, Gtk.PositionType.RIGHT, 1, 1);
        btn.vexpand = false;
        btn.valign = Gtk.Align.CENTER;
        this.add(grid);
        this.margin_start = 1;
        this.margin_end = 1;
        this.get_style_context().add_class('tweak-startup');
        this.btn = btn;
        this.app_id = df.get_id();
        this.connect('key-press-event', this.on_key_press_event);
    },
    on_key_press_event: function (row, event) {
        if (event.keyval == Gdk.KEY_Delete || event.keyval == Gdk.KEY_KP_Delete || event.keyval == Gdk.KEY_BackSpace) {
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
    let b; let w; let h;
    let response = Gtk.IconSize.lookup(Gtk.IconSize.DIALOG, b, w, h);
    image.set_pixel_size(h);
    return image;
}

function list_header_func(row, before, user_data) {
    if (before && !row.get_header()) {
        row.set_header(Gtk.Separator(Gtk.Orientation.HORIZONTAL));
    }
}

const AppChooser = new Lang.Class({
    Name: 'DynamicPanelTransparency.AppChooser',
    Extends: Gtk.Dialog,
    _init: function (main_window, running_exes, startup_apps) {
        this.running = {};
        this.all = {};
        this.entry = new Gtk.SearchEntry({ placeholder_text: 'Search Applications...' });
        this.entry.set_width_chars(30);
        this.entry.activates_default = true;
        this.searchbar = new Gtk.SearchBar();
        this.searchbar.add(this.entry);
        this.searchbar.hexpand = true;
        let lb = new Gtk.ListBox();
        lb.margin = 5;
        lb.activate_on_single_click = false;
        lb.set_sort_func(this.sort_apps, null);
        //lb.set_header_func(_list_header_func, null);
        lb.set_filter_func(this.list_filter_func, null);
        this.entry.connect('search-changed', this.on_search_entry_changed);
        lb.connect('row-activated', function (b, r) {
            return this.response(Gtk.ResponseType.OK) ? r.get_mapped() : null;
        });
        lb.connect('row-selected', this.on_row_selected);
        let apps = Gio.app_info_get_all();
        for (let a of apps) {
            if (!(a.get_id() in startup_apps)) {
                if (a.should_show()) {
                    let running = (a.get_executable() in running_exes);
                    let w = this.build_widget(a, ('running' ? running : ''));
                    if (w) {
                        this.all[w] = a;
                        this.running[w] = running;
                        lb.add(w);
                    }
                }
            }
        }
        let sw = new Gtk.ScrolledWindow();
        sw.hscrollbar_policy = Gtk.PolicyType.NEVER;
        sw.add(lb);
        this.add_button('_Close', Gtk.ResponseType.CANCEL);
        this.add_button('_Add', Gtk.ResponseType.OK);
        this.set_default_response(Gtk.ResponseType.OK);
        this.get_content_area().pack_start(this.searchbar, false, false, 0);
        this.get_content_area().pack_start(sw, true, true, 0);
        this.set_modal(true);
        this.set_transient_for(main_window);
        this.set_size_request(400, 300);
        this.listbox = lb;
        this.connect('key-press-event', this.on_key_press);
    },

    sort_apps: function (a, b, user_data) {
        let arun = this.running.get(a);
        let brun = this.running.get(b);
        if (arun && !brun) {
            return - 1;
        } else if (!arun && brun) {
            return 1;
        } else {
            aname = this.all.get(a).get_name();
            bname = this.all.get(b).get_name();
            if (aname < bname) {
                return - 1;
            } else if (aname > bname) {
                return 1;
            } else {
                return 0;
            }
        }
    },

    build_widget: function (a, extra) {
        let row = new Gtk.ListBoxRow();
        let g = new Gtk.Grid();
        if (!a.get_name()) {
            return null;
        }
        let icn = a.get_icon();
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
        if (extra) {
            g.attach_next_to(Gtk.Label(label = extra), lbl, Gtk.PositionType.RIGHT, 1, 1);
        }
        row.add(g);
        row.get_style_context().add_class('tweak-white');
        return row;
    },

    list_filter_func: function (row, unused) {
        let txt = this.entry.get_text().lower();
        let grid = row.get_child();
        for (let sib of grid.get_children()) {
            if (typeof (sib) == Gtk.Label) {
                if (sib.get_text().toLowerCase().contains(txt)) {
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
            if (!this.entry.is_focus() && this.searchbar.get_search_mode()) {
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
    },

    get_selected_app: function () {
        row = this.listbox.get_selected_row();
        if (row) {
            return this.all.get(row);
        }
        return null;
    }
});


