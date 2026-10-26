import React from 'react';

export function SecuritySection() {
  const securityFeatures = [
    {
      tag: 'AES-256 / TLS 1.3',
      title: 'End-to-end encryption',
      description:
        'All laboratory, financial, and case records are encrypted in transit via TLS 1.3 and at rest using military-grade AES-256.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      tag: 'GRANULAR PERMISSIONS',
      title: 'Role-based access',
      description:
        'Owners, operations leads, and territory reps see only the accounts, pricing tiers, and actions relevant to their assigned scope.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      tag: 'HIPAA & SOC 2 READY',
      title: 'Enterprise compliance',
      description:
        'Built to meet and exceed healthcare compliance benchmarks with strict audit logging, access controls, and zero third-party leakage.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      tag: 'DATA SOVEREIGNTY',
      title: 'Your data stays yours',
      description:
        'Your proprietary lab data is never used to train public AI models. Export full backups anytime with 100% data sovereignty.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="security" className="w-full bg-white py-20 md:py-26 px-6 border-t border-[#F0F0F0]">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="max-w-[700px]">
          <p className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase">
            SECURITY &amp; TRUST
          </p>
          <h2 className="m-0 text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A]">
            Secure by design.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] text-[#5C5C5C]">
            Your customer data is your lab’s most valuable asset. We treat it that way — with rigorous enterprise safeguards at every level.
          </p>
        </div>

        {/* 4 Security Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {securityFeatures.map((feat) => (
            <div
              key={feat.title}
              className="bg-[#FAFAFA] hover:bg-white hover:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.12)] transition-all border border-[#E8E8E8] hover:border-[#D1D5DB] rounded-[20px] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-[12px] bg-[#E3FCEF] flex items-center justify-center shrink-0">
                    {feat.icon}
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#06663C] bg-[#E3FCEF] px-2 py-0.5 rounded-full tracking-wider uppercase">
                    {feat.tag}
                  </span>
                </div>
                <h3 className="m-0 text-[18px] sm:text-[19px] font-extrabold text-[#0A0A0A] tracking-tight">
                  {feat.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-[#5C5C5C] m-0">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAEAEA] flex items-center gap-2 text-[12px] font-semibold text-[#067A47]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Enterprise Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
