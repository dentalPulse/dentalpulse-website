"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { AboutHero } from './AboutHero';
import { AboutMissionCards } from './AboutMissionCards';
import { AboutValues } from './AboutValues';
import { AboutLeadership, Leader } from './AboutLeadership';
import { AboutContactCTA } from './AboutContactCTA';

const LeaderBioModal = dynamic(
  () => import('./LeaderBioModal').then((mod) => mod.LeaderBioModal),
  { ssr: false }
);

export function AboutPageContent() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const handleSelectLeader = (leader: Leader) => {
    setSelectedLeader(leader);
  };

  const handleCloseLeader = () => {
    setSelectedLeader(null);
  };

  return (
    <div className="flex-1 w-full flex flex-col">
      {/* 1. About Hero Section */}
      <AboutHero />

      {/* 2. Mission Showcase Cards */}
      <AboutMissionCards />

      {/* 3. Core Values Grid */}
      <AboutValues />

      {/* 4. Leadership Team Showcase */}
      <AboutLeadership onSelectLeader={handleSelectLeader} />

      {/* 5. Contact Block CTA */}
      <AboutContactCTA />

      {/* 6. Executive Leader Bio Modal */}
      {selectedLeader && (
        <LeaderBioModal
          leader={selectedLeader}
          onClose={handleCloseLeader}
        />
      )}
    </div>
  );
}
