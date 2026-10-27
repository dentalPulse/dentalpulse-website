import type { Metadata } from 'next';
import { SolutionsRoleNav } from '@/components/solutions/SolutionsRoleNav';
import { MarketingHero } from '@/components/solutions/marketing/MarketingHero';
import { MarketingQuestionsSection } from '@/components/solutions/marketing/MarketingQuestionsSection';
import { MarketingCapabilitiesSection } from '@/components/solutions/marketing/MarketingCapabilitiesSection';
import { MarketingQuoteSection } from '@/components/solutions/marketing/MarketingQuoteSection';
import { MarketingRolesCrosslink } from '@/components/solutions/marketing/MarketingRolesCrosslink';
import { MarketingCTA } from '@/components/solutions/marketing/MarketingCTA';

export const metadata: Metadata = {
  title: 'Solutions for Marketing Teams | DentalPulse',
  description:
    'Campaigns that reach the right dentist at the right time. Build segments from real buying behaviour, launch multi-channel campaigns, and track real case volume.',
  alternates: {
    canonical: 'https://dentalpulse.com/solutions/marketing',
  },
  openGraph: {
    title: 'Solutions for Marketing Teams | DentalPulse',
    description:
      'Campaigns that reach the right dentist at the right time. Build segments from real buying behaviour, launch multi-channel campaigns, and track real case volume.',
    url: 'https://dentalpulse.com/solutions/marketing',
  },
};

export default function MarketingPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-white">
      <SolutionsRoleNav activeRole="marketing" />
      <MarketingHero />
      <MarketingQuestionsSection />
      <MarketingCapabilitiesSection />
      <MarketingQuoteSection />
      <MarketingRolesCrosslink />
      <MarketingCTA />
    </div>
  );
}
