import React from 'react'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { ProjectList } from '../components/project/ProjectList'
import { getFeaturedProjects } from '../data/projects'

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
