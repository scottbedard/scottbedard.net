import './style.css'
import { shuffle } from 'lodash-es'
import { lerp } from '@bedard/utils'

import {
  blue600,
  cyan500,
  green600,
  lime400,
  orange400,
  rose600,
} from './tailwind'

const canvas = document.querySelector('canvas')!

const themes = [
  [green600, lime400],
  [rose600, orange400],
  [blue600, cyan500],
]

const draw = () => {
  // reset the canvas
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth

  // set initial values and prepare to start drawing
  const vertices = Math.ceil(window.innerWidth / 35)
  let prev = 0
  let width = window.innerWidth / vertices
  let y = window.innerHeight / 2

  const ctx = canvas.getContext('2d')!
  ctx.moveTo(0, y)
  ctx.beginPath()
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'

  // generate a random path of 2d vectors
  const path: [number, number][] = []

  for (var i = 0; i <= vertices; i++) {
    const x = Math.floor(i * width)
    const y2 = Math.floor(Math.random() * 165)

    let deviation = Math.floor(Math.random() * y2 * 2) + (y2 * -1)

    if ((deviation < 0 && prev <= -1) || (deviation > 0 && prev >= 1)) {
        deviation *= -1
        prev = 0
    } else {
        prev += deviation > 0 ? 1 : -1;
    }

    y += deviation

    path.push([x, y])
  }

  // connect the dots and fill in the path
  const theme = shuffle(themes)[0]
  const gradient = shuffle(theme).map(rgb)

  for (var i = 0; i < path.length; i++) {
    const alpha = i / path.length

    const [r, g, b] = [
      Math.floor(lerp(gradient[0][0], gradient[1][0], alpha)),
      Math.floor(lerp(gradient[0][1], gradient[1][1], alpha)),
      Math.floor(lerp(gradient[0][2], gradient[1][2], alpha)),
    ]
    
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.6)`
    
    const current = path[i]
    const first = path[i + 1]
    const second = path[i + 2]

    if (first && second) {
      ctx.beginPath()
      ctx.moveTo(current[0], current[1])
      ctx.lineTo(first[0], first[1])
      ctx.lineTo(second[0], second[1])
      ctx.closePath()
      ctx.fill()
      ctx.stroke()
    }
  }

  // apply the site theme to sync styling
  const [r1, g1, b1] = rgb(theme[0])
  const [r2, g2, b2] = rgb(theme[1])

  const anchorColor = `rgb(${r1},${g1},${b1})`

  const anchorColorHover = `rgb(${[
    Math.floor(lerp(r1, r2, .4)),
    Math.floor(lerp(g1, g2, .4)),
    Math.floor(lerp(b1, b2, .4)),
  ].join(',')})`

  document.body.style.setProperty('--anchor-color', anchorColor)
  document.body.style.setProperty('--anchor-color-hover', anchorColorHover)
}

const rgb = (hex: string) => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
]

draw()

window.addEventListener('resize', draw)

document.querySelector('#redraw')?.addEventListener('click', draw)