import React from 'react'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

export const ContactPage: React.FC = () => {
  return (
    <Section
      id="contact"
      eyebrow="// INQUIRY PORTAL"
      title="Initiate Technical Dialogue"
      subtitle="Open for software engineering opportunities, technical collaborations, and full-stack contracts."
    >
      <div className="bg-white rounded-lg border border-[#E5EAF1] p-8 max-w-2xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E5EAF1]">
          <div>
            <span className="text-xs text-[#94A3B8] font-mono block">AVAILABILITY STATUS</span>
            <span className="text-sm font-semibold text-[#111827]">Open for Technical Roles</span>
          </div>
          <Badge variant="success">Active</Badge>
        </div>

        <p className="text-sm text-[#64748B] leading-relaxed">
          Whether you are evaluating candidates for a modern full-stack development role or
          looking to engineer high-performance web applications, feel free to reach out.
        </p>

        <div className="pt-2 flex flex-wrap gap-4">
          <Button href="mailto:abhinashguptawork@gmail.com" variant="primary">
            Email Directly ✉
          </Button>
          <Button href="/projects" variant="secondary">
            Review Projects First
          </Button>
        </div>
      </div>
    </Section>
  )
}
