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
    primary: 'bg-[#EFF3FE] text-[#4169E1] border border-[rgba(65,105,225,0.25)]',
    muted: 'bg-[#EEF2F8] text-[#64748B] border border-[#E5EAF1]',
    success: 'bg-[#ECFDF5] text-[#059669] border border-[rgba(5,150,105,0.25)]',
    warning: 'bg-[#FFFBEB] text-[#D97706] border border-[rgba(217,119,6,0.25)]',
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
