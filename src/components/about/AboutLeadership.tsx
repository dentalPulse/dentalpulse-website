import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Leader {
  id: string;
  name: string;
  role: string;
  discipline: string;
  experience: string;
  bio: string;
  image: string;
  initials: string;
}

export const LEADERSHIP_TEAM: Leader[] = [
  {
    id: 'alex-vance',
    name: 'Alex Vance',
    role: 'Co-founder & CEO',
    discipline: 'EXECUTIVE & STRATEGY',
    experience: '15+ yrs Dental Lab Tech & SaaS',
    bio: 'Alex previously led commercial strategy and lab software partnerships across North America, witnessing firsthand how fragmented laboratory data led to preventable customer churn. He founded DentalPulse to give every lab owner real-time clarity into account health, proactive risk alerts, and sustainable growth.',
    image: '/user_pic.png',
    initials: 'AV',
  },
  {
    id: 'marcus-sterling',
    name: 'Dr. Marcus Sterling',
    role: 'Co-founder & CTO',
    discipline: 'AI ARCHITECTURE & CAD/CAM',
    experience: 'PhD Computational Geometry',
    bio: 'Marcus holds a doctorate in computational geometry and previously directed predictive modeling for high-throughput healthcare systems. At DentalPulse, he oversees core data pipelines, PMS/LMS bidirectional connectors, and proprietary dentist churn detection algorithms.',
    image: '/user_pic2.png',
    initials: 'MS',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Head of Customer Success',
    discipline: 'LAB OPERATIONS & ONBOARDING',
    experience: 'Former Multi-Site Lab VP Ops',
    bio: 'With over a decade directing operations and client relations across 3 full-service dental laboratory sites, Elena ensures every lab partner achieves rapid time-to-value, seamless workflow integration, and measurable dentist retention within 30 days.',
    image: '/user_pic3.png',
    initials: 'ER',
  },
  {
    id: 'julian-chen',
    name: 'Julian Chen',
    role: 'Head of Product',
    discipline: 'PRODUCT DESIGN & WORKFLOWS',
    experience: 'Ex-Mission-Critical Vertical SaaS',
    bio: 'Julian spent seven years designing mission-critical enterprise workflows and healthcare data interfaces. He leads product strategy at DentalPulse, ensuring laboratory technicians, managers, and sales reps have fast, intuitive, and distraction-free tools.',
    image: '/user_pic4.png',
    initials: 'JC',
  },
];

interface AboutLeadershipProps {
  onSelectLeader?: (leader: Leader) => void;
}

export function AboutLeadership({ onSelectLeader }: AboutLeadershipProps) {
  return (
    <section className="w-full pb-28 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-[12px] font-semibold text-[#067A47] tracking-wider uppercase block mb-2">
              Our Team
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] m-0">
              Leadership
            </h2>
          </div>

          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-[16px] font-bold text-[#0A0A0A] hover:text-[#067A47] transition-colors py-2 group"
          >
            <span>We’re hiring</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 font-mono">
              →
            </span>
          </Link>
        </div>

        {/* 4-Leader Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((leader) => (
            <div
              key={leader.id}
              onClick={() => onSelectLeader?.(leader)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectLeader?.(leader);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View biography of ${leader.name}, ${leader.role}`}
              className="group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12F095] focus-visible:ring-offset-2 rounded-[24px]"
            >
              {/* Photo Card Container */}
              <div className="aspect-[4/5] rounded-[22px] overflow-hidden relative bg-gradient-to-br from-[#FAFAFA] via-[#F2F2F2] to-[#E5E5E5] border border-[#E6E6E6] group-hover:border-[#12F095] shadow-sm group-hover:shadow-xl group-hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between p-4">
                {/* Top Badge */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-mono text-[10px] font-bold text-[#0A0A0A] bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-black/5 shadow-xs">
                    {leader.discipline}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[11px] font-mono font-bold text-[#067A47] shadow-xs">
                    {leader.initials}
                  </span>
                </div>

                {/* Portrait Image Layer */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Subtle Gradient Scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Hover Action Strip */}
                <div className="relative z-10 self-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A0A0A]/85 backdrop-blur-md text-[#12F095] text-[12px] font-bold tracking-wide shadow-md">
                    <span>Read Bio</span>
                    <span className="text-[14px]">→</span>
                  </span>
                </div>
              </div>

              {/* Leader Metadata Below Card */}
              <div className="pt-4 px-1">
                <b className="block text-[18px] sm:text-[19px] font-bold text-[#0A0A0A] leading-tight group-hover:text-[#067A47] transition-colors">
                  {leader.name}
                </b>
                <span className="block text-[14px] text-[#5C5C5C] font-medium mt-1">
                  {leader.role}
                </span>
                <span className="block font-mono text-[11px] text-[#7A7A7A] mt-1 tracking-wide">
                  {leader.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
