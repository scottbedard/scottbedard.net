<template>
    <v-page padded>
        <v-margin padded>
            <div>
                <h1 class="font-light leading-tight text-2xl text-grey-darkest mb-2 md:mb-4 md:text-center md:text-3xl">
                    I like to think of myself as a frontender<br class="hidden md:inline" />
                    who also enjoys Laravel and Node.
                </h1>
                <p class="font-thin leading-normal mb-4 md:text-center">
                    This page represents the universe of tools I'm currently working with.<br class="hidden md:inline" />
                    <span class="md:hidden">At the top of the list are tools I reach for on a daily basis.</span>
                    <span class="hidden md:inline">Closest to the center are ones I reach for on a daily basis.</span>
                </p>
            </div>

            <!-- list view -->
            <div class="mb-4 md:hidden">
                <p class="bg-grey-light font-thin leading-normal mb-4 p-4 rounded text-left text-sm">
                    Fun side note, check out the desktop view of this page to see an experiment
                    I had with dynamic css animations.
                </p>
                <v-card padded>
                    <v-list />
                </v-card>
            </div>

            <!-- universe view -->
            <div class="hidden mb-4 md:block">
                <v-universe />
            </div>

            <!-- retired -->
            <p>
                <router-link class="block font-thin leading-normal text-center text-sm md:text-base" :to="{ name: 'retiredSkills' }">
                    Nothing can live forever though, and tech is obviously no exception.<br class="hidden md:inline" />
                    Click here to see my toolkit from yesteryear.
                </router-link>
            </p>
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
