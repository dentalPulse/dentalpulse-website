import React from 'react';
import Image from 'next/image';

export function ValueProposition() {
  return (
    <section className="w-full bg-brand-primary md:py-24 md:px-6 py-12 px-3 flex flex-col items-center text-black">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center">
        <h2 className="text-[40px] md:text-[50px] font-bold leading-tight mb-6 max-w-[487px]">
          Turn Customer Data Into Clear Direction
        </h2>
        <p className="text-[18px] md:text-[20px] font-medium max-w-[874px] mb-20 opacity-90">
          <span className="font-bold">dental pulse</span> transforms your lab's customer data into actionable intelligence—helping you uncover growth opportunities, strengthen relationships, and make smarter decisions.
        </p>

        {/* Illustration */}
        <div className="relative w-full max-w-[900px]">
          <Image
            src="/customer_data.png"
            alt="Customer Data Illustration"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
