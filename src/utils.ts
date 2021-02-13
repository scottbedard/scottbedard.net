import { times } from 'lodash-es'
import { Color } from './types'

/**
 * Calculate gradient between two colors
 */
export function blend(from: Color, to: Color, steps = 3) {
  const s = steps - 1
  const fromRgb = typeof from === 'string' ? hexToRgb(from) : from
  const toRgb = typeof to === 'string' ? hexToRgb(to) : to

  const stepRgb = [
    (toRgb[0] - fromRgb[0]) / s,
    (toRgb[1] - fromRgb[1]) / s,
    (toRgb[2] - fromRgb[2]) / s
  ]

  return times(steps).map((n, i) => [
    Math.round(fromRgb[0] + (stepRgb[0] * i)),
    Math.round(fromRgb[1] + (stepRgb[1] * i)),
    Math.round(fromRgb[2] + (stepRgb[2] * i))
  ])
}

/**
 * Type-safe object key extraction
 */
export function keys<T extends Record<string, unknown>>(obj: T) {
  return Object.keys(obj) as (keyof typeof obj)[]
}

/**
 * Convert hex to RGB
 */
export function hexToRgb(value: string): [number, number, number] {
  const color = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value)

  if (color === null) {
    throw new Error(`Invalid hexadecimal color string "${value}"`)
  }

  return [
    parseInt(color[1], 16),
    parseInt(color[2], 16),
    parseInt(color[3], 16)
  ]
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(red: number, green: number, blue: number) {
  const rHex = red.toString(16).padStart(2, '0')
  const gHex = green.toString(16).padStart(2, '0')
  const bHex = blue.toString(16).padStart(2, '0')

  return `#${rHex}${gHex}${bHex}`
}

/**
 * Extract a random item from an array. This is similar to
 * lodash's sample, except it does not return undefined
 */
export function safeSample<T>(arr: T[]): T {
  if (arr.length < 1) {
    throw 'safeSample() is not compatible with empty arrays'
  }

  return arr[Math.floor(Math.random() * arr.length)]
}