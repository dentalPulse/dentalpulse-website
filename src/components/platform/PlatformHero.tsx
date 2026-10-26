import React from 'react';
import Link from 'next/link';

const PILLARS = [
  {
    num: '01',
    title: 'Complete customer intelligence',
    description: 'A 360° view of every account',
    href: '#c360',
  },
  {
    num: '02',
    title: 'Predictive insights',
    description: 'Spot risks and opportunities early',
    href: '#alerts',
  },
  {
    num: '03',
    title: 'Actionable recommendations',
    description: 'Know exactly what to do next',
    href: '#plan',
  },
  {
    num: '04',
    title: 'Automated workflows',
    description: 'Nurture every dentist, consistently',
    href: '#auto',
  },
];

export function PlatformHero() {
  return (
    <section className="w-full bg-white pt-20 md:pt-26 pb-16 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start lg:items-end justify-between">
          {/* Left Title Block */}
          <div className="flex-1 max-w-[760px]">
            <p className="m-0 mb-4 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
              THE PLATFORM
            </p>
            <h1 className="m-0 text-[38px] sm:text-[52px] lg:text-[66px] font-extrabold leading-[1.03] tracking-[-0.035em] text-[#0A0A0A]">
              Every customer signal in your lab, turned into a plan of action.
            </h1>
          </div>

          {/* Right Subtext & CTAs Block */}
          <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-5">
            <p className="m-0 text-[17px] sm:text-[18px] leading-[1.6] text-[#5C5C5C]">
              Dental Pulse unifies customer, case, sales and production data, then uses AI to tell sales, marketing and customer success what to do — and when.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#book-demo"
                className="inline-flex items-center justify-center bg-[#0A0A0A] text-white text-[15px] font-bold px-6 py-3.5 rounded-full hover:bg-[#1a1a1a] transition-colors shadow-sm"
              >
                Book a demo
              </Link>
              <Link
                href="/#results"
                className="inline-flex items-center justify-center border border-[#D6D6D6] text-[#0A0A0A] bg-white text-[15px] font-bold px-6 py-3.5 rounded-full hover:bg-black/5 transition-colors"
              >
                Calculate ROI
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars Quick Jump Bar */}
        <div className="mt-16 bg-[#E6E6E6] border border-[#E6E6E6] rounded-[20px] overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
          {PILLARS.map((pillar) => (
            <a
              key={pillar.num}
              href={pillar.href}
              className="bg-white p-7 text-[#0A0A0A] flex flex-col gap-2 hover:bg-[#FAFAFA] transition-colors group no-underline"
            >
              <span className="font-mono text-[12px] font-semibold text-[#067A47] tracking-[0.04em]">
                {pillar.num}
              </span>
              <b className="text-[17px] sm:text-[18px] font-bold tracking-[-0.01em] text-[#0A0A0A] group-hover:text-[#067A47] transition-colors leading-snug">
                {pillar.title}
              </b>
              <span className="text-[14px] sm:text-[15px] text-[#5C5C5C] leading-normal">
                {pillar.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
