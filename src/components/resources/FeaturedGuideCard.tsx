import React from 'react';

interface FeaturedGuideCardProps {
  onOpenArticle?: (articleId: string) => void;
}

export function FeaturedGuideCard({ onOpenArticle }: FeaturedGuideCardProps) {
  const articleId = 'early-warning-playbook';

  return (
    <section className="w-full pb-16 px-6">
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpenArticle?.(articleId)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenArticle?.(articleId);
          }
        }}
        className="max-w-[1240px] mx-auto bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[28px] overflow-hidden flex flex-col lg:flex-row transition-all duration-300 hover:shadow-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#12F095]"
      >
        {/* Left Visual Graphic Panel */}
        <div
          aria-hidden="true"
          className="flex-[1.1] min-h-[300px] lg:min-h-[340px] bg-[#0A0A0A] relative overflow-hidden flex items-end p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#222222]"
        >
          {/* Subtle Ambient Pulse Background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(#12F095 1px, transparent 1px), radial-gradient(#12F095 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px',
            }}
          />

          {/* Dental Pulse ECG Line Graphic */}
          <svg
            viewBox="0 0 600 240"
            className="absolute inset-0 w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            {/* Baseline */}
            <path d="M0 190h600" stroke="#2A2A2A" strokeWidth="2" />
            {/* Pulse Line */}
            <path
              d="M0 150h180l34-90 46 160 34-70h306"
              fill="none"
              stroke="#12F095"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Featured Guide Tag */}
          <span className="relative z-10 font-mono text-[12px] font-bold text-[#0A0A0A] bg-[#12F095] px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            FEATURED GUIDE
          </span>
        </div>

        {/* Right Content Panel */}
        <div className="flex-1 p-7 sm:p-10 lg:p-12 flex flex-col justify-center gap-4">
          <span className="font-mono text-[12px] font-bold text-[#067A47] tracking-wider uppercase">
            RETENTION • 9 MIN READ
          </span>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#0A0A0A] group-hover:text-[#067A47] transition-colors m-0">
            The early-warning playbook: 7 signals a dentist is about to leave your lab
          </h2>

          <p className="text-[16px] sm:text-[17px] text-[#5C5C5C] leading-[1.6] m-0">
            From longer gaps between cases to quiet shifts in product mix — what to watch, and what to do about each one.
          </p>

          <div className="pt-2">
            <span className="font-bold text-[16px] text-[#067A47] group-hover:text-[#06663C] inline-flex items-center gap-1.5 transition-colors">
              <span>Read the guide</span>
              <span
                aria-hidden="true"
                className="transform transition-transform duration-200 group-hover:translate-x-1.5"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
