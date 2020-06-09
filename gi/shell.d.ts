

/**
 * Shell
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Clutter from "clutter";
import * as Gcr from "gcr";
import * as NM from "nm";
import * as St from "st";
import * as Atk from "atk";
import * as Gtk from "gtk";
import * as cairo from "cairo";
import * as GdkPixbuf from "gdkpixbuf";

// Avoid importing Json for now...

declare namespace Json {
    type Node = any;
}


type GType = object;

export const KEYRING_SK_TAG: string;

export const KEYRING_SN_TAG: string;

export const KEYRING_UUID_TAG: string;

export function get_file_contents_utf8_sync(path: string): string;

export function util_check_cloexec_fds(): void;

export function util_composite_capture_images(captures: any, n_captures: number, x: number, y: number, target_width: number, target_height: number, target_scale: number): cairo.Surface;

export function util_create_pixbuf_from_data(data: (Uint8Array | string), colorspace: GdkPixbuf.Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): GdkPixbuf.Pixbuf;

export function util_get_content_for_window_actor(window_actor: any, window_rect: any): Clutter.Content | null;

export function util_get_transformed_allocation(actor: Clutter.Actor): Clutter.ActorBox;

export function util_get_translated_folder_name(name: string): string | null;

export function util_get_week_start(): number;

export function util_has_x11_display_extension(display: any, extension: string): boolean;

export function util_need_background_refresh(): boolean;

export function util_regex_escape(str: string): string;

export function util_sd_notify(): void;

export function util_set_hidden_from_pick(actor: Clutter.Actor, hidden: boolean): void;

export function util_start_systemd_unit(unit: string, mode: string): boolean;

export function util_stop_systemd_unit(unit: string, mode: string): boolean;

export function util_touch_file_async(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void;

export function util_touch_file_finish(file: Gio.File, res: Gio.AsyncResult): boolean;

export function util_translate_time_string(str: string): string;

export function util_wifexited(status: number): [boolean, number];

export function write_string_to_stream(stream: Gio.OutputStream, str: string): boolean;

export type LeisureFunction = (data: any | null) => void;

export type PerfReplayFunction = (time: number, name: string, signature: string, arg: (GObject.Value | string | boolean | number)) => void;

export type PerfStatisticsCallback = (perf_log: PerfLog, data: any | null) => void;
export enum AppState {
    STOPPED = 0,
    STARTING = 1,
    RUNNING = 2,
}
export enum BlurMode {
    ACTOR = 0,
    BACKGROUND = 1,
}
export enum NetworkAgentResponse {
    CONFIRMED = 0,
    USER_CANCELED = 1,
    INTERNAL_ERROR = 2,
}
export enum SnippetHook {
    VERTEX = 0,
    VERTEX_TRANSFORM = 1,
    FRAGMENT = 2048,
    TEXTURE_COORD_TRANSFORM = 4096,
    LAYER_FRAGMENT = 6144,
    TEXTURE_LOOKUP = 6145,
}
export enum ActionMode {
    NONE = 0,
    NORMAL = 1,
    OVERVIEW = 2,
    LOCK_SCREEN = 4,
    UNLOCK_SCREEN = 8,
    LOGIN_SCREEN = 16,
    SYSTEM_MODAL = 32,
    LOOKING_GLASS = 64,
    POPUP = 128,
    ALL = -1,
}
export module App {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        action_group: Gio.ActionGroup;
        app_info: Gio.DesktopAppInfo;
        busy: boolean;
        id: string;
        state: AppState;
    }
}
export class App extends GObject.Object {
    constructor(properties?: Partial<App.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<App.ConstructorProperties>, ...args: any[]): void;
    // Properties
    action_group: Gio.ActionGroup;
    app_info: Gio.DesktopAppInfo;
    busy: boolean;
    id: string;
    state: AppState;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'windows-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'windows-changed', callback: (_source: this) => void): number;
    emit(signal: 'windows-changed'): void;
    // Members
    activate(): void;
    activate_full(workspace: number, timestamp: number): void;
    activate_window(window: any | null, timestamp: number): void;
    can_open_new_window(): boolean;
    compare(other: App): number;
    compare_by_name(other: App): number;
    create_icon_texture(size: number): Clutter.Actor;
    get_app_info(): Gio.DesktopAppInfo;
    get_busy(): boolean;
    get_description(): string;
    get_id(): string;
    get_n_windows(): number;
    get_name(): string;
    get_pids(): GLib.SList;
    get_state(): AppState;
    get_windows(): GLib.SList;
    is_on_workspace(workspace: any): boolean;
    is_window_backed(): boolean;
    launch(timestamp: number, workspace: number, discrete_gpu: boolean): boolean;
    launch_action(action_name: string, timestamp: number, workspace: number): void;
    open_new_window(workspace: number): void;
    request_quit(): boolean;
    update_app_actions(window: any): void;
    update_window_actions(window: any): void;
}
export module AppSystem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AppSystem extends GObject.Object {
    constructor(properties?: Partial<AppSystem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppSystem.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'app-state-changed', callback: (_source: this, object: App) => void): number;
    connect_after(signal: 'app-state-changed', callback: (_source: this, object: App) => void): number;
    emit(signal: 'app-state-changed', object: App): void;
    connect(signal: 'installed-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'installed-changed', callback: (_source: this) => void): number;
    emit(signal: 'installed-changed'): void;
    // Members
    get_installed(): GLib.List;
    get_running(): GLib.SList;
    lookup_app(id: string): App;
    lookup_desktop_wmclass(wmclass: string | null): App;
    lookup_heuristic_basename(id: string): App;
    lookup_startup_wmclass(wmclass: string | null): App;
    static get_default(): AppSystem;
    static search(search_string: string): string[][];
}
export module AppUsage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AppUsage extends GObject.Object {
    constructor(properties?: Partial<AppUsage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppUsage.ConstructorProperties>, ...args: any[]): void;
    // Members
    compare(id_a: string, id_b: string): number;
    get_most_used(): GLib.SList;
    static get_default(): AppUsage;
}
export module BlurEffect {
    export interface ConstructorProperties extends Clutter.Effect.ConstructorProperties {
        [key: string]: any;
        brightness: number;
        mode: BlurMode;
        sigma: number;
    }
}
export class BlurEffect extends Clutter.Effect {
    constructor(properties?: Partial<BlurEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BlurEffect.ConstructorProperties>, ...args: any[]): void;
    // Properties
    brightness: number;
    mode: BlurMode;
    sigma: number;
    // Constructors
    static ["new"](): BlurEffect;
    // Members
    get_brightness(): number;
    get_mode(): BlurMode;
    get_sigma(): number;
    set_brightness(brightness: number): void;
    set_mode(mode: BlurMode): void;
    set_sigma(sigma: number): void;
}
export module EmbeddedWindow {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}
export class EmbeddedWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    constructor(properties?: Partial<EmbeddedWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EmbeddedWindow.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): EmbeddedWindow;
    static ["new"](...args: never[]): never;
    // Implemented Members
    add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Gtk.Builder): void;
    set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}
export module GLSLEffect {
    export interface ConstructorProperties extends Clutter.OffscreenEffect.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLSLEffect extends Clutter.OffscreenEffect {
    constructor(properties?: Partial<GLSLEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLSLEffect.ConstructorProperties>, ...args: any[]): void;
    // Members
    add_glsl_snippet(hook: SnippetHook, declarations: string, code: string, is_replace: boolean): void;
    get_uniform_location(name: string): number;
    set_uniform_float(uniform: number, n_components: number, value: number[]): void;
    vfunc_build_pipeline(): void;
}
export module Global {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        datadir: string;
        display: any;
        focus_manager: St.FocusManager;
        frame_finish_timestamp: boolean;
        frame_timestamps: boolean;
        imagedir: string;
        screen_height: number;
        screen_width: number;
        session_mode: string;
        settings: Gio.Settings;
        stage: Clutter.Actor;
        switcheroo_control: Gio.DBusProxy;
        top_window_group: Clutter.Actor;
        userdatadir: string;
        window_group: Clutter.Actor;
        window_manager: WM;
        workspace_manager: any;
    }
}
export class Global extends GObject.Object {
    constructor(properties?: Partial<Global.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Global.ConstructorProperties>, ...args: any[]): void;
    // Properties
    datadir: string;
    display: any;
    focus_manager: St.FocusManager;
    frame_finish_timestamp: boolean;
    frame_timestamps: boolean;
    imagedir: string;
    screen_height: number;
    screen_width: number;
    session_mode: string;
    settings: Gio.Settings;
    stage: Clutter.Actor;
    switcheroo_control: Gio.DBusProxy;
    top_window_group: Clutter.Actor;
    userdatadir: string;
    window_group: Clutter.Actor;
    window_manager: WM;
    workspace_manager: any;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'locate-pointer', callback: (_source: this) => void): number;
    connect_after(signal: 'locate-pointer', callback: (_source: this) => void): number;
    emit(signal: 'locate-pointer'): void;
    connect(signal: 'notify-error', callback: (_source: this, object: string, p0: string) => void): number;
    connect_after(signal: 'notify-error', callback: (_source: this, object: string, p0: string) => void): number;
    emit(signal: 'notify-error', object: string, p0: string): void;
    // Members
    begin_modal(timestamp: number, options: any): boolean;
    begin_work(): void;
    create_app_launch_context(timestamp: number, workspace: number): Gio.AppLaunchContext;
    end_modal(timestamp: number): void;
    end_work(): void;
    get_current_time(): number;
    get_display(): any;
    get_persistent_state(property_type: string, property_name: string): GLib.Variant;
    get_pointer(): [number, number, Clutter.ModifierType];
    get_runtime_state(property_type: string, property_name: string): GLib.Variant;
    get_session_mode(): string;
    get_settings(): Gio.Settings;
    get_stage(): Clutter.Stage;
    get_window_actors(): GLib.List;
    notify_error(msg: string, details: string): void;
    reexec_self(): void;
    run_at_leisure(func: LeisureFunction, notify: GLib.DestroyNotify): void;
    set_persistent_state(property_name: string, variant: GLib.Variant | null): void;
    set_runtime_state(property_name: string, variant: GLib.Variant | null): void;
    set_stage_input_region(rectangles: GLib.SList): void;
    sync_pointer(): void;
    static get(): Global;
}
export module GtkEmbed {
    export interface ConstructorProperties extends Clutter.Clone.ConstructorProperties {
        [key: string]: any;
        window: EmbeddedWindow;
    }
}
export class GtkEmbed extends Clutter.Clone implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<GtkEmbed.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GtkEmbed.ConstructorProperties>, ...args: any[]): void;
    // Properties
    window: EmbeddedWindow;
    // Constructors
    static ["new"](window: EmbeddedWindow): GtkEmbed;
    static ["new"](...args: never[]): never;
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
export module InvertLightnessEffect {
    export interface ConstructorProperties extends Clutter.OffscreenEffect.ConstructorProperties {
        [key: string]: any;
    }
}
export class InvertLightnessEffect extends Clutter.OffscreenEffect {
    constructor(properties?: Partial<InvertLightnessEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InvertLightnessEffect.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): InvertLightnessEffect;
}
export module KeyringPrompt {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        choice_visible: boolean;
        confirm_actor: Clutter.Text;
        confirm_visible: boolean;
        password_actor: Clutter.Text;
        password_visible: boolean;
        warning_visible: boolean;
    }
}
export class KeyringPrompt extends GObject.Object implements Gcr.Prompt {
    constructor(properties?: Partial<KeyringPrompt.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<KeyringPrompt.ConstructorProperties>, ...args: any[]): void;
    // Properties
    choice_visible: boolean;
    confirm_actor: Clutter.Text;
    confirm_visible: boolean;
    password_actor: Clutter.Text;
    password_visible: boolean;
    warning_visible: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'show-confirm', callback: (_source: this) => void): number;
    connect_after(signal: 'show-confirm', callback: (_source: this) => void): number;
    emit(signal: 'show-confirm'): void;
    connect(signal: 'show-password', callback: (_source: this) => void): number;
    connect_after(signal: 'show-password', callback: (_source: this) => void): number;
    emit(signal: 'show-password'): void;
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
    // Constructors
    static ["new"](): KeyringPrompt;
    // Members
    cancel(): void;
    complete(): boolean;
    get_confirm_actor(): Clutter.Text | null;
    get_password_actor(): Clutter.Text | null;
    set_confirm_actor(confirm_actor: Clutter.Text | null): void;
    set_password_actor(password_actor: Clutter.Text | null): void;
    // Implemented Members
    close(): void;
    confirm(cancellable: Gio.Cancellable | null): Gcr.PromptReply;
    confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;
    confirm_run(cancellable: Gio.Cancellable | null): Gcr.PromptReply;
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
    vfunc_prompt_confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;
    vfunc_prompt_password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
}
export module MountOperation {
    export interface ConstructorProperties extends Gio.MountOperation.ConstructorProperties {
        [key: string]: any;
    }
}
export class MountOperation extends Gio.MountOperation {
    constructor(properties?: Partial<MountOperation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MountOperation.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'show-processes-2', callback: (_source: this) => void): number;
    connect_after(signal: 'show-processes-2', callback: (_source: this) => void): number;
    emit(signal: 'show-processes-2'): void;
    // Constructors
    static ["new"](): MountOperation;
    static ["new"](...args: never[]): never;
    // Members
    get_show_processes_choices(): string[];
    get_show_processes_message(): string;
    get_show_processes_pids(): GLib.Pid[];
}
export module NetworkAgent {
    export interface ConstructorProperties extends NM.SecretAgentOld.ConstructorProperties {
        [key: string]: any;
    }
}
export class NetworkAgent extends NM.SecretAgentOld implements Gio.AsyncInitable, Gio.Initable {
    constructor(properties?: Partial<NetworkAgent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NetworkAgent.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'cancel-request', callback: (_source: this, object: string) => void): number;
    connect_after(signal: 'cancel-request', callback: (_source: this, object: string) => void): number;
    emit(signal: 'cancel-request', object: string): void;
    connect(signal: 'new-request', callback: (_source: this, object: string, p0: NM.Connection, p1: string, p2: string[], p3: number) => void): number;
    connect_after(signal: 'new-request', callback: (_source: this, object: string, p0: NM.Connection, p1: string, p2: string[], p3: number) => void): number;
    emit(signal: 'new-request', object: string, p0: NM.Connection, p1: string, p2: string[], p3: number): void;
    // Members
    respond(request_id: string, response: NetworkAgentResponse): void;
    search_vpn_plugin(service: string, callback: Gio.AsyncReadyCallback | null): void;
    search_vpn_plugin_finish(result: Gio.AsyncResult): NM.VpnPluginInfo | null;
    set_password(request_id: string, setting_key: string, setting_value: string): void;
}
export module PerfLog {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PerfLog extends GObject.Object {
    constructor(properties?: Partial<PerfLog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PerfLog.ConstructorProperties>, ...args: any[]): void;
    // Members
    add_statistics_callback(callback: PerfStatisticsCallback, notify: GLib.DestroyNotify): void;
    collect_statistics(): void;
    define_event(name: string, description: string, signature: string): void;
    define_statistic(name: string, description: string, signature: string): void;
    dump_events(out: Gio.OutputStream): boolean;
    dump_log(out: Gio.OutputStream): boolean;
    event(name: string): void;
    event_i(name: string, arg: number): void;
    event_s(name: string, arg: string): void;
    event_x(name: string, arg: number): void;
    replay(replay_function: PerfReplayFunction): void;
    set_enabled(enabled: boolean): void;
    update_statistic_i(name: string, value: number): void;
    update_statistic_x(name: string, value: number): void;
    static get_default(): PerfLog;
}
export module PolkitAuthenticationAgent {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class PolkitAuthenticationAgent {
    constructor(properties?: Partial<PolkitAuthenticationAgent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PolkitAuthenticationAgent.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'cancel', callback: (_source: this) => void): number;
    connect_after(signal: 'cancel', callback: (_source: this) => void): number;
    emit(signal: 'cancel'): void;
    connect(signal: 'initiate', callback: (_source: this, object: string, p0: string, p1: string, p2: string, p3: string[]) => void): number;
    connect_after(signal: 'initiate', callback: (_source: this, object: string, p0: string, p1: string, p2: string, p3: string[]) => void): number;
    emit(signal: 'initiate', object: string, p0: string, p1: string, p2: string, p3: string[]): void;
    // Constructors
    static ["new"](): PolkitAuthenticationAgent;
    // Members
    complete(dismissed: boolean): void;
    register(): void;
    register(...args: never[]): never;
    unregister(): void;
    unregister(...args: never[]): never;
}
export module Recorder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        display: any;
        draw_cursor: boolean;
        file_template: string;
        framerate: number;
        pipeline: string;
        stage: Clutter.Stage;
    }
}
export class Recorder extends GObject.Object {
    constructor(properties?: Partial<Recorder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Recorder.ConstructorProperties>, ...args: any[]): void;
    // Properties
    display: any;
    draw_cursor: boolean;
    file_template: string;
    framerate: number;
    pipeline: string;
    stage: Clutter.Stage;
    // Constructors
    static ["new"](stage: Clutter.Stage): Recorder;
    // Members
    close(): void;
    is_recording(): boolean;
    pause(): void;
    record(): [boolean, string | null];
    set_area(x: number, y: number, width: number, height: number): void;
    set_draw_cursor(draw_cursor: boolean): void;
    set_file_template(file_template: string): void;
    set_framerate(framerate: number): void;
    set_pipeline(pipeline: string | null): void;
}
export module Screenshot {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Screenshot extends GObject.Object {
    constructor(properties?: Partial<Screenshot.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Screenshot.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): Screenshot;
    // Members
    pick_color(x: number, y: number, callback: Gio.AsyncReadyCallback | null): void;
    pick_color_finish(result: Gio.AsyncResult): [boolean, Clutter.Color];
    screenshot(include_cursor: boolean, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void;
    screenshot_area(x: number, y: number, width: number, height: number, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void;
    screenshot_area_finish(result: Gio.AsyncResult): [boolean, cairo.RectangleInt];
    screenshot_finish(result: Gio.AsyncResult): [boolean, cairo.RectangleInt];
    screenshot_window(include_frame: boolean, include_cursor: boolean, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void;
    screenshot_window_finish(result: Gio.AsyncResult): [boolean, cairo.RectangleInt];
}
export module SecureTextBuffer {
    export interface ConstructorProperties extends Clutter.TextBuffer.ConstructorProperties {
        [key: string]: any;
    }
}
export class SecureTextBuffer extends Clutter.TextBuffer {
    constructor(properties?: Partial<SecureTextBuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SecureTextBuffer.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): SecureTextBuffer;
    static ["new"](...args: never[]): never;
}
export module Stack {
    export interface ConstructorProperties extends St.Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class Stack extends St.Widget implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<Stack.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Stack.ConstructorProperties>, ...args: any[]): void;
}
export module TrayIcon {
    export interface ConstructorProperties extends GtkEmbed.ConstructorProperties {
        [key: string]: any;
        pid: number;
        title: string;
        wm_class: string;
    }
}
export class TrayIcon extends GtkEmbed implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
    constructor(properties?: Partial<TrayIcon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TrayIcon.ConstructorProperties>, ...args: any[]): void;
    // Properties
    pid: number;
    title: string;
    wm_class: string;
    // Constructors
    static ["new"](window: EmbeddedWindow): TrayIcon;
    static ["new"](...args: never[]): never;
    // Members
    click(event: Clutter.Event): void;
}
export module TrayManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bg_color: Clutter.Color;
    }
}
export class TrayManager extends GObject.Object {
    constructor(properties?: Partial<TrayManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TrayManager.ConstructorProperties>, ...args: any[]): void;
    // Properties
    bg_color: Clutter.Color;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'tray-icon-added', callback: (_source: this, object: Clutter.Actor) => void): number;
    connect_after(signal: 'tray-icon-added', callback: (_source: this, object: Clutter.Actor) => void): number;
    emit(signal: 'tray-icon-added', object: Clutter.Actor): void;
    connect(signal: 'tray-icon-removed', callback: (_source: this, object: Clutter.Actor) => void): number;
    connect_after(signal: 'tray-icon-removed', callback: (_source: this, object: Clutter.Actor) => void): number;
    emit(signal: 'tray-icon-removed', object: Clutter.Actor): void;
    // Constructors
    static ["new"](): TrayManager;
    // Members
    manage_screen(theme_widget: St.Widget): void;
    unmanage_screen(): void;
}
export module WM {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class WM extends GObject.Object {
    constructor(properties?: Partial<WM.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WM.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'confirm-display-change', callback: (_source: this) => void): number;
    connect_after(signal: 'confirm-display-change', callback: (_source: this) => void): number;
    emit(signal: 'confirm-display-change'): void;
    connect(signal: 'create-close-dialog', callback: (_source: this, window: any) => any): number;
    connect_after(signal: 'create-close-dialog', callback: (_source: this, window: any) => any): number;
    emit(signal: 'create-close-dialog', window: any): void;
    connect(signal: 'create-inhibit-shortcuts-dialog', callback: (_source: this, window: any) => any): number;
    connect_after(signal: 'create-inhibit-shortcuts-dialog', callback: (_source: this, window: any) => any): number;
    emit(signal: 'create-inhibit-shortcuts-dialog', window: any): void;
    connect(signal: 'destroy', callback: (_source: this, object: any) => void): number;
    connect_after(signal: 'destroy', callback: (_source: this, object: any) => void): number;
    emit(signal: 'destroy', object: any): void;
    connect(signal: 'filter-keybinding', callback: (_source: this, object: any) => boolean): number;
    connect_after(signal: 'filter-keybinding', callback: (_source: this, object: any) => boolean): number;
    emit(signal: 'filter-keybinding', object: any): void;
    connect(signal: 'hide-tile-preview', callback: (_source: this) => void): number;
    connect_after(signal: 'hide-tile-preview', callback: (_source: this) => void): number;
    emit(signal: 'hide-tile-preview'): void;
    connect(signal: 'kill-switch-workspace', callback: (_source: this) => void): number;
    connect_after(signal: 'kill-switch-workspace', callback: (_source: this) => void): number;
    emit(signal: 'kill-switch-workspace'): void;
    connect(signal: 'kill-window-effects', callback: (_source: this, object: any) => void): number;
    connect_after(signal: 'kill-window-effects', callback: (_source: this, object: any) => void): number;
    emit(signal: 'kill-window-effects', object: any): void;
    connect(signal: 'map', callback: (_source: this, object: any) => void): number;
    connect_after(signal: 'map', callback: (_source: this, object: any) => void): number;
    emit(signal: 'map', object: any): void;
    connect(signal: 'minimize', callback: (_source: this, object: any) => void): number;
    connect_after(signal: 'minimize', callback: (_source: this, object: any) => void): number;
    emit(signal: 'minimize', object: any): void;
    connect(signal: 'show-tile-preview', callback: (_source: this, object: any, p0: any, p1: number) => void): number;
    connect_after(signal: 'show-tile-preview', callback: (_source: this, object: any, p0: any, p1: number) => void): number;
    emit(signal: 'show-tile-preview', object: any, p0: any, p1: number): void;
    connect(signal: 'show-window-menu', callback: (_source: this, object: any, p0: number, p1: any) => void): number;
    connect_after(signal: 'show-window-menu', callback: (_source: this, object: any, p0: number, p1: any) => void): number;
    emit(signal: 'show-window-menu', object: any, p0: number, p1: any): void;
    connect(signal: 'size-change', callback: (_source: this, object: any, p0: any, p1: any, p2: any) => void): number;
    connect_after(signal: 'size-change', callback: (_source: this, object: any, p0: any, p1: any, p2: any) => void): number;
    emit(signal: 'size-change', object: any, p0: any, p1: any, p2: any): void;
    connect(signal: 'size-changed', callback: (_source: this, object: any) => void): number;
    connect_after(signal: 'size-changed', callback: (_source: this, object: any) => void): number;
    emit(signal: 'size-changed', object: any): void;
    connect(signal: 'switch-workspace', callback: (_source: this, object: number, p0: number, p1: number) => void): number;
    connect_after(signal: 'switch-workspace', callback: (_source: this, object: number, p0: number, p1: number) => void): number;
    emit(signal: 'switch-workspace', object: number, p0: number, p1: number): void;
    connect(signal: 'unminimize', callback: (_source: this, object: any) => void): number;
    connect_after(signal: 'unminimize', callback: (_source: this, object: any) => void): number;
    emit(signal: 'unminimize', object: any): void;
    // Constructors
    static ["new"](plugin: any): WM;
    // Members
    complete_display_change(ok: boolean): void;
    completed_destroy(actor: any): void;
    completed_map(actor: any): void;
    completed_minimize(actor: any): void;
    completed_size_change(actor: any): void;
    completed_switch_workspace(): void;
    completed_unminimize(actor: any): void;
}
export module WindowTracker {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        focus_app: App;
    }
}
export class WindowTracker extends GObject.Object {
    constructor(properties?: Partial<WindowTracker.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WindowTracker.ConstructorProperties>, ...args: any[]): void;
    // Properties
    focus_app: App;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'startup-sequence-changed', callback: (_source: this, object: any) => void): number;
    connect_after(signal: 'startup-sequence-changed', callback: (_source: this, object: any) => void): number;
    emit(signal: 'startup-sequence-changed', object: any): void;
    connect(signal: 'tracked-windows-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'tracked-windows-changed', callback: (_source: this) => void): number;
    emit(signal: 'tracked-windows-changed'): void;
    // Members
    get_app_from_pid(pid: number): App;
    get_startup_sequences(): GLib.SList;
    get_window_app(metawin: any): App;
    static get_default(): WindowTracker;
}
export class MemoryInfo {
    constructor(properties?: {
        glibc_uordblks?: number;
        js_bytes?: number;
        gjs_boxed?: number;
        gjs_gobject?: number;
        gjs_function?: number;
        gjs_closure?: number;
        last_gc_seconds_ago?: number;
    });
    constructor(copy: MemoryInfo);
    // Fields
    glibc_uordblks: number;
    js_bytes: number;
    gjs_boxed: number;
    gjs_gobject: number;
    gjs_function: number;
    gjs_closure: number;
    last_gc_seconds_ago: number;
}
export class NetworkAgentPrivate {
    constructor(copy: NetworkAgentPrivate);
}