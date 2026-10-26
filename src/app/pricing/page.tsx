import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PricingPageContent } from '@/components/pricing/PricingPageContent';

export const metadata: Metadata = {
  title: 'Pricing | DentalPulse',
  description:
    'Pricing that grows with your lab. Transparent plans for dental laboratory customer intelligence, marketing automation, and AI predictive insights.',
  openGraph: {
    title: 'Pricing | DentalPulse',
    description:
      'Pricing that grows with your lab. Transparent plans for dental laboratory customer intelligence, marketing automation, and AI predictive insights.',
    url: 'https://dentalpulse.com/pricing',
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <PricingPageContent />
      <Footer />
    </main>
  );
}
