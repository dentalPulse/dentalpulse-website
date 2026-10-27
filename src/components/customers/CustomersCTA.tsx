import React from 'react';
import Link from 'next/link';

export function CustomersCTA() {
  return (
    <section className="w-full pb-28 px-6">
      <div className="max-w-[1240px] mx-auto bg-[#0A0A0A] border border-[#222222] rounded-[32px] p-8 sm:p-14 lg:p-20 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden shadow-2xl">
        {/* Subtle Ambient Glow */}
        <div
          className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#12F095]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-3 max-w-[640px] relative z-10">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.06] tracking-[-0.035em] text-white m-0">
            Write your lab’s growth story next.
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#BDBDBD] leading-[1.6] m-0 mt-1">
            See how DentalPulse can help your dental lab catch at-risk accounts, uncover high-margin cross-sell revenue, and automate sales reporting in 30 days.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 relative z-10 shrink-0">
          <Link
            href="/book-demo"
            className="bg-[#12F095] hover:bg-[#00df83] text-[#0A0A0A] font-extrabold text-[16px] px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-md inline-flex items-center gap-2"
          >
            <span>Book a demo</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/roi"
            className="border border-[#3A3A3A] bg-transparent text-white font-bold text-[16px] px-7 py-4 rounded-full hover:bg-white/10 transition-all inline-flex items-center"
          >
            Calculate ROI
          </Link>
        </div>
      </div>
    </section>
  );
}
