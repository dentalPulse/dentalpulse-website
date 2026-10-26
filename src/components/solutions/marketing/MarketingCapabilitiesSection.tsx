import React from 'react';

export function MarketingCapabilitiesSection() {
  const capabilities = [
    {
      title: 'Customer segments',
      description:
        'Slice by case mix, volume trend, health score, territory and more — segments update themselves.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Campaign builder',
      description:
        'Multi-step campaigns across email, SMS and WhatsApp from one builder.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      ),
    },
    {
      title: 'Revenue attribution',
      description:
        'See which campaigns drove new cases, reactivations and cross-sells.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 7l-8.5 8.5-5-5L2 17" />
          <path d="M16 7h6v6" />
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
