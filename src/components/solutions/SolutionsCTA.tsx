import React from 'react';
import { SectionCTA } from '@/components/ui/SectionCTA';

export function SolutionsCTA() {
  return (
    <SectionCTA
      title="Run your lab on clarity, not guesswork."
      description="Join the lab owners seeing every customer signal and protecting revenue before it slips away."
      primaryCta={{ label: 'Book a demo', href: '/book-demo' }}
      secondaryCta={{ label: 'Calculate your ROI', href: '/roi' }}
    />
  );
}
