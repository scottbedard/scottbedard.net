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

const leftSlice = [0, 3, 6];

const rightSlice = [2, 5, 8];

const topSlice = [0, 1, 2];

const bottomSlice = [6, 7, 8];

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
    getRotation({ index, face, turn }) {
        let x = initialRotation.x[face];
        let y = initialRotation.y[face];
        let z = turn.face === face ? turn.rotation : 0;

        x = this.getXRotation(x, index, face, turn);
        y = this.getYRotation(y, index, face, turn);

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
    getXRotation(x, i, face, turn) {
        if (turn.face === 'L') {
            if (this.isTurnedSticker(['U', 'F', 'D'], leftSlice, face, i)) x += turn.rotation * -1;
            else if (face === 'B' && this.isTurnedIndex(i, rightSlice)) x += turn.rotation;
        } else if (turn.face === 'F') {
            if (face === 'R' && this.isTurnedIndex(i, leftSlice)) x += turn.rotation * -1;
            else if (face === 'L' && this.isTurnedIndex(i, rightSlice)) x += turn.rotation;
        } else if (turn.face === 'R') {
            if (this.isTurnedFace(['U', 'D', 'F'], face) && this.isTurnedIndex(i, rightSlice)) x += turn.rotation;
            else if (face === 'B' && this.isTurnedIndex(i, leftSlice)) x += turn.rotation * -1;
        } else if (turn.face === 'B') {
            if (face === 'R' && this.isTurnedIndex(i, rightSlice)) x += turn.rotation;
            else if (face === 'L' && this.isTurnedIndex(i, leftSlice)) x += turn.rotation * -1;
        } else if (turn.face === 'D') {

        }

        return x;
    },
    getYRotation(y, i, face, turn) {
        if (turn.face === 'U' && this.isTurnedSticker(['B', 'L', 'F', 'R'], topSlice, face, i)) {
            y += turn.rotation * -1;
        } else if (turn.face === 'F') {
            if (face === 'U' && this.isTurnedIndex(i, bottomSlice)) y += turn.rotation;
            else if (face === 'D' && this.isTurnedIndex(i, topSlice)) y += turn.rotation * -1;
        } else if (turn.face === 'R') {

        } else if (turn.face === 'B') {
            if (face === 'U' && this.isTurnedIndex(i, topSlice)) y += turn.rotation * -1;
            else if (face === 'D' && this.isTurnedIndex(i, bottomSlice)) y += turn.rotation;
        } else if (turn.face === 'D') {

        }

        return y;
    },
    isTurnedFace(faces, face) {
        return faces.indexOf(face) !== -1;
    },
    isTurnedIndex(key, values) {
        return values.indexOf(key) > -1;
    },
    isTurnedSticker(faces, slice, stickerFace, stickerIndex) {
        return this.isTurnedFace(faces, stickerFace) && this.isTurnedIndex(stickerIndex, slice);
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
    render(h, context) {
        return <div
            class={ Sticker.getClass(context.props) }
            style={ Sticker.getStyle(context.props) }
            on-transitionend={ context.parent.onTransitionEnd }>
        </div>;
    },
};
