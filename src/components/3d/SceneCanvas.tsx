import React, { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { GRAPHICS_CONFIG } from '../../config/graphics'
import { CanvasErrorBoundary } from './CanvasErrorBoundary'
import { CanvasLoader } from './CanvasLoader'
import { isWebGLAvailable, prefersReducedMotion } from './webglUtils'

export interface SceneCanvasProps {
  readonly children: React.ReactNode
  readonly className?: string
  readonly cameraPosition?: [number, number, number]
  readonly cameraFov?: number
  readonly dpr?: [number, number] | number
  readonly fallback?: React.ReactNode
  readonly ariaLabel?: string
}

export const SceneCanvas: React.FC<SceneCanvasProps> = ({
  children,
  className = 'w-full h-full min-h-[300px]',
  cameraPosition = [0, 0, 5],
  cameraFov = 45,
  dpr,
  fallback,
  ariaLabel = '3D interactive scene canvas',
}) => {
  const webGLSupported = useMemo(() => isWebGLAvailable(), [])
  const isReducedMotion = useMemo(() => prefersReducedMotion(), [])

  // If WebGL is not supported, provide clean fallback without attempting Canvas instantiation
  if (!webGLSupported) {
    if (fallback) {
      return <>{fallback}</>
    }

    return (
      <div
        className={`flex items-center justify-center bg-[#F6F9FC] border border-[#E5EAF1] rounded-lg p-6 text-center ${className}`}
        role="region"
        aria-label={ariaLabel}
      >
        <div className="max-w-md space-y-1.5">
          <span className="font-mono text-xs uppercase tracking-wider text-[#64748B] block">
            // Graphic Canvas
          </span>
          <p className="text-xs text-[#64748B]">
            Hardware acceleration inactive. Interactive content and navigation are fully available.
          </p>
        </div>
      </div>
    )
  }

  const effectiveDpr = dpr ?? (isReducedMotion ? 1 : [1, GRAPHICS_CONFIG.maxPixelRatio])

  return (
    <CanvasErrorBoundary fallback={fallback}>
      <div className={`relative overflow-hidden ${className}`} role="region" aria-label={ariaLabel}>
        <Suspense fallback={<CanvasLoader />}>
          <Canvas
            camera={{
              position: cameraPosition,
              fov: cameraFov,
            }}
            dpr={effectiveDpr}
            gl={{
              antialias: GRAPHICS_CONFIG.antialiasing,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            shadows={GRAPHICS_CONFIG.shadowsEnabled}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0)
            }}
          >
            {children}
          </Canvas>
        </Suspense>
      </div>
    </CanvasErrorBoundary>
  )
}
