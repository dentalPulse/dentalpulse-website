import React from 'react';

interface FeaturedCaseStudyProps {
  onOpenStory?: (storyId: string) => void;
}

export function FeaturedCaseStudy({ onOpenStory }: FeaturedCaseStudyProps) {
  return (
    <section className="w-full pb-20 px-6">
      <div className="max-w-[1240px] mx-auto bg-[#0A0A0A] text-white rounded-[32px] overflow-hidden flex flex-col lg:flex-row border border-[#222222] shadow-2xl">
        {/* Left Column: Narrative Story */}
        <div className="flex-[1.3] p-8 sm:p-12 lg:p-16 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-6">
            {/* Featured Story Tag */}
            <span className="self-start font-mono text-[12px] font-bold text-[#0A0A0A] bg-[#12F095] px-3.5 py-1.5 rounded-full tracking-wider uppercase">
              FEATURED STORY
            </span>

            {/* Lab Logo & Identification Badge */}
            <div className="inline-flex items-center gap-3 self-start px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#12F095]"
              >
                <path
                  d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6L7 9V15L12 18L17 15V9L12 6Z"
                  fill="currentColor"
                  fillOpacity="0.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-[13px] font-extrabold tracking-wider uppercase text-white font-mono leading-none">
                  APEX DENTAL CERAMICS
                </span>
                <span className="text-[11px] text-[#9A9A9A] leading-tight mt-0.5">
                  High-Volume Full-Service Lab • 42 Techs
                </span>
              </div>
            </div>

            {/* Story Title */}
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
              How Apex Dental Ceramics recovered 14 at-risk accounts in their first 90 days.
            </h2>

            {/* Story Summary Paragraph */}
            <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#BDBDBD] max-w-[640px]">
              Before Dental Pulse, high-volume accounts quietly drifted away before reps or production managers noticed the volume drop. By turning real-time order fluctuations into prioritized weekly retention playbooks, Apex preserved over $180,000 in annual recurring lab revenue.
            </p>
          </div>

          {/* Action Link / Trigger */}
          <button
            type="button"
            onClick={() => onOpenStory?.('apex-dental-ceramics')}
            className="self-start text-[#12F095] hover:text-[#00df83] font-bold text-[16px] inline-flex items-center gap-2 group transition-colors focus:outline-none"
          >
            <span>Read the full story</span>
            <span
              aria-hidden="true"
              className="transform transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>

        {/* Right Column: 3 Key Metrics Panel */}
        <div className="flex-1 bg-[#161616] p-8 sm:p-12 lg:p-16 lg:w-[400px] shrink-0 flex flex-col justify-center gap-7 border-t lg:border-t-0 lg:border-l border-[#2A2A2A]">
          {/* Stat 1 */}
          <div>
            <div className="text-[48px] sm:text-[54px] font-extrabold tracking-[-0.04em] text-[#12F095] leading-none">
              94%
            </div>
            <div className="text-[#BDBDBD] text-[15px] sm:text-[16px] font-medium mt-2">
              increase in customer retention
            </div>
          </div>

          <div className="h-[1px] bg-[#2A2A2A] w-full" />

          {/* Stat 2 */}
          <div>
            <div className="text-[48px] sm:text-[54px] font-extrabold tracking-[-0.04em] text-[#12F095] leading-none">
              $180K
            </div>
            <div className="text-[#BDBDBD] text-[15px] sm:text-[16px] font-medium mt-2">
              revenue recovered from at-risk accounts
            </div>
          </div>

          <div className="h-[1px] bg-[#2A2A2A] w-full" />

          {/* Stat 3 */}
          <div>
            <div className="text-[48px] sm:text-[54px] font-extrabold tracking-[-0.04em] text-[#12F095] leading-none">
              12 hrs
            </div>
            <div className="text-[#BDBDBD] text-[15px] sm:text-[16px] font-medium mt-2">
              saved on reporting every week
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
