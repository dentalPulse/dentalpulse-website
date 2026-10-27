import type { Metadata } from 'next';
import { CustomersPageContent } from '@/components/customers/CustomersPageContent';

export const metadata: Metadata = {
  title: 'Customers & Case Studies | DentalPulse',
  description:
    'See how dental laboratories use DentalPulse to prevent doctor churn, grow high-margin case volume, and automate lab sales workflows.',
  alternates: {
    canonical: 'https://dentalpulse.com/customers',
  },
  openGraph: {
    title: 'Customers & Case Studies | DentalPulse',
    description:
      'See how dental laboratories use DentalPulse to prevent doctor churn, grow high-margin case volume, and automate lab sales workflows.',
    url: 'https://dentalpulse.com/customers',
  },
};

export default function CustomersPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-white">
      <CustomersPageContent />
    </div>
  );
}
