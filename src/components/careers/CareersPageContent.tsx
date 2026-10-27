"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { CareersHero } from './CareersHero';
import { CareersWhyCards } from './CareersWhyCards';
import { CareersBenefits } from './CareersBenefits';
import { CareersOpenRoles, JobRole } from './CareersOpenRoles';

const JobApplicationModal = dynamic(
  () => import('./JobApplicationModal').then((mod) => mod.JobApplicationModal),
  { ssr: false }
);

export function CareersPageContent() {
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);

  const handleSelectRole = (role: JobRole) => {
    setSelectedRole(role);
  };

  const handleCloseRole = () => {
    setSelectedRole(null);
  };

  return (
    <div className="flex-1 w-full flex flex-col">
      {/* 1. Careers Hero Section */}
      <CareersHero />

      {/* 2. Culture & Why Us Bento Cards */}
      <CareersWhyCards />

      {/* 3. Benefits & Perks Showcase */}
      <CareersBenefits />

      {/* 4. Open Roles List & Unlisted Callout */}
      <CareersOpenRoles onSelectRole={handleSelectRole} />

      {/* 5. Interactive Job Details & Application Modal */}
      {selectedRole && (
        <JobApplicationModal
          role={selectedRole}
          onClose={handleCloseRole}
        />
      )}
    </div>
  );
}
