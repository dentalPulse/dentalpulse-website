import React from 'react';
import Link from 'next/link';

export interface CTAButtonProps {
  label: string;
  href: string;
}

export interface SectionCTAProps {
  title: React.ReactNode;
  description: React.ReactNode;
  eyebrow?: string;
  primaryCta?: CTAButtonProps;
  secondaryCta?: CTAButtonProps;
  id?: string;
  className?: string;
}

export function SectionCTA({
  title,
  description,
  eyebrow,
  primaryCta = { label: 'Book a demo', href: '/book-demo' },
  secondaryCta = { label: 'Calculate your ROI', href: '/roi' },
  id = 'book-demo',
  className = 'w-full bg-white pb-24 sm:pb-28 px-6',
}: SectionCTAProps) {
  return (
    <section id={id} className={className}>
      <div className="max-w-[1240px] mx-auto bg-[#0A0A0A] rounded-[32px] p-8 sm:p-14 lg:p-18 text-white relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-2xl">
        {/* Neon Green Pulse Watermark SVG */}
        <svg
          viewBox="0 0 600 200"
          className="absolute -right-10 -bottom-5 w-[560px] sm:w-[640px] opacity-35 pointer-events-none"
          aria-hidden="true"
        >
          <path
            d="M0 120h160l30-70 40 130 30-60h340"
            fill="none"
            stroke="#12F095"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Left Column: Heading & Subtext */}
        <div className="relative z-10 max-w-[640px]">
          {eyebrow && (
            <p className="font-mono text-[13px] font-semibold text-[#12F095] tracking-[0.06em] uppercase mb-2">
              {eyebrow}
            </p>
          )}
          <h2 className="m-0 text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.06] tracking-[-0.035em] text-white">
            {title}
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[17px] text-[#BDBDBD] leading-relaxed max-w-[540px]">
            {description}
          </p>
        </div>

        {/* Right Column: CTA Buttons */}
        <div className="relative z-10 flex flex-wrap items-center gap-3.5 shrink-0">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center bg-[#12F095] text-[#0A0A0A] font-extrabold text-[15px] sm:text-[16px] px-8 py-4 rounded-full hover:bg-[#00df83] transition-colors shadow-lg active:scale-[0.99] select-none"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center border border-[#3A3A3A] bg-transparent text-white font-bold text-[15px] sm:text-[16px] px-8 py-4 rounded-full hover:bg-white/10 transition-colors active:scale-[0.99] select-none"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
