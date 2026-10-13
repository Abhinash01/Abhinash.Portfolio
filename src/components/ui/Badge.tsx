import React from 'react'

export type BadgeVariant = 'primary' | 'muted' | 'success' | 'warning'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  readonly children: React.ReactNode
  readonly variant?: BadgeVariant
  readonly size?: BadgeSize
  readonly className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'muted',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium rounded'

  const variantStyles: Record<BadgeVariant, string> = {
    primary: 'bg-[#141D32] text-[#6C8CFF] border border-[#252D3D]',
    muted: 'bg-[#121927] text-[#A1AABC] border border-[#252D3D]',
    success: 'bg-[#062419] text-[#34D399] border border-[#065F46]',
    warning: 'bg-[#261B07] text-[#FBBF24] border border-[#78350F]',
  }

  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  }

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  )
}
