import React, { useMemo } from 'react'
import { Monolith } from './Monolith'
import { OrbitalRings } from './OrbitalRings'
import { MicroSpheres } from './MicroSpheres'
import { prefersReducedMotion } from '../webglUtils'
import { GRAPHICS_CONFIG } from '../../../config/graphics'

export interface HeroSceneProps {
  readonly isMobile?: boolean
}

/**
 * HeroScene: The Kinetic Monolith & Gyroscope 3D Environment.
 * Central spatial visual feature for the portfolio hero experience.
 */
export const HeroScene: React.FC<HeroSceneProps> = ({ isMobile = false }) => {
  const isReducedMotion = useMemo(() => prefersReducedMotion(), [])

  // Responsive scale & position
  const sceneScale = isMobile ? 0.82 : 1.05
  const sphereCount = isMobile
    ? GRAPHICS_CONFIG.hero.microSphereCountMobile
    : GRAPHICS_CONFIG.hero.microSphereCount

  return (
    <>
      {/* Studio Lighting Rig: Restrained, architectural illumination */}
      <ambientLight intensity={0.7} />
      {/* Key directional softbox (Top Left) */}
      <directionalLight position={[5, 6, 4]} intensity={1.5} color="#FFFFFF" />
      {/* Fill directional light softening deep self-shadows (Lower Right) */}
      <directionalLight position={[-4, 2, 3]} intensity={0.6} color="#EEF2F8" />
      {/* Subtle rim light highlighting metallic edges */}
      <directionalLight position={[0, 5, -5]} intensity={1.1} color="#E0E7FF" />

      {/* Primary Kinetic Monolith & Gyroscope Group */}
      <group scale={sceneScale} position={[0, 0, 0]}>
        <Monolith isReducedMotion={isReducedMotion} isMobile={isMobile} />
        <OrbitalRings isReducedMotion={isReducedMotion} isMobile={isMobile} />
        <MicroSpheres isReducedMotion={isReducedMotion} count={sphereCount} />
      </group>
    </>
  )
}
