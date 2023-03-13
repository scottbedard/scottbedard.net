import './style.css'
import { chunk, sample, shuffle } from 'lodash-es'
import { lerp } from '@bedard/utils'

const canvas = document.querySelector('canvas')!

const red = 'ef4444'

const orange = 'fdba74'

const colors = [
  [orange, red],
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
    const y2 = Math.floor(Math.random() * 65) + 35

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
  const gradient = shuffle(colors)[0]

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

// // Shuffle some colors, and blend two of them together
// var colors = ['ff0000', '00ff00', '0000ff', 'ffff00', '00ffff']
//     .sort(function() { return 0.5 - Math.random(); }),
// blender = blendColors(colors[0], colors[1], vertices);

// // Create an array of points moving across the screen, varying their
// // height by the allowed deviation. Also, prevent the ribbon from
// // getting out of control by monitering the up/down deviation.
// var prev = 0,
// points = [],
// y1 = window.innerHeight / 2,
// width = window.innerWidth / vertices;

// for (var i = 0; i <= vertices; i++) {
// var x = Math.floor(i * width),
//     y2 = Math.floor(Math.random() * 65) + 35,
//     deviation = Math.floor(Math.random() * y2 * 2) + (y2 * -1);

// if ((deviation < 0 && prev <= -1) || (deviation > 0 && prev >= 1)) {
//     deviation *= -1;
//     prev = 0;
// } else {
//     prev += deviation > 0 ? 1 : -1;
// }

// y1 += deviation;
// points.push({ x: x, y: y1 });
// }

// // Lastly, lets just play connect the dots with our data points.
// // Before drawing each triangle, we can match i against the
// // blender array to find the appropriate fill color.
// for (var i = 0; i < points.length; i++) {
// var color   = blender[i],
//     current = points[i],
//     first   = points[i + 1],
//     second  = points[i + 2];

// ctx.fillStyle = 'rgba('+color.R+','+color.G+','+color.B+',0.6)';
// if (first != undefined && second != undefined) {
//     ctx.beginPath();
//     ctx.moveTo(current.x, current.y);
//     ctx.lineTo(first.x, first.y);
//     ctx.lineTo(second.x, second.y);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
// }
// }

// /*
// * Blends two colors together in a given number of steps
// */
// function blendColors(hexStart, hexStop, steps) {
// var colors = [],
//     start = {
//         R: parseInt(hexStart.substring(0, 2), 16),
//         G: parseInt(hexStart.substring(2, 4), 16),
//         B: parseInt(hexStart.substring(4, 6), 16),
//     },
//     stop = {
//         R: parseInt(hexStop.substring(0, 2), 16),
//         G: parseInt(hexStop.substring(2, 4), 16),
//         B: parseInt(hexStop.substring(4, 6), 16),
//     },
//     blend = {
//         R: (stop.R - start.R) / steps,
//         G: (stop.G - start.G) / steps,
//         B: (stop.B - start.B) / steps,
//     };

// for (var i = 0; i <= steps; i++) {
//     colors.push({
//         R: Math.round(start.R + (blend.R * i)),
//         G: Math.round(start.G + (blend.G * i)),
//         B: Math.round(start.B + (blend.B * i)),
//     });
// }

// return colors;
// }
