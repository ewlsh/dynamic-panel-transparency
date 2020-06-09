declare interface Extension {
  extensionState: any;
  metadata: { [key: string]: any };
  dir: any;
  uuid: string;
  path: string;
}

declare interface CurrentExtension extends Extension {
  imports: {};
}

declare interface GiImports {
  [key: string]: any;
  Gtk: typeof import('gtk');
  GLib: typeof import('glib');
  Gio: typeof import('gio');
  GdkPixbuf: typeof import('gdkpixbuf');
  St: typeof import('st');
  Shell: typeof import('shell');
}

declare interface Imports {
  [key: string]: any;
  gi: GiImports;
  misc: {
    [key: string]: any;
    extensionUtils: {
      extensions: { [key: string]: Extension };
      getCurrentExtension: () => CurrentExtension;
    };
  };
}

declare var imports: Imports;
