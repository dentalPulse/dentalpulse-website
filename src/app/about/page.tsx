import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/about/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us | Our Mission & Leadership | DentalPulse',
  description:
    'DentalPulse is on a mission to help dental laboratories protect doctor relationships and grow sustainably through customer intelligence.',
  alternates: {
    canonical: 'https://dentalpulse.com/about',
  },
  openGraph: {
    title: 'About Us | Our Mission & Leadership | DentalPulse',
    description:
      'DentalPulse is on a mission to help dental laboratories protect doctor relationships and grow sustainably through customer intelligence.',
    url: 'https://dentalpulse.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-white">
      <AboutPageContent />
    </div>
  );
}
