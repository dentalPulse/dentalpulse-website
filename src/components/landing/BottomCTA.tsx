import React from 'react';

export function BottomCTA() {
  return (
    <section className="w-full bg-brand-light-bg pt-16 md:pt-32 pb-12 md:pb-20 px-6 flex flex-col items-center">
      <div className="max-w-[800px] w-full flex flex-col items-center text-center">
        <h2 className="text-[#1a1c20] text-[40px] md:text-[48px] font-bold leading-tight mb-6">
          Your Lab Has the Data.<br />
          Now Put It to Work.
        </h2>
        <p className="text-[#4b5563] text-[16px] md:text-[18px] mb-10 leading-relaxed">
          <span className="font-bold text-black">dental pulse</span> helps you turn everyday lab data<br className="hidden md:block" /> into smarter actions and sustainable growth.
        </p>

        <button className="bg-brand-primary text-black font-bold py-3 px-8 rounded-[12px] shadow-sm hover:bg-brand-secondary-hover transition-colors cursor-pointer">
          Book a Demo
        </button>
      </div>
    </section>
  );
}
