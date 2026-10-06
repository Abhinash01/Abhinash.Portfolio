import React from 'react'
import { Outlet } from 'react-router-dom'
import { PageShell } from './layout/PageShell'

export const Layout: React.FC = () => {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  )
}
