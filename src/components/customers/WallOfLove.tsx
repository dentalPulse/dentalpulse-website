import React from 'react';

interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  title: string;
  lab: string;
  initials: string;
  variant: 'white' | 'mint' | 'dark';
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote:
      'Early risk alerts saved our largest implant account. We had two weeks to step in before the dentist moved their volume elsewhere.',
    name: 'Michael S.',
    title: 'Managing Director',
    lab: 'Apex Dental Ceramics',
    initials: 'MS',
    variant: 'white',
  },
  {
    id: 't2',
    quote:
      'We cut time spent tracking weekly sales numbers by 80%. No more exports or copy-pasting numbers out of our lab management software.',
    name: 'David R.',
    title: 'VP Operations',
    lab: 'Summit Milling Center',
    initials: 'DR',
    variant: 'mint',
  },
  {
    id: 't3',
    quote:
      'DentalPulse automated our field follow-ups and weekly sales objectives. Our reps walk in knowing exactly which practice needs attention.',
    name: 'Elena F.',
    title: 'General Manager',
    lab: 'Vanguard Dental Studio',
    initials: 'EF',
    variant: 'white',
  },
  {
    id: 't4',
    quote:
      'DentalPulse uncovered $48K in cross-sell opportunities with our existing dentists in the first month alone by tracking product gaps.',
    name: 'Kelly L.',
    title: 'Sales & CS Manager',
    lab: 'Precision Dental Arts',
    initials: 'KL',
    variant: 'white',
  },
  {
    id: 't5',
    quote:
      'The platform paid for itself in 18 days when it flagged a 30% drop in crown & bridge orders from an anchor clinic that was switching systems.',
    name: 'Isaac J.',
    title: 'Owner',
    lab: 'Beacon Prosthetics Studio',
    initials: 'IJ',
    variant: 'white',
  },
  {
    id: 't6',
    quote:
      'The AI assistant generates ready-to-use call briefs for every doctor. Our reps have real leverage and specific talking points every morning.',
    name: 'Marcus R.',
    title: 'Chief Commercial Officer',
    lab: 'Elite Dental Craft',
    initials: 'MR',
    variant: 'dark',
  },
];

export function WallOfLove() {
  return (
    <section className="w-full pb-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] mb-10">
          What our customers say
        </h2>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => {
            // Style variants
            if (t.variant === 'dark') {
              return (
                <figure
                  key={t.id}
                  className="m-0 bg-[#0A0A0A] text-white border border-[#222222] hover:border-[#333333] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all shadow-md hover:shadow-xl"
                >
                  <blockquote className="m-0 text-[18px] sm:text-[19px] leading-[1.55] font-semibold tracking-[-0.01em] text-white">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-auto flex items-center gap-3.5 pt-5 border-t border-[#222222]">
                    <span className="w-11 h-11 rounded-full bg-[#2A2A2A] text-[#12F095] flex items-center justify-center font-bold text-[14px] shrink-0 font-mono">
                      {t.initials}
                    </span>
                    <div>
                      <b className="block text-[15px] font-bold text-white leading-tight">
                        {t.name}
                      </b>
                      <span className="text-[13px] text-[#BDBDBD] leading-snug">
                        {t.title}, {t.lab}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              );
            }

            if (t.variant === 'mint') {
              return (
                <figure
                  key={t.id}
                  className="m-0 bg-[#EEFDF5] border border-[#BDF5DA] hover:border-[#86EFAC] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all shadow-sm hover:shadow-md"
                >
                  <blockquote className="m-0 text-[18px] sm:text-[19px] leading-[1.55] font-semibold tracking-[-0.01em] text-[#0A0A0A]">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-auto flex items-center gap-3.5 pt-5 border-t border-[#BDF5DA]/60">
                    <span className="w-11 h-11 rounded-full bg-white text-[#06663C] flex items-center justify-center font-bold text-[14px] shrink-0 font-mono shadow-sm border border-[#BDF5DA]">
                      {t.initials}
                    </span>
                    <div>
                      <b className="block text-[15px] font-bold text-[#0A0A0A] leading-tight">
                        {t.name}
                      </b>
                      <span className="text-[13px] text-[#333333] leading-snug">
                        {t.title}, {t.lab}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              );
            }

            // Standard White Card
            return (
              <figure
                key={t.id}
                className="m-0 bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all shadow-sm hover:shadow-md"
              >
                <blockquote className="m-0 text-[18px] sm:text-[19px] leading-[1.55] font-semibold tracking-[-0.01em] text-[#0A0A0A]">
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3.5 pt-5 border-t border-[#F0F0F0]">
                  <span className="w-11 h-11 rounded-full bg-[#E3FCEF] text-[#06663C] flex items-center justify-center font-bold text-[14px] shrink-0 font-mono">
                    {t.initials}
                  </span>
                  <div>
                    <b className="block text-[15px] font-bold text-[#0A0A0A] leading-tight">
                      {t.name}
                    </b>
                    <span className="text-[13px] text-[#5C5C5C] leading-snug">
                      {t.title}, {t.lab}
                    </span>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
