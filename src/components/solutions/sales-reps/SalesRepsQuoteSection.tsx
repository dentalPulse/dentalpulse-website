import React from 'react';

export function SalesRepsQuoteSection() {
  return (
    <section className="w-full bg-white py-24 sm:py-28 px-6 border-t border-[#F0F0F0]">
      <figure className="max-w-[920px] mx-auto text-center m-0">
        <blockquote className="m-0 text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.38] font-bold tracking-[-0.02em] text-[#0A0A0A]">
          “I used to spend Monday mornings digging through invoices and spreadsheets trying to figure out who was dropping off. Now Dental Pulse gives me my five priority stops before I even finish my coffee.”
        </blockquote>
        <figcaption className="mt-6 text-[#5C5C5C] text-[15px] sm:text-[16px] flex items-center justify-center gap-2 flex-wrap">
          <b className="text-[#0A0A0A] font-extrabold">Elena Rostova</b>
          <span>•</span>
          <span>Territory Account Representative, Apex Dental Craft</span>
        </figcaption>
      </figure>
    </section>
  );
}
