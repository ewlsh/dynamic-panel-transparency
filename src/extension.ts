const Mainloop = imports.mainloop;

import * as st from 'st';

const Main = imports.ui.main as {
    panel: st.Bin
};

import * as Compat from './compat';
import { EventManager } from './events';
import { Intellifader } from './intellifade';
import * as Settings from './settings';
import {Themer, load_panel_theme} from './theming';
import { TransitionManager } from './transitions';

let panels = [] as DynamicPanel[];

class DynamicPanel {
    actor: st.Bin;
    themer: Themer;
    transitions: TransitionManager;
    intellifader: Intellifader;

    /**
     * @param {st.Bin} panelActor
     */
    constructor(panelActor: st.Bin) {
        this.actor = panelActor;

        /* Initialize Utilities */
        this.themer = new Themer(this);
        this.transitions = new TransitionManager(this.themer);
        this.intellifader = new Intellifader(this.transitions, this.themer);
    }

    get panel() {
        return this.actor;
    }

    cleanup() {
        this.themer.cleanup();
        this.transitions.cleanup();
        this.intellifader.cleanup();
    }
}

export type { DynamicPanel };

/* Initialize */
function init() { }

function enable() {
    const panel = Main.panel;
    const panelActor = Compat.getActorOf(panel);

    Settings.init();

    const dp = new DynamicPanel(panelActor);

    panels.push(dp);

    load_panel_theme();

    panels.forEach(panel => {
        /* Modify the panel. */
        Mainloop.idle_add((() => {
            panel.themer.loadBackgroundInfo();

            modify_panel(panel);

            /* Simulate window changes. */
            panel.intellifader.forceSyncCheck();
            return false;
        }));
    });

    /* Start the event loop. */
    this.eventManager = new EventManager(panels);
}

function disable() {
    /* Do this first in case any of the upcoming methods fail. */
    unmodify_panel();

    panels.forEach(panel => panel.cleanup());

    panels = [];

    try {
        /* Disconnect & Null Signals */
        this.eventManager.cleanup();

        /* Cleanup Settings */
        Settings.cleanup();
    } catch (error) {
        log('[DPT] Encountered an error cleaning up extension: ' + error);
    }

    return false;
}

/**
 * @param {DynamicPanel} panel
 */
function modify_panel(panel: DynamicPanel) {
    const Theming = panel.themer;

    /* Get Rid of the Panel's CSS Background */
    Theming.initialize_background_styles();

    const settings = Settings.get();

    /* Add Text Shadowing */
    if (settings.addTextShadow()) {
        Theming.add_text_shadow();
    }

    /* Add Icon Shadowing */
    if (settings.addIconShadow()) {
        Theming.add_icon_shadow();
    }

    Theming.set_text_color();

    if (settings.enableTextColor()) {
        // TODO Set custom text color...
    }
}

function unmodify_panel() {
    panels.forEach(panel => {
        const Theming = panel.themer;

        /* Remove Our Styling */
        Theming.reapply_panel_styling();
        Theming.reapply_panel_background_image();

        /* Remove shadowing */
        if (Theming.has_text_shadow()) {
            Theming.remove_text_shadow();
        }

        if (Theming.has_icon_shadow()) {
            Theming.remove_icon_shadow();
        }

        /* Remove text coloring */
        Theming.remove_text_color();
    });
}
