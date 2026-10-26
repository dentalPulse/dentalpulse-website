import React from 'react';

export function SalesRepsCapabilitiesSection() {
  const capabilities = [
    {
      title: 'Game plan AI coach',
      description:
        'A recommended sequence of actions for each account to maximise results.',
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
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: 'Real-time alerts',
      description:
        'Get notified the moment one of your accounts shows risk or opportunity.',
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
          <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
    },
    {
      title: 'One-tap outreach',
      description:
        'Send a WhatsApp, SMS or email straight from the account card, logged automatically.',
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
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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
