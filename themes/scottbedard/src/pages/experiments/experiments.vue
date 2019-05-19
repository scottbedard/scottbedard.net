<template>
    <v-page padded>
        <v-margin padded>
            <v-background-text>
                <h1 class="font-thin leading-normal text-3xl text-grey-darkest max-w-lg mb-2 mx-auto text-center md:text-3xl">
                    This site doubles as a place to experiment
                </h1>
                <p class="font-thin leading-normal max-w-md mx-auto text-center text-grey-darkest">
                    Here are a few that I'm proud of, and figured someone might find interesting.
                </p>

                <div class="max-w-lg mx-auto">
                    <router-link
                        v-for="(experiment, index) in experiments"
                        class="block heading mt-12 lg:mt-20"
                        :key="index"
                        :to="experiment.to">
                        <h2
                            v-text="experiment.title"
                            class="font-light leading-normal text-3xl text-center"
                        />
                        <p
                            class="font-thin leading-normal mb-8 text-center text-grey-darkest"
                            v-text="experiment.excerpt"
                        />
                        <v-card padded>
                            <div class="py-4 text-center">
                                <img
                                    :style="experiment.thumbnailStyles || {}"
                                    :src="experiment.thumbnail"
                                />
                            </div>
                        </v-card>
                    </router-link>
                </div>
            </v-background-text>
        </v-margin>
    </v-page>
</template>

<script>
import heatmapThumb from './heatmap/heatmap.png';
import cubeThumb from './cube/cube.png';
import ribbonThumb from './ribbon/ribbon.png';

export default {
    computed: {
        experiments() {
            return [
                {
                    excerpt: 'A github-style heatmap build with Svelte.',
                    thumbnail: heatmapThumb,
                    title: 'Svelte Heatmap',
                    to: {
                        name: 'svelte-heatmap',
                    },
                },
                {
                    excerpt: 'An odd experiment to see how far we can push the 3D transform abilities of CSS.',
                    thumbnail: cubeThumb,
                    thumbnailStyles: {
                        'max-width': '200px',
                    },
                    title: 'CSS Cube',
                    to: {
                        name: 'cube',
                    },
                },
                {
                    excerpt: 'Getting my feet wet with the canvas element.',
                    thumbnail: ribbonThumb,
                    title: 'Canvas ribbon',
                    to: {
                        name: 'canvas-ribbon',
                    },
                },
            ];
        },
    },
};
</script>
