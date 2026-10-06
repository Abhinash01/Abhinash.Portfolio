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
    'inline-flex items-center justify-center font-sans font-semibold tracking-[0.015em] rounded-full transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4169E1] disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none select-none'

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-[#4169E1] text-white hover:bg-[#3154C4] active:bg-[#2544A5] hover:-translate-y-px active:translate-y-px active:scale-[0.98] shadow-sm hover:shadow-[0_4px_12px_rgba(65,105,225,0.25)]',
    secondary:
      'bg-transparent text-[#111827] border border-[#E5EAF1] hover:bg-[#EEF2F8] hover:border-[#CBD5E1] active:bg-[#E2E8F0] hover:-translate-y-px active:translate-y-px active:scale-[0.98] hover:shadow-[0_2px_6px_rgba(17,24,39,0.04)]',
    dark:
      'bg-[#101827] text-white border border-[#101827] hover:bg-[#1E293B] hover:border-[#334155] active:bg-[#0B1120] hover:-translate-y-px active:translate-y-px hover:shadow-[0_6px_16px_rgba(16,24,39,0.25)]',
    ghost:
      'bg-transparent text-[#64748B] hover:text-[#111827] hover:bg-[#EEF2F8] active:bg-[#E2E8F0]',
  }

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs px-3.5 py-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 min-h-[44px]',
    lg: 'text-base px-6 py-3 min-h-[48px]',
  }

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    loading ? 'cursor-wait' : ''
  } ${className}`

  const content = loading ? (
    <span className="inline-flex items-center gap-2">
      <svg
        className="animate-spin -ml-1 mr-1 h-3.5 w-3.5 text-current"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span>Loading...</span>
    </span>
  ) : (
    children
  )

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
          {content}
        </a>
      )
    }
    return (
      <Link to={href} className={combinedClasses} onClick={onClick} aria-label={ariaLabel}>
        {content}
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
      {content}
    </button>
  )
}
