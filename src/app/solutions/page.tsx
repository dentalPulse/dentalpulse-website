import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SolutionsRoleNav } from '@/components/solutions/SolutionsRoleNav';
import { SolutionsHero } from '@/components/solutions/SolutionsHero';

export const metadata: Metadata = {
  title: 'Solutions for Lab Owners & C-Suite | DentalPulse',
  description:
    'Complete visibility into lab revenue, retention, customer lifetime value and accounts at risk on a single executive dashboard.',
  openGraph: {
    title: 'Solutions for Lab Owners & C-Suite | DentalPulse',
    description:
      'Complete visibility into lab revenue, retention, customer lifetime value and accounts at risk on a single executive dashboard.',
    url: 'https://dentalpulse.com/solutions',
  },
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <div className="flex-1 w-full flex flex-col">
        <SolutionsRoleNav activeRole="owners" />
        <SolutionsHero />
      </div>
      <Footer />
    </main>
  );
}
