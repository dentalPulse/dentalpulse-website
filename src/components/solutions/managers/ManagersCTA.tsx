import React from 'react';
import { SectionCTA } from '@/components/ui/SectionCTA';

export function ManagersCTA() {
  return (
    <SectionCTA
      title="Give every rep a clear plan for every account."
      description="Equip your sales and customer success team with automated task lists, real-time churn flags, and actionable game plans."
      primaryCta={{ label: 'Book a demo', href: '/book-demo' }}
      secondaryCta={{ label: 'Calculate your ROI', href: '/roi' }}
    />
  );
}
