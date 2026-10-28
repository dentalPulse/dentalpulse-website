import React from 'react';

export function ExecutiveCapabilitiesSection() {
  const capabilities = [
    {
      title: 'One source of truth',
      description:
        'Sales, retention, remakes and turnaround in one dashboard everyone trusts — no more conflicting spreadsheets.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      ),
    },
    {
      title: 'Forecasts you can plan on',
      description:
        'Revenue forecasting and churn prediction help you staff, budget and invest with confidence.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 4 5-5" />
        </svg>
      ),
    },
    {
      title: 'Growth without more headcount',
      description:
        'Keep more of the customers you have and grow them — cheaper than buying new ones.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 1v22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-24 md:py-28 px-6">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {capabilities.map((item) => (
          <div key={item.title} className="flex flex-col">
            <span
              className="w-12 h-12 rounded-[14px] bg-[#161616] text-[#12F095] border border-[#262626] inline-flex items-center justify-center shrink-0 shadow-xs"
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <h3 className="m-0 mt-5 mb-2.5 text-[22px] font-extrabold text-white tracking-tight">
              {item.title}
            </h3>
            <p className="m-0 text-[15px] sm:text-[16px] leading-[1.65] text-[#BDBDBD]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
