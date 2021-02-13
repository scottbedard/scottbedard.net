import { times } from 'lodash-es';
import { Color } from './types';

/**
 * Calculate gradient between two colors
 */
export function blend(fromColor: Color, toColor: Color, size = 3) {
  const steps = size - 1;
  const fromRgb = typeof fromColor === 'string' ? hexToRgb(fromColor) : fromColor;
  const toRgb = typeof toColor === 'string' ? hexToRgb(toColor) : toColor;

  const stepRgb = [
    (toRgb[0] - fromRgb[0]) / steps,
    (toRgb[1] - fromRgb[1]) / steps,
    (toRgb[2] - fromRgb[2]) / steps,
  ];

  return times(size).map((n, i) => [
    Math.round(fromRgb[0] + (stepRgb[0] * i)),
    Math.round(fromRgb[1] + (stepRgb[1] * i)),
    Math.round(fromRgb[2] + (stepRgb[2] * i)),
  ]);
}

/**
 * Convert hex to RGB
 */
export function hexToRgb(value: string): [number, number, number] {
  const color = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);

  if (color === null) {
    throw new Error(`Invalid hexadecimal color string "${value}"`);
  }

  return [
    parseInt(color[1], 16),
    parseInt(color[2], 16),
    parseInt(color[3], 16),
  ];
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(red: number, green: number, blue: number) {
  const rHex = red.toString(16).padStart(2, '0');
  const gHex = green.toString(16).padStart(2, '0');
  const bHex = blue.toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}
