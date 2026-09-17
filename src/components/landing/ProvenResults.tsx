import React from 'react';
import Image from 'next/image';

const stats = [
  {
    value: '20% more sales',
    description: 'Reps who use dental pulse regularly outperform their peers by achieving 20% higher sales',
  },
  {
    value: '1-3 months to ROI',
    description: 'See measurable results with in months, not years',
  },
  {
    value: 'Increased CLV',
    description: 'See measurable results with in months, not years',
  }
];

export function ProvenResults() {
  return (
    <section className="relative w-full bg-brand-dark py-16 md:py-32 px-6 flex flex-col items-center overflow-hidden">

      {/* Left Icon */}
      <div className="hidden md:block absolute left-[5%] lg:left-[12%] top-[45%] -translate-y-1/2 w-20 h-20 opacity-90">
        <Image src="/dollar_icon.png" alt="Dollar" fill sizes="80px" className="object-contain" />
      </div>

      {/* Right Icon */}
      <div className="hidden md:block absolute right-[5%] lg:right-[15%] top-[10%] -translate-y-1/2 w-20 h-20 opacity-90">
        <Image src="/dollar_icon.png" alt="Dollar" fill sizes="80px" className="object-contain" />
      </div>

      <div className="max-w-[1200px] w-full flex flex-col items-center text-center relative z-10">
        <p className="text-brand-primary text-[18px] font-medium mb-4">
          Our numbers
        </p>
        <h2 className="text-brand-primary text-[48px] md:text-[64px] font-bold leading-tight mb-6">
          Proven Results
        </h2>
        <p className="text-white text-[20px] md:text-[24px] mb-24 max-w-[700px]">
          Grow with <span className="font-bold">dental pulse</span> and see measurable results.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1000px]">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <h3 className="text-brand-primary text-[24px] md:text-[28px] font-bold mb-4">
                {stat.value}
              </h3>
              <p className="text-white text-[16px] leading-relaxed max-w-[260px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
