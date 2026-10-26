import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PlatformHero } from '@/components/platform/PlatformHero';

export const metadata: Metadata = {
  title: 'Platform & How It Works | DentalPulse',
  description:
    'Complete customer intelligence, predictive insights, and automated workflows built specifically for dental laboratories.',
  openGraph: {
    title: 'Platform & How It Works | DentalPulse',
    description:
      'Complete customer intelligence, predictive insights, and automated workflows built specifically for dental laboratories.',
    url: 'https://dentalpulse.com/platform',
  },
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <div className="flex-1 w-full flex flex-col">
        <PlatformHero />
      </div>
      <Footer />
    </main>
  );
}
