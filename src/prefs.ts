import type {
    Revealer,
    Button,
    Grid,
    Notebook,
    Scale,
    CheckButton,
    Switch,
    ColorButton,
    Container,
    Widget,
    AboutDialog,
    StackSwitcher,
    Box,
} from 'gtk';

import * as Util from './util';
import * as Convenience from './convenience';

const { GLib, Gdk, Gtk } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Gettext = imports.gettext.domain('dynamic-panel-transparency');
const _ = Gettext.gettext;

const gtk30_ = imports.gettext.domain('gtk30').gettext;

/* Settings Keys */
const SETTINGS_ENABLE_BACKGROUND_COLOR = 'enable-background-color';
const SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR = 'enable-maximized-text-color';
const SETTINGS_ENABLE_OPACITY = 'enable-opacity';
const SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR = 'enable-overview-text-color';
const SETTINGS_ENABLE_TEXT_COLOR = 'enable-text-color';
const SETTINGS_ICON_SHADOW = 'icon-shadow';
const SETTINGS_MAXIMIZED_OPACITY = 'maximized-opacity';
const SETTINGS_MAXIMIZED_TEXT_COLOR = 'maximized-text-color';
const SETTINGS_PANEL_COLOR = 'panel-color';
const SETTINGS_REMOVE_PANEL_STYLING = 'remove-panel-styling';
const SETTINGS_TEXT_COLOR = 'text-color';
const SETTINGS_TEXT_SHADOW = 'text-shadow';
const SETTINGS_TRANSITION_SPEED = 'transition-speed';
const SETTINGS_TRANSITION_WITH_OVERVIEW = 'transition-with-overview';
const SETTINGS_TRANSITION_WINDOWS_TOUCH = 'transition-windows-touch';
const SETTINGS_UNMAXIMIZED_OPACITY = 'unmaximized-opacity';

const Page = {
    TRANSITIONS: 0,
    FOREGROUND: 1,
    BACKGROUND: 2,
    APP_TWEAKS: 3,
    ABOUT: 4,
};
Object.freeze(Page);

/* Color Array Indices */
const RED = 0;
const GREEN = 1;
const BLUE = 2;
const ALPHA = 3;

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
    let settings = Convenience.getSettings();
    /* Create a UI Builder */
    let builder = new Gtk.Builder();
    /* Setup Translation */
    builder.set_translation_domain(Me.metadata['gettext-domain']);
    /* Get UI File */
    builder.add_from_file(Me.path + '/prefs.ui');

    /* Main Widget (Grid) */
    let main_widget = builder.get_object<Grid>('main_box');

    /* Tabs */
    let main_notebook = builder.get_object<Notebook>('main_notebook');

    /* Used for special functions occasionally. */
    let extra_btn = builder.get_object<Button>('extra_btn');

    /* Only show the panel & extra button on relevant pages. */
    main_notebook.connect('switch-page', function (notebook, page, index) {
        if (index === Page.APP_TWEAKS) {
            extra_btn.show();
        } else {
            extra_btn.hide();
        }
    });

    {
        /* Transition speed control */
        let speed_scale = builder.get_object<Scale>('speed_scale');
        /* Init value. */
        speed_scale.adjustment.set_value(
            settings.get_int(SETTINGS_TRANSITION_SPEED)
        );
        /* Add default marking. */
        speed_scale.add_mark(
            settings.get_default_value(SETTINGS_TRANSITION_SPEED).unpack(),
            Gtk.PositionType.BOTTOM,
            _('default')
        );
        /* Add formatting */
        speed_scale.connect('format-value', (scale, value) => {
            return value + 'ms';
        });
        speed_scale.connect('value-changed', (widget) => {
            settings.set_value(
                SETTINGS_TRANSITION_SPEED,
                new GLib.Variant('i', widget.adjustment.get_value())
            );
        });

        let transition_windows_touch = builder.get_object<CheckButton>(
            'transition_windows_touch_check'
        );
        transition_windows_touch.set_active(
            settings.get_boolean(SETTINGS_TRANSITION_WINDOWS_TOUCH)
        );

        transition_windows_touch.connect('toggled', (widget) => {
            settings.set_value(
                SETTINGS_TRANSITION_WINDOWS_TOUCH,
                new GLib.Variant('b', widget.get_active())
            );
        });

        let transition_with_overview = builder.get_object<CheckButton>(
            'transition_with_overview_check'
        );
        transition_with_overview.set_active(
            settings.get_boolean(SETTINGS_TRANSITION_WITH_OVERVIEW)
        );

        transition_with_overview.connect('toggled', (widget) => {
            settings.set_value(
                SETTINGS_TRANSITION_WITH_OVERVIEW,
                new GLib.Variant('b', widget.get_active())
            );
        });
    }

    /* Setup foreground tab */
    {
        let text_color_switch = builder.get_object<Switch>('text_color_switch');

        let text_color_revealer = builder.get_object<Revealer>(
            'text_color_revealer'
        );

        text_color_switch.set_active(
            settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR)
        );
        text_color_switch.connect('state-set', (widget, state) => {
            settings.set_value(
                SETTINGS_ENABLE_TEXT_COLOR,
                new GLib.Variant('b', state)
            );
            text_color_revealer.set_reveal_child(state);
        });

        let maximized_text_color_switch = builder.get_object<CheckButton>(
            'maximized_text_color_check'
        );
        maximized_text_color_switch.set_active(
            settings.get_boolean(SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR)
        );

        maximized_text_color_switch.connect('toggled', (widget) => {
            settings.set_value(
                SETTINGS_ENABLE_MAXIMIZED_TEXT_COLOR,
                new GLib.Variant('b', widget.get_active())
            );
        });

        let overview_text_color_switch = builder.get_object<CheckButton>(
            'overview_text_color_check'
        );
        overview_text_color_switch.set_active(
            settings.get_boolean(SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR)
        );

        overview_text_color_switch.connect('toggled', (widget) => {
            settings.set_value(
                SETTINGS_ENABLE_OVERVIEW_TEXT_COLOR,
                new GLib.Variant('b', widget.get_active())
            );
        });

        let remove_panel_styling_check = builder.get_object<CheckButton>(
            'remove_panel_styling_check'
        );
        remove_panel_styling_check.set_active(
            settings.get_boolean(SETTINGS_REMOVE_PANEL_STYLING)
        );

        remove_panel_styling_check.connect('toggled', (widget) => {
            settings.set_value(
                SETTINGS_REMOVE_PANEL_STYLING,
                new GLib.Variant('b', widget.get_active())
            );
        });

        let maximized_text_color_btn = builder.get_object<ColorButton>(
            'maximized_text_color_btn'
        );
        let maximized_text_color = settings
            .get_value(SETTINGS_MAXIMIZED_TEXT_COLOR)
            .deep_unpack();

        let css_color =
            'rgba(' +
            maximized_text_color[RED] +
            ',' +
            maximized_text_color[GREEN] +
            ',' +
            maximized_text_color[BLUE] +
            ', 1.0)';
        let scaled_color = new Gdk.RGBA();

        if (scaled_color.parse(css_color)) {
            maximized_text_color_btn.set_rgba(scaled_color);
        }

        maximized_text_color_btn.connect('color-set', (color_btn) => {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let rgb = [color.red, color.green, color.blue];

            settings.set_value(
                SETTINGS_MAXIMIZED_TEXT_COLOR,
                new GLib.Variant('(iii)', rgb)
            );
        });

        let text_color_btn = builder.get_object<ColorButton>('text_color_btn');
        let text_color = settings.get_value(SETTINGS_TEXT_COLOR).deep_unpack();

        css_color =
            'rgba(' +
            text_color[RED] +
            ',' +
            text_color[GREEN] +
            ',' +
            text_color[BLUE] +
            ', 1.0)';
        scaled_color = new Gdk.RGBA();

        if (scaled_color.parse(css_color)) {
            text_color_btn.set_rgba(scaled_color);
        }

        text_color_btn.connect('color-set', (color_btn) => {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let rgb = [color.red, color.green, color.blue];

            settings.set_value(
                SETTINGS_TEXT_COLOR,
                new GLib.Variant('(iii)', rgb)
            );
        });

        let text_shadow_switch = builder.get_object<Switch>(
            'text_shadow_switch'
        );

        text_shadow_switch.set_active(
            settings.get_boolean(SETTINGS_TEXT_SHADOW)
        );

        text_shadow_switch.connect('state-set', (widget, state) => {
            settings.set_value(
                SETTINGS_TEXT_SHADOW,
                new GLib.Variant('b', state)
            );
        });

        let icon_shadow = builder.get_object<Switch>('icon_shadow_switch');

        icon_shadow.set_active(settings.get_boolean(SETTINGS_ICON_SHADOW));

        icon_shadow.connect('state-set', (widget, state) => {
            settings.set_value(
                SETTINGS_ICON_SHADOW,
                new GLib.Variant('b', state)
            );
        });
    }

    /* Setup Background Tab */
    {
        let background_color_switch = builder.get_object<Switch>(
            'background_color_switch'
        );

        let opacity_switch = builder.get_object<Switch>('opacity_switch');

        let background_color_revealer = builder.get_object<Revealer>(
            'background_color_revealer'
        );

        let opacity_revealer = builder.get_object<Revealer>('opacity_revealer');

        background_color_switch.set_active(
            settings.get_boolean(SETTINGS_ENABLE_BACKGROUND_COLOR)
        );
        background_color_switch.connect('state-set', (widget, state) => {
            settings.set_value(
                SETTINGS_ENABLE_BACKGROUND_COLOR,
                new GLib.Variant('b', state)
            );
            background_color_revealer.set_reveal_child(state);
        });

        opacity_switch.set_active(
            settings.get_boolean(SETTINGS_ENABLE_OPACITY)
        );
        opacity_switch.connect('state-set', (widget, state) => {
            settings.set_value(
                SETTINGS_ENABLE_OPACITY,
                new GLib.Variant('b', state)
            );
            opacity_revealer.set_reveal_child(state);
        });

        /* Maximum opacity control */

        let maximum_scale = builder.get_object<Scale>('maximum_scale');
        /* Init value. */
        maximum_scale.adjustment.set_value(
            settings.get_int(SETTINGS_MAXIMIZED_OPACITY)
        );
        /* Add formatting */
        maximum_scale.connect('format-value', (scale, value) => {
            return ((value / SCALE_FACTOR) * 100).toFixed(0) + '%'; // eslint-disable-line no-magic-numbers
        });
        maximum_scale.connect('value-changed', (widget) => {
            settings.set_value(
                SETTINGS_MAXIMIZED_OPACITY,
                new GLib.Variant('i', widget.adjustment.get_value())
            );
        });

        /* Minimum opacity control */

        let minimum_scale = builder.get_object<Scale>('minimum_scale');
        /* Init value. */
        minimum_scale.adjustment.set_value(
            settings.get_int(SETTINGS_UNMAXIMIZED_OPACITY)
        );
        /* Add formatting */
        minimum_scale.connect('format-value', (scale, value) => {
            return ((value / SCALE_FACTOR) * 100).toFixed(0) + '%'; // eslint-disable-line no-magic-numbers
        });
        minimum_scale.connect('value-changed', (widget) => {
            settings.set_value(
                SETTINGS_UNMAXIMIZED_OPACITY,
                new GLib.Variant('i', widget.adjustment.get_value())
            );
        });

        /* Convert & scale color. */
        let panel_color = settings
            .get_value(SETTINGS_PANEL_COLOR)
            .deep_unpack();

        let color_btn = builder.get_object<ColorButton>('color_btn');
        let css_color =
            'rgba(' +
            panel_color[RED] +
            ',' +
            panel_color[GREEN] +
            ',' +
            panel_color[BLUE] +
            ', 1.0)';

        let scaled_color = new Gdk.RGBA();
        if (scaled_color.parse(css_color)) {
            color_btn.set_rgba(scaled_color);
        }
        color_btn.connect('color-set', (color_btn) => {
            let color = Util.gdk_to_css_color(color_btn.get_rgba());
            let rgb = [color.red, color.green, color.blue];

            settings.set_value(
                SETTINGS_PANEL_COLOR,
                new GLib.Variant('ai', rgb)
            );
        });
    }

    /* Util function to find UI elements in a GTK dialog. */
    /**
     *
     * @param {import('gtk').Container} container
     * @param {string[]} names
     * @param {number} level
     *
     * @returns {import('gtk').Widget}
     */
    function find(
        container: Container,
        names: string | any[],
        level: number = 0
    ): Widget {
        let target = null;
        container.forall((child: Container) => {
            if (child instanceof Gtk.Container) {
                // TODO - check this addition
                if (child.get_name() === names[level]) {
                    if (++level === names.length) {
                        target = child;
                    } else {
                        target = find(child, names, level);
                    }
                }
            }
        });
        return target;
    }

    /* Setup About Tab */
    {
        /* Find the stack */
        let about_dialog = builder.get_object<AboutDialog>('about_dialog');
        about_dialog.set_version('v' + Me.metadata['version']);

        let contents = about_dialog.get_child();

        if (contents instanceof Gtk.Container) {
            let stack = find(contents, ['box', 'stack']);
            if (stack instanceof Gtk.Stack) {
                /* Find the license page. */
                let license_page = find(stack, ['license_page']);

                /* Get rid of that pesky license page. */
                stack.remove(license_page);

                /* Strip the dialog of its content. */
                about_dialog.remove(contents);

                /* Link the stack switcher (I hate header bars sometimes.) */
                let stack_switcher = builder.get_object<StackSwitcher>(
                    'about_switcher'
                );
                stack_switcher.set_stack(stack);

                /* Transfer the contents. */

                let about_box = builder.get_object<Box>('about_box');
                about_box.add(contents);

                /* Add some space to the about page. Was a little cramped... */
                let found_box = find(stack, ['page_vbox', 'hbox']);
                if (found_box === null) {
                    found_box = find(stack, ['page_vbox']);
                }

                if (found_box instanceof Gtk.Box) {
                    let website_label = find(found_box, ['website_label']);

                    if (website_label !== null) {
                        found_box.remove(website_label);

                        let new_label = Gtk.LinkButton.new_with_label(
                            'http://evanwelsh.com/dynamic-panel-transparency',
                            gtk30_('Website')
                        );

                        new_label.set_margin_top(WEBSITE_LABEL_TOP_MARGIN);
                        new_label.set_margin_bottom(
                            WEBSITE_LABEL_BOTTOM_MARGIN
                        );
                        found_box.add(new_label);
                    }
                }
            }
        }
    }

    let widget_parent = main_widget.get_toplevel();

    /* Fix revealer sizing issues. */
    widget_parent.connect('realize', () => {
        extra_btn.hide();
        /* We have to re-grab this object as it isn't in this scope. */
        let text_color_revealer = builder.get_object<Revealer>(
            'text_color_revealer'
        );
        text_color_revealer.set_reveal_child(
            settings.get_boolean(SETTINGS_ENABLE_TEXT_COLOR)
        );

        let background_color_revealer = builder.get_object<Revealer>(
            'background_color_revealer'
        );
        background_color_revealer.set_reveal_child(
            settings.get_boolean(SETTINGS_ENABLE_BACKGROUND_COLOR)
        );

        let opacity_revealer = builder.get_object<Revealer>('opacity_revealer');
        opacity_revealer.set_reveal_child(
            settings.get_boolean(SETTINGS_ENABLE_OPACITY)
        );

        let text_shadow_revealer = builder.get_object<Revealer>(
            'text_shadow_revealer'
        );
        text_shadow_revealer.set_reveal_child(
            settings.get_boolean(SETTINGS_TEXT_SHADOW)
        );

        let icon_shadow_revealer = builder.get_object<Revealer>(
            'icon_shadow_revealer'
        );
        icon_shadow_revealer.set_reveal_child(
            settings.get_boolean(SETTINGS_ICON_SHADOW)
        );
    });

    /* Return main widget. */
    main_widget.show_all();
    return main_widget;
}
