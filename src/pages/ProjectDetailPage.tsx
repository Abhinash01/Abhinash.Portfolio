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
          <div className="bg-[#0D1220] rounded-lg border border-[#252D3D] p-6">
            <h3 className="text-base font-bold mb-2 font-mono text-xs text-[#6C8CFF]">
              // PROBLEM STATEMENT
            </h3>
            <p className="text-sm text-[#A1AABC] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="bg-[#0D1220] rounded-lg border border-[#252D3D] p-6">
            <h3 className="text-base font-bold mb-2 font-mono text-xs text-[#6C8CFF]">
              // PROJECT OBJECTIVE
            </h3>
            <p className="text-sm text-[#A1AABC] leading-relaxed">
              {project.projectObjective}
            </p>
          </div>
        </div>

        {/* Implemented Features */}
        <div className="bg-[#0D1220] rounded-lg border border-[#252D3D] p-6">
          <h3 className="text-base font-bold mb-4 font-mono text-xs text-[#34D399]">
            // VERIFIED IMPLEMENTED FEATURES
          </h3>
          <ul className="space-y-2 text-sm text-[#A1AABC]">
            {project.implementedFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#34D399] font-mono select-none">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back navigation */}
        <div className="pt-4 flex items-center justify-between border-t border-[#252D3D]">
          <Link
            to="/projects"
            className="text-sm font-semibold text-[#6C8CFF] hover:text-[#8EA5FF] transition-colors"
          >
            ← Back to All Projects
          </Link>
          <Button href="/contact" variant="secondary" size="sm">
            Discuss Architecture ✉
          </Button>
        </div>
      </div>
    </Section>
  )
}
