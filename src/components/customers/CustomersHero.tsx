import React from 'react';

export function CustomersHero() {
  return (
    <section className="pt-20 sm:pt-24 pb-14 px-6 text-center">
      <div className="max-w-[860px] mx-auto flex flex-col items-center gap-4">
        {/* Eyebrow Kicker */}
        <p className="font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
          CUSTOMER STORIES
        </p>

        {/* Main Heading */}
        <h1 className="text-[40px] sm:text-[54px] lg:text-[66px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]">
          Labs that stopped flying blind.
        </h1>

        {/* Value Proposition Description */}
        <p className="text-[17px] sm:text-[18px] text-[#5C5C5C] max-w-[620px] leading-[1.6]">
          Hear from owners, managers and reps who use Dental Pulse to keep more dentists and grow every account.
        </p>
      </div>
    </section>
  );
}
