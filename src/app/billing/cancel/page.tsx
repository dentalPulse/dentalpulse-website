import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Checkout cancelled | DentalPulse',
  robots: 'noindex',
};

export default function BillingCancelPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-black">
      <Header />
      <section className="flex-1 w-full flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="max-w-[560px] w-full bg-white rounded-2xl p-8 md:p-12">
          <h1 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-3">Checkout cancelled</h1>
          <p className="text-[15px] text-gray-500 mb-8">
            No payment was made. You can pick a plan again whenever you&apos;re ready.
          </p>
          <Link
            href="/#pricing"
            className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-brand-primary text-black font-medium hover:bg-[#00df83] transition-colors"
          >
            Back to pricing
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
