import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SolutionsRoleNav } from '@/components/solutions/SolutionsRoleNav';

export const metadata: Metadata = {
  title: 'Solutions for Marketing Teams | DentalPulse',
  description:
    'Campaigns that reach the right dentist at the right time. Build segments from real buying behaviour, launch multi-channel campaigns, and track real case volume.',
  openGraph: {
    title: 'Solutions for Marketing Teams | DentalPulse',
    description:
      'Campaigns that reach the right dentist at the right time. Build segments from real buying behaviour, launch multi-channel campaigns, and track real case volume.',
    url: 'https://dentalpulse.com/solutions/marketing',
  },
};

export default function MarketingPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <div className="flex-1 w-full flex flex-col">
        <SolutionsRoleNav activeRole="marketing" />
        {/* Marketing sections will be assembled in subsequent phases */}
      </div>
      <Footer />
    </main>
  );
}
