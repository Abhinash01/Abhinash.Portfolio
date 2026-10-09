/**
 * Graphics & 3D configuration settings for Three.js / R3F scenes.
 */

export type GraphicsQualityTier = 'low' | 'medium' | 'high' | 'auto'

export interface HeroScenePreferences {
  readonly monolithRotationSpeed: number
  readonly ringsRotationSpeed: number
  readonly microSphereCount: number
  readonly microSphereCountMobile: number
  readonly environmentResolution: number
}

export interface GraphicsPreferences {
  readonly defaultTier: GraphicsQualityTier
  readonly targetFrameRate: number
  readonly maxPixelRatio: number
  readonly antialiasing: boolean
  readonly shadowsEnabled: boolean
  readonly respectReducedMotion: boolean
  readonly hero: HeroScenePreferences
}

export const GRAPHICS_CONFIG: GraphicsPreferences = {
  defaultTier: 'auto',
  targetFrameRate: 60,
  maxPixelRatio: 2,
  antialiasing: true,
  shadowsEnabled: true,
  respectReducedMotion: true,
  hero: {
    monolithRotationSpeed: 0.15,
    ringsRotationSpeed: 0.18,
    microSphereCount: 12,
    microSphereCountMobile: 6,
    environmentResolution: 256,
  },
}
