<template>
    <div>
        <div
            v-for="skill in activeSkills"
            class="flex items-center mb-4 pb-4 "
            :key="skill.id">
            <div class="flex items-center min-w-12">
                <img class="h-auto w-12" :src="skill.logo.path" />
            </div>
            <div class="flex flex-wrap items-center pl-4">
                <div class="w-full">{{ skill.name }}</div>
                <div
                    v-if="skill.notes"
                    class="font-grey mt-1 text-xs">
                    {{ skill.notes }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('skills', [
            'activeSkills',
        ]),
    },
};
</script>
