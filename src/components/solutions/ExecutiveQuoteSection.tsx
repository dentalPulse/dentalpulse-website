import React from 'react';

export function ExecutiveQuoteSection() {
  return (
    <section className="w-full bg-white py-24 sm:py-28 px-6 border-t border-[#F0F0F0]">
      <figure className="max-w-[920px] mx-auto text-center m-0">
        <blockquote className="m-0 text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.38] font-bold tracking-[-0.02em] text-[#0A0A0A]">
          “Before Dental Pulse, I didn’t know an account was leaving until two months after their last case. Now we see the drop in week two and step in before the relationship is lost.”
        </blockquote>
        <figcaption className="mt-6 text-[#5C5C5C] text-[15px] sm:text-[16px] flex items-center justify-center gap-2 flex-wrap">
          <b className="text-[#0A0A0A] font-extrabold">David Vance</b>
          <span>•</span>
          <span>Owner &amp; CEO, Apex Dental Craft</span>
        </figcaption>
      </figure>
    </section>
  );
}
