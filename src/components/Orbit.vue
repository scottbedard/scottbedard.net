<template>
  <div
    class="absolute flex justify-center items-center left-0 text-2xl top-0 w-full">
    <div class="pb-full" />
    <div
      class="animate-spin"
      ref="orbitElement"
      :style="{
        animationDuration: `${rpm * 60}s`,
        width: `${orbitDiameter * 100}%`,
      }">
      <div class="pb-full" />
      <div
        v-for="(skill, index) in skills"
        class="absolute bg-white flex items-center justify-center overflow-hidden rounded-full shadow-outline transform -translate-x-1/2 -translate-y-1/2"
        :key="index"
        :style="{
          left: `${x(skill) * 50}%`,
          top: `${y(skill) * 50}%`,
          width: `${cellRadius * width}px`
        }">
        <div class="pb-full" />
        <div
          class="animate-spin-reverse flex h-full items-center justify-center w-full"
          :style="{
            animationDuration: `${rpm * 60}s`,
          }">
          {{ skill.name }}
          <!-- <img
            class="w-2/3"
            :alt="skill.name"
            :src="skill.src" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { Skill } from '@/pages/Home.vue'
import { stubArray } from 'lodash-es'
import { useElementSize } from '@vueuse/core'

export default defineComponent({
  setup({ skills }) {
    const angle = computed(() => 2 * Math.PI / skills.length)
    const orbitElement = ref<HTMLElement>()
    const { width } = useElementSize(orbitElement)
    
    const x = (obj: Skill) => 1 + Math.sin(skills.indexOf(obj) * angle.value)
    const y = (obj: Skill) => 1 - Math.cos(skills.indexOf(obj) * angle.value)

    return {
      orbitElement,
      width,
      x,
      y
    }
  },
  name: 'Orbit',
  props: {
    cellRadius: {
      default: 1,
      type: Number
    },
    orbitDiameter: {
      default: 1,
      type: Number
    },
    rpm: {
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
