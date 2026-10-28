'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQS: FAQItem[] = [
  {
    question: 'What counts as a user?',
    answer:
      'Anyone on your team who logs in to Dental Pulse — owners, managers, reps, or marketers. Each plan includes a set number of users (3 on Starter, 5 on Growth, 10 on Growth AI, Unlimited on Enterprise). You can add additional users anytime at $25 per user per month.',
  },
  {
    question: 'Is there a discount for paying yearly?',
    answer:
      'Yes! Yearly billing gives you two full months free on any plan. You effectively pay for 10 months and receive 12 months of complete, uninterrupted access to Dental Pulse.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most labs are fully connected within 48 to 72 hours. Our dedicated onboarding team handles the data import and historical sync directly from your lab management system (Magic Touch, Labstar, Evident, 3Shape, etc.) so your team can hit the ground running with zero IT headaches.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Yes — you can upgrade or adjust your plan anytime as your lab grows. Upgrades take effect immediately with prorated billing, and you can switch between monthly and annual plans at your subscription renewal.',
  },
  {
    question: 'Do you integrate with my lab management software?',
    answer: (
      <span>
        Most likely. We integrate natively with Magic Touch, Labstar, Evident, 3Shape, and provide an Open API for custom or proprietary systems. Learn more on our{' '}
        <Link href="/integrations" className="text-[#067A47] underline font-bold hover:text-[#055c35]">
          Integrations directory
        </Link>{' '}
        or ask our technical solutions team during your demo.
      </span>
    ),
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-20 sm:py-24 px-4 sm:px-6 border-t border-[#E5E7EB]">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column: Headline & Contact */}
        <div className="lg:w-[38%] flex flex-col items-start">
          <p className="font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase mb-2">
            FAQ
          </p>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-[1.1]">
            Questions, answered.
          </h2>
          <p className="text-[16px] text-[#5C5C5C] mt-3 leading-[1.6]">
            Everything you need to know about plans, billing, user limits, setup times, and integrations.
          </p>

          {/* Help Box */}
          <div className="mt-8 p-6 rounded-[20px] bg-white border border-[#E5E7EB] w-full shadow-xs">
            <h4 className="text-[16px] font-bold text-[#0A0A0A] mb-1">
              Can’t find what you need?
            </h4>
            <p className="text-[14px] text-[#5C5C5C] leading-[1.5] mb-4">
              Have specific questions about enterprise deployments, contracts, or custom security audits?
            </p>
            <a
              href="mailto:info@dentalpulseai.com"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#067A47] hover:text-[#055c35] transition-colors"
            >
              <span>Email our team</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.3 8H12.7M12.7 8L8.7 4M12.7 8L8.7 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Accordion Items */}
        <div className="lg:w-[62%] w-full flex flex-col gap-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-[18px] transition-all overflow-hidden shadow-xs hover:border-[#D1D5DB]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-[16px] sm:text-[17px] font-bold text-[#0A0A0A] leading-[1.3]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#0A0A0A] text-white rotate-180' : 'bg-[#F3F4F6] text-[#4B5563]'
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 6L8 10.5L12.5 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[15px] leading-[1.65] text-[#4B5563] border-t border-[#F3F4F6]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
