import React from 'react';

const METHOD_ITEMS = [
  {
    title: 'Revenue kept',
    formula: 'Accounts × fewer accounts lost (points) × yearly revenue per account.',
  },
  {
    title: 'Cross-sell revenue',
    formula: 'Accounts you keep × yearly revenue × cross-sell lift.',
  },
  {
    title: 'Acquisition cost avoided',
    formula: 'Dentists you no longer have to replace × your cost to win a new dentist.',
  },
];

export function RoiMethodology() {
  return (
    <section className="w-full bg-white pb-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="m-0 text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold text-[#0A0A0A] tracking-[-0.03em]">
          How we calculate it
        </h2>

        {/* 3 Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-8">
          {METHOD_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#E6E6E6] rounded-[18px] p-6 sm:p-7 flex flex-col justify-between hover:border-[#CCCCCC] transition-colors"
            >
              <b className="text-[17px] font-bold text-[#0A0A0A]">{item.title}</b>
              <p className="m-0 mt-2 text-[15px] leading-[1.6] text-[#5C5C5C]">
                {item.formula}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <p className="m-0 mt-6 text-[14px] leading-[1.6] text-[#7A7A7A] max-w-[820px]">
          Estimates are illustrative and based only on the numbers you enter. Actual results depend on your lab, team adoption and market.
        </p>
      </div>
    </section>
  );
}
