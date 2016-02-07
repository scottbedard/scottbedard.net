import turns from './sizes/three';

//
// CSS Cube
//
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
            speed: 85,
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
         * @spread {turns}
         */
        ...turns,

        /**
         * Returns a sticker's initial rotation value
         *
         * @param  {Object} options.face
         * @return {Object}
         */
        getRotation(face) {
            switch (face) {
                case 'U': return { x: 90,  y: 0,   z: 0 };
                case 'L': return { y: -90, x: 0,   z: 0 };
                case 'F': return { x: 0,   y: 0,   z: 0 };
                case 'R': return { y: 90,  x: 0,   z: 0 };
                case 'B': return { x: 0,   y: 180, z: 0 };
                case 'D': return { x: -90, y: 0,   z: 0 };
            }
        },

        /**
         * Query the cube for specific stickers
         *
         * @param  {String} face
         * @param  {Array}  positions
         * @return {Object}
         */
        getStickers(face, positions = null) {
            return this.stickers.filter(sticker => {
                if (sticker.face !== face) {
                    return false;
                }

                return positions === null || positions.indexOf(sticker.position) !== -1;
            });
        },

        /**
         * Returns a sticker's transform properties
         *
         * @param  {Object} options.rotation
         * @param  {Object} options.translation
         * @return {String}
         */
        getTransform({ face, rotation, translation }) {
            let r = rotation, t = translation;

            let orientation = face === 'L' || face === 'R'
                ? `rotateY(${ r.y }deg) rotateX(${ r.x }deg)`
                : `rotateX(${ r.x }deg) rotateY(${ r.y }deg)`;

            return `${ orientation } rotateZ(${ r.z }deg) translate3d(${ t.x }px, ${ t.y }px, ${ t.z }px)`;
        },

        /**
         * Returns the translation value of a sticker
         *
         * @param  {Integer} index
         * @return {Object}
         */
        getTranslation(index) {
            let px = 68, z = 104;
            switch (index) {
                case 0: return { x: -px, y: -px, z };
                case 1: return { x: 0,   y: -px, z };
                case 2: return { x: px,  y: -px, z };
                case 3: return { x: -px, y: 0,   z };
                case 4: return { x: 0,   y: 0,   z };
                case 5: return { x: px,  y: 0,   z };
                case 6: return { x: -px, y: px,  z };
                case 7: return { x: 0,   y: px,  z };
                case 8: return { x: px,  y: px,  z };
            }
        },

        /**
         * Translate a keypress into a cube movement, and add it to the queue
         *
         * @param  {Object} e
         * @return {void}
         */
        onKeyup(e) {
            let move = this.getMove(e);

            if (move) {
                this.queue.push(move);
                this.processNextTurn();
            }
        },

        /**
         * Execute the next turn in the queue
         *
         * @return {void}
         */
        processNextTurn() {
            if (this.isTurning || this.queue.length === 0) {
                return;
            }

            let turn = this.queue.shift();
            this.isTurning = true;
            this.executeTurn(turn);

            setTimeout(() => {
                this.isTurning = false;

                if (this.queue.length > 0) {
                    this.processNextTurn();
                }
            }, this.speed);
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
            this.queue = [];
        },
    },
}
