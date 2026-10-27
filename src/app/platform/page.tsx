import type { Metadata } from 'next';
import { PlatformHero } from '@/components/platform/PlatformHero';
import { Customer360Section } from '@/components/platform/Customer360Section';
import { PredictiveInsightsSection } from '@/components/platform/PredictiveInsightsSection';
import { GamePlanSection } from '@/components/platform/GamePlanSection';
import { WorkflowsSection } from '@/components/platform/WorkflowsSection';
import { ArchitecturePipelineSection } from '@/components/platform/ArchitecturePipelineSection';
import { SecuritySection } from '@/components/platform/SecuritySection';
import { PlatformCTA } from '@/components/platform/PlatformCTA';

export const metadata: Metadata = {
  title: 'Platform & Architecture | DentalPulse',
  description:
    'Complete customer intelligence, predictive insights, and automated workflows built specifically for dental laboratories.',
  alternates: {
    canonical: 'https://dentalpulse.com/platform',
  },
  openGraph: {
    title: 'Platform & Architecture | DentalPulse',
    description:
      'Complete customer intelligence, predictive insights, and automated workflows built specifically for dental laboratories.',
    url: 'https://dentalpulse.com/platform',
  },
};

export default function PlatformPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-white">
      <PlatformHero />
      <Customer360Section />
      <PredictiveInsightsSection />
      <GamePlanSection />
      <WorkflowsSection />
      <ArchitecturePipelineSection />
      <SecuritySection />
      <PlatformCTA />
    </div>
  );
}
