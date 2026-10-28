import React from 'react';

export interface StoryCardData {
  id: string;
  tag: string;
  title: string;
  labName: string;
  location: string;
  metricBadge: string;
  graphicType: 'retention' | 'cross-sell' | 'sales-team';
}

interface MoreStoriesGridProps {
  onOpenStory?: (storyId: string) => void;
}

const STORIES: StoryCardData[] = [
  {
    id: 'midwest-retention',
    tag: 'RETENTION',
    title:
      'How Midwest Dental Studio caught silent doctor attrition 45 days before dentists stopped sending cases.',
    labName: 'Midwest Dental Studio',
    location: 'Chicago, IL • 18 Technicians',
    metricBadge: '+$126K Preserved Revenue',
    graphicType: 'retention',
  },
  {
    id: 'summit-cross-sell',
    tag: 'CROSS-SELL',
    title:
      'Scaling high-margin premium zirconia restorations across 60 existing general dentist accounts.',
    labName: 'Summit Milling Center',
    location: 'Denver, CO • Milling Center',
    metricBadge: '+34% Case Value Growth',
    graphicType: 'cross-sell',
  },
  {
    id: 'vanguard-sales-team',
    tag: 'SALES TEAM',
    title:
      'How a 4-person sales team eliminated manual spreadsheets and closed 28 new accounts in 6 months.',
    labName: 'Vanguard Dental Arts',
    location: 'Dallas, TX • Commercial Lab',
    metricBadge: '28 New Clinic Accounts',
    graphicType: 'sales-team',
  },
];

export function MoreStoriesGrid({ onOpenStory }: MoreStoriesGridProps) {
  return (
    <section className="w-full pb-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] mb-8">
          More stories
        </h2>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => onOpenStory?.(story.id)}
              className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
            >
              {/* Card Visual Header */}
              <div className="h-[170px] bg-gradient-to-br from-[#121212] to-[#1E1E1E] relative overflow-hidden flex items-center justify-center p-6 border-b border-[#2A2A2A]">
                {/* Background Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      'radial-gradient(#12F095 1px, transparent 1px), radial-gradient(#12F095 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                />

                {/* Custom Vector Illustration per Card */}
                {story.graphicType === 'retention' && (
                  <div className="relative z-10 w-full flex items-center justify-between px-3">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[11px] font-mono font-bold text-[#12F095] tracking-wider uppercase">
                        AT-RISK ALERT
                      </span>
                      <span className="text-[15px] font-bold text-white tracking-tight">
                        Dr. Harrison Clinic
                      </span>
                      <span className="text-[12px] text-[#9A9A9A]">
                        Volume: -32% vs 60-day baseline
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#12F095]/10 border border-[#12F095]/30 flex items-center justify-center shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12F095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                  </div>
                )}

                {story.graphicType === 'cross-sell' && (
                  <div className="relative z-10 w-full flex items-center justify-between px-3">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[11px] font-mono font-bold text-[#12F095] tracking-wider uppercase">
                        PRODUCT OPPORTUNITY
                      </span>
                      <span className="text-[15px] font-bold text-white tracking-tight">
                        Zirconia + Custom Ti Base
                      </span>
                      <span className="text-[12px] text-[#9A9A9A]">
                        48 Doctors Ordering Only C&B
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#12F095]/10 border border-[#12F095]/30 flex items-center justify-center shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12F095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="20" x2="12" y2="10" />
                        <line x1="18" y1="20" x2="18" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="16" />
                      </svg>
                    </div>
                  </div>
                )}

                {story.graphicType === 'sales-team' && (
                  <div className="relative z-10 w-full flex items-center justify-between px-3">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[11px] font-mono font-bold text-[#12F095] tracking-wider uppercase">
                        FIELD ROUTE PLAYBOOK
                      </span>
                      <span className="text-[15px] font-bold text-white tracking-tight">
                        Daily High-Priority Targets
                      </span>
                      <span className="text-[12px] text-[#9A9A9A]">
                        4 Reps • Automated Daily Briefs
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#12F095]/10 border border-[#12F095]/30 flex items-center justify-center shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12F095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Metric Overlay Badge */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-[#0A0A0A]/90 text-[#12F095] border border-white/10 shadow-sm backdrop-blur-md">
                    {story.metricBadge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] font-bold text-[#067A47] tracking-wider uppercase">
                      {story.tag}
                    </span>
                    <span className="text-[12px] text-[#7A7A7A]">
                      {story.location}
                    </span>
                  </div>

                  <b className="block text-[18px] sm:text-[19px] font-bold text-[#0A0A0A] leading-[1.35] group-hover:text-[#067A47] transition-colors">
                    {story.title}
                  </b>
                </div>

                {/* Read Link */}
                <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between">
                  <span className="font-bold text-[15px] text-[#067A47] inline-flex items-center gap-1.5 group-hover:text-[#06663C] transition-colors">
                    <span>Read story</span>
                    <span
                      aria-hidden="true"
                      className="transform transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                  <span className="text-[12px] font-semibold text-[#8A8A8A]">
                    4 min read
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
