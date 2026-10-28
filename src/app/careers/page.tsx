import type { Metadata } from 'next';
import { CareersPageContent } from '@/components/careers/CareersPageContent';

export const metadata: Metadata = {
  title: 'Careers | Join DentalPulse',
  description:
    'Join the team building the intelligence layer for dental laboratories. Explore open engineering, product, sales, and operations roles.',
  alternates: {
    canonical: 'https://dentalpulse.com/careers',
  },
  openGraph: {
    title: 'Careers | Join DentalPulse',
    description:
      'Join the team building the intelligence layer for dental laboratories. Explore open engineering, product, sales, and operations roles.',
    url: 'https://dentalpulse.com/careers',
  },
};

export default function CareersPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-white">
      <CareersPageContent />
    </div>
  );
}
