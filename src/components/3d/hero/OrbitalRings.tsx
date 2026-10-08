import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group, Mesh } from 'three'
import { GRAPHICS_CONFIG } from '../../../config/graphics'

export interface OrbitalRingsProps {
  readonly isReducedMotion?: boolean
  readonly isMobile?: boolean
}

/**
 * Precision Gyroscopic Orbital Rings.
 * Surrounds the monolith with thin, restrained titanium/slate rings mimicking orbital mechanics.
 */
export const OrbitalRings: React.FC<OrbitalRingsProps> = ({
  isReducedMotion = false,
  isMobile = false,
}) => {
  const ring1Ref = useRef<Mesh>(null)
  const ring2Ref = useRef<Mesh>(null)
  const ring3Ref = useRef<Mesh>(null)
  const ringGroupRef = useRef<Group>(null)

  const speed = GRAPHICS_CONFIG.hero.ringsRotationSpeed

  useFrame((_, delta) => {
    if (!isReducedMotion) {
      if (ring1Ref.current) {
        ring1Ref.current.rotation.z += delta * speed
        ring1Ref.current.rotation.x += delta * (speed * 0.3)
      }
      if (ring2Ref.current) {
        ring2Ref.current.rotation.z -= delta * (speed * 0.8)
        ring2Ref.current.rotation.y += delta * (speed * 0.4)
      }
      if (ring3Ref.current) {
        ring3Ref.current.rotation.x += delta * (speed * 0.6)
        ring3Ref.current.rotation.y -= delta * (speed * 0.35)
      }
    }
  })

  return (
    <group ref={ringGroupRef}>
      {/* Ring 1: Inner Gyroscopic Ring (Tilted ~58°) */}
      <mesh
        ref={ring1Ref}
        rotation={[Math.PI / 3.1, 0.2, 0]}
      >
        <torusGeometry args={[isMobile ? 1.5 : 1.85, 0.02, 16, 80]} />
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.92}
          roughness={0.24}
        />
      </mesh>

      {/* Ring 2: Equatorial / Gyroscope Ring (Tilted ~-42°) */}
      <mesh
        ref={ring2Ref}
        rotation={[-Math.PI / 4.2, 0.35, Math.PI / 5]}
      >
        <torusGeometry args={[isMobile ? 1.9 : 2.35, 0.022, 16, 96]} />
        <meshStandardMaterial
          color="#334155"
          metalness={0.88}
          roughness={0.28}
        />
      </mesh>

      {/* Ring 3: Outer Polar Guide Ring (Desktop & Tablet only) */}
      {!isMobile && (
        <mesh
          ref={ring3Ref}
          rotation={[0.35, -Math.PI / 2.7, 0.45]}
        >
          <torusGeometry args={[2.75, 0.016, 16, 100]} />
          <meshStandardMaterial
            color="#475569"
            metalness={0.85}
            roughness={0.3}
          />
        </mesh>
      )}
    </group>
  )
}
