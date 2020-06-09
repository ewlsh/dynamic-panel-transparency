

/**
 * Json
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
type GType = object;

export const MAJOR_VERSION: number;

export const MICRO_VERSION: number;

export const MINOR_VERSION: number;

export const VERSION_S: string;

export function boxed_can_deserialize(gboxed_type: GType, node_type: NodeType): boolean;

export function boxed_can_serialize(gboxed_type: GType): [boolean, NodeType];

export function boxed_deserialize(gboxed_type: GType, node: Node): any | null;

export function boxed_serialize(gboxed_type: GType, boxed: any | null): Node | null;

export function construct_gobject(gtype: GType, data: string, length: number): GObject.Object;

export function from_string(str: string): Node;

export function gobject_deserialize(gtype: GType, node: Node): GObject.Object;

export function gobject_from_data(gtype: GType, data: string, length: number): GObject.Object;

export function gobject_serialize(gobject: GObject.Object): Node;

export function gobject_to_data(gobject: GObject.Object): [string, number];

export function gvariant_deserialize(json_node: Node, signature: string | null): GLib.Variant;

export function gvariant_deserialize_data(json: string, length: number, signature: string | null): GLib.Variant;

export function gvariant_serialize(variant: GLib.Variant): Node;

export function gvariant_serialize_data(variant: GLib.Variant): [string, number | null];

export function parser_error_quark(): GLib.Quark;

export function path_error_quark(): GLib.Quark;

export function reader_error_quark(): GLib.Quark;

export function serialize_gobject(gobject: GObject.Object): [string, number];

export function string_compare(a: string, b: string): number;

export function string_equal(a: string, b: string): boolean;

export function string_hash(key: string): number;

export function to_string(node: Node, pretty: boolean): string;

export type ArrayForeach = (array: Array, index_: number, element_node: Node) => void;

export type BoxedDeserializeFunc = (node: Node) => any | null;

export type BoxedSerializeFunc = (boxed: any | null) => Node;

export type ObjectForeach = (object: Object, member_name: string, member_node: Node) => void;
export enum NodeType {
    OBJECT = 0,
    ARRAY = 1,
    VALUE = 2,
    NULL = 3,
}
export class ParserError extends GLib.Error {
    constructor(copy: ParserError);
    // Properties
    static PARSE: number;
    static TRAILING_COMMA: number;
    static MISSING_COMMA: number;
    static MISSING_COLON: number;
    static INVALID_BAREWORD: number;
    static EMPTY_MEMBER_NAME: number;
    static INVALID_DATA: number;
    static UNKNOWN: number;
    // Members
    quark(): GLib.Quark;
}
export class PathError extends GLib.Error {
    constructor(copy: PathError);
    // Properties
    static QUERY: number;
    // Members
    quark(): GLib.Quark;
}
export class ReaderError extends GLib.Error {
    constructor(copy: ReaderError);
    // Properties
    static NO_ARRAY: number;
    static INVALID_INDEX: number;
    static NO_OBJECT: number;
    static INVALID_MEMBER: number;
    static INVALID_NODE: number;
    static NO_VALUE: number;
    static INVALID_TYPE: number;
    // Members
    quark(): GLib.Quark;
}
export module Builder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        immutable: boolean;
    }
}
export class Builder extends GObject.Object {
    constructor(properties?: Partial<Builder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Builder.ConstructorProperties>, ...args: any[]): void;
    // Properties
    immutable: boolean;
    // Constructors
    static ["new"](): Builder;
    static new_immutable(): Builder;
    // Members
    add_boolean_value(value: boolean): Builder | null;
    add_double_value(value: number): Builder | null;
    add_int_value(value: number): Builder | null;
    add_null_value(): Builder | null;
    add_string_value(value: string): Builder | null;
    add_value(node: Node): Builder | null;
    begin_array(): Builder | null;
    begin_object(): Builder | null;
    end_array(): Builder | null;
    end_object(): Builder | null;
    get_root(): Node | null;
    reset(): void;
    set_member_name(member_name: string): Builder | null;
}
export module Generator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        indent: number;
        indent_char: number;
        pretty: boolean;
        root: Node;
    }
}
export class Generator extends GObject.Object {
    constructor(properties?: Partial<Generator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Generator.ConstructorProperties>, ...args: any[]): void;
    // Properties
    indent: number;
    indent_char: number;
    pretty: boolean;
    root: Node;
    // Constructors
    static ["new"](): Generator;
    // Members
    get_indent(): number;
    get_indent_char(): number;
    get_pretty(): boolean;
    get_root(): Node | null;
    set_indent(indent_level: number): void;
    set_indent_char(indent_char: number): void;
    set_pretty(is_pretty: boolean): void;
    set_root(node: Node): void;
    to_data(): [string, number];
    to_file(filename: string): boolean;
    to_gstring(string: GLib.String): GLib.String;
    to_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): boolean;
}
export module Parser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        immutable: boolean;
    }
}
export class Parser extends GObject.Object {
    constructor(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]): void;
    // Properties
    immutable: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'array-element', callback: (_source: this, array: Array, index_: number) => void): number;
    connect_after(signal: 'array-element', callback: (_source: this, array: Array, index_: number) => void): number;
    emit(signal: 'array-element', array: Array, index_: number): void;
    connect(signal: 'array-end', callback: (_source: this, array: Array) => void): number;
    connect_after(signal: 'array-end', callback: (_source: this, array: Array) => void): number;
    emit(signal: 'array-end', array: Array): void;
    connect(signal: 'array-start', callback: (_source: this) => void): number;
    connect_after(signal: 'array-start', callback: (_source: this) => void): number;
    emit(signal: 'array-start'): void;
    connect(signal: 'error', callback: (_source: this, error: any | null) => void): number;
    connect_after(signal: 'error', callback: (_source: this, error: any | null) => void): number;
    emit(signal: 'error', error: any | null): void;
    connect(signal: 'object-end', callback: (_source: this, object: Object) => void): number;
    connect_after(signal: 'object-end', callback: (_source: this, object: Object) => void): number;
    emit(signal: 'object-end', object: Object): void;
    connect(signal: 'object-member', callback: (_source: this, object: Object, member_name: string) => void): number;
    connect_after(signal: 'object-member', callback: (_source: this, object: Object, member_name: string) => void): number;
    emit(signal: 'object-member', object: Object, member_name: string): void;
    connect(signal: 'object-start', callback: (_source: this) => void): number;
    connect_after(signal: 'object-start', callback: (_source: this) => void): number;
    emit(signal: 'object-start'): void;
    connect(signal: 'parse-end', callback: (_source: this) => void): number;
    connect_after(signal: 'parse-end', callback: (_source: this) => void): number;
    emit(signal: 'parse-end'): void;
    connect(signal: 'parse-start', callback: (_source: this) => void): number;
    connect_after(signal: 'parse-start', callback: (_source: this) => void): number;
    emit(signal: 'parse-start'): void;
    // Constructors
    static ["new"](): Parser;
    static new_immutable(): Parser;
    // Members
    get_current_line(): number;
    get_current_pos(): number;
    get_root(): Node | null;
    has_assignment(): [boolean, string | null];
    load_from_data(data: string, length: number): boolean;
    load_from_file(filename: string): boolean;
    load_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean;
    load_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    load_from_stream_finish(result: Gio.AsyncResult): boolean;
    steal_root(): Node | null;
    vfunc_array_element(array: Array, index_: number): void;
    vfunc_array_end(array: Array): void;
    vfunc_array_start(): void;
    vfunc_error(error: GLib.Error): void;
    vfunc_object_end(object: Object): void;
    vfunc_object_member(object: Object, member_name: string): void;
    vfunc_object_start(): void;
    vfunc_parse_end(): void;
    vfunc_parse_start(): void;
}
export module Path {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Path extends GObject.Object {
    constructor(properties?: Partial<Path.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Path.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): Path;
    // Members
    compile(expression: string): boolean;
    match(root: Node): Node;
    static query(expression: string, root: Node): Node;
}
export module Reader {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        root: Node;
    }
}
export class Reader extends GObject.Object {
    constructor(properties?: Partial<Reader.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Reader.ConstructorProperties>, ...args: any[]): void;
    // Properties
    root: Node;
    // Constructors
    static ["new"](node: Node | null): Reader;
    // Members
    count_elements(): number;
    count_members(): number;
    end_element(): void;
    end_member(): void;
    get_boolean_value(): boolean;
    get_double_value(): number;
    get_error(): GLib.Error | null;
    get_int_value(): number;
    get_member_name(): string | null;
    get_null_value(): boolean;
    get_string_value(): string;
    get_value(): Node | null;
    is_array(): boolean;
    is_object(): boolean;
    is_value(): boolean;
    list_members(): string[];
    read_element(index_: number): boolean;
    read_member(member_name: string): boolean;
    set_root(root: Node | null): void;
}
export class Array {
    constructor();
    constructor(copy: Array);
    // Constructors
    static ["new"](): Array;
    static sized_new(n_elements: number): Array;
    // Members
    add_array_element(value: Array | null): void;
    add_boolean_element(value: boolean): void;
    add_double_element(value: number): void;
    add_element(node: Node): void;
    add_int_element(value: number): void;
    add_null_element(): void;
    add_object_element(value: Object): void;
    add_string_element(value: string): void;
    dup_element(index_: number): Node;
    equal(b: Array): boolean;
    foreach_element(func: ArrayForeach): void;
    get_array_element(index_: number): Array;
    get_boolean_element(index_: number): boolean;
    get_double_element(index_: number): number;
    get_element(index_: number): Node;
    get_elements(): GLib.List;
    get_int_element(index_: number): number;
    get_length(): number;
    get_null_element(index_: number): boolean;
    get_object_element(index_: number): Object;
    get_string_element(index_: number): string;
    hash(): number;
    is_immutable(): boolean;
    ref(): Array;
    remove_element(index_: number): void;
    seal(): void;
    unref(): void;
}
export class BuilderPrivate {
    constructor(copy: BuilderPrivate);
}
export class GeneratorPrivate {
    constructor(copy: GeneratorPrivate);
}
export class Node {
    constructor(type: NodeType);
    constructor(copy: Node);
    // Constructors
    static alloc(): Node;
    static ["new"](type: NodeType): Node;
    // Members
    copy(): Node;
    dup_array(): Array | null;
    dup_object(): Object | null;
    dup_string(): string | null;
    equal(b: Node): boolean;
    free(): void;
    get_array(): Array | null;
    get_boolean(): boolean;
    get_double(): number;
    get_int(): number;
    get_node_type(): NodeType;
    get_object(): Object | null;
    get_parent(): Node | null;
    get_string(): string | null;
    get_value(): GObject.Value;
    get_value_type(): GType;
    hash(): number;
    init(type: NodeType): Node;
    init_array(array: Array | null): Node;
    init_boolean(value: boolean): Node;
    init_double(value: number): Node;
    init_int(value: number): Node;
    init_null(): Node;
    init_object(object: Object | null): Node;
    init_string(value: string | null): Node;
    is_immutable(): boolean;
    is_null(): boolean;
    ref(): Node;
    seal(): void;
    set_array(array: Array): void;
    set_boolean(value: boolean): void;
    set_double(value: number): void;
    set_int(value: number): void;
    set_object(object: Object | null): void;
    set_parent(parent: Node): void;
    set_string(value: string): void;
    set_value(value: (GObject.Value | string | boolean | number)): void;
    take_array(array: Array): void;
    take_object(object: Object): void;
    type_name(): string;
    unref(): void;
}
export class Object {
    constructor();
    constructor(copy: Object);
    // Constructors
    static ["new"](): Object;
    // Members
    add_member(member_name: string, node: Node): void;
    dup_member(member_name: string): Node | null;
    equal(b: Object): boolean;
    foreach_member(func: ObjectForeach): void;
    get_array_member(member_name: string): Array;
    get_boolean_member(member_name: string): boolean;
    get_double_member(member_name: string): number;
    get_int_member(member_name: string): number;
    get_member(member_name: string): Node | null;
    get_members(): GLib.List | null;
    get_null_member(member_name: string): boolean;
    get_object_member(member_name: string): Object | null;
    get_size(): number;
    get_string_member(member_name: string): string;
    get_values(): GLib.List | null;
    has_member(member_name: string): boolean;
    hash(): number;
    is_immutable(): boolean;
    ref(): Object;
    remove_member(member_name: string): void;
    seal(): void;
    set_array_member(member_name: string, value: Array): void;
    set_boolean_member(member_name: string, value: boolean): void;
    set_double_member(member_name: string, value: number): void;
    set_int_member(member_name: string, value: number): void;
    set_member(member_name: string, node: Node): void;
    set_null_member(member_name: string): void;
    set_object_member(member_name: string, value: Object): void;
    set_string_member(member_name: string, value: string): void;
    unref(): void;
}
export class ObjectIter {
    constructor(properties?: {
        priv_pointer?: any[];
        priv_int?: number[];
        priv_boolean?: boolean[];
    });
    constructor(copy: ObjectIter);
    // Fields
    priv_pointer: any[];
    priv_int: number[];
    priv_boolean: boolean[];
    // Members
    init(object: Object): void;
    next(): [boolean, string | null, Node | null];
}
export class ParserPrivate {
    constructor(copy: ParserPrivate);
}
export class ReaderPrivate {
    constructor(copy: ReaderPrivate);
}
export interface SerializableNamespace {
    $gtype: GType;
}
export interface Serializable extends GObject.Object {
    // Members
    default_deserialize_property(property_name: string, value: (GObject.Value | string | boolean | number), pspec: GObject.ParamSpec, property_node: Node): boolean;
    default_serialize_property(property_name: string, value: (GObject.Value | string | boolean | number), pspec: GObject.ParamSpec): Node;
    deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [boolean, GObject.Value];
    find_property(name: string): GObject.ParamSpec | null;
    get_property(pspec: GObject.ParamSpec): GObject.Value;
    get_property(...args: never[]): never;
    list_properties(): GObject.ParamSpec[];
    serialize_property(property_name: string, value: (GObject.Value | string | boolean | number), pspec: GObject.ParamSpec): Node;
    set_property(pspec: GObject.ParamSpec, value: (GObject.Value | string | boolean | number)): void;
    set_property(...args: never[]): never;
    vfunc_deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [boolean, GObject.Value];
    vfunc_find_property(name: string): GObject.ParamSpec | null;
    vfunc_get_property(pspec: GObject.ParamSpec): GObject.Value;
    vfunc_get_property(...args: never[]): never;
    vfunc_serialize_property(property_name: string, value: (GObject.Value | string | boolean | number), pspec: GObject.ParamSpec): Node;
    vfunc_set_property(pspec: GObject.ParamSpec, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_property(...args: never[]): never;
}

export const Serializable: SerializableNamespace;