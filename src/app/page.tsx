import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/landing/Hero';
import { ProductPreview } from '@/components/landing/ProductPreview';
import { PartnerLogos } from '@/components/landing/PartnerLogos';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { OutcomesSection } from '@/components/landing/OutcomesSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { FeaturesBento } from '@/components/landing/FeaturesBento';
import { ProvenResults } from '@/components/landing/ProvenResults';
import { RolesSection } from '@/components/landing/RolesSection';
import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { BottomCTA } from '@/components/landing/BottomCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <Hero />
      <ProductPreview />
      <PartnerLogos />
      <ProblemSection />
      <OutcomesSection />
      <HowItWorks />
      <FeaturesBento />
      <ProvenResults />
      <RolesSection />
      <Pricing />
      <Testimonials />
      <BottomCTA />
      <Footer />
    </main>
  );
}
