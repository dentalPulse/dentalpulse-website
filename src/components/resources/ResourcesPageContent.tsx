"use client";

import React from 'react';

export function ResourcesPageContent() {
  return (
    <div className="flex-1 w-full flex flex-col">
      {/* Route initialized for Phase 1 */}
      <section className="pt-20 sm:pt-24 pb-12 px-6">
        <div className="max-w-[1240px] mx-auto flex flex-wrap justify-between items-end gap-8">
          <div className="max-w-[720px]">
            <p className="font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase mb-4">
              RESOURCES
            </p>
            <h1 className="text-[40px] sm:text-[54px] lg:text-[66px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A] m-0">
              Ideas for growing a modern dental lab.
            </h1>
          </div>
          <p className="text-[17px] sm:text-[18px] text-[#5C5C5C] max-w-[400px] leading-[1.6] m-0">
            Practical guides on retention, account growth, sales and marketing for lab teams.
          </p>
        </div>
      </section>
    </div>
  );
}
