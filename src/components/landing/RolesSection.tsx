import React from 'react';

const ROLES = [
  {
    role: 'OWNERS & C-SUITE',
    headline: 'See the health of your whole lab on one screen.',
  },
  {
    role: 'MANAGERS',
    headline: 'Coach your team with numbers that matter.',
  },
  {
    role: 'SALES REPS',
    headline: 'Walk into every practice knowing what to say.',
  },
  {
    role: 'MARKETING',
    headline: 'Reach the right dentist at the right time.',
  },
];

export function RolesSection() {
  return (
    <section id="solutions" className="w-full bg-white pb-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <div className="max-w-[760px]">
          <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            BUILT FOR YOUR WHOLE TEAM
          </p>
          <h2 className="m-0 text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0A0A0A]">
            Everyone who keeps your lab growing.
          </h2>
        </div>

        {/* 4 Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {ROLES.map((item) => (
            <a
              key={item.role}
              href="#pricing"
              className="group bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] hover:shadow-md rounded-[20px] p-7 flex flex-col justify-between gap-3 min-h-[210px] transition-all no-underline"
            >
              <div>
                <span className="font-mono text-[12px] font-semibold text-[#067A47] tracking-[0.04em]">
                  {item.role}
                </span>
                <h3 className="mt-2.5 text-[19px] sm:text-[20px] font-extrabold tracking-[-0.02em] text-[#0A0A0A] group-hover:text-[#067A47] transition-colors leading-snug">
                  {item.headline}
                </h3>
              </div>

              <span className="mt-auto pt-3 font-sans font-bold text-[14px] text-[#067A47] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                <span>Learn more</span>
                <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
