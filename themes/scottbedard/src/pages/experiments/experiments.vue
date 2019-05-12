<template>
    <v-page padded>
        <v-margin padded>
            <header>
                <h1 class="font-light leading-normal text-2xl text-grey-darkest max-w-lg mb-2 mx-auto md:mb-4 md:text-center md:text-3xl">
                    Welcome to the hall of experiments!
                </h1>
                <p class="leading-normal max-w-md mx-auto text-center">
                    I often use this site as a place to mess around with new ideas. Here
                    are a few of them that I figured others might find interesting or useful.
                </p>
            </header>

            <div class="max-w-lg mx-auto">
                <div
                    v-for="(experiment, index) in experiments"
                    class="mt-20"
                    :key="index">
                    <h2
                        v-text="experiment.title"
                        class="font-light leading-tight mb-4 text-2xl text-center text-grey-darkest"
                    />
                    <p
                        class="mb-4 text-center"
                        v-text="experiment.excerpt"
                    />
                    <v-card padded>
                        <div class="text-center">
                            <img :src="experiment.thumbnail" />
                        </div>
                    </v-card>
                </div>
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
                    title: 'Svelte Heatmap',
                    excerpt: 'A github-style heatmap build with Svelte.',
                    thumbnail: require('./heatmap.png'),
                },
                {
                    title: 'CSS Cube',
                    excerpt: 'An odd experiment to see how far we can push the 3D transform abilities of CSS.',
                    thumbnail: require('./cube.png'),
                }
            ];
        },
    },
};
</script>