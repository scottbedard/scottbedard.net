<template>
    <v-card padded>
        <!-- universe view -->
        <div>
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
