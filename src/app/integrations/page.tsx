import type { Metadata } from 'next';
import { IntegrationsHero } from '@/components/integrations/IntegrationsHero';
import { IntegrationsDirectory } from '@/components/integrations/IntegrationsDirectory';
import { IntegrationsHowItWorks } from '@/components/integrations/IntegrationsHowItWorks';
import { IntegrationsRequestBanner } from '@/components/integrations/IntegrationsRequestBanner';

export const metadata: Metadata = {
  title: 'Integrations & Lab Software Connectivity | DentalPulse',
  description:
    'Plugs into the systems your lab already runs. Seamless integration with lab management systems, accounting tools, and messaging channels.',
  alternates: {
    canonical: 'https://dentalpulse.com/integrations',
  },
  openGraph: {
    title: 'Integrations & Lab Software Connectivity | DentalPulse',
    description:
      'Plugs into the systems your lab already runs. Seamless integration with lab management systems, accounting tools, and messaging channels.',
    url: 'https://dentalpulse.com/integrations',
  },
};

export default function IntegrationsPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-white">
      <IntegrationsHero />
      <IntegrationsDirectory />
      <IntegrationsHowItWorks />
      <IntegrationsRequestBanner />
    </div>
  );
}
