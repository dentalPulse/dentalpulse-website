import React from 'react';
import { SectionCTA } from '@/components/ui/SectionCTA';

export function MarketingCTA() {
  return (
    <SectionCTA
      title="Turn customer data into campaigns that convert."
      description="Build targeted, automated outreach based on actual dentist ordering frequency and product preference."
      primaryCta={{ label: 'Book a demo', href: '/book-demo' }}
      secondaryCta={{ label: 'Calculate your ROI', href: '/roi' }}
    />
  );
}
