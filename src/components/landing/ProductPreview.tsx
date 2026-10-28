import React from 'react';
import Link from 'next/link';

export function ProductPreview() {

  return (
    <section className="relative z-20 px-4 sm:px-6 -mt-28 sm:-mt-36 md:-mt-44 pb-20">
      <div className="max-w-[1180px] mx-auto relative">
        {/* macOS Browser Chrome Window */}
        <div className="bg-[#0A0A0A] rounded-[22px] p-2 sm:p-2.5 shadow-[0_0_0_1px_#2A2A2A,0_60px_100px_-40px_rgba(0,0,0,0.6)] text-left relative overflow-hidden">
          {/* Window Chrome Titlebar */}
          <div className="flex items-center gap-1.5 px-2 sm:px-3 pt-1 pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A] inline-block" />
            <span className="ml-3 sm:ml-4 font-mono text-[11px] sm:text-[12px] text-[#9A9A9A]">
              app.dentalpulseai.com/overview
            </span>
          </div>

          {/* Code-Rendered High-Fidelity Dashboard Interface */}
          <div className="bg-white rounded-[14px] overflow-hidden flex flex-col md:flex-row text-[#0A0A0A]">
            {/* Sidebar */}
            <div className="hidden md:flex w-[210px] shrink-0 bg-[#F5F5F5] border-r border-[#EAEAEA] p-4 sm:p-5 flex-col gap-1 text-[13px] sm:text-[14px] font-medium text-[#5C5C5C]">
              {/* Sidebar Header */}
              <div className="flex items-center gap-2 pb-4 text-[#0A0A0A] font-extrabold text-[15px]">
                <svg width="22" height="22" viewBox="0 0 34 34" aria-hidden="true">
                  <rect width="34" height="34" rx="9" fill="#0A0A0A" />
                  <path
                    d="M6 18h6l3-7 4 13 3-6h6"
                    fill="none"
                    stroke="#12F095"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Dental Pulse</span>
              </div>

              {/* Sidebar Navigation */}
              <div className="px-2.5 py-2 rounded-lg bg-white text-[#0A0A0A] font-bold shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                Overview
              </div>
              <div className="px-2.5 py-2 hover:text-[#0A0A0A] transition-colors cursor-pointer">
                Customers
              </div>
              <div className="px-2.5 py-2 flex items-center justify-between hover:text-[#0A0A0A] transition-colors cursor-pointer">
                <span>Alerts</span>
                <span className="bg-[#EFEFEF] text-[#0A0A0A] text-[11px] font-bold px-2 py-0.5 rounded-full">
                  18
                </span>
              </div>
              <div className="px-2.5 py-2 hover:text-[#0A0A0A] transition-colors cursor-pointer">
                Game plans
              </div>
              <div className="px-2.5 py-2 hover:text-[#0A0A0A] transition-colors cursor-pointer">
                Campaigns
              </div>
              <div className="px-2.5 py-2 hover:text-[#0A0A0A] transition-colors cursor-pointer">
                Forecasts
              </div>
              <div className="px-2.5 py-2 hover:text-[#0A0A0A] transition-colors cursor-pointer">
                Reports
              </div>
            </div>

            {/* Main Dashboard Area */}
            <div className="flex-1 min-w-0 p-3.5 sm:p-6 flex flex-col gap-3.5 sm:gap-5">
              {/* Top Bar */}
              <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-3">
                <div>
                  <div className="text-[17px] sm:text-[20px] font-extrabold tracking-[-0.02em] text-[#0A0A0A]">
                    Lab overview
                  </div>
                  <div className="text-[11px] sm:text-[13px] text-[#5C5C5C]">
                    Last 90 days • all territories
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 border border-[#E6E6E6] rounded-lg text-[#0A0A0A] bg-white">
                    90 days
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#0A0A0A] text-white">
                    Export
                  </span>
                </div>
              </div>

              {/* KPI Cards Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                <div className="border border-[#EAEAEA] rounded-[12px] p-2.5 sm:p-4">
                  <div className="text-[11px] sm:text-[12px] text-[#5C5C5C] font-semibold">Revenue</div>
                  <div className="text-[18px] xs:text-[22px] sm:text-[26px] font-extrabold tracking-[-0.02em] mt-1 text-[#0A0A0A]">
                    $1.42M
                  </div>
                  <div className="text-[10px] sm:text-[12px] font-bold text-[#067A47] mt-0.5">
                    ▲ 6.1% vs prior
                  </div>
                </div>

                <div className="border border-[#EAEAEA] rounded-[12px] p-2.5 sm:p-4">
                  <div className="text-[11px] sm:text-[12px] text-[#5C5C5C] font-semibold">Active dentists</div>
                  <div className="text-[18px] xs:text-[22px] sm:text-[26px] font-extrabold tracking-[-0.02em] mt-1 text-[#0A0A0A]">
                    312
                  </div>
                  <div className="text-[10px] sm:text-[12px] font-bold text-[#067A47] mt-0.5">
                    ▲ 4 net new
                  </div>
                </div>

                <div className="border border-[#BDBDBD] bg-[#F5F5F5] rounded-[12px] p-2.5 sm:p-4">
                  <div className="text-[11px] sm:text-[12px] text-[#0A0A0A] font-semibold">Revenue at risk</div>
                  <div className="text-[18px] xs:text-[22px] sm:text-[26px] font-extrabold tracking-[-0.02em] mt-1 text-[#0A0A0A]">
                    $186K
                  </div>
                  <div className="text-[10px] sm:text-[12px] font-bold text-[#0A0A0A] mt-0.5">
                    18 accounts flagged
                  </div>
                </div>

                <div className="border border-[#EAEAEA] rounded-[12px] p-2.5 sm:p-4">
                  <div className="text-[11px] sm:text-[12px] text-[#5C5C5C] font-semibold">Avg. customer LTV</div>
                  <div className="text-[18px] xs:text-[22px] sm:text-[26px] font-extrabold tracking-[-0.02em] mt-1 text-[#0A0A0A]">
                    $48.2K
                  </div>
                  <div className="text-[10px] sm:text-[12px] font-bold text-[#067A47] mt-0.5">
                    ▲ 3.4% vs prior
                  </div>
                </div>
              </div>

              {/* Chart + At-Risk Accounts Row */}
              <div className="flex flex-col lg:flex-row gap-3">
                {/* Monthly Revenue Chart */}
                <div className="flex-[2] min-w-0 border border-[#EAEAEA] rounded-[12px] p-4">
                  <div className="flex justify-between items-center text-[13px] mb-2">
                    <span className="font-bold text-[#0A0A0A]">Monthly revenue</span>
                    <div className="flex items-center gap-3 text-[#5C5C5C] text-[12px]">
                      <span className="flex items-center gap-1.5">
                        <span className="inline-block w-2.5 h-[3px] bg-[#067A47]" />
                        This year
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-block w-2.5 h-[3px] bg-[#A3A3A3]" />
                        Last year
                      </span>
                    </div>
                  </div>

                  {/* Revenue Area Chart SVG */}
                  <svg
                    viewBox="0 0 520 190"
                    className="w-full h-auto mt-2"
                    aria-hidden="true"
                  >
                    <line x1="0" y1="40" x2="520" y2="40" stroke="#EFEFEF" />
                    <line x1="0" y1="90" x2="520" y2="90" stroke="#EFEFEF" />
                    <line x1="0" y1="140" x2="520" y2="140" stroke="#EFEFEF" />

                    {/* Last year dashed trajectory */}
                    <path
                      d="M0 150 C40 146 70 140 100 142 S170 130 210 128 S280 120 320 118 S390 110 430 108 S490 100 520 98"
                      fill="none"
                      stroke="#A3A3A3"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />

                    {/* This year area fill */}
                    <path
                      d="M0 140 C40 132 60 120 100 118 S160 124 200 104 S260 92 300 96 S360 70 400 66 S470 48 520 40 L520 190 L0 190 Z"
                      fill="#067A47"
                      fillOpacity="0.08"
                    />

                    {/* This year curve stroke */}
                    <path
                      d="M0 140 C40 132 60 120 100 118 S160 124 200 104 S260 92 300 96 S360 70 400 66 S470 48 520 40"
                      fill="none"
                      stroke="#067A47"
                      strokeWidth="2.6"
                    />
                    <circle cx="520" cy="40" r="5" fill="#067A47" />
                  </svg>
                </div>

                {/* At-Risk Accounts */}
                <div className="flex-[1] min-w-0 border border-[#EAEAEA] rounded-[12px] p-4 flex flex-col gap-2.5">
                  <div className="text-[13px] font-bold text-[#0A0A0A]">At-risk accounts</div>
                  
                  <div className="flex justify-between items-start gap-2 p-2.5 rounded-[10px] bg-[#FAFAFA]">
                    <div>
                      <div className="text-[13px] font-bold text-[#0A0A0A]">Bright Smile Dental</div>
                      <div className="text-[12px] text-[#5C5C5C]">Case volume ▼ 41% vs 90-day avg</div>
                    </div>
                    <span className="shrink-0 text-[11px] font-bold text-white bg-[#0A0A0A] px-2 py-0.5 rounded-full">
                      High
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2 p-2.5 rounded-[10px] bg-[#FAFAFA]">
                    <div>
                      <div className="text-[13px] font-bold text-[#0A0A0A]">Lakeside Family Dentistry</div>
                      <div className="text-[12px] text-[#5C5C5C]">No cases in 23 days</div>
                    </div>
                    <span className="shrink-0 text-[11px] font-bold text-white bg-[#0A0A0A] px-2 py-0.5 rounded-full">
                      High
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2 p-2.5 rounded-[10px] bg-[#FAFAFA]">
                    <div>
                      <div className="text-[13px] font-bold text-[#0A0A0A]">Park Ave Orthodontics</div>
                      <div className="text-[12px] text-[#5C5C5C]">Remakes up 3× this month</div>
                    </div>
                    <span className="shrink-0 text-[11px] font-bold text-[#0A0A0A] bg-[#E6E6E6] px-2 py-0.5 rounded-full">
                      Med
                    </span>
                  </div>
                </div>
              </div>

              {/* Cross-Sell Opportunities */}
              <div className="border border-[#EAEAEA] rounded-[12px] p-4 flex flex-col gap-2">
                <div className="text-[13px] font-bold text-[#0A0A0A]">Cross-sell opportunities</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[13px]">
                  <div className="p-3 rounded-[10px] bg-[#EEFDF5]">
                    <div className="font-bold text-[#0A0A0A]">Riverbend Dental</div>
                    <div className="text-[#333333] text-[12px]">Sends crowns, not implants</div>
                    <div className="font-bold text-[#06663C] text-[12px] mt-1">Est. +$18K / yr</div>
                  </div>
                  <div className="p-3 rounded-[10px] bg-[#EEFDF5]">
                    <div className="font-bold text-[#0A0A0A]">Oakwood Smiles</div>
                    <div className="text-[#333333] text-[12px]">No removables in 6 months</div>
                    <div className="font-bold text-[#06663C] text-[12px] mt-1">Est. +$9K / yr</div>
                  </div>
                  <div className="p-3 rounded-[10px] bg-[#EEFDF5]">
                    <div className="font-bold text-[#0A0A0A]">Dr. Chen &amp; Associates</div>
                    <div className="text-[#333333] text-[12px]">Volume up 30% — upsell digital</div>
                    <div className="font-bold text-[#06663C] text-[12px] mt-1">Est. +$12K / yr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tour Overlay (Play Icon and Pill retained without video file) */}
          <div className="absolute inset-0 rounded-[22px] bg-black/45 flex flex-col items-center justify-center gap-5 p-4 transition-all duration-300 pointer-events-none">
            <Link
              href="/book-demo"
              aria-label="Book a demo to watch the full product tour"
              className="pointer-events-auto w-20 h-20 sm:w-28 sm:h-28 rounded-full border-none bg-[#12F095] text-[#0A0A0A] flex items-center justify-center cursor-pointer shadow-[0_0_0_12px_rgba(18,240,149,0.22),0_0_0_26px_rgba(18,240,149,0.08),0_24px_60px_-10px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-1">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
              </svg>
            </Link>
            <Link
              href="/book-demo"
              className="pointer-events-auto bg-white text-[#0A0A0A] font-bold text-[14px] sm:text-[15px] px-5 py-2.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Watch the product tour • 0:30</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
