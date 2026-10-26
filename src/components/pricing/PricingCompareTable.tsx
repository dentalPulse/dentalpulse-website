import React from 'react';

interface FeatureRow {
  name: string;
  starter: string | boolean;
  growth: string | boolean;
  growthAi: string | boolean;
  enterprise: string | boolean;
}

interface FeatureCategory {
  category: string;
  rows: FeatureRow[];
}

const COMPARISON_DATA: FeatureCategory[] = [
  {
    category: 'USERS & ACCESS',
    rows: [
      {
        name: 'Users included',
        starter: '3',
        growth: '5',
        growthAi: '10',
        enterprise: 'Unlimited',
      },
      {
        name: 'Extra users',
        starter: '$25/mo',
        growth: '$25/mo',
        growthAi: '$25/mo',
        enterprise: 'Included',
      },
      {
        name: 'API access',
        starter: false,
        growth: false,
        growthAi: 'Limited',
        enterprise: 'Unlimited',
      },
    ],
  },
  {
    category: 'CUSTOMER INTELLIGENCE',
    rows: [
      {
        name: 'CRM & customer database',
        starter: true,
        growth: true,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'Dashboard & analytics',
        starter: true,
        growth: true,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'Lead & task management',
        starter: true,
        growth: true,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'Website tracking',
        starter: true,
        growth: true,
        growthAi: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'MARKETING',
    rows: [
      {
        name: 'Email, SMS & WhatsApp marketing',
        starter: false,
        growth: true,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'Customer segments',
        starter: false,
        growth: true,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'Campaign builder & automation',
        starter: false,
        growth: true,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'Automated re-engagement sequences',
        starter: false,
        growth: true,
        growthAi: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'AI & PREDICTIVE SUITE',
    rows: [
      {
        name: 'AI insights & signals',
        starter: false,
        growth: false,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'Revenue forecasting',
        starter: false,
        growth: false,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'Churn prediction',
        starter: false,
        growth: false,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'AI business assistant',
        starter: false,
        growth: false,
        growthAi: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'SUPPORT & SERVICES',
    rows: [
      {
        name: 'Standard email support',
        starter: true,
        growth: true,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'Priority onboarding support',
        starter: false,
        growth: false,
        growthAi: true,
        enterprise: true,
      },
      {
        name: 'Dedicated success manager',
        starter: false,
        growth: false,
        growthAi: false,
        enterprise: true,
      },
      {
        name: 'Enterprise SLA & custom training',
        starter: false,
        growth: false,
        growthAi: false,
        enterprise: true,
      },
    ],
  },
];

function CellValue({ value, isGrowth }: { value: string | boolean; isGrowth?: boolean }) {
  if (typeof value === 'boolean') {
    if (value) {
      return (
        <span className="inline-flex items-center justify-center">
          <svg
            className={`w-5 h-5 ${isGrowth ? 'text-[#067A47]' : 'text-[#067A47]'}`}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="9" fill="#E8F8F0" />
            <path
              d="M6 10.2L8.7 13L14 7"
              stroke="#067A47"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      );
    }
    return <span className="text-[#9CA3AF] text-[16px] font-light">—</span>;
  }

  return (
    <span
      className={`text-[13.5px] font-semibold ${
        value === 'Unlimited' || value === 'Included'
          ? 'text-[#067A47]'
          : 'text-[#1F2937]'
      }`}
    >
      {value}
    </span>
  );
}

export function PricingCompareTable() {
  return (
    <section className="w-full bg-white pb-24 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <p className="font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase mb-2">
            DETAILED BREAKDOWN
          </p>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold tracking-[-0.03em] text-[#0A0A0A]">
            Compare plans
          </h2>
          <p className="text-[16px] text-[#5C5C5C] mt-2 max-w-[640px]">
            Every feature, seat limit, and capability across all four tiers so you can choose with complete clarity.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="border border-[#E5E7EB] rounded-[24px] overflow-hidden bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              {/* Header */}
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="py-5 px-6 text-[14px] font-bold text-[#111827] w-[32%]">
                    Features
                  </th>
                  <th className="py-5 px-4 text-center text-[14px] font-extrabold text-[#111827] w-[17%]">
                    Starter
                  </th>
                  <th className="py-5 px-4 text-center text-[14px] font-extrabold text-[#0A0A0A] bg-[#12F095]/10 w-[17%] border-x border-[#E5E7EB]/60">
                    <div className="inline-flex items-center gap-1.5 justify-center">
                      <span>Growth</span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#067A47] bg-[#BDF5DA] px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-4 text-center text-[14px] font-extrabold text-[#111827] w-[17%]">
                    Growth AI
                  </th>
                  <th className="py-5 px-4 text-center text-[14px] font-extrabold text-[#111827] w-[17%]">
                    Enterprise
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-[#E5E7EB]">
                {COMPARISON_DATA.map((group, groupIdx) => (
                  <React.Fragment key={groupIdx}>
                    {/* Category Title Header */}
                    <tr className="bg-[#F3F4F6]/70">
                      <td
                        colSpan={5}
                        className="py-3 px-6 text-[12px] font-mono font-bold uppercase tracking-[0.08em] text-[#4B5563]"
                      >
                        {group.category}
                      </td>
                    </tr>

                    {/* Category Rows */}
                    {group.rows.map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        className="hover:bg-[#F9FAFB] transition-colors"
                      >
                        <td className="py-4 px-6 text-[14px] font-medium text-[#374151]">
                          {row.name}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <CellValue value={row.starter} />
                        </td>
                        <td className="py-4 px-4 text-center bg-[#12F095]/5 border-x border-[#E5E7EB]/60">
                          <CellValue value={row.growth} isGrowth={true} />
                        </td>
                        <td className="py-4 px-4 text-center">
                          <CellValue value={row.growthAi} />
                        </td>
                        <td className="py-4 px-4 text-center">
                          <CellValue value={row.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
