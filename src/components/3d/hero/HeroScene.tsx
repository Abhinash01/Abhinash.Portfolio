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

  // Responsive scale & position (expanded visual presence)
  const sceneScale = isMobile ? 0.90 : 1.18
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
  const initialCamPos = useRef<[number, number, number]>([0, 0, 5.2])

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
      {/* Studio Reflection Environment: 100% offline procedural softbox rig tuned for dark space */}
      <Environment resolution={envResolution}>
        <Lightformer
          form="rect"
          intensity={1.8}
          position={[0, 6, -2]}
          scale={[10, 5, 1]}
          color="#FFFFFF"
        />
        <Lightformer
          form="rect"
          intensity={1.1}
          position={[-6, 2, 2]}
          scale={[8, 3, 1]}
          color="#6C8CFF"
        />
        <Lightformer
          form="rect"
          intensity={0.7}
          position={[6, -2, 2]}
          scale={[8, 3, 1]}
          color="#8EA5FF"
        />
        <Lightformer
          form="ring"
          intensity={0.4}
          position={[0, -4, 0]}
          scale={[6, 6, 1]}
          color="#141D32"
        />
      </Environment>

      {/* Studio Lighting Rig: Refined architectural illumination for dark cinematic aesthetic */}
      {/* Ambient gradient sky/ground bounce */}
      <hemisphereLight
        color="#475569"
        groundColor="#080B12"
        intensity={0.65}
      />

      {/* Key directional softbox (Top-Right-Front) */}
      <directionalLight
        position={[5.5, 6.0, 4.5]}
        intensity={1.85}
        color="#F8FAFC"
      />

      {/* Fill directional light softening deep self-shadows (Left-Mid-Front) */}
      <directionalLight
        position={[-5.0, 2.0, 3.5]}
        intensity={0.65}
        color="#1E2638"
      />

      {/* Primary Rim light: Electric blue contour separating sculpture from dark void (Top-Back) */}
      <directionalLight
        position={[0.5, 5.0, -5.0]}
        intensity={1.8}
        color="#6C8CFF"
      />

      {/* Secondary Rim light: Subtle side edge definition (Left-Back) */}
      <directionalLight
        position={[-4.0, 3.5, -4.0]}
        intensity={1.0}
        color="#8EA5FF"
      />

      {/* Soft low bounce light preventing completely lost undersides */}
      <directionalLight
        position={[0, -4.0, 2.0]}
        intensity={0.25}
        color="#141D32"
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

