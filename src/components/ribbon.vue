<template>
  <pre class="text-xs mb-12">{{
    {
      count,
      progress: progress.toFixed(4)
    }
  }}</pre>

  <pre class="fixed top-0 left-0 text-xs">
    <div
      v-for="(color, i) in ribbon.colors"
      class="flex items-center"
      :data-index="i"
      :key="i">
      <div
        class="border border-white h-4 mr-2 w-4"
        :style="{ background: `rgb(${color[0]},${color[1]},${color[2]})` }" />
      <div v-text="`${color[0]}, ${color[1]}, ${color[2]}`" />
    </div>
  </pre>

  <pre class="fixed right-0 top-0 text-xs">
    <div
      v-for="(point, i) in ribbon.points"
      v-text="JSON.stringify(point)"
      :data-index="i"
      :key="i" />
  </pre>

  <canvas
    class="fixed h-full left-0 top-0 w-full"
    ref="canvas"
    style="z-index: -1" />

  <button class="bg-gray-300 cursor-pointer font-mono p-2 rounded" @click="count++">+1</button>
</template>

<script lang="ts">
import { blend, keys, safeSample } from '../utils';
import { computed, defineComponent, onMounted, ref } from 'vue';
import { last, times } from 'lodash-es';
import { useTransition, useWindowSize } from '@vueuse/core';
import { Vector2 } from '../types';

const blue = '2196f3'
const cyan = '00bcd4'
const green = '009307'
const indigo = '3f51b5'
const lightGreen = '8bc34a'
const orange = 'ef6c00'
const pink = 'f48fb1'
const purple = '9c27b0'
const red = 'ff1100'
const yellow = 'ffeb3b'

const colors = {
  [blue]: [green, indigo, lightGreen, purple],
  [green]: [blue, cyan, yellow],
  [purple]: [blue, cyan, indigo, red],
  [red]: [purple, yellow],
  [yellow]: [green, orange, pink, red]
}

const baseColors = keys(colors)
const opacity = 0.4
const deviation = 135

export default defineComponent({
  setup() {
    const { height, width } = useWindowSize()
    
    const canvas = ref<HTMLCanvasElement>()

    const count = ref(0)

    const transition = useTransition(count, { duration: 1000 })

    const progress = computed(() => count.value ? transition.value - count.value + 1 : 0)

    // const midpoint = computed(() => height.value / 2)

    const vertices = computed(() => Math.ceil(width.value / 40))

    const ribbon = computed(() => {
      const a = safeSample(baseColors)
      const b = safeSample(colors[a])
      const steps = vertices.value + 4

      return {
        count: count.value,
        colors: Math.random() > 0.5
          ? blend(a, b, steps)
          : blend(b, a, steps),
        points: times(steps).reduce<Vector2[]>((acc, n, i) => {
          const x = (i * width.value) - (width.value * 2)
          const y = (last(acc)?.[1] ?? 0 + (Math.random() * deviation)) - (deviation / 2)
          return [...acc, [x, y]]
        }, [])
      }
    })

    onMounted(() => {
      // ...
    })

    return {
      canvas,
      count,
      progress,
      ribbon,
      transition,
      vertices
    }
  }
})
</script>