import React from 'react'
import type { Project } from '../../types/project.types'
import { Badge } from '../ui/Badge'

export interface ProjectMetaProps {
  readonly project: Project
  readonly className?: string
}

export const ProjectMeta: React.FC<ProjectMetaProps> = ({ project, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg border border-[#E5EAF1] p-6 space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <div>
          <span className="text-[#94A3B8] font-mono block mb-1">CATEGORY</span>
          <span className="font-semibold text-[#111827]">{project.category}</span>
        </div>
        <div>
          <span className="text-[#94A3B8] font-mono block mb-1">ROLE</span>
          <span className="font-semibold text-[#111827]">{project.myRole}</span>
        </div>
        <div>
          <span className="text-[#94A3B8] font-mono block mb-1">STATUS</span>
          <span className="font-semibold text-[#111827]">{project.projectStatus}</span>
        </div>
        <div>
          <span className="text-[#94A3B8] font-mono block mb-1">SLUG</span>
          <span className="font-mono text-[#4169E1]">{project.projectSlug}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-[#E5EAF1]">
        <span className="text-xs text-[#94A3B8] font-mono block mb-2">TECHNOLOGY STACK</span>
        <div className="flex flex-wrap gap-1.5">
          {project.technologyStack.frontend.map((tech) => (
            <Badge key={`fe-${tech}`} variant="primary" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologyStack.backend?.map((tech) => (
            <Badge key={`be-${tech}`} variant="muted" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologyStack.apis?.map((tech) => (
            <Badge key={`api-${tech}`} variant="muted" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
