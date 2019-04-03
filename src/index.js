/* exported init, enable, disable */
import 'core-js/es/symbol/iterator';

import * as Convenience from '../lib/convenience';
import Intellifade from './intellifade';
import Settings from './settings';
import Events from './events';
import * as Util from '../lib/util';

import Theming from './theming';
import Transitions from './transitions';

const { GLib, Gio, St } = imports.gi;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const { extensionSystem: ExtensionSystem, main } = imports.ui;

const SETTINGS_DELAY = 3000;

const USER_THEME_SCHEMA = 'org.gnome.shell.extensions.user-theme';

/* Only way to prevent multiple runs apparently. Hacky-ness. */
const modified = false;

/* User theme extension settings... */
let theme_settings = null;

/* Initialize */
class Extension {
  enable() {
    this.settingsManager = new Settings();
    this.themingManager = new Theming(this.settingsManager);
    this.transitionManager = new Transitions(this.settingsManager, this.themingManager);
    this.intellifader = new Intellifade(
      this.settingsManager,
      this.transitionManager,
      this.themingManager
    );

    this.eventsManager = new Events(
      this,
      this.transitionManager,
      this.settingsManager,
      this.intellifader,
      this.themingManager
    );

    /* Initialize Settings */
    this.initialize_settings();

    /* Initialize Utilities */

    try {
      const schemaObj = Convenience.getSchemaObj(Me, USER_THEME_SCHEMA, true);

      if (schemaObj) {
        theme_settings = new Gio.Settings({
          settings_schema: schemaObj
        });
      }
    } catch (error) {
      log('[Dynamic Panel Transparency] Failed to find the user theme extension.');
    }

    if (!theme_settings) {
      this.idle_enable(false);
    } else {
      /* Is our data current? */
      let theme_name = theme_settings.get_string('name');
      theme_name = theme_name === '' ? 'Adwaita' : theme_name;

      const current = this.settingsManager.get_current_user_theme();

      if (current !== theme_name || this.settingsManager.force_theme_update()) {
        /* Wait for the theme extension to initialize and enable. */
        this.idle_enable(true, theme_settings);
      } else {
        /* Start the plugin. We have our data. */
        log(
          `[Dynamic Panel Transparency] Using theme data for: ${this.settingsManager._settings.get_string(
            'current-user-theme'
          )}`
        );

        const theme_color = this.settingsManager.get_panel_theme_color();
        const opacity = this.settingsManager.get_theme_opacity();

        this.themingManager.set_theme_background_color(theme_color);
        this.themingManager.set_theme_opacity(opacity);

        /* Modify the panel. */
        this.modify_panel();

        /* Start the event loop. */
        this.eventsManager.initialize();

        /* Simulate window changes. */
        this.intellifader.forceSyncCheck();
      }
    }
  }

  idle_enable(update, idle_theme_settings = null) {
    /* Delay the extension so we can retreive the theme background color
  /* (why are user themes an extension?). */
    GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
      const extension = imports.misc.extensionUtils.getCurrentExtension();

      if (modified) {
        log('[Dynamic Panel Transparency] Attempted to run modifications multiple times.');
        return false;
      }

      if (
        !extension
        || (extension
          && typeof extension.extensionState !== 'undefined'
          && extension.extensionState === ExtensionSystem.ExtensionState.DISABLED)
      ) {
        log('[Dynamic Panel Transparency] Tried to modify the panel while disabled.');
        return false;
      }

      this.modified = true;

      let background = null;

      if (update) {
        log('[Dynamic Panel Transparency] Updating user theme data.');

        const theme = main.panel.actor.get_theme_node();

        const image_background = this.themingManager.get_background_image_color(theme);
        const theme_background = theme.get_background_color();

        background = image_background !== null ? image_background : theme_background;

        let theme_name = idle_theme_settings.get_string('name');
        theme_name = theme_name === '' ? 'Adwaita' : theme_name;

        /* The Settings convenience object wasn't built to handle setting, */
        /* so we use the internal object... */
        this.settingsManager._settings.set_string('current-user-theme', theme_name);
        this.settingsManager._settings.set_value(
          'panel-theme-color',
          new GLib.Variant('(iii)', [background.red, background.green, background.blue])
        );
        this.settingsManager._settings.set_value(
          'theme-opacity',
          new GLib.Variant('i', background.alpha)
        );
        this.settingsManager._settings.set_value(
          'force-theme-update',
          new GLib.Variant('b', false)
        );
        log(
          `[Dynamic Panel Transparency] Detected shell theme style: rgba(${background.red}, ${
            background.green
          }, ${background.blue}, ${background.alpha})`
        );
      } else {
        const color = this.settingsManager.get_panel_theme_color();
        const opacity = this.settingsManager.get_theme_opacity();

        background = {
          red: color.red,
          blue: color.blue,
          green: color.green,
          alpha: opacity
        };
      }

      log(
        `[Dynamic Panel Transparency] Using theme data for: ${this.settingsManager.get_current_user_theme()}`
      );

      this.themingManager.set_theme_background_color(Util.clutter_to_native_color(background));
      this.themingManager.set_theme_opacity(background.alpha);

      /* Modify the panel. */
      this.modify_panel();

      /* Start the event loop. */
      this.eventsManager.initialize();

      /* Simulate window changes. */
      this.intellifader.forceSyncCheck();

      return false;
    });
  }

  cleanup() {
    /* Do this first in case any of the upcoming methods fail. */
    this.unmodify_panel();

    /* Disconnect & Null Signals */
    this.eventsManager.cleanup();

    /* Cleanup Settings */
    this.settingsManager.unbind();
    this.settingsManager.cleanup();

    /* Cleanup Transitions */
    this.transitionManager.cleanup();

    /* Cleanup Theming */
    this.themingManager.cleanup();

    /* Cleanup Intellifade */
    this.intellifader.cleanup();

    /* Shouldn't be an issue, but let's make sure it isn't. */
    this.modified = false;

    return false;
  }

  modify_panel() {
    /* Initial Coloring */
    this.themingManager.initialize();
    this.intellifader.initialize();

    const theme_color = this.themingManager.get_theme_background_color();

    /* Update the corners. */

    this.themingManager.set_corner_color({
      red: theme_color.red,
      green: theme_color.green,
      blue: theme_color.blue
    });

    /* Get Rid of the Panel's CSS Background */
    this.themingManager.initialize_background_styles();

    const text_shadow = this.themingManager.register_text_shadow(
      this.settingsManager.get_text_shadow_color(),
      this.settingsManager.get_text_shadow_position()
    );
    const icon_shadow = this.themingManager.register_icon_shadow(
      this.settingsManager.get_icon_shadow_color(),
      this.settingsManager.get_icon_shadow_position()
    );

    /* Add Text Shadowing */
    if (this.settingsManager.add_text_shadow()) {
      if (text_shadow !== null) {
        this.themingManager.add_text_shadow();
      } else {
        log('[Dynamic Panel Transparency] Failed to enabled text shadowing.');
      }
    }

    /* Add Icon Shadowing */
    if (this.settingsManager.add_icon_shadow()) {
      if (icon_shadow !== null) {
        this.themingManager.add_icon_shadow();
      } else {
        log('[Dynamic Panel Transparency] Failed to enabled icon shadowing.');
      }
    }

    /* Register text color styling. */
    const [text] = this.themingManager.register_text_color(this.settingsManager.get_text_color());

    this.themingManager.register_text_color(
      this.settingsManager.get_maximized_text_color(),
      'maximized'
    );

    if (this.settingsManager.get_enable_text_color()) {
      if (text !== null) {
        this.themingManager.set_text_color();
      } else {
        log('[Dynamic Panel Transparency] Failed to enabled text coloring.');
      }
    }
  }

  unmodify_panel() {
    /* Remove corner styling */
    this.themingManager.clear_corner_color();

    /* Remove Our Styling */
    this.themingManager.reapply_panel_styling();
    this.themingManager.reapply_panel_background_image();

    /* Remove shadowing */
    if (this.themingManager.has_text_shadow()) {
      this.themingManager.remove_text_shadow();
    }

    if (this.themingManager.has_icon_shadow()) {
      this.themingManager.remove_icon_shadow();
    }

    /* Remove text coloring */
    this.themingManager.remove_text_color();

    /* Remove maximized text coloring */
    this.themingManager.remove_text_color('maximized');
  }

  // TODO: Merge handler code or hide it behind the backend.
  initialize_settings() {
    /* Setup settings... */
    this.settingsManager.initialize(this.intellifader);

    /* Register settings... */
    this.settingsManager.add({
      key: 'hide-corners',
      name: 'hide_corners',
      type: 'b',
      handler: () => {
        this.transitionManager.update_corner_alpha();
      }
    });
    this.settingsManager.add({
      key: 'transition-speed',
      name: 'transition_speed',
      type: 'i',
      handler:
        /* Update the backend24 transition CSS. */
        () => {
          main.panel.actor.remove_style_class_name('dpt-panel-transition-duration');

          const theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

          for (let i = this.themingManager.stylesheets.length - 1; i >= 0; i -= 1) {
            const stylesheet = this.themingManager.stylesheets[i];
            if (
              stylesheet.indexOf('transitions') !== -1
              && stylesheet.endsWith('panel-transition-duration.dpt.css')
            ) {
              theme.unload_stylesheet(Util.get_file(stylesheet));
              Util.remove_file(stylesheet);
              this.themingManager.stylesheets.splice(i, 1);
            }
          }

          const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, SETTINGS_DELAY, () => {
            if (id !== this.panel_transition_update_id) {
              return false;
            }

            /* Get Rid of the Panel's CSS Background */
            // TODO: Figure out why it takes applying wierd "fake"
            // style classes to get the real ones working...
            this.themingManager.update_transition_css();

            this.intellifader.forceSyncCheck();

            return false;
          });
          this.panel_transition_update_id = id;
        }
    });
    this.settingsManager.add({
      key: 'unmaximized-opacity',
      name: 'unmaximized_opacity',
      type: 'i',
      getter: 'get_unmaximized_opacity',
      handler: () => {
        const super_id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, SETTINGS_DELAY, () => {
          if (super_id !== this.opacity_update_id) {
            return false;
          }

          const theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

          for (let i = this.themingManager.stylesheets.length - 1; i >= 0; i -= 1) {
            const stylesheet = this.themingManager.stylesheets[i];
            if (stylesheet.indexOf('background') !== -1 && stylesheet.indexOf('panel-') !== -1) {
              theme.unload_stylesheet(Util.get_file(stylesheet));
              Util.remove_file(stylesheet);
              this.themingManager.stylesheets.splice(i, 1);
            }
          }

          this.themingManager.initialize_background_styles();

          const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, SETTINGS_DELAY, () => {
            if (id !== this.panel_color_update_id) {
              return false;
            }

            /* Get Rid of the Panel's CSS Background */
            // TODO: Figure out why it takes applying wierd "fake"
            // style classes to get the real ones working...

            this.themingManager.set_maximized_background_color((Math.random() * 100).toFixed(0));
            this.themingManager.remove_background_color();
            this.themingManager.set_unmaximized_background_color((Math.random() * 100).toFixed(0));
            this.themingManager.remove_background_color();

            this.intellifader.forceSyncCheck();

            return false;
          });

          this.panel_color_update_id = id;

          return false;
        });
        this.opacity_update_id = super_id;
      }
    });
    this.settingsManager.add({
      key: 'maximized-opacity',
      name: 'maximized_opacity',
      type: 'i',
      getter: 'get_maximized_opacity',
      handler: () => {
        const super_id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, SETTINGS_DELAY, () => {
          if (super_id !== this.opacity_update_id) {
            return false;
          }

          const theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

          for (let i = this.themingManager.stylesheets.length - 1; i >= 0; i -= 1) {
            const stylesheet = this.themingManager.stylesheets[i];
            if (stylesheet.indexOf('background') !== -1 && stylesheet.indexOf('panel-') !== -1) {
              theme.unload_stylesheet(Util.get_file(stylesheet));
              Util.remove_file(stylesheet);
              this.themingManager.stylesheets.splice(i, 1);
            }
          }

          this.themingManager.initialize_background_styles();

          const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, SETTINGS_DELAY, () => {
            if (id !== this.panel_color_update_id) {
              return false;
            }

            /* Get Rid of the Panel's CSS Background */
            // TODO: Figure out why it takes applying wierd "fake"
            // style classes to get the real ones working...

            this.themingManager.set_maximized_background_color((Math.random() * 100).toFixed(0));
            this.themingManager.remove_background_color();
            this.themingManager.set_unmaximized_background_color((Math.random() * 100).toFixed(0));
            this.themingManager.remove_background_color();

            this.intellifader.forceSyncCheck();

            return false;
          });

          this.panel_color_update_id = id;

          return false;
        });
        this.opacity_update_id = super_id;
      }
    });
    this.settingsManager.add({
      key: 'panel-color',
      name: 'panel_color',
      type: 'ai',
      parser: Util.tuple_to_native_color,
      handler:
        /* Handler for 3.24+ */
        () => {
          this.themingManager.remove_background_color();

          const theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

          for (let i = this.themingManager.stylesheets.length - 1; i >= 0; i -= 1) {
            const stylesheet = this.themingManager.stylesheets[i];
            if (
              stylesheet.indexOf('background') !== -1
              && stylesheet.indexOf('panel.dpt.css') !== -1
            ) {
              theme.unload_stylesheet(Util.get_file(stylesheet));
              Util.remove_file(stylesheet);
              this.themingManager.stylesheets.splice(i, 1);
            }
          }
          this.themingManager.register_background_color(this.settingsManager.get_panel_color());
          const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, SETTINGS_DELAY, () => {
            if (id !== this.panel_color_update_id) {
              return false;
            }

            /* Get Rid of the Panel's CSS Background */
            // TODO: Figure out why it takes applying wierd "fake"
            // style classes to get the real ones working...

            this.themingManager.set_maximized_background_color((Math.random() * 100).toFixed(0));
            this.themingManager.remove_background_color();
            this.themingManager.set_unmaximized_background_color((Math.random() * 100).toFixed(0));
            this.themingManager.remove_background_color();

            this.intellifader.forceSyncCheck();

            return false;
          });

          this.panel_color_update_id = id;
          /* Legacy Handler */
        }
    });
    this.settingsManager.add({
      key: 'panel-theme-color',
      name: 'panel_theme_color',
      type: '(iii)',
      parser: Util.tuple_to_native_color
    });
    this.settingsManager.add({
      key: 'theme-opacity',
      name: 'theme_opacity',
      type: 'i'
    });
    this.settingsManager.add({
      key: 'force-theme-update',
      name: 'force_theme_update',
      type: 'b',
      getter: 'force_theme_update'
    });
    this.settingsManager.add({
      key: 'current-user-theme',
      name: 'current_user_theme',
      type: 's'
    });
    this.settingsManager.add({
      key: 'trigger-apps',
      name: 'trigger_apps',
      type: 'as'
    });
    this.settingsManager.add({
      key: 'trigger-windows',
      name: 'trigger_windows',
      type: 'as'
    });
    this.settingsManager.add({
      key: 'text-shadow',
      name: 'text_shadow',
      type: 'b',
      getter: 'add_text_shadow',
      handler: () => {
        if (this.settingsManager.add_text_shadow()) {
          this.themingManager.add_text_shadow();
        } else {
          this.themingManager.remove_text_shadow();
        }
      }
    });
    this.settingsManager.add({
      key: 'icon-shadow',
      name: 'icon_shadow',
      type: 'b',
      getter: 'add_icon_shadow',
      handler: () => {
        if (this.settingsManager.add_icon_shadow()) {
          this.themingManager.add_icon_shadow();
        } else {
          this.themingManager.remove_icon_shadow();
        }
      }
    });
    this.settingsManager.add({
      key: 'text-shadow-position',
      name: 'text_shadow_position',
      type: '(iii)',
      handler: () => {
        this.themingManager.remove_text_shadow();

        const theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

        for (let i = this.themingManager.stylesheets.length - 1; i >= 0; i -= 1) {
          const stylesheet = this.themingManager.stylesheets[i];
          if (stylesheet.indexOf('shadow') !== -1 && stylesheet.indexOf('text') !== -1) {
            theme.unload_stylesheet(Util.get_file(stylesheet));
            Util.remove_file(stylesheet);
            this.themingManager.stylesheets.splice(i, 1);
          }
        }
        const text_shadow = this.themingManager.register_text_shadow(
          this.settingsManager.get_text_shadow_color(),
          this.settingsManager.get_text_shadow_position()
        );
        const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, SETTINGS_DELAY, () => {
          if (id !== this.text_shadow_update_id) {
            return false;
          }

          /* Add Text Shadowing */
          if (this.settingsManager.add_text_shadow()) {
            if (text_shadow !== null) {
              this.themingManager.add_text_shadow();
            } else {
              log('[Dynamic Panel Transparency] Failed to enabled text shadowing.');
            }
          }

          this.intellifader.forceSyncCheck();

          return false;
        });

        this.text_shadow_update_id = id;
      }
    });
    this.settingsManager.add({
      key: 'icon-shadow-position',
      name: 'icon_shadow_position',
      type: '(iii)',
      handler: () => {
        this.themingManager.remove_icon_shadow();

        const theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

        for (let i = this.themingManager.stylesheets.length - 1; i >= 0; i -= 1) {
          const stylesheet = this.themingManager.stylesheets[i];
          if (stylesheet.indexOf('shadow') !== -1 && stylesheet.indexOf('icon') !== -1) {
            theme.unload_stylesheet(Util.get_file(stylesheet));
            Util.remove_file(stylesheet);
            this.themingManager.stylesheets.splice(i, 1);
          }
        }
        const icon_shadow = this.themingManager.register_icon_shadow(
          this.settingsManager.get_icon_shadow_color(),
          this.settingsManager.get_icon_shadow_position()
        );
        const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, SETTINGS_DELAY, () => {
          if (id !== this.icon_shadow_update_id) {
            return false;
          }

          /* Add Icon Shadowing */
          if (this.settingsManager.add_icon_shadow()) {
            if (icon_shadow !== null) {
              this.themingManager.add_icon_shadow();
            } else {
              log('[Dynamic Panel Transparency] Failed to enabled icon shadowing.');
            }
          }

          this.intellifader.forceSyncCheck();

          return false;
        });

        this.icon_shadow_update_id = id;
      }
    });
    this.settingsManager.add({
      key: 'icon-shadow-color',
      name: 'icon_shadow_color',
      type: '(iiid)',
      parser: Util.tuple_to_native_color,
      handler: () => {
        this.themingManager.remove_icon_shadow();

        const theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

        for (let i = this.themingManager.stylesheets.length - 1; i >= 0; i -= 1) {
          const stylesheet = this.themingManager.stylesheets[i];
          if (stylesheet.indexOf('shadow') !== -1 && stylesheet.indexOf('icon') !== -1) {
            theme.unload_stylesheet(Util.get_file(stylesheet));
            Util.remove_file(stylesheet);
            this.themingManager.stylesheets.splice(i, 1);
          }
        }
        const icon_shadow = this.themingManager.register_icon_shadow(
          this.settingsManager.get_icon_shadow_color(),
          this.settingsManager.get_icon_shadow_position()
        );
        const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, SETTINGS_DELAY, () => {
          if (id !== this.icon_shadow_update_id) {
            return false;
          }

          /* Add Icon Shadowing */
          if (this.settingsManager.add_icon_shadow()) {
            if (icon_shadow !== null) {
              this.themingManager.add_icon_shadow();
            } else {
              log('[Dynamic Panel Transparency] Failed to enabled icon shadowing.');
            }
          }

          this.intellifader.forceSyncCheck();

          return false;
        });

        this.icon_shadow_update_id = id;
      }
    });
    this.settingsManager.add({
      key: 'text-shadow-color',
      name: 'text_shadow_color',
      type: '(iiid)',
      parser: Util.tuple_to_native_color,
      handler: () => {
        this.themingManager.remove_text_shadow();

        const theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

        for (let i = this.themingManager.stylesheets.length - 1; i >= 0; i -= 1) {
          const stylesheet = this.themingManager.stylesheets[i];
          if (stylesheet.indexOf('shadow') !== -1 && stylesheet.indexOf('text') !== -1) {
            theme.unload_stylesheet(Util.get_file(stylesheet));
            Util.remove_file(stylesheet);
            this.themingManager.stylesheets.splice(i, 1);
          }
        }
        const text_shadow = this.themingManager.register_text_shadow(
          this.settingsManager.get_text_shadow_color(),
          this.settingsManager.get_text_shadow_position()
        );

        const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, SETTINGS_DELAY, () => {
          if (id !== this.text_shadow_update_id) {
            return false;
          }

          /* Add Text Shadowing */
          if (this.settingsManager.add_text_shadow()) {
            if (text_shadow !== null) {
              this.themingManager.add_text_shadow();
            } else {
              log('[Dynamic Panel Transparency] Failed to enabled text shadowing.');
            }
          }

          this.intellifader.forceSyncCheck();

          return false;
        });

        this.text_shadow_update_id = id;
      }
    });
    this.settingsManager.add({
      key: 'text-color',
      name: 'text_color',
      type: '(iii)',
      parser: Util.tuple_to_native_color
    });
    this.settingsManager.add({
      key: 'maximized-text-color',
      name: 'maximized_text_color',
      type: '(iii)',
      parser: Util.tuple_to_native_color
    });
    this.settingsManager.add({
      key: 'enable-maximized-text-color',
      name: 'enable_maximized_text_color',
      type: 'b',
      handler: () => {
        this.intellifader.forceSyncCheck();
      }
    });
    this.settingsManager.add({
      key: 'remove-panel-styling',
      name: 'remove_panel_styling',
      getter: 'remove_panel_styling',
      type: 'b'
    });
    this.settingsManager.add({
      key: 'enable-overview-text-color',
      name: 'enable_overview_text_color',
      type: 'b'
    });
    this.settingsManager.add({
      key: 'enable-text-color',
      name: 'enable_text_color',
      type: 'b',
      handler: () => {
        if (this.settingsManager.get_enable_text_color()) {
          this.intellifader.forceSyncCheck();
        } else {
          this.themingManager.remove_text_color();
          this.themingManager.remove_text_color('maximized');
        }
      }
    });
    this.settingsManager.add({
      key: 'enable-opacity',
      name: 'enable_custom_opacity',
      getter: 'enable_custom_opacity',
      type: 'b'
    });
    this.settingsManager.add({
      key: 'enable-background-color',
      name: 'enable_custom_background_color',
      getter: 'enable_custom_background_color',
      type: 'b'
    });
    this.settingsManager.add({
      key: 'transition-with-overview',
      name: 'transition_with_overview',
      getter: 'transition_with_overview',
      type: 'b'
    });
    this.settingsManager.add({
      key: 'transition-windows-touch',
      name: 'transition_windows_touch',
      getter: 'transition_when_windows_touch_panel',
      type: 'b'
    });

    /* App-Specific Settings */

    this.settingsManager.add_app_setting({
      key: 'enable-background-tweaks',
      name: 'enable_background_tweaks',
      type: 'b'
    });
    this.settingsManager.add_app_override({
      key: 'maximized-opacity',
      name: 'maximized_opacity',
      type: 'i'
    });
    this.settingsManager.add_app_override({
      key: 'panel-color',
      name: 'panel_color',
      type: '(iii)',
      parser: Util.tuple_to_native_color
    });

    /* After we've given Settings the necessary information... let's bind it. */
    this.settingsManager.bind();
  }
}

let extension;

/* exported enable, disable */

Me.imports.extension.enable = function enable() {
  extension = new Extension();
  extension.enable(global.stage);
};

Me.imports.extension.disable = function disable() {
  if (extension) {
    extension.cleanup();
  }
};
