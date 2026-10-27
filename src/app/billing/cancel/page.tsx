import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Checkout Cancelled | DentalPulse',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BillingCancelPage() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center text-center px-6 py-24 bg-black">
      <div className="max-w-[560px] w-full bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-3">Checkout cancelled</h1>
        <p className="text-[15px] text-gray-500 mb-8">
          No payment was made. You can pick a plan again whenever you&apos;re ready.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-brand-primary text-black font-medium hover:bg-[#00df83] transition-colors"
        >
          Back to pricing
        </Link>
      </div>
    </div>
  );
}
