import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage: React.FC = () => {
  return (
    <main className="p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold tracking-tight">404 — Page Not Found</h1>
      <p className="mt-2 text-slate-600">
        The requested resource does not exist.
      </p>
      <div className="mt-4">
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </main>
  )
}
