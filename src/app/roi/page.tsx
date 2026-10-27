import React from 'react';
import type { Metadata } from 'next';
import { RoiHero } from '@/components/roi/RoiHero';
import { RoiCalculator } from '@/components/roi/RoiCalculator';
import { RoiMethodology } from '@/components/roi/RoiMethodology';

export const metadata: Metadata = {
  title: 'ROI Calculator | Dental Lab Return on Investment',
  description:
    'Plug in your numbers to calculate your dental lab return on investment. See what better dentist retention, cross-selling, and reduced acquisition cost add to your bottom line.',
  alternates: {
    canonical: 'https://dentalpulse.com/roi',
  },
  openGraph: {
    title: 'ROI Calculator | Dental Lab Return on Investment',
    description:
      'Plug in your numbers to calculate your dental lab return on investment. See what better dentist retention, cross-selling, and reduced acquisition cost add to your bottom line.',
    url: 'https://dentalpulse.com/roi',
  },
};

export default function RoiPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-white text-[#0A0A0A]">
      <RoiHero />
      <RoiCalculator />
      <RoiMethodology />
    </div>
  );
}
