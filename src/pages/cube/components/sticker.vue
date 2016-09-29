<style lang="scss" scoped>@import 'core';
    $size: 60px;

    div {
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
        @include transition(transform, 0.5);

        //
        // Colors
        //
        @each $color, $value in $colors {
            &.color-#{ $color } {
                background-color: $value;
            }
        }
    }
</style>

<template>
    <div :style="{ 'transform': transform }"></div>
</template>

<script>
    import WindowState from 'src/state/window';

    export default {
        data() {
            return {
                originPadding: 15, // extra distance from the center of the cube
                size: 0,
                Window: WindowState.state,
            };
        },
        mounted() {
            this.setStickerSize();
        },
        computed: {
            firstRotationAxis() {
                return this.base === 'U' || this.base === 'F' || this.base === 'D'
                    ? 'X'
                    : 'Y';
            },
            transform() {
                return `${ this.rotation } ${ this.translation }`;
            },
            translateX() {
                let remainder = this.index % 3;
                if (remainder === 0) return -112;
                if (remainder === 2) return 112;
                return 0;
            },
            translateY() {
                if (this.index < 3) return -112;
                else if (this.index > 5) return 112;
                return 0;
            },
            translation() {
                return `translate3d(${ this.translateX }%, ${ this.translateY }%, ${ (this.size * 1.5) + 12 }px)`;
            },
            rotation() {
                return this.firstRotationAxis === 'X'
                    ? `rotateX(${ this.rotateX }deg) rotateY(${ this.rotateY }deg) rotateZ(${ this.rotateZ }deg)`
                    : `rotateY(${ this.rotateY }deg) rotateX(${ this.rotateX }deg) rotateZ(${ this.rotateZ }deg)`;
            },
            rotateX() {
                let rotation = this.getInitialRotation('x', this.base);

                return rotation;
            },
            rotateY() {
                let rotation = this.getInitialRotation('y', this.base);

                return rotation;
            },
            rotateZ() {
                let rotation = this.getInitialRotation('z', this.base);

                if (this.turn.face === this.base)
                    rotation += this.turn.rotation;

                console.log (rotation);

                return rotation;
            },
        },
        methods: {
            getInitialRotation(axis, face) {
                let rotation = {
                    x: { U: 90,  L: 0,   F: 0,   R: 0,   B: 0,   D: -90 },
                    y: { U: 0,   L: -90, F: 0,   R: 90,  B: 180, D: 0 },
                    z: { U: 0,   L: 0,   F: 0,   R:0,    B: 0,   D: 0 },
                };

                return rotation[axis][face];
            },
            onTurn(face, rotation) {
                console.log ('yup', face, rotation);
            },
            onWindowResized() {
                this.setStickerSize();
            },
            setStickerSize() {
                let style = window.getComputedStyle(this.$el);
                this.size = parseInt(style.getPropertyValue('width'));
            },
        },
        props: [
            'base',
            'index',
            'turn',
            'value',
        ],
        watch: {
            'Window.width': 'onWindowResized',
        },
    };
</script>
