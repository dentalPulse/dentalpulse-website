"use client";

import React, { useState } from 'react';
import { AboutHero } from './AboutHero';
import { AboutMissionCards } from './AboutMissionCards';
import { AboutValues } from './AboutValues';

export function AboutPageContent() {
  const [selectedLeaderId, setSelectedLeaderId] = useState<string | null>(null);

  const handleOpenLeader = (leaderId: string) => {
    setSelectedLeaderId(leaderId);
  };

  return (
    <div className="flex-1 w-full flex flex-col">
      {/* 1. About Hero Section */}
      <AboutHero />

      {/* 2. Mission Showcase Cards */}
      <AboutMissionCards />

      {/* 3. Core Values Grid */}
      <AboutValues />
    </div>
  );
}
