<template>
    <v-card padded>
        <div class="font-thin mb-4 text-left md:leading-normal md:text-center">
            <div class="text-2xl text-grey-darkest">This page represents the universe of languages and tools I work with.</div>
            <div class="hidden text-xl text-grey-darker md:block">Closest to the center are the tools I reach for every day.</div>
        </div>

        <!-- list view -->
        <div class="md:hidden">
            <v-list />
        </div>

        <!-- universe view -->
        <div class="hidden py-4 md:block">
            <v-universe />
        </div>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { isEmpty } from '@/app/utils/array';
import listComponent from './list/list.vue';
import universeComponent from './universe/universe.vue';

export default {
    created() {
        // fetch skills if we don't already have them
        if (isEmpty(this.skills)) {
            this.$store.dispatch('skills/getSkills');
        }
    },
    components: {
        'v-list': listComponent,
        'v-universe': universeComponent,
    },
    computed: {
        ...mapState('skills', [
            'skills',
        ]),
    },
};
</script>
