<template>
  <div class="gap-x-6 gap-y-12 grid py-12 xl:grid-cols-2">
    <div>
      <div class="grid gap-6 text-center xl:text-left">
        <h1 class="font-semibold text-5xl">Hello,</h1>
        <h2 class="font-semibold text-5xl">My name is Scott&nbsp;Bedard.</h2>
        <div class="gap-6 grid max-w-4xl mx-auto text-lg">
          <p>
            I'm a frontend developer at <a href="https://chess.com">Chess.com</a>, welcome to my personal code playground. Most things here were experimental and just for fun, so take everything with a grain of salt. 😉
          </p>
          <p>
            Here are some of my programming interests right now. Click them to see something fun I'm building.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-md mt-6 mx-auto relative w-full xl:mt-20 xl:max-w-xl">
      <div class="pb-full" />
      <!--
        be aware, the order of the dom matters here!
        outer orbits must render first, otherwise they will
        end up behind smaller orbits, and thus unclickable.
        we could also have solved this with z-index if we wanted.
      -->
      <Orbit
        :cell-radius="0.1"
        :orbit-diameter="0.85"
        :rpm="14"
        :skills="outer" />
      <Orbit
        :cell-radius="0.2"
        :orbit-diameter="0.58"
        :rpm="12"
        :skills="middle" />
      <Orbit
        :cell-radius="0.65"
        :orbit-diameter=".23"
        :rpm="10"
        :skills="inner" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocationRaw } from 'vue-router'
import { shuffle } from 'lodash-es'
import Orbit from '@/components/Orbit.vue'

export type Skill = {
  href?: string
  name: string
  src: string
  to?: RouteLocationRaw
}

export default defineComponent({
  components: {
    Orbit
  },
  setup() {
    const inner: Skill[] = shuffle([
      {
        href: 'https://github.com/scottbedard/scottbedard.net',
        name: 'My site is built with Vue',
        src: '/assets/logos/vue.svg'
      },
      {
        href: 'https://speedcube.site/',
        name: 'This speedcubing app was made with Three.js',
        src: '/assets/logos/three.png'
      },
      {
        href: 'https://github.com/scottbedard/twister',
        name: 'A state modeling library I wrote in TypeScript',
        src: '/assets/logos/typescript.svg'
      },
    ])

    const middle: Skill[] = shuffle([
      {
        href: 'https://github.com/scottbedard/scottbedard.net/blob/vite/src/components/Orbit.vue',
        name: 'This universe component was made using Tailwind',
        src: '/assets/logos/tailwind.svg'
      },
      {
        href: 'https://speedcube.site',
        name: 'A fun project with a Laravel backend',
        src: '/assets/logos/laravel.svg'
      },
      {
        href: 'https://github.com/scottbedard/twister',
        name: 'A twisty puzzle state modeling library tested with Jest',
        src: '/assets/logos/jest.png'
      },
      {
        href: 'https://github.com/scottbedard/svelte-heatmap#svelte-heatmap',
        name: 'The GitHub heatmap, build with Svelte',
        src: '/assets/logos/svelte.svg'
      },
      {
        href: 'https://twister.speedcube.site',
        name: 'A playground for twisty puzzle state modeling, build with Nuxt',
        src: '/assets/logos/nuxt.svg'
      },
    ])

    const outer: Skill[] = shuffle([
      {
        href: 'https://github.com/scottbedard/vuetober',
        name: 'A fun way to integrate October with Webpack',
        src: '/assets/logos/october.png'
      },
      {
        name: 'A fun experiment that pushed CSS a bit too far',
        src: '/assets/logos/css.svg',
        to: {
          name: 'css-cube-experiment'
        }
      },
      {
        name: 'Having some fun with the <canvas> element',
        src: '/assets/logos/html.png',
        to: {
          name: 'canvas-ribbon-experiment',
        },
      },
      {
        href: 'https://github.com/scottbedard/nuxlifaunify',
        name: 'An experiment with serverless databases',
        src: '/assets/logos/fauna.png'
      },
      {
        href: 'https://github.com/scottbedard/scottbedard.net',
        name: 'My site is deployed with Netlify',
        src: '/assets/logos/netlify.svg'
      },
      {
        href: 'https://github.com/scottbedard/scottbedard.net',
        name: 'My site is developed with Vite',
        src: '/assets/logos/vite.svg'
      },
      {
        href: 'https://github.com/scottbedard',
        name: 'Visit my GitHub profile',
        src: '/assets/logos/github.svg'
      },
    ])

    return {
      inner,
      middle,
      outer
    }
  }
})
</script>
