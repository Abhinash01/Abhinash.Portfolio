import React from 'react'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

export const AboutPage: React.FC = () => {
  return (
    <Section
      id="about"
      eyebrow="// ENGINEERING PROFILE"
      title="About Abhinash Gupta"
      subtitle="Software Engineer specializing in scalable full-stack web architectures, clean code modularity, and interactive 3D web graphics."
    >
      <div className="bg-[#0D1220] rounded-lg border border-[#252D3D] p-8 max-w-3xl space-y-6">
        <div>
          <h3 className="text-lg font-bold text-[#F3F5F9] mb-2">
            Engineering Foundations & Systems Craft
          </h3>
          <p className="text-sm text-[#A1AABC] leading-relaxed">
            Focused on bridging modern frontend ergonomics with solid backend fundamentals.
            Dedicated to crafting resilient digital systems that emphasize performance,
            accessibility, and uncompromising visual polish.
          </p>
        </div>

        <div>
          <span className="text-xs text-[#778397] font-mono block mb-2">CORE TECHNOLOGIES</span>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">React</Badge>
            <Badge variant="primary">TypeScript</Badge>
            <Badge variant="primary">Node.js</Badge>
            <Badge variant="primary">Express</Badge>
            <Badge variant="muted">Tailwind CSS</Badge>
            <Badge variant="muted">Vite</Badge>
            <Badge variant="muted">REST APIs</Badge>
            <Badge variant="muted">Git</Badge>
          </div>
        </div>

        <div className="pt-4 border-t border-[#252D3D] flex flex-wrap gap-4">
          <Button href="/projects" variant="primary">
            Explore Work
          </Button>
          <Button href="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </div>
    </Section>
  )
}
