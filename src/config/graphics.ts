/**
 * Future Graphics / 3D configuration boundary (preparatory definitions for Phase 11+).
 * Does not import or instantiate Three.js / WebGL / R3F scenes.
 */

export type GraphicsQualityTier = 'low' | 'medium' | 'high' | 'auto'

export interface GraphicsPreferences {
  readonly defaultTier: GraphicsQualityTier
  readonly targetFrameRate: number
  readonly maxPixelRatio: number
  readonly antialiasing: boolean
  readonly shadowsEnabled: boolean
  readonly respectReducedMotion: boolean
}

export const GRAPHICS_CONFIG: GraphicsPreferences = {
  defaultTier: 'auto',
  targetFrameRate: 60,
  maxPixelRatio: 2,
  antialiasing: true,
  shadowsEnabled: true,
  respectReducedMotion: true,
}
