import React from 'react';
import Link from 'next/link';

export function MarketingCTA() {
  return (
    <section id="book-demo" className="w-full bg-white pb-24 sm:pb-28 px-6">
      <div className="max-w-[1240px] mx-auto bg-[#0A0A0A] rounded-[32px] p-8 sm:p-14 lg:p-18 text-white relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 shadow-2xl">
        {/* Neon Green Pulse Watermark SVG */}
        <svg
          viewBox="0 0 600 200"
          className="absolute -right-10 -bottom-5 w-[560px] sm:w-[640px] opacity-35 pointer-events-none"
          aria-hidden="true"
        >
          <path
            d="M0 120h160l30-70 40 130 30-60h340"
            fill="none"
            stroke="#12F095"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Left Column: Headline */}
        <div className="relative z-10 max-w-[620px]">
          <h2 className="m-0 text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.06] tracking-[-0.035em] text-white">
            Turn customer data into campaigns that convert.
          </h2>
        </div>

        {/* Right Column: CTA Button */}
        <div className="relative z-10 shrink-0">
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center bg-[#12F095] text-[#0A0A0A] font-extrabold text-[15px] sm:text-[16px] px-8 py-4 rounded-full hover:bg-[#00df83] transition-colors shadow-lg"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
