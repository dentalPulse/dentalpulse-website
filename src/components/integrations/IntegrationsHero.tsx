import React from 'react';

export function IntegrationsHero() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-22 pb-16 sm:pb-20 px-6 text-center">
      <div className="max-w-[860px] mx-auto flex flex-col items-center gap-4 sm:gap-5">
        <p className="m-0 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
          INTEGRATIONS
        </p>
        <h1 className="m-0 text-[38px] sm:text-[50px] lg:text-[64px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]">
          Plugs into the systems your lab already runs.
        </h1>
        <p className="m-0 text-[17px] sm:text-[18px] leading-[1.6] text-[#5C5C5C] max-w-[640px]">
          Dental Pulse pulls customer, case and invoice data from your existing tools automatically — so there’s nothing new for your team to key in.
        </p>
      </div>

      {/* Code-Rendered Central Data Hub Diagram */}
      <div
        role="region"
        aria-label="Dental Pulse central data integration architecture diagram"
        className="max-w-[900px] mx-auto mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-5 select-none"
      >
        {/* Left Input Sources: LMS & Accounting */}
        <div className="flex flex-col gap-3 sm:gap-3.5">
          <div className="w-[140px] sm:w-[160px] min-h-[64px] border border-dashed border-[#D6D6D6] hover:border-[#067A47] rounded-[16px] bg-white p-2.5 flex flex-col items-center justify-center shadow-xs transition-colors">
            <span className="text-[13.5px] font-extrabold text-[#0A0A0A]">LMS &amp; Cases</span>
            <span className="text-[11px] text-[#6E6E6E] font-medium">Magic Touch, Labstar</span>
          </div>
          <div className="w-[140px] sm:w-[160px] min-h-[64px] border border-dashed border-[#D6D6D6] hover:border-[#067A47] rounded-[16px] bg-white p-2.5 flex flex-col items-center justify-center shadow-xs transition-colors">
            <span className="text-[13.5px] font-extrabold text-[#0A0A0A]">Accounting</span>
            <span className="text-[11px] text-[#6E6E6E] font-medium">QuickBooks, Xero</span>
          </div>
        </div>

        {/* Data Stream Line (Left to Center) */}
        <span
          className="w-10 sm:w-16 h-0.5 bg-[repeating-linear-gradient(90deg,#067A47_0_6px,transparent_6px_12px)] hidden sm:block"
          aria-hidden="true"
        />

        {/* Central DentalPulse Hub Engine */}
        <div className="w-[135px] sm:w-[150px] h-[135px] sm:h-[150px] rounded-[36px] bg-[#0A0A0A] border border-[#222222] flex flex-col items-center justify-center shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] shrink-0 relative group">
          <svg
            width="64"
            height="64"
            viewBox="0 0 34 34"
            className="group-hover:scale-105 transition-transform"
            aria-hidden="true"
          >
            <path
              d="M5 18h6l3-7 4 13 3-6h8"
              fill="none"
              stroke="#12F095"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] font-mono tracking-widest text-[#BDBDBD] uppercase mt-1">
            DentalPulse
          </span>
        </div>

        {/* Data Stream Line (Center to Right) */}
        <span
          className="w-10 sm:w-16 h-0.5 bg-[repeating-linear-gradient(90deg,#067A47_0_6px,transparent_6px_12px)] hidden sm:block"
          aria-hidden="true"
        />

        {/* Right Output Channels: CRM & Messaging */}
        <div className="flex flex-col gap-3 sm:gap-3.5">
          <div className="w-[140px] sm:w-[160px] min-h-[64px] border border-dashed border-[#D6D6D6] hover:border-[#067A47] rounded-[16px] bg-white p-2.5 flex flex-col items-center justify-center shadow-xs transition-colors">
            <span className="text-[13.5px] font-extrabold text-[#0A0A0A]">CRM &amp; Web</span>
            <span className="text-[11px] text-[#6E6E6E] font-medium">HubSpot, Salesforce</span>
          </div>
          <div className="w-[140px] sm:w-[160px] min-h-[64px] border border-dashed border-[#D6D6D6] hover:border-[#067A47] rounded-[16px] bg-white p-2.5 flex flex-col items-center justify-center shadow-xs transition-colors">
            <span className="text-[13.5px] font-extrabold text-[#0A0A0A]">Messaging</span>
            <span className="text-[11px] text-[#6E6E6E] font-medium">WhatsApp, SMS, Email</span>
          </div>
        </div>
      </div>
    </section>
  );
}
