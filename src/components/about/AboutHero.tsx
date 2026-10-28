import React from 'react';

export function AboutHero() {
  return (
    <section className="w-full pt-20 sm:pt-24 pb-16 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Eyebrow Kicker */}
        <p className="font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase mb-4">
          ABOUT DENTAL PULSE
        </p>

        {/* Main Headline */}
        <h1 className="text-[40px] sm:text-[56px] lg:text-[74px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#0A0A0A] max-w-[1020px] m-0">
          Every dental lab deserves to see its business as clearly as it sees a case.
        </h1>

        {/* 2-Column Split Narrative */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-14 mt-12 sm:mt-14">
          <p className="flex-1 text-[18px] sm:text-[19px] leading-[1.65] text-[#5C5C5C] m-0">
            Labs produce extraordinary, precise work every day. Yet most still run the business side on spreadsheets, month-end reports and gut feel — and only learn a dentist has left when the cases stop coming.
          </p>
          <p className="flex-1 text-[18px] sm:text-[19px] leading-[1.65] text-[#5C5C5C] m-0">
            We built Dental Pulse to change that: one intelligent platform that turns everyday lab data into clear, timely actions, so labs can keep the customers they’ve earned and grow sustainably.
          </p>
        </div>
      </div>
    </section>
  );
}
