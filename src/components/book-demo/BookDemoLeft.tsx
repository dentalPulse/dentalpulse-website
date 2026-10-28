import React from 'react';

const DEMO_PERKS = [
  {
    bold: 'How to spot at-risk dentists',
    text: 'weeks before they stop sending cases',
  },
  {
    bold: 'Where your cross-sell revenue is hiding',
    text: 'across product categories',
  },
  {
    bold: 'How game plans and workflows',
    text: 'keep your team acting on the right accounts',
  },
  {
    bold: 'A rough ROI estimate',
    text: 'based on your own numbers',
  },
];

export function BookDemoLeft() {
  return (
    <div className="flex-1 max-w-[520px] flex flex-col gap-8">
      {/* Title & Badge */}
      <div>
        <p className="m-0 mb-4 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
          BOOK A DEMO
        </p>
        <h1 className="m-0 text-[38px] sm:text-[48px] lg:text-[58px] font-extrabold text-[#0A0A0A] leading-[1.04] tracking-[-0.035em]">
          See your lab’s customers clearly in 30 minutes.
        </h1>
        <p className="m-0 mt-5 text-[17px] sm:text-[18px] leading-[1.6] text-[#5C5C5C]">
          A tailored walkthrough with our team — no generic slideshow.
        </p>
      </div>

      {/* Checklist Section */}
      <div className="flex flex-col gap-4.5 pt-2">
        <div className="text-[13px] sm:text-[14px] font-extrabold tracking-[0.06em] text-[#5C5C5C] uppercase">
          IN YOUR DEMO, YOU’LL SEE
        </div>

        <div className="flex flex-col gap-3.5">
          {DEMO_PERKS.map((perk, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              <span className="flex-none w-8 h-8 rounded-[10px] bg-[#E3FCEF] text-[#067A47] flex items-center justify-center mt-0.5 shadow-xs">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-[15px] sm:text-[16px] leading-[1.5] text-[#222222]">
                <strong className="font-bold text-[#0A0A0A]">{perk.bold}</strong> {perk.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Quote Card */}
      <figure className="m-0 bg-white border border-[#E6E6E6] rounded-[20px] p-6 shadow-sm">
        <blockquote className="m-0 text-[16px] sm:text-[17px] leading-[1.55] font-semibold text-[#0A0A0A]">
          “Dental Pulse showed us exactly which 14 accounts were quietly slipping away. We saved 11 of them in the first 60 days.”
        </blockquote>
        <figcaption className="mt-3.5 text-[14px] text-[#5C5C5C]">
          <strong className="text-[#0A0A0A] font-bold">Marcus Vance</strong> · Operations Director, Apex Dental Ceramics
        </figcaption>
      </figure>
    </div>
  );
}
