import React from 'react';

const PARTNER_LABS = [
  { name: 'Apex Dental Lab', type: 'Full-Service Digital Lab' },
  { name: 'Precision Dental Arts', type: 'Crown & Bridge Specialists' },
  { name: 'Summit Milling Center', type: 'CAD/CAM Production' },
  { name: 'Pacific Oral Ceramics', type: 'Aesthetic Restorations' },
  { name: 'Vanguard Dental Lab', type: 'Implants & Orthodontics' },
  { name: 'ProCraft Dental Studio', type: 'High-Volume Production' },
];

export function PartnerLogos() {
  return (
    <section className="w-full bg-white pt-16 pb-8 px-6">
      <div className="max-w-[1240px] mx-auto text-center">
        <p className="m-0 mb-6 font-sans text-[13px] font-bold tracking-[0.12em] uppercase text-[#5C5C5C]">
          Trusted by growing dental laboratories
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PARTNER_LABS.map((lab) => (
            <div
              key={lab.name}
              className="h-14 border border-dashed border-[#D6D6D6] hover:border-[#12F095] rounded-xl flex flex-col items-center justify-center px-3 text-center transition-colors group bg-white"
            >
              <span className="font-sans text-[13px] sm:text-[14px] font-semibold text-[#6E6E6E] group-hover:text-[#0A0A0A] transition-colors line-clamp-1">
                {lab.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
