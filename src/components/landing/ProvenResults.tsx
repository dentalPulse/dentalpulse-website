import React from 'react';
import Link from 'next/link';

const STATS = [
  {
    value: '20%',
    metric: 'more sales',
    description: 'Reps who use Dental Pulse regularly outperform their peers.',
  },
  {
    value: '1–3 mo',
    metric: 'to ROI',
    description: 'Measurable results within months, not years.',
  },
  {
    value: '↑ CLV',
    metric: 'higher lifetime value',
    description: 'Stronger relationships mean every dentist is worth more over time.',
  },
];

export function ProvenResults() {
  return (
    <section id="results" className="w-full bg-white pb-24 px-6">
      <div className="max-w-[1240px] mx-auto bg-[#EEFDF5] border border-[#BDF5DA] rounded-[28px] p-8 sm:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
          {/* Left Column: Heading */}
          <div className="flex-1 max-w-[420px]">
            <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#06663C] tracking-[0.06em] uppercase">
              PROVEN RESULTS
            </p>
            <h2 className="m-0 text-[30px] sm:text-[38px] lg:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A]">
              Grow with Dental Pulse and see it in the numbers.
            </h2>
            <Link
              href="/roi"
              className="mt-6 inline-flex items-center gap-2 bg-[#067A47] hover:bg-[#06663C] text-white font-bold text-[15px] px-6 py-3 rounded-full transition-colors shadow-sm"
            >
              <span>Calculate your lab’s ROI</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Right Column: 3 Metric Cards */}
          <div className="flex-[2] w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <div key={stat.metric} className="flex flex-col">
                <div className="text-[48px] sm:text-[56px] font-extrabold tracking-[-0.04em] text-[#06663C] leading-none">
                  {stat.value}
                </div>
                <div className="text-[17px] font-bold text-[#0A0A0A] mt-2">
                  {stat.metric}
                </div>
                <p className="mt-1.5 text-[14px] sm:text-[15px] leading-[1.55] text-[#333333]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
