<style lang="scss" scoped>@import 'core';
    .v-leaderboard {
        margin-top: 60px;
        display: flex;
        justify-content: center;
    }

    .loading {
        text-align: center;
        color: #999;
        font-weight: 300;
    }

    h3 {
        border-bottom: 1px solid #ccc;
        font-size: 30px;
        font-weight: 300;
        margin: 0;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    .results {
        display: flex;
        justify-content: space-around;
        width: 100%;
        color: #666;

        .speed { @include bp-prop(padding-right, 0, false, 30px) }
        .efficiency { @include bp-prop(padding-left, 0, false, 30px) }

        .solve {
            display: flex;
            font-weight: 300;
            margin-bottom: 20px;

            .position {
                align-items: center;
                margin-right: 20px;
                display: flex;
                @include bp-prop('font-size, line-height', 24px, false, 36px);
                @include bp-prop(margin-right, 10px, false, 20px);
                @include transition('font-size, line-height, margin-right');
            }

            .details {
                display: flex;
                flex-grow: 1;
                flex-wrap: wrap;

                .mobile { @include bp-prop(display, false, false, none) }
                .tablet { @include bp-prop(display, none, false, inline) }

                > div {
                    display: flex;
                    flex-basis: auto;
                    justify-content: space-between;
                    width: 100%;
                    &.primary { font-size: 18px; font-weight: 400 }
                    &.secondary { font-size: 12px }
                }
            }
        }
    }
</style>

<template>
    <div class="v-leaderboard">
        <div v-if="isLoading" class="loading">
            <v-spinner :thickness="2" size="48px" color="#ccc"></v-spinner>
            <p>Loading leaderboard...</p>
        </div>
        <div class="results grid" v-else>
            <div class="speed cell mobile-12 tablet-6">
                <h3>Fastest solves</h3>
                <div v-for="(solve, index) in fastestSolves" class="solve">
                    <div class="position">{{ index + 1 }}</div>
                    <div class="details">
                        <div class="primary">
                            <div class="name">{{ solve.name }}</div>
                            <div class="time">{{ getTime(solve) }}</div>
                        </div>
                        <div class="secondary">
                            <div class="date">
                                <span class="mobile">{{ getShortDate(solve) }}</span>
                                <span class="tablet">{{ getDate(solve) }}</span>
                            </div>
                            <div class="turns">{{ solve.turn_count }} <span class="tablet">relevent </span>{{ solve.turn_count === 1 ? 'turn' : 'turns' }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="efficiency cell mobile-12 tablet-6">
                <h3>Most efficient solves</h3>
                <div v-for="(solve, index) in efficientSolves" class="solve">
                    <div class="position">{{ index + 1 }}</div>
                    <div class="details">
                        <div class="primary">
                            <div class="name">{{ solve.name }}</div>
                            <div class="time">{{ solve.turn_count }} turns</div>
                        </div>
                        <div class="secondary">
                            <div class="date">
                                <span class="mobile">{{ getShortDate(solve) }}</span>
                                <span class="tablet">{{ getDate(solve) }}</span>
                            </div>
                            <div class="turns">{{ getTime(solve) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import CubeResource from 'src/resources/cube';

    export default {
        data() {
            return {
                efficientSolves: [],
                fastestSolves: [],
                isLoading: false,
                total: 0,
            };
        },
        mounted() {
            this.fetch();
        },
        methods: {
            fetch() {
                this.isLoading = true;

                CubeResource.getLeaderboard({ results: 5 })
                    .then(this.onFetchComplete)
                    .catch(this.onFetchFailed)
                    .then(() => this.isLoading = false);
            },
            getDate(solve) {
                return moment(solve.created_at).format('MMMM Do, YYYY');
            },
            getShortDate(solve) {
                return moment(solve.created_at).format('MMM Do, YYYY');
            },
            getTime(solve) {
                let time = solve.milliseconds;

                let minutes = Math.floor(time / 60000);

                let seconds = Math.floor((time / 1000) % 60);
                if (seconds < 10) seconds = `0${ seconds }`;

                let milliseconds = Math.floor((time % 1000) / 10);
                if (milliseconds < 10) milliseconds = `0${ milliseconds }`;

                return minutes > 0
                    ? `${ minutes }:${ seconds }.${ milliseconds }`
                    : `${ seconds }.${ milliseconds }`;
            },
            onFetchComplete({ data }) {
                this.fastestSolves = data.speed;
                this.efficientSolves = data.efficiency;
                this.total = data.total;
            },
            onFetchFailed(error) {

            },
            refresh() {
                this.fetch();
            },
        },
    };
</script>
