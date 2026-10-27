"use client";

import React, { useEffect, useState } from 'react';
import { JobRole } from './CareersOpenRoles';

interface JobApplicationModalProps {
  role: JobRole | null;
  onClose: () => void;
}

export function JobApplicationModal({ role, onClose }: JobApplicationModalProps) {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!role) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [role, onClose]);

  if (!role) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="job-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0D0D0D] text-white border border-[#262626] rounded-[28px] max-w-[720px] w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#222222] flex items-start justify-between gap-6 bg-gradient-to-b from-[#171717] to-[#0D0D0D]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-[11px] font-bold text-[#12F095] tracking-wider uppercase bg-[#12F095]/10 px-2.5 py-0.5 rounded-full border border-[#12F095]/20">
                {role.team}
              </span>
              <span className="font-mono text-[11px] text-[#A3A3A3] bg-[#1E1E1E] px-2.5 py-0.5 rounded-full">
                {role.salary}
              </span>
            </div>
            <h3
              id="job-modal-title"
              className="text-[22px] sm:text-[26px] font-extrabold text-white leading-tight m-0"
            >
              {role.title}
            </h3>
            <p className="text-[14px] text-[#A3A3A3] font-medium m-0 mt-1.5 flex items-center gap-2">
              <span>{role.location}</span>
              <span>•</span>
              <span className="text-[#12F095] font-semibold">{role.type}</span>
            </p>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close job description modal"
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
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-[15px] sm:text-[16px]">
          {/* Overview */}
          <div>
            <h4 className="font-mono text-[11px] font-bold text-[#12F095] tracking-wider uppercase mb-2">
              ROLE OVERVIEW
            </h4>
            <p className="text-[#CCCCCC] leading-relaxed m-0 text-[15px]">
              {role.overview}
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="font-mono text-[11px] font-bold text-[#12F095] tracking-wider uppercase mb-3">
              WHAT YOU’LL DO
            </h4>
            <ul className="space-y-2.5 text-[#BDBDBD] text-[14px] sm:text-[15px] p-0 m-0 list-none">
              {role.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#12F095]/15 text-[#12F095] flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="font-mono text-[11px] font-bold text-[#12F095] tracking-wider uppercase mb-3">
              WHAT WE LOOK FOR
            </h4>
            <ul className="space-y-2.5 text-[#BDBDBD] text-[14px] sm:text-[15px] p-0 m-0 list-none">
              {role.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#12F095]/15 text-[#12F095] flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Application Form / State */}
          <div className="pt-4 border-t border-[#222222]">
            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#141414] border border-[#12F095]/30 text-center animate-fade-in">
                <span className="w-12 h-12 rounded-full bg-[#12F095]/20 text-[#12F095] flex items-center justify-center text-[20px] font-bold mx-auto mb-3">
                  ✓
                </span>
                <b className="text-[18px] text-white block mb-1">Application Received</b>
                <p className="text-[14px] text-[#A3A3A3] max-w-[440px] mx-auto m-0">
                  Thanks for applying to DentalPulse, {applicantName || 'there'}! Our hiring team will review your background and respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-[11px] font-bold text-[#12F095] tracking-wider uppercase m-0">
                    EXPRESS APPLICATION
                  </h4>
                  <a
                    href={`mailto:careers@dentalpulseai.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                    className="text-[12px] text-[#A3A3A3] hover:text-[#12F095] transition-colors underline"
                  >
                    Or apply via email directly →
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Full name *"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full bg-[#171717] border border-[#2E2E2E] focus:border-[#12F095] rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#737373] focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email address *"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full bg-[#171717] border border-[#2E2E2E] focus:border-[#12F095] rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#737373] focus:outline-none transition-colors"
                  />
                </div>

                <input
                  type="url"
                  placeholder="LinkedIn or portfolio URL"
                  value={applicantPortfolio}
                  onChange={(e) => setApplicantPortfolio(e.target.value)}
                  className="w-full bg-[#171717] border border-[#2E2E2E] focus:border-[#12F095] rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#737373] focus:outline-none transition-colors"
                />

                <textarea
                  rows={3}
                  placeholder="Short note or why you’re interested in DentalPulse..."
                  value={applicantNote}
                  onChange={(e) => setApplicantNote(e.target.value)}
                  className="w-full bg-[#171717] border border-[#2E2E2E] focus:border-[#12F095] rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#737373] focus:outline-none transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#12F095] hover:bg-[#0fd683] text-[#0A0A0A] font-extrabold text-[15px] transition-all shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#222222] bg-[#111111] flex items-center justify-between text-[13px] text-[#737373]">
          <span>DentalPulse is an equal opportunity remote employer.</span>
          <button
            type="button"
            onClick={onClose}
            className="text-[13px] font-semibold text-[#A3A3A3] hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
