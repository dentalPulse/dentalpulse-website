import React from 'react';

export function RoiHero() {
  return (
    <section className="w-full bg-white pt-20 sm:pt-24 pb-12 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start lg:items-end">
        <div className="max-w-[760px]">
          <p className="m-0 mb-4 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            ROI CALCULATOR
          </p>
          <h1 className="m-0 text-[38px] sm:text-[48px] lg:text-[64px] font-extrabold text-[#0A0A0A] leading-[1.04] tracking-[-0.035em]">
            What is one lost dentist really costing you?
          </h1>
        </div>
        <p className="m-0 max-w-[420px] text-[17px] sm:text-[18px] leading-[1.6] text-[#5C5C5C]">
          Plug in your own numbers to see what better retention, cross-selling and lower acquisition cost could add up to for your lab.
        </p>
      </div>
    </section>
  );
}
