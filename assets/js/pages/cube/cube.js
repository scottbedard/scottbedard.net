export default {

    /**
     * @type {String}
     */
    template: require('./template'),

    /**
     * @return {void}
     */
    data() {
        return {
            colors: {
                U: '#F8FF01',
                L: '#FF9E01',
                F: '#3366FF',
                R: '#CC3300',
                B: '#95B753',
                D: '#FAFAFA',
            },
            isTurning: false,
            size: 3,
            stickers: [],
            queue: [],
        };
    },

    /**
     * Reset the cube and bind event listeners
     *
     * @return {void}
     */
    attached() {
        this.resetCube();
        window.addEventListener('keyup', this.onKeyup);
    },

    /**
     * Tear down event listeners
     *
     * @return {void}
     */
    detached() {
        window.removeEventListener('keyup', this.onKeyup);
    },

    /**
     * @type {Object}
     */
    methods: {

        /**
         * Execute the next turn in the queue
         *
         * @return {void}
         */
        executeNextTurn() {
            if (this.isTurning || this.queue.length === 0) {
                return;
            }

            this.stickers.forEach(sticker => {
                sticker.rotation.z += 90;
                return sticker;
            });
        },

        /**
         * Returns a sticker's rotation value
         *
         * @param  {Object} options.face
         * @return {Object}
         */
        getRotation(face) {
            switch (face) {
                case 'U': return { x: 90,  y: 0,   z: 0 };
                case 'L': return { x: 0,   y: -90, z: 0 };
                case 'F': return { x: 0,   y: 0,   z: 0 };
                case 'R': return { x: 0,   y: 90,  z: 0 };
                case 'B': return { x: 0,   y: 180, z: 0 };
                case 'D': return { x: -90, y: 0,   z: 0 };
            }
        },

        /**
         * Returns a sticker's transform properties
         *
         * @param  {Object} options.rotation
         * @param  {Object} options.translation
         * @return {String}
         */
        getTransform({ rotation, translation }) {
            let r = rotation, t = translation;
            console.log (r.z);
            return `rotateX(${ r.x }deg) rotateY(${ r.y }deg) rotateZ(${ r.z }deg) translate3d(${ t.x }px, ${ t.y }px, ${ t.z }px)`;
        },

        /**
         * Returns the translation value of a sticker
         *
         * @param  {Integer} index
         * @return {Object}
         */
        getTranslation(index) {
            let translation, shift = 68, z = 104;

            switch (index) {
                case 0: translation = { x: -shift, y: -shift, z }; break;
                case 1: translation = { x: 0,      y: -shift, z }; break;
                case 2: translation = { x: shift,  y: -shift, z }; break;
                case 3: translation = { x: -shift, y: 0,      z }; break;
                case 4: translation = { x: 0,      y: 0,      z }; break;
                case 5: translation = { x: shift,  y: 0,      z }; break;
                case 6: translation = { x: -shift, y: shift,  z }; break;
                case 7: translation = { x: 0,      y: shift,  z }; break;
                case 8: translation = { x: shift,  y: shift,  z }; break;
            }

            return translation;
        },

        /**
         * Translate a keypress into a cube movement, and add it to the queue
         *
         * @param  {Object} e
         * @return {void}
         */
        onKeyup(e) {
            let move;
            switch (String.fromCharCode(e.keyCode)) {
                case 'J': move = 'U'; break;
                case 'F': move = 'U-'; break;
                case 'D': move = 'L'; break;
                case 'E': move = 'L-'; break;
                case 'H': move = 'F'; break;
                case 'G': move = 'F-'; break;
                case 'I': move = 'R'; break;
                case 'K': move = 'R-'; break;
                case 'Q': move = 'B'; break;
                case 'P': move = 'B-'; break;
                case 'L': move = 'D'; break;
                case 'S': move = 'D-'; break;
            }

            if (move) {
                this.queue.push(move);
                this.executeNextTurn();
            }
        },

        /**
         * Resets the cube
         *
         * @return {void}
         */
        resetCube() {
            let stickers = [];
            for (let face of ['U', 'L', 'F', 'R', 'B', 'D']) {
                for (let i = 0, len = Math.pow(this.size, 2); i < len; i++) {
                    stickers.push({
                        color: this.colors[face],
                        face: face,
                        position: i,
                        rotation: this.getRotation(face),
                        translation: this.getTranslation(i),
                    });
                }
            }

            this.stickers = stickers;
        },
    },
}
