import React from 'react'
import { Navbar } from '../navigation/Navbar'
import { Footer } from '../navigation/Footer'

export interface PageShellProps {
  readonly children: React.ReactNode
  readonly className?: string
  readonly mainClassName?: string
}

export const PageShell: React.FC<PageShellProps> = ({
  children,
  className = '',
  mainClassName = '',
}) => {
  return (
    <div className={`min-h-screen flex flex-col bg-[#080B12] text-[#F3F5F9] ${className}`}>
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#121927] focus:text-[#F3F5F9] focus:text-sm focus:font-medium focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6C8CFF] focus:border focus:border-[#252D3D]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className={`flex-1 focus:outline-none ${mainClassName}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
