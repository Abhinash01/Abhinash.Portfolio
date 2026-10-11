import React, { useMemo, useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { MathUtils, type Group } from 'three'
import { Monolith } from './Monolith'
import { OrbitalRings } from './OrbitalRings'
import { MicroSpheres } from './MicroSpheres'
import { prefersReducedMotion, hasFinePointer } from '../webglUtils'
import { GRAPHICS_CONFIG } from '../../../config/graphics'

export interface HeroSceneProps {
  readonly isMobile?: boolean
  readonly interactive?: boolean
}

/**
 * HeroScene: The Kinetic Monolith & Gyroscope 3D Environment.
 * Central spatial visual feature for the portfolio hero experience.
 * Refined with professional architectural studio lighting, offline procedural reflection rig,
 * and restrained, pointer-responsive object movement and camera parallax.
 */
export const HeroScene: React.FC<HeroSceneProps> = ({
  isMobile = false,
  interactive = true,
}) => {
  const { camera, gl } = useThree()
  const isReducedMotion = useMemo(() => prefersReducedMotion(), [])
  const isFinePointer = useMemo(() => hasFinePointer(), [])

  // Can the scene respond to pointer movement?
  const canInteract =
    interactive &&
    GRAPHICS_CONFIG.interaction.enabled &&
    !isReducedMotion &&
    !isMobile &&
    isFinePointer

  // Responsive scale & position
  const sceneScale = isMobile ? 0.82 : 1.05
  const sphereCount = isMobile
    ? GRAPHICS_CONFIG.hero.microSphereCountMobile
    : GRAPHICS_CONFIG.hero.microSphereCount
  const envResolution = isMobile ? 128 : GRAPHICS_CONFIG.hero.environmentResolution

  // Primary interactive sculpture group ref
  const interactiveGroupRef = useRef<Group>(null)

  // Tracking refs (no state re-renders in frame loop)
  const isHoveredRef = useRef(false)
  const currentRotX = useRef(0)
  const currentRotY = useRef(0)
  const currentCamX = useRef(0)
  const currentCamY = useRef(0)

  // Record base camera position
  const initialCamPos = useRef<[number, number, number]>([0, 0, 5.6])

  useEffect(() => {
    initialCamPos.current = [camera.position.x, camera.position.y, camera.position.z]
  }, [camera])

  // Attach hover boundaries strictly to the 3D viewport canvas
  useEffect(() => {
    const domElement = gl.domElement
    if (!domElement) return

    try {
      isHoveredRef.current = domElement.matches(':hover')
    } catch {
      isHoveredRef.current = false
    }

    const handlePointerEnter = () => {
      isHoveredRef.current = true
    }

    const handlePointerLeave = () => {
      isHoveredRef.current = false
    }

    const handleWindowBlur = () => {
      isHoveredRef.current = false
    }

    domElement.addEventListener('pointerenter', handlePointerEnter)
    domElement.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('blur', handleWindowBlur)

    return () => {
      domElement.removeEventListener('pointerenter', handlePointerEnter)
      domElement.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('blur', handleWindowBlur)
    }
  }, [gl.domElement])

  // Continuous frame loop interpolation for subtle object tilt and camera parallax
  useFrame((state, delta) => {
    // Determine target rotation and camera parallax offsets
    let targetRotX = 0
    let targetRotY = 0
    let targetCamX = 0
    let targetCamY = 0

    if (canInteract && isHoveredRef.current) {
      const { pointer } = state
      const config = GRAPHICS_CONFIG.interaction

      // Subtle tilt toward cursor: cursor up tilts sculpture up, cursor right turns right
      targetRotX = -pointer.y * config.maxRotationX
      targetRotY = pointer.x * config.maxRotationY

      // Subtle camera parallax: shifts camera slightly while keeping focal point locked
      targetCamX = pointer.x * config.cameraParallaxX
      targetCamY = pointer.y * config.cameraParallaxY
    }

    // Frame-rate independent exponential damping
    const dampFactor = 1 - Math.exp(-GRAPHICS_CONFIG.interaction.damping * Math.min(delta, 0.1))

    currentRotX.current = MathUtils.lerp(currentRotX.current, targetRotX, dampFactor)
    currentRotY.current = MathUtils.lerp(currentRotY.current, targetRotY, dampFactor)

    if (interactiveGroupRef.current) {
      interactiveGroupRef.current.rotation.x = currentRotX.current
      interactiveGroupRef.current.rotation.y = currentRotY.current
    }

    currentCamX.current = MathUtils.lerp(currentCamX.current, targetCamX, dampFactor)
    currentCamY.current = MathUtils.lerp(currentCamY.current, targetCamY, dampFactor)

    // Update camera position and lock gaze to sculpture origin
    camera.position.x = initialCamPos.current[0] + currentCamX.current
    camera.position.y = initialCamPos.current[1] + currentCamY.current
    camera.position.z = initialCamPos.current[2]
    camera.lookAt(0, 0, 0)
  })

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

      {/* Primary Kinetic Monolith & Gyroscope Group (with pointer responsiveness) */}
      <group ref={interactiveGroupRef} scale={sceneScale} position={[0, 0, 0]}>
        <Monolith isReducedMotion={isReducedMotion} isMobile={isMobile} />
        <OrbitalRings isReducedMotion={isReducedMotion} isMobile={isMobile} />
        <MicroSpheres isReducedMotion={isReducedMotion} count={sphereCount} />
      </group>
    </>
  )
}

