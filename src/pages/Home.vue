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
        :cell-radius="0.62"
        :orbit=".25"
        :rpm="6"
        :skills="inner" />

      <UniverseOrbit
        :cell-radius="0.2"
        :orbit="0.65"
        :rpm="8"
        :skills="middle" />

      <UniverseOrbit
        :cell-radius="0.1"
        :orbit="1"
        :rpm="10"
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
  src: string
}

export default defineComponent({
  components: {
    UniverseOrbit
  },
  setup() {
    const inner: Skill[] = [
      {
        href: '#',
        name: '😀',
        src: ''
      },
      {
        href: '#',
        name: '🤩',
        src: ''
      },
      {
        href: '#',
        name: '😎',
        src: ''
      }
    ]

    const middle: Skill[] = [
      {
        href: '#',
        name: '😏',
        src: ''
      },
      {
        href: '#',
        name: '🤔',
        src: ''
      },
      {
        href: '#',
        name: '🤭',
        src: ''
      },
      {
        href: '#',
        name: '🤫',
        src: ''
      },
      {
        href: '#',
        name: '😱',
        src: ''
      },
    ]

    const outer: Skill[] = [
      {
        href: '#',
        name: '🙊',
        src: ''
      },
      {
        href: '#',
        name: '🤡',
        src: ''
      },
      {
        href: '#',
        name: '🤓',
        src: ''
      },
      {
        href: '#',
        name: '🤬',
        src: ''
      },
      {
        href: '#',
        name: '🤯',
        src: ''
      },
      {
        href: '#',
        name: '👨‍🍳',
        src: ''
      },
      {
        href: '#',
        name: '🧠',
        src: ''
      },
    ]

    return {
      inner,
      middle,
      outer
    }
  }
})
</script>
