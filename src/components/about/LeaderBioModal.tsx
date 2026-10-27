"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leader } from './AboutLeadership';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

interface LeaderBioModalProps {
  leader: Leader | null;
  onClose: () => void;
}

export function LeaderBioModal({ leader, onClose }: LeaderBioModalProps) {
  useLockBodyScroll(!!leader);

  useEffect(() => {
    if (!leader) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [leader, onClose]);

  if (!leader) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="leader-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0D0D0D] text-white border border-[#262626] rounded-[28px] max-w-[680px] w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#222222] flex items-start justify-between gap-6 bg-gradient-to-b from-[#171717] to-[#0D0D0D]">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] overflow-hidden relative shrink-0 border border-[#333333] bg-[#222222]">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold text-[#12F095] tracking-wider uppercase block mb-1">
                {leader.discipline}
              </span>
              <h3
                id="leader-modal-title"
                className="text-[22px] sm:text-[26px] font-extrabold text-white leading-tight m-0"
              >
                {leader.name}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#A3A3A3] font-medium m-0 mt-1">
                {leader.role} • <span className="font-mono text-[12px] text-[#737373]">{leader.experience}</span>
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close leader biography"
            className="w-10 h-10 rounded-full bg-[#1F1F1F] hover:bg-[#2E2E2E] text-[#BDBDBD] hover:text-white flex items-center justify-center transition-colors shrink-0"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[15px] sm:text-[16px]">
          {/* Executive Background Narrative */}
          <div>
            <h4 className="font-mono text-[11px] font-bold text-[#12F095] tracking-wider uppercase mb-2">
              EXECUTIVE BACKGROUND &amp; VISION
            </h4>
            <p className="text-[#CCCCCC] leading-relaxed m-0 text-[15px]">
              {leader.bio}
            </p>
          </div>

          {/* Core Focus Areas */}
          <div className="p-5 rounded-2xl bg-[#141414] border border-[#222222]">
            <h5 className="font-mono text-[11px] font-bold text-white tracking-wider uppercase m-0 mb-3">
              LABORATORY COMMITMENTS
            </h5>
            <ul className="space-y-2 text-[14px] text-[#A3A3A3] p-0 m-0 list-none">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#12F095]" />
                Zero disruption to existing technician and bench workflows
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#12F095]" />
                Direct interoperability with Magic Touch, LabTrac, and Evident
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#12F095]" />
                Dedicated human onboarding and laboratory customer success
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#222222] bg-[#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[13px] text-[#737373] text-center sm:text-left">
            Have questions for the DentalPulse leadership team?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-[14px] font-semibold text-[#A3A3A3] hover:text-white transition-colors"
            >
              Close
            </button>
            <Link
              href="/book-demo"
              onClick={onClose}
              className="w-full sm:w-auto text-center px-6 py-2.5 rounded-full bg-[#12F095] hover:bg-[#0fd683] text-[#0A0A0A] font-extrabold text-[14px] transition-all shadow-md hover:shadow-lg"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
