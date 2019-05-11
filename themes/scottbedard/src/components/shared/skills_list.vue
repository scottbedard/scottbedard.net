<template>
    <div>
        <div
            v-for="(skill, i) in skills"
            class="flex p-4"
            :class="{
                'border-t border-grey-light pt-4': i > 0,
            }"
            :key="skill.id">
            <div class="items-center max-w-8 sm:flex xs:max-w-12">
                <img class="h-auto w-full" :src="skill.logo.path" />
            </div>
            <div class="flex-1 pl-4">
                <div class="mb-2">{{ skill.name }}</div>
                <div
                    v-if="skill.notes"
                    class="font-thin">
                    {{ skill.notes }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'skills',
    ],
};
</script>