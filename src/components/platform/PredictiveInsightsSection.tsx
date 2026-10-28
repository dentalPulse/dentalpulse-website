import React from 'react';

export function PredictiveInsightsSection() {
  const alerts = [
    {
      id: 'lakeside',
      type: 'Churn risk',
      clinic: 'Lakeside Family Dentistry',
      badgeColor: 'bg-white',
      glow: false,
      description: 'No cases in 23 days. Usual gap is 4 days. Lifetime value $96K.',
    },
    {
      id: 'parkave',
      type: 'Quality risk',
      clinic: 'Park Ave Orthodontics',
      badgeColor: 'bg-white',
      glow: false,
      description: 'Remakes up 3x this month — mostly aligners. Flag for QC review.',
    },
    {
      id: 'riverbend',
      type: 'Opportunity',
      clinic: 'Riverbend Dental',
      badgeColor: 'bg-[#12F095]',
      glow: true,
      description: 'Strong crown volume, no implant cases. Similar accounts spend $18K/yr on implants.',
    },
    {
      id: 'drchen',
      type: 'Growth',
      clinic: 'Dr. Chen & Associates',
      badgeColor: 'bg-[#12F095]',
      glow: true,
      description: 'Case volume up 30% this quarter. Good moment to introduce digital workflow.',
    },
  ];

  return (
    <section id="alerts" className="w-full bg-[#FAFAFA] py-18 md:py-24 px-6 border-t border-[#F0F0F0]">
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: Dark Real-Time Alert Feed UI Card */}
        <div className="flex-[1.3] w-full max-w-[620px]">
          <div
            role="region"
            aria-label="Real-time predictive alerts feed showing account churn risk, quality flags, and growth opportunities"
            className="bg-[#0A0A0A] text-white border border-[#222222] rounded-[22px] p-6 sm:p-7 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.6)]"
          >
            {/* Feed Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#222222]">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12F095] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#12F095]" />
                </span>
                <span className="text-[17px] sm:text-[18px] font-extrabold tracking-tight text-white">
                  Alerts
                </span>
              </div>
              <span className="text-[11px] sm:text-[12px] font-mono text-[#8E8E8E] bg-[#1A1A1A] px-2.5 py-1 rounded-md border border-[#2A2A2A]">
                Updated 6:00 AM
              </span>
            </div>

            {/* Alert List */}
            <div className="flex flex-col gap-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="bg-[#141414] hover:bg-[#181818] transition-colors border border-[#262626] rounded-[14px] p-4 flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${alert.badgeColor} ${
                        alert.glow ? 'shadow-[0_0_8px_#12F095]' : ''
                      }`}
                      aria-hidden="true"
                    />
                    <div className="text-[14px] sm:text-[15px] font-bold text-white tracking-tight">
                      <span>{alert.type}</span>
                      <span className="text-[#6E6E6E] mx-1.5 font-normal">•</span>
                      <span className="text-[#EDEDED]">{alert.clinic}</span>
                    </div>
                  </div>
                  <p className="m-0 text-[13px] sm:text-[13.5px] leading-relaxed text-[#A3A3A3] pl-4.5">
                    {alert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="flex-1 max-w-[540px]">
          <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            02 — PREDICTIVE INSIGHTS
          </p>
          <h2 className="m-0 text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A]">
            Hear the warning signs while there’s still time.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] text-[#5C5C5C]">
            Dental Pulse learns each dentist’s normal rhythm and flags meaningful changes — drops in volume, longer gaps between cases, rising remakes, or growth worth acting on.
          </p>

          <ul className="mt-6 p-0 list-none flex flex-col gap-3 text-[15px] sm:text-[16px] text-[#0A0A0A]">
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Churn prediction for every account</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Cross-sell and upsell opportunity detection</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Alerts routed to the right rep automatically</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
