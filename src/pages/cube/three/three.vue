<style lang="scss" scoped>@import 'core';
    //
    // Stickers
    //
    @import './stickers/default';
    @import './stickers/u';
    @import './stickers/l';
    @import './stickers/f';
    @import './stickers/r';
    @import './stickers/b';
    @import './stickers/d';
    @import './stickers/m';
    @import './stickers/e';
    @import './stickers/s';

    //
    // Controls
    //
    .controls {
        margin-top: 320px;
        text-align: center;
    }
</style>

<template>
    <div>
        <div class="cube-outer">
            <div class="cube-inner" :class="[activeTurnClasses, isTurningClass]">
                <div
                    v-for="{ color, index, face } in stickers"
                    class="cube-sticker"
                    :class="[`index-${ index }`, `face-${ face }`]"
                    :style="{ 'background-color': color }">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TurnMap from './turn_map';
    import KeyboardControls from './keyboard_controls';

    export default {
        created() {
            this.bindKeyboardControls();
        },
        data() {
            return {
                activeTurn: null,
                isExecutingTurn: false,
                isSolved: false,
                isTurning: false,
                queue: [],
                stickers: this.resetStickers(),
                timeout: 100,
            };
        },
        components: {
            'v-inspection': require('../inspection'),
            'v-timer': require('../timer'),
        },
        computed: {
            activeTurnClasses() {
                if (! this.activeTurn)          return null;
                if (this.activeTurn === 'x')    return 'turn-l turn-m turn-r-prime';
                if (this.activeTurn === 'x-')   return 'turn-l-prime turn-m-prime turn-r';
                if (this.activeTurn === 'y')    return 'turn-u turn-e-prime turn-d-prime';
                if (this.activeTurn === 'y-')   return 'turn-u-prime turn-e turn-d';
                if (this.activeTurn === 'z')    return 'turn-f turn-s turn-b-prime';
                if (this.activeTurn === 'z-')   return 'turn-f-prime turn-s-prime turn-b';

                return this.activeTurn.length === 1
                    ? `turn-${ this.activeTurn }`
                    : `turn-${ this.activeTurn[0] }-prime`;
            },
            isSolved() {
                let colors = { u: null, l: null, f: null, r: null, b: null, d: null };

                for (let { face, color } of this.stickers) {
                    if (colors[face] === null) colors[face] = color;
                    if (color !== colors[face]) return false;
                }

                return true;
            },
            isTurningClass() {
                return this.isTurning ? 'is-turning': null;
            },
        },
        methods: {
            bindKeyboardControls() {
                document.addEventListener('keydown', this.onKeydown);
            },
            onKeydown(e) {
                if (this.isSolved) {
                    return;
                }

                let character = e.key.toUpperCase();
                let turn = KeyboardControls[character];

                if (typeof turn !== 'undefined') {
                    if (!this.isInspecting || ['x', 'y', 'z'].indexOf(turn[0]) !== -1) {
                        this.queue.push(turn);
                    }
                }
            },
            scramble() {
                let turns = [];
                let possibleTurns = ['u', 'l', 'f', 'r', 'b', 'd', 'm', 'e', 's'];

                while (turns.length < 30) {
                    let turn = possibleTurns[Math.floor(Math.random() * possibleTurns.length)]; // pick a face to turn
                    if (turns.length > 0 && turns[turns.length - 1][0] === turn) continue;      // make sure it wasn't the last face we turned
                    if (Math.random() >= 0.5) turn += '-';                                      // randomize the direction of the turn

                    turns.push(turn);
                }

                turns.push(this.onScrambleComplete);
                this.isSolved = false;
                this.queue = turns;
            },
            onScrambleComplete() {
                this.$emit('scrambled');
            },
            onQueueChanged(queue) {
                if (! this.isExecutingTurn) {
                    this.processNextTurn();
                }
            },
            processNextTurn() {
                if (! this.queue.length) return;

                if (typeof this.queue[0] === 'function') {
                    return this.queue.shift()();
                }

                this.isTurning = true;
                this.isExecutingTurn = true;
                this.$nextTick(() => {
                    this.activeTurn = this.queue.shift();
                    setTimeout(() => this.updateCube(this.activeTurn), this.timeout);
                });
            },
            resetStickers() {
                let stickers = [];
                let nextColor = null;
                let faces = { u: '#ffeb3b', l: '#ff9800', f: '#2196f3', r: '#f44336', b: '#4caf50', d: '#f5f5f5' };

                for (let face in faces) {
                    let color = faces[face];

                    for (let index = 0; index < 9; index++) {
                        stickers.push({ color, face, index, nextColor });
                    }
                }

                return stickers;
            },
            setNextColor(a, b) {
                let stickerA = this.stickers.find(sticker => sticker.face == a[0] && sticker.index == a[1]);
                let stickerB = this.stickers.find(sticker => sticker.face == b[0] && sticker.index == b[1]);

                stickerB.nextColor = stickerA.color;
            },
            updateCube(turn) {
                // turn off transitions while updating the sticker colors
                this.isTurning = false;

                this.$nextTick(() => {
                    // find the map for our current turn
                    let map = TurnMap[turn[0]];

                    // if the turn has a prime flag on it, read the map backwards
                    let setNextColor = turn.length === 1
                        ? ([a, b]) => this.setNextColor(a, b)
                        : ([a, b]) => this.setNextColor(b, a);

                    // set the nextColor value for all of our effected stickers
                    for (let i = 0, end = map.length; i < end; i++) {
                        setNextColor(map[i]);
                    }

                    // loop through every sticker with a nextColor and make it the current color
                    this.stickers.filter(sticker => sticker.nextColor !== null).forEach(sticker => {
                        sticker.color = sticker.nextColor;
                        sticker.nextColor = null;
                    });

                    this.activeTurn = null;

                    // determine if the cube is solved
                    if (this.isSolved) {
                        this.$emit('solved');
                        this.isSolved = true;
                        this.isExecutingTurn = false;
                        return;
                    }

                    // after these updates are in the dom, execute the next turn
                    setTimeout(() => {
                        this.isExecutingTurn = false;
                        this.processNextTurn();
                    }, 20);
                });
            },
        },
        props: [
            'isInspecting',
            'isScrambling',
            'isSolving',
        ],
        watch: {
            queue: 'onQueueChanged',
        },
    };
</script>
