import './style.css'
import { shuffle } from 'lodash-es'
import { lerp } from '@bedard/utils'

const canvas = document.querySelector('canvas')!

const red = 'ef4444'
const orange = 'fdba74'
const blue = '60a5fa'
const green = '0d9488'
const yellow = 'fef08a'

const colors = [
  [orange, red],
  [yellow, green],
  [blue, green],
]

function draw() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // set initial values and prepare to start drawing
  const vertices = Math.ceil(window.innerWidth / 40)
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
    const y2 = Math.floor(Math.random() * 80) + 20

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
  const gradient = shuffle(shuffle(colors)[0])

  const [startR, startG, startB] = [
    parseInt(gradient[0].slice(0, 2), 16),
    parseInt(gradient[0].slice(2, 4), 16),
    parseInt(gradient[0].slice(4, 6), 16),
  ]

  for (var i = 0; i < path.length; i++) {
    const alpha = i / path.length

    const [r, g, b] = [
      Math.floor(lerp(startR, parseInt(gradient[1].slice(0, 2), 16), alpha)),
      Math.floor(lerp(startG, parseInt(gradient[1].slice(2, 4), 16), alpha)),
      Math.floor(lerp(startB, parseInt(gradient[1].slice(4, 6), 16), alpha)),
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
}

draw()

window.addEventListener('resize', draw)
 