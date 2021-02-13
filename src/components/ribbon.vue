<template>
  <canvas
    class="fixed h-full left-0 top-0 w-full"
    ref="canvas"
    style="z-index: -1" />
</template>

<script lang="ts">
import { blend } from '../utils'
import { defineComponent, onMounted, ref } from 'vue'
import { sample, times } from 'lodash-es'

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
  [blue]: [
    green,
    indigo, 
    lightGreen, 
    purple
  ],
  [green]: [
    blue,
    cyan,
    yellow
  ],
  [purple]: [
    blue,
    cyan,
    indigo,
    red
  ],
  [red]: [
    purple,
    yellow
  ],
  [yellow]: [
    green,
    orange,
    pink,
    red
  ]
}

const baseColors = Object.keys(colors)

const opacity = 0.4

const deviation = 135

function draw(canvas: HTMLCanvasElement) {
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth

  // setup the canvas
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'

  const verticalCenter = window.innerHeight / 2
  const vertices = Math.ceil(window.innerWidth / 40)

  // pick colors to blend between
  const firstColor = sample(baseColors) as keyof typeof colors
  const secondColor = sample(colors[firstColor]) as string

  const gradient = Math.random() > 0.5
    ? blend(firstColor, secondColor, vertices + 4)
    : blend(secondColor, firstColor, vertices + 4)

  let totalHeight = 0
  let previousHeight = verticalCenter

  const width = window.innerWidth / vertices

  const points = times(vertices + 4).map((n, i) => {
    const x = (i * width) - (width * 2)
    const y = (previousHeight + (Math.random() * deviation)) - (deviation / 2)
    previousHeight = y

    // by tracking the average height of the ribbon, we can keep things
    // roughly in the center of the screen. we'll use this value with
    // the height of the window to determine an approximate offset.
    totalHeight += y

    return { x, y }
  })

  const offset = verticalCenter - (totalHeight / points.length)

  // last step, we just need to play connect the dots with our points
  // to draw our triangles. after that, we can fill each one with a
  // color from our gradients array. enjoy the colorful goodness!
  points
    .map(({ x, y }) => ({ x, y: y + offset }))
    .forEach((p, i, arr) => {
      const a = arr[i]
      const b = arr[i + 1]
      const c = arr[i + 2]

      ctx.fillStyle = `rgba(${gradient[i].join(',')}, ${opacity})`

      if (b && c) {
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.lineTo(c.x, c.y)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
      }
    })
}

export default defineComponent({
  setup() {
    const canvas = ref<HTMLCanvasElement>()

    onMounted(() => {
      draw(canvas.value as HTMLCanvasElement)
    })

    return {
      canvas
    }
  }
})
</script>