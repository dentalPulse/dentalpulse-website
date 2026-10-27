import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CustomersPageContent } from '@/components/customers/CustomersPageContent';

export const metadata: Metadata = {
  title: 'Customers & Case Studies | DentalPulse',
  description:
    'See how dental laboratories use DentalPulse to prevent doctor churn, grow high-margin case volume, and automate lab sales workflows.',
  openGraph: {
    title: 'Customers & Case Studies | DentalPulse',
    description:
      'See how dental laboratories use DentalPulse to prevent doctor churn, grow high-margin case volume, and automate lab sales workflows.',
    url: 'https://dentalpulse.com/customers',
  },
};

export default function CustomersPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <CustomersPageContent />
      <Footer />
    </main>
  );
}
