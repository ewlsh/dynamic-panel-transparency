

/**
 * Gcr
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gck from "gck";
type GType = object;

export const ICON_CERTIFICATE: string;

export const ICON_GNUPG: string;

export const ICON_HOME_DIRECTORY: string;

export const ICON_KEY: string;

export const ICON_KEY_PAIR: string;

export const ICON_PASSWORD: string;

export const ICON_SMART_CARD: string;

export const MAJOR_VERSION: number;

export const MICRO_VERSION: number;

export const MINOR_VERSION: number;

export const PURPOSE_CLIENT_AUTH: string;

export const PURPOSE_CODE_SIGNING: string;

export const PURPOSE_EMAIL: string;

export const PURPOSE_SERVER_AUTH: string;

export const SECRET_EXCHANGE_PROTOCOL_1: string;

export const UNLOCK_OPTION_ALWAYS: string;

export const UNLOCK_OPTION_IDLE: string;

export const UNLOCK_OPTION_SESSION: string;

export const UNLOCK_OPTION_TIMEOUT: string;

export function certificate_compare(first: Comparable | null, other: Comparable | null): number;

export function data_error_get_domain(): GLib.Quark;

export function fingerprint_from_attributes(attrs: Gck.Attributes, checksum_type: GLib.ChecksumType): Uint8Array | null;

export function fingerprint_from_subject_public_key_info(key_info: (Uint8Array | string), checksum_type: GLib.ChecksumType): Uint8Array | null;

export function icon_for_token(token_info: Gck.TokenInfo): Gio.Icon;

export function importer_create_for_parsed(parsed: Parsed): GLib.List;

export function importer_queue_and_filter_for_parsed(importers: GLib.List, parsed: Parsed): GLib.List;

export function importer_register(importer_type: GType, attrs: Gck.Attributes): void;

export function importer_register_well_known(): void;

export function mock_prompter_disconnect(): void;

export function mock_prompter_expect_close(): void;

export function mock_prompter_expect_confirm_cancel(): void;

export function mock_prompter_expect_password_cancel(): void;

export function mock_prompter_get_delay_msec(): number;

export function mock_prompter_is_expecting(): boolean;

export function mock_prompter_is_prompting(): boolean;

export function mock_prompter_set_delay_msec(delay_msec: number): void;

export function mock_prompter_start(): string;

export function mock_prompter_stop(): void;

export function parsed_unref(parsed: any | null): void;

export function pkcs11_add_module(module: Gck.Module): void;

export function pkcs11_add_module_from_file(module_path: string, unused: any | null): boolean;

export function pkcs11_get_modules(): GLib.List;

export function pkcs11_get_trust_lookup_slots(): GLib.List;

export function pkcs11_get_trust_lookup_uris(): string[] | null;

export function pkcs11_get_trust_store_slot(): Gck.Slot | null;

export function pkcs11_get_trust_store_uri(): string | null;

export function pkcs11_initialize(cancellable: Gio.Cancellable | null): boolean;

export function pkcs11_initialize_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;

export function pkcs11_initialize_finish(result: Gio.AsyncResult): boolean;

export function pkcs11_set_modules(modules: GLib.List): void;

export function pkcs11_set_trust_lookup_uris(pkcs11_uris: string | null): void;

export function pkcs11_set_trust_store_uri(pkcs11_uri: string | null): void;

export function trust_add_pinned_certificate(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): boolean;

export function trust_add_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;

export function trust_add_pinned_certificate_finish(result: Gio.AsyncResult): boolean;

export function trust_is_certificate_anchored(certificate: Certificate, purpose: string, cancellable: Gio.Cancellable | null): boolean;

export function trust_is_certificate_anchored_async(certificate: Certificate, purpose: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;

export function trust_is_certificate_anchored_finish(result: Gio.AsyncResult): boolean;

export function trust_is_certificate_pinned(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): boolean;

export function trust_is_certificate_pinned_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;

export function trust_is_certificate_pinned_finish(result: Gio.AsyncResult): boolean;

export function trust_remove_pinned_certificate(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): boolean;

export function trust_remove_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;

export function trust_remove_pinned_certificate_finish(result: Gio.AsyncResult): boolean;

export type FilterCollectionFunc = (object: GObject.Object) => boolean;
export enum CertificateChainStatus {
    UNKNOWN = 0,
    INCOMPLETE = 1,
    DISTRUSTED = 2,
    SELFSIGNED = 3,
    PINNED = 4,
    ANCHORED = 5,
}
export enum CertificateRequestFormat {
    CERTIFICATE_REQUEST_PKCS10 = 1,
}
export enum DataError {
    FAILURE = -1,
    UNRECOGNIZED = 1,
    CANCELLED = 2,
    LOCKED = 3,
}
export enum DataFormat {
    ALL = -1,
    INVALID = 0,
    DER_PRIVATE_KEY = 100,
    DER_PRIVATE_KEY_RSA = 101,
    DER_PRIVATE_KEY_DSA = 102,
    DER_PRIVATE_KEY_EC = 103,
    DER_SUBJECT_PUBLIC_KEY = 150,
    DER_CERTIFICATE_X509 = 200,
    DER_PKCS7 = 300,
    DER_PKCS8 = 400,
    DER_PKCS8_PLAIN = 401,
    DER_PKCS8_ENCRYPTED = 402,
    DER_PKCS10 = 450,
    DER_SPKAC = 455,
    BASE64_SPKAC = 456,
    DER_PKCS12 = 500,
    OPENSSH_PUBLIC = 600,
    OPENPGP_PACKET = 700,
    OPENPGP_ARMOR = 701,
    PEM = 1000,
    PEM_PRIVATE_KEY_RSA = 1001,
    PEM_PRIVATE_KEY_DSA = 1002,
    PEM_CERTIFICATE_X509 = 1003,
    PEM_PKCS7 = 1004,
    PEM_PKCS8_PLAIN = 1005,
    PEM_PKCS8_ENCRYPTED = 1006,
    PEM_PKCS12 = 1007,
    PEM_PRIVATE_KEY = 1008,
    PEM_PKCS10 = 1009,
    PEM_PRIVATE_KEY_EC = 1010,
    PEM_PUBLIC_KEY = 1011,
}
export enum PromptReply {
    CANCEL = 0,
    CONTINUE = 1,
}
export enum SystemPromptError {
    SYSTEM_PROMPT_IN_PROGRESS = 1,
}
export enum SystemPrompterMode {
    SINGLE = 0,
    MULTIPLE = 1,
}
export enum CertificateChainFlags {
    NONE = 0,
    NO_LOOKUPS = 1,
}
export enum ColumnFlags {
    NONE = 0,
    HIDDEN = 2,
    SORTABLE = 4,
}
export module CertificateChain {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        length: number;
    }
}
export class CertificateChain extends GObject.Object {
    constructor(properties?: Partial<CertificateChain.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CertificateChain.ConstructorProperties>, ...args: any[]): void;
    // Properties
    length: number;
    // Constructors
    static ["new"](): CertificateChain;
    // Members
    add(certificate: Certificate): void;
    build(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable: Gio.Cancellable | null): boolean;
    build_async(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    build_finish(result: Gio.AsyncResult): boolean;
    get_anchor(): Certificate;
    get_certificate(index: number): Certificate;
    get_endpoint(): Certificate;
    get_length(): number;
    get_status(): CertificateChainStatus;
}
export module CertificateRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        private_key: Gck.Object;
    }
}
export class CertificateRequest extends GObject.Object {
    constructor(properties?: Partial<CertificateRequest.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CertificateRequest.ConstructorProperties>, ...args: any[]): void;
    // Properties
    private_key: Gck.Object;
    // Members
    complete(cancellable: Gio.Cancellable | null): boolean;
    complete_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    complete_finish(result: Gio.AsyncResult): boolean;
    encode(textual: boolean): Uint8Array;
    get_format(): CertificateRequestFormat;
    get_private_key(): Gck.Object;
    set_cn(cn: string): void;
    static capable(private_key: Gck.Object, cancellable: Gio.Cancellable | null): boolean;
    static capable_async(private_key: Gck.Object, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    static capable_finish(result: Gio.AsyncResult): boolean;
    static prepare(format: CertificateRequestFormat, private_key: Gck.Object): CertificateRequest;
}
export module FilterCollection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        underlying: Collection;
    }
}
export class FilterCollection extends GObject.Object implements Collection {
    constructor(properties?: Partial<FilterCollection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FilterCollection.ConstructorProperties>, ...args: any[]): void;
    // Properties
    underlying: Collection;
    // Constructors
    static new_with_callback(underlying: Collection, callback: FilterCollectionFunc | null, destroy_func: GLib.DestroyNotify): FilterCollection;
    // Members
    get_underlying(): Collection;
    refilter(): void;
    set_callback(callback: FilterCollectionFunc | null, destroy_func: GLib.DestroyNotify): void;
    // Implemented Members
    contains(object: GObject.Object): boolean;
    emit_added(object: GObject.Object): void;
    emit_removed(object: GObject.Object): void;
    get_length(): number;
    get_objects(): GLib.List;
    vfunc_added(object: GObject.Object): void;
    vfunc_contains(object: GObject.Object): boolean;
    vfunc_get_length(): number;
    vfunc_get_objects(): GLib.List;
    vfunc_removed(object: GObject.Object): void;
}
export module Parser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        parsed_attributes: Gck.Attributes;
        parsed_description: string;
        parsed_label: string;
    }
}
export class Parser extends GObject.Object {
    constructor(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]): void;
    // Properties
    parsed_attributes: Gck.Attributes;
    parsed_description: string;
    parsed_label: string;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'authenticate', callback: (_source: this, count: number) => boolean): number;
    connect_after(signal: 'authenticate', callback: (_source: this, count: number) => boolean): number;
    emit(signal: 'authenticate', count: number): void;
    connect(signal: 'parsed', callback: (_source: this) => void): number;
    connect_after(signal: 'parsed', callback: (_source: this) => void): number;
    emit(signal: 'parsed'): void;
    // Constructors
    static ["new"](): Parser;
    // Members
    add_password(password: string | null): void;
    format_disable(format: DataFormat): void;
    format_enable(format: DataFormat): void;
    format_supported(format: DataFormat): boolean;
    get_filename(): string;
    get_parsed(): Parsed;
    get_parsed_attributes(): Gck.Attributes | null;
    get_parsed_block(): Uint8Array | null;
    get_parsed_bytes(): GLib.Bytes;
    get_parsed_description(): string | null;
    get_parsed_format(): DataFormat;
    get_parsed_label(): string | null;
    parse_bytes(data: (GLib.Bytes | Uint8Array)): boolean;
    parse_data(data: (Uint8Array | string)): boolean;
    parse_stream(input: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean;
    parse_stream_async(input: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    parse_stream_finish(result: Gio.AsyncResult): boolean;
    set_filename(filename: string | null): void;
    vfunc_authenticate(count: number): boolean;
    vfunc_parsed(): void;
}
export module Pkcs11Certificate {
    export interface ConstructorProperties extends Gck.Object.ConstructorProperties {
        [key: string]: any;
        attributes: Gck.Attributes;
    }
}
export class Pkcs11Certificate extends Gck.Object implements Certificate, Comparable {
    constructor(properties?: Partial<Pkcs11Certificate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Pkcs11Certificate.ConstructorProperties>, ...args: any[]): void;
    // Properties
    attributes: Gck.Attributes;
    // Implemented Properties
    description: string;
    expiry: GLib.Date;
    icon: Gio.Icon;
    issuer: string;
    label: string;
    markup: string;
    subject: string;
    // Members
    get_attributes(): Gck.Attributes;
    static lookup_issuer(certificate: Certificate, cancellable: Gio.Cancellable | null): Certificate;
    static lookup_issuer_async(certificate: Certificate, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    static lookup_issuer_finish(result: Gio.AsyncResult): Certificate;
    // Implemented Members
    get_basic_constraints(): [boolean, boolean | null, number | null];
    get_der_data(): Uint8Array;
    get_expiry_date(): GLib.Date;
    get_fingerprint(type: GLib.ChecksumType): Uint8Array;
    get_fingerprint_hex(type: GLib.ChecksumType): string;
    get_issued_date(): GLib.Date;
    get_issuer_cn(): string;
    get_issuer_dn(): string;
    get_issuer_name(): string;
    get_issuer_part(part: string): string | null;
    get_issuer_raw(): Uint8Array;
    get_key_size(): number;
    get_markup_text(): string;
    get_serial_number(): Uint8Array;
    get_serial_number_hex(): string;
    get_subject_cn(): string;
    get_subject_dn(): string;
    get_subject_name(): string;
    get_subject_part(part: string): string | null;
    get_subject_raw(): Uint8Array;
    is_issuer(issuer: Certificate): boolean;
    mixin_emit_notify(): void;
    vfunc_get_der_data(): Uint8Array;
    compare(other: Comparable | null): number;
    compare(...args: never[]): never;
    vfunc_compare(other: Comparable | null): number;
}
export module SecretExchange {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        protocol: string;
    }
}
export class SecretExchange extends GObject.Object {
    constructor(properties?: Partial<SecretExchange.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SecretExchange.ConstructorProperties>, ...args: any[]): void;
    // Properties
    protocol: string;
    // Constructors
    static ["new"](protocol: string | null): SecretExchange;
    // Members
    begin(): string;
    get_protocol(): string;
    get_secret(): string[];
    receive(exchange: string): boolean;
    send(secret: string | null, secret_len: number): string;
    vfunc_derive_transport_key(peer: number, n_peer: number): boolean;
    vfunc_generate_exchange_key(scheme: string, public_key: number, n_public_key: number): boolean;
}
export module SimpleCertificate {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SimpleCertificate extends GObject.Object implements Certificate, Comparable {
    constructor(properties?: Partial<SimpleCertificate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleCertificate.ConstructorProperties>, ...args: any[]): void;
    // Implemented Properties
    description: string;
    expiry: GLib.Date;
    icon: Gio.Icon;
    issuer: string;
    label: string;
    markup: string;
    subject: string;
    // Constructors
    static ["new"](data: (Uint8Array | string)): SimpleCertificate;
    // Implemented Members
    get_basic_constraints(): [boolean, boolean | null, number | null];
    get_der_data(): Uint8Array;
    get_expiry_date(): GLib.Date;
    get_fingerprint(type: GLib.ChecksumType): Uint8Array;
    get_fingerprint_hex(type: GLib.ChecksumType): string;
    get_issued_date(): GLib.Date;
    get_issuer_cn(): string;
    get_issuer_dn(): string;
    get_issuer_name(): string;
    get_issuer_part(part: string): string | null;
    get_issuer_raw(): Uint8Array;
    get_key_size(): number;
    get_markup_text(): string;
    get_serial_number(): Uint8Array;
    get_serial_number_hex(): string;
    get_subject_cn(): string;
    get_subject_dn(): string;
    get_subject_name(): string;
    get_subject_part(part: string): string | null;
    get_subject_raw(): Uint8Array;
    is_issuer(issuer: Certificate): boolean;
    mixin_emit_notify(): void;
    vfunc_get_der_data(): Uint8Array;
    compare(other: Comparable | null): number;
    compare(...args: never[]): never;
    vfunc_compare(other: Comparable | null): number;
}
export module SimpleCollection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SimpleCollection extends GObject.Object implements Collection {
    constructor(properties?: Partial<SimpleCollection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleCollection.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): SimpleCollection;
    // Members
    add(object: GObject.Object): void;
    remove(object: GObject.Object): void;
    // Implemented Members
    contains(object: GObject.Object): boolean;
    emit_added(object: GObject.Object): void;
    emit_removed(object: GObject.Object): void;
    get_length(): number;
    get_objects(): GLib.List;
    vfunc_added(object: GObject.Object): void;
    vfunc_contains(object: GObject.Object): boolean;
    vfunc_get_length(): number;
    vfunc_get_objects(): GLib.List;
    vfunc_removed(object: GObject.Object): void;
}
export module SshAskpass {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        interaction: Gio.TlsInteraction;
    }
}
export class SshAskpass extends GObject.Object {
    constructor(properties?: Partial<SshAskpass.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SshAskpass.ConstructorProperties>, ...args: any[]): void;
    // Properties
    interaction: Gio.TlsInteraction;
    // Constructors
    static ["new"](interaction: Gio.TlsInteraction): SshAskpass;
    // Members
    get_interaction(): Gio.TlsInteraction;
    static child_setup(askpass: any | null): void;
}
export module SystemPrompt {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bus_name: string;
        secret_exchange: SecretExchange;
        timeout_seconds: number;
    }
}
export class SystemPrompt extends GObject.Object implements Prompt, Gio.AsyncInitable, Gio.Initable {
    constructor(properties?: Partial<SystemPrompt.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SystemPrompt.ConstructorProperties>, ...args: any[]): void;
    // Properties
    bus_name: string;
    secret_exchange: SecretExchange;
    timeout_seconds: number;
    // Implemented Properties
    caller_window: string;
    cancel_label: string;
    choice_chosen: boolean;
    choice_label: string;
    continue_label: string;
    description: string;
    message: string;
    password_new: boolean;
    password_strength: number;
    title: string;
    warning: string;
    // Members
    close(cancellable: Gio.Cancellable | null): boolean;
    close(...args: never[]): never;
    close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    close_finish(result: Gio.AsyncResult): boolean;
    get_secret_exchange(): SecretExchange;
    static error_get_domain(): GLib.Quark;
    static open(timeout_seconds: number, cancellable: Gio.Cancellable | null): SystemPrompt;
    static open_async(timeout_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    static open_finish(result: Gio.AsyncResult): SystemPrompt;
    static open_for_prompter(prompter_name: string | null, timeout_seconds: number, cancellable: Gio.Cancellable | null): SystemPrompt;
    static open_for_prompter_async(prompter_name: string | null, timeout_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    // Implemented Members
    confirm(cancellable: Gio.Cancellable | null): PromptReply;
    confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    confirm_finish(result: Gio.AsyncResult): PromptReply;
    confirm_run(cancellable: Gio.Cancellable | null): PromptReply;
    get_caller_window(): string;
    get_cancel_label(): string;
    get_choice_chosen(): boolean;
    get_choice_label(): string;
    get_continue_label(): string;
    get_description(): string;
    get_message(): string;
    get_password_new(): boolean;
    get_password_strength(): number;
    get_title(): string;
    get_warning(): string;
    password(cancellable: Gio.Cancellable | null): string;
    password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    password_finish(result: Gio.AsyncResult): string;
    password_run(cancellable: Gio.Cancellable | null): string;
    reset(): void;
    set_caller_window(window_id: string): void;
    set_cancel_label(cancel_label: string): void;
    set_choice_chosen(chosen: boolean): void;
    set_choice_label(choice_label: string | null): void;
    set_continue_label(continue_label: string): void;
    set_description(description: string): void;
    set_message(message: string): void;
    set_password_new(new_password: boolean): void;
    set_title(title: string): void;
    set_warning(warning: string | null): void;
    vfunc_prompt_close(): void;
    vfunc_prompt_confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    vfunc_prompt_confirm_finish(result: Gio.AsyncResult): PromptReply;
    vfunc_prompt_password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
    init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish<T = GObject.Object>(res: Gio.AsyncResult): T;
    vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    init(cancellable: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable: Gio.Cancellable | null): boolean;
}
export module SystemPrompter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        prompt_type: GType;
        prompting: boolean;
    }
}
export class SystemPrompter extends GObject.Object {
    constructor(properties?: Partial<SystemPrompter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SystemPrompter.ConstructorProperties>, ...args: any[]): void;
    // Properties
    prompt_type: GType;
    prompting: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'new-prompt', callback: (_source: this) => Prompt): number;
    connect_after(signal: 'new-prompt', callback: (_source: this) => Prompt): number;
    emit(signal: 'new-prompt'): void;
    // Constructors
    static ["new"](mode: SystemPrompterMode, prompt_type: GType): SystemPrompter;
    // Members
    get_mode(): SystemPrompterMode;
    get_prompt_type(): GType;
    get_prompting(): boolean;
    register(connection: Gio.DBusConnection): void;
    unregister(wait: boolean): void;
}
export module UnionCollection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class UnionCollection extends GObject.Object implements Collection {
    constructor(properties?: Partial<UnionCollection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnionCollection.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): UnionCollection;
    // Members
    add(collection: Collection): void;
    elements(): GLib.List;
    have(collection: Collection): boolean;
    remove(collection: Collection): void;
    size(): number;
    take(collection: Collection): void;
    // Implemented Members
    contains(object: GObject.Object): boolean;
    emit_added(object: GObject.Object): void;
    emit_removed(object: GObject.Object): void;
    get_length(): number;
    get_objects(): GLib.List;
    vfunc_added(object: GObject.Object): void;
    vfunc_contains(object: GObject.Object): boolean;
    vfunc_get_length(): number;
    vfunc_get_objects(): GLib.List;
    vfunc_removed(object: GObject.Object): void;
}
export class CertificateChainPrivate {
    constructor(copy: CertificateChainPrivate);
}
export class Column {
    constructor(copy: Column);
    // Fields
    property_name: string;
    property_type: GType;
    column_type: GType;
    label: string;
    flags: ColumnFlags;
    transformer: GObject.ValueTransform;
    user_data: any;
    reserved: any;
}
export class FilterCollectionPrivate {
    constructor(copy: FilterCollectionPrivate);
}
export class Parsed {
    constructor(copy: Parsed);
    // Members
    get_attributes(): Gck.Attributes | null;
    get_bytes(): GLib.Bytes;
    get_data(): Uint8Array | null;
    get_description(): string | null;
    get_filename(): string;
    get_format(): DataFormat;
    get_label(): string | null;
    ref(): Parsed;
    static unref(parsed: any | null): void;
}
export class ParserPrivate {
    constructor(copy: ParserPrivate);
}
export class Pkcs11CertificatePrivate {
    constructor(copy: Pkcs11CertificatePrivate);
}
export class SecretExchangePrivate {
    constructor(copy: SecretExchangePrivate);
}
export class SimpleCertificatePrivate {
    constructor(copy: SimpleCertificatePrivate);
}
export class SimpleCollectionPrivate {
    constructor(copy: SimpleCollectionPrivate);
}
export class SystemPromptPrivate {
    constructor(copy: SystemPromptPrivate);
}
export class SystemPrompterPrivate {
    constructor(copy: SystemPrompterPrivate);
}
export class UnionCollectionPrivate {
    constructor(copy: UnionCollectionPrivate);
}
export interface CertificateNamespace {
    compare(first: Comparable | null, other: Comparable | null): number;
    compare(...args: never[]): never;
}
export interface Certificate extends Comparable {
    // Properties
    description: string;
    expiry: GLib.Date;
    icon: Gio.Icon;
    issuer: string;
    label: string;
    markup: string;
    subject: string;
    // Members
    get_basic_constraints(): [boolean, boolean | null, number | null];
    get_der_data(): Uint8Array;
    get_expiry_date(): GLib.Date;
    get_fingerprint(type: GLib.ChecksumType): Uint8Array;
    get_fingerprint_hex(type: GLib.ChecksumType): string;
    get_issued_date(): GLib.Date;
    get_issuer_cn(): string;
    get_issuer_dn(): string;
    get_issuer_name(): string;
    get_issuer_part(part: string): string | null;
    get_issuer_raw(): Uint8Array;
    get_key_size(): number;
    get_markup_text(): string;
    get_serial_number(): Uint8Array;
    get_serial_number_hex(): string;
    get_subject_cn(): string;
    get_subject_dn(): string;
    get_subject_name(): string;
    get_subject_part(part: string): string | null;
    get_subject_raw(): Uint8Array;
    is_issuer(issuer: Certificate): boolean;
    mixin_emit_notify(): void;
    vfunc_get_der_data(): Uint8Array;
}

export const Certificate: CertificateNamespace;
export interface CollectionNamespace {
    $gtype: GType;
}
export interface Collection extends GObject.Object {
    // Members
    contains(object: GObject.Object): boolean;
    emit_added(object: GObject.Object): void;
    emit_removed(object: GObject.Object): void;
    get_length(): number;
    get_objects(): GLib.List;
    vfunc_added(object: GObject.Object): void;
    vfunc_contains(object: GObject.Object): boolean;
    vfunc_get_length(): number;
    vfunc_get_objects(): GLib.List;
    vfunc_removed(object: GObject.Object): void;
}

export const Collection: CollectionNamespace;
export interface ComparableNamespace {
    $gtype: GType;
}
export interface Comparable extends GObject.Object {
    // Members
    compare(other: Comparable | null): number;
    vfunc_compare(other: Comparable | null): number;
}

export const Comparable: ComparableNamespace;
export interface ImportInteractionNamespace {
    $gtype: GType;
}
export interface ImportInteraction extends Gio.TlsInteraction {
    // Members
    supplement(builder: Gck.Builder, cancellable: Gio.Cancellable | null): Gio.TlsInteractionResult;
    supplement_async(builder: Gck.Builder, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult;
    supplement_prep(builder: Gck.Builder): void;
    vfunc_supplement(builder: Gck.Builder, cancellable: Gio.Cancellable | null): Gio.TlsInteractionResult;
    vfunc_supplement_async(builder: Gck.Builder, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    vfunc_supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult;
    vfunc_supplement_prep(builder: Gck.Builder): void;
}

export const ImportInteraction: ImportInteractionNamespace;
export interface ImporterNamespace {
    $gtype: GType;
    create_for_parsed(parsed: Parsed): GLib.List;
    queue_and_filter_for_parsed(importers: GLib.List, parsed: Parsed): GLib.List;
    register(importer_type: GType, attrs: Gck.Attributes): void;
    register_well_known(): void;
}
export interface Importer extends GObject.Object {
    // Properties
    icon: Gio.Icon;
    interaction: Gio.TlsInteraction;
    label: string;
    uri: string;
    // Members
    get_interaction(): Gio.TlsInteraction | null;
    ["import"](cancellable: Gio.Cancellable | null): boolean;
    import_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    import_finish(result: Gio.AsyncResult): boolean;
    queue_for_parsed(parsed: Parsed): boolean;
    set_interaction(interaction: Gio.TlsInteraction): void;
    vfunc_import_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    vfunc_import_finish(result: Gio.AsyncResult): boolean;
    vfunc_import_sync(cancellable: Gio.Cancellable | null): boolean;
    vfunc_queue_for_parsed(parsed: Parsed): boolean;
}

export const Importer: ImporterNamespace;
export interface PromptNamespace {
    $gtype: GType;
}
export interface Prompt extends GObject.Object {
    // Properties
    caller_window: string;
    cancel_label: string;
    choice_chosen: boolean;
    choice_label: string;
    continue_label: string;
    description: string;
    message: string;
    password_new: boolean;
    password_strength: number;
    title: string;
    warning: string;
    // Members
    close(): void;
    confirm(cancellable: Gio.Cancellable | null): PromptReply;
    confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    confirm_finish(result: Gio.AsyncResult): PromptReply;
    confirm_run(cancellable: Gio.Cancellable | null): PromptReply;
    get_caller_window(): string;
    get_cancel_label(): string;
    get_choice_chosen(): boolean;
    get_choice_label(): string;
    get_continue_label(): string;
    get_description(): string;
    get_message(): string;
    get_password_new(): boolean;
    get_password_strength(): number;
    get_title(): string;
    get_warning(): string;
    password(cancellable: Gio.Cancellable | null): string;
    password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    password_finish(result: Gio.AsyncResult): string;
    password_run(cancellable: Gio.Cancellable | null): string;
    reset(): void;
    set_caller_window(window_id: string): void;
    set_cancel_label(cancel_label: string): void;
    set_choice_chosen(chosen: boolean): void;
    set_choice_label(choice_label: string | null): void;
    set_continue_label(continue_label: string): void;
    set_description(description: string): void;
    set_message(message: string): void;
    set_password_new(new_password: boolean): void;
    set_title(title: string): void;
    set_warning(warning: string | null): void;
    vfunc_prompt_close(): void;
    vfunc_prompt_confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    vfunc_prompt_confirm_finish(result: Gio.AsyncResult): PromptReply;
    vfunc_prompt_password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
}

export const Prompt: PromptNamespace;