import Shell from 'gi://Shell';

import { main } from './shell.js';

/**
 * Signal Connections
 * js/ui/overview.js/hidden: occurs after the overview is hidden
 * js/ui/overview.js/shown: occurs after the overview is open
 * MetaScreen/restacked: occurs when the window Z-ordering changes
 * window_group/actor-added: occurs when a window actor is added
 * window_group/actor-removed: occurs when a window actor is removed
 * wm/switch-workspace: occurs after a workspace is switched
 */

export class Events {
    /**
     * @param {import('./main.js').DptExtension} extension
     */
    constructor(extension) {
        this.extension = extension;
        this._windowUnminimizeSig = undefined;
    }

    bind() {
        const { intellifader } = this.extension;

        this._wm_tracker = Shell.WindowTracker.get_default();

        this._overviewHidingSig = main.overview.connect('hiding', () => intellifader.syncCheck());

        if (this.extension.settings.transition_with_overview()) {
            this._overviewShownSig = main.overview.connect('showing', () => this._overviewShown());
        } else {
            this._overviewShownSig = main.overview.connect('shown', () => this._overviewShown());
        }

        let windows = global.get_window_actors();

        for (let window_actor of windows) {
            /* Simulate window creation event, null container because _windowActorAdded doesn't utilize containers */
            this._windowActorAdded(null, window_actor, false);
        }

        this._workspaceSwitchSig = global.window_manager.connect_after(
            'switch-workspace',
            (...args) => this._workspaceSwitched(...args)
        );

        const screen = global.screen || global.display;

        if (screen) {
            this._windowRestackedSig = screen.connect_after('restacked', () =>
                this._windowRestacked()
            );
        } else {
            log("[Dynamic Panel Transparency] Error could not register 'restacked' event.");
        }

        this._windowActorAddedSig = global.window_group.connect('actor-added', (...args) =>
            this._windowActorAdded(...args)
        );
        this._windowActorRemovedSig = global.window_group.connect('actor-removed', (...args) =>
            this._windowActorRemoved(...args)
        );

        this._appFocusedSig = this._wm_tracker.connect_after('notify::focus-app', () =>
            this._windowRestacked()
        );
    }

    disconnect(obj, sig) {
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
     *
     */
    cleanup() {
        /* Disconnect Signals */
        if (this._windowUnminimizeSig) {
            this.disconnect(global.window_manager, this._windowUnminimizeSig);
        }

        this.disconnect(main.overview, this._overviewShownSig);
        this.disconnect(main.overview, this._overviewHidingSig);

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

        let windows = global.get_window_actors();

        for (let window_actor of windows) {
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

        this._wm_tracker = null;
    }

    /* Event Handlers */

    /**
     * Called whenever the overview is shown.
     *
     */
    _overviewShown() {
        const { settings, theming, transitions } = this.extension;

        if (!transitions.get_transparency_status().is_blank()) {
            transitions.blank_fade_out();
        }

        if (
            settings.get_enable_text_color() &&
            (settings.get_enable_maximized_text_color() ||
                settings.get_enable_overview_text_color())
        ) {
            if (settings.get_enable_overview_text_color()) {
                theming.remove_text_color();
                theming.set_text_color('maximized');
            } else {
                theming.remove_text_color('maximized');
                theming.set_text_color();
            }
        }
    }

    /**
     * Called whenever a window actor is removed.
     *
     */
    _windowActorRemoved(container, window_actor) {
        const { intellifader } = this.extension;
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

        intellifader.asyncCheck();
    }

    /**
     * Called whenever a window is created in the shell.
     *
     */
    _windowActorAdded(window_group, window_actor, force = true) {
        const { intellifader } = this.extension;
        if (window_actor && (force || typeof window_actor._dpt_tracking === 'undefined')) {
            window_actor._dpt_tracking = true;

            let ac_wId = window_actor.connect('notify::allocation', () => {
                intellifader.asyncCheck();
            });

            const v_wId = window_actor.connect('notify::visible', () => {
                intellifader.asyncCheck();
            });
            window_actor._dpt_signals = [ac_wId, v_wId];

            intellifader.asyncCheck();
        }
    }

    /**
     * SPECIAL_CASE: Only update if we're using per-app settings or is desktop icons are enabled.
     *
     */
    _windowRestacked() {
        const { settings, intellifader } = this.extension;

        /* Don't allow restacks while the overview is transitioning. */
        if (!main.overview.visible) {
            /* Detect if desktop icons are enabled. */
            if (settings.gs_show_desktop()) {
                intellifader.asyncCheck();
            }
        }
    }

    /**
     * SPECIAL_CASE: Update logic requires the workspace that we'll be switching to.
     *
     */
    _workspaceSwitched(wm, from, to, direction) {
        const { settings, intellifader } = this.extension;

        /* Detect if desktop icons are enabled. */
        if (!settings.gs_show_desktop()) {
            intellifader.syncCheck();
        }
    }
}
