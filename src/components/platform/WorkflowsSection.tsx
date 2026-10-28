import React from 'react';

export function WorkflowsSection() {
  const workflowNodes = [
    {
      badge: 'TRIGGER',
      badgeClass: 'bg-[#0A0A0A] text-[#12F095] border border-[#222222]',
      title: 'New dentist sends first case',
      description: 'Auto-detected from lab management system',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      badge: 'EMAIL',
      badgeClass: 'bg-[#E3FCEF] text-[#06663C] border border-[#A7F3D0]',
      title: 'Welcome pack + lab contact sheet',
      description: 'Personalized with assigned technician & portal login',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      badge: 'TASK',
      badgeClass: 'bg-[#E3FCEF] text-[#06663C] border border-[#A7F3D0]',
      title: 'Rep check-in call after case delivery',
      description: 'Created in rep queue 24 hours after case marked delivered',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      badge: 'WAIT',
      badgeClass: 'bg-[#F3F4F6] text-[#4B5563] border border-[#E5E7EB]',
      title: '14 days — if no second case…',
      description: 'Branch rule checks case history automatically',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      badge: 'WHATSAPP',
      badgeClass: 'bg-[#E3FCEF] text-[#06663C] border border-[#A7F3D0]',
      title: 'Friendly nudge with pickup booking link',
      description: 'Direct WhatsApp message with quick-schedule button',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="auto" className="w-full bg-[#FAFAFA] py-18 md:py-24 px-6 border-t border-[#F0F0F0]">
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: Visual Workflow Tree */}
        <div className="flex-[1.3] w-full max-w-[620px]">
          <div
            role="region"
            aria-label="Automated onboarding workflow tree diagram demonstrating trigger to multi-channel execution"
            className="bg-white border border-[#E6E6E6] rounded-[22px] p-6 sm:p-8 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] text-[#0A0A0A]"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#F0F0F0]">
              <div>
                <div className="text-[18px] sm:text-[19px] font-extrabold text-[#0A0A0A]">
                  Playbook: New Client Onboarding
                </div>
                <div className="text-[13px] text-[#737373] mt-0.5 font-medium">
                  Triggered on first case ingestion
                </div>
              </div>
              <span className="text-[12px] font-bold text-[#06663C] bg-[#E3FCEF] px-3 py-1 rounded-full shrink-0">
                Active • Multi-channel
              </span>
            </div>

            {/* Workflow Tree Nodes */}
            <div className="mt-6 flex flex-col items-center">
              {workflowNodes.map((node, index) => {
                const isLast = index === workflowNodes.length - 1;
                return (
                  <React.Fragment key={node.badge}>
                    {/* Node Card */}
                    <div className="w-full bg-[#FDFDFD] hover:bg-white transition-colors border border-[#EBEBEB] hover:border-[#D1D5DB] rounded-[16px] p-4 flex items-start gap-3.5 shadow-xs">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-extrabold tracking-wider shrink-0 flex items-center gap-1.5 ${node.badgeClass}`}>
                        {node.icon}
                        {node.badge}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[14.5px] sm:text-[15px] font-bold text-[#0A0A0A] leading-snug">
                          {node.title}
                        </div>
                        <div className="text-[12.5px] sm:text-[13px] text-[#5C5C5C] mt-0.5 leading-relaxed">
                          {node.description}
                        </div>
                      </div>
                    </div>

                    {/* Connector line between steps */}
                    {!isLast && (
                      <div className="flex flex-col items-center my-1.5">
                        <div className="w-[2px] h-4 bg-[#D1D5DB]" />
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-[#9CA3AF]">
                          <path d="M5 6L0 0h10L5 6z" fill="currentColor" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="flex-1 max-w-[540px]">
          <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            04 — AUTOMATED WORKFLOWS
          </p>
          <h2 className="m-0 text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A]">
            Consistent follow-up, without the manual effort.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] text-[#5C5C5C]">
            Set up playbooks once for onboarding, win-back and cross-selling. Dental Pulse runs them across email, SMS, WhatsApp and rep tasks.
          </p>

          <ul className="mt-6 p-0 list-none flex flex-col gap-3 text-[15px] sm:text-[16px] text-[#0A0A0A]">
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Pre-built playbooks for dental lab milestones</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Multi-channel delivery across email, SMS and WhatsApp</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Automated task generation for field and inside reps</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
