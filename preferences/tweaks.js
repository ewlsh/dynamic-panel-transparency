/* exported get_tweaks, by_uuid, by_name, by_wm_class */

export function get_tweaks() {
  return [
    {
      uuid: 'drop-down-terminal@gs-extensions.zzrough.org',
      name: 'Drop Down Terminal',
      wm_class: ['DropDownTerminalWindow', 'drop-down-terminal'],
      trigger: true
    }
  ];
}

export function by_uuid(uuid) {
  return get_tweaks().find(tweak => uuid === tweak.uuid) || null;
}

export function by_name(name) {
  for (const tweak of get_tweaks()) {
    if (name === tweak.name) {
      return tweak;
    }
  }
  return null;
}

export function by_wm_class(wm_class) {
  for (const tweak of get_tweaks()) {
    if (tweak.wm_class.indexOf(wm_class) !== -1) {
      return tweak;
    }
  }
  return null;
}
