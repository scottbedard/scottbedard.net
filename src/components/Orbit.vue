<template>
  <div
    class="absolute flex justify-center items-center left-1/2 text-2xl top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    :style="{
       width: `${orbitDiameter * 100}%`,
    }">
    <div class="pb-full pointer-events-none" />
    <div
      class="animate-spin border border-dashed border-gray-200 rounded-full w-full"
      ref="orbitElement"
      :style="{
        animationDuration: `${rpm * 60}s`,
      }">
      <div class="pb-full pointer-events-none" />
      <component
        v-for="(skill, index) in skills"
        class="absolute bg-white border duration-500 flex items-center justify-center overflow-hidden rounded-full shadow-outline transform -translate-x-1/2 -translate-y-1/2 transition-shadow hover:shadow"
        :href="skill.to ? href(skill) : skill.href"
        :is="skill.to ? RouterLink : 'a'"
        :key="index"
        :style="{
          left: `${x(skill) * 50}%`,
          top: `${y(skill) * 50}%`,
          width: `${cellRadius * width}px`
        }"
        :target="skill.href ? '_blank' : undefined"
        :title="skill.name"
        :to="skill.to">
        <div class="pb-full" />
        <div
          class="animate-spin-reverse flex h-full items-center justify-center w-full"
          :style="{
            animationDuration: `${rpm * 60}s`,
          }">
          <img
            v-if="skill.src"
            class="h-auto max-w-1/2 w-full"
            :src="skill.src" />
        </div>
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { Skill } from '@/pages/Home.vue'
import { stubArray } from 'lodash-es'
import { useElementSize } from '@vueuse/core'
import { RouterLink, useLink, RouteLocationRaw } from 'vue-router'

export default defineComponent({
  setup(props) {
    const angle = computed(() => 2 * Math.PI / props.skills.length)
    const orbitElement = ref<HTMLElement>()
    const { width } = useElementSize(orbitElement)

    const routerLinks = props.skills
      .filter(skill => skill.to)
      .map(skill => {
        return {
          skill,
          link: useLink({ to: skill.to as RouteLocationRaw })
        }
      })
    
    const href = (skill: Skill) => routerLinks
      .find(obj => obj.skill === skill)
      ?.link
      ?.href
      ?.value
      
    const x = (obj: Skill) => 1 + Math.sin(props.skills.indexOf(obj) * angle.value)
    const y = (obj: Skill) => 1 - Math.cos(props.skills.indexOf(obj) * angle.value)

    return {
      href,
      orbitElement,
      RouterLink,
      width,
      x,
      y
    }
  },
  components: {
    RouterLink
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
