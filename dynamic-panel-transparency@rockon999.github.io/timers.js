const Mainloop = imports.mainloop;

let removed = new Set();

/**
 * @param {(...args: any[]) => any} handler
 * @param {number} ms
 * @returns {number}
 */
export function setTimeout(handler, ms, ...args) {
    let id = Mainloop.timeout_add(ms, () => {
        if (removed.has(id)) {
            return true;
        }

        handler?.(...args);
        return false;
    });

    removed.delete(id);

    return id;
}

/**
 * @param {(...args: any[]) => any} handler
 * @param {number} ms
 * @returns {number}
 */
export function setInterval(handler, ms, ...args) {
    let id = Mainloop.timeout_add(ms, () => {
        if (removed.has(id)) {
            return true;
        }

        handler?.(...args);
        return true;
    });

    removed.delete(id);

    return id;
}

/**
 * @param {number} id
 */
export function clearTimeout(id) {
    removed.add(id);
    Mainloop.source_remove(id);
}

/**
 * @param {number} id
 */
export function clearInterval(id) {
    removed.add(id);
    Mainloop.source_remove(id);
}
