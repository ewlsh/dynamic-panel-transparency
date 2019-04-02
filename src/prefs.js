/* exported init, buildPrefsWidget */

const _dpt_prefs_path = `${imports.misc.extensionUtils.getCurrentExtension().path}/preferences/`;

/* Add the prefs.js files to the searchPath */
if (imports.searchPath.indexOf(_dpt_prefs_path) === -1) {
  imports.searchPath.unshift(_dpt_prefs_path);
}

function init() {
  imports.main.init();
}

/* Define prefs so that imports can find it. */
function buildPrefsWidget() {
  return imports.main.buildPrefsWidget();
}
