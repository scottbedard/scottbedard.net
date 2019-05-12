<template>
    <v-page padded>
        <v-margin padded>
            <div class="flex flex-wrap">
                <div class="w-full md:text-center lg:flex lg:text-left lg:w-2/5">
                    <div class="w-full lg:w-auto">
                        <h1 class="font-light leading-normal text-2xl text-grey-darkest mb-2 md:mb-8 md:text-3xl">
                            I think of myself as a frontender<br class="hidden sm:inline" />
                            who also enjoys Laravel and Node.
                        </h1>
                        <p class="font-thin leading-normal mb-4 text-grey-darkest lg:mb-8">
                            <span>This page represents the universe of tools I'm currently working with.&nbsp;<br class="hidden md:inline lg:hidden" /></span>
                            <span class="md:hidden">At the top of the list are ones I reach for on a daily basis.</span>
                            <span class="hidden md:inline">Closest to the center are the tools I reach for every day.</span>
                        </p>
                        <p class="hidden font-thin leading-normal text-grey-darkest lg:block">
                            Nothing can live forever though, and tech is certainly no exception.
                            <router-link class="text-sm md:text-base" :to="{ name: 'retiredSkills' }">
                                Click here to see my toolkit from yesteryear.
                            </router-link>
                        </p>
                    </div>
                </div>

                <div class="w-full lg:w-3/5">
                    <!-- list view -->
                    <div class="md:hidden">
                        <p class="bg-grey-light font-thin leading-normal mb-4 p-4 rounded text-left text-sm">
                            <strong>Fun side note,</strong> check out the desktop version of this page to see
                            an experiment I had with dynamic css.
                        </p>
                        <v-card>
                            <v-list />
                        </v-card>
                    </div>
                    <!-- universe view -->
                    <div class="hidden md:block">
                        <v-universe />
                    </div>
                    <p class="lg:hidden">
                        <router-link class="block font-thin leading-normal text-center text-sm md:text-base" :to="{ name: 'retiredSkills' }">
                            Nothing can live forever, and tech is certainly no exception.<br class="hidden md:inline" />
                            Click here to see my toolkit from yesteryear.
                        </router-link>
                    </p>
                </div>
            </div>
        </v-margin>
    </v-page>
</template>

<script>
import listComponent from './list/list.vue';
import universeComponent from './universe/universe.vue';

export default {
    created() {
        this.$store.dispatch('skills/getSkills');
    },
    components: {
        'v-list': listComponent,
        'v-universe': universeComponent,
    },
};
</script>
