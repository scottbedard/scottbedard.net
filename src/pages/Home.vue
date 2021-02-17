<style lang="postcss" scoped>
.orbit {
  @apply -translate-y-1/2 -translate-x-1/2 absolute border-4 border-dotted border-gray-300 left-1/2 rounded-full top-1/2 transform
}

.orbit:after {
  @apply block pb-full w-full;
  content: "";
}
</style>

<template>
  <div class="gap-x-6 gap-y-12 grid py-12 xl:grid-cols-2">
    <div>
      <div class="grid gap-6 text-center xl:text-left">
        <h1 class="font-semibold text-6xl">Hello,</h1>
        <h2 class="font-semibold text-4xl">My name is Scott&nbsp;Bedard.</h2>
        <div class="gap-6 grid max-w-4xl mx-auto text-lg">
          <p>
            I'm a frontend developer at <a href="https://chess.com">Chess.com</a>, welcome to my personal code playground. Most things here are random experiments or were just for fun, take everything with a grain of salt. 😉
          </p>
          <p>
            <span class="xl:hidden">Below</span><span class="hidden xl:inline">To the right</span> represents my current universe of tools. Closest to the center are the ones I reach for every day.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-md mt-6 mx-auto relative w-full xl:mt-20 xl:max-w-xl">
      <div class="pb-full" />

      <UniverseOrbit
        class="w-1/4"
        :size="4"
        :skills="inner" />

      <UniverseOrbit
        class="w-2/3"
        :size="3"
        :skills="middle" />

      <UniverseOrbit
        class="w-full"
        :size="2"
        :skills="outer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UniverseOrbit from '@/components/UniverseOrbit.vue';

export type Skill = {
  href: string
  name: string
  orbit: number
  src: string
}

export default defineComponent({
  components: {
    UniverseOrbit
  },
  setup() {
    const inner: Skill[] = new Array(3)
      .fill(null)
      .map(() => {
        return {
          href: 'https://github.com/scottbedard/speedcube.site',
          name: 'Vue',
          orbit: 0,
          src: '/assets/vue.png'
        }
      })

    const middle: Skill[] = new Array(5)
      .fill(null)
      .map(() => {
        return {
          href: 'https://github.com/scottbedard/speedcube.site',
          name: 'Vue',
          orbit: 0,
          src: '/assets/vue.png'
        }
      })

    const outer: Skill[] = new Array(9)
      .fill(null)
      .map(() => {
        return {
          href: 'https://github.com/scottbedard/speedcube.site',
          name: 'Vue',
          orbit: 0,
          src: '/assets/vue.png'
        }
      })

    return {
      inner,
      middle,
      outer
    }
  }
})
</script>
