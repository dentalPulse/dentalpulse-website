import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-[#BDBDBD] pt-18 pb-8 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-start">
          {/* Brand Info */}
          <div className="flex-1 max-w-[320px] flex flex-col gap-4">
            <Link href="/" aria-label="Dental Pulse home" className="inline-block">
              <Image
                src="/logo.png"
                alt="Dental Pulse"
                width={167}
                height={30}
                className="h-[30px] w-auto object-contain brightness-0 invert"
              />
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
              <Link href="/platform" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                How it works
              </Link>
              <Link href="/pricing" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                Pricing
              </Link>
              <Link href="/integrations" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                Integrations
              </Link>
              <a href="/#results" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                ROI calculator
              </a>
            </div>

            {/* Column 2: Solutions */}
            <div className="flex flex-col gap-3">
              <b className="text-white text-[14px] tracking-wide uppercase font-mono">Solutions</b>
              <Link href="/solutions" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                Owners &amp; C-suite
              </Link>
              <Link href="/solutions/managers" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                Managers
              </Link>
              <Link href="/solutions/sales-reps" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                Sales reps
              </Link>
              <Link href="/solutions/marketing" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                Marketing
              </Link>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col gap-3">
              <b className="text-white text-[14px] tracking-wide uppercase font-mono">Company</b>
              <Link href="/about" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                About
              </Link>
              <Link href="/customers" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                Customers
              </Link>
              <a href="/#careers" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                Careers
              </a>
              <Link href="/resources" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                Resources
              </Link>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-3">
              <b className="text-white text-[14px] tracking-wide uppercase font-mono">Contact</b>
              <span className="text-[#BDBDBD] leading-relaxed">
                8 The Green, Suite A<br />
                Dover, DE 19901, USA
              </span>
              <a href="mailto:info@dentalpulseai.com" className="text-[#BDBDBD] hover:text-[#12F095] transition-colors">
                info@dentalpulseai.com
              </a>
              <div className="flex items-center gap-3 mt-1">
                <a
                  href="https://www.linkedin.com/company/dentalpulseai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity relative brightness-0 invert"
                >
                  <Image src="/linkedin.png" alt="LinkedIn" fill sizes="20px" className="object-contain" />
                </a>
                <a
                  href="https://www.instagram.com/dentalpulseai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity relative brightness-0 invert"
                >
                  <Image src="/instagram.png" alt="Instagram" fill sizes="20px" className="object-contain" />
                </a>
                <a
                  href="https://www.facebook.com/people/Dental-Pulse/61594145142887/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity relative brightness-0 invert"
                >
                  <Image src="/facebook.png" alt="Facebook" fill sizes="20px" className="object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#222222] flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] sm:text-[14px] text-[#7A7A7A]">
          <span>© 2026 Dental Pulse. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#terms" className="text-[#7A7A7A] hover:text-[#BDBDBD] transition-colors">
              Terms of use
            </a>
            <a href="#privacy" className="text-[#7A7A7A] hover:text-[#BDBDBD] transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
