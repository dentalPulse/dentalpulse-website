"use client";

import React, { useState } from 'react';

export interface ResourcePost {
  id: string;
  category: 'Retention' | 'Growth' | 'Sales' | 'Marketing' | 'Guides';
  title: string;
  readTime: string;
}

interface ResourcesGridProps {
  onOpenArticle?: (articleId: string) => void;
}

export const RESOURCE_POSTS: ResourcePost[] = [
  {
    id: 'spot-at-risk-account',
    category: 'Retention',
    title: 'How to spot an at-risk dental account before it churns',
    readTime: '6 min read',
  },
  {
    id: 'share-of-wallet-expansion',
    category: 'Growth',
    title: 'Share of wallet: finding the categories your dentists send elsewhere',
    readTime: '8 min read',
  },
  {
    id: 'sales-rep-weekly-routine',
    category: 'Sales',
    title: 'A weekly routine for lab sales reps that actually sticks',
    readTime: '5 min read',
  },
  {
    id: 'whatsapp-sms-email-communication',
    category: 'Marketing',
    title: 'WhatsApp, SMS or email? Reaching dentists where they read',
    readTime: '7 min read',
  },
  {
    id: 'real-cost-of-losing-dentist',
    category: 'Retention',
    title: 'The real cost of losing a dentist — and how to calculate it',
    readTime: '6 min read',
  },
  {
    id: 'dental-lab-kpi-cheat-sheet',
    category: 'Guides',
    title: 'The dental lab KPI cheat sheet: numbers every owner should track',
    readTime: 'Guide • 12 min',
  },
  {
    id: 'remake-data-retention-signal',
    category: 'Growth',
    title: 'Turning remake data into a retention signal',
    readTime: '5 min read',
  },
  {
    id: 'onboarding-new-dentists-first-90-days',
    category: 'Sales',
    title: 'Onboarding new dentists: the first 90 days',
    readTime: '6 min read',
  },
  {
    id: 'building-segments-buying-behavior',
    category: 'Marketing',
    title: 'Building segments from real buying behaviour',
    readTime: '7 min read',
  },
];

const CATEGORIES = ['All', 'Retention', 'Growth', 'Sales', 'Marketing', 'Guides'] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export function ResourcesGrid({ onOpenArticle }: ResourcesGridProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredPosts =
    activeCategory === 'All'
      ? RESOURCE_POSTS
      : RESOURCE_POSTS.filter((post) => post.category === activeCategory);

  return (
    <section className="w-full pb-20 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Topic Filter Pill Buttons */}
        <div
          role="group"
          aria-label="Filter by topic"
          className="flex flex-wrap items-center gap-2.5"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={isSelected}
                className={
                  isSelected
                    ? 'border border-[#0A0A0A] bg-[#0A0A0A] text-white font-bold text-[14px] px-5 py-2.5 rounded-full min-h-[44px] transition-all shadow-sm'
                    : 'border border-[#D6D6D6] hover:border-[#0A0A0A] bg-white text-[#0A0A0A] font-bold text-[14px] px-5 py-2.5 rounded-full min-h-[44px] transition-all'
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              role="button"
              tabIndex={0}
              onClick={() => onOpenArticle?.(post.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenArticle?.(post.id);
                }
              }}
              className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#12F095]"
            >
              {/* Header Visual Graphic with Dental Pulse Wave */}
              <div
                aria-hidden="true"
                className="h-[150px] bg-[#F7F7F7] group-hover:bg-[#F2F2F2] flex items-center justify-center border-b border-[#EBEBEB] relative overflow-hidden transition-colors"
              >
                {/* Clean Vector Heartbeat Wave Graphic */}
                <svg
                  viewBox="0 0 200 60"
                  className="w-[60%] max-w-[180px] h-auto"
                >
                  <path
                    d="M0 34h60l12-24 16 44 12-20h100"
                    fill="none"
                    stroke="#067A47"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#06663C] transition-colors"
                  />
                </svg>

                {/* Subtle Category Pill Watermark */}
                <span className="absolute top-3.5 right-3.5 font-mono text-[11px] font-bold text-[#8A8A8A] bg-white/80 border border-[#E6E6E6] px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2.5">
                  <span className="font-mono text-[12px] font-semibold text-[#067A47] tracking-wider uppercase">
                    {post.category.toUpperCase()} • {post.readTime.toUpperCase()}
                  </span>

                  <b className="block text-[18px] sm:text-[19px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0A0A0A] group-hover:text-[#067A47] transition-colors">
                    {post.title}
                  </b>
                </div>

                {/* Read Link */}
                <div className="pt-3 border-t border-[#F0F0F0] mt-auto">
                  <span className="font-bold text-[15px] text-[#067A47] group-hover:text-[#06663C] inline-flex items-center gap-1 transition-colors">
                    <span>Read</span>
                    <span
                      aria-hidden="true"
                      className="transform transition-transform duration-200 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
