import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CareersPageContent } from '@/components/careers/CareersPageContent';

export const metadata: Metadata = {
  title: 'Careers | DentalPulse',
  description:
    'Join the team building the intelligence layer for dental laboratories. Explore open engineering, product, sales, and operations roles.',
  openGraph: {
    title: 'Careers | DentalPulse',
    description:
      'Join the team building the intelligence layer for dental laboratories. Explore open engineering, product, sales, and operations roles.',
    url: 'https://dentalpulse.com/careers',
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <CareersPageContent />
      <Footer />
    </main>
  );
}
