import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F9FC] text-[#111827]">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-bold text-lg tracking-tight">
            AG
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/projects" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <div className="flex-1">
        <Outlet />
      </div>
      <footer className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-500">
        Abhinash Gupta — Portfolio (Phase 06 Scaffolding)
      </footer>
    </div>
  )
}
