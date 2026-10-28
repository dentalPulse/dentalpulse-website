'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PRICING_PLANS } from '@/data/pricingData';

const CheckoutModal = dynamic(
  () => import('./CheckoutModal').then((mod) => mod.CheckoutModal),
  { ssr: false }
);

// Map shared PRICING_PLANS for landing page display compatibility
const plans = PRICING_PLANS.map((p) => ({
  name: p.name,
  basePriceMonthly: p.priceMonthly,
  includedUsers: p.includedUsers,
  features: p.features,
  isPopular: !!p.isPopular,
}));

const EXTRA_SEAT_USD_MONTHLY = 25;

function CheckIcon({ popular }: { popular: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill={popular ? '#ffffff' : '#e5e7eb'} />
      <path d="M5 8L7 10L11 6" stroke={popular ? '#000000' : '#9ca3af'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<string | null>(null);

  function handleChoosePlan(planName: string) {
    if (planName === 'Enterprise') {
      window.location.href = '/book-demo';
      return;
    }
    setCheckoutPlan(planName);
  }

  return (
    <section id="pricing" className="w-full bg-brand-pricing-bg py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center">
      <div className="max-w-[1280px] w-full flex flex-col items-center text-center">

        <h2 className="text-[#111827] text-[30px] sm:text-[36px] md:text-[40px] font-bold !leading-[110%] !tracking-[2%] mb-4">
          Pricing that grows with your lab
        </h2>
        <p className="text-gray-500 text-[15px] sm:text-[18px] md:text-[20px] !font-normal mb-[26px]">
          Four plans, one platform. Start with the visibility your team needs today.<br className="hidden md:block" />
          Add depth as you scale to more locations, more reps, and more dentists to keep close.
        </p>

        {/* Toggle */}
        <div className="flex items-center bg-brand-pricing-card rounded-full p-1 md:mb-[72px] mb-[36px] shadow-lg">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 sm:px-7 py-2 rounded-full text-[14px] sm:text-[16px] font-bold transition-all duration-200 cursor-pointer ${
              !isAnnual ? 'bg-brand-primary text-black shadow-sm' : 'text-gray-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 sm:px-7 py-2 rounded-full text-[13px] sm:text-[14px] font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
              isAnnual ? 'bg-brand-primary text-black shadow-sm' : 'text-gray-300 hover:text-white'
            }`}
          >
            Yearly{' '}
            <span className={`text-[11px] font-semibold ${isAnnual ? 'text-black' : 'text-brand-primary'}`}>
              2 Months Free
            </span>
          </button>
        </div>

        {/* Pricing Layout */}
        <div className="w-full relative flex items-stretch justify-center">
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 p-3 bg-white rounded-xl">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`flex flex-col text-left pt-[28px] sm:pt-[32px] px-[20px] sm:px-[24px] pb-[24px] rounded-[28px] sm:rounded-[32px] ${plan.isPopular
                  ? 'bg-brand-primary border-[6px] sm:border-[8px] border-[#B8F7E1] p-4 lg:-translate-y-[4%] xl:-translate-y-[10%] backdrop-blur-[4px] shadow-[0px_6px_10px_0px_rgba(0,0,0,0.25)]'
                  : 'bg-white'
                  }`}
              >
                {/* Content inside white panel */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-[16px] !font-normal">{plan.name}</h3>
                    {plan.isPopular && (
                      <span className="bg-white text-[11px] font-bold text-gray-700 px-3 py-1 rounded-md shadow-sm border border-black/10">
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex flex-col gap-1 mb-6 sm:mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-[32px] sm:text-[36px] font-bold text-black leading-none">
                        {plan.basePriceMonthly === null
                          ? 'Custom'
                          : `$${(isAnnual ? plan.basePriceMonthly * 10 : plan.basePriceMonthly).toLocaleString()}`}
                      </span>
                      {plan.basePriceMonthly !== null && (
                        <span className={`${plan.isPopular ? 'text-[11px] text-black font-medium leading-tight whitespace-pre-line' : 'text-[11px] text-gray-400 font-medium leading-tight whitespace-pre-line'}`}>
                          {isAnnual ? 'billed yearly' : 'billed monthly'}
                        </span>
                      )}
                    </div>
                    <span className={`text-[11px] ${plan.isPopular ? 'text-black/70' : 'text-gray-400'}`}>
                      {plan.includedUsers === null
                        ? 'billed monthly'
                        : `Includes ${plan.includedUsers} users · +$${EXTRA_SEAT_USD_MONTHLY}/extra user/month`}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 flex-1 min-h-[200px] lg:h-[311px]">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-[12px] !font-light text-gray-500">
                        <CheckIcon popular={false} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="px-2 sm:px-6 pt-2 pb-0 min-h-[52px] flex items-start mt-5">
                    <button
                      onClick={() => handleChoosePlan(plan.name)}
                      className={`  ${plan.isPopular ? 'bg-black text-white' : 'bg-brand-pricing-btn-bg text-black'} w-full py-3 rounded-[8px] !font-normal text-[15px] sm:text-[16px] cursor-pointer hover:opacity-90 transition-opacity`}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {checkoutPlan && (() => {
        const plan = plans.find((p) => p.name === checkoutPlan);
        if (!plan || plan.basePriceMonthly === null || plan.includedUsers === null) return null;
        return (
          <CheckoutModal
            planName={plan.name}
            billingInterval={isAnnual ? 'yearly' : 'monthly'}
            basePriceMonthly={plan.basePriceMonthly}
            includedUsers={plan.includedUsers}
            onClose={() => setCheckoutPlan(null)}
          />
        );
      })()}
    </section>
  );
}


