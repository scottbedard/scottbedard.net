<template>
    <v-card padded>
        <!-- universe view -->
        <div class="py-4">
            <div class="font-thin leading-normal mb-4 text-center">
                <div class="text-2xl text-grey-darkest">This page represents the universe of languages and tools I work with.</div>
                <div class="text-xl text-grey-darker">Closest to the center are the tools I reach for every day.</div>
            </div>
            <v-universe />
        </div>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { isEmpty } from '@/app/utils/array';
import universeComponent from './universe/universe.vue';

export default {
    created() {
        // fetch skills if we don't already have them
        if (isEmpty(this.skills)) {
            this.$store.dispatch('skills/getSkills');
        }
    },
    components: {
        'v-universe': universeComponent,
    },
    computed: {
        ...mapState('skills', [
            'skills',
        ]),
    },
};
</script>
