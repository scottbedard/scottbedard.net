<template>
    <v-page padded>
        <v-margin padded>
            <header>
                <h1 class="font-light leading-tight text-2xl text-grey-darkest mb-2 md:mb-4 md:text-center md:text-3xl">
                    From time to time, I use this site as<br class="hidden md:inline" />
                    a sandbox for experimenting.
                </h1>
                <!-- <p class="font-thin leading-normal mb-4 md:text-center">
                    I hope you find these experiments interesting in some way.
                </p> -->
            </header>

            <div class="max-w-lg mx-auto">
                <v-card>
                    <div
                        v-for="(experiment, index) in experiments"
                        :key="index">
                        <div class="p-4 text-center">
                            <h2 class="font-light leading-tight mb-2 text-2xl text-grey-darkest">{{ experiment.title }}</h2>
                            <p class="font-thin leading-normal mb-4">{{ experiment.excerpt }}</p>
                            <img :src="experiment.thumbnail" />
                        </div>
                    </div>
                </v-card>
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