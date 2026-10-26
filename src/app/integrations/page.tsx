import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { IntegrationsHero } from '@/components/integrations/IntegrationsHero';
import { IntegrationsDirectory } from '@/components/integrations/IntegrationsDirectory';
import { IntegrationsHowItWorks } from '@/components/integrations/IntegrationsHowItWorks';
import { IntegrationsRequestBanner } from '@/components/integrations/IntegrationsRequestBanner';

export const metadata: Metadata = {
  title: 'Integrations | DentalPulse',
  description:
    'Plugs into the systems your lab already runs. Seamless integration with lab management systems, accounting tools, and messaging channels.',
  openGraph: {
    title: 'Integrations | DentalPulse',
    description:
      'Plugs into the systems your lab already runs. Seamless integration with lab management systems, accounting tools, and messaging channels.',
    url: 'https://dentalpulse.com/integrations',
  },
};

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <div className="flex-1 w-full flex flex-col">
        <IntegrationsHero />
        <IntegrationsDirectory />
        <IntegrationsHowItWorks />
        <IntegrationsRequestBanner />
      </div>
      <Footer />
    </main>
  );
}
