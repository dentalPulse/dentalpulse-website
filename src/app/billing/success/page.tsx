import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Payment received | DentalPulse',
  robots: 'noindex',
};

export default async function BillingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  // session_id is shown only as a reference number for support — it is
  // NEVER treated as proof of payment here. The Stripe webhook (verified
  // server-side, app/billing/router.py) is the only source of truth for
  // whether the subscription actually succeeded.
  const { session_id } = await searchParams;

  return (
    <main className="min-h-screen w-full flex flex-col bg-black">
      <Header />
      <section className="flex-1 w-full flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="max-w-[560px] w-full bg-white rounded-2xl p-8 md:p-12">
          <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-brand-primary/15 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C46A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-3">Your account is ready</h1>
          <p className="text-[15px] text-gray-500 mb-2">
            Log in at <span className="font-medium text-gray-700">app.dentalpulseai.com</span> with the email and
            password you just set. If you added setup assistance, our team will reach out separately to get that
            scheduled.
          </p>
          {session_id && (
            <p className="text-[12px] text-gray-400 mb-8">
              Reference: <span className="font-mono">{session_id}</span>
            </p>
          )}
          <a
            href="https://app.dentalpulseai.com"
            className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-brand-primary text-black font-medium hover:bg-[#00df83] transition-colors"
          >
            Go to login
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
