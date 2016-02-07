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
            pendingTransitions: 0,
            pendingRepaints: [],
            size: 3,
            speed: 75,
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
     * @type {Object}
     */
    computed: {

        /**
         * If the cube is turning, enable css transitions
         *
         * @return {String}
         */
        transition() {
            return this.isTurning ? `transform ${ this.speed }ms linear` : 'none';
        },
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
         * Returns the colors of a sticker array
         *
         * @param  {Array} stickers
         * @return {Array}
         */
        getColors(stickers) {
            let colors = [];
            for (let sticker of stickers) {
                colors.push(sticker.color);
            }

            return colors;
        },

        /**
         * Returns a sticker's initial rotation value
         *
         * @param  {String} face
         * @return {Object}
         */
        getRotation(face) {
            let rotation = {
                U: { x: 90,  y: 0,   z: 0 },
                L: { y: -90, x: 0,   z: 0 },
                F: { x: 0,   y: 0,   z: 0 },
                R: { y: 90,  x: 0,   z: 0 },
                B: { x: 0,   y: 180, z: 0 },
                D: { x: -90, y: 0,   z: 0 },
            };

            return rotation[face];
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
            let r = rotation,
                t = translation,
                orientation = face === 'L' || face === 'R'
                    ? `rotateY(${ r.y }deg) rotateX(${ r.x }deg)`
                    : `rotateX(${ r.x }deg) rotateY(${ r.y }deg)`;

            return `${ orientation } rotateZ(${ r.z }deg) translate3d(${ t.x }px, ${ t.y }px, ${ t.z }px)`;
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
         * When the transitions end, reset the cube rotation
         *
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
        onTransitionEnd(e) {
            this.pendingTransitions--;
            if (!this.pendingTransitions) {
                this.isTurning = false;
                this.stickers.forEach(sticker => sticker.rotation = this.getRotation(sticker.face));

                for (let i in this.pendingRepaints) {
                    let repaint = this.pendingRepaints.shift();
                    repaint();
                }

                setTimeout(this.processNextTurn, 0);
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

            this.isTurning = true;
            this.animateTurn(this.queue.shift());
        },

        /**
         * Resets the cube
         *
         * @return {void}
         */
        resetCube() {

            // Random colors for dev purposes
            let randomColor = () => '#' + Math.random().toString(16).slice(2, 8).toUpperCase();

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

            this.queue = [];
            this.stickers = stickers;
        },

        /**
         * Turns a band of stickers
         *
         * @param  {Array}      band
         * @param  {Boolean}    isPrime
         * @return {Array}
         */
        turnBand(band, isPrime) {
            let size = this.size;

            return isPrime
                ? [ ...band.slice(-size), ...band.slice(0, -size) ]
                : [ ...band.slice(size), ...band.slice(0, size) ];
        },

        /**
         * Turn a face of stickers
         *
         * @param  {Array}      face
         * @param  {Boolean}    isPrime
         * @return {Array}
         */
        turnFace(stickers, face, isPrime) {
            let rows = [],
                colors = [],
                method = 'pop';

            for (let i = 0; i < face.length; i += this.size) {
                rows.push(face.slice(i, i + this.size));
            }

            if (isPrime) {
                rows.reverse();
                method = 'shift';
            }

            for (let i = 0; i < this.size; i++) {
                for (let row of rows) {
                    colors.push(row[method]());
                }
            }

            stickers.forEach(sticker => sticker.color = colors.shift());
        },
    },
}
