import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SolutionsRoleNav } from '@/components/solutions/SolutionsRoleNav';
import { SalesRepsHero } from '@/components/solutions/sales-reps/SalesRepsHero';
import { SalesRepsQuestionsSection } from '@/components/solutions/sales-reps/SalesRepsQuestionsSection';

export const metadata: Metadata = {
  title: 'Solutions for Sales Representatives | DentalPulse',
  description:
    'Walk into every dental practice knowing what to say. Start each day with a ranked list of priority stops and talking points.',
  openGraph: {
    title: 'Solutions for Sales Representatives | DentalPulse',
    description:
      'Walk into every dental practice knowing what to say. Start each day with a ranked list of priority stops and talking points.',
    url: 'https://dentalpulse.com/solutions/sales-reps',
  },
};

export default function SalesRepsPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <div className="flex-1 w-full flex flex-col">
        <SolutionsRoleNav activeRole="sales-reps" />
        <SalesRepsHero />
        <SalesRepsQuestionsSection />
        {/* Remaining sections will be assembled in subsequent phases */}
      </div>
      <Footer />
    </main>
  );
}
