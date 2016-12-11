<style lang="scss">@import 'core';
    .cube-outer {
        perspective: 1000px;
        position: absolute;
        left: 50%;
        top: 270px;
        transform: translateX(-50%);
    }

    .cube-inner {
        height: 100%;
        position: relative;
        transform: rotateX(-25deg);
        transform-origin: 50% 50%;
        transform-style: preserve-3d;
        width: 100%
    }

    .cube-sticker {
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

        @each $color, $value in $colors {
            &.color-#{ $color } { background-color: $value }
        }
    }

    .cube-inner.is-turning {
        .cube-sticker {
            @include transition(transform, 100ms, linear);
        }
    }
</style>

<template>
    <div class="page default">
        <div class="inner">
            <v-3x3></v-3x3>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            'v-3x3': require('./three/three'),
        },
    };
</script>
