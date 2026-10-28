import React from 'react';
import Link from 'next/link';

interface SolutionsRoleNavProps {
  activeRole?: 'owners' | 'managers' | 'sales-reps' | 'marketing';
}

export function SolutionsRoleNav({ activeRole = 'owners' }: SolutionsRoleNavProps) {
  const roles = [
    { id: 'owners', label: 'Owners & C-suite', href: '/solutions' },
    { id: 'managers', label: 'Managers', href: '/solutions/managers' },
    { id: 'sales-reps', label: 'Sales reps', href: '/solutions/sales-reps' },
    { id: 'marketing', label: 'Marketing', href: '/solutions/marketing' },
  ];

  return (
    <div className="w-full bg-white pt-5 sm:pt-7 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto overflow-x-auto no-scrollbar pb-1">
        <nav
          aria-label="Solutions by role"
          className="inline-flex items-center gap-1 p-1 rounded-full bg-[#EFEFEF] border border-[#E6E6E6] text-[13px] sm:text-[14px] font-bold whitespace-nowrap min-w-max"
        >
          {roles.map((role) => {
            const isActive = role.id === activeRole;
            return (
              <Link
                key={role.id}
                href={role.href}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all text-center ${
                  isActive
                    ? 'bg-[#0A0A0A] text-white shadow-xs'
                    : 'text-[#0A0A0A] hover:text-[#067A47] hover:bg-black/5'
                }`}
              >
                {role.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
