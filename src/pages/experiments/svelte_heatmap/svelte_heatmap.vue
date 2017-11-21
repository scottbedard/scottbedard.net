<style lang="scss">
    .links a:not(:last-child) {
        margin-right: 20px;
    }

    .svelte-heatmap-container {
        padding: 48px 24px;
    }

    .svelte-heatmap-day {
        padding: 2px !important;
        height: 20px !important;
        width: 20px !important;
    }

    .controls {
        div {
            margin-bottom: 20px;
        }
    }
</style>

<template>
    <v-page>
        <h1>Svelte Heatmap</h1>
        <p>
            This project was an excuse to get my feet wet with <a href="https://svelte.technology" title="Svelte.js">Svelte.js</a>. For my first impressions on the framework, <router-link :to="{ name: 'blog.post', params: { slug: 'first-impressions-sveltejs' }}">see this blog post</router-link>.
        </p>

        <div class="links">
            <a href="#" @click.prevent="seed">
                <i class="fa fa-pencil"></i>
                <span>Redraw</span>
            </a>
            <a href="https://github.com/scottbedard/svelte-heatmap">
                <i class="fa fa-code"></i>
                <span>Source code</span>
            </a>
        </div>

        <!-- example -->
        <div class="svelte-heatmap-container">
            <div ref="heatmap"></div>
        </div>

        <!-- controls -->
        <div class="controls">
            <div>
                <label for="heatmap_colors">Number of colors</label>
                <input id="heatmap_colors" type="number" v-model.number="colors" min="3" max="50" />
            </div>
            <div>
                <label for="heatmap_empty_color">Empty color</label>
                <input id="heatmap_empty_color" type="color" v-model="emptyColor" />
            </div>
            <div>
                <label for="heatmap_low_color">Low color</label>
                <input id="heatmap_low_color" type="color" v-model="lowColor" />
            </div>
            <div>
                <label for="heatmap_high_color">High color</label>
                <input id="heatmap_high_color" type="color" v-model="highColor" />
            </div>
        </div>
    </v-page>
</template>

<script>
    import SvelteHeatmap from 'svelte-heatmap';

    import 'svelte-heatmap/dist/heatmap.css';

    export default {
        data() {
            return {
                colors: 10,
                days: 200,
                emptyColor: '#ebedf0',
                lowColor: '#c6e48b',
                highColor: '#196127',
                heatmapInstance: null,
                history: [],
            };
        },
        mounted() {
            this.seed();

            this.heatmapInstance = new SvelteHeatmap({
                target: this.$refs.heatmap,
                data: {
                    colors: this.colors,
                    lowColor: this.lowColor,
                    highColor: this.highColor,
                    history: this.history,
                    tooltip: (date, value) => `<strong>${value}</strong> contributions on <strong>${date}</strong>`,
                },
            });
        },
        methods: {
            onEmptyColorChanged(emptyColor) {
                this.heatmapInstance.set({ emptyColor });
            },
            onColorsChanged(colors) {
                this.heatmapInstance.set({ colors });
            },
            onLowColorChanged(lowColor) {
                this.heatmapInstance.set({ lowColor });
            },
            onHighColorChanged(highColor) {
                this.heatmapInstance.set({ highColor });
            },
            onHistoryChanged(history) {
                this.heatmapInstance.set({ history });
            },
            seed() {
                 // generate a years worth of dummy data
                const data = [];
                const date = new Date();
                const min = 0;
                const max = 5;

                for (let i = 0; i < this.days; i++) {
                    data.push({
                        date: date.toISOString().slice(0, 10).replace(/-/g, '/'),
                        value: Math.round(Math.random() * (max - min) + min),
                    });

                    date.setDate(date.getDate() - 1);
                }

                this.history = data;
            },
        },
        watch: {
            colors: 'onColorsChanged',
            days: 'seed',
            emptyColor: 'onEmptyColorChanged',
            highColor: 'onHighColorChanged',
            history: 'onHistoryChanged',
            lowColor: 'onLowColorChanged',
        },
    };
</script>