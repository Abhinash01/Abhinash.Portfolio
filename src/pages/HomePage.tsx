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
      {/* Hero Narrative Hook & Expanded 3D Spatial Canvas */}
      <section
        id="hero"
        className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center border-b border-[#252D3D] bg-[#080B12] overflow-hidden bg-[radial-gradient(ellipse_85%_70%_at_70%_50%,rgba(20,29,50,0.55),rgba(8,11,18,0.95)_70%,#080B12)]"
      >
        <Container size="lg" className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center py-12 lg:py-16">
            {/* Left Column: Editorial & Narrative */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-6 z-10 relative">
              <p className="font-mono text-xs text-[#6C8CFF] tracking-wider uppercase">
                // 01. PHILOSOPHY
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3F5F9] leading-[1.16]">
                Building Digital Systems. Beyond Ordinary.
              </h1>
              <p className="text-base sm:text-lg text-[#A1AABC] max-w-xl font-sans leading-relaxed">
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
              <div className="pt-4 border-t border-[#252D3D] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#778397] font-mono">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" aria-hidden="true" />
                  <span>Interactive 3D Engine Active</span>
                </span>
                <span className="text-[#3B4863]">·</span>
                <span>Kinetic Monolith & Gyroscope</span>
              </div>
            </div>

            {/* Right Column: Expanded Spatial 3D Hero Viewport (Unconstrained) */}
            <div className="lg:col-span-7 xl:col-span-7 w-full flex items-center justify-center relative">
              <div className="w-full h-[400px] sm:h-[500px] lg:h-[620px] xl:h-[680px] relative overflow-hidden flex items-center justify-center">
                <SceneCanvas
                  className="w-full h-full"
                  cameraPosition={[0, 0, 5.2]}
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
