import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#E5EAF1] bg-[#FFFFFF] py-12 text-sm text-[#64748B]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <span className="w-6 h-6 rounded bg-[#101827] text-white flex items-center justify-center font-bold text-[10px]">
              AG
            </span>
            <span className="font-semibold text-xs tracking-tight text-[#111827]">
              Abhinash Gupta
            </span>
            <span className="text-xs text-[#94A3B8]">·</span>
            <span className="text-xs font-mono">Software Engineer</span>
          </div>

          <nav className="flex items-center space-x-6 text-xs font-medium" aria-label="Footer Navigation">
            <Link to="/" className="hover:text-[#111827] transition-colors">
              Home
            </Link>
            <Link to="/projects" className="hover:text-[#111827] transition-colors">
              Projects
            </Link>
            <Link to="/about" className="hover:text-[#111827] transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-[#111827] transition-colors">
              Contact
            </Link>
          </nav>

          <p className="text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} Abhinash Gupta. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
