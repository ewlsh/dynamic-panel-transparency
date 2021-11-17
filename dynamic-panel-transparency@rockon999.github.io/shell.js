// @ts-expect-error
import main from 'resource:///org/gnome/shell/ui/main.js';
// @ts-expect-error
import * as ExtensionUtils from 'resource:///org/gnome/shell/misc/extensionUtils.mjs';
// @ts-expect-error
const Config = imports.misc.config;

export { ExtensionUtils as extensionUtils };
export { main };
export { Config };
