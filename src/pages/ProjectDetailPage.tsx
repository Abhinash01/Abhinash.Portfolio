import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { ProjectMeta } from '../components/project/ProjectMeta'
import { getProjectBySlug } from '../data/projects'

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <Section
        id="not-found"
        eyebrow="// 404 UNRESOLVED"
        title="Project Not Found"
        subtitle={`No portfolio case study found matching slug identifier: "${slug}".`}
      >
        <div className="pt-4">
          <Button href="/projects" variant="primary">
            Return to Projects Archive
          </Button>
        </div>
      </Section>
    )
  }

  return (
    <Section
      id="case-study"
      eyebrow={`// CASE STUDY: ${project.category.toUpperCase()}`}
      title={project.projectTitle}
      subtitle={project.shortDescription}
    >
      <div className="space-y-8">
        <ProjectMeta project={project} />

        {/* Problem & Objective Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-[#E5EAF1] p-6">
            <h3 className="text-base font-bold text-[#111827] mb-2 font-mono text-xs text-[#4169E1]">
              // PROBLEM STATEMENT
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="bg-white rounded-lg border border-[#E5EAF1] p-6">
            <h3 className="text-base font-bold text-[#111827] mb-2 font-mono text-xs text-[#4169E1]">
              // PROJECT OBJECTIVE
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              {project.projectObjective}
            </p>
          </div>
        </div>

        {/* Implemented Features */}
        <div className="bg-white rounded-lg border border-[#E5EAF1] p-6">
          <h3 className="text-base font-bold text-[#111827] mb-4 font-mono text-xs text-[#059669]">
            // VERIFIED IMPLEMENTED FEATURES
          </h3>
          <ul className="space-y-2 text-sm text-[#64748B]">
            {project.implementedFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#059669] font-mono select-none">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back navigation */}
        <div className="pt-4 flex items-center justify-between border-t border-[#E5EAF1]">
          <Link
            to="/projects"
            className="text-sm font-semibold text-[#4169E1] hover:text-[#3154C4] transition-colors"
          >
            ← Back to All Projects
          </Link>
          <Button href="/contact" variant="dark" size="sm">
            Discuss Architecture ✉
          </Button>
        </div>
      </div>
    </Section>
  )
}
