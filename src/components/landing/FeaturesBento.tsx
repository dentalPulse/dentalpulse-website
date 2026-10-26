import React from 'react';

export function FeaturesBento() {
  return (
    <section id="features" className="w-full bg-white py-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <div className="max-w-[760px]">
          <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            EVERYTHING YOU NEED TO GROW
          </p>
          <h2 className="m-0 text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0A0A0A]">
            One platform. Every customer signal.
          </h2>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {/* Card 1: Effective Dashboards */}
          <div className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-5 transition-all shadow-sm">
            <div>
              <h3 className="m-0 text-[20px] sm:text-[22px] font-extrabold tracking-[-0.02em] text-[#0A0A0A]">
                Effective dashboards
              </h3>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[#5C5C5C]">
                Sales, retention, remakes and turnaround time at a glance — no report-building required.
              </p>
            </div>
            {/* Visual Bar Chart */}
            <div
              aria-hidden="true"
              className="flex items-end gap-2.5 h-[120px] p-4 bg-[#F5F5F5] rounded-[14px]"
            >
              <div className="flex-1 h-[42%] bg-[#BDF5DA] rounded-md transition-all hover:bg-[#6FE8B3]" />
              <div className="flex-1 h-[55%] bg-[#BDF5DA] rounded-md transition-all hover:bg-[#6FE8B3]" />
              <div className="flex-1 h-[48%] bg-[#BDF5DA] rounded-md transition-all hover:bg-[#6FE8B3]" />
              <div className="flex-1 h-[66%] bg-[#BDF5DA] rounded-md transition-all hover:bg-[#6FE8B3]" />
              <div className="flex-1 h-[72%] bg-[#6FE8B3] rounded-md" />
              <div className="flex-1 h-[88%] bg-[#067A47] rounded-md" />
            </div>
          </div>

          {/* Card 2: Risk & Opportunity Alerts */}
          <div className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-5 transition-all shadow-sm">
            <div>
              <h3 className="m-0 text-[20px] sm:text-[22px] font-extrabold tracking-[-0.02em] text-[#0A0A0A]">
                Risk &amp; opportunity alerts
              </h3>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[#5C5C5C]">
                Predictive analytics watch every account so you can recover a slipping dentist or cross-sell at the right moment.
              </p>
            </div>
            {/* Visual Alert Pills */}
            <div aria-hidden="true" className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5 p-3 rounded-[12px] bg-[#F5F5F5] border border-[#BDBDBD] text-[13px] sm:text-[14px]">
                <span className="w-2 h-2 rounded-full bg-[#0A0A0A] shrink-0" />
                <b className="text-[#0A0A0A]">Risk</b>
                <span className="text-[#5C5C5C] truncate">Bright Smile Dental — volume down 41%</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-[12px] bg-[#EEFDF5] border border-[#BDF5DA] text-[13px] sm:text-[14px]">
                <span className="w-2 h-2 rounded-full bg-[#067A47] shrink-0" />
                <b className="text-[#067A47]">Opportunity</b>
                <span className="text-[#5C5C5C] truncate">Riverbend Dental — no implant cases</span>
              </div>
            </div>
          </div>

          {/* Card 3: AI Business Assistant */}
          <div className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-5 transition-all shadow-sm">
            <div>
              <h3 className="m-0 text-[20px] sm:text-[22px] font-extrabold tracking-[-0.02em] text-[#0A0A0A]">
                AI business assistant
              </h3>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[#5C5C5C]">
                Ask questions in plain English and get a step-by-step game plan for any account.
              </p>
            </div>
            {/* Visual Chat Thread */}
            <div aria-hidden="true" className="flex flex-col gap-2.5 text-[13px]">
              <div className="self-end bg-[#0A0A0A] text-white px-3.5 py-2.5 rounded-[14px] rounded-br-sm max-w-[85%]">
                Which accounts should I visit this week?
              </div>
              <div className="bg-[#F5F5F5] text-[#0A0A0A] p-3 rounded-[14px] rounded-bl-sm max-w-[95%] leading-relaxed">
                Start with <b>Lakeside Family Dentistry</b> — no cases in 23 days. Then <b>Riverbend Dental</b>: strong crown volume, no implants yet.
              </div>
            </div>
          </div>

          {/* Card 4: Revenue Forecasting & Churn Prediction */}
          <div className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-5 transition-all shadow-sm">
            <div>
              <h3 className="m-0 text-[20px] sm:text-[22px] font-extrabold tracking-[-0.02em] text-[#0A0A0A]">
                Revenue forecasting &amp; churn prediction
              </h3>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[#5C5C5C]">
                See where revenue is heading and which accounts drive the gap, before the quarter closes.
              </p>
            </div>
            {/* Visual SVG Forecasting Chart */}
            <div className="w-full bg-[#F5F5F5] rounded-[14px] p-2">
              <svg viewBox="0 0 400 110" className="w-full h-auto" aria-hidden="true">
                <path
                  d="M16 86 C60 80 90 74 130 70 S200 58 240 52"
                  fill="none"
                  stroke="#067A47"
                  strokeWidth="2.6"
                />
                <path
                  d="M240 52 C280 46 320 40 384 30"
                  fill="none"
                  stroke="#067A47"
                  strokeWidth="2.6"
                  strokeDasharray="6 6"
                />
                <path
                  d="M240 52 L384 18 L384 44 Z"
                  fill="#067A47"
                  fillOpacity="0.1"
                />
                <line x1="240" y1="12" x2="240" y2="98" stroke="#C4C4C4" strokeDasharray="3 4" />
              </svg>
            </div>
          </div>

          {/* Card 5: Automated Workflows */}
          <div className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-5 transition-all shadow-sm">
            <div>
              <h3 className="m-0 text-[20px] sm:text-[22px] font-extrabold tracking-[-0.02em] text-[#0A0A0A]">
                Automated workflows
              </h3>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[#5C5C5C]">
                Repeatable playbooks for onboarding, win-back and cross-selling run on their own — every dentist, every time.
              </p>
            </div>
            {/* Visual Workflow Steps */}
            <div
              aria-hidden="true"
              className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[13px] font-semibold"
            >
              <span className="px-3 py-1.5 rounded-[10px] bg-[#F5F5F5] text-[#0A0A0A]">
                No case in 21 days
              </span>
              <span className="text-[#A3A3A3]">→</span>
              <span className="px-3 py-1.5 rounded-[10px] bg-[#F5F5F5] text-[#0A0A0A]">
                Task for rep
              </span>
              <span className="text-[#A3A3A3]">→</span>
              <span className="px-3 py-1.5 rounded-[10px] bg-[#F5F5F5] text-[#0A0A0A]">
                WhatsApp check-in
              </span>
              <span className="text-[#A3A3A3]">→</span>
              <span className="px-3 py-1.5 rounded-[10px] bg-[#E3FCEF] text-[#06663C]">
                Case received
              </span>
            </div>
          </div>

          {/* Card 6: Multi-Channel Campaigns */}
          <div className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-5 transition-all shadow-sm">
            <div>
              <h3 className="m-0 text-[20px] sm:text-[22px] font-extrabold tracking-[-0.02em] text-[#0A0A0A]">
                Email, SMS &amp; WhatsApp campaigns
              </h3>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[#5C5C5C]">
                Build segments from real buying behaviour and reach every dentist on the channel they actually read.
              </p>
            </div>
            {/* Visual Channel Pills */}
            <div aria-hidden="true" className="flex flex-wrap gap-2 text-[13px] font-semibold">
              <span className="px-3.5 py-2 rounded-full border border-[#E6E6E6] text-[#0A0A0A] bg-white">
                Email
              </span>
              <span className="px-3.5 py-2 rounded-full border border-[#E6E6E6] text-[#0A0A0A] bg-white">
                SMS
              </span>
              <span className="px-3.5 py-2 rounded-full border border-[#E6E6E6] text-[#0A0A0A] bg-white">
                WhatsApp
              </span>
              <span className="px-3.5 py-2 rounded-full bg-[#0A0A0A] text-white">
                Segment: Implant-ready (42)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
