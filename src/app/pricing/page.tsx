import type { Metadata } from 'next';
import { PricingPageContent } from '@/components/pricing/PricingPageContent';
import { softwareAppSchema, generateFaqSchema } from '@/data/seoData';

const PRICING_FAQS = [
  {
    question: 'What counts as a user?',
    answer:
      'Anyone on your team who logs in to Dental Pulse — owners, managers, reps, or marketers. Each plan includes a set number of users (3 on Starter, 5 on Growth, 10 on Growth AI, Unlimited on Enterprise). You can add additional users anytime at $25 per user per month.',
  },
  {
    question: 'Is there a discount for paying yearly?',
    answer:
      'Yes! Yearly billing gives you two full months free on any plan. You effectively pay for 10 months and receive 12 months of complete, uninterrupted access to Dental Pulse.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most labs are fully connected within 48 to 72 hours. Our dedicated onboarding team handles the data import and historical sync directly from your lab management system so your team can hit the ground running with zero IT headaches.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Yes — you can upgrade or adjust your plan anytime as your lab grows. Upgrades take effect immediately with prorated billing, and you can switch between monthly and annual plans at your subscription renewal.',
  },
  {
    question: 'Do you integrate with my lab management software?',
    answer:
      'Most likely. We integrate natively with Magic Touch, Labstar, Evident, 3Shape, and provide an Open API for custom or proprietary systems.',
  },
];

export const metadata: Metadata = {
  title: 'Pricing | Transparent Plans for Dental Labs',
  description:
    'Pricing that grows with your lab. Transparent plans for dental laboratory customer intelligence, marketing automation, and AI predictive insights.',
  alternates: {
    canonical: 'https://dentalpulse.com/pricing',
  },
  openGraph: {
    title: 'Pricing | Transparent Plans for Dental Labs',
    description:
      'Pricing that grows with your lab. Transparent plans for dental laboratory customer intelligence, marketing automation, and AI predictive insights.',
    url: 'https://dentalpulse.com/pricing',
  },
};

export default function PricingPage() {
  const faqSchema = generateFaqSchema(PRICING_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-full flex-1 flex flex-col bg-white">
        <PricingPageContent />
      </div>
    </>
  );
}
