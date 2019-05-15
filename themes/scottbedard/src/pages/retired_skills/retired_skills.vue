<template>
    <v-page padded>
        <v-margin padded>
            <!-- title -->
            <div class="mb-4 md:mb-8">
                <v-background-text>
                    <h1 class="font-normal leading-tight text-2xl text-grey-darkest mb-2 md:mb-4 md:text-center md:text-3xl">
                        These were tools I once used,<br class="hidden md:inline" />
                        but have since moved on from.
                    </h1>
                    <p class="leading-normal max-w-md mx-auto md:text-center">
                        I've learned a lot from various tools over the years. They taught me different
                        programming styles, and often forced me to rethink what I thought I knew. So to
                        the authors of these tools, and to their wonderful communities, thank you.
                    </p>
                </v-background-text>
            </div>

            <!-- retired skills -->
            <div class="max-w-lg mb-8 mx-auto">
                <v-card>
                    <v-skills-list :skills="retiredSkills" />
                </v-card>
            </div>

            <!-- active skills -->
            <v-background-text>
                <p>
                    <router-link class="block leading-normal text-center text-sm md:text-base" :to="{ name: 'skills' }">
                        Click here to see the tools I currently enjoy working with.
                    </router-link>
                </p>
            </v-background-text>
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
