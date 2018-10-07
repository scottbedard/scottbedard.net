<template>
    <v-card padded>
        <!-- title -->
        <div class="font-thin leading-normal mb-4 text-center text-left">
            <div class="text-xl text-grey-darkest md:text-2xl">These tools were once part of my arsenal, but nothing can last forever.</div>
            <div class="text-lg text-grey-darker md:text-xl">Thanks for the memories, everyone.</div>
        </div>

        <!-- retired skills -->
        <div
            v-for="(skill, i) in retiredSkills"
            class="flex items-center"
            :class="{
                'border-t border-grey-lighter mt-4 pt-4': i > 0,
            }"
            :key="skill.id">
            <div class="flex items-center mr-4 transition-width w-10 sm:w-12">
                <img :src="skill.logo.path" />
            </div>
            <div class="flex flex-wrap items-center">
                <div class="w-full">{{ skill.name }}</div>
                <div
                    v-if="skill.notes"
                    class="font-grey mt-1 text-xs">
                    {{ skill.notes }}
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    created() {
        this.$store.dispatch('skills/getSkills');
    },
    computed: {
        ...mapGetters('skills', [
            'retiredSkills',
        ]),
    },
};
</script>
