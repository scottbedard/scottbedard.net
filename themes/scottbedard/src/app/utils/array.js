/**
 * Generate an array of a given size.
 *
 * @param  {number} size    the length of the array
 * @param  {any}    value   value to fill array with
 * @return {Array}
 */
export function createArray(size, value = null) {
    return new Array(size).fill(value);
}

/**
 * Determine if an array is empty.
 *
 * @param  {Array}      arr     the array being tested
 * @return {boolean}
 */
export function isEmpty(arr) {
    return arr.length === 0;
}
