import React from 'react'
import { Link } from 'react-router-dom'

export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  readonly children: React.ReactNode
  readonly variant?: ButtonVariant
  readonly size?: ButtonSize
  readonly href?: string
  readonly type?: 'button' | 'submit' | 'reset'
  readonly disabled?: boolean
  readonly loading?: boolean
  readonly className?: string
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly ariaLabel?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  onClick,
  ariaLabel,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4169E1] disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[#4169E1] text-white hover:bg-[#3154C4] active:bg-[#2544A5]',
    secondary: 'bg-transparent text-[#111827] border border-[#E5EAF1] hover:bg-[#EEF2F8] hover:border-[#CBD5E1]',
    dark: 'bg-[#101827] text-white hover:bg-[#1E293B] active:bg-[#0B1120]',
    ghost: 'bg-transparent text-[#64748B] hover:text-[#111827] hover:bg-[#EEF2F8]',
  }

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs px-3 py-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 min-h-[44px]',
    lg: 'text-base px-6 py-3 min-h-[48px]',
  }

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          aria-label={ariaLabel}
        >
          {loading ? 'Loading...' : children}
        </a>
      )
    }
    return (
      <Link to={href} className={combinedClasses} onClick={onClick} aria-label={ariaLabel}>
        {loading ? 'Loading...' : children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}
