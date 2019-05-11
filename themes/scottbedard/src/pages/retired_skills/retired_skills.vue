<template>
    <v-page padded>
        <v-margin padded>
            <!-- title -->
            <div class="mb-4 md:mb-8">
                <h1 class="font-light leading-tight text-2xl text-grey-darkest mb-2 md:mb-4 md:text-center md:text-3xl">
                    These were tools I once used,<br class="hidden md:inline" />
                    but have since moved on from.
                </h1>
                <p class="font-thin leading-normal max-w-lg mx-auto md:text-center">
                    I've learned a lot from various tools over the years; from different
                    programming styles, to re-thinking what was even possible. So to the authors
                    of these tools, and their wonderful communities, thank you.
                </p>
            </div>

            <!-- retired skills -->
            <div class="mb-4">
                <v-card>
                    <v-skills-list :skills="retiredSkills" />
                    
                </v-card>
            </div>

            <!-- active skills -->
            <p>
                <router-link class="block font-thin leading-normal text-center text-sm md:text-base" :to="{ name: 'skills' }">
                    Click here to see the tools I currently enjoy working with.
                </router-link>
            </p>
        </v-margin>
    </v-page>
</template>

<script>
import { mapGetters } from 'vuex';
import skillsListComponent from '@/components/shared/skills_list';

export default {
    created() {
        this.$store.dispatch('skills/getSkills');
    },
    components: {
        'v-skills-list': skillsListComponent,
    },
    computed: {
        ...mapGetters('skills', [
            'retiredSkills',
        ]),
    },
};
</script>
