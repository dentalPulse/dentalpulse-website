"use client";
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-8 w-full bg-white relative z-50">
      <div className='max-w-[1512px] h-[88px] mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            {/* Desktop Logo */}
            <Image src="/logo.png" alt="DentalPulse Logo" width={189} height={34} className="hidden lg:block h-[34px] w-[189px] object-contain" priority />
            {/* Mobile Logo */}
            <Image src="/Dental_Pulse_Black.png" alt="DentalPulse Logo" width={180} height={34} className="block lg:hidden h-[34px] w-auto object-contain" style={{ width: 'auto', height: '100%' }} priority />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium text-brand-neutral-7">
          <a href="#how-it-works" className="hover:text-brand-green transition-colors">How it Works</a>
          <a href="#solutions" className="hover:text-brand-green transition-colors">Solutions</a>
          <a href="#roles" className="hover:text-brand-green transition-colors">Roles</a>
          <a href="#customer" className="hover:text-brand-green transition-colors">Customer</a>
          <a href="#career" className="hover:text-brand-green transition-colors">Career</a>
        </nav>

        {/* Auth / CTA - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="primary" className="rounded-lg">Login</Button>
          <Button variant="primary" className="rounded-lg">Book a Demo</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-brand-neutral-7"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-[88px] left-0 w-full bg-white border-t border-gray-100 shadow-xl lg:hidden flex flex-col p-6 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-6 text-[16px] font-medium text-brand-neutral-7 mb-8">
              <a href="#how-it-works" className="hover:text-brand-green transition-colors" onClick={() => setIsMenuOpen(false)}>How it Works</a>
              <a href="#solutions" className="hover:text-brand-green transition-colors" onClick={() => setIsMenuOpen(false)}>Solutions</a>
              <a href="#roles" className="hover:text-brand-green transition-colors" onClick={() => setIsMenuOpen(false)}>Roles</a>
              <a href="#customer" className="hover:text-brand-green transition-colors" onClick={() => setIsMenuOpen(false)}>Customer</a>
              <a href="#career" className="hover:text-brand-green transition-colors" onClick={() => setIsMenuOpen(false)}>Career</a>
            </nav>
            <div className="flex flex-col gap-4">
              <Button variant="primary" className="w-full rounded-lg justify-center border border-brand-green bg-transparent text-brand-green hover:bg-brand-green/10" onClick={() => setIsMenuOpen(false)}>Login</Button>
              <Button variant="primary" className="w-full rounded-lg justify-center" onClick={() => setIsMenuOpen(false)}>Book a Demo</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
