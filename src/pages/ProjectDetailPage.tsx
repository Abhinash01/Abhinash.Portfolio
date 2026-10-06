import React from 'react'
import { useParams } from 'react-router-dom'

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">Project Case Study</h1>
      <p className="mt-2 text-slate-600">
        Slug: <code className="bg-slate-200 px-1.5 py-0.5 rounded text-sm font-mono">{slug}</code>
      </p>
    </main>
  )
}
