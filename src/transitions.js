import { GLib, Shell } from '../imports/gi';
import { Equations } from '../imports/tweener';

const { St } = Shell;

/* exported init, cleanup, lock, unlock, get_animation_status, get_transparency_status */
/* exported fade_in, fade_out, blank_fade_out, minimum_fade_in, update_transition_type */

const CORNER_UPDATE_FREQUENCY = 30;

export class TransparencyStatus {
  constructor() {
    this.transparent = false;
    this.blank = false;
  }

  is_transparent() {
    return this.transparent;
  }

  is_blank() {
    return this.blank;
  }

  set_transparent(transparent) {
    this.transparent = transparent;
  }

  set_blank(blank) {
    this.blank = blank;
  }
}

export default class TransitionManager {
  /**
   *
   * Intialize.
   *
   */
  constructor(settings, theming) {
    /* Objects to track where the transparency is and where it's going. */
    this.status = new TransparencyStatus();
    this.themingManager = theming;

    this.corner_timeout_id = 0;

    this.settingsManager = settings;
  }

  /**
   * Freeup any held assets on disable.
   *
   */
  cleanup() {
    this.status = null;

    this.corner_timeout_id = null;
  }

  /**
   * Get the current status of the panel's transparency.
   *
   * @returns {Object} Current transparency. @see TransparencyStatus
   */
  get_transparency_status() {
    return this.status;
  }

  /**
   * Updates the alpha value of the corners' coloring. Slightly awkward overlap is unavoidable.
   *
   * @param {Number} alpha - Alpha value ranging from 0-255.
   */
  update_corner_alpha(override_alpha) {
    let alpha = override_alpha;

    if (!alpha) {
      if (this.settingsManager.get_hide_corners()) {
        alpha = 0;
      } else {
        alpha = this.status.is_transparent()
          ? this.themingManager.get_unmaximized_opacity()
          : this.themingManager.get_maximized_opacity();
      }
    }

    this.themingManager.set_corner_color({
      alpha
    });
  }

  /**
   * Fades the panel into the unmaximized (minimum) alpha.
   *
   */
  fade_out() {
    this.themingManager.strip_panel_background_image();
    this.themingManager.strip_panel_styling();

    if (this.settingsManager.enable_custom_background_color()) {
      this.themingManager.set_unmaximized_background_color();
      this.themingManager.remove_background_color({
        exclude_base: true,
        exclude_unmaximized_variant_only: true
      });
    } else {
      this.themingManager.set_unmaximized_background_color(
        this.settingsManager.get_current_user_theme()
      );
      this.themingManager.remove_background_color({
        exclude: this.settingsManager.get_current_user_theme(),
        exclude_unmaximized_variant_only: true
      });
    }

    // TODO: Figure out how to write the panel corners in pure CSS.
    if (!this.settingsManager.get_hide_corners()) {
      const speed = St.get_slow_down_factor() * this.settingsManager.get_transition_speed();

      const unmaximized = this.settingsManager.get_unmaximized_opacity();
      const maximized = this.status.is_transparent()
        ? unmaximized
        : this.settingsManager.get_maximized_opacity();

      /* Keep the status up to date */
      this.status.set_transparent(true);
      this.status.set_blank(false);

      let count = 0;

      const id = GLib.timeout_add(
        GLib.PRIORITY_DEFAULT,
        Math.floor(speed / CORNER_UPDATE_FREQUENCY),
        () => {
          if (id === this.corner_timeout_id && this.status.is_transparent()) {
            count += 1;

            const alpha = Equations.linear(
              Math.floor(count * (speed / CORNER_UPDATE_FREQUENCY)),
              maximized,
              unmaximized - maximized,
              speed
            );

            this.update_corner_alpha(alpha);

            if (count > CORNER_UPDATE_FREQUENCY) {
              this.update_corner_alpha(unmaximized);
              return false;
            }
          } else {
            return false;
          }
          return true;
        }
      );
      this.corner_timeout_id = id;
    }

    /* Keep the status up to date */
    this.status.set_transparent(true);
    this.status.set_blank(false);
  }

  /**
   * Fades the panel into the unmaximized (minimum) alpha. Used for closing the overview.
   *
   */
  minimum_fade_in() {
    /* The CSS backend doesn't need different starting/ending values */
    this.fade_out();
  }

  /**
   * Fades the panel into the nmaximized (maximum) alpha.
   *
   */
  fade_in() {
    const custom = this.settingsManager.get_panel_color({ app_info: true });

    if (!this.settingsManager.remove_panel_styling()) {
      this.themingManager.reapply_panel_styling();
      this.themingManager.reapply_panel_background_image();
    }

    if (
      custom.app_info !== null
      && this.settingsManager.check_overrides()
      && (this.settingsManager.window_settings_manager.enable_background_tweaks[custom.app_info]
        || this.settingsManager.app_settings_manager.enable_background_tweaks[custom.app_info])
    ) {
      const prefix = custom.app_info.split('.').join('-');

      this.themingManager.set_maximized_background_color(`tweak-${prefix}`);
      this.themingManager.remove_background_color({
        exclude: `tweak-${prefix}`
      });
    } else if (this.settingsManager.enable_custom_background_color()) {
      this.themingManager.set_maximized_background_color();
      this.themingManager.remove_background_color({
        exclude_base: true
      });
    } else {
      this.themingManager.set_maximized_background_color(
        this.settingsManager.get_current_user_theme()
      );
      this.themingManager.remove_background_color({
        exclude: this.settingsManager.get_current_user_theme()
      });
    }

    if (!this.settingsManager.get_hide_corners()) {
      const speed = St.get_slow_down_factor() * this.settingsManager.get_transition_speed();

      const maximized = this.settingsManager.get_maximized_opacity();
      const unmaximized = !this.status.is_transparent()
        ? maximized
        : this.settingsManager.get_unmaximized_opacity();

      this.status.set_transparent(false);
      this.status.set_blank(false);

      let count = 0;

      /* eslint-disable-next-line no-multi-assign */
      const id = (this.corner_timeout_id = GLib.timeout_add(
        GLib.PRIORITY_DEFAULT,
        Math.floor(speed / CORNER_UPDATE_FREQUENCY),
        () => {
          if (id === this.corner_timeout_id && !this.status.is_transparent()) {
            count += 1;

            const alpha = Equations.linear(
              Math.floor(count * (speed / CORNER_UPDATE_FREQUENCY)),
              unmaximized,
              maximized - unmaximized,
              speed
            );

            this.update_corner_alpha(alpha);

            if (count > CORNER_UPDATE_FREQUENCY) {
              this.update_corner_alpha(maximized);
              return false;
            }
          } else {
            return false;
          }

          return true;
        }
      ));
    }

    this.status.set_transparent(false);
    this.status.set_blank(false);
  }

  /**
   * Fades the panel's alpha to 0. Used for opening the overview & displaying the screenShield.
   *
   */
  blank_fade_out() {
    /* Completely remove every possible background style... */
    this.themingManager.remove_background_color();

    this.themingManager.strip_panel_background_image();
    this.themingManager.strip_panel_styling();

    this.status.set_transparent(true);
    this.status.set_blank(true);

    // TODO: These corners...
    if (!this.settingsManager.get_hide_corners()) {
      const speed = St.get_slow_down_factor() * this.settingsManager.get_transition_speed();

      const maximized = this.settingsManager.get_maximized_opacity();

      let count = 0;

      const id = GLib.timeout_add(
        GLib.PRIORITY_DEFAULT,
        Math.floor(speed / CORNER_UPDATE_FREQUENCY),
        () => {
          if (id === this.corner_timeout_id && this.status.is_transparent()) {
            count += 1;

            const alpha = Equations.linear(
              Math.floor(count * (speed / CORNER_UPDATE_FREQUENCY)),
              maximized,
              -maximized,
              speed
            );

            this.update_corner_alpha(alpha);

            if (count > CORNER_UPDATE_FREQUENCY) {
              this.update_corner_alpha(0);
              return false;
            }
          } else {
            return false;
          }
          return true;
        }
      );
      this.corner_timeout_id = id;
    }
  }
}
