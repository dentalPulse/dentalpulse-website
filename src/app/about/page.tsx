import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutPageContent } from '@/components/about/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us | DentalPulse',
  description:
    'DentalPulse is on a mission to help dental laboratories protect doctor relationships and grow sustainably through customer intelligence.',
  openGraph: {
    title: 'About Us | DentalPulse',
    description:
      'DentalPulse is on a mission to help dental laboratories protect doctor relationships and grow sustainably through customer intelligence.',
    url: 'https://dentalpulse.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <AboutPageContent />
      <Footer />
    </main>
  );
}
