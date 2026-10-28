import React from 'react';
import Link from 'next/link';

export function SolutionsHero() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-18 sm:pb-24 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-14 items-center justify-between">
        {/* Left Column: Executive Narrative */}
        <div className="flex-1 max-w-[560px]">
          <p className="m-0 mb-4 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            FOR LAB OWNERS &amp; C-SUITE
          </p>
          <h1 className="m-0 text-[38px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]">
            See the health of your whole lab on one screen.
          </h1>
          <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.6] text-[#5C5C5C]">
            Revenue, retention, customer lifetime value and the accounts putting them at risk — without waiting for month-end reports or chasing your team for numbers.
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

        {/* Right Column: High-Fidelity Executive Scorecard Mockup Card */}
        <div className="flex-[1.15] w-full max-w-[600px]">
          <div
            role="region"
            aria-label="Executive scorecard with revenue, customer retention, lifetime value, and segment mix"
            className="bg-white border border-[#E6E6E6] rounded-[24px] p-6 sm:p-7 md:p-8 shadow-[0_40px_70px_-45px_rgba(0,0,0,0.45)] text-[#0A0A0A]"
          >
            {/* Scorecard Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F0F0F0]">
              <span className="text-[18px] sm:text-[19px] font-extrabold text-[#0A0A0A]">
                Executive scorecard
              </span>
              <span className="text-[12px] sm:text-[13px] text-[#5C5C5C] font-semibold bg-[#F5F5F5] px-2.5 py-1 rounded-md">
                Year to date
              </span>
            </div>

            {/* 4 Metric KPI Tiles (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-3.5 mt-5">
              {/* Tile 1: Revenue */}
              <div className="bg-[#F5F5F5] rounded-[14px] p-4 flex flex-col justify-between">
                <span className="text-[12px] font-semibold text-[#5C5C5C]">Revenue</span>
                <div className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.02em] text-[#0A0A0A] mt-1">
                  $4.86M
                </div>
                <span className="text-[12px] font-bold text-[#067A47] mt-1 flex items-center gap-1">
                  ▲ 8.2% YoY
                </span>
              </div>

              {/* Tile 2: Customer retention */}
              <div className="bg-[#F5F5F5] rounded-[14px] p-4 flex flex-col justify-between">
                <span className="text-[12px] font-semibold text-[#5C5C5C]">Customer retention</span>
                <div className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.02em] text-[#0A0A0A] mt-1">
                  91.4%
                </div>
                <span className="text-[12px] font-bold text-[#067A47] mt-1 flex items-center gap-1">
                  ▲ 2.1 pts YoY
                </span>
              </div>

              {/* Tile 3: Avg. lifetime value */}
              <div className="bg-[#F5F5F5] rounded-[14px] p-4 flex flex-col justify-between">
                <span className="text-[12px] font-semibold text-[#5C5C5C]">Avg. lifetime value</span>
                <div className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.02em] text-[#0A0A0A] mt-1">
                  $48.2K
                </div>
                <span className="text-[12px] font-bold text-[#067A47] mt-1 flex items-center gap-1">
                  ▲ 3.4% YoY
                </span>
              </div>

              {/* Tile 4: Revenue at risk (Bordered Accent) */}
              <div className="bg-[#F5F5F5] border border-[#BDBDBD] rounded-[14px] p-4 flex flex-col justify-between">
                <span className="text-[12px] font-semibold text-[#0A0A0A]">Revenue at risk</span>
                <div className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.02em] text-[#0A0A0A] mt-1">
                  $186K
                </div>
                <span className="text-[12px] font-bold text-[#0A0A0A] mt-1">
                  18 accounts
                </span>
              </div>
            </div>

            {/* Lifetime Value by Segment Section */}
            <div className="mt-6 pt-5 border-t border-[#F0F0F0]">
              <div className="text-[14px] font-bold text-[#0A0A0A] mb-3.5">
                Lifetime value by segment
              </div>

              <div className="flex flex-col gap-3 text-[13px] sm:text-[14px]">
                {/* Multi-location DSOs */}
                <div className="flex items-center gap-3">
                  <span className="w-34 sm:w-38 shrink-0 text-[#0A0A0A] font-medium truncate">
                    Multi-location DSOs
                  </span>
                  <div className="flex-1 h-3 bg-[#EFEFEF] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0A0A0A] rounded-full" style={{ width: '92%' }} />
                  </div>
                  <b className="w-14 text-right text-[#0A0A0A] shrink-0 font-extrabold">
                    $112K
                  </b>
                </div>

                {/* Group practices */}
                <div className="flex items-center gap-3">
                  <span className="w-34 sm:w-38 shrink-0 text-[#0A0A0A] font-medium truncate">
                    Group practices
                  </span>
                  <div className="flex-1 h-3 bg-[#EFEFEF] rounded-full overflow-hidden">
                    <div className="h-full bg-[#067A47] rounded-full" style={{ width: '58%' }} />
                  </div>
                  <b className="w-14 text-right text-[#0A0A0A] shrink-0 font-extrabold">
                    $64K
                  </b>
                </div>

                {/* Solo practices */}
                <div className="flex items-center gap-3">
                  <span className="w-34 sm:w-38 shrink-0 text-[#0A0A0A] font-medium truncate">
                    Solo practices
                  </span>
                  <div className="flex-1 h-3 bg-[#EFEFEF] rounded-full overflow-hidden">
                    <div className="h-full bg-[#6FE8B3] rounded-full" style={{ width: '30%' }} />
                  </div>
                  <b className="w-14 text-right text-[#0A0A0A] shrink-0 font-extrabold">
                    $31K
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
