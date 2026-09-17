import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/landing/Hero';
import { ProductPreview } from '@/components/landing/ProductPreview';
import { AIPowered } from '@/components/landing/AIPowered';
import { Features } from '@/components/landing/Features';
import { ProvenResults } from '@/components/landing/ProvenResults';
import { Pricing } from '@/components/landing/Pricing';
import { ValueProposition } from '@/components/landing/ValueProposition';
import { Testimonials } from '@/components/landing/Testimonials';
import { BottomCTA } from '@/components/landing/BottomCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Header />
      <Hero />
      <ProductPreview />
      <AIPowered />
      <Features />
      <ProvenResults />
      <Pricing />
      <ValueProposition />
      <Testimonials />
      <BottomCTA />
      <Footer />
    </main>
  );
}
