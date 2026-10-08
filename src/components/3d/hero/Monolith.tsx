import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import type { Group, Mesh } from 'three'
import { GRAPHICS_CONFIG } from '../../../config/graphics'

export interface MonolithProps {
  readonly isReducedMotion?: boolean
  readonly isMobile?: boolean
}

/**
 * Primary Architectural Beveled Monolith Sculpture with Inner Polyhedral Facet.
 * Represents the central kinetic core of the hero environment.
 */
export const Monolith: React.FC<MonolithProps> = ({
  isReducedMotion = false,
  isMobile = false,
}) => {
  const monolithGroupRef = useRef<Group>(null)
  const innerFacetRef = useRef<Mesh>(null)

  const rotationSpeed = GRAPHICS_CONFIG.hero.monolithRotationSpeed

  useFrame((_, delta) => {
    if (!isReducedMotion) {
      if (monolithGroupRef.current) {
        monolithGroupRef.current.rotation.y += delta * rotationSpeed
        monolithGroupRef.current.rotation.x = Math.sin(Date.now() * 0.0006) * 0.06
      }
      if (innerFacetRef.current) {
        innerFacetRef.current.rotation.y -= delta * (rotationSpeed * 0.75)
        innerFacetRef.current.rotation.z += delta * (rotationSpeed * 0.4)
      }
    }
  })

  // Beveled dimensions: sleek, tall architectural monolith
  const dimensions: [number, number, number] = isMobile
    ? [1.1, 1.85, 0.85]
    : [1.3, 2.25, 0.95]

  return (
    <group ref={monolithGroupRef} position={[0, 0, 0]}>
      {/* Outer Beveled Geometric Monolith */}
      <RoundedBox
        args={dimensions}
        radius={0.12}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color="#F8FAFC"
          metalness={0.88}
          roughness={0.16}
          envMapIntensity={1.2}
        />
      </RoundedBox>

      {/* Inner Concentric Polyhedron (Architectural Core Facet) */}
      <mesh ref={innerFacetRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[isMobile ? 0.45 : 0.55, 0]} />
        <meshStandardMaterial
          color="#101827"
          metalness={0.94}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}
