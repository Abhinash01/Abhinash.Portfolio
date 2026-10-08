import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { siteConfig, FOOTER_SECTIONS } from '../../config'
import { getExternalLinkAttributes, isExternalUrl } from '../../lib'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer id="global-footer" className="w-full border-t border-[#E5EAF1] bg-[#FFFFFF] pt-14 pb-24 sm:pb-14 text-sm text-[#64748B]">
      <Container size="lg">
        {/* Main 4-Column Directory Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#E5EAF1]">
          {/* Column 1: Brand & Role Identity */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-3 group rounded p-1 -m-1 focus-visible:outline-2 focus-visible:outline-[#4169E1]"
              aria-label={`${siteConfig.name} Portfolio Home`}
            >
              <span className="w-7 h-7 rounded bg-[#101827] text-white flex items-center justify-center font-display font-bold text-xs tracking-wider group-hover:bg-[#4169E1] transition-colors">
                {siteConfig.shortName}
              </span>
              <span className="font-display font-semibold text-sm tracking-wider text-[#111827] uppercase">
                {siteConfig.name.toUpperCase()}
              </span>
            </Link>
            <p className="text-xs text-[#64748B] leading-relaxed">
              {siteConfig.description}
            </p>
            {siteConfig.status.isAvailable && (
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#F6F9FC] border border-[#E5EAF1] text-[11px] font-mono text-[#64748B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" aria-hidden="true" />
                <span>{siteConfig.status.label}</span>
              </div>
            )}
          </div>

          {/* Column 2: Navigation Directory */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold">
              {FOOTER_SECTIONS.navigation.title}
            </h3>
            <ul className="space-y-2 text-xs" aria-label="Footer Navigation Links">
              {FOOTER_SECTIONS.navigation.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-[#111827] transition-colors py-0.5 inline-block focus-visible:outline-2 focus-visible:outline-[#4169E1]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portfolio Case Studies Archive */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold">
              {FOOTER_SECTIONS.archive.title}
            </h3>
            <ul className="space-y-2 text-xs" aria-label="Portfolio Case Studies">
              {FOOTER_SECTIONS.archive.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-[#111827] transition-colors py-0.5 inline-block focus-visible:outline-2 focus-visible:outline-[#4169E1]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Connect & Direct Channels */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold">
              {FOOTER_SECTIONS.connect.title}
            </h3>
            <ul className="space-y-2 text-xs" aria-label="Connect Channels">
              {FOOTER_SECTIONS.connect.links.map((link) => {
                if (link.isExternal || isExternalUrl(link.href)) {
                  const extAttrs = getExternalLinkAttributes(link.href)
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        {...extAttrs}
                        className="hover:text-[#111827] transition-colors py-0.5 inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#4169E1]"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                }
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="hover:text-[#111827] transition-colors py-0.5 inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#4169E1]"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Telemetry & Back to Top Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.</p>

          <div className="flex items-center space-x-4">
            <span className="font-mono text-[11px] text-[#64748B]">
              React 18 · Vite · TypeScript
            </span>
            <button
              id="btn-scroll-top"
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-[#64748B] hover:text-[#111827] transition-colors p-1 rounded focus-visible:outline-2 focus-visible:outline-[#4169E1]"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
