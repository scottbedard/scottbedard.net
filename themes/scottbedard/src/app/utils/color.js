/* eslint-disable no-use-before-define */
import { createArray } from './array';

/**
 * Calculate a gradient between two colors.
 *
 * @param  {string|number[]}    fromColor   starting color for the gradient
 * @param  {string|number[]}    toColor     ending color for the gradient
 * @param  {number}             size        number of colors in the final gradient
 * @param  {'hex'|'rgb'}        format      output format for the gradient
 */
export function blend(fromColor, toColor, size = 3, format = 'rgb') {
    // convert our two colors into rgb values
    const fromRgb = typeof fromColor === 'string' ? hexToRgb(fromColor) : fromColor;
    const toRgb = typeof toColor === 'string' ? hexToRgb(toColor) : toColor;

    // calculate the step between each color in the gradient
    const steps = size - 1;

    const stepRgb = [
        (toRgb[0] - fromRgb[0]) / steps,
        (toRgb[1] - fromRgb[1]) / steps,
        (toRgb[2] - fromRgb[2]) / steps,
    ];

    // compose a gradient between our two colors
    const gradientRgb = createArray(size).map((n, i) => [
        Math.round(fromRgb[0] + (stepRgb[0] * i)),
        Math.round(fromRgb[1] + (stepRgb[1] * i)),
        Math.round(fromRgb[2] + (stepRgb[2] * i)),
    ]);

    // and finally, return our gradient in the desired format
    return format === 'hex'
        ? gradientRgb.map(([r, g, b]) => rgbToHex(r, g, b))
        : gradientRgb;
}

/**
 * Convert a hexadecimal color string from css into red, green, and blue values;
 *
 * @param  {string}     value   hexadecimal color value such as #abcdef
 * @return {number[]}
 */
export function hexToRgb(value) {
    const color = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);

    if (color === null) {
        throw new Error(`Invalid hexadecimal color string "${value}"`);
    }

    return [
        parseInt(color[1], 16),
        parseInt(color[2], 16),
        parseInt(color[3], 16),
    ];
}

/**
 * Convert RGB values to a hexadecimal string ready for use in css.
 *
 * @param  {number} red     red value (0 to 255)
 * @param  {number} green   green value (0 to 255)
 * @param  {number} blue    blue value (0 to 255)
 * @return {string}
 */
export function rgbToHex(red, green, blue) {
    const rHex = red.toString(16).padStart(2, '0');
    const gHex = green.toString(16).padStart(2, '0');
    const bHex = blue.toString(16).padStart(2, '0');

    return `#${rHex}${gHex}${bHex}`;
}
