//
// 3x3 cube
//
export default {

    /**
     * Animate turns for a 3x3 cube
     *
     * @param  {String} turn
     * @return {void}
     */
    executeTurn({ face, isPrime }) {
        let degrees = isPrime ? -90 : 90
        this.getStickers(face).forEach(sticker => sticker.rotation.z += degrees);
        this['executeTurn' + face](degrees);
        this.pendingTransitions = 21;
    },

    /**
     * U slice turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    executeTurnU(degrees) {
        this.getStickers('B', [0, 1, 2]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('R', [0, 1, 2]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('F', [0, 1, 2]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('L', [0, 1, 2]).forEach(sticker => sticker.rotation.y += -degrees);
    },

    /**
     * L turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    executeTurnL(degrees) {
        this.getStickers('U', [0, 3, 6]).forEach(sticker => sticker.rotation.x += -degrees);
        this.getStickers('F', [0, 3, 6]).forEach(sticker => sticker.rotation.x += -degrees);
        this.getStickers('D', [0, 3, 6]).forEach(sticker => sticker.rotation.x += -degrees);
        this.getStickers('B', [2, 5, 8]).forEach(sticker => sticker.rotation.x += -degrees);
    },

    /**
     * F turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    executeTurnF(degrees) {
        this.getStickers('U', [6, 7, 8]).forEach(sticker => sticker.rotation.y += degrees);
        this.getStickers('R', [0, 3, 6]).forEach(sticker => sticker.rotation.x += -degrees);
        this.getStickers('D', [0, 1, 2]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('L', [2, 5, 8]).forEach(sticker => sticker.rotation.x += degrees);
    },

    /**
     * R turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    executeTurnR(degrees) {
        this.getStickers('U', [2, 5, 8]).forEach(sticker => sticker.rotation.x += degrees);
        this.getStickers('B', [0, 3, 6]).forEach(sticker => sticker.rotation.x += degrees);
        this.getStickers('D', [2, 5, 8]).forEach(sticker => sticker.rotation.x += degrees);
        this.getStickers('F', [2, 5, 8]).forEach(sticker => sticker.rotation.x += degrees);
    },

    /**
     * D turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    executeTurnD(degrees) {
        this.getStickers('F', [6, 7, 8]).forEach(sticker => sticker.rotation.y += degrees);
        this.getStickers('R', [6, 7, 8]).forEach(sticker => sticker.rotation.y += degrees);
        this.getStickers('B', [6, 7, 8]).forEach(sticker => sticker.rotation.y += degrees);
        this.getStickers('L', [6, 7, 8]).forEach(sticker => sticker.rotation.y += degrees);
    },

    /**
     * B turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    executeTurnB(degrees) {
        this.getStickers('D', [6, 7, 8]).forEach(sticker => sticker.rotation.y += degrees);
        this.getStickers('L', [0, 3, 6]).forEach(sticker => sticker.rotation.x += -degrees);
        this.getStickers('U', [0, 1, 2]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('R', [2, 5, 8]).forEach(sticker => sticker.rotation.x += degrees);
    },

    /**
     * Translate a keypress into a move object
     *
     * @param  {Object|Null} e
     * @return {Object}
     */
    getMove(e) {
        switch (String.fromCharCode(e.keyCode)) {
            case 'J': return { face: 'U', isPrime: false };
            case 'F': return { face: 'U', isPrime: true };
            case 'D': return { face: 'L', isPrime: false };
            case 'E': return { face: 'L', isPrime: true };
            case 'H': return { face: 'F', isPrime: false };
            case 'G': return { face: 'F', isPrime: true };
            case 'I': return { face: 'R', isPrime: false };
            case 'K': return { face: 'R', isPrime: true };
            case 'W': return { face: 'B', isPrime: false };
            case 'O': return { face: 'B', isPrime: true };
            case 'S': return { face: 'D', isPrime: false };
            case 'L': return { face: 'D', isPrime: true };
        }

        return null;
    },

    /**
     * Returns the translation value of a sticker
     *
     * @param  {Integer} i
     * @return {Object}
     */
    getTranslation(i) {
        let px = 68,
            z = 104,
            translation = [
                { x: -px, y: -px, z }, // 0, upper left
                { x: 0,   y: -px, z }, // 1, upper middle
                { x: px,  y: -px, z }, // 2, upper right
                { x: -px, y: 0,   z }, // 3, middle left
                { x: 0,   y: 0,   z }, // 4, middle middle
                { x: px,  y: 0,   z }, // 5, middle right
                { x: -px, y: px,  z }, // 6, lower left
                { x: 0,   y: px,  z }, // 7, lower middle
                { x: px,  y: px,  z }, // 8, lower right
            ];

        return translation[i];
    },
};
