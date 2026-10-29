"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HEADER_NAV_LINKS } from '@/data/navigationData';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const pathname = usePathname();
  const navLinks = HEADER_NAV_LINKS;
  const [isSticky, setIsSticky] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  // Track scroll direction on both mobile and desktop:
  // - Scroll down: navbar is sticky at top
  // - Scroll up: navbar is not sticky (retracts out of view until back at the top)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 10);

      // Always keep visible at the very top of the page
      if (currentScrollY <= 10) {
        setIsSticky(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Ignore tiny scroll jitter (< 6px)
      if (Math.abs(delta) < 6) {
        return;
      }

      if (delta > 0) {
        // User is scrolling DOWN -> navbar should be sticky
        setIsSticky(true);
      } else if (delta < 0 && currentScrollY > 70) {
        // User is scrolling UP -> navbar should NOT be sticky
        setIsSticky(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track hash changes and smooth scroll to section on hash mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const syncHash = () => {
      setActiveHash(window.location.hash);
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    }

    return () => window.removeEventListener('hashchange', syncHash);
  }, [pathname]);

  // Observer on homepage to activate ROI/results or other sections when scrolled into view
  useEffect(() => {
    if (pathname !== '/' || typeof window === 'undefined') return;

    const sections = ['results', 'book-demo'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveHash(`#${id}`);
              }
            });
          },
          { threshold: 0.35 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href.startsWith('/#')) {
      return pathname === '/' && activeHash === href.slice(1);
    }
    if (href === '/') {
      return pathname === '/' && !activeHash;
    }
    return pathname === href || pathname.startsWith(href + '/');
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
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${targetId}`);
      }
    } else {
      setActiveHash('');
    }
  };

  return (
    <header
      className={`w-full bg-[#0A0A0A] border-b border-[#222222] sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isSticky || isMenuOpen
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
      } ${isScrolled && isSticky ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={(e) => handleSmoothClick(e, '/')}
          aria-label="Dental Pulse home"
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Image
              src="/dental_pulse_white.png"
              alt="Dental Pulse"
              width={182}
              height={33}
              className="h-[28px] sm:h-[32px] w-auto object-contain transition-opacity group-hover:opacity-90"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-4 xl:gap-7 text-[14px] xl:text-[15px] font-medium">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <motion.div
                key={link.label}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="relative"
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleSmoothClick(e, link.href)}
                  className={`transition-colors duration-200 ${
                    active ? 'text-[#12F095] font-semibold' : 'text-[#E6E6E6] hover:text-[#12F095]'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Desktop Auth / CTA */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            href="https://app.dentalpulseai.com"
            className="text-[14px] xl:text-[15px] font-semibold text-white px-2.5 xl:px-3.5 py-2.5 hover:text-[#12F095] transition-colors"
          >
            Log in
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/book-demo"
              className="inline-block bg-[#12F095] text-[#0A0A0A] text-[14px] xl:text-[15px] font-bold px-4 xl:px-5 py-2.5 rounded-full hover:bg-[#00df83] transition-colors shadow-sm"
            >
              Book a demo
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
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
        </motion.button>
      </div>

      {/* Mobile Menu Drawer with Framer Motion Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-y-auto max-h-[calc(100vh-76px)] lg:hidden w-full bg-[#0A0A0A] border-t border-[#222222] px-6 py-6 flex flex-col gap-5 shadow-2xl"
          >
            <nav className="flex flex-col gap-3 text-[16px] font-medium">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      handleSmoothClick(e, link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`py-1.5 transition-colors duration-200 ${
                      active ? 'text-[#12F095] font-semibold' : 'text-[#E6E6E6] hover:text-[#12F095]'
                    }`}
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
                href="/book-demo"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-2.5 text-[15px] font-bold bg-[#12F095] text-[#0A0A0A] rounded-full hover:bg-[#00df83] transition-colors shadow-sm"
              >
                Book a demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
