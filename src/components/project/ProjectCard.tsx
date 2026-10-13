import React from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../../types/project.types'
import { Badge } from '../ui/Badge'

export interface ProjectCardProps {
  readonly project: Project
  readonly featured?: boolean
  readonly className?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featured = false,
  className = '',
}) => {
  const allTech = [
    ...project.technologyStack.frontend,
    ...(project.technologyStack.backend ?? []),
  ].slice(0, 4)

  return (
    <article
      className={`group bg-[#0D1220] rounded-lg border border-[#252D3D] p-6 sm:p-7 hover:border-[#3B4863] hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between focus-within:ring-2 focus-within:ring-[#6C8CFF] focus-within:ring-offset-2 focus-within:ring-offset-[#080B12] ${
        featured ? 'shadow-md border-[#3B4863]' : ''
      } ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="primary" size="sm">
            {project.category}
          </Badge>
          {project.isFeatured && (
            <span className="text-[11px] font-mono text-[#34D399] bg-[#062419] px-2 py-0.5 rounded border border-[#065F46]">
              Featured Flagship
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-bold text-[#F3F5F9] group-hover:text-[#6C8CFF] transition-colors tracking-tight">
          <Link to={`/projects/${project.projectSlug}`} className="focus:outline-none">
            {project.projectTitle}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-[#A1AABC] line-clamp-3 leading-relaxed font-sans">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {allTech.map((tech) => (
            <Badge key={tech} variant="muted" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#252D3D] flex items-center justify-between">
        <span className="text-xs text-[#778397] font-mono">
          Role: {project.myRole.split('&')[0].trim()}
        </span>
        <Link
          to={`/projects/${project.projectSlug}`}
          className="text-xs font-semibold text-[#6C8CFF] hover:text-[#8EA5FF] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          Case Study <span>↗</span>
        </Link>
      </div>
    </article>
  )
}
