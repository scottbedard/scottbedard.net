<template>
  <canvas class="fixed h-full left-0 opacity-30 top-0 w-full" ref="canvas" />
</template>

<script lang="ts">
import { blend, keys, safeSample } from '@/utils'
import { computed, defineComponent, ref, watchEffect } from 'vue'
import { times } from 'lodash-es'
import { useWindowSize } from '@vueuse/core'
import { Vector2, Vector3 } from '@/types'

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

// colors we'll allow the ribbon to blend between
const colors = {
  [blue]: [green, indigo, lightGreen, purple],
  [green]: [blue, cyan, yellow],
  [purple]: [blue, cyan, indigo, red],
  [red]: [purple, yellow],
  [yellow]: [green, orange, pink, red]
}

const baseColors = keys(colors)

// average vertical spacing between points
const deviation = 135

export default defineComponent({
  setup() {
    const canvas = ref<HTMLCanvasElement>()
    const { height, width } = useWindowSize()

    // calculate vectors for the ribbon colors and points
    const ribbon = computed(() => {
      const a = safeSample(baseColors)
      const b = safeSample(colors[a])
      const vertices = Math.ceil(width.value / 40)
      const steps = vertices + 4

      const points = times(steps).reduce<Vector2[]>((acc, n, i) => {
        const x = (i * (width.value / vertices)) - ((width.value / vertices) * 2)
        const y = (acc[i - 1]?.[1] ?? 0) + (Math.random() * deviation) - (deviation / 2)
        return [...acc, [x, y]]
      }, [])

      const offset = (height.value / 2) - (points.reduce((acc, [,y]) => acc + y, 0) / points.length)

      return {
        colors: Math.random() > 0.5 ? blend(a, b, steps) : blend(b, a, steps),
        points: points.map<Vector2>(([x, y]) => [x, y + offset])
      }
    })

    // play connect the dots and fill the resulting triangles
    const draw = () => {
      if (canvas.value) {
        canvas.value.height = height.value
        canvas.value.width = width.value

        const ctx = canvas.value.getContext('2d') as CanvasRenderingContext2D
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'

        ribbon.value.points
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
      ribbon
    }
  }
})
</script>