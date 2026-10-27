"use client";

import React, { useState } from 'react';
import { ResourcesHero } from './ResourcesHero';
import { FeaturedGuideCard } from './FeaturedGuideCard';

export function ResourcesPageContent() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const handleOpenArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
  };

  return (
    <div className="flex-1 w-full flex flex-col">
      {/* 1. Resources Hero Section */}
      <ResourcesHero />

      {/* 2. Hero Featured Guide Card */}
      <FeaturedGuideCard onOpenArticle={handleOpenArticle} />
    </div>
  );
}
