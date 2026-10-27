"use client";

import React, { useState } from 'react';
import { AboutHero } from './AboutHero';
import { AboutMissionCards } from './AboutMissionCards';
import { AboutValues } from './AboutValues';
import { AboutLeadership, Leader } from './AboutLeadership';

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
    </div>
  );
}
