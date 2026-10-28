import React from 'react';
import Link from 'next/link';

export function ManagersHero() {
  const reps = [
    {
      initials: 'JM',
      name: 'Jordan M.',
      revenue: '$142K',
      atRisk: '2',
      tasksDone: '92%',
      tasksWidth: '92%',
      barColor: 'bg-[#067A47]',
      isWarning: false,
    },
    {
      initials: 'AR',
      name: 'Aisha R.',
      revenue: '$128K',
      atRisk: '3',
      tasksDone: '81%',
      tasksWidth: '81%',
      barColor: 'bg-[#067A47]',
      isWarning: false,
    },
    {
      initials: 'TK',
      name: 'Tom K.',
      revenue: '$96K',
      atRisk: '7',
      tasksDone: '44%',
      tasksWidth: '44%',
      barColor: 'bg-[#0A0A0A]',
      isWarning: true,
    },
    {
      initials: 'LS',
      name: 'Lena S.',
      revenue: '$117K',
      atRisk: '1',
      tasksDone: '88%',
      tasksWidth: '88%',
      barColor: 'bg-[#067A47]',
      isWarning: false,
    },
  ];

  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-18 sm:pb-24 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-14 items-center justify-between">
        {/* Left Column: Manager Narrative */}
        <div className="flex-1 max-w-[560px]">
          <p className="m-0 mb-4 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            FOR SALES &amp; CUSTOMER SUCCESS MANAGERS
          </p>
          <h1 className="m-0 text-[38px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]">
            Coach your team with the numbers that matter.
          </h1>
          <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.6] text-[#5C5C5C]">
            See every rep’s accounts, alerts and follow-through in one place. Set objectives, assign playbooks and know who needs help — before the month is over.
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

        {/* Right Column: Code-Rendered Team Performance Table Card */}
        <div className="flex-[1.15] w-full max-w-[620px]">
          <div
            role="region"
            aria-label="Team performance table comparing four reps on revenue, at-risk accounts, and tasks completed"
            className="bg-white border border-[#E6E6E6] rounded-[24px] p-6 sm:p-7 md:p-8 shadow-[0_40px_70px_-45px_rgba(0,0,0,0.45)] text-[#0A0A0A] overflow-x-auto"
          >
            {/* Table Header Row */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F0F0F0]">
              <span className="text-[18px] sm:text-[19px] font-extrabold text-[#0A0A0A]">
                Team performance
              </span>
              <span className="text-[12px] sm:text-[13px] text-[#5C5C5C] font-semibold bg-[#F5F5F5] px-2.5 py-1 rounded-md">
                This month
              </span>
            </div>

            {/* Column Labels */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-2 mt-5 text-[12px] font-bold text-[#5C5C5C] px-3 min-w-[460px]">
              <span>Rep</span>
              <span>Revenue</span>
              <span>At risk</span>
              <span>Tasks done</span>
            </div>

            {/* Rep Rows */}
            <div className="flex flex-col gap-2 mt-2.5 min-w-[460px]">
              {reps.map((rep) => (
                <div
                  key={rep.name}
                  className={`grid grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-2 items-center p-3 rounded-[12px] bg-[#F5F5F5] text-[14px] ${
                    rep.isWarning ? 'border border-[#BDBDBD] shadow-xs' : ''
                  }`}
                >
                  {/* Rep Name & Avatar */}
                  <span className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#0A0A0A] text-[#12F095] flex items-center justify-center text-[11px] font-bold shrink-0">
                      {rep.initials}
                    </span>
                    <b className="text-[#0A0A0A] font-bold truncate">{rep.name}</b>
                  </span>

                  {/* Revenue */}
                  <span className="font-semibold text-[#0A0A0A]">{rep.revenue}</span>

                  {/* At Risk */}
                  <span
                    className={`${
                      rep.isWarning ? 'font-extrabold text-[#0A0A0A]' : 'text-[#5C5C5C] font-semibold'
                    }`}
                  >
                    {rep.atRisk}
                  </span>

                  {/* Tasks Done Bar */}
                  <span className="flex items-center gap-2 text-[13px] font-semibold text-[#0A0A0A]">
                    <span className="flex-1 h-2 bg-[#E6E6E6] rounded-full overflow-hidden">
                      <span
                        className={`block h-2 rounded-full ${rep.barColor}`}
                        style={{ width: rep.tasksWidth }}
                      />
                    </span>
                    <span className="w-8 text-right shrink-0">{rep.tasksDone}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Suggested Action Box */}
            <div className="mt-4 p-3.5 sm:p-4 rounded-[12px] bg-[#EEFDF5] border border-[#A7F3D0] text-[13.5px] sm:text-[14px] leading-relaxed text-[#065F46] flex items-start gap-2.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <div>
                <b className="font-bold text-[#06663C]">Suggested:</b>{' '}
                Tom has 7 at-risk accounts and open win-back tasks. Schedule a 1:1 and reassign 2 accounts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
