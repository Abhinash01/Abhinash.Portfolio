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
        <div className="w-full h-full min-h-[240px] flex items-center justify-center bg-[#F6F9FC] border border-[#E5EAF1] rounded-lg p-6 text-center">
          <div className="max-w-md space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#64748B] block">
              // 3D Canvas Notice
            </span>
            <p className="text-sm text-[#111827] font-medium">
              3D graphics rendering paused.
            </p>
            <p className="text-xs text-[#64748B]">
              Hardware acceleration or WebGL initialization unavailable. All interactive portfolio content remains fully functional.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
