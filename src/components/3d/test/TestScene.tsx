import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import { prefersReducedMotion } from '../webglUtils'

/**
 * Temporary Phase 11 Engineering Validation Scene.
 * Validates the React -> R3F -> Three.js -> WebGL pipeline.
 * Isolated strictly under src/components/3d/test/ for trivial removal in Phase 12.
 */
export const TestScene: React.FC = () => {
  const meshRef = useRef<Mesh>(null)
  const isReducedMotion = useMemo(() => prefersReducedMotion(), [])

  useFrame((_, delta) => {
    if (!isReducedMotion && meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <>
      {/* Basic directional & ambient lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 4]} intensity={1.2} />

      {/* Temporary validation geometry */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1.6, 1.6, 1.6]} />
        <meshStandardMaterial
          color="#4169E1"
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
    </>
  )
}
