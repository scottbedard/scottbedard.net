<template>
    <v-card padded>
        <div class="font-thin leading-normal mb-4 text-center text-left">
            <div class="text-xl text-grey-darkest md:text-2xl">This page represents the universe of languages and tools I work with.</div>
            <div class="hidden text-xl text-grey-darker md:block">Closer to the center are the tools I reach for every day.</div>
        </div>

        <!-- list view -->
        <div class="mb-4 md:hidden">
            <v-list />
        </div>

        <!-- universe view -->
        <div class="hidden mb-4 md:block">
            <v-universe />
        </div>

        <!-- retired -->
        <router-link class="block font-thin leading-normal text-center text-grey-dark text-sm md:text-base" :to="{ name: 'retiredSkills' }">
            Nothing can live forever, and tech is no exception. Click here to see my toolkit from yesteryear.
        </router-link>
    </v-card>
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
