import React, { useMemo } from 'react'
import { Environment, Lightformer } from '@react-three/drei'
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
 * Refined with professional architectural studio lighting and an offline procedural reflection rig.
 */
export const HeroScene: React.FC<HeroSceneProps> = ({ isMobile = false }) => {
  const isReducedMotion = useMemo(() => prefersReducedMotion(), [])

  // Responsive scale & position
  const sceneScale = isMobile ? 0.82 : 1.05
  const sphereCount = isMobile
    ? GRAPHICS_CONFIG.hero.microSphereCountMobile
    : GRAPHICS_CONFIG.hero.microSphereCount
  const envResolution = isMobile ? 128 : GRAPHICS_CONFIG.hero.environmentResolution

  return (
    <>
      {/* Studio Reflection Environment: 100% offline procedural softbox rig */}
      <Environment resolution={envResolution}>
        <Lightformer
          form="rect"
          intensity={1.5}
          position={[0, 6, -2]}
          scale={[10, 5, 1]}
          color="#FFFFFF"
        />
        <Lightformer
          form="rect"
          intensity={0.8}
          position={[-6, 2, 2]}
          scale={[8, 3, 1]}
          color="#F1F5F9"
        />
        <Lightformer
          form="rect"
          intensity={0.6}
          position={[6, -2, 2]}
          scale={[8, 3, 1]}
          color="#E2E8F0"
        />
        <Lightformer
          form="ring"
          intensity={0.5}
          position={[0, -4, 0]}
          scale={[6, 6, 1]}
          color="#F8FAFC"
        />
      </Environment>

      {/* Studio Lighting Rig: Restrained, architectural illumination */}
      {/* Ambient gradient sky/ground bounce */}
      <hemisphereLight
        color="#FFFFFF"
        groundColor="#CBD5E1"
        intensity={0.75}
      />

      {/* Key directional softbox (Top-Right-Front) */}
      <directionalLight
        position={[5.5, 6.0, 4.5]}
        intensity={1.6}
        color="#FFFFFF"
      />

      {/* Fill directional light softening deep self-shadows (Left-Mid-Front) */}
      <directionalLight
        position={[-5.0, 2.0, 3.5]}
        intensity={0.7}
        color="#F1F5F9"
      />

      {/* Rim light highlighting satin bevels and separating from canvas (Top-Back) */}
      <directionalLight
        position={[0.5, 5.0, -5.0]}
        intensity={1.2}
        color="#E0E7FF"
      />

      {/* Soft low bounce light preventing overly dark undersides */}
      <directionalLight
        position={[0, -4.0, 2.0]}
        intensity={0.3}
        color="#E2E8F0"
      />

      {/* Primary Kinetic Monolith & Gyroscope Group */}
      <group scale={sceneScale} position={[0, 0, 0]}>
        <Monolith isReducedMotion={isReducedMotion} isMobile={isMobile} />
        <OrbitalRings isReducedMotion={isReducedMotion} isMobile={isMobile} />
        <MicroSpheres isReducedMotion={isReducedMotion} count={sphereCount} />
      </group>
    </>
  )
}

