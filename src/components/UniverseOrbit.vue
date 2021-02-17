<template>
  <div class="absolute border border-dotted border-gray-300 left-1/2 rounded-full top-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <div class="pb-full" />
    <div
      v-for="(skill, index) in skills"
      class="absolute bg-white flex items-center justify-center rounded-full shadow-sm transform -translate-x-1/2 -translate-y-1/2"
      :key="index"
      :style="{
        height: `${size}rem`,
        left: `${x(skill) * 50}%`,
        top: `${y(skill) * 50}%`,
        width: `${size}rem`
      }">
      <!-- <img
        class="w-2/3"
        :alt="skill.name"
        :src="skill.src" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Skill } from '@/pages/Home.vue'
import { stubArray } from 'lodash-es'

export default defineComponent({
  setup({ skills }) {
    const angle = computed(() => 2 * Math.PI / skills.length)
    const x = (obj: Skill) => 1 + Math.sin(skills.indexOf(obj) * angle.value)
    const y = (obj: Skill) => 1 - Math.cos(skills.indexOf(obj) * angle.value)

    return {
      x,
      y
    }
  },
  props: {
    size: {
      default: 1,
      type: Number
    },
    skills: {
      default: stubArray,
      type: Array as PropType<Skill[]>
    }
  }
})
</script>
