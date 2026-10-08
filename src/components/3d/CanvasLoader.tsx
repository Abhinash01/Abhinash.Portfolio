import React from 'react'

export interface CanvasLoaderProps {
  readonly message?: string
  readonly className?: string
}

export const CanvasLoader: React.FC<CanvasLoaderProps> = ({
  message = 'Initializing 3D engine...',
  className = '',
}) => {
  return (
    <div
      className={`w-full h-full min-h-[200px] flex items-center justify-center p-6 text-center select-none ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center space-x-3 text-xs font-mono text-[#64748B]">
        <span className="w-2 h-2 rounded-full bg-[#4169E1] animate-ping" aria-hidden="true" />
        <span>{message}</span>
      </div>
    </div>
  )
}
