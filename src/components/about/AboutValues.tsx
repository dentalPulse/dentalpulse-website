import React from 'react';

interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Relationships are the business',
    description:
      'A lab’s value lives in its dentist relationships. Our job is to help protect and grow them.',
  },
  {
    number: '02',
    title: 'Insight must lead to action',
    description:
      'A dashboard alone changes nothing. Every insight should come with a clear, prioritized next step.',
  },
  {
    number: '03',
    title: 'Built for labs, not adapted',
    description:
      'Cases, remakes, turnaround and product categories are first-class — not custom fields hacked into a generic CRM.',
  },
  {
    number: '04',
    title: 'Your data stays yours',
    description:
      'We protect laboratory customer data with enterprise-grade isolation, just as carefully as you protect patient work.',
  },
];

export function AboutValues() {
  return (
    <section className="w-full pb-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] m-0">
          What we believe
        </h2>

        {/* 4-Card Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {VALUES.map((val) => (
            <div
              key={val.number}
              className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[20px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group"
            >
              <div>
                <span className="font-mono text-[13px] font-semibold text-[#067A47] tracking-wider block">
                  {val.number}
                </span>
                <b className="block text-[19px] sm:text-[20px] font-bold text-[#0A0A0A] mt-3.5 leading-snug group-hover:text-[#067A47] transition-colors">
                  {val.title}
                </b>
              </div>
              <p className="text-[15px] text-[#5C5C5C] leading-[1.6] mt-3 m-0">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
