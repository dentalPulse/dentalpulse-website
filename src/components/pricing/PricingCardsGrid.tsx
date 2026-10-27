'use client';

import React from 'react';
import { PRICING_PLANS, type PlanData } from '@/data/pricingData';
export { PRICING_PLANS, type PlanData };

interface PricingCardsGridProps {
  isYearly: boolean;
  onSelectPlan: (plan: PlanData) => void;
}

export function PricingCardsGrid({ isYearly, onSelectPlan }: PricingCardsGridProps) {
  return (
    <section className="w-full bg-white pb-20 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isDark = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-[24px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative ${isDark
                  ? 'bg-[#0A0A0A] text-white border-2 border-[#12F095] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.55)] lg:-translate-y-2'
                  : plan.isCustom
                    ? 'bg-[#F9FAFB] text-[#0A0A0A] border border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-md'
                    : 'bg-white text-[#0A0A0A] border border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-md'
                  }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#12F095] text-[#0A0A0A] text-[11px] font-extrabold uppercase tracking-[0.08em] px-3.5 py-1 rounded-full shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Top Section: Header & Price */}
                <div>
                  <h3
                    className={`text-[22px] font-extrabold tracking-[-0.02em] ${isDark ? 'text-white' : 'text-[#0A0A0A]'
                      }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-1.5 text-[14px] leading-[1.5] min-h-[42px] ${isDark ? 'text-[#A3A3A3]' : 'text-[#5C5C5C]'
                      }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="mt-5 pb-5 border-b border-inherit">
                    {plan.isCustom ? (
                      <div className="flex flex-col">
                        <span
                          className={`text-[36px] sm:text-[40px] font-extrabold leading-none tracking-[-0.03em] ${isDark ? 'text-white' : 'text-[#0A0A0A]'
                            }`}
                        >
                          Custom
                        </span>
                        <span
                          className={`mt-2 text-[13px] font-medium ${isDark ? 'text-[#8A8A8A]' : 'text-[#6B7280]'
                            }`}
                        >
                          Tailored to your lab group
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-1.5">
                          <span
                            className={`text-[38px] sm:text-[42px] font-extrabold leading-none tracking-[-0.03em] ${isDark ? 'text-white' : 'text-[#0A0A0A]'
                              }`}
                          >
                            ${isYearly ? plan.priceYearlyPerMonth : plan.priceMonthly}
                          </span>
                          <span
                            className={`text-[14px] font-semibold ${isDark ? 'text-[#A3A3A3]' : 'text-[#6B7280]'
                              }`}
                          >
                            /month
                          </span>
                        </div>
                        <span
                          className={`mt-2 text-[12.5px] font-medium ${isDark ? 'text-[#8A8A8A]' : 'text-[#6B7280]'
                            }`}
                        >
                          {isYearly
                            ? `Billed annually ($${plan.annualTotal?.toLocaleString()}/yr)`
                            : 'Billed monthly'}
                        </span>
                      </div>
                    )}

                    {/* Seat Limit Pill */}
                    <div
                      className={`mt-4 py-2 px-3 rounded-[10px] text-[12.5px] font-semibold flex items-center justify-center text-center ${isDark
                        ? 'bg-[#1C1C1C] text-[#E5E5E5] border border-white/10'
                        : plan.isCustom
                          ? 'bg-white text-[#374151] border border-[#E5E7EB]'
                          : 'bg-[#F3F4F6] text-[#374151]'
                        }`}
                    >
                      {plan.includedUsers === null
                        ? 'Unlimited users included'
                        : `Includes ${plan.includedUsers} users • +$${plan.extraUserPriceMonthly}/extra user/mo`}
                    </div>
                  </div>

                  {/* Feature List Header */}
                  <div className="mt-5">
                    <p
                      className={`text-[12px] font-bold uppercase tracking-[0.05em] mb-3 ${isDark ? 'text-[#E5E5E5]' : 'text-[#0A0A0A]'
                        }`}
                    >
                      {plan.featuresHeader}
                    </p>

                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[13.5px] leading-[1.4]">
                          {/* Check Icon */}
                          <svg
                            className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#12F095]' : 'text-[#067A47]'
                              }`}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="8"
                              cy="8"
                              r="8"
                              fill="currentColor"
                              fillOpacity={isDark ? 0.2 : 0.14}
                            />
                            <path
                              d="M4.8 8.2L6.9 10.3L11.2 5.8"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className={isDark ? 'text-[#D1D5DB]' : 'text-[#4B5563]'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-4 rounded-full text-[14px] font-bold transition-all duration-150 cursor-pointer text-center select-none ${isDark
                      ? 'bg-[#12F095] text-[#0A0A0A] hover:bg-[#00DF83] shadow-[0_4px_14px_rgba(18,240,149,0.3)] active:scale-[0.99]'
                      : plan.isCustom
                        ? 'border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-black/5 active:scale-[0.99]'
                        : plan.id === 'growth-ai'
                          ? 'bg-[#0A0A0A] text-white hover:bg-[#262626] shadow-sm active:scale-[0.99]'
                          : 'border border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#F3F4F6] active:scale-[0.99]'
                      }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
