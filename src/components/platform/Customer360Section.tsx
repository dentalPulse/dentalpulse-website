import React from 'react';

export function Customer360Section() {
  return (
    <section id="c360" className="w-full bg-white py-18 md:py-24 px-6 border-t border-[#F0F0F0]">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: Narrative */}
        <div className="flex-1 max-w-[540px]">
          <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            01 — CUSTOMER 360
          </p>
          <h2 className="m-0 text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A]">
            Know every dentist like your best rep does.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] text-[#5C5C5C]">
            Buying history, case mix, remakes, turnaround, payment behaviour and every touchpoint — in one profile your whole team shares.
          </p>

          <ul className="mt-6 p-0 list-none flex flex-col gap-3 text-[15px] sm:text-[16px] text-[#0A0A0A]">
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Customer database &amp; CRM built specifically for dental labs</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Category breakdown: what they buy and what they don’t</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Lifetime value and health score calculated for each account</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Code-Rendered Riverbend Dental Profile Card */}
        <div className="flex-[1.3] w-full max-w-[620px]">
          <div
            role="region"
            aria-label="Customer profile for Riverbend Dental showing lifetime value, health score and category mix"
            className="bg-white border border-[#E6E6E6] rounded-[22px] p-6 sm:p-8 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] text-[#0A0A0A]"
          >
            {/* Profile Header */}
            <div className="flex flex-wrap justify-between gap-4 items-center">
              <div className="flex gap-3.5 items-center">
                <span className="w-[52px] h-[52px] rounded-[14px] bg-[#0A0A0A] text-[#12F095] font-extrabold text-[18px] flex items-center justify-center shrink-0">
                  RD
                </span>
                <div>
                  <div className="text-[19px] sm:text-[20px] font-extrabold text-[#0A0A0A]">
                    Riverbend Dental
                  </div>
                  <div className="text-[13px] sm:text-[14px] text-[#5C5C5C]">
                    Dr. Maria Lopez • Customer since 2019 • Territory North
                  </div>
                </div>
              </div>
              <span className="text-[12px] sm:text-[13px] font-bold text-[#06663C] bg-[#E3FCEF] px-3 py-1.5 rounded-full shrink-0">
                Health 82 • Healthy
              </span>
            </div>

            {/* 4 Stat KPI Tiles Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="bg-[#F5F5F5] rounded-[12px] p-3.5">
                <div className="text-[12px] text-[#5C5C5C] font-semibold">Lifetime value</div>
                <div className="text-[20px] sm:text-[22px] font-extrabold text-[#0A0A0A] mt-0.5">$212K</div>
              </div>
              <div className="bg-[#F5F5F5] rounded-[12px] p-3.5">
                <div className="text-[12px] text-[#5C5C5C] font-semibold">Cases (90d)</div>
                <div className="text-[20px] sm:text-[22px] font-extrabold text-[#0A0A0A] mt-0.5">148</div>
              </div>
              <div className="bg-[#F5F5F5] rounded-[12px] p-3.5">
                <div className="text-[12px] text-[#5C5C5C] font-semibold">Remake rate</div>
                <div className="text-[20px] sm:text-[22px] font-extrabold text-[#0A0A0A] mt-0.5">2.1%</div>
              </div>
              <div className="bg-[#F5F5F5] rounded-[12px] p-3.5">
                <div className="text-[12px] text-[#5C5C5C] font-semibold">Avg. turnaround</div>
                <div className="text-[20px] sm:text-[22px] font-extrabold text-[#0A0A0A] mt-0.5">6.2 d</div>
              </div>
            </div>

            {/* Category Mix Bars */}
            <div className="mt-6">
              <div className="text-[14px] font-bold text-[#0A0A0A] mb-3">Category mix</div>
              <div className="flex flex-col gap-2.5 text-[13px] sm:text-[14px]">
                {/* Crown & bridge */}
                <div className="flex items-center gap-3">
                  <span className="w-28 sm:w-32 shrink-0 text-[#0A0A0A] font-medium">Crown &amp; bridge</span>
                  <div className="flex-1 h-2.5 bg-[#EFEFEF] rounded-full overflow-hidden">
                    <div className="h-full bg-[#067A47] rounded-full" style={{ width: '78%' }} />
                  </div>
                  <b className="w-10 text-right text-[#0A0A0A]">78%</b>
                </div>

                {/* Removables */}
                <div className="flex items-center gap-3">
                  <span className="w-28 sm:w-32 shrink-0 text-[#0A0A0A] font-medium">Removables</span>
                  <div className="flex-1 h-2.5 bg-[#EFEFEF] rounded-full overflow-hidden">
                    <div className="h-full bg-[#067A47] rounded-full" style={{ width: '22%' }} />
                  </div>
                  <b className="w-10 text-right text-[#0A0A0A]">22%</b>
                </div>

                {/* Implants */}
                <div className="flex items-center gap-3">
                  <span className="w-28 sm:w-32 shrink-0 text-[#0A0A0A] font-medium">Implants</span>
                  <div className="flex-1 h-2.5 bg-[#EFEFEF] border border-dashed border-[#BDBDBD] rounded-full" />
                  <b className="w-10 text-right text-[#0A0A0A]">0%</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
