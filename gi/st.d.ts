

/**
 * St
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Cally from "cally";
import * as Clutter from "clutter";
import * as Atk from "atk";
import * as cairo from "cairo";
import * as Pango from "pango";
import * as Json from "json";
import * as Cogl from "cogl";
type GType = object;

export function describe_actor(actor: Clutter.Actor): string;

export type ClipboardCallbackFunc = (clipboard: Clipboard, text: string) => void;

export type EntryCursorFunc = (entry: Entry, use_ibeam: boolean, data: any | null) => void;
export enum Align {
    START = 0,
    MIDDLE = 1,
    END = 2,
}
export enum BackgroundSize {
    AUTO = 0,
    CONTAIN = 1,
    COVER = 2,
    FIXED = 3,
}
export enum ClipboardType {
    PRIMARY = 0,
    CLIPBOARD = 1,
}
export enum Corner {
    TOPLEFT = 0,
    TOPRIGHT = 1,
    BOTTOMRIGHT = 2,
    BOTTOMLEFT = 3,
}
export enum DirectionType {
    TAB_FORWARD = 0,
    TAB_BACKWARD = 1,
    UP = 2,
    DOWN = 3,
    LEFT = 4,
    RIGHT = 5,
}
export enum GradientType {
    NONE = 0,
    VERTICAL = 1,
    HORIZONTAL = 2,
    RADIAL = 3,
}
export enum IconStyle {
    REQUESTED = 0,
    REGULAR = 1,
    SYMBOLIC = 2,
}
export enum PolicyType {
    ALWAYS = 0,
    AUTOMATIC = 1,
    NEVER = 2,
    EXTERNAL = 3,
}
export enum Side {
    TOP = 0,
    RIGHT = 1,
    BOTTOM = 2,
    LEFT = 3,
}
export enum TextAlign {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
    JUSTIFY = 3,
}
export enum TextureCachePolicy {
    NONE = 0,
    FOREVER = 1,
}
export enum ButtonMask {
    ONE = 1,
    TWO = 2,
    THREE = 4,
}
export enum TextDecoration {
    UNDERLINE = 1,
    OVERLINE = 2,
    LINE_THROUGH = 4,
    BLINK = 8,
}
export module Adjustment {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        lower: number;
        page_increment: number;
        page_size: number;
        step_increment: number;
        upper: number;
        value: number;
    }
}
export class Adjustment extends GObject.Object implements Clutter.Animatable {
    constructor(properties?: Partial<Adjustment.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Adjustment.ConstructorProperties>, ...args: any[]): void;
    // Properties
    lower: number;
    page_increment: number;
    page_size: number;
    step_increment: number;
    upper: number;
    value: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;
    // Constructors
    static ["new"](value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number): Adjustment;
    // Members
    add_transition(name: string, transition: Clutter.Transition): void;
    adjust_for_scroll_event(delta: number): void;
    clamp_page(lower: number, upper: number): void;
    get_transition(name: string): Clutter.Transition | null;
    get_value(): number;
    get_values(): [number, number, number, number, number, number];
    remove_transition(name: string): void;
    set_value(value: number): void;
    set_values(value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number): void;
    vfunc_changed(): void;
    // Implemented Members
    animate_property(animation: Clutter.Animation, property_name: string, initial_value: (GObject.Value | string | boolean | number), final_value: (GObject.Value | string | boolean | number), progress: number, value: (GObject.Value | string | boolean | number)): boolean;
    find_property(property_name: string): GObject.ParamSpec;
    get_initial_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, GObject.Value];
    set_final_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_animate_property(animation: Clutter.Animation, property_name: string, initial_value: (GObject.Value | string | boolean | number), final_value: (GObject.Value | string | boolean | number), progress: number, value: (GObject.Value | string | boolean | number)): boolean;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_initial_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, GObject.Value];
    vfunc_set_final_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
}
export module Bin {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        child: Clutter.Actor;
        x_fill: boolean;
        y_fill: boolean;
    }
}
export class Bin extends Widget implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<Bin.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Bin.ConstructorProperties>, ...args: any[]): void;
    // Properties
    child: Clutter.Actor;
    x_fill: boolean;
    y_fill: boolean;
    // Constructors
    static ["new"](): Bin;
    static ["new"](...args: never[]): never;
    // Members
    get_child(): Clutter.Actor;
    get_fill(): [boolean, boolean];
    set_child(child: Clutter.Actor | null): void;
    set_fill(x_fill: boolean, y_fill: boolean): void;
}
export module BorderImage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BorderImage extends GObject.Object {
    constructor(properties?: Partial<BorderImage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BorderImage.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](file: Gio.File, border_top: number, border_right: number, border_bottom: number, border_left: number, scale_factor: number): BorderImage;
    // Members
    equal(other: BorderImage): boolean;
    get_borders(border_top: number, border_right: number, border_bottom: number, border_left: number): void;
    get_file(): Gio.File;
}
export module BoxLayout {
    export interface ConstructorProperties extends Viewport.ConstructorProperties {
        [key: string]: any;
        pack_start: boolean;
        vertical: boolean;
    }
}
export class BoxLayout extends Viewport implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable, Scrollable {
    constructor(properties?: Partial<BoxLayout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BoxLayout.ConstructorProperties>, ...args: any[]): void;
    // Properties
    pack_start: boolean;
    vertical: boolean;
    // Constructors
    static ["new"](): BoxLayout;
    static ["new"](...args: never[]): never;
    // Members
    get_pack_start(): boolean;
    get_vertical(): boolean;
    set_pack_start(pack_start: boolean): void;
    set_vertical(vertical: boolean): void;
}
export module BoxLayoutChild {
    export interface ConstructorProperties extends Clutter.ChildMeta.ConstructorProperties {
        [key: string]: any;
        expand: boolean;
        x_align: Align;
        x_fill: boolean;
        y_align: Align;
        y_fill: boolean;
    }
}
export class BoxLayoutChild extends Clutter.ChildMeta {
    constructor(properties?: Partial<BoxLayoutChild.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BoxLayoutChild.ConstructorProperties>, ...args: any[]): void;
    // Properties
    expand: boolean;
    x_align: Align;
    x_fill: boolean;
    y_align: Align;
    y_fill: boolean;
}
export module Button {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        button_mask: ButtonMask;
        checked: boolean;
        label: string;
        pressed: boolean;
        toggle_mode: boolean;
    }
}
export class Button extends Bin implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<Button.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Button.ConstructorProperties>, ...args: any[]): void;
    // Properties
    button_mask: ButtonMask;
    checked: boolean;
    label: string;
    pressed: boolean;
    toggle_mode: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'clicked', callback: (_source: this, clicked_button: number) => void): number;
    connect_after(signal: 'clicked', callback: (_source: this, clicked_button: number) => void): number;
    emit(signal: 'clicked', clicked_button: number): void;
    // Constructors
    static ["new"](): Button;
    static ["new"](...args: never[]): never;
    static new_with_label(text: string): Button;
    // Members
    fake_release(): void;
    get_button_mask(): ButtonMask;
    get_checked(): boolean;
    get_label(): string;
    get_toggle_mode(): boolean;
    set_button_mask(mask: ButtonMask): void;
    set_checked(checked: boolean): void;
    set_label(text: string): void;
    set_toggle_mode(toggle: boolean): void;
    vfunc_clicked(clicked_button: number): void;
    vfunc_transition(): void;
}
export module Clipboard {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Clipboard extends GObject.Object {
    constructor(properties?: Partial<Clipboard.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Clipboard.ConstructorProperties>, ...args: any[]): void;
    // Members
    get_text(type: ClipboardType, callback: ClipboardCallbackFunc): void;
    set_content(type: ClipboardType, mimetype: string, bytes: (GLib.Bytes | Uint8Array)): void;
    set_text(type: ClipboardType, text: string): void;
    static get_default(): Clipboard;
    static set_selection(selection: any): void;
}
export module DrawingArea {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class DrawingArea extends Widget implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<DrawingArea.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DrawingArea.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'repaint', callback: (_source: this) => void): number;
    connect_after(signal: 'repaint', callback: (_source: this) => void): number;
    emit(signal: 'repaint'): void;
    // Members
    get_context(): cairo.Context;
    get_surface_size(): [number, number];
    queue_repaint(): void;
    vfunc_repaint(): void;
}
export module Entry {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        clutter_text: Clutter.Text;
        hint_actor: Clutter.Actor;
        hint_text: string;
        input_hints: any;
        input_purpose: any;
        primary_icon: Clutter.Actor;
        secondary_icon: Clutter.Actor;
        text: string;
    }
}
export class Entry extends Widget implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]): void;
    // Properties
    clutter_text: Clutter.Text;
    hint_actor: Clutter.Actor;
    hint_text: string;
    input_hints: any;
    input_purpose: any;
    primary_icon: Clutter.Actor;
    secondary_icon: Clutter.Actor;
    text: string;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'primary-icon-clicked', callback: (_source: this) => void): number;
    connect_after(signal: 'primary-icon-clicked', callback: (_source: this) => void): number;
    emit(signal: 'primary-icon-clicked'): void;
    connect(signal: 'secondary-icon-clicked', callback: (_source: this) => void): number;
    connect_after(signal: 'secondary-icon-clicked', callback: (_source: this) => void): number;
    emit(signal: 'secondary-icon-clicked'): void;
    // Constructors
    static ["new"](text: string): Entry;
    static ["new"](...args: never[]): never;
    // Members
    get_clutter_text(): Clutter.Actor;
    get_hint_actor(): Clutter.Actor;
    get_hint_text(): string;
    get_input_hints(): any;
    get_input_purpose(): any;
    get_primary_icon(): Clutter.Actor;
    get_secondary_icon(): Clutter.Actor;
    get_text(): string;
    set_hint_actor(hint_actor: Clutter.Actor | null): void;
    set_hint_text(text: string | null): void;
    set_input_hints(hints: any): void;
    set_input_purpose(purpose: any): void;
    set_primary_icon(icon: Clutter.Actor | null): void;
    set_secondary_icon(icon: Clutter.Actor | null): void;
    set_text(text: string | null): void;
    vfunc_primary_icon_clicked(): void;
    vfunc_secondary_icon_clicked(): void;
}
export module FocusManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class FocusManager extends GObject.Object {
    constructor(properties?: Partial<FocusManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FocusManager.ConstructorProperties>, ...args: any[]): void;
    // Members
    add_group(root: Widget): void;
    get_group(widget: Widget): Widget;
    navigate_from_event(event: Clutter.Event): boolean;
    remove_group(root: Widget): void;
    static get_for_stage(stage: Clutter.Stage): FocusManager;
}
export module GenericAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class GenericAccessible extends WidgetAccessible implements Atk.Action, Atk.Component, Atk.Value {
    constructor(properties?: Partial<GenericAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GenericAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: GenericAccessiblePrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'get-current-value', callback: (_source: this) => number): number;
    connect_after(signal: 'get-current-value', callback: (_source: this) => number): number;
    emit(signal: 'get-current-value'): void;
    connect(signal: 'get-maximum-value', callback: (_source: this) => number): number;
    connect_after(signal: 'get-maximum-value', callback: (_source: this) => number): number;
    emit(signal: 'get-maximum-value'): void;
    connect(signal: 'get-minimum-increment', callback: (_source: this) => number): number;
    connect_after(signal: 'get-minimum-increment', callback: (_source: this) => number): number;
    emit(signal: 'get-minimum-increment'): void;
    connect(signal: 'get-minimum-value', callback: (_source: this) => number): number;
    connect_after(signal: 'get-minimum-value', callback: (_source: this) => number): number;
    emit(signal: 'get-minimum-value'): void;
    connect(signal: 'set-current-value', callback: (_source: this, new_value: number) => void): number;
    connect_after(signal: 'set-current-value', callback: (_source: this, new_value: number) => void): number;
    emit(signal: 'set-current-value', new_value: number): void;
    // Constructors
    static new_for_actor(actor: Clutter.Actor): GenericAccessible;
    // Implemented Members
    get_current_value(): GObject.Value;
    get_increment(): number;
    get_maximum_value(): GObject.Value;
    get_minimum_increment(): GObject.Value;
    get_minimum_value(): GObject.Value;
    get_range(): Atk.Range | null;
    get_sub_ranges(): GLib.SList;
    get_value_and_text(): [number, string | null];
    set_current_value(value: (GObject.Value | string | boolean | number)): boolean;
    set_value(new_value: number): void;
    vfunc_get_current_value(): GObject.Value;
    vfunc_get_increment(): number;
    vfunc_get_maximum_value(): GObject.Value;
    vfunc_get_minimum_increment(): GObject.Value;
    vfunc_get_minimum_value(): GObject.Value;
    vfunc_get_range(): Atk.Range | null;
    vfunc_get_sub_ranges(): GLib.SList;
    vfunc_get_value_and_text(): [number, string | null];
    vfunc_set_current_value(value: (GObject.Value | string | boolean | number)): boolean;
    vfunc_set_value(new_value: number): void;
}
export module Icon {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        fallback_gicon: Gio.Icon;
        fallback_icon_name: string;
        gicon: Gio.Icon;
        icon_name: string;
        icon_size: number;
    }
}
export class Icon extends Widget implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<Icon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Icon.ConstructorProperties>, ...args: any[]): void;
    // Properties
    fallback_gicon: Gio.Icon;
    fallback_icon_name: string;
    gicon: Gio.Icon;
    icon_name: string;
    icon_size: number;
    // Constructors
    static ["new"](): Icon;
    static ["new"](...args: never[]): never;
    // Members
    get_fallback_gicon(): Gio.Icon;
    get_fallback_icon_name(): string;
    get_gicon(): Gio.Icon;
    get_icon_name(): string;
    get_icon_size(): number;
    set_fallback_gicon(fallback_gicon: Gio.Icon | null): void;
    set_fallback_icon_name(fallback_icon_name: string | null): void;
    set_gicon(gicon: Gio.Icon | null): void;
    set_icon_name(icon_name: string | null): void;
    set_icon_size(size: number): void;
}
export module ImageContent {
    export interface ConstructorProperties extends Clutter.Image.ConstructorProperties {
        [key: string]: any;
        preferred_height: number;
        preferred_width: number;
    }
}
export class ImageContent extends Clutter.Image implements Clutter.Content {
    constructor(properties?: Partial<ImageContent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ImageContent.ConstructorProperties>, ...args: any[]): void;
    // Properties
    preferred_height: number;
    preferred_width: number;
    // Members
    static new_with_preferred_size(width: number, height: number): Clutter.Content;
    // Implemented Members
    get_preferred_size(): [boolean, number, number];
    invalidate(): void;
    vfunc_attached(actor: Clutter.Actor): void;
    vfunc_detached(actor: Clutter.Actor): void;
    vfunc_get_preferred_size(): [boolean, number, number];
    vfunc_invalidate(): void;
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void;
}
export module Label {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        clutter_text: Clutter.Text;
        text: string;
    }
}
export class Label extends Widget implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<Label.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Label.ConstructorProperties>, ...args: any[]): void;
    // Properties
    clutter_text: Clutter.Text;
    text: string;
    // Constructors
    static ["new"](text: string): Label;
    static ["new"](...args: never[]): never;
    // Members
    get_clutter_text(): Clutter.Actor;
    get_text(): string;
    set_text(text: string): void;
}
export module PasswordEntry {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;
        password_visible: boolean;
        show_peek_icon: boolean;
    }
}
export class PasswordEntry extends Entry implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<PasswordEntry.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PasswordEntry.ConstructorProperties>, ...args: any[]): void;
    // Properties
    password_visible: boolean;
    show_peek_icon: boolean;
    // Constructors
    static ["new"](): PasswordEntry;
    static ["new"](...args: never[]): never;
    // Members
    get_password_visible(): boolean;
    get_show_peek_icon(): boolean;
    set_password_visible(value: boolean): void;
    set_show_peek_icon(value: boolean): void;
}
export module ScrollBar {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        adjustment: Adjustment;
        vertical: boolean;
    }
}
export class ScrollBar extends Widget implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<ScrollBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScrollBar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    adjustment: Adjustment;
    vertical: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'scroll-start', callback: (_source: this) => void): number;
    connect_after(signal: 'scroll-start', callback: (_source: this) => void): number;
    emit(signal: 'scroll-start'): void;
    connect(signal: 'scroll-stop', callback: (_source: this) => void): number;
    connect_after(signal: 'scroll-stop', callback: (_source: this) => void): number;
    emit(signal: 'scroll-stop'): void;
    // Constructors
    static ["new"](adjustment: Adjustment): ScrollBar;
    static ["new"](...args: never[]): never;
    // Members
    get_adjustment(): Adjustment;
    set_adjustment(adjustment: Adjustment): void;
    vfunc_scroll_start(): void;
    vfunc_scroll_stop(): void;
}
export module ScrollView {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        enable_mouse_scrolling: boolean;
        hscroll: ScrollBar;
        hscrollbar_policy: PolicyType;
        hscrollbar_visible: boolean;
        overlay_scrollbars: boolean;
        vscroll: ScrollBar;
        vscrollbar_policy: PolicyType;
        vscrollbar_visible: boolean;
    }
}
export class ScrollView extends Bin implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<ScrollView.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScrollView.ConstructorProperties>, ...args: any[]): void;
    // Properties
    enable_mouse_scrolling: boolean;
    hscroll: ScrollBar;
    hscrollbar_policy: PolicyType;
    hscrollbar_visible: boolean;
    overlay_scrollbars: boolean;
    vscroll: ScrollBar;
    vscrollbar_policy: PolicyType;
    vscrollbar_visible: boolean;
    // Constructors
    static ["new"](): ScrollView;
    static ["new"](...args: never[]): never;
    // Members
    get_column_size(): number;
    get_hscroll_bar(): Clutter.Actor;
    get_mouse_scrolling(): boolean;
    get_overlay_scrollbars(): boolean;
    get_row_size(): number;
    get_vscroll_bar(): Clutter.Actor;
    set_column_size(column_size: number): void;
    set_mouse_scrolling(enabled: boolean): void;
    set_overlay_scrollbars(enabled: boolean): void;
    set_policy(hscroll: PolicyType, vscroll: PolicyType): void;
    set_row_size(row_size: number): void;
    update_fade_effect(vfade_offset: number, hfade_offset: number): void;
}
export module ScrollViewFade {
    export interface ConstructorProperties extends Clutter.ShaderEffect.ConstructorProperties {
        [key: string]: any;
        fade_edges: boolean;
        hfade_offset: number;
        vfade_offset: number;
    }
}
export class ScrollViewFade extends Clutter.ShaderEffect {
    constructor(properties?: Partial<ScrollViewFade.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScrollViewFade.ConstructorProperties>, ...args: any[]): void;
    // Properties
    fade_edges: boolean;
    hfade_offset: number;
    vfade_offset: number;
    // Constructors
    static ["new"](): ScrollViewFade;
    static ["new"](...args: never[]): never;
}
export module Settings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        drag_threshold: number;
        enable_animations: boolean;
        font_name: string;
        gtk_icon_theme: string;
        gtk_theme: string;
        magnifier_active: boolean;
        primary_paste: boolean;
        slow_down_factor: number;
    }
}
export class Settings extends GObject.Object {
    constructor(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]): void;
    // Properties
    drag_threshold: number;
    enable_animations: boolean;
    font_name: string;
    gtk_icon_theme: string;
    gtk_theme: string;
    magnifier_active: boolean;
    primary_paste: boolean;
    slow_down_factor: number;
    // Members
    inhibit_animations(): void;
    uninhibit_animations(): void;
    static get(): Settings;
}
export module TextureCache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextureCache extends GObject.Object {
    constructor(properties?: Partial<TextureCache.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextureCache.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: TextureCachePrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'icon-theme-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'icon-theme-changed', callback: (_source: this) => void): number;
    emit(signal: 'icon-theme-changed'): void;
    connect(signal: 'texture-file-changed', callback: (_source: this, object: Gio.File) => void): number;
    connect_after(signal: 'texture-file-changed', callback: (_source: this, object: Gio.File) => void): number;
    emit(signal: 'texture-file-changed', object: Gio.File): void;
    // Members
    bind_cairo_surface_property(object: GObject.Object, property_name: string, size: number): Widget;
    load_file_async(file: Gio.File, available_width: number, available_height: number, paint_scale: number, resource_scale: number): Clutter.Actor;
    load_file_to_cairo_surface(file: Gio.File, paint_scale: number, resource_scale: number): cairo.Surface;
    load_gicon(theme_node: ThemeNode | null, icon: Gio.Icon, size: number, paint_scale: number, resource_scale: number): Clutter.Actor;
    load_sliced_image(file: Gio.File, grid_width: number, grid_height: number, paint_scale: number, resource_scale: number, load_callback: GLib.Func | null): Clutter.Actor;
    rescan_icon_theme(): boolean;
    static get_default(): TextureCache;
}
export module Theme {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        application_stylesheet: Gio.File;
        default_stylesheet: Gio.File;
        theme_stylesheet: Gio.File;
    }
}
export class Theme extends GObject.Object {
    constructor(properties?: Partial<Theme.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Theme.ConstructorProperties>, ...args: any[]): void;
    // Properties
    application_stylesheet: Gio.File;
    default_stylesheet: Gio.File;
    theme_stylesheet: Gio.File;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'custom-stylesheets-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'custom-stylesheets-changed', callback: (_source: this) => void): number;
    emit(signal: 'custom-stylesheets-changed'): void;
    // Constructors
    static ["new"](application_stylesheet: Gio.File, theme_stylesheet: Gio.File, default_stylesheet: Gio.File): Theme;
    // Members
    get_custom_stylesheets(): GLib.SList;
    load_stylesheet(file: Gio.File): boolean;
    unload_stylesheet(file: Gio.File): void;
}
export module ThemeContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        scale_factor: number;
    }
}
export class ThemeContext extends GObject.Object {
    constructor(properties?: Partial<ThemeContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ThemeContext.ConstructorProperties>, ...args: any[]): void;
    // Properties
    scale_factor: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;
    // Constructors
    static ["new"](): ThemeContext;
    // Members
    get_font(): Pango.FontDescription;
    get_root_node(): ThemeNode;
    get_scale_factor(): number;
    get_theme(): Theme;
    intern_node(node: ThemeNode): ThemeNode;
    set_font(font: Pango.FontDescription): void;
    set_theme(theme: Theme): void;
    static get_for_stage(stage: Clutter.Stage): ThemeContext;
}
export module ThemeNode {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ThemeNode extends GObject.Object {
    constructor(properties?: Partial<ThemeNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ThemeNode.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](context: ThemeContext, parent_node: ThemeNode | null, theme: Theme | null, element_type: GType, element_id: string | null, element_class: string | null, pseudo_class: string | null, inline_style: string): ThemeNode;
    // Members
    adjust_for_height(for_height: number): number;
    adjust_for_width(for_width: number): number;
    adjust_preferred_height(min_height_p: number | null, natural_height_p: number): [number | null, number];
    adjust_preferred_width(min_width_p: number | null, natural_width_p: number): [number | null, number];
    equal(node_b: ThemeNode): boolean;
    geometry_equal(other: ThemeNode): boolean;
    get_background_color(): Clutter.Color;
    get_background_gradient(): [GradientType, Clutter.Color, Clutter.Color];
    get_background_image(): Gio.File;
    get_background_image_shadow(): Shadow;
    get_background_paint_box(allocation: Clutter.ActorBox): Clutter.ActorBox;
    get_border_color(side: Side): Clutter.Color;
    get_border_image(): BorderImage;
    get_border_radius(corner: Corner): number;
    get_border_width(side: Side): number;
    get_box_shadow(): Shadow;
    get_color(property_name: string): Clutter.Color;
    get_content_box(allocation: Clutter.ActorBox): Clutter.ActorBox;
    get_double(property_name: string): number;
    get_element_classes(): string[];
    get_element_id(): string;
    get_element_type(): GType;
    get_font(): Pango.FontDescription;
    get_font_features(): string;
    get_foreground_color(): Clutter.Color;
    get_height(): number;
    get_horizontal_padding(): number;
    get_icon_colors(): IconColors;
    get_icon_style(): IconStyle;
    get_length(property_name: string): number;
    get_letter_spacing(): number;
    get_margin(side: Side): number;
    get_max_height(): number;
    get_max_width(): number;
    get_min_height(): number;
    get_min_width(): number;
    get_outline_color(): Clutter.Color;
    get_outline_width(): number;
    get_padding(side: Side): number;
    get_paint_box(allocation: Clutter.ActorBox): Clutter.ActorBox;
    get_parent(): ThemeNode;
    get_pseudo_classes(): string[];
    get_shadow(property_name: string): Shadow;
    get_text_align(): TextAlign;
    get_text_decoration(): TextDecoration;
    get_text_shadow(): Shadow;
    get_theme(): Theme;
    get_transition_duration(): number;
    get_url(property_name: string): Gio.File;
    get_vertical_padding(): number;
    get_width(): number;
    hash(): number;
    invalidate_background_image(): void;
    invalidate_border_image(): void;
    lookup_color(property_name: string, inherit: boolean): [boolean, Clutter.Color];
    lookup_double(property_name: string, inherit: boolean): [boolean, number];
    lookup_length(property_name: string, inherit: boolean): [boolean, number];
    lookup_shadow(property_name: string, inherit: boolean): [boolean, Shadow];
    lookup_time(property_name: string, inherit: boolean): [boolean, number];
    lookup_url(property_name: string, inherit: boolean): [boolean, Gio.File];
    paint_equal(other: ThemeNode | null): boolean;
    to_string(): string;
}
export module Viewport {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class Viewport extends Widget implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable, Scrollable {
    constructor(properties?: Partial<Viewport.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Viewport.ConstructorProperties>, ...args: any[]): void;
    // Implemented Properties
    hadjustment: Adjustment;
    vadjustment: Adjustment;
    // Implemented Members
    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
}
export module Widget {
    export interface ConstructorProperties extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;
        accessible_name: string;
        accessible_role: Atk.Role;
        can_focus: boolean;
        hover: boolean;
        label_actor: Clutter.Actor;
        pseudo_class: string;
        style: string;
        style_class: string;
        track_hover: boolean;
    }
}
export class Widget extends Clutter.Actor implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<Widget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Widget.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accessible_name: string;
    accessible_role: Atk.Role;
    can_focus: boolean;
    hover: boolean;
    label_actor: Clutter.Actor;
    pseudo_class: string;
    style: string;
    style_class: string;
    track_hover: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'popup-menu', callback: (_source: this) => void): number;
    connect_after(signal: 'popup-menu', callback: (_source: this) => void): number;
    emit(signal: 'popup-menu'): void;
    connect(signal: 'resource-scale-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'resource-scale-changed', callback: (_source: this) => void): number;
    emit(signal: 'resource-scale-changed'): void;
    connect(signal: 'style-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'style-changed', callback: (_source: this) => void): number;
    emit(signal: 'style-changed'): void;
    // Members
    add_accessible_state(state: Atk.StateType): void;
    add_style_class_name(style_class: string): void;
    add_style_pseudo_class(pseudo_class: string): void;
    ensure_style(): void;
    get_accessible_name(): string;
    get_accessible_role(): Atk.Role;
    get_can_focus(): boolean;
    get_focus_chain(): GLib.List;
    get_hover(): boolean;
    get_label_actor(): Clutter.Actor;
    get_resource_scale(): [boolean, number];
    get_style(): string;
    get_style_class_name(): string;
    get_style_pseudo_class(): string;
    get_theme_node(): ThemeNode;
    get_track_hover(): boolean;
    has_style_class_name(style_class: string): boolean;
    has_style_pseudo_class(pseudo_class: string): boolean;
    navigate_focus(from: Clutter.Actor | null, direction: DirectionType, wrap_around: boolean): boolean;
    paint_background(paint_context: any): void;
    peek_theme_node(): ThemeNode;
    popup_menu(): void;
    remove_accessible_state(state: Atk.StateType): void;
    remove_style_class_name(style_class: string): void;
    remove_style_pseudo_class(pseudo_class: string): void;
    set_accessible(accessible: Atk.Object): void;
    set_accessible_name(name: string | null): void;
    set_accessible_role(role: Atk.Role): void;
    set_can_focus(can_focus: boolean): void;
    set_hover(hover: boolean): void;
    set_label_actor(label: Clutter.Actor): void;
    set_style(style: string | null): void;
    set_style_class_name(style_class_list: string | null): void;
    set_style_pseudo_class(pseudo_class_list: string | null): void;
    set_track_hover(track_hover: boolean): void;
    style_changed(): void;
    sync_hover(): void;
    vfunc_get_focus_chain(): GLib.List;
    vfunc_navigate_focus(from: Clutter.Actor | null, direction: DirectionType): boolean;
    vfunc_popup_menu(): void;
    vfunc_resource_scale_changed(): void;
    vfunc_style_changed(): void;
    // Implemented Members
    animate_property(animation: Clutter.Animation, property_name: string, initial_value: (GObject.Value | string | boolean | number), final_value: (GObject.Value | string | boolean | number), progress: number, value: (GObject.Value | string | boolean | number)): boolean;
    find_property(property_name: string): GObject.ParamSpec;
    get_initial_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, GObject.Value];
    set_final_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_animate_property(animation: Clutter.Animation, property_name: string, initial_value: (GObject.Value | string | boolean | number), final_value: (GObject.Value | string | boolean | number), progress: number, value: (GObject.Value | string | boolean | number)): boolean;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_initial_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, GObject.Value];
    vfunc_set_final_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    add_actor(actor: Clutter.Actor): void;
    child_get_property(child: Clutter.Actor, property: string, value: (GObject.Value | string | boolean | number)): void;
    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
    child_set_property(child: Clutter.Actor, property: string, value: (GObject.Value | string | boolean | number)): void;
    create_child_meta(actor: Clutter.Actor): void;
    destroy_child_meta(actor: Clutter.Actor): void;
    find_child_by_name(child_name: string): Clutter.Actor;
    foreach(callback: Clutter.Callback): void;
    foreach_with_internals(callback: Clutter.Callback): void;
    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
    get_children(): GLib.List;
    lower_child(actor: Clutter.Actor, sibling: Clutter.Actor | null): void;
    raise_child(actor: Clutter.Actor, sibling: Clutter.Actor | null): void;
    remove_actor(actor: Clutter.Actor): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: Clutter.Actor): void;
    vfunc_actor_removed(actor: Clutter.Actor): void;
    vfunc_add(actor: Clutter.Actor): void;
    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: Clutter.Actor): void;
    vfunc_destroy_child_meta(actor: Clutter.Actor): void;
    vfunc_foreach(callback: Clutter.Callback): void;
    vfunc_foreach_with_internals(callback: Clutter.Callback): void;
    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
    vfunc_lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void;
    vfunc_raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void;
    vfunc_remove(actor: Clutter.Actor): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(script: Clutter.Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Clutter.Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Clutter.Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}
export module WidgetAccessible {
    export interface ConstructorProperties extends Cally.Actor.ConstructorProperties {
        [key: string]: any;
    }
}
export class WidgetAccessible extends Cally.Actor implements Atk.Action, Atk.Component {
    constructor(properties?: Partial<WidgetAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WidgetAccessible.ConstructorProperties>, ...args: any[]): void;
}
export class BoxLayoutChildPrivate {
    constructor(copy: BoxLayoutChildPrivate);
}
export class BoxLayoutPrivate {
    constructor(copy: BoxLayoutPrivate);
}
export class FocusManagerPrivate {
    constructor(copy: FocusManagerPrivate);
}
export class GenericAccessiblePrivate {
    constructor(copy: GenericAccessiblePrivate);
}
export class IconColors {
    constructor();
    constructor(copy: IconColors);
    // Fields
    ref_count: number;
    foreground: Clutter.Color;
    warning: Clutter.Color;
    error: Clutter.Color;
    success: Clutter.Color;
    // Constructors
    static ["new"](): IconColors;
    // Members
    copy(): IconColors;
    equal(other: IconColors): boolean;
    ref(): IconColors;
    unref(): void;
}
export class IconPrivate {
    constructor(copy: IconPrivate);
}
export class LabelPrivate {
    constructor(copy: LabelPrivate);
}
export class ScrollViewPrivate {
    constructor(copy: ScrollViewPrivate);
}
export class Shadow {
    constructor(color: Clutter.Color, xoffset: number, yoffset: number, blur: number, spread: number, inset: boolean);
    constructor(copy: Shadow);
    // Fields
    color: Clutter.Color;
    xoffset: number;
    yoffset: number;
    blur: number;
    spread: number;
    inset: boolean;
    ref_count: number;
    // Constructors
    static ["new"](color: Clutter.Color, xoffset: number, yoffset: number, blur: number, spread: number, inset: boolean): Shadow;
    // Members
    equal(other: Shadow): boolean;
    get_box(actor_box: Clutter.ActorBox, shadow_box: Clutter.ActorBox): void;
    ref(): Shadow;
    unref(): void;
}
export class ShadowHelper {
    constructor(shadow: Shadow);
    constructor(copy: ShadowHelper);
    // Constructors
    static ["new"](shadow: Shadow): ShadowHelper;
    // Members
    copy(): ShadowHelper;
    free(): void;
    paint(framebuffer: Cogl.Framebuffer, actor_box: Clutter.ActorBox, paint_opacity: number): void;
    update(source: Clutter.Actor): void;
}
export class TextureCachePrivate {
    constructor(copy: TextureCachePrivate);
}
export class ThemeNodePaintState {
    constructor(copy: ThemeNodePaintState);
    // Fields
    node: ThemeNode;
    alloc_width: number;
    alloc_height: number;
    box_shadow_width: number;
    box_shadow_height: number;
    resource_scale: number;
    box_shadow_pipeline: Cogl.Pipeline;
    prerendered_texture: Cogl.Pipeline;
    prerendered_pipeline: Cogl.Pipeline;
    corner_material: Cogl.Pipeline[];
    // Members
    copy(other: ThemeNodePaintState): void;
    free(): void;
    init(): void;
    invalidate(): void;
    invalidate_for_file(file: Gio.File): boolean;
    set_node(node: ThemeNode): void;
}
export class WidgetAccessiblePrivate {
    constructor(copy: WidgetAccessiblePrivate);
}
export interface ScrollableNamespace {
    $gtype: GType;
}
export interface Scrollable extends GObject.Object {
    // Properties
    hadjustment: Adjustment;
    vadjustment: Adjustment;
    // Members
    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
}

export const Scrollable: ScrollableNamespace;