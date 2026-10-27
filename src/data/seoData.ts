import { PRICING_PLANS } from './pricingData';
import { SOCIAL_LINKS, COMPANY_CONTACT } from './navigationData';

export const BASE_URL = 'https://dentalpulse.com';

/**
 * Organization Schema (Schema.org/Organization)
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DentalPulse',
  url: BASE_URL,
  logo: `${BASE_URL}/dental_pulse.png`,
  description: 'AI-powered customer intelligence and growth platform for dental laboratories.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_CONTACT.addressLine1,
    addressLocality: 'Dover',
    addressRegion: 'DE',
    postalCode: '19901',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: COMPANY_CONTACT.email,
    contactType: 'customer support',
  },
  sameAs: SOCIAL_LINKS.map((s) => s.href),
};

/**
 * WebSite Schema (Schema.org/WebSite)
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DentalPulse',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/resources?query={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

/**
 * SoftwareApplication Schema (Schema.org/SoftwareApplication)
 */
export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DentalPulse',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All (Web-based SaaS)',
  offers: PRICING_PLANS.filter((p) => p.priceMonthly !== null).map((p) => ({
    '@type': 'Offer',
    name: p.name,
    price: p.priceMonthly,
    priceCurrency: 'USD',
    billingDuration: 'P1M',
    description: p.description,
  })),
};

/**
 * FAQ Schema Generator (Schema.org/FAQPage)
 */
export function generateFaqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
