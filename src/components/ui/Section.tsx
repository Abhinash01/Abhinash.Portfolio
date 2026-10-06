import React from 'react'
import { Container } from './Container'

export interface SectionProps {
  readonly children: React.ReactNode
  readonly id?: string
  readonly eyebrow?: string
  readonly title?: string
  readonly subtitle?: string
  readonly className?: string
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  eyebrow,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <header className="mb-8">
            {eyebrow && (
              <p className="font-mono text-xs text-[#4169E1] tracking-wider mb-2">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-base text-[#64748B] max-w-2xl font-sans leading-relaxed">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  )
}
