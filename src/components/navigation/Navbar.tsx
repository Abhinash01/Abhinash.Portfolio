import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'
import {
  siteConfig,
  PRIMARY_NAV_ITEMS,
  PRIMARY_CTA,
  isRouteActive,
} from '../../config'

export const Navbar: React.FC = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Manage body scroll lock and Escape key listener when mobile drawer is open
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E5EAF1] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link
          to="/"
          className="flex items-center space-x-3 group rounded-md p-1 -m-1 focus-visible:outline-2 focus-visible:outline-[#4169E1]"
          aria-label={`${siteConfig.name} Portfolio Home`}
        >
          <span className="w-8 h-8 rounded bg-[#101827] text-white flex items-center justify-center font-display font-bold text-xs tracking-wider transition-colors duration-200 group-hover:bg-[#4169E1]">
            {siteConfig.shortName}
          </span>
          <span className="font-display font-semibold text-sm tracking-wider text-[#111827] uppercase">
            {siteConfig.name.toUpperCase()}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Primary Navigation">
          {PRIMARY_NAV_ITEMS.map((item) => {
            const active = isRouteActive(location.pathname, item.href, item.matchPrefix)
            return (
              <Link
                key={item.href}
                to={item.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-medium transition-colors relative py-1.5 focus-visible:outline-2 focus-visible:outline-[#4169E1] focus-visible:rounded ${
                  active
                    ? 'text-[#111827] font-semibold'
                    : 'text-[#64748B] hover:text-[#111827]'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4169E1] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* CTA & Availability Beacon */}
        <div className="hidden md:flex items-center space-x-5">
          {siteConfig.status.isAvailable && (
            <div className="hidden lg:flex items-center space-x-2 text-xs text-[#64748B] select-none">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs">{siteConfig.status.shortLabel}</span>
            </div>
          )}
          <Button
            href={PRIMARY_CTA.href}
            variant="dark"
            size="sm"
            className="font-mono text-xs uppercase tracking-wider"
          >
            {PRIMARY_CTA.label}
          </Button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-[#111827] hover:bg-[#EEF2F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1] transition-colors"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-[#101827]/40 backdrop-blur-xs z-30 md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed top-16 left-0 right-0 z-40 bg-white border-b border-[#E5EAF1] shadow-xl md:hidden transition-all duration-200 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4 max-w-lg mx-auto">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Menu Navigation">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                location.pathname === '/'
                  ? 'bg-[#EEF2F8] text-[#111827] font-semibold'
                  : 'text-[#64748B] hover:bg-[#F6F9FC] hover:text-[#111827]'
              }`}
            >
              Home
            </Link>
            {PRIMARY_NAV_ITEMS.map((item) => {
              const active = isRouteActive(location.pathname, item.href, item.matchPrefix)
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-medium flex items-center justify-between transition-colors ${
                    active
                      ? 'bg-[#EEF2F8] text-[#111827] font-semibold'
                      : 'text-[#64748B] hover:bg-[#F6F9FC] hover:text-[#111827]'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1]" aria-hidden="true" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Status Beacon & Quick CTA inside Mobile Drawer */}
          <div className="pt-4 border-t border-[#E5EAF1] space-y-3">
            {siteConfig.status.isAvailable && (
              <div className="flex items-center space-x-2 px-3 text-xs text-[#64748B]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" aria-hidden="true" />
                <span className="font-mono">{siteConfig.status.description}</span>
              </div>
            )}
            <Button
              href={PRIMARY_CTA.href}
              variant="dark"
              size="md"
              className="w-full font-mono text-xs uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              {PRIMARY_CTA.label}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
