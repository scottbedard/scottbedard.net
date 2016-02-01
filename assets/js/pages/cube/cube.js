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
            colors: ['f00', '0f0', '00f', 'ff0', 'f0f', '0ff'],
            size: 3,
            stickers: [],
        };
    },

    /**
     * @return {void}
     */
    attached() {
        this.resetCube();
    },

    /**
     * @type {Object}
     */
    methods: {

        /**
         * Returns a sticker's rotation value
         *
         * @param  {Object} options.face
         * @return {Object}
         */
        getRotation(face) {
            switch (face) {
                case 'U': return { x: '90deg', y: 0, z: 0 };
                case 'L': return { x: 0, y: '-90deg', z: 0 };
                case 'F': return { x: 0, y: 0, z: 0 };
                case 'R': return { x: 0, y: '90deg', z: 0 };
                case 'B': return { x: 0, y: '180deg', z: 0 };
                case 'D': return { x: '270deg', y: 0, z: 0 };
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
            return `rotateX(${ rotation.x }) rotateY(${ rotation.y }) rotateZ(${ rotation.x }) ` +
             `translate3d(${ translation.x }, ${ translation.y }, ${ translation.z })`;
        },

        /**
         * Returns the translation value of a sticker
         *
         * @param  {Integer}    Sticker index
         * @return {Object}
         */
        getTranslation(index) {
            let translation, z = 100;
            switch (Number(index)) {
                case 0: translation = { x: -65, y: -65, z }; break;
                case 1: translation = { x: 0,   y: -65, z }; break;
                case 2: translation = { x: 65,  y: -65, z }; break;
                case 3: translation = { x: -65, y: 0,   z }; break;
                case 4: translation = { x: 0,   y: 0,   z }; break;
                case 5: translation = { x: 65,  y: 0,   z }; break;
                case 6: translation = { x: -65, y: 65,  z }; break;
                case 7: translation = { x: 0,   y: 65,  z }; break;
                case 8: translation = { x: 65,  y: 65,  z }; break;
            }

            return {
                x: String(translation.x) + 'px',
                y: String(translation.y) + 'px',
                z: String(translation.z) + 'px',
            };
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
                        color: null,
                        face: face,
                        rotation: this.getRotation(face),
                        translation: this.getTranslation(i),
                    });
                }
            }

            this.stickers = stickers;
        },
    },
}
