<style lang="scss" scoped>@import 'core';
    @import './config';

    //
    // Resting state
    //
    .face-u {
        &.index-0 { transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-1 { transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d(0%, -$stickerSpacing, $stickerDepth) }
        &.index-2 { transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d($stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-3 { transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, 0%, $stickerDepth) }
        &.index-4 { transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d(0%, 0%, $stickerDepth) }
        &.index-5 { transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d($stickerSpacing, 0%, $stickerDepth) }
        &.index-6 { transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, $stickerSpacing, $stickerDepth) }
        &.index-7 { transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d(0%, $stickerSpacing, $stickerDepth) }
        &.index-8 { transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d($stickerSpacing, $stickerSpacing, $stickerDepth) }
    }

    .face-l {
        &.index-0 { transform: rotateY(-90deg) rotateX(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-1 { transform: rotateY(-90deg) rotateX(0deg) rotateZ(0deg) translate3d(0%, -$stickerSpacing, $stickerDepth) }
        &.index-2 { transform: rotateY(-90deg) rotateX(0deg) rotateZ(0deg) translate3d($stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-3 { transform: rotateY(-90deg) rotateX(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, 0%, $stickerDepth) }
        &.index-4 { transform: rotateY(-90deg) rotateX(0deg) rotateZ(0deg) translate3d(0%, 0%, $stickerDepth) }
        &.index-5 { transform: rotateY(-90deg) rotateX(0deg) rotateZ(0deg) translate3d($stickerSpacing, 0%, $stickerDepth) }
        &.index-6 { transform: rotateY(-90deg) rotateX(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, $stickerSpacing, $stickerDepth) }
        &.index-7 { transform: rotateY(-90deg) rotateX(0deg) rotateZ(0deg) translate3d(0%, $stickerSpacing, $stickerDepth) }
        &.index-8 { transform: rotateY(-90deg) rotateX(0deg) rotateZ(0deg) translate3d($stickerSpacing, $stickerSpacing, $stickerDepth) }
    }

    .face-f {
        &.index-0 { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-1 { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(0%, -$stickerSpacing, $stickerDepth) }
        &.index-2 { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d($stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-3 { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, 0%, $stickerDepth) }
        &.index-4 { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(0%, 0%, $stickerDepth) }
        &.index-5 { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d($stickerSpacing, 0%, $stickerDepth) }
        &.index-6 { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, $stickerSpacing, $stickerDepth) }
        &.index-7 { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(0%, $stickerSpacing, $stickerDepth) }
        &.index-8 { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d($stickerSpacing, $stickerSpacing, $stickerDepth) }
    }

    .face-r {
        &.index-0 { transform: rotateY(90deg) rotateX(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-1 { transform: rotateY(90deg) rotateX(0deg) rotateZ(0deg) translate3d(0%, -$stickerSpacing, $stickerDepth) }
        &.index-2 { transform: rotateY(90deg) rotateX(0deg) rotateZ(0deg) translate3d($stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-3 { transform: rotateY(90deg) rotateX(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, 0%, $stickerDepth) }
        &.index-4 { transform: rotateY(90deg) rotateX(0deg) rotateZ(0deg) translate3d(0%, 0%, $stickerDepth) }
        &.index-5 { transform: rotateY(90deg) rotateX(0deg) rotateZ(0deg) translate3d($stickerSpacing, 0%, $stickerDepth) }
        &.index-6 { transform: rotateY(90deg) rotateX(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, $stickerSpacing, $stickerDepth) }
        &.index-7 { transform: rotateY(90deg) rotateX(0deg) rotateZ(0deg) translate3d(0%, $stickerSpacing, $stickerDepth) }
        &.index-8 { transform: rotateY(90deg) rotateX(0deg) rotateZ(0deg) translate3d($stickerSpacing, $stickerSpacing, $stickerDepth) }
    }

    .face-b {
        &.index-0 { transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-1 { transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg) translate3d(0%, -$stickerSpacing, $stickerDepth) }
        &.index-2 { transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg) translate3d($stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-3 { transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, 0%, $stickerDepth) }
        &.index-4 { transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg) translate3d(0%, 0%, $stickerDepth) }
        &.index-5 { transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg) translate3d($stickerSpacing, 0%, $stickerDepth) }
        &.index-6 { transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, $stickerSpacing, $stickerDepth) }
        &.index-7 { transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg) translate3d(0%, $stickerSpacing, $stickerDepth) }
        &.index-8 { transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg) translate3d($stickerSpacing, $stickerSpacing, $stickerDepth) }
    }

    .face-d {
        &.index-0 { transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-1 { transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d(0%, -$stickerSpacing, $stickerDepth) }
        &.index-2 { transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d($stickerSpacing, -$stickerSpacing, $stickerDepth) }
        &.index-3 { transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, 0%, $stickerDepth) }
        &.index-4 { transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d(0%, 0%, $stickerDepth) }
        &.index-5 { transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d($stickerSpacing, 0%, $stickerDepth) }
        &.index-6 { transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d(-$stickerSpacing, $stickerSpacing, $stickerDepth) }
        &.index-7 { transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d(0%, $stickerSpacing, $stickerDepth) }
        &.index-8 { transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d($stickerSpacing, $stickerSpacing, $stickerDepth) }
    }

    //
    // Turns
    //
    @import './turns/u';
    @import './turns/l';
    @import './turns/f';
    @import './turns/r';
    @import './turns/b';
    @import './turns/d';
    @import './turns/m';
    @import './turns/e';
    @import './turns/s';
</style>

<template>
    <div>
        <div class="cube-outer">
            <div class="cube-inner" :class="[`turn-${ turn.toLowerCase() }`]">
                <div
                    v-for="{ index, face } in stickers"
                    class="cube-sticker"
                    :class="[`index-${ index }`, `face-${ face }`]">
                </div>
            </div>
        </div>

        <v-button color="green" @click="onClick">turn</v-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                turn: '',
                stickers: this.resetStickers(),
            };
        },
        methods: {
            resetStickers() {
                let stickers = [];
                for (let face of ['u', 'l', 'f', 'r', 'b', 'd']) {
                    for (let index = 0; index < 9; index++) {
                        stickers.push({ face, index });
                    }
                }

                return stickers;
            },
            onClick() {
                this.turn = this.turn === 'u turn-d-prime turn-e-prime'
                    ? ''
                    : 'u turn-d-prime turn-e-prime';
            },
        },
    };
</script>
