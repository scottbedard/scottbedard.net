<style lang="scss" scoped>
    .stage {
        perspective: 1000px;
        position: absolute;
        left: 50%;
        top: 270px;
        transform: translateX(-50%);
    }

    .inner {
        left: 50%;
        height: 100%;
        position: relative;
        transform: rotateX(-25deg);
        transform-origin: 50% 50%;
        transform-style: preserve-3d;
        width: 100%;
    }

    .spacer {
        height: 330px;
    }
</style>

<template>
    <div class="v-cube">
        <div class="stage">
            <div class="inner">
                <template v-for="face in faces">
                    <v-sticker
                        v-for="sticker in face"
                        :class="[ color(sticker) ]"
                        :base="sticker.base"
                        :index="sticker.index"
                        :turn="turn"
                        :value="sticker.value">
                    </v-sticker>
                </template>
            </div>
        </div>
        <div class="spacer"></div>
        <v-button color="green" @click="scramble">Click to scramble</v-button>
    </div>
</template>

<script>
    import StickerComponent from './sticker';
    import Vue from 'vue';

    export default {
        created() {
            this.reset();
        },
        data() {
            return {
                colors: {
                    U: 'yellow',
                    L: 'orange',
                    F: 'blue',
                    R: 'red',
                    B: 'green',
                    D: 'off-white',
                },
                cube: {
                    U: [],
                    L: [],
                    F: [],
                    R: [],
                    B: [],
                    D: [],
                },
                size: 3,
                turn: {
                    face: null,
                    rotation: 0,
                },
            };
        },
        components: {
            'v-sticker': StickerComponent,
        },
        computed: {
            faces() {
                return Object.keys(this.cube).map(face => this.cube[face]);
            },
        },
        methods: {
            color(sticker) {
                return `color-${ this.colors[sticker.value] }`;
            },
            executeTurn(turn) {
                let face = turn[0];
                let rotation = turn.length === 1 ? 90 : (turn[1] === 2 ? 180 : -90);

                console.log ('turning face', face, rotation);
                this.turn = { face, rotation };
                setTimeout(this.updateCube, 500);
            },
            reset() {
                Object.keys(this.cube).forEach(face => {
                    for (let i = 0; i < 9; i++) {
                        this.cube[face][i] = {
                            base: face,
                            index: i,
                            value: face,
                        };
                    }
                });
            },
            scramble() {
                this.executeTurn('F');
            },
            updateCube() {
                console.log ('updating the cube');
            },
        },
    };
</script>
