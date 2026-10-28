import React from 'react';

export function CareersHero() {
  return (
    <section className="w-full pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 px-6 text-center">
      <div className="max-w-[900px] mx-auto flex flex-col items-center gap-5 sm:gap-6">
        {/* Monospace Kicker */}
        <span className="font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
          CAREERS
        </span>

        {/* Main Headline */}
        <h1 className="text-[40px] sm:text-[54px] lg:text-[72px] font-extrabold leading-[1.03] tracking-[-0.04em] text-[#0A0A0A] m-0 max-w-[820px]">
          Help an entire industry see clearly.
        </h1>

        {/* Subtitle */}
        <p className="text-[18px] sm:text-[19px] leading-[1.6] text-[#5C5C5C] max-w-[640px] m-0">
          We’re a small team building the intelligence layer for dental laboratories. If you like hard problems, real customers and work you can point to, you’ll fit right in.
        </p>

        {/* Scroll CTA Button */}
        <a
          href="#roles"
          className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#222222] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all duration-200 mt-2 hover:scale-[1.02] shadow-sm active:scale-[0.98]"
        >
          <span>See open roles</span>
          <span className="font-mono text-[14px]">↓</span>
        </a>
      </div>
    </section>
  );
}
