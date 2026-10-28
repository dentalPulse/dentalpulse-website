import React from 'react';

export function ManagersCapabilitiesSection() {
  const capabilities = [
    {
      title: 'Team dashboards',
      description:
        'Compare reps and territories on the metrics that drive retention and growth.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Objectives & task management',
      description:
        'Turn goals into tasks that land on the right rep’s list automatically.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Automated playbooks',
      description:
        'Repeatable processes for onboarding, win-back and cross-selling that run consistently.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
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
