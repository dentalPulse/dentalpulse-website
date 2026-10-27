import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RoiHero } from '@/components/roi/RoiHero';
import { RoiCalculator } from '@/components/roi/RoiCalculator';
import { RoiMethodology } from '@/components/roi/RoiMethodology';

export const metadata: Metadata = {
  title: 'Dental Pulse | ROI Calculator',
  description:
    'Plug in your numbers to calculate your dental lab return on investment. See what better dentist retention, cross-selling, and reduced acquisition cost add to your bottom line.',
  openGraph: {
    title: 'Dental Pulse | ROI Calculator',
    description:
      'Plug in your numbers to calculate your dental lab return on investment. See what better dentist retention, cross-selling, and reduced acquisition cost add to your bottom line.',
    url: 'https://dentalpulse.com/roi',
  },
};

export default function RoiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A0A0A]">
      <Header />
      <main className="flex-1">
        <RoiHero />
        <RoiCalculator />
        <RoiMethodology />
      </main>
      <Footer />
    </div>
  );
}
