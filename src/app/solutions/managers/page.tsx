import type { Metadata } from 'next';
import { SolutionsRoleNav } from '@/components/solutions/SolutionsRoleNav';
import { ManagersHero } from '@/components/solutions/managers/ManagersHero';
import { ManagersQuestionsSection } from '@/components/solutions/managers/ManagersQuestionsSection';
import { ManagersCapabilitiesSection } from '@/components/solutions/managers/ManagersCapabilitiesSection';
import { ManagersQuoteSection } from '@/components/solutions/managers/ManagersQuoteSection';
import { ManagersRolesCrosslink } from '@/components/solutions/managers/ManagersRolesCrosslink';
import { ManagersCTA } from '@/components/solutions/managers/ManagersCTA';

export const metadata: Metadata = {
  title: 'Solutions for Sales & CS Managers | DentalPulse',
  description:
    'Coach your lab team with the numbers that matter. See every rep’s accounts, alerts, and follow-through in one place.',
  alternates: {
    canonical: 'https://dentalpulse.com/solutions/managers',
  },
  openGraph: {
    title: 'Solutions for Sales & CS Managers | DentalPulse',
    description:
      'Coach your lab team with the numbers that matter. See every rep’s accounts, alerts, and follow-through in one place.',
    url: 'https://dentalpulse.com/solutions/managers',
  },
};

export default function ManagersPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-white">
      <SolutionsRoleNav activeRole="managers" />
      <ManagersHero />
      <ManagersQuestionsSection />
      <ManagersCapabilitiesSection />
      <ManagersQuoteSection />
      <ManagersRolesCrosslink />
      <ManagersCTA />
    </div>
  );
}
