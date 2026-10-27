"use client";

import React, { useState } from 'react';
import { CustomersHero } from './CustomersHero';
import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { WallOfLove } from './WallOfLove';
import { MoreStoriesGrid } from './MoreStoriesGrid';
import { CustomersCTA } from './CustomersCTA';
import { CaseStudyModal } from './CaseStudyModal';

export function CustomersPageContent() {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  const handleOpenStory = (storyId: string) => {
    setSelectedStoryId(storyId);
  };

  const handleCloseStory = () => {
    setSelectedStoryId(null);
  };

  return (
    <div className="flex-1 w-full flex flex-col">
      {/* 1. Hero Section */}
      <CustomersHero />

      {/* 2. Featured Case Study Bento Card */}
      <FeaturedCaseStudy onOpenStory={handleOpenStory} />

      {/* 3. Wall of Love Testimonials Grid */}
      <WallOfLove />

      {/* 4. More Stories Grid */}
      <MoreStoriesGrid onOpenStory={handleOpenStory} />

      {/* 5. Bottom Conversion Banner */}
      <CustomersCTA />

      {/* 6. Interactive Case Study Deep Dive Modal */}
      <CaseStudyModal storyId={selectedStoryId} onClose={handleCloseStory} />
    </div>
  );
}
