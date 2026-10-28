import React from 'react';

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Lost a dentist and didn’t notice until it was too late?',
    description: 'Declining case volume rarely announces itself. It shows up as a slow fade.',
  },
  {
    num: '02',
    title: 'Spending hours pulling numbers out of your lab software?',
    description: 'Exports, pivots and copy-paste eat the time your team should spend with customers.',
  },
  {
    num: '03',
    title: 'Leaving revenue on the table with single-category accounts?',
    description: 'A dentist who sends you crowns may be sending implants and dentures to someone else.',
  },
];

export function ProblemSection() {
  return (
    <section className="w-full bg-white py-20 md:py-24 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative Headline */}
        <div className="flex-1 max-w-[540px]">
          <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            THE PROBLEM
          </p>
          <h2 className="m-0 text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0A0A0A]">
            Stop managing your lab in the dark.
          </h2>
          <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-[#5C5C5C]">
            Most labs run on monthly reports, gut feel and scattered spreadsheets. By the time a drop shows up in the numbers, the dentist has already moved their cases elsewhere.
          </p>
        </div>

        {/* Right Column: Numbered Pain-Point Cards */}
        <div className="flex-1 w-full flex flex-col gap-4">
          {PAIN_POINTS.map((item) => (
            <div
              key={item.num}
              className="flex gap-4 sm:gap-5 items-start bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[18px] p-5 sm:p-6 transition-colors shadow-sm"
            >
              <span className="shrink-0 font-mono text-[14px] font-semibold text-white bg-[#0A0A0A] rounded-[10px] px-2.5 py-1.5 leading-none">
                {item.num}
              </span>
              <div>
                <h3 className="m-0 text-[18px] sm:text-[19px] font-bold tracking-[-0.01em] text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[15px] sm:text-[16px] leading-[1.6] text-[#5C5C5C]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
