import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'

export interface NavItem {
  readonly label: string
  readonly path: string
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const Navbar: React.FC = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string): boolean => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-[#E5EAF1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link to="/" className="flex items-center space-x-3 group" aria-label="Abhinash Gupta Portfolio Home">
          <span className="w-8 h-8 rounded bg-[#101827] text-white flex items-center justify-center font-bold text-xs tracking-wider">
            AG
          </span>
          <span className="font-semibold text-sm tracking-tight text-[#111827]">
            Abhinash Gupta
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  active ? 'text-[#111827] font-semibold' : 'text-[#64748B] hover:text-[#111827]'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4169E1] rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* CTA & Status Beacon */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-xs text-[#64748B]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono">Available</span>
          </div>
          <Button href="/contact" variant="dark" size="sm">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-[#111827] hover:bg-[#EEF2F8] focus-visible:outline-2 focus-visible:outline-[#4169E1]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer (Basic Structural Presentation) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5EAF1] bg-white px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-[#EEF2F8] text-[#111827] font-semibold'
                    : 'text-[#64748B] hover:bg-[#F6F9FC] hover:text-[#111827]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Button href="/contact" variant="dark" size="md" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
