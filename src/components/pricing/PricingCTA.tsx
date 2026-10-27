import React from 'react';
import { SectionCTA } from '@/components/ui/SectionCTA';

export function PricingCTA() {
  return (
    <SectionCTA
      eyebrow="FIND YOUR FIT"
      title="Not sure which plan fits?"
      description="We’ll recommend the exact setup based on your lab team size, active accounts, and growth goals."
      primaryCta={{ label: 'Book a demo', href: '/book-demo' }}
      secondaryCta={{ label: 'Calculate ROI', href: '/roi' }}
      className="w-full bg-[#FAFAFA] pb-24 px-4 sm:px-6"
    />
  );
}
