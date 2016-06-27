const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const Settings = Me.imports.settings;
const Transitions = Me.imports.transitions;
const Extension = Me.imports.extension;
const Clutter = imports.gi.Clutter;
const Main = imports.ui.main;
const Lang = imports.lang;
const Config = imports.misc.config;
const Panel = Main.panel;
const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Gdk = imports.gi.Gdk;
const St = imports.gi.St;
const Util = Me.imports.util;

/* Color Array Indices */
const RED = 0;
const GREEN = 1;
const BLUE = 2;


const SCALE_FACTOR = 255.9999999;

function init() { this.stylesheets = []; this.styles = []; }

function cleanup() {
    for (let sheet of this.stylesheets) {
       let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();
       theme.unload_stylesheet(Util.get_file(sheet));
       log(sheet);
       Util.remove_file(sheet);
    }
    for(let style of this.styles){
        log(style);
        Panel.actor.remove_style_class_name(style);
    }
    this.stylesheets = null;
    this.styles = null;
}

function add_text_shadow(color = [0,0,0], icon_position = [0,2,5], text_position=[0,3,5], transparency = 0.5) {
    let red = color[0];
    let green = color[1];
    let blue = color[2];

    let color_css = 'rgba(' + red + ', ' + green + ', ' + blue + ', 1.0)'
    let tposition_css = ''+text_position[0]+'px '+text_position[1]+'px '+text_position[2]+'px';
    let iposition_css = ''+icon_position[0]+'px '+icon_position[1]+'px '+icon_position[2]+'px';

    apply_stylesheet_css('.dpt-panel-text-shadow .panel-button { text-shadow: ' + color_css + ' ' + tposition_css + ' }', 'panel-text-shadow');
    apply_stylesheet_css('.dpt-panel-icon-shadow .system-status-icon { icon-shadow: ' + color_css + ' ' + iposition_css + ' }', 'panel-icon-shadow');
    apply_stylesheet_css('.dpt-panel-arrow-shadow .popup-menu-arrow { icon-shadow: ' + color_css + ' ' + iposition_css + ' }', 'panel-arrow-shadow');

    Panel.actor.add_style_class_name('dpt-panel-text-shadow');
    Panel.actor.add_style_class_name('dpt-panel-icon-shadow');
    Panel.actor.add_style_class_name('dpt-panel-arrow-shadow');

     register_style('dpt-panel-text-shadow');
     register_style('dpt-panel-icon-shadow');
     register_style('dpt-panel-arrow-shadow');
}

function has_text_shadow() {
    return (Panel.actor.has_style_class_name('dpt-panel-text-shadow') || Panel.actor.has_style_class_name('dpt-panel-text-shadow') || Panel.actor.has_style_class_name('dpt-panel-text-shadow'));
}

function remove_text_shadow() {
    deregister_style('dpt-panel-text-shadow');
    deregister_style('dpt-panel-icon-shadow');
    deregister_style('dpt-panel-arrow-shadow');
    Panel.actor.remove_style_class_name('dpt-panel-icon-shadow');
    Panel.actor.remove_style_class_name('dpt-panel-text-shadow');
    Panel.actor.remove_style_class_name('dpt-panel-arrow-shadow');
}

function set_text_color(color) {
    let red = color[0];
    let green = color[1];
    let blue = color[2];

    let color_css = 'color: rgb(' + red + ', ' + green + ', ' + blue + ');'

    apply_stylesheet_css('.dpt-panel-text-color .panel-button { ' + color_css + ' }', 'panel-text-color');
    apply_stylesheet_css('.dpt-panel-icon-color .system-status-icon { ' + color_css + ' }', 'panel-icon-color');
    apply_stylesheet_css('.dpt-panel-arrow-color .popup-menu-arrow { ' + color_css + ' }', 'panel-arrow-color');

    Panel.actor.add_style_class_name('dpt-panel-text-color');
    Panel.actor.add_style_class_name('dpt-panel-icon-color');
    Panel.actor.add_style_class_name('dpt-panel-arrow-color');

     register_style('dpt-panel-text-color');
     register_style('dpt-panel-icon-color');
     register_style('dpt-panel-arrow-color');

}

function remove_text_color() {
    deregister_style('dpt-panel-text-color');
    deregister_style('dpt-panel-icon-color');
    deregister_style('dpt-panel-arrow-color');

    Panel.actor.remove_style_class_name('dpt-panel-text-color');
    Panel.actor.remove_style_class_name('dpt-panel-icon-color');
    Panel.actor.remove_style_class_name('dpt-panel-arrow-color');
}

function register_style(style){
    if(this.styles.indexOf(style) == -1)
      this.styles.push(style);
}

function deregister_style(style){
    let index = this.styles.indexOf(style);
    this.styles = this.styles.splice(0, index).concat(this.styles.splice(index + 1, this.styles.length));
}

function set_panel_color(params = {}) {
    let panel_color = get_background_color();
    let current_alpha = get_background_alpha(Panel.actor);
    Panel.actor.set_background_color(new Clutter.Color({
        red: Util.validate(params.red, panel_color[RED]),
        green: Util.validate(params.green, panel_color[GREEN]),
        blue: Util.validate(params.blue, panel_color[BLUE]),
        alpha: (Util.is_undef(params.opacity) ? current_alpha : params.opacity)
    }));
}

function set_corner_color(params = {}) {
    let panel_color = get_background_color();
    let current_alpha = get_background_alpha(Panel._leftCorner.actor);

    let opacity = Util.is_undef(params.opacity) ? current_alpha : params.opacity;
    let red = Util.validate(params.red, panel_color[RED]);
    let green = Util.validate(params.green, panel_color[GREEN]);
    let blue = Util.validate(params.blue, panel_color[BLUE]);
    let coloring = '-panel-corner-background-color: rgba(' + red + ', ' + green + ', ' + blue + ', ' + (opacity / SCALE_FACTOR) + ');' +
        '' + '-panel-corner-border-color: transparent;';
    Panel._leftCorner.actor.set_style(coloring);
    Panel._rightCorner.actor.set_style(coloring);
}

function clear_corner_color() {
    Panel._leftCorner.actor.set_style(null);
    Panel._rightCorner.actor.set_style(null);
}


function get_user_background_color(src) {
    if (Util.is_undef(src))
        return Settings.get_panel_color();
    let user_theme = src.get_theme_node();

    let background_color = user_theme.get_background_color();
    if (background_color === null)
        background_color = user_theme.lookup_color('background-color', true);
    if (Util.is_undef(background_color))
        return Settings.get_panel_color();
    return [
        background_color.red,
        background_color.green,
        background_color.blue,
    ];
}

function get_background_color() {
    if (Settings.detect_user_theme()) {
        if (Settings.get_user_theme_source().toLowerCase() == 'panel') {
            return get_user_background_color(Panel.actor);
        } else {
            return get_user_background_color(Main.overview._dash._container);
        }
    } else {
        return Settings.get_panel_color();
    }
}

function strip_panel_css() {
    Panel.actor.add_style_class_name('panel-transparency');
}

function reapply_panel_css() {
    Panel.actor.remove_style_class_name('panel-transparency');
}

/* Special Property Methods */

function get_background_alpha(actor) {
    return actor.get_background_color().alpha;
}

function set_background_alpha(actor, alpha) {
    let background_color = actor.get_background_color();
    actor.set_background_color(new Clutter.Color({
        red: background_color.red,
        green: background_color.green,
        blue: background_color.blue,
        alpha: alpha
    }));
}

/*function get_gtk_background_alpha(actor) {
    return actor.get_style_context().get_background_color().alpha;
}*/

/*function set_gtk_background_alpha(actor, alpha) {
    let background_color = actor.get_style_context().get_background_color();
    actor.override_background_color(Gtk.StateType.NORMAL, new Gdk.RGBA({
        red: background_color.red,
        green: background_color.green,
        blue: background_color.blue,
        alpha: alpha
    }));
}
*/
function apply_stylesheet_css(css, name){
  let file_name = Me.dir.get_path() + "/styles/" + name + ".dpt.css";
  /* Write to the file. */
  Util.write_to_file(file_name, css);
  let theme = St.ThemeContext.get_for_stage(global.stage).get_theme();
  if(theme.load_stylesheet(Util.get_file(file_name))){
      this.stylesheets.push(file_name);
  } else {
      log('Error Loading Temporary Stylesheet: ' + name);
  }
  return file_name;
}