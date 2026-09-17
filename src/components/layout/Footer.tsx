import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full bg-[#f4f7f9] pt-12 pb-8 px-6 text-[#1a1c20] flex flex-col items-center">
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">
        {/* Brand */}
        <div className="flex flex-col gap-6 md:col-span-1">
          <Image src="/logo.png" alt="Dental Pulse" width={160} height={40} className="w-[160px] h-8" />
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 text-[14px] text-gray-700 md:col-span-1">
          <a href="#" className="hover:text-black">How it Works</a>
          <a href="#" className="hover:text-black">Solutions</a>
          <a href="#" className="hover:text-black">Roles</a>
          <a href="#" className="hover:text-black">Customer</a>
          <a href="#" className="hover:text-black">Career</a>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-3 text-[14px] text-gray-700 md:col-span-1">
          <h4 className="font-bold text-black text-[15px] mb-1">Address</h4>
          <p className="leading-relaxed">
            8 The Green, Suite A,<br />
            Dover, DE, USA, 19901
          </p>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3 text-[14px] text-gray-700 md:col-span-1">
          <h4 className="font-bold text-black text-[15px] mb-1">Support</h4>
          <a href="mailto:hello@dentalpulse.com" className="hover:text-black">hello@dentalpulse.com</a>
          <div className="flex items-center gap-3 mt-3">
            <a href="#" aria-label="Instagram" className="w-6 h-6 hover:opacity-80 transition-opacity relative">
              <Image src="/instagram.png" alt="Instagram" fill sizes="24px" className="object-contain" />
            </a>
            <a href="#" aria-label="Facebook" className="w-6 h-6 hover:opacity-80 transition-opacity relative">
              <Image src="/facebook.png" alt="Facebook" fill sizes="24px" className="object-contain" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-6 h-6 hover:opacity-80 transition-opacity relative">
              <Image src="/linkedin.png" alt="LinkedIn" fill sizes="24px" className="object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="w-full max-w-[1200px] border-t border-[#11f294] pt-8 flex justify-center text-[12px] text-gray-600 font-medium text-center">
        <p>&copy; Copywriting | All Rights Reserved | Terms of Use | Privacy</p>
      </div>
    </footer>
  );
}
