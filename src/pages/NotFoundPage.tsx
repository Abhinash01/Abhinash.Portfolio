import React from 'react'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'

export const NotFoundPage: React.FC = () => {
  return (
    <Section
      id="404"
      eyebrow="// 404 EXCEPTION"
      title="Resource Not Found"
      subtitle="The URL path you requested does not correspond to a valid canonical route."
    >
      <div className="bg-[#0D1220] rounded-lg border border-[#252D3D] p-8 max-w-xl text-center space-y-4">
        <p className="text-sm text-[#A1AABC]">
          Please check the URL or navigate back to the primary portfolio index.
        </p>
        <div className="pt-2">
          <Button href="/" variant="primary">
            Return to Homepage
          </Button>
        </div>
      </div>
    </Section>
  )
}
