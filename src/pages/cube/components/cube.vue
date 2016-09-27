<style lang="scss" scoped>
    .v-cube {
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
</style>

<template>
    <div class="v-cube">
        <div class="inner">
            <template v-for="face in faces">
                <v-sticker
                    v-for="sticker in face"
                    :class="[ color(sticker) ]"
                    :base="sticker.base"
                    :index="sticker.index"
                    :target="sticker.target"
                    :value="sticker.value">
                </v-sticker>
            </template>
        </div>

    </div>
</template>

<script>
    import StickerComponent from './sticker';

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
            reset() {
                let size = Math.pow(this.size, 2);
                Object.keys(this.cube).forEach(face => {
                    for (let i = 0; i < size; i++) {
                        this.cube[face][i] = {
                            base: face,
                            index: i,
                            target: null,
                            value: face,
                        };
                    }
                });
            },
        },
    };
</script>
