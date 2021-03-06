<template>
  <Layout>
    <div class="gap-6 grid md:grid-cols-2">
      <div class="content-start gap-3 grid">
        <PageTitle>A speed cube made of divs</PageTitle>
        <p>
          Have you ever built something just to see if you could? I'm
          afraid that's what we have here. I was experimenting with 3D
          transforms, and then it became a game to see how much could
          be done with divs.
        </p>
        <p>
          I don't really know what it is now, but it's fun to mess with.
          If you want to do some solving, head over to <a href="https://speedcube.site">speedcube.site</a>.
        </p>
        <div class="gap-6 flex">
          <Button @click="reposition">
            Scramble
          </Button>
          <Button href="https://github.com/scottbedard/scottbedard.net/blob/vite/src/pages/experiments/CssCube.vue">
            View Source
          </Button>
        </div>
        <div
          v-if="currentScramble"
          v-text="currentScramble"
          class="text-sm tracking-widest" />
      </div>
      <div class="flex justify-center">
        <div class="max-w-xs mx-auto w-full">
          <Twister
            :scramble="scramble"
            :position="[tx, ty, tz]"
            @scramble="onScramble" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { random } from 'lodash-es'
import { TransitionPresets, useTransition } from '@vueuse/core'
import Button from '@/components/Button.vue'
import Layout from '@/components/Layout.vue'
import PageTitle from '@/components/PageTitle.vue'
import Twister from '@/components/twister/Twister.vue'

type Vector3 = [number, number, number]

const easeOutElastic = (n: number) => Math.pow(2, -10 * n) * Math.sin((n * 10 - 0.75) * (2 * Math.PI) / 3) + 1;

const rand = () => random(0, 1, true)

export default defineComponent({
  components: {
    Button,
    Layout,
    PageTitle,
    Twister,
  },
  setup() {
    const currentScramble = ref('')
    const scramble = ref(0)

    const x = ref(rand())
    const y = ref(rand())
    const z = ref(rand())

    const reposition = () => {
      scramble.value++;
      x.value = rand()
      y.value = rand()
      z.value = rand()
    }

    const options = {
      duration: 10000,
      transition: easeOutElastic, //TransitionPresets.easeOutExpo,
    }

    const tx = useTransition(x, options)
    const ty = useTransition(y, options)
    const tz = useTransition(z, options)

    const onScramble = (str: string) => {
      currentScramble.value = str
    }

    return {
      currentScramble,
      reposition,
      onScramble,
      scramble,
      tx,
      ty,
      tz,
    }
  }
})
</script>
