// Gnome Shell
declare namespace global {
  var screen: any;
  var workspace_manager: any;
  var window_manager: any;
  var get_window_actors: () => any[];
  var window_group: any;
  var display: any;
  var stage: any;
}

// Type Stubs
type WindowActor = any;

// GJS
declare function log(msg: string): void;

// Utility
type Module = { exports?: { [key: string]: any } };