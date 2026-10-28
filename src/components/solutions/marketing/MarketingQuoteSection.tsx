import React from 'react';

export function MarketingQuoteSection() {
  return (
    <section className="w-full bg-white py-24 sm:py-28 px-6 border-t border-[#F0F0F0]">
      <figure className="max-w-[920px] mx-auto text-center m-0">
        <blockquote className="m-0 text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.38] font-bold tracking-[-0.02em] text-[#0A0A0A]">
          “Before Dental Pulse, our email campaigns were generic blasts to everyone on our list. Now we segment dentists by their actual case mix and order gaps. Our last implant intro campaign had a 48% open rate and brought in 9 new accounts.”
        </blockquote>
        <figcaption className="mt-6 text-[#5C5C5C] text-[15px] sm:text-[16px] flex items-center justify-center gap-2 flex-wrap">
          <b className="text-[#0A0A0A] font-extrabold">Sarah Jenkins</b>
          <span>•</span>
          <span>Head of Marketing, Lumina Dental Craft</span>
        </figcaption>
      </figure>
    </section>
  );
}
