<template>
    <v-page padded>
        <v-margin padded>
            <header>
                <h1 class="font-thin leading-normal text-3xl text-grey-darkest max-w-lg mb-2 mx-auto text-center md:mb-4 md:text-3xl">
                    Welcome to my hall of experiments!
                </h1>
                <p class="font-thin leading-normal max-w-md mx-auto text-center text-grey-darkest">
                    I often use this site as a place to sandbox and mess around with ideas. Here
                    are a few of them that I figured others might find interesting.
                </p>
            </header>

            <div class="max-w-lg mx-auto">
                <router-link
                    v-for="(experiment, index) in experiments"
                    class="block mt-12 lg:mt-20"
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
                        <div class="text-center">
                            <img :src="experiment.thumbnail" />
                        </div>
                    </v-card>
                </router-link>
            </div>
        </v-margin>
    </v-page>
</template>

<script>
export default {
    computed: {
        experiments() {
            return [
                {
                    excerpt: 'A github-style heatmap build with Svelte.',
                    thumbnail: require('./heatmap/heatmap.png'),
                    title: 'Svelte Heatmap',
                    to: {
                        name: 'experiments-heatmap'
                    },
                },
                {
                    excerpt: 'An odd experiment to see how far we can push the 3D transform abilities of CSS.',
                    thumbnail: require('./cube/cube.png'),
                    title: 'CSS Cube',
                    to: {
                        name: 'experiments-cube',
                    },
                },
                {
                    excerpt: 'Getting my feet wet with the canvas element.',
                    thumbnail: require('./ribbon/ribbon.png'),
                    title: 'Canvas ribbon',
                    to: {
                        name: 'experiments-ribbon',
                    },
                },
            ];
        },
    },
};
</script>