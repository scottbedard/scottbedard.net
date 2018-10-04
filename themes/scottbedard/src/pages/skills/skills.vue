<template>
    <v-card padded>
        <pre class="text-xs">{{ skills }}</pre>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { isEmpty } from '@/app/utils/array';

export default {
    created() {
        // fetch skills if we don't already have them
        if (isEmpty(this.skills)) {
            this.$store.dispatch('skills/getSkills');
        }
    },
    computed: {
        ...mapState('skills', [
            'skills',
        ]),
    },
};
</script>
