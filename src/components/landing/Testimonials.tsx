import React from 'react';
import Link from 'next/link';

const TESTIMONIALS = [
  {
    quote:
      'Early risk alerts saved our largest implant account. We had two weeks to step in before the dentist moved their volume elsewhere.',
    initials: 'MS',
    author: 'Michael S.',
    title: 'Managing Director, Apex Dental Ceramics',
  },
  {
    quote:
      'We reduced our time on tracking weekly metrics by 80%. No more exports or copy-pasting numbers out of lab software.',
    initials: 'DR',
    author: 'David R.',
    title: 'VP Operations, Summit Milling Center',
  },
  {
    quote:
      'DentalPulse uncovered $48K in cross-sell opportunities with our existing dentists in the first month alone.',
    initials: 'KL',
    author: 'Kelly L.',
    title: 'Sales & CS Manager, Precision Dental Arts',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-white pb-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <h2 className="m-0 text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0A0A0A] max-w-[640px]">
            Labs love growing with Dental Pulse.
          </h2>
          <Link
            href="/customers"
            className="font-bold text-[15px] sm:text-[16px] text-[#067A47] hover:text-[#06663C] transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Read customer stories</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="m-0 bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all shadow-sm hover:shadow-md"
            >
              <blockquote className="m-0 text-[18px] sm:text-[19px] leading-[1.55] font-semibold tracking-[-0.01em] text-[#0A0A0A]">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3 pt-4 border-t border-[#F0F0F0]">
                <span className="w-11 h-11 rounded-full bg-[#E3FCEF] flex items-center justify-center font-bold text-[14px] text-[#067A47] shrink-0">
                  {t.initials}
                </span>
                <div>
                  <b className="block text-[15px] font-bold text-[#0A0A0A] leading-tight">
                    {t.author}
                  </b>
                  <span className="text-[13px] text-[#5C5C5C] leading-snug">
                    {t.title}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
