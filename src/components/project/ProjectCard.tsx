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
      className={`group bg-white rounded-lg border border-[#E5EAF1] p-6 hover:border-[#CBD5E1] transition-all flex flex-col justify-between ${
        featured ? 'shadow-sm' : ''
      } ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="primary" size="sm">
            {project.category}
          </Badge>
          {project.isFeatured && (
            <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[rgba(5,150,105,0.25)]">
              Featured Flagship
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#4169E1] transition-colors">
          <Link to={`/projects/${project.projectSlug}`}>
            {project.projectTitle}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-[#64748B] line-clamp-3 leading-relaxed">
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

      <div className="mt-6 pt-4 border-t border-[#E5EAF1] flex items-center justify-between">
        <span className="text-xs text-[#94A3B8] font-mono">
          Role: {project.myRole.split('&')[0].trim()}
        </span>
        <Link
          to={`/projects/${project.projectSlug}`}
          className="text-xs font-semibold text-[#4169E1] hover:text-[#3154C4] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          Case Study <span>↗</span>
        </Link>
      </div>
    </article>
  )
}
