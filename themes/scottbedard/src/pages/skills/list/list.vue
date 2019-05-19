<template>
    <v-skills-list :skills="activeSkills" />
</template>

<script>
import { mapGetters } from 'vuex';
import skillsListComponent from '@/components/shared/skills_list.vue';

export default {
    components: {
        'v-skills-list': skillsListComponent,
    },
    computed: {
        ...mapGetters('skills', [
            'activeSkills',
        ]),
    },
};
</script>
