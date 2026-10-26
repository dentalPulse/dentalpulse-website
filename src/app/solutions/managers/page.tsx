import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SolutionsRoleNav } from '@/components/solutions/SolutionsRoleNav';
import { ManagersHero } from '@/components/solutions/managers/ManagersHero';

export const metadata: Metadata = {
  title: 'Solutions for Sales & CS Managers | DentalPulse',
  description:
    'Coach your lab team with the numbers that matter. See every rep’s accounts, alerts, and follow-through in one place.',
  openGraph: {
    title: 'Solutions for Sales & CS Managers | DentalPulse',
    description:
      'Coach your lab team with the numbers that matter. See every rep’s accounts, alerts, and follow-through in one place.',
    url: 'https://dentalpulse.com/solutions/managers',
  },
};

export default function ManagersPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <div className="flex-1 w-full flex flex-col">
        <SolutionsRoleNav activeRole="managers" />
        <ManagersHero />
      </div>
      <Footer />
    </main>
  );
}
