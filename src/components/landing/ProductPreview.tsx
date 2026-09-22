import React from 'react';
import Image from 'next/image';

export function ProductPreview() {
  return (
    <section className="w-full bg-brand-dark pt-16 md:pt-24 px-6 flex flex-col items-center overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center bg-brand-primary pt-[63px] rounded-[12px]">
        <h2 className="font-helvetica text-black text-[32px] md:text-[45px] !font-normal leading-[100%] mb-2">
          Stop Managing Your <br /> Lab in the Dark
        </h2>
        <h3 className="text-black text-[46px] md:text-[152px] !font-normal !leading-[100%]">
          100x faster
        </h3>
        <p className="font-normal text-[20px] leading-[24px] tracking-[2%] md:w-1/2 w-full md:p-0 p-3 mx-auto">
          <span className='text-black font-semibold'> dental pulse </span> brings your customer, case, sales, and operational data together in one intelligent platform.
        </p>

        {/* Dashboard Mockup Container */}
        <div className="relative w-full max-w-[1000px] overflow-hidden ">
          <Image
            src="/dashboard.png"
            alt="Dashboard Interface Mockup"
            width={1000}
            height={600}
            className="block"
            style={{ width: '100%', height: 'auto' }}
            priority
            sizes="(max-width: 1200px) 100vw, 1000px"
          />
        </div>
      </div>
    </section>
  );
}
