/* exported prefs */

/* Hack a bit to allow organized preferences. */

// Get the extension path.
const Me = imports.misc.extensionUtils.getCurrentExtension();

// Add the prefs.js files to the searchPath
// TODO: Figure out why I have to do this instead of Me.imports or even just Me['path] :\
imports.searchPath.unshift(Me['path'] + '/prefs.js/');

// Define prefs, so that imports can find it.
const prefs = imports.main;

