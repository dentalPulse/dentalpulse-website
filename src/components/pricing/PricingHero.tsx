import React from 'react';

interface PricingHeroProps {
  isYearly: boolean;
  onToggleYearly: (yearly: boolean) => void;
}

export function PricingHero({ isYearly, onToggleYearly }: PricingHeroProps) {
  return (
    <section className="w-full bg-white pt-12 sm:pt-20 pb-10 sm:pb-14 px-4 sm:px-6 text-center">
      <div className="max-w-[820px] mx-auto flex flex-col items-center gap-3.5 sm:gap-5">
        <p className="m-0 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
          PRICING
        </p>
        <h1 className="m-0 text-[32px] xs:text-[38px] sm:text-[50px] lg:text-[64px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]">
          Pricing that grows with your lab.
        </h1>
        <p className="m-0 text-[15px] sm:text-[18px] leading-[1.6] text-[#5C5C5C] max-w-[640px]">
          Four plans, one platform. Start with the visibility your team needs today, then add depth as you grow to more locations, more reps and more dentists to keep close.
        </p>

        {/* Interactive Billing Cadence Switcher */}
        <div
          role="group"
          aria-label="Billing cadence"
          className="inline-flex items-center gap-1 p-1 rounded-full bg-[#EFEFEF] border border-[#E6E6E6] mt-2 sm:mt-4 text-[13px] sm:text-[15px] font-bold select-none"
        >
          {/* Monthly Button */}
          <button
            type="button"
            onClick={() => onToggleYearly(false)}
            aria-pressed={!isYearly}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all cursor-pointer min-h-[40px] sm:min-h-[44px] ${
              !isYearly
                ? 'bg-[#0A0A0A] text-white shadow-xs'
                : 'text-[#0A0A0A] hover:bg-black/5'
            }`}
          >
            Monthly
          </button>

          {/* Yearly Button with 2 Months Free Badge */}
          <button
            type="button"
            onClick={() => onToggleYearly(true)}
            aria-pressed={isYearly}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all cursor-pointer min-h-[40px] sm:min-h-[44px] inline-flex items-center ${
              isYearly
                ? 'bg-[#0A0A0A] text-white shadow-xs'
                : 'text-[#0A0A0A] hover:bg-black/5'
            }`}
          >
            <span>Yearly</span>
            <span className="text-[10px] sm:text-[12px] font-extrabold text-[#06663C] bg-[#BDF5DA] px-2 py-0.5 rounded-full ml-1 sm:ml-1.5 shrink-0">
              2 months free
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
