import React from 'react';
import Image from 'next/image';

export function ProductPreview() {
  return (
    <section className="w-full bg-brand-dark pt-16 md:pt-24 px-6 flex flex-col items-center overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center bg-brand-primary pt-[63px] rounded-[12px]">
        <h2 className="text-black text-[32px] md:text-[40px] font-medium leading-tight mb-2">
          Stop Managing Your Lab in the Dark
        </h2>
        <h3 className="text-black text-[46px] md:text-[96px] font-bold leading-[1] tracking-tight md:mb-16 mb-8">
          100x faster
        </h3>

        {/* Dashboard Mockup Container */}
        <div className="relative w-full max-w-[1000px] overflow-hidden ">
          <Image
            src="/dashboard.png"
            alt="Dashboard Interface Mockup"
            width={1000}
            height={600}
            className="w-full h-auto block"
            priority
            sizes="(max-width: 1200px) 100vw, 1000px"
          />
        </div>
      </div>
    </section>
  );
}
