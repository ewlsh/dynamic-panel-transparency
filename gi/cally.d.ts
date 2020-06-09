

/**
 * Cally
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Clutter from "clutter";
import * as Atk from "atk";
type GType = object;

export function accessibility_init(): boolean;

export function get_cally_initialized(): boolean;

export type ActionCallback = (cally_actor: Actor) => void;

export type ActionFunc = (cally_actor: Actor) => void;
export module Actor {
    export interface ConstructorProperties extends Atk.GObjectAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class Actor extends Atk.GObjectAccessible implements Atk.Action, Atk.Component {
    constructor(properties?: Partial<Actor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Actor.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](actor: Clutter.Actor): Actor;
    // Members
    add_action(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback, notify: GLib.DestroyNotify): number;
    remove_action(action_id: number): boolean;
    remove_action_by_name(action_name: string): boolean;
    // Implemented Members
    do_action(i: number): boolean;
    get_description(i: number): string | null;
    get_description(...args: never[]): never;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    get_name(...args: never[]): never;
    set_description(i: number, desc: string): boolean;
    set_description(...args: never[]): never;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    vfunc_get_description(...args: never[]): never;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    vfunc_get_name(...args: never[]): never;
    vfunc_set_description(i: number, desc: string): boolean;
    vfunc_set_description(...args: never[]): never;
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number | null, number | null, number | null, number | null];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number | null, number | null];
    get_size(): [number | null, number | null];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number | null, number | null, number | null, number | null];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number | null, number | null];
    vfunc_get_size(): [number | null, number | null];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
}
export module Clone {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
    }
}
export class Clone extends Actor implements Atk.Action, Atk.Component {
    constructor(properties?: Partial<Clone.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Clone.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](actor: Clutter.Actor): Clone;
    static ["new"](...args: never[]): never;
}
export module Group {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
    }
}
export class Group extends Actor implements Atk.Action, Atk.Component {
    constructor(properties?: Partial<Group.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Group.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](actor: Clutter.Actor): Group;
    static ["new"](...args: never[]): never;
}
export module Rectangle {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
    }
}
export class Rectangle extends Actor implements Atk.Action, Atk.Component {
    constructor(properties?: Partial<Rectangle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Rectangle.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](actor: Clutter.Actor): Rectangle;
    static ["new"](...args: never[]): never;
}
export module Root {
    export interface ConstructorProperties extends Atk.GObjectAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class Root extends Atk.GObjectAccessible {
    constructor(properties?: Partial<Root.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Root.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): Root;
}
export module Stage {
    export interface ConstructorProperties extends Group.ConstructorProperties {
        [key: string]: any;
    }
}
export class Stage extends Group implements Atk.Action, Atk.Component, Atk.Window {
    constructor(properties?: Partial<Stage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Stage.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](actor: Clutter.Actor): Stage;
    static ["new"](...args: never[]): never;
}
export module Text {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
    }
}
export class Text extends Actor implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {
    constructor(properties?: Partial<Text.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Text.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](actor: Clutter.Actor): Text;
    static ["new"](...args: never[]): never;
    // Implemented Members
    copy_text(start_pos: number, end_pos: number): void;
    cut_text(start_pos: number, end_pos: number): void;
    delete_text(start_pos: number, end_pos: number): void;
    insert_text(string: string, length: number, position: number): void;
    paste_text(position: number): void;
    set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
    set_text_contents(string: string): void;
    vfunc_copy_text(start_pos: number, end_pos: number): void;
    vfunc_cut_text(start_pos: number, end_pos: number): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_insert_text(string: string, length: number, position: number): void;
    vfunc_paste_text(position: number): void;
    vfunc_set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
    vfunc_set_text_contents(string: string): void;
    add_selection(start_offset: number, end_offset: number): boolean;
    get_bounded_ranges(rect: Atk.TextRectangle, coord_type: Atk.CoordType, x_clip_type: Atk.TextClipType, y_clip_type: Atk.TextClipType): Atk.TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(offset: number, coords: Atk.CoordType): [number | null, number | null, number | null, number | null];
    get_default_attributes(): Atk.AttributeSet;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    get_selection(selection_num: number): [string, number, number];
    get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: Atk.CoordType, x: number, y: number): boolean;
    set_caret_offset(offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_add_selection(start_offset: number, end_offset: number): boolean;
    vfunc_get_bounded_ranges(rect: Atk.TextRectangle, coord_type: Atk.CoordType, x_clip_type: Atk.TextClipType, y_clip_type: Atk.TextClipType): Atk.TextRange[];
    vfunc_get_caret_offset(): number;
    vfunc_get_character_at_offset(offset: number): number;
    vfunc_get_character_count(): number;
    vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [number | null, number | null, number | null, number | null];
    vfunc_get_default_attributes(): Atk.AttributeSet;
    vfunc_get_n_selections(): number;
    vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    vfunc_get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    vfunc_get_selection(selection_num: number): [string, number, number];
    vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    vfunc_get_text(start_offset: number, end_offset: number): string;
    vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_remove_selection(selection_num: number): boolean;
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    vfunc_scroll_substring_to_point(start_offset: number, end_offset: number, coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_caret_offset(offset: number): boolean;
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_text_attributes_changed(): void;
    vfunc_text_caret_moved(location: number): void;
    vfunc_text_changed(position: number, length: number): void;
    vfunc_text_selection_changed(): void;
}
export module Texture {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
    }
}
export class Texture extends Actor implements Atk.Action, Atk.Component {
    constructor(properties?: Partial<Texture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Texture.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](actor: Clutter.Actor): Texture;
    static ["new"](...args: never[]): never;
}
export module Util {
    export interface ConstructorProperties extends Atk.Util.ConstructorProperties {
        [key: string]: any;
    }
}
export class Util extends Atk.Util {
    constructor(properties?: Partial<Util.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Util.ConstructorProperties>, ...args: any[]): void;
}
export class ActorPrivate {
    constructor(copy: ActorPrivate);
}
export class ClonePrivate {
    constructor(copy: ClonePrivate);
}
export class GroupPrivate {
    constructor(copy: GroupPrivate);
}
export class RectanglePrivate {
    constructor(copy: RectanglePrivate);
}
export class RootPrivate {
    constructor(copy: RootPrivate);
}
export class StagePrivate {
    constructor(copy: StagePrivate);
}
export class TextPrivate {
    constructor(copy: TextPrivate);
}
export class TexturePrivate {
    constructor(copy: TexturePrivate);
}
export class UtilPrivate {
    constructor(copy: UtilPrivate);
}