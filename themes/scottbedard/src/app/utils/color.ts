export type rgbArray = [number, number, number];

/**
 * Calculate a gradient between two colors.
 *
 * @param  {string|rgbArray}    fromColor   starting color for the gradient
 * @param  {string|rgbArray}    toColor     ending color for the gradient
 * @param  {number}             size        number of colors in the final gradient
 * @param  {'hex'|'rgb'}        format      output format for the gradient
 */
export function calculateGradient(
    fromColor: string|rgbArray,
    toColor: string|rgbArray,
    size: number = 3,
    format: 'rgb' | 'hex' = 'rgb',
) {
    // convert our two colors into consistent rgb values
    const fromRgb = typeof fromColor === 'string' ? hexToRgb(fromColor) : fromColor;
    const toRgb = typeof toColor === 'string' ? hexToRgb(toColor) : toColor;

    // calculate the step between each color in the gradient
    const stepRgb: rgbArray = [
        (toRgb[0] - fromRgb[0]) / (size - 1),
        (toRgb[1] - fromRgb[1]) / (size - 1),
        (toRgb[2] - fromRgb[2]) / (size - 1),
    ];

    // compose a gradient between our two colors
    const gradientRgb = new Array(size).fill(null).map((n, i) => [
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
 * @param  {string} value - hexadecimal color value such as #abcdef
 * @return {[number, number, number]}
 */
export function hexToRgb(value: string): rgbArray {
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
export function rgbToHex(red: number, green: number, blue: number): string {
    const rHex = red.toString(16).padStart(2, '0');
    const gHex = green.toString(16).padStart(2, '0');
    const bHex = blue.toString(16).padStart(2, '0');

    return `#${rHex}${gHex}${bHex}`;
}
