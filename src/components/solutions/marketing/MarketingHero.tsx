import React from 'react';
import Link from 'next/link';

export function MarketingHero() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-18 sm:pb-24 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-14 items-center justify-between">
        {/* Left Column: Marketing Narrative */}
        <div className="flex-1 max-w-[560px]">
          <p className="m-0 mb-4 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            FOR MARKETING TEAMS
          </p>
          <h1 className="m-0 text-[38px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]">
            Campaigns that reach the right dentist at the right time.
          </h1>
          <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.6] text-[#5C5C5C]">
            Build segments from real buying behaviour, launch email, SMS and WhatsApp campaigns, and see which ones actually brought in cases.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mt-8">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center bg-[#0A0A0A] text-white text-[15px] sm:text-[16px] font-bold px-7 py-3.5 sm:py-4 rounded-full hover:bg-[#222222] transition-colors shadow-sm"
            >
              Book a demo
            </Link>
            <Link
              href="/roi"
              className="inline-flex items-center justify-center border border-[#D6D6D6] bg-white text-[#0A0A0A] text-[15px] sm:text-[16px] font-bold px-7 py-3.5 sm:py-4 rounded-full hover:bg-[#F5F5F5] transition-colors"
            >
              Calculate your ROI
            </Link>
          </div>
        </div>

        {/* Right Column: Code-Rendered Segment Builder & Campaign Mockup Card */}
        <div className="flex-[1.15] w-full min-w-0">
          <div
            role="region"
            aria-label="Segment builder for implant-ready practices with multi-channel campaign performance"
            className="bg-white border border-[#E6E6E6] rounded-[24px] p-6 sm:p-7 shadow-[0_40px_70px_-45px_rgba(0,0,0,0.45)] flex flex-col gap-4.5"
          >
            {/* Header: Segment Title & Pill Badge */}
            <div className="flex justify-between items-center gap-3 flex-wrap">
              <h2 className="m-0 text-[17px] sm:text-[18px] font-extrabold text-[#0A0A0A]">
                Segment — Implant-ready practices
              </h2>
              <span className="text-[12px] sm:text-[13px] font-bold text-[#06663C] bg-[#E3FCEF] px-3 py-1 rounded-full shrink-0">
                42 dentists
              </span>
            </div>

            {/* Filter Rules (Query Predicates) */}
            <div className="flex flex-col gap-2 text-[13.5px] sm:text-[14px]">
              {/* Rule 1 */}
              <div className="flex flex-wrap gap-2 items-center p-3 rounded-[12px] bg-[#F5F5F5]">
                <span className="font-mono text-[12px] font-semibold text-[#5C5C5C] w-14">
                  WHERE
                </span>
                <span className="px-2.5 py-1 rounded-[8px] bg-white border border-[#E6E6E6] font-semibold text-[#0A0A0A]">
                  Crown &amp; bridge cases
                </span>
                <span className="text-[#0A0A0A] font-medium">&gt; 20 / month</span>
              </div>

              {/* Rule 2 */}
              <div className="flex flex-wrap gap-2 items-center p-3 rounded-[12px] bg-[#F5F5F5]">
                <span className="font-mono text-[12px] font-semibold text-[#5C5C5C] w-14">
                  AND
                </span>
                <span className="px-2.5 py-1 rounded-[8px] bg-white border border-[#E6E6E6] font-semibold text-[#0A0A0A]">
                  Implant cases
                </span>
                <span className="text-[#0A0A0A] font-medium">= 0 in last 6 months</span>
              </div>

              {/* Rule 3 */}
              <div className="flex flex-wrap gap-2 items-center p-3 rounded-[12px] bg-[#F5F5F5]">
                <span className="font-mono text-[12px] font-semibold text-[#5C5C5C] w-14">
                  AND
                </span>
                <span className="px-2.5 py-1 rounded-[8px] bg-white border border-[#E6E6E6] font-semibold text-[#0A0A0A]">
                  Health score
                </span>
                <span className="text-[#0A0A0A] font-medium">≥ 70</span>
              </div>
            </div>

            {/* Campaign Performance Box */}
            <div className="mt-1">
              <div className="text-[14px] font-bold text-[#0A0A0A] mb-2.5">
                Campaign — Implant launch
              </div>
              <div className="grid grid-cols-3 gap-2.5 text-[12.5px] sm:text-[13px]">
                {/* Metric 1: Email */}
                <div className="border border-[#E6E6E6] rounded-[12px] p-3 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-[#0A0A0A]">Email</div>
                    <div className="text-[#5C5C5C] text-[11.5px]">Day 0</div>
                  </div>
                  <div>
                    <div className="text-[19px] sm:text-[20px] font-extrabold text-[#0A0A0A] mt-1.5">
                      48%
                    </div>
                    <div className="text-[#5C5C5C] text-[11.5px]">opened</div>
                  </div>
                </div>

                {/* Metric 2: WhatsApp */}
                <div className="border border-[#E6E6E6] rounded-[12px] p-3 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-[#0A0A0A]">WhatsApp</div>
                    <div className="text-[#5C5C5C] text-[11.5px]">Day 3</div>
                  </div>
                  <div>
                    <div className="text-[19px] sm:text-[20px] font-extrabold text-[#0A0A0A] mt-1.5">
                      71%
                    </div>
                    <div className="text-[#5C5C5C] text-[11.5px]">read</div>
                  </div>
                </div>

                {/* Metric 3: Result */}
                <div className="border border-[#BDF5DA] bg-[#EEFDF5] rounded-[12px] p-3 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-[#06663C]">Result</div>
                    <div className="text-[#06663C]/80 text-[11.5px]">30 days</div>
                  </div>
                  <div>
                    <div className="text-[19px] sm:text-[20px] font-extrabold text-[#06663C] mt-1.5">
                      9
                    </div>
                    <div className="text-[#06663C] text-[11.5px] font-medium leading-tight">
                      first implant cases
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
