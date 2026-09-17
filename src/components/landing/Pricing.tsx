'use client';
import React, { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: 'per editor/month\nbilled monthly',
    features: [
      '30h Fast generations',
      'Unlimited Relaxed generations',
      'General commercial terms',
      'Access to member gallery',
      'Optional credit top ups',
      '3 concurrent fast jobs',
      '12 concurrent fast jobs',
      'Access to member gallery',
      'Optional credit top ups',
    ],
    isPopular: false,
  },
  {
    name: 'Growth',
    price: '$799',
    period: 'per editor/month\nbilled monthly',
    features: [
      '15h Fast generations',
      'Unlimited Relaxed generations',
      'General commercial terms',
      'Access to member gallery',
      'Optional credit top ups',
      '3 concurrent fast jobs',
      'Access to member gallery',
      'Optional credit top ups',
    ],
    isPopular: true,
  },
  {
    name: 'Growth AI',
    price: '$999',
    period: 'per editor/month\nbilled monthly',
    features: [
      '30h Fast generations',
      'Unlimited Relaxed generations',
      'General commercial terms',
      'Access to member gallery',
      'Optional credit top ups',
      '3 concurrent fast jobs',
    ],
    isPopular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per editor/month\nbilled monthly',
    features: [
      '60h Fast generations',
      'Unlimited Relaxed generations',
      'General commercial terms',
      'Access to member gallery',
      'Optional credit top ups',
      '3 concurrent fast jobs',
      '12 concurrent fast jobs',
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

  return (
    <section className="w-full bg-brand-pricing-bg py-16 md:py-24 px-6 flex flex-col items-center">
      <div className="max-w-[1280px] w-full flex flex-col items-center text-center">

        <h2 className="text-[#111827] text-[38px] md:text-[46px] font-bold leading-tight mb-4">
          Pricing that grows with your lab
        </h2>
        <p className="text-gray-500 text-[16px] md:text-[17px] mb-12 max-w-[680px] leading-relaxed">
          Four plans, one platform. Start with the visibility your team needs today.<br className="hidden md:block" />
          Add depth as you scale to more locations, more reps, and more dentists to keep close.
        </p>

        {/* Toggle */}
        <div className="flex items-center bg-brand-pricing-card rounded-full p-1 mb-35 shadow-lg">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-7 py-2 rounded-full text-[14px] font-bold transition-all duration-200 cursor-pointer ${!isAnnual ? 'bg-brand-primary text-black shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-7 py-2 rounded-full text-[14px] font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${isAnnual ? 'bg-brand-primary text-black shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
          >
            Yearly{' '}
            <span className={`text-[11px] font-semibold ${isAnnual ? 'text-black/70' : 'text-brand-primary'}`}>
              2months off*
            </span>
          </button>
        </div>

        {/* Pricing Layout */}
        <div className="w-full relative flex items-stretch justify-center">
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-0 p-3 bg-white rounded-xl">
            {plans.map((plan, idx) => (
              <div key={idx} className={`flex flex-col text-left pt-[32px] px-[24px] pb-[24px] rounded-xl ${plan.isPopular
                ? 'bg-brand-primary p-4 lg:-translate-y-[10%] backdrop-blur-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
                : 'bg-white'
                }`}>
                {/* Content inside white panel */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-[16px] font-bold text-gray-800">{plan.name}</h3>
                    {plan.isPopular && (
                      <span className="bg-white text-[11px] font-bold text-gray-700 px-3 py-1 rounded-md shadow-sm border border-black/10">
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-8">
                    <span className="text-[36px] font-extrabold text-black leading-none">
                      {plan.price}
                    </span>
                    <span className={`${plan.isPopular ? 'text-[11px] text-black font-medium leading-tight whitespace-pre-line' : 'text-[11px] text-gray-400 font-medium leading-tight whitespace-pre-line'}`}>{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 flex-1 h-[311px]">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-[13px] font-medium text-gray-500">
                        <CheckIcon popular={false} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="px-6 pt-2 pb-0 h-[52px] flex items-start mt-5">
                    <button className="w-full py-3 rounded-[10px] bg-brand-pricing-btn-bg text-black font-bold text-[14px] border border-brand-primary/40 cursor-pointer">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


