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
      <Navbar />
      <main className={`flex-1 ${mainClassName}`}>{children}</main>
      <Footer />
    </div>
  )
}
