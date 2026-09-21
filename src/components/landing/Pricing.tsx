'use client';
import React, { useState } from 'react';
import { CheckoutModal } from './CheckoutModal';

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: 'billed monthly',
    features: [
      'Users Included 3',
      'CRM',
      'Dashboard & Analytics',
      'Customer Database',
      'Lead Management',
      'Task Management',
      'Website Tracking',
    ],
    isPopular: false,
  },
  {
    name: 'Growth',
    price: '$799',
    period: 'billed monthly',
    features: [
      'Users Included 5',
      'Email Marketing',
      'SMS Marketing',
      'WhatsApp Marketing',
      'Customers Segments',
      'Campaign Builder',
      'Marketing Automation'
    ],
    isPopular: true,
  },
  {
    name: 'Growth AI',
    price: '$999',
    period: 'billed monthly',
    features: [
      'Users Included 10',
      'AI Insights',
      'Revenue Forecasting',
      'Churn Prediction',
      'Ai Business Assistant',
      'API Access - Limited',
    ],
    isPopular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'billed monthly',
    features: [
      'Users Included - Unlimited',
      'API Access - Unlimited',
      'Dedicated Success Manager',
      'All Plans Included'
    ],
    isPopular: false,
  },
];

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
      // No fixed price to charge — Enterprise goes through Book a Demo
      // (Header) instead of Stripe Checkout, not this modal.
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCheckoutPlan(planName);
  }

  return (
    <section id="pricing" className="w-full bg-brand-pricing-bg py-16 md:py-24 px-6 flex flex-col items-center">
      <div className="max-w-[1280px] w-full flex flex-col items-center text-center">

        <h2 className="text-[#111827] text-[32px] md:text-[40px] font-bold !leading-[100%] !tracking-[2%] mb-4">
          Pricing that grows with your lab
        </h2>
        <p className="text-gray-500 text-[16px] md:text-[20px] !font-normal mb-[26px]">
          Four plans, one platform. Start with the visibility your team needs today.<br className="hidden md:block" />
          Add depth as you scale to more locations, more reps, and more dentists to keep close.
        </p>

        {/* Toggle */}
        <div className="flex items-center bg-brand-pricing-card rounded-full p-1 md:mb-[86px] mb-[46px] shadow-lg">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-7 py-2 rounded-full text-[16px] font-bold transition-all duration-200 cursor-pointer ${!isAnnual ? 'bg-brand-primary text-black shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
          >
            Monthly
          </button>
          <button
            type="button"
            disabled
            title="Yearly pricing is coming soon"
            className="px-7 py-2 rounded-full text-[14px] font-bold flex items-center gap-1.5 text-gray-300 cursor-not-allowed"
          >
            Yearly{' '}
            <span className="text-[11px] font-semibold text-gray-300">
              coming soon
            </span>
          </button>
        </div>

        {/* Pricing Layout */}
        <div className="w-full relative flex items-stretch justify-center">
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-0 p-3 bg-white rounded-xl">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`flex flex-col text-left pt-[32px] px-[24px] pb-[24px] rounded-[32px] ${plan.isPopular
                  ? 'bg-brand-primary border-[8px] border-[#B8F7E1] p-4 lg:-translate-y-[10%] backdrop-blur-[4px] shadow-[0px_6px_10px_0px_rgba(0,0,0,0.25)]'
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
                  <div className="flex items-center gap-2 mb-8">
                    <span className="text-[36px] font-bold text-black leading-none">
                      {plan.price}
                    </span>
                    <span className={`${plan.isPopular ? 'text-[11px] text-black font-medium leading-tight whitespace-pre-line' : 'text-[11px] text-gray-400 font-medium leading-tight whitespace-pre-line'}`}>{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 flex-1 h-[311px]">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-[12px] !font-light text-gray-500">
                        <CheckIcon popular={false} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="px-6 pt-2 pb-0 h-[52px] flex items-start mt-5">
                    <button
                      onClick={() => handleChoosePlan(plan.name)}
                      className={`  ${plan.isPopular ? 'bg-black text-white' : 'bg-brand-pricing-btn-bg text-black'} w-full py-3 rounded-[8px] !font-normal text-[16px] cursor-pointer`}
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

      {checkoutPlan && (
        <CheckoutModal
          planName={checkoutPlan}
          billingInterval={isAnnual ? 'yearly' : 'monthly'}
          onClose={() => setCheckoutPlan(null)}
        />
      )}
    </section>
  );
}


