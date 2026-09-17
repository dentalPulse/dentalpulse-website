import React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full bg-brand-dark overflow-hidden flex flex-col items-center pt-24 md:pt-32 pb-24 md:pb-40 px-6">
      {/* Background concentric circles could go here as SVG or CSS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full hover:border-brand-primary/50 transition-colors duration-300"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-white/5 rounded-full hover:border-brand-primary/40 transition-colors duration-300"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-white/5 rounded-full hover:border-brand-primary/30 transition-colors duration-300"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[800px]">
        <h1 className="text-white text-[46px] md:text-[80px] font-bold leading-[1.1] tracking-tight mb-6">
          See clearly.<br />
          <span className="text-white">Grow smarter.</span>
        </h1>

        <p className="text-brand-neutral-4 text-[18px] md:text-[22px] leading-relaxed mb-10 max-w-[600px]">
          Complete visibility into customers, cases, revenue, and production - all in one intelligent platform.
        </p>

        <Button variant="primary" size="lg" className='rounded-xl'>
          Book a Demo
        </Button>
      </div>

      {/* Decorative Icons */}
      <div className="hidden md:block absolute z-0 w-full h-full max-w-[1200px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Left Side Icons */}
        <div className="absolute top-[15%] left-[15%] rounded-full shadow-[0_0_1px_rgba(0,255,157,0.2)] flex items-center justify-center w-14 h-14 animate-pulse duration-1000">
          <Image src="/dental.png" alt="Dental" width={72} height={72} />
        </div>
        <div className="absolute top-[42%] left-[5%] rounded-full shadow-[0_0_1px_rgba(0,255,157,0.2)] flex items-center justify-center w-16 h-16 animate-pulse duration-1000">
          <Image src="/users.png" alt="Users" width={72} height={72} />
        </div>
        <div className="absolute bottom-[30%] left-[17%] rounded-full shadow-[0_0_1px_rgba(0,255,157,0.2)] flex items-center justify-center w-14 h-14 animate-pulse duration-1000">
          <Image src="/star.png" alt="star" width={72} height={72} />
        </div>
        <div className="absolute bottom-[10%] left-[10%] rounded-full shadow-[0_0_1px_rgba(0,255,157,0.2)] flex items-center justify-center w-14 h-14 animate-pulse duration-1000">
          <Image src="/growth.png" alt="Growth" width={72} height={72} />
        </div>

        {/* Right Side Icons */}
        <div className="absolute top-[20%] right-[12%] rounded-full  shadow-[0_0_1px_rgba(0,255,157,0.2)] flex items-center justify-center w-14 h-14 animate-pulse duration-1000">
          <Image src="/chart_bar.png" alt="chart_bar" width={72} height={72} />
        </div>
        <div className="absolute top-[40%] right-[18%] rounded-full shadow-[0_0_1px_rgba(0,255,157,0.2)] flex items-center justify-center w-16 h-16 animate-pulse duration-1000">
          <Image src="/react.png" alt="React" width={72} height={72} />
        </div>
        <div className="absolute top-[45%] right-[0%] rounded-full  shadow-[0_0_1px_rgba(0,255,157,0.2)] flex items-center justify-center w-14 h-14 animate-pulse duration-1000">
          <Image src="/card.png" alt="card" width={72} height={72} />
        </div>
        <div className="absolute bottom-[25%] right-[5%] rounded-full  shadow-[0_0_1px_rgba(0,255,157,0.2)] flex items-center justify-center w-14 h-14 animate-pulse duration-1000">
          <Image src="/eyes.png" alt="Eyes" width={72} height={72} />
        </div>
      </div>
    </section>
  );
}
