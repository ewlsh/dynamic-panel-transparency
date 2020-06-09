

/**
 * Cogl
 */
import * as GObject from "gobject";
import * as GLib from "glib";

type GType = object;

export const AFIRST_BIT: number;

export const A_BIT: number;

export const BGR_BIT: number;

export const DEPTH_BIT: number;

export const PREMULT_BIT: number;

export const STENCIL_BIT: number;

export const TEXTURE_MAX_WASTE: number;

export const VERSION_COMPONENT_BITS: number;

export const VERSION_MAX_COMPONENT_VALUE: number;

export function bitmap_error_quark(): number;

export function blend_string_error_quark(): number;

export function buffer_get_size(buffer: Buffer): number;

export function buffer_get_update_hint(buffer: Buffer): BufferUpdateHint;

export function buffer_map(buffer: Buffer, access: BufferAccess, hints: BufferMapHint): any | null;

export function buffer_map_range(buffer: Buffer, offset: number, size: number, access: BufferAccess, hints: BufferMapHint): any | null;

export function buffer_set_data(buffer: Buffer, offset: number, data: any | null, size: number): Bool;

export function buffer_set_update_hint(buffer: Buffer, hint: BufferUpdateHint): void;

export function buffer_unmap(buffer: Buffer): void;

export function color_equal(v1: any | null, v2: any | null): Bool;

export function color_init_from_hsl(hue: number, saturation: number, luminance: number): Color;

export function debug_matrix_entry_print(entry: MatrixEntry): void;

export function debug_matrix_print(matrix: Matrix): void;

export function debug_object_foreach_type(func: DebugObjectForeachTypeCallback): void;

export function debug_object_print_instances(): void;

export function error_copy(error: GLib.Error): GLib.Error;

export function error_free(error: GLib.Error): void;

export function error_matches(error: GLib.Error, domain: number, code: number): Bool;

export function euler_equal(v1: any | null, v2: any | null): Bool;

export function foreach_feature(context: Context, callback: FeatureCallback): void;

export function framebuffer_error_quark(): number;

export function get_clock_time(context: Context): number;

export function get_draw_framebuffer(): Framebuffer;

export function get_static_identity_quaternion(): Quaternion;

export function get_static_zero_quaternion(): Quaternion;

export function gles2_texture_get_handle(texture: Texture, handle: number, target: number): Bool;

export function glib_renderer_source_new(renderer: Renderer, priority: number): GLib.Source;

export function glib_source_new(context: Context, priority: number): GLib.Source;

export function gtype_matrix_get_type(): GType;

export function handle_get_type(): GType;

export function handle_ref(handle: Handle): Handle;

export function handle_unref(handle: Handle): void;

export function has_feature(context: Context, feature: FeatureID): Bool;

export function is_atlas_texture(object: any | null): Bool;

export function is_attribute(object: any | null): Bool;

export function is_attribute_buffer(object: any | null): Bool;

export function is_bitmap(object: any | null): Bool;

export function is_buffer(object: any | null): Bool;

export function is_context(object: any | null): Bool;

export function is_display(object: any | null): Bool;

export function is_frame_info(object: any | null): Bool;

export function is_framebuffer(object: any | null): Bool;

export function is_gles2_context(object: any | null): Bool;

export function is_index_buffer(object: any | null): Bool;

export function is_indices(object: any | null): Bool;

export function is_matrix_stack(object: any | null): Bool;

export function is_onscreen(object: any | null): Bool;

export function is_onscreen_template(object: any | null): Bool;

export function is_output(object: any | null): Bool;

export function is_pipeline(object: any | null): Bool;

export function is_pixel_buffer(object: any | null): Bool;

export function is_primitive(object: any | null): Bool;

export function is_primitive_texture(object: any | null): Bool;

export function is_renderer(object: any | null): Bool;

export function is_snippet(object: any | null): Bool;

export function is_sub_texture(object: any | null): Bool;

export function is_swap_chain(object: any | null): Bool;

export function is_texture(object: any | null): Bool;

export function is_texture_2d(object: any | null): Bool;

export function is_texture_2d_sliced(object: any | null): Bool;

export function is_texture_3d(object: any | null): Bool;

export function is_texture_pixmap_x11(object: any | null): Bool;

export function is_texture_rectangle(object: any | null): Bool;

export function kms_display_queue_modes_reset(display: Display): void;

export function kms_display_set_ignore_crtc(display: Display, id: number, ignore: Bool): void;

export function kms_display_set_layout(display: Display, width: number, height: number, crtcs: KmsCrtc, n_crtcs: number): Bool;

export function kms_renderer_get_gbm(renderer: Renderer): any | null;

export function kms_renderer_get_kms_fd(renderer: Renderer): number;

export function kms_renderer_set_kms_fd(renderer: Renderer, fd: number): void;

export function matrix_equal(v1: any | null, v2: any | null): Bool;

export function poll_renderer_dispatch(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number): void;

export function poll_renderer_get_info(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number, timeout: number): number;

export function pop_gles2_context(ctx: Context): void;

export function push_gles2_context(ctx: Context, gles2_ctx: GLES2Context, read_buffer: Framebuffer, write_buffer: Framebuffer): Bool;

export function quaternion_equal(v1: any | null, v2: any | null): Bool;

export function renderer_error_quark(): number;

export function texture_error_quark(): number;

export function vector3_add(result: number, a: number, b: number): void;

export function vector3_copy(vector: number): number;

export function vector3_cross_product(result: number, u: number, v: number): void;

export function vector3_distance(a: number, b: number): number;

export function vector3_divide_scalar(vector: number, scalar: number): void;

export function vector3_dot_product(a: number, b: number): number;

export function vector3_equal(v1: any | null, v2: any | null): Bool;

export function vector3_equal_with_epsilon(vector0: number, vector1: number, epsilon: number): Bool;

export function vector3_free(vector: number): void;

export function vector3_init(vector: number, x: number, y: number, z: number): void;

export function vector3_init_zero(vector: number): void;

export function vector3_invert(vector: number): void;

export function vector3_magnitude(vector: number): number;

export function vector3_multiply_scalar(vector: number, scalar: number): void;

export function vector3_normalize(vector: number): void;

export function vector3_subtract(result: number, a: number, b: number): void;

export function wayland_display_set_compositor_display(display: Display, wayland_display: any | null): void;

export function wayland_onscreen_get_shell_surface(onscreen: Onscreen): any | null;

export function wayland_onscreen_get_surface(onscreen: Onscreen): any | null;

export function wayland_onscreen_resize(onscreen: Onscreen, width: number, height: number, offset_x: number, offset_y: number): void;

export function wayland_onscreen_set_foreign_surface(onscreen: Onscreen, surface: any | null): void;

export function wayland_renderer_get_display(renderer: Renderer): any | null;

export function wayland_renderer_set_event_dispatch_enabled(renderer: Renderer, enable: Bool): void;

export function wayland_renderer_set_foreign_display(renderer: Renderer, display: any | null): void;

export function wayland_texture_set_region_from_shm_buffer(texture: Texture, src_x: number, src_y: number, width: number, height: number, shm_buffer: any | null, dst_x: number, dst_y: number, level: number): Bool;

export function x11_onscreen_get_visual_xid(onscreen: Onscreen): number;

export function x11_onscreen_get_window_xid(onscreen: Onscreen): number;

export type DebugObjectForeachTypeCallback = (info: DebugObjectTypeInfo) => void;

export type FeatureCallback = (feature: FeatureID) => void;

export type FenceCallback = (fence: Fence) => void;

export type FrameCallback = (onscreen: Onscreen, event: FrameEvent, info: FrameInfo) => void;

export type FuncPtr = () => void;

export type MetaTextureCallback = (sub_texture: Texture, sub_texture_coords: number, meta_coords: number) => void;

export type OnscreenDirtyCallback = (onscreen: Onscreen, info: OnscreenDirtyInfo) => void;

export type OnscreenResizeCallback = (onscreen: Onscreen, width: number, height: number) => void;

export type OnscreenX11MaskCallback = (onscreen: Onscreen, event_mask: number) => void;

export type OutputCallback = (output: Output) => void;

export type PipelineLayerCallback = (pipeline: Pipeline, layer_index: number) => Bool;

export type PrimitiveAttributeCallback = (primitive: Primitive, attribute: Attribute) => Bool;

export type SwapBuffersNotify = (framebuffer: Framebuffer) => void;
export enum AttributeType {
    BYTE = 5120,
    UNSIGNED_BYTE = 5121,
    SHORT = 5122,
    UNSIGNED_SHORT = 5123,
    FLOAT = 5126,
}
export enum BitmapError {
    FAILED = 0,
    UNKNOWN_TYPE = 1,
    CORRUPT_IMAGE = 2,
}
export enum BlendStringError {
    PARSE_ERROR = 0,
    ARGUMENT_PARSE_ERROR = 1,
    INVALID_ERROR = 2,
    GPU_UNSUPPORTED_ERROR = 3,
}
export enum BufferError {
    BUFFER_ERROR_MAP = 0,
}
export enum BufferUpdateHint {
    STATIC = 0,
    DYNAMIC = 1,
    STREAM = 2,
}
export enum DepthTestFunction {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}
export enum Driver {
    ANY = 0,
    NOP = 1,
    GL = 2,
    GL3 = 3,
    GLES1 = 4,
    GLES2 = 5,
    WEBGL = 6,
}
export enum FeatureID {
    OGL_FEATURE_ID_TEXTURE_NPOT_BASIC = 1,
    OGL_FEATURE_ID_TEXTURE_NPOT_MIPMAP = 2,
    OGL_FEATURE_ID_TEXTURE_NPOT_REPEAT = 3,
    OGL_FEATURE_ID_TEXTURE_NPOT = 4,
    OGL_FEATURE_ID_TEXTURE_RECTANGLE = 5,
    OGL_FEATURE_ID_TEXTURE_3D = 6,
    OGL_FEATURE_ID_GLSL = 7,
    OGL_FEATURE_ID_ARBFP = 8,
    OGL_FEATURE_ID_OFFSCREEN = 9,
    OGL_FEATURE_ID_OFFSCREEN_MULTISAMPLE = 10,
    OGL_FEATURE_ID_ONSCREEN_MULTIPLE = 11,
    OGL_FEATURE_ID_UNSIGNED_INT_INDICES = 12,
    OGL_FEATURE_ID_DEPTH_RANGE = 13,
    OGL_FEATURE_ID_POINT_SPRITE = 14,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_READ = 15,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE = 16,
    OGL_FEATURE_ID_MIRRORED_REPEAT = 17,
    OGL_FEATURE_ID_SWAP_BUFFERS_EVENT = 18,
    OGL_FEATURE_ID_GLES2_CONTEXT = 19,
    OGL_FEATURE_ID_DEPTH_TEXTURE = 20,
    OGL_FEATURE_ID_PRESENTATION_TIME = 21,
    OGL_FEATURE_ID_FENCE = 22,
    OGL_FEATURE_ID_PER_VERTEX_POINT_SIZE = 23,
    OGL_FEATURE_ID_TEXTURE_RG = 24,
    OGL_FEATURE_ID_BUFFER_AGE = 25,
}
export enum FilterReturn {
    CONTINUE = 0,
    REMOVE = 1,
}
export enum FogMode {
    LINEAR = 0,
    EXPONENTIAL = 1,
    EXPONENTIAL_SQUARED = 2,
}
export enum FrameEvent {
    SYNC = 1,
    COMPLETE = 2,
}
export enum FramebufferError {
    FRAMEBUFFER_ERROR_ALLOCATE = 0,
}
export enum GLES2ContextError {
    UNSUPPORTED = 0,
    DRIVER = 1,
}
export enum IndicesType {
    BYTE = 0,
    SHORT = 1,
    INT = 2,
}
export enum MaterialAlphaFunc {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}
export enum MaterialFilter {
    NEAREST = 9728,
    LINEAR = 9729,
    NEAREST_MIPMAP_NEAREST = 9984,
    LINEAR_MIPMAP_NEAREST = 9985,
    NEAREST_MIPMAP_LINEAR = 9986,
    LINEAR_MIPMAP_LINEAR = 9987,
}
export enum MaterialLayerType {
    TEXTURE = 0,
}
export enum MaterialWrapMode {
    REPEAT = 10497,
    CLAMP_TO_EDGE = 33071,
    AUTOMATIC = 519,
}
export enum PipelineAlphaFunc {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}
export enum PipelineCullFaceMode {
    NONE = 0,
    FRONT = 1,
    BACK = 2,
    BOTH = 3,
}
export enum PipelineFilter {
    NEAREST = 9728,
    LINEAR = 9729,
    NEAREST_MIPMAP_NEAREST = 9984,
    LINEAR_MIPMAP_NEAREST = 9985,
    NEAREST_MIPMAP_LINEAR = 9986,
    LINEAR_MIPMAP_LINEAR = 9987,
}
export enum PipelineWrapMode {
    REPEAT = 10497,
    MIRRORED_REPEAT = 33648,
    CLAMP_TO_EDGE = 33071,
    AUTOMATIC = 519,
}
export enum PixelFormat {
    ANY = 0,
    A_8 = 17,
    RGB_565 = 4,
    RGBA_4444 = 21,
    RGBA_5551 = 22,
    YUV = 7,
    G_8 = 8,
    RG_88 = 9,
    RGB_888 = 2,
    BGR_888 = 34,
    RGBA_8888 = 19,
    BGRA_8888 = 51,
    ARGB_8888 = 83,
    ABGR_8888 = 115,
    RGBA_1010102 = 29,
    BGRA_1010102 = 61,
    ARGB_2101010 = 93,
    ABGR_2101010 = 125,
    RGBA_8888_PRE = 147,
    BGRA_8888_PRE = 179,
    ARGB_8888_PRE = 211,
    ABGR_8888_PRE = 243,
    RGBA_4444_PRE = 149,
    RGBA_5551_PRE = 150,
    RGBA_1010102_PRE = 157,
    BGRA_1010102_PRE = 189,
    ARGB_2101010_PRE = 221,
    ABGR_2101010_PRE = 253,
    DEPTH_16 = 265,
    DEPTH_32 = 259,
    DEPTH_24_STENCIL_8 = 771,
}
export enum PollFDEvent {
    IN = 1,
    PRI = 2,
    OUT = 4,
    ERR = 8,
    HUP = 16,
    NVAL = 32,
}
export enum RendererError {
    XLIB_DISPLAY_OPEN = 0,
    BAD_CONSTRAINT = 1,
}
export enum ShaderType {
    VERTEX = 0,
    FRAGMENT = 1,
}
export enum SnippetHook {
    VERTEX = 0,
    VERTEX_TRANSFORM = 1,
    VERTEX_GLOBALS = 2,
    POINT_SIZE = 3,
    FRAGMENT = 2048,
    FRAGMENT_GLOBALS = 2049,
    TEXTURE_COORD_TRANSFORM = 4096,
    LAYER_FRAGMENT = 6144,
    TEXTURE_LOOKUP = 6145,
}
export enum StereoMode {
    BOTH = 0,
    LEFT = 1,
    RIGHT = 2,
}
export enum SubpixelOrder {
    UNKNOWN = 0,
    NONE = 1,
    HORIZONTAL_RGB = 2,
    HORIZONTAL_BGR = 3,
    VERTICAL_RGB = 4,
    VERTICAL_BGR = 5,
}
export enum SystemError {
    COGL_SYSTEM_ERROR_UNSUPPORTED = 0,
    COGL_SYSTEM_ERROR_NO_MEMORY = 1,
}
export enum TextureComponents {
    A = 1,
    RG = 2,
    RGB = 3,
    RGBA = 4,
    DEPTH = 5,
}
export enum TextureError {
    SIZE = 0,
    FORMAT = 1,
    BAD_PARAMETER = 2,
    TYPE = 3,
}
export enum TexturePixmapX11Error {
    TEXTURE_PIXMAP_X11_ERROR_X11 = 0,
}
export enum TexturePixmapX11ReportLevel {
    RAW_RECTANGLES = 0,
    DELTA_RECTANGLES = 1,
    BOUNDING_BOX = 2,
    NON_EMPTY = 3,
}
export class TextureType {
    constructor(copy: TextureType);
    // Properties
    static "2D": number;
    static "3D": number;
    static RECTANGLE: number;
}
export enum VerticesMode {
    POINTS = 0,
    LINES = 1,
    LINE_LOOP = 2,
    LINE_STRIP = 3,
    TRIANGLES = 4,
    TRIANGLE_STRIP = 5,
    TRIANGLE_FAN = 6,
}
export enum Winding {
    CLOCKWISE = 0,
    COUNTER_CLOCKWISE = 1,
}
export enum WinsysFeature {
    MULTIPLE_ONSCREEN = 0,
    SWAP_THROTTLE = 1,
    VBLANK_COUNTER = 2,
    VBLANK_WAIT = 3,
    TEXTURE_FROM_PIXMAP = 4,
    SWAP_BUFFERS_EVENT = 5,
    SWAP_REGION = 6,
    SWAP_REGION_THROTTLE = 7,
    SWAP_REGION_SYNCHRONIZED = 8,
    BUFFER_AGE = 9,
    SYNC_AND_COMPLETE_EVENT = 10,
    N_FEATURES = 11,
}
export enum WinsysID {
    ANY = 0,
    STUB = 1,
    GLX = 2,
    EGL_XLIB = 3,
    EGL_NULL = 4,
    EGL_GDL = 5,
    EGL_WAYLAND = 6,
    EGL_KMS = 7,
    EGL_ANDROID = 8,
    EGL_MIR = 9,
    WGL = 10,
    SDL = 11,
}
export enum BufferAccess {
    READ = 1,
    WRITE = 2,
    READ_WRITE = 3,
}
export enum BufferBit {
    COLOR = 1,
    DEPTH = 2,
    STENCIL = 4,
}
export enum BufferMapHint {
    "" = 1,
    _RANGE = 2,
}
export enum BufferTarget {
    WINDOW_BUFFER = 2,
    OFFSCREEN_BUFFER = 4,
}
export enum ColorMask {
    NONE = 0,
    RED = 1,
    GREEN = 2,
    BLUE = 4,
    ALPHA = 8,
    ALL = 15,
}
export enum FeatureFlags {
    TEXTURE_RECTANGLE = 2,
    TEXTURE_NPOT = 4,
    TEXTURE_YUV = 8,
    TEXTURE_READ_PIXELS = 16,
    SHADERS_GLSL = 32,
    OFFSCREEN = 64,
    OFFSCREEN_MULTISAMPLE = 128,
    OFFSCREEN_BLIT = 256,
    FOUR_CLIP_PLANES = 512,
    STENCIL_BUFFER = 1024,
    VBOS = 2048,
    PBOS = 4096,
    UNSIGNED_INT_INDICES = 8192,
    DEPTH_RANGE = 16384,
    TEXTURE_NPOT_BASIC = 32768,
    TEXTURE_NPOT_MIPMAP = 65536,
    TEXTURE_NPOT_REPEAT = 131072,
    POINT_SPRITE = 262144,
    TEXTURE_3D = 524288,
    SHADERS_ARBFP = 1048576,
    MAP_BUFFER_FOR_READ = 2097152,
    MAP_BUFFER_FOR_WRITE = 4194304,
    ONSCREEN_MULTIPLE = 8388608,
    DEPTH_TEXTURE = 16777216,
}
export enum ReadPixelsFlags {
    COLOR_BUFFER = 1,
}
export enum RendererConstraint {
    USES_X11 = 1,
    USES_XLIB = 2,
    USES_EGL = 4,
    SUPPORTS_COGL_GLES2 = 8,
}
export enum TextureFlags {
    NONE = 0,
    NO_AUTO_MIPMAP = 1,
    NO_SLICING = 2,
    NO_ATLAS = 4,
}
export module AtlasTexture {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AtlasTexture extends Object {
    constructor(properties?: Partial<AtlasTexture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AtlasTexture.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static new_from_bitmap(bmp: Bitmap): AtlasTexture;
    static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): AtlasTexture;
    static new_from_file(ctx: Context, filename: string): AtlasTexture;
    static new_with_size(ctx: Context, width: number, height: number): AtlasTexture;
}
export module Attribute {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Attribute extends Object {
    constructor(properties?: Partial<Attribute.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Attribute.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](attribute_buffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType): Attribute;
    static new_const_1f(context: Context, name: string, value: number): Attribute;
    static new_const_2f(context: Context, name: string, component0: number, component1: number): Attribute;
    static new_const_2fv(context: Context, name: string, value: number): Attribute;
    static new_const_2x2fv(context: Context, name: string, matrix2x2: number, transpose: Bool): Attribute;
    static new_const_3f(context: Context, name: string, component0: number, component1: number, component2: number): Attribute;
    static new_const_3fv(context: Context, name: string, value: number): Attribute;
    static new_const_3x3fv(context: Context, name: string, matrix3x3: number, transpose: Bool): Attribute;
    static new_const_4f(context: Context, name: string, component0: number, component1: number, component2: number, component3: number): Attribute;
    static new_const_4fv(context: Context, name: string, value: number): Attribute;
    static new_const_4x4fv(context: Context, name: string, matrix4x4: number, transpose: Bool): Attribute;
    // Members
    get_buffer(): AttributeBuffer;
    get_normalized(): Bool;
    set_buffer(attribute_buffer: AttributeBuffer): void;
    set_normalized(normalized: Bool): void;
}
export module AttributeBuffer {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AttributeBuffer extends Object {
    constructor(properties?: Partial<AttributeBuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AttributeBuffer.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static new_with_size(context: Context, bytes: number): AttributeBuffer;
}
export module Bitmap {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Bitmap extends Object {
    constructor(properties?: Partial<Bitmap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Bitmap.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static new_for_data(context: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bitmap;
    static new_from_buffer(buffer: Buffer, format: PixelFormat, width: number, height: number, rowstride: number, offset: number): Bitmap;
    static new_from_file(filename: string): Bitmap;
    static new_with_size(context: Context, width: number, height: number, format: PixelFormat): Bitmap;
    // Members
    get_buffer(): PixelBuffer;
    get_format(): PixelFormat;
    get_height(): number;
    get_rowstride(): number;
    get_width(): number;
    static get_size_from_file(filename: string): [Bool, number, number];
}
export module Context {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Context extends Object {
    constructor(properties?: Partial<Context.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Context.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](display: Display | null): Context;
    // Members
    get_display(): Display;
    get_renderer(): Renderer;
}
export module Display {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Display extends Object {
    constructor(properties?: Partial<Display.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Display.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](renderer: Renderer, onscreen_template: OnscreenTemplate): Display;
    // Members
    get_renderer(): Renderer;
    set_onscreen_template(onscreen_template: OnscreenTemplate): void;
    setup(): Bool;
}
export module Fixed {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class Fixed {
    constructor(properties?: Partial<Fixed.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Fixed.ConstructorProperties>, ...args: any[]): void;
}
export module FrameInfo {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class FrameInfo extends Object {
    constructor(properties?: Partial<FrameInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FrameInfo.ConstructorProperties>, ...args: any[]): void;
    // Members
    get_frame_counter(): number;
    get_output(): Output;
    get_presentation_time(): number;
    get_refresh_rate(): number;
}
export module GLES2Context {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLES2Context extends Object {
    constructor(properties?: Partial<GLES2Context.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLES2Context.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](ctx: Context): GLES2Context;
    // Members
    get_vtable(): GLES2Vtable;
}
export module IndexBuffer {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class IndexBuffer extends Object {
    constructor(properties?: Partial<IndexBuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IndexBuffer.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](context: Context, bytes: number): IndexBuffer;
}
export module Indices {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Indices extends Object {
    constructor(properties?: Partial<Indices.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Indices.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](context: Context, type: IndicesType, indices_data: any | null, n_indices: number): Indices;
    static new_for_buffer(type: IndicesType, buffer: IndexBuffer, offset: number): Indices;
    // Members
    get_offset(): number;
    get_type(): IndicesType;
    set_offset(offset: number): void;
}
export module MatrixStack {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class MatrixStack extends Object {
    constructor(properties?: Partial<MatrixStack.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MatrixStack.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](ctx: Context): MatrixStack;
    // Members
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
    get(): [Matrix, Matrix];
    get_entry(): MatrixEntry;
    get_inverse(): [Bool, Matrix];
    load_identity(): void;
    multiply(matrix: Matrix): void;
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
    pop(): void;
    push(): void;
    rotate(angle: number, x: number, y: number, z: number): void;
    rotate_euler(euler: Euler): void;
    rotate_quaternion(quaternion: Quaternion): void;
    scale(x: number, y: number, z: number): void;
    set(matrix: Matrix): void;
    translate(x: number, y: number, z: number): void;
}
export module Object {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Object {
    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;
    // Members
    static value_get_object(value: (GObject.Value | string | boolean | number)): any | null;
    static value_set_object(value: (GObject.Value | string | boolean | number), object: any | null): void;
}
export module Onscreen {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Onscreen extends Object implements Framebuffer {
    constructor(properties?: Partial<Onscreen.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Onscreen.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](context: Context, width: number, height: number): Onscreen;
    // Members
    add_dirty_callback(callback: OnscreenDirtyCallback, destroy: UserDataDestroyCallback | null): OnscreenDirtyClosure;
    add_frame_callback(callback: FrameCallback, destroy: UserDataDestroyCallback | null): FrameClosure;
    add_resize_callback(callback: OnscreenResizeCallback, destroy: UserDataDestroyCallback | null): OnscreenResizeClosure;
    add_swap_buffers_callback(callback: SwapBuffersNotify): number;
    get_buffer_age(): number;
    get_frame_counter(): number;
    get_resizable(): Bool;
    hide(): void;
    remove_dirty_callback(closure: OnscreenDirtyClosure): void;
    remove_frame_callback(closure: FrameClosure): void;
    remove_resize_callback(closure: OnscreenResizeClosure): void;
    remove_swap_buffers_callback(id: number): void;
    set_resizable(resizable: Bool): void;
    set_swap_throttled(throttled: Bool): void;
    show(): void;
    swap_buffers(): void;
    swap_buffers_with_damage(rectangles: number, n_rectangles: number): void;
    swap_region(rectangles: number, n_rectangles: number): void;
    // Implemented Members
    allocate(): Bool;
    cancel_fence_callback(closure: FenceClosure): void;
    clear(buffers: number, color: Color): void;
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void;
    discard_buffers(buffers: number): void;
    draw_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, attributes: Attribute, n_attributes: number): void;
    draw_indexed_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, indices: Indices, attributes: Attribute, n_attributes: number): void;
    draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void;
    draw_primitive(pipeline: Pipeline, primitive: Primitive): void;
    draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void;
    draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
    draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void;
    draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
    finish(): void;
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
    get_alpha_bits(): number;
    get_blue_bits(): number;
    get_color_mask(): ColorMask;
    get_context(): Context;
    get_depth_bits(): number;
    get_depth_texture(): Texture;
    get_depth_texture_enabled(): Bool;
    get_depth_write_enabled(): Bool;
    get_dither_enabled(): Bool;
    get_green_bits(): number;
    get_height(): number;
    get_is_stereo(): Bool;
    get_modelview_matrix(): Matrix;
    get_projection_matrix(): Matrix;
    get_red_bits(): number;
    get_samples_per_pixel(): number;
    get_stereo_mode(): StereoMode;
    get_viewport4fv(): number[];
    get_viewport_height(): number;
    get_viewport_width(): number;
    get_viewport_x(): number;
    get_viewport_y(): number;
    get_width(): number;
    identity_matrix(): void;
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
    pop_clip(): void;
    pop_matrix(): void;
    push_matrix(): void;
    push_primitive_clip(primitive: Primitive, bounds_x1: number, bounds_y1: number, bounds_x2: number, bounds_y2: number): void;
    push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void;
    push_scissor_clip(x: number, y: number, width: number, height: number): void;
    read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool;
    read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool;
    resolve_samples(): void;
    resolve_samples_region(x: number, y: number, width: number, height: number): void;
    rotate(angle: number, x: number, y: number, z: number): void;
    rotate_euler(euler: Euler): void;
    rotate_quaternion(quaternion: Quaternion): void;
    scale(x: number, y: number, z: number): void;
    set_color_mask(color_mask: ColorMask): void;
    set_depth_texture_enabled(enabled: Bool): void;
    set_depth_write_enabled(depth_write_enabled: Bool): void;
    set_dither_enabled(dither_enabled: Bool): void;
    set_modelview_matrix(matrix: Matrix): void;
    set_projection_matrix(matrix: Matrix): void;
    set_samples_per_pixel(samples_per_pixel: number): void;
    set_stereo_mode(stereo_mode: StereoMode): void;
    set_viewport(x: number, y: number, width: number, height: number): void;
    transform(matrix: Matrix): void;
    translate(x: number, y: number, z: number): void;
}
export module OnscreenTemplate {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class OnscreenTemplate extends Object {
    constructor(properties?: Partial<OnscreenTemplate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<OnscreenTemplate.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](swap_chain: SwapChain): OnscreenTemplate;
    // Members
    set_samples_per_pixel(n: number): void;
    set_stereo_enabled(enabled: Bool): void;
    set_swap_throttled(throttled: Bool): void;
}
export module Output {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Output extends Object {
    constructor(properties?: Partial<Output.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Output.ConstructorProperties>, ...args: any[]): void;
    // Members
    get_height(): number;
    get_mm_height(): number;
    get_mm_width(): number;
    get_refresh_rate(): number;
    get_subpixel_order(): SubpixelOrder;
    get_width(): number;
    get_x(): number;
    get_y(): number;
}
export module Pipeline {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Pipeline extends Object {
    constructor(properties?: Partial<Pipeline.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Pipeline.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](context: Context): Pipeline;
    // Members
    add_layer_snippet(layer: number, snippet: Snippet): void;
    add_snippet(snippet: Snippet): void;
    copy(): Pipeline;
    foreach_layer(callback: PipelineLayerCallback): void;
    get_alpha_test_function(): PipelineAlphaFunc;
    get_alpha_test_reference(): number;
    get_ambient(ambient: Color): void;
    get_color(): Color;
    get_color_mask(): ColorMask;
    get_cull_face_mode(): PipelineCullFaceMode;
    get_depth_state(): DepthState;
    get_diffuse(diffuse: Color): void;
    get_emission(emission: Color): void;
    get_front_face_winding(): Winding;
    get_layer_mag_filter(layer_index: number): PipelineFilter;
    get_layer_min_filter(layer_index: number): PipelineFilter;
    get_layer_point_sprite_coords_enabled(layer_index: number): Bool;
    get_layer_texture(layer_index: number): Texture;
    get_layer_wrap_mode_p(layer_index: number): PipelineWrapMode;
    get_layer_wrap_mode_s(layer_index: number): PipelineWrapMode;
    get_layer_wrap_mode_t(layer_index: number): PipelineWrapMode;
    get_n_layers(): number;
    get_per_vertex_point_size(): Bool;
    get_point_size(): number;
    get_shininess(): number;
    get_specular(specular: Color): void;
    get_uniform_location(uniform_name: string): number;
    get_user_program(): Handle;
    remove_layer(layer_index: number): void;
    set_alpha_test_function(alpha_func: PipelineAlphaFunc, alpha_reference: number): void;
    set_ambient(ambient: Color): void;
    set_ambient_and_diffuse(color: Color): void;
    set_blend(blend_string: string): Bool;
    set_blend_constant(constant_color: Color): void;
    set_color(color: Color): void;
    set_color4f(red: number, green: number, blue: number, alpha: number): void;
    set_color4ub(red: number, green: number, blue: number, alpha: number): void;
    set_color_mask(color_mask: ColorMask): void;
    set_cull_face_mode(cull_face_mode: PipelineCullFaceMode): void;
    set_depth_state(state: DepthState): Bool;
    set_diffuse(diffuse: Color): void;
    set_emission(emission: Color): void;
    set_front_face_winding(front_winding: Winding): void;
    set_layer_combine(layer_index: number, blend_string: string): Bool;
    set_layer_combine_constant(layer_index: number, constant: Color): void;
    set_layer_filters(layer_index: number, min_filter: PipelineFilter, mag_filter: PipelineFilter): void;
    set_layer_matrix(layer_index: number, matrix: Matrix): void;
    set_layer_null_texture(layer_index: number, texture_type: TextureType): void;
    set_layer_point_sprite_coords_enabled(layer_index: number, enable: Bool): Bool;
    set_layer_texture(layer_index: number, texture: Texture): void;
    set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode): void;
    set_layer_wrap_mode_p(layer_index: number, mode: PipelineWrapMode): void;
    set_layer_wrap_mode_s(layer_index: number, mode: PipelineWrapMode): void;
    set_layer_wrap_mode_t(layer_index: number, mode: PipelineWrapMode): void;
    set_per_vertex_point_size(enable: Bool): Bool;
    set_point_size(point_size: number): void;
    set_shininess(shininess: number): void;
    set_specular(specular: Color): void;
    set_uniform_1f(uniform_location: number, value: number): void;
    set_uniform_1i(uniform_location: number, value: number): void;
    set_uniform_float(uniform_location: number, n_components: number, count: number, value: number): void;
    set_uniform_int(uniform_location: number, n_components: number, count: number, value: number): void;
    set_uniform_matrix(uniform_location: number, dimensions: number, count: number, transpose: Bool, value: number): void;
    set_user_program(program: Handle): void;
}
export module PixelBuffer {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PixelBuffer extends Object {
    constructor(properties?: Partial<PixelBuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PixelBuffer.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](context: Context, size: number, data: any | null): PixelBuffer;
}
export module Primitive {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Primitive extends Object {
    constructor(properties?: Partial<Primitive.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Primitive.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static new_p2(context: Context, mode: VerticesMode, data: VertexP2[]): Primitive;
    static new_p2c4(context: Context, mode: VerticesMode, data: VertexP2C4[]): Primitive;
    static new_p2t2(context: Context, mode: VerticesMode, data: VertexP2T2[]): Primitive;
    static new_p2t2c4(context: Context, mode: VerticesMode, data: VertexP2T2C4[]): Primitive;
    static new_p3(context: Context, mode: VerticesMode, data: VertexP3[]): Primitive;
    static new_p3c4(context: Context, mode: VerticesMode, data: VertexP3C4[]): Primitive;
    static new_p3t2(context: Context, mode: VerticesMode, data: VertexP3T2[]): Primitive;
    static new_p3t2c4(context: Context, mode: VerticesMode, data: VertexP3T2C4[]): Primitive;
    static new_with_attributes(mode: VerticesMode, n_vertices: number, attributes: Attribute, n_attributes: number): Primitive;
    // Members
    copy(): Primitive;
    draw(framebuffer: Framebuffer, pipeline: Pipeline): void;
    foreach_attribute(callback: PrimitiveAttributeCallback): void;
    get_first_vertex(): number;
    get_indices(): Indices;
    get_mode(): VerticesMode;
    get_n_vertices(): number;
    set_attributes(attributes: Attribute, n_attributes: number): void;
    set_first_vertex(first_vertex: number): void;
    set_indices(indices: Indices, n_indices: number): void;
    set_mode(mode: VerticesMode): void;
    set_n_vertices(n_vertices: number): void;
    static texture_set_auto_mipmap(primitive_texture: PrimitiveTexture, value: Bool): void;
}
export module Renderer {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Renderer extends Object {
    constructor(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): Renderer;
    // Members
    add_constraint(constraint: RendererConstraint): void;
    check_onscreen_template(onscreen_template: OnscreenTemplate): Bool;
    connect(): Bool;
    foreach_output(callback: OutputCallback): void;
    get_driver(): Driver;
    get_n_fragment_texture_units(): number;
    get_winsys_id(): WinsysID;
    remove_constraint(constraint: RendererConstraint): void;
    set_driver(driver: Driver): void;
    set_winsys_id(winsys_id: WinsysID): void;
}
export module Snippet {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Snippet extends Object {
    constructor(properties?: Partial<Snippet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Snippet.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](hook: SnippetHook, declarations: string, post: string): Snippet;
    // Members
    get_declarations(): string;
    get_hook(): SnippetHook;
    get_post(): string;
    get_pre(): string;
    get_replace(): string;
    set_declarations(declarations: string): void;
    set_post(post: string): void;
    set_pre(pre: string): void;
    set_replace(replace: string): void;
}
export module SubTexture {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SubTexture extends Object {
    constructor(properties?: Partial<SubTexture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SubTexture.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](ctx: Context, parent_texture: Texture, sub_x: number, sub_y: number, sub_width: number, sub_height: number): SubTexture;
    // Members
    get_parent(): Texture;
}
export module SwapChain {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SwapChain extends Object {
    constructor(properties?: Partial<SwapChain.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SwapChain.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): SwapChain;
    // Members
    set_has_alpha(has_alpha: Bool): void;
    set_length(length: number): void;
}
export module Texture2D {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Texture2D extends Object implements Texture {
    constructor(properties?: Partial<Texture2D.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Texture2D.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static gl_new_from_foreign(ctx: Context, gl_handle: number, width: number, height: number, format: PixelFormat): Texture2D;
    static new_from_bitmap(bitmap: Bitmap): Texture2D;
    static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Texture2D;
    static new_from_file(ctx: Context, filename: string): Texture2D;
    static new_with_size(ctx: Context, width: number, height: number): Texture2D;
    // Implemented Members
    allocate(): Bool;
    get_components(): TextureComponents;
    get_data(format: PixelFormat, rowstride: number, data: number): number;
    get_gl_texture(): [Bool, number | null, number | null];
    get_height(): number;
    get_max_waste(): number;
    get_premultiplied(): Bool;
    get_width(): number;
    is_sliced(): Bool;
    set_components(components: TextureComponents): void;
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool;
    set_premultiplied(premultiplied: Bool): void;
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool;
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool;
}
export module Texture2DSliced {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Texture2DSliced extends Object implements Texture {
    constructor(properties?: Partial<Texture2DSliced.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Texture2DSliced.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced;
    static new_from_data(ctx: Context, width: number, height: number, max_waste: number, format: PixelFormat, rowstride: number, data: number): Texture2DSliced;
    static new_from_file(ctx: Context, filename: string, max_waste: number): Texture2DSliced;
    static new_with_size(ctx: Context, width: number, height: number, max_waste: number): Texture2DSliced;
    // Implemented Members
    allocate(): Bool;
    get_components(): TextureComponents;
    get_data(format: PixelFormat, rowstride: number, data: number): number;
    get_gl_texture(): [Bool, number | null, number | null];
    get_height(): number;
    get_max_waste(): number;
    get_premultiplied(): Bool;
    get_width(): number;
    is_sliced(): Bool;
    set_components(components: TextureComponents): void;
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool;
    set_premultiplied(premultiplied: Bool): void;
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool;
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool;
}
export module Texture3D {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Texture3D extends Object implements Texture {
    constructor(properties?: Partial<Texture3D.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Texture3D.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static new_from_bitmap(bitmap: Bitmap, height: number, depth: number): Texture3D;
    static new_from_data(context: Context, width: number, height: number, depth: number, format: PixelFormat, rowstride: number, image_stride: number, data: number): Texture3D;
    static new_with_size(context: Context, width: number, height: number, depth: number): Texture3D;
    // Implemented Members
    allocate(): Bool;
    get_components(): TextureComponents;
    get_data(format: PixelFormat, rowstride: number, data: number): number;
    get_gl_texture(): [Bool, number | null, number | null];
    get_height(): number;
    get_max_waste(): number;
    get_premultiplied(): Bool;
    get_width(): number;
    is_sliced(): Bool;
    set_components(components: TextureComponents): void;
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool;
    set_premultiplied(premultiplied: Bool): void;
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool;
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool;
}
export module TexturePixmapX11 {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TexturePixmapX11 extends Object {
    constructor(properties?: Partial<TexturePixmapX11.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TexturePixmapX11.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11;
    static new_left(context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11;
    // Members
    is_using_tfp_extension(): Bool;
    set_damage_object(damage: number, report_level: TexturePixmapX11ReportLevel): void;
    update_area(x: number, y: number, width: number, height: number): void;
    static error_quark(): number;
}
export module TextureRectangle {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextureRectangle extends Object implements Texture {
    constructor(properties?: Partial<TextureRectangle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextureRectangle.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static new_from_bitmap(bitmap: Bitmap): TextureRectangle;
    static new_from_foreign(ctx: Context, gl_handle: number, width: number, height: number, format: PixelFormat): TextureRectangle;
    static new_with_size(ctx: Context, width: number, height: number): TextureRectangle;
    // Implemented Members
    allocate(): Bool;
    get_components(): TextureComponents;
    get_data(format: PixelFormat, rowstride: number, data: number): number;
    get_gl_texture(): [Bool, number | null, number | null];
    get_height(): number;
    get_max_waste(): number;
    get_premultiplied(): Bool;
    get_width(): number;
    is_sliced(): Bool;
    set_components(components: TextureComponents): void;
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool;
    set_premultiplied(premultiplied: Bool): void;
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool;
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool;
}
export class Color {
    constructor();
    constructor(copy: Color);
    // Fields
    private_member_red: number;
    private_member_green: number;
    private_member_blue: number;
    private_member_alpha: number;
    private_member_padding0: number;
    private_member_padding1: number;
    private_member_padding2: number;
    // Constructors
    static ["new"](): Color;
    // Members
    copy(): Color;
    free(): void;
    get_alpha(): number;
    get_alpha_byte(): number;
    get_alpha_float(): number;
    get_blue(): number;
    get_blue_byte(): number;
    get_blue_float(): number;
    get_green(): number;
    get_green_byte(): number;
    get_green_float(): number;
    get_red(): number;
    get_red_byte(): number;
    get_red_float(): number;
    init_from_4f(red: number, green: number, blue: number, alpha: number): void;
    init_from_4fv(color_array: number): void;
    init_from_4ub(red: number, green: number, blue: number, alpha: number): void;
    premultiply(): void;
    set_alpha(alpha: number): void;
    set_alpha_byte(alpha: number): void;
    set_alpha_float(alpha: number): void;
    set_blue(blue: number): void;
    set_blue_byte(blue: number): void;
    set_blue_float(blue: number): void;
    set_from_4f(red: number, green: number, blue: number, alpha: number): void;
    set_from_4ub(red: number, green: number, blue: number, alpha: number): void;
    set_green(green: number): void;
    set_green_byte(green: number): void;
    set_green_float(green: number): void;
    set_red(red: number): void;
    set_red_byte(red: number): void;
    set_red_float(red: number): void;
    to_hsl(): [number, number, number];
    unpremultiply(): void;
    static equal(v1: any | null, v2: any | null): Bool;
    static init_from_hsl(hue: number, saturation: number, luminance: number): Color;
}
export class DebugObjectTypeInfo {
    constructor(properties?: {
        name?: string;
        instance_count?: number;
    });
    constructor(copy: DebugObjectTypeInfo);
    // Fields
    name: string;
    instance_count: number;
}
export class DepthState {
    constructor(copy: DepthState);
    // Fields
    private_member_magic: number;
    private_member_test_enabled: Bool;
    private_member_test_function: DepthTestFunction;
    private_member_write_enabled: Bool;
    private_member_range_near: number;
    private_member_range_far: number;
    private_member_padding0: number;
    private_member_padding1: number;
    private_member_padding2: number;
    private_member_padding3: number;
    private_member_padding4: number;
    private_member_padding5: number;
    private_member_padding6: number;
    private_member_padding7: number;
    private_member_padding8: number;
    private_member_padding9: number;
    // Members
    get_range(near_val: number, far_val: number): void;
    get_test_enabled(): Bool;
    get_test_function(): DepthTestFunction;
    get_write_enabled(): Bool;
    init(): void;
    set_range(near_val: number, far_val: number): void;
    set_test_enabled(enable: Bool): void;
    set_test_function(_function: DepthTestFunction): void;
    set_write_enabled(enable: Bool): void;
}
export class Euler {
    constructor(properties?: {
        heading?: number;
        pitch?: number;
        roll?: number;
        padding0?: number;
        padding1?: number;
        padding2?: number;
        padding3?: number;
        padding4?: number;
    });
    constructor(copy: Euler);
    // Fields
    heading: number;
    pitch: number;
    roll: number;
    padding0: number;
    padding1: number;
    padding2: number;
    padding3: number;
    padding4: number;
    // Members
    copy(): Euler;
    free(): void;
    init(heading: number, pitch: number, roll: number): void;
    init_from_matrix(matrix: Matrix): void;
    init_from_quaternion(quaternion: Quaternion): void;
    static equal(v1: any | null, v2: any | null): Bool;
}
export class Fence {
    constructor(copy: Fence);
}
export class FenceClosure {
    constructor(copy: FenceClosure);
    // Members
    get_user_data(): any | null;
}
export class FrameClosure {
    constructor(copy: FrameClosure);
}
export class GLES2Vtable {
    constructor(copy: GLES2Vtable);
}
export class GtypeClass {
    constructor(properties?: {
        base_class?: GObject.TypeClass;
        dummy?: number;
    });
    constructor(copy: GtypeClass);
    // Fields
    base_class: GObject.TypeClass;
    dummy: number;
}
export class GtypeObject {
    constructor(properties?: {
        dummy?: number;
    });
    constructor(copy: GtypeObject);
    // Fields
    dummy: number;
}
export class KmsCrtc {
    constructor(copy: KmsCrtc);
    // Fields
    id: number;
    x: number;
    y: number;
    connectors: number;
    count: number;
    ignore: Bool;
}
export class Matrix {
    constructor(properties?: {
        xx?: number;
        yx?: number;
        zx?: number;
        wx?: number;
        xy?: number;
        yy?: number;
        zy?: number;
        wy?: number;
        xz?: number;
        yz?: number;
        zz?: number;
        wz?: number;
        xw?: number;
        yw?: number;
        zw?: number;
        ww?: number;
        private_member_inv?: number[];
        private_member_type?: number;
        private_member_flags?: number;
        private_member__padding3?: number;
    });
    constructor(copy: Matrix);
    // Fields
    xx: number;
    yx: number;
    zx: number;
    wx: number;
    xy: number;
    yy: number;
    zy: number;
    wy: number;
    xz: number;
    yz: number;
    zz: number;
    wz: number;
    xw: number;
    yw: number;
    zw: number;
    ww: number;
    private_member_inv: number[];
    private_member_type: number;
    private_member_flags: number;
    private_member__padding3: number;
    // Members
    copy(): Matrix;
    free(): void;
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
    get_array(): number;
    get_inverse(): [Bool, Matrix];
    init_from_array(array: number): void;
    init_from_euler(euler: Euler): void;
    init_from_quaternion(quaternion: Quaternion): void;
    init_identity(): void;
    init_translation(tx: number, ty: number, tz: number): void;
    is_identity(): Bool;
    look_at(eye_position_x: number, eye_position_y: number, eye_position_z: number, object_x: number, object_y: number, object_z: number, world_up_x: number, world_up_y: number, world_up_z: number): void;
    multiply(a: Matrix, b: Matrix): void;
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
    project_points(n_components: number, stride_in: number, points_in: any | null, stride_out: number, points_out: any | null, n_points: number): void;
    rotate(angle: number, x: number, y: number, z: number): void;
    rotate_euler(euler: Euler): void;
    rotate_quaternion(quaternion: Quaternion): void;
    scale(sx: number, sy: number, sz: number): void;
    transform_point(x: number, y: number, z: number, w: number): [number, number, number, number];
    transform_points(n_components: number, stride_in: number, points_in: any | null, stride_out: number, points_out: any | null, n_points: number): void;
    translate(x: number, y: number, z: number): void;
    transpose(): void;
    view_2d_in_frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void;
    view_2d_in_perspective(fov_y: number, aspect: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void;
    static equal(v1: any | null, v2: any | null): Bool;
}
export class MatrixEntry {
    constructor(copy: MatrixEntry);
    // Members
    calculate_translation(entry1: MatrixEntry): [Bool, number, number, number];
    equal(entry1: MatrixEntry): Bool;
    get(): [Matrix, Matrix];
    is_identity(): Bool;
    ref(): MatrixEntry;
    unref(): void;
}
export class OnscreenDirtyClosure {
    constructor(copy: OnscreenDirtyClosure);
}
export class OnscreenDirtyInfo {
    constructor(properties?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    });
    constructor(copy: OnscreenDirtyInfo);
    // Fields
    x: number;
    y: number;
    width: number;
    height: number;
}
export class OnscreenResizeClosure {
    constructor(copy: OnscreenResizeClosure);
}
export class PollFD {
    constructor(properties?: {
        fd?: number;
    });
    constructor(copy: PollFD);
    // Fields
    fd: number;
}
export class Quaternion {
    constructor(properties?: {
        w?: number;
        x?: number;
        y?: number;
        z?: number;
        padding0?: number;
        padding1?: number;
        padding2?: number;
        padding3?: number;
    });
    constructor(copy: Quaternion);
    // Fields
    w: number;
    x: number;
    y: number;
    z: number;
    padding0: number;
    padding1: number;
    padding2: number;
    padding3: number;
    // Members
    copy(): Quaternion;
    dot_product(b: Quaternion): number;
    free(): void;
    get_rotation_angle(): number;
    get_rotation_axis(): number;
    init(angle: number, x: number, y: number, z: number): void;
    init_from_angle_vector(angle: number, axis3f: number): void;
    init_from_array(array: number): void;
    init_from_euler(euler: Euler): void;
    init_from_matrix(matrix: Matrix): void;
    init_from_quaternion(src: Quaternion): void;
    init_from_x_rotation(angle: number): void;
    init_from_y_rotation(angle: number): void;
    init_from_z_rotation(angle: number): void;
    init_identity(): void;
    invert(): void;
    multiply(left: Quaternion, right: Quaternion): void;
    nlerp(a: Quaternion, b: Quaternion, t: number): void;
    normalize(): void;
    pow(exponent: number): void;
    slerp(a: Quaternion, b: Quaternion, t: number): void;
    squad(prev: Quaternion, a: Quaternion, b: Quaternion, next: Quaternion, t: number): void;
    static equal(v1: any | null, v2: any | null): Bool;
}
export class TextureVertex {
    constructor(properties?: {
        x?: number;
        y?: number;
        z?: number;
        tx?: number;
        ty?: number;
        color?: Color;
    });
    constructor(copy: TextureVertex);
    // Fields
    x: number;
    y: number;
    z: number;
    tx: number;
    ty: number;
    color: Color;
}
export class UserDataKey {
    constructor(properties?: {
        unused?: number;
    });
    constructor(copy: UserDataKey);
    // Fields
    unused: number;
}
export class VertexP2 {
    constructor(properties?: {
        x?: number;
        y?: number;
    });
    constructor(copy: VertexP2);
    // Fields
    x: number;
    y: number;
}
export class VertexP2C4 {
    constructor(properties?: {
        x?: number;
        y?: number;
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    });
    constructor(copy: VertexP2C4);
    // Fields
    x: number;
    y: number;
    r: number;
    g: number;
    b: number;
    a: number;
}
export class VertexP2T2 {
    constructor(properties?: {
        x?: number;
        y?: number;
        s?: number;
        t?: number;
    });
    constructor(copy: VertexP2T2);
    // Fields
    x: number;
    y: number;
    s: number;
    t: number;
}
export class VertexP2T2C4 {
    constructor(properties?: {
        x?: number;
        y?: number;
        s?: number;
        t?: number;
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    });
    constructor(copy: VertexP2T2C4);
    // Fields
    x: number;
    y: number;
    s: number;
    t: number;
    r: number;
    g: number;
    b: number;
    a: number;
}
export class VertexP3 {
    constructor(properties?: {
        x?: number;
        y?: number;
        z?: number;
    });
    constructor(copy: VertexP3);
    // Fields
    x: number;
    y: number;
    z: number;
}
export class VertexP3C4 {
    constructor(properties?: {
        x?: number;
        y?: number;
        z?: number;
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    });
    constructor(copy: VertexP3C4);
    // Fields
    x: number;
    y: number;
    z: number;
    r: number;
    g: number;
    b: number;
    a: number;
}
export class VertexP3T2 {
    constructor(properties?: {
        x?: number;
        y?: number;
        z?: number;
        s?: number;
        t?: number;
    });
    constructor(copy: VertexP3T2);
    // Fields
    x: number;
    y: number;
    z: number;
    s: number;
    t: number;
}
export class VertexP3T2C4 {
    constructor(properties?: {
        x?: number;
        y?: number;
        z?: number;
        s?: number;
        t?: number;
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    });
    constructor(copy: VertexP3T2C4);
    // Fields
    x: number;
    y: number;
    z: number;
    s: number;
    t: number;
    r: number;
    g: number;
    b: number;
    a: number;
}
export interface FramebufferNamespace {
    error_quark(): number;
}
export interface Framebuffer extends Object {
    // Members
    allocate(): Bool;
    cancel_fence_callback(closure: FenceClosure): void;
    clear(buffers: number, color: Color): void;
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void;
    discard_buffers(buffers: number): void;
    draw_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, attributes: Attribute, n_attributes: number): void;
    draw_indexed_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, indices: Indices, attributes: Attribute, n_attributes: number): void;
    draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void;
    draw_primitive(pipeline: Pipeline, primitive: Primitive): void;
    draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void;
    draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
    draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void;
    draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
    finish(): void;
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
    get_alpha_bits(): number;
    get_blue_bits(): number;
    get_color_mask(): ColorMask;
    get_context(): Context;
    get_depth_bits(): number;
    get_depth_texture(): Texture;
    get_depth_texture_enabled(): Bool;
    get_depth_write_enabled(): Bool;
    get_dither_enabled(): Bool;
    get_green_bits(): number;
    get_height(): number;
    get_is_stereo(): Bool;
    get_modelview_matrix(): Matrix;
    get_projection_matrix(): Matrix;
    get_red_bits(): number;
    get_samples_per_pixel(): number;
    get_stereo_mode(): StereoMode;
    get_viewport4fv(): number[];
    get_viewport_height(): number;
    get_viewport_width(): number;
    get_viewport_x(): number;
    get_viewport_y(): number;
    get_width(): number;
    identity_matrix(): void;
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
    pop_clip(): void;
    pop_matrix(): void;
    push_matrix(): void;
    push_primitive_clip(primitive: Primitive, bounds_x1: number, bounds_y1: number, bounds_x2: number, bounds_y2: number): void;
    push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void;
    push_scissor_clip(x: number, y: number, width: number, height: number): void;
    read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool;
    read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool;
    resolve_samples(): void;
    resolve_samples_region(x: number, y: number, width: number, height: number): void;
    rotate(angle: number, x: number, y: number, z: number): void;
    rotate_euler(euler: Euler): void;
    rotate_quaternion(quaternion: Quaternion): void;
    scale(x: number, y: number, z: number): void;
    set_color_mask(color_mask: ColorMask): void;
    set_depth_texture_enabled(enabled: Bool): void;
    set_depth_write_enabled(depth_write_enabled: Bool): void;
    set_dither_enabled(dither_enabled: Bool): void;
    set_modelview_matrix(matrix: Matrix): void;
    set_projection_matrix(matrix: Matrix): void;
    set_samples_per_pixel(samples_per_pixel: number): void;
    set_stereo_mode(stereo_mode: StereoMode): void;
    set_viewport(x: number, y: number, width: number, height: number): void;
    transform(matrix: Matrix): void;
    translate(x: number, y: number, z: number): void;
}

export const Framebuffer: FramebufferNamespace;
export interface Texture extends Object {
    // Members
    allocate(): Bool;
    get_components(): TextureComponents;
    get_data(format: PixelFormat, rowstride: number, data: number): number;
    get_gl_texture(): [Bool, number | null, number | null];
    get_height(): number;
    get_max_waste(): number;
    get_premultiplied(): Bool;
    get_width(): number;
    is_sliced(): Bool;
    set_components(components: TextureComponents): void;
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool;
    set_premultiplied(premultiplied: Bool): void;
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool;
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool;
}

export type Angle = number;

export type Bool = number;

export type Buffer = void;

export type Handle = any;

export type MetaTexture = void;

export type PrimitiveTexture = void;

export type UserDataDestroyCallback = GLib.DestroyNotify;