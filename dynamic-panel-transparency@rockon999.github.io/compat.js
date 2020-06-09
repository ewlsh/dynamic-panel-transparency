/** @type {Module} */
var module = { };

const St = imports.gi.St;

/**
 * @param {object} obj
 */
function getActorOf(obj) {
    if (obj instanceof St.Widget) {
        return obj;
    }

    return /** @type {any} */ (obj).actor;
}

module.exports = { getActorOf };