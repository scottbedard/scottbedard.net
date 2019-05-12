<template>
    <v-page padded>
        <v-margin padded>
            <div>
                <h1 class="font-light leading-normal text-2xl text-grey-darkest mb-2 md:mb-4 md:text-center md:text-3xl">
                    I think of myself as frontend developer,<br class="hidden sm:inline" />
                    who's also experienced with Laravel and Node.
                </h1>
                <p class="font-thin leading-normal mb-4 md:text-center">
                    <span>This page represents the universe of tools I enjoy working with.<br class="hidden md:inline" /></span>
                    <span class="md:hidden">At the top of the list are tools I reach for on a daily basis.</span>
                    <span class="hidden md:inline">Closest to the center are the tools I reach for every day.</span>
                </p>
            </div>

            <!-- list view -->
            <div class="mb-4 md:hidden">
                <p class="bg-grey-light font-thin leading-normal mb-4 p-4 rounded text-left text-sm">
                    <strong>Fun side note,</strong> check out the desktop version of this page to see
                    one of my experiments with dynamic css.
                </p>
                <v-card>
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
                    Nothing can live forever, and tech is certainly no exception.<br class="hidden md:inline" />
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
