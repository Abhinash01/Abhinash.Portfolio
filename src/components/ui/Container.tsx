import React from 'react'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'full'

export interface ContainerProps {
  readonly children: React.ReactNode
  readonly size?: ContainerSize
  readonly className?: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
}) => {
  const sizeStyles: Record<ContainerSize, string> = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    full: 'max-w-full',
  }

  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  )
}
