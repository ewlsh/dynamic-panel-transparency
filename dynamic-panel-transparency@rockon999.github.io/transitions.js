const Config = imports.misc.config;
const Lang = imports.lang;
const Main = imports.ui.main;

const Panel = Main.panel;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Extension = Me.imports.extension;
const Convenience = Me.imports.convenience;
const Settings = Me.imports.settings;
const Theming = Me.imports.theming;
const Util = Me.imports.util;

function init() {
    this.status = Extension.get_panel_status();
    this.animation_status = new AnimationStatus();
    if (Settings.get_force_animation()) {
        this.tweener = imports.tweener.tweener;
    } else {
        this.tweener = imports.ui.tweener;
    }
    this.tweener.registerSpecialProperty('background_alpha', Theming.get_background_alpha, Theming.set_background_alpha);
}

function cleanup() {
    this.status = null;
    this.tweener = null;
}

function get_animation_status() {
    return this.animation_status;
}

function update_transparent() {
    if (Main.overview.visible || Main.overview._shown)
        return;

    this.status.set_transparent(true);
    this.status.set_blank(false);

    Theming.set_panel_color({opacity:  Settings.get_minimum_opacity()});

}

function update_solid() {
    if (Main.overview.visible || Main.overview._shown)
        return;
    this.status.set_transparent(false);
    this.status.set_blank(false);

    Theming.set_panel_color({opacity: Settings.get_maximum_opacity()});
}

function fade_in(params = null) {
    if (Main.overview.visible || Main.overview._shown)
        return;

    if (this.animation_status.ready() || !this.animation_status.same(AnimationAction.FADE_IN, AnimationDestination.MAXIMUM)) {
        this.animation_status.set(AnimationAction.FADE_IN, AnimationDestination.MAXIMUM)
    } else {
        return;
    }

    if (params === null || Util.is_undef(params.time))
        params = {
            time: Settings.get_transition_speed()
        };

    this.status.set_transparent(false);
    this.status.set_blank(false);
    let time = params.time / 1000;

    Theming.set_panel_color();

    if (time <= 0) {
        Theming.set_background_alpha(Panel.actor, Settings.get_maximum_opacity());

    } else {
        this.tweener.addTween(Panel.actor, {
            time: time,
            transition: 'linear',
            background_alpha: Settings.get_maximum_opacity(),
            onComplete: Lang.bind(this, fade_in_complete)
        });
    }
}

function fade_in_complete() {
    if (Main.overview._shown && Settings.get_minimum_opacity() > 0) {
        blank_fade_out();
        return;
    }

    if (!Settings.get_hide_corners()) {
        show_corners();
    }

    this.animation_status.done();
}

function fade_out(params = null) {
    if (this.animation_status.ready() || !this.animation_status.same(AnimationAction.FADE_OUT, AnimationDestination.MINIMUM)) {
        this.animation_status.set(AnimationAction.FADE_OUT, AnimationDestination.MINIMUM);
    } else {
        return;
    }

    if (params === null || Util.is_undef(params.time))
        params = {
            time: Settings.get_transition_speed()
        };

    this.status.set_transparent(true);
    this.status.set_blank(false);

    let time = params.time / 1000;

    /* we can't actually fade these, so we'll attempt to hide the fact we're jerkily removing them */
    /* always hide to update preference changes */
    if (!Settings.get_hide_corners()) {
        hide_corners();
    } else {
        hide_corners({
            opacity: 0
        });
    }



    if (time <= 0 && !Main.overview._shown) {
        Theming.set_background_alpha(Panel.actor, Settings.get_minimum_opacity());
        Theming.set_panel_color();
    } else if (Main.overview._shown) {
        blank_fade_out({
            time: 0
        });

    } else {
        this.tweener.addTween(Panel.actor, {
            time: time,
            transition: 'linear',
            background_alpha: Settings.get_minimum_opacity(),
            onComplete: Lang.bind(this, function(){
                Theming.set_panel_color();
                this.animation_status.done();
            })
        });
    }
}


/* Doesn't adhere to opacity settings. For overview and screenShield. */
function blank_fade_out(params = null) {
    if (this.animation_status.ready() || !this.animation_status.same(AnimationAction.FADE_OUT, AnimationDestination.BLANK)) {
        this.animation_status.set(AnimationAction.FADE_OUT, AnimationDestination.BLANK);
    } else {
        return;
    }

    if (params === null || Util.is_undef(params.time))
        params = {
            time: Settings.get_transition_speed()
        };

    this.status.set_transparent(true);
    this.status.set_blank(true);

    let time = params.time / 1000;

    /* we can't actually fade these, so we'll attempt to hide the fact we're jerkily removing them */
    /* always hide to update preference changes */

    hide_corners({
        opacity: 0
    });


    if (time <= 0) {
        Theming.set_background_alpha(Panel.actor, 0);
        Theming.set_panel_color();
    } else {
        this.tweener.addTween(Panel.actor, {
            time: time,
            transition: 'linear',
            background_alpha: 0,
            onComplete: Lang.bind(this, function(){
                Theming.set_panel_color();
                this.animation_status.done();
            })
        });
    }
}

/* Sadly, the current corner/panel overlap is very awkward */
function hide_corners(params = null) {
    if (params === null || Util.is_undef(params.opacity))
        params = {
            opacity: Settings.get_minimum_opacity()
        };
    Theming.set_corner_color({
        opacity: params.opacity
    });
}

function show_corners(params = null) {
    if (params === null || Util.is_undef(params.opacity))
        params = {
            opacity: Settings.get_maximum_opacity()
        };
    Theming.set_corner_color({
        opacity: params.opacity
    });
}

const AnimationStatus = new Lang.Class({
    Name: 'DynamicPanelTransparency_AnimationStatus',
    _init: function () {
        this.destination = null;
        this.action = null;
    },
    get_action: function () {
        return this.action;
    },
    get_destination: function () {
        return this.destination;
    },
    set: function (action, destination) {
        this.action = action;
        this.destination = destination;
    },
    done: function (action, destination) {
        this.action = null;
        this.destination = null;
    },
    same: function (action, destination) {
        return (this.action == action && this.destination == destination);
    },
    ready: function (action, destination) {
        return (this.action == null && this.destination == null);
    }
});

const AnimationAction = function () {
    const FADING_OUT = 0;
    const FADING_IN = 1;
}
const AnimationDestination = function () {
    const BLANK = 0;
    const MINIMUM = 1;
    const MAXIMUM = 2;

}