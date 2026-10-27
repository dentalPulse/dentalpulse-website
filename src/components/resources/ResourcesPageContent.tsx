"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ResourcesHero } from './ResourcesHero';
import { FeaturedGuideCard } from './FeaturedGuideCard';
import { ResourcesGrid } from './ResourcesGrid';
import { LabGrowthBrief } from './LabGrowthBrief';

const ArticleReaderModal = dynamic(
  () => import('./ArticleReaderModal').then((mod) => mod.ArticleReaderModal),
  { ssr: false }
);

export function ResourcesPageContent() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const handleOpenArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
  };

  const handleCloseArticle = () => {
    setSelectedArticleId(null);
  };

  return (
    <div className="flex-1 w-full flex flex-col">
      {/* 1. Resources Hero Section */}
      <ResourcesHero />

      {/* 2. Hero Featured Guide Card */}
      <FeaturedGuideCard onOpenArticle={handleOpenArticle} />

      {/* 3. Interactive Topic Filter & Resources Grid */}
      <ResourcesGrid onOpenArticle={handleOpenArticle} />

      {/* 4. Newsletter Subscription Banner */}
      <LabGrowthBrief />

      {/* 5. Interactive Article Reader Modal */}
      {selectedArticleId && (
        <ArticleReaderModal
          articleId={selectedArticleId}
          onClose={handleCloseArticle}
        />
      )}
    </div>
  );
}
