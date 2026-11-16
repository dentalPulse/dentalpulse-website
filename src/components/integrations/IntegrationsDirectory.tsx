import React from 'react';

interface IntegrationItem {
  name: string;
  badge?: React.ReactNode;
  initials?: string;
  isPopular?: boolean;
}

interface IntegrationCategory {
  title: string;
  description: string;
  items: IntegrationItem[];
}

export function IntegrationsDirectory() {
  const categories: IntegrationCategory[] = [
    {
      title: 'Lab management systems',
      description: 'Cases, products, turnaround and remakes — the core of every customer signal.',
      items: [
        { name: 'Magic Touch', initials: 'MT' },
        { name: 'Atlanta Based Systems', initials: 'ABS' },
      ],
    },
    {
      title: 'Accounting & invoicing',
      description: 'Revenue, payment behaviour and credit — for true lifetime value per dentist.',
      items: [
        { name: 'QuickBooks Online', initials: 'QB' },
      ],
    },
    {
      title: 'Messaging channels',
      description: 'Send campaigns and automated follow-ups where dentists actually read them.',
      items: [
        {
          name: 'Email',
          badge: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          ),
        },
        {
          name: 'SMS',
          badge: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="6" y="2" width="12" height="20" rx="2" />
              <path d="M11 18h2" />
            </svg>
          ),
        }
      ],
    },
    {
      title: 'Website & CRM',
      description: 'Track which practices visit your site and keep contacts in sync.',
      items: [
        {
          name: 'Open API',
          badge: (
            <span className="font-mono text-[12px] font-bold text-[#067A47]">
              API
            </span>
          ),
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-white pb-24 sm:pb-32 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 sm:gap-14">
        {categories.map((category, idx) => (
          <React.Fragment key={category.title}>
            {idx > 0 && <div className="h-[1px] bg-[#E6E6E6] w-full" aria-hidden="true" />}

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between">
              {/* Left Column: Category Narrative */}
              <div className="flex-1 lg:max-w-[340px]">
                <h2 className="m-0 text-[24px] sm:text-[26px] font-extrabold tracking-[-0.02em] text-[#0A0A0A]">
                  {category.title}
                </h2>
                <p className="mt-2.5 text-[15px] sm:text-[16px] leading-[1.6] text-[#5C5C5C]">
                  {category.description}
                </p>
              </div>

              {/* Right Column: Integration Cards Grid */}
              <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white border border-[#E6E6E6] hover:border-[#12F095] hover:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.12)] rounded-[16px] p-4 sm:p-4.5 flex gap-3.5 items-center transition-all group"
                  >
                    {/* Badge Icon or Monogram */}
                    <span
                      className={`w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 ${item.badge
                        ? 'bg-[#E3FCEF] text-[#067A47]'
                        : 'bg-[#F2F2F2] text-[#0A0A0A] font-mono text-[12px] font-bold'
                        }`}
                      aria-hidden="true"
                    >
                      {item.badge || item.initials}
                    </span>

                    {/* Integration Name */}
                    <span className="font-extrabold text-[15px] sm:text-[16px] text-[#0A0A0A] group-hover:text-[#067A47] transition-colors flex-1">
                      {item.name}
                    </span>

                    {/* Active Check Icon */}
                    <span
                      title="Active integration"
                      aria-label="Active"
                      className="w-5 h-5 rounded-full bg-[#E3FCEF] text-[#067A47] flex items-center justify-center shrink-0"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
