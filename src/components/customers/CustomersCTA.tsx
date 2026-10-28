import React from 'react';
import { SectionCTA } from '@/components/ui/SectionCTA';

export function CustomersCTA() {
  return (
    <SectionCTA
      title="Write your lab’s growth story next."
      description="See how DentalPulse can help your dental lab catch at-risk accounts, uncover high-margin cross-sell revenue, and automate sales reporting in 30 days."
      primaryCta={{ label: 'Book a demo', href: '/book-demo' }}
      secondaryCta={{ label: 'Calculate your ROI', href: '/roi' }}
      className="w-full pb-28 px-6"
    />
  );
}
