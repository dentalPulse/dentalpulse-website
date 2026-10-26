import React from 'react';
import Image from 'next/image';

export function ArchitecturePipelineSection() {
  const sources = [
    {
      title: 'Lab management systems',
      examples: 'Magic Touch, LabTrac, Evident, etc.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
    {
      title: 'Accounting & invoicing',
      examples: 'QuickBooks, Xero, Stripe, Bill.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
    },
    {
      title: 'CRM & rep touchpoints',
      examples: 'HubSpot, Salesforce, spreadsheets',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Website & lead capture',
      examples: 'Client intake, doctor portals, forms',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  const outcomes = [
    {
      symbol: '↑',
      title: 'Customer retention',
      description: 'Spot at-risk accounts 30 days earlier and stop revenue churn.',
    },
    {
      symbol: '↑',
      title: 'Lifetime value per dentist',
      description: 'Expand case mix into high-margin implants, removables, and aligners.',
    },
    {
      symbol: '↓',
      title: 'Cost to acquire customers',
      description: 'Nurture incoming leads and preserve doctor relationships automatically.',
    },
    {
      symbol: '↓',
      title: 'Hours spent on reporting',
      description: 'Zero manual exports, fragmented spreadsheets, or weekly sync bottlenecks.',
    },
  ];

  return (
    <section id="architecture" className="w-full bg-[#0A0A0A] text-white py-24 md:py-28 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="max-w-[720px]">
            <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#12F095] tracking-[0.06em] uppercase">
              HOW IT CONNECTS
            </p>
            <h2 className="m-0 text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
              The intelligence layer for your lab.
            </h2>
            <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] text-[#A3A3A3]">
              Connect your existing systems in minutes. Dental Pulse sits on top, continuously unifying data, predicting trends and orchestrating actions.
            </p>
          </div>
          <a
            href="#book-demo"
            className="text-[#12F095] font-bold text-[15px] sm:text-[16px] hover:text-[#00df83] transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <span>See all integrations</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* 3-Column Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-14">
          {/* Column 1: SOURCES */}
          <div className="border border-[#262626] rounded-[22px] p-6 sm:p-7 bg-[#141414] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#222222]">
                <span className="font-mono text-[12px] font-extrabold text-[#8E8E8E] uppercase tracking-wider">
                  01 / SOURCES
                </span>
                <span className="text-[12px] text-[#737373] font-medium">Lab data inputs</span>
              </div>

              <div className="flex flex-col gap-3">
                {sources.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#1C1C1C] hover:bg-[#222222] transition-colors border border-[#2B2B2B] rounded-[14px] p-3.5 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#262626] text-[#12F095] flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[14px] font-bold text-white leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[12px] text-[#8E8E8E] mt-0.5 truncate">
                        {item.examples}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#222222] text-[12px] text-[#737373] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12F095]" />
              <span>Real-time webhook sync &amp; automated ingestion</span>
            </div>
          </div>

          {/* Column 2: CENTERPIECE (DENTAL PULSE ENGINE) */}
          <div className="bg-[#12F095] text-[#0A0A0A] rounded-[22px] p-7 sm:p-9 flex flex-col justify-between items-center text-center shadow-[0_20px_50px_rgba(18,240,149,0.22)] relative overflow-hidden">
            {/* Top Indicator */}
            <div className="w-full flex items-center justify-between pb-4 mb-2 border-b border-[#0A0A0A]/15">
              <span className="font-mono text-[12px] font-extrabold uppercase tracking-wider text-[#065F46]">
                02 / THE ENGINE
              </span>
              <span className="text-[12px] font-bold text-[#065F46] bg-[#0A0A0A]/10 px-2.5 py-0.5 rounded-full">
                Live Analysis
              </span>
            </div>

            {/* Center Brand Identity */}
            <div className="my-auto py-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-[18px] bg-[#0A0A0A] text-[#12F095] flex items-center justify-center font-extrabold text-[24px] shadow-lg mb-4">
                DP
              </div>
              <h3 className="text-[26px] sm:text-[28px] font-black tracking-tight text-[#0A0A0A] m-0">
                Dental Pulse
              </h3>
              <p className="mt-1 font-mono text-[13px] font-bold uppercase tracking-wider text-[#065F46]">
                Unify • Predict • Recommend • Automate
              </p>

              {/* 4 Capability Pills inside Engine */}
              <div className="mt-6 w-full flex flex-col gap-2 text-left">
                <div className="bg-[#0A0A0A] text-white rounded-[12px] px-3.5 py-2.5 text-[13px] font-semibold flex items-center justify-between">
                  <span>360° Account Graph</span>
                  <span className="text-[#12F095] text-[11px] font-mono">UNIFIED</span>
                </div>
                <div className="bg-[#0A0A0A] text-white rounded-[12px] px-3.5 py-2.5 text-[13px] font-semibold flex items-center justify-between">
                  <span>Predictive Churn &amp; Volume ML</span>
                  <span className="text-[#12F095] text-[11px] font-mono">PREDICT</span>
                </div>
                <div className="bg-[#0A0A0A] text-white rounded-[12px] px-3.5 py-2.5 text-[13px] font-semibold flex items-center justify-between">
                  <span>AI Game Plan Sequencer</span>
                  <span className="text-[#12F095] text-[11px] font-mono">ACTION</span>
                </div>
                <div className="bg-[#0A0A0A] text-white rounded-[12px] px-3.5 py-2.5 text-[13px] font-semibold flex items-center justify-between">
                  <span>Multi-Channel Orchestration</span>
                  <span className="text-[#12F095] text-[11px] font-mono">AUTO</span>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="w-full pt-4 border-t border-[#0A0A0A]/15 text-[12px] text-[#065F46] font-bold flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#065F46] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#065F46]" />
              </span>
              <span>Proprietary dental laboratory algorithms</span>
            </div>
          </div>

          {/* Column 3: OUTCOMES */}
          <div className="border border-[#262626] rounded-[22px] p-6 sm:p-7 bg-[#141414] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#222222]">
                <span className="font-mono text-[12px] font-extrabold text-[#12F095] uppercase tracking-wider">
                  03 / OUTCOMES
                </span>
                <span className="text-[12px] text-[#737373] font-medium">Measurable ROI</span>
              </div>

              <div className="flex flex-col gap-3">
                {outcomes.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#1C1C1C] hover:bg-[#222222] transition-colors border border-[#2B2B2B] rounded-[14px] p-3.5 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#067A47]/20 border border-[#067A47]/40 text-[#12F095] flex items-center justify-center font-bold text-[16px] shrink-0 mt-0.5">
                      {item.symbol}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[14px] font-bold text-white leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[12px] text-[#8E8E8E] mt-0.5 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#222222] text-[12px] text-[#737373] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12F095]" />
              <span>Proven across $150M+ in lab case volume</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
