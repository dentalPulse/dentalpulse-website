import React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full h-[88px] flex items-center justify-between px-8 max-w-[1512px] mx-auto bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/logo.png" alt="DentalPulse Logo" width={210} height={40} className="h-10 w-[210px]" priority />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium text-brand-neutral-7">
        <a href="#platform" className="hover:text-brand-green transition-colors">Platform</a>
        <a href="#solutions" className="hover:text-brand-green transition-colors">Solutions</a>
        <a href="#pricing" className="hover:text-brand-green transition-colors">Pricing</a>
        <a href="#customers" className="hover:text-brand-green transition-colors">Customers</a>
      </nav>

      {/* Auth / CTA */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="hidden md:flex">Log In</Button>
        <Button variant="primary">Book a Demo</Button>
      </div>
    </header>
  );
}
