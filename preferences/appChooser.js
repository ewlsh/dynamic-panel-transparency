import GObjectClass from './classShim';
import * as Tweaks from './tweaks';
import {
  Gdk, Gio, Gtk, GObject
} from '../imports/gi';
import { ExtensionUtils } from '../imports/misc';

const gtk30_ = imports.gettext.domain('gtk30').gettext;

/* Translated and modified from gnome-tweak-tool's StartupTweak.py */
// TODO: Transition UI to XML.

function sort_apps(a, b) {
  let aname;
  let bname;
  let info;

  if (typeof a.__dpt__info !== 'undefined') {
    info = a.__dpt__info;
  }

  if (typeof info === 'string') {
    aname = Tweaks.by_uuid(info).name;
  } else if (info !== null) {
    aname = info.get_name();
  }

  if (typeof b.__dpt__info !== 'undefined') {
    info = b.__dpt__info;
  }

  if (typeof info === 'string') {
    bname = Tweaks.by_uuid(info).name;
  } else if (info !== null) {
    bname = info.get_name();
  }

  if (aname < bname) {
    return -1;
  }
  if (aname > bname) {
    return 1;
  }
  return 0;
}

function build_widget(app_info) {
  const name = app_info.get_name();
  const icon = app_info.get_icon();

  const row = new Gtk.ListBoxRow();

  const row_grid = new Gtk.Grid();

  row_grid.set_margin_start(10);
  row_grid.set_margin_end(10);
  row_grid.set_column_spacing(5);

  if (!name) {
    return null;
  }

  let img = null;

  if (icon) {
    img = Gtk.Image.new_from_gicon(icon, Gtk.IconSize.MENU);
  } else {
    img = Gtk.Image.new_from_icon_name('dialog-question', Gtk.IconSize.MENU);
  }

  row_grid.attach(img, 0, 0, 1, 1);

  img.hexpand = false;

  const list_box = new Gtk.Label({
    label: name,
    xalign: 0,
    hexpand: true,
    vexpand: false,
    halign: Gtk.Align.START,
    valign: Gtk.Align.CENTER
  });
  row_grid.attach_next_to(list_box, img, Gtk.PositionType.RIGHT, 1, 1);

  row.add(row_grid);
  row.show_all();

  row.__dpt__info = app_info;

  return row;
}

const AppChooser = GObjectClass(
  class AppChooser extends Gtk.Dialog {
    _init(main_window, excluded_apps) {
      super._init({
        title: gtk30_('Select Application'),
        use_header_bar: true
      });

      this.entry = new Gtk.SearchEntry();
      this.entry.set_width_chars(30);
      this.entry.activates_default = true;
      this.searchbar = new Gtk.SearchBar();
      this.searchbar.add(this.entry);
      this.searchbar.hexpand = true;

      const list_box = new Gtk.ListBox();
      list_box.activate_on_single_click = false;
      list_box.set_sort_func(sort_apps.bind(this));
      list_box.set_header_func((row, before) => {
        if (before && !row.get_header()) {
          row.set_header(
            new Gtk.Separator({
              orientation: Gtk.Orientation.HORIZONTAL
            })
          );
        }
      });
      list_box.set_filter_func(this.list_filter_func.bind(this));
      this.entry.connect('search-changed', this.on_search_entry_changed.bind(this));
      list_box.connect('row-activated', (_, r) => (this.response(Gtk.ResponseType.OK) ? r.get_mapped() : null));
      list_box.connect('row-selected', this.on_row_selected.bind(this));

      Gio.app_info_get_all()
        .filter(
          app_info => app_info.should_show() && excluded_apps.indexOf(app_info.get_id()) === -1
        )
        .map(app_info => build_widget(app_info))
        .forEach(widget => list_box.add(widget));

      Tweaks.get_tweaks().forEach((tweak) => {
        if (ExtensionUtils.extensions[tweak.uuid]) {
          const app_widget = build_widget(tweak.name, null);

          if (app_widget) {
            list_box.add(app_widget);
            app_widget.__dpt__info = tweak.uuid;
          }
        }
      });

      const scrolled_window = new Gtk.ScrolledWindow();
      scrolled_window.hscrollist_boxar_policy = Gtk.PolicyType.NEVER;
      scrolled_window.add(list_box);
      scrolled_window.margin = 5;

      this.add_button(gtk30_('_Close'), Gtk.ResponseType.CANCEL);
      this.add_button(gtk30_('_Select'), Gtk.ResponseType.OK);
      this.set_default_response(Gtk.ResponseType.OK);
      const searchbtn = new Gtk.ToggleButton();
      searchbtn.valign = Gtk.Align.CENTER;
      const image = new Gtk.Image({
        icon_name: 'edit-find-symbolic',
        icon_size: Gtk.IconSize.MENU
      });
      searchbtn.add(image);
      const context = searchbtn.get_style_context();
      context.add_class('image-button');
      context.remove_class('text-button');
      this.get_header_bar().pack_end(searchbtn);
      this._binding = searchbtn.bind_property(
        'active',
        this.searchbar,
        'search-mode-enabled',
        GObject.BindingFlags.BIDIRECTIONAL
      );
      this.get_content_area().pack_start(this.searchbar, false, false, 0);
      this.get_content_area().pack_start(scrolled_window, true, true, 0);
      this.set_modal(true);
      this.set_transient_for(main_window);
      this.set_size_request(400, 300);
      this.listbox = list_box;
      this.connect('key-press-event', this.on_key_press.bind(this));
    }

    list_filter_func(row) {
      const txt = this.entry.get_text().toLowerCase();
      const grid = row.get_child();
      return grid
        .get_children()
        .filter(sib => sib instanceof Gtk.Label)
        .some(
          sib => sib
            .get_text()
            .toLowerCase()
            .indexOf(txt) !== -1
        );
    }

    on_search_entry_changed(editable) {
      this.listbox.invalidate_filter();
      const selected = this.listbox.get_selected_row();
      if (selected && selected.get_mapped()) {
        this.set_response_sensitive(Gtk.ResponseType.OK, true);
      } else {
        this.set_response_sensitive(Gtk.ResponseType.OK, false);
      }
    }

    on_row_selected(row) {
      this.set_response_sensitive(Gtk.ResponseType.OK, row && row.get_mapped());
    }

    on_key_press(widget, event) {
      const mods = event.state & Gtk.accelerator_get_default_mod_mask(); // eslint-disable-line
      if (event.keyval === this.search_key && mods === this.search_mods) {
        this.searchbar.set_search_mode(!this.searchbar.get_search_mode());
        return true;
      }

      const keyname = Gdk.keyval_name(event.keyval);
      if (keyname === 'Escape') {
        if (this.searchbar.get_search_mode()) {
          this.searchbar.set_search_mode(false);
          return true;
        }
      } else if (!(keyname === 'Up' || keyname === 'Down')) {
        if (!this.entry.has_focus && this.searchbar.get_search_mode()) {
          if (this.entry.im_context_filter_keypress(event)) {
            this.entry.grab_focus();
            const l = this.entry.get_text_length();
            this.entry.select_region(l, l);
            return true;
          }
          return this.searchbar.handle_event(event);
        }
        return false;
      }
      return false;
    }

    get_selected_app() {
      const row = this.listbox.get_selected_row();

      if (row) {
        const rowData = row.__dpt__info;
        return rowData;
      }

      return null;
    }
  }
);

export default AppChooser;
