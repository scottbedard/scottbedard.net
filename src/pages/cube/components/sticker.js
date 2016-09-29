//
// Configuration and initial transform values
//
const stickerDepth = 3;       // Distance from the plane where the faces intersect
const stickerSpacing = 12;    // Spacing between the stickers on their given face
const initialTranslation = [ -100 - stickerSpacing , 0, 100 + stickerSpacing ];
const initialRotation = {
    x: { U: 90,  L: 0,   F: 0,   R: 0,   B: 0,   D: -90 },
    y: { U: 0,   L: -90, F: 0,   R: 90,  B: 180, D: 0 },
};

//
// Functions to calculate the class and style of a sticker
//
const Sticker = {
    getClass(sticker) {
        return [
            'v-sticker',
            `color-${ sticker.color }`,
        ];
    },
    getRotation({ face }) {
        let x = initialRotation.x[face];
        let y = initialRotation.y[face];
        let z = 0;

        return face === 'U' || face === 'F' || face === 'D'
            ? `rotateX(${ x }deg) rotateY(${ y }deg) rotateZ(${ z }deg)`
            : `rotateY(${ y }deg) rotateX(${ x }deg) rotateZ(${ z }deg)`;
    },
    getStyle(sticker) {
        return {
            transform: `${ this.getRotation(sticker) } ${ this.getTranslation(sticker) }`,
        };
    },
    getTranslation(sticker) {
        let x = initialTranslation[sticker.index % 3];
        let y = initialTranslation[Math.floor(sticker.index / 3)];
        let z = 100 + stickerDepth;

        return `translate3d(${ x }%, ${ y }%, ${ z }px)`;
    },
};

//
// Sticker component
//
export default {
    functional: true,
    props: [
        'color',
        'face',
        'index',
        'turn',
    ],
    render(h, { props: sticker }) {
        return <div
            class={ Sticker.getClass(sticker) }
            style={ Sticker.getStyle(sticker) }>
        </div>;
    },
};
