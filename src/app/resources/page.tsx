import type { Metadata } from 'next';
import { ResourcesPageContent } from '@/components/resources/ResourcesPageContent';

export const metadata: Metadata = {
  title: 'Resources, Playbooks & Lab Growth Guides | DentalPulse',
  description:
    'Practical guides and actionable strategies on dentist account retention, wallet-share expansion, sales routines, and marketing for modern dental laboratories.',
  alternates: {
    canonical: 'https://dentalpulse.com/resources',
  },
  openGraph: {
    title: 'Resources, Playbooks & Lab Growth Guides | DentalPulse',
    description:
      'Practical guides and actionable strategies on dentist account retention, wallet-share expansion, sales routines, and marketing for modern dental laboratories.',
    url: 'https://dentalpulse.com/resources',
  },
};

export default function ResourcesPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-white">
      <ResourcesPageContent />
    </div>
  );
}
