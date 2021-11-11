/* exported init, enable, disable */

import St from 'gi://St';

import * as Util from './util.js';

import { Events } from './events.js';
import { Intellifader } from './intellifade.js';
import { Settings } from './settings.js';
import { Theming } from './theming.js';
import { Transitions } from './transitions.js';

import { main } from './shell.js';
import { setTimeout } from './timers.js';

const SETTINGS_DELAY = 3000;

export class DptExtension {
    constructor() {
        this.settings = new Settings();

        this.transitions = new Transitions(this);
        this.theming = new Theming(this);
        this.intellifader = new Intellifader(this);
        this.events = new Events(this);
    }

    enable() {
        /* Initialize settings */
        this.initializeSettings();

        this.theming.setup();

        /* Modify the panel. */
        this.modifyPanel();

        /* Start the event loop. */
        this.events.bind();

        /* Simulate window changes. */
        this.intellifader.forceSyncCheck();
    }

    disable() {
        const { settings, events, theming, transitions, intellifader } = this;
        /* Do this first in case any of the upcoming methods fail. */
        this.unmodify_panel();

        try {
            /* Disconnect & Null Signals */
            events.cleanup();

            /* Cleanup settings */
            settings.unbind();
            settings.cleanup();

            /* Cleanup Transitions */
            transitions.cleanup();

            /* Cleanup theming */
            theming.cleanup();

            /* Cleanup Intellifade */
            intellifader.cleanup();
        } catch (error) {
            log('[DPT] Encountered an error cleaning up extension: ' + error);
        }
    }

    modifyPanel() {
        const { theming, settings } = this;

        /* Get Rid of the Panel's CSS Background */
        theming.initialize_background_styles();

        let text_shadow = theming.register_text_shadow(
            settings.get_text_shadow_color(),
            settings.get_text_shadow_position()
        );
        let icon_shadow = theming.register_icon_shadow(
            settings.get_icon_shadow_color(),
            settings.get_icon_shadow_position()
        );

        /* Add Text Shadowing */
        if (settings.add_text_shadow()) {
            if (text_shadow !== null) {
                theming.add_text_shadow();
            } else {
                log('[Dynamic Panel Transparency] Failed to enabled text shadowing.');
            }
        }

        /* Add Icon Shadowing */
        if (settings.add_icon_shadow()) {
            if (icon_shadow !== null) {
                theming.add_icon_shadow();
            } else {
                log('[Dynamic Panel Transparency] Failed to enabled icon shadowing.');
            }
        }

        /* Register text color styling. */
        let [text] = theming.register_text_color(settings.get_text_color());
        theming.register_text_color(settings.get_maximized_text_color(), 'maximized');
        if (settings.get_enable_text_color()) {
            if (text !== null) {
                theming.set_text_color();
            } else {
                log('[Dynamic Panel Transparency] Failed to enabled text coloring.');
            }
        }

        if (settings.get_hide_corners()) {
            theming.add_hide_corners();
        }
    }

    unmodify_panel() {
        const { theming } = this;

        /* Remove Our Styling */
        theming.reapply_panel_styling();
        theming.reapply_panel_background_image();

        theming.remove_panel_transparency();

        /* Remove shadowing */
        if (theming.has_text_shadow()) {
            theming.remove_text_shadow();
        }

        if (theming.has_icon_shadow()) {
            theming.remove_icon_shadow();
        }

        /* Remove text coloring */
        theming.remove_text_color();

        /* Remove maximized text coloring */
        theming.remove_text_color('maximized');
    }

    // TODO: Merge handler code or hide it behind the backend.
    initializeSettings() {
        const { settings, theming, intellifader } = this;

        /* Register settings... */
        settings.on('hide-corners', () => {
            if (settings.get_hide_corners()) {
                theming.add_hide_corners();
            } else {
                theming.remove_hide_corners();
            }
        });
        settings.on('transition-speed', () => {
            main.panel.remove_style_class_name('dpt-panel-transition-duration');

            let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

            for (let i = theming.stylesheets.length - 1; i >= 0; i--) {
                let stylesheet = theming.stylesheets[i];
                if (
                    stylesheet.indexOf('transitions') !== -1 &&
                    stylesheet.endsWith('panel-transition-duration.dpt.css')
                ) {
                    theme.unload_stylesheet(Util.get_file(stylesheet));
                    Util.remove_file(stylesheet);
                    theming.stylesheets.splice(i, 1);
                }
            }

            const id = (this.panel_transition_update_id = setTimeout(() => {
                if (id !== this.panel_transition_update_id) {
                    return;
                }

                /* Get Rid of the Panel's CSS */
                theming.update_transition_css();

                intellifader.forceSyncCheck();

                return;
            }, SETTINGS_DELAY));
        });
        settings.on('unmaximized-opacity', () => {
            const super_id = (this.opacity_update_id = setTimeout(() => {
                if (super_id !== this.opacity_update_id) {
                    return;
                }

                let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

                for (let i = theming.stylesheets.length - 1; i >= 0; i--) {
                    let stylesheet = theming.stylesheets[i];
                    if (
                        stylesheet.indexOf('background') !== -1 &&
                        stylesheet.indexOf('panel-') !== -1
                    ) {
                        theme.unload_stylesheet(Util.get_file(stylesheet));
                        Util.remove_file(stylesheet);
                        theming.stylesheets.splice(i, 1);
                    }
                }

                theming.initialize_background_styles();

                const id = (this.panel_color_update_id = setTimeout(() => {
                    if (id !== this.panel_color_update_id) {
                        return;
                    }

                    /* Get Rid of the Panel's CSS Background */
                    theming.remove_background_color();

                    intellifader.forceSyncCheck();

                    return;
                }, SETTINGS_DELAY));

                return;
            }, SETTINGS_DELAY));
        });

        settings.on('maximized-opacity', () => {
            const super_id = (this.opacity_update_id = setTimeout(() => {
                if (super_id !== this.opacity_update_id) {
                    return;
                }

                let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

                for (let i = theming.stylesheets.length - 1; i >= 0; i--) {
                    let stylesheet = theming.stylesheets[i];
                    if (
                        stylesheet.indexOf('background') !== -1 &&
                        stylesheet.indexOf('panel-') !== -1
                    ) {
                        theme.unload_stylesheet(Util.get_file(stylesheet));
                        Util.remove_file(stylesheet);
                        theming.stylesheets.splice(i, 1);
                    }
                }

                theming.initialize_background_styles();

                const id = (this.panel_color_update_id = setTimeout(() => {
                    if (id !== this.panel_color_update_id) {
                        return;
                    }

                    /* Get Rid of the Panel's CSS Background */
                    intellifader.forceSyncCheck();

                    return;
                }, SETTINGS_DELAY));

                return;
            }, SETTINGS_DELAY));
        });

        settings.on('panel-color', () => {
            theming.remove_background_color();

            let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

            for (let i = theming.stylesheets.length - 1; i >= 0; i--) {
                let stylesheet = theming.stylesheets[i];
                if (
                    stylesheet.indexOf('background') !== -1 &&
                    stylesheet.indexOf('panel.dpt.css') !== -1
                ) {
                    theme.unload_stylesheet(Util.get_file(stylesheet));
                    Util.remove_file(stylesheet);
                    theming.stylesheets.splice(i, 1);
                }
            }

            theming.register_background_color(settings.get_panel_color(), 'custom');

            const id = (this.panel_color_update_id = setTimeout(() => {
                if (id !== this.panel_color_update_id) {
                    return;
                }

                /* Get Rid of the Panel's CSS Background */
                theming.remove_background_color();

                intellifader.forceSyncCheck();

                return;
            }, SETTINGS_DELAY));
        });

        settings.on('text-shadow', () => {
            if (settings.add_text_shadow()) {
                theming.add_text_shadow();
            } else {
                theming.remove_text_shadow();
            }
        });

        settings.on('icon-shadow', () => {
            if (settings.add_icon_shadow()) {
                theming.add_icon_shadow();
            } else {
                theming.remove_icon_shadow();
            }
        });

        settings.on('text-shadow-position', () => {
            theming.remove_text_shadow();

            let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

            for (let i = theming.stylesheets.length - 1; i >= 0; i--) {
                let stylesheet = theming.stylesheets[i];
                if (stylesheet.indexOf('shadow') !== -1 && stylesheet.indexOf('text') !== -1) {
                    theme.unload_stylesheet(Util.get_file(stylesheet));
                    Util.remove_file(stylesheet);
                    theming.stylesheets.splice(i, 1);
                }
            }
            let text_shadow = theming.register_text_shadow(
                settings.get_text_shadow_color(),
                settings.get_text_shadow_position()
            );
            const id = (this.text_shadow_update_id = setTimeout(() => {
                if (id !== this.text_shadow_update_id) {
                    return;
                }

                /* Add Text Shadowing */
                if (settings.add_text_shadow()) {
                    if (text_shadow !== null) {
                        theming.add_text_shadow();
                    } else {
                        log('[Dynamic Panel Transparency] Failed to enabled text shadowing.');
                    }
                }

                intellifader.forceSyncCheck();

                return;
            }, SETTINGS_DELAY));
        });
        settings.on('icon-shadow-position', () => {
            theming.remove_icon_shadow();

            let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

            for (let i = theming.stylesheets.length - 1; i >= 0; i--) {
                let stylesheet = theming.stylesheets[i];
                if (stylesheet.indexOf('shadow') !== -1 && stylesheet.indexOf('icon') !== -1) {
                    theme.unload_stylesheet(Util.get_file(stylesheet));
                    Util.remove_file(stylesheet);
                    theming.stylesheets.splice(i, 1);
                }
            }
            let icon_shadow = theming.register_icon_shadow(
                settings.get_icon_shadow_color(),
                settings.get_icon_shadow_position()
            );
            const id = (this.icon_shadow_update_id = setTimeout(() => {
                if (id !== this.icon_shadow_update_id) {
                    return;
                }

                /* Add Icon Shadowing */
                if (settings.add_icon_shadow()) {
                    if (icon_shadow !== null) {
                        theming.add_icon_shadow();
                    } else {
                        log('[Dynamic Panel Transparency] Failed to enabled icon shadowing.');
                    }
                }

                intellifader.forceSyncCheck();

                return;
            }, SETTINGS_DELAY));
        });
        settings.on('icon-shadow-color', () => {
            theming.remove_icon_shadow();

            let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

            for (let i = theming.stylesheets.length - 1; i >= 0; i--) {
                let stylesheet = theming.stylesheets[i];
                if (stylesheet.indexOf('shadow') !== -1 && stylesheet.indexOf('icon') !== -1) {
                    theme.unload_stylesheet(Util.get_file(stylesheet));
                    Util.remove_file(stylesheet);
                    theming.stylesheets.splice(i, 1);
                }
            }
            let icon_shadow = theming.register_icon_shadow(
                settings.get_icon_shadow_color(),
                settings.get_icon_shadow_position()
            );
            const id = (this.icon_shadow_update_id = setTimeout(() => {
                if (id !== this.icon_shadow_update_id) {
                    return;
                }

                /* Add Icon Shadowing */
                if (settings.add_icon_shadow()) {
                    if (icon_shadow !== null) {
                        theming.add_icon_shadow();
                    } else {
                        log('[Dynamic Panel Transparency] Failed to enabled icon shadowing.');
                    }
                }

                intellifader.forceSyncCheck();

                return;
            }, SETTINGS_DELAY));
        });
        settings.on('text-shadow-color', () => {
            theming.remove_text_shadow();

            let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();

            for (let i = theming.stylesheets.length - 1; i >= 0; i--) {
                let stylesheet = theming.stylesheets[i];
                if (stylesheet.indexOf('shadow') !== -1 && stylesheet.indexOf('text') !== -1) {
                    theme.unload_stylesheet(Util.get_file(stylesheet));
                    Util.remove_file(stylesheet);
                    theming.stylesheets.splice(i, 1);
                }
            }
            let text_shadow = theming.register_text_shadow(
                settings.get_text_shadow_color(),
                settings.get_text_shadow_position()
            );
            const id = (this.text_shadow_update_id = setTimeout(() => {
                if (id !== this.text_shadow_update_id) {
                    return;
                }

                /* Add Text Shadowing */
                if (settings.add_text_shadow()) {
                    if (text_shadow !== null) {
                        theming.add_text_shadow();
                    } else {
                        log('[Dynamic Panel Transparency] Failed to enabled text shadowing.');
                    }
                }

                intellifader.forceSyncCheck();

                return;
            }, SETTINGS_DELAY));
        });

        settings.on('enable-maximized-text-color', () => {
            intellifader.forceSyncCheck();
        });

        settings.on('enable-text-color', () => {
            if (settings.get_enable_text_color()) {
                intellifader.forceSyncCheck();
            } else {
                theming.remove_text_color();
                theming.remove_text_color('maximized');
            }
        });
    }
}
