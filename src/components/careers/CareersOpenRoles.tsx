"use client";

import React, { useState } from 'react';

export interface JobRole {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  salary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export const OPEN_ROLES: JobRole[] = [
  {
    id: 'senior-fullstack-engineer',
    title: 'Senior Full-Stack Engineer (Next.js & Python)',
    team: 'Engineering',
    location: 'Remote (US / Canada / EU)',
    type: 'Full-time',
    salary: '$150,000 - $190,000 • 0.25% - 0.75% Equity',
    overview:
      'Lead the architecture and delivery of high-performance analytics dashboards, live case telemetry pipelines, and predictive churn detection tooling used daily by full-service dental laboratories.',
    responsibilities: [
      'Architect robust, performant front-end views using Next.js 16, React, and TailwindCSS.',
      'Develop backend service layers and data aggregation APIs in Python and FastAPI.',
      'Optimize complex database queries and real-time calculation engines for millions of historical dental cases.',
      'Collaborate closely with product design and customer success to iterate rapidly on lab user feedback.',
    ],
    requirements: [
      '5+ years of full-stack production software engineering experience.',
      'Deep fluency with modern React/Next.js and typed Python backends.',
      'Track record building data-intensive vertical SaaS or enterprise workflow applications.',
      'Passion for craftsmanship, pragmatic architecture, and fast delivery cycles.',
    ],
  },
  {
    id: 'data-infrastructure-engineer',
    title: 'Data Infrastructure Engineer (PMS/LMS Integrations)',
    team: 'Engineering',
    location: 'Remote (US / Canada)',
    type: 'Full-time',
    salary: '$155,000 - $195,000 • 0.25% - 0.75% Equity',
    overview:
      'Build resilient, high-throughput bidirectional synchronization connectors with dental laboratory management systems (Magic Touch, LabTrac, Evident, 3Shape) handling thousands of dental cases daily.',
    responsibilities: [
      'Design fault-tolerant data pipelines and webhook sync workers for on-premise and cloud dental LMS databases.',
      'Build schema transformation layers that unify fragmented lab case, remakes, turnaround, and invoice data.',
      'Ensure 99.99% pipeline uptime, data integrity, and enterprise-grade customer data isolation.',
      'Monitor and tune stream ingestion latency and automated recovery procedures.',
    ],
    requirements: [
      '4+ years building distributed data pipelines, ETL systems, or enterprise integrations.',
      'Hands-on expertise with PostgreSQL, Redis, message queues (Kafka/RabbitMQ), and cloud infra.',
      'Familiarity with reverse engineering legacy data protocols or healthcare integration standards is a strong plus.',
      'Disciplined mindset toward data reliability, edge-case testing, and idempotent workers.',
    ],
  },
  {
    id: 'lead-product-designer',
    title: 'Lead Product Designer (Design Systems & Workflows)',
    team: 'Product & Design',
    location: 'Remote (US / Remote)',
    type: 'Full-time',
    salary: '$135,000 - $170,000 • 0.20% - 0.60% Equity',
    overview:
      'Design clean, data-dense, distraction-free interfaces that laboratory technicians, bench managers, and account representatives love using every single day.',
    responsibilities: [
      'Own end-to-end product design from customer interviews and wireframing to high-fidelity Figma components.',
      'Expand and maintain our unified design system with accessibility, typography precision, and rich micro-interactions.',
      'Transform complex dental metrics (remake rates, turnaround velocity, share-of-wallet) into actionable, intuitive interfaces.',
      'Partner with engineers during build sprints to ensure pixel-perfect implementation.',
    ],
    requirements: [
      '4+ years of product design experience on data-dense B2B SaaS, analytical platforms, or productivity software.',
      'Mastery of Figma, component libraries, typography hierarchy, and state design.',
      'Strong portfolio demonstrating solving ambiguous workflow problems with elegant clarity.',
      'Excellent communication and empathy for real-world non-technical users.',
    ],
  },
  {
    id: 'senior-account-executive',
    title: 'Senior Enterprise Account Executive (Dental Lab Solutions)',
    team: 'Go-To-Market',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$120,000 Base / $240,000 OTE (Uncapped) • Equity',
    overview:
      'Partner directly with commercial dental laboratory owners, CFOs, and leadership teams across North America to demonstrate the revenue protection and retention power of DentalPulse.',
    responsibilities: [
      'Manage full-cycle sales from qualified discovery demos through commercial negotiation and contract closing.',
      'Run consultative ROI walkthroughs showing labs how much revenue they lose to quiet churn each month.',
      'Represent DentalPulse at major dental laboratory symposiums and industry conferences (LMT Lab Day, Cal-Lab).',
      'Provide continuous market feedback to leadership to shape the product roadmap.',
    ],
    requirements: [
      '4+ years of B2B SaaS closing experience, ideally selling vertical SaaS or healthtech to SMB / mid-market owners.',
      'Proven track record of consistently exceeding quota in consultative sales environments.',
      'Experience in the dental industry, dental lab tech, or clinical practice software is a major advantage.',
      'Superb executive presentation, active listening, and relationship-building skills.',
    ],
  },
  {
    id: 'laboratory-success-manager',
    title: 'Laboratory Customer Success Manager',
    team: 'Customer Success',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$95,000 - $125,000 + Bonus • Equity',
    overview:
      'Guide partner dental laboratories through initial LMS data connection, workflow configuration, team adoption, and monthly executive business reviews.',
    responsibilities: [
      'Lead laboratory onboarding to ensure customers see measurable value and revenue alerts within their first 14 days.',
      'Conduct monthly business reviews with lab owners, analyzing churn prevention playbooks and case velocity trends.',
      'Act as the primary champion for lab partners, resolving workflow questions and driving account retention.',
      'Create playbooks, guides, and training videos to maximize laboratory team adoption.',
    ],
    requirements: [
      '3+ years in customer success, account management, or operations at a B2B SaaS company.',
      'Experience working with dental laboratories, dental clinics, or medical devices is highly desirable.',
      'Empathetic communicator with strong data literacy and problem-solving tenacity.',
      'Relentless focus on customer happiness, retention, and time-to-value.',
    ],
  },
];

const TEAMS = ['All', 'Engineering', 'Product & Design', 'Go-To-Market', 'Customer Success'];

interface CareersOpenRolesProps {
  onSelectRole?: (role: JobRole) => void;
}

export function CareersOpenRoles({ onSelectRole }: CareersOpenRolesProps) {
  const [activeTeam, setActiveTeam] = useState('All');

  const filteredRoles =
    activeTeam === 'All'
      ? OPEN_ROLES
      : OPEN_ROLES.filter((role) => role.team === activeTeam);

  return (
    <section id="roles" className="w-full pb-28 px-6 scroll-mt-24">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading & Team Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="font-mono text-[12px] font-semibold text-[#067A47] tracking-wider uppercase block mb-2">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] m-0">
              Open roles
            </h2>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {TEAMS.map((team) => {
              const isActive = activeTeam === team;
              return (
                <button
                  key={team}
                  type="button"
                  onClick={() => setActiveTeam(team)}
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A0A0A] text-white shadow-sm'
                      : 'bg-[#F5F5F5] text-[#5C5C5C] hover:text-[#0A0A0A] hover:bg-[#EBEBEB]'
                  }`}
                >
                  {team}
                </button>
              );
            })}
          </div>
        </div>

        {/* Roles List */}
        <div className="flex flex-col border-t border-[#E6E6E6]">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              onClick={() => onSelectRole?.(role)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectRole?.(role);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View role details for ${role.title}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 px-3 border-b border-[#E6E6E6] hover:bg-[#FAFAFA] rounded-[14px] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12F095]"
            >
              <div>
                <b className="block text-[19px] sm:text-[20px] font-bold text-[#0A0A0A] group-hover:text-[#067A47] transition-colors leading-tight">
                  {role.title}
                </b>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-[14px] text-[#5C5C5C]">
                  <span className="font-mono text-[11px] font-bold text-[#067A47] bg-[#EEFDF5] border border-[#BDF5DA] px-2 py-0.5 rounded uppercase">
                    {role.team}
                  </span>
                  <span>•</span>
                  <span>{role.location}</span>
                  <span>•</span>
                  <span className="font-medium text-[#0A0A0A]">{role.type}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                <span className="font-bold text-[15px] sm:text-[16px] text-[#067A47] group-hover:text-[#06663C] transition-colors">
                  Apply
                </span>
                <span className="font-mono text-[17px] text-[#067A47] group-hover:text-[#06663C] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Unlisted Role Callout Banner */}
        <div className="mt-12 bg-[#EEFDF5] border border-[#BDF5DA] rounded-[22px] p-8 sm:p-9 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xs">
          <div>
            <b className="block text-[20px] sm:text-[22px] font-bold text-[#0A0A0A]">
              Don’t see your role?
            </b>
            <p className="mt-1.5 text-[15px] sm:text-[16px] text-[#333333] m-0">
              Tell us how you’d help dental labs grow. We’re always eager to meet driven builders.
            </p>
          </div>

          <a
            href="mailto:careers@dentalpulseai.com?subject=General%20Application%20-%20DentalPulse"
            className="inline-flex items-center justify-center bg-[#0A0A0A] hover:bg-[#222222] text-white font-bold text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 shrink-0 hover:scale-[1.02] shadow-sm active:scale-[0.98]"
          >
            Send us a note
          </a>
        </div>
      </div>
    </section>
  );
}
