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
    <div className={`min-h-screen flex flex-col bg-[#F6F9FC] text-[#111827] ${className}`}>
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#101827] focus:text-white focus:text-sm focus:font-medium focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
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
