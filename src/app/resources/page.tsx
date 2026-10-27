import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ResourcesPageContent } from '@/components/resources/ResourcesPageContent';

export const metadata: Metadata = {
  title: 'Resources & Guides | DentalPulse',
  description:
    'Practical guides and actionable strategies on dentist account retention, wallet-share expansion, sales routines, and marketing for modern dental laboratories.',
  openGraph: {
    title: 'Resources & Guides | DentalPulse',
    description:
      'Practical guides and actionable strategies on dentist account retention, wallet-share expansion, sales routines, and marketing for modern dental laboratories.',
    url: 'https://dentalpulse.com/resources',
  },
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <ResourcesPageContent />
      <Footer />
    </main>
  );
}
