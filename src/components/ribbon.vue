<template>
  <canvas
    class="fixed h-full left-0 top-0 w-full"
    ref="canvas"
    :style="{
      opacity: 0.35,
      zIndex: -1,
    }" />
</template>

<script lang="ts">
import { blend, keys, safeSample } from '../utils'
import { computed, defineComponent, ref, watchEffect } from 'vue'
import { times } from 'lodash-es'
import { useWindowSize } from '@vueuse/core'
import { Vector2, Vector3 } from '../types'

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

const deviation = 135

export default defineComponent({
  setup() {
    const { height, width } = useWindowSize()
    
    const canvas = ref<HTMLCanvasElement>()

    const count = ref(0)

    const vertices = computed(() => Math.ceil(width.value / 40))

    const ribbon = computed(() => {
      const a = safeSample(baseColors)
      const b = safeSample(colors[a])
      const steps = vertices.value + 4

      const vectors = times(steps).reduce<Vector2[]>((acc, n, i) => {
        const x = (i * (width.value / vertices.value)) - ((width.value / vertices.value) * 2)
        const y = (acc[i - 1]?.[1] ?? 0) + (Math.random() * deviation) - (deviation / 2)
        return [...acc, [x, y]]
      }, [])

      const offset = (height.value / 2) - (vectors.reduce((acc, v) => acc + v[1], 0) / vectors.length)

      return {
        count: count.value,
        colors: Math.random() > 0.5 ? blend(a, b, steps) : blend(b, a, steps),
        vectors: vectors.map<Vector2>(([x, y]) => [x, y + offset])
      }
    })

    const draw = () => {
      if (canvas.value) {
        canvas.value.height = height.value
        canvas.value.width = width.value

        const ctx = canvas.value.getContext('2d') as CanvasRenderingContext2D
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'

        ribbon.value.vectors
          .map<[Vector2[], Vector3]>((v, i, arr) => [[v, arr[i + 1], arr[i + 2]], ribbon.value.colors[i]])
          .filter(([[a, b, c], color]) => a && b && c && color)
          .forEach(([[a, b, c], color]) => {
            ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
            ctx.beginPath()
            ctx.moveTo(a[0], a[1])
            ctx.lineTo(b[0], b[1])
            ctx.lineTo(c[0], c[1])
            ctx.closePath()
            ctx.fill()
            ctx.stroke()
          })
      }
    }

    watchEffect(draw)

    return {
      canvas,
      ribbon,
    }
  }
})
</script>