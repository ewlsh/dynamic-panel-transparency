/* Utilities */

function validate(a, b) {
    return (!is_undef(a) ? a : b);
}

function is_undef(a) {
    return (typeof(a) === 'undefined' || a === null);
}