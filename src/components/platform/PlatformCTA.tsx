import React from 'react';
import { SectionCTA } from '@/components/ui/SectionCTA';

export function PlatformCTA() {
  return (
    <SectionCTA
      eyebrow="GET STARTED TODAY"
      title="See your own lab’s data in Dental Pulse."
      description="Book a 30-minute walkthrough with your real numbers, or start exploring how customer intelligence unifies your sales and operations."
      primaryCta={{ label: 'Book a demo', href: '/book-demo' }}
      secondaryCta={{ label: 'Calculate your ROI', href: '/roi' }}
      className="w-full bg-white py-16 md:py-24 px-6"
    />
  );
}
