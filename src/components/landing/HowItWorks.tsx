import React from 'react';

const STEPS = [
  {
    step: '01 — Connect',
    title: 'Bring your data together',
    description:
      'Cases, invoices, customers and production data sync from the systems you already use. No spreadsheets, no manual exports.',
  },
  {
    step: '02 — See',
    title: 'Get a 360° view of every account',
    description:
      'Every dentist’s buying history, trends, remakes and turnaround — on one screen, updated automatically.',
  },
  {
    step: '03 — Act',
    title: 'Know exactly what to do next',
    description:
      'AI flags risks and opportunities, recommends the next action and automates follow-ups across email, SMS and WhatsApp.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-[#0A0A0A] text-white py-24 md:py-28 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Top Header with Action Link */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="max-w-[680px]">
            <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#12F095] tracking-[0.06em] uppercase">
              HOW IT WORKS
            </p>
            <h2 className="m-0 text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
              From scattered data to the next right move.
            </h2>
          </div>
          <a
            href="#features"
            className="text-[#12F095] font-bold text-[15px] sm:text-[16px] hover:text-[#00df83] transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Explore the platform</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="border border-[#2A2A2A] hover:border-[#3A3A3A] rounded-[22px] p-7 sm:p-8 bg-[#161616] flex flex-col transition-colors shadow-sm"
            >
              <div className="font-mono text-[14px] text-[#12F095] font-semibold">
                {step.step}
              </div>
              <h3 className="mt-4 mb-2.5 text-[22px] sm:text-[24px] font-extrabold tracking-[-0.02em] text-white">
                {step.title}
              </h3>
              <p className="m-0 text-[15px] sm:text-[16px] leading-[1.65] text-[#BDBDBD]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
