

/**
 * GObject
 */
import * as Gio from "gio";
import * as GLib from "glib";
type GType = object;

export const PARAM_MASK: number;

export const PARAM_STATIC_STRINGS: number;

export const PARAM_USER_SHIFT: number;

export const SIGNAL_FLAGS_MASK: number;

export const SIGNAL_MATCH_MASK: number;

export const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type;

export const TYPE_FUNDAMENTAL_MAX: number;

export const TYPE_FUNDAMENTAL_SHIFT: number;

export const TYPE_RESERVED_BSE_FIRST: number;

export const TYPE_RESERVED_BSE_LAST: number;

export const TYPE_RESERVED_GLIB_FIRST: number;

export const TYPE_RESERVED_GLIB_LAST: number;

export const TYPE_RESERVED_USER_FIRST: number;

export const VALUE_NOCOPY_CONTENTS: number;

export function boxed_copy(boxed_type: GType, src_boxed: any): any;

export function boxed_free(boxed_type: GType, boxed: any): void;

export function cclosure_marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_BOOLEAN__FLAGS(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__BOOLEAN(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__BOXED(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__CHAR(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__DOUBLE(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__ENUM(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__FLAGS(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__FLOAT(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__INT(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__LONG(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__OBJECT(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__PARAM(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__POINTER(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__STRING(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__UCHAR(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__UINT(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__UINT_POINTER(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__ULONG(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__VARIANT(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_VOID__VOID(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function cclosure_marshal_generic(closure: Closure, return_gvalue: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;

export function enum_complete_type_info(g_enum_type: GType, const_values: EnumValue): TypeInfo;

export function enum_get_value(enum_class: EnumClass, value: number): EnumValue;

export function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue;

export function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue;

export function enum_register_static(name: string, const_static_values: EnumValue): GType;

export function enum_to_string(g_enum_type: GType, value: number): string;

export function flags_complete_type_info(g_flags_type: GType, const_values: FlagsValue): TypeInfo;

export function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue;

export function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue;

export function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue;

export function flags_register_static(name: string, const_static_values: FlagsValue): GType;

export function flags_to_string(flags_type: GType, value: number): string;

export function gtype_get_type(): GType;

export function param_spec_boolean(name: string, nick: string, blurb: string, default_value: boolean, flags: ParamFlags): ParamSpec;

export function param_spec_boxed(name: string, nick: string, blurb: string, boxed_type: GType, flags: ParamFlags): ParamSpec;

export function param_spec_char(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_enum(name: string, nick: string, blurb: string, enum_type: GType, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_flags(name: string, nick: string, blurb: string, flags_type: GType, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_float(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_gtype(name: string, nick: string, blurb: string, is_a_type: GType, flags: ParamFlags): ParamSpec;

export function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_int64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_long(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_object(name: string, nick: string, blurb: string, object_type: GType, flags: ParamFlags): ParamSpec;

export function param_spec_param(name: string, nick: string, blurb: string, param_type: GType, flags: ParamFlags): ParamSpec;

export function param_spec_pointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec;

export function param_spec_pool_new(type_prefixing: boolean): ParamSpecPool;

export function param_spec_string(name: string, nick: string, blurb: string, default_value: string | null, flags: ParamFlags): ParamSpec;

export function param_spec_uchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_uint(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_uint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_ulong(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_unichar(name: string, nick: string, blurb: string, default_value: number, flags: ParamFlags): ParamSpec;

export function param_spec_variant(name: string, nick: string, blurb: string, type: GLib.VariantType, default_value: GLib.Variant | null, flags: ParamFlags): ParamSpec;

export function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): GType;

export function param_value_convert(pspec: ParamSpec, src_value: (Value | string | boolean | number), dest_value: (Value | string | boolean | number), strict_validation: boolean): boolean;

export function param_value_defaults(pspec: ParamSpec, value: (Value | string | boolean | number)): boolean;

export function param_value_set_default(pspec: ParamSpec, value: (Value | string | boolean | number)): void;

export function param_value_validate(pspec: ParamSpec, value: (Value | string | boolean | number)): boolean;

export function param_values_cmp(pspec: ParamSpec, value1: (Value | string | boolean | number), value2: (Value | string | boolean | number)): number;

export function pointer_type_register_static(name: string): GType;

export function signal_accumulator_first_wins(ihint: SignalInvocationHint, return_accu: (Value | string | boolean | number), handler_return: (Value | string | boolean | number), dummy: any | null): boolean;

export function signal_accumulator_true_handled(ihint: SignalInvocationHint, return_accu: (Value | string | boolean | number), handler_return: (Value | string | boolean | number), dummy: any | null): boolean;

export function signal_add_emission_hook(signal_id: number, detail: GLib.Quark, hook_func: SignalEmissionHook, data_destroy: GLib.DestroyNotify): number;

export function signal_chain_from_overridden(instance_and_params: (Value | string | boolean | number)[], return_value: (Value | string | boolean | number)): void;

export function signal_connect_closure(instance: Object, detailed_signal: string, closure: Closure, after: boolean): number;

export function signal_connect_closure_by_id(instance: Object, signal_id: number, detail: GLib.Quark, closure: Closure, after: boolean): number;

export function signal_emitv(instance_and_params: (Value | string | boolean | number)[], signal_id: number, detail: GLib.Quark, return_value: (Value | string | boolean | number) | null): Value | null;

export function signal_get_invocation_hint(instance: Object): SignalInvocationHint;

export function signal_handler_block(instance: Object, handler_id: number): void;

export function signal_handler_disconnect(instance: Object, handler_id: number): void;

export function signal_handler_find(...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;

export function signal_handler_find(instance: Object, match: SignalMatch): number;

export function _real_signal_handler_find(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;

export function signal_handler_find(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;

export function signal_handler_is_connected(instance: Object, handler_id: number): boolean;

export function signal_handler_unblock(instance: Object, handler_id: number): void;

export function signal_handlers_block_matched(...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;

export function signal_handlers_block_matched(instance: Object, match: SignalMatch): number;

export function _real_signal_handlers_block_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;

export function signal_handlers_block_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;

export function signal_handlers_destroy(instance: Object): void;

export function signal_handlers_disconnect_matched(...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;

export function signal_handlers_disconnect_matched(instance: Object, match: SignalMatch): number;

export function signal_handlers_disconnect_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;

export function _real_signal_handlers_disconnect_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;

export function signal_handlers_unblock_matched(...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;

export function signal_handlers_unblock_matched(instance: Object, match: SignalMatch): number;

export function signal_handlers_unblock_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;

export function _real_signal_handlers_unblock_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;

export function signal_has_handler_pending(instance: Object, signal_id: number, detail: GLib.Quark, may_be_blocked: boolean): boolean;

export function signal_list_ids(itype: GType): number[];

export function signal_lookup(name: string, itype: GType): number;

export function signal_name(signal_id: number): string;

export function signal_override_class_closure(signal_id: number, instance_type: GType, class_closure: Closure): void;

export function signal_parse_name(detailed_signal: string, itype: GType, force_detail_quark: boolean): [boolean, number, GLib.Quark];

export function signal_query(signal_id: number): SignalQuery;

export function signal_remove_emission_hook(signal_id: number, hook_id: number): void;

export function signal_set_va_marshaller(signal_id: number, instance_type: GType, va_marshaller: SignalCVaMarshaller): void;

export function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void;

export function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void;

export function signal_type_cclosure_new(itype: GType, struct_offset: number): Closure;

export function source_set_closure(source: GLib.Source, closure: Closure): void;

export function source_set_dummy_callback(source: GLib.Source): void;

export function strdup_value_contents(value: (Value | string | boolean | number)): string;

export function type_add_class_private(class_type: GType, private_size: number): void;

export function type_add_instance_private(class_type: GType, private_size: number): number;

export function type_add_interface_dynamic(instance_type: GType, interface_type: GType, plugin: TypePlugin): void;

export function type_add_interface_static(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;

export function type_check_class_is_a(g_class: TypeClass, is_a_type: GType): boolean;

export function type_check_instance(instance: TypeInstance): boolean;

export function type_check_instance_is_a(instance: TypeInstance, iface_type: GType): boolean;

export function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: GType): boolean;

export function type_check_is_value_type(type: GType): boolean;

export function type_check_value(value: (Value | string | boolean | number)): boolean;

export function type_check_value_holds(value: (Value | string | boolean | number), type: GType): boolean;

export function type_children(type: GType): GType[];

export function type_class_adjust_private_offset(g_class: any | null, private_size_or_offset: number): void;

export function type_class_peek(type: GType): TypeClass;

export function type_class_peek_static(type: GType): TypeClass;

export function type_class_ref(type: GType): TypeClass;

export function type_default_interface_peek(g_type: GType): TypeInterface;

export function type_default_interface_ref(g_type: GType): TypeInterface;

export function type_default_interface_unref(g_iface: TypeInterface): void;

export function type_depth(type: GType): number;

export function type_ensure(type: GType): void;

export function type_free_instance(instance: TypeInstance): void;

export function type_from_name(name: string): GType;

export function type_fundamental(type_id: GType): GType;

export function type_fundamental_next(): GType;

export function type_get_instance_count(type: GType): number;

export function type_get_plugin(type: GType): TypePlugin;

export function type_get_qdata(type: GType, quark: GLib.Quark): any | null;

export function type_get_type_registration_serial(): number;

export function type_init(): void;

export function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void;

export function type_interface_add_prerequisite(interface_type: GType, prerequisite_type: GType): void;

export function type_interface_get_plugin(instance_type: GType, interface_type: GType): TypePlugin;

export function type_interface_peek(instance_class: TypeClass, iface_type: GType): TypeInterface;

export function type_interface_prerequisites(interface_type: GType): GType[];

export function type_interfaces(type: GType): GType[];

export function type_is_a(type: GType, is_a_type: GType): boolean;

export function type_name(type: GType): string;

export function type_name_from_class(g_class: TypeClass): string;

export function type_name_from_instance(instance: TypeInstance): string;

export function type_next_base(leaf_type: GType, root_type: GType): GType;

export function type_parent(type: GType): GType;

export function type_qname(type: GType): GLib.Quark;

export function type_query(type: GType): TypeQuery;

export function type_register_dynamic(parent_type: GType, type_name: string, plugin: TypePlugin, flags: TypeFlags): GType;

export function type_register_fundamental(type_id: GType, type_name: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): GType;

export function type_register_static(parent_type: GType, type_name: string, info: TypeInfo, flags: TypeFlags): GType;

export function type_set_qdata(type: GType, quark: GLib.Quark, data: any | null): void;

export function type_test_flags(type: GType, flags: number): boolean;

export function value_type_compatible(src_type: GType, dest_type: GType): boolean;

export function value_type_transformable(src_type: GType, dest_type: GType): boolean;

export type BaseFinalizeFunc = (g_class: TypeClass) => void;

export type BaseInitFunc = (g_class: TypeClass) => void;

export type BindingTransformFunc = (binding: Binding, from_value: (Value | string | boolean | number), to_value: (Value | string | boolean | number)) => boolean;

export type BoxedCopyFunc = (boxed: any) => any;

export type BoxedFreeFunc = (boxed: any) => void;

export type Callback = () => void;

export type ClassFinalizeFunc = (g_class: TypeClass, class_data: any | null) => void;

export type ClassInitFunc = (g_class: TypeClass, class_data: any | null) => void;

export type ClosureMarshal = (closure: Closure, return_value: (Value | string | boolean | number) | null, param_values: (Value | string | boolean | number)[], invocation_hint: any | null, marshal_data: any | null) => void;

export type ClosureNotify = (data: any | null, closure: Closure) => void;

export type InstanceInitFunc = (instance: TypeInstance, g_class: TypeClass) => void;

export type InterfaceFinalizeFunc = (g_iface: TypeInterface, iface_data: any | null) => void;

export type InterfaceInitFunc = (g_iface: TypeInterface, iface_data: any | null) => void;

export type ObjectFinalizeFunc = (object: Object) => void;

export type ObjectGetPropertyFunc = (object: Object, property_id: number, value: (Value | string | boolean | number), pspec: ParamSpec) => void;

export type ObjectSetPropertyFunc = (object: Object, property_id: number, value: (Value | string | boolean | number), pspec: ParamSpec) => void;

export type SignalAccumulator = (ihint: SignalInvocationHint, return_accu: (Value | string | boolean | number), handler_return: (Value | string | boolean | number), data: any | null) => boolean;

export type SignalEmissionHook = (ihint: SignalInvocationHint, param_values: (Value | string | boolean | number)[], data: any | null) => boolean;

export type ToggleNotify = (data: any | null, object: Object, is_last_ref: boolean) => void;

export type TypeClassCacheFunc = (cache_data: any | null, g_class: TypeClass) => boolean;

export type TypeInterfaceCheckFunc = (check_data: any | null, g_iface: TypeInterface) => void;

export type TypePluginCompleteInterfaceInfo = (plugin: TypePlugin, instance_type: GType, interface_type: GType, info: InterfaceInfo) => void;

export type TypePluginCompleteTypeInfo = (plugin: TypePlugin, g_type: GType, info: TypeInfo, value_table: TypeValueTable) => void;

export type TypePluginUnuse = (plugin: TypePlugin) => void;

export type TypePluginUse = (plugin: TypePlugin) => void;

export type ValueTransform = (src_value: (Value | string | boolean | number), dest_value: (Value | string | boolean | number)) => void;

export type WeakNotify = (data: any | null, where_the_object_was: Object) => void;
export enum BindingFlags {
    DEFAULT = 0,
    BIDIRECTIONAL = 1,
    SYNC_CREATE = 2,
    INVERT_BOOLEAN = 4,
}
export enum ConnectFlags {
    AFTER = 1,
    SWAPPED = 2,
}
export enum ParamFlags {
    READABLE = 1,
    WRITABLE = 2,
    READWRITE = 3,
    CONSTRUCT = 4,
    CONSTRUCT_ONLY = 8,
    LAX_VALIDATION = 16,
    STATIC_NAME = 32,
    PRIVATE = 32,
    STATIC_NICK = 64,
    STATIC_BLURB = 128,
    EXPLICIT_NOTIFY = 1073741824,
    DEPRECATED = 2147483648,
}
export enum SignalFlags {
    RUN_FIRST = 1,
    RUN_LAST = 2,
    RUN_CLEANUP = 4,
    NO_RECURSE = 8,
    DETAILED = 16,
    ACTION = 32,
    NO_HOOKS = 64,
    MUST_COLLECT = 128,
    DEPRECATED = 256,
}
export enum SignalMatchType {
    ID = 1,
    DETAIL = 2,
    CLOSURE = 4,
    FUNC = 8,
    DATA = 16,
    UNBLOCKED = 32,
}
export enum TypeDebugFlags {
    NONE = 0,
    OBJECTS = 1,
    SIGNALS = 2,
    INSTANCE_COUNT = 4,
    MASK = 7,
}
export enum TypeFlags {
    ABSTRACT = 16,
    VALUE_ABSTRACT = 32,
}
export enum TypeFundamentalFlags {
    CLASSED = 1,
    INSTANTIATABLE = 2,
    DERIVABLE = 4,
    DEEP_DERIVABLE = 8,
}
export module Binding {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        flags: BindingFlags;
        source: Object;
        source_property: string;
        target: Object;
        target_property: string;
    }
}
export class Binding extends Object {
    constructor(properties?: Partial<Binding.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Binding.ConstructorProperties>, ...args: any[]): void;
    // Properties
    flags: BindingFlags;
    source: Object;
    source_property: string;
    target: Object;
    target_property: string;
    // Members
    get_flags(): BindingFlags;
    get_source<T = Object>(): T;
    get_source_property(): string;
    get_target<T = Object>(): T;
    get_target_property(): string;
    unbind(): void;
}
export module InitiallyUnowned {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class InitiallyUnowned extends Object {
    constructor(properties?: Partial<InitiallyUnowned.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InitiallyUnowned.ConstructorProperties>, ...args: any[]): void;
    // Fields
    g_type_instance: TypeInstance;
}
export module Object {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class Object {
    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;
    // Fields
    g_type_instance: TypeInstance;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'notify', callback: (_source: this, pspec: ParamSpec) => void): number;
    connect_after(signal: 'notify', callback: (_source: this, pspec: ParamSpec) => void): number;
    emit(signal: 'notify', pspec: ParamSpec): void;
    // Constructors
    static newv(object_type: GType, parameters: Parameter[]): Object;
    // Members
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding;
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc | null, transform_from: BindingTransformFunc | null, notify: GLib.DestroyNotify | null): Binding;
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): any | null;
    get_property(property_name: string, value: (Value | string | boolean | number)): void;
    get_qdata(quark: GLib.Quark): any | null;
    getv(names: string[], values: (Value | string | boolean | number)[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: ParamSpec): void;
    ref<T = Object>(): T;
    ref_sink<T = Object>(): T;
    run_dispose(): void;
    set_data(key: string, data: any | null): void;
    set_property(property_name: string, value: (Value | string | boolean | number)): void;
    steal_data(key: string): any | null;
    steal_qdata(quark: GLib.Quark): any | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: Closure): void;
    vfunc_constructed(): void;
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void;
    vfunc_dispose(): void;
    vfunc_finalize(): void;
    vfunc_get_property(property_id: number, value: (Value | string | boolean | number), pspec: ParamSpec): void;
    vfunc_notify(pspec: ParamSpec): void;
    vfunc_set_property(property_id: number, value: (Value | string | boolean | number), pspec: ParamSpec): void;
    static compat_control(what: number, data: any | null): number;
    static interface_find_property(g_iface: TypeInterface, property_name: string): ParamSpec;
    static interface_install_property(g_iface: TypeInterface, pspec: ParamSpec): void;
    static interface_list_properties(g_iface: TypeInterface): ParamSpec[];
    static $gtype: GType;
    static _classInit: (klass: any) => any;
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    disconnect(id: number): void;
    set<T = any>(params: T): void
    block_signal_handler(id: number): number;
    unblock_signal_handler(id: number): number;
    stop_emission_by_name(detailedName: string): number;
}
export module ParamSpec {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class ParamSpec {
    constructor(properties?: Partial<ParamSpec.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpec.ConstructorProperties>, ...args: any[]): void;
    // Fields
    g_type_instance: TypeInstance;
    name: string;
    flags: ParamFlags;
    value_type: GType;
    owner_type: GType;
    // Members
    get_blurb(): string;
    get_default_value(): Value;
    get_name(): string;
    get_name_quark(): GLib.Quark;
    get_nick(): string;
    get_qdata(quark: GLib.Quark): any | null;
    get_redirect_target(): ParamSpec;
    set_qdata(quark: GLib.Quark, data: any | null): void;
    sink(): void;
    steal_qdata(quark: GLib.Quark): any | null;
    vfunc_finalize(): void;
    vfunc_value_set_default(value: (Value | string | boolean | number)): void;
    vfunc_value_validate(value: (Value | string | boolean | number)): boolean;
    vfunc_values_cmp(value1: (Value | string | boolean | number), value2: (Value | string | boolean | number)): number;
    static char(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;
    static uchar(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any):ParamSpec;
    static int(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;
    static uint(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;
    static long(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;
    static ulong(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;
    static int64(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;
    static uint64(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;
    static float(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;
    static boolean(name: any, nick: any, blurb: any, flags: any, defaultValue: any): ParamSpec;
    static flags(name: any, nick: any, blurb: any, flags: any, flagsType: any, defaultValue: any): ParamSpec;
    static enum(name: any, nick: any, blurb: any, flags: any, enumType: any, defaultValue: any): ParamSpec;
    static double(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;
    static string(name: any, nick: any, blurb: any, flags: any, defaultValue: any): ParamSpec;
    static boxed(name: any, nick: any, blurb: any, flags: any, boxedType: any): ParamSpec;
    static object(name: any, nick: any, blurb: any, flags: any, objectType: any): ParamSpec;
    static param(name: any, nick: any, blurb: any, flags: any, paramType: any): ParamSpec;
    static override: any;
}
export module ParamSpecBoolean {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecBoolean extends ParamSpec {
    constructor(properties?: Partial<ParamSpecBoolean.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecBoolean.ConstructorProperties>, ...args: any[]): void;
    // Fields
    default_value: boolean;
}
export module ParamSpecBoxed {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecBoxed extends ParamSpec {
    constructor(properties?: Partial<ParamSpecBoxed.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecBoxed.ConstructorProperties>, ...args: any[]): void;
}
export module ParamSpecChar {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecChar extends ParamSpec {
    constructor(properties?: Partial<ParamSpecChar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecChar.ConstructorProperties>, ...args: any[]): void;
    // Fields
    minimum: number;
    maximum: number;
    default_value: number;
}
export module ParamSpecDouble {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecDouble extends ParamSpec {
    constructor(properties?: Partial<ParamSpecDouble.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecDouble.ConstructorProperties>, ...args: any[]): void;
    // Fields
    minimum: number;
    maximum: number;
    default_value: number;
    epsilon: number;
}
export module ParamSpecEnum {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecEnum extends ParamSpec {
    constructor(properties?: Partial<ParamSpecEnum.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecEnum.ConstructorProperties>, ...args: any[]): void;
    // Fields
    enum_class: EnumClass;
    default_value: number;
}
export module ParamSpecFlags {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecFlags extends ParamSpec {
    constructor(properties?: Partial<ParamSpecFlags.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecFlags.ConstructorProperties>, ...args: any[]): void;
    // Fields
    flags_class: FlagsClass;
    default_value: number;
}
export module ParamSpecFloat {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecFloat extends ParamSpec {
    constructor(properties?: Partial<ParamSpecFloat.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecFloat.ConstructorProperties>, ...args: any[]): void;
    // Fields
    minimum: number;
    maximum: number;
    default_value: number;
    epsilon: number;
}
export module ParamSpecGType {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecGType extends ParamSpec {
    constructor(properties?: Partial<ParamSpecGType.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecGType.ConstructorProperties>, ...args: any[]): void;
    // Fields
    is_a_type: GType;
}
export module ParamSpecInt {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecInt extends ParamSpec {
    constructor(properties?: Partial<ParamSpecInt.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecInt.ConstructorProperties>, ...args: any[]): void;
    // Fields
    minimum: number;
    maximum: number;
    default_value: number;
}
export module ParamSpecInt64 {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecInt64 extends ParamSpec {
    constructor(properties?: Partial<ParamSpecInt64.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecInt64.ConstructorProperties>, ...args: any[]): void;
    // Fields
    minimum: number;
    maximum: number;
    default_value: number;
}
export module ParamSpecLong {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecLong extends ParamSpec {
    constructor(properties?: Partial<ParamSpecLong.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecLong.ConstructorProperties>, ...args: any[]): void;
    // Fields
    minimum: number;
    maximum: number;
    default_value: number;
}
export module ParamSpecObject {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecObject extends ParamSpec {
    constructor(properties?: Partial<ParamSpecObject.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecObject.ConstructorProperties>, ...args: any[]): void;
}
export module ParamSpecOverride {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecOverride extends ParamSpec {
    constructor(properties?: Partial<ParamSpecOverride.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecOverride.ConstructorProperties>, ...args: any[]): void;
}
export module ParamSpecParam {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecParam extends ParamSpec {
    constructor(properties?: Partial<ParamSpecParam.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecParam.ConstructorProperties>, ...args: any[]): void;
}
export module ParamSpecPointer {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecPointer extends ParamSpec {
    constructor(properties?: Partial<ParamSpecPointer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecPointer.ConstructorProperties>, ...args: any[]): void;
}
export module ParamSpecString {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecString extends ParamSpec {
    constructor(properties?: Partial<ParamSpecString.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecString.ConstructorProperties>, ...args: any[]): void;
    // Fields
    default_value: string;
    cset_first: string;
    cset_nth: string;
    substitutor: number;
    null_fold_if_empty: number;
    ensure_non_null: number;
}
export module ParamSpecUChar {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecUChar extends ParamSpec {
    constructor(properties?: Partial<ParamSpecUChar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecUChar.ConstructorProperties>, ...args: any[]): void;
    // Fields
    minimum: number;
    maximum: number;
    default_value: number;
}
export module ParamSpecUInt {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecUInt extends ParamSpec {
    constructor(properties?: Partial<ParamSpecUInt.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecUInt.ConstructorProperties>, ...args: any[]): void;
    // Fields
    minimum: number;
    maximum: number;
    default_value: number;
}
export module ParamSpecUInt64 {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecUInt64 extends ParamSpec {
    constructor(properties?: Partial<ParamSpecUInt64.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecUInt64.ConstructorProperties>, ...args: any[]): void;
    // Fields
    minimum: number;
    maximum: number;
    default_value: number;
}
export module ParamSpecULong {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecULong extends ParamSpec {
    constructor(properties?: Partial<ParamSpecULong.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecULong.ConstructorProperties>, ...args: any[]): void;
    // Fields
    minimum: number;
    maximum: number;
    default_value: number;
}
export module ParamSpecUnichar {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecUnichar extends ParamSpec {
    constructor(properties?: Partial<ParamSpecUnichar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecUnichar.ConstructorProperties>, ...args: any[]): void;
    // Fields
    default_value: number;
}
export module ParamSpecValueArray {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecValueArray extends ParamSpec {
    constructor(properties?: Partial<ParamSpecValueArray.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecValueArray.ConstructorProperties>, ...args: any[]): void;
    // Fields
    element_spec: ParamSpec;
    fixed_n_elements: number;
}
export module ParamSpecVariant {
    export interface ConstructorProperties extends ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecVariant extends ParamSpec {
    constructor(properties?: Partial<ParamSpecVariant.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecVariant.ConstructorProperties>, ...args: any[]): void;
    // Fields
    type: GLib.VariantType;
    default_value: GLib.Variant;
}
export module TypeModule {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class TypeModule extends Object implements TypePlugin {
    constructor(properties?: Partial<TypeModule.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TypeModule.ConstructorProperties>, ...args: any[]): void;
    // Fields
    use_count: number;
    type_infos: GLib.SList;
    interface_infos: GLib.SList;
    name: string;
    // Members
    add_interface(instance_type: GType, interface_type: GType, interface_info: InterfaceInfo): void;
    register_enum(name: string, const_static_values: EnumValue): GType;
    register_flags(name: string, const_static_values: FlagsValue): GType;
    register_type(parent_type: GType, type_name: string, type_info: TypeInfo, flags: TypeFlags): GType;
    set_name(name: string): void;
    unuse(): void;
    use(): boolean;
    use(...args: never[]): never;
    vfunc_load(): boolean;
    vfunc_unload(): void;
    // Implemented Members
    complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
    complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
}
export class CClosure {
    constructor(copy: CClosure);
    // Fields
    closure: Closure;
    callback: any;
    // Members
    static marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_BOOLEAN__FLAGS(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__BOOLEAN(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__BOXED(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__CHAR(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__DOUBLE(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__ENUM(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__FLAGS(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__FLOAT(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__INT(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__LONG(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__OBJECT(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__PARAM(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__POINTER(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__STRING(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__UCHAR(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__UINT(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__UINT_POINTER(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__ULONG(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__VARIANT(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_VOID__VOID(closure: Closure, return_value: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
    static marshal_generic(closure: Closure, return_gvalue: (Value | string | boolean | number), n_param_values: number, param_values: (Value | string | boolean | number), invocation_hint: any | null, marshal_data: any | null): void;
}

export type Closure<R = any, P = any> = (...args: P[]) => R;
export class ClosureNotifyData {
    constructor(copy: ClosureNotifyData);
    // Fields
    data: any;
    notify: ClosureNotify;
}
export class EnumClass {
    constructor(properties?: {
        g_type_class?: TypeClass;
        minimum?: number;
        maximum?: number;
        n_values?: number;
        values?: EnumValue;
    });
    constructor(copy: EnumClass);
    // Fields
    g_type_class: TypeClass;
    minimum: number;
    maximum: number;
    n_values: number;
    values: EnumValue;
}
export class EnumValue {
    constructor(properties?: {
        value?: number;
        value_name?: string;
        value_nick?: string;
    });
    constructor(copy: EnumValue);
    // Fields
    value: number;
    value_name: string;
    value_nick: string;
}
export class FlagsClass {
    constructor(properties?: {
        g_type_class?: TypeClass;
        mask?: number;
        n_values?: number;
        values?: FlagsValue;
    });
    constructor(copy: FlagsClass);
    // Fields
    g_type_class: TypeClass;
    mask: number;
    n_values: number;
    values: FlagsValue;
}
export class FlagsValue {
    constructor(properties?: {
        value?: number;
        value_name?: string;
        value_nick?: string;
    });
    constructor(copy: FlagsValue);
    // Fields
    value: number;
    value_name: string;
    value_nick: string;
}
export class InterfaceInfo {
    constructor(copy: InterfaceInfo);
    // Fields
    interface_init: InterfaceInitFunc;
    interface_finalize: InterfaceFinalizeFunc;
    interface_data: any;
}
export class ObjectConstructParam {
    constructor(copy: ObjectConstructParam);
    // Fields
    pspec: ParamSpec;
    value: Value;
}
export class ParamSpecPool {
    constructor(copy: ParamSpecPool);
    // Members
    insert(pspec: ParamSpec, owner_type: GType): void;
    list(owner_type: GType): ParamSpec[];
    list_owned(owner_type: GType): GLib.List;
    lookup(param_name: string, owner_type: GType, walk_ancestors: boolean): ParamSpec;
    remove(pspec: ParamSpec): void;
    static new(type_prefixing: boolean): ParamSpecPool;
}
export class ParamSpecTypeInfo {
    constructor(properties?: {
        instance_size?: number;
        n_preallocs?: number;
        value_type?: GType;
    });
    constructor(copy: ParamSpecTypeInfo);
    // Fields
    instance_size: number;
    n_preallocs: number;
    value_type: GType;
}
export class Parameter {
    constructor(properties?: {
        name?: string;
        value?: Value;
    });
    constructor(copy: Parameter);
    // Fields
    name: string;
    value: Value;
}
export class SignalInvocationHint {
    constructor(copy: SignalInvocationHint);
    // Fields
    signal_id: number;
    detail: GLib.Quark;
    run_type: SignalFlags;
}
export class SignalQuery {
    constructor(copy: SignalQuery);
    // Fields
    signal_id: number;
    signal_name: string;
    itype: GType;
    signal_flags: SignalFlags;
    return_type: GType;
    n_params: number;
    param_types: GType[];
}
export class TypeClass {
    constructor(properties?: {
        g_type?: GType;
    });
    constructor(copy: TypeClass);
    // Fields
    g_type: GType;
    // Members
    add_private(private_size: number): void;
    get_private(private_type: GType): any | null;
    peek_parent(): TypeClass;
    unref(): void;
    static adjust_private_offset(g_class: any | null, private_size_or_offset: number): void;
    static peek(type: GType): TypeClass;
    static peek_static(type: GType): TypeClass;
    static ref(type: GType): TypeClass;
}
export class TypeFundamentalInfo {
    constructor(copy: TypeFundamentalInfo);
    // Fields
    type_flags: TypeFundamentalFlags;
}
export class TypeInfo {
    constructor(copy: TypeInfo);
    // Fields
    class_size: number;
    base_init: BaseInitFunc;
    base_finalize: BaseFinalizeFunc;
    class_init: ClassInitFunc;
    class_finalize: ClassFinalizeFunc;
    class_data: any;
    instance_size: number;
    n_preallocs: number;
    instance_init: InstanceInitFunc;
    value_table: TypeValueTable;
}
export class TypeInstance {
    constructor(properties?: {
        g_class?: TypeClass;
    });
    constructor(copy: TypeInstance);
    // Fields
    g_class: TypeClass;
    // Members
    get_private(private_type: GType): any | null;
}
export class TypeInterface {
    constructor(properties?: {
        g_type?: GType;
        g_instance_type?: GType;
    });
    constructor(copy: TypeInterface);
    // Fields
    g_type: GType;
    g_instance_type: GType;
    // Members
    peek_parent(): TypeInterface;
    static add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
    static get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
    static peek(instance_class: TypeClass, iface_type: GType): TypeInterface;
    static prerequisites(interface_type: GType): GType[];
}
export class TypePluginClass {
    constructor(copy: TypePluginClass);
    // Fields
    base_iface: TypeInterface;
    use_plugin: TypePluginUse;
    unuse_plugin: TypePluginUnuse;
    complete_type_info: TypePluginCompleteTypeInfo;
    complete_interface_info: TypePluginCompleteInterfaceInfo;
}
export class TypeQuery {
    constructor(properties?: {
        type?: GType;
        type_name?: string;
        class_size?: number;
        instance_size?: number;
    });
    constructor(copy: TypeQuery);
    // Fields
    type: GType;
    type_name: string;
    class_size: number;
    instance_size: number;
}
export class TypeValueTable {
    constructor(properties?: {
        collect_format?: string;
        lcopy_format?: string;
    });
    constructor(copy: TypeValueTable);
    // Fields
    collect_format: string;
    lcopy_format: string;
}
export class Value {
    constructor(properties?: {
        g_type?: GType;
        data?: _Value__data__union[];
    });
    constructor(copy: Value);
    // Fields
    g_type: GType;
    data: _Value__data__union[];
    // Members
    copy(dest_value: (Value | string | boolean | number)): void;
    dup_object<T = Object>(): T;
    dup_string(): string;
    dup_variant(): GLib.Variant | null;
    fits_pointer(): boolean;
    get_boolean(): boolean;
    get_boxed(): any | null;
    get_char(): number;
    get_double(): number;
    get_enum(): number;
    get_flags(): number;
    get_float(): number;
    get_gtype(): GType;
    get_int(): number;
    get_int64(): number;
    get_long(): number;
    get_object<T = Object>(): T;
    get_param(): ParamSpec;
    get_pointer(): any | null;
    get_schar(): number;
    get_string(): string;
    get_uchar(): number;
    get_uint(): number;
    get_uint64(): number;
    get_ulong(): number;
    get_variant(): GLib.Variant | null;
    init(g_type: GType): Value;
    init_from_instance(instance: TypeInstance): void;
    peek_pointer(): any | null;
    reset(): Value;
    set_boolean(v_boolean: boolean): void;
    set_boxed(v_boxed: any | null): void;
    set_boxed_take_ownership(v_boxed: any | null): void;
    set_char(v_char: number): void;
    set_double(v_double: number): void;
    set_enum(v_enum: number): void;
    set_flags(v_flags: number): void;
    set_float(v_float: number): void;
    set_gtype(v_gtype: GType): void;
    set_instance(instance: any | null): void;
    set_int(v_int: number): void;
    set_int64(v_int64: number): void;
    set_long(v_long: number): void;
    set_object(v_object: Object | null): void;
    set_param(param: ParamSpec | null): void;
    set_pointer(v_pointer: any | null): void;
    set_schar(v_char: number): void;
    set_static_boxed(v_boxed: any | null): void;
    set_static_string(v_string: string | null): void;
    set_string(v_string: string | null): void;
    set_string_take_ownership(v_string: string | null): void;
    set_uchar(v_uchar: number): void;
    set_uint(v_uint: number): void;
    set_uint64(v_uint64: number): void;
    set_ulong(v_ulong: number): void;
    set_variant(variant: GLib.Variant | null): void;
    take_boxed(v_boxed: any | null): void;
    take_string(v_string: string | null): void;
    take_variant(variant: GLib.Variant | null): void;
    transform(dest_value: (Value | string | boolean | number)): boolean;
    unset(): void;
    static type_compatible(src_type: GType, dest_type: GType): boolean;
    static type_transformable(src_type: GType, dest_type: GType): boolean;
}
export class ValueArray {
    constructor(n_prealloced: number);
    constructor(copy: ValueArray);
    // Fields
    n_values: number;
    values: Value;
    n_prealloced: number;
    // Constructors
    static ["new"](n_prealloced: number): ValueArray;
    // Members
    append(value: (Value | string | boolean | number) | null): ValueArray;
    copy(): ValueArray;
    get_nth(index_: number): Value;
    insert(index_: number, value: (Value | string | boolean | number) | null): ValueArray;
    prepend(value: (Value | string | boolean | number) | null): ValueArray;
    remove(index_: number): ValueArray;
    sort(compare_func: GLib.CompareFunc): ValueArray;
    sort(compare_func: GLib.CompareDataFunc): ValueArray;
}
export class WeakRef {
    constructor(copy: WeakRef);
}
export class TypeCValue {
    constructor(copy: TypeCValue);
}
export class _Value__data__union {
    constructor(properties?: {
        v_int?: number;
        v_uint?: number;
        v_long?: number;
        v_ulong?: number;
        v_int64?: number;
        v_uint64?: number;
        v_float?: number;
        v_double?: number;
        v_pointer?: any;
    });
    constructor(copy: _Value__data__union);
    // Fields
    v_int: number;
    v_uint: number;
    v_long: number;
    v_ulong: number;
    v_int64: number;
    v_uint64: number;
    v_float: number;
    v_double: number;
    v_pointer: any;
}
export interface TypePluginNamespace {
    $gtype: GType;
}
export interface TypePlugin extends Object {
    // Members
    complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
    complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
    unuse(): void;
    use(): void;
}

export const TypePlugin: TypePluginNamespace;

export type SignalCMarshaller = ClosureMarshal;

export type SignalCVaMarshaller = unknown;

export type Type = number;

export function signal_handlers_block_by_func(instance: Object, func: Function): number;

export function signal_handlers_unblock_by_func  (instance: Object, func: Function): number;

export function signal_handlers_disconnect_by_func(instance: Object, func: Function): number;

export class Interface {
    static _classInit: (klass: any) => any;
    __name__: string;
    _construct: (params: any, ...otherArgs: any[]) => any;
    _init: (params: any) => void;
    $gtype?: GType;
}

export interface SignalMatch {
    signalId: string;
    detail: string;
    func: Function;
}

export function signal_connect (object: Object, name: string, handler: Function): number;
export function signal_connect_after(object: Object, name: string, handler: Function): number;
export function signal_emit_by_name(object: Object, name: string, ...args: any[]): number;

export let __gtkCssName__: symbol;
export let __gtkTemplate__: symbol;
export let __gtkChildren__: symbol;
export let __gtkInternalChildren__: symbol;

// Expose GObject static properties for ES6 classes

export let GTypeName: symbol;
export let requires: symbol;
export let interfaces: symbol;
export let properties: symbol;
export let signals: symbol;

export enum AccumulatorType {
  NONE,
  FIRST_WINS,
  TRUE_HANDLED
}

export class NotImplementedError extends Error {
}

export let gtypeNameBasedOnJSPath: boolean;

export let TYPE_BOOLEAN: GType;
export let Boolean: BooleanConstructor;

export let TYPE_ENUM: GType;
export let TYPE_FLAGS: GType;

export let TYPE_DOUBLE: object;
export let Double: NumberConstructor;

export let TYPE_STRING: GType;
export let String: StringConstructor;

declare global {
    interface BooleanConstructor {
        $gtype: GType;
    }

    interface NumberConstructor {
        $gtype: GType;
    }

    interface StringConstructor {
        $gtype: GType;
    }
}

export let TYPE_NONE: GType;
export let TYPE_POINTER: GType;
export let TYPE_BOXED: GType;
export let TYPE_PARAM: GType;
export let TYPE_INTERFACE: GType;
export let TYPE_OBJECT: GType;
export let TYPE_VARIANT: GType;
export let TYPE_INT: GType;

export function registerClass<
  K,
  P extends { _init(...args: K[]): void },
  T extends { prototype: P }
>(
  klass: T
): {
  $gtype: GType;
  new (...args: Parameters<T["prototype"]["_init"]>): T["prototype"];
  prototype: T["prototype"];
};

export type Property<K extends ParamSpec> = K extends ParamSpecBoolean
  ? boolean
  : K extends ParamSpecDouble | ParamSpecInt | ParamSpecUInt | ParamSpecFloat | ParamSpecLong
  ? number
  : K extends ParamSpecInt64 | ParamSpecUInt64 | ParamSpecULong
  ? number
  : K extends ParamSpecFlags | ParamSpecEnum
  ? number
  : K extends ParamSpecString | ParamSpecUnichar
  ? string
  : K extends ParamSpecValueArray
  ? any[]
  : K extends ParamSpecObject
  ? any
  : K extends ParamSpecVariant
  ? GLib.Variant
  : any;

export type Properties<
  Properties extends { [key: string]: ParamSpec }
> = {
  [key in keyof Properties]: Property<Properties["key"]>;
};

export function registerClass<
  K,
  P extends { _init(...args: K[]): void },
  T extends { prototype: P },
  Props extends { [key: string]: ParamSpec }
>(
  options: {
    GTypeName?: string;
    Properties?: Props;
    Signals?: { [key: string]: {} };
    Implements?: any[];
    CssName?: string;
    Template?: string;
    Children?: string[];
    InternalChildren?: string[];
  },
  klass: T
): {
  $gtype: GType;
  new (...args: Parameters<T["prototype"]["_init"]>): T["prototype"] & Properties<Props>;
  prototype: T["prototype"] & Properties<Props>;
};
