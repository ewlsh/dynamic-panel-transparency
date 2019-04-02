/* exported init, buildPrefsWidget */

const {
  gi: {
    GLib, GObject, Gdk, Gio, Gtk
  },
  appChooser: AppChooser,
  appRow: AppRow,
  tweaks: Tweaks
} = imports;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const { convenience: Convenience, util: Util } = Me.imports;

const Gettext = imports.gettext.domain('dynamic-panel-transparency');
const _ = Gettext.gettext;

const gtk30_ = imports.gettext.domain('gtk30').gettext;

/* Settings Keys */
const Settings = {
  ENABLE_BACKGROUND_COLOR: 'enable-background-color',
  ENABLE_BACKGROUND_TWEAKS: 'enable-background-tweaks',
  ENABLE_MAXIMIZED_TEXT_COLOR: 'enable-maximized-text-color',
  ENABLE_OPACITY: 'enable-opacity',
  ENABLE_OVERVIEW_TEXT_COLOR: 'enable-overview-text-color',
  ENABLE_TEXT_COLOR: 'enable-text-color',
  HIDE_CORNERS: 'hide-corners',
  ICON_SHADOW: 'icon-shadow',
  ICON_SHADOW_COLOR: 'icon-shadow-color',
  ICON_SHADOW_POSITION: 'icon-shadow-position',
  MAXIMIZED_OPACITY: 'maximized-opacity',
  MAXIMIZED_TEXT_COLOR: 'maximized-text-color',
  PANEL_COLOR: 'panel-color',
  REMOVE_PANEL_STYLING: 'remove-panel-styling',
  TEXT_COLOR: 'text-color',
  TEXT_SHADOW: 'text-shadow',
  TEXT_SHADOW_COLOR: 'text-shadow-color',
  TEXT_SHADOW_POSITION: 'text-shadow-position',
  TRANSITION_SPEED: 'transition-speed',
  TRANSITION_WITH_OVERVIEW: 'transition-with-overview',
  TRANSITION_WINDOWS_TOUCH: 'transition-windows-touch',
  UNMAXIMIZED_OPACITY: 'unmaximized-opacity'
};
Object.freeze(Settings);

const Page = {
  TRANSITIONS: 0,
  FOREGROUND: 1,
  BACKGROUND: 2,
  APP_TWEAKS: 3,
  ABOUT: 4
};
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
  Convenience.initTranslations();
}

/* UI Setup */
function buildPrefsWidget() {
  /* Stores settings until the user applies them. */

  /* Get Settings */
  const settings = Convenience.getSettings();
  /* Create a UI Builder */
  const builder = new Gtk.Builder();
  /* Setup Translation */
  builder.set_translation_domain(Me.metadata['gettext-domain']);
  /* Get UI File */
  builder.add_from_file(`${Me.path}/preferences/ui/prefs.ui`);

  /* Main Widget (Grid) */
  const main_widget = builder.get_object('main_box');

  /* Tabs */
  const main_notebook = builder.get_object('main_notebook');

  /* Used for special functions occasionally. */
  const extra_btn = builder.get_object('extra_btn');

  /* Only show the panel & extra button on relevant pages. */
  main_notebook.connect('switch-page', (...[, , index]) => {
    if (index === Page.APP_TWEAKS) {
      extra_btn.show();
    } else {
      extra_btn.hide();
    }
  });

  {
    /* Transition speed control */
    const speed_scale = builder.get_object('speed_scale');
    /* Init value. */
    speed_scale.adjustment.set_value(settings.get_int(Settings.TRANSITION_SPEED));
    /* Add default marking. */
    speed_scale.add_mark(
      settings.get_default_value(Settings.TRANSITION_SPEED).unpack(),
      Gtk.PositionType.BOTTOM,
      _('default')
    );
    /* Add formatting */
    speed_scale.connect('format-value', (widget, value) => `${value}ms`);
    speed_scale.connect('value-changed', (widget) => {
      settings.set_value(
        Settings.TRANSITION_SPEED,
        new GLib.Variant('i', widget.adjustment.get_value())
      );
    });

    const transition_windows_touch = builder.get_object('transition_windows_touch_check');
    transition_windows_touch.set_active(settings.get_boolean(Settings.TRANSITION_WINDOWS_TOUCH));

    transition_windows_touch.connect('toggled', (widget) => {
      settings.set_value(
        Settings.TRANSITION_WINDOWS_TOUCH,
        new GLib.Variant('b', widget.get_active())
      );
    });

    const transition_with_overview = builder.get_object('transition_with_overview_check');
    transition_with_overview.set_active(settings.get_boolean(Settings.TRANSITION_WITH_OVERVIEW));

    transition_with_overview.connect('toggled', (widget) => {
      settings.set_value(
        Settings.TRANSITION_WITH_OVERVIEW,
        new GLib.Variant('b', widget.get_active())
      );
    });
  }

  /* Setup foreground tab */
  {
    const text_color_switch = builder.get_object('text_color_switch');
    const text_color_revealer = builder.get_object('text_color_revealer');

    text_color_switch.set_active(settings.get_boolean(Settings.ENABLE_TEXT_COLOR));
    text_color_switch.connect('state-set', (widget, state) => {
      settings.set_value(Settings.ENABLE_TEXT_COLOR, new GLib.Variant('b', state));
      text_color_revealer.set_reveal_child(state);
    });

    const maximized_text_color_switch = builder.get_object('maximized_text_color_check');
    maximized_text_color_switch.set_active(
      settings.get_boolean(Settings.ENABLE_MAXIMIZED_TEXT_COLOR)
    );

    maximized_text_color_switch.connect('toggled', (widget) => {
      settings.set_value(
        Settings.ENABLE_MAXIMIZED_TEXT_COLOR,
        new GLib.Variant('b', widget.get_active())
      );
    });

    const overview_text_color_switch = builder.get_object('overview_text_color_check');
    overview_text_color_switch.set_active(
      settings.get_boolean(Settings.ENABLE_OVERVIEW_TEXT_COLOR)
    );

    overview_text_color_switch.connect('toggled', (widget) => {
      settings.set_value(
        Settings.ENABLE_OVERVIEW_TEXT_COLOR,
        new GLib.Variant('b', widget.get_active())
      );
    });

    const remove_panel_styling_check = builder.get_object('remove_panel_styling_check');
    remove_panel_styling_check.set_active(settings.get_boolean(Settings.REMOVE_PANEL_STYLING));

    remove_panel_styling_check.connect('toggled', (widget) => {
      settings.set_value(Settings.REMOVE_PANEL_STYLING, new GLib.Variant('b', widget.get_active()));
    });

    const maximized_text_color_btn = builder.get_object('maximized_text_color_btn');

    {
      const [red, green, blue] = settings.get_value(Settings.MAXIMIZED_TEXT_COLOR).deep_unpack();

      const css_color = `rgba(${red},${green},${blue}, 1.0)`;
      const scaled_color = new Gdk.RGBA();

      if (scaled_color.parse(css_color)) {
        maximized_text_color_btn.set_rgba(scaled_color);
      }
    }

    maximized_text_color_btn.connect('color-set', (color_btn) => {
      const color = Util.gdk_to_css_color(color_btn.get_rgba());
      const rgb = [color.red, color.green, color.blue];

      settings.set_value(Settings.MAXIMIZED_TEXT_COLOR, new GLib.Variant('(iii)', rgb));
    });

    const text_color_btn = builder.get_object('text_color_btn');
    const text_color = settings.get_value(Settings.TEXT_COLOR).deep_unpack();

    let css_color = `rgba(${text_color[RED]},${text_color[GREEN]},${text_color[BLUE]}, 1.0)`;
    let scaled_color = new Gdk.RGBA();

    if (scaled_color.parse(css_color)) {
      text_color_btn.set_rgba(scaled_color);
    }

    text_color_btn.connect('color-set', (color_btn) => {
      const color = Util.gdk_to_css_color(color_btn.get_rgba());
      const rgb = [color.red, color.green, color.blue];

      settings.set_value(Settings.TEXT_COLOR, new GLib.Variant('(iii)', rgb));
    });

    const text_shadow_switch = builder.get_object('text_shadow_switch');
    const text_shadow_revealer = builder.get_object('text_shadow_revealer');

    text_shadow_switch.set_active(settings.get_boolean(Settings.TEXT_SHADOW));

    text_shadow_switch.connect('state-set', (widget, state) => {
      settings.set_value(Settings.TEXT_SHADOW, new GLib.Variant('b', state));
      text_shadow_revealer.set_reveal_child(state);
    });

    const text_shadow_vertical_offset = builder.get_object('text_shadow_vertical_offset');
    settings.set_value(
      Settings.TEXT_SHADOW_POSITION,
      settings.get_value(Settings.TEXT_SHADOW_POSITION)
    );
    text_shadow_vertical_offset.set_value(
      settings.get_value(Settings.TEXT_SHADOW_POSITION).deep_unpack()[VERTICAL_OFFSET]
    );
    text_shadow_vertical_offset.connect('value-changed', (widget) => {
      const position = settings.get_value(Settings.TEXT_SHADOW_POSITION).deep_unpack();
      position[VERTICAL_OFFSET] = widget.get_value_as_int();
      settings.set_value(Settings.TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
    });

    const text_shadow_horizontal_offset = builder.get_object('text_shadow_horizontal_offset');
    text_shadow_horizontal_offset.set_value(
      settings.get_value(Settings.TEXT_SHADOW_POSITION).deep_unpack()[HORIZONTAL_OFFSET]
    );
    text_shadow_horizontal_offset.connect('value-changed', (widget) => {
      const position = settings.get_value(Settings.TEXT_SHADOW_POSITION).deep_unpack();
      position[HORIZONTAL_OFFSET] = widget.get_value_as_int();
      settings.set_value(Settings.TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
    });

    const text_shadow_radius = builder.get_object('text_shadow_radius');
    text_shadow_radius.set_value(
      settings.get_value(Settings.TEXT_SHADOW_POSITION).deep_unpack()[BLUR_RADIUS]
    );
    text_shadow_radius.connect('value-changed', (widget) => {
      const position = settings.get_value(Settings.TEXT_SHADOW_POSITION).deep_unpack();
      position[BLUR_RADIUS] = widget.get_value_as_int();
      settings.set_value(Settings.TEXT_SHADOW_POSITION, new GLib.Variant('(iii)', position));
    });

    const text_shadow_color_btn = builder.get_object('text_shadow_color');
    text_shadow_color_btn.show_editor = true;

    const [red, green, blue, alpha] = settings.get_value(Settings.TEXT_SHADOW_COLOR).deep_unpack();

    css_color = `rgba(${red},${green},${blue},${alpha.toFixed(2)})`;
    scaled_color = new Gdk.RGBA();
    if (scaled_color.parse(css_color)) text_shadow_color_btn.set_rgba(scaled_color);

    text_shadow_color_btn.connect('color-set', (color_btn) => {
      const color = Util.gdk_to_css_color(color_btn.get_rgba());
      const mod_alpha = +color_btn.get_rgba().alpha.toFixed(2);

      const rgba = [color.red, color.green, color.blue, mod_alpha];
      settings.set_value(Settings.TEXT_SHADOW_COLOR, new GLib.Variant('(iiid)', rgba));
    });

    const icon_shadow = builder.get_object('icon_shadow_switch');
    const icon_shadow_revealer = builder.get_object('icon_shadow_revealer');

    icon_shadow.set_active(settings.get_boolean(Settings.ICON_SHADOW));

    icon_shadow.connect('state-set', (widget, state) => {
      settings.set_value(Settings.ICON_SHADOW, new GLib.Variant('b', state));
      icon_shadow_revealer.set_reveal_child(state);
    });

    const icon_shadow_vertical_offset = builder.get_object('icon_shadow_vertical_offset');

    settings.set_value(
      Settings.ICON_SHADOW_POSITION,
      settings.get_value(Settings.ICON_SHADOW_POSITION)
    );
    icon_shadow_vertical_offset.set_value(
      settings.get_value(Settings.ICON_SHADOW_POSITION).deep_unpack()[VERTICAL_OFFSET]
    );
    icon_shadow_vertical_offset.connect('value-changed', (widget) => {
      const position = settings.get_value(Settings.ICON_SHADOW_POSITION).deep_unpack();
      position[VERTICAL_OFFSET] = widget.get_value_as_int();
      settings.set_value(Settings.ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
    });
    const icon_shadow_horizontal_offset = builder.get_object('icon_shadow_horizontal_offset');
    icon_shadow_horizontal_offset.set_value(
      settings.get_value(Settings.ICON_SHADOW_POSITION).deep_unpack()[HORIZONTAL_OFFSET]
    );
    icon_shadow_horizontal_offset.connect('value-changed', (widget) => {
      const position = settings.get_value(Settings.ICON_SHADOW_POSITION).deep_unpack();
      position[HORIZONTAL_OFFSET] = widget.get_value_as_int();
      settings.set_value(Settings.ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
    });
    const icon_shadow_radius = builder.get_object('icon_shadow_radius');
    icon_shadow_radius.set_value(
      settings.get_value(Settings.ICON_SHADOW_POSITION).deep_unpack()[BLUR_RADIUS]
    );
    icon_shadow_radius.connect('value-changed', (widget) => {
      const position = settings.get_value(Settings.ICON_SHADOW_POSITION).deep_unpack();
      position[BLUR_RADIUS] = widget.get_value_as_int();
      settings.set_value(Settings.ICON_SHADOW_POSITION, new GLib.Variant('(iii)', position));
    });

    const icon_shadow_color_btn = builder.get_object('icon_shadow_color');
    icon_shadow_color_btn.show_editor = true;

    const icon_shadow_color = settings.get_value(Settings.ICON_SHADOW_COLOR).deep_unpack();

    css_color = `rgba(${icon_shadow_color[RED]},${icon_shadow_color[GREEN]},${
      icon_shadow_color[BLUE]
    },${icon_shadow_color[ALPHA].toFixed(2)})`;
    scaled_color = new Gdk.RGBA();
    if (scaled_color.parse(css_color)) {
      icon_shadow_color_btn.set_rgba(scaled_color);
    }

    icon_shadow_color_btn.connect('color-set', (color_btn) => {
      const color = Util.gdk_to_css_color(color_btn.get_rgba());
      const mod_alpha = +color_btn.get_rgba().alpha.toFixed(2);

      const rgba = [color.red, color.green, color.blue, mod_alpha];

      settings.set_value(Settings.ICON_SHADOW_COLOR, new GLib.Variant('(iiid)', rgba));
    });
  }

  /* Setup Background Tab */
  {
    const background_color_switch = builder.get_object('background_color_switch');
    const opacity_switch = builder.get_object('opacity_switch');
    const background_color_revealer = builder.get_object('background_color_revealer');
    const opacity_revealer = builder.get_object('opacity_revealer');

    background_color_switch.set_active(settings.get_boolean(Settings.ENABLE_BACKGROUND_COLOR));
    background_color_switch.connect('state-set', (widget, state) => {
      settings.set_value(Settings.ENABLE_BACKGROUND_COLOR, new GLib.Variant('b', state));
      background_color_revealer.set_reveal_child(state);
    });

    opacity_switch.set_active(settings.get_boolean(Settings.ENABLE_OPACITY));
    opacity_switch.connect('state-set', (widget, state) => {
      settings.set_value(Settings.ENABLE_OPACITY, new GLib.Variant('b', state));
      opacity_revealer.set_reveal_child(state);
    });

    /* Maximum opacity control */
    const maximum_scale = builder.get_object('maximum_scale');
    /* Init value. */
    maximum_scale.adjustment.set_value(settings.get_int(Settings.MAXIMIZED_OPACITY));
    /* Add formatting */
    maximum_scale.connect(
      'format-value',
      (scale, value) => `${((value / SCALE_FACTOR) * 100).toFixed(0)}%` // eslint-disable-line no-magic-numbers
    );
    maximum_scale.connect('value-changed', (widget) => {
      settings.set_value(
        Settings.MAXIMIZED_OPACITY,
        new GLib.Variant('i', widget.adjustment.get_value())
      );
    });

    /* Minimum opacity control */
    const minimum_scale = builder.get_object('minimum_scale');
    /* Init value. */
    minimum_scale.adjustment.set_value(settings.get_int(Settings.UNMAXIMIZED_OPACITY));
    /* Add formatting */
    minimum_scale.connect(
      'format-value',
      (scale, value) => `${((value / SCALE_FACTOR) * 100).toFixed(0)}%` // eslint-disable-line no-magic-numbers
    );
    minimum_scale.connect('value-changed', (widget) => {
      settings.set_value(
        Settings.UNMAXIMIZED_OPACITY,
        new GLib.Variant('i', widget.adjustment.get_value())
      );
    });

    /* Convert & scale color. */
    const panel_color = settings.get_value(Settings.PANEL_COLOR).deep_unpack();

    const color_btn = builder.get_object('color_btn');
    const css_color = `rgba(${panel_color[RED]},${panel_color[GREEN]},${panel_color[BLUE]}, 1.0)`;

    const scaled_color = new Gdk.RGBA();
    if (scaled_color.parse(css_color)) {
      color_btn.set_rgba(scaled_color);
    }
    color_btn.connect('color-set', (widget) => {
      const color = Util.gdk_to_css_color(widget.get_rgba());
      const rgb = [color.red, color.green, color.blue];

      settings.set_value(Settings.PANEL_COLOR, new GLib.Variant('ai', rgb));
    });

    const hide_corners = builder.get_object('hide_corners_check');
    hide_corners.set_active(settings.get_boolean(Settings.HIDE_CORNERS));

    hide_corners.connect('toggled', (widget) => {
      settings.set_value(Settings.HIDE_CORNERS, new GLib.Variant('b', widget.get_active()));
    });
  }

  /* Setup App Settings Tab */
  {
    const app_list = builder.get_object('app_list');
    app_list.set_sort_func((a, b) => {
      if (a.constructor === AppRow.AddAppRow) {
        return 1;
      }
      if (b.constructor === AppRow.AddAppRow) {
        return -1;
      }

      if (a.constructor !== AppRow.AppRow) {
        return 1;
      }
      if (b.constructor !== AppRow.AppRow) {
        return -1;
      }
      const aname = a.app_name;
      const bname = b.app_name;
      if (aname < bname) {
        return -1;
      }
      if (aname > bname) {
        return 1;
      }
      return 0;
    });

    const app_overrides = settings.get_strv('app-overrides');
    const window_overrides = settings.get_strv('window-overrides');

    const window_rmv = (wm_class, row) => {
      const overrides = settings.get_strv('window-overrides');
      let index = overrides.indexOf(wm_class);
      if (index !== -1) {
        overrides.splice(index, 1);
      }
      settings.set_strv('window-overrides', overrides);

      const triggers = settings.get_strv('trigger-windows');
      index = triggers.indexOf(wm_class);
      if (index !== -1) {
        triggers.splice(index, 1);
      }
      settings.set_strv('trigger-windows', triggers);

      app_list.remove(row);
    };
    const tweak_rmv = (wm_class, row, extra_wm_class) => {
      const overrides = settings.get_strv('window-overrides');
      let index = overrides.indexOf(wm_class);
      if (index !== -1) {
        overrides.splice(index, 1);
      }
      settings.set_strv('window-overrides', overrides);

      const triggers = settings.get_strv('trigger-windows');
      index = triggers.indexOf(wm_class);
      if (index !== -1) {
        triggers.splice(index, 1);
      }
      settings.set_strv('trigger-windows', triggers);

      extra_wm_class.forEach((extra) => {
        const win_overrides = settings.get_strv('window-overrides');
        let found_index = win_overrides.indexOf(extra);
        if (found_index !== -1) {
          win_overrides.splice(found_index, 1);
        }
        settings.set_strv('window-overrides', win_overrides);

        const win_triggers = settings.get_strv('trigger-windows');
        found_index = win_triggers.indexOf(extra);
        if (found_index !== -1) {
          win_triggers.splice(found_index, 1);
        }
        settings.set_strv('trigger-windows', win_triggers);
      });

      app_list.remove(row);
    };
    const rmv = (app_id, row) => {
      const overrides = settings.get_strv('app-overrides');
      let index = overrides.indexOf(app_id);
      if (index !== -1) {
        overrides.splice(index, 1);
      }
      settings.set_strv('app-overrides', overrides);

      const triggers = settings.get_strv('trigger-apps');
      index = triggers.indexOf(app_id);
      if (index !== -1) {
        triggers.splice(index, 1);
      }
      settings.set_strv('trigger-apps', triggers);

      app_list.remove(row);
    };

    const cfg = (app_name, app_id, path, extras = []) => {
      const temp_app_settings = {
        background_tweaks: null,
        maximum_opacity: null,
        panel_color: null,
        always_trigger: null
      };

      const app_prefs_builder = new Gtk.Builder();
      /* Setup Translation */
      app_prefs_builder.set_translation_domain(Me.metadata['gettext-domain']);
      /* Get UI File */
      app_prefs_builder.add_from_file(`${Me.path}/preferences/ui/app-prefs.ui`);

      const dialog = new Gtk.Dialog({
        use_header_bar: true,
        modal: true,
        title: app_name
      });

      dialog.get_header_bar().set_subtitle(_('App Tweaks'));

      dialog.add_button(gtk30_('_Cancel'), Gtk.ResponseType.CANCEL);
      dialog.add_button(gtk30_('_Apply'), Gtk.ResponseType.APPLY);

      dialog.transient_for = main_widget.get_toplevel();
      const custom_path = `${path}${app_id}/`;
      const obj = Convenience.getSchemaObj(
        'org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides'
      );
      const app_settings = new Gio.Settings({
        path: custom_path,
        settings_schema: obj
      });

      const content_area = dialog.get_content_area();
      content_area.add(app_prefs_builder.get_object('main_box'));

      const background_tweaks_switch = app_prefs_builder.get_object('background_tweaks_switch');
      const background_tweaks_revealer = app_prefs_builder.get_object('background_tweaks_revealer');
      background_tweaks_switch.set_active(
        app_settings.get_boolean(Settings.ENABLE_BACKGROUND_TWEAKS)
      );
      background_tweaks_revealer.set_reveal_child(background_tweaks_switch.get_active());
      background_tweaks_switch.connect('state-set', (widget, state) => {
        temp_app_settings.background_tweaks = state;
        background_tweaks_revealer.set_reveal_child(state);
      });

      const _maximum_scale = app_prefs_builder.get_object('maximum_scale');
      /* Init value. */
      _maximum_scale.adjustment.set_value(app_settings.get_int(Settings.MAXIMIZED_OPACITY));
      /* Add formatting */
      _maximum_scale.connect(
        'format-value',
        (scale, value) => `${((value / SCALE_FACTOR) * 100).toFixed(0)}%` // eslint-disable-line no-magic-numbers
      );
      _maximum_scale.connect('value-changed', (widget) => {
        temp_app_settings.maximum_opacity = widget.adjustment.get_value();
      });

      const _always_trigger = app_prefs_builder.get_object('always_trigger');
      _always_trigger.connect('toggled', (widget) => {
        temp_app_settings.always_trigger = widget.get_active();
      });

      {
        let trigger_key = null;
        if (path.indexOf('windowOverrides') !== -1) {
          trigger_key = 'trigger-windows';
        } else {
          trigger_key = 'trigger-apps';
        }
        const triggers = settings.get_strv(trigger_key);
        _always_trigger.set_active(triggers.indexOf(app_id) !== -1);
      }

      const _color_btn = app_prefs_builder.get_object('color_btn');

      const _panel_color = app_settings.get_value(Settings.PANEL_COLOR).deep_unpack();

      const css_color = `rgba(${_panel_color[RED]},${_panel_color[GREEN]},${
        _panel_color[BLUE]
      }, 1.0)`;
      const scaled_color = new Gdk.RGBA();
      if (scaled_color.parse(css_color)) _color_btn.set_rgba(scaled_color);

      _color_btn.connect('color-set', (color_btn) => {
        const color = Util.gdk_to_css_color(color_btn.get_rgba());
        const rgb = [color.red, color.green, color.blue];

        temp_app_settings.panel_color = rgb;
      });

      dialog.show_all();

      const response = dialog.run();

      if (response === Gtk.ResponseType.APPLY) {
        if (temp_app_settings.background_tweaks !== null) {
          app_settings.set_value(
            Settings.ENABLE_BACKGROUND_TWEAKS,
            new GLib.Variant('b', temp_app_settings.background_tweaks)
          );
        }
        if (temp_app_settings.panel_color !== null) {
          app_settings.set_value(
            Settings.PANEL_COLOR,
            new GLib.Variant('(iii)', temp_app_settings.panel_color)
          );
        }
        if (temp_app_settings.maximum_opacity !== null) {
          app_settings.set_value(
            Settings.MAXIMIZED_OPACITY,
            new GLib.Variant('i', temp_app_settings.maximum_opacity)
          );
        }
        if (temp_app_settings.always_trigger !== null) {
          let trigger_key = null;

          if (path.indexOf('windowOverrides') !== -1) {
            trigger_key = 'trigger-windows';
          } else {
            trigger_key = 'trigger-apps';
          }

          const triggers = settings.get_strv(trigger_key);
          const index = triggers.indexOf(app_id);

          if (temp_app_settings.always_trigger && index === -1) {
            triggers.push(app_id);
          } else if (!temp_app_settings.always_trigger && index !== -1) {
            triggers.splice(index, 1);
          }
          settings.set_strv(trigger_key, triggers);
        }

        extras.forEach((extra) => {
          const extra_custom_path = `${path}${extra}/`;
          const extra_obj = Convenience.getSchemaObj(
            'org.gnome.shell.extensions.dynamic-panel-transparency.appOverrides'
          );
          const extra_settings = new Gio.Settings({
            path: extra_custom_path,
            settings_schema: extra_obj
          });

          if (temp_app_settings.background_tweaks !== null) {
            extra_settings.set_value(
              Settings.ENABLE_BACKGROUND_TWEAKS,
              new GLib.Variant('b', temp_app_settings.background_tweaks)
            );
          }
          if (temp_app_settings.panel_color !== null) {
            extra_settings.set_value(
              Settings.PANEL_COLOR,
              new GLib.Variant('(iii)', temp_app_settings.panel_color)
            );
          }
          if (temp_app_settings.maximum_opacity !== null) {
            extra_settings.set_value(
              Settings.MAXIMIZED_OPACITY,
              new GLib.Variant('i', temp_app_settings.maximum_opacity)
            );
          }
          if (temp_app_settings.always_trigger !== null) {
            let trigger_key = null;

            if (path.indexOf('windowOverrides') !== -1) {
              trigger_key = 'trigger-windows';
            } else {
              trigger_key = 'trigger-apps';
            }

            const triggers = settings.get_strv(trigger_key);
            const index = triggers.indexOf(app_id);

            if (temp_app_settings.always_trigger && index === -1) {
              triggers.push(app_id);
            } else if (!temp_app_settings.always_trigger && index !== -1) {
              triggers.splice(index, 1);
            }
            settings.set_strv(trigger_key, triggers);
          }
        });
      }

      content_area.remove(app_prefs_builder.get_object('main_box'));
      dialog.destroy();
    };

    const app_cfg = (app_name, app_id) => {
      cfg.call(
        this,
        app_name,
        app_id,
        '/org/gnome/shell/extensions/dynamic-panel-transparency/appOverrides/'
      );
    };
    const window_cfg = (name, wm_class) => {
      cfg.call(
        this,
        wm_class,
        wm_class,
        '/org/gnome/shell/extensions/dynamic-panel-transparency/windowOverrides/'
      );
    };
    const tweak_cfg = (name, wm_class, extra_wm_class) => {
      cfg.call(
        this,
        name,
        wm_class,
        '/org/gnome/shell/extensions/dynamic-panel-transparency/windowOverrides/',
        extra_wm_class
      );
    };

    app_overrides
      .map(override => Gio.DesktopAppInfo.new(override))
      .filter(a => a)
      .map(app_info => new AppRow.AppRow(app_info, app_cfg, rmv))
      .forEach((row) => {
        row.show_all();
        app_list.add(row);
      });

    const current_tweaks = [];

    window_overrides.forEach((override) => {
      const tweak = Tweaks.by_wm_class(override);
      if (tweak) {
        const found = current_tweaks //
          .some(added_tweak => added_tweak.wm_class //
            .some(wm_class => tweak.wm_class.indexOf(wm_class) !== -1));

        if (!found) {
          const extra_wm_class = tweak.wm_class.length <= 1 ? [] : tweak.wm_class.slice(1);
          const row = new AppRow.CustomRow(
            tweak.name,
            tweak.wm_class[0],
            tweak_cfg,
            tweak_rmv,
            extra_wm_class
          );
          row.show_all();
          app_list.add(row);
          current_tweaks.push(tweak);
        }
      } else {
        const row = new AppRow.CustomRow(override, override, window_cfg, window_rmv);
        row.show_all();
        app_list.add(row);
      }
    });

    const add = new AppRow.AddAppRow();
    add.btn.connect('clicked', () => {
      Gio.Application.get_default().mark_busy();
      let overrides = settings.get_strv('app-overrides');
      const a2 = new AppChooser.AppChooser(main_widget.get_toplevel(), overrides);
      a2.show_all();
      Gio.Application.get_default().unmark_busy();
      const response = a2.run();
      if (response === Gtk.ResponseType.OK) {
        const selected_app = a2.get_selected_app();
        if (selected_app) {
          if (typeof selected_app === 'string') {
            const tweak = Tweaks.by_uuid(selected_app);
            if (tweak) {
              const row = new AppRow.CustomRow(
                tweak.name,
                tweak.wm_class[0],
                tweak_cfg,
                tweak_rmv,
                tweak.wm_class.slice(1)
              );
              row.show_all();
              app_list.add(row);
              overrides = [...settings.get_strv('window-overrides')];
              tweak.wm_class
                .filter(wm_class => overrides.indexOf(wm_class) === -1)
                .forEach(wm_class => overrides.push(wm_class));

              settings.set_strv('window-overrides', overrides);

              if (typeof tweak.trigger !== 'undefined' && tweak.trigger !== null) {
                const triggers = [...settings.get_strv('trigger-windows')];
                tweak.wm_class
                  .filter(wm_class => triggers.indexOf(wm_class) === -1)
                  .forEach(wm_class => triggers.push(wm_class));
                settings.set_strv('trigger-windows', triggers);
              }
            }
          } else {
            const row = new AppRow.AppRow(selected_app, app_cfg, rmv);
            row.show_all();
            app_list.add(row);
            overrides = settings.get_strv('app-overrides');
            if (overrides.indexOf(selected_app.get_id()) === -1) {
              overrides.push(selected_app.get_id());
            }
            settings.set_strv('app-overrides', overrides);
          }
        }
      }
      a2.destroy();
    });

    extra_btn.connect('clicked', () => {
      if (main_notebook.get_current_page() === Page.APP_TWEAKS) {
        const dialog = new Gtk.Dialog({
          modal: true,
          title: _('Add a Custom WM_CLASS')
        });

        dialog.transient_for = main_widget.get_toplevel();

        dialog.add_button(gtk30_('_Cancel'), Gtk.ResponseType.CANCEL);
        dialog.add_button(gtk30_('_OK'), Gtk.ResponseType.OK);

        const content_area = dialog.get_content_area();
        content_area.add(builder.get_object('wm_class_contents'));

        const revealer = builder.get_object('error_revealer');
        const entry = builder.get_object('wm_class_entry');

        dialog.connect('response', (widget, response) => {
          if (response === Gtk.ResponseType.OK) {
            const text = entry.get_text();
            if (!text) {
              revealer.set_reveal_child(true);
              GObject.signal_stop_emission_by_name(widget, 'response');
            }
          }
        });

        dialog.set_size_request(400, 100); // eslint-disable-line
        dialog.show_all();

        const response = dialog.run();
        const text = entry.get_text();

        if (response === Gtk.ResponseType.OK) {
          const row = new AppRow.CustomRow(text, window_cfg, window_rmv);
          row.show_all();
          app_list.add(row);
          const overrides = settings.get_strv('window-overrides');
          if (overrides.indexOf(text) === -1) {
            overrides.push(text);
            settings.set_strv('window-overrides', overrides);
          }
        }

        content_area.remove(builder.get_object('wm_class_contents'));
        dialog.destroy();
      }
    });
    app_list.add(add);
  }

  /* Util function to find UI elements in a GTK dialog. */
  function find(container, names, base_level = 0) {
    let level = base_level;
    let target = null;
    container.forall((child) => {
      if (child.get_name() === names[level]) {
        level += 1;

        if (level === names.length) {
          target = child;
        } else {
          target = find(child, names, level);
        }
      }
    });
    return target;
  }

  /* Setup About Tab */
  {
    /* Find the stack */
    const about_dialog = builder.get_object('about_dialog');
    about_dialog.set_version(`v${Me.metadata.version}`);

    const contents = about_dialog.get_child();

    const stack = find(contents, ['box', 'stack']);

    /* Find the license page. */
    const license_page = find(stack, ['license_page']);

    /* Get rid of that pesky license page. */
    stack.remove(license_page);

    /* Strip the dialog of its content. */
    about_dialog.remove(contents);

    /* Link the stack switcher (I hate header bars sometimes.) */
    const stack_switcher = builder.get_object('about_switcher');
    stack_switcher.set_stack(stack);

    /* Transfer the contents. */
    const about_box = builder.get_object('about_box');
    about_box.add(contents);

    /* Add some space to the about page. Was a little cramped... */
    let found_box = find(stack, ['page_vbox', 'hbox']);
    if (found_box === null) {
      found_box = find(stack, ['page_vbox']);
    }

    if (found_box !== null) {
      const website_label = find(found_box, ['website_label']);

      if (website_label !== null) {
        found_box.remove(website_label);

        const new_label = Gtk.LinkButton.new_with_label(
          'http://evanwelsh.com/dynamic-panel-transparency',
          gtk30_('Website')
        );

        new_label.set_margin_top(WEBSITE_LABEL_TOP_MARGIN);
        new_label.set_margin_bottom(WEBSITE_LABEL_BOTTOM_MARGIN);
        found_box.add(new_label);
      }
    }
  }

  const widget_parent = main_widget.get_toplevel();

  /* Fix revealer sizing issues. */
  widget_parent.connect('realize', () => {
    extra_btn.hide();
    /* We have to regrab this object as it isn't in this scope. */
    const text_color_revealer = builder.get_object('text_color_revealer');
    text_color_revealer.set_reveal_child(settings.get_boolean(Settings.ENABLE_TEXT_COLOR));
    const background_color_revealer = builder.get_object('background_color_revealer');
    background_color_revealer.set_reveal_child(
      settings.get_boolean(Settings.ENABLE_BACKGROUND_COLOR)
    );
    const opacity_revealer = builder.get_object('opacity_revealer');
    opacity_revealer.set_reveal_child(settings.get_boolean(Settings.ENABLE_OPACITY));
    const text_shadow_revealer = builder.get_object('text_shadow_revealer');
    text_shadow_revealer.set_reveal_child(settings.get_boolean(Settings.TEXT_SHADOW));
    const icon_shadow_revealer = builder.get_object('icon_shadow_revealer');
    icon_shadow_revealer.set_reveal_child(settings.get_boolean(Settings.ICON_SHADOW));
  });

  /* Return main widget. */
  main_widget.show_all();
  return main_widget;
}
