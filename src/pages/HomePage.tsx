import React, { useState, useEffect } from 'react'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { ProjectList } from '../components/project/ProjectList'
import { getFeaturedProjects } from '../data/projects'
import { SceneCanvas, HeroScene } from '../components/3d'

export const HomePage: React.FC = () => {
  const featuredProjects = getFeaturedProjects()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div>
      {/* Hero Narrative Hook & 3D Spatial Canvas */}
      <section id="hero" className="py-12 md:py-16 lg:py-20 border-b border-[#E5EAF1] bg-[#F6F9FC]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Editorial & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <p className="font-mono text-xs text-[#4169E1] tracking-wider uppercase">
                // 01. PHILOSOPHY
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] leading-[1.18]">
                Building Digital Systems. Beyond Ordinary.
              </h1>
              <p className="text-base sm:text-lg text-[#64748B] max-w-xl font-sans leading-relaxed">
                Engineering scalable full-stack architectures and choreographing spatial 3D interfaces with precision, clean modularity, and verifiable code craftsmanship.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button href="/projects" variant="primary" size="lg">
                  Explore Selected Work (3)
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Get in Touch ✉
                </Button>
              </div>
              <div className="pt-4 border-t border-[#E5EAF1] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#64748B] font-mono">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" aria-hidden="true" />
                  <span>Interactive 3D Engine Active</span>
                </span>
                <span className="text-[#CBD5E1]">·</span>
                <span>Kinetic Monolith & Gyroscope</span>
              </div>
            </div>

            {/* Right Column: Spatial 3D Hero Viewport */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="w-full max-w-md lg:max-w-none h-[340px] sm:h-[400px] lg:h-[460px] rounded-xl border border-[#E5EAF1] bg-[#FFFFFF]/70 backdrop-blur-xs shadow-xs relative overflow-hidden flex items-center justify-center">
                <SceneCanvas
                  className="w-full h-full"
                  cameraPosition={[0, 0, 5.6]}
                  cameraFov={42}
                  ariaLabel="Kinetic Monolith and Gyroscope 3D Hero Sculpture"
                >
                  <HeroScene isMobile={isMobile} />
                </SceneCanvas>
              </div>
            </div>
          </div>
        </Container>
      </section>

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
