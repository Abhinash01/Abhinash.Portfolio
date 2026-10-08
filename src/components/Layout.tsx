import React from 'react'
import { Outlet } from 'react-router-dom'
import { PageShell } from './layout/PageShell'
import { ScrollToTop } from './layout/ScrollToTop'

export const Layout: React.FC = () => {
  return (
    <PageShell>
      <ScrollToTop />
      <Outlet />
    </PageShell>
  )
}
