export interface PlanData {
  id: string;
  name: string;
  badge?: string;
  description: string;
  priceMonthly: number | null;
  priceYearlyPerMonth: number | null;
  annualTotal: number | null;
  includedUsers: number | null;
  extraUserPriceMonthly: number;
  featuresHeader: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  isCustom?: boolean;
}

export const PRICING_PLANS: PlanData[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'The essential view of your customers and pipeline.',
    priceMonthly: 499,
    priceYearlyPerMonth: 416,
    annualTotal: 4990,
    includedUsers: 3,
    extraUserPriceMonthly: 25,
    featuresHeader: 'Includes:',
    features: [
      'CRM',
      'Dashboard & Analytics',
      'Customer Database',
      'Lead Management',
      'Task Management',
      'Website Tracking',
    ],
    ctaText: 'Choose Starter',
    isPopular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most popular',
    description: 'Reach every dentist with targeted, automated campaigns.',
    priceMonthly: 799,
    priceYearlyPerMonth: 666,
    annualTotal: 7990,
    includedUsers: 5,
    extraUserPriceMonthly: 25,
    featuresHeader: 'Everything in Starter, plus:',
    features: [
      'Email Marketing',
      'SMS Marketing',
      'WhatsApp Marketing',
      'Customer Segments',
      'Campaign Builder',
      'Marketing Automation',
    ],
    ctaText: 'Choose Growth',
    isPopular: true,
  },
  {
    id: 'growth-ai',
    name: 'Growth AI',
    description: 'Predictive intelligence that flags churn risk before it happens.',
    priceMonthly: 999,
    priceYearlyPerMonth: 833,
    annualTotal: 9990,
    includedUsers: 10,
    extraUserPriceMonthly: 25,
    featuresHeader: 'Everything in Growth, plus:',
    features: [
      'AI Insights',
      'Revenue Forecasting',
      'Churn Prediction',
      'AI Business Assistant',
      'API Access - Limited',
    ],
    ctaText: 'Choose Growth AI',
    isPopular: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Dedicated infrastructure, custom integrations, and SLA guarantees.',
    priceMonthly: null,
    priceYearlyPerMonth: null,
    annualTotal: null,
    includedUsers: null,
    extraUserPriceMonthly: 0,
    featuresHeader: 'Everything in Growth AI, plus:',
    features: [
      'Users Included - Unlimited',
      'API Access - Unlimited',
      'Dedicated Success Manager',
      'All Plans Included',
    ],
    ctaText: 'Talk to sales',
    isCustom: true,
    isPopular: false,
  },
];
