import React from 'react';

export function CareersWhyCards() {
  return (
    <section className="w-full pb-24 px-6">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Impact (Signature Dark Card) */}
        <div className="bg-[#0A0A0A] text-white rounded-[22px] p-8 sm:p-9 flex flex-col justify-between border border-[#222222] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#12F095]/10 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 group-hover:bg-[#12F095]/15" />

          <div className="relative z-10">
            <span className="font-mono text-[13px] font-semibold text-[#12F095] tracking-wider block uppercase">
              IMPACT
            </span>
            <b className="block text-[21px] sm:text-[22px] font-bold text-white mt-3.5 tracking-[-0.01em] leading-snug group-hover:text-[#12F095] transition-colors">
              Your work reaches customers fast
            </b>
          </div>

          <p className="text-[15px] text-[#BDBDBD] leading-[1.6] mt-4 m-0 relative z-10">
            Ship features labs use the same week, and hear what they think directly.
          </p>
        </div>

        {/* Card 2: Ownership (Clean White Card) */}
        <div className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-8 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div>
            <span className="font-mono text-[13px] font-semibold text-[#067A47] tracking-wider block uppercase">
              OWNERSHIP
            </span>
            <b className="block text-[21px] sm:text-[22px] font-bold text-[#0A0A0A] mt-3.5 tracking-[-0.01em] leading-snug group-hover:text-[#067A47] transition-colors">
              Own problems end to end
            </b>
          </div>

          <p className="text-[15px] text-[#5C5C5C] leading-[1.6] mt-4 m-0">
            Small team, big scope. Take an idea from customer call to production.
          </p>
        </div>

        {/* Card 3: Craft (Clean White Card) */}
        <div className="bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-8 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div>
            <span className="font-mono text-[13px] font-semibold text-[#067A47] tracking-wider block uppercase">
              CRAFT
            </span>
            <b className="block text-[21px] sm:text-[22px] font-bold text-[#0A0A0A] mt-3.5 tracking-[-0.01em] leading-snug group-hover:text-[#067A47] transition-colors">
              Care about the details
            </b>
          </div>

          <p className="text-[15px] text-[#5C5C5C] leading-[1.6] mt-4 m-0">
            Like the labs we serve, we believe precision is a form of respect.
          </p>
        </div>
      </div>
    </section>
  );
}
