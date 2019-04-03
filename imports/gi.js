export const {
  Gtk, Gdk, Gio, GLib, GObject
} = imports.gi;

export const Shell = {
  get St() {
    return imports.gi.St;
  },

  get Meta() {
    return imports.gi.Meta;
  },

  get Actor() {
    return imports.gi.Shell;
  }
};
