import React from 'react';
import { SectionCTA } from '@/components/ui/SectionCTA';

export function BottomCTA() {
  return (
    <SectionCTA
      title="Your lab has the data. Now put it to work."
      description="See your own customers in Dental Pulse in a 30-minute walkthrough."
      primaryCta={{ label: 'Book a demo', href: '/book-demo' }}
      secondaryCta={{ label: 'Calculate your ROI', href: '/roi' }}
    />
  );
}
