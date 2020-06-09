import type * as gobject from 'gobject';

import * as Convenience from './convenience';
import * as Settings from './settings';

import { DynamicPanel } from './extension';
import { EmbeddedWindow } from 'shell';

// We modify shell windows.
declare module 'shell' {
  interface EmbeddedWindow {
    _dpt_tracking?: boolean;
    _dpt_signals?: number[];
  }
}

const Gio = imports.gi.Gio;
const Shell = imports.gi.Shell;

const Main = imports.ui.main;

const USER_THEME_SCHEMA = 'org.gnome.shell.extensions.user-theme';

/**
 * @param {DynamicPanel[]} panels
 */
export function forceSyncCheck(panels: DynamicPanel[]) {
  panels.forEach((panel) => panel.intellifader.forceSyncCheck());
}

/**
 * @param {DynamicPanel[]} panels
 */
export function syncCheck(panels: DynamicPanel[]) {
  panels.forEach((panel) => panel.intellifader.syncCheck());
}

/**
 * @param {DynamicPanel[]} panels
 */
export function asyncCheck(panels: DynamicPanel[]) {
  panels.forEach((panel) => panel.intellifader.asyncCheck());
}

export class EventManager {
  panels: DynamicPanel[];
  _wm_tracker: any;
  _overviewHidingSig: any;
  _overviewShownSig: any;
  _workspaceSwitchSig: any;
  _windowRestackedSig: any;
  _windowActorAddedSig: any;
  _windowActorRemovedSig: any;
  _appFocusedSig: any;
  _theme_settings: any;
  _windowUnminimizeSig: any;

  /**
   * Initialize.
   * @param {DynamicPanel[]} panels
   */
  constructor(panels: DynamicPanel[]) {
    this.panels = panels;

    const settings = Settings.get();

    this._wm_tracker = Shell.WindowTracker.get_default();

    this._overviewHidingSig = Main.overview.connect('hiding', this._overviewHiding.bind(this));

    if (settings.transitionWithOverview()) {
      this._overviewShownSig = Main.overview.connect('showing', this._overviewShown.bind(this));
    } else {
      this._overviewShownSig = Main.overview.connect('shown', this._overviewShown.bind(this));
    }

    const windows = global.get_window_actors();

    for (const window_actor of windows) {
      /* Simulate window creation event, null container because _windowActorAdded doesn't utilize containers */
      this._windowActorAdded(null, window_actor, false);
    }

    this._workspaceSwitchSig = global.window_manager.connect_after(
      'switch-workspace',
      this._workspaceSwitched.bind(this)
    );

    const screen = global.screen || global.display;

    if (screen) {
      this._windowRestackedSig = screen.connect_after('restacked', this._windowRestacked.bind(this));
    } else {
      log("[Dynamic Panel Transparency] Error could not register 'restacked' event.");
    }

    this._windowActorAddedSig = global.window_group.connect('actor-added', this._windowActorAdded.bind(this));
    this._windowActorRemovedSig = global.window_group.connect(
      'actor-removed',
      this._windowActorRemoved.bind(this)
    );

    this._appFocusedSig = this._wm_tracker.connect_after(
      'notify::focus-app',
      this._windowRestacked.bind(this)
    );

    this._theme_settings = null;

    try {
      let schemaObj = Convenience.getSchemaObj(USER_THEME_SCHEMA, true);

      if (schemaObj) {
        this._theme_settings = new Gio.Settings({
          settings_schema: schemaObj,
        });
      }
    } catch (error) {
      log(
        '[Dynamic Panel Transparency] Failed to find shell theme settings. Ignore this if you are not using a custom theme.'
      );
    }


    this._windowUnminimizeSig = undefined;
  }

  /**
   * @param {import('gobject').Object} obj
   * @param {number} sig
   */
  disconnect(obj: gobject.Object, sig: number) {
    try {
      if (sig != null && obj) {
        obj.disconnect(sig);
      }
    } catch (error) {
      log('[Dynamic Panel Transparency] Failed to disconnect signal: ' + error);
    }
  }

  /**
   * Don't want to hold onto anything that isn't ours.
   * @returns {void}
   */
  cleanup() {
    /* Disconnect Signals */
    if (this._windowUnminimizeSig) {
      this.disconnect(global.window_manager, this._windowUnminimizeSig);
    }

    this.disconnect(Main.overview, this._overviewShownSig);
    this.disconnect(Main.overview, this._overviewHidingSig);

    this.disconnect(global.window_manager, this._workspaceSwitchSig);

    this.disconnect(global.window_group, this._windowActorAddedSig);
    this.disconnect(global.window_group, this._windowActorRemovedSig);

    const screen = global.screen || global.display;

    if (screen) {
      this.disconnect(screen, this._windowRestackedSig);
    } else {
      log("[Dynamic Panel Transparency] Error could not disconnect 'restacked' event.");
    }

    this.disconnect(this._wm_tracker, this._appFocusedSig);

    const windows = global.get_window_actors();

    for (const window_actor of windows) {
      if (typeof window_actor._dpt_signals !== 'undefined') {
        for (let signalId of window_actor._dpt_signals) {
          this.disconnect(window_actor, signalId);
        }
      }

      delete window_actor._dpt_signals;
      delete window_actor._dpt_tracking;
    }

    /* Cleanup Signals */
    this._windowRestackedSig = null;
    this._overviewShownSig = null;
    this._overviewHidingSig = null;
    this._windowActorRemovedSig = null;
    this._workspaceSwitchSig = null;
    this._windowActorAddedSig = null;

    this._theme_settings = null;

    this._wm_tracker = null;
  }

  /* Event Handlers */

  /**
   * Called whenever the overview is shown.
   *
   */
  _overviewShown() {
    this.panels.forEach((panel) => {
      if (!panel.transitions.is_blank()) {
        panel.transitions.blank_fade_out();
      }

      const settings = Settings.get();

      if (
        settings.enableTextColor() &&
        (settings.enableMaximizedTextColor() || settings.enableOverviewTextColor())
      ) {
        if (settings.enableOverviewTextColor()) {
          panel.themer.remove_text_color();
          panel.themer.set_text_color();
        } else {
          panel.themer.remove_text_color();
          panel.themer.set_text_color();
        }
      }
    });
  }

  _overviewHiding() {
    forceSyncCheck(this.panels);
  }

  /**
   * Called whenever a window actor is removed.
   * @param {any} _container
   * @param {any} window_actor
   */
  _windowActorRemoved(_container: any, window_actor: EmbeddedWindow) {
    if (typeof window_actor._dpt_tracking === 'undefined') {
      return;
    }

    /* Remove our tracking variable. */
    delete window_actor._dpt_tracking;

    if (typeof window_actor._dpt_signals !== 'undefined') {
      for (let signalId of window_actor._dpt_signals) {
        window_actor.disconnect(signalId);
      }
    }

    delete window_actor._dpt_signals;

    asyncCheck(this.panels);
  }

  /**
   * Called whenever a window is created in the shell.
   * @param {unknown} _
   * @param {EmbeddedWindow} window_actor
   */
  _windowActorAdded(_: unknown, window_actor: EmbeddedWindow, force = true) {
    if (window_actor && (force || typeof window_actor._dpt_tracking === 'undefined')) {
      window_actor._dpt_tracking = true;
      const ac_wId = window_actor.connect(
        'allocation-changed',
        function () {
          asyncCheck(this.panels);
        }.bind(this)
      );
      const v_wId = window_actor.connect(
        'notify::visible',
        function () {
          asyncCheck(this.panels);
        }.bind(this)
      );
      window_actor._dpt_signals = [ac_wId, v_wId];

      asyncCheck(this.panels);
    }
  }

  /**
   * SPECIAL_CASE: Only update if we're using per-app settings or is desktop icons are enabled.
   *
   */
  _windowRestacked() {
    const settings = Settings.get();
    /* Don't allow restacks while the overview is transitioning. */
    if (!Main.overview.visible) {
      /* Detect if desktop icons are enabled. */
      if (settings.gs_show_desktop()) {
        asyncCheck(this.panels);
      }
    }
  }

  /**
   * SPECIAL_CASE: Update logic requires the workspace that we'll be switching to.
   * @param {any} _wm
   * @param {any} _from
   * @param {any} _to
   * @param {any} _direction
   */
  _workspaceSwitched(_wm: any, _from: any, _to: any, _direction: any) {
    const settings = Settings.get();

    /* Detect if desktop icons are enabled. */
    if (!settings.gs_show_desktop()) {
      syncCheck(this.panels);
    }
  }
}
