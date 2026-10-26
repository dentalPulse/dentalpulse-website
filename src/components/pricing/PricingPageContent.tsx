"use client";

import React, { useState } from 'react';
import { PricingHero } from '@/components/pricing/PricingHero';

export function PricingPageContent() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex-1 w-full flex flex-col">
      <PricingHero isYearly={isYearly} onToggleYearly={setIsYearly} />
      {/* Plan cards, compare table, FAQ, and CTA will be assembled in subsequent phases */}
    </div>
  );
}
