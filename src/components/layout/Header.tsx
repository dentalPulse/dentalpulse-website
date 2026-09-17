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
        <a href="#how-it-works" className="hover:text-brand-green transition-colors">How it Works</a>
        <a href="#solutions" className="hover:text-brand-green transition-colors">Solutions</a>
        <a href="#roles" className="hover:text-brand-green transition-colors">Roles</a>
        <a href="#customer" className="hover:text-brand-green transition-colors">Customer</a>
        <a href="#career" className="hover:text-brand-green transition-colors">Career</a>
      </nav>

      {/* Auth / CTA */}
      <div className="flex items-center gap-4">
        <Button variant="primary" className="hidden md:flex rounded-lg">Login</Button>
        <Button variant="primary" className="rounded-lg">Book a Demo</Button>
      </div>
    </header>
  );
}
