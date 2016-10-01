<style lang="scss" scoped>@import 'core';
    .outer {
        perspective: 1000px;
        position: absolute;
        left: 50%;
        top: 270px;
        transform: translateX(-50%);
    }

    .inner {
        height: 100%;
        position: relative;
        transform: rotateX(-25deg);
        transform-origin: 50% 50%;
        transform-style: preserve-3d;
        width: 100%;

        &.is-updating > .v-sticker {
            transition: none;
        }
    }

    .v-sticker {
        $size: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        left: calc(50% - #{ $size / 2 });
        border: 1px solid rgba($black, 0.2);
        border-radius: 3px;
        height: $size;
        position: absolute;
        top: calc(50% - #{ $size / 2 });
        width: $size;
        @include transition(transform, 80ms, linear);

        @each $color, $value in $colors {
            &.color-#{ $color } { background-color: $value }
        }
    }

    .spacer {
        height: 320px;
    }
</style>

<template>
    <div>
        <!-- Cube wrapper -->
        <div class="outer">
            <div class="inner" :class="{ 'is-updating': isUpdating }">
                <v-sticker
                    v-for="sticker in stickers"
                    :base-style="sticker.baseStyle"
                    :color="sticker.color"
                    :index="sticker.index"
                    :is-updating="isUpdating"
                    :face="sticker.face"
                    :turn="turn">
                </v-sticker>
            </div>
        </div>

        <!-- Controls -->
        <div class="spacer"></div>
        <v-button v-if="!isScrambled && !isSolving" color="green" @click="scramble">Click to scramble</v-button>
        <v-button v-else color="grey">Go</v-button>
    </div>
</template>

<script>
    import { KeyboardControls, InspectionMoves } from './controls';
    import TargetMap from './target_map';
    import { Sticker } from './sticker';
    import StickerComponent from './sticker';

    export default {
        created() {
            this.resetCube();
        },
        data() {
            return {
                activeTransitions: 0,
                colors: {
                    U: 'yellow',
                    L: 'orange',
                    F: 'blue',
                    R: 'red',
                    B: 'green',
                    D: 'white',
                },
                faces: ['U', 'L', 'F', 'R', 'B', 'D'],
                isScrambled: false,
                isSolving: false,
                isUpdating: false,
                turn: {
                    face: null,
                    rotation: 0,
                },
                stickers: [],
                stickerMap: {},
                queue: [],
            };
        },
        destroyed() {
            this.unbindKeyboardControls();
        },
        mounted() {
            this.bindKeyboardControls();
        },
        components: {
            'v-sticker': StickerComponent,
        },
        computed: {
            isTurning() {
                return this.activeTransitions > 0;
            },
        },
        methods: {
            bindKeyboardControls() {
                document.addEventListener('keydown', this.onKeydown);
            },
            executeTurn(turn) {
                let transitions = turn.face === 'X' || turn.face === 'Y' || turn.face === 'Z'
                    ? 54
                    : 21;

                this.activeTransitions = transitions;
                this.turn = turn;
            },
            onKeydown(e) {
                let character;
                if (e.keyCode === 186) character = ':';
                else character = String.fromCharCode(e.keyCode);

                let turn = KeyboardControls[character];

                if (typeof turn !== 'undefined') {
                    let face = turn[0];
                    let rotation = turn.length === 1 ? 90 : -90;
                    this.queue.push({ face, rotation });
                }
            },
            onTransitionEnd() {
                this.activeTransitions--;
            },
            resetCube() {
                this.stickers = [];
                let faces = ['U', 'L', 'F', 'R', 'B', 'D'];

                for (let face of faces) {
                    for (let index = 0; index < 9; index++) {
                        let sticker = {
                            color: this.colors[face],
                            face,
                            index,
                            nextColor: null,
                            turn: this.turn,
                        };

                        // cache the base style for faster resets
                        sticker.baseStyle = Sticker.getStyle(sticker);
                        this.stickers.push(sticker);
                        this.stickerMap[`${ face }${ index }`] = sticker;
                    }
                }
            },
            scramble() {
                console.log ('scrambling...');
            },
            setNextColor(a, b) {
                let stickerA = this.stickerMap[a];
                let stickerB = this.stickerMap[b];

                stickerB.nextColor = stickerA.color;
            },
            unbindKeyboardControls() {
                document.removeEventListener('keydown', this.onKeydown);
            },
            updateStickers() {
                let map = TargetMap[this.turn.face];
                let setNextColorFunction = this.turn.rotation === 90
                    ? ([a, b]) => this.setNextColor(a, b)
                    : ([a, b]) => this.setNextColor(b, a);

                // Set next color values for the stickers
                for (let i = 0, end = map.length; i < end; i++) {
                    setNextColorFunction(map[i]);
                }

                // Update the color values of the stickers effected by this turn
                this.isUpdating = true;
                this.stickers.filter(sticker => sticker.nextColor !== null).forEach(sticker => {
                    sticker.color = sticker.nextColor;
                    sticker.nextColor = null;
                });

                // Reset the dom and execute the next turn
                this.$nextTick(() => {
                    this.turn = { face: null, rotation: 0 };
                    setTimeout(() => {
                        this.isUpdating = false;
                        this.queue.shift();
                    }, 10);
                });
            },
        },
        watch: {
            isTurning(isTurning) {
                if (!isTurning) {
                    this.updateStickers();
                }
            },
            queue() {
                // If the queue is empty, do nothing
                if (this.queue.length === 0) return;

                // Otherwise execute the next turn
                this.executeTurn(this.queue[0]);
            },
        },
    };
</script>
