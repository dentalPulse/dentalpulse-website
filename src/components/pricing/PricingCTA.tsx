import React from 'react';
import Link from 'next/link';

export function PricingCTA() {
  return (
    <section className="w-full bg-[#FAFAFA] pb-24 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto bg-[#0A0A0A] text-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
        {/* Decorative Neon Pulse Glow & Wave Background */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full bg-[#12F095]/10 blur-[100px] pointer-events-none"
        />

        <svg
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-full text-[#12F095]/10 pointer-events-none hidden md:block"
          viewBox="0 0 600 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120H180L210 50L240 190L270 80L300 160L330 120H600"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Content Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-[620px]">
            <p className="font-mono text-[13px] font-semibold text-[#12F095] tracking-[0.06em] uppercase mb-2">
              FIND YOUR FIT
            </p>
            <h2 className="text-[30px] sm:text-[38px] lg:text-[46px] font-extrabold tracking-[-0.035em] leading-[1.08] text-white">
              Not sure which plan fits?
            </h2>
            <p className="mt-3 text-[16px] sm:text-[18px] text-[#A3A3A3] leading-[1.6]">
              We’ll recommend the exact setup based on your lab team size, active accounts, and growth goals.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/#book-demo"
              className="inline-flex items-center justify-center bg-[#12F095] text-[#0A0A0A] font-extrabold text-[15px] sm:text-[16px] px-8 py-4 rounded-full hover:bg-[#00DF83] transition-all shadow-[0_4px_16px_rgba(18,240,149,0.3)] active:scale-[0.99] select-none"
            >
              Book a demo
            </Link>
            <Link
              href="/#results"
              className="inline-flex items-center justify-center border border-[#3A3A3A] bg-transparent text-white font-bold text-[15px] sm:text-[16px] px-8 py-4 rounded-full hover:bg-white/10 transition-all active:scale-[0.99] select-none"
            >
              Calculate ROI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
