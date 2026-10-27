"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function Footer() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href.startsWith('/#')) {
      return pathname === '/' && activeHash === href.slice(1);
    }
    if (href.startsWith('#')) {
      return activeHash === href;
    }
    if (href === '/') {
      return pathname === '/' && !activeHash;
    }
    return pathname === href;
  };

  const handleSmoothClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (pathname === '/') {
        e.preventDefault();
        setActiveHash(`#${targetId}`);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `#${targetId}`);
        }
      }
    } else if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      e.preventDefault();
      setActiveHash(`#${targetId}`);
      if (targetId === 'top' || !targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '#');
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${targetId}`);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (href === '/') {
      if (pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const FooterNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const active = isLinkActive(href);
    return (
      <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center">
        <Link
          href={href}
          onClick={(e) => handleSmoothClick(e, href)}
          className={`transition-colors duration-200 ${
            active
              ? 'text-[#12F095] font-semibold'
              : 'text-[#BDBDBD] hover:text-[#12F095]'
          }`}
        >
          {children}
        </Link>
      </motion.div>
    );
  };

  return (
    <footer className="w-full bg-[#000000] text-[#BDBDBD] pt-18 pb-8 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-start">
          {/* Brand Info */}
          <div className="flex-1 max-w-[320px] flex flex-col gap-4">
            <Link
              href="/"
              onClick={(e) => handleSmoothClick(e, '/')}
              aria-label="Dental Pulse home"
              className="inline-block group"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Image
                  src="/dental_pulse_white.png"
                  alt="Dental Pulse"
                  width={182}
                  height={33}
                  className="h-[32px] w-auto object-contain transition-opacity group-hover:opacity-90"
                />
              </motion.div>
            </Link>
            <p className="m-0 text-[14px] sm:text-[15px] leading-[1.6] text-[#BDBDBD]">
              See clearly. Grow smarter. Customer intelligence that helps dental labs keep more dentists and grow every account.
            </p>
          </div>

          {/* 4 Navigation Columns */}
          <div className="flex-[2] w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-[14px] sm:text-[15px]">
            {/* Column 1: Platform */}
            <div className="flex flex-col gap-3">
              <b className="text-white text-[14px] tracking-wide uppercase font-mono">Platform</b>
              <FooterNavLink href="/platform">How it works</FooterNavLink>
              <FooterNavLink href="/pricing">Pricing</FooterNavLink>
              <FooterNavLink href="/integrations">Integrations</FooterNavLink>
              <FooterNavLink href="/roi">ROI calculator</FooterNavLink>
            </div>

            {/* Column 2: Solutions */}
            <div className="flex flex-col gap-3">
              <b className="text-white text-[14px] tracking-wide uppercase font-mono">Solutions</b>
              <FooterNavLink href="/solutions">Owners &amp; C-suite</FooterNavLink>
              <FooterNavLink href="/solutions/managers">Managers</FooterNavLink>
              <FooterNavLink href="/solutions/sales-reps">Sales reps</FooterNavLink>
              <FooterNavLink href="/solutions/marketing">Marketing</FooterNavLink>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col gap-3">
              <b className="text-white text-[14px] tracking-wide uppercase font-mono">Company</b>
              <FooterNavLink href="/about">About</FooterNavLink>
              <FooterNavLink href="/customers">Customers</FooterNavLink>
              <FooterNavLink href="/careers">Careers</FooterNavLink>
              <FooterNavLink href="/resources">Resources</FooterNavLink>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-3">
              <b className="text-white text-[14px] tracking-wide uppercase font-mono">Contact</b>
              <span className="text-[#BDBDBD] leading-relaxed">
                8 The Green, Suite A<br />
                Dover, DE 19901, USA
              </span>
              <motion.a
                whileHover={{ x: 4 }}
                href="mailto:info@dentalpulseai.com"
                className="text-[#BDBDBD] hover:text-[#12F095] transition-colors"
              >
                info@dentalpulseai.com
              </motion.a>
              <div className="flex items-center gap-3 mt-1">
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/company/dentalpulseai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity relative brightness-0 invert"
                >
                  <Image src="/linkedin.png" alt="LinkedIn" fill sizes="20px" className="object-contain" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/dentalpulseai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity relative brightness-0 invert"
                >
                  <Image src="/instagram.png" alt="Instagram" fill sizes="20px" className="object-contain" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.facebook.com/people/Dental-Pulse/61594145142887/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity relative brightness-0 invert"
                >
                  <Image src="/facebook.png" alt="Facebook" fill sizes="20px" className="object-contain" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#222222] flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] sm:text-[14px] text-[#7A7A7A]">
          <span>© 2026 Dental Pulse. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <motion.a
              whileHover={{ y: -1 }}
              href="#terms"
              onClick={(e) => handleSmoothClick(e, '#terms')}
              className="text-[#7A7A7A] hover:text-[#BDBDBD] transition-colors"
            >
              Terms of use
            </motion.a>
            <motion.a
              whileHover={{ y: -1 }}
              href="#privacy"
              onClick={(e) => handleSmoothClick(e, '#privacy')}
              className="text-[#7A7A7A] hover:text-[#BDBDBD] transition-colors"
            >
              Privacy
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
