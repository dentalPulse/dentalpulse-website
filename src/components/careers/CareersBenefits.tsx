import React from 'react';

interface BenefitItem {
  id: string;
  category: string;
  title: string;
  description: string;
  iconSvg: React.ReactNode;
}

const BENEFITS: BenefitItem[] = [
  {
    id: 'remote-work',
    category: 'FLEXIBILITY',
    title: 'Remote-first culture',
    description:
      'Work from anywhere in North America or Europe with flexible core hours and a dedicated home office setup stipend.',
    iconSvg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'health-coverage',
    category: 'WELLNESS',
    title: 'Comprehensive health coverage',
    description:
      '100% employer-covered premium medical, dental, and vision insurance for you and your eligible dependents.',
    iconSvg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'paid-time-off',
    category: 'BALANCE',
    title: 'Unlimited paid time off',
    description:
      'Flexible vacation policy with a recommended 4-week annual minimum, plus company-wide recharge wellness days.',
    iconSvg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'learning-budget',
    category: 'GROWTH',
    title: '$2,500 learning budget',
    description:
      'Annual stipend for technical courses, workshops, executive coaching, books, and industry conference registrations.',
    iconSvg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: 'equipment',
    category: 'HARDWARE',
    title: 'Top-tier workstation & gear',
    description:
      'Choice of brand new Apple M3 Max MacBook Pro or high-spec Linux workstation, 4K display, and ergonomic gear.',
    iconSvg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'team-offsites',
    category: 'RETREATS',
    title: 'Twice-yearly team offsites',
    description:
      'In-person company retreats in world-class destinations to align on vision, hack together, and celebrate wins.',
    iconSvg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function CareersBenefits() {
  return (
    <section className="w-full pb-24 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Narrative */}
        <div className="lg:w-[380px] shrink-0">
          <span className="font-mono text-[12px] font-semibold text-[#067A47] tracking-wider uppercase block mb-2">
            HOW WE INVEST IN YOU
          </span>
          <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] m-0">
            Benefits &amp; perks
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] text-[#5C5C5C] leading-[1.6] m-0">
            We take care of our team with benefits designed for deep focus, long-term health, and sustainable high performance.
          </p>

          {/* Quick Pillars Chip */}
          <div className="mt-7 pt-6 border-t border-[#E6E6E6] flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5F5] border border-[#E6E6E6] text-[12px] font-semibold text-[#0A0A0A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12F095]" />
              100% Remote-first
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5F5] border border-[#E6E6E6] text-[12px] font-semibold text-[#0A0A0A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12F095]" />
              Zero Bureaucracy
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5F5] border border-[#E6E6E6] text-[12px] font-semibold text-[#0A0A0A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12F095]" />
              High Ownership
            </span>
          </div>
        </div>

        {/* Right Column: 6-Card Benefits Grid */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {BENEFITS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E6E6E6] hover:border-[#12F095] rounded-[18px] p-5 sm:p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[#067A47] mb-2.5">
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase">
                    {item.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#F5F5F5] group-hover:bg-[#12F095]/15 flex items-center justify-center transition-colors">
                    {item.iconSvg}
                  </div>
                </div>

                <b className="block text-[17px] sm:text-[18px] font-bold text-[#0A0A0A] group-hover:text-[#067A47] transition-colors leading-snug">
                  {item.title}
                </b>
              </div>

              <p className="text-[14px] text-[#5C5C5C] leading-[1.55] mt-3 m-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
