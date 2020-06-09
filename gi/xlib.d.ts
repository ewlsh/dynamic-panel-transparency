

/**
 * xlib
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
type GType = object;

export function open_display(): void;
export class Display {
    constructor(copy: Display);
}
export class Screen {
    constructor(copy: Screen);
}
export class Visual {
    constructor(copy: Visual);
}
export class XConfigureEvent {
    constructor(copy: XConfigureEvent);
}
export class XImage {
    constructor(copy: XImage);
}
export class XFontStruct {
    constructor(copy: XFontStruct);
}
export class XTrapezoid {
    constructor(copy: XTrapezoid);
}
export class XVisualInfo {
    constructor(copy: XVisualInfo);
}
export class XWindowAttributes {
    constructor(copy: XWindowAttributes);
}
export class XEvent {
    constructor(copy: XEvent);
}

export type Atom = number;

export type Colormap = number;

export type Cursor = number;

export type Drawable = number;

export type GC = any;

export type KeyCode = number;

export type KeySym = number;

export type Picture = number;

export type Time = number;

export type VisualID = number;

export type Window = number;

export type XID = number;

export type Pixmap = number;