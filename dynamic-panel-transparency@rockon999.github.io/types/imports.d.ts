declare interface ImportMap {
  compat: typeof import('../compat');
  intellifade: typeof import('../intellifade');
  theming: typeof import('../theming');
  convenience: typeof import('../convenience');
  events: typeof import('../events');
  extension: typeof import('../extension');
  settings: typeof import('../settings');
  util: typeof import('../util');
  transitions: typeof import('../transitions');
  color_util: typeof import('../color_util');
}

declare interface CurrentExtension {
  metadata: typeof import('../metadata.json');
}
