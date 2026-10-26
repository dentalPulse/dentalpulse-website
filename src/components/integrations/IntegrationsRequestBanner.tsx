import React from 'react';
import Link from 'next/link';

export function IntegrationsRequestBanner() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 px-6">
      <div className="max-w-[1240px] mx-auto bg-[#EEFDF5] border border-[#BDF5DA] rounded-[28px] p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-xs">
        {/* Left Column: Heading and description */}
        <div className="max-w-[640px]">
          <h2 className="m-0 text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold tracking-[-0.03em] leading-[1.1] text-[#0A0A0A]">
            Don’t see your system?
          </h2>
          <p className="m-0 mt-3 text-[16px] sm:text-[17px] text-[#333333] leading-[1.6]">
            Tell us what you use. Growth AI includes API access, and Enterprise plans include unlimited API access and custom connections.
          </p>
        </div>

        {/* Right Column: Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="https://app.dentalpulseai.com"
            className="inline-flex items-center justify-center bg-[#0A0A0A] text-white text-[15px] sm:text-[16px] font-bold px-7 py-3.5 sm:py-4 rounded-full hover:bg-[#222222] transition-colors shadow-sm"
          >
            Request an integration
          </a>
          <Link
            href="/#book-demo"
            className="inline-flex items-center justify-center border border-[#0A0A0A] bg-transparent text-[#0A0A0A] text-[15px] sm:text-[16px] font-bold px-7 py-3.5 sm:py-4 rounded-full hover:bg-black/5 transition-colors"
          >
            Compare plans
          </Link>
        </div>
      </div>
    </section>
  );
}
