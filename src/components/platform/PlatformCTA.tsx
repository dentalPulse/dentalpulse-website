import React from 'react';
import Link from 'next/link';

export function PlatformCTA() {
  return (
    <section id="book-demo" className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[1240px] mx-auto bg-[#0A0A0A] rounded-[32px] p-8 sm:p-14 lg:p-20 text-white relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-2xl">
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

        {/* Left Column: Heading & Subtext */}
        <div className="relative z-10 max-w-[660px]">
          <span className="font-mono text-[12px] sm:text-[13px] font-bold text-[#12F095] tracking-[0.06em] uppercase block mb-3">
            GET STARTED TODAY
          </span>
          <h2 className="m-0 text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
            See your own lab’s data in Dental Pulse.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[#BDBDBD]">
            Book a 30-minute walkthrough with your real numbers, or start exploring how customer intelligence unifies your sales and operations.
          </p>
        </div>

        {/* Right Column: Conversion Action Buttons */}
        <div className="relative z-10 flex flex-wrap items-center gap-3.5">
          <a
            href="https://app.dentalpulseai.com"
            className="inline-flex items-center justify-center bg-[#12F095] text-[#0A0A0A] text-[15px] sm:text-[16px] font-extrabold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-[#00df83] transition-colors shadow-lg"
          >
            Book a demo
          </a>
          <Link
            href="/#book-demo"
            className="inline-flex items-center justify-center border border-[#3A3A3A] text-white text-[15px] sm:text-[16px] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-white/10 transition-colors"
          >
            Talk to a specialist
          </Link>
        </div>
      </div>
    </section>
  );
}
