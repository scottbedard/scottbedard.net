/*
 * Utility for converting colors, and calculating gradients
 */
export default class {

    /**
     * Calculate a gradient between two colors
     *
     * @param  {String|Object}  start
     * @param  {String|Object}  stop
     * @param  {Integer}        length
     * @return {Array}
     */
    static gradient(start, stop, length) {
        if (typeof start === 'string') {
            start = this.hextorgb(start);
        }

        if (typeof stop === 'string') {
            stop = this.hextorgb(stop);
        }

        let step = {
            r: (stop.r - start.r ) / length,
            g: (stop.g - start.g) / length,
            b: (stop.b - start.b) / length,
        };

        let gradient = [];
        for (let i = 0; i < length; i++) {
            gradient.push({
                r: Math.round(start.r + (step.r * i)),
                g: Math.round(start.g + (step.g * i)),
                b: Math.round(start.b + (step.b * i))
            });
        }

        return gradient;
    }

    /**
     * Convert a color from a hex value to RGB
     *
     * @param  {String}
     * @return {Object}
     *         - {Integer} r
     *         - {Integer} g
     *         - {Integer} b
     */
    static hextorgb(hex) {
        let color = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        return {
            r: parseInt(color[1], 16),
            g: parseInt(color[2], 16),
            b: parseInt(color[3], 16),
        };
    }

    /**
     * Converts an RGB color value to hex
     *
     * @param  {Integer}    r
     * @param  {Integer}    g
     * @param  {Integer}    b
     * @return {String}
     */
    static rgbtohex(r, g, b) {
        let hex = [];
        hex.push(r.toString(16));
        hex.push(g.toString(16));
        hex.push(b.toString(16));

        return hex.map(function(color) {
            if (color.length === 1) {
                color += '0';
            }

            return color;
        })
    }
}
