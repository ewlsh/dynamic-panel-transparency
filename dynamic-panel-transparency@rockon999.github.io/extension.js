/** @typedef {import('./main.js').DptExtension} DptExtension */

/** @type {Promise<null | { new(): DptExtension }>} */
let asyncInit;

function init() {
    asyncInit = import('./main.js')
        .then(({ DptExtension }) => {
            return DptExtension;
        })
        .catch((error) => {
            logError(error);
            log('[Dynamic Panel Transparency] Failed to load.');

            return null;
        });
}

/** @type {DptExtension | null} */
let extension = null;

function enable() {
    asyncInit
        .then((DptExtension) => {
            if (!DptExtension) return;

            extension = new DptExtension();

            extension.enable();
        })
        .catch((error) => {
            logError(error);
            log('[Dynamic Panel Transparency] Failed to enable.');
        });
}

function disable() {
    extension?.disable();
}
