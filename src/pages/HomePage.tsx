import React from 'react'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { ProjectList } from '../components/project/ProjectList'
import { getFeaturedProjects } from '../data/projects'
import { SceneCanvas, TestScene } from '../components/3d'

export const HomePage: React.FC = () => {
  const featuredProjects = getFeaturedProjects()

  return (
    <div>
      {/* Hero Narrative Hook */}
      <Section
        id="hero"
        eyebrow="// 01. PHILOSOPHY"
        title="Building Digital Systems. Beyond Ordinary."
        subtitle="Engineering scalable full-stack architectures and choreographing spatial 3D interfaces with precision."
      >
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button href="/projects" variant="primary" size="lg">
            Explore Selected Work (3)
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Get in Touch ✉
          </Button>
        </div>

        {/* Phase 11 Temporary 3D Engineering Validation Canvas */}
        <div className="mt-8 max-w-xl h-[260px] sm:h-[300px] rounded-lg border border-[#E5EAF1] bg-[#FFFFFF] shadow-xs overflow-hidden">
          <div className="px-4 py-2 border-b border-[#E5EAF1] bg-[#F6F9FC] flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#64748B]">
              // R3F Rendering Pipeline Validation
            </span>
            <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-[#10B981]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Three.js Engine Active</span>
            </span>
          </div>
          <div className="w-full h-[calc(100%-37px)]">
            <SceneCanvas ariaLabel="Phase 11 3D pipeline validation canvas">
              <TestScene />
            </SceneCanvas>
          </div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section
        id="featured-work"
        eyebrow="// 02. SELECTED WORK"
        title="Featured Engineering Flagships"
        subtitle="Curated full-stack web applications and industrial platforms demonstrating architectural rigor."
      >
        <ProjectList projects={featuredProjects} columns={2} />

        <div className="mt-8 text-center sm:text-right">
          <Button href="/projects" variant="ghost" size="sm">
            View Complete Archive (4) ↗
          </Button>
        </div>
      </Section>
    </div>
  )
}
