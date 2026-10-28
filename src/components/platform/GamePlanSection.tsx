import React from 'react';

export function GamePlanSection() {
  const steps = [
    {
      number: '1',
      isCompleted: true,
      title: 'Call Dr. Shah’s office manager',
      description: 'Ask about the last two cases — both had shade remakes.',
      badgeText: 'Priority Action',
    },
    {
      number: '2',
      isCompleted: false,
      isNext: true,
      title: 'Offer a free shade-matching consult',
      description: 'Book your ceramist for a 20-minute visit this week.',
      badgeText: 'Next Step',
    },
    {
      number: '3',
      isCompleted: false,
      isNext: false,
      title: 'Send pickup reminder via WhatsApp',
      description: 'Automated, 3 days after the visit.',
      badgeText: 'Scheduled',
    },
    {
      number: '4',
      isCompleted: false,
      isNext: false,
      title: 'Review volume in 30 days',
      description: 'Dental Pulse will remind you and report the result.',
      badgeText: 'Automated',
    },
  ];

  return (
    <section id="plan" className="w-full bg-white py-18 md:py-24 px-6 border-t border-[#F0F0F0]">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: Narrative */}
        <div className="flex-1 max-w-[540px]">
          <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            03 — ACTIONABLE RECOMMENDATIONS
          </p>
          <h2 className="m-0 text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A]">
            A game plan for every account, not another report.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] text-[#5C5C5C]">
            The AI business assistant turns insights into a sequence of next steps — who to call, what to offer and when to follow up.
          </p>

          <ul className="mt-6 p-0 list-none flex flex-col gap-3 text-[15px] sm:text-[16px] text-[#0A0A0A]">
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Recommended action sequences tailored to account history</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Integrated talking points and suggested offers</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Tracks outcome so recommendations get smarter over time</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Code-Rendered Game Plan Card */}
        <div className="flex-[1.3] w-full max-w-[620px]">
          <div
            role="region"
            aria-label="Actionable game plan for Lakeside Family Dentistry with sequential win-back tasks"
            className="bg-white border border-[#E6E6E6] rounded-[22px] p-6 sm:p-8 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] text-[#0A0A0A]"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#F0F0F0]">
              <div>
                <div className="text-[18px] sm:text-[19px] font-extrabold text-[#0A0A0A]">
                  Game plan • Lakeside Family Dentistry
                </div>
                <div className="text-[13px] text-[#737373] mt-0.5 font-medium">
                  Created by AI Assistant • Priority: High
                </div>
              </div>
              <span className="text-[12px] font-bold text-white bg-[#0A0A0A] px-3 py-1 rounded-full shrink-0">
                Win-back
              </span>
            </div>

            {/* 4 Steps */}
            <div className="mt-5 flex flex-col gap-3">
              {/* Step 1: Active Highlight */}
              <div className="bg-[#EEFDF5] border border-[#A7F3D0] rounded-[14px] p-4 flex items-start gap-3.5 transition-all">
                <div className="w-7 h-7 rounded-full bg-[#067A47] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[15px] font-bold text-[#06663C]">
                      {steps[0].title}
                    </span>
                    <span className="text-[11px] font-semibold text-[#06663C] bg-[#DCFCE7] px-2 py-0.5 rounded-full shrink-0">
                      In progress
                    </span>
                  </div>
                  <p className="m-0 mt-1 text-[13px] text-[#065F46] leading-relaxed">
                    {steps[0].description}
                  </p>
                </div>
              </div>

              {/* Step 2: Next Step */}
              <div className="bg-[#FAFAFA] border border-[#EBEBEB] hover:border-[#D6D6D6] rounded-[14px] p-4 flex items-start gap-3.5 transition-all">
                <div className="w-7 h-7 rounded-full border-2 border-[#067A47] text-[#067A47] bg-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-[13px]">
                  2
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[15px] font-bold text-[#0A0A0A]">
                      {steps[1].title}
                    </span>
                    <span className="text-[11px] font-semibold text-[#4B5563] bg-[#F3F4F6] px-2 py-0.5 rounded-full shrink-0">
                      Step 2
                    </span>
                  </div>
                  <p className="m-0 mt-1 text-[13px] text-[#5C5C5C] leading-relaxed">
                    {steps[1].description}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#FAFAFA] border border-[#EBEBEB] rounded-[14px] p-4 flex items-start gap-3.5 transition-all">
                <div className="w-7 h-7 rounded-full border border-[#D1D5DB] text-[#6B7280] bg-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-[13px]">
                  3
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[15px] font-bold text-[#0A0A0A]">
                      {steps[2].title}
                    </span>
                    <span className="text-[11px] font-semibold text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded-full shrink-0">
                      Step 3
                    </span>
                  </div>
                  <p className="m-0 mt-1 text-[13px] text-[#5C5C5C] leading-relaxed">
                    {steps[2].description}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-[#FAFAFA] border border-[#EBEBEB] rounded-[14px] p-4 flex items-start gap-3.5 transition-all">
                <div className="w-7 h-7 rounded-full border border-[#D1D5DB] text-[#6B7280] bg-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-[13px]">
                  4
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[15px] font-bold text-[#0A0A0A]">
                      {steps[3].title}
                    </span>
                    <span className="text-[11px] font-semibold text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded-full shrink-0">
                      Step 4
                    </span>
                  </div>
                  <p className="m-0 mt-1 text-[13px] text-[#5C5C5C] leading-relaxed">
                    {steps[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
