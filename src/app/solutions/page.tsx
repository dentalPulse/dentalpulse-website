import type { Metadata } from 'next';
import { SolutionsRoleNav } from '@/components/solutions/SolutionsRoleNav';
import { SolutionsHero } from '@/components/solutions/SolutionsHero';
import { QuestionsSection } from '@/components/solutions/QuestionsSection';
import { ExecutiveCapabilitiesSection } from '@/components/solutions/ExecutiveCapabilitiesSection';
import { ExecutiveQuoteSection } from '@/components/solutions/ExecutiveQuoteSection';
import { SolutionsRolesCrosslink } from '@/components/solutions/SolutionsRolesCrosslink';
import { SolutionsCTA } from '@/components/solutions/SolutionsCTA';

export const metadata: Metadata = {
  title: 'Solutions for Lab Owners & C-Suite | DentalPulse',
  description:
    'Complete visibility into lab revenue, retention, customer lifetime value and accounts at risk on a single executive dashboard.',
  alternates: {
    canonical: 'https://dentalpulse.com/solutions',
  },
  openGraph: {
    title: 'Solutions for Lab Owners & C-Suite | DentalPulse',
    description:
      'Complete visibility into lab revenue, retention, customer lifetime value and accounts at risk on a single executive dashboard.',
    url: 'https://dentalpulse.com/solutions',
  },
};

export default function SolutionsPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-white">
      <SolutionsRoleNav activeRole="owners" />
      <SolutionsHero />
      <QuestionsSection />
      <ExecutiveCapabilitiesSection />
      <ExecutiveQuoteSection />
      <SolutionsRolesCrosslink />
      <SolutionsCTA />
    </div>
  );
}
