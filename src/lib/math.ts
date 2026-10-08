/**
 * Mathematical helper functions for UI, interpolation, and future graphics computations.
 */

/**
 * Restricts a number between an inclusive lower and upper bound.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Linearly interpolates between two values given an alpha parameter [0, 1].
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}

/**
 * Rounds a number to a specified precision of decimal places.
 */
export function roundTo(value: number, decimals = 2): number {
  const factor = 10 ** decimals
  return Math.round(value * factor) / factor
}
