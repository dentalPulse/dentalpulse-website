import React from 'react';
import Link from 'next/link';

export function SalesRepsHero() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-18 sm:pb-24 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-14 items-center justify-between">
        {/* Left Column: Sales Rep Narrative */}
        <div className="flex-1 max-w-[560px]">
          <p className="m-0 mb-4 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            FOR SALES REPRESENTATIVES
          </p>
          <h1 className="m-0 text-[38px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]">
            Walk into every practice knowing what to say.
          </h1>
          <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.6] text-[#5C5C5C]">
            Start each day with a ranked list of who to call or visit, why it matters and the talking points that win more cases — on your laptop or phone.
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

        {/* Right Column: Code-Rendered Mobile Phone Screen Mockup Card */}
        <div className="flex-[1.15] w-full flex justify-center">
          <div
            role="region"
            aria-label="Phone screen showing today's priority accounts for a dental lab sales representative"
            className="w-[360px] max-w-full bg-[#0A0A0A] rounded-[44px] p-3 shadow-[0_50px_80px_-40px_rgba(0,0,0,0.6)]"
          >
            {/* Phone Screen Container */}
            <div className="bg-white rounded-[34px] p-5 sm:p-6 flex flex-col gap-3 text-[#0A0A0A]">
              {/* Header */}
              <div className="flex justify-between items-center pb-1">
                <div>
                  <div className="text-[12px] sm:text-[13px] text-[#5C5C5C] font-semibold">
                    Thursday
                  </div>
                  <div className="text-[20px] sm:text-[22px] font-extrabold tracking-tight text-[#0A0A0A]">
                    Today’s priorities
                  </div>
                </div>
                <span className="w-9 h-9 rounded-full bg-[#0A0A0A] text-[#12F095] flex items-center justify-center text-[12px] font-bold shrink-0">
                  JM
                </span>
              </div>

              {/* Priority 1: Lakeside Family Dentistry (Win back) */}
              <div className="bg-white border border-[#BDBDBD] rounded-[18px] p-3.5">
                <div className="flex justify-between items-start gap-2">
                  <b className="text-[14.5px] sm:text-[15px] text-[#0A0A0A] leading-snug">
                    Lakeside Family Dentistry
                  </b>
                  <span className="text-[10px] sm:text-[11px] font-bold text-white bg-[#0A0A0A] px-2 py-0.5 rounded-full shrink-0">
                    Win back
                  </span>
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#5C5C5C] mt-1 font-medium">
                  No cases in 23 days • LTV $96K
                </div>
                <div className="text-[12.5px] sm:text-[13px] mt-2.5 p-2.5 rounded-[10px] bg-[#F5F5F5] leading-snug text-[#0A0A0A]">
                  <b className="font-bold">Talking point:</b> Ask about the two shade remakes in September.
                </div>
              </div>

              {/* Priority 2: Riverbend Dental (Cross-sell) */}
              <div className="bg-white border border-[#BDF5DA] rounded-[18px] p-3.5">
                <div className="flex justify-between items-start gap-2">
                  <b className="text-[14.5px] sm:text-[15px] text-[#0A0A0A] leading-snug">
                    Riverbend Dental
                  </b>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#06663C] bg-[#E3FCEF] px-2 py-0.5 rounded-full shrink-0">
                    Cross-sell
                  </span>
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#5C5C5C] mt-1 font-medium">
                  Crowns only • est. +$18K/yr implants
                </div>
                <div className="text-[12.5px] sm:text-[13px] mt-2.5 p-2.5 rounded-[10px] bg-[#F5F5F5] leading-snug text-[#0A0A0A]">
                  <b className="font-bold">Talking point:</b> Share implant turnaround and bring a sample case.
                </div>
              </div>

              {/* Priority 3: Dr. Chen & Associates (Thank you) */}
              <div className="bg-white border border-[#E6E6E6] rounded-[18px] p-3.5">
                <div className="flex justify-between items-start gap-2">
                  <b className="text-[14.5px] sm:text-[15px] text-[#0A0A0A] leading-snug">
                    Dr. Chen &amp; Associates
                  </b>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#0A0A0A] bg-[#EFEFEF] px-2 py-0.5 rounded-full shrink-0">
                    Thank you
                  </span>
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#5C5C5C] mt-1 font-medium">
                  Volume up 30% this quarter
                </div>
              </div>

              {/* Bottom Phone App Navigation */}
              <div className="flex justify-around items-center pt-2.5 mt-1 border-t border-[#F0F0F0] text-[11px] font-bold text-[#5C5C5C]">
                <span className="text-[#067A47] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#067A47]" />
                  Today
                </span>
                <span className="hover:text-[#0A0A0A] transition-colors cursor-pointer">Accounts</span>
                <span className="hover:text-[#0A0A0A] transition-colors cursor-pointer">Tasks</span>
                <span className="hover:text-[#0A0A0A] transition-colors cursor-pointer">Ask AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
