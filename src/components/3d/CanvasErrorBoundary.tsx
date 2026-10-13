import { Component, type ErrorInfo, type ReactNode } from 'react'

export interface CanvasErrorBoundaryProps {
  readonly children: ReactNode
  readonly fallback?: ReactNode
}

interface CanvasErrorBoundaryState {
  readonly hasError: boolean
  readonly error: Error | null
}

export class CanvasErrorBoundary extends Component<CanvasErrorBoundaryProps, CanvasErrorBoundaryState> {
  public override state: CanvasErrorBoundaryState = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): CanvasErrorBoundaryState {
    return { hasError: true, error }
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.warn('[3D Canvas Error Boundary Caught Error]:', error, errorInfo)
    }
  }

  public override render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="w-full h-full min-h-[240px] flex items-center justify-center bg-[#0D1220] border border-[#252D3D] rounded-lg p-6 text-center">
          <div className="max-w-md space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#778397] block">
              // 3D Canvas Notice
            </span>
            <p className="text-sm text-[#F3F5F9] font-medium">
              3D graphics rendering paused.
            </p>
            <p className="text-xs text-[#A1AABC]">
              Hardware acceleration or WebGL initialization unavailable. All interactive portfolio content remains fully functional.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
