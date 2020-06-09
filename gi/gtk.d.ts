

/**
 * Gtk
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Atk from "atk";
import * as Gdk from "gdk";
import * as xlib from "xlib";
import * as cairo from "cairo";
import * as GdkPixbuf from "gdkpixbuf";
import * as Pango from "pango";
type GType = object;

export const BINARY_AGE: number;

export const INPUT_ERROR: number;

export const INTERFACE_AGE: number;

export const LEVEL_BAR_OFFSET_FULL: string;

export const LEVEL_BAR_OFFSET_HIGH: string;

export const LEVEL_BAR_OFFSET_LOW: string;

export const MAJOR_VERSION: number;

export const MAX_COMPOSE_LEN: number;

export const MICRO_VERSION: number;

export const MINOR_VERSION: number;

export const PAPER_NAME_A3: string;

export const PAPER_NAME_A4: string;

export const PAPER_NAME_A5: string;

export const PAPER_NAME_B5: string;

export const PAPER_NAME_EXECUTIVE: string;

export const PAPER_NAME_LEGAL: string;

export const PAPER_NAME_LETTER: string;

export const PATH_PRIO_MASK: number;

export const PRINT_SETTINGS_COLLATE: string;

export const PRINT_SETTINGS_DEFAULT_SOURCE: string;

export const PRINT_SETTINGS_DITHER: string;

export const PRINT_SETTINGS_DUPLEX: string;

export const PRINT_SETTINGS_FINISHINGS: string;

export const PRINT_SETTINGS_MEDIA_TYPE: string;

export const PRINT_SETTINGS_NUMBER_UP: string;

export const PRINT_SETTINGS_NUMBER_UP_LAYOUT: string;

export const PRINT_SETTINGS_N_COPIES: string;

export const PRINT_SETTINGS_ORIENTATION: string;

export const PRINT_SETTINGS_OUTPUT_BASENAME: string;

export const PRINT_SETTINGS_OUTPUT_BIN: string;

export const PRINT_SETTINGS_OUTPUT_DIR: string;

export const PRINT_SETTINGS_OUTPUT_FILE_FORMAT: string;

export const PRINT_SETTINGS_OUTPUT_URI: string;

export const PRINT_SETTINGS_PAGE_RANGES: string;

export const PRINT_SETTINGS_PAGE_SET: string;

export const PRINT_SETTINGS_PAPER_FORMAT: string;

export const PRINT_SETTINGS_PAPER_HEIGHT: string;

export const PRINT_SETTINGS_PAPER_WIDTH: string;

export const PRINT_SETTINGS_PRINTER: string;

export const PRINT_SETTINGS_PRINTER_LPI: string;

export const PRINT_SETTINGS_PRINT_PAGES: string;

export const PRINT_SETTINGS_QUALITY: string;

export const PRINT_SETTINGS_RESOLUTION: string;

export const PRINT_SETTINGS_RESOLUTION_X: string;

export const PRINT_SETTINGS_RESOLUTION_Y: string;

export const PRINT_SETTINGS_REVERSE: string;

export const PRINT_SETTINGS_SCALE: string;

export const PRINT_SETTINGS_USE_COLOR: string;

export const PRINT_SETTINGS_WIN32_DRIVER_EXTRA: string;

export const PRINT_SETTINGS_WIN32_DRIVER_VERSION: string;

export const PRIORITY_RESIZE: number;

export const STOCK_ABOUT: string;

export const STOCK_ADD: string;

export const STOCK_APPLY: string;

export const STOCK_BOLD: string;

export const STOCK_CANCEL: string;

export const STOCK_CAPS_LOCK_WARNING: string;

export const STOCK_CDROM: string;

export const STOCK_CLEAR: string;

export const STOCK_CLOSE: string;

export const STOCK_COLOR_PICKER: string;

export const STOCK_CONNECT: string;

export const STOCK_CONVERT: string;

export const STOCK_COPY: string;

export const STOCK_CUT: string;

export const STOCK_DELETE: string;

export const STOCK_DIALOG_AUTHENTICATION: string;

export const STOCK_DIALOG_ERROR: string;

export const STOCK_DIALOG_INFO: string;

export const STOCK_DIALOG_QUESTION: string;

export const STOCK_DIALOG_WARNING: string;

export const STOCK_DIRECTORY: string;

export const STOCK_DISCARD: string;

export const STOCK_DISCONNECT: string;

export const STOCK_DND: string;

export const STOCK_DND_MULTIPLE: string;

export const STOCK_EDIT: string;

export const STOCK_EXECUTE: string;

export const STOCK_FILE: string;

export const STOCK_FIND: string;

export const STOCK_FIND_AND_REPLACE: string;

export const STOCK_FLOPPY: string;

export const STOCK_FULLSCREEN: string;

export const STOCK_GOTO_BOTTOM: string;

export const STOCK_GOTO_FIRST: string;

export const STOCK_GOTO_LAST: string;

export const STOCK_GOTO_TOP: string;

export const STOCK_GO_BACK: string;

export const STOCK_GO_DOWN: string;

export const STOCK_GO_FORWARD: string;

export const STOCK_GO_UP: string;

export const STOCK_HARDDISK: string;

export const STOCK_HELP: string;

export const STOCK_HOME: string;

export const STOCK_INDENT: string;

export const STOCK_INDEX: string;

export const STOCK_INFO: string;

export const STOCK_ITALIC: string;

export const STOCK_JUMP_TO: string;

export const STOCK_JUSTIFY_CENTER: string;

export const STOCK_JUSTIFY_FILL: string;

export const STOCK_JUSTIFY_LEFT: string;

export const STOCK_JUSTIFY_RIGHT: string;

export const STOCK_LEAVE_FULLSCREEN: string;

export const STOCK_MEDIA_FORWARD: string;

export const STOCK_MEDIA_NEXT: string;

export const STOCK_MEDIA_PAUSE: string;

export const STOCK_MEDIA_PLAY: string;

export const STOCK_MEDIA_PREVIOUS: string;

export const STOCK_MEDIA_RECORD: string;

export const STOCK_MEDIA_REWIND: string;

export const STOCK_MEDIA_STOP: string;

export const STOCK_MISSING_IMAGE: string;

export const STOCK_NETWORK: string;

export const STOCK_NEW: string;

export const STOCK_NO: string;

export const STOCK_OK: string;

export const STOCK_OPEN: string;

export const STOCK_ORIENTATION_LANDSCAPE: string;

export const STOCK_ORIENTATION_PORTRAIT: string;

export const STOCK_ORIENTATION_REVERSE_LANDSCAPE: string;

export const STOCK_ORIENTATION_REVERSE_PORTRAIT: string;

export const STOCK_PAGE_SETUP: string;

export const STOCK_PASTE: string;

export const STOCK_PREFERENCES: string;

export const STOCK_PRINT: string;

export const STOCK_PRINT_ERROR: string;

export const STOCK_PRINT_PAUSED: string;

export const STOCK_PRINT_PREVIEW: string;

export const STOCK_PRINT_REPORT: string;

export const STOCK_PRINT_WARNING: string;

export const STOCK_PROPERTIES: string;

export const STOCK_QUIT: string;

export const STOCK_REDO: string;

export const STOCK_REFRESH: string;

export const STOCK_REMOVE: string;

export const STOCK_REVERT_TO_SAVED: string;

export const STOCK_SAVE: string;

export const STOCK_SAVE_AS: string;

export const STOCK_SELECT_ALL: string;

export const STOCK_SELECT_COLOR: string;

export const STOCK_SELECT_FONT: string;

export const STOCK_SORT_ASCENDING: string;

export const STOCK_SORT_DESCENDING: string;

export const STOCK_SPELL_CHECK: string;

export const STOCK_STOP: string;

export const STOCK_STRIKETHROUGH: string;

export const STOCK_UNDELETE: string;

export const STOCK_UNDERLINE: string;

export const STOCK_UNDO: string;

export const STOCK_UNINDENT: string;

export const STOCK_YES: string;

export const STOCK_ZOOM_100: string;

export const STOCK_ZOOM_FIT: string;

export const STOCK_ZOOM_IN: string;

export const STOCK_ZOOM_OUT: string;

export const STYLE_CLASS_ACCELERATOR: string;

export const STYLE_CLASS_ARROW: string;

export const STYLE_CLASS_BACKGROUND: string;

export const STYLE_CLASS_BOTTOM: string;

export const STYLE_CLASS_BUTTON: string;

export const STYLE_CLASS_CALENDAR: string;

export const STYLE_CLASS_CELL: string;

export const STYLE_CLASS_CHECK: string;

export const STYLE_CLASS_COMBOBOX_ENTRY: string;

export const STYLE_CLASS_CONTEXT_MENU: string;

export const STYLE_CLASS_CSD: string;

export const STYLE_CLASS_CURSOR_HANDLE: string;

export const STYLE_CLASS_DEFAULT: string;

export const STYLE_CLASS_DESTRUCTIVE_ACTION: string;

export const STYLE_CLASS_DIM_LABEL: string;

export const STYLE_CLASS_DND: string;

export const STYLE_CLASS_DOCK: string;

export const STYLE_CLASS_ENTRY: string;

export const STYLE_CLASS_ERROR: string;

export const STYLE_CLASS_EXPANDER: string;

export const STYLE_CLASS_FLAT: string;

export const STYLE_CLASS_FRAME: string;

export const STYLE_CLASS_GRIP: string;

export const STYLE_CLASS_HEADER: string;

export const STYLE_CLASS_HIGHLIGHT: string;

export const STYLE_CLASS_HORIZONTAL: string;

export const STYLE_CLASS_IMAGE: string;

export const STYLE_CLASS_INFO: string;

export const STYLE_CLASS_INLINE_TOOLBAR: string;

export const STYLE_CLASS_INSERTION_CURSOR: string;

export const STYLE_CLASS_LABEL: string;

export const STYLE_CLASS_LEFT: string;

export const STYLE_CLASS_LEVEL_BAR: string;

export const STYLE_CLASS_LINKED: string;

export const STYLE_CLASS_LIST: string;

export const STYLE_CLASS_LIST_ROW: string;

export const STYLE_CLASS_MARK: string;

export const STYLE_CLASS_MENU: string;

export const STYLE_CLASS_MENUBAR: string;

export const STYLE_CLASS_MENUITEM: string;

export const STYLE_CLASS_MESSAGE_DIALOG: string;

export const STYLE_CLASS_MONOSPACE: string;

export const STYLE_CLASS_NEEDS_ATTENTION: string;

export const STYLE_CLASS_NOTEBOOK: string;

export const STYLE_CLASS_OSD: string;

export const STYLE_CLASS_OVERSHOOT: string;

export const STYLE_CLASS_PANE_SEPARATOR: string;

export const STYLE_CLASS_PAPER: string;

export const STYLE_CLASS_POPOVER: string;

export const STYLE_CLASS_POPUP: string;

export const STYLE_CLASS_PRIMARY_TOOLBAR: string;

export const STYLE_CLASS_PROGRESSBAR: string;

export const STYLE_CLASS_PULSE: string;

export const STYLE_CLASS_QUESTION: string;

export const STYLE_CLASS_RADIO: string;

export const STYLE_CLASS_RAISED: string;

export const STYLE_CLASS_READ_ONLY: string;

export const STYLE_CLASS_RIGHT: string;

export const STYLE_CLASS_RUBBERBAND: string;

export const STYLE_CLASS_SCALE: string;

export const STYLE_CLASS_SCALE_HAS_MARKS_ABOVE: string;

export const STYLE_CLASS_SCALE_HAS_MARKS_BELOW: string;

export const STYLE_CLASS_SCROLLBAR: string;

export const STYLE_CLASS_SCROLLBARS_JUNCTION: string;

export const STYLE_CLASS_SEPARATOR: string;

export const STYLE_CLASS_SIDEBAR: string;

export const STYLE_CLASS_SLIDER: string;

export const STYLE_CLASS_SPINBUTTON: string;

export const STYLE_CLASS_SPINNER: string;

export const STYLE_CLASS_STATUSBAR: string;

export const STYLE_CLASS_SUBTITLE: string;

export const STYLE_CLASS_SUGGESTED_ACTION: string;

export const STYLE_CLASS_TITLE: string;

export const STYLE_CLASS_TITLEBAR: string;

export const STYLE_CLASS_TOOLBAR: string;

export const STYLE_CLASS_TOOLTIP: string;

export const STYLE_CLASS_TOP: string;

export const STYLE_CLASS_TOUCH_SELECTION: string;

export const STYLE_CLASS_TROUGH: string;

export const STYLE_CLASS_UNDERSHOOT: string;

export const STYLE_CLASS_VERTICAL: string;

export const STYLE_CLASS_VIEW: string;

export const STYLE_CLASS_WARNING: string;

export const STYLE_CLASS_WIDE: string;

export const STYLE_PROPERTY_BACKGROUND_COLOR: string;

export const STYLE_PROPERTY_BACKGROUND_IMAGE: string;

export const STYLE_PROPERTY_BORDER_COLOR: string;

export const STYLE_PROPERTY_BORDER_RADIUS: string;

export const STYLE_PROPERTY_BORDER_STYLE: string;

export const STYLE_PROPERTY_BORDER_WIDTH: string;

export const STYLE_PROPERTY_COLOR: string;

export const STYLE_PROPERTY_FONT: string;

export const STYLE_PROPERTY_MARGIN: string;

export const STYLE_PROPERTY_PADDING: string;

export const STYLE_PROVIDER_PRIORITY_APPLICATION: number;

export const STYLE_PROVIDER_PRIORITY_FALLBACK: number;

export const STYLE_PROVIDER_PRIORITY_SETTINGS: number;

export const STYLE_PROVIDER_PRIORITY_THEME: number;

export const STYLE_PROVIDER_PRIORITY_USER: number;

export const STYLE_REGION_COLUMN: string;

export const STYLE_REGION_COLUMN_HEADER: string;

export const STYLE_REGION_ROW: string;

export const STYLE_REGION_TAB: string;

export const TEXT_VIEW_PRIORITY_VALIDATE: number;

export const TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: number;

export const TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: number;

export function accel_groups_activate(object: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType): boolean;

export function accel_groups_from_object(object: GObject.Object): GLib.SList;

export function accelerator_get_default_mod_mask(): Gdk.ModifierType;

export function accelerator_get_label(accelerator_key: number, accelerator_mods: Gdk.ModifierType): string;

export function accelerator_get_label_with_keycode(display: Gdk.Display | null, accelerator_key: number, keycode: number, accelerator_mods: Gdk.ModifierType): string;

export function accelerator_name(accelerator_key: number, accelerator_mods: Gdk.ModifierType): string;

export function accelerator_name_with_keycode(display: Gdk.Display | null, accelerator_key: number, keycode: number, accelerator_mods: Gdk.ModifierType): string;

export function accelerator_parse(accelerator: string): [number | null, Gdk.ModifierType | null];

export function accelerator_parse_with_keycode(accelerator: string): [number | null, number[] | null, Gdk.ModifierType | null];

export function accelerator_set_default_mod_mask(default_mod_mask: Gdk.ModifierType): void;

export function accelerator_valid(keyval: number, modifiers: Gdk.ModifierType): boolean;

export function alternative_dialog_button_order(screen: Gdk.Screen | null): boolean;

export function binding_entry_add_signal_from_string(binding_set: BindingSet, signal_desc: string): GLib.TokenType;

export function binding_entry_add_signall(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType, signal_name: string, binding_args: GLib.SList): void;

export function binding_entry_remove(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;

export function binding_entry_skip(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;

export function binding_set_find(set_name: string): BindingSet | null;

export function bindings_activate(object: GObject.Object, keyval: number, modifiers: Gdk.ModifierType): boolean;

export function bindings_activate_event(object: GObject.Object, event: Gdk.EventKey): boolean;

export function builder_error_quark(): GLib.Quark;

export function cairo_should_draw_window(cr: cairo.Context, window: Gdk.Window): boolean;

export function cairo_transform_to_window(cr: cairo.Context, widget: Widget, window: Gdk.Window): void;

export function check_version(required_major: number, required_minor: number, required_micro: number): string | null;

export function css_provider_error_quark(): GLib.Quark;

export function device_grab_add(widget: Widget, device: Gdk.Device, block_others: boolean): void;

export function device_grab_remove(widget: Widget, device: Gdk.Device): void;

export function disable_setlocale(): void;

export function distribute_natural_allocation(extra_space: number, n_requested_sizes: number, sizes: RequestedSize): number;

export function drag_cancel(context: Gdk.DragContext): void;

export function drag_finish(context: Gdk.DragContext, success: boolean, del: boolean, time_: number): void;

export function drag_get_source_widget(context: Gdk.DragContext): Widget | null;

export function drag_set_icon_default(context: Gdk.DragContext): void;

export function drag_set_icon_gicon(context: Gdk.DragContext, icon: Gio.Icon, hot_x: number, hot_y: number): void;

export function drag_set_icon_name(context: Gdk.DragContext, icon_name: string, hot_x: number, hot_y: number): void;

export function drag_set_icon_pixbuf(context: Gdk.DragContext, pixbuf: GdkPixbuf.Pixbuf, hot_x: number, hot_y: number): void;

export function drag_set_icon_stock(context: Gdk.DragContext, stock_id: string, hot_x: number, hot_y: number): void;

export function drag_set_icon_surface(context: Gdk.DragContext, surface: cairo.Surface): void;

export function drag_set_icon_widget(context: Gdk.DragContext, widget: Widget, hot_x: number, hot_y: number): void;

export function draw_insertion_cursor(widget: Widget, cr: cairo.Context, location: Gdk.Rectangle, is_primary: boolean, direction: TextDirection, draw_arrow: boolean): void;

export function events_pending(): boolean;

export function __false(): boolean;

export function file_chooser_error_quark(): GLib.Quark;

export function get_binary_age(): number;

export function get_current_event(): Gdk.Event | null;

export function get_current_event_device(): Gdk.Device | null;

export function get_current_event_state(): [boolean, Gdk.ModifierType];

export function get_current_event_time(): number;

export function get_debug_flags(): number;

export function get_default_language(): Pango.Language;

export function get_event_widget(event: Gdk.Event): Widget | null;

export function get_interface_age(): number;

export function get_locale_direction(): TextDirection;

export function get_major_version(): number;

export function get_micro_version(): number;

export function get_minor_version(): number;

export function get_option_group(open_default_display: boolean): GLib.OptionGroup;

export function grab_get_current(): Widget | null;

export function icon_size_from_name(name: string): number;

export function icon_size_get_name(size: number): string;

export function icon_size_lookup(size: number): [boolean, number | null, number | null];

export function icon_size_lookup_for_settings(settings: Settings, size: number): [boolean, number | null, number | null];

export function icon_size_register(name: string, width: number, height: number): number;

export function icon_size_register_alias(alias: string, target: number): void;

export function icon_theme_error_quark(): GLib.Quark;

export function init(argv: string[] | null): string[] | null;

export function init_check(argv: string[] | null): [boolean, string[] | null];

export function init_with_args(argv: string[] | null, parameter_string: string | null, entries: GLib.OptionEntry[], translation_domain: string | null): [boolean, string[] | null];

export function key_snooper_remove(snooper_handler_id: number): void;

export function main(): void;

export function main_do_event(event: Gdk.Event): void;

export function main_iteration(): boolean;

export function main_iteration_do(blocking: boolean): boolean;

export function main_level(): number;

export function main_quit(): void;

export function paint_arrow(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, arrow_type: ArrowType, fill: boolean, x: number, y: number, width: number, height: number): void;

export function paint_box(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;

export function paint_box_gap(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;

export function paint_check(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;

export function paint_diamond(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;

export function paint_expander(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, x: number, y: number, expander_style: ExpanderStyle): void;

export function paint_extension(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gap_side: PositionType): void;

export function paint_flat_box(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;

export function paint_focus(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;

export function paint_handle(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, orientation: Orientation): void;

export function paint_hline(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, x1: number, x2: number, y: number): void;

export function paint_layout(style: Style, cr: cairo.Context, state_type: StateType, use_text: boolean, widget: Widget | null, detail: string | null, x: number, y: number, layout: Pango.Layout): void;

export function paint_option(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;

export function paint_resize_grip(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, edge: Gdk.WindowEdge, x: number, y: number, width: number, height: number): void;

export function paint_shadow(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;

export function paint_shadow_gap(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;

export function paint_slider(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, orientation: Orientation): void;

export function paint_spinner(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, step: number, x: number, y: number, width: number, height: number): void;

export function paint_tab(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;

export function paint_vline(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, y1_: number, y2_: number, x: number): void;

export function paper_size_get_default(): string;

export function paper_size_get_paper_sizes(include_custom: boolean): GLib.List;

export function parse_args(argv: string[]): [boolean, string[]];

export function print_error_quark(): GLib.Quark;

export function print_run_page_setup_dialog(parent: Window | null, page_setup: PageSetup | null, settings: PrintSettings): PageSetup;

export function print_run_page_setup_dialog_async(parent: Window | null, page_setup: PageSetup | null, settings: PrintSettings, done_cb: PageSetupDoneFunc): void;

export function propagate_event(widget: Widget, event: Gdk.Event): void;

export function rc_add_default_file(filename: string): void;

export function rc_find_module_in_path(module_file: string): string;

export function rc_find_pixmap_in_path(settings: Settings, scanner: GLib.Scanner, pixmap_file: string): string;

export function rc_get_default_files(): string[];

export function rc_get_im_module_file(): string;

export function rc_get_im_module_path(): string;

export function rc_get_module_dir(): string;

export function rc_get_style(widget: Widget): Style;

export function rc_get_style_by_paths(settings: Settings, widget_path: string | null, class_path: string | null, type: GType): Style | null;

export function rc_get_theme_dir(): string;

export function rc_parse(filename: string): void;

export function rc_parse_color(scanner: GLib.Scanner): [number, Gdk.Color];

export function rc_parse_color_full(scanner: GLib.Scanner, style: RcStyle | null): [number, Gdk.Color];

export function rc_parse_priority(scanner: GLib.Scanner, priority: PathPriorityType): number;

export function rc_parse_state(scanner: GLib.Scanner): [number, StateType];

export function rc_parse_string(rc_string: string): void;

export function rc_property_parse_border(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: (GObject.Value | string | boolean | number)): boolean;

export function rc_property_parse_color(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: (GObject.Value | string | boolean | number)): boolean;

export function rc_property_parse_enum(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: (GObject.Value | string | boolean | number)): boolean;

export function rc_property_parse_flags(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: (GObject.Value | string | boolean | number)): boolean;

export function rc_property_parse_requisition(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: (GObject.Value | string | boolean | number)): boolean;

export function rc_reparse_all(): boolean;

export function rc_reparse_all_for_settings(settings: Settings, force_load: boolean): boolean;

export function rc_reset_styles(settings: Settings): void;

export function rc_set_default_files(filenames: string[]): void;

export function recent_chooser_error_quark(): GLib.Quark;

export function recent_manager_error_quark(): GLib.Quark;

export function render_activity(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;

export function render_arrow(context: StyleContext, cr: cairo.Context, angle: number, x: number, y: number, size: number): void;

export function render_background(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;

export function render_background_get_clip(context: StyleContext, x: number, y: number, width: number, height: number): Gdk.Rectangle;

export function render_check(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;

export function render_expander(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;

export function render_extension(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType): void;

export function render_focus(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;

export function render_frame(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;

export function render_frame_gap(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType, xy0_gap: number, xy1_gap: number): void;

export function render_handle(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;

export function render_icon(context: StyleContext, cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): void;

export function render_icon_pixbuf(context: StyleContext, source: IconSource, size: number): GdkPixbuf.Pixbuf;

export function render_icon_surface(context: StyleContext, cr: cairo.Context, surface: cairo.Surface, x: number, y: number): void;

export function render_insertion_cursor(context: StyleContext, cr: cairo.Context, x: number, y: number, layout: Pango.Layout, index: number, direction: Pango.Direction): void;

export function render_layout(context: StyleContext, cr: cairo.Context, x: number, y: number, layout: Pango.Layout): void;

export function render_line(context: StyleContext, cr: cairo.Context, x0: number, y0: number, x1: number, y1: number): void;

export function render_option(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;

export function render_slider(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, orientation: Orientation): void;

export function rgb_to_hsv(r: number, g: number, b: number): [number, number, number];

export function selection_add_target(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, info: number): void;

export function selection_add_targets(widget: Widget, selection: Gdk.Atom, targets: TargetEntry[]): void;

export function selection_clear_targets(widget: Widget, selection: Gdk.Atom): void;

export function selection_convert(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, time_: number): boolean;

export function selection_owner_set(widget: Widget | null, selection: Gdk.Atom, time_: number): boolean;

export function selection_owner_set_for_display(display: Gdk.Display, widget: Widget | null, selection: Gdk.Atom, time_: number): boolean;

export function selection_remove_all(widget: Widget): void;

export function set_debug_flags(flags: number): void;

export function show_uri(screen: Gdk.Screen | null, uri: string, timestamp: number): boolean;

export function show_uri_on_window(parent: Window | null, uri: string, timestamp: number): boolean;

export function stock_add(items: StockItem[]): void;

export function stock_add_static(items: StockItem[]): void;

export function stock_list_ids(): GLib.SList;

export function stock_lookup(stock_id: string): [boolean, StockItem];

export function stock_set_translate_func(domain: string, func: TranslateFunc, notify: GLib.DestroyNotify): void;

export function target_table_free(targets: TargetEntry[]): void;

export function target_table_new_from_list(list: TargetList): TargetEntry[];

export function targets_include_image(targets: Gdk.Atom[], writable: boolean): boolean;

export function targets_include_rich_text(targets: Gdk.Atom[], buffer: TextBuffer): boolean;

export function targets_include_text(targets: Gdk.Atom[]): boolean;

export function targets_include_uri(targets: Gdk.Atom[]): boolean;

export function test_create_simple_window(window_title: string, dialog_text: string): Widget;

export function test_find_label(widget: Widget, label_pattern: string): Widget;

export function test_find_sibling(base_widget: Widget, widget_type: GType): Widget;

export function test_find_widget(widget: Widget, label_pattern: string, widget_type: GType): Widget | null;

export function test_list_all_types(): GType[];

export function test_register_all_types(): void;

export function test_slider_get_value(widget: Widget): number;

export function test_slider_set_perc(widget: Widget, percentage: number): void;

export function test_spin_button_click(spinner: SpinButton, button: number, upwards: boolean): boolean;

export function test_text_get(widget: Widget): string;

export function test_text_set(widget: Widget, string: string): void;

export function test_widget_click(widget: Widget, button: number, modifiers: Gdk.ModifierType): boolean;

export function test_widget_send_key(widget: Widget, keyval: number, modifiers: Gdk.ModifierType): boolean;

export function test_widget_wait_for_draw(widget: Widget): void;

export function tree_get_row_drag_data(selection_data: SelectionData): [boolean, TreeModel | null, TreePath | null];

export function tree_row_reference_deleted(proxy: GObject.Object, path: TreePath): void;

export function tree_row_reference_inserted(proxy: GObject.Object, path: TreePath): void;

export function tree_set_row_drag_data(selection_data: SelectionData, tree_model: TreeModel, path: TreePath): boolean;

export function __true(): boolean;

export type AccelGroupActivate = (accel_group: AccelGroup, acceleratable: GObject.Object, keyval: number, modifier: Gdk.ModifierType) => boolean;

export type AccelGroupFindFunc = (key: AccelKey, closure: GObject.Closure) => boolean;

export type AccelMapForeach = (data: any | null, accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType, changed: boolean) => void;

export type AssistantPageFunc = (current_page: number) => number;

export type BuilderConnectFunc = (builder: Builder, object: GObject.Object, signal_name: string, handler_name: string, connect_object: GObject.Object | null, flags: GObject.ConnectFlags) => void;

export type CalendarDetailFunc = (calendar: Calendar, year: number, month: number, day: number) => string | null;

export type Callback = (widget: Widget) => void;

export type CellAllocCallback = (renderer: CellRenderer, cell_area: Gdk.Rectangle, cell_background: Gdk.Rectangle) => boolean;

export type CellCallback = (renderer: CellRenderer) => boolean;

export type CellLayoutDataFunc = (cell_layout: CellLayout, cell: CellRenderer, tree_model: TreeModel, iter: TreeIter) => void;

export type ClipboardClearFunc = (clipboard: Clipboard, user_data_or_owner: any | null) => void;

export type ClipboardGetFunc = (clipboard: Clipboard, selection_data: SelectionData, info: number, user_data_or_owner: any | null) => void;

export type ClipboardImageReceivedFunc = (clipboard: Clipboard, pixbuf: GdkPixbuf.Pixbuf) => void;

export type ClipboardReceivedFunc = (clipboard: Clipboard, selection_data: SelectionData) => void;

export type ClipboardRichTextReceivedFunc = (clipboard: Clipboard, format: Gdk.Atom, text: string | null, length: number) => void;

export type ClipboardTargetsReceivedFunc = (clipboard: Clipboard, atoms: Gdk.Atom[] | null) => void;

export type ClipboardTextReceivedFunc = (clipboard: Clipboard, text: string | null) => void;

export type ClipboardURIReceivedFunc = (clipboard: Clipboard, uris: string[]) => void;

export type ColorSelectionChangePaletteFunc = (colors: Gdk.Color[]) => void;

export type ColorSelectionChangePaletteWithScreenFunc = (screen: Gdk.Screen, colors: Gdk.Color[]) => void;

export type EntryCompletionMatchFunc = (completion: EntryCompletion, key: string, iter: TreeIter) => boolean;

export type FileFilterFunc = (filter_info: FileFilterInfo) => boolean;

export type FlowBoxCreateWidgetFunc = (item: GObject.Object) => Widget;

export type FlowBoxFilterFunc = (child: FlowBoxChild) => boolean;

export type FlowBoxForeachFunc = (box: FlowBox, child: FlowBoxChild) => void;

export type FlowBoxSortFunc = (child1: FlowBoxChild, child2: FlowBoxChild) => number;

export type FontFilterFunc = (family: Pango.FontFamily, face: Pango.FontFace) => boolean;

export type IconViewForeachFunc = (icon_view: IconView, path: TreePath) => void;

export type KeySnoopFunc = (grab_widget: Widget, event: Gdk.EventKey) => number;

export type ListBoxCreateWidgetFunc = (item: GObject.Object) => Widget;

export type ListBoxFilterFunc = (row: ListBoxRow) => boolean;

export type ListBoxForeachFunc = (box: ListBox, row: ListBoxRow) => void;

export type ListBoxSortFunc = (row1: ListBoxRow, row2: ListBoxRow) => number;

export type ListBoxUpdateHeaderFunc = (row: ListBoxRow, before: ListBoxRow | null) => void;

export type MenuDetachFunc = (attach_widget: Widget, menu: Menu) => void;

export type MenuPositionFunc = (menu: Menu, x: number, y: number) => void;

export type ModuleDisplayInitFunc = (display: Gdk.Display) => void;

export type ModuleInitFunc = (argv: string[] | null) => void;

export type PageSetupDoneFunc = (page_setup: PageSetup) => void;

export type PrintSettingsFunc = (key: string, value: string) => void;

export type RcPropertyParser = (pspec: GObject.ParamSpec, rc_string: GLib.String, property_value: (GObject.Value | string | boolean | number)) => boolean;

export type RecentFilterFunc = (filter_info: RecentFilterInfo) => boolean;

export type RecentSortFunc = (a: RecentInfo, b: RecentInfo) => number;

export type StylePropertyParser = (string: string, value: (GObject.Value | string | boolean | number)) => boolean;

export type TextBufferDeserializeFunc = (register_buffer: TextBuffer, content_buffer: TextBuffer, iter: TextIter, data: (Uint8Array | string), create_tags: boolean) => boolean;

export type TextBufferSerializeFunc = (register_buffer: TextBuffer, content_buffer: TextBuffer, start: TextIter, end: TextIter, length: number) => number | null;

export type TextCharPredicate = (ch: number) => boolean;

export type TextTagTableForeach = (tag: TextTag) => void;

export type TickCallback = (widget: Widget, frame_clock: Gdk.FrameClock) => boolean;

export type TranslateFunc = (path: string) => string;

export type TreeCellDataFunc = (tree_column: TreeViewColumn, cell: CellRenderer, tree_model: TreeModel, iter: TreeIter) => void;

export type TreeDestroyCountFunc = (tree_view: TreeView, path: TreePath, children: number) => void;

export type TreeIterCompareFunc = (model: TreeModel, a: TreeIter, b: TreeIter) => number;

export type TreeModelFilterModifyFunc = (model: TreeModel, iter: TreeIter, column: number) => void;

export type TreeModelFilterVisibleFunc = (model: TreeModel, iter: TreeIter) => boolean;

export type TreeModelForeachFunc = (model: TreeModel, path: TreePath, iter: TreeIter) => boolean;

export type TreeSelectionForeachFunc = (model: TreeModel, path: TreePath, iter: TreeIter) => void;

export type TreeSelectionFunc = (selection: TreeSelection, model: TreeModel, path: TreePath, path_currently_selected: boolean) => boolean;

export type TreeViewColumnDropFunc = (tree_view: TreeView, column: TreeViewColumn, prev_column: TreeViewColumn, next_column: TreeViewColumn) => boolean;

export type TreeViewMappingFunc = (tree_view: TreeView, path: TreePath) => void;

export type TreeViewRowSeparatorFunc = (model: TreeModel, iter: TreeIter) => boolean;

export type TreeViewSearchEqualFunc = (model: TreeModel, column: number, key: string, iter: TreeIter) => boolean;

export type TreeViewSearchPositionFunc = (tree_view: TreeView, search_dialog: Widget) => void;
export enum Align {
    FILL = 0,
    START = 1,
    END = 2,
    CENTER = 3,
    BASELINE = 4,
}
export enum ArrowPlacement {
    BOTH = 0,
    START = 1,
    END = 2,
}
export enum ArrowType {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
    NONE = 4,
}
export enum AssistantPageType {
    CONTENT = 0,
    INTRO = 1,
    CONFIRM = 2,
    SUMMARY = 3,
    PROGRESS = 4,
    CUSTOM = 5,
}
export enum BaselinePosition {
    TOP = 0,
    CENTER = 1,
    BOTTOM = 2,
}
export enum BorderStyle {
    NONE = 0,
    SOLID = 1,
    INSET = 2,
    OUTSET = 3,
    HIDDEN = 4,
    DOTTED = 5,
    DASHED = 6,
    DOUBLE = 7,
    GROOVE = 8,
    RIDGE = 9,
}
export class BuilderError extends GLib.Error {
    constructor(copy: BuilderError);
    // Properties
    static INVALID_TYPE_FUNCTION: number;
    static UNHANDLED_TAG: number;
    static MISSING_ATTRIBUTE: number;
    static INVALID_ATTRIBUTE: number;
    static INVALID_TAG: number;
    static MISSING_PROPERTY_VALUE: number;
    static INVALID_VALUE: number;
    static VERSION_MISMATCH: number;
    static DUPLICATE_ID: number;
    static OBJECT_TYPE_REFUSED: number;
    static TEMPLATE_MISMATCH: number;
    static INVALID_PROPERTY: number;
    static INVALID_SIGNAL: number;
    static INVALID_ID: number;
    // Members
    quark(): GLib.Quark;
}
export enum ButtonBoxStyle {
    SPREAD = 1,
    EDGE = 2,
    START = 3,
    END = 4,
    CENTER = 5,
    EXPAND = 6,
}
export enum ButtonRole {
    NORMAL = 0,
    CHECK = 1,
    RADIO = 2,
}
export enum ButtonsType {
    NONE = 0,
    OK = 1,
    CLOSE = 2,
    CANCEL = 3,
    YES_NO = 4,
    OK_CANCEL = 5,
}
export enum CellRendererAccelMode {
    GTK = 0,
    OTHER = 1,
}
export enum CellRendererMode {
    INERT = 0,
    ACTIVATABLE = 1,
    EDITABLE = 2,
}
export enum CornerType {
    TOP_LEFT = 0,
    BOTTOM_LEFT = 1,
    TOP_RIGHT = 2,
    BOTTOM_RIGHT = 3,
}
export class CssProviderError extends GLib.Error {
    constructor(copy: CssProviderError);
    // Properties
    static FAILED: number;
    static SYNTAX: number;
    static IMPORT: number;
    static NAME: number;
    static DEPRECATED: number;
    static UNKNOWN_VALUE: number;
    // Members
    quark(): GLib.Quark;
}
export enum CssSectionType {
    DOCUMENT = 0,
    IMPORT = 1,
    COLOR_DEFINITION = 2,
    BINDING_SET = 3,
    RULESET = 4,
    SELECTOR = 5,
    DECLARATION = 6,
    VALUE = 7,
    KEYFRAMES = 8,
}
export enum DeleteType {
    CHARS = 0,
    WORD_ENDS = 1,
    WORDS = 2,
    DISPLAY_LINES = 3,
    DISPLAY_LINE_ENDS = 4,
    PARAGRAPH_ENDS = 5,
    PARAGRAPHS = 6,
    WHITESPACE = 7,
}
export enum DirectionType {
    TAB_FORWARD = 0,
    TAB_BACKWARD = 1,
    UP = 2,
    DOWN = 3,
    LEFT = 4,
    RIGHT = 5,
}
export enum DragResult {
    SUCCESS = 0,
    NO_TARGET = 1,
    USER_CANCELLED = 2,
    TIMEOUT_EXPIRED = 3,
    GRAB_BROKEN = 4,
    ERROR = 5,
}
export enum EntryIconPosition {
    PRIMARY = 0,
    SECONDARY = 1,
}
export enum EventSequenceState {
    NONE = 0,
    CLAIMED = 1,
    DENIED = 2,
}
export enum ExpanderStyle {
    COLLAPSED = 0,
    SEMI_COLLAPSED = 1,
    SEMI_EXPANDED = 2,
    EXPANDED = 3,
}
export enum FileChooserAction {
    OPEN = 0,
    SAVE = 1,
    SELECT_FOLDER = 2,
    CREATE_FOLDER = 3,
}
export enum FileChooserConfirmation {
    CONFIRM = 0,
    ACCEPT_FILENAME = 1,
    SELECT_AGAIN = 2,
}
export class FileChooserError extends GLib.Error {
    constructor(copy: FileChooserError);
    // Properties
    static NONEXISTENT: number;
    static BAD_FILENAME: number;
    static ALREADY_EXISTS: number;
    static INCOMPLETE_HOSTNAME: number;
    // Members
    quark(): GLib.Quark;
}
export enum IMPreeditStyle {
    NOTHING = 0,
    CALLBACK = 1,
    NONE = 2,
}
export enum IMStatusStyle {
    NOTHING = 0,
    CALLBACK = 1,
    NONE = 2,
}
export enum IconSize {
    INVALID = 0,
    MENU = 1,
    SMALL_TOOLBAR = 2,
    LARGE_TOOLBAR = 3,
    BUTTON = 4,
    DND = 5,
    DIALOG = 6,
}
export class IconThemeError extends GLib.Error {
    constructor(copy: IconThemeError);
    // Properties
    static NOT_FOUND: number;
    static FAILED: number;
    // Members
    quark(): GLib.Quark;
}
export enum IconViewDropPosition {
    NO_DROP = 0,
    DROP_INTO = 1,
    DROP_LEFT = 2,
    DROP_RIGHT = 3,
    DROP_ABOVE = 4,
    DROP_BELOW = 5,
}
export enum ImageType {
    EMPTY = 0,
    PIXBUF = 1,
    STOCK = 2,
    ICON_SET = 3,
    ANIMATION = 4,
    ICON_NAME = 5,
    GICON = 6,
    SURFACE = 7,
}
export enum InputPurpose {
    FREE_FORM = 0,
    ALPHA = 1,
    DIGITS = 2,
    NUMBER = 3,
    PHONE = 4,
    URL = 5,
    EMAIL = 6,
    NAME = 7,
    PASSWORD = 8,
    PIN = 9,
    TERMINAL = 10,
}
export enum Justification {
    LEFT = 0,
    RIGHT = 1,
    CENTER = 2,
    FILL = 3,
}
export enum LevelBarMode {
    CONTINUOUS = 0,
    DISCRETE = 1,
}
export enum License {
    UNKNOWN = 0,
    CUSTOM = 1,
    GPL_2_0 = 2,
    GPL_3_0 = 3,
    LGPL_2_1 = 4,
    LGPL_3_0 = 5,
    BSD = 6,
    MIT_X11 = 7,
    ARTISTIC = 8,
    GPL_2_0_ONLY = 9,
    GPL_3_0_ONLY = 10,
    LGPL_2_1_ONLY = 11,
    LGPL_3_0_ONLY = 12,
    AGPL_3_0 = 13,
    AGPL_3_0_ONLY = 14,
    BSD_3 = 15,
    APACHE_2_0 = 16,
    MPL_2_0 = 17,
}
export enum MenuDirectionType {
    PARENT = 0,
    CHILD = 1,
    NEXT = 2,
    PREV = 3,
}
export enum MessageType {
    INFO = 0,
    WARNING = 1,
    QUESTION = 2,
    ERROR = 3,
    OTHER = 4,
}
export enum MovementStep {
    LOGICAL_POSITIONS = 0,
    VISUAL_POSITIONS = 1,
    WORDS = 2,
    DISPLAY_LINES = 3,
    DISPLAY_LINE_ENDS = 4,
    PARAGRAPHS = 5,
    PARAGRAPH_ENDS = 6,
    PAGES = 7,
    BUFFER_ENDS = 8,
    HORIZONTAL_PAGES = 9,
}
export enum NotebookTab {
    FIRST = 0,
    LAST = 1,
}
export enum NumberUpLayout {
    LRTB = 0,
    LRBT = 1,
    RLTB = 2,
    RLBT = 3,
    TBLR = 4,
    TBRL = 5,
    BTLR = 6,
    BTRL = 7,
}
export enum Orientation {
    HORIZONTAL = 0,
    VERTICAL = 1,
}
export enum PackDirection {
    LTR = 0,
    RTL = 1,
    TTB = 2,
    BTT = 3,
}
export enum PackType {
    START = 0,
    END = 1,
}
export enum PadActionType {
    BUTTON = 0,
    RING = 1,
    STRIP = 2,
}
export enum PageOrientation {
    PORTRAIT = 0,
    LANDSCAPE = 1,
    REVERSE_PORTRAIT = 2,
    REVERSE_LANDSCAPE = 3,
}
export enum PageSet {
    ALL = 0,
    EVEN = 1,
    ODD = 2,
}
export enum PanDirection {
    LEFT = 0,
    RIGHT = 1,
    UP = 2,
    DOWN = 3,
}
export enum PathPriorityType {
    LOWEST = 0,
    GTK = 4,
    APPLICATION = 8,
    THEME = 10,
    RC = 12,
    HIGHEST = 15,
}
export enum PathType {
    WIDGET = 0,
    WIDGET_CLASS = 1,
    CLASS = 2,
}
export enum PolicyType {
    ALWAYS = 0,
    AUTOMATIC = 1,
    NEVER = 2,
    EXTERNAL = 3,
}
export enum PopoverConstraint {
    NONE = 0,
    WINDOW = 1,
}
export enum PositionType {
    LEFT = 0,
    RIGHT = 1,
    TOP = 2,
    BOTTOM = 3,
}
export enum PrintDuplex {
    SIMPLEX = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
}
export class PrintError extends GLib.Error {
    constructor(copy: PrintError);
    // Properties
    static GENERAL: number;
    static INTERNAL_ERROR: number;
    static NOMEM: number;
    static INVALID_FILE: number;
    // Members
    quark(): GLib.Quark;
}
export enum PrintOperationAction {
    PRINT_DIALOG = 0,
    PRINT = 1,
    PREVIEW = 2,
    EXPORT = 3,
}
export enum PrintOperationResult {
    ERROR = 0,
    APPLY = 1,
    CANCEL = 2,
    IN_PROGRESS = 3,
}
export enum PrintPages {
    ALL = 0,
    CURRENT = 1,
    RANGES = 2,
    SELECTION = 3,
}
export enum PrintQuality {
    LOW = 0,
    NORMAL = 1,
    HIGH = 2,
    DRAFT = 3,
}
export enum PrintStatus {
    INITIAL = 0,
    PREPARING = 1,
    GENERATING_DATA = 2,
    SENDING_DATA = 3,
    PENDING = 4,
    PENDING_ISSUE = 5,
    PRINTING = 6,
    FINISHED = 7,
    FINISHED_ABORTED = 8,
}
export enum PropagationPhase {
    NONE = 0,
    CAPTURE = 1,
    BUBBLE = 2,
    TARGET = 3,
}
export enum RcTokenType {
    INVALID = 270,
    INCLUDE = 271,
    NORMAL = 272,
    ACTIVE = 273,
    PRELIGHT = 274,
    SELECTED = 275,
    INSENSITIVE = 276,
    FG = 277,
    BG = 278,
    TEXT = 279,
    BASE = 280,
    XTHICKNESS = 281,
    YTHICKNESS = 282,
    FONT = 283,
    FONTSET = 284,
    FONT_NAME = 285,
    BG_PIXMAP = 286,
    PIXMAP_PATH = 287,
    STYLE = 288,
    BINDING = 289,
    BIND = 290,
    WIDGET = 291,
    WIDGET_CLASS = 292,
    CLASS = 293,
    LOWEST = 294,
    GTK = 295,
    APPLICATION = 296,
    THEME = 297,
    RC = 298,
    HIGHEST = 299,
    ENGINE = 300,
    MODULE_PATH = 301,
    IM_MODULE_PATH = 302,
    IM_MODULE_FILE = 303,
    STOCK = 304,
    LTR = 305,
    RTL = 306,
    COLOR = 307,
    UNBIND = 308,
    LAST = 309,
}
export class RecentChooserError extends GLib.Error {
    constructor(copy: RecentChooserError);
    // Properties
    static NOT_FOUND: number;
    static INVALID_URI: number;
    // Members
    quark(): GLib.Quark;
}
export class RecentManagerError extends GLib.Error {
    constructor(copy: RecentManagerError);
    // Properties
    static NOT_FOUND: number;
    static INVALID_URI: number;
    static INVALID_ENCODING: number;
    static NOT_REGISTERED: number;
    static READ: number;
    static WRITE: number;
    static UNKNOWN: number;
    // Members
    quark(): GLib.Quark;
}
export enum RecentSortType {
    NONE = 0,
    MRU = 1,
    LRU = 2,
    CUSTOM = 3,
}
export enum ReliefStyle {
    NORMAL = 0,
    HALF = 1,
    NONE = 2,
}
export enum ResizeMode {
    PARENT = 0,
    QUEUE = 1,
    IMMEDIATE = 2,
}
export enum ResponseType {
    NONE = -1,
    REJECT = -2,
    ACCEPT = -3,
    DELETE_EVENT = -4,
    OK = -5,
    CANCEL = -6,
    CLOSE = -7,
    YES = -8,
    NO = -9,
    APPLY = -10,
    HELP = -11,
}
export enum RevealerTransitionType {
    NONE = 0,
    CROSSFADE = 1,
    SLIDE_RIGHT = 2,
    SLIDE_LEFT = 3,
    SLIDE_UP = 4,
    SLIDE_DOWN = 5,
}
export enum ScrollStep {
    STEPS = 0,
    PAGES = 1,
    ENDS = 2,
    HORIZONTAL_STEPS = 3,
    HORIZONTAL_PAGES = 4,
    HORIZONTAL_ENDS = 5,
}
export enum ScrollType {
    NONE = 0,
    JUMP = 1,
    STEP_BACKWARD = 2,
    STEP_FORWARD = 3,
    PAGE_BACKWARD = 4,
    PAGE_FORWARD = 5,
    STEP_UP = 6,
    STEP_DOWN = 7,
    PAGE_UP = 8,
    PAGE_DOWN = 9,
    STEP_LEFT = 10,
    STEP_RIGHT = 11,
    PAGE_LEFT = 12,
    PAGE_RIGHT = 13,
    START = 14,
    END = 15,
}
export enum ScrollablePolicy {
    MINIMUM = 0,
    NATURAL = 1,
}
export enum SelectionMode {
    NONE = 0,
    SINGLE = 1,
    BROWSE = 2,
    MULTIPLE = 3,
}
export enum SensitivityType {
    AUTO = 0,
    ON = 1,
    OFF = 2,
}
export enum ShadowType {
    NONE = 0,
    IN = 1,
    OUT = 2,
    ETCHED_IN = 3,
    ETCHED_OUT = 4,
}
export enum ShortcutType {
    ACCELERATOR = 0,
    GESTURE_PINCH = 1,
    GESTURE_STRETCH = 2,
    GESTURE_ROTATE_CLOCKWISE = 3,
    GESTURE_ROTATE_COUNTERCLOCKWISE = 4,
    GESTURE_TWO_FINGER_SWIPE_LEFT = 5,
    GESTURE_TWO_FINGER_SWIPE_RIGHT = 6,
    GESTURE = 7,
}
export enum SizeGroupMode {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3,
}
export enum SizeRequestMode {
    HEIGHT_FOR_WIDTH = 0,
    WIDTH_FOR_HEIGHT = 1,
    CONSTANT_SIZE = 2,
}
export enum SortType {
    ASCENDING = 0,
    DESCENDING = 1,
}
export enum SpinButtonUpdatePolicy {
    ALWAYS = 0,
    IF_VALID = 1,
}
export enum SpinType {
    STEP_FORWARD = 0,
    STEP_BACKWARD = 1,
    PAGE_FORWARD = 2,
    PAGE_BACKWARD = 3,
    HOME = 4,
    END = 5,
    USER_DEFINED = 6,
}
export enum StackTransitionType {
    NONE = 0,
    CROSSFADE = 1,
    SLIDE_RIGHT = 2,
    SLIDE_LEFT = 3,
    SLIDE_UP = 4,
    SLIDE_DOWN = 5,
    SLIDE_LEFT_RIGHT = 6,
    SLIDE_UP_DOWN = 7,
    OVER_UP = 8,
    OVER_DOWN = 9,
    OVER_LEFT = 10,
    OVER_RIGHT = 11,
    UNDER_UP = 12,
    UNDER_DOWN = 13,
    UNDER_LEFT = 14,
    UNDER_RIGHT = 15,
    OVER_UP_DOWN = 16,
    OVER_DOWN_UP = 17,
    OVER_LEFT_RIGHT = 18,
    OVER_RIGHT_LEFT = 19,
}
export enum StateType {
    NORMAL = 0,
    ACTIVE = 1,
    PRELIGHT = 2,
    SELECTED = 3,
    INSENSITIVE = 4,
    INCONSISTENT = 5,
    FOCUSED = 6,
}
export enum TextBufferTargetInfo {
    BUFFER_CONTENTS = -1,
    RICH_TEXT = -2,
    TEXT = -3,
}
export enum TextDirection {
    NONE = 0,
    LTR = 1,
    RTL = 2,
}
export enum TextExtendSelection {
    WORD = 0,
    LINE = 1,
}
export enum TextViewLayer {
    BELOW = 0,
    ABOVE = 1,
    BELOW_TEXT = 2,
    ABOVE_TEXT = 3,
}
export enum TextWindowType {
    PRIVATE = 0,
    WIDGET = 1,
    TEXT = 2,
    LEFT = 3,
    RIGHT = 4,
    TOP = 5,
    BOTTOM = 6,
}
export enum ToolbarSpaceStyle {
    EMPTY = 0,
    LINE = 1,
}
export enum ToolbarStyle {
    ICONS = 0,
    TEXT = 1,
    BOTH = 2,
    BOTH_HORIZ = 3,
}
export enum TreeViewColumnSizing {
    GROW_ONLY = 0,
    AUTOSIZE = 1,
    FIXED = 2,
}
export enum TreeViewDropPosition {
    BEFORE = 0,
    AFTER = 1,
    INTO_OR_BEFORE = 2,
    INTO_OR_AFTER = 3,
}
export enum TreeViewGridLines {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3,
}
export enum Unit {
    NONE = 0,
    POINTS = 1,
    INCH = 2,
    MM = 3,
}
export enum WidgetHelpType {
    TOOLTIP = 0,
    WHATS_THIS = 1,
}
export enum WindowPosition {
    NONE = 0,
    CENTER = 1,
    MOUSE = 2,
    CENTER_ALWAYS = 3,
    CENTER_ON_PARENT = 4,
}
export enum WindowType {
    TOPLEVEL = 0,
    POPUP = 1,
}
export enum WrapMode {
    NONE = 0,
    CHAR = 1,
    WORD = 2,
    WORD_CHAR = 3,
}
export enum AccelFlags {
    VISIBLE = 1,
    LOCKED = 2,
    MASK = 7,
}
export enum ApplicationInhibitFlags {
    LOGOUT = 1,
    SWITCH = 2,
    SUSPEND = 4,
    IDLE = 8,
}
export enum AttachOptions {
    EXPAND = 1,
    SHRINK = 2,
    FILL = 4,
}
export enum CalendarDisplayOptions {
    SHOW_HEADING = 1,
    SHOW_DAY_NAMES = 2,
    NO_MONTH_CHANGE = 4,
    SHOW_WEEK_NUMBERS = 8,
    SHOW_DETAILS = 32,
}
export enum CellRendererState {
    SELECTED = 1,
    PRELIT = 2,
    INSENSITIVE = 4,
    SORTED = 8,
    FOCUSED = 16,
    EXPANDABLE = 32,
    EXPANDED = 64,
}
export enum DebugFlag {
    MISC = 1,
    PLUGSOCKET = 2,
    TEXT = 4,
    TREE = 8,
    UPDATES = 16,
    KEYBINDINGS = 32,
    MULTIHEAD = 64,
    MODULES = 128,
    GEOMETRY = 256,
    ICONTHEME = 512,
    PRINTING = 1024,
    BUILDER = 2048,
    SIZE_REQUEST = 4096,
    NO_CSS_CACHE = 8192,
    BASELINES = 16384,
    PIXEL_CACHE = 32768,
    NO_PIXEL_CACHE = 65536,
    INTERACTIVE = 131072,
    TOUCHSCREEN = 262144,
    ACTIONS = 524288,
    RESIZE = 1048576,
    LAYOUT = 2097152,
}
export enum DestDefaults {
    MOTION = 1,
    HIGHLIGHT = 2,
    DROP = 4,
    ALL = 7,
}
export enum DialogFlags {
    MODAL = 1,
    DESTROY_WITH_PARENT = 2,
    USE_HEADER_BAR = 4,
}
export enum EventControllerScrollFlags {
    NONE = 0,
    VERTICAL = 1,
    HORIZONTAL = 2,
    DISCRETE = 4,
    KINETIC = 8,
    BOTH_AXES = 3,
}
export enum FileFilterFlags {
    FILENAME = 1,
    URI = 2,
    DISPLAY_NAME = 4,
    MIME_TYPE = 8,
}
export enum FontChooserLevel {
    FAMILY = 0,
    STYLE = 1,
    SIZE = 2,
    VARIATIONS = 4,
    FEATURES = 8,
}
export enum IconLookupFlags {
    NO_SVG = 1,
    FORCE_SVG = 2,
    USE_BUILTIN = 4,
    GENERIC_FALLBACK = 8,
    FORCE_SIZE = 16,
    FORCE_REGULAR = 32,
    FORCE_SYMBOLIC = 64,
    DIR_LTR = 128,
    DIR_RTL = 256,
}
export enum InputHints {
    NONE = 0,
    SPELLCHECK = 1,
    NO_SPELLCHECK = 2,
    WORD_COMPLETION = 4,
    LOWERCASE = 8,
    UPPERCASE_CHARS = 16,
    UPPERCASE_WORDS = 32,
    UPPERCASE_SENTENCES = 64,
    INHIBIT_OSK = 128,
    VERTICAL_WRITING = 256,
    EMOJI = 512,
    NO_EMOJI = 1024,
}
export enum JunctionSides {
    NONE = 0,
    CORNER_TOPLEFT = 1,
    CORNER_TOPRIGHT = 2,
    CORNER_BOTTOMLEFT = 4,
    CORNER_BOTTOMRIGHT = 8,
    TOP = 3,
    BOTTOM = 12,
    LEFT = 5,
    RIGHT = 10,
}
export enum PlacesOpenFlags {
    NORMAL = 1,
    NEW_TAB = 2,
    NEW_WINDOW = 4,
}
export enum RcFlags {
    FG = 1,
    BG = 2,
    TEXT = 4,
    BASE = 8,
}
export enum RecentFilterFlags {
    URI = 1,
    DISPLAY_NAME = 2,
    MIME_TYPE = 4,
    APPLICATION = 8,
    GROUP = 16,
    AGE = 32,
}
export enum RegionFlags {
    EVEN = 1,
    ODD = 2,
    FIRST = 4,
    LAST = 8,
    ONLY = 16,
    SORTED = 32,
}
export enum StateFlags {
    NORMAL = 0,
    ACTIVE = 1,
    PRELIGHT = 2,
    SELECTED = 4,
    INSENSITIVE = 8,
    INCONSISTENT = 16,
    FOCUSED = 32,
    BACKDROP = 64,
    DIR_LTR = 128,
    DIR_RTL = 256,
    LINK = 512,
    VISITED = 1024,
    CHECKED = 2048,
    DROP_ACTIVE = 4096,
}
export enum StyleContextPrintFlags {
    NONE = 0,
    RECURSE = 1,
    SHOW_STYLE = 2,
}
export enum TargetFlags {
    SAME_APP = 1,
    SAME_WIDGET = 2,
    OTHER_APP = 4,
    OTHER_WIDGET = 8,
}
export enum TextSearchFlags {
    VISIBLE_ONLY = 1,
    TEXT_ONLY = 2,
    CASE_INSENSITIVE = 4,
}
export enum ToolPaletteDragTargets {
    ITEMS = 1,
    GROUPS = 2,
}
export enum TreeModelFlags {
    ITERS_PERSIST = 1,
    LIST_ONLY = 2,
}
export enum UIManagerItemType {
    AUTO = 0,
    MENUBAR = 1,
    MENU = 2,
    TOOLBAR = 4,
    PLACEHOLDER = 8,
    POPUP = 16,
    MENUITEM = 32,
    TOOLITEM = 64,
    SEPARATOR = 128,
    ACCELERATOR = 256,
    POPUP_WITH_ACCELS = 512,
}
export module AboutDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
        artists: string[];
        authors: string[];
        comments: string;
        copyright: string;
        documenters: string[];
        license: string;
        license_type: License;
        logo: GdkPixbuf.Pixbuf;
        logo_icon_name: string;
        program_name: string;
        translator_credits: string;
        version: string;
        website: string;
        website_label: string;
        wrap_license: boolean;
    }
}
export class AboutDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<AboutDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AboutDialog.ConstructorProperties>, ...args: any[]): void;
    // Properties
    artists: string[];
    authors: string[];
    comments: string;
    copyright: string;
    documenters: string[];
    license: string;
    license_type: License;
    logo: GdkPixbuf.Pixbuf;
    logo_icon_name: string;
    program_name: string;
    translator_credits: string;
    version: string;
    website: string;
    website_label: string;
    wrap_license: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate-link', callback: (_source: this, uri: string) => boolean): number;
    connect_after(signal: 'activate-link', callback: (_source: this, uri: string) => boolean): number;
    emit(signal: 'activate-link', uri: string): void;
    // Constructors
    static ["new"](): AboutDialog;
    static ["new"](...args: never[]): never;
    // Members
    add_credit_section(section_name: string, people: string[]): void;
    get_artists(): string[];
    get_authors(): string[];
    get_comments(): string;
    get_copyright(): string;
    get_documenters(): string[];
    get_license(): string;
    get_license_type(): License;
    get_logo(): GdkPixbuf.Pixbuf;
    get_logo_icon_name(): string;
    get_program_name(): string;
    get_translator_credits(): string;
    get_version(): string;
    get_website(): string;
    get_website_label(): string;
    get_wrap_license(): boolean;
    set_artists(artists: string[]): void;
    set_authors(authors: string[]): void;
    set_comments(comments: string | null): void;
    set_copyright(copyright: string | null): void;
    set_documenters(documenters: string[]): void;
    set_license(license: string | null): void;
    set_license_type(license_type: License): void;
    set_logo(logo: GdkPixbuf.Pixbuf | null): void;
    set_logo_icon_name(icon_name: string | null): void;
    set_program_name(name: string): void;
    set_translator_credits(translator_credits: string | null): void;
    set_version(version: string | null): void;
    set_website(website: string | null): void;
    set_website_label(website_label: string): void;
    set_wrap_license(wrap_license: boolean): void;
    vfunc_activate_link(uri: string): boolean;
}
export module AccelGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        is_locked: boolean;
        modifier_mask: Gdk.ModifierType;
    }
}
export class AccelGroup extends GObject.Object {
    constructor(properties?: Partial<AccelGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AccelGroup.ConstructorProperties>, ...args: any[]): void;
    // Properties
    is_locked: boolean;
    modifier_mask: Gdk.ModifierType;
    // Fields
    priv: AccelGroupPrivate;
    // Signals
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect_after(signal: 'accel-activate', callback: (_source: this, acceleratable: GObject.Object, keyval: number, modifier: Gdk.ModifierType) => boolean): number;
    emit(signal: 'accel-activate', acceleratable: GObject.Object, keyval: number, modifier: Gdk.ModifierType): void;
    connect_after(signal: 'accel-changed', callback: (_source: this, keyval: number, modifier: Gdk.ModifierType, accel_closure: GObject.Closure) => void): number;
    emit(signal: 'accel-changed', keyval: number, modifier: Gdk.ModifierType, accel_closure: GObject.Closure): void;
    // Constructors
    static ["new"](): AccelGroup;
    // Members
    activate(accel_quark: GLib.Quark, acceleratable: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
    connect(accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags, closure: GObject.Closure): void;
    connect(...args: never[]): never;
    connect_by_path(accel_path: string, closure: GObject.Closure): void;
    disconnect(closure: GObject.Closure | null): boolean;
    disconnect(...args: never[]): never;
    disconnect_key(accel_key: number, accel_mods: Gdk.ModifierType): boolean;
    find(find_func: AccelGroupFindFunc): AccelKey;
    get_is_locked(): boolean;
    get_modifier_mask(): Gdk.ModifierType;
    lock(): void;
    query(accel_key: number, accel_mods: Gdk.ModifierType): AccelGroupEntry[] | null;
    unlock(): void;
    vfunc_accel_changed(keyval: number, modifier: Gdk.ModifierType, accel_closure: GObject.Closure): void;
    static from_accel_closure(closure: GObject.Closure): AccelGroup | null;
}
export module AccelLabel {
    export interface ConstructorProperties extends Label.ConstructorProperties {
        [key: string]: any;
        accel_closure: GObject.Closure;
        accel_widget: Widget;
    }
}
export class AccelLabel extends Label implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<AccelLabel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AccelLabel.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accel_closure: GObject.Closure;
    accel_widget: Widget;
    // Fields
    label: Label | any;
    priv: AccelLabelPrivate;
    // Constructors
    static ["new"](string: string): AccelLabel;
    static ["new"](...args: never[]): never;
    // Members
    get_accel(): [number, Gdk.ModifierType];
    get_accel_widget(): Widget | null;
    get_accel_width(): number;
    refetch(): boolean;
    set_accel(accelerator_key: number, accelerator_mods: Gdk.ModifierType): void;
    set_accel_closure(accel_closure: GObject.Closure | null): void;
    set_accel_widget(accel_widget: Widget | null): void;
}
export module AccelMap {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AccelMap extends GObject.Object {
    constructor(properties?: Partial<AccelMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AccelMap.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this, accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType) => void): number;
    connect_after(signal: 'changed', callback: (_source: this, accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType) => void): number;
    emit(signal: 'changed', accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType): void;
    // Members
    static add_entry(accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType): void;
    static add_filter(filter_pattern: string): void;
    static change_entry(accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType, replace: boolean): boolean;
    static foreach(data: any | null, foreach_func: AccelMapForeach): void;
    static foreach_unfiltered(data: any | null, foreach_func: AccelMapForeach): void;
    static get(): AccelMap;
    static load(file_name: string): void;
    static load_fd(fd: number): void;
    static load_scanner(scanner: GLib.Scanner): void;
    static lock_path(accel_path: string): void;
    static lookup_entry(accel_path: string): [boolean, AccelKey | null];
    static save(file_name: string): void;
    static save_fd(fd: number): void;
    static unlock_path(accel_path: string): void;
}
export module Accessible {
    export interface ConstructorProperties extends Atk.Object.ConstructorProperties {
        [key: string]: any;
        widget: Widget;
    }
}
export class Accessible extends Atk.Object {
    constructor(properties?: Partial<Accessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Accessible.ConstructorProperties>, ...args: any[]): void;
    // Properties
    widget: Widget;
    // Members
    connect_widget_destroyed(): void;
    get_widget(): Widget | null;
    set_widget(widget: Widget | null): void;
    vfunc_connect_widget_destroyed(): void;
    vfunc_widget_set(): void;
    vfunc_widget_unset(): void;
}
export module Action {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        action_group: ActionGroup;
        always_show_image: boolean;
        gicon: Gio.Icon;
        hide_if_empty: boolean;
        icon_name: string;
        is_important: boolean;
        label: string;
        name: string;
        sensitive: boolean;
        short_label: string;
        stock_id: string;
        tooltip: string;
        visible: boolean;
        visible_horizontal: boolean;
        visible_overflown: boolean;
        visible_vertical: boolean;
    }
}
export class Action extends GObject.Object implements Buildable {
    constructor(properties?: Partial<Action.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Action.ConstructorProperties>, ...args: any[]): void;
    // Properties
    action_group: ActionGroup;
    always_show_image: boolean;
    gicon: Gio.Icon;
    hide_if_empty: boolean;
    icon_name: string;
    is_important: boolean;
    label: string;
    name: string;
    sensitive: boolean;
    short_label: string;
    stock_id: string;
    tooltip: string;
    visible: boolean;
    visible_horizontal: boolean;
    visible_overflown: boolean;
    visible_vertical: boolean;
    // Fields
    object: GObject.Object;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    // Constructors
    static ["new"](name: string, label: string | null, tooltip: string | null, stock_id: string | null): Action;
    // Members
    activate(): void;
    block_activate(): void;
    connect_accelerator(): void;
    create_icon(icon_size: number): Widget;
    create_menu(): Widget;
    create_menu_item(): Widget;
    create_tool_item(): Widget;
    disconnect_accelerator(): void;
    get_accel_closure(): GObject.Closure;
    get_accel_path(): string;
    get_always_show_image(): boolean;
    get_gicon(): Gio.Icon;
    get_icon_name(): string;
    get_is_important(): boolean;
    get_label(): string;
    get_name(): string;
    get_proxies(): GLib.SList;
    get_sensitive(): boolean;
    get_short_label(): string;
    get_stock_id(): string;
    get_tooltip(): string;
    get_visible(): boolean;
    get_visible_horizontal(): boolean;
    get_visible_vertical(): boolean;
    is_sensitive(): boolean;
    is_visible(): boolean;
    set_accel_group(accel_group: AccelGroup | null): void;
    set_accel_path(accel_path: string): void;
    set_always_show_image(always_show: boolean): void;
    set_gicon(icon: Gio.Icon): void;
    set_icon_name(icon_name: string): void;
    set_is_important(is_important: boolean): void;
    set_label(label: string): void;
    set_sensitive(sensitive: boolean): void;
    set_short_label(short_label: string): void;
    set_stock_id(stock_id: string): void;
    set_tooltip(tooltip: string): void;
    set_visible(visible: boolean): void;
    set_visible_horizontal(visible_horizontal: boolean): void;
    set_visible_vertical(visible_vertical: boolean): void;
    unblock_activate(): void;
    vfunc_activate(): void;
    vfunc_connect_proxy(proxy: Widget): void;
    vfunc_create_menu(): Widget;
    vfunc_create_menu_item(): Widget;
    vfunc_create_tool_item(): Widget;
    vfunc_disconnect_proxy(proxy: Widget): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}
export module ActionBar {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
    }
}
export class ActionBar extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<ActionBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ActionBar.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): ActionBar;
    // Members
    get_center_widget(): Widget | null;
    pack_end(child: Widget): void;
    pack_start(child: Widget): void;
    set_center_widget(center_widget: Widget | null): void;
}
export module ActionGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accel_group: AccelGroup;
        name: string;
        sensitive: boolean;
        visible: boolean;
    }
}
export class ActionGroup extends GObject.Object implements Buildable {
    constructor(properties?: Partial<ActionGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ActionGroup.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accel_group: AccelGroup;
    name: string;
    sensitive: boolean;
    visible: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'connect-proxy', callback: (_source: this, action: Action, proxy: Widget) => void): number;
    connect_after(signal: 'connect-proxy', callback: (_source: this, action: Action, proxy: Widget) => void): number;
    emit(signal: 'connect-proxy', action: Action, proxy: Widget): void;
    connect(signal: 'disconnect-proxy', callback: (_source: this, action: Action, proxy: Widget) => void): number;
    connect_after(signal: 'disconnect-proxy', callback: (_source: this, action: Action, proxy: Widget) => void): number;
    emit(signal: 'disconnect-proxy', action: Action, proxy: Widget): void;
    connect(signal: 'post-activate', callback: (_source: this, action: Action) => void): number;
    connect_after(signal: 'post-activate', callback: (_source: this, action: Action) => void): number;
    emit(signal: 'post-activate', action: Action): void;
    connect(signal: 'pre-activate', callback: (_source: this, action: Action) => void): number;
    connect_after(signal: 'pre-activate', callback: (_source: this, action: Action) => void): number;
    emit(signal: 'pre-activate', action: Action): void;
    // Constructors
    static ["new"](name: string): ActionGroup;
    // Members
    add_action(action: Action): void;
    add_action_with_accel(action: Action, accelerator: string | null): void;
    get_accel_group(): AccelGroup;
    get_action(action_name: string): Action;
    get_name(): string;
    get_sensitive(): boolean;
    get_visible(): boolean;
    list_actions(): GLib.List;
    remove_action(action: Action): void;
    set_accel_group(accel_group: AccelGroup | null): void;
    set_sensitive(sensitive: boolean): void;
    set_translate_func(func: TranslateFunc, notify: GLib.DestroyNotify): void;
    set_translation_domain(domain: string | null): void;
    set_visible(visible: boolean): void;
    translate_string(string: string): string;
    vfunc_get_action(action_name: string): Action;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}
export module Adjustment {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        lower: number;
        page_increment: number;
        page_size: number;
        step_increment: number;
        upper: number;
        value: number;
    }
}
export class Adjustment extends GObject.InitiallyUnowned {
    constructor(properties?: Partial<Adjustment.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Adjustment.ConstructorProperties>, ...args: any[]): void;
    // Properties
    lower: number;
    page_increment: number;
    page_size: number;
    step_increment: number;
    upper: number;
    value: number;
    // Fields
    priv: AdjustmentPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;
    connect(signal: 'value-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'value-changed', callback: (_source: this) => void): number;
    emit(signal: 'value-changed'): void;
    // Constructors
    static ["new"](value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number): Adjustment;
    // Members
    changed(): void;
    clamp_page(lower: number, upper: number): void;
    configure(value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number): void;
    get_lower(): number;
    get_minimum_increment(): number;
    get_page_increment(): number;
    get_page_size(): number;
    get_step_increment(): number;
    get_upper(): number;
    get_value(): number;
    set_lower(lower: number): void;
    set_page_increment(page_increment: number): void;
    set_page_size(page_size: number): void;
    set_step_increment(step_increment: number): void;
    set_upper(upper: number): void;
    set_value(value: number): void;
    value_changed(): void;
    vfunc_changed(): void;
    vfunc_value_changed(): void;
}
export module Alignment {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        bottom_padding: number;
        left_padding: number;
        right_padding: number;
        top_padding: number;
        xalign: number;
        xscale: number;
        yalign: number;
        yscale: number;
    }
}
export class Alignment extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Alignment.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Alignment.ConstructorProperties>, ...args: any[]): void;
    // Properties
    bottom_padding: number;
    left_padding: number;
    right_padding: number;
    top_padding: number;
    xalign: number;
    xscale: number;
    yalign: number;
    yscale: number;
    // Fields
    bin: Bin;
    // Constructors
    static ["new"](xalign: number, yalign: number, xscale: number, yscale: number): Alignment;
    // Members
    get_padding(): [number | null, number | null, number | null, number | null];
    set(xalign: number, yalign: number, xscale: number, yscale: number): void;
    set(...args: never[]): never;
    set_padding(padding_top: number, padding_bottom: number, padding_left: number, padding_right: number): void;
}
export module AppChooserButton {
    export interface ConstructorProperties extends ComboBox.ConstructorProperties {
        [key: string]: any;
        heading: string;
        show_default_item: boolean;
        show_dialog_item: boolean;
    }
}
export class AppChooserButton extends ComboBox implements Atk.ImplementorIface, AppChooser, Buildable, CellEditable, CellLayout {
    constructor(properties?: Partial<AppChooserButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppChooserButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    heading: string;
    show_default_item: boolean;
    show_dialog_item: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'custom-item-activated', callback: (_source: this, item_name: string) => void): number;
    connect_after(signal: 'custom-item-activated', callback: (_source: this, item_name: string) => void): number;
    emit(signal: 'custom-item-activated', item_name: string): void;
    // Implemented Properties
    content_type: string;
    // Constructors
    static ["new"](content_type: string): AppChooserButton;
    static ["new"](...args: never[]): never;
    // Members
    append_custom_item(name: string, label: string, icon: Gio.Icon): void;
    append_separator(): void;
    get_heading(): string | null;
    get_show_default_item(): boolean;
    get_show_dialog_item(): boolean;
    set_active_custom_item(name: string): void;
    set_heading(heading: string): void;
    set_show_default_item(setting: boolean): void;
    set_show_dialog_item(setting: boolean): void;
    vfunc_custom_item_activated(item_name: string): void;
    // Implemented Members
    get_app_info(): Gio.AppInfo | null;
    get_content_type(): string;
    refresh(): void;
}
export module AppChooserDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
        gfile: Gio.File;
        heading: string;
    }
}
export class AppChooserDialog extends Dialog implements Atk.ImplementorIface, AppChooser, Buildable {
    constructor(properties?: Partial<AppChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppChooserDialog.ConstructorProperties>, ...args: any[]): void;
    // Properties
    gfile: Gio.File;
    heading: string;
    // Implemented Properties
    content_type: string;
    // Constructors
    static ["new"](parent: Window | null, flags: DialogFlags, file: Gio.File): AppChooserDialog;
    static ["new"](...args: never[]): never;
    static new_for_content_type(parent: Window | null, flags: DialogFlags, content_type: string): AppChooserDialog;
    // Members
    get_heading(): string | null;
    get_widget(): Widget;
    set_heading(heading: string): void;
    // Implemented Members
    get_app_info(): Gio.AppInfo | null;
    get_content_type(): string;
    refresh(): void;
}
export module AppChooserWidget {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        default_text: string;
        show_default: boolean;
        show_fallback: boolean;
        show_other: boolean;
        show_recommended: boolean;
    }
}
export class AppChooserWidget extends Box implements Atk.ImplementorIface, AppChooser, Buildable, Orientable {
    constructor(properties?: Partial<AppChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppChooserWidget.ConstructorProperties>, ...args: any[]): void;
    // Properties
    default_text: string;
    show_default: boolean;
    show_fallback: boolean;
    show_other: boolean;
    show_recommended: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'application-activated', callback: (_source: this, application: Gio.AppInfo) => void): number;
    connect_after(signal: 'application-activated', callback: (_source: this, application: Gio.AppInfo) => void): number;
    emit(signal: 'application-activated', application: Gio.AppInfo): void;
    connect(signal: 'application-selected', callback: (_source: this, application: Gio.AppInfo) => void): number;
    connect_after(signal: 'application-selected', callback: (_source: this, application: Gio.AppInfo) => void): number;
    emit(signal: 'application-selected', application: Gio.AppInfo): void;
    connect(signal: 'populate-popup', callback: (_source: this, menu: Menu, application: Gio.AppInfo) => void): number;
    connect_after(signal: 'populate-popup', callback: (_source: this, menu: Menu, application: Gio.AppInfo) => void): number;
    emit(signal: 'populate-popup', menu: Menu, application: Gio.AppInfo): void;
    // Implemented Properties
    content_type: string;
    // Constructors
    static ["new"](content_type: string): AppChooserWidget;
    static ["new"](...args: never[]): never;
    // Members
    get_default_text(): string;
    get_show_all(): boolean;
    get_show_default(): boolean;
    get_show_fallback(): boolean;
    get_show_other(): boolean;
    get_show_recommended(): boolean;
    set_default_text(text: string): void;
    set_show_all(setting: boolean): void;
    set_show_default(setting: boolean): void;
    set_show_fallback(setting: boolean): void;
    set_show_other(setting: boolean): void;
    set_show_recommended(setting: boolean): void;
    vfunc_application_activated(app_info: Gio.AppInfo): void;
    vfunc_application_selected(app_info: Gio.AppInfo): void;
    vfunc_populate_popup(menu: Menu, app_info: Gio.AppInfo): void;
    // Implemented Members
    get_app_info(): Gio.AppInfo | null;
    get_content_type(): string;
    refresh(): void;
}
export module Application {
    export interface ConstructorProperties extends Gio.Application.ConstructorProperties {
        [key: string]: any;
        active_window: Window;
        app_menu: Gio.MenuModel;
        menubar: Gio.MenuModel;
        register_session: boolean;
        screensaver_active: boolean;
    }
}
export class Application extends Gio.Application implements Gio.ActionGroup, Gio.ActionMap {
    constructor(properties?: Partial<Application.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Application.ConstructorProperties>, ...args: any[]): void;
    // Properties
    active_window: Window;
    app_menu: Gio.MenuModel;
    menubar: Gio.MenuModel;
    register_session: boolean;
    screensaver_active: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'query-end', callback: (_source: this) => void): number;
    connect_after(signal: 'query-end', callback: (_source: this) => void): number;
    emit(signal: 'query-end'): void;
    connect(signal: 'window-added', callback: (_source: this, window: Window) => void): number;
    connect_after(signal: 'window-added', callback: (_source: this, window: Window) => void): number;
    emit(signal: 'window-added', window: Window): void;
    connect(signal: 'window-removed', callback: (_source: this, window: Window) => void): number;
    connect_after(signal: 'window-removed', callback: (_source: this, window: Window) => void): number;
    emit(signal: 'window-removed', window: Window): void;
    // Constructors
    static ["new"](application_id: string | null, flags: Gio.ApplicationFlags): Application;
    static ["new"](...args: never[]): never;
    // Members
    add_accelerator(accelerator: string, action_name: string, parameter: GLib.Variant | null): void;
    add_window(window: Window): void;
    get_accels_for_action(detailed_action_name: string): string[];
    get_actions_for_accel(accel: string): string[];
    get_active_window(): Window | null;
    get_app_menu(): Gio.MenuModel | null;
    get_menu_by_id(id: string): Gio.Menu;
    get_menubar(): Gio.MenuModel;
    get_window_by_id(id: number): Window | null;
    get_windows(): GLib.List;
    inhibit(window: Window | null, flags: ApplicationInhibitFlags, reason: string | null): number;
    is_inhibited(flags: ApplicationInhibitFlags): boolean;
    list_action_descriptions(): string[];
    prefers_app_menu(): boolean;
    remove_accelerator(action_name: string, parameter: GLib.Variant | null): void;
    remove_window(window: Window): void;
    set_accels_for_action(detailed_action_name: string, accels: string[]): void;
    set_app_menu(app_menu: Gio.MenuModel | null): void;
    set_menubar(menubar: Gio.MenuModel | null): void;
    uninhibit(cookie: number): void;
    vfunc_window_added(window: Window): void;
    vfunc_window_removed(window: Window): void;
    // Implemented Members
    action_added(action_name: string): void;
    action_enabled_changed(action_name: string, enabled: boolean): void;
    action_removed(action_name: string): void;
    action_state_changed(action_name: string, state: GLib.Variant): void;
    activate_action(action_name: string, parameter: GLib.Variant | null): void;
    change_action_state(action_name: string, value: GLib.Variant): void;
    get_action_enabled(action_name: string): boolean;
    get_action_parameter_type(action_name: string): GLib.VariantType | null;
    get_action_state(action_name: string): GLib.Variant | null;
    get_action_state_hint(action_name: string): GLib.Variant | null;
    get_action_state_type(action_name: string): GLib.VariantType | null;
    has_action(action_name: string): boolean;
    list_actions(): string[];
    list_actions(...args: never[]): never;
    query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    vfunc_action_added(action_name: string): void;
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
    vfunc_action_removed(action_name: string): void;
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
    vfunc_activate_action(action_name: string, parameter: GLib.Variant | null): void;
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
    vfunc_get_action_enabled(action_name: string): boolean;
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
    vfunc_get_action_state(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
    vfunc_has_action(action_name: string): boolean;
    vfunc_list_actions(): string[];
    vfunc_query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    add_action(action: Gio.Action): void;
    add_action(...args: never[]): never;
    add_action_entries(entries: Gio.ActionEntry[], user_data: any | null): void;
    lookup_action(action_name: string): Gio.Action;
    remove_action(action_name: string): void;
    remove_action(...args: never[]): never;
    vfunc_add_action(action: Gio.Action): void;
    vfunc_lookup_action(action_name: string): Gio.Action;
    vfunc_remove_action(action_name: string): void;
}
export module ApplicationWindow {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        show_menubar: boolean;
    }
}
export class ApplicationWindow extends Window implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Buildable {
    constructor(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]): void;
    // Properties
    show_menubar: boolean;
    // Constructors
    static ["new"](application: Application): ApplicationWindow;
    static ["new"](...args: never[]): never;
    // Members
    get_help_overlay(): ShortcutsWindow | null;
    get_id(): number;
    get_show_menubar(): boolean;
    set_help_overlay(help_overlay: ShortcutsWindow | null): void;
    set_show_menubar(show_menubar: boolean): void;
    // Implemented Members
    action_added(action_name: string): void;
    action_enabled_changed(action_name: string, enabled: boolean): void;
    action_removed(action_name: string): void;
    action_state_changed(action_name: string, state: GLib.Variant): void;
    activate_action(action_name: string, parameter: GLib.Variant | null): void;
    change_action_state(action_name: string, value: GLib.Variant): void;
    get_action_enabled(action_name: string): boolean;
    get_action_parameter_type(action_name: string): GLib.VariantType | null;
    get_action_state(action_name: string): GLib.Variant | null;
    get_action_state_hint(action_name: string): GLib.Variant | null;
    get_action_state_type(action_name: string): GLib.VariantType | null;
    has_action(action_name: string): boolean;
    list_actions(): string[];
    query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    vfunc_action_added(action_name: string): void;
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
    vfunc_action_removed(action_name: string): void;
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
    vfunc_activate_action(action_name: string, parameter: GLib.Variant | null): void;
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
    vfunc_get_action_enabled(action_name: string): boolean;
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
    vfunc_get_action_state(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
    vfunc_has_action(action_name: string): boolean;
    vfunc_list_actions(): string[];
    vfunc_query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    add_action(action: Gio.Action): void;
    add_action_entries(entries: Gio.ActionEntry[], user_data: any | null): void;
    lookup_action(action_name: string): Gio.Action;
    remove_action(action_name: string): void;
    vfunc_add_action(action: Gio.Action): void;
    vfunc_lookup_action(action_name: string): Gio.Action;
    vfunc_remove_action(action_name: string): void;
}
export module Arrow {
    export interface ConstructorProperties extends Misc.ConstructorProperties {
        [key: string]: any;
        arrow_type: ArrowType;
        shadow_type: ShadowType;
    }
}
export class Arrow extends Misc implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Arrow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Arrow.ConstructorProperties>, ...args: any[]): void;
    // Properties
    arrow_type: ArrowType;
    shadow_type: ShadowType;
    // Fields
    misc: Misc;
    // Constructors
    static ["new"](arrow_type: ArrowType, shadow_type: ShadowType): Arrow;
    // Members
    set(arrow_type: ArrowType, shadow_type: ShadowType): void;
    set(...args: never[]): never;
}
export module ArrowAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ArrowAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {
    constructor(properties?: Partial<ArrowAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ArrowAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ArrowAccessiblePrivate | any;
    // Implemented Members
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number | null, number | null];
    get_image_size(): [number | null, number | null];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number | null, number | null];
    vfunc_get_image_size(): [number | null, number | null];
    vfunc_set_image_description(description: string): boolean;
}
export module AspectFrame {
    export interface ConstructorProperties extends Frame.ConstructorProperties {
        [key: string]: any;
        obey_child: boolean;
        ratio: number;
        xalign: number;
        yalign: number;
    }
}
export class AspectFrame extends Frame implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<AspectFrame.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AspectFrame.ConstructorProperties>, ...args: any[]): void;
    // Properties
    obey_child: boolean;
    ratio: number;
    xalign: number;
    yalign: number;
    // Fields
    frame: Frame;
    // Constructors
    static ["new"](label: string | null, xalign: number, yalign: number, ratio: number, obey_child: boolean): AspectFrame;
    static ["new"](...args: never[]): never;
    // Members
    set(xalign: number, yalign: number, ratio: number, obey_child: boolean): void;
    set(...args: never[]): never;
}
export module Assistant {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        use_header_bar: number;
    }
}
export class Assistant extends Window implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Assistant.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Assistant.ConstructorProperties>, ...args: any[]): void;
    // Properties
    use_header_bar: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'apply', callback: (_source: this) => void): number;
    connect_after(signal: 'apply', callback: (_source: this) => void): number;
    emit(signal: 'apply'): void;
    connect(signal: 'cancel', callback: (_source: this) => void): number;
    connect_after(signal: 'cancel', callback: (_source: this) => void): number;
    emit(signal: 'cancel'): void;
    connect(signal: 'close', callback: (_source: this) => void): number;
    connect_after(signal: 'close', callback: (_source: this) => void): number;
    emit(signal: 'close'): void;
    connect(signal: 'escape', callback: (_source: this) => void): number;
    connect_after(signal: 'escape', callback: (_source: this) => void): number;
    emit(signal: 'escape'): void;
    connect(signal: 'prepare', callback: (_source: this, page: Widget) => void): number;
    connect_after(signal: 'prepare', callback: (_source: this, page: Widget) => void): number;
    emit(signal: 'prepare', page: Widget): void;
    // Constructors
    static ["new"](): Assistant;
    static ["new"](...args: never[]): never;
    // Members
    add_action_widget(child: Widget): void;
    append_page(page: Widget): number;
    commit(): void;
    get_current_page(): number;
    get_n_pages(): number;
    get_nth_page(page_num: number): Widget | null;
    get_page_complete(page: Widget): boolean;
    get_page_has_padding(page: Widget): boolean;
    get_page_header_image(page: Widget): GdkPixbuf.Pixbuf;
    get_page_side_image(page: Widget): GdkPixbuf.Pixbuf;
    get_page_title(page: Widget): string;
    get_page_type(page: Widget): AssistantPageType;
    insert_page(page: Widget, position: number): number;
    next_page(): void;
    prepend_page(page: Widget): number;
    previous_page(): void;
    remove_action_widget(child: Widget): void;
    remove_page(page_num: number): void;
    set_current_page(page_num: number): void;
    set_forward_page_func(page_func: AssistantPageFunc | null, destroy: GLib.DestroyNotify): void;
    set_page_complete(page: Widget, complete: boolean): void;
    set_page_has_padding(page: Widget, has_padding: boolean): void;
    set_page_header_image(page: Widget, pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_page_side_image(page: Widget, pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_page_title(page: Widget, title: string): void;
    set_page_type(page: Widget, type: AssistantPageType): void;
    update_buttons_state(): void;
    vfunc_apply(): void;
    vfunc_cancel(): void;
    vfunc_close(): void;
    vfunc_prepare(page: Widget): void;
}
export module Bin {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Bin extends Container implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Bin.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Bin.ConstructorProperties>, ...args: any[]): void;
    // Fields
    container: Container;
    // Members
    get_child(): Widget | null;
}
export module BooleanCellAccessible {
    export interface ConstructorProperties extends RendererCellAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class BooleanCellAccessible extends RendererCellAccessible implements Atk.Action, Atk.Component, Atk.TableCell {
    constructor(properties?: Partial<BooleanCellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BooleanCellAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: BooleanCellAccessiblePrivate | any;
}
export module Box {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        baseline_position: BaselinePosition;
        homogeneous: boolean;
        spacing: number;
    }
}
export class Box extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<Box.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Box.ConstructorProperties>, ...args: any[]): void;
    // Properties
    baseline_position: BaselinePosition;
    homogeneous: boolean;
    spacing: number;
    // Fields
    container: Container;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](orientation: Orientation, spacing: number): Box;
    // Members
    get_baseline_position(): BaselinePosition;
    get_center_widget(): Widget | null;
    get_homogeneous(): boolean;
    get_spacing(): number;
    pack_end(child: Widget, expand: boolean, fill: boolean, padding: number): void;
    pack_start(child: Widget, expand: boolean, fill: boolean, padding: number): void;
    query_child_packing(child: Widget): [boolean, boolean, number, PackType];
    reorder_child(child: Widget, position: number): void;
    set_baseline_position(position: BaselinePosition): void;
    set_center_widget(widget: Widget | null): void;
    set_child_packing(child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType): void;
    set_homogeneous(homogeneous: boolean): void;
    set_spacing(spacing: number): void;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module Builder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        translation_domain: string;
    }
}
export class Builder extends GObject.Object {
    constructor(properties?: Partial<Builder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Builder.ConstructorProperties>, ...args: any[]): void;
    // Properties
    translation_domain: string;
    // Fields
    priv: BuilderPrivate;
    // Constructors
    static ["new"](): Builder;
    static new_from_file(filename: string): Builder;
    static new_from_resource(resource_path: string): Builder;
    static new_from_string(string: string, length: number): Builder;
    // Members
    add_callback_symbol(callback_name: string, callback_symbol: GObject.Callback): void;
    add_from_file(filename: string): number;
    add_from_resource(resource_path: string): number;
    add_from_string(buffer: string, length: number): number;
    add_objects_from_file(filename: string, object_ids: string[]): number;
    add_objects_from_resource(resource_path: string, object_ids: string[]): number;
    add_objects_from_string(buffer: string, length: number, object_ids: string[]): number;
    connect_signals(user_data: any | null): void;
    connect_signals_full(func: BuilderConnectFunc): void;
    expose_object(name: string, object: GObject.Object): void;
    extend_with_template(widget: Widget, template_type: GType, buffer: string, length: number): number;
    get_application(): Application | null;
    get_object<T = GObject.Object>(name: string): T | null;
    get_objects(): GLib.SList;
    get_translation_domain(): string;
    get_type_from_name(type_name: string): GType;
    set_application(application: Application): void;
    set_translation_domain(domain: string | null): void;
    value_from_string(pspec: GObject.ParamSpec, string: string): [boolean, GObject.Value];
    value_from_string_type(type: GType, string: string): [boolean, GObject.Value];
    vfunc_get_type_from_name(type_name: string): GType;
}
export module Button {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        always_show_image: boolean;
        image: Widget;
        image_position: PositionType;
        label: string;
        relief: ReliefStyle;
        use_stock: boolean;
        use_underline: boolean;
        xalign: number;
        yalign: number;
    }
}
export class Button extends Bin implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<Button.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Button.ConstructorProperties>, ...args: any[]): void;
    // Properties
    always_show_image: boolean;
    image: Widget;
    image_position: PositionType;
    label: string;
    relief: ReliefStyle;
    use_stock: boolean;
    use_underline: boolean;
    xalign: number;
    yalign: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    connect(signal: 'clicked', callback: (_source: this) => void): number;
    connect_after(signal: 'clicked', callback: (_source: this) => void): number;
    emit(signal: 'clicked'): void;
    connect(signal: 'enter', callback: (_source: this) => void): number;
    connect_after(signal: 'enter', callback: (_source: this) => void): number;
    emit(signal: 'enter'): void;
    connect(signal: 'leave', callback: (_source: this) => void): number;
    connect_after(signal: 'leave', callback: (_source: this) => void): number;
    emit(signal: 'leave'): void;
    connect(signal: 'pressed', callback: (_source: this) => void): number;
    connect_after(signal: 'pressed', callback: (_source: this) => void): number;
    emit(signal: 'pressed'): void;
    connect(signal: 'released', callback: (_source: this) => void): number;
    connect_after(signal: 'released', callback: (_source: this) => void): number;
    emit(signal: 'released'): void;
    // Implemented Properties
    action_name: string;
    action_target: GLib.Variant;
    related_action: Action;
    use_action_appearance: boolean;
    // Constructors
    static ["new"](): Button;
    static new_from_icon_name(icon_name: string | null, size: number): Button;
    static new_from_stock(stock_id: string): Button;
    static new_with_label(label: string): Button;
    static new_with_mnemonic(label: string): Button;
    // Members
    clicked(): void;
    enter(): void;
    get_alignment(): [number, number];
    get_always_show_image(): boolean;
    get_event_window(): Gdk.Window;
    get_focus_on_click(): boolean;
    get_image(): Widget | null;
    get_image_position(): PositionType;
    get_label(): string;
    get_relief(): ReliefStyle;
    get_use_stock(): boolean;
    get_use_underline(): boolean;
    leave(): void;
    pressed(): void;
    released(): void;
    set_alignment(xalign: number, yalign: number): void;
    set_always_show_image(always_show: boolean): void;
    set_focus_on_click(focus_on_click: boolean): void;
    set_image(image: Widget | null): void;
    set_image_position(position: PositionType): void;
    set_label(label: string): void;
    set_relief(relief: ReliefStyle): void;
    set_use_stock(use_stock: boolean): void;
    set_use_underline(use_underline: boolean): void;
    vfunc_activate(): void;
    vfunc_clicked(): void;
    vfunc_enter(): void;
    vfunc_leave(): void;
    vfunc_pressed(): void;
    vfunc_released(): void;
    // Implemented Members
    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name: string | null): void;
    set_action_target_value(target_value: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name: string | null): void;
    vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action: Action | null): void;
    vfunc_sync_action_properties(action: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module ButtonAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ButtonAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(properties?: Partial<ButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ButtonAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ButtonAccessiblePrivate | any;
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
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number | null, number | null];
    get_image_size(): [number | null, number | null];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number | null, number | null];
    vfunc_get_image_size(): [number | null, number | null];
    vfunc_set_image_description(description: string): boolean;
}
export module ButtonBox {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        layout_style: ButtonBoxStyle;
    }
}
export class ButtonBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<ButtonBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ButtonBox.ConstructorProperties>, ...args: any[]): void;
    // Properties
    layout_style: ButtonBoxStyle;
    // Fields
    box: Box;
    // Constructors
    static ["new"](orientation: Orientation): ButtonBox;
    static ["new"](...args: never[]): never;
    // Members
    get_child_non_homogeneous(child: Widget): boolean;
    get_child_secondary(child: Widget): boolean;
    get_layout(): ButtonBoxStyle;
    set_child_non_homogeneous(child: Widget, non_homogeneous: boolean): void;
    set_child_secondary(child: Widget, is_secondary: boolean): void;
    set_layout(layout_style: ButtonBoxStyle): void;
}
export module Calendar {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        day: number;
        detail_height_rows: number;
        detail_width_chars: number;
        month: number;
        no_month_change: boolean;
        show_day_names: boolean;
        show_details: boolean;
        show_heading: boolean;
        show_week_numbers: boolean;
        year: number;
    }
}
export class Calendar extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Calendar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Calendar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    day: number;
    detail_height_rows: number;
    detail_width_chars: number;
    month: number;
    no_month_change: boolean;
    show_day_names: boolean;
    show_details: boolean;
    show_heading: boolean;
    show_week_numbers: boolean;
    year: number;
    // Fields
    widget: Widget;
    priv: CalendarPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'day-selected', callback: (_source: this) => void): number;
    connect_after(signal: 'day-selected', callback: (_source: this) => void): number;
    emit(signal: 'day-selected'): void;
    connect(signal: 'day-selected-double-click', callback: (_source: this) => void): number;
    connect_after(signal: 'day-selected-double-click', callback: (_source: this) => void): number;
    emit(signal: 'day-selected-double-click'): void;
    connect(signal: 'month-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'month-changed', callback: (_source: this) => void): number;
    emit(signal: 'month-changed'): void;
    connect(signal: 'next-month', callback: (_source: this) => void): number;
    connect_after(signal: 'next-month', callback: (_source: this) => void): number;
    emit(signal: 'next-month'): void;
    connect(signal: 'next-year', callback: (_source: this) => void): number;
    connect_after(signal: 'next-year', callback: (_source: this) => void): number;
    emit(signal: 'next-year'): void;
    connect(signal: 'prev-month', callback: (_source: this) => void): number;
    connect_after(signal: 'prev-month', callback: (_source: this) => void): number;
    emit(signal: 'prev-month'): void;
    connect(signal: 'prev-year', callback: (_source: this) => void): number;
    connect_after(signal: 'prev-year', callback: (_source: this) => void): number;
    emit(signal: 'prev-year'): void;
    // Constructors
    static ["new"](): Calendar;
    // Members
    clear_marks(): void;
    get_date(): [number | null, number | null, number | null];
    get_day_is_marked(day: number): boolean;
    get_detail_height_rows(): number;
    get_detail_width_chars(): number;
    get_display_options(): CalendarDisplayOptions;
    mark_day(day: number): void;
    select_day(day: number): void;
    select_month(month: number, year: number): void;
    set_detail_func(func: CalendarDetailFunc, destroy: GLib.DestroyNotify): void;
    set_detail_height_rows(rows: number): void;
    set_detail_width_chars(chars: number): void;
    set_display_options(flags: CalendarDisplayOptions): void;
    unmark_day(day: number): void;
    vfunc_day_selected(): void;
    vfunc_day_selected_double_click(): void;
    vfunc_month_changed(): void;
    vfunc_next_month(): void;
    vfunc_next_year(): void;
    vfunc_prev_month(): void;
    vfunc_prev_year(): void;
}
export module CellAccessible {
    export interface ConstructorProperties extends Accessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class CellAccessible extends Accessible implements Atk.Action, Atk.Component, Atk.TableCell {
    constructor(properties?: Partial<CellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: CellAccessiblePrivate;
    // Members
    vfunc_update_cache(emit_signal: boolean): void;
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
    get_position(...args: never[]): never;
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
    vfunc_get_position(...args: never[]): never;
    vfunc_get_size(): [number | null, number | null];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_column_header_cells(): Atk.Object[];
    get_column_span(): number;
    get_position(): [boolean, number, number];
    get_position(...args: never[]): never;
    get_row_column_span(): [boolean, number, number, number, number];
    get_row_header_cells(): Atk.Object[];
    get_row_span(): number;
    get_table(): Atk.Object;
    vfunc_get_column_header_cells(): Atk.Object[];
    vfunc_get_column_span(): number;
    vfunc_get_position(): [boolean, number, number];
    vfunc_get_position(...args: never[]): never;
    vfunc_get_row_column_span(): [boolean, number, number, number, number];
    vfunc_get_row_header_cells(): Atk.Object[];
    vfunc_get_row_span(): number;
    vfunc_get_table(): Atk.Object;
}
export module CellArea {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        edit_widget: CellEditable;
        edited_cell: CellRenderer;
        focus_cell: CellRenderer;
    }
}
export abstract class CellArea extends GObject.InitiallyUnowned implements Buildable, CellLayout {
    constructor(properties?: Partial<CellArea.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellArea.ConstructorProperties>, ...args: any[]): void;
    // Properties
    edit_widget: CellEditable;
    edited_cell: CellRenderer;
    focus_cell: CellRenderer;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'add-editable', callback: (_source: this, renderer: CellRenderer, editable: CellEditable, cell_area: Gdk.Rectangle, path: string) => void): number;
    connect_after(signal: 'add-editable', callback: (_source: this, renderer: CellRenderer, editable: CellEditable, cell_area: Gdk.Rectangle, path: string) => void): number;
    emit(signal: 'add-editable', renderer: CellRenderer, editable: CellEditable, cell_area: Gdk.Rectangle, path: string): void;
    connect(signal: 'apply-attributes', callback: (_source: this, model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean) => void): number;
    connect_after(signal: 'apply-attributes', callback: (_source: this, model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean) => void): number;
    emit(signal: 'apply-attributes', model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean): void;
    connect(signal: 'focus-changed', callback: (_source: this, renderer: CellRenderer, path: string) => void): number;
    connect_after(signal: 'focus-changed', callback: (_source: this, renderer: CellRenderer, path: string) => void): number;
    emit(signal: 'focus-changed', renderer: CellRenderer, path: string): void;
    connect(signal: 'remove-editable', callback: (_source: this, renderer: CellRenderer, editable: CellEditable) => void): number;
    connect_after(signal: 'remove-editable', callback: (_source: this, renderer: CellRenderer, editable: CellEditable) => void): number;
    emit(signal: 'remove-editable', renderer: CellRenderer, editable: CellEditable): void;
    // Members
    activate(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, flags: CellRendererState, edit_only: boolean): boolean;
    activate_cell(widget: Widget, renderer: CellRenderer, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState): boolean;
    add(renderer: CellRenderer): void;
    add_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): void;
    apply_attributes(tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean): void;
    attribute_connect(renderer: CellRenderer, attribute: string, column: number): void;
    attribute_disconnect(renderer: CellRenderer, attribute: string): void;
    attribute_get_column(renderer: CellRenderer, attribute: string): number;
    cell_get_property(renderer: CellRenderer, property_name: string, value: (GObject.Value | string | boolean | number)): void;
    cell_set_property(renderer: CellRenderer, property_name: string, value: (GObject.Value | string | boolean | number)): void;
    copy_context(context: CellAreaContext): CellAreaContext;
    create_context(): CellAreaContext;
    event(context: CellAreaContext, widget: Widget, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState): number;
    focus(direction: DirectionType): boolean;
    foreach(callback: CellCallback): void;
    foreach_alloc(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, background_area: Gdk.Rectangle, callback: CellAllocCallback): void;
    get_cell_allocation(context: CellAreaContext, widget: Widget, renderer: CellRenderer, cell_area: Gdk.Rectangle): Gdk.Rectangle;
    get_cell_at_position(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, x: number, y: number): [CellRenderer, Gdk.Rectangle | null];
    get_current_path_string(): string;
    get_edit_widget(): CellEditable;
    get_edited_cell(): CellRenderer;
    get_focus_cell(): CellRenderer;
    get_focus_from_sibling(renderer: CellRenderer): CellRenderer | null;
    get_focus_siblings(renderer: CellRenderer): GLib.List;
    get_preferred_height(context: CellAreaContext, widget: Widget): [number | null, number | null];
    get_preferred_height_for_width(context: CellAreaContext, widget: Widget, width: number): [number | null, number | null];
    get_preferred_width(context: CellAreaContext, widget: Widget): [number | null, number | null];
    get_preferred_width_for_height(context: CellAreaContext, widget: Widget, height: number): [number | null, number | null];
    get_request_mode(): SizeRequestMode;
    has_renderer(renderer: CellRenderer): boolean;
    inner_cell_area(widget: Widget, cell_area: Gdk.Rectangle): Gdk.Rectangle;
    is_activatable(): boolean;
    is_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): boolean;
    remove(renderer: CellRenderer): void;
    remove_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): void;
    render(context: CellAreaContext, widget: Widget, cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState, paint_focus: boolean): void;
    request_renderer(renderer: CellRenderer, orientation: Orientation, widget: Widget, for_size: number): [number | null, number | null];
    set_focus_cell(renderer: CellRenderer): void;
    stop_editing(canceled: boolean): void;
    vfunc_activate(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, flags: CellRendererState, edit_only: boolean): boolean;
    vfunc_add(renderer: CellRenderer): void;
    vfunc_apply_attributes(tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean): void;
    vfunc_copy_context(context: CellAreaContext): CellAreaContext;
    vfunc_create_context(): CellAreaContext;
    vfunc_event(context: CellAreaContext, widget: Widget, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState): number;
    vfunc_focus(direction: DirectionType): boolean;
    vfunc_foreach(callback: CellCallback): void;
    vfunc_foreach_alloc(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, background_area: Gdk.Rectangle, callback: CellAllocCallback): void;
    vfunc_get_cell_property(renderer: CellRenderer, property_id: number, value: (GObject.Value | string | boolean | number), pspec: GObject.ParamSpec): void;
    vfunc_get_preferred_height(context: CellAreaContext, widget: Widget): [number | null, number | null];
    vfunc_get_preferred_height_for_width(context: CellAreaContext, widget: Widget, width: number): [number | null, number | null];
    vfunc_get_preferred_width(context: CellAreaContext, widget: Widget): [number | null, number | null];
    vfunc_get_preferred_width_for_height(context: CellAreaContext, widget: Widget, height: number): [number | null, number | null];
    vfunc_get_request_mode(): SizeRequestMode;
    vfunc_is_activatable(): boolean;
    vfunc_remove(renderer: CellRenderer): void;
    vfunc_render(context: CellAreaContext, widget: Widget, cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState, paint_focus: boolean): void;
    vfunc_set_cell_property(renderer: CellRenderer, property_id: number, value: (GObject.Value | string | boolean | number), pspec: GObject.ParamSpec): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): GLib.List;
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): this;
    vfunc_get_area(...args: never[]): never;
    vfunc_get_cells(): GLib.List;
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
}
export module CellAreaBox {
    export interface ConstructorProperties extends CellArea.ConstructorProperties {
        [key: string]: any;
        spacing: number;
    }
}
export class CellAreaBox extends CellArea implements Buildable, CellLayout, Orientable {
    constructor(properties?: Partial<CellAreaBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellAreaBox.ConstructorProperties>, ...args: any[]): void;
    // Properties
    spacing: number;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](): CellAreaBox;
    // Members
    get_spacing(): number;
    pack_end(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
    pack_end(...args: never[]): never;
    pack_start(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
    pack_start(...args: never[]): never;
    set_spacing(spacing: number): void;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module CellAreaContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        area: CellArea;
        minimum_height: number;
        minimum_width: number;
        natural_height: number;
        natural_width: number;
    }
}
export class CellAreaContext extends GObject.Object {
    constructor(properties?: Partial<CellAreaContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellAreaContext.ConstructorProperties>, ...args: any[]): void;
    // Properties
    area: CellArea;
    minimum_height: number;
    minimum_width: number;
    natural_height: number;
    natural_width: number;
    // Members
    allocate(width: number, height: number): void;
    get_allocation(): [number | null, number | null];
    get_area(): CellArea;
    get_preferred_height(): [number | null, number | null];
    get_preferred_height_for_width(width: number): [number | null, number | null];
    get_preferred_width(): [number | null, number | null];
    get_preferred_width_for_height(height: number): [number | null, number | null];
    push_preferred_height(minimum_height: number, natural_height: number): void;
    push_preferred_width(minimum_width: number, natural_width: number): void;
    reset(): void;
    vfunc_allocate(width: number, height: number): void;
    vfunc_get_preferred_height_for_width(width: number): [number | null, number | null];
    vfunc_get_preferred_width_for_height(height: number): [number | null, number | null];
    vfunc_reset(): void;
}
export module CellRenderer {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        cell_background: string;
        cell_background_gdk: Gdk.Color;
        cell_background_rgba: Gdk.RGBA;
        cell_background_set: boolean;
        editing: boolean;
        height: number;
        is_expanded: boolean;
        is_expander: boolean;
        mode: CellRendererMode;
        sensitive: boolean;
        visible: boolean;
        width: number;
        xalign: number;
        xpad: number;
        yalign: number;
        ypad: number;
    }
}
export abstract class CellRenderer extends GObject.InitiallyUnowned {
    constructor(properties?: Partial<CellRenderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRenderer.ConstructorProperties>, ...args: any[]): void;
    // Properties
    cell_background: string;
    cell_background_gdk: Gdk.Color;
    cell_background_rgba: Gdk.RGBA;
    cell_background_set: boolean;
    editing: boolean;
    height: number;
    is_expanded: boolean;
    is_expander: boolean;
    mode: CellRendererMode;
    sensitive: boolean;
    visible: boolean;
    width: number;
    xalign: number;
    xpad: number;
    yalign: number;
    ypad: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'editing-canceled', callback: (_source: this) => void): number;
    connect_after(signal: 'editing-canceled', callback: (_source: this) => void): number;
    emit(signal: 'editing-canceled'): void;
    connect(signal: 'editing-started', callback: (_source: this, editable: CellEditable, path: string) => void): number;
    connect_after(signal: 'editing-started', callback: (_source: this, editable: CellEditable, path: string) => void): number;
    emit(signal: 'editing-started', editable: CellEditable, path: string): void;
    // Members
    activate(event: Gdk.Event, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState): boolean;
    get_aligned_area(widget: Widget, flags: CellRendererState, cell_area: Gdk.Rectangle): Gdk.Rectangle;
    get_alignment(): [number | null, number | null];
    get_fixed_size(): [number | null, number | null];
    get_padding(): [number | null, number | null];
    get_preferred_height(widget: Widget): [number | null, number | null];
    get_preferred_height_for_width(widget: Widget, width: number): [number | null, number | null];
    get_preferred_size(widget: Widget): [Requisition | null, Requisition | null];
    get_preferred_width(widget: Widget): [number | null, number | null];
    get_preferred_width_for_height(widget: Widget, height: number): [number | null, number | null];
    get_request_mode(): SizeRequestMode;
    get_sensitive(): boolean;
    get_size(widget: Widget, cell_area: Gdk.Rectangle | null): [number | null, number | null, number | null, number | null];
    get_state(widget: Widget | null, cell_state: CellRendererState): StateFlags;
    get_visible(): boolean;
    is_activatable(): boolean;
    render(cr: cairo.Context, widget: Widget, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState): void;
    set_alignment(xalign: number, yalign: number): void;
    set_fixed_size(width: number, height: number): void;
    set_padding(xpad: number, ypad: number): void;
    set_sensitive(sensitive: boolean): void;
    set_visible(visible: boolean): void;
    start_editing(event: Gdk.Event | null, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState): CellEditable | null;
    stop_editing(canceled: boolean): void;
    vfunc_activate(event: Gdk.Event, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState): boolean;
    vfunc_editing_canceled(): void;
    vfunc_editing_started(editable: CellEditable, path: string): void;
    vfunc_get_aligned_area(widget: Widget, flags: CellRendererState, cell_area: Gdk.Rectangle): Gdk.Rectangle;
    vfunc_get_preferred_height(widget: Widget): [number | null, number | null];
    vfunc_get_preferred_height_for_width(widget: Widget, width: number): [number | null, number | null];
    vfunc_get_preferred_width(widget: Widget): [number | null, number | null];
    vfunc_get_preferred_width_for_height(widget: Widget, height: number): [number | null, number | null];
    vfunc_get_request_mode(): SizeRequestMode;
    vfunc_get_size(widget: Widget, cell_area: Gdk.Rectangle | null): [number | null, number | null, number | null, number | null];
    vfunc_render(cr: cairo.Context, widget: Widget, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState): void;
    vfunc_start_editing(event: Gdk.Event | null, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState): CellEditable | null;
}
export module CellRendererAccel {
    export interface ConstructorProperties extends CellRendererText.ConstructorProperties {
        [key: string]: any;
        accel_key: number;
        accel_mode: CellRendererAccelMode;
        accel_mods: Gdk.ModifierType;
        keycode: number;
    }
}
export class CellRendererAccel extends CellRendererText {
    constructor(properties?: Partial<CellRendererAccel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererAccel.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accel_key: number;
    accel_mode: CellRendererAccelMode;
    accel_mods: Gdk.ModifierType;
    keycode: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'accel-cleared', callback: (_source: this, path_string: string) => void): number;
    connect_after(signal: 'accel-cleared', callback: (_source: this, path_string: string) => void): number;
    emit(signal: 'accel-cleared', path_string: string): void;
    connect(signal: 'accel-edited', callback: (_source: this, path_string: string, accel_key: number, accel_mods: Gdk.ModifierType, hardware_keycode: number) => void): number;
    connect_after(signal: 'accel-edited', callback: (_source: this, path_string: string, accel_key: number, accel_mods: Gdk.ModifierType, hardware_keycode: number) => void): number;
    emit(signal: 'accel-edited', path_string: string, accel_key: number, accel_mods: Gdk.ModifierType, hardware_keycode: number): void;
    // Constructors
    static ["new"](): CellRendererAccel;
    static ["new"](...args: never[]): never;
    // Members
    vfunc_accel_cleared(path_string: string): void;
    vfunc_accel_edited(path_string: string, accel_key: number, accel_mods: Gdk.ModifierType, hardware_keycode: number): void;
}
export module CellRendererCombo {
    export interface ConstructorProperties extends CellRendererText.ConstructorProperties {
        [key: string]: any;
        has_entry: boolean;
        model: TreeModel;
        text_column: number;
    }
}
export class CellRendererCombo extends CellRendererText {
    constructor(properties?: Partial<CellRendererCombo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererCombo.ConstructorProperties>, ...args: any[]): void;
    // Properties
    has_entry: boolean;
    model: TreeModel;
    text_column: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this, path_string: string, new_iter: TreeIter) => void): number;
    connect_after(signal: 'changed', callback: (_source: this, path_string: string, new_iter: TreeIter) => void): number;
    emit(signal: 'changed', path_string: string, new_iter: TreeIter): void;
    // Constructors
    static ["new"](): CellRendererCombo;
    static ["new"](...args: never[]): never;
}
export module CellRendererPixbuf {
    export interface ConstructorProperties extends CellRenderer.ConstructorProperties {
        [key: string]: any;
        follow_state: boolean;
        gicon: Gio.Icon;
        icon_name: string;
        pixbuf: GdkPixbuf.Pixbuf;
        pixbuf_expander_closed: GdkPixbuf.Pixbuf;
        pixbuf_expander_open: GdkPixbuf.Pixbuf;
        stock_detail: string;
        stock_id: string;
        stock_size: number;
        surface: cairo.Surface;
    }
}
export class CellRendererPixbuf extends CellRenderer {
    constructor(properties?: Partial<CellRendererPixbuf.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererPixbuf.ConstructorProperties>, ...args: any[]): void;
    // Properties
    follow_state: boolean;
    gicon: Gio.Icon;
    icon_name: string;
    pixbuf: GdkPixbuf.Pixbuf;
    pixbuf_expander_closed: GdkPixbuf.Pixbuf;
    pixbuf_expander_open: GdkPixbuf.Pixbuf;
    stock_detail: string;
    stock_id: string;
    stock_size: number;
    surface: cairo.Surface;
    // Constructors
    static ["new"](): CellRendererPixbuf;
}
export module CellRendererProgress {
    export interface ConstructorProperties extends CellRenderer.ConstructorProperties {
        [key: string]: any;
        inverted: boolean;
        pulse: number;
        text: string;
        text_xalign: number;
        text_yalign: number;
        value: number;
    }
}
export class CellRendererProgress extends CellRenderer implements Orientable {
    constructor(properties?: Partial<CellRendererProgress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererProgress.ConstructorProperties>, ...args: any[]): void;
    // Properties
    inverted: boolean;
    pulse: number;
    text: string;
    text_xalign: number;
    text_yalign: number;
    value: number;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](): CellRendererProgress;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module CellRendererSpin {
    export interface ConstructorProperties extends CellRendererText.ConstructorProperties {
        [key: string]: any;
        adjustment: Adjustment;
        climb_rate: number;
        digits: number;
    }
}
export class CellRendererSpin extends CellRendererText {
    constructor(properties?: Partial<CellRendererSpin.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererSpin.ConstructorProperties>, ...args: any[]): void;
    // Properties
    adjustment: Adjustment;
    climb_rate: number;
    digits: number;
    // Constructors
    static ["new"](): CellRendererSpin;
    static ["new"](...args: never[]): never;
}
export module CellRendererSpinner {
    export interface ConstructorProperties extends CellRenderer.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        pulse: number;
        size: IconSize;
    }
}
export class CellRendererSpinner extends CellRenderer {
    constructor(properties?: Partial<CellRendererSpinner.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererSpinner.ConstructorProperties>, ...args: any[]): void;
    // Properties
    active: boolean;
    pulse: number;
    size: IconSize;
    // Constructors
    static ["new"](): CellRendererSpinner;
}
export module CellRendererText {
    export interface ConstructorProperties extends CellRenderer.ConstructorProperties {
        [key: string]: any;
        align_set: boolean;
        alignment: Pango.Alignment;
        attributes: Pango.AttrList;
        background: string;
        background_gdk: Gdk.Color;
        background_rgba: Gdk.RGBA;
        background_set: boolean;
        editable: boolean;
        editable_set: boolean;
        ellipsize: Pango.EllipsizeMode;
        ellipsize_set: boolean;
        family: string;
        family_set: boolean;
        font: string;
        font_desc: Pango.FontDescription;
        foreground: string;
        foreground_gdk: Gdk.Color;
        foreground_rgba: Gdk.RGBA;
        foreground_set: boolean;
        language: string;
        language_set: boolean;
        markup: string;
        max_width_chars: number;
        placeholder_text: string;
        rise: number;
        rise_set: boolean;
        scale: number;
        scale_set: boolean;
        single_paragraph_mode: boolean;
        size: number;
        size_points: number;
        size_set: boolean;
        stretch: Pango.Stretch;
        stretch_set: boolean;
        strikethrough: boolean;
        strikethrough_set: boolean;
        style: Pango.Style;
        style_set: boolean;
        text: string;
        underline: Pango.Underline;
        underline_set: boolean;
        variant: Pango.Variant;
        variant_set: boolean;
        weight: number;
        weight_set: boolean;
        width_chars: number;
        wrap_mode: Pango.WrapMode;
        wrap_width: number;
    }
}
export class CellRendererText extends CellRenderer {
    constructor(properties?: Partial<CellRendererText.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererText.ConstructorProperties>, ...args: any[]): void;
    // Properties
    align_set: boolean;
    alignment: Pango.Alignment;
    attributes: Pango.AttrList;
    background: string;
    background_gdk: Gdk.Color;
    background_rgba: Gdk.RGBA;
    background_set: boolean;
    editable: boolean;
    editable_set: boolean;
    ellipsize: Pango.EllipsizeMode;
    ellipsize_set: boolean;
    family: string;
    family_set: boolean;
    font: string;
    font_desc: Pango.FontDescription;
    foreground: string;
    foreground_gdk: Gdk.Color;
    foreground_rgba: Gdk.RGBA;
    foreground_set: boolean;
    language: string;
    language_set: boolean;
    markup: string;
    max_width_chars: number;
    placeholder_text: string;
    rise: number;
    rise_set: boolean;
    scale: number;
    scale_set: boolean;
    single_paragraph_mode: boolean;
    size: number;
    size_points: number;
    size_set: boolean;
    stretch: Pango.Stretch;
    stretch_set: boolean;
    strikethrough: boolean;
    strikethrough_set: boolean;
    style: Pango.Style;
    style_set: boolean;
    text: string;
    underline: Pango.Underline;
    underline_set: boolean;
    variant: Pango.Variant;
    variant_set: boolean;
    weight: number;
    weight_set: boolean;
    width_chars: number;
    wrap_mode: Pango.WrapMode;
    wrap_width: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'edited', callback: (_source: this, path: string, new_text: string) => void): number;
    connect_after(signal: 'edited', callback: (_source: this, path: string, new_text: string) => void): number;
    emit(signal: 'edited', path: string, new_text: string): void;
    // Constructors
    static ["new"](): CellRendererText;
    // Members
    set_fixed_height_from_font(number_of_rows: number): void;
    vfunc_edited(path: string, new_text: string): void;
}
export module CellRendererToggle {
    export interface ConstructorProperties extends CellRenderer.ConstructorProperties {
        [key: string]: any;
        activatable: boolean;
        active: boolean;
        inconsistent: boolean;
        indicator_size: number;
        radio: boolean;
    }
}
export class CellRendererToggle extends CellRenderer {
    constructor(properties?: Partial<CellRendererToggle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererToggle.ConstructorProperties>, ...args: any[]): void;
    // Properties
    activatable: boolean;
    active: boolean;
    inconsistent: boolean;
    indicator_size: number;
    radio: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'toggled', callback: (_source: this, path: string) => void): number;
    connect_after(signal: 'toggled', callback: (_source: this, path: string) => void): number;
    emit(signal: 'toggled', path: string): void;
    // Constructors
    static ["new"](): CellRendererToggle;
    // Members
    get_activatable(): boolean;
    get_active(): boolean;
    get_radio(): boolean;
    set_activatable(setting: boolean): void;
    set_active(setting: boolean): void;
    set_radio(radio: boolean): void;
    vfunc_toggled(path: string): void;
}
export module CellView {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        background: string;
        background_gdk: Gdk.Color;
        background_rgba: Gdk.RGBA;
        background_set: boolean;
        cell_area: CellArea;
        cell_area_context: CellAreaContext;
        draw_sensitive: boolean;
        fit_model: boolean;
        model: TreeModel;
    }
}
export class CellView extends Widget implements Atk.ImplementorIface, Buildable, CellLayout, Orientable {
    constructor(properties?: Partial<CellView.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellView.ConstructorProperties>, ...args: any[]): void;
    // Properties
    background: string;
    background_gdk: Gdk.Color;
    background_rgba: Gdk.RGBA;
    background_set: boolean;
    cell_area: CellArea;
    cell_area_context: CellAreaContext;
    draw_sensitive: boolean;
    fit_model: boolean;
    model: TreeModel;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](): CellView;
    static new_with_context(area: CellArea, context: CellAreaContext): CellView;
    static new_with_markup(markup: string): CellView;
    static new_with_pixbuf(pixbuf: GdkPixbuf.Pixbuf): CellView;
    static new_with_text(text: string): CellView;
    // Members
    get_displayed_row(): TreePath | null;
    get_draw_sensitive(): boolean;
    get_fit_model(): boolean;
    get_model(): TreeModel | null;
    get_size_of_row(path: TreePath): [boolean, Requisition];
    set_background_color(color: Gdk.Color): void;
    set_background_rgba(rgba: Gdk.RGBA): void;
    set_displayed_row(path: TreePath | null): void;
    set_draw_sensitive(draw_sensitive: boolean): void;
    set_fit_model(fit_model: boolean): void;
    set_model(model: TreeModel | null): void;
    // Implemented Members
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): GLib.List;
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): GLib.List;
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module CheckButton {
    export interface ConstructorProperties extends ToggleButton.ConstructorProperties {
        [key: string]: any;
    }
}
export class CheckButton extends ToggleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<CheckButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CheckButton.ConstructorProperties>, ...args: any[]): void;
    // Fields
    toggle_button: ToggleButton;
    // Constructors
    static ["new"](): CheckButton;
    static ["new"](...args: never[]): never;
    static new_with_label(label: string): CheckButton;
    static new_with_label(...args: never[]): never;
    static new_with_mnemonic(label: string): CheckButton;
    static new_with_mnemonic(...args: never[]): never;
    // Members
    vfunc_draw_indicator(cr: cairo.Context): void;
}
export module CheckMenuItem {
    export interface ConstructorProperties extends MenuItem.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        draw_as_radio: boolean;
        inconsistent: boolean;
    }
}
export class CheckMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<CheckMenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CheckMenuItem.ConstructorProperties>, ...args: any[]): void;
    // Properties
    active: boolean;
    draw_as_radio: boolean;
    inconsistent: boolean;
    // Fields
    menu_item: MenuItem;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'toggled', callback: (_source: this) => void): number;
    connect_after(signal: 'toggled', callback: (_source: this) => void): number;
    emit(signal: 'toggled'): void;
    // Constructors
    static ["new"](): CheckMenuItem;
    static ["new"](...args: never[]): never;
    static new_with_label(label: string): CheckMenuItem;
    static new_with_label(...args: never[]): never;
    static new_with_mnemonic(label: string): CheckMenuItem;
    static new_with_mnemonic(...args: never[]): never;
    // Members
    get_active(): boolean;
    get_draw_as_radio(): boolean;
    get_inconsistent(): boolean;
    set_active(is_active: boolean): void;
    set_draw_as_radio(draw_as_radio: boolean): void;
    set_inconsistent(setting: boolean): void;
    toggled(): void;
    vfunc_draw_indicator(cr: cairo.Context): void;
    vfunc_toggled(): void;
}
export module CheckMenuItemAccessible {
    export interface ConstructorProperties extends MenuItemAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class CheckMenuItemAccessible extends MenuItemAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    constructor(properties?: Partial<CheckMenuItemAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CheckMenuItemAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: CheckMenuItemAccessiblePrivate | any;
}
export module Clipboard {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Clipboard extends GObject.Object {
    constructor(properties?: Partial<Clipboard.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Clipboard.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'owner-change', callback: (_source: this, event: Gdk.EventOwnerChange) => void): number;
    connect_after(signal: 'owner-change', callback: (_source: this, event: Gdk.EventOwnerChange) => void): number;
    emit(signal: 'owner-change', event: Gdk.EventOwnerChange): void;
    // Members
    clear(): void;
    get_display(): Gdk.Display;
    get_owner<T = GObject.Object>(): T | null;
    request_contents(target: Gdk.Atom, callback: ClipboardReceivedFunc): void;
    request_image(callback: ClipboardImageReceivedFunc): void;
    request_rich_text(buffer: TextBuffer, callback: ClipboardRichTextReceivedFunc): void;
    request_targets(callback: ClipboardTargetsReceivedFunc): void;
    request_text(callback: ClipboardTextReceivedFunc): void;
    request_uris(callback: ClipboardURIReceivedFunc): void;
    set_can_store(targets: TargetEntry[] | null): void;
    set_image(pixbuf: GdkPixbuf.Pixbuf): void;
    set_text(text: string, len: number): void;
    store(): void;
    wait_for_contents(target: Gdk.Atom): SelectionData | null;
    wait_for_image(): GdkPixbuf.Pixbuf | null;
    wait_for_rich_text(buffer: TextBuffer): [Uint8Array | null, Gdk.Atom];
    wait_for_targets(): [boolean, Gdk.Atom[]];
    wait_for_text(): string | null;
    wait_for_uris(): string[] | null;
    wait_is_image_available(): boolean;
    wait_is_rich_text_available(buffer: TextBuffer): boolean;
    wait_is_target_available(target: Gdk.Atom): boolean;
    wait_is_text_available(): boolean;
    wait_is_uris_available(): boolean;
    static get(selection: Gdk.Atom): Clipboard;
    static get_default(display: Gdk.Display): Clipboard;
    static get_for_display(display: Gdk.Display, selection: Gdk.Atom): Clipboard;
}
export module ColorButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        alpha: number;
        color: Gdk.Color;
        rgba: Gdk.RGBA;
        show_editor: boolean;
        title: string;
        use_alpha: boolean;
    }
}
export class ColorButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable, ColorChooser {
    constructor(properties?: Partial<ColorButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    alpha: number;
    color: Gdk.Color;
    rgba: Gdk.RGBA;
    show_editor: boolean;
    title: string;
    use_alpha: boolean;
    // Fields
    button: Button;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'color-set', callback: (_source: this) => void): number;
    connect_after(signal: 'color-set', callback: (_source: this) => void): number;
    emit(signal: 'color-set'): void;
    // Constructors
    static ["new"](): ColorButton;
    static ["new"](...args: never[]): never;
    static new_with_color(color: Gdk.Color): ColorButton;
    static new_with_rgba(rgba: Gdk.RGBA): ColorButton;
    // Members
    get_alpha(): number;
    get_color(): Gdk.Color;
    get_title(): string;
    get_use_alpha(): boolean;
    set_alpha(alpha: number): void;
    set_color(color: Gdk.Color): void;
    set_title(title: string): void;
    set_use_alpha(use_alpha: boolean): void;
    vfunc_color_set(): void;
    // Implemented Members
    add_palette(orientation: Orientation, colors_per_line: number, colors: Gdk.RGBA[] | null): void;
    get_rgba(): Gdk.RGBA;
    set_rgba(color: Gdk.RGBA): void;
    vfunc_add_palette(orientation: Orientation, colors_per_line: number, colors: Gdk.RGBA[] | null): void;
    vfunc_color_activated(color: Gdk.RGBA): void;
    vfunc_get_rgba(): Gdk.RGBA;
    vfunc_set_rgba(color: Gdk.RGBA): void;
}
export module ColorChooserDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
        show_editor: boolean;
    }
}
export class ColorChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, ColorChooser {
    constructor(properties?: Partial<ColorChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorChooserDialog.ConstructorProperties>, ...args: any[]): void;
    // Properties
    show_editor: boolean;
    // Implemented Properties
    rgba: Gdk.RGBA;
    use_alpha: boolean;
    // Constructors
    static ["new"](title: string | null, parent: Window | null): ColorChooserDialog;
    static ["new"](...args: never[]): never;
    // Implemented Members
    add_palette(orientation: Orientation, colors_per_line: number, colors: Gdk.RGBA[] | null): void;
    get_rgba(): Gdk.RGBA;
    get_use_alpha(): boolean;
    set_rgba(color: Gdk.RGBA): void;
    set_use_alpha(use_alpha: boolean): void;
    vfunc_add_palette(orientation: Orientation, colors_per_line: number, colors: Gdk.RGBA[] | null): void;
    vfunc_color_activated(color: Gdk.RGBA): void;
    vfunc_get_rgba(): Gdk.RGBA;
    vfunc_set_rgba(color: Gdk.RGBA): void;
}
export module ColorChooserWidget {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        show_editor: boolean;
    }
}
export class ColorChooserWidget extends Box implements Atk.ImplementorIface, Buildable, ColorChooser, Orientable {
    constructor(properties?: Partial<ColorChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorChooserWidget.ConstructorProperties>, ...args: any[]): void;
    // Properties
    show_editor: boolean;
    // Implemented Properties
    rgba: Gdk.RGBA;
    use_alpha: boolean;
    // Constructors
    static ["new"](): ColorChooserWidget;
    static ["new"](...args: never[]): never;
    // Implemented Members
    add_palette(orientation: Orientation, colors_per_line: number, colors: Gdk.RGBA[] | null): void;
    get_rgba(): Gdk.RGBA;
    get_use_alpha(): boolean;
    set_rgba(color: Gdk.RGBA): void;
    set_use_alpha(use_alpha: boolean): void;
    vfunc_add_palette(orientation: Orientation, colors_per_line: number, colors: Gdk.RGBA[] | null): void;
    vfunc_color_activated(color: Gdk.RGBA): void;
    vfunc_get_rgba(): Gdk.RGBA;
    vfunc_set_rgba(color: Gdk.RGBA): void;
}
export module ColorSelection {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        current_alpha: number;
        current_color: Gdk.Color;
        current_rgba: Gdk.RGBA;
        has_opacity_control: boolean;
        has_palette: boolean;
    }
}
export class ColorSelection extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<ColorSelection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorSelection.ConstructorProperties>, ...args: any[]): void;
    // Properties
    current_alpha: number;
    current_color: Gdk.Color;
    current_rgba: Gdk.RGBA;
    has_opacity_control: boolean;
    has_palette: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'color-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'color-changed', callback: (_source: this) => void): number;
    emit(signal: 'color-changed'): void;
    // Constructors
    static ["new"](): ColorSelection;
    static ["new"](...args: never[]): never;
    // Members
    get_current_alpha(): number;
    get_current_color(): Gdk.Color;
    get_current_rgba(): Gdk.RGBA;
    get_has_opacity_control(): boolean;
    get_has_palette(): boolean;
    get_previous_alpha(): number;
    get_previous_color(): Gdk.Color;
    get_previous_rgba(): Gdk.RGBA;
    is_adjusting(): boolean;
    set_current_alpha(alpha: number): void;
    set_current_color(color: Gdk.Color): void;
    set_current_rgba(rgba: Gdk.RGBA): void;
    set_has_opacity_control(has_opacity: boolean): void;
    set_has_palette(has_palette: boolean): void;
    set_previous_alpha(alpha: number): void;
    set_previous_color(color: Gdk.Color): void;
    set_previous_rgba(rgba: Gdk.RGBA): void;
    vfunc_color_changed(): void;
    static palette_from_string(str: string): [boolean, Gdk.Color[]];
    static palette_to_string(colors: Gdk.Color[]): string;
}
export module ColorSelectionDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
        cancel_button: Widget;
        color_selection: Widget;
        help_button: Widget;
        ok_button: Widget;
    }
}
export class ColorSelectionDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<ColorSelectionDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorSelectionDialog.ConstructorProperties>, ...args: any[]): void;
    // Properties
    cancel_button: Widget;
    color_selection: Widget;
    help_button: Widget;
    ok_button: Widget;
    // Constructors
    static ["new"](title: string): ColorSelectionDialog;
    static ["new"](...args: never[]): never;
    // Members
    get_color_selection(): Widget;
}
export module ComboBox {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        active: number;
        active_id: string;
        add_tearoffs: boolean;
        button_sensitivity: SensitivityType;
        cell_area: CellArea;
        column_span_column: number;
        entry_text_column: number;
        has_entry: boolean;
        has_frame: boolean;
        id_column: number;
        model: TreeModel;
        popup_fixed_width: boolean;
        popup_shown: boolean;
        row_span_column: number;
        tearoff_title: string;
        wrap_width: number;
    }
}
export class ComboBox extends Bin implements Atk.ImplementorIface, Buildable, CellEditable, CellLayout {
    constructor(properties?: Partial<ComboBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ComboBox.ConstructorProperties>, ...args: any[]): void;
    // Properties
    active: number;
    active_id: string;
    add_tearoffs: boolean;
    button_sensitivity: SensitivityType;
    cell_area: CellArea;
    column_span_column: number;
    entry_text_column: number;
    has_entry: boolean;
    has_frame: boolean;
    id_column: number;
    model: TreeModel;
    popup_fixed_width: boolean;
    popup_shown: boolean;
    row_span_column: number;
    tearoff_title: string;
    wrap_width: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;
    connect(signal: 'format-entry-text', callback: (_source: this, path: string) => string): number;
    connect_after(signal: 'format-entry-text', callback: (_source: this, path: string) => string): number;
    emit(signal: 'format-entry-text', path: string): void;
    connect(signal: 'move-active', callback: (_source: this, scroll_type: ScrollType) => void): number;
    connect_after(signal: 'move-active', callback: (_source: this, scroll_type: ScrollType) => void): number;
    emit(signal: 'move-active', scroll_type: ScrollType): void;
    connect(signal: 'popdown', callback: (_source: this) => boolean): number;
    connect_after(signal: 'popdown', callback: (_source: this) => boolean): number;
    emit(signal: 'popdown'): void;
    connect(signal: 'popup', callback: (_source: this) => void): number;
    connect_after(signal: 'popup', callback: (_source: this) => void): number;
    emit(signal: 'popup'): void;
    // Implemented Properties
    editing_canceled: boolean;
    // Constructors
    static ["new"](): ComboBox;
    static new_with_area(area: CellArea): ComboBox;
    static new_with_area_and_entry(area: CellArea): ComboBox;
    static new_with_entry(): ComboBox;
    static new_with_model(model: TreeModel): ComboBox;
    static new_with_model_and_entry(model: TreeModel): ComboBox;
    // Members
    get_active(): number;
    get_active_id(): string | null;
    get_active_iter(): [boolean, TreeIter];
    get_add_tearoffs(): boolean;
    get_button_sensitivity(): SensitivityType;
    get_column_span_column(): number;
    get_entry_text_column(): number;
    get_focus_on_click(): boolean;
    get_has_entry(): boolean;
    get_id_column(): number;
    get_model(): TreeModel;
    get_popup_accessible(): Atk.Object;
    get_popup_fixed_width(): boolean;
    get_row_span_column(): number;
    get_title(): string;
    get_wrap_width(): number;
    popdown(): void;
    popup(): void;
    popup_for_device(device: Gdk.Device): void;
    set_active(index_: number): void;
    set_active_id(active_id: string | null): boolean;
    set_active_iter(iter: TreeIter | null): void;
    set_add_tearoffs(add_tearoffs: boolean): void;
    set_button_sensitivity(sensitivity: SensitivityType): void;
    set_column_span_column(column_span: number): void;
    set_entry_text_column(text_column: number): void;
    set_focus_on_click(focus_on_click: boolean): void;
    set_id_column(id_column: number): void;
    set_model(model: TreeModel | null): void;
    set_popup_fixed_width(fixed: boolean): void;
    set_row_separator_func(func: TreeViewRowSeparatorFunc, destroy: GLib.DestroyNotify | null): void;
    set_row_span_column(row_span: number): void;
    set_title(title: string): void;
    set_wrap_width(width: number): void;
    vfunc_changed(): void;
    vfunc_format_entry_text(path: string): string;
    // Implemented Members
    editing_done(): void;
    remove_widget(): void;
    start_editing(event: Gdk.Event | null): void;
    vfunc_editing_done(): void;
    vfunc_remove_widget(): void;
    vfunc_start_editing(event: Gdk.Event | null): void;
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): GLib.List;
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): GLib.List;
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
}
export module ComboBoxAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ComboBoxAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    constructor(properties?: Partial<ComboBoxAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ComboBoxAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ComboBoxAccessiblePrivate | any;
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
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module ComboBoxText {
    export interface ConstructorProperties extends ComboBox.ConstructorProperties {
        [key: string]: any;
    }
}
export class ComboBoxText extends ComboBox implements Atk.ImplementorIface, Buildable, CellEditable, CellLayout {
    constructor(properties?: Partial<ComboBoxText.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ComboBoxText.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): ComboBoxText;
    static ["new"](...args: never[]): never;
    static new_with_entry(): ComboBoxText;
    static new_with_entry(...args: never[]): never;
    // Members
    append(id: string | null, text: string): void;
    append_text(text: string): void;
    get_active_text(): string;
    insert(position: number, id: string | null, text: string): void;
    insert_text(position: number, text: string): void;
    prepend(id: string | null, text: string): void;
    prepend_text(text: string): void;
    remove(position: number): void;
    remove(...args: never[]): never;
    remove_all(): void;
}
export module Container {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        border_width: number;
        child: Widget;
        resize_mode: ResizeMode;
    }
}
export abstract class Container extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Container.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Container.ConstructorProperties>, ...args: any[]): void;
    // Properties
    border_width: number;
    child: Widget;
    resize_mode: ResizeMode;
    // Fields
    widget: Widget;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'add', callback: (_source: this, object: Widget) => void): number;
    connect_after(signal: 'add', callback: (_source: this, object: Widget) => void): number;
    emit(signal: 'add', object: Widget): void;
    connect(signal: 'check-resize', callback: (_source: this) => void): number;
    connect_after(signal: 'check-resize', callback: (_source: this) => void): number;
    emit(signal: 'check-resize'): void;
    connect(signal: 'remove', callback: (_source: this, object: Widget) => void): number;
    connect_after(signal: 'remove', callback: (_source: this, object: Widget) => void): number;
    emit(signal: 'remove', object: Widget): void;
    connect(signal: 'set-focus-child', callback: (_source: this, object: Widget) => void): number;
    connect_after(signal: 'set-focus-child', callback: (_source: this, object: Widget) => void): number;
    emit(signal: 'set-focus-child', object: Widget): void;
    // Members
    add(widget: Widget): void;
    check_resize(): void;
    child_get_property(child: Widget, property_name: string, value: (GObject.Value | string | boolean | number)): void;
    child_notify(child: Widget, child_property: string): void;
    child_notify(...args: never[]): never;
    child_notify_by_pspec(child: Widget, pspec: GObject.ParamSpec): void;
    child_set_property(child: Widget, property_name: string, value: (GObject.Value | string | boolean | number)): void;
    child_type(): GType;
    forall(callback: Callback): void;
    foreach(callback: Callback): void;
    get_border_width(): number;
    get_children(): GLib.List;
    get_focus_chain(): [boolean, GLib.List];
    get_focus_child(): Widget | null;
    get_focus_hadjustment(): Adjustment | null;
    get_focus_vadjustment(): Adjustment | null;
    get_path_for_child(child: Widget): WidgetPath;
    get_resize_mode(): ResizeMode;
    propagate_draw(child: Widget, cr: cairo.Context): void;
    remove(widget: Widget): void;
    resize_children(): void;
    set_border_width(border_width: number): void;
    set_focus_chain(focusable_widgets: GLib.List): void;
    set_focus_child(child: Widget | null): void;
    set_focus_hadjustment(adjustment: Adjustment): void;
    set_focus_vadjustment(adjustment: Adjustment): void;
    set_reallocate_redraws(needs_redraws: boolean): void;
    set_resize_mode(resize_mode: ResizeMode): void;
    unset_focus_chain(): void;
    vfunc_add(widget: Widget): void;
    vfunc_check_resize(): void;
    vfunc_child_type(): GType;
    vfunc_composite_name(child: Widget): string;
    vfunc_forall(include_internals: boolean, callback: Callback): void;
    vfunc_get_child_property(child: Widget, property_id: number, value: (GObject.Value | string | boolean | number), pspec: GObject.ParamSpec): void;
    vfunc_get_path_for_child(child: Widget): WidgetPath;
    vfunc_remove(widget: Widget): void;
    vfunc_set_child_property(child: Widget, property_id: number, value: (GObject.Value | string | boolean | number), pspec: GObject.ParamSpec): void;
    vfunc_set_focus_child(child: Widget | null): void;
}
export module ContainerAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContainerAccessible extends WidgetAccessible implements Atk.Component {
    constructor(properties?: Partial<ContainerAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContainerAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ContainerAccessiblePrivate | any;
}
export module ContainerCellAccessible {
    export interface ConstructorProperties extends CellAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContainerCellAccessible extends CellAccessible implements Atk.Action, Atk.Component, Atk.TableCell {
    constructor(properties?: Partial<ContainerCellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContainerCellAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ContainerCellAccessiblePrivate | any;
    // Constructors
    static ["new"](): ContainerCellAccessible;
    // Members
    add_child(child: CellAccessible): void;
    get_children(): GLib.List;
    remove_child(child: CellAccessible): void;
}
export module CssProvider {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class CssProvider extends GObject.Object implements StyleProvider {
    constructor(properties?: Partial<CssProvider.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CssProvider.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: CssProviderPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'parsing-error', callback: (_source: this, section: CssSection, error: GLib.Error) => void): number;
    connect_after(signal: 'parsing-error', callback: (_source: this, section: CssSection, error: GLib.Error) => void): number;
    emit(signal: 'parsing-error', section: CssSection, error: GLib.Error): void;
    // Constructors
    static ["new"](): CssProvider;
    // Members
    load_from_data(data: (Uint8Array | string)): boolean;
    load_from_file(file: Gio.File): boolean;
    load_from_path(path: string): boolean;
    load_from_resource(resource_path: string): void;
    to_string(): string;
    vfunc_parsing_error(section: CssSection, error: GLib.Error): void;
    static get_default(): CssProvider;
    static get_named(name: string, variant: string | null): CssProvider;
    // Implemented Members
    get_icon_factory(path: WidgetPath): IconFactory | null;
    get_style(path: WidgetPath): StyleProperties | null;
    get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, GObject.Value];
    vfunc_get_icon_factory(path: WidgetPath): IconFactory | null;
    vfunc_get_style(path: WidgetPath): StyleProperties | null;
    vfunc_get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, GObject.Value];
}
export module Dialog {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        use_header_bar: number;
    }
}
export class Dialog extends Window implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Dialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Dialog.ConstructorProperties>, ...args: any[]): void;
    // Properties
    use_header_bar: number;
    // Fields
    window: Window | any;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'close', callback: (_source: this) => void): number;
    connect_after(signal: 'close', callback: (_source: this) => void): number;
    emit(signal: 'close'): void;
    connect(signal: 'response', callback: (_source: this, response_id: number) => void): number;
    connect_after(signal: 'response', callback: (_source: this, response_id: number) => void): number;
    emit(signal: 'response', response_id: number): void;
    // Constructors
    static ["new"](): Dialog;
    static ["new"](...args: never[]): never;
    // Members
    add_action_widget(child: Widget, response_id: number): void;
    add_button(button_text: string, response_id: number): Widget;
    get_action_area(): Box;
    get_content_area(): Box;
    get_header_bar(): HeaderBar;
    get_response_for_widget(widget: Widget): number;
    get_widget_for_response(response_id: number): Widget | null;
    response(response_id: number): void;
    run(): number;
    set_alternative_button_order_from_array(new_order: number[]): void;
    set_default_response(response_id: number): void;
    set_response_sensitive(response_id: number, setting: boolean): void;
    vfunc_close(): void;
    vfunc_response(response_id: number): void;
}
export module DrawingArea {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class DrawingArea extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<DrawingArea.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DrawingArea.ConstructorProperties>, ...args: any[]): void;
    // Fields
    widget: Widget;
    // Constructors
    static ["new"](): DrawingArea;
}
export module Entry {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        activates_default: boolean;
        attributes: Pango.AttrList;
        buffer: EntryBuffer;
        caps_lock_warning: boolean;
        completion: EntryCompletion;
        cursor_position: number;
        editable: boolean;
        enable_emoji_completion: boolean;
        has_frame: boolean;
        im_module: string;
        inner_border: Border;
        input_hints: InputHints;
        input_purpose: InputPurpose;
        invisible_char: number;
        invisible_char_set: boolean;
        max_length: number;
        max_width_chars: number;
        overwrite_mode: boolean;
        placeholder_text: string;
        populate_all: boolean;
        primary_icon_activatable: boolean;
        primary_icon_gicon: Gio.Icon;
        primary_icon_name: string;
        primary_icon_pixbuf: GdkPixbuf.Pixbuf;
        primary_icon_sensitive: boolean;
        primary_icon_stock: string;
        primary_icon_storage_type: ImageType;
        primary_icon_tooltip_markup: string;
        primary_icon_tooltip_text: string;
        progress_fraction: number;
        progress_pulse_step: number;
        scroll_offset: number;
        secondary_icon_activatable: boolean;
        secondary_icon_gicon: Gio.Icon;
        secondary_icon_name: string;
        secondary_icon_pixbuf: GdkPixbuf.Pixbuf;
        secondary_icon_sensitive: boolean;
        secondary_icon_stock: string;
        secondary_icon_storage_type: ImageType;
        secondary_icon_tooltip_markup: string;
        secondary_icon_tooltip_text: string;
        selection_bound: number;
        shadow_type: ShadowType;
        show_emoji_icon: boolean;
        tabs: Pango.TabArray;
        text: string;
        text_length: number;
        truncate_multiline: boolean;
        visibility: boolean;
        width_chars: number;
        xalign: number;
    }
}
export class Entry extends Widget implements Atk.ImplementorIface, Buildable, CellEditable, Editable {
    constructor(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]): void;
    // Properties
    activates_default: boolean;
    attributes: Pango.AttrList;
    buffer: EntryBuffer;
    caps_lock_warning: boolean;
    completion: EntryCompletion;
    cursor_position: number;
    editable: boolean;
    enable_emoji_completion: boolean;
    has_frame: boolean;
    im_module: string;
    inner_border: Border;
    input_hints: InputHints;
    input_purpose: InputPurpose;
    invisible_char: number;
    invisible_char_set: boolean;
    max_length: number;
    max_width_chars: number;
    overwrite_mode: boolean;
    placeholder_text: string;
    populate_all: boolean;
    primary_icon_activatable: boolean;
    primary_icon_gicon: Gio.Icon;
    primary_icon_name: string;
    primary_icon_pixbuf: GdkPixbuf.Pixbuf;
    primary_icon_sensitive: boolean;
    primary_icon_stock: string;
    primary_icon_storage_type: ImageType;
    primary_icon_tooltip_markup: string;
    primary_icon_tooltip_text: string;
    progress_fraction: number;
    progress_pulse_step: number;
    scroll_offset: number;
    secondary_icon_activatable: boolean;
    secondary_icon_gicon: Gio.Icon;
    secondary_icon_name: string;
    secondary_icon_pixbuf: GdkPixbuf.Pixbuf;
    secondary_icon_sensitive: boolean;
    secondary_icon_stock: string;
    secondary_icon_storage_type: ImageType;
    secondary_icon_tooltip_markup: string;
    secondary_icon_tooltip_text: string;
    selection_bound: number;
    shadow_type: ShadowType;
    show_emoji_icon: boolean;
    tabs: Pango.TabArray;
    text: string;
    text_length: number;
    truncate_multiline: boolean;
    visibility: boolean;
    width_chars: number;
    xalign: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    connect(signal: 'backspace', callback: (_source: this) => void): number;
    connect_after(signal: 'backspace', callback: (_source: this) => void): number;
    emit(signal: 'backspace'): void;
    connect(signal: 'copy-clipboard', callback: (_source: this) => void): number;
    connect_after(signal: 'copy-clipboard', callback: (_source: this) => void): number;
    emit(signal: 'copy-clipboard'): void;
    connect(signal: 'cut-clipboard', callback: (_source: this) => void): number;
    connect_after(signal: 'cut-clipboard', callback: (_source: this) => void): number;
    emit(signal: 'cut-clipboard'): void;
    connect(signal: 'delete-from-cursor', callback: (_source: this, type: DeleteType, count: number) => void): number;
    connect_after(signal: 'delete-from-cursor', callback: (_source: this, type: DeleteType, count: number) => void): number;
    emit(signal: 'delete-from-cursor', type: DeleteType, count: number): void;
    connect(signal: 'icon-press', callback: (_source: this, icon_pos: EntryIconPosition, event: Gdk.EventButton) => void): number;
    connect_after(signal: 'icon-press', callback: (_source: this, icon_pos: EntryIconPosition, event: Gdk.EventButton) => void): number;
    emit(signal: 'icon-press', icon_pos: EntryIconPosition, event: Gdk.EventButton): void;
    connect(signal: 'icon-release', callback: (_source: this, icon_pos: EntryIconPosition, event: Gdk.EventButton) => void): number;
    connect_after(signal: 'icon-release', callback: (_source: this, icon_pos: EntryIconPosition, event: Gdk.EventButton) => void): number;
    emit(signal: 'icon-release', icon_pos: EntryIconPosition, event: Gdk.EventButton): void;
    connect(signal: 'insert-at-cursor', callback: (_source: this, string: string) => void): number;
    connect_after(signal: 'insert-at-cursor', callback: (_source: this, string: string) => void): number;
    emit(signal: 'insert-at-cursor', string: string): void;
    connect(signal: 'insert-emoji', callback: (_source: this) => void): number;
    connect_after(signal: 'insert-emoji', callback: (_source: this) => void): number;
    emit(signal: 'insert-emoji'): void;
    connect(signal: 'move-cursor', callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void): number;
    connect_after(signal: 'move-cursor', callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void): number;
    emit(signal: 'move-cursor', step: MovementStep, count: number, extend_selection: boolean): void;
    connect(signal: 'paste-clipboard', callback: (_source: this) => void): number;
    connect_after(signal: 'paste-clipboard', callback: (_source: this) => void): number;
    emit(signal: 'paste-clipboard'): void;
    connect(signal: 'populate-popup', callback: (_source: this, widget: Widget) => void): number;
    connect_after(signal: 'populate-popup', callback: (_source: this, widget: Widget) => void): number;
    emit(signal: 'populate-popup', widget: Widget): void;
    connect(signal: 'preedit-changed', callback: (_source: this, preedit: string) => void): number;
    connect_after(signal: 'preedit-changed', callback: (_source: this, preedit: string) => void): number;
    emit(signal: 'preedit-changed', preedit: string): void;
    connect(signal: 'toggle-overwrite', callback: (_source: this) => void): number;
    connect_after(signal: 'toggle-overwrite', callback: (_source: this) => void): number;
    emit(signal: 'toggle-overwrite'): void;
    // Implemented Properties
    editing_canceled: boolean;
    // Constructors
    static ["new"](): Entry;
    static new_with_buffer(buffer: EntryBuffer): Entry;
    // Members
    get_activates_default(): boolean;
    get_alignment(): number;
    get_attributes(): Pango.AttrList | null;
    get_buffer(): EntryBuffer;
    get_completion(): EntryCompletion;
    get_current_icon_drag_source(): number;
    get_cursor_hadjustment(): Adjustment | null;
    get_has_frame(): boolean;
    get_icon_activatable(icon_pos: EntryIconPosition): boolean;
    get_icon_area(icon_pos: EntryIconPosition): Gdk.Rectangle;
    get_icon_at_pos(x: number, y: number): number;
    get_icon_gicon(icon_pos: EntryIconPosition): Gio.Icon | null;
    get_icon_name(icon_pos: EntryIconPosition): string | null;
    get_icon_pixbuf(icon_pos: EntryIconPosition): GdkPixbuf.Pixbuf | null;
    get_icon_sensitive(icon_pos: EntryIconPosition): boolean;
    get_icon_stock(icon_pos: EntryIconPosition): string;
    get_icon_storage_type(icon_pos: EntryIconPosition): ImageType;
    get_icon_tooltip_markup(icon_pos: EntryIconPosition): string | null;
    get_icon_tooltip_text(icon_pos: EntryIconPosition): string | null;
    get_inner_border(): Border | null;
    get_input_hints(): InputHints;
    get_input_purpose(): InputPurpose;
    get_invisible_char(): number;
    get_layout(): Pango.Layout;
    get_layout_offsets(): [number | null, number | null];
    get_max_length(): number;
    get_max_width_chars(): number;
    get_overwrite_mode(): boolean;
    get_placeholder_text(): string;
    get_progress_fraction(): number;
    get_progress_pulse_step(): number;
    get_tabs(): Pango.TabArray | null;
    get_text(): string;
    get_text_area(): Gdk.Rectangle;
    get_text_length(): number;
    get_visibility(): boolean;
    get_width_chars(): number;
    grab_focus_without_selecting(): void;
    im_context_filter_keypress(event: Gdk.EventKey): boolean;
    layout_index_to_text_index(layout_index: number): number;
    progress_pulse(): void;
    reset_im_context(): void;
    set_activates_default(setting: boolean): void;
    set_alignment(xalign: number): void;
    set_attributes(attrs: Pango.AttrList): void;
    set_buffer(buffer: EntryBuffer): void;
    set_completion(completion: EntryCompletion | null): void;
    set_cursor_hadjustment(adjustment: Adjustment | null): void;
    set_has_frame(setting: boolean): void;
    set_icon_activatable(icon_pos: EntryIconPosition, activatable: boolean): void;
    set_icon_drag_source(icon_pos: EntryIconPosition, target_list: TargetList, actions: Gdk.DragAction): void;
    set_icon_from_gicon(icon_pos: EntryIconPosition, icon: Gio.Icon | null): void;
    set_icon_from_icon_name(icon_pos: EntryIconPosition, icon_name: string | null): void;
    set_icon_from_pixbuf(icon_pos: EntryIconPosition, pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_icon_from_stock(icon_pos: EntryIconPosition, stock_id: string | null): void;
    set_icon_sensitive(icon_pos: EntryIconPosition, sensitive: boolean): void;
    set_icon_tooltip_markup(icon_pos: EntryIconPosition, tooltip: string | null): void;
    set_icon_tooltip_text(icon_pos: EntryIconPosition, tooltip: string | null): void;
    set_inner_border(border: Border | null): void;
    set_input_hints(hints: InputHints): void;
    set_input_purpose(purpose: InputPurpose): void;
    set_invisible_char(ch: number): void;
    set_max_length(max: number): void;
    set_max_width_chars(n_chars: number): void;
    set_overwrite_mode(overwrite: boolean): void;
    set_placeholder_text(text: string | null): void;
    set_progress_fraction(fraction: number): void;
    set_progress_pulse_step(fraction: number): void;
    set_tabs(tabs: Pango.TabArray): void;
    set_text(text: string): void;
    set_visibility(visible: boolean): void;
    set_width_chars(n_chars: number): void;
    text_index_to_layout_index(text_index: number): number;
    unset_invisible_char(): void;
    vfunc_activate(): void;
    vfunc_backspace(): void;
    vfunc_copy_clipboard(): void;
    vfunc_cut_clipboard(): void;
    vfunc_delete_from_cursor(type: DeleteType, count: number): void;
    vfunc_get_frame_size(x: number, y: number, width: number, height: number): void;
    vfunc_get_text_area_size(x: number, y: number, width: number, height: number): void;
    vfunc_insert_at_cursor(str: string): void;
    vfunc_insert_emoji(): void;
    vfunc_move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
    vfunc_paste_clipboard(): void;
    vfunc_populate_popup(popup: Widget): void;
    vfunc_toggle_overwrite(): void;
    // Implemented Members
    editing_done(): void;
    remove_widget(): void;
    start_editing(event: Gdk.Event | null): void;
    vfunc_editing_done(): void;
    vfunc_remove_widget(): void;
    vfunc_start_editing(event: Gdk.Event | null): void;
    copy_clipboard(): void;
    cut_clipboard(): void;
    delete_selection(): void;
    delete_text(start_pos: number, end_pos: number): void;
    get_chars(start_pos: number, end_pos: number): string;
    get_editable(): boolean;
    get_position(): number;
    get_selection_bounds(): [boolean, number | null, number | null];
    insert_text(new_text: string, new_text_length: number, position: number): number;
    paste_clipboard(): void;
    select_region(start_pos: number, end_pos: number): void;
    set_editable(is_editable: boolean): void;
    set_position(position: number): void;
    vfunc_changed(): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_get_chars(start_pos: number, end_pos: number): string;
    vfunc_get_position(): number;
    vfunc_get_selection_bounds(): [boolean, number | null, number | null];
    vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_set_position(position: number): void;
    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}
export module EntryAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class EntryAccessible extends WidgetAccessible implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {
    constructor(properties?: Partial<EntryAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EntryAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: EntryAccessiblePrivate | any;
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
export module EntryBuffer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        length: number;
        max_length: number;
        text: string;
    }
}
export class EntryBuffer extends GObject.Object {
    constructor(properties?: Partial<EntryBuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EntryBuffer.ConstructorProperties>, ...args: any[]): void;
    // Properties
    length: number;
    max_length: number;
    text: string;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'deleted-text', callback: (_source: this, position: number, n_chars: number) => void): number;
    connect_after(signal: 'deleted-text', callback: (_source: this, position: number, n_chars: number) => void): number;
    emit(signal: 'deleted-text', position: number, n_chars: number): void;
    connect(signal: 'inserted-text', callback: (_source: this, position: number, chars: string, n_chars: number) => void): number;
    connect_after(signal: 'inserted-text', callback: (_source: this, position: number, chars: string, n_chars: number) => void): number;
    emit(signal: 'inserted-text', position: number, chars: string, n_chars: number): void;
    // Constructors
    static ["new"](initial_chars: string | null, n_initial_chars: number): EntryBuffer;
    // Members
    delete_text(position: number, n_chars: number): number;
    emit_deleted_text(position: number, n_chars: number): void;
    emit_inserted_text(position: number, chars: string, n_chars: number): void;
    get_bytes(): number;
    get_length(): number;
    get_max_length(): number;
    get_text(): string;
    insert_text(position: number, chars: string, n_chars: number): number;
    set_max_length(max_length: number): void;
    set_text(chars: string, n_chars: number): void;
    vfunc_delete_text(position: number, n_chars: number): number;
    vfunc_deleted_text(position: number, n_chars: number): void;
    vfunc_get_length(): number;
    vfunc_get_text(n_bytes: number): string;
    vfunc_insert_text(position: number, chars: string, n_chars: number): number;
    vfunc_inserted_text(position: number, chars: string, n_chars: number): void;
}
export module EntryCompletion {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        cell_area: CellArea;
        inline_completion: boolean;
        inline_selection: boolean;
        minimum_key_length: number;
        model: TreeModel;
        popup_completion: boolean;
        popup_set_width: boolean;
        popup_single_match: boolean;
        text_column: number;
    }
}
export class EntryCompletion extends GObject.Object implements Buildable, CellLayout {
    constructor(properties?: Partial<EntryCompletion.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EntryCompletion.ConstructorProperties>, ...args: any[]): void;
    // Properties
    cell_area: CellArea;
    inline_completion: boolean;
    inline_selection: boolean;
    minimum_key_length: number;
    model: TreeModel;
    popup_completion: boolean;
    popup_set_width: boolean;
    popup_single_match: boolean;
    text_column: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'action-activated', callback: (_source: this, index: number) => void): number;
    connect_after(signal: 'action-activated', callback: (_source: this, index: number) => void): number;
    emit(signal: 'action-activated', index: number): void;
    connect(signal: 'cursor-on-match', callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean): number;
    connect_after(signal: 'cursor-on-match', callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean): number;
    emit(signal: 'cursor-on-match', model: TreeModel, iter: TreeIter): void;
    connect(signal: 'insert-prefix', callback: (_source: this, prefix: string) => boolean): number;
    connect_after(signal: 'insert-prefix', callback: (_source: this, prefix: string) => boolean): number;
    emit(signal: 'insert-prefix', prefix: string): void;
    connect(signal: 'match-selected', callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean): number;
    connect_after(signal: 'match-selected', callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean): number;
    emit(signal: 'match-selected', model: TreeModel, iter: TreeIter): void;
    connect(signal: 'no-matches', callback: (_source: this) => void): number;
    connect_after(signal: 'no-matches', callback: (_source: this) => void): number;
    emit(signal: 'no-matches'): void;
    // Constructors
    static ["new"](): EntryCompletion;
    static new_with_area(area: CellArea): EntryCompletion;
    // Members
    complete(): void;
    compute_prefix(key: string): string | null;
    delete_action(index_: number): void;
    get_completion_prefix(): string;
    get_entry(): Widget;
    get_inline_completion(): boolean;
    get_inline_selection(): boolean;
    get_minimum_key_length(): number;
    get_model(): TreeModel | null;
    get_popup_completion(): boolean;
    get_popup_set_width(): boolean;
    get_popup_single_match(): boolean;
    get_text_column(): number;
    insert_action_markup(index_: number, markup: string): void;
    insert_action_text(index_: number, text: string): void;
    insert_prefix(): void;
    set_inline_completion(inline_completion: boolean): void;
    set_inline_selection(inline_selection: boolean): void;
    set_match_func(func: EntryCompletionMatchFunc, func_notify: GLib.DestroyNotify): void;
    set_minimum_key_length(length: number): void;
    set_model(model: TreeModel | null): void;
    set_popup_completion(popup_completion: boolean): void;
    set_popup_set_width(popup_set_width: boolean): void;
    set_popup_single_match(popup_single_match: boolean): void;
    set_text_column(column: number): void;
    vfunc_action_activated(index_: number): void;
    vfunc_cursor_on_match(model: TreeModel, iter: TreeIter): boolean;
    vfunc_insert_prefix(prefix: string): boolean;
    vfunc_match_selected(model: TreeModel, iter: TreeIter): boolean;
    vfunc_no_matches(): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): GLib.List;
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): GLib.List;
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
}
export module EntryIconAccessible {
    export interface ConstructorProperties extends Atk.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class EntryIconAccessible extends Atk.Object implements Atk.Action, Atk.Component {
    constructor(properties?: Partial<EntryIconAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EntryIconAccessible.ConstructorProperties>, ...args: any[]): void;
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
export module EventBox {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        above_child: boolean;
        visible_window: boolean;
    }
}
export class EventBox extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<EventBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventBox.ConstructorProperties>, ...args: any[]): void;
    // Properties
    above_child: boolean;
    visible_window: boolean;
    // Fields
    bin: Bin;
    // Constructors
    static ["new"](): EventBox;
    // Members
    get_above_child(): boolean;
    get_visible_window(): boolean;
    set_above_child(above_child: boolean): void;
    set_visible_window(visible_window: boolean): void;
}
export module EventController {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        propagation_phase: PropagationPhase;
        widget: Widget;
    }
}
export abstract class EventController extends GObject.Object {
    constructor(properties?: Partial<EventController.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventController.ConstructorProperties>, ...args: any[]): void;
    // Properties
    propagation_phase: PropagationPhase;
    widget: Widget;
    // Members
    get_propagation_phase(): PropagationPhase;
    get_widget(): Widget;
    handle_event(event: Gdk.Event): boolean;
    reset(): void;
    set_propagation_phase(phase: PropagationPhase): void;
}
export module EventControllerKey {
    export interface ConstructorProperties extends EventController.ConstructorProperties {
        [key: string]: any;
    }
}
export class EventControllerKey extends EventController {
    constructor(properties?: Partial<EventControllerKey.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventControllerKey.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'focus-in', callback: (_source: this) => void): number;
    connect_after(signal: 'focus-in', callback: (_source: this) => void): number;
    emit(signal: 'focus-in'): void;
    connect(signal: 'focus-out', callback: (_source: this) => void): number;
    connect_after(signal: 'focus-out', callback: (_source: this) => void): number;
    emit(signal: 'focus-out'): void;
    connect(signal: 'im-update', callback: (_source: this) => void): number;
    connect_after(signal: 'im-update', callback: (_source: this) => void): number;
    emit(signal: 'im-update'): void;
    connect(signal: 'key-pressed', callback: (_source: this, keyval: number, keycode: number, state: Gdk.ModifierType) => boolean): number;
    connect_after(signal: 'key-pressed', callback: (_source: this, keyval: number, keycode: number, state: Gdk.ModifierType) => boolean): number;
    emit(signal: 'key-pressed', keyval: number, keycode: number, state: Gdk.ModifierType): void;
    connect(signal: 'key-released', callback: (_source: this, keyval: number, keycode: number, state: Gdk.ModifierType) => void): number;
    connect_after(signal: 'key-released', callback: (_source: this, keyval: number, keycode: number, state: Gdk.ModifierType) => void): number;
    emit(signal: 'key-released', keyval: number, keycode: number, state: Gdk.ModifierType): void;
    connect(signal: 'modifiers', callback: (_source: this, object: Gdk.ModifierType) => boolean): number;
    connect_after(signal: 'modifiers', callback: (_source: this, object: Gdk.ModifierType) => boolean): number;
    emit(signal: 'modifiers', object: Gdk.ModifierType): void;
    // Constructors
    static ["new"](widget: Widget): EventControllerKey;
    // Members
    forward(widget: Widget): boolean;
    get_group(): number;
    get_im_context(): IMContext;
    set_im_context(im_context: IMContext): void;
}
export module EventControllerMotion {
    export interface ConstructorProperties extends EventController.ConstructorProperties {
        [key: string]: any;
    }
}
export class EventControllerMotion extends EventController {
    constructor(properties?: Partial<EventControllerMotion.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventControllerMotion.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'enter', callback: (_source: this, x: number, y: number) => void): number;
    connect_after(signal: 'enter', callback: (_source: this, x: number, y: number) => void): number;
    emit(signal: 'enter', x: number, y: number): void;
    connect(signal: 'leave', callback: (_source: this) => void): number;
    connect_after(signal: 'leave', callback: (_source: this) => void): number;
    emit(signal: 'leave'): void;
    connect(signal: 'motion', callback: (_source: this, x: number, y: number) => void): number;
    connect_after(signal: 'motion', callback: (_source: this, x: number, y: number) => void): number;
    emit(signal: 'motion', x: number, y: number): void;
    // Constructors
    static ["new"](widget: Widget): EventControllerMotion;
}
export module EventControllerScroll {
    export interface ConstructorProperties extends EventController.ConstructorProperties {
        [key: string]: any;
        flags: EventControllerScrollFlags;
    }
}
export class EventControllerScroll extends EventController {
    constructor(properties?: Partial<EventControllerScroll.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventControllerScroll.ConstructorProperties>, ...args: any[]): void;
    // Properties
    flags: EventControllerScrollFlags;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'decelerate', callback: (_source: this, vel_x: number, vel_y: number) => void): number;
    connect_after(signal: 'decelerate', callback: (_source: this, vel_x: number, vel_y: number) => void): number;
    emit(signal: 'decelerate', vel_x: number, vel_y: number): void;
    connect(signal: 'scroll', callback: (_source: this, dx: number, dy: number) => void): number;
    connect_after(signal: 'scroll', callback: (_source: this, dx: number, dy: number) => void): number;
    emit(signal: 'scroll', dx: number, dy: number): void;
    connect(signal: 'scroll-begin', callback: (_source: this) => void): number;
    connect_after(signal: 'scroll-begin', callback: (_source: this) => void): number;
    emit(signal: 'scroll-begin'): void;
    connect(signal: 'scroll-end', callback: (_source: this) => void): number;
    connect_after(signal: 'scroll-end', callback: (_source: this) => void): number;
    emit(signal: 'scroll-end'): void;
    // Constructors
    static ["new"](widget: Widget, flags: EventControllerScrollFlags): EventControllerScroll;
    // Members
    get_flags(): EventControllerScrollFlags;
    set_flags(flags: EventControllerScrollFlags): void;
}
export module Expander {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        expanded: boolean;
        label: string;
        label_fill: boolean;
        label_widget: Widget;
        resize_toplevel: boolean;
        spacing: number;
        use_markup: boolean;
        use_underline: boolean;
    }
}
export class Expander extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Expander.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Expander.ConstructorProperties>, ...args: any[]): void;
    // Properties
    expanded: boolean;
    label: string;
    label_fill: boolean;
    label_widget: Widget;
    resize_toplevel: boolean;
    spacing: number;
    use_markup: boolean;
    use_underline: boolean;
    // Fields
    bin: Bin;
    priv: ExpanderPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    // Constructors
    static ["new"](label: string | null): Expander;
    static new_with_mnemonic(label: string | null): Expander;
    // Members
    get_expanded(): boolean;
    get_label(): string | null;
    get_label_fill(): boolean;
    get_label_widget(): Widget | null;
    get_resize_toplevel(): boolean;
    get_spacing(): number;
    get_use_markup(): boolean;
    get_use_underline(): boolean;
    set_expanded(expanded: boolean): void;
    set_label(label: string | null): void;
    set_label_fill(label_fill: boolean): void;
    set_label_widget(label_widget: Widget | null): void;
    set_resize_toplevel(resize_toplevel: boolean): void;
    set_spacing(spacing: number): void;
    set_use_markup(use_markup: boolean): void;
    set_use_underline(use_underline: boolean): void;
    vfunc_activate(): void;
}
export module ExpanderAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ExpanderAccessible extends ContainerAccessible implements Atk.Action, Atk.Component {
    constructor(properties?: Partial<ExpanderAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ExpanderAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ExpanderAccessiblePrivate | any;
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
}
export module FileChooserButton {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        dialog: FileChooser;
        title: string;
        width_chars: number;
    }
}
export class FileChooserButton extends Box implements Atk.ImplementorIface, Buildable, FileChooser, Orientable {
    constructor(properties?: Partial<FileChooserButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileChooserButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    dialog: FileChooser;
    title: string;
    width_chars: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'file-set', callback: (_source: this) => void): number;
    connect_after(signal: 'file-set', callback: (_source: this) => void): number;
    emit(signal: 'file-set'): void;
    // Implemented Properties
    action: FileChooserAction;
    create_folders: boolean;
    do_overwrite_confirmation: boolean;
    extra_widget: Widget;
    filter: FileFilter;
    local_only: boolean;
    preview_widget: Widget;
    preview_widget_active: boolean;
    select_multiple: boolean;
    show_hidden: boolean;
    use_preview_label: boolean;
    // Constructors
    static ["new"](title: string, action: FileChooserAction): FileChooserButton;
    static ["new"](...args: never[]): never;
    static new_with_dialog(dialog: Dialog): FileChooserButton;
    // Members
    get_focus_on_click(): boolean;
    get_title(): string;
    get_width_chars(): number;
    set_focus_on_click(focus_on_click: boolean): void;
    set_title(title: string): void;
    set_width_chars(n_chars: number): void;
    vfunc_file_set(): void;
    // Implemented Members
    add_choice(id: string, label: string, options: string[] | null, option_labels: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): GLib.SList;
    get_files(): GLib.SList;
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): GLib.SList;
    get_use_preview_label(): boolean;
    list_filters(): GLib.SList;
    list_shortcut_folder_uris(): GLib.SList | null;
    list_shortcut_folders(): GLib.SList | null;
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
}
export module FileChooserDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
    }
}
export class FileChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, FileChooser {
    constructor(properties?: Partial<FileChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileChooserDialog.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: FileChooserDialogPrivate | any;
    // Implemented Properties
    action: FileChooserAction;
    create_folders: boolean;
    do_overwrite_confirmation: boolean;
    extra_widget: Widget;
    filter: FileFilter;
    local_only: boolean;
    preview_widget: Widget;
    preview_widget_active: boolean;
    select_multiple: boolean;
    show_hidden: boolean;
    use_preview_label: boolean;
    // Implemented Members
    add_choice(id: string, label: string, options: string[] | null, option_labels: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): GLib.SList;
    get_files(): GLib.SList;
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): GLib.SList;
    get_use_preview_label(): boolean;
    list_filters(): GLib.SList;
    list_shortcut_folder_uris(): GLib.SList | null;
    list_shortcut_folders(): GLib.SList | null;
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
}
export module FileChooserNative {
    export interface ConstructorProperties extends NativeDialog.ConstructorProperties {
        [key: string]: any;
        accept_label: string;
        cancel_label: string;
    }
}
export class FileChooserNative extends NativeDialog implements FileChooser {
    constructor(properties?: Partial<FileChooserNative.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileChooserNative.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accept_label: string;
    cancel_label: string;
    // Implemented Properties
    action: FileChooserAction;
    create_folders: boolean;
    do_overwrite_confirmation: boolean;
    extra_widget: Widget;
    filter: FileFilter;
    local_only: boolean;
    preview_widget: Widget;
    preview_widget_active: boolean;
    select_multiple: boolean;
    show_hidden: boolean;
    use_preview_label: boolean;
    // Constructors
    static ["new"](title: string | null, parent: Window | null, action: FileChooserAction, accept_label: string | null, cancel_label: string | null): FileChooserNative;
    // Members
    get_accept_label(): string | null;
    get_cancel_label(): string | null;
    set_accept_label(accept_label: string | null): void;
    set_cancel_label(cancel_label: string | null): void;
    // Implemented Members
    add_choice(id: string, label: string, options: string[] | null, option_labels: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): GLib.SList;
    get_files(): GLib.SList;
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): GLib.SList;
    get_use_preview_label(): boolean;
    list_filters(): GLib.SList;
    list_shortcut_folder_uris(): GLib.SList | null;
    list_shortcut_folders(): GLib.SList | null;
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
}
export module FileChooserWidget {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        search_mode: boolean;
        subtitle: string;
    }
}
export class FileChooserWidget extends Box implements Atk.ImplementorIface, Buildable, FileChooser, Orientable {
    constructor(properties?: Partial<FileChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileChooserWidget.ConstructorProperties>, ...args: any[]): void;
    // Properties
    search_mode: boolean;
    subtitle: string;
    // Fields
    priv: FileChooserWidgetPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'desktop-folder', callback: (_source: this) => void): number;
    connect_after(signal: 'desktop-folder', callback: (_source: this) => void): number;
    emit(signal: 'desktop-folder'): void;
    connect(signal: 'down-folder', callback: (_source: this) => void): number;
    connect_after(signal: 'down-folder', callback: (_source: this) => void): number;
    emit(signal: 'down-folder'): void;
    connect(signal: 'home-folder', callback: (_source: this) => void): number;
    connect_after(signal: 'home-folder', callback: (_source: this) => void): number;
    emit(signal: 'home-folder'): void;
    connect(signal: 'location-popup', callback: (_source: this, path: string) => void): number;
    connect_after(signal: 'location-popup', callback: (_source: this, path: string) => void): number;
    emit(signal: 'location-popup', path: string): void;
    connect(signal: 'location-popup-on-paste', callback: (_source: this) => void): number;
    connect_after(signal: 'location-popup-on-paste', callback: (_source: this) => void): number;
    emit(signal: 'location-popup-on-paste'): void;
    connect(signal: 'location-toggle-popup', callback: (_source: this) => void): number;
    connect_after(signal: 'location-toggle-popup', callback: (_source: this) => void): number;
    emit(signal: 'location-toggle-popup'): void;
    connect(signal: 'places-shortcut', callback: (_source: this) => void): number;
    connect_after(signal: 'places-shortcut', callback: (_source: this) => void): number;
    emit(signal: 'places-shortcut'): void;
    connect(signal: 'quick-bookmark', callback: (_source: this, bookmark_index: number) => void): number;
    connect_after(signal: 'quick-bookmark', callback: (_source: this, bookmark_index: number) => void): number;
    emit(signal: 'quick-bookmark', bookmark_index: number): void;
    connect(signal: 'recent-shortcut', callback: (_source: this) => void): number;
    connect_after(signal: 'recent-shortcut', callback: (_source: this) => void): number;
    emit(signal: 'recent-shortcut'): void;
    connect(signal: 'search-shortcut', callback: (_source: this) => void): number;
    connect_after(signal: 'search-shortcut', callback: (_source: this) => void): number;
    emit(signal: 'search-shortcut'): void;
    connect(signal: 'show-hidden', callback: (_source: this) => void): number;
    connect_after(signal: 'show-hidden', callback: (_source: this) => void): number;
    emit(signal: 'show-hidden'): void;
    connect(signal: 'up-folder', callback: (_source: this) => void): number;
    connect_after(signal: 'up-folder', callback: (_source: this) => void): number;
    emit(signal: 'up-folder'): void;
    // Implemented Properties
    action: FileChooserAction;
    create_folders: boolean;
    do_overwrite_confirmation: boolean;
    extra_widget: Widget;
    filter: FileFilter;
    local_only: boolean;
    preview_widget: Widget;
    preview_widget_active: boolean;
    select_multiple: boolean;
    show_hidden: boolean;
    use_preview_label: boolean;
    // Constructors
    static ["new"](action: FileChooserAction): FileChooserWidget;
    static ["new"](...args: never[]): never;
    // Implemented Members
    add_choice(id: string, label: string, options: string[] | null, option_labels: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): GLib.SList;
    get_files(): GLib.SList;
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): GLib.SList;
    get_use_preview_label(): boolean;
    list_filters(): GLib.SList;
    list_shortcut_folder_uris(): GLib.SList | null;
    list_shortcut_folders(): GLib.SList | null;
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
}
export module FileFilter {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}
export class FileFilter extends GObject.InitiallyUnowned implements Buildable {
    constructor(properties?: Partial<FileFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileFilter.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): FileFilter;
    static new_from_gvariant(variant: GLib.Variant): FileFilter;
    // Members
    add_custom(needed: FileFilterFlags, func: FileFilterFunc, notify: GLib.DestroyNotify): void;
    add_mime_type(mime_type: string): void;
    add_pattern(pattern: string): void;
    add_pixbuf_formats(): void;
    filter(filter_info: FileFilterInfo): boolean;
    get_name(): string | null;
    get_name(...args: never[]): never;
    get_needed(): FileFilterFlags;
    set_name(name: string | null): void;
    set_name(...args: never[]): never;
    to_gvariant(): GLib.Variant;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}
export module Fixed {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
    }
}
export class Fixed extends Container implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Fixed.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Fixed.ConstructorProperties>, ...args: any[]): void;
    // Fields
    container: Container;
    // Constructors
    static ["new"](): Fixed;
    // Members
    move(widget: Widget, x: number, y: number): void;
    put(widget: Widget, x: number, y: number): void;
}
export module FlowBox {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        activate_on_single_click: boolean;
        column_spacing: number;
        homogeneous: boolean;
        max_children_per_line: number;
        min_children_per_line: number;
        row_spacing: number;
        selection_mode: SelectionMode;
    }
}
export class FlowBox extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<FlowBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FlowBox.ConstructorProperties>, ...args: any[]): void;
    // Properties
    activate_on_single_click: boolean;
    column_spacing: number;
    homogeneous: boolean;
    max_children_per_line: number;
    min_children_per_line: number;
    row_spacing: number;
    selection_mode: SelectionMode;
    // Fields
    container: Container;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate-cursor-child', callback: (_source: this) => void): number;
    connect_after(signal: 'activate-cursor-child', callback: (_source: this) => void): number;
    emit(signal: 'activate-cursor-child'): void;
    connect(signal: 'child-activated', callback: (_source: this, child: FlowBoxChild) => void): number;
    connect_after(signal: 'child-activated', callback: (_source: this, child: FlowBoxChild) => void): number;
    emit(signal: 'child-activated', child: FlowBoxChild): void;
    connect(signal: 'move-cursor', callback: (_source: this, step: MovementStep, count: number) => boolean): number;
    connect_after(signal: 'move-cursor', callback: (_source: this, step: MovementStep, count: number) => boolean): number;
    emit(signal: 'move-cursor', step: MovementStep, count: number): void;
    connect(signal: 'select-all', callback: (_source: this) => void): number;
    connect_after(signal: 'select-all', callback: (_source: this) => void): number;
    emit(signal: 'select-all'): void;
    connect(signal: 'selected-children-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'selected-children-changed', callback: (_source: this) => void): number;
    emit(signal: 'selected-children-changed'): void;
    connect(signal: 'toggle-cursor-child', callback: (_source: this) => void): number;
    connect_after(signal: 'toggle-cursor-child', callback: (_source: this) => void): number;
    emit(signal: 'toggle-cursor-child'): void;
    connect(signal: 'unselect-all', callback: (_source: this) => void): number;
    connect_after(signal: 'unselect-all', callback: (_source: this) => void): number;
    emit(signal: 'unselect-all'): void;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](): FlowBox;
    // Members
    bind_model(model: Gio.ListModel | null, create_widget_func: FlowBoxCreateWidgetFunc, user_data_free_func: GLib.DestroyNotify): void;
    get_activate_on_single_click(): boolean;
    get_child_at_index(idx: number): FlowBoxChild | null;
    get_child_at_pos(x: number, y: number): FlowBoxChild | null;
    get_column_spacing(): number;
    get_homogeneous(): boolean;
    get_max_children_per_line(): number;
    get_min_children_per_line(): number;
    get_row_spacing(): number;
    get_selected_children(): GLib.List;
    get_selection_mode(): SelectionMode;
    insert(widget: Widget, position: number): void;
    invalidate_filter(): void;
    invalidate_sort(): void;
    select_all(): void;
    select_child(child: FlowBoxChild): void;
    selected_foreach(func: FlowBoxForeachFunc): void;
    set_activate_on_single_click(single: boolean): void;
    set_column_spacing(spacing: number): void;
    set_filter_func(filter_func: FlowBoxFilterFunc | null, destroy: GLib.DestroyNotify): void;
    set_hadjustment(adjustment: Adjustment): void;
    set_homogeneous(homogeneous: boolean): void;
    set_max_children_per_line(n_children: number): void;
    set_min_children_per_line(n_children: number): void;
    set_row_spacing(spacing: number): void;
    set_selection_mode(mode: SelectionMode): void;
    set_sort_func(sort_func: FlowBoxSortFunc | null, destroy: GLib.DestroyNotify): void;
    set_vadjustment(adjustment: Adjustment): void;
    unselect_all(): void;
    unselect_child(child: FlowBoxChild): void;
    vfunc_activate_cursor_child(): void;
    vfunc_child_activated(child: FlowBoxChild): void;
    vfunc_move_cursor(step: MovementStep, count: number): boolean;
    vfunc_select_all(): void;
    vfunc_selected_children_changed(): void;
    vfunc_toggle_cursor_child(): void;
    vfunc_unselect_all(): void;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module FlowBoxAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class FlowBoxAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    constructor(properties?: Partial<FlowBoxAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FlowBoxAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: FlowBoxAccessiblePrivate | any;
    // Implemented Members
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module FlowBoxChild {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
    }
}
export class FlowBoxChild extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<FlowBoxChild.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FlowBoxChild.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    // Constructors
    static ["new"](): FlowBoxChild;
    // Members
    changed(): void;
    get_index(): number;
    is_selected(): boolean;
    vfunc_activate(): void;
}
export module FlowBoxChildAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class FlowBoxChildAccessible extends ContainerAccessible implements Atk.Component {
    constructor(properties?: Partial<FlowBoxChildAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FlowBoxChildAccessible.ConstructorProperties>, ...args: any[]): void;
}
export module FontButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        font_name: string;
        show_size: boolean;
        show_style: boolean;
        title: string;
        use_font: boolean;
        use_size: boolean;
    }
}
export class FontButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable, FontChooser {
    constructor(properties?: Partial<FontButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    font_name: string;
    show_size: boolean;
    show_style: boolean;
    title: string;
    use_font: boolean;
    use_size: boolean;
    // Fields
    button: Button;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'font-set', callback: (_source: this) => void): number;
    connect_after(signal: 'font-set', callback: (_source: this) => void): number;
    emit(signal: 'font-set'): void;
    // Implemented Properties
    font: string;
    font_desc: Pango.FontDescription;
    font_features: string;
    language: string;
    level: FontChooserLevel;
    preview_text: string;
    show_preview_entry: boolean;
    // Constructors
    static ["new"](): FontButton;
    static ["new"](...args: never[]): never;
    static new_with_font(fontname: string): FontButton;
    // Members
    get_font_name(): string;
    get_show_size(): boolean;
    get_show_style(): boolean;
    get_title(): string;
    get_use_font(): boolean;
    get_use_size(): boolean;
    set_font_name(fontname: string): boolean;
    set_show_size(show_size: boolean): void;
    set_show_style(show_style: boolean): void;
    set_title(title: string): void;
    set_use_font(use_font: boolean): void;
    set_use_size(use_size: boolean): void;
    vfunc_font_set(): void;
    // Implemented Members
    get_font(): string | null;
    get_font_desc(): Pango.FontDescription | null;
    get_font_face(): Pango.FontFace | null;
    get_font_family(): Pango.FontFamily | null;
    get_font_features(): string;
    get_font_map(): Pango.FontMap | null;
    get_font_size(): number;
    get_language(): string;
    get_level(): FontChooserLevel;
    get_preview_text(): string;
    get_show_preview_entry(): boolean;
    set_filter_func(filter: FontFilterFunc | null, destroy: GLib.DestroyNotify): void;
    set_font(fontname: string): void;
    set_font_desc(font_desc: Pango.FontDescription): void;
    set_font_map(fontmap: Pango.FontMap | null): void;
    set_language(language: string): void;
    set_level(level: FontChooserLevel): void;
    set_preview_text(text: string): void;
    set_show_preview_entry(show_preview_entry: boolean): void;
    vfunc_font_activated(fontname: string): void;
    vfunc_get_font_face(): Pango.FontFace | null;
    vfunc_get_font_family(): Pango.FontFamily | null;
    vfunc_get_font_map(): Pango.FontMap | null;
    vfunc_get_font_size(): number;
    vfunc_set_filter_func(filter: FontFilterFunc | null, destroy: GLib.DestroyNotify): void;
    vfunc_set_font_map(fontmap: Pango.FontMap | null): void;
}
export module FontChooserDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
    }
}
export class FontChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, FontChooser {
    constructor(properties?: Partial<FontChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontChooserDialog.ConstructorProperties>, ...args: any[]): void;
    // Implemented Properties
    font: string;
    font_desc: Pango.FontDescription;
    font_features: string;
    language: string;
    level: FontChooserLevel;
    preview_text: string;
    show_preview_entry: boolean;
    // Constructors
    static ["new"](title: string | null, parent: Window | null): FontChooserDialog;
    static ["new"](...args: never[]): never;
    // Implemented Members
    get_font(): string | null;
    get_font_desc(): Pango.FontDescription | null;
    get_font_face(): Pango.FontFace | null;
    get_font_family(): Pango.FontFamily | null;
    get_font_features(): string;
    get_font_map(): Pango.FontMap | null;
    get_font_size(): number;
    get_language(): string;
    get_level(): FontChooserLevel;
    get_preview_text(): string;
    get_show_preview_entry(): boolean;
    set_filter_func(filter: FontFilterFunc | null, destroy: GLib.DestroyNotify): void;
    set_font(fontname: string): void;
    set_font_desc(font_desc: Pango.FontDescription): void;
    set_font_map(fontmap: Pango.FontMap | null): void;
    set_language(language: string): void;
    set_level(level: FontChooserLevel): void;
    set_preview_text(text: string): void;
    set_show_preview_entry(show_preview_entry: boolean): void;
    vfunc_font_activated(fontname: string): void;
    vfunc_get_font_face(): Pango.FontFace | null;
    vfunc_get_font_family(): Pango.FontFamily | null;
    vfunc_get_font_map(): Pango.FontMap | null;
    vfunc_get_font_size(): number;
    vfunc_set_filter_func(filter: FontFilterFunc | null, destroy: GLib.DestroyNotify): void;
    vfunc_set_font_map(fontmap: Pango.FontMap | null): void;
}
export module FontChooserWidget {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        tweak_action: Gio.Action;
    }
}
export class FontChooserWidget extends Box implements Atk.ImplementorIface, Buildable, FontChooser, Orientable {
    constructor(properties?: Partial<FontChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontChooserWidget.ConstructorProperties>, ...args: any[]): void;
    // Properties
    tweak_action: Gio.Action;
    // Implemented Properties
    font: string;
    font_desc: Pango.FontDescription;
    font_features: string;
    language: string;
    level: FontChooserLevel;
    preview_text: string;
    show_preview_entry: boolean;
    // Constructors
    static ["new"](): FontChooserWidget;
    static ["new"](...args: never[]): never;
    // Implemented Members
    get_font(): string | null;
    get_font_desc(): Pango.FontDescription | null;
    get_font_face(): Pango.FontFace | null;
    get_font_family(): Pango.FontFamily | null;
    get_font_features(): string;
    get_font_map(): Pango.FontMap | null;
    get_font_size(): number;
    get_language(): string;
    get_level(): FontChooserLevel;
    get_preview_text(): string;
    get_show_preview_entry(): boolean;
    set_filter_func(filter: FontFilterFunc | null, destroy: GLib.DestroyNotify): void;
    set_font(fontname: string): void;
    set_font_desc(font_desc: Pango.FontDescription): void;
    set_font_map(fontmap: Pango.FontMap | null): void;
    set_language(language: string): void;
    set_level(level: FontChooserLevel): void;
    set_preview_text(text: string): void;
    set_show_preview_entry(show_preview_entry: boolean): void;
    vfunc_font_activated(fontname: string): void;
    vfunc_get_font_face(): Pango.FontFace | null;
    vfunc_get_font_family(): Pango.FontFamily | null;
    vfunc_get_font_map(): Pango.FontMap | null;
    vfunc_get_font_size(): number;
    vfunc_set_filter_func(filter: FontFilterFunc | null, destroy: GLib.DestroyNotify): void;
    vfunc_set_font_map(fontmap: Pango.FontMap | null): void;
}
export module FontSelection {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        font_name: string;
        preview_text: string;
    }
}
export class FontSelection extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<FontSelection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontSelection.ConstructorProperties>, ...args: any[]): void;
    // Properties
    font_name: string;
    preview_text: string;
    // Constructors
    static ["new"](): FontSelection;
    static ["new"](...args: never[]): never;
    // Members
    get_face(): Pango.FontFace;
    get_face_list(): Widget;
    get_family(): Pango.FontFamily;
    get_family_list(): Widget;
    get_font_name(): string;
    get_preview_entry(): Widget;
    get_preview_text(): string;
    get_size(): number;
    get_size_entry(): Widget;
    get_size_list(): Widget;
    set_font_name(fontname: string): boolean;
    set_preview_text(text: string): void;
}
export module FontSelectionDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
    }
}
export class FontSelectionDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<FontSelectionDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontSelectionDialog.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](title: string): FontSelectionDialog;
    static ["new"](...args: never[]): never;
    // Members
    get_cancel_button(): Widget;
    get_font_name(): string;
    get_font_selection(): Widget;
    get_ok_button(): Widget;
    get_preview_text(): string;
    set_font_name(fontname: string): boolean;
    set_preview_text(text: string): void;
}
export module Frame {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        label: string;
        label_widget: Widget;
        label_xalign: number;
        label_yalign: number;
        shadow_type: ShadowType;
    }
}
export class Frame extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Frame.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Frame.ConstructorProperties>, ...args: any[]): void;
    // Properties
    label: string;
    label_widget: Widget;
    label_xalign: number;
    label_yalign: number;
    shadow_type: ShadowType;
    // Fields
    bin: Bin;
    // Constructors
    static ["new"](label: string | null): Frame;
    // Members
    get_label(): string | null;
    get_label_align(): [number | null, number | null];
    get_label_widget(): Widget | null;
    get_shadow_type(): ShadowType;
    set_label(label: string | null): void;
    set_label_align(xalign: number, yalign: number): void;
    set_label_widget(label_widget: Widget | null): void;
    set_shadow_type(type: ShadowType): void;
    vfunc_compute_child_allocation(allocation: Allocation): void;
}
export module FrameAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class FrameAccessible extends ContainerAccessible implements Atk.Component {
    constructor(properties?: Partial<FrameAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FrameAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: FrameAccessiblePrivate | any;
}
export module GLArea {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        auto_render: boolean;
        context: Gdk.GLContext;
        has_alpha: boolean;
        has_depth_buffer: boolean;
        has_stencil_buffer: boolean;
        use_es: boolean;
    }
}
export class GLArea extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<GLArea.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLArea.ConstructorProperties>, ...args: any[]): void;
    // Properties
    auto_render: boolean;
    context: Gdk.GLContext;
    has_alpha: boolean;
    has_depth_buffer: boolean;
    has_stencil_buffer: boolean;
    use_es: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'create-context', callback: (_source: this) => Gdk.GLContext): number;
    connect_after(signal: 'create-context', callback: (_source: this) => Gdk.GLContext): number;
    emit(signal: 'create-context'): void;
    connect(signal: 'render', callback: (_source: this, context: Gdk.GLContext) => boolean): number;
    connect_after(signal: 'render', callback: (_source: this, context: Gdk.GLContext) => boolean): number;
    emit(signal: 'render', context: Gdk.GLContext): void;
    connect(signal: 'resize', callback: (_source: this, width: number, height: number) => void): number;
    connect_after(signal: 'resize', callback: (_source: this, width: number, height: number) => void): number;
    emit(signal: 'resize', width: number, height: number): void;
    // Constructors
    static ["new"](): GLArea;
    // Members
    attach_buffers(): void;
    get_auto_render(): boolean;
    get_context(): Gdk.GLContext;
    get_error(): GLib.Error | null;
    get_has_alpha(): boolean;
    get_has_depth_buffer(): boolean;
    get_has_stencil_buffer(): boolean;
    get_required_version(): [number, number];
    get_use_es(): boolean;
    make_current(): void;
    queue_render(): void;
    set_auto_render(auto_render: boolean): void;
    set_error(error: GLib.Error | null): void;
    set_has_alpha(has_alpha: boolean): void;
    set_has_depth_buffer(has_depth_buffer: boolean): void;
    set_has_stencil_buffer(has_stencil_buffer: boolean): void;
    set_required_version(major: number, minor: number): void;
    set_use_es(use_es: boolean): void;
    vfunc_render(context: Gdk.GLContext): boolean;
    vfunc_resize(width: number, height: number): void;
}
export module Gesture {
    export interface ConstructorProperties extends EventController.ConstructorProperties {
        [key: string]: any;
        n_points: number;
        window: Gdk.Window;
    }
}
export abstract class Gesture extends EventController {
    constructor(properties?: Partial<Gesture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Gesture.ConstructorProperties>, ...args: any[]): void;
    // Properties
    n_points: number;
    window: Gdk.Window;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'begin', callback: (_source: this, sequence: Gdk.EventSequence) => void): number;
    connect_after(signal: 'begin', callback: (_source: this, sequence: Gdk.EventSequence) => void): number;
    emit(signal: 'begin', sequence: Gdk.EventSequence): void;
    connect(signal: 'cancel', callback: (_source: this, sequence: Gdk.EventSequence) => void): number;
    connect_after(signal: 'cancel', callback: (_source: this, sequence: Gdk.EventSequence) => void): number;
    emit(signal: 'cancel', sequence: Gdk.EventSequence): void;
    connect(signal: 'end', callback: (_source: this, sequence: Gdk.EventSequence) => void): number;
    connect_after(signal: 'end', callback: (_source: this, sequence: Gdk.EventSequence) => void): number;
    emit(signal: 'end', sequence: Gdk.EventSequence): void;
    connect(signal: 'sequence-state-changed', callback: (_source: this, sequence: Gdk.EventSequence, state: EventSequenceState) => void): number;
    connect_after(signal: 'sequence-state-changed', callback: (_source: this, sequence: Gdk.EventSequence, state: EventSequenceState) => void): number;
    emit(signal: 'sequence-state-changed', sequence: Gdk.EventSequence, state: EventSequenceState): void;
    connect(signal: 'update', callback: (_source: this, sequence: Gdk.EventSequence) => void): number;
    connect_after(signal: 'update', callback: (_source: this, sequence: Gdk.EventSequence) => void): number;
    emit(signal: 'update', sequence: Gdk.EventSequence): void;
    // Members
    get_bounding_box(): [boolean, Gdk.Rectangle];
    get_bounding_box_center(): [boolean, number, number];
    get_device(): Gdk.Device | null;
    get_group(): GLib.List;
    get_last_event(sequence: Gdk.EventSequence | null): Gdk.Event | null;
    get_last_updated_sequence(): Gdk.EventSequence | null;
    get_point(sequence: Gdk.EventSequence | null): [boolean, number | null, number | null];
    get_sequence_state(sequence: Gdk.EventSequence): EventSequenceState;
    get_sequences(): GLib.List;
    get_window(): Gdk.Window | null;
    group(gesture: Gesture): void;
    handles_sequence(sequence: Gdk.EventSequence | null): boolean;
    is_active(): boolean;
    is_grouped_with(other: Gesture): boolean;
    is_recognized(): boolean;
    set_sequence_state(sequence: Gdk.EventSequence, state: EventSequenceState): boolean;
    set_state(state: EventSequenceState): boolean;
    set_window(window: Gdk.Window | null): void;
    ungroup(): void;
}
export module GestureDrag {
    export interface ConstructorProperties extends GestureSingle.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureDrag extends GestureSingle {
    constructor(properties?: Partial<GestureDrag.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureDrag.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'drag-begin', callback: (_source: this, start_x: number, start_y: number) => void): number;
    connect_after(signal: 'drag-begin', callback: (_source: this, start_x: number, start_y: number) => void): number;
    emit(signal: 'drag-begin', start_x: number, start_y: number): void;
    connect(signal: 'drag-end', callback: (_source: this, offset_x: number, offset_y: number) => void): number;
    connect_after(signal: 'drag-end', callback: (_source: this, offset_x: number, offset_y: number) => void): number;
    emit(signal: 'drag-end', offset_x: number, offset_y: number): void;
    connect(signal: 'drag-update', callback: (_source: this, offset_x: number, offset_y: number) => void): number;
    connect_after(signal: 'drag-update', callback: (_source: this, offset_x: number, offset_y: number) => void): number;
    emit(signal: 'drag-update', offset_x: number, offset_y: number): void;
    // Constructors
    static ["new"](widget: Widget): GestureDrag;
    // Members
    get_offset(): [boolean, number | null, number | null];
    get_start_point(): [boolean, number | null, number | null];
}
export module GestureLongPress {
    export interface ConstructorProperties extends GestureSingle.ConstructorProperties {
        [key: string]: any;
        delay_factor: number;
    }
}
export class GestureLongPress extends GestureSingle {
    constructor(properties?: Partial<GestureLongPress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureLongPress.ConstructorProperties>, ...args: any[]): void;
    // Properties
    delay_factor: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'cancelled', callback: (_source: this) => void): number;
    connect_after(signal: 'cancelled', callback: (_source: this) => void): number;
    emit(signal: 'cancelled'): void;
    connect(signal: 'pressed', callback: (_source: this, x: number, y: number) => void): number;
    connect_after(signal: 'pressed', callback: (_source: this, x: number, y: number) => void): number;
    emit(signal: 'pressed', x: number, y: number): void;
    // Constructors
    static ["new"](widget: Widget): GestureLongPress;
}
export module GestureMultiPress {
    export interface ConstructorProperties extends GestureSingle.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureMultiPress extends GestureSingle {
    constructor(properties?: Partial<GestureMultiPress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureMultiPress.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'pressed', callback: (_source: this, n_press: number, x: number, y: number) => void): number;
    connect_after(signal: 'pressed', callback: (_source: this, n_press: number, x: number, y: number) => void): number;
    emit(signal: 'pressed', n_press: number, x: number, y: number): void;
    connect(signal: 'released', callback: (_source: this, n_press: number, x: number, y: number) => void): number;
    connect_after(signal: 'released', callback: (_source: this, n_press: number, x: number, y: number) => void): number;
    emit(signal: 'released', n_press: number, x: number, y: number): void;
    connect(signal: 'stopped', callback: (_source: this) => void): number;
    connect_after(signal: 'stopped', callback: (_source: this) => void): number;
    emit(signal: 'stopped'): void;
    // Constructors
    static ["new"](widget: Widget): GestureMultiPress;
    // Members
    get_area(): [boolean, Gdk.Rectangle];
    set_area(rect: Gdk.Rectangle | null): void;
}
export module GesturePan {
    export interface ConstructorProperties extends GestureDrag.ConstructorProperties {
        [key: string]: any;
        orientation: Orientation;
    }
}
export class GesturePan extends GestureDrag {
    constructor(properties?: Partial<GesturePan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GesturePan.ConstructorProperties>, ...args: any[]): void;
    // Properties
    orientation: Orientation;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'pan', callback: (_source: this, direction: PanDirection, offset: number) => void): number;
    connect_after(signal: 'pan', callback: (_source: this, direction: PanDirection, offset: number) => void): number;
    emit(signal: 'pan', direction: PanDirection, offset: number): void;
    // Constructors
    static ["new"](widget: Widget, orientation: Orientation): GesturePan;
    static ["new"](...args: never[]): never;
    // Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module GestureRotate {
    export interface ConstructorProperties extends Gesture.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureRotate extends Gesture {
    constructor(properties?: Partial<GestureRotate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureRotate.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'angle-changed', callback: (_source: this, angle: number, angle_delta: number) => void): number;
    connect_after(signal: 'angle-changed', callback: (_source: this, angle: number, angle_delta: number) => void): number;
    emit(signal: 'angle-changed', angle: number, angle_delta: number): void;
    // Constructors
    static ["new"](widget: Widget): GestureRotate;
    // Members
    get_angle_delta(): number;
}
export module GestureSingle {
    export interface ConstructorProperties extends Gesture.ConstructorProperties {
        [key: string]: any;
        button: number;
        exclusive: boolean;
        touch_only: boolean;
    }
}
export class GestureSingle extends Gesture {
    constructor(properties?: Partial<GestureSingle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureSingle.ConstructorProperties>, ...args: any[]): void;
    // Properties
    button: number;
    exclusive: boolean;
    touch_only: boolean;
    // Members
    get_button(): number;
    get_current_button(): number;
    get_current_sequence(): Gdk.EventSequence | null;
    get_exclusive(): boolean;
    get_touch_only(): boolean;
    set_button(button: number): void;
    set_exclusive(exclusive: boolean): void;
    set_touch_only(touch_only: boolean): void;
}
export module GestureStylus {
    export interface ConstructorProperties extends GestureSingle.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureStylus extends GestureSingle {
    constructor(properties?: Partial<GestureStylus.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureStylus.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'down', callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(signal: 'down', callback: (_source: this, object: number, p0: number) => void): number;
    emit(signal: 'down', object: number, p0: number): void;
    connect(signal: 'motion', callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(signal: 'motion', callback: (_source: this, object: number, p0: number) => void): number;
    emit(signal: 'motion', object: number, p0: number): void;
    connect(signal: 'proximity', callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(signal: 'proximity', callback: (_source: this, object: number, p0: number) => void): number;
    emit(signal: 'proximity', object: number, p0: number): void;
    connect(signal: 'up', callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(signal: 'up', callback: (_source: this, object: number, p0: number) => void): number;
    emit(signal: 'up', object: number, p0: number): void;
    // Constructors
    static ["new"](widget: Widget): GestureStylus;
    // Members
    get_axes(axes: Gdk.AxisUse[]): [boolean, number[]];
    get_axis(axis: Gdk.AxisUse): [boolean, number];
    get_device_tool(): Gdk.DeviceTool | null;
}
export module GestureSwipe {
    export interface ConstructorProperties extends GestureSingle.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureSwipe extends GestureSingle {
    constructor(properties?: Partial<GestureSwipe.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureSwipe.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'swipe', callback: (_source: this, velocity_x: number, velocity_y: number) => void): number;
    connect_after(signal: 'swipe', callback: (_source: this, velocity_x: number, velocity_y: number) => void): number;
    emit(signal: 'swipe', velocity_x: number, velocity_y: number): void;
    // Constructors
    static ["new"](widget: Widget): GestureSwipe;
    // Members
    get_velocity(): [boolean, number, number];
}
export module GestureZoom {
    export interface ConstructorProperties extends Gesture.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureZoom extends Gesture {
    constructor(properties?: Partial<GestureZoom.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureZoom.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'scale-changed', callback: (_source: this, scale: number) => void): number;
    connect_after(signal: 'scale-changed', callback: (_source: this, scale: number) => void): number;
    emit(signal: 'scale-changed', scale: number): void;
    // Constructors
    static ["new"](widget: Widget): GestureZoom;
    // Members
    get_scale_delta(): number;
}
export module Grid {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        baseline_row: number;
        column_homogeneous: boolean;
        column_spacing: number;
        row_homogeneous: boolean;
        row_spacing: number;
    }
}
export class Grid extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<Grid.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Grid.ConstructorProperties>, ...args: any[]): void;
    // Properties
    baseline_row: number;
    column_homogeneous: boolean;
    column_spacing: number;
    row_homogeneous: boolean;
    row_spacing: number;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](): Grid;
    // Members
    attach(child: Widget, left: number, top: number, width: number, height: number): void;
    attach_next_to(child: Widget, sibling: Widget | null, side: PositionType, width: number, height: number): void;
    get_baseline_row(): number;
    get_child_at(left: number, top: number): Widget | null;
    get_column_homogeneous(): boolean;
    get_column_spacing(): number;
    get_row_baseline_position(row: number): BaselinePosition;
    get_row_homogeneous(): boolean;
    get_row_spacing(): number;
    insert_column(position: number): void;
    insert_next_to(sibling: Widget, side: PositionType): void;
    insert_row(position: number): void;
    remove_column(position: number): void;
    remove_row(position: number): void;
    set_baseline_row(row: number): void;
    set_column_homogeneous(homogeneous: boolean): void;
    set_column_spacing(spacing: number): void;
    set_row_baseline_position(row: number, pos: BaselinePosition): void;
    set_row_homogeneous(homogeneous: boolean): void;
    set_row_spacing(spacing: number): void;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module HBox {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
    }
}
export class HBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<HBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HBox.ConstructorProperties>, ...args: any[]): void;
    // Fields
    box: Box;
    // Constructors
    static ["new"](homogeneous: boolean, spacing: number): HBox;
    static ["new"](...args: never[]): never;
}
export module HButtonBox {
    export interface ConstructorProperties extends ButtonBox.ConstructorProperties {
        [key: string]: any;
    }
}
export class HButtonBox extends ButtonBox implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<HButtonBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HButtonBox.ConstructorProperties>, ...args: any[]): void;
    // Fields
    button_box: ButtonBox;
    // Constructors
    static ["new"](): HButtonBox;
    static ["new"](...args: never[]): never;
}
export module HPaned {
    export interface ConstructorProperties extends Paned.ConstructorProperties {
        [key: string]: any;
    }
}
export class HPaned extends Paned implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<HPaned.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HPaned.ConstructorProperties>, ...args: any[]): void;
    // Fields
    paned: Paned;
    // Constructors
    static ["new"](): HPaned;
    static ["new"](...args: never[]): never;
}
export module HSV {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class HSV extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<HSV.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HSV.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;
    connect(signal: 'move', callback: (_source: this, object: DirectionType) => void): number;
    connect_after(signal: 'move', callback: (_source: this, object: DirectionType) => void): number;
    emit(signal: 'move', object: DirectionType): void;
    // Constructors
    static ["new"](): HSV;
    // Members
    get_color(): [number, number, number];
    get_metrics(): [number, number];
    is_adjusting(): boolean;
    set_color(h: number, s: number, v: number): void;
    set_metrics(size: number, ring_width: number): void;
    vfunc_changed(): void;
    vfunc_move(type: DirectionType): void;
    static to_rgb(h: number, s: number, v: number): [number, number, number];
}
export module HScale {
    export interface ConstructorProperties extends Scale.ConstructorProperties {
        [key: string]: any;
    }
}
export class HScale extends Scale implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<HScale.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HScale.ConstructorProperties>, ...args: any[]): void;
    // Fields
    scale: Scale;
    // Constructors
    static ["new"](adjustment: Adjustment | null): HScale;
    static ["new"](...args: never[]): never;
    static new_with_range(min: number, max: number, step: number): HScale;
    static new_with_range(...args: never[]): never;
}
export module HScrollbar {
    export interface ConstructorProperties extends Scrollbar.ConstructorProperties {
        [key: string]: any;
    }
}
export class HScrollbar extends Scrollbar implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<HScrollbar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HScrollbar.ConstructorProperties>, ...args: any[]): void;
    // Fields
    scrollbar: Scrollbar;
    // Constructors
    static ["new"](adjustment: Adjustment | null): HScrollbar;
    static ["new"](...args: never[]): never;
}
export module HSeparator {
    export interface ConstructorProperties extends Separator.ConstructorProperties {
        [key: string]: any;
    }
}
export class HSeparator extends Separator implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<HSeparator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HSeparator.ConstructorProperties>, ...args: any[]): void;
    // Fields
    separator: Separator;
    // Constructors
    static ["new"](): HSeparator;
    static ["new"](...args: never[]): never;
}
export module HandleBox {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        child_detached: boolean;
        handle_position: PositionType;
        shadow_type: ShadowType;
        snap_edge: PositionType;
        snap_edge_set: boolean;
    }
}
export class HandleBox extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<HandleBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HandleBox.ConstructorProperties>, ...args: any[]): void;
    // Properties
    child_detached: boolean;
    handle_position: PositionType;
    shadow_type: ShadowType;
    snap_edge: PositionType;
    snap_edge_set: boolean;
    // Fields
    bin: Bin;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'child-attached', callback: (_source: this, widget: Widget) => void): number;
    connect_after(signal: 'child-attached', callback: (_source: this, widget: Widget) => void): number;
    emit(signal: 'child-attached', widget: Widget): void;
    connect(signal: 'child-detached', callback: (_source: this, widget: Widget) => void): number;
    connect_after(signal: 'child-detached', callback: (_source: this, widget: Widget) => void): number;
    emit(signal: 'child-detached', widget: Widget): void;
    // Constructors
    static ["new"](): HandleBox;
    // Members
    get_child_detached(): boolean;
    get_handle_position(): PositionType;
    get_shadow_type(): ShadowType;
    get_snap_edge(): PositionType;
    set_handle_position(position: PositionType): void;
    set_shadow_type(type: ShadowType): void;
    set_snap_edge(edge: PositionType): void;
    vfunc_child_attached(child: Widget): void;
    vfunc_child_detached(child: Widget): void;
}
export module HeaderBar {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        custom_title: Widget;
        decoration_layout: string;
        decoration_layout_set: boolean;
        has_subtitle: boolean;
        show_close_button: boolean;
        spacing: number;
        subtitle: string;
        title: string;
    }
}
export class HeaderBar extends Container implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<HeaderBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HeaderBar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    custom_title: Widget;
    decoration_layout: string;
    decoration_layout_set: boolean;
    has_subtitle: boolean;
    show_close_button: boolean;
    spacing: number;
    subtitle: string;
    title: string;
    // Fields
    container: Container;
    // Constructors
    static ["new"](): HeaderBar;
    // Members
    get_custom_title(): Widget | null;
    get_decoration_layout(): string;
    get_has_subtitle(): boolean;
    get_show_close_button(): boolean;
    get_subtitle(): string | null;
    get_title(): string | null;
    pack_end(child: Widget): void;
    pack_start(child: Widget): void;
    set_custom_title(title_widget: Widget | null): void;
    set_decoration_layout(layout: string | null): void;
    set_has_subtitle(setting: boolean): void;
    set_show_close_button(setting: boolean): void;
    set_subtitle(subtitle: string | null): void;
    set_title(title: string | null): void;
}
export module HeaderBarAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class HeaderBarAccessible extends ContainerAccessible implements Atk.Component {
    constructor(properties?: Partial<HeaderBarAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HeaderBarAccessible.ConstructorProperties>, ...args: any[]): void;
}
export module IMContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        input_hints: InputHints;
        input_purpose: InputPurpose;
    }
}
export abstract class IMContext extends GObject.Object {
    constructor(properties?: Partial<IMContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IMContext.ConstructorProperties>, ...args: any[]): void;
    // Properties
    input_hints: InputHints;
    input_purpose: InputPurpose;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'commit', callback: (_source: this, str: string) => void): number;
    connect_after(signal: 'commit', callback: (_source: this, str: string) => void): number;
    emit(signal: 'commit', str: string): void;
    connect(signal: 'delete-surrounding', callback: (_source: this, offset: number, n_chars: number) => boolean): number;
    connect_after(signal: 'delete-surrounding', callback: (_source: this, offset: number, n_chars: number) => boolean): number;
    emit(signal: 'delete-surrounding', offset: number, n_chars: number): void;
    connect(signal: 'preedit-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'preedit-changed', callback: (_source: this) => void): number;
    emit(signal: 'preedit-changed'): void;
    connect(signal: 'preedit-end', callback: (_source: this) => void): number;
    connect_after(signal: 'preedit-end', callback: (_source: this) => void): number;
    emit(signal: 'preedit-end'): void;
    connect(signal: 'preedit-start', callback: (_source: this) => void): number;
    connect_after(signal: 'preedit-start', callback: (_source: this) => void): number;
    emit(signal: 'preedit-start'): void;
    connect(signal: 'retrieve-surrounding', callback: (_source: this) => boolean): number;
    connect_after(signal: 'retrieve-surrounding', callback: (_source: this) => boolean): number;
    emit(signal: 'retrieve-surrounding'): void;
    // Members
    delete_surrounding(offset: number, n_chars: number): boolean;
    filter_keypress(event: Gdk.EventKey): boolean;
    focus_in(): void;
    focus_out(): void;
    get_preedit_string(): [string, Pango.AttrList, number];
    get_surrounding(): [boolean, string, number];
    reset(): void;
    set_client_window(window: Gdk.Window | null): void;
    set_cursor_location(area: Gdk.Rectangle): void;
    set_surrounding(text: string, len: number, cursor_index: number): void;
    set_use_preedit(use_preedit: boolean): void;
    vfunc_commit(str: string): void;
    vfunc_delete_surrounding(offset: number, n_chars: number): boolean;
    vfunc_filter_keypress(event: Gdk.EventKey): boolean;
    vfunc_focus_in(): void;
    vfunc_focus_out(): void;
    vfunc_get_preedit_string(): [string, Pango.AttrList, number];
    vfunc_get_surrounding(): [boolean, string, number];
    vfunc_preedit_changed(): void;
    vfunc_preedit_end(): void;
    vfunc_preedit_start(): void;
    vfunc_reset(): void;
    vfunc_retrieve_surrounding(): boolean;
    vfunc_set_client_window(window: Gdk.Window | null): void;
    vfunc_set_cursor_location(area: Gdk.Rectangle): void;
    vfunc_set_surrounding(text: string, len: number, cursor_index: number): void;
    vfunc_set_use_preedit(use_preedit: boolean): void;
}
export module IMContextSimple {
    export interface ConstructorProperties extends IMContext.ConstructorProperties {
        [key: string]: any;
    }
}
export class IMContextSimple extends IMContext {
    constructor(properties?: Partial<IMContextSimple.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IMContextSimple.ConstructorProperties>, ...args: any[]): void;
    // Fields
    object: IMContext;
    // Constructors
    static ["new"](): IMContextSimple;
    // Members
    add_compose_file(compose_file: string): void;
}
export module IMMulticontext {
    export interface ConstructorProperties extends IMContext.ConstructorProperties {
        [key: string]: any;
    }
}
export class IMMulticontext extends IMContext {
    constructor(properties?: Partial<IMMulticontext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IMMulticontext.ConstructorProperties>, ...args: any[]): void;
    // Fields
    object: IMContext;
    // Constructors
    static ["new"](): IMMulticontext;
    // Members
    append_menuitems(menushell: MenuShell): void;
    get_context_id(): string;
    set_context_id(context_id: string): void;
}
export module IconFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class IconFactory extends GObject.Object implements Buildable {
    constructor(properties?: Partial<IconFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconFactory.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): IconFactory;
    // Members
    add(stock_id: string, icon_set: IconSet): void;
    add_default(): void;
    lookup(stock_id: string): IconSet;
    remove_default(): void;
    static lookup_default(stock_id: string): IconSet;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}
export module IconInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class IconInfo extends GObject.Object {
    constructor(properties?: Partial<IconInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconInfo.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static new_for_pixbuf(icon_theme: IconTheme, pixbuf: GdkPixbuf.Pixbuf): IconInfo;
    // Members
    get_attach_points(): [boolean, Gdk.Point[] | null];
    get_base_scale(): number;
    get_base_size(): number;
    get_builtin_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_display_name(): string;
    get_embedded_rect(): [boolean, Gdk.Rectangle];
    get_filename(): string | null;
    is_symbolic(): boolean;
    load_icon(): GdkPixbuf.Pixbuf;
    load_icon_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    load_icon_finish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf;
    load_surface(for_window: Gdk.Window | null): cairo.Surface;
    load_symbolic(fg: Gdk.RGBA, success_color: Gdk.RGBA | null, warning_color: Gdk.RGBA | null, error_color: Gdk.RGBA | null): [GdkPixbuf.Pixbuf, boolean | null];
    load_symbolic_async(fg: Gdk.RGBA, success_color: Gdk.RGBA | null, warning_color: Gdk.RGBA | null, error_color: Gdk.RGBA | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    load_symbolic_finish(res: Gio.AsyncResult): [GdkPixbuf.Pixbuf, boolean | null];
    load_symbolic_for_context(context: StyleContext): [GdkPixbuf.Pixbuf, boolean | null];
    load_symbolic_for_context_async(context: StyleContext, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
    load_symbolic_for_context_finish(res: Gio.AsyncResult): [GdkPixbuf.Pixbuf, boolean | null];
    load_symbolic_for_style(style: Style, state: StateType): [GdkPixbuf.Pixbuf, boolean | null];
    set_raw_coordinates(raw_coordinates: boolean): void;
}
export module IconTheme {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class IconTheme extends GObject.Object {
    constructor(properties?: Partial<IconTheme.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconTheme.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;
    // Constructors
    static ["new"](): IconTheme;
    // Members
    add_resource_path(path: string): void;
    append_search_path(path: string): void;
    choose_icon(icon_names: string[], size: number, flags: IconLookupFlags): IconInfo | null;
    choose_icon_for_scale(icon_names: string[], size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
    get_example_icon_name(): string | null;
    get_icon_sizes(icon_name: string): number[];
    get_search_path(): string[] | null;
    has_icon(icon_name: string): boolean;
    list_contexts(): GLib.List;
    list_icons(context: string | null): GLib.List;
    load_icon(icon_name: string, size: number, flags: IconLookupFlags): GdkPixbuf.Pixbuf | null;
    load_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags): GdkPixbuf.Pixbuf | null;
    load_surface(icon_name: string, size: number, scale: number, for_window: Gdk.Window | null, flags: IconLookupFlags): cairo.Surface | null;
    lookup_by_gicon(icon: Gio.Icon, size: number, flags: IconLookupFlags): IconInfo | null;
    lookup_by_gicon_for_scale(icon: Gio.Icon, size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
    lookup_icon(icon_name: string, size: number, flags: IconLookupFlags): IconInfo | null;
    lookup_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
    prepend_search_path(path: string): void;
    rescan_if_needed(): boolean;
    set_custom_theme(theme_name: string | null): void;
    set_screen(screen: Gdk.Screen): void;
    set_search_path(path: string[]): void;
    vfunc_changed(): void;
    static add_builtin_icon(icon_name: string, size: number, pixbuf: GdkPixbuf.Pixbuf): void;
    static get_default(): IconTheme;
    static get_for_screen(screen: Gdk.Screen): IconTheme;
}
export module IconView {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        activate_on_single_click: boolean;
        cell_area: CellArea;
        column_spacing: number;
        columns: number;
        item_orientation: Orientation;
        item_padding: number;
        item_width: number;
        margin: number;
        markup_column: number;
        model: TreeModel;
        pixbuf_column: number;
        reorderable: boolean;
        row_spacing: number;
        selection_mode: SelectionMode;
        spacing: number;
        text_column: number;
        tooltip_column: number;
    }
}
export class IconView extends Container implements Atk.ImplementorIface, Buildable, CellLayout, Scrollable {
    constructor(properties?: Partial<IconView.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconView.ConstructorProperties>, ...args: any[]): void;
    // Properties
    activate_on_single_click: boolean;
    cell_area: CellArea;
    column_spacing: number;
    columns: number;
    item_orientation: Orientation;
    item_padding: number;
    item_width: number;
    margin: number;
    markup_column: number;
    model: TreeModel;
    pixbuf_column: number;
    reorderable: boolean;
    row_spacing: number;
    selection_mode: SelectionMode;
    spacing: number;
    text_column: number;
    tooltip_column: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate-cursor-item', callback: (_source: this) => boolean): number;
    connect_after(signal: 'activate-cursor-item', callback: (_source: this) => boolean): number;
    emit(signal: 'activate-cursor-item'): void;
    connect(signal: 'item-activated', callback: (_source: this, path: TreePath) => void): number;
    connect_after(signal: 'item-activated', callback: (_source: this, path: TreePath) => void): number;
    emit(signal: 'item-activated', path: TreePath): void;
    connect(signal: 'move-cursor', callback: (_source: this, step: MovementStep, count: number) => boolean): number;
    connect_after(signal: 'move-cursor', callback: (_source: this, step: MovementStep, count: number) => boolean): number;
    emit(signal: 'move-cursor', step: MovementStep, count: number): void;
    connect(signal: 'select-all', callback: (_source: this) => void): number;
    connect_after(signal: 'select-all', callback: (_source: this) => void): number;
    emit(signal: 'select-all'): void;
    connect(signal: 'select-cursor-item', callback: (_source: this) => void): number;
    connect_after(signal: 'select-cursor-item', callback: (_source: this) => void): number;
    emit(signal: 'select-cursor-item'): void;
    connect(signal: 'selection-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'selection-changed', callback: (_source: this) => void): number;
    emit(signal: 'selection-changed'): void;
    connect(signal: 'toggle-cursor-item', callback: (_source: this) => void): number;
    connect_after(signal: 'toggle-cursor-item', callback: (_source: this) => void): number;
    emit(signal: 'toggle-cursor-item'): void;
    connect(signal: 'unselect-all', callback: (_source: this) => void): number;
    connect_after(signal: 'unselect-all', callback: (_source: this) => void): number;
    emit(signal: 'unselect-all'): void;
    // Implemented Properties
    hadjustment: Adjustment;
    hscroll_policy: ScrollablePolicy;
    vadjustment: Adjustment;
    vscroll_policy: ScrollablePolicy;
    // Constructors
    static ["new"](): IconView;
    static new_with_area(area: CellArea): IconView;
    static new_with_model(model: TreeModel): IconView;
    // Members
    convert_widget_to_bin_window_coords(wx: number, wy: number): [number, number];
    create_drag_icon(path: TreePath): cairo.Surface;
    enable_model_drag_dest(targets: TargetEntry[], actions: Gdk.DragAction): void;
    enable_model_drag_source(start_button_mask: Gdk.ModifierType, targets: TargetEntry[], actions: Gdk.DragAction): void;
    get_activate_on_single_click(): boolean;
    get_cell_rect(path: TreePath, cell: CellRenderer | null): [boolean, Gdk.Rectangle];
    get_column_spacing(): number;
    get_columns(): number;
    get_cursor(): [boolean, TreePath | null, CellRenderer | null];
    get_dest_item_at_pos(drag_x: number, drag_y: number): [boolean, TreePath | null, IconViewDropPosition | null];
    get_drag_dest_item(): [TreePath | null, IconViewDropPosition | null];
    get_item_at_pos(x: number, y: number): [boolean, TreePath | null, CellRenderer | null];
    get_item_column(path: TreePath): number;
    get_item_orientation(): Orientation;
    get_item_padding(): number;
    get_item_row(path: TreePath): number;
    get_item_width(): number;
    get_margin(): number;
    get_markup_column(): number;
    get_model(): TreeModel | null;
    get_path_at_pos(x: number, y: number): TreePath | null;
    get_pixbuf_column(): number;
    get_reorderable(): boolean;
    get_row_spacing(): number;
    get_selected_items(): GLib.List;
    get_selection_mode(): SelectionMode;
    get_spacing(): number;
    get_text_column(): number;
    get_tooltip_column(): number;
    get_tooltip_context(x: number, y: number, keyboard_tip: boolean): [boolean, number, number, TreeModel | null, TreePath | null, TreeIter | null];
    get_visible_range(): [boolean, TreePath | null, TreePath | null];
    item_activated(path: TreePath): void;
    path_is_selected(path: TreePath): boolean;
    scroll_to_path(path: TreePath, use_align: boolean, row_align: number, col_align: number): void;
    select_all(): void;
    select_path(path: TreePath): void;
    selected_foreach(func: IconViewForeachFunc): void;
    set_activate_on_single_click(single: boolean): void;
    set_column_spacing(column_spacing: number): void;
    set_columns(columns: number): void;
    set_cursor(path: TreePath, cell: CellRenderer | null, start_editing: boolean): void;
    set_drag_dest_item(path: TreePath | null, pos: IconViewDropPosition): void;
    set_item_orientation(orientation: Orientation): void;
    set_item_padding(item_padding: number): void;
    set_item_width(item_width: number): void;
    set_margin(margin: number): void;
    set_markup_column(column: number): void;
    set_model(model: TreeModel | null): void;
    set_pixbuf_column(column: number): void;
    set_reorderable(reorderable: boolean): void;
    set_row_spacing(row_spacing: number): void;
    set_selection_mode(mode: SelectionMode): void;
    set_spacing(spacing: number): void;
    set_text_column(column: number): void;
    set_tooltip_cell(tooltip: Tooltip, path: TreePath, cell: CellRenderer | null): void;
    set_tooltip_column(column: number): void;
    set_tooltip_item(tooltip: Tooltip, path: TreePath): void;
    unselect_all(): void;
    unselect_path(path: TreePath): void;
    unset_model_drag_dest(): void;
    unset_model_drag_source(): void;
    vfunc_activate_cursor_item(): boolean;
    vfunc_item_activated(path: TreePath): void;
    vfunc_move_cursor(step: MovementStep, count: number): boolean;
    vfunc_select_all(): void;
    vfunc_select_cursor_item(): void;
    vfunc_selection_changed(): void;
    vfunc_toggle_cursor_item(): void;
    vfunc_unselect_all(): void;
    // Implemented Members
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): GLib.List;
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): GLib.List;
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
    get_border(): [boolean, Border];
    get_hadjustment(): Adjustment;
    get_hscroll_policy(): ScrollablePolicy;
    get_vadjustment(): Adjustment;
    get_vscroll_policy(): ScrollablePolicy;
    set_hadjustment(hadjustment: Adjustment | null): void;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vadjustment(vadjustment: Adjustment | null): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module IconViewAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class IconViewAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    constructor(properties?: Partial<IconViewAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconViewAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: IconViewAccessiblePrivate | any;
    // Implemented Members
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module Image {
    export interface ConstructorProperties extends Misc.ConstructorProperties {
        [key: string]: any;
        file: string;
        gicon: Gio.Icon;
        icon_name: string;
        icon_set: IconSet;
        icon_size: number;
        pixbuf: GdkPixbuf.Pixbuf;
        pixbuf_animation: GdkPixbuf.PixbufAnimation;
        pixel_size: number;
        resource: string;
        stock: string;
        storage_type: ImageType;
        surface: cairo.Surface;
        use_fallback: boolean;
    }
}
export class Image extends Misc implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Image.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Image.ConstructorProperties>, ...args: any[]): void;
    // Properties
    file: string;
    gicon: Gio.Icon;
    icon_name: string;
    icon_set: IconSet;
    icon_size: number;
    pixbuf: GdkPixbuf.Pixbuf;
    pixbuf_animation: GdkPixbuf.PixbufAnimation;
    pixel_size: number;
    resource: string;
    stock: string;
    storage_type: ImageType;
    surface: cairo.Surface;
    use_fallback: boolean;
    // Fields
    misc: Misc;
    // Constructors
    static ["new"](): Image;
    static new_from_animation(animation: GdkPixbuf.PixbufAnimation): Image;
    static new_from_file(filename: string): Image;
    static new_from_gicon(icon: Gio.Icon, size: number): Image;
    static new_from_icon_name(icon_name: string | null, size: number): Image;
    static new_from_icon_set(icon_set: IconSet, size: number): Image;
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): Image;
    static new_from_resource(resource_path: string): Image;
    static new_from_stock(stock_id: string, size: number): Image;
    static new_from_surface(surface: cairo.Surface | null): Image;
    // Members
    clear(): void;
    get_animation(): GdkPixbuf.PixbufAnimation | null;
    get_gicon(): [Gio.Icon | null, number | null];
    get_icon_name(): [string | null, number | null];
    get_icon_set(): [IconSet | null, number | null];
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_pixel_size(): number;
    get_stock(): [string | null, number | null];
    get_storage_type(): ImageType;
    set_from_animation(animation: GdkPixbuf.PixbufAnimation): void;
    set_from_file(filename: string | null): void;
    set_from_gicon(icon: Gio.Icon, size: number): void;
    set_from_icon_name(icon_name: string | null, size: number): void;
    set_from_icon_set(icon_set: IconSet, size: number): void;
    set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_from_resource(resource_path: string | null): void;
    set_from_stock(stock_id: string, size: number): void;
    set_from_surface(surface: cairo.Surface | null): void;
    set_pixel_size(pixel_size: number): void;
}
export module ImageAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ImageAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {
    constructor(properties?: Partial<ImageAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ImageAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ImageAccessiblePrivate | any;
    // Implemented Members
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number | null, number | null];
    get_image_size(): [number | null, number | null];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number | null, number | null];
    vfunc_get_image_size(): [number | null, number | null];
    vfunc_set_image_description(description: string): boolean;
}
export module ImageCellAccessible {
    export interface ConstructorProperties extends RendererCellAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ImageCellAccessible extends RendererCellAccessible implements Atk.Action, Atk.Component, Atk.Image, Atk.TableCell {
    constructor(properties?: Partial<ImageCellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ImageCellAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ImageCellAccessiblePrivate | any;
    // Implemented Members
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number | null, number | null];
    get_image_size(): [number | null, number | null];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number | null, number | null];
    vfunc_get_image_size(): [number | null, number | null];
    vfunc_set_image_description(description: string): boolean;
}
export module ImageMenuItem {
    export interface ConstructorProperties extends MenuItem.ConstructorProperties {
        [key: string]: any;
        accel_group: AccelGroup;
        always_show_image: boolean;
        image: Widget;
        use_stock: boolean;
    }
}
export class ImageMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<ImageMenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ImageMenuItem.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accel_group: AccelGroup;
    always_show_image: boolean;
    image: Widget;
    use_stock: boolean;
    // Fields
    menu_item: MenuItem;
    // Constructors
    static ["new"](): ImageMenuItem;
    static ["new"](...args: never[]): never;
    static new_from_stock(stock_id: string, accel_group: AccelGroup | null): ImageMenuItem;
    static new_with_label(label: string): ImageMenuItem;
    static new_with_label(...args: never[]): never;
    static new_with_mnemonic(label: string): ImageMenuItem;
    static new_with_mnemonic(...args: never[]): never;
    // Members
    get_always_show_image(): boolean;
    get_image(): Widget;
    get_use_stock(): boolean;
    set_accel_group(accel_group: AccelGroup): void;
    set_always_show_image(always_show: boolean): void;
    set_image(image: Widget | null): void;
    set_use_stock(use_stock: boolean): void;
}
export module InfoBar {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        message_type: MessageType;
        revealed: boolean;
        show_close_button: boolean;
    }
}
export class InfoBar extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<InfoBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InfoBar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    message_type: MessageType;
    revealed: boolean;
    show_close_button: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'close', callback: (_source: this) => void): number;
    connect_after(signal: 'close', callback: (_source: this) => void): number;
    emit(signal: 'close'): void;
    connect(signal: 'response', callback: (_source: this, response_id: number) => void): number;
    connect_after(signal: 'response', callback: (_source: this, response_id: number) => void): number;
    emit(signal: 'response', response_id: number): void;
    // Constructors
    static ["new"](): InfoBar;
    static ["new"](...args: never[]): never;
    // Members
    add_action_widget(child: Widget, response_id: number): void;
    add_button(button_text: string, response_id: number): Button;
    get_action_area(): Box;
    get_content_area(): Box;
    get_message_type(): MessageType;
    get_revealed(): boolean;
    get_show_close_button(): boolean;
    response(response_id: number): void;
    set_default_response(response_id: number): void;
    set_message_type(message_type: MessageType): void;
    set_response_sensitive(response_id: number, setting: boolean): void;
    set_revealed(revealed: boolean): void;
    set_show_close_button(setting: boolean): void;
    vfunc_close(): void;
    vfunc_response(response_id: number): void;
}
export module Invisible {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        screen: Gdk.Screen;
    }
}
export class Invisible extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Invisible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Invisible.ConstructorProperties>, ...args: any[]): void;
    // Properties
    screen: Gdk.Screen;
    // Fields
    widget: Widget;
    // Constructors
    static ["new"](): Invisible;
    static new_for_screen(screen: Gdk.Screen): Invisible;
    // Members
    get_screen(): Gdk.Screen;
    set_screen(screen: Gdk.Screen): void;
}
export module Label {
    export interface ConstructorProperties extends Misc.ConstructorProperties {
        [key: string]: any;
        angle: number;
        attributes: Pango.AttrList;
        cursor_position: number;
        ellipsize: Pango.EllipsizeMode;
        justify: Justification;
        label: string;
        lines: number;
        max_width_chars: number;
        mnemonic_keyval: number;
        mnemonic_widget: Widget;
        pattern: string;
        selectable: boolean;
        selection_bound: number;
        single_line_mode: boolean;
        track_visited_links: boolean;
        use_markup: boolean;
        use_underline: boolean;
        width_chars: number;
        wrap: boolean;
        wrap_mode: Pango.WrapMode;
        xalign: number;
        yalign: number;
    }
}
export class Label extends Misc implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Label.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Label.ConstructorProperties>, ...args: any[]): void;
    // Properties
    angle: number;
    attributes: Pango.AttrList;
    cursor_position: number;
    ellipsize: Pango.EllipsizeMode;
    justify: Justification;
    label: string;
    lines: number;
    max_width_chars: number;
    mnemonic_keyval: number;
    mnemonic_widget: Widget;
    pattern: string;
    selectable: boolean;
    selection_bound: number;
    single_line_mode: boolean;
    track_visited_links: boolean;
    use_markup: boolean;
    use_underline: boolean;
    width_chars: number;
    wrap: boolean;
    wrap_mode: Pango.WrapMode;
    xalign: number;
    yalign: number;
    // Fields
    misc: Misc;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate-current-link', callback: (_source: this) => void): number;
    connect_after(signal: 'activate-current-link', callback: (_source: this) => void): number;
    emit(signal: 'activate-current-link'): void;
    connect(signal: 'activate-link', callback: (_source: this, uri: string) => boolean): number;
    connect_after(signal: 'activate-link', callback: (_source: this, uri: string) => boolean): number;
    emit(signal: 'activate-link', uri: string): void;
    connect(signal: 'copy-clipboard', callback: (_source: this) => void): number;
    connect_after(signal: 'copy-clipboard', callback: (_source: this) => void): number;
    emit(signal: 'copy-clipboard'): void;
    connect(signal: 'move-cursor', callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void): number;
    connect_after(signal: 'move-cursor', callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void): number;
    emit(signal: 'move-cursor', step: MovementStep, count: number, extend_selection: boolean): void;
    connect(signal: 'populate-popup', callback: (_source: this, menu: Menu) => void): number;
    connect_after(signal: 'populate-popup', callback: (_source: this, menu: Menu) => void): number;
    emit(signal: 'populate-popup', menu: Menu): void;
    // Constructors
    static ["new"](str: string | null): Label;
    static new_with_mnemonic(str: string | null): Label;
    // Members
    get_angle(): number;
    get_attributes(): Pango.AttrList | null;
    get_current_uri(): string;
    get_ellipsize(): Pango.EllipsizeMode;
    get_justify(): Justification;
    get_label(): string;
    get_layout(): Pango.Layout;
    get_layout_offsets(): [number | null, number | null];
    get_line_wrap(): boolean;
    get_line_wrap_mode(): Pango.WrapMode;
    get_lines(): number;
    get_max_width_chars(): number;
    get_mnemonic_keyval(): number;
    get_mnemonic_widget(): Widget | null;
    get_selectable(): boolean;
    get_selection_bounds(): [boolean, number, number];
    get_single_line_mode(): boolean;
    get_text(): string;
    get_track_visited_links(): boolean;
    get_use_markup(): boolean;
    get_use_underline(): boolean;
    get_width_chars(): number;
    get_xalign(): number;
    get_yalign(): number;
    select_region(start_offset: number, end_offset: number): void;
    set_angle(angle: number): void;
    set_attributes(attrs: Pango.AttrList | null): void;
    set_ellipsize(mode: Pango.EllipsizeMode): void;
    set_justify(jtype: Justification): void;
    set_label(str: string): void;
    set_line_wrap(wrap: boolean): void;
    set_line_wrap_mode(wrap_mode: Pango.WrapMode): void;
    set_lines(lines: number): void;
    set_markup(str: string): void;
    set_markup_with_mnemonic(str: string): void;
    set_max_width_chars(n_chars: number): void;
    set_mnemonic_widget(widget: Widget | null): void;
    set_pattern(pattern: string): void;
    set_selectable(setting: boolean): void;
    set_single_line_mode(single_line_mode: boolean): void;
    set_text(str: string): void;
    set_text_with_mnemonic(str: string): void;
    set_track_visited_links(track_links: boolean): void;
    set_use_markup(setting: boolean): void;
    set_use_underline(setting: boolean): void;
    set_width_chars(n_chars: number): void;
    set_xalign(xalign: number): void;
    set_yalign(yalign: number): void;
    vfunc_activate_link(uri: string): boolean;
    vfunc_copy_clipboard(): void;
    vfunc_move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
    vfunc_populate_popup(menu: Menu): void;
}
export module LabelAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class LabelAccessible extends WidgetAccessible implements Atk.Component, Atk.Hypertext, Atk.Text {
    constructor(properties?: Partial<LabelAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LabelAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: LabelAccessiblePrivate | any;
    // Implemented Members
    get_link(link_index: number): Atk.Hyperlink;
    get_link_index(char_index: number): number;
    get_n_links(): number;
    vfunc_get_link(link_index: number): Atk.Hyperlink;
    vfunc_get_link_index(char_index: number): number;
    vfunc_get_n_links(): number;
    vfunc_link_selected(link_index: number): void;
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
export module Layout {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        height: number;
        width: number;
    }
}
export class Layout extends Container implements Atk.ImplementorIface, Buildable, Scrollable {
    constructor(properties?: Partial<Layout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Layout.ConstructorProperties>, ...args: any[]): void;
    // Properties
    height: number;
    width: number;
    // Fields
    container: Container;
    // Implemented Properties
    hadjustment: Adjustment;
    hscroll_policy: ScrollablePolicy;
    vadjustment: Adjustment;
    vscroll_policy: ScrollablePolicy;
    // Constructors
    static ["new"](hadjustment: Adjustment | null, vadjustment: Adjustment | null): Layout;
    // Members
    get_bin_window(): Gdk.Window;
    get_hadjustment(): Adjustment;
    get_size(): [number | null, number | null];
    get_vadjustment(): Adjustment;
    move(child_widget: Widget, x: number, y: number): void;
    put(child_widget: Widget, x: number, y: number): void;
    set_hadjustment(adjustment: Adjustment | null): void;
    set_size(width: number, height: number): void;
    set_vadjustment(adjustment: Adjustment | null): void;
    // Implemented Members
    get_border(): [boolean, Border];
    get_hscroll_policy(): ScrollablePolicy;
    get_vscroll_policy(): ScrollablePolicy;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module LevelBar {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        inverted: boolean;
        max_value: number;
        min_value: number;
        mode: LevelBarMode;
        value: number;
    }
}
export class LevelBar extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<LevelBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LevelBar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    inverted: boolean;
    max_value: number;
    min_value: number;
    mode: LevelBarMode;
    value: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'offset-changed', callback: (_source: this, name: string) => void): number;
    connect_after(signal: 'offset-changed', callback: (_source: this, name: string) => void): number;
    emit(signal: 'offset-changed', name: string): void;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](): LevelBar;
    static new_for_interval(min_value: number, max_value: number): LevelBar;
    // Members
    add_offset_value(name: string, value: number): void;
    get_inverted(): boolean;
    get_max_value(): number;
    get_min_value(): number;
    get_mode(): LevelBarMode;
    get_offset_value(name: string | null): [boolean, number];
    get_value(): number;
    remove_offset_value(name: string | null): void;
    set_inverted(inverted: boolean): void;
    set_max_value(value: number): void;
    set_min_value(value: number): void;
    set_mode(mode: LevelBarMode): void;
    set_value(value: number): void;
    vfunc_offset_changed(name: string): void;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module LevelBarAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class LevelBarAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {
    constructor(properties?: Partial<LevelBarAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LevelBarAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: LevelBarAccessiblePrivate | any;
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
export module LinkButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        uri: string;
        visited: boolean;
    }
}
export class LinkButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<LinkButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LinkButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    uri: string;
    visited: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate-link', callback: (_source: this) => boolean): number;
    connect_after(signal: 'activate-link', callback: (_source: this) => boolean): number;
    emit(signal: 'activate-link'): void;
    // Constructors
    static ["new"](uri: string): LinkButton;
    static ["new"](...args: never[]): never;
    static new_with_label(uri: string, label: string | null): LinkButton;
    static new_with_label(...args: never[]): never;
    // Members
    get_uri(): string;
    get_visited(): boolean;
    set_uri(uri: string): void;
    set_visited(visited: boolean): void;
    vfunc_activate_link(): boolean;
}
export module LinkButtonAccessible {
    export interface ConstructorProperties extends ButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class LinkButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.HyperlinkImpl, Atk.Image {
    constructor(properties?: Partial<LinkButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LinkButtonAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: LinkButtonAccessiblePrivate | any;
    // Implemented Members
    get_hyperlink(): Atk.Hyperlink;
    vfunc_get_hyperlink(): Atk.Hyperlink;
}
export module ListBox {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        activate_on_single_click: boolean;
        selection_mode: SelectionMode;
    }
}
export class ListBox extends Container implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<ListBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListBox.ConstructorProperties>, ...args: any[]): void;
    // Properties
    activate_on_single_click: boolean;
    selection_mode: SelectionMode;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate-cursor-row', callback: (_source: this) => void): number;
    connect_after(signal: 'activate-cursor-row', callback: (_source: this) => void): number;
    emit(signal: 'activate-cursor-row'): void;
    connect(signal: 'move-cursor', callback: (_source: this, object: MovementStep, p0: number) => void): number;
    connect_after(signal: 'move-cursor', callback: (_source: this, object: MovementStep, p0: number) => void): number;
    emit(signal: 'move-cursor', object: MovementStep, p0: number): void;
    connect(signal: 'row-activated', callback: (_source: this, row: ListBoxRow) => void): number;
    connect_after(signal: 'row-activated', callback: (_source: this, row: ListBoxRow) => void): number;
    emit(signal: 'row-activated', row: ListBoxRow): void;
    connect(signal: 'row-selected', callback: (_source: this, row: ListBoxRow | null) => void): number;
    connect_after(signal: 'row-selected', callback: (_source: this, row: ListBoxRow | null) => void): number;
    emit(signal: 'row-selected', row: ListBoxRow | null): void;
    connect(signal: 'select-all', callback: (_source: this) => void): number;
    connect_after(signal: 'select-all', callback: (_source: this) => void): number;
    emit(signal: 'select-all'): void;
    connect(signal: 'selected-rows-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'selected-rows-changed', callback: (_source: this) => void): number;
    emit(signal: 'selected-rows-changed'): void;
    connect(signal: 'toggle-cursor-row', callback: (_source: this) => void): number;
    connect_after(signal: 'toggle-cursor-row', callback: (_source: this) => void): number;
    emit(signal: 'toggle-cursor-row'): void;
    connect(signal: 'unselect-all', callback: (_source: this) => void): number;
    connect_after(signal: 'unselect-all', callback: (_source: this) => void): number;
    emit(signal: 'unselect-all'): void;
    // Constructors
    static ["new"](): ListBox;
    // Members
    bind_model(model: Gio.ListModel | null, create_widget_func: ListBoxCreateWidgetFunc | null, user_data_free_func: GLib.DestroyNotify): void;
    drag_highlight_row(row: ListBoxRow): void;
    drag_unhighlight_row(): void;
    get_activate_on_single_click(): boolean;
    get_adjustment(): Adjustment;
    get_row_at_index(index_: number): ListBoxRow | null;
    get_row_at_y(y: number): ListBoxRow | null;
    get_selected_row(): ListBoxRow;
    get_selected_rows(): GLib.List;
    get_selection_mode(): SelectionMode;
    insert(child: Widget, position: number): void;
    invalidate_filter(): void;
    invalidate_headers(): void;
    invalidate_sort(): void;
    prepend(child: Widget): void;
    select_all(): void;
    select_row(row: ListBoxRow | null): void;
    selected_foreach(func: ListBoxForeachFunc): void;
    set_activate_on_single_click(single: boolean): void;
    set_adjustment(adjustment: Adjustment | null): void;
    set_filter_func(filter_func: ListBoxFilterFunc | null, destroy: GLib.DestroyNotify): void;
    set_header_func(update_header: ListBoxUpdateHeaderFunc | null, destroy: GLib.DestroyNotify): void;
    set_placeholder(placeholder: Widget | null): void;
    set_selection_mode(mode: SelectionMode): void;
    set_sort_func(sort_func: ListBoxSortFunc | null, destroy: GLib.DestroyNotify): void;
    unselect_all(): void;
    unselect_row(row: ListBoxRow): void;
    vfunc_activate_cursor_row(): void;
    vfunc_move_cursor(step: MovementStep, count: number): void;
    vfunc_row_activated(row: ListBoxRow): void;
    vfunc_row_selected(row: ListBoxRow): void;
    vfunc_select_all(): void;
    vfunc_selected_rows_changed(): void;
    vfunc_toggle_cursor_row(): void;
    vfunc_unselect_all(): void;
}
export module ListBoxAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ListBoxAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    constructor(properties?: Partial<ListBoxAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListBoxAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ListBoxAccessiblePrivate | any;
    // Implemented Members
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module ListBoxRow {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        activatable: boolean;
        selectable: boolean;
    }
}
export class ListBoxRow extends Bin implements Atk.ImplementorIface, Actionable, Buildable {
    constructor(properties?: Partial<ListBoxRow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListBoxRow.ConstructorProperties>, ...args: any[]): void;
    // Properties
    activatable: boolean;
    selectable: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    // Implemented Properties
    action_name: string;
    action_target: GLib.Variant;
    // Constructors
    static ["new"](): ListBoxRow;
    // Members
    changed(): void;
    get_activatable(): boolean;
    get_header(): Widget | null;
    get_index(): number;
    get_selectable(): boolean;
    is_selected(): boolean;
    set_activatable(activatable: boolean): void;
    set_header(header: Widget | null): void;
    set_selectable(selectable: boolean): void;
    vfunc_activate(): void;
    // Implemented Members
    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name: string | null): void;
    set_action_target_value(target_value: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name: string | null): void;
    vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
}
export module ListBoxRowAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ListBoxRowAccessible extends ContainerAccessible implements Atk.Component {
    constructor(properties?: Partial<ListBoxRowAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListBoxRowAccessible.ConstructorProperties>, ...args: any[]): void;
}
export module ListStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ListStore extends GObject.Object implements Buildable, TreeDragDest, TreeDragSource, TreeModel, TreeSortable {
    constructor(properties?: Partial<ListStore.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListStore.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](types: GType[]): ListStore;
    // Members
    append(): TreeIter;
    clear(): void;
    insert(position: number): TreeIter;
    insert_after(sibling: TreeIter | null): TreeIter;
    insert_before(sibling: TreeIter | null): TreeIter;
    insert_with_valuesv(position: number, columns: number[], values: (GObject.Value | string | boolean | number)[]): TreeIter | null;
    iter_is_valid(iter: TreeIter): boolean;
    move_after(iter: TreeIter, position: TreeIter | null): void;
    move_before(iter: TreeIter, position: TreeIter | null): void;
    prepend(): TreeIter;
    remove(iter: TreeIter): boolean;
    reorder(new_order: number[]): void;
    set_column_types(types: GType[]): void;
    set_value(iter: TreeIter, column: number, value: (GObject.Value | string | boolean | number)): void;
    set(iter: TreeIter, columns: number[], values: (GObject.Value | string | boolean | number)[]): void;
    set(...args: never[]): never;
    swap(a: TreeIter, b: TreeIter): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
    drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
    vfunc_drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
    vfunc_drag_data_delete(path: TreePath): boolean;
    vfunc_drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_draggable(path: TreePath): boolean;
    filter_new(root: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc): void;
    get_column_type(index_: number): GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): GObject.Value;
    iter_children(parent: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered(path: TreePath, iter: TreeIter | null, new_order: number[]): void;
    unref_node(iter: TreeIter): void;
    vfunc_get_column_type(index_: number): GType;
    vfunc_get_flags(): TreeModelFlags;
    vfunc_get_iter(path: TreePath): [boolean, TreeIter];
    vfunc_get_n_columns(): number;
    vfunc_get_path(iter: TreeIter): TreePath;
    vfunc_get_value(iter: TreeIter, column: number): GObject.Value;
    vfunc_iter_children(parent: TreeIter | null): [boolean, TreeIter];
    vfunc_iter_has_child(iter: TreeIter): boolean;
    vfunc_iter_n_children(iter: TreeIter | null): number;
    vfunc_iter_next(iter: TreeIter): boolean;
    vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
    vfunc_iter_previous(iter: TreeIter): boolean;
    vfunc_ref_node(iter: TreeIter): void;
    vfunc_row_changed(path: TreePath, iter: TreeIter): void;
    vfunc_row_deleted(path: TreePath): void;
    vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
    vfunc_unref_node(iter: TreeIter): void;
    get_sort_column_id(): [boolean, number, SortType];
    has_default_sort_func(): boolean;
    set_default_sort_func(sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    set_sort_column_id(sort_column_id: number, order: SortType): void;
    set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    sort_column_changed(): void;
    vfunc_get_sort_column_id(): [boolean, number, SortType];
    vfunc_has_default_sort_func(): boolean;
    vfunc_set_default_sort_func(sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
    vfunc_set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    vfunc_sort_column_changed(): void;
}
export module LockButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        permission: Gio.Permission;
        text_lock: string;
        text_unlock: string;
        tooltip_lock: string;
        tooltip_not_authorized: string;
        tooltip_unlock: string;
    }
}
export class LockButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<LockButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LockButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    permission: Gio.Permission;
    text_lock: string;
    text_unlock: string;
    tooltip_lock: string;
    tooltip_not_authorized: string;
    tooltip_unlock: string;
    // Fields
    priv: LockButtonPrivate;
    // Constructors
    static ["new"](permission: Gio.Permission | null): LockButton;
    static ["new"](...args: never[]): never;
    // Members
    get_permission(): Gio.Permission;
    set_permission(permission: Gio.Permission | null): void;
}
export module LockButtonAccessible {
    export interface ConstructorProperties extends ButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class LockButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(properties?: Partial<LockButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LockButtonAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: LockButtonAccessiblePrivate | any;
}
export module Menu {
    export interface ConstructorProperties extends MenuShell.ConstructorProperties {
        [key: string]: any;
        accel_group: AccelGroup;
        accel_path: string;
        active: number;
        anchor_hints: Gdk.AnchorHints;
        attach_widget: Widget;
        menu_type_hint: Gdk.WindowTypeHint;
        monitor: number;
        rect_anchor_dx: number;
        rect_anchor_dy: number;
        reserve_toggle_size: boolean;
        tearoff_state: boolean;
        tearoff_title: string;
    }
}
export class Menu extends MenuShell implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Menu.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Menu.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accel_group: AccelGroup;
    accel_path: string;
    active: number;
    anchor_hints: Gdk.AnchorHints;
    attach_widget: Widget;
    menu_type_hint: Gdk.WindowTypeHint;
    monitor: number;
    rect_anchor_dx: number;
    rect_anchor_dy: number;
    reserve_toggle_size: boolean;
    tearoff_state: boolean;
    tearoff_title: string;
    // Fields
    menu_shell: MenuShell;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'move-scroll', callback: (_source: this, scroll_type: ScrollType) => void): number;
    connect_after(signal: 'move-scroll', callback: (_source: this, scroll_type: ScrollType) => void): number;
    emit(signal: 'move-scroll', scroll_type: ScrollType): void;
    connect(signal: 'popped-up', callback: (_source: this, flipped_rect: any | null, final_rect: any | null, flipped_x: boolean, flipped_y: boolean) => void): number;
    connect_after(signal: 'popped-up', callback: (_source: this, flipped_rect: any | null, final_rect: any | null, flipped_x: boolean, flipped_y: boolean) => void): number;
    emit(signal: 'popped-up', flipped_rect: any | null, final_rect: any | null, flipped_x: boolean, flipped_y: boolean): void;
    // Constructors
    static ["new"](): Menu;
    static new_from_model(model: Gio.MenuModel): Menu;
    // Members
    attach(child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number): void;
    attach_to_widget(attach_widget: Widget, detacher: MenuDetachFunc | null): void;
    detach(): void;
    get_accel_group(): AccelGroup;
    get_accel_path(): string;
    get_active(): Widget;
    get_attach_widget(): Widget;
    get_monitor(): number;
    get_reserve_toggle_size(): boolean;
    get_tearoff_state(): boolean;
    get_title(): string;
    place_on_monitor(monitor: Gdk.Monitor): void;
    popdown(): void;
    popup(parent_menu_shell: Widget | null, parent_menu_item: Widget | null, func: MenuPositionFunc | null, button: number, activate_time: number): void;
    popup_at_pointer(trigger_event: Gdk.Event | null): void;
    popup_at_rect(rect_window: Gdk.Window, rect: Gdk.Rectangle, rect_anchor: Gdk.Gravity, menu_anchor: Gdk.Gravity, trigger_event: Gdk.Event | null): void;
    popup_at_widget(widget: Widget, widget_anchor: Gdk.Gravity, menu_anchor: Gdk.Gravity, trigger_event: Gdk.Event | null): void;
    popup_for_device(device: Gdk.Device | null, parent_menu_shell: Widget | null, parent_menu_item: Widget | null, func: MenuPositionFunc | null, destroy: GLib.DestroyNotify | null, button: number, activate_time: number): void;
    reorder_child(child: Widget, position: number): void;
    reposition(): void;
    set_accel_group(accel_group: AccelGroup | null): void;
    set_accel_path(accel_path: string | null): void;
    set_accel_path(...args: never[]): never;
    set_active(index: number): void;
    set_monitor(monitor_num: number): void;
    set_reserve_toggle_size(reserve_toggle_size: boolean): void;
    set_screen(screen: Gdk.Screen | null): void;
    set_tearoff_state(torn_off: boolean): void;
    set_title(title: string | null): void;
    static get_for_attach_widget(widget: Widget): GLib.List;
}
export module MenuAccessible {
    export interface ConstructorProperties extends MenuShellAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class MenuAccessible extends MenuShellAccessible implements Atk.Component, Atk.Selection {
    constructor(properties?: Partial<MenuAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: MenuAccessiblePrivate | any;
}
export module MenuBar {
    export interface ConstructorProperties extends MenuShell.ConstructorProperties {
        [key: string]: any;
        child_pack_direction: PackDirection;
        pack_direction: PackDirection;
    }
}
export class MenuBar extends MenuShell implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<MenuBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuBar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    child_pack_direction: PackDirection;
    pack_direction: PackDirection;
    // Fields
    menu_shell: MenuShell;
    // Constructors
    static ["new"](): MenuBar;
    static new_from_model(model: Gio.MenuModel): MenuBar;
    // Members
    get_child_pack_direction(): PackDirection;
    get_pack_direction(): PackDirection;
    set_child_pack_direction(child_pack_dir: PackDirection): void;
    set_pack_direction(pack_dir: PackDirection): void;
}
export module MenuButton {
    export interface ConstructorProperties extends ToggleButton.ConstructorProperties {
        [key: string]: any;
        align_widget: Container;
        direction: ArrowType;
        menu_model: Gio.MenuModel;
        popover: Popover;
        popup: Menu;
        use_popover: boolean;
    }
}
export class MenuButton extends ToggleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<MenuButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    align_widget: Container;
    direction: ArrowType;
    menu_model: Gio.MenuModel;
    popover: Popover;
    popup: Menu;
    use_popover: boolean;
    // Constructors
    static ["new"](): MenuButton;
    static ["new"](...args: never[]): never;
    // Members
    get_align_widget(): Widget | null;
    get_direction(): ArrowType;
    get_direction(...args: never[]): never;
    get_menu_model(): Gio.MenuModel | null;
    get_popover(): Popover | null;
    get_popup(): Menu | null;
    get_use_popover(): boolean;
    set_align_widget(align_widget: Widget | null): void;
    set_direction(direction: ArrowType): void;
    set_direction(...args: never[]): never;
    set_menu_model(menu_model: Gio.MenuModel | null): void;
    set_popover(popover: Widget | null): void;
    set_popup(menu: Widget | null): void;
    set_use_popover(use_popover: boolean): void;
}
export module MenuButtonAccessible {
    export interface ConstructorProperties extends ToggleButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class MenuButtonAccessible extends ToggleButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(properties?: Partial<MenuButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuButtonAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: MenuButtonAccessiblePrivate | any;
}
export module MenuItem {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        accel_path: string;
        label: string;
        right_justified: boolean;
        submenu: Menu;
        use_underline: boolean;
    }
}
export class MenuItem extends Bin implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<MenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuItem.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accel_path: string;
    label: string;
    right_justified: boolean;
    submenu: Menu;
    use_underline: boolean;
    // Fields
    bin: Bin;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    connect(signal: 'activate-item', callback: (_source: this) => void): number;
    connect_after(signal: 'activate-item', callback: (_source: this) => void): number;
    emit(signal: 'activate-item'): void;
    connect(signal: 'deselect', callback: (_source: this) => void): number;
    connect_after(signal: 'deselect', callback: (_source: this) => void): number;
    emit(signal: 'deselect'): void;
    connect(signal: 'select', callback: (_source: this) => void): number;
    connect_after(signal: 'select', callback: (_source: this) => void): number;
    emit(signal: 'select'): void;
    connect(signal: 'toggle-size-allocate', callback: (_source: this, object: number) => void): number;
    connect_after(signal: 'toggle-size-allocate', callback: (_source: this, object: number) => void): number;
    emit(signal: 'toggle-size-allocate', object: number): void;
    connect(signal: 'toggle-size-request', callback: (_source: this, object: any | null) => void): number;
    connect_after(signal: 'toggle-size-request', callback: (_source: this, object: any | null) => void): number;
    emit(signal: 'toggle-size-request', object: any | null): void;
    // Implemented Properties
    action_name: string;
    action_target: GLib.Variant;
    related_action: Action;
    use_action_appearance: boolean;
    // Constructors
    static ["new"](): MenuItem;
    static new_with_label(label: string): MenuItem;
    static new_with_mnemonic(label: string): MenuItem;
    // Members
    activate(): void;
    activate(...args: never[]): never;
    deselect(): void;
    get_accel_path(): string | null;
    get_label(): string;
    get_reserve_indicator(): boolean;
    get_right_justified(): boolean;
    get_submenu(): Widget | null;
    get_use_underline(): boolean;
    select(): void;
    set_accel_path(accel_path: string | null): void;
    set_accel_path(...args: never[]): never;
    set_label(label: string): void;
    set_reserve_indicator(reserve: boolean): void;
    set_right_justified(right_justified: boolean): void;
    set_submenu(submenu: Menu | null): void;
    set_use_underline(setting: boolean): void;
    toggle_size_allocate(allocation: number): void;
    toggle_size_request(requisition: number): number;
    vfunc_activate(): void;
    vfunc_activate_item(): void;
    vfunc_deselect(): void;
    vfunc_get_label(): string;
    vfunc_select(): void;
    vfunc_set_label(label: string): void;
    vfunc_toggle_size_allocate(allocation: number): void;
    vfunc_toggle_size_request(requisition: number): number;
    // Implemented Members
    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name: string | null): void;
    set_action_target_value(target_value: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name: string | null): void;
    vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action: Action | null): void;
    vfunc_sync_action_properties(action: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module MenuItemAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class MenuItemAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    constructor(properties?: Partial<MenuItemAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuItemAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: MenuItemAccessiblePrivate | any;
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
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module MenuShell {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        take_focus: boolean;
    }
}
export abstract class MenuShell extends Container implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<MenuShell.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuShell.ConstructorProperties>, ...args: any[]): void;
    // Properties
    take_focus: boolean;
    // Fields
    container: Container;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate-current', callback: (_source: this, force_hide: boolean) => void): number;
    connect_after(signal: 'activate-current', callback: (_source: this, force_hide: boolean) => void): number;
    emit(signal: 'activate-current', force_hide: boolean): void;
    connect(signal: 'cancel', callback: (_source: this) => void): number;
    connect_after(signal: 'cancel', callback: (_source: this) => void): number;
    emit(signal: 'cancel'): void;
    connect(signal: 'cycle-focus', callback: (_source: this, direction: DirectionType) => void): number;
    connect_after(signal: 'cycle-focus', callback: (_source: this, direction: DirectionType) => void): number;
    emit(signal: 'cycle-focus', direction: DirectionType): void;
    connect(signal: 'deactivate', callback: (_source: this) => void): number;
    connect_after(signal: 'deactivate', callback: (_source: this) => void): number;
    emit(signal: 'deactivate'): void;
    connect(signal: 'insert', callback: (_source: this, child: Widget, position: number) => void): number;
    connect_after(signal: 'insert', callback: (_source: this, child: Widget, position: number) => void): number;
    emit(signal: 'insert', child: Widget, position: number): void;
    connect(signal: 'move-current', callback: (_source: this, direction: MenuDirectionType) => void): number;
    connect_after(signal: 'move-current', callback: (_source: this, direction: MenuDirectionType) => void): number;
    emit(signal: 'move-current', direction: MenuDirectionType): void;
    connect(signal: 'move-selected', callback: (_source: this, distance: number) => boolean): number;
    connect_after(signal: 'move-selected', callback: (_source: this, distance: number) => boolean): number;
    emit(signal: 'move-selected', distance: number): void;
    connect(signal: 'selection-done', callback: (_source: this) => void): number;
    connect_after(signal: 'selection-done', callback: (_source: this) => void): number;
    emit(signal: 'selection-done'): void;
    // Members
    activate_item(menu_item: Widget, force_deactivate: boolean): void;
    append(child: MenuItem): void;
    bind_model(model: Gio.MenuModel | null, action_namespace: string | null, with_separators: boolean): void;
    cancel(): void;
    deactivate(): void;
    deselect(): void;
    get_parent_shell(): Widget;
    get_selected_item(): Widget;
    get_take_focus(): boolean;
    insert(child: Widget, position: number): void;
    prepend(child: Widget): void;
    select_first(search_sensitive: boolean): void;
    select_item(menu_item: Widget): void;
    set_take_focus(take_focus: boolean): void;
    vfunc_activate_current(force_hide: boolean): void;
    vfunc_cancel(): void;
    vfunc_deactivate(): void;
    vfunc_get_popup_delay(): number;
    vfunc_insert(child: Widget, position: number): void;
    vfunc_move_current(direction: MenuDirectionType): void;
    vfunc_move_selected(distance: number): boolean;
    vfunc_select_item(menu_item: Widget): void;
    vfunc_selection_done(): void;
}
export module MenuShellAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class MenuShellAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    constructor(properties?: Partial<MenuShellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuShellAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: MenuShellAccessiblePrivate | any;
    // Implemented Members
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module MenuToolButton {
    export interface ConstructorProperties extends ToolButton.ConstructorProperties {
        [key: string]: any;
        menu: Menu;
    }
}
export class MenuToolButton extends ToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<MenuToolButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuToolButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    menu: Menu;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'show-menu', callback: (_source: this) => void): number;
    connect_after(signal: 'show-menu', callback: (_source: this) => void): number;
    emit(signal: 'show-menu'): void;
    // Constructors
    static ["new"](icon_widget: Widget | null, label: string | null): MenuToolButton;
    static ["new"](...args: never[]): never;
    static new_from_stock(stock_id: string): MenuToolButton;
    static new_from_stock(...args: never[]): never;
    // Members
    get_menu(): Widget;
    set_arrow_tooltip_markup(markup: string): void;
    set_arrow_tooltip_text(text: string): void;
    set_menu(menu: Widget): void;
    vfunc_show_menu(): void;
}
export module MessageDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
        buttons: ButtonsType;
        image: Widget;
        message_area: Widget;
        message_type: MessageType;
        secondary_text: string;
        secondary_use_markup: boolean;
        text: string;
        use_markup: boolean;
    }
}
export class MessageDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<MessageDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MessageDialog.ConstructorProperties>, ...args: any[]): void;
    // Properties
    buttons: ButtonsType;
    image: Widget;
    message_area: Widget;
    message_type: MessageType;
    secondary_text: string;
    secondary_use_markup: boolean;
    text: string;
    use_markup: boolean;
    // Members
    get_image(): Widget;
    get_message_area(): Widget;
    set_image(image: Widget): void;
    set_markup(str: string): void;
}
export module Misc {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        xalign: number;
        xpad: number;
        yalign: number;
        ypad: number;
    }
}
export abstract class Misc extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Misc.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Misc.ConstructorProperties>, ...args: any[]): void;
    // Properties
    xalign: number;
    xpad: number;
    yalign: number;
    ypad: number;
    // Fields
    widget: Widget;
    // Members
    get_alignment(): [number | null, number | null];
    get_padding(): [number | null, number | null];
    set_alignment(xalign: number, yalign: number): void;
    set_padding(xpad: number, ypad: number): void;
}
export module ModelButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        centered: boolean;
        icon: Gio.Icon;
        iconic: boolean;
        inverted: boolean;
        menu_name: string;
        role: ButtonRole;
        text: string;
        use_markup: boolean;
    }
}
export class ModelButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<ModelButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModelButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    active: boolean;
    centered: boolean;
    icon: Gio.Icon;
    iconic: boolean;
    inverted: boolean;
    menu_name: string;
    role: ButtonRole;
    text: string;
    use_markup: boolean;
    // Constructors
    static ["new"](): ModelButton;
    static ["new"](...args: never[]): never;
}
export module MountOperation {
    export interface ConstructorProperties extends Gio.MountOperation.ConstructorProperties {
        [key: string]: any;
        is_showing: boolean;
        screen: Gdk.Screen;
    }
}
export class MountOperation extends Gio.MountOperation {
    constructor(properties?: Partial<MountOperation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MountOperation.ConstructorProperties>, ...args: any[]): void;
    // Properties
    is_showing: boolean;
    screen: Gdk.Screen;
    // Fields
    priv: MountOperationPrivate | any;
    // Constructors
    static ["new"](parent: Window | null): MountOperation;
    static ["new"](...args: never[]): never;
    // Members
    get_parent(): Window;
    get_screen(): Gdk.Screen;
    set_parent(parent: Window | null): void;
    set_screen(screen: Gdk.Screen): void;
}
export module NativeDialog {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        modal: boolean;
        title: string;
        transient_for: Window;
        visible: boolean;
    }
}
export abstract class NativeDialog extends GObject.Object {
    constructor(properties?: Partial<NativeDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NativeDialog.ConstructorProperties>, ...args: any[]): void;
    // Properties
    modal: boolean;
    title: string;
    transient_for: Window;
    visible: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'response', callback: (_source: this, response_id: number) => void): number;
    connect_after(signal: 'response', callback: (_source: this, response_id: number) => void): number;
    emit(signal: 'response', response_id: number): void;
    // Members
    destroy(): void;
    get_modal(): boolean;
    get_title(): string | null;
    get_transient_for(): Window | null;
    get_visible(): boolean;
    hide(): void;
    run(): number;
    set_modal(modal: boolean): void;
    set_title(title: string): void;
    set_transient_for(parent: Window | null): void;
    show(): void;
    vfunc_hide(): void;
    vfunc_response(response_id: number): void;
    vfunc_show(): void;
}
export module Notebook {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        enable_popup: boolean;
        group_name: string;
        page: number;
        scrollable: boolean;
        show_border: boolean;
        show_tabs: boolean;
        tab_pos: PositionType;
    }
}
export class Notebook extends Container implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Notebook.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Notebook.ConstructorProperties>, ...args: any[]): void;
    // Properties
    enable_popup: boolean;
    group_name: string;
    page: number;
    scrollable: boolean;
    show_border: boolean;
    show_tabs: boolean;
    tab_pos: PositionType;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'change-current-page', callback: (_source: this, object: number) => boolean): number;
    connect_after(signal: 'change-current-page', callback: (_source: this, object: number) => boolean): number;
    emit(signal: 'change-current-page', object: number): void;
    connect(signal: 'create-window', callback: (_source: this, page: Widget, x: number, y: number) => Notebook): number;
    connect_after(signal: 'create-window', callback: (_source: this, page: Widget, x: number, y: number) => Notebook): number;
    emit(signal: 'create-window', page: Widget, x: number, y: number): void;
    connect(signal: 'focus-tab', callback: (_source: this, object: NotebookTab) => boolean): number;
    connect_after(signal: 'focus-tab', callback: (_source: this, object: NotebookTab) => boolean): number;
    emit(signal: 'focus-tab', object: NotebookTab): void;
    connect(signal: 'move-focus-out', callback: (_source: this, object: DirectionType) => void): number;
    connect_after(signal: 'move-focus-out', callback: (_source: this, object: DirectionType) => void): number;
    emit(signal: 'move-focus-out', object: DirectionType): void;
    connect(signal: 'page-added', callback: (_source: this, child: Widget, page_num: number) => void): number;
    connect_after(signal: 'page-added', callback: (_source: this, child: Widget, page_num: number) => void): number;
    emit(signal: 'page-added', child: Widget, page_num: number): void;
    connect(signal: 'page-removed', callback: (_source: this, child: Widget, page_num: number) => void): number;
    connect_after(signal: 'page-removed', callback: (_source: this, child: Widget, page_num: number) => void): number;
    emit(signal: 'page-removed', child: Widget, page_num: number): void;
    connect(signal: 'page-reordered', callback: (_source: this, child: Widget, page_num: number) => void): number;
    connect_after(signal: 'page-reordered', callback: (_source: this, child: Widget, page_num: number) => void): number;
    emit(signal: 'page-reordered', child: Widget, page_num: number): void;
    connect(signal: 'reorder-tab', callback: (_source: this, object: DirectionType, p0: boolean) => boolean): number;
    connect_after(signal: 'reorder-tab', callback: (_source: this, object: DirectionType, p0: boolean) => boolean): number;
    emit(signal: 'reorder-tab', object: DirectionType, p0: boolean): void;
    connect(signal: 'select-page', callback: (_source: this, object: boolean) => boolean): number;
    connect_after(signal: 'select-page', callback: (_source: this, object: boolean) => boolean): number;
    emit(signal: 'select-page', object: boolean): void;
    connect(signal: 'switch-page', callback: (_source: this, page: Widget, page_num: number) => void): number;
    connect_after(signal: 'switch-page', callback: (_source: this, page: Widget, page_num: number) => void): number;
    emit(signal: 'switch-page', page: Widget, page_num: number): void;
    // Constructors
    static ["new"](): Notebook;
    // Members
    append_page(child: Widget, tab_label: Widget | null): number;
    append_page_menu(child: Widget, tab_label: Widget | null, menu_label: Widget | null): number;
    detach_tab(child: Widget): void;
    get_action_widget(pack_type: PackType): Widget | null;
    get_current_page(): number;
    get_group_name(): string | null;
    get_menu_label(child: Widget): Widget | null;
    get_menu_label_text(child: Widget): string | null;
    get_n_pages(): number;
    get_nth_page(page_num: number): Widget | null;
    get_scrollable(): boolean;
    get_show_border(): boolean;
    get_show_tabs(): boolean;
    get_tab_detachable(child: Widget): boolean;
    get_tab_hborder(): number;
    get_tab_label(child: Widget): Widget | null;
    get_tab_label_text(child: Widget): string | null;
    get_tab_pos(): PositionType;
    get_tab_reorderable(child: Widget): boolean;
    get_tab_vborder(): number;
    insert_page(child: Widget, tab_label: Widget | null, position: number): number;
    insert_page_menu(child: Widget, tab_label: Widget | null, menu_label: Widget | null, position: number): number;
    next_page(): void;
    page_num(child: Widget): number;
    popup_disable(): void;
    popup_enable(): void;
    prepend_page(child: Widget, tab_label: Widget | null): number;
    prepend_page_menu(child: Widget, tab_label: Widget | null, menu_label: Widget | null): number;
    prev_page(): void;
    remove_page(page_num: number): void;
    reorder_child(child: Widget, position: number): void;
    set_action_widget(widget: Widget, pack_type: PackType): void;
    set_current_page(page_num: number): void;
    set_group_name(group_name: string | null): void;
    set_menu_label(child: Widget, menu_label: Widget | null): void;
    set_menu_label_text(child: Widget, menu_text: string): void;
    set_scrollable(scrollable: boolean): void;
    set_show_border(show_border: boolean): void;
    set_show_tabs(show_tabs: boolean): void;
    set_tab_detachable(child: Widget, detachable: boolean): void;
    set_tab_label(child: Widget, tab_label: Widget | null): void;
    set_tab_label_text(child: Widget, tab_text: string): void;
    set_tab_pos(pos: PositionType): void;
    set_tab_reorderable(child: Widget, reorderable: boolean): void;
    vfunc_change_current_page(offset: number): boolean;
    vfunc_focus_tab(type: NotebookTab): boolean;
    vfunc_insert_page(child: Widget, tab_label: Widget, menu_label: Widget, position: number): number;
    vfunc_move_focus_out(direction: DirectionType): void;
    vfunc_page_added(child: Widget, page_num: number): void;
    vfunc_page_removed(child: Widget, page_num: number): void;
    vfunc_page_reordered(child: Widget, page_num: number): void;
    vfunc_reorder_tab(direction: DirectionType, move_to_last: boolean): boolean;
    vfunc_select_page(move_focus: boolean): boolean;
    vfunc_switch_page(page: Widget, page_num: number): void;
}
export module NotebookAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class NotebookAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    constructor(properties?: Partial<NotebookAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NotebookAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: NotebookAccessiblePrivate | any;
    // Implemented Members
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module NotebookPageAccessible {
    export interface ConstructorProperties extends Atk.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class NotebookPageAccessible extends Atk.Object implements Atk.Component {
    constructor(properties?: Partial<NotebookPageAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NotebookPageAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: NotebookPageAccessiblePrivate;
    // Constructors
    static ["new"](notebook: NotebookAccessible, child: Widget): NotebookPageAccessible;
    // Members
    invalidate(): void;
    // Implemented Members
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
export module NumerableIcon {
    export interface ConstructorProperties extends Gio.EmblemedIcon.ConstructorProperties {
        [key: string]: any;
        background_icon: Gio.Icon;
        background_icon_name: string;
        count: number;
        label: string;
        style_context: StyleContext;
    }
}
export class NumerableIcon extends Gio.EmblemedIcon implements Gio.Icon {
    constructor(properties?: Partial<NumerableIcon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NumerableIcon.ConstructorProperties>, ...args: any[]): void;
    // Properties
    background_icon: Gio.Icon;
    background_icon_name: string;
    count: number;
    label: string;
    style_context: StyleContext;
    // Members
    get_background_gicon(): Gio.Icon | null;
    get_background_icon_name(): string | null;
    get_count(): number;
    get_label(): string | null;
    get_style_context(): StyleContext | null;
    set_background_gicon(icon: Gio.Icon | null): void;
    set_background_icon_name(icon_name: string | null): void;
    set_count(count: number): void;
    set_label(label: string | null): void;
    set_style_context(style: StyleContext): void;
    static new(base_icon: Gio.Icon): Gio.Icon;
    static new(...args: never[]): never;
    static new_with_style_context(base_icon: Gio.Icon, context: StyleContext): Gio.Icon;
    // Implemented Members
    equal(icon2: Gio.Icon | null): boolean;
    serialize(): GLib.Variant;
    to_string(): string | null;
    vfunc_equal(icon2: Gio.Icon | null): boolean;
    vfunc_hash(): number;
    vfunc_serialize(): GLib.Variant;
}
export module OffscreenWindow {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
    }
}
export class OffscreenWindow extends Window implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<OffscreenWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<OffscreenWindow.ConstructorProperties>, ...args: any[]): void;
    // Fields
    parent_object: Window;
    // Constructors
    static ["new"](): OffscreenWindow;
    static ["new"](...args: never[]): never;
    // Members
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_surface(): cairo.Surface | null;
}
export module Overlay {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
    }
}
export class Overlay extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Overlay.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Overlay.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: OverlayPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'get-child-position', callback: (_source: this, widget: Widget, allocation: Gdk.Rectangle) => boolean): number;
    connect_after(signal: 'get-child-position', callback: (_source: this, widget: Widget, allocation: Gdk.Rectangle) => boolean): number;
    emit(signal: 'get-child-position', widget: Widget, allocation: Gdk.Rectangle): void;
    // Constructors
    static ["new"](): Overlay;
    // Members
    add_overlay(widget: Widget): void;
    get_overlay_pass_through(widget: Widget): boolean;
    reorder_overlay(child: Widget, index_: number): void;
    set_overlay_pass_through(widget: Widget, pass_through: boolean): void;
    vfunc_get_child_position(widget: Widget, allocation: Allocation): boolean;
}
export module PadController {
    export interface ConstructorProperties extends EventController.ConstructorProperties {
        [key: string]: any;
        action_group: Gio.ActionGroup;
        pad: Gdk.Device;
    }
}
export class PadController extends EventController {
    constructor(properties?: Partial<PadController.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PadController.ConstructorProperties>, ...args: any[]): void;
    // Properties
    action_group: Gio.ActionGroup;
    pad: Gdk.Device;
    // Constructors
    static ["new"](window: Window, group: Gio.ActionGroup, pad: Gdk.Device | null): PadController;
    // Members
    set_action(type: PadActionType, index: number, mode: number, label: string, action_name: string): void;
    set_action_entries(entries: PadActionEntry[]): void;
}
export module PageSetup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PageSetup extends GObject.Object {
    constructor(properties?: Partial<PageSetup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PageSetup.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): PageSetup;
    static new_from_file(file_name: string): PageSetup;
    static new_from_gvariant(variant: GLib.Variant): PageSetup;
    static new_from_key_file(key_file: GLib.KeyFile, group_name: string | null): PageSetup;
    // Members
    copy(): PageSetup;
    get_bottom_margin(unit: Unit): number;
    get_left_margin(unit: Unit): number;
    get_orientation(): PageOrientation;
    get_page_height(unit: Unit): number;
    get_page_width(unit: Unit): number;
    get_paper_height(unit: Unit): number;
    get_paper_size(): PaperSize;
    get_paper_width(unit: Unit): number;
    get_right_margin(unit: Unit): number;
    get_top_margin(unit: Unit): number;
    load_file(file_name: string): boolean;
    load_key_file(key_file: GLib.KeyFile, group_name: string | null): boolean;
    set_bottom_margin(margin: number, unit: Unit): void;
    set_left_margin(margin: number, unit: Unit): void;
    set_orientation(orientation: PageOrientation): void;
    set_paper_size(size: PaperSize): void;
    set_paper_size_and_default_margins(size: PaperSize): void;
    set_right_margin(margin: number, unit: Unit): void;
    set_top_margin(margin: number, unit: Unit): void;
    to_file(file_name: string): boolean;
    to_gvariant(): GLib.Variant;
    to_key_file(key_file: GLib.KeyFile, group_name: string | null): void;
}
export module Paned {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        max_position: number;
        min_position: number;
        position: number;
        position_set: boolean;
        wide_handle: boolean;
    }
}
export class Paned extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<Paned.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Paned.ConstructorProperties>, ...args: any[]): void;
    // Properties
    max_position: number;
    min_position: number;
    position: number;
    position_set: boolean;
    wide_handle: boolean;
    // Fields
    container: Container;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'accept-position', callback: (_source: this) => boolean): number;
    connect_after(signal: 'accept-position', callback: (_source: this) => boolean): number;
    emit(signal: 'accept-position'): void;
    connect(signal: 'cancel-position', callback: (_source: this) => boolean): number;
    connect_after(signal: 'cancel-position', callback: (_source: this) => boolean): number;
    emit(signal: 'cancel-position'): void;
    connect(signal: 'cycle-child-focus', callback: (_source: this, reversed: boolean) => boolean): number;
    connect_after(signal: 'cycle-child-focus', callback: (_source: this, reversed: boolean) => boolean): number;
    emit(signal: 'cycle-child-focus', reversed: boolean): void;
    connect(signal: 'cycle-handle-focus', callback: (_source: this, reversed: boolean) => boolean): number;
    connect_after(signal: 'cycle-handle-focus', callback: (_source: this, reversed: boolean) => boolean): number;
    emit(signal: 'cycle-handle-focus', reversed: boolean): void;
    connect(signal: 'move-handle', callback: (_source: this, scroll_type: ScrollType) => boolean): number;
    connect_after(signal: 'move-handle', callback: (_source: this, scroll_type: ScrollType) => boolean): number;
    emit(signal: 'move-handle', scroll_type: ScrollType): void;
    connect(signal: 'toggle-handle-focus', callback: (_source: this) => boolean): number;
    connect_after(signal: 'toggle-handle-focus', callback: (_source: this) => boolean): number;
    emit(signal: 'toggle-handle-focus'): void;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](orientation: Orientation): Paned;
    // Members
    add1(child: Widget): void;
    add2(child: Widget): void;
    get_child1(): Widget | null;
    get_child2(): Widget | null;
    get_handle_window(): Gdk.Window;
    get_position(): number;
    get_wide_handle(): boolean;
    pack1(child: Widget, resize: boolean, shrink: boolean): void;
    pack2(child: Widget, resize: boolean, shrink: boolean): void;
    set_position(position: number): void;
    set_wide_handle(wide: boolean): void;
    vfunc_accept_position(): boolean;
    vfunc_cancel_position(): boolean;
    vfunc_cycle_child_focus(reverse: boolean): boolean;
    vfunc_cycle_handle_focus(reverse: boolean): boolean;
    vfunc_move_handle(scroll: ScrollType): boolean;
    vfunc_toggle_handle_focus(): boolean;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module PanedAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class PanedAccessible extends ContainerAccessible implements Atk.Component, Atk.Value {
    constructor(properties?: Partial<PanedAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PanedAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: PanedAccessiblePrivate | any;
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
export module PlacesSidebar {
    export interface ConstructorProperties extends ScrolledWindow.ConstructorProperties {
        [key: string]: any;
        local_only: boolean;
        location: Gio.File;
        open_flags: PlacesOpenFlags;
        populate_all: boolean;
        show_connect_to_server: boolean;
        show_desktop: boolean;
        show_enter_location: boolean;
        show_other_locations: boolean;
        show_recent: boolean;
        show_starred_location: boolean;
        show_trash: boolean;
    }
}
export class PlacesSidebar extends ScrolledWindow implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<PlacesSidebar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlacesSidebar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    local_only: boolean;
    location: Gio.File;
    open_flags: PlacesOpenFlags;
    populate_all: boolean;
    show_connect_to_server: boolean;
    show_desktop: boolean;
    show_enter_location: boolean;
    show_other_locations: boolean;
    show_recent: boolean;
    show_starred_location: boolean;
    show_trash: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'drag-action-ask', callback: (_source: this, actions: number) => number): number;
    connect_after(signal: 'drag-action-ask', callback: (_source: this, actions: number) => number): number;
    emit(signal: 'drag-action-ask', actions: number): void;
    connect(signal: 'drag-action-requested', callback: (_source: this, context: Gdk.DragContext, dest_file: Gio.File, source_file_list: GLib.List) => number): number;
    connect_after(signal: 'drag-action-requested', callback: (_source: this, context: Gdk.DragContext, dest_file: Gio.File, source_file_list: GLib.List) => number): number;
    emit(signal: 'drag-action-requested', context: Gdk.DragContext, dest_file: Gio.File, source_file_list: GLib.List): void;
    connect(signal: 'drag-perform-drop', callback: (_source: this, dest_file: Gio.File, source_file_list: GLib.List, action: number) => void): number;
    connect_after(signal: 'drag-perform-drop', callback: (_source: this, dest_file: Gio.File, source_file_list: GLib.List, action: number) => void): number;
    emit(signal: 'drag-perform-drop', dest_file: Gio.File, source_file_list: GLib.List, action: number): void;
    connect(signal: 'mount', callback: (_source: this, mount_operation: Gio.MountOperation) => void): number;
    connect_after(signal: 'mount', callback: (_source: this, mount_operation: Gio.MountOperation) => void): number;
    emit(signal: 'mount', mount_operation: Gio.MountOperation): void;
    connect(signal: 'open-location', callback: (_source: this, location: Gio.File, open_flags: PlacesOpenFlags) => void): number;
    connect_after(signal: 'open-location', callback: (_source: this, location: Gio.File, open_flags: PlacesOpenFlags) => void): number;
    emit(signal: 'open-location', location: Gio.File, open_flags: PlacesOpenFlags): void;
    connect(signal: 'populate-popup', callback: (_source: this, container: Widget, selected_item: Gio.File | null, selected_volume: Gio.Volume | null) => void): number;
    connect_after(signal: 'populate-popup', callback: (_source: this, container: Widget, selected_item: Gio.File | null, selected_volume: Gio.Volume | null) => void): number;
    emit(signal: 'populate-popup', container: Widget, selected_item: Gio.File | null, selected_volume: Gio.Volume | null): void;
    connect(signal: 'show-connect-to-server', callback: (_source: this) => void): number;
    connect_after(signal: 'show-connect-to-server', callback: (_source: this) => void): number;
    emit(signal: 'show-connect-to-server'): void;
    connect(signal: 'show-enter-location', callback: (_source: this) => void): number;
    connect_after(signal: 'show-enter-location', callback: (_source: this) => void): number;
    emit(signal: 'show-enter-location'): void;
    connect(signal: 'show-error-message', callback: (_source: this, primary: string, secondary: string) => void): number;
    connect_after(signal: 'show-error-message', callback: (_source: this, primary: string, secondary: string) => void): number;
    emit(signal: 'show-error-message', primary: string, secondary: string): void;
    connect(signal: 'show-other-locations', callback: (_source: this) => void): number;
    connect_after(signal: 'show-other-locations', callback: (_source: this) => void): number;
    emit(signal: 'show-other-locations'): void;
    connect(signal: 'show-other-locations-with-flags', callback: (_source: this, open_flags: PlacesOpenFlags) => void): number;
    connect_after(signal: 'show-other-locations-with-flags', callback: (_source: this, open_flags: PlacesOpenFlags) => void): number;
    emit(signal: 'show-other-locations-with-flags', open_flags: PlacesOpenFlags): void;
    connect(signal: 'show-starred-location', callback: (_source: this, open_flags: PlacesOpenFlags) => void): number;
    connect_after(signal: 'show-starred-location', callback: (_source: this, open_flags: PlacesOpenFlags) => void): number;
    emit(signal: 'show-starred-location', open_flags: PlacesOpenFlags): void;
    connect(signal: 'unmount', callback: (_source: this, mount_operation: Gio.MountOperation) => void): number;
    connect_after(signal: 'unmount', callback: (_source: this, mount_operation: Gio.MountOperation) => void): number;
    emit(signal: 'unmount', mount_operation: Gio.MountOperation): void;
    // Constructors
    static ["new"](): PlacesSidebar;
    static ["new"](...args: never[]): never;
    // Members
    add_shortcut(location: Gio.File): void;
    get_local_only(): boolean;
    get_location(): Gio.File | null;
    get_nth_bookmark(n: number): Gio.File | null;
    get_open_flags(): PlacesOpenFlags;
    get_show_connect_to_server(): boolean;
    get_show_desktop(): boolean;
    get_show_enter_location(): boolean;
    get_show_other_locations(): boolean;
    get_show_recent(): boolean;
    get_show_starred_location(): boolean;
    get_show_trash(): boolean;
    list_shortcuts(): GLib.SList;
    remove_shortcut(location: Gio.File): void;
    set_drop_targets_visible(visible: boolean, context: Gdk.DragContext): void;
    set_local_only(local_only: boolean): void;
    set_location(location: Gio.File | null): void;
    set_open_flags(flags: PlacesOpenFlags): void;
    set_show_connect_to_server(show_connect_to_server: boolean): void;
    set_show_desktop(show_desktop: boolean): void;
    set_show_enter_location(show_enter_location: boolean): void;
    set_show_other_locations(show_other_locations: boolean): void;
    set_show_recent(show_recent: boolean): void;
    set_show_starred_location(show_starred_location: boolean): void;
    set_show_trash(show_trash: boolean): void;
}
export module Plug {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        embedded: boolean;
        socket_window: Gdk.Window;
    }
}
export class Plug extends Window implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Plug.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Plug.ConstructorProperties>, ...args: any[]): void;
    // Properties
    embedded: boolean;
    socket_window: Gdk.Window;
    // Fields
    window: Window | any;
    priv: PlugPrivate | any;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'embedded', callback: (_source: this) => void): number;
    connect_after(signal: 'embedded', callback: (_source: this) => void): number;
    emit(signal: 'embedded'): void;
    // Constructors
    static ["new"](socket_id: xlib.Window): Plug;
    static ["new"](...args: never[]): never;
    static new_for_display(display: Gdk.Display, socket_id: xlib.Window): Plug;
    // Members
    construct(socket_id: xlib.Window): void;
    construct_for_display(display: Gdk.Display, socket_id: xlib.Window): void;
    get_embedded(): boolean;
    get_id(): xlib.Window;
    get_socket_window(): Gdk.Window | null;
    vfunc_embedded(): void;
}
export module Popover {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        constrain_to: PopoverConstraint;
        modal: boolean;
        pointing_to: Gdk.Rectangle;
        position: PositionType;
        relative_to: Widget;
        transitions_enabled: boolean;
    }
}
export class Popover extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Popover.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Popover.ConstructorProperties>, ...args: any[]): void;
    // Properties
    constrain_to: PopoverConstraint;
    modal: boolean;
    pointing_to: Gdk.Rectangle;
    position: PositionType;
    relative_to: Widget;
    transitions_enabled: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'closed', callback: (_source: this) => void): number;
    connect_after(signal: 'closed', callback: (_source: this) => void): number;
    emit(signal: 'closed'): void;
    // Constructors
    static ["new"](relative_to: Widget | null): Popover;
    static new_from_model(relative_to: Widget | null, model: Gio.MenuModel): Popover;
    // Members
    bind_model(model: Gio.MenuModel | null, action_namespace: string | null): void;
    get_constrain_to(): PopoverConstraint;
    get_default_widget(): Widget | null;
    get_modal(): boolean;
    get_pointing_to(): [boolean, Gdk.Rectangle];
    get_position(): PositionType;
    get_relative_to(): Widget;
    get_transitions_enabled(): boolean;
    popdown(): void;
    popup(): void;
    set_constrain_to(constraint: PopoverConstraint): void;
    set_default_widget(widget: Widget | null): void;
    set_modal(modal: boolean): void;
    set_pointing_to(rect: Gdk.Rectangle): void;
    set_position(position: PositionType): void;
    set_relative_to(relative_to: Widget | null): void;
    set_transitions_enabled(transitions_enabled: boolean): void;
    vfunc_closed(): void;
}
export module PopoverAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class PopoverAccessible extends ContainerAccessible implements Atk.Component {
    constructor(properties?: Partial<PopoverAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PopoverAccessible.ConstructorProperties>, ...args: any[]): void;
}
export module PopoverMenu {
    export interface ConstructorProperties extends Popover.ConstructorProperties {
        [key: string]: any;
        visible_submenu: string;
    }
}
export class PopoverMenu extends Popover implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<PopoverMenu.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PopoverMenu.ConstructorProperties>, ...args: any[]): void;
    // Properties
    visible_submenu: string;
    // Constructors
    static ["new"](): PopoverMenu;
    static ["new"](...args: never[]): never;
    // Members
    open_submenu(name: string): void;
}
export module PrintContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PrintContext extends GObject.Object {
    constructor(properties?: Partial<PrintContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PrintContext.ConstructorProperties>, ...args: any[]): void;
    // Members
    create_pango_context(): Pango.Context;
    create_pango_layout(): Pango.Layout;
    get_cairo_context(): cairo.Context;
    get_dpi_x(): number;
    get_dpi_y(): number;
    get_hard_margins(): [boolean, number, number, number, number];
    get_height(): number;
    get_page_setup(): PageSetup;
    get_pango_fontmap(): Pango.FontMap;
    get_width(): number;
    set_cairo_context(cr: cairo.Context, dpi_x: number, dpi_y: number): void;
}
export module PrintOperation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        allow_async: boolean;
        current_page: number;
        custom_tab_label: string;
        default_page_setup: PageSetup;
        embed_page_setup: boolean;
        export_filename: string;
        has_selection: boolean;
        job_name: string;
        n_pages: number;
        n_pages_to_print: number;
        print_settings: PrintSettings;
        show_progress: boolean;
        status: PrintStatus;
        status_string: string;
        support_selection: boolean;
        track_print_status: boolean;
        unit: Unit;
        use_full_page: boolean;
    }
}
export class PrintOperation extends GObject.Object implements PrintOperationPreview {
    constructor(properties?: Partial<PrintOperation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PrintOperation.ConstructorProperties>, ...args: any[]): void;
    // Properties
    allow_async: boolean;
    current_page: number;
    custom_tab_label: string;
    default_page_setup: PageSetup;
    embed_page_setup: boolean;
    export_filename: string;
    has_selection: boolean;
    job_name: string;
    n_pages: number;
    n_pages_to_print: number;
    print_settings: PrintSettings;
    show_progress: boolean;
    status: PrintStatus;
    status_string: string;
    support_selection: boolean;
    track_print_status: boolean;
    unit: Unit;
    use_full_page: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'begin-print', callback: (_source: this, context: PrintContext) => void): number;
    connect_after(signal: 'begin-print', callback: (_source: this, context: PrintContext) => void): number;
    emit(signal: 'begin-print', context: PrintContext): void;
    connect(signal: 'create-custom-widget', callback: (_source: this) => GObject.Object): number;
    connect_after(signal: 'create-custom-widget', callback: (_source: this) => GObject.Object): number;
    emit(signal: 'create-custom-widget'): void;
    connect(signal: 'custom-widget-apply', callback: (_source: this, widget: Widget) => void): number;
    connect_after(signal: 'custom-widget-apply', callback: (_source: this, widget: Widget) => void): number;
    emit(signal: 'custom-widget-apply', widget: Widget): void;
    connect(signal: 'done', callback: (_source: this, result: PrintOperationResult) => void): number;
    connect_after(signal: 'done', callback: (_source: this, result: PrintOperationResult) => void): number;
    emit(signal: 'done', result: PrintOperationResult): void;
    connect(signal: 'draw-page', callback: (_source: this, context: PrintContext, page_nr: number) => void): number;
    connect_after(signal: 'draw-page', callback: (_source: this, context: PrintContext, page_nr: number) => void): number;
    emit(signal: 'draw-page', context: PrintContext, page_nr: number): void;
    connect(signal: 'end-print', callback: (_source: this, context: PrintContext) => void): number;
    connect_after(signal: 'end-print', callback: (_source: this, context: PrintContext) => void): number;
    emit(signal: 'end-print', context: PrintContext): void;
    connect(signal: 'paginate', callback: (_source: this, context: PrintContext) => boolean): number;
    connect_after(signal: 'paginate', callback: (_source: this, context: PrintContext) => boolean): number;
    emit(signal: 'paginate', context: PrintContext): void;
    connect(signal: 'preview', callback: (_source: this, preview: PrintOperationPreview, context: PrintContext, parent: Window | null) => boolean): number;
    connect_after(signal: 'preview', callback: (_source: this, preview: PrintOperationPreview, context: PrintContext, parent: Window | null) => boolean): number;
    emit(signal: 'preview', preview: PrintOperationPreview, context: PrintContext, parent: Window | null): void;
    connect(signal: 'request-page-setup', callback: (_source: this, context: PrintContext, page_nr: number, setup: PageSetup) => void): number;
    connect_after(signal: 'request-page-setup', callback: (_source: this, context: PrintContext, page_nr: number, setup: PageSetup) => void): number;
    emit(signal: 'request-page-setup', context: PrintContext, page_nr: number, setup: PageSetup): void;
    connect(signal: 'status-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'status-changed', callback: (_source: this) => void): number;
    emit(signal: 'status-changed'): void;
    connect(signal: 'update-custom-widget', callback: (_source: this, widget: Widget, setup: PageSetup, settings: PrintSettings) => void): number;
    connect_after(signal: 'update-custom-widget', callback: (_source: this, widget: Widget, setup: PageSetup, settings: PrintSettings) => void): number;
    emit(signal: 'update-custom-widget', widget: Widget, setup: PageSetup, settings: PrintSettings): void;
    // Constructors
    static ["new"](): PrintOperation;
    // Members
    cancel(): void;
    draw_page_finish(): void;
    get_default_page_setup(): PageSetup;
    get_embed_page_setup(): boolean;
    get_error(): void;
    get_has_selection(): boolean;
    get_n_pages_to_print(): number;
    get_print_settings(): PrintSettings;
    get_status(): PrintStatus;
    get_status_string(): string;
    get_support_selection(): boolean;
    is_finished(): boolean;
    run(action: PrintOperationAction, parent: Window | null): PrintOperationResult;
    set_allow_async(allow_async: boolean): void;
    set_current_page(current_page: number): void;
    set_custom_tab_label(label: string | null): void;
    set_default_page_setup(default_page_setup: PageSetup | null): void;
    set_defer_drawing(): void;
    set_embed_page_setup(embed: boolean): void;
    set_export_filename(filename: string): void;
    set_has_selection(has_selection: boolean): void;
    set_job_name(job_name: string): void;
    set_n_pages(n_pages: number): void;
    set_print_settings(print_settings: PrintSettings | null): void;
    set_show_progress(show_progress: boolean): void;
    set_support_selection(support_selection: boolean): void;
    set_track_print_status(track_status: boolean): void;
    set_unit(unit: Unit): void;
    set_use_full_page(full_page: boolean): void;
    vfunc_begin_print(context: PrintContext): void;
    vfunc_custom_widget_apply(widget: Widget): void;
    vfunc_done(result: PrintOperationResult): void;
    vfunc_draw_page(context: PrintContext, page_nr: number): void;
    vfunc_end_print(context: PrintContext): void;
    vfunc_paginate(context: PrintContext): boolean;
    vfunc_preview(preview: PrintOperationPreview, context: PrintContext, parent: Window): boolean;
    vfunc_request_page_setup(context: PrintContext, page_nr: number, setup: PageSetup): void;
    vfunc_status_changed(): void;
    vfunc_update_custom_widget(widget: Widget, setup: PageSetup, settings: PrintSettings): void;
    // Implemented Members
    end_preview(): void;
    is_selected(page_nr: number): boolean;
    render_page(page_nr: number): void;
    vfunc_end_preview(): void;
    vfunc_got_page_size(context: PrintContext, page_setup: PageSetup): void;
    vfunc_is_selected(page_nr: number): boolean;
    vfunc_ready(context: PrintContext): void;
    vfunc_render_page(page_nr: number): void;
}
export module PrintSettings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PrintSettings extends GObject.Object {
    constructor(properties?: Partial<PrintSettings.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PrintSettings.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): PrintSettings;
    static new_from_file(file_name: string): PrintSettings;
    static new_from_gvariant(variant: GLib.Variant): PrintSettings;
    static new_from_key_file(key_file: GLib.KeyFile, group_name: string | null): PrintSettings;
    // Members
    copy(): PrintSettings;
    foreach(func: PrintSettingsFunc): void;
    get(key: string): string;
    get_bool(key: string): boolean;
    get_collate(): boolean;
    get_default_source(): string;
    get_dither(): string;
    get_double(key: string): number;
    get_double_with_default(key: string, def: number): number;
    get_duplex(): PrintDuplex;
    get_finishings(): string;
    get_int(key: string): number;
    get_int_with_default(key: string, def: number): number;
    get_length(key: string, unit: Unit): number;
    get_media_type(): string;
    get_n_copies(): number;
    get_number_up(): number;
    get_number_up_layout(): NumberUpLayout;
    get_orientation(): PageOrientation;
    get_output_bin(): string;
    get_page_ranges(): PageRange[];
    get_page_set(): PageSet;
    get_paper_height(unit: Unit): number;
    get_paper_size(): PaperSize;
    get_paper_width(unit: Unit): number;
    get_print_pages(): PrintPages;
    get_printer(): string;
    get_printer_lpi(): number;
    get_quality(): PrintQuality;
    get_resolution(): number;
    get_resolution_x(): number;
    get_resolution_y(): number;
    get_reverse(): boolean;
    get_scale(): number;
    get_use_color(): boolean;
    has_key(key: string): boolean;
    load_file(file_name: string): boolean;
    load_key_file(key_file: GLib.KeyFile, group_name: string | null): boolean;
    set(key: string, value: string | null): void;
    set(...args: never[]): never;
    set_bool(key: string, value: boolean): void;
    set_collate(collate: boolean): void;
    set_default_source(default_source: string): void;
    set_dither(dither: string): void;
    set_double(key: string, value: number): void;
    set_duplex(duplex: PrintDuplex): void;
    set_finishings(finishings: string): void;
    set_int(key: string, value: number): void;
    set_length(key: string, value: number, unit: Unit): void;
    set_media_type(media_type: string): void;
    set_n_copies(num_copies: number): void;
    set_number_up(number_up: number): void;
    set_number_up_layout(number_up_layout: NumberUpLayout): void;
    set_orientation(orientation: PageOrientation): void;
    set_output_bin(output_bin: string): void;
    set_page_ranges(page_ranges: PageRange[]): void;
    set_page_set(page_set: PageSet): void;
    set_paper_height(height: number, unit: Unit): void;
    set_paper_size(paper_size: PaperSize): void;
    set_paper_width(width: number, unit: Unit): void;
    set_print_pages(pages: PrintPages): void;
    set_printer(printer: string): void;
    set_printer_lpi(lpi: number): void;
    set_quality(quality: PrintQuality): void;
    set_resolution(resolution: number): void;
    set_resolution_xy(resolution_x: number, resolution_y: number): void;
    set_reverse(reverse: boolean): void;
    set_scale(scale: number): void;
    set_use_color(use_color: boolean): void;
    to_file(file_name: string): boolean;
    to_gvariant(): GLib.Variant;
    to_key_file(key_file: GLib.KeyFile, group_name: string | null): void;
    unset(key: string): void;
}
export module ProgressBar {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        ellipsize: Pango.EllipsizeMode;
        fraction: number;
        inverted: boolean;
        pulse_step: number;
        show_text: boolean;
        text: string;
    }
}
export class ProgressBar extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<ProgressBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ProgressBar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    ellipsize: Pango.EllipsizeMode;
    fraction: number;
    inverted: boolean;
    pulse_step: number;
    show_text: boolean;
    text: string;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](): ProgressBar;
    // Members
    get_ellipsize(): Pango.EllipsizeMode;
    get_fraction(): number;
    get_inverted(): boolean;
    get_pulse_step(): number;
    get_show_text(): boolean;
    get_text(): string | null;
    pulse(): void;
    set_ellipsize(mode: Pango.EllipsizeMode): void;
    set_fraction(fraction: number): void;
    set_inverted(inverted: boolean): void;
    set_pulse_step(fraction: number): void;
    set_show_text(show_text: boolean): void;
    set_text(text: string | null): void;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ProgressBarAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ProgressBarAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {
    constructor(properties?: Partial<ProgressBarAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ProgressBarAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ProgressBarAccessiblePrivate | any;
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
export module RadioAction {
    export interface ConstructorProperties extends ToggleAction.ConstructorProperties {
        [key: string]: any;
        current_value: number;
        group: RadioAction;
        value: number;
    }
}
export class RadioAction extends ToggleAction implements Buildable {
    constructor(properties?: Partial<RadioAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioAction.ConstructorProperties>, ...args: any[]): void;
    // Properties
    current_value: number;
    group: RadioAction;
    value: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this, current: RadioAction) => void): number;
    connect_after(signal: 'changed', callback: (_source: this, current: RadioAction) => void): number;
    emit(signal: 'changed', current: RadioAction): void;
    // Constructors
    static ["new"](name: string, label: string | null, tooltip: string | null, stock_id: string | null, value: number): RadioAction;
    static ["new"](...args: never[]): never;
    // Members
    get_current_value(): number;
    get_group(): GLib.SList;
    join_group(group_source: RadioAction | null): void;
    set_current_value(current_value: number): void;
    set_group(group: GLib.SList | null): void;
    vfunc_changed(current: RadioAction): void;
}
export module RadioButton {
    export interface ConstructorProperties extends CheckButton.ConstructorProperties {
        [key: string]: any;
        group: RadioButton;
    }
}
export class RadioButton extends CheckButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<RadioButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    group: RadioButton;
    // Fields
    check_button: CheckButton;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'group-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'group-changed', callback: (_source: this) => void): number;
    emit(signal: 'group-changed'): void;
    // Constructors
    static ["new"](group: GLib.SList | null): RadioButton;
    static ["new"](...args: never[]): never;
    static new_from_widget(radio_group_member: RadioButton | null): RadioButton;
    static new_with_label(group: GLib.SList | null, label: string): RadioButton;
    static new_with_label(...args: never[]): never;
    static new_with_label_from_widget(radio_group_member: RadioButton | null, label: string): RadioButton;
    static new_with_mnemonic(group: GLib.SList | null, label: string): RadioButton;
    static new_with_mnemonic(...args: never[]): never;
    static new_with_mnemonic_from_widget(radio_group_member: RadioButton | null, label: string): RadioButton;
    // Members
    get_group(): GLib.SList;
    join_group(group_source: RadioButton | null): void;
    set_group(group: GLib.SList | null): void;
    vfunc_group_changed(): void;
}
export module RadioButtonAccessible {
    export interface ConstructorProperties extends ToggleButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class RadioButtonAccessible extends ToggleButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(properties?: Partial<RadioButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioButtonAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: RadioButtonAccessiblePrivate | any;
}
export module RadioMenuItem {
    export interface ConstructorProperties extends CheckMenuItem.ConstructorProperties {
        [key: string]: any;
        group: RadioMenuItem;
    }
}
export class RadioMenuItem extends CheckMenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<RadioMenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioMenuItem.ConstructorProperties>, ...args: any[]): void;
    // Properties
    group: RadioMenuItem;
    // Fields
    check_menu_item: CheckMenuItem;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'group-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'group-changed', callback: (_source: this) => void): number;
    emit(signal: 'group-changed'): void;
    // Constructors
    static ["new"](group: GLib.SList | null): RadioMenuItem;
    static ["new"](...args: never[]): never;
    static new_from_widget(group: RadioMenuItem | null): RadioMenuItem;
    static new_with_label(group: GLib.SList | null, label: string): RadioMenuItem;
    static new_with_label(...args: never[]): never;
    static new_with_label_from_widget(group: RadioMenuItem | null, label: string | null): RadioMenuItem;
    static new_with_mnemonic(group: GLib.SList | null, label: string): RadioMenuItem;
    static new_with_mnemonic(...args: never[]): never;
    static new_with_mnemonic_from_widget(group: RadioMenuItem | null, label: string | null): RadioMenuItem;
    // Members
    get_group(): GLib.SList;
    join_group(group_source: RadioMenuItem | null): void;
    set_group(group: GLib.SList | null): void;
    vfunc_group_changed(): void;
}
export module RadioMenuItemAccessible {
    export interface ConstructorProperties extends CheckMenuItemAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class RadioMenuItemAccessible extends CheckMenuItemAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    constructor(properties?: Partial<RadioMenuItemAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioMenuItemAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: RadioMenuItemAccessiblePrivate | any;
}
export module RadioToolButton {
    export interface ConstructorProperties extends ToggleToolButton.ConstructorProperties {
        [key: string]: any;
        group: RadioToolButton;
    }
}
export class RadioToolButton extends ToggleToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<RadioToolButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioToolButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    group: RadioToolButton;
    // Constructors
    static ["new"](group: GLib.SList | null): RadioToolButton;
    static ["new"](...args: never[]): never;
    static new_from_stock(group: GLib.SList | null, stock_id: string): RadioToolButton;
    static new_from_stock(...args: never[]): never;
    static new_from_widget(group: RadioToolButton | null): RadioToolButton;
    static new_with_stock_from_widget(group: RadioToolButton | null, stock_id: string): RadioToolButton;
    // Members
    get_group(): GLib.SList;
    set_group(group: GLib.SList | null): void;
}
export module Range {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        adjustment: Adjustment;
        fill_level: number;
        inverted: boolean;
        lower_stepper_sensitivity: SensitivityType;
        restrict_to_fill_level: boolean;
        round_digits: number;
        show_fill_level: boolean;
        upper_stepper_sensitivity: SensitivityType;
    }
}
export abstract class Range extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<Range.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Range.ConstructorProperties>, ...args: any[]): void;
    // Properties
    adjustment: Adjustment;
    fill_level: number;
    inverted: boolean;
    lower_stepper_sensitivity: SensitivityType;
    restrict_to_fill_level: boolean;
    round_digits: number;
    show_fill_level: boolean;
    upper_stepper_sensitivity: SensitivityType;
    // Fields
    widget: Widget;
    priv: RangePrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'adjust-bounds', callback: (_source: this, value: number) => void): number;
    connect_after(signal: 'adjust-bounds', callback: (_source: this, value: number) => void): number;
    emit(signal: 'adjust-bounds', value: number): void;
    connect(signal: 'change-value', callback: (_source: this, scroll: ScrollType, value: number) => boolean): number;
    connect_after(signal: 'change-value', callback: (_source: this, scroll: ScrollType, value: number) => boolean): number;
    emit(signal: 'change-value', scroll: ScrollType, value: number): void;
    connect(signal: 'move-slider', callback: (_source: this, step: ScrollType) => void): number;
    connect_after(signal: 'move-slider', callback: (_source: this, step: ScrollType) => void): number;
    emit(signal: 'move-slider', step: ScrollType): void;
    connect(signal: 'value-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'value-changed', callback: (_source: this) => void): number;
    emit(signal: 'value-changed'): void;
    // Implemented Properties
    orientation: Orientation;
    // Members
    get_adjustment(): Adjustment;
    get_fill_level(): number;
    get_flippable(): boolean;
    get_inverted(): boolean;
    get_lower_stepper_sensitivity(): SensitivityType;
    get_min_slider_size(): number;
    get_range_rect(): Gdk.Rectangle;
    get_restrict_to_fill_level(): boolean;
    get_round_digits(): number;
    get_show_fill_level(): boolean;
    get_slider_range(): [number | null, number | null];
    get_slider_size_fixed(): boolean;
    get_upper_stepper_sensitivity(): SensitivityType;
    get_value(): number;
    set_adjustment(adjustment: Adjustment): void;
    set_fill_level(fill_level: number): void;
    set_flippable(flippable: boolean): void;
    set_increments(step: number, page: number): void;
    set_inverted(setting: boolean): void;
    set_lower_stepper_sensitivity(sensitivity: SensitivityType): void;
    set_min_slider_size(min_size: number): void;
    set_range(min: number, max: number): void;
    set_restrict_to_fill_level(restrict_to_fill_level: boolean): void;
    set_round_digits(round_digits: number): void;
    set_show_fill_level(show_fill_level: boolean): void;
    set_slider_size_fixed(size_fixed: boolean): void;
    set_upper_stepper_sensitivity(sensitivity: SensitivityType): void;
    set_value(value: number): void;
    vfunc_adjust_bounds(new_value: number): void;
    vfunc_change_value(scroll: ScrollType, new_value: number): boolean;
    vfunc_get_range_border(border_: Border): void;
    vfunc_get_range_size_request(orientation: Orientation, minimum: number, natural: number): void;
    vfunc_move_slider(scroll: ScrollType): void;
    vfunc_value_changed(): void;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module RangeAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class RangeAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {
    constructor(properties?: Partial<RangeAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RangeAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: RangeAccessiblePrivate | any;
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
export module RcStyle {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class RcStyle extends GObject.Object {
    constructor(properties?: Partial<RcStyle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RcStyle.ConstructorProperties>, ...args: any[]): void;
    // Fields
    name: string;
    bg_pixmap_name: string[];
    font_desc: Pango.FontDescription;
    color_flags: RcFlags[];
    fg: Gdk.Color[];
    bg: Gdk.Color[];
    text: Gdk.Color[];
    base: Gdk.Color[];
    xthickness: number;
    ythickness: number;
    // Constructors
    static ["new"](): RcStyle;
    // Members
    copy(): RcStyle;
    vfunc_merge(src: RcStyle): void;
    vfunc_parse(settings: Settings, scanner: GLib.Scanner): number;
}
export module RecentAction {
    export interface ConstructorProperties extends Action.ConstructorProperties {
        [key: string]: any;
        show_numbers: boolean;
    }
}
export class RecentAction extends Action implements Buildable, RecentChooser {
    constructor(properties?: Partial<RecentAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentAction.ConstructorProperties>, ...args: any[]): void;
    // Properties
    show_numbers: boolean;
    // Implemented Properties
    filter: RecentFilter;
    limit: number;
    local_only: boolean;
    recent_manager: RecentManager;
    select_multiple: boolean;
    show_icons: boolean;
    show_not_found: boolean;
    show_private: boolean;
    show_tips: boolean;
    sort_type: RecentSortType;
    // Constructors
    static ["new"](name: string, label: string | null, tooltip: string | null, stock_id: string | null): RecentAction;
    static ["new"](...args: never[]): never;
    static new_for_manager(name: string, label: string | null, tooltip: string | null, stock_id: string | null, manager: RecentManager | null): RecentAction;
    // Members
    get_show_numbers(): boolean;
    set_show_numbers(show_numbers: boolean): void;
    // Implemented Members
    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): GLib.List;
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): string[];
    list_filters(): GLib.SList;
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, data_destroy: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
    vfunc_add_filter(filter: RecentFilter): void;
    vfunc_get_current_uri(): string;
    vfunc_get_items(): GLib.List;
    vfunc_item_activated(): void;
    vfunc_list_filters(): GLib.SList;
    vfunc_remove_filter(filter: RecentFilter): void;
    vfunc_select_all(): void;
    vfunc_select_uri(uri: string): boolean;
    vfunc_selection_changed(): void;
    vfunc_set_current_uri(uri: string): boolean;
    vfunc_set_sort_func(sort_func: RecentSortFunc, data_destroy: GLib.DestroyNotify | null): void;
    vfunc_unselect_all(): void;
    vfunc_unselect_uri(uri: string): void;
}
export module RecentChooserDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
    }
}
export class RecentChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, RecentChooser {
    constructor(properties?: Partial<RecentChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentChooserDialog.ConstructorProperties>, ...args: any[]): void;
    // Implemented Properties
    filter: RecentFilter;
    limit: number;
    local_only: boolean;
    recent_manager: RecentManager;
    select_multiple: boolean;
    show_icons: boolean;
    show_not_found: boolean;
    show_private: boolean;
    show_tips: boolean;
    sort_type: RecentSortType;
    // Implemented Members
    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): GLib.List;
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): string[];
    list_filters(): GLib.SList;
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, data_destroy: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
    vfunc_add_filter(filter: RecentFilter): void;
    vfunc_get_current_uri(): string;
    vfunc_get_items(): GLib.List;
    vfunc_item_activated(): void;
    vfunc_list_filters(): GLib.SList;
    vfunc_remove_filter(filter: RecentFilter): void;
    vfunc_select_all(): void;
    vfunc_select_uri(uri: string): boolean;
    vfunc_selection_changed(): void;
    vfunc_set_current_uri(uri: string): boolean;
    vfunc_set_sort_func(sort_func: RecentSortFunc, data_destroy: GLib.DestroyNotify | null): void;
    vfunc_unselect_all(): void;
    vfunc_unselect_uri(uri: string): void;
}
export module RecentChooserMenu {
    export interface ConstructorProperties extends Menu.ConstructorProperties {
        [key: string]: any;
        show_numbers: boolean;
    }
}
export class RecentChooserMenu extends Menu implements Atk.ImplementorIface, Activatable, Buildable, RecentChooser {
    constructor(properties?: Partial<RecentChooserMenu.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentChooserMenu.ConstructorProperties>, ...args: any[]): void;
    // Properties
    show_numbers: boolean;
    // Implemented Properties
    related_action: Action;
    use_action_appearance: boolean;
    filter: RecentFilter;
    limit: number;
    local_only: boolean;
    recent_manager: RecentManager;
    select_multiple: boolean;
    show_icons: boolean;
    show_not_found: boolean;
    show_private: boolean;
    show_tips: boolean;
    sort_type: RecentSortType;
    // Constructors
    static ["new"](): RecentChooserMenu;
    static ["new"](...args: never[]): never;
    static new_for_manager(manager: RecentManager): RecentChooserMenu;
    // Members
    get_show_numbers(): boolean;
    set_show_numbers(show_numbers: boolean): void;
    // Implemented Members
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action: Action | null): void;
    vfunc_sync_action_properties(action: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): GLib.List;
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): string[];
    list_filters(): GLib.SList;
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, data_destroy: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
    vfunc_add_filter(filter: RecentFilter): void;
    vfunc_get_current_uri(): string;
    vfunc_get_items(): GLib.List;
    vfunc_item_activated(): void;
    vfunc_list_filters(): GLib.SList;
    vfunc_remove_filter(filter: RecentFilter): void;
    vfunc_select_all(): void;
    vfunc_select_uri(uri: string): boolean;
    vfunc_selection_changed(): void;
    vfunc_set_current_uri(uri: string): boolean;
    vfunc_set_sort_func(sort_func: RecentSortFunc, data_destroy: GLib.DestroyNotify | null): void;
    vfunc_unselect_all(): void;
    vfunc_unselect_uri(uri: string): void;
}
export module RecentChooserWidget {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
    }
}
export class RecentChooserWidget extends Box implements Atk.ImplementorIface, Buildable, Orientable, RecentChooser {
    constructor(properties?: Partial<RecentChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentChooserWidget.ConstructorProperties>, ...args: any[]): void;
    // Implemented Properties
    filter: RecentFilter;
    limit: number;
    local_only: boolean;
    recent_manager: RecentManager;
    select_multiple: boolean;
    show_icons: boolean;
    show_not_found: boolean;
    show_private: boolean;
    show_tips: boolean;
    sort_type: RecentSortType;
    // Constructors
    static ["new"](): RecentChooserWidget;
    static ["new"](...args: never[]): never;
    static new_for_manager(manager: RecentManager): RecentChooserWidget;
    // Implemented Members
    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): GLib.List;
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): string[];
    list_filters(): GLib.SList;
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, data_destroy: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
    vfunc_add_filter(filter: RecentFilter): void;
    vfunc_get_current_uri(): string;
    vfunc_get_items(): GLib.List;
    vfunc_item_activated(): void;
    vfunc_list_filters(): GLib.SList;
    vfunc_remove_filter(filter: RecentFilter): void;
    vfunc_select_all(): void;
    vfunc_select_uri(uri: string): boolean;
    vfunc_selection_changed(): void;
    vfunc_set_current_uri(uri: string): boolean;
    vfunc_set_sort_func(sort_func: RecentSortFunc, data_destroy: GLib.DestroyNotify | null): void;
    vfunc_unselect_all(): void;
    vfunc_unselect_uri(uri: string): void;
}
export module RecentFilter {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}
export class RecentFilter extends GObject.InitiallyUnowned implements Buildable {
    constructor(properties?: Partial<RecentFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentFilter.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): RecentFilter;
    // Members
    add_age(days: number): void;
    add_application(application: string): void;
    add_custom(needed: RecentFilterFlags, func: RecentFilterFunc, data_destroy: GLib.DestroyNotify): void;
    add_group(group: string): void;
    add_mime_type(mime_type: string): void;
    add_pattern(pattern: string): void;
    add_pixbuf_formats(): void;
    filter(filter_info: RecentFilterInfo): boolean;
    get_name(): string | null;
    get_name(...args: never[]): never;
    get_needed(): RecentFilterFlags;
    set_name(name: string): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}
export module RecentManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        filename: string;
        size: number;
    }
}
export class RecentManager extends GObject.Object {
    constructor(properties?: Partial<RecentManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentManager.ConstructorProperties>, ...args: any[]): void;
    // Properties
    filename: string;
    size: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;
    // Constructors
    static ["new"](): RecentManager;
    // Members
    add_full(uri: string, recent_data: RecentData): boolean;
    add_item(uri: string): boolean;
    get_items(): GLib.List;
    has_item(uri: string): boolean;
    lookup_item(uri: string): RecentInfo | null;
    move_item(uri: string, new_uri: string | null): boolean;
    purge_items(): number;
    remove_item(uri: string): boolean;
    vfunc_changed(): void;
    static get_default(): RecentManager;
}
export module RendererCellAccessible {
    export interface ConstructorProperties extends CellAccessible.ConstructorProperties {
        [key: string]: any;
        renderer: CellRenderer;
    }
}
export class RendererCellAccessible extends CellAccessible implements Atk.Action, Atk.Component, Atk.TableCell {
    constructor(properties?: Partial<RendererCellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RendererCellAccessible.ConstructorProperties>, ...args: any[]): void;
    // Properties
    renderer: CellRenderer;
    // Fields
    priv: RendererCellAccessiblePrivate | any;
    // Constructors
    static ["new"](renderer: CellRenderer): RendererCellAccessible;
}
export module Revealer {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        child_revealed: boolean;
        reveal_child: boolean;
        transition_duration: number;
        transition_type: RevealerTransitionType;
    }
}
export class Revealer extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Revealer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Revealer.ConstructorProperties>, ...args: any[]): void;
    // Properties
    child_revealed: boolean;
    reveal_child: boolean;
    transition_duration: number;
    transition_type: RevealerTransitionType;
    // Constructors
    static ["new"](): Revealer;
    // Members
    get_child_revealed(): boolean;
    get_reveal_child(): boolean;
    get_transition_duration(): number;
    get_transition_type(): RevealerTransitionType;
    set_reveal_child(reveal_child: boolean): void;
    set_transition_duration(duration: number): void;
    set_transition_type(transition: RevealerTransitionType): void;
}
export module Scale {
    export interface ConstructorProperties extends Range.ConstructorProperties {
        [key: string]: any;
        digits: number;
        draw_value: boolean;
        has_origin: boolean;
        value_pos: PositionType;
    }
}
export class Scale extends Range implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<Scale.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Scale.ConstructorProperties>, ...args: any[]): void;
    // Properties
    digits: number;
    draw_value: boolean;
    has_origin: boolean;
    value_pos: PositionType;
    // Fields
    range: Range;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'format-value', callback: (_source: this, value: number) => string): number;
    connect_after(signal: 'format-value', callback: (_source: this, value: number) => string): number;
    emit(signal: 'format-value', value: number): void;
    // Constructors
    static ["new"](orientation: Orientation, adjustment: Adjustment | null): Scale;
    static new_with_range(orientation: Orientation, min: number, max: number, step: number): Scale;
    // Members
    add_mark(value: number, position: PositionType, markup: string | null): void;
    clear_marks(): void;
    get_digits(): number;
    get_draw_value(): boolean;
    get_has_origin(): boolean;
    get_layout(): Pango.Layout | null;
    get_layout_offsets(): [number | null, number | null];
    get_value_pos(): PositionType;
    set_digits(digits: number): void;
    set_draw_value(draw_value: boolean): void;
    set_has_origin(has_origin: boolean): void;
    set_value_pos(pos: PositionType): void;
    vfunc_draw_value(): void;
    vfunc_format_value(value: number): string;
    vfunc_get_layout_offsets(): [number | null, number | null];
}
export module ScaleAccessible {
    export interface ConstructorProperties extends RangeAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ScaleAccessible extends RangeAccessible implements Atk.Component, Atk.Value {
    constructor(properties?: Partial<ScaleAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScaleAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ScaleAccessiblePrivate | any;
}
export module ScaleButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        adjustment: Adjustment;
        icons: string[];
        size: IconSize;
        value: number;
    }
}
export class ScaleButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable, Orientable {
    constructor(properties?: Partial<ScaleButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScaleButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    adjustment: Adjustment;
    icons: string[];
    size: IconSize;
    value: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'popdown', callback: (_source: this) => void): number;
    connect_after(signal: 'popdown', callback: (_source: this) => void): number;
    emit(signal: 'popdown'): void;
    connect(signal: 'popup', callback: (_source: this) => void): number;
    connect_after(signal: 'popup', callback: (_source: this) => void): number;
    emit(signal: 'popup'): void;
    connect(signal: 'value-changed', callback: (_source: this, value: number) => void): number;
    connect_after(signal: 'value-changed', callback: (_source: this, value: number) => void): number;
    emit(signal: 'value-changed', value: number): void;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](size: number, min: number, max: number, step: number, icons: string[] | null): ScaleButton;
    static ["new"](...args: never[]): never;
    // Members
    get_adjustment(): Adjustment;
    get_minus_button(): Button;
    get_plus_button(): Button;
    get_popup(): Widget;
    get_value(): number;
    set_adjustment(adjustment: Adjustment): void;
    set_icons(icons: string[]): void;
    set_value(value: number): void;
    vfunc_value_changed(value: number): void;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ScaleButtonAccessible {
    export interface ConstructorProperties extends ButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ScaleButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image, Atk.Value {
    constructor(properties?: Partial<ScaleButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScaleButtonAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ScaleButtonAccessiblePrivate | any;
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
export module Scrollbar {
    export interface ConstructorProperties extends Range.ConstructorProperties {
        [key: string]: any;
    }
}
export class Scrollbar extends Range implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<Scrollbar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Scrollbar.ConstructorProperties>, ...args: any[]): void;
    // Fields
    range: Range;
    // Constructors
    static ["new"](orientation: Orientation, adjustment: Adjustment | null): Scrollbar;
}
export module ScrolledWindow {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        hadjustment: Adjustment;
        hscrollbar_policy: PolicyType;
        kinetic_scrolling: boolean;
        max_content_height: number;
        max_content_width: number;
        min_content_height: number;
        min_content_width: number;
        overlay_scrolling: boolean;
        propagate_natural_height: boolean;
        propagate_natural_width: boolean;
        shadow_type: ShadowType;
        vadjustment: Adjustment;
        vscrollbar_policy: PolicyType;
        window_placement: CornerType;
        window_placement_set: boolean;
    }
}
export class ScrolledWindow extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<ScrolledWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScrolledWindow.ConstructorProperties>, ...args: any[]): void;
    // Properties
    hadjustment: Adjustment;
    hscrollbar_policy: PolicyType;
    kinetic_scrolling: boolean;
    max_content_height: number;
    max_content_width: number;
    min_content_height: number;
    min_content_width: number;
    overlay_scrolling: boolean;
    propagate_natural_height: boolean;
    propagate_natural_width: boolean;
    shadow_type: ShadowType;
    vadjustment: Adjustment;
    vscrollbar_policy: PolicyType;
    window_placement: CornerType;
    window_placement_set: boolean;
    // Fields
    container: Bin | any;
    priv: ScrolledWindowPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'edge-overshot', callback: (_source: this, pos: PositionType) => void): number;
    connect_after(signal: 'edge-overshot', callback: (_source: this, pos: PositionType) => void): number;
    emit(signal: 'edge-overshot', pos: PositionType): void;
    connect(signal: 'edge-reached', callback: (_source: this, pos: PositionType) => void): number;
    connect_after(signal: 'edge-reached', callback: (_source: this, pos: PositionType) => void): number;
    emit(signal: 'edge-reached', pos: PositionType): void;
    connect(signal: 'move-focus-out', callback: (_source: this, direction_type: DirectionType) => void): number;
    connect_after(signal: 'move-focus-out', callback: (_source: this, direction_type: DirectionType) => void): number;
    emit(signal: 'move-focus-out', direction_type: DirectionType): void;
    connect(signal: 'scroll-child', callback: (_source: this, scroll: ScrollType, horizontal: boolean) => boolean): number;
    connect_after(signal: 'scroll-child', callback: (_source: this, scroll: ScrollType, horizontal: boolean) => boolean): number;
    emit(signal: 'scroll-child', scroll: ScrollType, horizontal: boolean): void;
    // Constructors
    static ["new"](hadjustment: Adjustment | null, vadjustment: Adjustment | null): ScrolledWindow;
    // Members
    add_with_viewport(child: Widget): void;
    get_capture_button_press(): boolean;
    get_hadjustment(): Adjustment;
    get_hscrollbar(): Widget;
    get_kinetic_scrolling(): boolean;
    get_max_content_height(): number;
    get_max_content_width(): number;
    get_min_content_height(): number;
    get_min_content_width(): number;
    get_overlay_scrolling(): boolean;
    get_placement(): CornerType;
    get_policy(): [PolicyType | null, PolicyType | null];
    get_propagate_natural_height(): boolean;
    get_propagate_natural_width(): boolean;
    get_shadow_type(): ShadowType;
    get_vadjustment(): Adjustment;
    get_vscrollbar(): Widget;
    set_capture_button_press(capture_button_press: boolean): void;
    set_hadjustment(hadjustment: Adjustment | null): void;
    set_kinetic_scrolling(kinetic_scrolling: boolean): void;
    set_max_content_height(height: number): void;
    set_max_content_width(width: number): void;
    set_min_content_height(height: number): void;
    set_min_content_width(width: number): void;
    set_overlay_scrolling(overlay_scrolling: boolean): void;
    set_placement(window_placement: CornerType): void;
    set_policy(hscrollbar_policy: PolicyType, vscrollbar_policy: PolicyType): void;
    set_propagate_natural_height(propagate: boolean): void;
    set_propagate_natural_width(propagate: boolean): void;
    set_shadow_type(type: ShadowType): void;
    set_vadjustment(vadjustment: Adjustment | null): void;
    unset_placement(): void;
    vfunc_move_focus_out(direction: DirectionType): void;
    vfunc_scroll_child(scroll: ScrollType, horizontal: boolean): boolean;
}
export module ScrolledWindowAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ScrolledWindowAccessible extends ContainerAccessible implements Atk.Component {
    constructor(properties?: Partial<ScrolledWindowAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScrolledWindowAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ScrolledWindowAccessiblePrivate | any;
}
export module SearchBar {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        search_mode_enabled: boolean;
        show_close_button: boolean;
    }
}
export class SearchBar extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<SearchBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SearchBar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    search_mode_enabled: boolean;
    show_close_button: boolean;
    // Constructors
    static ["new"](): SearchBar;
    // Members
    connect_entry(entry: Entry): void;
    get_search_mode(): boolean;
    get_show_close_button(): boolean;
    handle_event(event: Gdk.Event): boolean;
    set_search_mode(search_mode: boolean): void;
    set_show_close_button(visible: boolean): void;
}
export module SearchEntry {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;
    }
}
export class SearchEntry extends Entry implements Atk.ImplementorIface, Buildable, CellEditable, Editable {
    constructor(properties?: Partial<SearchEntry.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SearchEntry.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'next-match', callback: (_source: this) => void): number;
    connect_after(signal: 'next-match', callback: (_source: this) => void): number;
    emit(signal: 'next-match'): void;
    connect(signal: 'previous-match', callback: (_source: this) => void): number;
    connect_after(signal: 'previous-match', callback: (_source: this) => void): number;
    emit(signal: 'previous-match'): void;
    connect(signal: 'search-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'search-changed', callback: (_source: this) => void): number;
    emit(signal: 'search-changed'): void;
    connect(signal: 'stop-search', callback: (_source: this) => void): number;
    connect_after(signal: 'stop-search', callback: (_source: this) => void): number;
    emit(signal: 'stop-search'): void;
    // Constructors
    static ["new"](): SearchEntry;
    static ["new"](...args: never[]): never;
    // Members
    handle_event(event: Gdk.Event): boolean;
    vfunc_next_match(): void;
    vfunc_previous_match(): void;
    vfunc_search_changed(): void;
    vfunc_stop_search(): void;
}
export module Separator {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class Separator extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<Separator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Separator.ConstructorProperties>, ...args: any[]): void;
    // Fields
    widget: Widget;
    priv: SeparatorPrivate;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](orientation: Orientation): Separator;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module SeparatorMenuItem {
    export interface ConstructorProperties extends MenuItem.ConstructorProperties {
        [key: string]: any;
    }
}
export class SeparatorMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<SeparatorMenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SeparatorMenuItem.ConstructorProperties>, ...args: any[]): void;
    // Fields
    menu_item: MenuItem;
    // Constructors
    static ["new"](): SeparatorMenuItem;
    static ["new"](...args: never[]): never;
}
export module SeparatorToolItem {
    export interface ConstructorProperties extends ToolItem.ConstructorProperties {
        [key: string]: any;
    }
}
export class SeparatorToolItem extends ToolItem implements Atk.ImplementorIface, Activatable, Buildable {
    constructor(properties?: Partial<SeparatorToolItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SeparatorToolItem.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): SeparatorToolItem;
    static ["new"](...args: never[]): never;
    // Members
    get_draw(): boolean;
    set_draw(draw: boolean): void;
}
export module Settings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        color_hash: GLib.HashTable;
        gtk_alternative_button_order: boolean;
        gtk_alternative_sort_arrows: boolean;
        gtk_application_prefer_dark_theme: boolean;
        gtk_auto_mnemonics: boolean;
        gtk_button_images: boolean;
        gtk_can_change_accels: boolean;
        gtk_color_palette: string;
        gtk_color_scheme: string;
        gtk_cursor_blink: boolean;
        gtk_cursor_blink_time: number;
        gtk_cursor_blink_timeout: number;
        gtk_cursor_theme_name: string;
        gtk_cursor_theme_size: number;
        gtk_decoration_layout: string;
        gtk_dialogs_use_header: boolean;
        gtk_dnd_drag_threshold: number;
        gtk_double_click_distance: number;
        gtk_double_click_time: number;
        gtk_enable_accels: boolean;
        gtk_enable_animations: boolean;
        gtk_enable_event_sounds: boolean;
        gtk_enable_input_feedback_sounds: boolean;
        gtk_enable_mnemonics: boolean;
        gtk_enable_primary_paste: boolean;
        gtk_enable_tooltips: boolean;
        gtk_entry_password_hint_timeout: number;
        gtk_entry_select_on_focus: boolean;
        gtk_error_bell: boolean;
        gtk_fallback_icon_theme: string;
        gtk_file_chooser_backend: string;
        gtk_font_name: string;
        gtk_fontconfig_timestamp: number;
        gtk_icon_sizes: string;
        gtk_icon_theme_name: string;
        gtk_im_module: string;
        gtk_im_preedit_style: IMPreeditStyle;
        gtk_im_status_style: IMStatusStyle;
        gtk_key_theme_name: string;
        gtk_keynav_cursor_only: boolean;
        gtk_keynav_use_caret: boolean;
        gtk_keynav_wrap_around: boolean;
        gtk_label_select_on_focus: boolean;
        gtk_long_press_time: number;
        gtk_menu_bar_accel: string;
        gtk_menu_bar_popup_delay: number;
        gtk_menu_images: boolean;
        gtk_menu_popdown_delay: number;
        gtk_menu_popup_delay: number;
        gtk_modules: string;
        gtk_overlay_scrolling: boolean;
        gtk_primary_button_warps_slider: boolean;
        gtk_print_backends: string;
        gtk_print_preview_command: string;
        gtk_recent_files_enabled: boolean;
        gtk_recent_files_limit: number;
        gtk_recent_files_max_age: number;
        gtk_scrolled_window_placement: CornerType;
        gtk_shell_shows_app_menu: boolean;
        gtk_shell_shows_desktop: boolean;
        gtk_shell_shows_menubar: boolean;
        gtk_show_input_method_menu: boolean;
        gtk_show_unicode_menu: boolean;
        gtk_sound_theme_name: string;
        gtk_split_cursor: boolean;
        gtk_theme_name: string;
        gtk_timeout_expand: number;
        gtk_timeout_initial: number;
        gtk_timeout_repeat: number;
        gtk_titlebar_double_click: string;
        gtk_titlebar_middle_click: string;
        gtk_titlebar_right_click: string;
        gtk_toolbar_icon_size: IconSize;
        gtk_toolbar_style: ToolbarStyle;
        gtk_tooltip_browse_mode_timeout: number;
        gtk_tooltip_browse_timeout: number;
        gtk_tooltip_timeout: number;
        gtk_touchscreen_mode: boolean;
        gtk_visible_focus: PolicyType;
        gtk_xft_antialias: number;
        gtk_xft_dpi: number;
        gtk_xft_hinting: number;
        gtk_xft_hintstyle: string;
        gtk_xft_rgba: string;
    }
}
export class Settings extends GObject.Object implements StyleProvider {
    constructor(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]): void;
    // Properties
    color_hash: GLib.HashTable;
    gtk_alternative_button_order: boolean;
    gtk_alternative_sort_arrows: boolean;
    gtk_application_prefer_dark_theme: boolean;
    gtk_auto_mnemonics: boolean;
    gtk_button_images: boolean;
    gtk_can_change_accels: boolean;
    gtk_color_palette: string;
    gtk_color_scheme: string;
    gtk_cursor_blink: boolean;
    gtk_cursor_blink_time: number;
    gtk_cursor_blink_timeout: number;
    gtk_cursor_theme_name: string;
    gtk_cursor_theme_size: number;
    gtk_decoration_layout: string;
    gtk_dialogs_use_header: boolean;
    gtk_dnd_drag_threshold: number;
    gtk_double_click_distance: number;
    gtk_double_click_time: number;
    gtk_enable_accels: boolean;
    gtk_enable_animations: boolean;
    gtk_enable_event_sounds: boolean;
    gtk_enable_input_feedback_sounds: boolean;
    gtk_enable_mnemonics: boolean;
    gtk_enable_primary_paste: boolean;
    gtk_enable_tooltips: boolean;
    gtk_entry_password_hint_timeout: number;
    gtk_entry_select_on_focus: boolean;
    gtk_error_bell: boolean;
    gtk_fallback_icon_theme: string;
    gtk_file_chooser_backend: string;
    gtk_font_name: string;
    gtk_fontconfig_timestamp: number;
    gtk_icon_sizes: string;
    gtk_icon_theme_name: string;
    gtk_im_module: string;
    gtk_im_preedit_style: IMPreeditStyle;
    gtk_im_status_style: IMStatusStyle;
    gtk_key_theme_name: string;
    gtk_keynav_cursor_only: boolean;
    gtk_keynav_use_caret: boolean;
    gtk_keynav_wrap_around: boolean;
    gtk_label_select_on_focus: boolean;
    gtk_long_press_time: number;
    gtk_menu_bar_accel: string;
    gtk_menu_bar_popup_delay: number;
    gtk_menu_images: boolean;
    gtk_menu_popdown_delay: number;
    gtk_menu_popup_delay: number;
    gtk_modules: string;
    gtk_overlay_scrolling: boolean;
    gtk_primary_button_warps_slider: boolean;
    gtk_print_backends: string;
    gtk_print_preview_command: string;
    gtk_recent_files_enabled: boolean;
    gtk_recent_files_limit: number;
    gtk_recent_files_max_age: number;
    gtk_scrolled_window_placement: CornerType;
    gtk_shell_shows_app_menu: boolean;
    gtk_shell_shows_desktop: boolean;
    gtk_shell_shows_menubar: boolean;
    gtk_show_input_method_menu: boolean;
    gtk_show_unicode_menu: boolean;
    gtk_sound_theme_name: string;
    gtk_split_cursor: boolean;
    gtk_theme_name: string;
    gtk_timeout_expand: number;
    gtk_timeout_initial: number;
    gtk_timeout_repeat: number;
    gtk_titlebar_double_click: string;
    gtk_titlebar_middle_click: string;
    gtk_titlebar_right_click: string;
    gtk_toolbar_icon_size: IconSize;
    gtk_toolbar_style: ToolbarStyle;
    gtk_tooltip_browse_mode_timeout: number;
    gtk_tooltip_browse_timeout: number;
    gtk_tooltip_timeout: number;
    gtk_touchscreen_mode: boolean;
    gtk_visible_focus: PolicyType;
    gtk_xft_antialias: number;
    gtk_xft_dpi: number;
    gtk_xft_hinting: number;
    gtk_xft_hintstyle: string;
    gtk_xft_rgba: string;
    // Members
    reset_property(name: string): void;
    set_double_property(name: string, v_double: number, origin: string): void;
    set_long_property(name: string, v_long: number, origin: string): void;
    set_property_value(name: string, svalue: SettingsValue): void;
    set_string_property(name: string, v_string: string, origin: string): void;
    static get_default(): Settings | null;
    static get_for_screen(screen: Gdk.Screen): Settings;
    static install_property(pspec: GObject.ParamSpec): void;
    static install_property_parser(pspec: GObject.ParamSpec, parser: RcPropertyParser): void;
    // Implemented Members
    get_icon_factory(path: WidgetPath): IconFactory | null;
    get_style(path: WidgetPath): StyleProperties | null;
    get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, GObject.Value];
    vfunc_get_icon_factory(path: WidgetPath): IconFactory | null;
    vfunc_get_style(path: WidgetPath): StyleProperties | null;
    vfunc_get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, GObject.Value];
}
export module ShortcutLabel {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        accelerator: string;
        disabled_text: string;
    }
}
export class ShortcutLabel extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<ShortcutLabel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShortcutLabel.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accelerator: string;
    disabled_text: string;
    // Constructors
    static ["new"](accelerator: string): ShortcutLabel;
    static ["new"](...args: never[]): never;
    // Members
    get_accelerator(): string | null;
    get_disabled_text(): string | null;
    set_accelerator(accelerator: string): void;
    set_disabled_text(disabled_text: string): void;
}
export module ShortcutsGroup {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        accel_size_group: SizeGroup;
        height: number;
        title: string;
        title_size_group: SizeGroup;
        view: string;
    }
}
export class ShortcutsGroup extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<ShortcutsGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShortcutsGroup.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accel_size_group: SizeGroup;
    height: number;
    title: string;
    title_size_group: SizeGroup;
    view: string;
}
export module ShortcutsSection {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        max_height: number;
        section_name: string;
        title: string;
        view_name: string;
    }
}
export class ShortcutsSection extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<ShortcutsSection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShortcutsSection.ConstructorProperties>, ...args: any[]): void;
    // Properties
    max_height: number;
    section_name: string;
    title: string;
    view_name: string;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'change-current-page', callback: (_source: this, object: number) => boolean): number;
    connect_after(signal: 'change-current-page', callback: (_source: this, object: number) => boolean): number;
    emit(signal: 'change-current-page', object: number): void;
}
export module ShortcutsShortcut {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        accel_size_group: SizeGroup;
        accelerator: string;
        action_name: string;
        direction: TextDirection;
        icon: Gio.Icon;
        icon_set: boolean;
        shortcut_type: ShortcutType;
        subtitle: string;
        subtitle_set: boolean;
        title: string;
        title_size_group: SizeGroup;
    }
}
export class ShortcutsShortcut extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<ShortcutsShortcut.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShortcutsShortcut.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accel_size_group: SizeGroup;
    accelerator: string;
    action_name: string;
    direction: TextDirection;
    icon: Gio.Icon;
    icon_set: boolean;
    shortcut_type: ShortcutType;
    subtitle: string;
    subtitle_set: boolean;
    title: string;
    title_size_group: SizeGroup;
}
export module ShortcutsWindow {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        section_name: string;
        view_name: string;
    }
}
export class ShortcutsWindow extends Window implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<ShortcutsWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShortcutsWindow.ConstructorProperties>, ...args: any[]): void;
    // Properties
    section_name: string;
    view_name: string;
    // Fields
    window: Window | any;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'close', callback: (_source: this) => void): number;
    connect_after(signal: 'close', callback: (_source: this) => void): number;
    emit(signal: 'close'): void;
    connect(signal: 'search', callback: (_source: this) => void): number;
    connect_after(signal: 'search', callback: (_source: this) => void): number;
    emit(signal: 'search'): void;
    // Members
    vfunc_close(): void;
    vfunc_search(): void;
}
export module SizeGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        ignore_hidden: boolean;
        mode: SizeGroupMode;
    }
}
export class SizeGroup extends GObject.Object implements Buildable {
    constructor(properties?: Partial<SizeGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SizeGroup.ConstructorProperties>, ...args: any[]): void;
    // Properties
    ignore_hidden: boolean;
    mode: SizeGroupMode;
    // Constructors
    static ["new"](mode: SizeGroupMode): SizeGroup;
    // Members
    add_widget(widget: Widget): void;
    get_ignore_hidden(): boolean;
    get_mode(): SizeGroupMode;
    get_widgets(): GLib.SList;
    remove_widget(widget: Widget): void;
    set_ignore_hidden(ignore_hidden: boolean): void;
    set_mode(mode: SizeGroupMode): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}
export module Socket {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
    }
}
export class Socket extends Container implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Socket.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Socket.ConstructorProperties>, ...args: any[]): void;
    // Fields
    container: Container;
    priv: SocketPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'plug-added', callback: (_source: this) => void): number;
    connect_after(signal: 'plug-added', callback: (_source: this) => void): number;
    emit(signal: 'plug-added'): void;
    connect(signal: 'plug-removed', callback: (_source: this) => boolean): number;
    connect_after(signal: 'plug-removed', callback: (_source: this) => boolean): number;
    emit(signal: 'plug-removed'): void;
    // Constructors
    static ["new"](): Socket;
    // Members
    add_id(window: xlib.Window): void;
    get_id(): xlib.Window;
    get_plug_window(): Gdk.Window | null;
    vfunc_plug_added(): void;
    vfunc_plug_removed(): boolean;
}
export module SpinButton {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;
        adjustment: Adjustment;
        climb_rate: number;
        digits: number;
        numeric: boolean;
        snap_to_ticks: boolean;
        update_policy: SpinButtonUpdatePolicy;
        value: number;
        wrap: boolean;
    }
}
export class SpinButton extends Entry implements Atk.ImplementorIface, Buildable, CellEditable, Editable, Orientable {
    constructor(properties?: Partial<SpinButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SpinButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    adjustment: Adjustment;
    climb_rate: number;
    digits: number;
    numeric: boolean;
    snap_to_ticks: boolean;
    update_policy: SpinButtonUpdatePolicy;
    value: number;
    wrap: boolean;
    // Fields
    entry: Entry;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'change-value', callback: (_source: this, scroll: ScrollType) => void): number;
    connect_after(signal: 'change-value', callback: (_source: this, scroll: ScrollType) => void): number;
    emit(signal: 'change-value', scroll: ScrollType): void;
    connect(signal: 'input', callback: (_source: this, new_value: number) => number): number;
    connect_after(signal: 'input', callback: (_source: this, new_value: number) => number): number;
    emit(signal: 'input', new_value: number): void;
    connect(signal: 'output', callback: (_source: this) => boolean): number;
    connect_after(signal: 'output', callback: (_source: this) => boolean): number;
    emit(signal: 'output'): void;
    connect(signal: 'value-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'value-changed', callback: (_source: this) => void): number;
    emit(signal: 'value-changed'): void;
    connect(signal: 'wrapped', callback: (_source: this) => void): number;
    connect_after(signal: 'wrapped', callback: (_source: this) => void): number;
    emit(signal: 'wrapped'): void;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](adjustment: Adjustment | null, climb_rate: number, digits: number): SpinButton;
    static ["new"](...args: never[]): never;
    static new_with_range(min: number, max: number, step: number): SpinButton;
    // Members
    configure(adjustment: Adjustment | null, climb_rate: number, digits: number): void;
    get_adjustment(): Adjustment;
    get_digits(): number;
    get_increments(): [number | null, number | null];
    get_numeric(): boolean;
    get_range(): [number | null, number | null];
    get_snap_to_ticks(): boolean;
    get_update_policy(): SpinButtonUpdatePolicy;
    get_value(): number;
    get_value_as_int(): number;
    get_wrap(): boolean;
    set_adjustment(adjustment: Adjustment): void;
    set_digits(digits: number): void;
    set_increments(step: number, page: number): void;
    set_numeric(numeric: boolean): void;
    set_range(min: number, max: number): void;
    set_snap_to_ticks(snap_to_ticks: boolean): void;
    set_update_policy(policy: SpinButtonUpdatePolicy): void;
    set_value(value: number): void;
    set_wrap(wrap: boolean): void;
    spin(direction: SpinType, increment: number): void;
    update(): void;
    vfunc_change_value(scroll: ScrollType): void;
    vfunc_input(new_value: number): number;
    vfunc_output(): number;
    vfunc_value_changed(): void;
    vfunc_wrapped(): void;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module SpinButtonAccessible {
    export interface ConstructorProperties extends EntryAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class SpinButtonAccessible extends EntryAccessible implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text, Atk.Value {
    constructor(properties?: Partial<SpinButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SpinButtonAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: SpinButtonAccessiblePrivate | any;
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
export module Spinner {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        active: boolean;
    }
}
export class Spinner extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Spinner.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Spinner.ConstructorProperties>, ...args: any[]): void;
    // Properties
    active: boolean;
    // Constructors
    static ["new"](): Spinner;
    // Members
    start(): void;
    stop(): void;
}
export module SpinnerAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class SpinnerAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {
    constructor(properties?: Partial<SpinnerAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SpinnerAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: SpinnerAccessiblePrivate | any;
    // Implemented Members
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number | null, number | null];
    get_image_size(): [number | null, number | null];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number | null, number | null];
    vfunc_get_image_size(): [number | null, number | null];
    vfunc_set_image_description(description: string): boolean;
}
export module Stack {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        hhomogeneous: boolean;
        homogeneous: boolean;
        interpolate_size: boolean;
        transition_duration: number;
        transition_running: boolean;
        transition_type: StackTransitionType;
        vhomogeneous: boolean;
        visible_child: Widget;
        visible_child_name: string;
    }
}
export class Stack extends Container implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Stack.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Stack.ConstructorProperties>, ...args: any[]): void;
    // Properties
    hhomogeneous: boolean;
    homogeneous: boolean;
    interpolate_size: boolean;
    transition_duration: number;
    transition_running: boolean;
    transition_type: StackTransitionType;
    vhomogeneous: boolean;
    visible_child: Widget;
    visible_child_name: string;
    // Constructors
    static ["new"](): Stack;
    // Members
    add_named(child: Widget, name: string): void;
    add_titled(child: Widget, name: string, title: string): void;
    get_child_by_name(name: string): Widget | null;
    get_hhomogeneous(): boolean;
    get_homogeneous(): boolean;
    get_interpolate_size(): boolean;
    get_transition_duration(): number;
    get_transition_running(): boolean;
    get_transition_type(): StackTransitionType;
    get_vhomogeneous(): boolean;
    get_visible_child(): Widget | null;
    get_visible_child_name(): string | null;
    set_hhomogeneous(hhomogeneous: boolean): void;
    set_homogeneous(homogeneous: boolean): void;
    set_interpolate_size(interpolate_size: boolean): void;
    set_transition_duration(duration: number): void;
    set_transition_type(transition: StackTransitionType): void;
    set_vhomogeneous(vhomogeneous: boolean): void;
    set_visible_child(child: Widget): void;
    set_visible_child_full(name: string, transition: StackTransitionType): void;
    set_visible_child_name(name: string): void;
}
export module StackAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class StackAccessible extends ContainerAccessible implements Atk.Component {
    constructor(properties?: Partial<StackAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StackAccessible.ConstructorProperties>, ...args: any[]): void;
}
export module StackSidebar {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        stack: Stack;
    }
}
export class StackSidebar extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<StackSidebar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StackSidebar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    stack: Stack;
    // Constructors
    static ["new"](): StackSidebar;
    // Members
    get_stack(): Stack | null;
    set_stack(stack: Stack): void;
}
export module StackSwitcher {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        icon_size: number;
        stack: Stack;
    }
}
export class StackSwitcher extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<StackSwitcher.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StackSwitcher.ConstructorProperties>, ...args: any[]): void;
    // Properties
    icon_size: number;
    stack: Stack;
    // Fields
    widget: Box | any;
    // Constructors
    static ["new"](): StackSwitcher;
    static ["new"](...args: never[]): never;
    // Members
    get_stack(): Stack | null;
    set_stack(stack: Stack | null): void;
}
export module StatusIcon {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        embedded: boolean;
        file: string;
        gicon: Gio.Icon;
        has_tooltip: boolean;
        icon_name: string;
        orientation: Orientation;
        pixbuf: GdkPixbuf.Pixbuf;
        screen: Gdk.Screen;
        size: number;
        stock: string;
        storage_type: ImageType;
        title: string;
        tooltip_markup: string;
        tooltip_text: string;
        visible: boolean;
    }
}
export class StatusIcon extends GObject.Object {
    constructor(properties?: Partial<StatusIcon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StatusIcon.ConstructorProperties>, ...args: any[]): void;
    // Properties
    embedded: boolean;
    file: string;
    gicon: Gio.Icon;
    has_tooltip: boolean;
    icon_name: string;
    orientation: Orientation;
    pixbuf: GdkPixbuf.Pixbuf;
    screen: Gdk.Screen;
    size: number;
    stock: string;
    storage_type: ImageType;
    title: string;
    tooltip_markup: string;
    tooltip_text: string;
    visible: boolean;
    // Fields
    priv: StatusIconPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    connect(signal: 'button-press-event', callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    connect_after(signal: 'button-press-event', callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    emit(signal: 'button-press-event', event: Gdk.EventButton): void;
    connect(signal: 'button-release-event', callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    connect_after(signal: 'button-release-event', callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    emit(signal: 'button-release-event', event: Gdk.EventButton): void;
    connect(signal: 'popup-menu', callback: (_source: this, button: number, activate_time: number) => void): number;
    connect_after(signal: 'popup-menu', callback: (_source: this, button: number, activate_time: number) => void): number;
    emit(signal: 'popup-menu', button: number, activate_time: number): void;
    connect(signal: 'query-tooltip', callback: (_source: this, x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip) => boolean): number;
    connect_after(signal: 'query-tooltip', callback: (_source: this, x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip) => boolean): number;
    emit(signal: 'query-tooltip', x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip): void;
    connect(signal: 'scroll-event', callback: (_source: this, event: Gdk.EventScroll) => boolean): number;
    connect_after(signal: 'scroll-event', callback: (_source: this, event: Gdk.EventScroll) => boolean): number;
    emit(signal: 'scroll-event', event: Gdk.EventScroll): void;
    connect(signal: 'size-changed', callback: (_source: this, size: number) => boolean): number;
    connect_after(signal: 'size-changed', callback: (_source: this, size: number) => boolean): number;
    emit(signal: 'size-changed', size: number): void;
    // Constructors
    static ["new"](): StatusIcon;
    static new_from_file(filename: string): StatusIcon;
    static new_from_gicon(icon: Gio.Icon): StatusIcon;
    static new_from_icon_name(icon_name: string): StatusIcon;
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): StatusIcon;
    static new_from_stock(stock_id: string): StatusIcon;
    // Members
    get_geometry(): [boolean, Gdk.Screen | null, Gdk.Rectangle | null, Orientation | null];
    get_gicon(): Gio.Icon | null;
    get_has_tooltip(): boolean;
    get_icon_name(): string | null;
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_screen(): Gdk.Screen;
    get_size(): number;
    get_stock(): string | null;
    get_storage_type(): ImageType;
    get_title(): string;
    get_tooltip_markup(): string | null;
    get_tooltip_text(): string | null;
    get_visible(): boolean;
    get_x11_window_id(): number;
    is_embedded(): boolean;
    set_from_file(filename: string): void;
    set_from_gicon(icon: Gio.Icon): void;
    set_from_icon_name(icon_name: string): void;
    set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_from_stock(stock_id: string): void;
    set_has_tooltip(has_tooltip: boolean): void;
    set_name(name: string): void;
    set_screen(screen: Gdk.Screen): void;
    set_title(title: string): void;
    set_tooltip_markup(markup: string | null): void;
    set_tooltip_text(text: string): void;
    set_visible(visible: boolean): void;
    vfunc_activate(): void;
    vfunc_button_press_event(event: Gdk.EventButton): boolean;
    vfunc_button_release_event(event: Gdk.EventButton): boolean;
    vfunc_popup_menu(button: number, activate_time: number): void;
    vfunc_query_tooltip(x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip): boolean;
    vfunc_scroll_event(event: Gdk.EventScroll): boolean;
    vfunc_size_changed(size: number): boolean;
    static position_menu(menu: Menu, x: number, y: number, user_data: StatusIcon): [number, number, boolean];
}
export module Statusbar {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
    }
}
export class Statusbar extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<Statusbar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Statusbar.ConstructorProperties>, ...args: any[]): void;
    // Fields
    parent_widget: Box;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'text-popped', callback: (_source: this, context_id: number, text: string) => void): number;
    connect_after(signal: 'text-popped', callback: (_source: this, context_id: number, text: string) => void): number;
    emit(signal: 'text-popped', context_id: number, text: string): void;
    connect(signal: 'text-pushed', callback: (_source: this, context_id: number, text: string) => void): number;
    connect_after(signal: 'text-pushed', callback: (_source: this, context_id: number, text: string) => void): number;
    emit(signal: 'text-pushed', context_id: number, text: string): void;
    // Constructors
    static ["new"](): Statusbar;
    static ["new"](...args: never[]): never;
    // Members
    get_context_id(context_description: string): number;
    get_message_area(): Box;
    pop(context_id: number): void;
    push(context_id: number, text: string): number;
    remove(context_id: number, message_id: number): void;
    remove(...args: never[]): never;
    remove_all(context_id: number): void;
    vfunc_text_popped(context_id: number, text: string): void;
    vfunc_text_pushed(context_id: number, text: string): void;
}
export module StatusbarAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class StatusbarAccessible extends ContainerAccessible implements Atk.Component {
    constructor(properties?: Partial<StatusbarAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StatusbarAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: StatusbarAccessiblePrivate | any;
}
export module Style {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        context: StyleContext;
    }
}
export class Style extends GObject.Object {
    constructor(properties?: Partial<Style.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Style.ConstructorProperties>, ...args: any[]): void;
    // Properties
    context: StyleContext;
    // Fields
    fg: Gdk.Color[];
    bg: Gdk.Color[];
    light: Gdk.Color[];
    dark: Gdk.Color[];
    mid: Gdk.Color[];
    text: Gdk.Color[];
    base: Gdk.Color[];
    text_aa: Gdk.Color[];
    black: Gdk.Color;
    white: Gdk.Color;
    font_desc: Pango.FontDescription;
    xthickness: number;
    ythickness: number;
    background: cairo.Pattern[];
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'realize', callback: (_source: this) => void): number;
    connect_after(signal: 'realize', callback: (_source: this) => void): number;
    emit(signal: 'realize'): void;
    connect(signal: 'unrealize', callback: (_source: this) => void): number;
    connect_after(signal: 'unrealize', callback: (_source: this) => void): number;
    emit(signal: 'unrealize'): void;
    // Constructors
    static ["new"](): Style;
    // Members
    apply_default_background(cr: cairo.Context, window: Gdk.Window, state_type: StateType, x: number, y: number, width: number, height: number): void;
    copy(): Style;
    detach(): void;
    get_style_property(widget_type: GType, property_name: string): GObject.Value;
    has_context(): boolean;
    lookup_color(color_name: string): [boolean, Gdk.Color];
    lookup_icon_set(stock_id: string): IconSet;
    render_icon(source: IconSource, direction: TextDirection, state: StateType, size: number, widget: Widget | null, detail: string | null): GdkPixbuf.Pixbuf;
    set_background(window: Gdk.Window, state_type: StateType): void;
    vfunc_copy(src: Style): void;
    vfunc_draw_arrow(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, arrow_type: ArrowType, fill: boolean, x: number, y: number, width: number, height: number): void;
    vfunc_draw_box(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_box_gap(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;
    vfunc_draw_check(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_diamond(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_expander(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x: number, y: number, expander_style: ExpanderStyle): void;
    vfunc_draw_extension(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType): void;
    vfunc_draw_flat_box(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_focus(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_handle(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation): void;
    vfunc_draw_hline(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x1: number, x2: number, y: number): void;
    vfunc_draw_layout(cr: cairo.Context, state_type: StateType, use_text: boolean, widget: Widget, detail: string, x: number, y: number, layout: Pango.Layout): void;
    vfunc_draw_option(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_resize_grip(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, edge: Gdk.WindowEdge, x: number, y: number, width: number, height: number): void;
    vfunc_draw_shadow(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_shadow_gap(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;
    vfunc_draw_slider(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation): void;
    vfunc_draw_spinner(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, step: number, x: number, y: number, width: number, height: number): void;
    vfunc_draw_tab(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_vline(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, y1_: number, y2_: number, x: number): void;
    vfunc_init_from_rc(rc_style: RcStyle): void;
    vfunc_realize(): void;
    vfunc_render_icon(source: IconSource, direction: TextDirection, state: StateType, size: number, widget: Widget | null, detail: string | null): GdkPixbuf.Pixbuf;
    vfunc_set_background(window: Gdk.Window, state_type: StateType): void;
    vfunc_unrealize(): void;
}
export module StyleContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        direction: TextDirection;
        paint_clock: Gdk.FrameClock;
        screen: Gdk.Screen;
    }
}
export class StyleContext extends GObject.Object {
    constructor(properties?: Partial<StyleContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleContext.ConstructorProperties>, ...args: any[]): void;
    // Properties
    direction: TextDirection;
    paint_clock: Gdk.FrameClock;
    screen: Gdk.Screen;
    // Fields
    parent_object: GObject.Object;
    priv: StyleContextPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;
    // Constructors
    static ["new"](): StyleContext;
    // Members
    add_class(class_name: string): void;
    add_provider(provider: StyleProvider, priority: number): void;
    add_region(region_name: string, flags: RegionFlags): void;
    cancel_animations(region_id: any | null): void;
    get_background_color(state: StateFlags): Gdk.RGBA;
    get_border(state: StateFlags): Border;
    get_border_color(state: StateFlags): Gdk.RGBA;
    get_color(state: StateFlags): Gdk.RGBA;
    get_direction(): TextDirection;
    get_font(state: StateFlags): Pango.FontDescription;
    get_frame_clock(): Gdk.FrameClock | null;
    get_junction_sides(): JunctionSides;
    get_margin(state: StateFlags): Border;
    get_padding(state: StateFlags): Border;
    get_parent(): StyleContext | null;
    get_path(): WidgetPath;
    get_property(property: string, state: StateFlags): GObject.Value;
    get_property(...args: never[]): never;
    get_scale(): number;
    get_screen(): Gdk.Screen;
    get_section(property: string): CssSection | null;
    get_state(): StateFlags;
    get_style_property(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    has_class(class_name: string): boolean;
    has_region(region_name: string): [boolean, RegionFlags | null];
    invalidate(): void;
    list_classes(): GLib.List;
    list_regions(): GLib.List;
    lookup_color(color_name: string): [boolean, Gdk.RGBA];
    lookup_icon_set(stock_id: string): IconSet | null;
    notify_state_change(window: Gdk.Window, region_id: any | null, state: StateType, state_value: boolean): void;
    pop_animatable_region(): void;
    push_animatable_region(region_id: any | null): void;
    remove_class(class_name: string): void;
    remove_provider(provider: StyleProvider): void;
    remove_region(region_name: string): void;
    restore(): void;
    save(): void;
    scroll_animations(window: Gdk.Window, dx: number, dy: number): void;
    set_background(window: Gdk.Window): void;
    set_direction(direction: TextDirection): void;
    set_frame_clock(frame_clock: Gdk.FrameClock): void;
    set_junction_sides(sides: JunctionSides): void;
    set_parent(parent: StyleContext | null): void;
    set_path(path: WidgetPath): void;
    set_scale(scale: number): void;
    set_screen(screen: Gdk.Screen): void;
    set_state(flags: StateFlags): void;
    state_is_running(state: StateType): [boolean, number];
    to_string(flags: StyleContextPrintFlags): string;
    vfunc_changed(): void;
    static add_provider_for_screen(screen: Gdk.Screen, provider: StyleProvider, priority: number): void;
    static remove_provider_for_screen(screen: Gdk.Screen, provider: StyleProvider): void;
    static reset_widgets(screen: Gdk.Screen): void;
}
export module StyleProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class StyleProperties extends GObject.Object implements StyleProvider {
    constructor(properties?: Partial<StyleProperties.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleProperties.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): StyleProperties;
    // Members
    clear(): void;
    get_property(property: string, state: StateFlags): [boolean, GObject.Value];
    get_property(...args: never[]): never;
    lookup_color(name: string): SymbolicColor;
    map_color(name: string, color: SymbolicColor): void;
    merge(props_to_merge: StyleProperties, replace: boolean): void;
    set_property(property: string, state: StateFlags, value: (GObject.Value | string | boolean | number)): void;
    set_property(...args: never[]): never;
    unset_property(property: string, state: StateFlags): void;
    // Implemented Members
    get_icon_factory(path: WidgetPath): IconFactory | null;
    get_style(path: WidgetPath): StyleProperties | null;
    get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, GObject.Value];
    vfunc_get_icon_factory(path: WidgetPath): IconFactory | null;
    vfunc_get_style(path: WidgetPath): this;
    vfunc_get_style(...args: never[]): never;
    vfunc_get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, GObject.Value];
}
export module Switch {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        state: boolean;
    }
}
export class Switch extends Widget implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<Switch.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Switch.ConstructorProperties>, ...args: any[]): void;
    // Properties
    active: boolean;
    state: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    connect(signal: 'state-set', callback: (_source: this, state: boolean) => boolean): number;
    connect_after(signal: 'state-set', callback: (_source: this, state: boolean) => boolean): number;
    emit(signal: 'state-set', state: boolean): void;
    // Implemented Properties
    action_name: string;
    action_target: GLib.Variant;
    related_action: Action;
    use_action_appearance: boolean;
    // Constructors
    static ["new"](): Switch;
    // Members
    get_active(): boolean;
    get_state(): boolean;
    get_state(...args: never[]): never;
    set_active(is_active: boolean): void;
    set_state(state: boolean): void;
    set_state(...args: never[]): never;
    vfunc_activate(): void;
    vfunc_state_set(state: boolean): boolean;
    // Implemented Members
    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name: string | null): void;
    set_action_target_value(target_value: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name: string | null): void;
    vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action: Action | null): void;
    vfunc_sync_action_properties(action: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module SwitchAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class SwitchAccessible extends WidgetAccessible implements Atk.Action, Atk.Component {
    constructor(properties?: Partial<SwitchAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SwitchAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: SwitchAccessiblePrivate | any;
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
}
export module Table {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        column_spacing: number;
        homogeneous: boolean;
        n_columns: number;
        n_rows: number;
        row_spacing: number;
    }
}
export class Table extends Container implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Table.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Table.ConstructorProperties>, ...args: any[]): void;
    // Properties
    column_spacing: number;
    homogeneous: boolean;
    n_columns: number;
    n_rows: number;
    row_spacing: number;
    // Fields
    container: Container;
    // Constructors
    static ["new"](rows: number, columns: number, homogeneous: boolean): Table;
    // Members
    attach(child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number, xoptions: AttachOptions, yoptions: AttachOptions, xpadding: number, ypadding: number): void;
    attach_defaults(widget: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number): void;
    get_col_spacing(column: number): number;
    get_default_col_spacing(): number;
    get_default_row_spacing(): number;
    get_homogeneous(): boolean;
    get_row_spacing(row: number): number;
    get_size(): [number | null, number | null];
    resize(rows: number, columns: number): void;
    set_col_spacing(column: number, spacing: number): void;
    set_col_spacings(spacing: number): void;
    set_homogeneous(homogeneous: boolean): void;
    set_row_spacing(row: number, spacing: number): void;
    set_row_spacings(spacing: number): void;
}
export module TearoffMenuItem {
    export interface ConstructorProperties extends MenuItem.ConstructorProperties {
        [key: string]: any;
    }
}
export class TearoffMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<TearoffMenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TearoffMenuItem.ConstructorProperties>, ...args: any[]): void;
    // Fields
    menu_item: MenuItem;
    // Constructors
    static ["new"](): TearoffMenuItem;
    static ["new"](...args: never[]): never;
}
export module TextBuffer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        copy_target_list: TargetList;
        cursor_position: number;
        has_selection: boolean;
        paste_target_list: TargetList;
        tag_table: TextTagTable;
        text: string;
    }
}
export class TextBuffer extends GObject.Object {
    constructor(properties?: Partial<TextBuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextBuffer.ConstructorProperties>, ...args: any[]): void;
    // Properties
    copy_target_list: TargetList;
    cursor_position: number;
    has_selection: boolean;
    paste_target_list: TargetList;
    tag_table: TextTagTable;
    text: string;
    // Fields
    priv: TextBufferPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'apply-tag', callback: (_source: this, tag: TextTag, start: TextIter, end: TextIter) => void): number;
    connect_after(signal: 'apply-tag', callback: (_source: this, tag: TextTag, start: TextIter, end: TextIter) => void): number;
    emit(signal: 'apply-tag', tag: TextTag, start: TextIter, end: TextIter): void;
    connect(signal: 'begin-user-action', callback: (_source: this) => void): number;
    connect_after(signal: 'begin-user-action', callback: (_source: this) => void): number;
    emit(signal: 'begin-user-action'): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;
    connect(signal: 'delete-range', callback: (_source: this, start: TextIter, end: TextIter) => void): number;
    connect_after(signal: 'delete-range', callback: (_source: this, start: TextIter, end: TextIter) => void): number;
    emit(signal: 'delete-range', start: TextIter, end: TextIter): void;
    connect(signal: 'end-user-action', callback: (_source: this) => void): number;
    connect_after(signal: 'end-user-action', callback: (_source: this) => void): number;
    emit(signal: 'end-user-action'): void;
    connect(signal: 'insert-child-anchor', callback: (_source: this, location: TextIter, anchor: TextChildAnchor) => void): number;
    connect_after(signal: 'insert-child-anchor', callback: (_source: this, location: TextIter, anchor: TextChildAnchor) => void): number;
    emit(signal: 'insert-child-anchor', location: TextIter, anchor: TextChildAnchor): void;
    connect(signal: 'insert-pixbuf', callback: (_source: this, location: TextIter, pixbuf: GdkPixbuf.Pixbuf) => void): number;
    connect_after(signal: 'insert-pixbuf', callback: (_source: this, location: TextIter, pixbuf: GdkPixbuf.Pixbuf) => void): number;
    emit(signal: 'insert-pixbuf', location: TextIter, pixbuf: GdkPixbuf.Pixbuf): void;
    connect(signal: 'insert-text', callback: (_source: this, location: TextIter, text: string, len: number) => void): number;
    connect_after(signal: 'insert-text', callback: (_source: this, location: TextIter, text: string, len: number) => void): number;
    emit(signal: 'insert-text', location: TextIter, text: string, len: number): void;
    connect(signal: 'mark-deleted', callback: (_source: this, mark: TextMark) => void): number;
    connect_after(signal: 'mark-deleted', callback: (_source: this, mark: TextMark) => void): number;
    emit(signal: 'mark-deleted', mark: TextMark): void;
    connect(signal: 'mark-set', callback: (_source: this, location: TextIter, mark: TextMark) => void): number;
    connect_after(signal: 'mark-set', callback: (_source: this, location: TextIter, mark: TextMark) => void): number;
    emit(signal: 'mark-set', location: TextIter, mark: TextMark): void;
    connect(signal: 'modified-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'modified-changed', callback: (_source: this) => void): number;
    emit(signal: 'modified-changed'): void;
    connect(signal: 'paste-done', callback: (_source: this, clipboard: Clipboard) => void): number;
    connect_after(signal: 'paste-done', callback: (_source: this, clipboard: Clipboard) => void): number;
    emit(signal: 'paste-done', clipboard: Clipboard): void;
    connect(signal: 'remove-tag', callback: (_source: this, tag: TextTag, start: TextIter, end: TextIter) => void): number;
    connect_after(signal: 'remove-tag', callback: (_source: this, tag: TextTag, start: TextIter, end: TextIter) => void): number;
    emit(signal: 'remove-tag', tag: TextTag, start: TextIter, end: TextIter): void;
    // Constructors
    static ["new"](table: TextTagTable | null): TextBuffer;
    // Members
    add_mark(mark: TextMark, where: TextIter): void;
    add_selection_clipboard(clipboard: Clipboard): void;
    apply_tag(tag: TextTag, start: TextIter, end: TextIter): void;
    apply_tag_by_name(name: string, start: TextIter, end: TextIter): void;
    backspace(iter: TextIter, interactive: boolean, default_editable: boolean): boolean;
    begin_user_action(): void;
    copy_clipboard(clipboard: Clipboard): void;
    create_child_anchor(iter: TextIter): TextChildAnchor;
    create_mark(mark_name: string | null, where: TextIter, left_gravity: boolean): TextMark;
    cut_clipboard(clipboard: Clipboard, default_editable: boolean): void;
    ["delete"](start: TextIter, end: TextIter): void;
    delete_interactive(start_iter: TextIter, end_iter: TextIter, default_editable: boolean): boolean;
    delete_mark(mark: TextMark): void;
    delete_mark_by_name(name: string): void;
    delete_selection(interactive: boolean, default_editable: boolean): boolean;
    deserialize(content_buffer: TextBuffer, format: Gdk.Atom, iter: TextIter, data: (Uint8Array | string)): boolean;
    deserialize_get_can_create_tags(format: Gdk.Atom): boolean;
    deserialize_set_can_create_tags(format: Gdk.Atom, can_create_tags: boolean): void;
    end_user_action(): void;
    get_bounds(): [TextIter, TextIter];
    get_char_count(): number;
    get_copy_target_list(): TargetList;
    get_deserialize_formats(): Gdk.Atom[];
    get_end_iter(): TextIter;
    get_has_selection(): boolean;
    get_insert(): TextMark;
    get_iter_at_child_anchor(anchor: TextChildAnchor): TextIter;
    get_iter_at_line(line_number: number): TextIter;
    get_iter_at_line_index(line_number: number, byte_index: number): TextIter;
    get_iter_at_line_offset(line_number: number, char_offset: number): TextIter;
    get_iter_at_mark(mark: TextMark): TextIter;
    get_iter_at_offset(char_offset: number): TextIter;
    get_line_count(): number;
    get_mark(name: string): TextMark | null;
    get_modified(): boolean;
    get_paste_target_list(): TargetList;
    get_selection_bound(): TextMark;
    get_selection_bounds(): [boolean, TextIter, TextIter];
    get_serialize_formats(): Gdk.Atom[];
    get_slice(start: TextIter, end: TextIter, include_hidden_chars: boolean): string;
    get_start_iter(): TextIter;
    get_tag_table(): TextTagTable;
    get_text(start: TextIter, end: TextIter, include_hidden_chars: boolean): string;
    insert(iter: TextIter, text: string, len: number): void;
    insert_at_cursor(text: string, len: number): void;
    insert_child_anchor(iter: TextIter, anchor: TextChildAnchor): void;
    insert_interactive(iter: TextIter, text: string, len: number, default_editable: boolean): boolean;
    insert_interactive_at_cursor(text: string, len: number, default_editable: boolean): boolean;
    insert_markup(iter: TextIter, markup: string, len: number): void;
    insert_pixbuf(iter: TextIter, pixbuf: GdkPixbuf.Pixbuf): void;
    insert_range(iter: TextIter, start: TextIter, end: TextIter): void;
    insert_range_interactive(iter: TextIter, start: TextIter, end: TextIter, default_editable: boolean): boolean;
    move_mark(mark: TextMark, where: TextIter): void;
    move_mark_by_name(name: string, where: TextIter): void;
    paste_clipboard(clipboard: Clipboard, override_location: TextIter | null, default_editable: boolean): void;
    place_cursor(where: TextIter): void;
    register_deserialize_format(mime_type: string, _function: TextBufferDeserializeFunc, user_data_destroy: GLib.DestroyNotify): Gdk.Atom;
    register_deserialize_tagset(tagset_name: string | null): Gdk.Atom;
    register_serialize_format(mime_type: string, _function: TextBufferSerializeFunc, user_data_destroy: GLib.DestroyNotify): Gdk.Atom;
    register_serialize_tagset(tagset_name: string | null): Gdk.Atom;
    remove_all_tags(start: TextIter, end: TextIter): void;
    remove_selection_clipboard(clipboard: Clipboard): void;
    remove_tag(tag: TextTag, start: TextIter, end: TextIter): void;
    remove_tag_by_name(name: string, start: TextIter, end: TextIter): void;
    select_range(ins: TextIter, bound: TextIter): void;
    serialize(content_buffer: TextBuffer, format: Gdk.Atom, start: TextIter, end: TextIter): Uint8Array;
    set_modified(setting: boolean): void;
    set_text(text: string, len: number): void;
    unregister_deserialize_format(format: Gdk.Atom): void;
    unregister_serialize_format(format: Gdk.Atom): void;
    vfunc_apply_tag(tag: TextTag, start: TextIter, end: TextIter): void;
    vfunc_begin_user_action(): void;
    vfunc_changed(): void;
    vfunc_delete_range(start: TextIter, end: TextIter): void;
    vfunc_end_user_action(): void;
    vfunc_insert_child_anchor(iter: TextIter, anchor: TextChildAnchor): void;
    vfunc_insert_pixbuf(iter: TextIter, pixbuf: GdkPixbuf.Pixbuf): void;
    vfunc_insert_text(pos: TextIter, new_text: string, new_text_length: number): void;
    vfunc_mark_deleted(mark: TextMark): void;
    vfunc_mark_set(location: TextIter, mark: TextMark): void;
    vfunc_modified_changed(): void;
    vfunc_paste_done(clipboard: Clipboard): void;
    vfunc_remove_tag(tag: TextTag, start: TextIter, end: TextIter): void;
}
export module TextCellAccessible {
    export interface ConstructorProperties extends RendererCellAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextCellAccessible extends RendererCellAccessible implements Atk.Action, Atk.Component, Atk.TableCell, Atk.Text {
    constructor(properties?: Partial<TextCellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextCellAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: TextCellAccessiblePrivate | any;
    // Implemented Members
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
export module TextChildAnchor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextChildAnchor extends GObject.Object {
    constructor(properties?: Partial<TextChildAnchor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextChildAnchor.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): TextChildAnchor;
    // Members
    get_deleted(): boolean;
    get_widgets(): GLib.List;
}
export module TextMark {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        left_gravity: boolean;
        name: string;
    }
}
export class TextMark extends GObject.Object {
    constructor(properties?: Partial<TextMark.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextMark.ConstructorProperties>, ...args: any[]): void;
    // Properties
    left_gravity: boolean;
    name: string;
    // Constructors
    static ["new"](name: string | null, left_gravity: boolean): TextMark;
    // Members
    get_buffer(): TextBuffer;
    get_deleted(): boolean;
    get_left_gravity(): boolean;
    get_name(): string | null;
    get_visible(): boolean;
    set_visible(setting: boolean): void;
}
export module TextTag {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accumulative_margin: boolean;
        background: string;
        background_full_height: boolean;
        background_full_height_set: boolean;
        background_gdk: Gdk.Color;
        background_rgba: Gdk.RGBA;
        background_set: boolean;
        direction: TextDirection;
        editable: boolean;
        editable_set: boolean;
        fallback: boolean;
        fallback_set: boolean;
        family: string;
        family_set: boolean;
        font: string;
        font_desc: Pango.FontDescription;
        font_features: string;
        font_features_set: boolean;
        foreground: string;
        foreground_gdk: Gdk.Color;
        foreground_rgba: Gdk.RGBA;
        foreground_set: boolean;
        indent: number;
        indent_set: boolean;
        invisible: boolean;
        invisible_set: boolean;
        justification: Justification;
        justification_set: boolean;
        language: string;
        language_set: boolean;
        left_margin: number;
        left_margin_set: boolean;
        letter_spacing: number;
        letter_spacing_set: boolean;
        name: string;
        paragraph_background: string;
        paragraph_background_gdk: Gdk.Color;
        paragraph_background_rgba: Gdk.RGBA;
        paragraph_background_set: boolean;
        pixels_above_lines: number;
        pixels_above_lines_set: boolean;
        pixels_below_lines: number;
        pixels_below_lines_set: boolean;
        pixels_inside_wrap: number;
        pixels_inside_wrap_set: boolean;
        right_margin: number;
        right_margin_set: boolean;
        rise: number;
        rise_set: boolean;
        scale: number;
        scale_set: boolean;
        size: number;
        size_points: number;
        size_set: boolean;
        stretch: Pango.Stretch;
        stretch_set: boolean;
        strikethrough: boolean;
        strikethrough_rgba: Gdk.RGBA;
        strikethrough_rgba_set: boolean;
        strikethrough_set: boolean;
        style: Pango.Style;
        style_set: boolean;
        tabs: Pango.TabArray;
        tabs_set: boolean;
        underline: Pango.Underline;
        underline_rgba: Gdk.RGBA;
        underline_rgba_set: boolean;
        underline_set: boolean;
        variant: Pango.Variant;
        variant_set: boolean;
        weight: number;
        weight_set: boolean;
        wrap_mode: WrapMode;
        wrap_mode_set: boolean;
    }
}
export class TextTag extends GObject.Object {
    constructor(properties?: Partial<TextTag.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextTag.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accumulative_margin: boolean;
    background: string;
    background_full_height: boolean;
    background_full_height_set: boolean;
    background_gdk: Gdk.Color;
    background_rgba: Gdk.RGBA;
    background_set: boolean;
    direction: TextDirection;
    editable: boolean;
    editable_set: boolean;
    fallback: boolean;
    fallback_set: boolean;
    family: string;
    family_set: boolean;
    font: string;
    font_desc: Pango.FontDescription;
    font_features: string;
    font_features_set: boolean;
    foreground: string;
    foreground_gdk: Gdk.Color;
    foreground_rgba: Gdk.RGBA;
    foreground_set: boolean;
    indent: number;
    indent_set: boolean;
    invisible: boolean;
    invisible_set: boolean;
    justification: Justification;
    justification_set: boolean;
    language: string;
    language_set: boolean;
    left_margin: number;
    left_margin_set: boolean;
    letter_spacing: number;
    letter_spacing_set: boolean;
    name: string;
    paragraph_background: string;
    paragraph_background_gdk: Gdk.Color;
    paragraph_background_rgba: Gdk.RGBA;
    paragraph_background_set: boolean;
    pixels_above_lines: number;
    pixels_above_lines_set: boolean;
    pixels_below_lines: number;
    pixels_below_lines_set: boolean;
    pixels_inside_wrap: number;
    pixels_inside_wrap_set: boolean;
    right_margin: number;
    right_margin_set: boolean;
    rise: number;
    rise_set: boolean;
    scale: number;
    scale_set: boolean;
    size: number;
    size_points: number;
    size_set: boolean;
    stretch: Pango.Stretch;
    stretch_set: boolean;
    strikethrough: boolean;
    strikethrough_rgba: Gdk.RGBA;
    strikethrough_rgba_set: boolean;
    strikethrough_set: boolean;
    style: Pango.Style;
    style_set: boolean;
    tabs: Pango.TabArray;
    tabs_set: boolean;
    underline: Pango.Underline;
    underline_rgba: Gdk.RGBA;
    underline_rgba_set: boolean;
    underline_set: boolean;
    variant: Pango.Variant;
    variant_set: boolean;
    weight: number;
    weight_set: boolean;
    wrap_mode: WrapMode;
    wrap_mode_set: boolean;
    // Fields
    priv: TextTagPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'event', callback: (_source: this, object: GObject.Object, event: Gdk.Event, iter: TextIter) => boolean): number;
    connect_after(signal: 'event', callback: (_source: this, object: GObject.Object, event: Gdk.Event, iter: TextIter) => boolean): number;
    emit(signal: 'event', object: GObject.Object, event: Gdk.Event, iter: TextIter): void;
    // Constructors
    static ["new"](name: string | null): TextTag;
    // Members
    changed(size_changed: boolean): void;
    event(event_object: GObject.Object, event: Gdk.Event, iter: TextIter): boolean;
    get_priority(): number;
    set_priority(priority: number): void;
    vfunc_event(event_object: GObject.Object, event: Gdk.Event, iter: TextIter): boolean;
}
export module TextTagTable {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextTagTable extends GObject.Object implements Buildable {
    constructor(properties?: Partial<TextTagTable.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextTagTable.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: TextTagTablePrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'tag-added', callback: (_source: this, tag: TextTag) => void): number;
    connect_after(signal: 'tag-added', callback: (_source: this, tag: TextTag) => void): number;
    emit(signal: 'tag-added', tag: TextTag): void;
    connect(signal: 'tag-changed', callback: (_source: this, tag: TextTag, size_changed: boolean) => void): number;
    connect_after(signal: 'tag-changed', callback: (_source: this, tag: TextTag, size_changed: boolean) => void): number;
    emit(signal: 'tag-changed', tag: TextTag, size_changed: boolean): void;
    connect(signal: 'tag-removed', callback: (_source: this, tag: TextTag) => void): number;
    connect_after(signal: 'tag-removed', callback: (_source: this, tag: TextTag) => void): number;
    emit(signal: 'tag-removed', tag: TextTag): void;
    // Constructors
    static ["new"](): TextTagTable;
    // Members
    add(tag: TextTag): boolean;
    foreach(func: TextTagTableForeach): void;
    get_size(): number;
    lookup(name: string): TextTag | null;
    remove(tag: TextTag): void;
    vfunc_tag_added(tag: TextTag): void;
    vfunc_tag_changed(tag: TextTag, size_changed: boolean): void;
    vfunc_tag_removed(tag: TextTag): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}
export module TextView {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        accepts_tab: boolean;
        bottom_margin: number;
        buffer: TextBuffer;
        cursor_visible: boolean;
        editable: boolean;
        im_module: string;
        indent: number;
        input_hints: InputHints;
        input_purpose: InputPurpose;
        justification: Justification;
        left_margin: number;
        monospace: boolean;
        overwrite: boolean;
        pixels_above_lines: number;
        pixels_below_lines: number;
        pixels_inside_wrap: number;
        populate_all: boolean;
        right_margin: number;
        tabs: Pango.TabArray;
        top_margin: number;
        wrap_mode: WrapMode;
    }
}
export class TextView extends Container implements Atk.ImplementorIface, Buildable, Scrollable {
    constructor(properties?: Partial<TextView.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextView.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accepts_tab: boolean;
    bottom_margin: number;
    buffer: TextBuffer;
    cursor_visible: boolean;
    editable: boolean;
    im_module: string;
    indent: number;
    input_hints: InputHints;
    input_purpose: InputPurpose;
    justification: Justification;
    left_margin: number;
    monospace: boolean;
    overwrite: boolean;
    pixels_above_lines: number;
    pixels_below_lines: number;
    pixels_inside_wrap: number;
    populate_all: boolean;
    right_margin: number;
    tabs: Pango.TabArray;
    top_margin: number;
    wrap_mode: WrapMode;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'backspace', callback: (_source: this) => void): number;
    connect_after(signal: 'backspace', callback: (_source: this) => void): number;
    emit(signal: 'backspace'): void;
    connect(signal: 'copy-clipboard', callback: (_source: this) => void): number;
    connect_after(signal: 'copy-clipboard', callback: (_source: this) => void): number;
    emit(signal: 'copy-clipboard'): void;
    connect(signal: 'cut-clipboard', callback: (_source: this) => void): number;
    connect_after(signal: 'cut-clipboard', callback: (_source: this) => void): number;
    emit(signal: 'cut-clipboard'): void;
    connect(signal: 'delete-from-cursor', callback: (_source: this, type: DeleteType, count: number) => void): number;
    connect_after(signal: 'delete-from-cursor', callback: (_source: this, type: DeleteType, count: number) => void): number;
    emit(signal: 'delete-from-cursor', type: DeleteType, count: number): void;
    connect(signal: 'extend-selection', callback: (_source: this, granularity: TextExtendSelection, location: TextIter, start: TextIter, end: TextIter) => boolean): number;
    connect_after(signal: 'extend-selection', callback: (_source: this, granularity: TextExtendSelection, location: TextIter, start: TextIter, end: TextIter) => boolean): number;
    emit(signal: 'extend-selection', granularity: TextExtendSelection, location: TextIter, start: TextIter, end: TextIter): void;
    connect(signal: 'insert-at-cursor', callback: (_source: this, string: string) => void): number;
    connect_after(signal: 'insert-at-cursor', callback: (_source: this, string: string) => void): number;
    emit(signal: 'insert-at-cursor', string: string): void;
    connect(signal: 'insert-emoji', callback: (_source: this) => void): number;
    connect_after(signal: 'insert-emoji', callback: (_source: this) => void): number;
    emit(signal: 'insert-emoji'): void;
    connect(signal: 'move-cursor', callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void): number;
    connect_after(signal: 'move-cursor', callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void): number;
    emit(signal: 'move-cursor', step: MovementStep, count: number, extend_selection: boolean): void;
    connect(signal: 'move-viewport', callback: (_source: this, step: ScrollStep, count: number) => void): number;
    connect_after(signal: 'move-viewport', callback: (_source: this, step: ScrollStep, count: number) => void): number;
    emit(signal: 'move-viewport', step: ScrollStep, count: number): void;
    connect(signal: 'paste-clipboard', callback: (_source: this) => void): number;
    connect_after(signal: 'paste-clipboard', callback: (_source: this) => void): number;
    emit(signal: 'paste-clipboard'): void;
    connect(signal: 'populate-popup', callback: (_source: this, popup: Widget) => void): number;
    connect_after(signal: 'populate-popup', callback: (_source: this, popup: Widget) => void): number;
    emit(signal: 'populate-popup', popup: Widget): void;
    connect(signal: 'preedit-changed', callback: (_source: this, preedit: string) => void): number;
    connect_after(signal: 'preedit-changed', callback: (_source: this, preedit: string) => void): number;
    emit(signal: 'preedit-changed', preedit: string): void;
    connect(signal: 'select-all', callback: (_source: this, select: boolean) => void): number;
    connect_after(signal: 'select-all', callback: (_source: this, select: boolean) => void): number;
    emit(signal: 'select-all', select: boolean): void;
    connect(signal: 'set-anchor', callback: (_source: this) => void): number;
    connect_after(signal: 'set-anchor', callback: (_source: this) => void): number;
    emit(signal: 'set-anchor'): void;
    connect(signal: 'toggle-cursor-visible', callback: (_source: this) => void): number;
    connect_after(signal: 'toggle-cursor-visible', callback: (_source: this) => void): number;
    emit(signal: 'toggle-cursor-visible'): void;
    connect(signal: 'toggle-overwrite', callback: (_source: this) => void): number;
    connect_after(signal: 'toggle-overwrite', callback: (_source: this) => void): number;
    emit(signal: 'toggle-overwrite'): void;
    // Implemented Properties
    hadjustment: Adjustment;
    hscroll_policy: ScrollablePolicy;
    vadjustment: Adjustment;
    vscroll_policy: ScrollablePolicy;
    // Constructors
    static ["new"](): TextView;
    static new_with_buffer(buffer: TextBuffer): TextView;
    // Members
    add_child_at_anchor(child: Widget, anchor: TextChildAnchor): void;
    add_child_in_window(child: Widget, which_window: TextWindowType, xpos: number, ypos: number): void;
    backward_display_line(iter: TextIter): boolean;
    backward_display_line_start(iter: TextIter): boolean;
    buffer_to_window_coords(win: TextWindowType, buffer_x: number, buffer_y: number): [number | null, number | null];
    forward_display_line(iter: TextIter): boolean;
    forward_display_line_end(iter: TextIter): boolean;
    get_accepts_tab(): boolean;
    get_border_window_size(type: TextWindowType): number;
    get_bottom_margin(): number;
    get_buffer(): TextBuffer;
    get_cursor_locations(iter: TextIter | null): [Gdk.Rectangle | null, Gdk.Rectangle | null];
    get_cursor_visible(): boolean;
    get_default_attributes(): TextAttributes;
    get_editable(): boolean;
    get_hadjustment(): Adjustment;
    get_indent(): number;
    get_input_hints(): InputHints;
    get_input_purpose(): InputPurpose;
    get_iter_at_location(x: number, y: number): [boolean, TextIter];
    get_iter_at_position(x: number, y: number): [boolean, TextIter, number | null];
    get_iter_location(iter: TextIter): Gdk.Rectangle;
    get_justification(): Justification;
    get_left_margin(): number;
    get_line_at_y(y: number): [TextIter, number];
    get_line_yrange(iter: TextIter): [number, number];
    get_monospace(): boolean;
    get_overwrite(): boolean;
    get_pixels_above_lines(): number;
    get_pixels_below_lines(): number;
    get_pixels_inside_wrap(): number;
    get_right_margin(): number;
    get_tabs(): Pango.TabArray | null;
    get_top_margin(): number;
    get_vadjustment(): Adjustment;
    get_visible_rect(): Gdk.Rectangle;
    get_window(win: TextWindowType): Gdk.Window | null;
    get_window(...args: never[]): never;
    get_window_type(window: Gdk.Window): TextWindowType;
    get_wrap_mode(): WrapMode;
    im_context_filter_keypress(event: Gdk.EventKey): boolean;
    move_child(child: Widget, xpos: number, ypos: number): void;
    move_mark_onscreen(mark: TextMark): boolean;
    move_visually(iter: TextIter, count: number): boolean;
    place_cursor_onscreen(): boolean;
    reset_cursor_blink(): void;
    reset_im_context(): void;
    scroll_mark_onscreen(mark: TextMark): void;
    scroll_to_iter(iter: TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean;
    scroll_to_mark(mark: TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void;
    set_accepts_tab(accepts_tab: boolean): void;
    set_border_window_size(type: TextWindowType, size: number): void;
    set_bottom_margin(bottom_margin: number): void;
    set_buffer(buffer: TextBuffer | null): void;
    set_cursor_visible(setting: boolean): void;
    set_editable(setting: boolean): void;
    set_indent(indent: number): void;
    set_input_hints(hints: InputHints): void;
    set_input_purpose(purpose: InputPurpose): void;
    set_justification(justification: Justification): void;
    set_left_margin(left_margin: number): void;
    set_monospace(monospace: boolean): void;
    set_overwrite(overwrite: boolean): void;
    set_pixels_above_lines(pixels_above_lines: number): void;
    set_pixels_below_lines(pixels_below_lines: number): void;
    set_pixels_inside_wrap(pixels_inside_wrap: number): void;
    set_right_margin(right_margin: number): void;
    set_tabs(tabs: Pango.TabArray): void;
    set_top_margin(top_margin: number): void;
    set_wrap_mode(wrap_mode: WrapMode): void;
    starts_display_line(iter: TextIter): boolean;
    window_to_buffer_coords(win: TextWindowType, window_x: number, window_y: number): [number | null, number | null];
    vfunc_backspace(): void;
    vfunc_copy_clipboard(): void;
    vfunc_cut_clipboard(): void;
    vfunc_delete_from_cursor(type: DeleteType, count: number): void;
    vfunc_draw_layer(layer: TextViewLayer, cr: cairo.Context): void;
    vfunc_extend_selection(granularity: TextExtendSelection, location: TextIter, start: TextIter, end: TextIter): boolean;
    vfunc_insert_at_cursor(str: string): void;
    vfunc_insert_emoji(): void;
    vfunc_move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
    vfunc_paste_clipboard(): void;
    vfunc_populate_popup(popup: Widget): void;
    vfunc_set_anchor(): void;
    vfunc_toggle_overwrite(): void;
    // Implemented Members
    get_border(): [boolean, Border];
    get_hscroll_policy(): ScrollablePolicy;
    get_vscroll_policy(): ScrollablePolicy;
    set_hadjustment(hadjustment: Adjustment | null): void;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vadjustment(vadjustment: Adjustment | null): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module TextViewAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextViewAccessible extends ContainerAccessible implements Atk.Component, Atk.EditableText, Atk.StreamableContent, Atk.Text {
    constructor(properties?: Partial<TextViewAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextViewAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: TextViewAccessiblePrivate | any;
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
    get_mime_type(i: number): string;
    get_n_mime_types(): number;
    get_stream(mime_type: string): GLib.IOChannel;
    get_uri(mime_type: string): string | null;
    vfunc_get_mime_type(i: number): string;
    vfunc_get_n_mime_types(): number;
    vfunc_get_stream(mime_type: string): GLib.IOChannel;
    vfunc_get_uri(mime_type: string): string | null;
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
export module ThemingEngine {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        name: string;
    }
}
export class ThemingEngine extends GObject.Object {
    constructor(properties?: Partial<ThemingEngine.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ThemingEngine.ConstructorProperties>, ...args: any[]): void;
    // Properties
    name: string;
    // Fields
    parent_object: GObject.Object;
    priv: ThemingEnginePrivate;
    // Members
    get_background_color(state: StateFlags): Gdk.RGBA;
    get_border(state: StateFlags): Border;
    get_border_color(state: StateFlags): Gdk.RGBA;
    get_color(state: StateFlags): Gdk.RGBA;
    get_direction(): TextDirection;
    get_font(state: StateFlags): Pango.FontDescription;
    get_junction_sides(): JunctionSides;
    get_margin(state: StateFlags): Border;
    get_padding(state: StateFlags): Border;
    get_path(): WidgetPath;
    get_property(property: string, state: StateFlags): GObject.Value;
    get_property(...args: never[]): never;
    get_screen(): Gdk.Screen | null;
    get_state(): StateFlags;
    get_style_property(property_name: string): GObject.Value;
    has_class(style_class: string): boolean;
    has_region(style_region: string): [boolean, RegionFlags | null];
    lookup_color(color_name: string): [boolean, Gdk.RGBA];
    state_is_running(state: StateType): [boolean, number];
    vfunc_render_activity(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_arrow(cr: cairo.Context, angle: number, x: number, y: number, size: number): void;
    vfunc_render_background(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_check(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_expander(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_extension(cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType): void;
    vfunc_render_focus(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_frame(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_frame_gap(cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType, xy0_gap: number, xy1_gap: number): void;
    vfunc_render_handle(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_icon(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): void;
    vfunc_render_icon_surface(cr: cairo.Context, surface: cairo.Surface, x: number, y: number): void;
    vfunc_render_layout(cr: cairo.Context, x: number, y: number, layout: Pango.Layout): void;
    vfunc_render_line(cr: cairo.Context, x0: number, y0: number, x1: number, y1: number): void;
    vfunc_render_option(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_slider(cr: cairo.Context, x: number, y: number, width: number, height: number, orientation: Orientation): void;
    static load(name: string): ThemingEngine | null;
}
export module ToggleAction {
    export interface ConstructorProperties extends Action.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        draw_as_radio: boolean;
    }
}
export class ToggleAction extends Action implements Buildable {
    constructor(properties?: Partial<ToggleAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToggleAction.ConstructorProperties>, ...args: any[]): void;
    // Properties
    active: boolean;
    draw_as_radio: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'toggled', callback: (_source: this) => void): number;
    connect_after(signal: 'toggled', callback: (_source: this) => void): number;
    emit(signal: 'toggled'): void;
    // Constructors
    static ["new"](name: string, label: string | null, tooltip: string | null, stock_id: string | null): ToggleAction;
    static ["new"](...args: never[]): never;
    // Members
    get_active(): boolean;
    get_draw_as_radio(): boolean;
    set_active(is_active: boolean): void;
    set_draw_as_radio(draw_as_radio: boolean): void;
    toggled(): void;
    vfunc_toggled(): void;
}
export module ToggleButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        draw_indicator: boolean;
        inconsistent: boolean;
    }
}
export class ToggleButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<ToggleButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToggleButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    active: boolean;
    draw_indicator: boolean;
    inconsistent: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'toggled', callback: (_source: this) => void): number;
    connect_after(signal: 'toggled', callback: (_source: this) => void): number;
    emit(signal: 'toggled'): void;
    // Constructors
    static ["new"](): ToggleButton;
    static ["new"](...args: never[]): never;
    static new_with_label(label: string): ToggleButton;
    static new_with_label(...args: never[]): never;
    static new_with_mnemonic(label: string): ToggleButton;
    static new_with_mnemonic(...args: never[]): never;
    // Members
    get_active(): boolean;
    get_inconsistent(): boolean;
    get_mode(): boolean;
    set_active(is_active: boolean): void;
    set_inconsistent(setting: boolean): void;
    set_mode(draw_indicator: boolean): void;
    toggled(): void;
    vfunc_toggled(): void;
}
export module ToggleButtonAccessible {
    export interface ConstructorProperties extends ButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ToggleButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(properties?: Partial<ToggleButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToggleButtonAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ToggleButtonAccessiblePrivate | any;
}
export module ToggleToolButton {
    export interface ConstructorProperties extends ToolButton.ConstructorProperties {
        [key: string]: any;
        active: boolean;
    }
}
export class ToggleToolButton extends ToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<ToggleToolButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToggleToolButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    active: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'toggled', callback: (_source: this) => void): number;
    connect_after(signal: 'toggled', callback: (_source: this) => void): number;
    emit(signal: 'toggled'): void;
    // Constructors
    static ["new"](): ToggleToolButton;
    static ["new"](...args: never[]): never;
    static new_from_stock(stock_id: string): ToggleToolButton;
    static new_from_stock(...args: never[]): never;
    // Members
    get_active(): boolean;
    set_active(is_active: boolean): void;
    vfunc_toggled(): void;
}
export module ToolButton {
    export interface ConstructorProperties extends ToolItem.ConstructorProperties {
        [key: string]: any;
        icon_name: string;
        icon_widget: Widget;
        label: string;
        label_widget: Widget;
        stock_id: string;
        use_underline: boolean;
    }
}
export class ToolButton extends ToolItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(properties?: Partial<ToolButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToolButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    icon_name: string;
    icon_widget: Widget;
    label: string;
    label_widget: Widget;
    stock_id: string;
    use_underline: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'clicked', callback: (_source: this) => void): number;
    connect_after(signal: 'clicked', callback: (_source: this) => void): number;
    emit(signal: 'clicked'): void;
    // Implemented Properties
    action_name: string;
    action_target: GLib.Variant;
    // Constructors
    static ["new"](icon_widget: Widget | null, label: string | null): ToolButton;
    static ["new"](...args: never[]): never;
    static new_from_stock(stock_id: string): ToolButton;
    // Members
    get_icon_name(): string | null;
    get_icon_widget(): Widget | null;
    get_label(): string | null;
    get_label_widget(): Widget | null;
    get_stock_id(): string;
    get_use_underline(): boolean;
    set_icon_name(icon_name: string | null): void;
    set_icon_widget(icon_widget: Widget | null): void;
    set_label(label: string | null): void;
    set_label_widget(label_widget: Widget | null): void;
    set_stock_id(stock_id: string | null): void;
    set_use_underline(use_underline: boolean): void;
    vfunc_clicked(): void;
    // Implemented Members
    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name: string | null): void;
    set_action_target_value(target_value: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name: string | null): void;
    vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
}
export module ToolItem {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        is_important: boolean;
        visible_horizontal: boolean;
        visible_vertical: boolean;
    }
}
export class ToolItem extends Bin implements Atk.ImplementorIface, Activatable, Buildable {
    constructor(properties?: Partial<ToolItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToolItem.ConstructorProperties>, ...args: any[]): void;
    // Properties
    is_important: boolean;
    visible_horizontal: boolean;
    visible_vertical: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'create-menu-proxy', callback: (_source: this) => boolean): number;
    connect_after(signal: 'create-menu-proxy', callback: (_source: this) => boolean): number;
    emit(signal: 'create-menu-proxy'): void;
    connect(signal: 'toolbar-reconfigured', callback: (_source: this) => void): number;
    connect_after(signal: 'toolbar-reconfigured', callback: (_source: this) => void): number;
    emit(signal: 'toolbar-reconfigured'): void;
    // Implemented Properties
    related_action: Action;
    use_action_appearance: boolean;
    // Constructors
    static ["new"](): ToolItem;
    // Members
    get_ellipsize_mode(): Pango.EllipsizeMode;
    get_expand(): boolean;
    get_homogeneous(): boolean;
    get_icon_size(): number;
    get_is_important(): boolean;
    get_orientation(): Orientation;
    get_proxy_menu_item(menu_item_id: string): Widget | null;
    get_relief_style(): ReliefStyle;
    get_text_alignment(): number;
    get_text_orientation(): Orientation;
    get_text_size_group(): SizeGroup;
    get_toolbar_style(): ToolbarStyle;
    get_use_drag_window(): boolean;
    get_visible_horizontal(): boolean;
    get_visible_vertical(): boolean;
    rebuild_menu(): void;
    retrieve_proxy_menu_item(): Widget;
    set_expand(expand: boolean): void;
    set_homogeneous(homogeneous: boolean): void;
    set_is_important(is_important: boolean): void;
    set_proxy_menu_item(menu_item_id: string, menu_item: Widget | null): void;
    set_tooltip_markup(markup: string): void;
    set_tooltip_markup(...args: never[]): never;
    set_tooltip_text(text: string): void;
    set_tooltip_text(...args: never[]): never;
    set_use_drag_window(use_drag_window: boolean): void;
    set_visible_horizontal(visible_horizontal: boolean): void;
    set_visible_vertical(visible_vertical: boolean): void;
    toolbar_reconfigured(): void;
    vfunc_create_menu_proxy(): boolean;
    vfunc_toolbar_reconfigured(): void;
    // Implemented Members
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action: Action | null): void;
    vfunc_sync_action_properties(action: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module ToolItemGroup {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        collapsed: boolean;
        ellipsize: Pango.EllipsizeMode;
        header_relief: ReliefStyle;
        label: string;
        label_widget: Widget;
    }
}
export class ToolItemGroup extends Container implements Atk.ImplementorIface, Buildable, ToolShell {
    constructor(properties?: Partial<ToolItemGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToolItemGroup.ConstructorProperties>, ...args: any[]): void;
    // Properties
    collapsed: boolean;
    ellipsize: Pango.EllipsizeMode;
    header_relief: ReliefStyle;
    label: string;
    label_widget: Widget;
    // Fields
    priv: ToolItemGroupPrivate;
    // Constructors
    static ["new"](label: string): ToolItemGroup;
    // Members
    get_collapsed(): boolean;
    get_drop_item(x: number, y: number): ToolItem;
    get_ellipsize(): Pango.EllipsizeMode;
    get_header_relief(): ReliefStyle;
    get_item_position(item: ToolItem): number;
    get_label(): string;
    get_label_widget(): Widget;
    get_n_items(): number;
    get_nth_item(index: number): ToolItem;
    insert(item: ToolItem, position: number): void;
    set_collapsed(collapsed: boolean): void;
    set_ellipsize(ellipsize: Pango.EllipsizeMode): void;
    set_header_relief(style: ReliefStyle): void;
    set_item_position(item: ToolItem, position: number): void;
    set_label(label: string): void;
    set_label_widget(label_widget: Widget): void;
    // Implemented Members
    get_ellipsize_mode(): Pango.EllipsizeMode;
    get_icon_size(): number;
    get_orientation(): Orientation;
    get_relief_style(): ReliefStyle;
    get_style(): ToolbarStyle;
    get_style(...args: never[]): never;
    get_text_alignment(): number;
    get_text_orientation(): Orientation;
    get_text_size_group(): SizeGroup;
    rebuild_menu(): void;
    vfunc_get_ellipsize_mode(): Pango.EllipsizeMode;
    vfunc_get_icon_size(): IconSize;
    vfunc_get_orientation(): Orientation;
    vfunc_get_relief_style(): ReliefStyle;
    vfunc_get_style(): ToolbarStyle;
    vfunc_get_text_alignment(): number;
    vfunc_get_text_orientation(): Orientation;
    vfunc_get_text_size_group(): SizeGroup;
    vfunc_rebuild_menu(): void;
}
export module ToolPalette {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        icon_size: IconSize;
        icon_size_set: boolean;
        toolbar_style: ToolbarStyle;
    }
}
export class ToolPalette extends Container implements Atk.ImplementorIface, Buildable, Orientable, Scrollable {
    constructor(properties?: Partial<ToolPalette.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToolPalette.ConstructorProperties>, ...args: any[]): void;
    // Properties
    icon_size: IconSize;
    icon_size_set: boolean;
    toolbar_style: ToolbarStyle;
    // Fields
    priv: ToolPalettePrivate;
    // Implemented Properties
    orientation: Orientation;
    hadjustment: Adjustment;
    hscroll_policy: ScrollablePolicy;
    vadjustment: Adjustment;
    vscroll_policy: ScrollablePolicy;
    // Constructors
    static ["new"](): ToolPalette;
    // Members
    add_drag_dest(widget: Widget, flags: DestDefaults, targets: ToolPaletteDragTargets, actions: Gdk.DragAction): void;
    get_drag_item(selection: SelectionData): Widget;
    get_drop_group(x: number, y: number): ToolItemGroup | null;
    get_drop_item(x: number, y: number): ToolItem | null;
    get_exclusive(group: ToolItemGroup): boolean;
    get_expand(group: ToolItemGroup): boolean;
    get_group_position(group: ToolItemGroup): number;
    get_hadjustment(): Adjustment;
    get_icon_size(): number;
    get_style(): ToolbarStyle;
    get_style(...args: never[]): never;
    get_vadjustment(): Adjustment;
    set_drag_source(targets: ToolPaletteDragTargets): void;
    set_exclusive(group: ToolItemGroup, exclusive: boolean): void;
    set_expand(group: ToolItemGroup, expand: boolean): void;
    set_group_position(group: ToolItemGroup, position: number): void;
    set_icon_size(icon_size: number): void;
    set_style(style: ToolbarStyle): void;
    set_style(...args: never[]): never;
    unset_icon_size(): void;
    unset_style(): void;
    static get_drag_target_group(): TargetEntry;
    static get_drag_target_item(): TargetEntry;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
    get_border(): [boolean, Border];
    get_hscroll_policy(): ScrollablePolicy;
    get_vscroll_policy(): ScrollablePolicy;
    set_hadjustment(hadjustment: Adjustment | null): void;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vadjustment(vadjustment: Adjustment | null): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module Toolbar {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        icon_size: IconSize;
        icon_size_set: boolean;
        show_arrow: boolean;
        toolbar_style: ToolbarStyle;
    }
}
export class Toolbar extends Container implements Atk.ImplementorIface, Buildable, Orientable, ToolShell {
    constructor(properties?: Partial<Toolbar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Toolbar.ConstructorProperties>, ...args: any[]): void;
    // Properties
    icon_size: IconSize;
    icon_size_set: boolean;
    show_arrow: boolean;
    toolbar_style: ToolbarStyle;
    // Fields
    container: Container;
    priv: ToolbarPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'focus-home-or-end', callback: (_source: this, focus_home: boolean) => boolean): number;
    connect_after(signal: 'focus-home-or-end', callback: (_source: this, focus_home: boolean) => boolean): number;
    emit(signal: 'focus-home-or-end', focus_home: boolean): void;
    connect(signal: 'orientation-changed', callback: (_source: this, orientation: Orientation) => void): number;
    connect_after(signal: 'orientation-changed', callback: (_source: this, orientation: Orientation) => void): number;
    emit(signal: 'orientation-changed', orientation: Orientation): void;
    connect(signal: 'popup-context-menu', callback: (_source: this, x: number, y: number, button: number) => boolean): number;
    connect_after(signal: 'popup-context-menu', callback: (_source: this, x: number, y: number, button: number) => boolean): number;
    emit(signal: 'popup-context-menu', x: number, y: number, button: number): void;
    connect(signal: 'style-changed', callback: (_source: this, style: ToolbarStyle) => void): number;
    connect_after(signal: 'style-changed', callback: (_source: this, style: ToolbarStyle) => void): number;
    emit(signal: 'style-changed', style: ToolbarStyle): void;
    // Implemented Properties
    orientation: Orientation;
    // Constructors
    static ["new"](): Toolbar;
    // Members
    get_drop_index(x: number, y: number): number;
    get_icon_size(): IconSize;
    get_icon_size(...args: never[]): never;
    get_item_index(item: ToolItem): number;
    get_n_items(): number;
    get_nth_item(n: number): ToolItem | null;
    get_relief_style(): ReliefStyle;
    get_show_arrow(): boolean;
    get_style(): ToolbarStyle;
    get_style(...args: never[]): never;
    insert(item: ToolItem, pos: number): void;
    set_drop_highlight_item(tool_item: ToolItem | null, index_: number): void;
    set_icon_size(icon_size: IconSize): void;
    set_show_arrow(show_arrow: boolean): void;
    set_style(style: ToolbarStyle): void;
    set_style(...args: never[]): never;
    unset_icon_size(): void;
    unset_style(): void;
    vfunc_orientation_changed(orientation: Orientation): void;
    vfunc_popup_context_menu(x: number, y: number, button_number: number): boolean;
    vfunc_style_changed(style: ToolbarStyle): void;
    // Implemented Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
    get_ellipsize_mode(): Pango.EllipsizeMode;
    get_orientation(): Orientation;
    get_text_alignment(): number;
    get_text_orientation(): Orientation;
    get_text_size_group(): SizeGroup;
    rebuild_menu(): void;
    vfunc_get_ellipsize_mode(): Pango.EllipsizeMode;
    vfunc_get_icon_size(): IconSize;
    vfunc_get_orientation(): Orientation;
    vfunc_get_relief_style(): ReliefStyle;
    vfunc_get_style(): ToolbarStyle;
    vfunc_get_text_alignment(): number;
    vfunc_get_text_orientation(): Orientation;
    vfunc_get_text_size_group(): SizeGroup;
    vfunc_rebuild_menu(): void;
}
export module Tooltip {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Tooltip extends GObject.Object {
    constructor(properties?: Partial<Tooltip.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Tooltip.ConstructorProperties>, ...args: any[]): void;
    // Members
    set_custom(custom_widget: Widget | null): void;
    set_icon(pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_icon_from_gicon(gicon: Gio.Icon | null, size: number): void;
    set_icon_from_icon_name(icon_name: string | null, size: number): void;
    set_icon_from_stock(stock_id: string | null, size: number): void;
    set_markup(markup: string | null): void;
    set_text(text: string | null): void;
    set_tip_area(rect: Gdk.Rectangle): void;
    static trigger_tooltip_query(display: Gdk.Display): void;
}
export module ToplevelAccessible {
    export interface ConstructorProperties extends Atk.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ToplevelAccessible extends Atk.Object {
    constructor(properties?: Partial<ToplevelAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToplevelAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: ToplevelAccessiblePrivate;
    // Members
    get_children(): GLib.List;
}
export module TreeModelFilter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        child_model: TreeModel;
        virtual_root: TreePath;
    }
}
export class TreeModelFilter extends GObject.Object implements TreeDragSource, TreeModel {
    constructor(properties?: Partial<TreeModelFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeModelFilter.ConstructorProperties>, ...args: any[]): void;
    // Properties
    child_model: TreeModel;
    virtual_root: TreePath;
    // Members
    clear_cache(): void;
    convert_child_iter_to_iter(child_iter: TreeIter): [boolean, TreeIter];
    convert_child_path_to_path(child_path: TreePath): TreePath | null;
    convert_iter_to_child_iter(filter_iter: TreeIter): TreeIter;
    convert_path_to_child_path(filter_path: TreePath): TreePath | null;
    get_model(): TreeModel;
    refilter(): void;
    set_modify_func(types: GType[], func: TreeModelFilterModifyFunc, destroy: GLib.DestroyNotify | null): void;
    set_visible_column(column: number): void;
    set_visible_func(func: TreeModelFilterVisibleFunc, destroy: GLib.DestroyNotify | null): void;
    vfunc_modify(child_model: TreeModel, iter: TreeIter, value: (GObject.Value | string | boolean | number), column: number): void;
    vfunc_visible(child_model: TreeModel, iter: TreeIter): boolean;
    // Implemented Members
    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
    vfunc_drag_data_delete(path: TreePath): boolean;
    vfunc_drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_draggable(path: TreePath): boolean;
    filter_new(root: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc): void;
    get_column_type(index_: number): GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): GObject.Value;
    iter_children(parent: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered(path: TreePath, iter: TreeIter | null, new_order: number[]): void;
    unref_node(iter: TreeIter): void;
    vfunc_get_column_type(index_: number): GType;
    vfunc_get_flags(): TreeModelFlags;
    vfunc_get_iter(path: TreePath): [boolean, TreeIter];
    vfunc_get_n_columns(): number;
    vfunc_get_path(iter: TreeIter): TreePath;
    vfunc_get_value(iter: TreeIter, column: number): GObject.Value;
    vfunc_iter_children(parent: TreeIter | null): [boolean, TreeIter];
    vfunc_iter_has_child(iter: TreeIter): boolean;
    vfunc_iter_n_children(iter: TreeIter | null): number;
    vfunc_iter_next(iter: TreeIter): boolean;
    vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
    vfunc_iter_previous(iter: TreeIter): boolean;
    vfunc_ref_node(iter: TreeIter): void;
    vfunc_row_changed(path: TreePath, iter: TreeIter): void;
    vfunc_row_deleted(path: TreePath): void;
    vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
    vfunc_unref_node(iter: TreeIter): void;
}
export module TreeModelSort {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        model: TreeModel;
    }
}
export class TreeModelSort extends GObject.Object implements TreeDragSource, TreeModel, TreeSortable {
    constructor(properties?: Partial<TreeModelSort.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeModelSort.ConstructorProperties>, ...args: any[]): void;
    // Properties
    model: TreeModel;
    // Constructors
    static new_with_model(child_model: TreeModel): TreeModelSort;
    // Members
    clear_cache(): void;
    convert_child_iter_to_iter(child_iter: TreeIter): [boolean, TreeIter];
    convert_child_path_to_path(child_path: TreePath): TreePath | null;
    convert_iter_to_child_iter(sorted_iter: TreeIter): TreeIter;
    convert_path_to_child_path(sorted_path: TreePath): TreePath | null;
    get_model(): TreeModel;
    iter_is_valid(iter: TreeIter): boolean;
    reset_default_sort_func(): void;
    // Implemented Members
    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
    vfunc_drag_data_delete(path: TreePath): boolean;
    vfunc_drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_draggable(path: TreePath): boolean;
    filter_new(root: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc): void;
    get_column_type(index_: number): GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): GObject.Value;
    iter_children(parent: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered(path: TreePath, iter: TreeIter | null, new_order: number[]): void;
    unref_node(iter: TreeIter): void;
    vfunc_get_column_type(index_: number): GType;
    vfunc_get_flags(): TreeModelFlags;
    vfunc_get_iter(path: TreePath): [boolean, TreeIter];
    vfunc_get_n_columns(): number;
    vfunc_get_path(iter: TreeIter): TreePath;
    vfunc_get_value(iter: TreeIter, column: number): GObject.Value;
    vfunc_iter_children(parent: TreeIter | null): [boolean, TreeIter];
    vfunc_iter_has_child(iter: TreeIter): boolean;
    vfunc_iter_n_children(iter: TreeIter | null): number;
    vfunc_iter_next(iter: TreeIter): boolean;
    vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
    vfunc_iter_previous(iter: TreeIter): boolean;
    vfunc_ref_node(iter: TreeIter): void;
    vfunc_row_changed(path: TreePath, iter: TreeIter): void;
    vfunc_row_deleted(path: TreePath): void;
    vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
    vfunc_unref_node(iter: TreeIter): void;
    get_sort_column_id(): [boolean, number, SortType];
    has_default_sort_func(): boolean;
    set_default_sort_func(sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    set_sort_column_id(sort_column_id: number, order: SortType): void;
    set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    sort_column_changed(): void;
    vfunc_get_sort_column_id(): [boolean, number, SortType];
    vfunc_has_default_sort_func(): boolean;
    vfunc_set_default_sort_func(sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
    vfunc_set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    vfunc_sort_column_changed(): void;
}
export module TreeSelection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        mode: SelectionMode;
    }
}
export class TreeSelection extends GObject.Object {
    constructor(properties?: Partial<TreeSelection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeSelection.ConstructorProperties>, ...args: any[]): void;
    // Properties
    mode: SelectionMode;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'changed', callback: (_source: this) => void): number;
    connect_after(signal: 'changed', callback: (_source: this) => void): number;
    emit(signal: 'changed'): void;
    // Members
    count_selected_rows(): number;
    get_mode(): SelectionMode;
    get_selected(): [boolean, TreeModel | null, TreeIter | null];
    get_selected_rows(): [GLib.List, TreeModel | null];
    get_tree_view(): TreeView;
    iter_is_selected(iter: TreeIter): boolean;
    path_is_selected(path: TreePath): boolean;
    select_all(): void;
    select_iter(iter: TreeIter): void;
    select_path(path: TreePath): void;
    select_range(start_path: TreePath, end_path: TreePath): void;
    selected_foreach(func: TreeSelectionForeachFunc): void;
    set_mode(type: SelectionMode): void;
    set_select_function(func: TreeSelectionFunc | null, destroy: GLib.DestroyNotify): void;
    unselect_all(): void;
    unselect_iter(iter: TreeIter): void;
    unselect_path(path: TreePath): void;
    unselect_range(start_path: TreePath, end_path: TreePath): void;
    vfunc_changed(): void;
}
export module TreeStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TreeStore extends GObject.Object implements Buildable, TreeDragDest, TreeDragSource, TreeModel, TreeSortable {
    constructor(properties?: Partial<TreeStore.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeStore.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: TreeStorePrivate;
    // Constructors
    static ["new"](types: GType[]): TreeStore;
    // Members
    append(parent: TreeIter | null): TreeIter;
    clear(): void;
    insert(parent: TreeIter | null, position: number): TreeIter;
    insert_after(parent: TreeIter | null, sibling: TreeIter | null): TreeIter;
    insert_before(parent: TreeIter | null, sibling: TreeIter | null): TreeIter;
    insert_with_values(parent: TreeIter | null, position: number, columns: number[], values: (GObject.Value | string | boolean | number)[]): TreeIter | null;
    is_ancestor(iter: TreeIter, descendant: TreeIter): boolean;
    iter_depth(iter: TreeIter): number;
    iter_is_valid(iter: TreeIter): boolean;
    move_after(iter: TreeIter, position: TreeIter | null): void;
    move_before(iter: TreeIter, position: TreeIter | null): void;
    prepend(parent: TreeIter | null): TreeIter;
    remove(iter: TreeIter): boolean;
    set_column_types(types: GType[]): void;
    set_value(iter: TreeIter, column: number, value: (GObject.Value | string | boolean | number)): void;
    set(iter: TreeIter, columns: number[], values: (GObject.Value | string | boolean | number)[]): void;
    set(...args: never[]): never;
    swap(a: TreeIter, b: TreeIter): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
    drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
    vfunc_drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
    vfunc_drag_data_delete(path: TreePath): boolean;
    vfunc_drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_draggable(path: TreePath): boolean;
    filter_new(root: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc): void;
    get_column_type(index_: number): GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): GObject.Value;
    iter_children(parent: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered(path: TreePath, iter: TreeIter | null, new_order: number[]): void;
    unref_node(iter: TreeIter): void;
    vfunc_get_column_type(index_: number): GType;
    vfunc_get_flags(): TreeModelFlags;
    vfunc_get_iter(path: TreePath): [boolean, TreeIter];
    vfunc_get_n_columns(): number;
    vfunc_get_path(iter: TreeIter): TreePath;
    vfunc_get_value(iter: TreeIter, column: number): GObject.Value;
    vfunc_iter_children(parent: TreeIter | null): [boolean, TreeIter];
    vfunc_iter_has_child(iter: TreeIter): boolean;
    vfunc_iter_n_children(iter: TreeIter | null): number;
    vfunc_iter_next(iter: TreeIter): boolean;
    vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
    vfunc_iter_previous(iter: TreeIter): boolean;
    vfunc_ref_node(iter: TreeIter): void;
    vfunc_row_changed(path: TreePath, iter: TreeIter): void;
    vfunc_row_deleted(path: TreePath): void;
    vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
    vfunc_unref_node(iter: TreeIter): void;
    get_sort_column_id(): [boolean, number, SortType];
    has_default_sort_func(): boolean;
    set_default_sort_func(sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    set_sort_column_id(sort_column_id: number, order: SortType): void;
    set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    sort_column_changed(): void;
    vfunc_get_sort_column_id(): [boolean, number, SortType];
    vfunc_has_default_sort_func(): boolean;
    vfunc_set_default_sort_func(sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
    vfunc_set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    vfunc_sort_column_changed(): void;
}
export module TreeView {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        activate_on_single_click: boolean;
        enable_grid_lines: TreeViewGridLines;
        enable_search: boolean;
        enable_tree_lines: boolean;
        expander_column: TreeViewColumn;
        fixed_height_mode: boolean;
        headers_clickable: boolean;
        headers_visible: boolean;
        hover_expand: boolean;
        hover_selection: boolean;
        level_indentation: number;
        model: TreeModel;
        reorderable: boolean;
        rubber_banding: boolean;
        rules_hint: boolean;
        search_column: number;
        show_expanders: boolean;
        tooltip_column: number;
    }
}
export class TreeView extends Container implements Atk.ImplementorIface, Buildable, Scrollable {
    constructor(properties?: Partial<TreeView.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeView.ConstructorProperties>, ...args: any[]): void;
    // Properties
    activate_on_single_click: boolean;
    enable_grid_lines: TreeViewGridLines;
    enable_search: boolean;
    enable_tree_lines: boolean;
    expander_column: TreeViewColumn;
    fixed_height_mode: boolean;
    headers_clickable: boolean;
    headers_visible: boolean;
    hover_expand: boolean;
    hover_selection: boolean;
    level_indentation: number;
    model: TreeModel;
    reorderable: boolean;
    rubber_banding: boolean;
    rules_hint: boolean;
    search_column: number;
    show_expanders: boolean;
    tooltip_column: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'columns-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'columns-changed', callback: (_source: this) => void): number;
    emit(signal: 'columns-changed'): void;
    connect(signal: 'cursor-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'cursor-changed', callback: (_source: this) => void): number;
    emit(signal: 'cursor-changed'): void;
    connect(signal: 'expand-collapse-cursor-row', callback: (_source: this, object: boolean, p0: boolean, p1: boolean) => boolean): number;
    connect_after(signal: 'expand-collapse-cursor-row', callback: (_source: this, object: boolean, p0: boolean, p1: boolean) => boolean): number;
    emit(signal: 'expand-collapse-cursor-row', object: boolean, p0: boolean, p1: boolean): void;
    connect(signal: 'move-cursor', callback: (_source: this, step: MovementStep, direction: number) => boolean): number;
    connect_after(signal: 'move-cursor', callback: (_source: this, step: MovementStep, direction: number) => boolean): number;
    emit(signal: 'move-cursor', step: MovementStep, direction: number): void;
    connect(signal: 'row-activated', callback: (_source: this, path: TreePath, column: TreeViewColumn) => void): number;
    connect_after(signal: 'row-activated', callback: (_source: this, path: TreePath, column: TreeViewColumn) => void): number;
    emit(signal: 'row-activated', path: TreePath, column: TreeViewColumn): void;
    connect(signal: 'row-collapsed', callback: (_source: this, iter: TreeIter, path: TreePath) => void): number;
    connect_after(signal: 'row-collapsed', callback: (_source: this, iter: TreeIter, path: TreePath) => void): number;
    emit(signal: 'row-collapsed', iter: TreeIter, path: TreePath): void;
    connect(signal: 'row-expanded', callback: (_source: this, iter: TreeIter, path: TreePath) => void): number;
    connect_after(signal: 'row-expanded', callback: (_source: this, iter: TreeIter, path: TreePath) => void): number;
    emit(signal: 'row-expanded', iter: TreeIter, path: TreePath): void;
    connect(signal: 'select-all', callback: (_source: this) => boolean): number;
    connect_after(signal: 'select-all', callback: (_source: this) => boolean): number;
    emit(signal: 'select-all'): void;
    connect(signal: 'select-cursor-parent', callback: (_source: this) => boolean): number;
    connect_after(signal: 'select-cursor-parent', callback: (_source: this) => boolean): number;
    emit(signal: 'select-cursor-parent'): void;
    connect(signal: 'select-cursor-row', callback: (_source: this, object: boolean) => boolean): number;
    connect_after(signal: 'select-cursor-row', callback: (_source: this, object: boolean) => boolean): number;
    emit(signal: 'select-cursor-row', object: boolean): void;
    connect(signal: 'start-interactive-search', callback: (_source: this) => boolean): number;
    connect_after(signal: 'start-interactive-search', callback: (_source: this) => boolean): number;
    emit(signal: 'start-interactive-search'): void;
    connect(signal: 'test-collapse-row', callback: (_source: this, iter: TreeIter, path: TreePath) => boolean): number;
    connect_after(signal: 'test-collapse-row', callback: (_source: this, iter: TreeIter, path: TreePath) => boolean): number;
    emit(signal: 'test-collapse-row', iter: TreeIter, path: TreePath): void;
    connect(signal: 'test-expand-row', callback: (_source: this, iter: TreeIter, path: TreePath) => boolean): number;
    connect_after(signal: 'test-expand-row', callback: (_source: this, iter: TreeIter, path: TreePath) => boolean): number;
    emit(signal: 'test-expand-row', iter: TreeIter, path: TreePath): void;
    connect(signal: 'toggle-cursor-row', callback: (_source: this) => boolean): number;
    connect_after(signal: 'toggle-cursor-row', callback: (_source: this) => boolean): number;
    emit(signal: 'toggle-cursor-row'): void;
    connect(signal: 'unselect-all', callback: (_source: this) => boolean): number;
    connect_after(signal: 'unselect-all', callback: (_source: this) => boolean): number;
    emit(signal: 'unselect-all'): void;
    // Implemented Properties
    hadjustment: Adjustment;
    hscroll_policy: ScrollablePolicy;
    vadjustment: Adjustment;
    vscroll_policy: ScrollablePolicy;
    // Constructors
    static ["new"](): TreeView;
    static new_with_model(model: TreeModel): TreeView;
    // Members
    append_column(column: TreeViewColumn): number;
    collapse_all(): void;
    collapse_row(path: TreePath): boolean;
    columns_autosize(): void;
    convert_bin_window_to_tree_coords(bx: number, by: number): [number, number];
    convert_bin_window_to_widget_coords(bx: number, by: number): [number, number];
    convert_tree_to_bin_window_coords(tx: number, ty: number): [number, number];
    convert_tree_to_widget_coords(tx: number, ty: number): [number, number];
    convert_widget_to_bin_window_coords(wx: number, wy: number): [number, number];
    convert_widget_to_tree_coords(wx: number, wy: number): [number, number];
    create_row_drag_icon(path: TreePath): cairo.Surface;
    enable_model_drag_dest(targets: TargetEntry[], actions: Gdk.DragAction): void;
    enable_model_drag_source(start_button_mask: Gdk.ModifierType, targets: TargetEntry[], actions: Gdk.DragAction): void;
    expand_all(): void;
    expand_row(path: TreePath, open_all: boolean): boolean;
    expand_to_path(path: TreePath): void;
    get_activate_on_single_click(): boolean;
    get_background_area(path: TreePath | null, column: TreeViewColumn | null): Gdk.Rectangle;
    get_bin_window(): Gdk.Window | null;
    get_cell_area(path: TreePath | null, column: TreeViewColumn | null): Gdk.Rectangle;
    get_column(n: number): TreeViewColumn | null;
    get_columns(): GLib.List;
    get_cursor(): [TreePath | null, TreeViewColumn | null];
    get_dest_row_at_pos(drag_x: number, drag_y: number): [boolean, TreePath | null, TreeViewDropPosition | null];
    get_drag_dest_row(): [TreePath | null, TreeViewDropPosition | null];
    get_enable_search(): boolean;
    get_enable_tree_lines(): boolean;
    get_expander_column(): TreeViewColumn;
    get_fixed_height_mode(): boolean;
    get_grid_lines(): TreeViewGridLines;
    get_hadjustment(): Adjustment;
    get_headers_clickable(): boolean;
    get_headers_visible(): boolean;
    get_hover_expand(): boolean;
    get_hover_selection(): boolean;
    get_level_indentation(): number;
    get_model(): TreeModel | null;
    get_n_columns(): number;
    get_path_at_pos(x: number, y: number): [boolean, TreePath | null, TreeViewColumn | null, number | null, number | null];
    get_reorderable(): boolean;
    get_rubber_banding(): boolean;
    get_rules_hint(): boolean;
    get_search_column(): number;
    get_search_entry(): Entry;
    get_selection(): TreeSelection;
    get_show_expanders(): boolean;
    get_tooltip_column(): number;
    get_tooltip_context(x: number, y: number, keyboard_tip: boolean): [boolean, number, number, TreeModel | null, TreePath | null, TreeIter | null];
    get_vadjustment(): Adjustment;
    get_visible_range(): [boolean, TreePath | null, TreePath | null];
    get_visible_rect(): Gdk.Rectangle;
    insert_column(column: TreeViewColumn, position: number): number;
    insert_column_with_data_func(position: number, title: string, cell: CellRenderer, func: TreeCellDataFunc, dnotify: GLib.DestroyNotify): number;
    is_blank_at_pos(x: number, y: number): [boolean, TreePath | null, TreeViewColumn | null, number | null, number | null];
    is_rubber_banding_active(): boolean;
    map_expanded_rows(func: TreeViewMappingFunc): void;
    move_column_after(column: TreeViewColumn, base_column: TreeViewColumn | null): void;
    remove_column(column: TreeViewColumn): number;
    row_activated(path: TreePath, column: TreeViewColumn): void;
    row_expanded(path: TreePath): boolean;
    scroll_to_cell(path: TreePath | null, column: TreeViewColumn | null, use_align: boolean, row_align: number, col_align: number): void;
    scroll_to_point(tree_x: number, tree_y: number): void;
    set_activate_on_single_click(single: boolean): void;
    set_column_drag_function(func: TreeViewColumnDropFunc | null, destroy: GLib.DestroyNotify | null): void;
    set_cursor(path: TreePath, focus_column: TreeViewColumn | null, start_editing: boolean): void;
    set_cursor_on_cell(path: TreePath, focus_column: TreeViewColumn | null, focus_cell: CellRenderer | null, start_editing: boolean): void;
    set_destroy_count_func(func: TreeDestroyCountFunc | null, destroy: GLib.DestroyNotify | null): void;
    set_drag_dest_row(path: TreePath | null, pos: TreeViewDropPosition): void;
    set_enable_search(enable_search: boolean): void;
    set_enable_tree_lines(enabled: boolean): void;
    set_expander_column(column: TreeViewColumn | null): void;
    set_fixed_height_mode(enable: boolean): void;
    set_grid_lines(grid_lines: TreeViewGridLines): void;
    set_hadjustment(adjustment: Adjustment | null): void;
    set_headers_clickable(setting: boolean): void;
    set_headers_visible(headers_visible: boolean): void;
    set_hover_expand(expand: boolean): void;
    set_hover_selection(hover: boolean): void;
    set_level_indentation(indentation: number): void;
    set_model(model: TreeModel | null): void;
    set_reorderable(reorderable: boolean): void;
    set_row_separator_func(func: TreeViewRowSeparatorFunc | null, destroy: GLib.DestroyNotify | null): void;
    set_rubber_banding(enable: boolean): void;
    set_rules_hint(setting: boolean): void;
    set_search_column(column: number): void;
    set_search_entry(entry: Entry | null): void;
    set_search_equal_func(search_equal_func: TreeViewSearchEqualFunc, search_destroy: GLib.DestroyNotify | null): void;
    set_search_position_func(func: TreeViewSearchPositionFunc | null, destroy: GLib.DestroyNotify | null): void;
    set_show_expanders(enabled: boolean): void;
    set_tooltip_cell(tooltip: Tooltip, path: TreePath | null, column: TreeViewColumn | null, cell: CellRenderer | null): void;
    set_tooltip_column(column: number): void;
    set_tooltip_row(tooltip: Tooltip, path: TreePath): void;
    set_vadjustment(adjustment: Adjustment | null): void;
    unset_rows_drag_dest(): void;
    unset_rows_drag_source(): void;
    vfunc_columns_changed(): void;
    vfunc_cursor_changed(): void;
    vfunc_expand_collapse_cursor_row(logical: boolean, expand: boolean, open_all: boolean): boolean;
    vfunc_move_cursor(step: MovementStep, count: number): boolean;
    vfunc_row_activated(path: TreePath, column: TreeViewColumn): void;
    vfunc_row_collapsed(iter: TreeIter, path: TreePath): void;
    vfunc_row_expanded(iter: TreeIter, path: TreePath): void;
    vfunc_select_all(): boolean;
    vfunc_select_cursor_parent(): boolean;
    vfunc_select_cursor_row(start_editing: boolean): boolean;
    vfunc_start_interactive_search(): boolean;
    vfunc_test_collapse_row(iter: TreeIter, path: TreePath): boolean;
    vfunc_test_expand_row(iter: TreeIter, path: TreePath): boolean;
    vfunc_toggle_cursor_row(): boolean;
    vfunc_unselect_all(): boolean;
    // Implemented Members
    get_border(): [boolean, Border];
    get_hscroll_policy(): ScrollablePolicy;
    get_vscroll_policy(): ScrollablePolicy;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module TreeViewAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class TreeViewAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection, Atk.Table, CellAccessibleParent {
    constructor(properties?: Partial<TreeViewAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeViewAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: TreeViewAccessiblePrivate | any;
    // Implemented Members
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
    add_column_selection(column: number): boolean;
    add_row_selection(row: number): boolean;
    get_caption(): Atk.Object | null;
    get_column_at_index(index_: number): number;
    get_column_description(column: number): string;
    get_column_extent_at(row: number, column: number): number;
    get_column_header(column: number): Atk.Object | null;
    get_index_at(row: number, column: number): number;
    get_n_columns(): number;
    get_n_rows(): number;
    get_row_at_index(index_: number): number;
    get_row_description(row: number): string | null;
    get_row_extent_at(row: number, column: number): number;
    get_row_header(row: number): Atk.Object | null;
    get_selected_columns(selected: number): number;
    get_selected_rows(selected: number): number;
    get_summary(): Atk.Object;
    is_column_selected(column: number): boolean;
    is_row_selected(row: number): boolean;
    is_selected(row: number, column: number): boolean;
    ref_at(row: number, column: number): Atk.Object;
    remove_column_selection(column: number): boolean;
    remove_row_selection(row: number): boolean;
    set_caption(caption: Atk.Object): void;
    set_column_description(column: number, description: string): void;
    set_column_header(column: number, header: Atk.Object): void;
    set_row_description(row: number, description: string): void;
    set_row_header(row: number, header: Atk.Object): void;
    set_summary(accessible: Atk.Object): void;
    vfunc_add_column_selection(column: number): boolean;
    vfunc_add_row_selection(row: number): boolean;
    vfunc_column_deleted(column: number, num_deleted: number): void;
    vfunc_column_inserted(column: number, num_inserted: number): void;
    vfunc_column_reordered(): void;
    vfunc_get_caption(): Atk.Object | null;
    vfunc_get_column_at_index(index_: number): number;
    vfunc_get_column_description(column: number): string;
    vfunc_get_column_extent_at(row: number, column: number): number;
    vfunc_get_column_header(column: number): Atk.Object | null;
    vfunc_get_index_at(row: number, column: number): number;
    vfunc_get_n_columns(): number;
    vfunc_get_n_rows(): number;
    vfunc_get_row_at_index(index_: number): number;
    vfunc_get_row_description(row: number): string | null;
    vfunc_get_row_extent_at(row: number, column: number): number;
    vfunc_get_row_header(row: number): Atk.Object | null;
    vfunc_get_selected_columns(selected: number): number;
    vfunc_get_selected_rows(selected: number): number;
    vfunc_get_summary(): Atk.Object;
    vfunc_is_column_selected(column: number): boolean;
    vfunc_is_row_selected(row: number): boolean;
    vfunc_is_selected(row: number, column: number): boolean;
    vfunc_model_changed(): void;
    vfunc_ref_at(row: number, column: number): Atk.Object;
    vfunc_remove_column_selection(column: number): boolean;
    vfunc_remove_row_selection(row: number): boolean;
    vfunc_row_deleted(row: number, num_deleted: number): void;
    vfunc_row_inserted(row: number, num_inserted: number): void;
    vfunc_row_reordered(): void;
    vfunc_set_caption(caption: Atk.Object): void;
    vfunc_set_column_description(column: number, description: string): void;
    vfunc_set_column_header(column: number, header: Atk.Object): void;
    vfunc_set_row_description(row: number, description: string): void;
    vfunc_set_row_header(row: number, header: Atk.Object): void;
    vfunc_set_summary(accessible: Atk.Object): void;
    activate(cell: CellAccessible): void;
    edit(cell: CellAccessible): void;
    expand_collapse(cell: CellAccessible): void;
    get_cell_area(cell: CellAccessible): Gdk.Rectangle;
    get_cell_extents(cell: CellAccessible, coord_type: Atk.CoordType): [number, number, number, number];
    get_cell_position(cell: CellAccessible): [number, number];
    get_child_index(cell: CellAccessible): number;
    get_column_header_cells(cell: CellAccessible): Atk.Object[];
    get_renderer_state(cell: CellAccessible): CellRendererState;
    get_row_header_cells(cell: CellAccessible): Atk.Object[];
    grab_focus(cell: CellAccessible): boolean;
    grab_focus(...args: never[]): never;
    update_relationset(cell: CellAccessible, relationset: Atk.RelationSet): void;
    vfunc_activate(cell: CellAccessible): void;
    vfunc_edit(cell: CellAccessible): void;
    vfunc_expand_collapse(cell: CellAccessible): void;
    vfunc_get_cell_area(cell: CellAccessible): Gdk.Rectangle;
    vfunc_get_cell_extents(cell: CellAccessible, coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_cell_position(cell: CellAccessible): [number, number];
    vfunc_get_child_index(cell: CellAccessible): number;
    vfunc_get_column_header_cells(cell: CellAccessible): Atk.Object[];
    vfunc_get_renderer_state(cell: CellAccessible): CellRendererState;
    vfunc_get_row_header_cells(cell: CellAccessible): Atk.Object[];
    vfunc_grab_focus(cell: CellAccessible): boolean;
    vfunc_grab_focus(...args: never[]): never;
    vfunc_update_relationset(cell: CellAccessible, relationset: Atk.RelationSet): void;
}
export module TreeViewColumn {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        alignment: number;
        cell_area: CellArea;
        clickable: boolean;
        expand: boolean;
        fixed_width: number;
        max_width: number;
        min_width: number;
        reorderable: boolean;
        resizable: boolean;
        sizing: TreeViewColumnSizing;
        sort_column_id: number;
        sort_indicator: boolean;
        sort_order: SortType;
        spacing: number;
        title: string;
        visible: boolean;
        widget: Widget;
        width: number;
        x_offset: number;
    }
}
export class TreeViewColumn extends GObject.InitiallyUnowned implements Buildable, CellLayout {
    constructor(properties?: Partial<TreeViewColumn.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeViewColumn.ConstructorProperties>, ...args: any[]): void;
    // Properties
    alignment: number;
    cell_area: CellArea;
    clickable: boolean;
    expand: boolean;
    fixed_width: number;
    max_width: number;
    min_width: number;
    reorderable: boolean;
    resizable: boolean;
    sizing: TreeViewColumnSizing;
    sort_column_id: number;
    sort_indicator: boolean;
    sort_order: SortType;
    spacing: number;
    title: string;
    visible: boolean;
    widget: Widget;
    width: number;
    x_offset: number;
    // Fields
    priv: TreeViewColumnPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'clicked', callback: (_source: this) => void): number;
    connect_after(signal: 'clicked', callback: (_source: this) => void): number;
    emit(signal: 'clicked'): void;
    // Constructors
    static ["new"](): TreeViewColumn;
    static new_with_area(area: CellArea): TreeViewColumn;
    // Members
    add_attribute(cell_renderer: CellRenderer, attribute: string, column: number): void;
    cell_get_position(cell_renderer: CellRenderer): [boolean, number | null, number | null];
    cell_get_size(cell_area: Gdk.Rectangle | null): [number | null, number | null, number | null, number | null];
    cell_is_visible(): boolean;
    cell_set_cell_data(tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean): void;
    clear(): void;
    clear_attributes(cell_renderer: CellRenderer): void;
    clicked(): void;
    focus_cell(cell: CellRenderer): void;
    get_alignment(): number;
    get_button(): Widget;
    get_clickable(): boolean;
    get_expand(): boolean;
    get_fixed_width(): number;
    get_max_width(): number;
    get_min_width(): number;
    get_reorderable(): boolean;
    get_resizable(): boolean;
    get_sizing(): TreeViewColumnSizing;
    get_sort_column_id(): number;
    get_sort_indicator(): boolean;
    get_sort_order(): SortType;
    get_spacing(): number;
    get_title(): string;
    get_tree_view(): Widget | null;
    get_visible(): boolean;
    get_widget(): Widget | null;
    get_width(): number;
    get_x_offset(): number;
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    queue_resize(): void;
    set_alignment(xalign: number): void;
    set_cell_data_func(cell_renderer: CellRenderer, func: TreeCellDataFunc | null, destroy: GLib.DestroyNotify): void;
    set_cell_data_func(...args: never[]): never;
    set_clickable(clickable: boolean): void;
    set_expand(expand: boolean): void;
    set_fixed_width(fixed_width: number): void;
    set_max_width(max_width: number): void;
    set_min_width(min_width: number): void;
    set_reorderable(reorderable: boolean): void;
    set_resizable(resizable: boolean): void;
    set_sizing(type: TreeViewColumnSizing): void;
    set_sort_column_id(sort_column_id: number): void;
    set_sort_indicator(setting: boolean): void;
    set_sort_order(order: SortType): void;
    set_spacing(spacing: number): void;
    set_title(title: string): void;
    set_visible(visible: boolean): void;
    set_widget(widget: Widget | null): void;
    vfunc_clicked(): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
    get_area(): CellArea | null;
    get_cells(): GLib.List;
    reorder(cell: CellRenderer, position: number): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): GLib.List;
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
}
export module UIManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        add_tearoffs: boolean;
        ui: string;
    }
}
export class UIManager extends GObject.Object implements Buildable {
    constructor(properties?: Partial<UIManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UIManager.ConstructorProperties>, ...args: any[]): void;
    // Properties
    add_tearoffs: boolean;
    ui: string;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'actions-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'actions-changed', callback: (_source: this) => void): number;
    emit(signal: 'actions-changed'): void;
    connect(signal: 'add-widget', callback: (_source: this, widget: Widget) => void): number;
    connect_after(signal: 'add-widget', callback: (_source: this, widget: Widget) => void): number;
    emit(signal: 'add-widget', widget: Widget): void;
    connect(signal: 'connect-proxy', callback: (_source: this, action: Action, proxy: Widget) => void): number;
    connect_after(signal: 'connect-proxy', callback: (_source: this, action: Action, proxy: Widget) => void): number;
    emit(signal: 'connect-proxy', action: Action, proxy: Widget): void;
    connect(signal: 'disconnect-proxy', callback: (_source: this, action: Action, proxy: Widget) => void): number;
    connect_after(signal: 'disconnect-proxy', callback: (_source: this, action: Action, proxy: Widget) => void): number;
    emit(signal: 'disconnect-proxy', action: Action, proxy: Widget): void;
    connect(signal: 'post-activate', callback: (_source: this, action: Action) => void): number;
    connect_after(signal: 'post-activate', callback: (_source: this, action: Action) => void): number;
    emit(signal: 'post-activate', action: Action): void;
    connect(signal: 'pre-activate', callback: (_source: this, action: Action) => void): number;
    connect_after(signal: 'pre-activate', callback: (_source: this, action: Action) => void): number;
    emit(signal: 'pre-activate', action: Action): void;
    // Constructors
    static ["new"](): UIManager;
    // Members
    add_ui(merge_id: number, path: string, name: string, action: string | null, type: UIManagerItemType, top: boolean): void;
    add_ui_from_file(filename: string): number;
    add_ui_from_resource(resource_path: string): number;
    add_ui_from_string(buffer: string, length: number): number;
    ensure_update(): void;
    get_accel_group(): AccelGroup;
    get_action(path: string): Action;
    get_action_groups(): GLib.List;
    get_add_tearoffs(): boolean;
    get_toplevels(types: UIManagerItemType): GLib.SList;
    get_ui(): string;
    get_widget(path: string): Widget;
    insert_action_group(action_group: ActionGroup, pos: number): void;
    new_merge_id(): number;
    remove_action_group(action_group: ActionGroup): void;
    remove_ui(merge_id: number): void;
    set_add_tearoffs(add_tearoffs: boolean): void;
    vfunc_actions_changed(): void;
    vfunc_add_widget(widget: Widget): void;
    vfunc_connect_proxy(action: Action, proxy: Widget): void;
    vfunc_disconnect_proxy(action: Action, proxy: Widget): void;
    vfunc_get_action(path: string): Action;
    vfunc_get_widget(path: string): Widget;
    vfunc_post_activate(action: Action): void;
    vfunc_pre_activate(action: Action): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}
export module VBox {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
    }
}
export class VBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<VBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VBox.ConstructorProperties>, ...args: any[]): void;
    // Fields
    box: Box;
    // Constructors
    static ["new"](homogeneous: boolean, spacing: number): VBox;
    static ["new"](...args: never[]): never;
}
export module VButtonBox {
    export interface ConstructorProperties extends ButtonBox.ConstructorProperties {
        [key: string]: any;
    }
}
export class VButtonBox extends ButtonBox implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<VButtonBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VButtonBox.ConstructorProperties>, ...args: any[]): void;
    // Fields
    button_box: ButtonBox;
    // Constructors
    static ["new"](): VButtonBox;
    static ["new"](...args: never[]): never;
}
export module VPaned {
    export interface ConstructorProperties extends Paned.ConstructorProperties {
        [key: string]: any;
    }
}
export class VPaned extends Paned implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<VPaned.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VPaned.ConstructorProperties>, ...args: any[]): void;
    // Fields
    paned: Paned;
    // Constructors
    static ["new"](): VPaned;
    static ["new"](...args: never[]): never;
}
export module VScale {
    export interface ConstructorProperties extends Scale.ConstructorProperties {
        [key: string]: any;
    }
}
export class VScale extends Scale implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<VScale.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VScale.ConstructorProperties>, ...args: any[]): void;
    // Fields
    scale: Scale;
    // Constructors
    static ["new"](adjustment: Adjustment): VScale;
    static ["new"](...args: never[]): never;
    static new_with_range(min: number, max: number, step: number): VScale;
    static new_with_range(...args: never[]): never;
}
export module VScrollbar {
    export interface ConstructorProperties extends Scrollbar.ConstructorProperties {
        [key: string]: any;
    }
}
export class VScrollbar extends Scrollbar implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<VScrollbar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VScrollbar.ConstructorProperties>, ...args: any[]): void;
    // Fields
    scrollbar: Scrollbar;
    // Constructors
    static ["new"](adjustment: Adjustment | null): VScrollbar;
    static ["new"](...args: never[]): never;
}
export module VSeparator {
    export interface ConstructorProperties extends Separator.ConstructorProperties {
        [key: string]: any;
    }
}
export class VSeparator extends Separator implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(properties?: Partial<VSeparator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VSeparator.ConstructorProperties>, ...args: any[]): void;
    // Fields
    separator: Separator;
    // Constructors
    static ["new"](): VSeparator;
    static ["new"](...args: never[]): never;
}
export module Viewport {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        shadow_type: ShadowType;
    }
}
export class Viewport extends Bin implements Atk.ImplementorIface, Buildable, Scrollable {
    constructor(properties?: Partial<Viewport.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Viewport.ConstructorProperties>, ...args: any[]): void;
    // Properties
    shadow_type: ShadowType;
    // Fields
    bin: Bin;
    // Implemented Properties
    hadjustment: Adjustment;
    hscroll_policy: ScrollablePolicy;
    vadjustment: Adjustment;
    vscroll_policy: ScrollablePolicy;
    // Constructors
    static ["new"](hadjustment: Adjustment | null, vadjustment: Adjustment | null): Viewport;
    // Members
    get_bin_window(): Gdk.Window;
    get_hadjustment(): Adjustment;
    get_shadow_type(): ShadowType;
    get_vadjustment(): Adjustment;
    get_view_window(): Gdk.Window;
    set_hadjustment(adjustment: Adjustment | null): void;
    set_shadow_type(type: ShadowType): void;
    set_vadjustment(adjustment: Adjustment | null): void;
    // Implemented Members
    get_border(): [boolean, Border];
    get_hscroll_policy(): ScrollablePolicy;
    get_vscroll_policy(): ScrollablePolicy;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module VolumeButton {
    export interface ConstructorProperties extends ScaleButton.ConstructorProperties {
        [key: string]: any;
        use_symbolic: boolean;
    }
}
export class VolumeButton extends ScaleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable, Orientable {
    constructor(properties?: Partial<VolumeButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VolumeButton.ConstructorProperties>, ...args: any[]): void;
    // Properties
    use_symbolic: boolean;
    // Constructors
    static ["new"](): VolumeButton;
    static ["new"](...args: never[]): never;
}
export module Widget {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        app_paintable: boolean;
        can_default: boolean;
        can_focus: boolean;
        composite_child: boolean;
        double_buffered: boolean;
        events: Gdk.EventMask;
        expand: boolean;
        focus_on_click: boolean;
        halign: Align;
        has_default: boolean;
        has_focus: boolean;
        has_tooltip: boolean;
        height_request: number;
        hexpand: boolean;
        hexpand_set: boolean;
        is_focus: boolean;
        margin: number;
        margin_bottom: number;
        margin_end: number;
        margin_left: number;
        margin_right: number;
        margin_start: number;
        margin_top: number;
        name: string;
        no_show_all: boolean;
        opacity: number;
        receives_default: boolean;
        scale_factor: number;
        sensitive: boolean;
        style: Style;
        tooltip_markup: string;
        tooltip_text: string;
        valign: Align;
        vexpand: boolean;
        vexpand_set: boolean;
        visible: boolean;
        width_request: number;
        window: Gdk.Window;
    }
}
export abstract class Widget extends GObject.InitiallyUnowned implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Widget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Widget.ConstructorProperties>, ...args: any[]): void;
    // Properties
    app_paintable: boolean;
    can_default: boolean;
    can_focus: boolean;
    composite_child: boolean;
    double_buffered: boolean;
    events: Gdk.EventMask;
    expand: boolean;
    focus_on_click: boolean;
    halign: Align;
    has_default: boolean;
    has_focus: boolean;
    has_tooltip: boolean;
    height_request: number;
    hexpand: boolean;
    hexpand_set: boolean;
    is_focus: boolean;
    margin: number;
    margin_bottom: number;
    margin_end: number;
    margin_left: number;
    margin_right: number;
    margin_start: number;
    margin_top: number;
    name: string;
    no_show_all: boolean;
    opacity: number;
    receives_default: boolean;
    scale_factor: number;
    sensitive: boolean;
    style: Style;
    tooltip_markup: string;
    tooltip_text: string;
    valign: Align;
    vexpand: boolean;
    vexpand_set: boolean;
    visible: boolean;
    width_request: number;
    window: Gdk.Window;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'accel-closures-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'accel-closures-changed', callback: (_source: this) => void): number;
    emit(signal: 'accel-closures-changed'): void;
    connect(signal: 'button-press-event', callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    connect_after(signal: 'button-press-event', callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    emit(signal: 'button-press-event', event: Gdk.EventButton): void;
    connect(signal: 'button-release-event', callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    connect_after(signal: 'button-release-event', callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    emit(signal: 'button-release-event', event: Gdk.EventButton): void;
    connect(signal: 'can-activate-accel', callback: (_source: this, signal_id: number) => boolean): number;
    connect_after(signal: 'can-activate-accel', callback: (_source: this, signal_id: number) => boolean): number;
    emit(signal: 'can-activate-accel', signal_id: number): void;
    connect(signal: 'child-notify', callback: (_source: this, child_property: GObject.ParamSpec) => void): number;
    connect_after(signal: 'child-notify', callback: (_source: this, child_property: GObject.ParamSpec) => void): number;
    emit(signal: 'child-notify', child_property: GObject.ParamSpec): void;
    connect(signal: 'composited-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'composited-changed', callback: (_source: this) => void): number;
    emit(signal: 'composited-changed'): void;
    connect(signal: 'configure-event', callback: (_source: this, event: Gdk.EventConfigure) => boolean): number;
    connect_after(signal: 'configure-event', callback: (_source: this, event: Gdk.EventConfigure) => boolean): number;
    emit(signal: 'configure-event', event: Gdk.EventConfigure): void;
    connect(signal: 'damage-event', callback: (_source: this, event: Gdk.EventExpose) => boolean): number;
    connect_after(signal: 'damage-event', callback: (_source: this, event: Gdk.EventExpose) => boolean): number;
    emit(signal: 'damage-event', event: Gdk.EventExpose): void;
    connect(signal: 'delete-event', callback: (_source: this, event: Gdk.Event) => boolean): number;
    connect_after(signal: 'delete-event', callback: (_source: this, event: Gdk.Event) => boolean): number;
    emit(signal: 'delete-event', event: Gdk.Event): void;
    connect(signal: 'destroy', callback: (_source: this) => void): number;
    connect_after(signal: 'destroy', callback: (_source: this) => void): number;
    emit(signal: 'destroy'): void;
    connect(signal: 'destroy-event', callback: (_source: this, event: Gdk.Event) => boolean): number;
    connect_after(signal: 'destroy-event', callback: (_source: this, event: Gdk.Event) => boolean): number;
    emit(signal: 'destroy-event', event: Gdk.Event): void;
    connect(signal: 'direction-changed', callback: (_source: this, previous_direction: TextDirection) => void): number;
    connect_after(signal: 'direction-changed', callback: (_source: this, previous_direction: TextDirection) => void): number;
    emit(signal: 'direction-changed', previous_direction: TextDirection): void;
    connect(signal: 'drag-begin', callback: (_source: this, context: Gdk.DragContext) => void): number;
    connect_after(signal: 'drag-begin', callback: (_source: this, context: Gdk.DragContext) => void): number;
    emit(signal: 'drag-begin', context: Gdk.DragContext): void;
    connect(signal: 'drag-data-delete', callback: (_source: this, context: Gdk.DragContext) => void): number;
    connect_after(signal: 'drag-data-delete', callback: (_source: this, context: Gdk.DragContext) => void): number;
    emit(signal: 'drag-data-delete', context: Gdk.DragContext): void;
    connect(signal: 'drag-data-get', callback: (_source: this, context: Gdk.DragContext, data: SelectionData, info: number, time: number) => void): number;
    connect_after(signal: 'drag-data-get', callback: (_source: this, context: Gdk.DragContext, data: SelectionData, info: number, time: number) => void): number;
    emit(signal: 'drag-data-get', context: Gdk.DragContext, data: SelectionData, info: number, time: number): void;
    connect(signal: 'drag-data-received', callback: (_source: this, context: Gdk.DragContext, x: number, y: number, data: SelectionData, info: number, time: number) => void): number;
    connect_after(signal: 'drag-data-received', callback: (_source: this, context: Gdk.DragContext, x: number, y: number, data: SelectionData, info: number, time: number) => void): number;
    emit(signal: 'drag-data-received', context: Gdk.DragContext, x: number, y: number, data: SelectionData, info: number, time: number): void;
    connect(signal: 'drag-drop', callback: (_source: this, context: Gdk.DragContext, x: number, y: number, time: number) => boolean): number;
    connect_after(signal: 'drag-drop', callback: (_source: this, context: Gdk.DragContext, x: number, y: number, time: number) => boolean): number;
    emit(signal: 'drag-drop', context: Gdk.DragContext, x: number, y: number, time: number): void;
    connect(signal: 'drag-end', callback: (_source: this, context: Gdk.DragContext) => void): number;
    connect_after(signal: 'drag-end', callback: (_source: this, context: Gdk.DragContext) => void): number;
    emit(signal: 'drag-end', context: Gdk.DragContext): void;
    connect(signal: 'drag-failed', callback: (_source: this, context: Gdk.DragContext, result: DragResult) => boolean): number;
    connect_after(signal: 'drag-failed', callback: (_source: this, context: Gdk.DragContext, result: DragResult) => boolean): number;
    emit(signal: 'drag-failed', context: Gdk.DragContext, result: DragResult): void;
    connect(signal: 'drag-leave', callback: (_source: this, context: Gdk.DragContext, time: number) => void): number;
    connect_after(signal: 'drag-leave', callback: (_source: this, context: Gdk.DragContext, time: number) => void): number;
    emit(signal: 'drag-leave', context: Gdk.DragContext, time: number): void;
    connect(signal: 'drag-motion', callback: (_source: this, context: Gdk.DragContext, x: number, y: number, time: number) => boolean): number;
    connect_after(signal: 'drag-motion', callback: (_source: this, context: Gdk.DragContext, x: number, y: number, time: number) => boolean): number;
    emit(signal: 'drag-motion', context: Gdk.DragContext, x: number, y: number, time: number): void;
    connect(signal: 'draw', callback: (_source: this, cr: cairo.Context) => boolean): number;
    connect_after(signal: 'draw', callback: (_source: this, cr: cairo.Context) => boolean): number;
    emit(signal: 'draw', cr: cairo.Context): void;
    connect(signal: 'enter-notify-event', callback: (_source: this, event: Gdk.EventCrossing) => boolean): number;
    connect_after(signal: 'enter-notify-event', callback: (_source: this, event: Gdk.EventCrossing) => boolean): number;
    emit(signal: 'enter-notify-event', event: Gdk.EventCrossing): void;
    connect(signal: 'event', callback: (_source: this, event: Gdk.Event) => boolean): number;
    connect_after(signal: 'event', callback: (_source: this, event: Gdk.Event) => boolean): number;
    emit(signal: 'event', event: Gdk.Event): void;
    connect(signal: 'event-after', callback: (_source: this, event: Gdk.Event) => void): number;
    connect_after(signal: 'event-after', callback: (_source: this, event: Gdk.Event) => void): number;
    emit(signal: 'event-after', event: Gdk.Event): void;
    connect(signal: 'focus', callback: (_source: this, direction: DirectionType) => boolean): number;
    connect_after(signal: 'focus', callback: (_source: this, direction: DirectionType) => boolean): number;
    emit(signal: 'focus', direction: DirectionType): void;
    connect(signal: 'focus-in-event', callback: (_source: this, event: Gdk.EventFocus) => boolean): number;
    connect_after(signal: 'focus-in-event', callback: (_source: this, event: Gdk.EventFocus) => boolean): number;
    emit(signal: 'focus-in-event', event: Gdk.EventFocus): void;
    connect(signal: 'focus-out-event', callback: (_source: this, event: Gdk.EventFocus) => boolean): number;
    connect_after(signal: 'focus-out-event', callback: (_source: this, event: Gdk.EventFocus) => boolean): number;
    emit(signal: 'focus-out-event', event: Gdk.EventFocus): void;
    connect(signal: 'grab-broken-event', callback: (_source: this, event: Gdk.EventGrabBroken) => boolean): number;
    connect_after(signal: 'grab-broken-event', callback: (_source: this, event: Gdk.EventGrabBroken) => boolean): number;
    emit(signal: 'grab-broken-event', event: Gdk.EventGrabBroken): void;
    connect(signal: 'grab-focus', callback: (_source: this) => void): number;
    connect_after(signal: 'grab-focus', callback: (_source: this) => void): number;
    emit(signal: 'grab-focus'): void;
    connect(signal: 'grab-notify', callback: (_source: this, was_grabbed: boolean) => void): number;
    connect_after(signal: 'grab-notify', callback: (_source: this, was_grabbed: boolean) => void): number;
    emit(signal: 'grab-notify', was_grabbed: boolean): void;
    connect(signal: 'hide', callback: (_source: this) => void): number;
    connect_after(signal: 'hide', callback: (_source: this) => void): number;
    emit(signal: 'hide'): void;
    connect(signal: 'hierarchy-changed', callback: (_source: this, previous_toplevel: Widget | null) => void): number;
    connect_after(signal: 'hierarchy-changed', callback: (_source: this, previous_toplevel: Widget | null) => void): number;
    emit(signal: 'hierarchy-changed', previous_toplevel: Widget | null): void;
    connect(signal: 'key-press-event', callback: (_source: this, event: Gdk.EventKey) => boolean): number;
    connect_after(signal: 'key-press-event', callback: (_source: this, event: Gdk.EventKey) => boolean): number;
    emit(signal: 'key-press-event', event: Gdk.EventKey): void;
    connect(signal: 'key-release-event', callback: (_source: this, event: Gdk.EventKey) => boolean): number;
    connect_after(signal: 'key-release-event', callback: (_source: this, event: Gdk.EventKey) => boolean): number;
    emit(signal: 'key-release-event', event: Gdk.EventKey): void;
    connect(signal: 'keynav-failed', callback: (_source: this, direction: DirectionType) => boolean): number;
    connect_after(signal: 'keynav-failed', callback: (_source: this, direction: DirectionType) => boolean): number;
    emit(signal: 'keynav-failed', direction: DirectionType): void;
    connect(signal: 'leave-notify-event', callback: (_source: this, event: Gdk.EventCrossing) => boolean): number;
    connect_after(signal: 'leave-notify-event', callback: (_source: this, event: Gdk.EventCrossing) => boolean): number;
    emit(signal: 'leave-notify-event', event: Gdk.EventCrossing): void;
    connect(signal: 'map', callback: (_source: this) => void): number;
    connect_after(signal: 'map', callback: (_source: this) => void): number;
    emit(signal: 'map'): void;
    connect(signal: 'map-event', callback: (_source: this, event: Gdk.EventAny) => boolean): number;
    connect_after(signal: 'map-event', callback: (_source: this, event: Gdk.EventAny) => boolean): number;
    emit(signal: 'map-event', event: Gdk.EventAny): void;
    connect(signal: 'mnemonic-activate', callback: (_source: this, group_cycling: boolean) => boolean): number;
    connect_after(signal: 'mnemonic-activate', callback: (_source: this, group_cycling: boolean) => boolean): number;
    emit(signal: 'mnemonic-activate', group_cycling: boolean): void;
    connect(signal: 'motion-notify-event', callback: (_source: this, event: Gdk.EventMotion) => boolean): number;
    connect_after(signal: 'motion-notify-event', callback: (_source: this, event: Gdk.EventMotion) => boolean): number;
    emit(signal: 'motion-notify-event', event: Gdk.EventMotion): void;
    connect(signal: 'move-focus', callback: (_source: this, direction: DirectionType) => void): number;
    connect_after(signal: 'move-focus', callback: (_source: this, direction: DirectionType) => void): number;
    emit(signal: 'move-focus', direction: DirectionType): void;
    connect(signal: 'parent-set', callback: (_source: this, old_parent: Widget | null) => void): number;
    connect_after(signal: 'parent-set', callback: (_source: this, old_parent: Widget | null) => void): number;
    emit(signal: 'parent-set', old_parent: Widget | null): void;
    connect(signal: 'popup-menu', callback: (_source: this) => boolean): number;
    connect_after(signal: 'popup-menu', callback: (_source: this) => boolean): number;
    emit(signal: 'popup-menu'): void;
    connect(signal: 'property-notify-event', callback: (_source: this, event: Gdk.EventProperty) => boolean): number;
    connect_after(signal: 'property-notify-event', callback: (_source: this, event: Gdk.EventProperty) => boolean): number;
    emit(signal: 'property-notify-event', event: Gdk.EventProperty): void;
    connect(signal: 'proximity-in-event', callback: (_source: this, event: Gdk.EventProximity) => boolean): number;
    connect_after(signal: 'proximity-in-event', callback: (_source: this, event: Gdk.EventProximity) => boolean): number;
    emit(signal: 'proximity-in-event', event: Gdk.EventProximity): void;
    connect(signal: 'proximity-out-event', callback: (_source: this, event: Gdk.EventProximity) => boolean): number;
    connect_after(signal: 'proximity-out-event', callback: (_source: this, event: Gdk.EventProximity) => boolean): number;
    emit(signal: 'proximity-out-event', event: Gdk.EventProximity): void;
    connect(signal: 'query-tooltip', callback: (_source: this, x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip) => boolean): number;
    connect_after(signal: 'query-tooltip', callback: (_source: this, x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip) => boolean): number;
    emit(signal: 'query-tooltip', x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip): void;
    connect(signal: 'realize', callback: (_source: this) => void): number;
    connect_after(signal: 'realize', callback: (_source: this) => void): number;
    emit(signal: 'realize'): void;
    connect(signal: 'screen-changed', callback: (_source: this, previous_screen: Gdk.Screen | null) => void): number;
    connect_after(signal: 'screen-changed', callback: (_source: this, previous_screen: Gdk.Screen | null) => void): number;
    emit(signal: 'screen-changed', previous_screen: Gdk.Screen | null): void;
    connect(signal: 'scroll-event', callback: (_source: this, event: Gdk.EventScroll) => boolean): number;
    connect_after(signal: 'scroll-event', callback: (_source: this, event: Gdk.EventScroll) => boolean): number;
    emit(signal: 'scroll-event', event: Gdk.EventScroll): void;
    connect(signal: 'selection-clear-event', callback: (_source: this, event: Gdk.EventSelection) => boolean): number;
    connect_after(signal: 'selection-clear-event', callback: (_source: this, event: Gdk.EventSelection) => boolean): number;
    emit(signal: 'selection-clear-event', event: Gdk.EventSelection): void;
    connect(signal: 'selection-get', callback: (_source: this, data: SelectionData, info: number, time: number) => void): number;
    connect_after(signal: 'selection-get', callback: (_source: this, data: SelectionData, info: number, time: number) => void): number;
    emit(signal: 'selection-get', data: SelectionData, info: number, time: number): void;
    connect(signal: 'selection-notify-event', callback: (_source: this, event: Gdk.EventSelection) => boolean): number;
    connect_after(signal: 'selection-notify-event', callback: (_source: this, event: Gdk.EventSelection) => boolean): number;
    emit(signal: 'selection-notify-event', event: Gdk.EventSelection): void;
    connect(signal: 'selection-received', callback: (_source: this, data: SelectionData, time: number) => void): number;
    connect_after(signal: 'selection-received', callback: (_source: this, data: SelectionData, time: number) => void): number;
    emit(signal: 'selection-received', data: SelectionData, time: number): void;
    connect(signal: 'selection-request-event', callback: (_source: this, event: Gdk.EventSelection) => boolean): number;
    connect_after(signal: 'selection-request-event', callback: (_source: this, event: Gdk.EventSelection) => boolean): number;
    emit(signal: 'selection-request-event', event: Gdk.EventSelection): void;
    connect(signal: 'show', callback: (_source: this) => void): number;
    connect_after(signal: 'show', callback: (_source: this) => void): number;
    emit(signal: 'show'): void;
    connect(signal: 'show-help', callback: (_source: this, help_type: WidgetHelpType) => boolean): number;
    connect_after(signal: 'show-help', callback: (_source: this, help_type: WidgetHelpType) => boolean): number;
    emit(signal: 'show-help', help_type: WidgetHelpType): void;
    connect(signal: 'size-allocate', callback: (_source: this, allocation: Allocation) => void): number;
    connect_after(signal: 'size-allocate', callback: (_source: this, allocation: Allocation) => void): number;
    emit(signal: 'size-allocate', allocation: Allocation): void;
    connect(signal: 'state-changed', callback: (_source: this, state: StateType) => void): number;
    connect_after(signal: 'state-changed', callback: (_source: this, state: StateType) => void): number;
    emit(signal: 'state-changed', state: StateType): void;
    connect(signal: 'state-flags-changed', callback: (_source: this, flags: StateFlags) => void): number;
    connect_after(signal: 'state-flags-changed', callback: (_source: this, flags: StateFlags) => void): number;
    emit(signal: 'state-flags-changed', flags: StateFlags): void;
    connect(signal: 'style-set', callback: (_source: this, previous_style: Style | null) => void): number;
    connect_after(signal: 'style-set', callback: (_source: this, previous_style: Style | null) => void): number;
    emit(signal: 'style-set', previous_style: Style | null): void;
    connect(signal: 'style-updated', callback: (_source: this) => void): number;
    connect_after(signal: 'style-updated', callback: (_source: this) => void): number;
    emit(signal: 'style-updated'): void;
    connect(signal: 'touch-event', callback: (_source: this, object: Gdk.Event) => boolean): number;
    connect_after(signal: 'touch-event', callback: (_source: this, object: Gdk.Event) => boolean): number;
    emit(signal: 'touch-event', object: Gdk.Event): void;
    connect(signal: 'unmap', callback: (_source: this) => void): number;
    connect_after(signal: 'unmap', callback: (_source: this) => void): number;
    emit(signal: 'unmap'): void;
    connect(signal: 'unmap-event', callback: (_source: this, event: Gdk.EventAny) => boolean): number;
    connect_after(signal: 'unmap-event', callback: (_source: this, event: Gdk.EventAny) => boolean): number;
    emit(signal: 'unmap-event', event: Gdk.EventAny): void;
    connect(signal: 'unrealize', callback: (_source: this) => void): number;
    connect_after(signal: 'unrealize', callback: (_source: this) => void): number;
    emit(signal: 'unrealize'): void;
    connect(signal: 'visibility-notify-event', callback: (_source: this, event: Gdk.EventVisibility) => boolean): number;
    connect_after(signal: 'visibility-notify-event', callback: (_source: this, event: Gdk.EventVisibility) => boolean): number;
    emit(signal: 'visibility-notify-event', event: Gdk.EventVisibility): void;
    connect(signal: 'window-state-event', callback: (_source: this, event: Gdk.EventWindowState) => boolean): number;
    connect_after(signal: 'window-state-event', callback: (_source: this, event: Gdk.EventWindowState) => boolean): number;
    emit(signal: 'window-state-event', event: Gdk.EventWindowState): void;
    // Members
    activate(): boolean;
    add_accelerator(accel_signal: string, accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags): void;
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
    add_events(events: number): void;
    add_mnemonic_label(label: Widget): void;
    add_tick_callback(callback: TickCallback, notify: GLib.DestroyNotify): number;
    can_activate_accel(signal_id: number): boolean;
    child_focus(direction: DirectionType): boolean;
    child_notify(child_property: string): void;
    class_path(): [number | null, string | null, string | null];
    compute_expand(orientation: Orientation): boolean;
    create_pango_context(): Pango.Context;
    create_pango_layout(text: string | null): Pango.Layout;
    destroy(): void;
    destroyed(widget_pointer: Widget): Widget;
    device_is_shadowed(device: Gdk.Device): boolean;
    drag_begin(targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null): Gdk.DragContext;
    drag_begin_with_coordinates(targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext;
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
    drag_dest_add_image_targets(): void;
    drag_dest_add_text_targets(): void;
    drag_dest_add_uri_targets(): void;
    drag_dest_find_target(context: Gdk.DragContext, target_list: TargetList | null): Gdk.Atom;
    drag_dest_get_target_list(): TargetList | null;
    drag_dest_get_track_motion(): boolean;
    drag_dest_set(flags: DestDefaults, targets: TargetEntry[] | null, actions: Gdk.DragAction): void;
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void;
    drag_dest_set_target_list(target_list: TargetList | null): void;
    drag_dest_set_track_motion(track_motion: boolean): void;
    drag_dest_unset(): void;
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
    drag_highlight(): void;
    drag_source_add_image_targets(): void;
    drag_source_add_text_targets(): void;
    drag_source_add_uri_targets(): void;
    drag_source_get_target_list(): TargetList | null;
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: TargetEntry[] | null, actions: Gdk.DragAction): void;
    drag_source_set_icon_gicon(icon: Gio.Icon): void;
    drag_source_set_icon_name(icon_name: string): void;
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    drag_source_set_icon_stock(stock_id: string): void;
    drag_source_set_target_list(target_list: TargetList | null): void;
    drag_source_unset(): void;
    drag_unhighlight(): void;
    draw(cr: cairo.Context): void;
    ensure_style(): void;
    error_bell(): void;
    event(event: Gdk.Event): boolean;
    freeze_child_notify(): void;
    get_accessible(): Atk.Object;
    get_action_group(prefix: string): Gio.ActionGroup | null;
    get_allocated_baseline(): number;
    get_allocated_height(): number;
    get_allocated_size(): [Allocation, number | null];
    get_allocated_width(): number;
    get_allocation(): Allocation;
    get_ancestor(widget_type: GType): Widget | null;
    get_app_paintable(): boolean;
    get_can_default(): boolean;
    get_can_focus(): boolean;
    get_child_requisition(): Requisition;
    get_child_visible(): boolean;
    get_clip(): Allocation;
    get_clipboard(selection: Gdk.Atom): Clipboard;
    get_composite_name(): string;
    get_device_enabled(device: Gdk.Device): boolean;
    get_device_events(device: Gdk.Device): Gdk.EventMask;
    get_direction(): TextDirection;
    get_display(): Gdk.Display;
    get_double_buffered(): boolean;
    get_events(): number;
    get_focus_on_click(): boolean;
    get_font_map(): Pango.FontMap | null;
    get_font_options(): cairo.FontOptions | null;
    get_frame_clock(): Gdk.FrameClock | null;
    get_halign(): Align;
    get_has_tooltip(): boolean;
    get_has_window(): boolean;
    get_hexpand(): boolean;
    get_hexpand_set(): boolean;
    get_mapped(): boolean;
    get_margin_bottom(): number;
    get_margin_end(): number;
    get_margin_left(): number;
    get_margin_right(): number;
    get_margin_start(): number;
    get_margin_top(): number;
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType;
    get_modifier_style(): RcStyle;
    get_name(): string;
    get_no_show_all(): boolean;
    get_opacity(): number;
    get_pango_context(): Pango.Context;
    get_parent(): Widget | null;
    get_parent_window(): Gdk.Window | null;
    get_path(): WidgetPath;
    get_pointer(): [number | null, number | null];
    get_preferred_height(): [number | null, number | null];
    get_preferred_height_and_baseline_for_width(width: number): [number | null, number | null, number | null, number | null];
    get_preferred_height_for_width(width: number): [number | null, number | null];
    get_preferred_size(): [Requisition | null, Requisition | null];
    get_preferred_width(): [number | null, number | null];
    get_preferred_width_for_height(height: number): [number | null, number | null];
    get_realized(): boolean;
    get_receives_default(): boolean;
    get_request_mode(): SizeRequestMode;
    get_requisition(): Requisition;
    get_root_window(): Gdk.Window;
    get_scale_factor(): number;
    get_screen(): Gdk.Screen;
    get_sensitive(): boolean;
    get_settings(): Settings;
    get_size_request(): [number | null, number | null];
    get_state(): StateType;
    get_state_flags(): StateFlags;
    get_style(): Style;
    get_style_context(): StyleContext;
    get_support_multidevice(): boolean;
    get_template_child<T = GObject.Object>(widget_type: GType, name: string): T;
    get_tooltip_markup(): string | null;
    get_tooltip_text(): string | null;
    get_tooltip_window(): Window;
    get_toplevel(): Widget;
    get_valign(): Align;
    get_valign_with_baseline(): Align;
    get_vexpand(): boolean;
    get_vexpand_set(): boolean;
    get_visible(): boolean;
    get_visual(): Gdk.Visual;
    get_window(): Gdk.Window | null;
    grab_add(): void;
    grab_default(): void;
    grab_focus(): void;
    grab_remove(): void;
    has_grab(): boolean;
    has_rc_style(): boolean;
    has_screen(): boolean;
    has_visible_focus(): boolean;
    hide(): void;
    hide_on_delete(): boolean;
    in_destruction(): boolean;
    init_template(): void;
    input_shape_combine_region(region: cairo.Region | null): void;
    insert_action_group(name: string, group: Gio.ActionGroup | null): void;
    intersect(area: Gdk.Rectangle): [boolean, Gdk.Rectangle | null];
    is_ancestor(ancestor: Widget): boolean;
    is_composited(): boolean;
    is_drawable(): boolean;
    is_sensitive(): boolean;
    is_toplevel(): boolean;
    is_visible(): boolean;
    keynav_failed(direction: DirectionType): boolean;
    list_accel_closures(): GLib.List;
    list_action_prefixes(): string[];
    list_mnemonic_labels(): GLib.List;
    map(): void;
    mnemonic_activate(group_cycling: boolean): boolean;
    modify_base(state: StateType, color: Gdk.Color | null): void;
    modify_bg(state: StateType, color: Gdk.Color | null): void;
    modify_cursor(primary: Gdk.Color | null, secondary: Gdk.Color | null): void;
    modify_fg(state: StateType, color: Gdk.Color | null): void;
    modify_font(font_desc: Pango.FontDescription | null): void;
    modify_style(style: RcStyle): void;
    modify_text(state: StateType, color: Gdk.Color | null): void;
    override_background_color(state: StateFlags, color: Gdk.RGBA | null): void;
    override_color(state: StateFlags, color: Gdk.RGBA | null): void;
    override_cursor(cursor: Gdk.RGBA | null, secondary_cursor: Gdk.RGBA | null): void;
    override_font(font_desc: Pango.FontDescription | null): void;
    override_symbolic_color(name: string, color: Gdk.RGBA | null): void;
    path(): [number | null, string | null, string | null];
    queue_allocate(): void;
    queue_compute_expand(): void;
    queue_draw(): void;
    queue_draw_area(x: number, y: number, width: number, height: number): void;
    queue_draw_region(region: cairo.Region): void;
    queue_resize(): void;
    queue_resize_no_redraw(): void;
    realize(): void;
    region_intersect(region: cairo.Region): cairo.Region;
    register_window(window: Gdk.Window): void;
    remove_accelerator(accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
    remove_mnemonic_label(label: Widget): void;
    remove_tick_callback(id: number): void;
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf | null;
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null;
    reparent(new_parent: Widget): void;
    reset_rc_styles(): void;
    reset_style(): void;
    send_expose(event: Gdk.Event): number;
    send_focus_change(event: Gdk.Event): boolean;
    set_accel_path(accel_path: string | null, accel_group: AccelGroup | null): void;
    set_allocation(allocation: Allocation): void;
    set_app_paintable(app_paintable: boolean): void;
    set_can_default(can_default: boolean): void;
    set_can_focus(can_focus: boolean): void;
    set_child_visible(is_visible: boolean): void;
    set_clip(clip: Allocation): void;
    set_composite_name(name: string): void;
    set_device_enabled(device: Gdk.Device, enabled: boolean): void;
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
    set_direction(dir: TextDirection): void;
    set_double_buffered(double_buffered: boolean): void;
    set_events(events: number): void;
    set_focus_on_click(focus_on_click: boolean): void;
    set_font_map(font_map: Pango.FontMap | null): void;
    set_font_options(options: cairo.FontOptions | null): void;
    set_halign(align: Align): void;
    set_has_tooltip(has_tooltip: boolean): void;
    set_has_window(has_window: boolean): void;
    set_hexpand(expand: boolean): void;
    set_hexpand_set(set: boolean): void;
    set_mapped(mapped: boolean): void;
    set_margin_bottom(margin: number): void;
    set_margin_end(margin: number): void;
    set_margin_left(margin: number): void;
    set_margin_right(margin: number): void;
    set_margin_start(margin: number): void;
    set_margin_top(margin: number): void;
    set_name(name: string): void;
    set_no_show_all(no_show_all: boolean): void;
    set_opacity(opacity: number): void;
    set_parent(parent: Widget): void;
    set_parent_window(parent_window: Gdk.Window): void;
    set_realized(realized: boolean): void;
    set_receives_default(receives_default: boolean): void;
    set_redraw_on_allocate(redraw_on_allocate: boolean): void;
    set_sensitive(sensitive: boolean): void;
    set_size_request(width: number, height: number): void;
    set_state(state: StateType): void;
    set_state_flags(flags: StateFlags, clear: boolean): void;
    set_style(style: Style | null): void;
    set_support_multidevice(support_multidevice: boolean): void;
    set_tooltip_markup(markup: string | null): void;
    set_tooltip_text(text: string | null): void;
    set_tooltip_window(custom_window: Window | null): void;
    set_valign(align: Align): void;
    set_vexpand(expand: boolean): void;
    set_vexpand_set(set: boolean): void;
    set_visible(visible: boolean): void;
    set_visual(visual: Gdk.Visual | null): void;
    set_window(window: Gdk.Window): void;
    shape_combine_region(region: cairo.Region | null): void;
    show(): void;
    show_all(): void;
    show_now(): void;
    size_allocate(allocation: Allocation): void;
    size_allocate_with_baseline(allocation: Allocation, baseline: number): void;
    size_request(): Requisition;
    style_attach(): void;
    style_get_property(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    thaw_child_notify(): void;
    translate_coordinates(dest_widget: Widget, src_x: number, src_y: number): [boolean, number | null, number | null];
    trigger_tooltip_query(): void;
    unmap(): void;
    unparent(): void;
    unrealize(): void;
    unregister_window(window: Gdk.Window): void;
    unset_state_flags(flags: StateFlags): void;
    vfunc_adjust_baseline_allocation(baseline: number): void;
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void;
    vfunc_adjust_size_allocation(orientation: Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void;
    vfunc_adjust_size_request(orientation: Orientation, minimum_size: number, natural_size: number): void;
    vfunc_button_press_event(event: Gdk.EventButton): boolean;
    vfunc_button_release_event(event: Gdk.EventButton): boolean;
    vfunc_can_activate_accel(signal_id: number): boolean;
    vfunc_child_notify(child_property: GObject.ParamSpec): void;
    vfunc_composited_changed(): void;
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
    vfunc_configure_event(event: Gdk.EventConfigure): boolean;
    vfunc_damage_event(event: Gdk.EventExpose): boolean;
    vfunc_delete_event(event: Gdk.EventAny): boolean;
    vfunc_destroy(): void;
    vfunc_destroy_event(event: Gdk.EventAny): boolean;
    vfunc_direction_changed(previous_direction: TextDirection): void;
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
    vfunc_drag_begin(context: Gdk.DragContext): void;
    vfunc_drag_data_delete(context: Gdk.DragContext): void;
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: SelectionData, info: number, time_: number): void;
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: SelectionData, info: number, time_: number): void;
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
    vfunc_drag_end(context: Gdk.DragContext): void;
    vfunc_drag_failed(context: Gdk.DragContext, result: DragResult): boolean;
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void;
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
    vfunc_draw(cr: cairo.Context): boolean;
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean;
    vfunc_event(event: Gdk.Event): boolean;
    vfunc_focus(direction: DirectionType): boolean;
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean;
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean;
    vfunc_get_accessible(): Atk.Object;
    vfunc_get_preferred_height(): [number | null, number | null];
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [number | null, number | null, number | null, number | null];
    vfunc_get_preferred_height_for_width(width: number): [number | null, number | null];
    vfunc_get_preferred_width(): [number | null, number | null];
    vfunc_get_preferred_width_for_height(height: number): [number | null, number | null];
    vfunc_get_request_mode(): SizeRequestMode;
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean;
    vfunc_grab_focus(): void;
    vfunc_grab_notify(was_grabbed: boolean): void;
    vfunc_hide(): void;
    vfunc_hierarchy_changed(previous_toplevel: Widget): void;
    vfunc_key_press_event(event: Gdk.EventKey): boolean;
    vfunc_key_release_event(event: Gdk.EventKey): boolean;
    vfunc_keynav_failed(direction: DirectionType): boolean;
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean;
    vfunc_map(): void;
    vfunc_map_event(event: Gdk.EventAny): boolean;
    vfunc_mnemonic_activate(group_cycling: boolean): boolean;
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean;
    vfunc_move_focus(direction: DirectionType): void;
    vfunc_parent_set(previous_parent: Widget): void;
    vfunc_popup_menu(): boolean;
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean;
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean;
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean;
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Tooltip): boolean;
    vfunc_queue_draw_region(region: cairo.Region): void;
    vfunc_realize(): void;
    vfunc_screen_changed(previous_screen: Gdk.Screen): void;
    vfunc_scroll_event(event: Gdk.EventScroll): boolean;
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean;
    vfunc_selection_get(selection_data: SelectionData, info: number, time_: number): void;
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean;
    vfunc_selection_received(selection_data: SelectionData, time_: number): void;
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean;
    vfunc_show(): void;
    vfunc_show_all(): void;
    vfunc_show_help(help_type: WidgetHelpType): boolean;
    vfunc_size_allocate(allocation: Allocation): void;
    vfunc_state_changed(previous_state: StateType): void;
    vfunc_state_flags_changed(previous_state_flags: StateFlags): void;
    vfunc_style_set(previous_style: Style): void;
    vfunc_style_updated(): void;
    vfunc_touch_event(event: Gdk.EventTouch): boolean;
    vfunc_unmap(): void;
    vfunc_unmap_event(event: Gdk.EventAny): boolean;
    vfunc_unrealize(): void;
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean;
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean;
    static get_default_direction(): TextDirection;
    static get_default_style(): Style;
    static pop_composite_child(): void;
    static push_composite_child(): void;
    static set_default_direction(dir: TextDirection): void;
    // Implemented Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}
export module WidgetAccessible {
    export interface ConstructorProperties extends Accessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class WidgetAccessible extends Accessible implements Atk.Component {
    constructor(properties?: Partial<WidgetAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WidgetAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: WidgetAccessiblePrivate;
    // Implemented Members
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
export module Window {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        accept_focus: boolean;
        application: Application;
        attached_to: Widget;
        decorated: boolean;
        default_height: number;
        default_width: number;
        deletable: boolean;
        destroy_with_parent: boolean;
        focus_on_map: boolean;
        focus_visible: boolean;
        gravity: Gdk.Gravity;
        has_resize_grip: boolean;
        has_toplevel_focus: boolean;
        hide_titlebar_when_maximized: boolean;
        icon: GdkPixbuf.Pixbuf;
        icon_name: string;
        is_active: boolean;
        is_maximized: boolean;
        mnemonics_visible: boolean;
        modal: boolean;
        resizable: boolean;
        resize_grip_visible: boolean;
        role: string;
        screen: Gdk.Screen;
        skip_pager_hint: boolean;
        skip_taskbar_hint: boolean;
        startup_id: string;
        title: string;
        transient_for: Window;
        type: WindowType;
        type_hint: Gdk.WindowTypeHint;
        urgency_hint: boolean;
        window_position: WindowPosition;
    }
}
export class Window extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(properties?: Partial<Window.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Window.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accept_focus: boolean;
    application: Application;
    attached_to: Widget;
    decorated: boolean;
    default_height: number;
    default_width: number;
    deletable: boolean;
    destroy_with_parent: boolean;
    focus_on_map: boolean;
    focus_visible: boolean;
    gravity: Gdk.Gravity;
    has_resize_grip: boolean;
    has_toplevel_focus: boolean;
    hide_titlebar_when_maximized: boolean;
    icon: GdkPixbuf.Pixbuf;
    icon_name: string;
    is_active: boolean;
    is_maximized: boolean;
    mnemonics_visible: boolean;
    modal: boolean;
    resizable: boolean;
    resize_grip_visible: boolean;
    role: string;
    screen: Gdk.Screen;
    skip_pager_hint: boolean;
    skip_taskbar_hint: boolean;
    startup_id: string;
    title: string;
    transient_for: Window;
    type: WindowType;
    type_hint: Gdk.WindowTypeHint;
    urgency_hint: boolean;
    window_position: WindowPosition;
    // Fields
    bin: Bin;
    priv: WindowPrivate;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate-default', callback: (_source: this) => void): number;
    connect_after(signal: 'activate-default', callback: (_source: this) => void): number;
    emit(signal: 'activate-default'): void;
    connect(signal: 'activate-focus', callback: (_source: this) => void): number;
    connect_after(signal: 'activate-focus', callback: (_source: this) => void): number;
    emit(signal: 'activate-focus'): void;
    connect(signal: 'enable-debugging', callback: (_source: this, toggle: boolean) => boolean): number;
    connect_after(signal: 'enable-debugging', callback: (_source: this, toggle: boolean) => boolean): number;
    emit(signal: 'enable-debugging', toggle: boolean): void;
    connect(signal: 'keys-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'keys-changed', callback: (_source: this) => void): number;
    emit(signal: 'keys-changed'): void;
    connect(signal: 'set-focus', callback: (_source: this, widget: Widget | null) => void): number;
    connect_after(signal: 'set-focus', callback: (_source: this, widget: Widget | null) => void): number;
    emit(signal: 'set-focus', widget: Widget | null): void;
    // Constructors
    static ["new"](type: WindowType): Window;
    // Members
    activate_default(): boolean;
    activate_focus(): boolean;
    activate_key(event: Gdk.EventKey): boolean;
    add_accel_group(accel_group: AccelGroup): void;
    add_mnemonic(keyval: number, target: Widget): void;
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void;
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void;
    close(): void;
    deiconify(): void;
    fullscreen(): void;
    fullscreen_on_monitor(screen: Gdk.Screen, monitor: number): void;
    get_accept_focus(): boolean;
    get_application(): Application | null;
    get_attached_to(): Widget | null;
    get_decorated(): boolean;
    get_default_size(): [number | null, number | null];
    get_default_widget(): Widget | null;
    get_deletable(): boolean;
    get_destroy_with_parent(): boolean;
    get_focus(): Widget | null;
    get_focus_on_map(): boolean;
    get_focus_visible(): boolean;
    get_gravity(): Gdk.Gravity;
    get_group(): WindowGroup;
    get_has_resize_grip(): boolean;
    get_hide_titlebar_when_maximized(): boolean;
    get_icon(): GdkPixbuf.Pixbuf | null;
    get_icon_list(): GLib.List;
    get_icon_name(): string | null;
    get_mnemonic_modifier(): Gdk.ModifierType;
    get_mnemonics_visible(): boolean;
    get_modal(): boolean;
    get_opacity(): number;
    get_position(): [number | null, number | null];
    get_resizable(): boolean;
    get_resize_grip_area(): [boolean, Gdk.Rectangle];
    get_role(): string | null;
    get_screen(): Gdk.Screen;
    get_size(): [number | null, number | null];
    get_skip_pager_hint(): boolean;
    get_skip_taskbar_hint(): boolean;
    get_title(): string | null;
    get_titlebar(): Widget | null;
    get_transient_for(): Window | null;
    get_type_hint(): Gdk.WindowTypeHint;
    get_urgency_hint(): boolean;
    get_window_type(): WindowType;
    has_group(): boolean;
    iconify(): void;
    maximize(): void;
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean;
    mnemonic_activate(...args: never[]): never;
    move(x: number, y: number): void;
    parse_geometry(geometry: string): boolean;
    present(): void;
    present_with_time(timestamp: number): void;
    propagate_key_event(event: Gdk.EventKey): boolean;
    remove_accel_group(accel_group: AccelGroup): void;
    remove_mnemonic(keyval: number, target: Widget): void;
    reshow_with_initial_size(): void;
    resize(width: number, height: number): void;
    resize_grip_is_visible(): boolean;
    resize_to_geometry(width: number, height: number): void;
    set_accept_focus(setting: boolean): void;
    set_application(application: Application | null): void;
    set_attached_to(attach_widget: Widget | null): void;
    set_decorated(setting: boolean): void;
    set_default(default_widget: Widget | null): void;
    set_default_geometry(width: number, height: number): void;
    set_default_size(width: number, height: number): void;
    set_deletable(setting: boolean): void;
    set_destroy_with_parent(setting: boolean): void;
    set_focus(focus: Widget | null): void;
    set_focus_on_map(setting: boolean): void;
    set_focus_visible(setting: boolean): void;
    set_geometry_hints(geometry_widget: Widget | null, geometry: Gdk.Geometry | null, geom_mask: Gdk.WindowHints): void;
    set_gravity(gravity: Gdk.Gravity): void;
    set_has_resize_grip(value: boolean): void;
    set_has_user_ref_count(setting: boolean): void;
    set_hide_titlebar_when_maximized(setting: boolean): void;
    set_icon(icon: GdkPixbuf.Pixbuf | null): void;
    set_icon_from_file(filename: string): boolean;
    set_icon_list(list: GLib.List): void;
    set_icon_name(name: string | null): void;
    set_keep_above(setting: boolean): void;
    set_keep_below(setting: boolean): void;
    set_mnemonic_modifier(modifier: Gdk.ModifierType): void;
    set_mnemonics_visible(setting: boolean): void;
    set_modal(modal: boolean): void;
    set_opacity(opacity: number): void;
    set_position(position: WindowPosition): void;
    set_resizable(resizable: boolean): void;
    set_role(role: string): void;
    set_screen(screen: Gdk.Screen): void;
    set_skip_pager_hint(setting: boolean): void;
    set_skip_taskbar_hint(setting: boolean): void;
    set_startup_id(startup_id: string): void;
    set_title(title: string): void;
    set_titlebar(titlebar: Widget | null): void;
    set_transient_for(parent: Window | null): void;
    set_type_hint(hint: Gdk.WindowTypeHint): void;
    set_urgency_hint(setting: boolean): void;
    set_wmclass(wmclass_name: string, wmclass_class: string): void;
    stick(): void;
    unfullscreen(): void;
    unmaximize(): void;
    unstick(): void;
    vfunc_activate_default(): void;
    vfunc_activate_focus(): void;
    vfunc_enable_debugging(toggle: boolean): boolean;
    vfunc_keys_changed(): void;
    vfunc_set_focus(focus: Widget | null): void;
    static get_default_icon_list(): GLib.List;
    static get_default_icon_name(): string;
    static list_toplevels(): GLib.List;
    static set_auto_startup_notification(setting: boolean): void;
    static set_default_icon(icon: GdkPixbuf.Pixbuf): void;
    static set_default_icon_from_file(filename: string): boolean;
    static set_default_icon_list(list: GLib.List): void;
    static set_default_icon_name(name: string): void;
    static set_interactive_debugging(enable: boolean): void;
}
export module WindowAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class WindowAccessible extends ContainerAccessible implements Atk.Component, Atk.Window {
    constructor(properties?: Partial<WindowAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WindowAccessible.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: WindowAccessiblePrivate | any;
}
export module WindowGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class WindowGroup extends GObject.Object {
    constructor(properties?: Partial<WindowGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WindowGroup.ConstructorProperties>, ...args: any[]): void;
    // Fields
    priv: WindowGroupPrivate;
    // Constructors
    static ["new"](): WindowGroup;
    // Members
    add_window(window: Window): void;
    get_current_device_grab(device: Gdk.Device): Widget | null;
    get_current_grab(): Widget;
    list_windows(): GLib.List;
    remove_window(window: Window): void;
}
export class AboutDialogPrivate {
    constructor(copy: AboutDialogPrivate);
}
export class AccelGroupEntry {
    constructor(copy: AccelGroupEntry);
    // Fields
    key: AccelKey;
    closure: GObject.Closure;
    accel_path_quark: GLib.Quark;
}
export class AccelGroupPrivate {
    constructor(copy: AccelGroupPrivate);
}
export class AccelKey {
    constructor(copy: AccelKey);
    // Fields
    accel_key: number;
    accel_mods: Gdk.ModifierType;
    accel_flags: number;
}
export class AccelLabelPrivate {
    constructor(copy: AccelLabelPrivate);
}
export class AccessiblePrivate {
    constructor(copy: AccessiblePrivate);
}
export class ActionBarPrivate {
    constructor(copy: ActionBarPrivate);
}
export class ActionEntry {
    constructor(copy: ActionEntry);
    // Fields
    name: string;
    stock_id: string;
    label: string;
    accelerator: string;
    tooltip: string;
    callback: GObject.Callback;
}
export class ActionGroupPrivate {
    constructor(copy: ActionGroupPrivate);
}
export class ActionPrivate {
    constructor(copy: ActionPrivate);
}
export class AdjustmentPrivate {
    constructor(copy: AdjustmentPrivate);
}
export class AlignmentPrivate {
    constructor(copy: AlignmentPrivate);
}
export class AppChooserButtonPrivate {
    constructor(copy: AppChooserButtonPrivate);
}
export class AppChooserDialogPrivate {
    constructor(copy: AppChooserDialogPrivate);
}
export class AppChooserWidgetPrivate {
    constructor(copy: AppChooserWidgetPrivate);
}
export class ApplicationPrivate {
    constructor(copy: ApplicationPrivate);
}
export class ApplicationWindowPrivate {
    constructor(copy: ApplicationWindowPrivate);
}
export class ArrowAccessiblePrivate {
    constructor(copy: ArrowAccessiblePrivate);
}
export class ArrowPrivate {
    constructor(copy: ArrowPrivate);
}
export class AspectFramePrivate {
    constructor(copy: AspectFramePrivate);
}
export class AssistantPrivate {
    constructor(copy: AssistantPrivate);
}
export class BinPrivate {
    constructor(copy: BinPrivate);
}
export class BindingArg {
    constructor(properties?: {
        arg_type?: GType;
    });
    constructor(copy: BindingArg);
    // Fields
    arg_type: GType;
}
export class BindingEntry {
    constructor(copy: BindingEntry);
    // Fields
    keyval: number;
    modifiers: Gdk.ModifierType;
    binding_set: BindingSet;
    destroyed: number;
    in_emission: number;
    marks_unbound: number;
    set_next: BindingEntry;
    hash_next: BindingEntry;
    signals: BindingSignal;
    // Members
    static add_signal_from_string(binding_set: BindingSet, signal_desc: string): GLib.TokenType;
    static add_signall(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType, signal_name: string, binding_args: GLib.SList): void;
    static remove(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
    static skip(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
}
export class BindingSet {
    constructor(copy: BindingSet);
    // Fields
    set_name: string;
    priority: number;
    widget_path_pspecs: GLib.SList;
    widget_class_pspecs: GLib.SList;
    class_branch_pspecs: GLib.SList;
    entries: BindingEntry;
    current: BindingEntry;
    parsed: number;
    // Members
    activate(keyval: number, modifiers: Gdk.ModifierType, object: GObject.Object): boolean;
    add_path(path_type: PathType, path_pattern: string, priority: PathPriorityType): void;
    static find(set_name: string): BindingSet | null;
}
export class BindingSignal {
    constructor(copy: BindingSignal);
    // Fields
    next: BindingSignal;
    signal_name: string;
    n_args: number;
    args: BindingArg[];
}
export class BooleanCellAccessiblePrivate {
    constructor(copy: BooleanCellAccessiblePrivate);
}
export class Border {
    constructor();
    constructor(copy: Border);
    // Fields
    left: number;
    right: number;
    top: number;
    bottom: number;
    // Constructors
    static ["new"](): Border;
    // Members
    copy(): Border;
    free(): void;
}
export class BoxPrivate {
    constructor(copy: BoxPrivate);
}
export class BuilderPrivate {
    constructor(copy: BuilderPrivate);
}
export class ButtonAccessiblePrivate {
    constructor(copy: ButtonAccessiblePrivate);
}
export class ButtonBoxPrivate {
    constructor(copy: ButtonBoxPrivate);
}
export class ButtonPrivate {
    constructor(copy: ButtonPrivate);
}
export class CalendarPrivate {
    constructor(copy: CalendarPrivate);
}
export class CellAccessiblePrivate {
    constructor(copy: CellAccessiblePrivate);
}
export class CellAreaBoxPrivate {
    constructor(copy: CellAreaBoxPrivate);
}
export class CellAreaContextPrivate {
    constructor(copy: CellAreaContextPrivate);
}
export class CellAreaPrivate {
    constructor(copy: CellAreaPrivate);
}
export class CellRendererAccelPrivate {
    constructor(copy: CellRendererAccelPrivate);
}
export class CellRendererClassPrivate {
    constructor(copy: CellRendererClassPrivate);
}
export class CellRendererComboPrivate {
    constructor(copy: CellRendererComboPrivate);
}
export class CellRendererPixbufPrivate {
    constructor(copy: CellRendererPixbufPrivate);
}
export class CellRendererPrivate {
    constructor(copy: CellRendererPrivate);
}
export class CellRendererProgressPrivate {
    constructor(copy: CellRendererProgressPrivate);
}
export class CellRendererSpinPrivate {
    constructor(copy: CellRendererSpinPrivate);
}
export class CellRendererSpinnerPrivate {
    constructor(copy: CellRendererSpinnerPrivate);
}
export class CellRendererTextPrivate {
    constructor(copy: CellRendererTextPrivate);
}
export class CellRendererTogglePrivate {
    constructor(copy: CellRendererTogglePrivate);
}
export class CellViewPrivate {
    constructor(copy: CellViewPrivate);
}
export class CheckMenuItemAccessiblePrivate {
    constructor(copy: CheckMenuItemAccessiblePrivate);
}
export class CheckMenuItemPrivate {
    constructor(copy: CheckMenuItemPrivate);
}
export class ColorButtonPrivate {
    constructor(copy: ColorButtonPrivate);
}
export class ColorChooserDialogPrivate {
    constructor(copy: ColorChooserDialogPrivate);
}
export class ColorChooserWidgetPrivate {
    constructor(copy: ColorChooserWidgetPrivate);
}
export class ColorSelectionDialogPrivate {
    constructor(copy: ColorSelectionDialogPrivate);
}
export class ColorSelectionPrivate {
    constructor(copy: ColorSelectionPrivate);
}
export class ComboBoxAccessiblePrivate {
    constructor(copy: ComboBoxAccessiblePrivate);
}
export class ComboBoxPrivate {
    constructor(copy: ComboBoxPrivate);
}
export class ComboBoxTextPrivate {
    constructor(copy: ComboBoxTextPrivate);
}
export class ContainerAccessiblePrivate {
    constructor(copy: ContainerAccessiblePrivate);
}
export class ContainerCellAccessiblePrivate {
    constructor(copy: ContainerCellAccessiblePrivate);
}
export class ContainerPrivate {
    constructor(copy: ContainerPrivate);
}
export class CssProviderPrivate {
    constructor(copy: CssProviderPrivate);
}
export class CssSection {
    constructor(copy: CssSection);
    // Members
    get_end_line(): number;
    get_end_position(): number;
    get_file(): Gio.File;
    get_parent(): CssSection | null;
    get_section_type(): CssSectionType;
    get_start_line(): number;
    get_start_position(): number;
    ref(): CssSection;
    unref(): void;
}
export class DialogPrivate {
    constructor(copy: DialogPrivate);
}
export class EntryAccessiblePrivate {
    constructor(copy: EntryAccessiblePrivate);
}
export class EntryBufferPrivate {
    constructor(copy: EntryBufferPrivate);
}
export class EntryCompletionPrivate {
    constructor(copy: EntryCompletionPrivate);
}
export class EntryPrivate {
    constructor(copy: EntryPrivate);
}
export class EventBoxPrivate {
    constructor(copy: EventBoxPrivate);
}
export class ExpanderAccessiblePrivate {
    constructor(copy: ExpanderAccessiblePrivate);
}
export class ExpanderPrivate {
    constructor(copy: ExpanderPrivate);
}
export class FileChooserButtonPrivate {
    constructor(copy: FileChooserButtonPrivate);
}
export class FileChooserDialogPrivate {
    constructor(copy: FileChooserDialogPrivate);
}
export class FileChooserWidgetPrivate {
    constructor(copy: FileChooserWidgetPrivate);
}
export class FileFilterInfo {
    constructor(copy: FileFilterInfo);
    // Fields
    contains: FileFilterFlags;
    filename: string;
    uri: string;
    display_name: string;
    mime_type: string;
}
export class FixedChild {
    constructor(copy: FixedChild);
    // Fields
    widget: Widget;
    x: number;
    y: number;
}
export class FixedPrivate {
    constructor(copy: FixedPrivate);
}
export class FlowBoxAccessiblePrivate {
    constructor(copy: FlowBoxAccessiblePrivate);
}
export class FontButtonPrivate {
    constructor(copy: FontButtonPrivate);
}
export class FontChooserDialogPrivate {
    constructor(copy: FontChooserDialogPrivate);
}
export class FontChooserWidgetPrivate {
    constructor(copy: FontChooserWidgetPrivate);
}
export class FontSelectionDialogPrivate {
    constructor(copy: FontSelectionDialogPrivate);
}
export class FontSelectionPrivate {
    constructor(copy: FontSelectionPrivate);
}
export class FrameAccessiblePrivate {
    constructor(copy: FrameAccessiblePrivate);
}
export class FramePrivate {
    constructor(copy: FramePrivate);
}
export class Gradient {
    constructor(x0: number, y0: number, x1: number, y1: number);
    constructor(copy: Gradient);
    // Constructors
    static new_linear(x0: number, y0: number, x1: number, y1: number): Gradient;
    static new_radial(x0: number, y0: number, radius0: number, x1: number, y1: number, radius1: number): Gradient;
    // Members
    add_color_stop(offset: number, color: SymbolicColor): void;
    ref(): Gradient;
    resolve(props: StyleProperties): [boolean, cairo.Pattern];
    resolve_for_context(context: StyleContext): cairo.Pattern;
    to_string(): string;
    unref(): void;
}
export class GridPrivate {
    constructor(copy: GridPrivate);
}
export class HSVPrivate {
    constructor(copy: HSVPrivate);
}
export class HandleBoxPrivate {
    constructor(copy: HandleBoxPrivate);
}
export class HeaderBarAccessiblePrivate {
    constructor(copy: HeaderBarAccessiblePrivate);
}
export class HeaderBarPrivate {
    constructor(copy: HeaderBarPrivate);
}
export class IMContextInfo {
    constructor(properties?: {
        context_id?: string;
        context_name?: string;
        domain?: string;
        domain_dirname?: string;
        default_locales?: string;
    });
    constructor(copy: IMContextInfo);
    // Fields
    context_id: string;
    context_name: string;
    domain: string;
    domain_dirname: string;
    default_locales: string;
}
export class IMContextSimplePrivate {
    constructor(copy: IMContextSimplePrivate);
}
export class IMMulticontextPrivate {
    constructor(copy: IMMulticontextPrivate);
}
export class IconFactoryPrivate {
    constructor(copy: IconFactoryPrivate);
}
export class IconSet {
    constructor();
    constructor(copy: IconSet);
    // Constructors
    static ["new"](): IconSet;
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): IconSet;
    // Members
    add_source(source: IconSource): void;
    copy(): IconSet;
    get_sizes(): number[];
    ref(): IconSet;
    render_icon(style: Style | null, direction: TextDirection, state: StateType, size: number, widget: Widget | null, detail: string | null): GdkPixbuf.Pixbuf;
    render_icon_pixbuf(context: StyleContext, size: number): GdkPixbuf.Pixbuf;
    render_icon_surface(context: StyleContext, size: number, scale: number, for_window: Gdk.Window | null): cairo.Surface;
    unref(): void;
}
export class IconSource {
    constructor();
    constructor(copy: IconSource);
    // Constructors
    static ["new"](): IconSource;
    // Members
    copy(): IconSource;
    free(): void;
    get_direction(): TextDirection;
    get_direction_wildcarded(): boolean;
    get_filename(): string;
    get_icon_name(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_size(): number;
    get_size_wildcarded(): boolean;
    get_state(): StateType;
    get_state_wildcarded(): boolean;
    set_direction(direction: TextDirection): void;
    set_direction_wildcarded(setting: boolean): void;
    set_filename(filename: string): void;
    set_icon_name(icon_name: string | null): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    set_size(size: number): void;
    set_size_wildcarded(setting: boolean): void;
    set_state(state: StateType): void;
    set_state_wildcarded(setting: boolean): void;
}
export class IconThemePrivate {
    constructor(copy: IconThemePrivate);
}
export class IconViewAccessiblePrivate {
    constructor(copy: IconViewAccessiblePrivate);
}
export class IconViewPrivate {
    constructor(copy: IconViewPrivate);
}
export class ImageAccessiblePrivate {
    constructor(copy: ImageAccessiblePrivate);
}
export class ImageCellAccessiblePrivate {
    constructor(copy: ImageCellAccessiblePrivate);
}
export class ImageMenuItemPrivate {
    constructor(copy: ImageMenuItemPrivate);
}
export class ImagePrivate {
    constructor(copy: ImagePrivate);
}
export class InfoBarPrivate {
    constructor(copy: InfoBarPrivate);
}
export class InvisiblePrivate {
    constructor(copy: InvisiblePrivate);
}
export class LabelAccessiblePrivate {
    constructor(copy: LabelAccessiblePrivate);
}
export class LabelPrivate {
    constructor(copy: LabelPrivate);
}
export class LabelSelectionInfo {
    constructor(copy: LabelSelectionInfo);
}
export class LayoutPrivate {
    constructor(copy: LayoutPrivate);
}
export class LevelBarAccessiblePrivate {
    constructor(copy: LevelBarAccessiblePrivate);
}
export class LevelBarPrivate {
    constructor(copy: LevelBarPrivate);
}
export class LinkButtonAccessiblePrivate {
    constructor(copy: LinkButtonAccessiblePrivate);
}
export class LinkButtonPrivate {
    constructor(copy: LinkButtonPrivate);
}
export class ListBoxAccessiblePrivate {
    constructor(copy: ListBoxAccessiblePrivate);
}
export class ListStorePrivate {
    constructor(copy: ListStorePrivate);
}
export class LockButtonAccessiblePrivate {
    constructor(copy: LockButtonAccessiblePrivate);
}
export class LockButtonPrivate {
    constructor(copy: LockButtonPrivate);
}
export class MenuAccessiblePrivate {
    constructor(copy: MenuAccessiblePrivate);
}
export class MenuBarPrivate {
    constructor(copy: MenuBarPrivate);
}
export class MenuButtonAccessiblePrivate {
    constructor(copy: MenuButtonAccessiblePrivate);
}
export class MenuButtonPrivate {
    constructor(copy: MenuButtonPrivate);
}
export class MenuItemAccessiblePrivate {
    constructor(copy: MenuItemAccessiblePrivate);
}
export class MenuItemPrivate {
    constructor(copy: MenuItemPrivate);
}
export class MenuPrivate {
    constructor(copy: MenuPrivate);
}
export class MenuShellAccessiblePrivate {
    constructor(copy: MenuShellAccessiblePrivate);
}
export class MenuShellPrivate {
    constructor(copy: MenuShellPrivate);
}
export class MenuToolButtonPrivate {
    constructor(copy: MenuToolButtonPrivate);
}
export class MessageDialogPrivate {
    constructor(copy: MessageDialogPrivate);
}
export class MiscPrivate {
    constructor(copy: MiscPrivate);
}
export class MountOperationPrivate {
    constructor(copy: MountOperationPrivate);
}
export class NotebookAccessiblePrivate {
    constructor(copy: NotebookAccessiblePrivate);
}
export class NotebookPageAccessiblePrivate {
    constructor(copy: NotebookPageAccessiblePrivate);
}
export class NotebookPrivate {
    constructor(copy: NotebookPrivate);
}
export class NumerableIconPrivate {
    constructor(copy: NumerableIconPrivate);
}
export class OverlayPrivate {
    constructor(copy: OverlayPrivate);
}
export class PadActionEntry {
    constructor(copy: PadActionEntry);
    // Fields
    type: PadActionType;
    index: number;
    mode: number;
    label: string;
    action_name: string;
}
export class PageRange {
    constructor(properties?: {
        start?: number;
        end?: number;
    });
    constructor(copy: PageRange);
    // Fields
    start: number;
    end: number;
}
export class PanedAccessiblePrivate {
    constructor(copy: PanedAccessiblePrivate);
}
export class PanedPrivate {
    constructor(copy: PanedPrivate);
}
export class PaperSize {
    constructor(name: string | null);
    constructor(copy: PaperSize);
    // Constructors
    static ["new"](name: string | null): PaperSize;
    static new_custom(name: string, display_name: string, width: number, height: number, unit: Unit): PaperSize;
    static new_from_gvariant(variant: GLib.Variant): PaperSize;
    static new_from_ipp(ipp_name: string, width: number, height: number): PaperSize;
    static new_from_key_file(key_file: GLib.KeyFile, group_name: string | null): PaperSize;
    static new_from_ppd(ppd_name: string, ppd_display_name: string, width: number, height: number): PaperSize;
    // Members
    copy(): PaperSize;
    free(): void;
    get_default_bottom_margin(unit: Unit): number;
    get_default_left_margin(unit: Unit): number;
    get_default_right_margin(unit: Unit): number;
    get_default_top_margin(unit: Unit): number;
    get_display_name(): string;
    get_height(unit: Unit): number;
    get_name(): string;
    get_ppd_name(): string;
    get_width(unit: Unit): number;
    is_custom(): boolean;
    is_equal(size2: PaperSize): boolean;
    is_ipp(): boolean;
    set_size(width: number, height: number, unit: Unit): void;
    to_gvariant(): GLib.Variant;
    to_key_file(key_file: GLib.KeyFile, group_name: string): void;
    static get_default(): string;
    static get_paper_sizes(include_custom: boolean): GLib.List;
}
export class PlugPrivate {
    constructor(copy: PlugPrivate);
}
export class PopoverPrivate {
    constructor(copy: PopoverPrivate);
}
export class PrintOperationPrivate {
    constructor(copy: PrintOperationPrivate);
}
export class ProgressBarAccessiblePrivate {
    constructor(copy: ProgressBarAccessiblePrivate);
}
export class ProgressBarPrivate {
    constructor(copy: ProgressBarPrivate);
}
export class RadioActionEntry {
    constructor(properties?: {
        name?: string;
        stock_id?: string;
        label?: string;
        accelerator?: string;
        tooltip?: string;
        value?: number;
    });
    constructor(copy: RadioActionEntry);
    // Fields
    name: string;
    stock_id: string;
    label: string;
    accelerator: string;
    tooltip: string;
    value: number;
}
export class RadioActionPrivate {
    constructor(copy: RadioActionPrivate);
}
export class RadioButtonAccessiblePrivate {
    constructor(copy: RadioButtonAccessiblePrivate);
}
export class RadioButtonPrivate {
    constructor(copy: RadioButtonPrivate);
}
export class RadioMenuItemAccessiblePrivate {
    constructor(copy: RadioMenuItemAccessiblePrivate);
}
export class RadioMenuItemPrivate {
    constructor(copy: RadioMenuItemPrivate);
}
export class RangeAccessiblePrivate {
    constructor(copy: RangeAccessiblePrivate);
}
export class RangePrivate {
    constructor(copy: RangePrivate);
}
export class RcContext {
    constructor(copy: RcContext);
}
export class RcProperty {
    constructor(copy: RcProperty);
    // Fields
    type_name: GLib.Quark;
    property_name: GLib.Quark;
    origin: string;
    value: GObject.Value;
    // Members
    static parse_border(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: (GObject.Value | string | boolean | number)): boolean;
    static parse_color(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: (GObject.Value | string | boolean | number)): boolean;
    static parse_enum(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: (GObject.Value | string | boolean | number)): boolean;
    static parse_flags(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: (GObject.Value | string | boolean | number)): boolean;
    static parse_requisition(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: (GObject.Value | string | boolean | number)): boolean;
}
export class RecentActionPrivate {
    constructor(copy: RecentActionPrivate);
}
export class RecentChooserDialogPrivate {
    constructor(copy: RecentChooserDialogPrivate);
}
export class RecentChooserMenuPrivate {
    constructor(copy: RecentChooserMenuPrivate);
}
export class RecentChooserWidgetPrivate {
    constructor(copy: RecentChooserWidgetPrivate);
}
export class RecentData {
    constructor(properties?: {
        display_name?: string;
        description?: string;
        mime_type?: string;
        app_name?: string;
        app_exec?: string;
        groups?: string[];
        is_private?: boolean;
    });
    constructor(copy: RecentData);
    // Fields
    display_name: string;
    description: string;
    mime_type: string;
    app_name: string;
    app_exec: string;
    groups: string[];
    is_private: boolean;
}
export class RecentFilterInfo {
    constructor(copy: RecentFilterInfo);
    // Fields
    contains: RecentFilterFlags;
    uri: string;
    display_name: string;
    mime_type: string;
    applications: string[];
    groups: string[];
    age: number;
}
export class RecentInfo {
    constructor(copy: RecentInfo);
    // Members
    create_app_info(app_name: string | null): Gio.AppInfo | null;
    exists(): boolean;
    get_added(): number;
    get_age(): number;
    get_application_info(app_name: string): [boolean, string, number, number];
    get_applications(): string[];
    get_description(): string;
    get_display_name(): string;
    get_gicon(): Gio.Icon | null;
    get_groups(): string[];
    get_icon(size: number): GdkPixbuf.Pixbuf | null;
    get_mime_type(): string;
    get_modified(): number;
    get_private_hint(): boolean;
    get_short_name(): string;
    get_uri(): string;
    get_uri_display(): string | null;
    get_visited(): number;
    has_application(app_name: string): boolean;
    has_group(group_name: string): boolean;
    is_local(): boolean;
    last_application(): string;
    match(info_b: RecentInfo): boolean;
    ref(): RecentInfo;
    unref(): void;
}
export class RecentManagerPrivate {
    constructor(copy: RecentManagerPrivate);
}
export class RendererCellAccessiblePrivate {
    constructor(copy: RendererCellAccessiblePrivate);
}
export class RequestedSize {
    constructor(properties?: {
        data?: any;
        minimum_size?: number;
        natural_size?: number;
    });
    constructor(copy: RequestedSize);
    // Fields
    data: any;
    minimum_size: number;
    natural_size: number;
}
export class Requisition {
    constructor();
    constructor(copy: Requisition);
    // Fields
    width: number;
    height: number;
    // Constructors
    static ["new"](): Requisition;
    // Members
    copy(): Requisition;
    free(): void;
}
export class ScaleAccessiblePrivate {
    constructor(copy: ScaleAccessiblePrivate);
}
export class ScaleButtonAccessiblePrivate {
    constructor(copy: ScaleButtonAccessiblePrivate);
}
export class ScaleButtonPrivate {
    constructor(copy: ScaleButtonPrivate);
}
export class ScalePrivate {
    constructor(copy: ScalePrivate);
}
export class ScrolledWindowAccessiblePrivate {
    constructor(copy: ScrolledWindowAccessiblePrivate);
}
export class ScrolledWindowPrivate {
    constructor(copy: ScrolledWindowPrivate);
}
export class SelectionData {
    constructor(copy: SelectionData);
    // Members
    copy(): SelectionData;
    free(): void;
    get_data_type(): Gdk.Atom;
    get_data(): Uint8Array;
    get_display(): Gdk.Display;
    get_format(): number;
    get_length(): number;
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_selection(): Gdk.Atom;
    get_target(): Gdk.Atom;
    get_targets(): [boolean, Gdk.Atom[]];
    get_text(): string | null;
    get_uris(): string[];
    set(type: Gdk.Atom, format: number, data: (Uint8Array | string)): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;
    set_text(str: string, len: number): boolean;
    set_uris(uris: string[]): boolean;
    targets_include_image(writable: boolean): boolean;
    targets_include_rich_text(buffer: TextBuffer): boolean;
    targets_include_text(): boolean;
    targets_include_uri(): boolean;
}
export class SeparatorPrivate {
    constructor(copy: SeparatorPrivate);
}
export class SeparatorToolItemPrivate {
    constructor(copy: SeparatorToolItemPrivate);
}
export class SettingsPrivate {
    constructor(copy: SettingsPrivate);
}
export class SettingsValue {
    constructor(properties?: {
        origin?: string;
        value?: GObject.Value;
    });
    constructor(copy: SettingsValue);
    // Fields
    origin: string;
    value: GObject.Value;
}
export class SizeGroupPrivate {
    constructor(copy: SizeGroupPrivate);
}
export class SocketPrivate {
    constructor(copy: SocketPrivate);
}
export class SpinButtonAccessiblePrivate {
    constructor(copy: SpinButtonAccessiblePrivate);
}
export class SpinButtonPrivate {
    constructor(copy: SpinButtonPrivate);
}
export class SpinnerAccessiblePrivate {
    constructor(copy: SpinnerAccessiblePrivate);
}
export class SpinnerPrivate {
    constructor(copy: SpinnerPrivate);
}
export class StackSidebarPrivate {
    constructor(copy: StackSidebarPrivate);
}
export class StatusIconPrivate {
    constructor(copy: StatusIconPrivate);
}
export class StatusbarAccessiblePrivate {
    constructor(copy: StatusbarAccessiblePrivate);
}
export class StatusbarPrivate {
    constructor(copy: StatusbarPrivate);
}
export class StockItem {
    constructor(copy: StockItem);
    // Fields
    stock_id: string;
    label: string;
    modifier: Gdk.ModifierType;
    keyval: number;
    translation_domain: string;
    // Members
    free(): void;
}
export class StyleContextPrivate {
    constructor(copy: StyleContextPrivate);
}
export class StylePropertiesPrivate {
    constructor(copy: StylePropertiesPrivate);
}
export class SwitchAccessiblePrivate {
    constructor(copy: SwitchAccessiblePrivate);
}
export class SwitchPrivate {
    constructor(copy: SwitchPrivate);
}
export class SymbolicColor {
    constructor(color: SymbolicColor, factor: number);
    constructor(copy: SymbolicColor);
    // Constructors
    static new_alpha(color: SymbolicColor, factor: number): SymbolicColor;
    static new_literal(color: Gdk.RGBA): SymbolicColor;
    static new_mix(color1: SymbolicColor, color2: SymbolicColor, factor: number): SymbolicColor;
    static new_name(name: string): SymbolicColor;
    static new_shade(color: SymbolicColor, factor: number): SymbolicColor;
    static new_win32(theme_class: string, id: number): SymbolicColor;
    // Members
    ref(): SymbolicColor;
    resolve(props: StyleProperties | null): [boolean, Gdk.RGBA];
    to_string(): string;
    unref(): void;
}
export class TableChild {
    constructor(copy: TableChild);
    // Fields
    widget: Widget;
    left_attach: number;
    right_attach: number;
    top_attach: number;
    bottom_attach: number;
    xpadding: number;
    ypadding: number;
    xexpand: number;
    yexpand: number;
    xshrink: number;
    yshrink: number;
    xfill: number;
    yfill: number;
}
export class TablePrivate {
    constructor(copy: TablePrivate);
}
export class TableRowCol {
    constructor(properties?: {
        requisition?: number;
        allocation?: number;
        spacing?: number;
        need_expand?: number;
        need_shrink?: number;
        expand?: number;
        shrink?: number;
        empty?: number;
    });
    constructor(copy: TableRowCol);
    // Fields
    requisition: number;
    allocation: number;
    spacing: number;
    need_expand: number;
    need_shrink: number;
    expand: number;
    shrink: number;
    empty: number;
}
export class TargetEntry {
    constructor(target: string, flags: number, info: number);
    constructor(copy: TargetEntry);
    // Fields
    target: string;
    flags: number;
    info: number;
    // Constructors
    static ["new"](target: string, flags: number, info: number): TargetEntry;
    // Members
    copy(): TargetEntry;
    free(): void;
}
export class TargetList {
    constructor(targets: TargetEntry[] | null);
    constructor(copy: TargetList);
    // Constructors
    static ["new"](targets: TargetEntry[] | null): TargetList;
    // Members
    add(target: Gdk.Atom, flags: number, info: number): void;
    add_image_targets(info: number, writable: boolean): void;
    add_rich_text_targets(info: number, deserializable: boolean, buffer: TextBuffer): void;
    add_table(targets: TargetEntry[]): void;
    add_text_targets(info: number): void;
    add_uri_targets(info: number): void;
    find(target: Gdk.Atom): [boolean, number | null];
    ref(): TargetList;
    remove(target: Gdk.Atom): void;
    unref(): void;
}
export class TargetPair {
    constructor(copy: TargetPair);
    // Fields
    target: Gdk.Atom;
    flags: number;
    info: number;
}
export class TearoffMenuItemPrivate {
    constructor(copy: TearoffMenuItemPrivate);
}
export class TextAppearance {
    constructor(properties?: {
        bg_color?: Gdk.Color;
        fg_color?: Gdk.Color;
        rise?: number;
        underline?: number;
        strikethrough?: number;
        draw_bg?: number;
        inside_selection?: number;
        is_text?: number;
    });
    constructor(copy: TextAppearance);
    // Fields
    bg_color: Gdk.Color;
    fg_color: Gdk.Color;
    rise: number;
    underline: number;
    strikethrough: number;
    draw_bg: number;
    inside_selection: number;
    is_text: number;
}
export class TextAttributes {
    constructor();
    constructor(copy: TextAttributes);
    // Fields
    refcount: number;
    appearance: TextAppearance;
    justification: Justification;
    direction: TextDirection;
    font: Pango.FontDescription;
    font_scale: number;
    left_margin: number;
    right_margin: number;
    indent: number;
    pixels_above_lines: number;
    pixels_below_lines: number;
    pixels_inside_wrap: number;
    tabs: Pango.TabArray;
    wrap_mode: WrapMode;
    language: Pango.Language;
    pg_bg_color: Gdk.Color;
    invisible: number;
    bg_full_height: number;
    editable: number;
    no_fallback: number;
    pg_bg_rgba: Gdk.RGBA;
    letter_spacing: number;
    // Constructors
    static ["new"](): TextAttributes;
    // Members
    copy(): TextAttributes;
    copy_values(dest: TextAttributes): void;
    ref(): TextAttributes;
    unref(): void;
}
export class TextBTree {
    constructor(copy: TextBTree);
}
export class TextBufferPrivate {
    constructor(copy: TextBufferPrivate);
}
export class TextCellAccessiblePrivate {
    constructor(copy: TextCellAccessiblePrivate);
}
export class TextIter {
    constructor(properties?: {
        dummy1?: any;
        dummy2?: any;
        dummy3?: number;
        dummy4?: number;
        dummy5?: number;
        dummy6?: number;
        dummy7?: number;
        dummy8?: number;
        dummy9?: any;
        dummy10?: any;
        dummy11?: number;
        dummy12?: number;
        dummy13?: number;
        dummy14?: any;
    });
    constructor(copy: TextIter);
    // Fields
    dummy1: any;
    dummy2: any;
    dummy3: number;
    dummy4: number;
    dummy5: number;
    dummy6: number;
    dummy7: number;
    dummy8: number;
    dummy9: any;
    dummy10: any;
    dummy11: number;
    dummy12: number;
    dummy13: number;
    dummy14: any;
    // Members
    assign(other: TextIter): void;
    backward_char(): boolean;
    backward_chars(count: number): boolean;
    backward_cursor_position(): boolean;
    backward_cursor_positions(count: number): boolean;
    backward_find_char(pred: TextCharPredicate, limit: TextIter | null): boolean;
    backward_line(): boolean;
    backward_lines(count: number): boolean;
    backward_search(str: string, flags: TextSearchFlags, limit: TextIter | null): [boolean, TextIter | null, TextIter | null];
    backward_sentence_start(): boolean;
    backward_sentence_starts(count: number): boolean;
    backward_to_tag_toggle(tag: TextTag | null): boolean;
    backward_visible_cursor_position(): boolean;
    backward_visible_cursor_positions(count: number): boolean;
    backward_visible_line(): boolean;
    backward_visible_lines(count: number): boolean;
    backward_visible_word_start(): boolean;
    backward_visible_word_starts(count: number): boolean;
    backward_word_start(): boolean;
    backward_word_starts(count: number): boolean;
    begins_tag(tag: TextTag | null): boolean;
    can_insert(default_editability: boolean): boolean;
    compare(rhs: TextIter): number;
    copy(): TextIter;
    editable(default_setting: boolean): boolean;
    ends_line(): boolean;
    ends_sentence(): boolean;
    ends_tag(tag: TextTag | null): boolean;
    ends_word(): boolean;
    equal(rhs: TextIter): boolean;
    forward_char(): boolean;
    forward_chars(count: number): boolean;
    forward_cursor_position(): boolean;
    forward_cursor_positions(count: number): boolean;
    forward_find_char(pred: TextCharPredicate, limit: TextIter | null): boolean;
    forward_line(): boolean;
    forward_lines(count: number): boolean;
    forward_search(str: string, flags: TextSearchFlags, limit: TextIter | null): [boolean, TextIter | null, TextIter | null];
    forward_sentence_end(): boolean;
    forward_sentence_ends(count: number): boolean;
    forward_to_end(): void;
    forward_to_line_end(): boolean;
    forward_to_tag_toggle(tag: TextTag | null): boolean;
    forward_visible_cursor_position(): boolean;
    forward_visible_cursor_positions(count: number): boolean;
    forward_visible_line(): boolean;
    forward_visible_lines(count: number): boolean;
    forward_visible_word_end(): boolean;
    forward_visible_word_ends(count: number): boolean;
    forward_word_end(): boolean;
    forward_word_ends(count: number): boolean;
    free(): void;
    get_attributes(): [boolean, TextAttributes];
    get_buffer(): TextBuffer;
    get_bytes_in_line(): number;
    get_char(): number;
    get_chars_in_line(): number;
    get_child_anchor(): TextChildAnchor;
    get_language(): Pango.Language;
    get_line(): number;
    get_line_index(): number;
    get_line_offset(): number;
    get_marks(): GLib.SList;
    get_offset(): number;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_slice(end: TextIter): string;
    get_tags(): GLib.SList;
    get_text(end: TextIter): string;
    get_toggled_tags(toggled_on: boolean): GLib.SList;
    get_visible_line_index(): number;
    get_visible_line_offset(): number;
    get_visible_slice(end: TextIter): string;
    get_visible_text(end: TextIter): string;
    has_tag(tag: TextTag): boolean;
    in_range(start: TextIter, end: TextIter): boolean;
    inside_sentence(): boolean;
    inside_word(): boolean;
    is_cursor_position(): boolean;
    is_end(): boolean;
    is_start(): boolean;
    order(second: TextIter): void;
    set_line(line_number: number): void;
    set_line_index(byte_on_line: number): void;
    set_line_offset(char_on_line: number): void;
    set_offset(char_offset: number): void;
    set_visible_line_index(byte_on_line: number): void;
    set_visible_line_offset(char_on_line: number): void;
    starts_line(): boolean;
    starts_sentence(): boolean;
    starts_tag(tag: TextTag | null): boolean;
    starts_word(): boolean;
    toggles_tag(tag: TextTag | null): boolean;
}
export class TextTagPrivate {
    constructor(copy: TextTagPrivate);
}
export class TextTagTablePrivate {
    constructor(copy: TextTagTablePrivate);
}
export class TextViewAccessiblePrivate {
    constructor(copy: TextViewAccessiblePrivate);
}
export class TextViewPrivate {
    constructor(copy: TextViewPrivate);
}
export class ThemeEngine {
    constructor(copy: ThemeEngine);
}
export class ThemingEnginePrivate {
    constructor(copy: ThemingEnginePrivate);
}
export class ToggleActionEntry {
    constructor(copy: ToggleActionEntry);
    // Fields
    name: string;
    stock_id: string;
    label: string;
    accelerator: string;
    tooltip: string;
    callback: GObject.Callback;
    is_active: boolean;
}
export class ToggleActionPrivate {
    constructor(copy: ToggleActionPrivate);
}
export class ToggleButtonAccessiblePrivate {
    constructor(copy: ToggleButtonAccessiblePrivate);
}
export class ToggleButtonPrivate {
    constructor(copy: ToggleButtonPrivate);
}
export class ToggleToolButtonPrivate {
    constructor(copy: ToggleToolButtonPrivate);
}
export class ToolButtonPrivate {
    constructor(copy: ToolButtonPrivate);
}
export class ToolItemGroupPrivate {
    constructor(copy: ToolItemGroupPrivate);
}
export class ToolItemPrivate {
    constructor(copy: ToolItemPrivate);
}
export class ToolPalettePrivate {
    constructor(copy: ToolPalettePrivate);
}
export class ToolbarPrivate {
    constructor(copy: ToolbarPrivate);
}
export class ToplevelAccessiblePrivate {
    constructor(copy: ToplevelAccessiblePrivate);
}
export class TreeIter {
    constructor(properties?: {
        stamp?: number;
        user_data?: any;
        user_data2?: any;
        user_data3?: any;
    });
    constructor(copy: TreeIter);
    // Fields
    stamp: number;
    user_data: any;
    user_data2: any;
    user_data3: any;
    // Members
    copy(): TreeIter;
    free(): void;
}
export class TreeModelFilterPrivate {
    constructor(copy: TreeModelFilterPrivate);
}
export class TreeModelSortPrivate {
    constructor(copy: TreeModelSortPrivate);
}
export class TreePath {
    constructor();
    constructor(copy: TreePath);
    // Constructors
    static ["new"](): TreePath;
    static new_first(): TreePath;
    static new_from_indices(indices: number[]): TreePath;
    static new_from_string(path: string): TreePath;
    // Members
    append_index(index_: number): void;
    compare(b: TreePath): number;
    copy(): TreePath;
    down(): void;
    free(): void;
    get_depth(): number;
    get_indices(): number[];
    is_ancestor(descendant: TreePath): boolean;
    is_descendant(ancestor: TreePath): boolean;
    next(): void;
    prepend_index(index_: number): void;
    prev(): boolean;
    to_string(): string;
    up(): boolean;
}
export class TreeRowReference {
    constructor(model: TreeModel, path: TreePath);
    constructor(copy: TreeRowReference);
    // Constructors
    static ["new"](model: TreeModel, path: TreePath): TreeRowReference;
    static new_proxy(proxy: GObject.Object, model: TreeModel, path: TreePath): TreeRowReference;
    // Members
    copy(): TreeRowReference;
    free(): void;
    get_model(): TreeModel;
    get_path(): TreePath | null;
    valid(): boolean;
    static deleted(proxy: GObject.Object, path: TreePath): void;
    static inserted(proxy: GObject.Object, path: TreePath): void;
}
export class TreeSelectionPrivate {
    constructor(copy: TreeSelectionPrivate);
}
export class TreeStorePrivate {
    constructor(copy: TreeStorePrivate);
}
export class TreeViewAccessiblePrivate {
    constructor(copy: TreeViewAccessiblePrivate);
}
export class TreeViewColumnPrivate {
    constructor(copy: TreeViewColumnPrivate);
}
export class TreeViewPrivate {
    constructor(copy: TreeViewPrivate);
}
export class UIManagerPrivate {
    constructor(copy: UIManagerPrivate);
}
export class ViewportPrivate {
    constructor(copy: ViewportPrivate);
}
export class WidgetAccessiblePrivate {
    constructor(copy: WidgetAccessiblePrivate);
}
export class WidgetClassPrivate {
    constructor(copy: WidgetClassPrivate);
}
export class WidgetPath {
    constructor();
    constructor(copy: WidgetPath);
    // Constructors
    static ["new"](): WidgetPath;
    // Members
    append_for_widget(widget: Widget): number;
    append_type(type: GType): number;
    append_with_siblings(siblings: WidgetPath, sibling_index: number): number;
    copy(): WidgetPath;
    free(): void;
    get_object_type(): GType;
    has_parent(type: GType): boolean;
    is_type(type: GType): boolean;
    iter_add_class(pos: number, name: string): void;
    iter_add_region(pos: number, name: string, flags: RegionFlags): void;
    iter_clear_classes(pos: number): void;
    iter_clear_regions(pos: number): void;
    iter_get_name(pos: number): string | null;
    iter_get_object_name(pos: number): string | null;
    iter_get_object_type(pos: number): GType;
    iter_get_sibling_index(pos: number): number;
    iter_get_siblings(pos: number): WidgetPath;
    iter_get_state(pos: number): StateFlags;
    iter_has_class(pos: number, name: string): boolean;
    iter_has_name(pos: number, name: string): boolean;
    iter_has_qclass(pos: number, qname: GLib.Quark): boolean;
    iter_has_qname(pos: number, qname: GLib.Quark): boolean;
    iter_has_qregion(pos: number, qname: GLib.Quark): [boolean, RegionFlags];
    iter_has_region(pos: number, name: string): [boolean, RegionFlags];
    iter_list_classes(pos: number): GLib.SList;
    iter_list_regions(pos: number): GLib.SList;
    iter_remove_class(pos: number, name: string): void;
    iter_remove_region(pos: number, name: string): void;
    iter_set_name(pos: number, name: string): void;
    iter_set_object_name(pos: number, name: string | null): void;
    iter_set_object_type(pos: number, type: GType): void;
    iter_set_state(pos: number, state: StateFlags): void;
    length(): number;
    prepend_type(type: GType): void;
    ref(): WidgetPath;
    to_string(): string;
    unref(): void;
}
export class WidgetPrivate {
    constructor(copy: WidgetPrivate);
}
export class WindowAccessiblePrivate {
    constructor(copy: WindowAccessiblePrivate);
}
export class WindowGeometryInfo {
    constructor(copy: WindowGeometryInfo);
}
export class WindowGroupPrivate {
    constructor(copy: WindowGroupPrivate);
}
export class WindowPrivate {
    constructor(copy: WindowPrivate);
}
export interface ActionableNamespace {
    $gtype: GType;
}
export interface Actionable extends Widget {
    // Properties
    action_name: string;
    action_target: GLib.Variant;
    // Members
    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name: string | null): void;
    set_action_target_value(target_value: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name: string | null): void;
    vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
}

export const Actionable: ActionableNamespace;
export interface ActivatableNamespace {
    $gtype: GType;
}
export interface Activatable extends GObject.Object {
    // Properties
    related_action: Action;
    use_action_appearance: boolean;
    // Members
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action: Action | null): void;
    vfunc_sync_action_properties(action: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}

export const Activatable: ActivatableNamespace;
export interface AppChooserNamespace {
    $gtype: GType;
}
export interface AppChooser extends Widget {
    // Properties
    content_type: string;
    // Members
    get_app_info(): Gio.AppInfo | null;
    get_content_type(): string;
    refresh(): void;
}

export const AppChooser: AppChooserNamespace;
export interface BuildableNamespace {
    $gtype: GType;
}
export interface Buildable extends GObject.Object {
    // Members
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
    vfunc_custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_name(name: string): void;
}

export const Buildable: BuildableNamespace;
export interface CellAccessibleParentNamespace {
    $gtype: GType;
}
export interface CellAccessibleParent extends GObject.Object {
    // Members
    activate(cell: CellAccessible): void;
    edit(cell: CellAccessible): void;
    expand_collapse(cell: CellAccessible): void;
    get_cell_area(cell: CellAccessible): Gdk.Rectangle;
    get_cell_extents(cell: CellAccessible, coord_type: Atk.CoordType): [number, number, number, number];
    get_cell_position(cell: CellAccessible): [number, number];
    get_child_index(cell: CellAccessible): number;
    get_column_header_cells(cell: CellAccessible): Atk.Object[];
    get_renderer_state(cell: CellAccessible): CellRendererState;
    get_row_header_cells(cell: CellAccessible): Atk.Object[];
    grab_focus(cell: CellAccessible): boolean;
    update_relationset(cell: CellAccessible, relationset: Atk.RelationSet): void;
    vfunc_activate(cell: CellAccessible): void;
    vfunc_edit(cell: CellAccessible): void;
    vfunc_expand_collapse(cell: CellAccessible): void;
    vfunc_get_cell_area(cell: CellAccessible): Gdk.Rectangle;
    vfunc_get_cell_extents(cell: CellAccessible, coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_cell_position(cell: CellAccessible): [number, number];
    vfunc_get_child_index(cell: CellAccessible): number;
    vfunc_get_column_header_cells(cell: CellAccessible): Atk.Object[];
    vfunc_get_renderer_state(cell: CellAccessible): CellRendererState;
    vfunc_get_row_header_cells(cell: CellAccessible): Atk.Object[];
    vfunc_grab_focus(cell: CellAccessible): boolean;
    vfunc_update_relationset(cell: CellAccessible, relationset: Atk.RelationSet): void;
}

export const CellAccessibleParent: CellAccessibleParentNamespace;
export interface CellEditableNamespace {
    $gtype: GType;
}
export interface CellEditable extends Widget {
    // Properties
    editing_canceled: boolean;
    // Members
    editing_done(): void;
    remove_widget(): void;
    start_editing(event: Gdk.Event | null): void;
    vfunc_editing_done(): void;
    vfunc_remove_widget(): void;
    vfunc_start_editing(event: Gdk.Event | null): void;
}

export const CellEditable: CellEditableNamespace;
export interface CellLayoutNamespace {
    $gtype: GType;
}
export interface CellLayout extends GObject.Object {
    // Members
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): GLib.List;
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): GLib.List;
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, destroy: GLib.DestroyNotify): void;
}

export const CellLayout: CellLayoutNamespace;
export interface ColorChooserNamespace {
    $gtype: GType;
}
export interface ColorChooser extends GObject.Object {
    // Properties
    rgba: Gdk.RGBA;
    use_alpha: boolean;
    // Members
    add_palette(orientation: Orientation, colors_per_line: number, colors: Gdk.RGBA[] | null): void;
    get_rgba(): Gdk.RGBA;
    get_use_alpha(): boolean;
    set_rgba(color: Gdk.RGBA): void;
    set_use_alpha(use_alpha: boolean): void;
    vfunc_add_palette(orientation: Orientation, colors_per_line: number, colors: Gdk.RGBA[] | null): void;
    vfunc_color_activated(color: Gdk.RGBA): void;
    vfunc_get_rgba(): Gdk.RGBA;
    vfunc_set_rgba(color: Gdk.RGBA): void;
}

export const ColorChooser: ColorChooserNamespace;
export interface EditableNamespace {
    $gtype: GType;
}
export interface Editable extends GObject.Object {
    // Members
    copy_clipboard(): void;
    cut_clipboard(): void;
    delete_selection(): void;
    delete_text(start_pos: number, end_pos: number): void;
    get_chars(start_pos: number, end_pos: number): string;
    get_editable(): boolean;
    get_position(): number;
    get_selection_bounds(): [boolean, number | null, number | null];
    insert_text(new_text: string, new_text_length: number, position: number): number;
    paste_clipboard(): void;
    select_region(start_pos: number, end_pos: number): void;
    set_editable(is_editable: boolean): void;
    set_position(position: number): void;
    vfunc_changed(): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_get_chars(start_pos: number, end_pos: number): string;
    vfunc_get_position(): number;
    vfunc_get_selection_bounds(): [boolean, number | null, number | null];
    vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_set_position(position: number): void;
    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}

export const Editable: EditableNamespace;
export interface FileChooserNamespace {
    $gtype: GType;
}
export interface FileChooser extends GObject.Object {
    // Properties
    action: FileChooserAction;
    create_folders: boolean;
    do_overwrite_confirmation: boolean;
    extra_widget: Widget;
    filter: FileFilter;
    local_only: boolean;
    preview_widget: Widget;
    preview_widget_active: boolean;
    select_multiple: boolean;
    show_hidden: boolean;
    use_preview_label: boolean;
    // Members
    add_choice(id: string, label: string, options: string[] | null, option_labels: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): GLib.SList;
    get_files(): GLib.SList;
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): GLib.SList;
    get_use_preview_label(): boolean;
    list_filters(): GLib.SList;
    list_shortcut_folder_uris(): GLib.SList | null;
    list_shortcut_folders(): GLib.SList | null;
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
}

export const FileChooser: FileChooserNamespace;
export interface FontChooserNamespace {
    $gtype: GType;
}
export interface FontChooser extends GObject.Object {
    // Properties
    font: string;
    font_desc: Pango.FontDescription;
    font_features: string;
    language: string;
    level: FontChooserLevel;
    preview_text: string;
    show_preview_entry: boolean;
    // Members
    get_font(): string | null;
    get_font_desc(): Pango.FontDescription | null;
    get_font_face(): Pango.FontFace | null;
    get_font_family(): Pango.FontFamily | null;
    get_font_features(): string;
    get_font_map(): Pango.FontMap | null;
    get_font_size(): number;
    get_language(): string;
    get_level(): FontChooserLevel;
    get_preview_text(): string;
    get_show_preview_entry(): boolean;
    set_filter_func(filter: FontFilterFunc | null, destroy: GLib.DestroyNotify): void;
    set_font(fontname: string): void;
    set_font_desc(font_desc: Pango.FontDescription): void;
    set_font_map(fontmap: Pango.FontMap | null): void;
    set_language(language: string): void;
    set_level(level: FontChooserLevel): void;
    set_preview_text(text: string): void;
    set_show_preview_entry(show_preview_entry: boolean): void;
    vfunc_font_activated(fontname: string): void;
    vfunc_get_font_face(): Pango.FontFace | null;
    vfunc_get_font_family(): Pango.FontFamily | null;
    vfunc_get_font_map(): Pango.FontMap | null;
    vfunc_get_font_size(): number;
    vfunc_set_filter_func(filter: FontFilterFunc | null, destroy: GLib.DestroyNotify): void;
    vfunc_set_font_map(fontmap: Pango.FontMap | null): void;
}

export const FontChooser: FontChooserNamespace;
export interface OrientableNamespace {
    $gtype: GType;
}
export interface Orientable extends GObject.Object {
    // Properties
    orientation: Orientation;
    // Members
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}

export const Orientable: OrientableNamespace;
export interface PrintOperationPreviewNamespace {
    $gtype: GType;
}
export interface PrintOperationPreview extends GObject.Object {
    // Members
    end_preview(): void;
    is_selected(page_nr: number): boolean;
    render_page(page_nr: number): void;
    vfunc_end_preview(): void;
    vfunc_got_page_size(context: PrintContext, page_setup: PageSetup): void;
    vfunc_is_selected(page_nr: number): boolean;
    vfunc_ready(context: PrintContext): void;
    vfunc_render_page(page_nr: number): void;
}

export const PrintOperationPreview: PrintOperationPreviewNamespace;
export interface RecentChooserNamespace {
    $gtype: GType;
}
export interface RecentChooser extends GObject.Object {
    // Properties
    filter: RecentFilter;
    limit: number;
    local_only: boolean;
    recent_manager: RecentManager;
    select_multiple: boolean;
    show_icons: boolean;
    show_not_found: boolean;
    show_private: boolean;
    show_tips: boolean;
    sort_type: RecentSortType;
    // Members
    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): GLib.List;
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): string[];
    list_filters(): GLib.SList;
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, data_destroy: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
    vfunc_add_filter(filter: RecentFilter): void;
    vfunc_get_current_uri(): string;
    vfunc_get_items(): GLib.List;
    vfunc_item_activated(): void;
    vfunc_list_filters(): GLib.SList;
    vfunc_remove_filter(filter: RecentFilter): void;
    vfunc_select_all(): void;
    vfunc_select_uri(uri: string): boolean;
    vfunc_selection_changed(): void;
    vfunc_set_current_uri(uri: string): boolean;
    vfunc_set_sort_func(sort_func: RecentSortFunc, data_destroy: GLib.DestroyNotify | null): void;
    vfunc_unselect_all(): void;
    vfunc_unselect_uri(uri: string): void;
}

export const RecentChooser: RecentChooserNamespace;
export interface ScrollableNamespace {
    $gtype: GType;
}
export interface Scrollable extends GObject.Object {
    // Properties
    hadjustment: Adjustment;
    hscroll_policy: ScrollablePolicy;
    vadjustment: Adjustment;
    vscroll_policy: ScrollablePolicy;
    // Members
    get_border(): [boolean, Border];
    get_hadjustment(): Adjustment;
    get_hscroll_policy(): ScrollablePolicy;
    get_vadjustment(): Adjustment;
    get_vscroll_policy(): ScrollablePolicy;
    set_hadjustment(hadjustment: Adjustment | null): void;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vadjustment(vadjustment: Adjustment | null): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}

export const Scrollable: ScrollableNamespace;
export interface StyleProviderNamespace {
    $gtype: GType;
}
export interface StyleProvider extends GObject.Object {
    // Members
    get_icon_factory(path: WidgetPath): IconFactory | null;
    get_style(path: WidgetPath): StyleProperties | null;
    get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, GObject.Value];
    vfunc_get_icon_factory(path: WidgetPath): IconFactory | null;
    vfunc_get_style(path: WidgetPath): StyleProperties | null;
    vfunc_get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, GObject.Value];
}

export const StyleProvider: StyleProviderNamespace;
export interface ToolShellNamespace {
    $gtype: GType;
}
export interface ToolShell extends Widget {
    // Members
    get_ellipsize_mode(): Pango.EllipsizeMode;
    get_icon_size(): number;
    get_orientation(): Orientation;
    get_relief_style(): ReliefStyle;
    get_style(): ToolbarStyle;
    get_style(...args: never[]): never;
    get_text_alignment(): number;
    get_text_orientation(): Orientation;
    get_text_size_group(): SizeGroup;
    rebuild_menu(): void;
    vfunc_get_ellipsize_mode(): Pango.EllipsizeMode;
    vfunc_get_icon_size(): IconSize;
    vfunc_get_orientation(): Orientation;
    vfunc_get_relief_style(): ReliefStyle;
    vfunc_get_style(): ToolbarStyle;
    vfunc_get_text_alignment(): number;
    vfunc_get_text_orientation(): Orientation;
    vfunc_get_text_size_group(): SizeGroup;
    vfunc_rebuild_menu(): void;
}

export const ToolShell: ToolShellNamespace;
export interface TreeDragDestNamespace {
    $gtype: GType;
}
export interface TreeDragDest extends GObject.Object {
    // Members
    drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
    vfunc_drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
}

export const TreeDragDest: TreeDragDestNamespace;
export interface TreeDragSourceNamespace {
    $gtype: GType;
}
export interface TreeDragSource extends GObject.Object {
    // Members
    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
    vfunc_drag_data_delete(path: TreePath): boolean;
    vfunc_drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_draggable(path: TreePath): boolean;
}

export const TreeDragSource: TreeDragSourceNamespace;
export interface TreeModelNamespace {
    $gtype: GType;
}
export interface TreeModel extends GObject.Object {
    // Members
    filter_new(root: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc): void;
    get_column_type(index_: number): GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): GObject.Value;
    iter_children(parent: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered(path: TreePath, iter: TreeIter | null, new_order: number[]): void;
    unref_node(iter: TreeIter): void;
    vfunc_get_column_type(index_: number): GType;
    vfunc_get_flags(): TreeModelFlags;
    vfunc_get_iter(path: TreePath): [boolean, TreeIter];
    vfunc_get_n_columns(): number;
    vfunc_get_path(iter: TreeIter): TreePath;
    vfunc_get_value(iter: TreeIter, column: number): GObject.Value;
    vfunc_iter_children(parent: TreeIter | null): [boolean, TreeIter];
    vfunc_iter_has_child(iter: TreeIter): boolean;
    vfunc_iter_n_children(iter: TreeIter | null): number;
    vfunc_iter_next(iter: TreeIter): boolean;
    vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
    vfunc_iter_previous(iter: TreeIter): boolean;
    vfunc_ref_node(iter: TreeIter): void;
    vfunc_row_changed(path: TreePath, iter: TreeIter): void;
    vfunc_row_deleted(path: TreePath): void;
    vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
    vfunc_unref_node(iter: TreeIter): void;
}

export const TreeModel: TreeModelNamespace;
export interface TreeSortableNamespace {
    $gtype: GType;
}
export interface TreeSortable extends TreeModel {
    // Members
    get_sort_column_id(): [boolean, number, SortType];
    has_default_sort_func(): boolean;
    set_default_sort_func(sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    set_sort_column_id(sort_column_id: number, order: SortType): void;
    set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    sort_column_changed(): void;
    vfunc_get_sort_column_id(): [boolean, number, SortType];
    vfunc_has_default_sort_func(): boolean;
    vfunc_set_default_sort_func(sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
    vfunc_set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy: GLib.DestroyNotify | null): void;
    vfunc_sort_column_changed(): void;
}

export const TreeSortable: TreeSortableNamespace;

export type Allocation = Gdk.Rectangle;

export type Stock = string;