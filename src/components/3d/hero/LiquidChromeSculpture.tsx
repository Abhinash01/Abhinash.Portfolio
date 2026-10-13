import React, { useMemo, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GRAPHICS_CONFIG } from '../../../config/graphics'

export interface LiquidChromeSculptureProps {
  readonly isReducedMotion?: boolean
  readonly isMobile?: boolean
}

/**
 * Procedural Liquid Chrome Ribbon Sculpture.
 *
 * Generates an asymmetrical, continuous flowing metallic ribbon with broad
 * reflective facets, elegant curvature, and volumetric thickness.
 * Employs a closed Catmull-Rom spline with Frenet-Serret frame transport and
 * superelliptical cross-sections to ensure seamless, watertight geometry with
 * smooth vertex normals and zero pinch artifacts.
 */
export const LiquidChromeSculpture: React.FC<LiquidChromeSculptureProps> = ({
  isReducedMotion = false,
  isMobile = false,
}) => {
  const meshRef = useRef<THREE.Mesh>(null)

  // Discretization parameters tuned for visual smoothness vs mobile performance
  const tubularSegments = isMobile ? 120 : 160
  const radialSegments = isMobile ? 24 : 32

  // Procedural geometry generation with memoization and resource disposal
  const geometry = useMemo(() => {
    // Asymmetrical 3D spline control nodes creating sweeping curves and negative space
    const controlPoints = [
      new THREE.Vector3(0.0, 1.35, 0.2),
      new THREE.Vector3(1.05, 0.75, -0.45),
      new THREE.Vector3(1.35, -0.25, 0.35),
      new THREE.Vector3(0.6, -1.15, -0.3),
      new THREE.Vector3(-0.5, -1.05, 0.4),
      new THREE.Vector3(-1.3, -0.15, -0.35),
      new THREE.Vector3(-1.0, 0.85, 0.3),
      new THREE.Vector3(-0.15, 0.35, -0.45),
      new THREE.Vector3(0.7, -0.1, 0.4),
      new THREE.Vector3(0.25, 0.95, -0.2),
    ]

    const curve = new THREE.CatmullRomCurve3(controlPoints, true, 'centripetal', 0.5)
    const frames = curve.computeFrenetFrames(tubularSegments, true)

    const positions: number[] = []
    const uvs: number[] = []
    const indices: number[] = []

    // Build seamless ribbon vertices along the curve
    for (let i = 0; i < tubularSegments; i++) {
      const u = i / tubularSegments
      const p = curve.getPointAt(u)

      const N = frames.normals[i]
      const B = frames.binormals[i]

      // Harmonic modulation for varying ribbon width and thickness
      const widthMod = 0.38 + 0.08 * Math.sin(u * Math.PI * 2 + 0.5)
      const thickMod = 0.16 + 0.03 * Math.cos(u * Math.PI * 4)

      const normalVec = N
      const binormalVec = B

      for (let j = 0; j < radialSegments; j++) {
        const v = j / radialSegments
        const theta = v * Math.PI * 2

        // Smooth elliptical cross-section yielding broad metallic reflection planes
        const cosT = Math.cos(theta)
        const sinT = Math.sin(theta)

        const vertex = new THREE.Vector3()
          .copy(p)
          .addScaledVector(normalVec, widthMod * cosT)
          .addScaledVector(binormalVec, thickMod * sinT)

        positions.push(vertex.x, vertex.y, vertex.z)
        uvs.push(u, v)
      }
    }

    // Connect seamless quad topology
    for (let i = 0; i < tubularSegments; i++) {
      const nextI = (i + 1) % tubularSegments
      for (let j = 0; j < radialSegments; j++) {
        const nextJ = (j + 1) % radialSegments

        const a = i * radialSegments + j
        const b = nextI * radialSegments + j
        const c = nextI * radialSegments + nextJ
        const d = i * radialSegments + nextJ

        indices.push(a, b, d)
        indices.push(b, c, d)
      }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
    geo.setIndex(indices)
    geo.computeVertexNormals()
    geo.computeBoundingSphere()
    geo.computeBoundingBox()

    return geo
  }, [tubularSegments, radialSegments])

  // Clean up WebGL geometry buffer on unmount
  useEffect(() => {
    return () => {
      geometry.dispose()
    }
  }, [geometry])

  // Restrained, hypnotic cinematic animation loop
  const rotationSpeed = GRAPHICS_CONFIG.hero.sculptureRotationSpeed ?? 0.12

  useFrame((state, delta) => {
    if (!meshRef.current) return

    if (!isReducedMotion) {
      const elapsed = state.clock.getElapsedTime()

      // Slow, hypnotic continuous axial rotation
      meshRef.current.rotation.y += delta * rotationSpeed

      // Subtle organic floating drift
      meshRef.current.position.y = Math.sin(elapsed * 0.45) * 0.05

      // Gentle secondary breathing tilt
      meshRef.current.rotation.x = Math.sin(elapsed * 0.32) * 0.04 + 0.12
      meshRef.current.rotation.z = Math.cos(elapsed * 0.28) * 0.03
    } else {
      // Static, elegant resting presentation in reduced motion mode
      meshRef.current.rotation.set(0.12, 0.45, 0.02)
      meshRef.current.position.set(0, 0, 0)
    }
  })

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      castShadow
      receiveShadow
    >
      <meshPhysicalMaterial
        color="#F1F5F9"
        metalness={0.88}
        roughness={0.20}
        clearcoat={0.65}
        clearcoatRoughness={0.12}
        reflectivity={0.90}
        envMapIntensity={1.4}
      />
    </mesh>
  )
}
