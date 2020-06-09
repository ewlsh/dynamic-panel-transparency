

/**
 * cairo
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
type GType = object;

export function image_surface_create(): void;
export enum Status {
    SUCCESS = 0,
    NO_MEMORY = 1,
    INVALID_RESTORE = 2,
    INVALID_POP_GROUP = 3,
    NO_CURRENT_POINT = 4,
    INVALID_MATRIX = 5,
    INVALID_STATUS = 6,
    NULL_POINTER = 7,
    INVALID_STRING = 8,
    INVALID_PATH_DATA = 9,
    READ_ERROR = 10,
    WRITE_ERROR = 11,
    SURFACE_FINISHED = 12,
    SURFACE_TYPE_MISMATCH = 13,
    PATTERN_TYPE_MISMATCH = 14,
    INVALID_CONTENT = 15,
    INVALID_FORMAT = 16,
    INVALID_VISUAL = 17,
    FILE_NOT_FOUND = 18,
    INVALID_DASH = 19,
    INVALID_DSC_COMMENT = 20,
    INVALID_INDEX = 21,
    CLIP_NOT_REPRESENTABLE = 22,
    TEMP_FILE_ERROR = 23,
    INVALID_STRIDE = 24,
    FONT_TYPE_MISMATCH = 25,
    USER_FONT_IMMUTABLE = 26,
    USER_FONT_ERROR = 27,
    NEGATIVE_COUNT = 28,
    INVALID_CLUSTERS = 29,
    INVALID_SLANT = 30,
    INVALID_WEIGHT = 31,
    INVALID_SIZE = 32,
    USER_FONT_NOT_IMPLEMENTED = 33,
    DEVICE_TYPE_MISMATCH = 34,
    DEVICE_ERROR = 35,
    INVALID_MESH_CONSTRUCTION = 36,
    DEVICE_FINISHED = 37,
    JBIG2_GLOBAL_MISSING = 38,
}
export enum Content {
    COLOR = 4096,
    ALPHA = 8192,
    COLOR_ALPHA = 12288,
}
export enum Operator {
    CLEAR = 0,
    SOURCE = 1,
    OVER = 2,
    IN = 3,
    OUT = 4,
    ATOP = 5,
    DEST = 6,
    DEST_OVER = 7,
    DEST_IN = 8,
    DEST_OUT = 9,
    DEST_ATOP = 10,
    XOR = 11,
    ADD = 12,
    SATURATE = 13,
    MULTIPLY = 14,
    SCREEN = 15,
    OVERLAY = 16,
    DARKEN = 17,
    LIGHTEN = 18,
    COLOR_DODGE = 19,
    COLOR_BURN = 20,
    HARD_LIGHT = 21,
    SOFT_LIGHT = 22,
    DIFFERENCE = 23,
    EXCLUSION = 24,
    HSL_HUE = 25,
    HSL_SATURATION = 26,
    HSL_COLOR = 27,
    HSL_LUMINOSITY = 28,
}
export enum Antialias {
    DEFAULT = 0,
    NONE = 1,
    GRAY = 2,
    SUBPIXEL = 3,
    FAST = 4,
    GOOD = 5,
    BEST = 6,
}
export enum FillRule {
    WINDING = 0,
    EVEN_ODD = 1,
}
export enum LineCap {
    BUTT = 0,
    ROUND = 1,
    SQUARE = 2,
}
export enum LineJoin {
    MITER = 0,
    ROUND = 1,
    BEVEL = 2,
}
export enum TextClusterFlags {
    BACKWARD = 1,
}
export enum FontSlant {
    NORMAL = 0,
    ITALIC = 1,
    OBLIQUE = 2,
}
export enum FontWeight {
    NORMAL = 0,
    BOLD = 1,
}
export enum SubpixelOrder {
    DEFAULT = 0,
    RGB = 1,
    BGR = 2,
    VRGB = 3,
    VBGR = 4,
}
export enum HintStyle {
    DEFAULT = 0,
    NONE = 1,
    SLIGHT = 2,
    MEDIUM = 3,
    FULL = 4,
}
export enum HintMetrics {
    DEFAULT = 0,
    OFF = 1,
    ON = 2,
}
export enum FontType {
    TOY = 0,
    FT = 1,
    WIN32 = 2,
    QUARTZ = 3,
    USER = 4,
}
export enum PathDataType {
    MOVE_TO = 0,
    LINE_TO = 1,
    CURVE_TO = 2,
    CLOSE_PATH = 3,
}
export enum DeviceType {
    DRM = 0,
    GL = 1,
    SCRIPT = 2,
    XCB = 3,
    XLIB = 4,
    XML = 5,
    COGL = 6,
    WIN32 = 7,
    INVALID = -1,
}
export enum SurfaceType {
    IMAGE = 0,
    PDF = 1,
    PS = 2,
    XLIB = 3,
    XCB = 4,
    GLITZ = 5,
    QUARTZ = 6,
    WIN32 = 7,
    BEOS = 8,
    DIRECTFB = 9,
    SVG = 10,
    OS2 = 11,
    WIN32_PRINTING = 12,
    QUARTZ_IMAGE = 13,
    SCRIPT = 14,
    QT = 15,
    RECORDING = 16,
    VG = 17,
    GL = 18,
    DRM = 19,
    TEE = 20,
    XML = 21,
    SKIA = 22,
    SUBSURFACE = 23,
    COGL = 24,
}
export enum Format {
    INVALID = -1,
    ARGB32 = 0,
    RGB24 = 1,
    A8 = 2,
    A1 = 3,
    RGB16_565 = 4,
    RGB30 = 5,
}
export enum PatternType {
    SOLID = 0,
    SURFACE = 1,
    LINEAR = 2,
    RADIAL = 3,
    MESH = 4,
    RASTER_SOURCE = 5,
}
export enum Extend {
    NONE = 0,
    REPEAT = 1,
    REFLECT = 2,
    PAD = 3,
}
export enum Filter {
    FAST = 0,
    GOOD = 1,
    BEST = 2,
    NEAREST = 3,
    BILINEAR = 4,
    GAUSSIAN = 5,
}
export enum RegionOverlap {
    IN = 0,
    OUT = 1,
    PART = 2,
}
export class Context {
    constructor(copy: Context);
}
export class Device {
    constructor(copy: Device);
}
export class Surface {
    constructor(copy: Surface);
}
export class Matrix {
    constructor(copy: Matrix);
}
export class Pattern {
    constructor(copy: Pattern);
}
export class Region {
    constructor(copy: Region);
}
export class FontOptions {
    constructor(copy: FontOptions);
}
export class FontFace {
    constructor(copy: FontFace);
}
export class ScaledFont {
    constructor(copy: ScaledFont);
}
export class Path {
    constructor(copy: Path);
}
export class Rectangle {
    constructor(copy: Rectangle);
    // Fields
    x: number;
    y: number;
    width: number;
    height: number;
}
export class RectangleInt {
    constructor(copy: RectangleInt);
    // Fields
    x: number;
    y: number;
    width: number;
    height: number;
}