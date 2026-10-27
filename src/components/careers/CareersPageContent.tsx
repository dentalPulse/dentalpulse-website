"use client";

import React from 'react';
import { CareersHero } from './CareersHero';
import { CareersWhyCards } from './CareersWhyCards';
import { CareersBenefits } from './CareersBenefits';

export function CareersPageContent() {
  return (
    <div className="flex-1 w-full flex flex-col">
      {/* 1. Careers Hero Section */}
      <CareersHero />

      {/* 2. Culture & Why Us Bento Cards */}
      <CareersWhyCards />

      {/* 3. Benefits & Perks Showcase */}
      <CareersBenefits />
    </div>
  );
}
