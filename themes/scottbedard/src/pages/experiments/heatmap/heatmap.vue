<style lang="scss" scoped>
    .heatmap /deep/ {
        [svelte-168252958].svelte-heatmap,
        [svelte-168252958] .svelte-heatmap {
            display: flex;
            justify-content: center
        }

        [svelte-168252958].svelte-heatmap-history,
        [svelte-168252958] .svelte-heatmap-history {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
        }

        [svelte-168252958].svelte-heatmap-week,
        [svelte-168252958] .svelte-heatmap-week {
            padding: 5px 0;
        }

        [svelte-168252958].svelte-heatmap-day,
        [svelte-168252958] .svelte-heatmap-day {
            @apply h-4 rounded-sm w-4;
            margin: 2px;
        }

        [svelte-168252958].svelte-heatmap-day-inner,
        [svelte-168252958] .svelte-heatmap-day-inner {
            @apply h-full relative rounded-sm w-full;
            background-color: #ccc;
        }

        [svelte-168252958].svelte-heatmap-legend,
        [svelte-168252958] .svelte-heatmap-legend {
            @apply flex items-center justify-end mt-2 text-sm w-full;
            width: 100%
        }

        [svelte-168252958].svelte-heatmap-legend-low,
        [svelte-168252958] .svelte-heatmap-legend-low {
            @apply mr-2;
        }

        [svelte-168252958].svelte-heatmap-legend-high,
        [svelte-168252958] .svelte-heatmap-legend-high {
            @apply ml-2;
        }

        [svelte-168252958].svelte-heatmap-legend-color,
        [svelte-168252958] .svelte-heatmap-legend-color {
            @apply h-4 inline-block rounded w-4;
            margin: 0 2px
        }

        [svelte-168252958].svelte-heatmap-day-tooltip,
        [svelte-168252958] .svelte-heatmap-day-tooltip {
            @apply absolute bg-grey-darkest rounded text-grey-lightest text-sm;
            bottom: 100%;
            left: 50%;
            opacity: 0;
            padding: 10px 12px;
            pointer-events: none;
            transform: translateX(-50%) translateY(-5px);
            transition: opacity 150ms ease-in-out;
            white-space: nowrap;
            z-index: 1
        }

        [svelte-168252958].svelte-heatmap-day-tooltip:after,
        [svelte-168252958] .svelte-heatmap-day-tooltip:after {
            border-bottom: 3px solid config('colors.grey-darkest');
            border-left: 3px solid transparent;
            border-radius: 2px;
            border-right: 3px solid config('colors.grey-darkest');
            border-top: 3px solid transparent;
            bottom: 0;
            content: "";
            display: block;
            left: 50%;
            position: absolute;
            transform: translateX(-50%) translateY(50%) rotate(45deg)
        }

        [svelte-168252958].svelte-heatmap-day-inner:hover .svelte-heatmap-day-tooltip,
        [svelte-168252958] .svelte-heatmap-day-inner:hover .svelte-heatmap-day-tooltip {
            opacity: 1;
            pointer-events: auto
        }
    }
</style>

<template>
    <v-page padded>
        <v-margin padded>
            <v-background-text>
                <h1 class="font-thin mb-4 text-3xl">
                    Svelte Heatmap
                </h1>
                <p class="leading-normal max-w-md mb-4 text-grey-darkest">
                    This project was mostly just an excuse to get my feet wet
                    with Svelte. To see my first impressions of the framework,
                    <a href="#" @click.prevent>check out this blog post</a>.
                </p>
                <div class="flex items-center mb-8">
                    <a
                        class="flex items-center"
                        href="#"
                        title="Click to redraw the heatmap"
                        @click.prevent="redraw">
                        <i class="fa fa-refresh mr-2"></i>
                        Redraw
                    </a>
                    <a
                        class="flex items-center ml-8"
                        href="https://github.com/scottbedard/svelte-heatmap"
                        target="_blank"
                        title="Click view this project on GitHub">
                        <i class="fa fa-code mr-2"></i>
                        View Source
                    </a>
                </div>
            </v-background-text>
            <v-card padded>
                <div ref="heatmap" class="heatmap px-20 py-8"></div>
            </v-card>
        </v-margin>
    </v-page>
</template>

<script>
import SvelteHeatmap from 'svelte-heatmap';
import dayjs from 'dayjs';
import pluralize from 'pluralize';
import { bindExternalEvent } from 'spyfu-vue-utils';
import { debounce, sample } from 'lodash-es';

export default {
    mounted() {
        this.redraw();

        bindExternalEvent(this, window, 'resize', this.redraw);
    },
    data() {
        return {
            heatmapComponent: null,
            history: [],
        };
    },
    methods: {
        redraw: debounce(function redraw() {
            // seed a year of dummy data
            const data = [];
            const date = new Date();
            const days = Math.min(200, Math.round(window.innerWidth / 8));
            const values = [
                0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            ];

            for (let i = 0; i < days; i += 1) {
                data.push({
                    date: date.toISOString().slice(0, 10).replace(/-/g, '/'),
                    value: sample(values),
                });

                date.setDate(date.getDate() - 1);
            }

            // clean up the previous heatmap
            if (this.heatmapComponent) {
                this.heatmapComponent.destroy();
            }

            // mount our heatmap to the dom
            this.history = data;

            this.heatmapComponent = new SvelteHeatmap({
                target: this.$refs.heatmap,
                data: {
                    history: this.history,
                    tooltip: (d, value) => `${pluralize('commit', value, true)} on ${dayjs(d).format('ddd MMM D YYYY')}`,
                },
            });
        }, 10),
    },
};
</script>
