/**
 * Test if something is an array.
 *
 * @param  {any}        val
 * @return {boolean}
 */
export function isArray(val) {
    return Array.isArray(val);
}

/**
 * Test if something is a string.
 *
 * @param  {any}        val
 * @return {boolean}
 */
export function isString(val) {
    return typeof val === 'string';
}
