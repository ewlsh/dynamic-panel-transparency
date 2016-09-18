/* exported prefs */

/* Hack a bit to allow organized preferences. */

/* Get the extension path. */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const PATH = Me['path'] + '/prefs.js/';

/* Add the prefs.js files to the searchPath */
/* TODO: Figure out why I have to do this instead of Me.imports or even just Me['path] */
if (imports.searchPath.indexOf(PATH) === -1) {
    imports.searchPath.unshift(PATH);
}

/* Define prefs, so that imports can find it. */
const prefs = imports.preferences.main;