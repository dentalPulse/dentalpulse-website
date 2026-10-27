"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Platform', href: '/platform' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'ROI', href: '/#results' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Customers', href: '/customers' },
    { label: 'Resources', href: '/resources' },
  ];

  const isLinkActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="w-full bg-[#0A0A0A] border-b border-[#222222] sticky top-0 z-50 transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" aria-label="Dental Pulse home" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="Dental Pulse"
            width={167}
            height={30}
            className="h-[30px] w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 text-[15px] font-medium">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={active ? "text-[#12F095] font-semibold transition-colors" : "text-[#E6E6E6] hover:text-[#12F095] transition-colors"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Auth / CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a
            href="https://app.dentalpulseai.com"
            className="text-[15px] font-semibold text-white px-3.5 py-2.5 hover:text-[#12F095] transition-colors"
          >
            Log in
          </a>
          <Link
            href="/#book-demo"
            className="bg-[#12F095] text-[#0A0A0A] text-[15px] font-bold px-5 py-2.5 rounded-full hover:bg-[#00df83] transition-colors shadow-sm"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-[#E6E6E6] hover:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-[#0A0A0A] border-t border-[#222222] px-6 py-6 flex flex-col gap-5 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-[16px] font-medium">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={active ? "text-[#12F095] font-semibold py-1 transition-colors" : "text-[#E6E6E6] hover:text-[#12F095] py-1 transition-colors"}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#222222] flex flex-col gap-3">
            <a
              href="https://app.dentalpulseai.com"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-2.5 text-[15px] font-semibold text-white border border-[#333333] rounded-full hover:bg-white/5 transition-colors"
            >
              Log in
            </a>
            <Link
              href="/#book-demo"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-2.5 text-[15px] font-bold bg-[#12F095] text-[#0A0A0A] rounded-full hover:bg-[#00df83] transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
