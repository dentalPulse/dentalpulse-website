import React from 'react';
import Link from 'next/link';

export function ManagersRolesCrosslink() {
  const roles = [
    { label: 'For owners & C-suite', href: '/solutions' },
    { label: 'For sales reps', href: '/solutions/sales-reps' },
    { label: 'For marketing', href: '/solutions/marketing' },
  ];

  return (
    <section className="w-full bg-white pt-2 pb-8 px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {roles.map((role) => (
            <Link
              key={role.label}
              href={role.href}
              className="bg-white border border-[#E6E6E6] hover:border-[#12F095] hover:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.12)] rounded-[18px] p-6 flex justify-between items-center font-extrabold text-[#0A0A0A] text-[16px] sm:text-[17px] transition-all group"
            >
              <span className="group-hover:text-[#067A47] transition-colors">{role.label}</span>
              <span className="text-[#067A47] group-hover:translate-x-1 transition-transform text-[18px]" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
