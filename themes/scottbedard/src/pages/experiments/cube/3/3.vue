<style lang="scss" scoped>
    /* purgecss start ignore */
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

    .cube-wrapper {
        min-height: 420px;
    }

    .cube-outer {
        left: 50%;
        perspective: 1000px;
        position: absolute;
        top: 175px;
        transform: translateX(-50%);
    }

    .cube-inner {
        height: 100%;
        position: relative;
        transform-origin: 50% 50%;
        transform-style: preserve-3d;
        transform: rotateX(-25deg);
        width: 100%
    }

    .inner {
        position: relative;
    }

    .cube-sticker {
        $size: 60px;
        align-items: center;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        display: flex;
        height: $size;
        justify-content: center;
        left: calc(50% - #{ $size / 2 });
        position: absolute;
        top: calc(50% - #{ $size / 2 });
        width: $size;
    }

    .cube-inner.is-turning {
        .cube-sticker {
            transition: transform 90ms linear;
        }
    }
    /* purgecss end ignore */
</style>

<template>
    <div class="cube-wrapper relative">
        <!-- cube -->
        <div class="cube-outer">
            <div class="cube-inner" :class="[activeTurnClasses, isTurningClass]">
                <div
                    v-for="{ color, index, face } in stickers"
                    class="cube-sticker"
                    :class="[`index-${ index }`, `face-${ face }`]"
                    :key="`${face}-${index}`"
                    :style="{ 'background-color': color }">
                </div>
            </div>
        </div>

        <!-- actions -->
        <v-fade-transition>
            <div v-if="!scrambling" class="absolute flex justify-center pin-b w-full">
                <v-button color="green" @click="scramble">
                    Scramble
                </v-button>
            </div>
        </v-fade-transition>
    </div>
</template>

<script>
/* eslint-disable */
import TurnMap from './turn_map';
import { componentTimeout } from 'spyfu-vue-utils';

const scrambleLength = 30;

export default {
    data() {
        return {
            activeTurn: null,
            isExecutingTurn: false,
            isTurning: false,
            queue: [],
            scrambleTurns: [],
            scrambling: false,
            stickers: this.resetStickers(),
            timeout: 90,
        };
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
        isTurningClass() {
            return this.isTurning ? 'is-turning': null;
        },
    },
    methods: {
        scramble() {
            if (this.scrambling) {
                return;
            }

            let turns = [];
            let possibleTurns = ['u', 'l', 'f', 'r', 'b', 'd', 'm', 'e', 's'];

            while (turns.length < scrambleLength) {
                let turn = possibleTurns[Math.floor(Math.random() * possibleTurns.length)]; // pick a face to turn
                if (turns.length > 0 && turns[turns.length - 1][0] === turn) continue; // make sure it wasn't the last face we turned
                if (Math.random() >= 0.5) turn += '-'; // randomize the direction of the turn
                turns.push(turn);
                this.scrambleTurns.push(turn);
            }
            
            turns.push(this.onScrambleComplete);

            this.queue = turns;
            this.scrambling = true;
        },
        onScrambleComplete() {
            this.scrambling = false;
        },
        onQueueChanged(queue) {
            if (!this.isExecutingTurn) {
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
                componentTimeout(this, () => this.updateCube(this.activeTurn), this.timeout);
            });
        },
        reset() {
            this.activeTurn = null;
            this.isExecutingTurn = false;
            this.isTurning = false;
            this.queue = [];
            this.scrambleTurns = [];
            this.stickers = this.resetStickers();
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

                // after these updates are in the dom, execute the next turn
                componentTimeout(this, () => {
                    this.isExecutingTurn = false;

                    this.processNextTurn();
                }, 25);
            });
        },
    },
    watch: {
        queue: 'onQueueChanged',
    },
};
</script>