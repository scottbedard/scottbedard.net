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
            I'm a frontend developer at <a href="https://chess.com">Chess.com</a>, welcome to my personal code playground. Most things here were just for fun, so take everything with a grain of salt. 😉
          </p>
          <p>
            <span class="xl:hidden">Below</span><span class="hidden xl:inline">To the right</span> represents my current universe of tools. Closest to the center are the ones I reach for every day.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-md mx-auto relative w-full xl:max-w-xl">
      <div class="pb-full" />
      <div class="orbit w-full"></div>
      <div class="orbit w-2/3"></div>
      <div class="orbit w-1/3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type Skill = {
  href: string
  name: string
  orbit: number
  src: string
}

export default defineComponent({
  setup() {
    const skills: Skill[] = [
      {
        href: 'https://github.com/scottbedard/speedcube.site',
        name: 'Vue',
        orbit: 0,
        src: '/assets/vue.png'
      }
    ]

    return {
      skills
    }
  }
})
</script>
