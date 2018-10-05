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
 * Create an array containing a series or integers.
 *
 * @param  {number} size            the length of the array
 * @param  {number} initialValue    the starting number for the series
 * @return {Array}
 */
export function createSeries(size, initialValue = 0) {
    return createArray(size).map((val, i) => initialValue + i);
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
