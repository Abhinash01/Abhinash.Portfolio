import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'

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
              aria-label="Abhinash Gupta Portfolio Home"
            >
              <span className="w-7 h-7 rounded bg-[#101827] text-white flex items-center justify-center font-display font-bold text-xs tracking-wider group-hover:bg-[#4169E1] transition-colors">
                AG
              </span>
              <span className="font-display font-semibold text-sm tracking-wider text-[#111827] uppercase">
                ABHINASH GUPTA
              </span>
            </Link>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Software Engineer specializing in scalable full-stack web architectures, clean component modularity, and interactive digital experiences.
            </p>
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#F6F9FC] border border-[#E5EAF1] text-[11px] font-mono text-[#64748B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" aria-hidden="true" />
              <span>Available for Technical Roles</span>
            </div>
          </div>

          {/* Column 2: Navigation Directory */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold">
              NAVIGATION
            </h3>
            <ul className="space-y-2 text-xs" aria-label="Footer Navigation Links">
              <li>
                <Link to="/" className="hover:text-[#111827] transition-colors py-0.5 inline-block focus-visible:outline-2 focus-visible:outline-[#4169E1]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#111827] transition-colors py-0.5 inline-block focus-visible:outline-2 focus-visible:outline-[#4169E1]">
                  Work (Projects)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#111827] transition-colors py-0.5 inline-block focus-visible:outline-2 focus-visible:outline-[#4169E1]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#111827] transition-colors py-0.5 inline-block focus-visible:outline-2 focus-visible:outline-[#4169E1]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portfolio Case Studies Archive */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold">
              PORTFOLIO ARCHIVE
            </h3>
            <ul className="space-y-2 text-xs" aria-label="Portfolio Case Studies">
              <li>
                <Link to="/projects/weathersentinel" className="hover:text-[#111827] transition-colors py-0.5 inline-block focus-visible:outline-2 focus-visible:outline-[#4169E1]">
                  WeatherSentinel ↗
                </Link>
              </li>
              <li>
                <Link to="/projects/careertrack" className="hover:text-[#111827] transition-colors py-0.5 inline-block focus-visible:outline-2 focus-visible:outline-[#4169E1]">
                  CareerTrack ↗
                </Link>
              </li>
              <li>
                <Link to="/projects/maa-kamakhya-hydraulic" className="hover:text-[#111827] transition-colors py-0.5 inline-block focus-visible:outline-2 focus-visible:outline-[#4169E1]">
                  Maa Kamakhya Hydraulic ↗
                </Link>
              </li>
              <li>
                <Link to="/projects/jay-hanuman-astro" className="hover:text-[#111827] transition-colors py-0.5 inline-block focus-visible:outline-2 focus-visible:outline-[#4169E1]">
                  Jay Hanuman Astro ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Connect & Direct Channels */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold">
              CONNECT
            </h3>
            <ul className="space-y-2 text-xs" aria-label="Connect Channels">
              <li>
                <a
                  href="https://github.com/Abhinash01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111827] transition-colors py-0.5 inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#4169E1]"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:abhinashguptawork@gmail.com"
                  className="hover:text-[#111827] transition-colors py-0.5 inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#4169E1]"
                >
                  Email Direct ✉
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#111827] transition-colors py-0.5 inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#4169E1]"
                >
                  Inquiry Portal ↗
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Telemetry & Back to Top Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Abhinash Gupta. All rights reserved.</p>

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
