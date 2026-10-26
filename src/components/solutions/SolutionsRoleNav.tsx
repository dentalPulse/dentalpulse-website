import React from 'react';
import Link from 'next/link';

interface SolutionsRoleNavProps {
  activeRole?: 'owners' | 'managers' | 'sales-reps' | 'marketing';
}

export function SolutionsRoleNav({ activeRole = 'owners' }: SolutionsRoleNavProps) {
  const roles = [
    { id: 'owners', label: 'Owners & C-suite', href: '/solutions' },
    { id: 'managers', label: 'Managers', href: '/solutions/managers' },
    { id: 'sales-reps', label: 'Sales reps', href: '/solutions#roles' },
    { id: 'marketing', label: 'Marketing', href: '/solutions#roles' },
  ];

  return (
    <div className="w-full bg-white pt-7 px-6">
      <div className="max-w-[1240px] mx-auto">
        <nav
          aria-label="Solutions by role"
          className="inline-flex flex-wrap items-center gap-1 p-1 rounded-full bg-[#EFEFEF] border border-[#E6E6E6] text-[14px] font-bold"
        >
          {roles.map((role) => {
            const isActive = role.id === activeRole;
            return (
              <Link
                key={role.id}
                href={role.href}
                aria-current={isActive ? 'page' : undefined}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all text-center ${
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
