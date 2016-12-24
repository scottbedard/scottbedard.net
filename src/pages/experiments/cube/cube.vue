<style lang="scss">@import 'core';
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
            @include transition(transform, 90ms, linear);
        }
    }

    .v-help {
        position: absolute;
    }

    .controls {
        display: flex;
        font-size: 32px;
        justify-content: center;
        margin-top: 340px;
    }

    .scramble,
    .timer {
        text-align: center;

        .spacebar,
        .escape {
            margin-top: 10px;
            font-size: 12px;
            color: #aaa;
        }
    }
</style>

<template>
    <div class="page default">
        <div class="inner">
            <v-help></v-help>

            <v-3x3
                :is-inspecting="isInspecting"
                :is-scrambling="isScrambling"
                :is-solving="isSolving"
                :scramble-length="30"
                @reset="reset"
                @scrambled="onScrambleComplete"
                @spacebar="onScrambleClicked"
                @solved="onSolveComplete"
                @turn="onTurnQueued"
                ref="cube">
            </v-3x3>

            <div class="controls">
                <div class="scramble" v-if="! isInspecting && ! isSolving">
                    <v-button
                        color="green"
                        @click="onScrambleClicked"
                        :disabled="isScrambling">
                        <span v-if="isScrambling">Scrambling...</span>
                        <span v-else>Click to scramble</span>
                    </v-button>
                    <div class="spacebar" v-if="! isScrambling">or press spacebar</div>
                </div>

                <v-inspection
                    v-if="isInspecting"
                    :seconds="10"
                    @complete="onInspectionComplete">
                </v-inspection>

                <div class="timer" v-if="isSolving">
                    <v-timer
                        ref="timer"
                        :start="solve.start">
                    </v-timer>
                    <div class="escape">press escape to reset</div>
                </div>
            </div>

            <v-leaderboard ref="leaderboard"></v-leaderboard>
        </div>

        <v-modal ref="modal">
            <v-submit-score
                ref="submitScore"
                :solve="solve"
                @dismiss="onSubmitDismissed"
                @submitted="onSolveSubmitted">
            </v-submit-score>
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
                    end: null,
                    scramble: [],
                    start: null,
                    turns: [],
                },
            };
        },
        components: {
            'v-3x3': require('./three/three'),
            'v-help': require('./help/help'),
            'v-inspection': require('./inspection'),
            'v-leaderboard': require('./leaderboard/leaderboard'),
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
            onScrambleComplete(scramble) {
                this.isScramling = false;
                this.isInspecting = true;
                this.solve.scramble = scramble;
            },
            onSolveComplete() {
                this.solve.end = Date.now();

                this.$refs.timer.end();
                this.$refs.modal.show();
                this.$refs.submitScore.focus();
            },
            onSolveSubmitted() {
                this.$refs.leaderboard.refresh();
            },
            onSubmitDismissed() {
                this.$refs.modal.hide();
                this.reset();
            },
            onTurnQueued(turn) {
                let timeout = Date.now() - this.solve.start;
                this.solve.turns.push({ turn, timeout });
            },
            reset() {
                this.$refs.cube.reset();
                this.isInspecting = false;
                this.isScrambling = false;
                this.isSolving = false;
                this.isSolving = false;
                this.solve = {
                    end: null,
                    scramble: [],
                    start: null,
                    turns: [],
                };
            },
        },
    };
</script>
