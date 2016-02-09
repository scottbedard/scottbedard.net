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
    animateTurn({ face, isPrime, isFull }) {
        let degrees = isPrime ? -90 : 90
        this['animateTurn' + face](degrees);
    },

    /**
     * U slice turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    animateTurnU(degrees) {
        this.pendingTransitions = 21;
        let U = this.animate(this.getStickers('U'), 'z', degrees),
            B = this.animate(this.getStickers('B', [0, 1, 2]), 'y', -degrees),
            R = this.animate(this.getStickers('R', [0, 1, 2]), 'y', -degrees),
            F = this.animate(this.getStickers('F', [0, 1, 2]), 'y', -degrees),
            L = this.animate(this.getStickers('L', [0, 1, 2]), 'y', -degrees);

        this.pendingRepaints.push(() => {
            this.turnFace(U, degrees > 0);
            this.turnBand([B, R, F, L], degrees > 0);
        });
    },

    /**
     * L turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    animateTurnL(degrees) {
        this.pendingTransitions = 21;
        let L = this.animate(this.getStickers('L'), 'z', degrees),
            U = this.animate(this.getStickers('U', [0, 3, 6]), 'x', -degrees),
            F = this.animate(this.getStickers('F', [0, 3, 6]), 'x', -degrees),
            D = this.animate(this.getStickers('D', [0, 3, 6]), 'x', -degrees),
            B = this.animate(this.getStickers('B', [8, 5, 2]), 'x', -degrees);

        this.pendingRepaints.push(() => {
            this.turnFace(L, degrees > 0);
            this.turnBand([U, F, D, B], degrees > 0);
        });
    },

    /**
     * F turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    animateTurnF(degrees) {
        this.pendingTransitions = 21;
        let F = this.animate(this.getStickers('F'), 'z', degrees),
            U = this.animate(this.getStickers('U', [6, 7, 8]), 'y', degrees),
            R = this.animate(this.getStickers('R', [0, 3, 6]), 'x', -degrees),
            D = this.animate(this.getStickers('D', [2, 1, 0]), 'y', -degrees),
            L = this.animate(this.getStickers('L', [8, 5, 2]), 'x', degrees);

        this.pendingRepaints.push(() => {
            this.turnFace(F, degrees > 0);
            this.turnBand([U, R, D, L], degrees > 0);
        });
    },

    /**
     * R turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    animateTurnR(degrees) {
        this.pendingTransitions = 21;
        let R = this.animate(this.getStickers('R'), 'z', degrees),
            U = this.animate(this.getStickers('U', [8, 5, 2]), 'x', degrees),
            B = this.animate(this.getStickers('B', [0, 3, 6]), 'x', degrees),
            D = this.animate(this.getStickers('D', [8, 5, 2]), 'x', degrees),
            F = this.animate(this.getStickers('F', [8, 5, 2]), 'x', degrees);

        this.pendingRepaints.push(() => {
            this.turnFace(R, degrees > 0);
            this.turnBand([U, B, D, F], degrees > 0);
        });
    },

    /**
     * D turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    animateTurnD(degrees) {
        this.pendingTransitions = 21;
        let D = this.animate(this.getStickers('D'), 'z', degrees),
            F = this.animate(this.getStickers('F', [6, 7, 8]), 'y', degrees),
            R = this.animate(this.getStickers('R', [6, 7, 8]), 'y', degrees),
            B = this.animate(this.getStickers('B', [6, 7, 8]), 'y', degrees),
            L = this.animate(this.getStickers('L', [6, 7, 8]), 'y', degrees);

        this.pendingRepaints.push(() => {
            this.turnFace(D, degrees > 0);
            this.turnBand([F, R, B, L], degrees > 0);
        });
    },

    /**
     * B turns
     *
     * @param  {Number} degrees
     * @return {void}
     */
    animateTurnB(degrees) {
        this.pendingTransitions = 21;
        let B = this.animate(this.getStickers('B'), 'z', degrees),
            U = this.animate(this.getStickers('U', [2, 1, 0]), 'y', -degrees),
            L = this.animate(this.getStickers('L', [0, 3, 6]), 'x', -degrees),
            D = this.animate(this.getStickers('D', [6, 7, 8]), 'y', degrees),
            R = this.animate(this.getStickers('R', [8, 5, 2]), 'x', degrees);

        this.pendingRepaints.push(() => {
            this.turnFace(B, degrees > 0);
            this.turnBand([U, L, D, R], degrees > 0);
        });
    },

    animateTurnY(degrees) {
        this.pendingTransitions = 45;
        let U = this.animate(this.getStickers('U'), 'z', degrees),
            L = this.animate(this.getStickers('L'), 'y', -degrees),
            F = this.animate(this.getStickers('F'), 'y', -degrees),
            R = this.animate(this.getStickers('R'), 'y', -degrees),
            B = this.animate(this.getStickers('B'), 'y', -degrees),
            D = this.animate(this.getStickers('D'), 'z', -degrees);

        this.pendingRepaints.push(() => {
            this.turnFace(U, degrees > 0);
            this.turnBand([F.slice(0, 3), R.slice(0, 3), B.slice(0, 3), L.slice(0, 3)], degrees < 0);
            this.turnBand([F.slice(3, 3), R.slice(3, 3), B.slice(3, 3), L.slice(3, 3)], degrees < 0);
            this.turnBand([F.slice(6, 3), R.slice(6, 3), B.slice(6, 3), L.slice(6, 3)], degrees < 0);
            this.turnFace(D, -degrees > 0);
            // this.turnBand([F, L, B, R], degrees > 0);
        });
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

        switch (e.keyCode) {
            case 186: return { face: 'Y', isPrime: false }; // ' -> Y
            case 65: return { face: 'Y', isPrime: true }; // a -> Y'
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
