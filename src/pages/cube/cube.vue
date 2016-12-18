<style lang="scss">@import 'core';
    .cube-outer {
        left: 50%;
        perspective: 1000px;
        position: absolute;
        top: 270px;
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

    .cube-sticker {
        $size: 60px;
        align-items: center;
        border-radius: 3px;
        border: 1px solid rgba($black, 0.2);
        display: flex;
        height: $size;
        justify-content: center;
        left: calc(50% - #{ $size / 2 });
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

    .controls {
        display: flex;
        justify-content: center;
        margin-top: 340px;

        font-size: 24px;
    }
</style>

<template>
    <div class="page default">
        <div class="inner">
            <v-3x3
                :is-inspecting="isInspecting"
                :is-scrambling="isScrambling"
                :is-solving="isSolving"
                @scrambled="onScrambleComplete"
                @solved="onSolveComplete"
                ref="cube">
            </v-3x3>

            <div class="controls">
                <v-button
                    v-if="! isInspecting && ! isSolving"
                    color="green"
                    @click="onScrambleClicked"
                    :disabled="isScrambling">
                    <span v-if="isScrambling">Scrambling...</span>
                    <span v-else>Scramble</span>
                </v-button>

                <v-inspection
                    v-if="isInspecting"
                    :seconds="5"
                    @complete="onInspectionComplete">
                </v-inspection>

                <v-timer
                    ref="timer"
                    v-if="isSolving"
                    :start="solve.start">
                </v-timer>
            </div>
        </div>

        <!-- Solved modal -->
        <v-button color="red" @click="showModal">show</v-button>

        <v-modal ref="modal">
            <v-submit-score></v-submit-score>
        </v-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isInspecting: false,
                isScrambling: false,
                isSolving: false,
                isSolving: false,
                solve: {
                    start: null,
                    end: null,
                    turns: [],
                },
            };
        },
        components: {
            'v-3x3': require('./three/three'),
            'v-inspection': require('./inspection'),
            'v-submit-score': require('./submit_score'),
            'v-timer': require('./timer'),
        },
        methods: {
            onInspectionComplete() {
                this.isInspecting = false;
                this.isSolving = true;
                this.solve.start = Date.now();
            },
            onScrambleClicked() {
                this.isScrambling = true;
                this.$refs.cube.scramble();
            },
            onScrambleComplete() {
                this.isScramling = false;
                this.isInspecting = true;
            },
            onSolveComplete() {
                this.$refs.timer.end();
            },
            showModal() {
                this.$refs.modal.show();
            },
        },
    };
</script>
