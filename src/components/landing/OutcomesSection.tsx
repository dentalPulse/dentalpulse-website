import React from 'react';

const OUTCOMES = [
  {
    title: 'Increase retention',
    description:
      'Early-warning alerts fire when a dentist’s case volume, order frequency or remake rate shifts — giving your team weeks, not days, to step in.',
    tags: 'Churn prediction • Risk alerts • Health scores',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Grow lifetime value',
    description:
      'See exactly which product categories each account isn’t buying from you, and get a game plan to win that share of wallet.',
    tags: 'Category gaps • Game plans • Forecasting',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 7l-8.5 8.5-5-5L2 17" />
        <path d="M16 7h6v6" />
      </svg>
    ),
  },
  {
    title: 'Lower acquisition cost',
    description:
      'Every dentist you keep is one you don’t have to replace. And when you do prospect, target practices that look like your best accounts.',
    tags: 'Segments • Lead management • Website tracking',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

export function OutcomesSection() {
  return (
    <section className="w-full bg-white pb-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <div className="max-w-[760px]">
          <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            WHAT CHANGES
          </p>
          <h2 className="m-0 text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0A0A0A]">
            Data visibility that pays for itself three ways.
          </h2>
        </div>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {OUTCOMES.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-7 sm:p-8 flex flex-col gap-4 transition-all shadow-sm hover:shadow-md"
            >
              {/* Icon Circle */}
              <span className="w-12 h-12 rounded-[14px] bg-[#E3FCEF] text-[#067A47] inline-flex items-center justify-center shrink-0">
                {item.icon}
              </span>

              {/* Title & Description */}
              <h3 className="m-0 text-[22px] sm:text-[24px] font-extrabold tracking-[-0.02em] text-[#0A0A0A]">
                {item.title}
              </h3>
              <p className="m-0 text-[15px] sm:text-[16px] leading-[1.65] text-[#5C5C5C]">
                {item.description}
              </p>

              {/* Bottom Feature Tags */}
              <div className="mt-auto pt-4 border-t border-[#EFEFEF] text-[13px] sm:text-[14px] font-semibold text-[#0A0A0A]">
                {item.tags}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
