import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

export interface MicroSpheresProps {
  readonly isReducedMotion?: boolean
  readonly count?: number
}

interface SphereConfig {
  readonly position: [number, number, number]
  readonly radius: number
  readonly isAccent: boolean
}

/**
 * Micro-Spheres acting as delicate spatial anchors and kinetic scale references.
 */
export const MicroSpheres: React.FC<MicroSpheresProps> = ({
  isReducedMotion = false,
  count = 12,
}) => {
  const groupRef = useRef<Group>(null)

  // Procedural deterministic distribution around orbital planes
  const spheres = useMemo<readonly SphereConfig[]>(() => {
    const list: SphereConfig[] = []
    const total = Math.min(Math.max(count, 6), 16)

    for (let i = 0; i < total; i++) {
      const angle = (i / total) * Math.PI * 2
      const orbitRadius = 1.6 + ((i % 4) * 0.38)
      const inclination = ((i % 3) - 1) * 0.42
      const y = Math.sin(angle * 2 + i) * 0.55 + inclination
      const x = Math.cos(angle) * orbitRadius
      const z = Math.sin(angle) * orbitRadius

      list.push({
        position: [x, y, z],
        radius: (i % 3 === 0) ? 0.052 : 0.036,
        isAccent: i === 2 || i === 7, // Restrained royal blue accent spatial anchors
      })
    }

    return list
  }, [count])

  useFrame((_, delta) => {
    if (!isReducedMotion && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.07
      groupRef.current.rotation.x += delta * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      {spheres.map((sphere, index) => (
        <mesh key={index} position={sphere.position}>
          <sphereGeometry args={[sphere.radius, 16, 16]} />
          <meshPhysicalMaterial
            color={sphere.isAccent ? '#4169E1' : '#E2E8F0'}
            metalness={sphere.isAccent ? 0.72 : 0.9}
            roughness={sphere.isAccent ? 0.18 : 0.16}
            clearcoat={sphere.isAccent ? 0.45 : 0.3}
            clearcoatRoughness={sphere.isAccent ? 0.12 : 0.15}
            envMapIntensity={sphere.isAccent ? 1.1 : 1.0}
          />
        </mesh>
      ))}
    </group>
  )
}
