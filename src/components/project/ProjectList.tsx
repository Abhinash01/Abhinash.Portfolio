import React from 'react'
import type { Project } from '../../types/project.types'
import { ProjectCard } from './ProjectCard'

export interface ProjectListProps {
  readonly projects: readonly Project[]
  readonly columns?: 1 | 2 | 3
  readonly className?: string
}

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  columns = 2,
  className = '',
}) => {
  const columnStyles: Record<1 | 2 | 3, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <div className={`grid gap-6 ${columnStyles[columns]} ${className}`}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
