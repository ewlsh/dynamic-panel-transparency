/* exported get_tweaks, by_uuid */

const get_tweaks = function() {
    return [
        {
            'uuid': 'drop-down-terminal@gs-extensions.zzrough.org',
            'name': 'Drop Down Terminal',
            'wm_class': 'DropDownTerminalWindow',
            'trigger': true
        }
    ];
};

const by_uuid = function(uuid) {
    for (let tweak of get_tweaks()) {
        if (uuid === tweak.uuid) {
            return tweak;
        }
    }
    return null;
};