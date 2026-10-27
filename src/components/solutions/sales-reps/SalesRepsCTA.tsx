import React from 'react';
import { SectionCTA } from '@/components/ui/SectionCTA';

export function SalesRepsCTA() {
  return (
    <SectionCTA
      title="Have the right conversation with the right dentist at the right time."
      description="Equip reps with automated account alerts and data-driven touchpoints to deepen client loyalty."
      primaryCta={{ label: 'Book a demo', href: '/book-demo' }}
      secondaryCta={{ label: 'Calculate your ROI', href: '/roi' }}
    />
  );
}
