/**
 * Calculate a gradient between two colors.
 *
 * @param start
 * @param stop
 * @param length
 */
export function calculateGradient(from: string, to: string, length: number) {
    const fromHex = hextorgb(from);
    const toHex = hextorgb(to);

    const step = {
        r: (toHex.r - fromHex.r ) / length,
        g: (toHex.g - fromHex.g) / length,
        b: (toHex.b - fromHex.b) / length,
    };

    const gradient = [];

    for (let i = 0; i < length; i++) {
        gradient.push({
            r: Math.round(fromHex.r + (step.r * i)),
            g: Math.round(fromHex.g + (step.g * i)),
            b: Math.round(fromHex.b + (step.b * i)),
        });
    }

    return gradient;
}

/**
 * Parse RGB values from a hex color
 *
 * @param hex
 */
export function hextorgb(hex: string) {
    const color = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (color === null) {
        return { r: 0, g: 0, b: 0 };
    }

    return {
        r: parseInt(color[1], 16),
        g: parseInt(color[2], 16),
        b: parseInt(color[3], 16),
    };
}

/**
 * Convert RGB values to a hex color
 *
 * @param r
 * @param g
 * @param b
 */
export function rgbtohex(r: number, g: number, b: number) {
    const hex = [];

    hex.push(r.toString(16));
    hex.push(g.toString(16));
    hex.push(b.toString(16));

    return hex.map((color) => {
        if (color.length === 1) {
            color += '0';
        }

        return color;
    });
}
