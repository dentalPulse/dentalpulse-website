import type { Metadata } from 'next';
import { Hero } from '@/components/landing/Hero';
import { ProductPreview } from '@/components/landing/ProductPreview';
import { PartnerLogos } from '@/components/landing/PartnerLogos';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { OutcomesSection } from '@/components/landing/OutcomesSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { FeaturesBento } from '@/components/landing/FeaturesBento';
import { ProvenResults } from '@/components/landing/ProvenResults';
import { RolesSection } from '@/components/landing/RolesSection';
import { Testimonials } from '@/components/landing/Testimonials';
import { BottomCTA } from '@/components/landing/BottomCTA';

export const metadata: Metadata = {
  title: 'DentalPulse | See clearly. Grow smarter.',
  description:
    'Turn everyday lab data into smarter actions and sustainable growth. AI-powered customer intelligence and automated retention playbooks for dental labs.',
  alternates: {
    canonical: 'https://dentalpulse.com',
  },
};

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-white">
      <Hero />
      <ProductPreview />
      <PartnerLogos />
      <ProblemSection />
      <OutcomesSection />
      <HowItWorks />
      <FeaturesBento />
      <ProvenResults />
      <RolesSection />
      <Testimonials />
      <BottomCTA />
    </div>
  );
}
