import React from 'react'
import { Section } from '../components/ui/Section'
import { ProjectList } from '../components/project/ProjectList'
import { getAllProjects } from '../data/projects'

export const ProjectsPage: React.FC = () => {
  const projects = getAllProjects()

  return (
    <Section
      id="archive"
      eyebrow="// ARCHIVE DIRECTORY"
      title="Complete Projects Archive"
      subtitle="Comprehensive technical catalog of full-stack applications, industrial web portals, and client systems."
    >
      <ProjectList projects={projects} columns={2} />
    </Section>
  )
}
