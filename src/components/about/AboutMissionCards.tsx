import React from 'react';

export function AboutMissionCards() {
  return (
    <section className="w-full pb-24 px-6">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Visual Panel: Technology & Lab Craftsmanship (Spans 2 columns on lg) */}
        <div className="lg:col-span-2 min-h-[340px] rounded-[28px] bg-gradient-to-br from-[#101010] via-[#161616] to-[#222222] border border-[#2A2A2A] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden text-white shadow-xl">
          {/* Subtle Grid Dot Background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(#12F095 1px, transparent 1px), radial-gradient(#12F095 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px',
            }}
          />

          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
            <span className="font-mono text-[12px] font-bold text-[#0A0A0A] bg-[#12F095] px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              DENTAL INTELLIGENCE CORE
            </span>
            <span className="font-mono text-[12px] text-[#E6E6E6] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              140+ LAB PARTNERS NATIONWIDE
            </span>
          </div>

          {/* Center Blueprint Vector Graphic (CAD/CAM restoration contour) */}
          <div className="my-8 relative z-10 flex items-center justify-center py-4">
            <svg
              viewBox="0 0 500 120"
              className="w-full max-w-[420px] h-auto opacity-70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 60 Q 70 10, 140 60 T 280 60 T 420 60 T 490 60"
                stroke="#12F095"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
              <path
                d="M10 70 C 80 110, 180 20, 260 70 C 340 120, 430 30, 490 70"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeOpacity="0.4"
              />
              <circle cx="140" cy="60" r="5" fill="#12F095" />
              <circle cx="280" cy="60" r="5" fill="#12F095" />
              <circle cx="420" cy="60" r="5" fill="#12F095" />
            </svg>
          </div>

          {/* Bottom Narrative Caption */}
          <div className="relative z-10">
            <h2 className="text-[20px] sm:text-[24px] lg:text-[26px] font-bold text-white tracking-tight leading-snug m-0">
              Built at the intersection of dental craftsmanship &amp; modern data science.
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#BDBDBD] mt-2 max-w-[580px] leading-relaxed m-0">
              Dedicated to dental laboratory owners, production technicians, and customer service teams who build precision smiles every single day.
            </p>
          </div>
        </div>

        {/* Right Panel: The Promise Card */}
        <div className="bg-[#0A0A0A] text-white border border-[#222222] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between gap-6 min-h-[340px] shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Neon Glow */}
          <div
            className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[#12F095]/10 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Pulse Icon Emblem */}
          <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
            <svg
              width="32"
              height="32"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 18h6l3-7 4 13 3-6h6"
                stroke="#12F095"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Slogan & Description */}
          <div className="relative z-10">
            <div className="text-[28px] sm:text-[32px] font-extrabold tracking-[-0.02em] text-white leading-tight">
              See clearly.<br />
              Grow smarter.
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#BDBDBD] mt-3 leading-relaxed m-0">
              Our promise to every dental lab we work with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
