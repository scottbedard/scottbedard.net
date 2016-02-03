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
    },

    /**
     * U slice turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    executeTurnU(degrees) {
        this.getStickers('B', [0, 1, 2]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('R', [0, 1, 2]).forEach(sticker => sticker.rotation.x += -degrees);
        this.getStickers('F', [0, 1, 2]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('L', [0, 1, 2]).forEach(sticker => sticker.rotation.x += -degrees);
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
        this.getStickers('R', [0, 3, 6]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('D', [0, 1, 2]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('L', [2, 5, 8]).forEach(sticker => sticker.rotation.y += degrees);
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
        this.getStickers('R', [6, 7, 8]).forEach(sticker => sticker.rotation.x += degrees);
        this.getStickers('B', [6, 7, 8]).forEach(sticker => sticker.rotation.y += degrees);
        this.getStickers('L', [6, 7, 8]).forEach(sticker => sticker.rotation.x += degrees);
    },

    /**
     * B turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    executeTurnB(degrees) {
        this.getStickers('D', [6, 7, 8]).forEach(sticker => sticker.rotation.y += degrees);
        this.getStickers('L', [0, 3, 6]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('U', [0, 1, 2]).forEach(sticker => sticker.rotation.y += -degrees);
        this.getStickers('R', [2, 5, 8]).forEach(sticker => sticker.rotation.y += degrees);
    },
};
