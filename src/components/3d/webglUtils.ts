/**
 * WebGL feature detection and browser capability utilities.
 */

/**
 * Checks whether WebGL (or WebGL2) rendering context is supported and available in the current browser.
 */
export function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    return Boolean(gl && gl instanceof WebGLRenderingContext || (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext))
  } catch {
    return false
  }
}

/**
 * Checks whether the user has requested reduced motion at the OS or browser level.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
