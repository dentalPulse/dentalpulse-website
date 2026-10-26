"use client";

import React, { useState } from 'react';
import { PricingHero } from '@/components/pricing/PricingHero';
import { PricingCardsGrid, PlanData } from '@/components/pricing/PricingCardsGrid';
import { CheckoutModal } from '@/components/landing/CheckoutModal';

export function PricingPageContent() {
  const [isYearly, setIsYearly] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<PlanData | null>(null);

  const handleSelectPlan = (plan: PlanData) => {
    if (plan.isCustom || !plan.priceMonthly || !plan.includedUsers) {
      // Enterprise goes to contact/demo
      window.location.href = '/#book-demo';
      return;
    }
    setCheckoutPlan(plan);
  };

  return (
    <div className="flex-1 w-full flex flex-col">
      <PricingHero isYearly={isYearly} onToggleYearly={setIsYearly} />
      
      {/* 4-Card Subscription Grid */}
      <PricingCardsGrid isYearly={isYearly} onSelectPlan={handleSelectPlan} />

      {/* Subsequent phases: Comparison Matrix, FAQ, and CTA */}

      {/* Interactive Stripe Checkout Modal */}
      {checkoutPlan && checkoutPlan.priceMonthly && checkoutPlan.includedUsers && (
        <CheckoutModal
          planName={checkoutPlan.name}
          billingInterval={isYearly ? 'yearly' : 'monthly'}
          basePriceMonthly={checkoutPlan.priceMonthly}
          includedUsers={checkoutPlan.includedUsers}
          onClose={() => setCheckoutPlan(null)}
        />
      )}
    </div>
  );
}
