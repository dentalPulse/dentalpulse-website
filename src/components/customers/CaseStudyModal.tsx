"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export interface CaseStudyDetail {
  id: string;
  tag: string;
  labName: string;
  location: string;
  techs: string;
  systems: string;
  headline: string;
  challenge: string;
  playbook: string[];
  metrics: { value: string; label: string }[];
  quote: { text: string; author: string; role: string };
}

const CASE_STUDY_DATA: Record<string, CaseStudyDetail> = {
  'apex-dental-ceramics': {
    id: 'apex-dental-ceramics',
    tag: 'FEATURED STORY • RETENTION',
    labName: 'Apex Dental Ceramics',
    location: 'Charlotte, NC',
    techs: '42 Technicians',
    systems: 'Magic Touch & 3Shape Dental System',
    headline: 'How Apex Dental Ceramics recovered 14 at-risk accounts in their first 90 days.',
    challenge:
      'Apex had several long-standing group dental practices whose monthly case volume quietly dipped by 25% to 40%. Because billing was tallied at month-end, the sales team only noticed after doctors had already started trialing competitor milling centers.',
    playbook: [
      'Activated automated 14-day case volume fluctuation alerts linked to their lab management database.',
      'Created a weekly "At-Risk Account Review" with reps receiving automated field talking points.',
      'Dispatched targeted clinical satisfaction surveys whenever a doctor’s crown orders showed unexpected turnaround delays.',
    ],
    metrics: [
      { value: '94%', label: 'Customer Retention Rate' },
      { value: '$180K', label: 'Revenue Recovered' },
      { value: '12 hrs', label: 'Weekly Reporting Saved' },
    ],
    quote: {
      text: 'Early risk alerts saved our largest implant account. We had two weeks to step in before the dentist moved their volume elsewhere.',
      author: 'Michael S.',
      role: 'Managing Director, Apex Dental Ceramics',
    },
  },
  'midwest-retention': {
    id: 'midwest-retention',
    tag: 'CHURN PREVENTION',
    labName: 'Midwest Dental Studio',
    location: 'Chicago, IL',
    techs: '18 Technicians',
    systems: 'LabTrac & exocad',
    headline: 'How Midwest Dental Studio caught silent doctor attrition 45 days before dentists stopped sending cases.',
    challenge:
      'Midwest experienced sudden cancellations from accounts that seemed satisfied on paper. Doctors were frustrated with minor remakes but never called the lab directly—they simply stopped sending high-value crown and bridge cases.',
    playbook: [
      'Deployed DentalPulse Predictive Churn Scoring to flag subtle shifts in doctor order velocity.',
      'Automated proactive check-in triggers for the customer service team after two consecutive remakes.',
      'Established executive VIP touchpoints for top 20% revenue-generating clinics.',
    ],
    metrics: [
      { value: '+$126K', label: 'Preserved Annual Revenue' },
      { value: '45 Days', label: 'Early Warning Head Start' },
      { value: '88%', label: 'At-Risk Accounts Saved' },
    ],
    quote: {
      text: 'DentalPulse gives us visibility before the relationship frays. We now know when a doctor is unhappy long before they stop sending cases.',
      author: 'Sarah T.',
      role: 'Operations Director, Midwest Dental Studio',
    },
  },
  'summit-cross-sell': {
    id: 'summit-cross-sell',
    tag: 'ACCOUNT EXPANSION',
    labName: 'Summit Milling Center',
    location: 'Denver, CO',
    techs: '26 Technicians',
    systems: 'Evident LMS & HyperDent',
    headline: 'Scaling high-margin premium zirconia restorations across 60 existing general dentist accounts.',
    challenge:
      'Summit had 110 general dentists sending standard PFM and diagnostic wax-ups, but only a fraction were ordering Summit’s multi-layered aesthetic zirconia and custom titanium implant abutments.',
    playbook: [
      'Used DentalPulse product matrix segments to identify practices with high implant potential that only ordered traditional crowns.',
      'Launched educational multi-channel marketing campaigns (email & sample box drops) targeted directly at relevant clinicians.',
      'Equipped territory reps with practice-specific case history and customized margin comparisons.',
    ],
    metrics: [
      { value: '+34%', label: 'Average Case Value Increase' },
      { value: '60', label: 'Accounts Expanded' },
      { value: '$92K', label: 'Net-New Quarterly Volume' },
    ],
    quote: {
      text: 'Instead of cold calling dentists, our sales reps walk into existing accounts with exact data on what other restorations that doctor should be trusting us with.',
      author: 'David R.',
      role: 'VP Operations, Summit Milling Center',
    },
  },
  'vanguard-sales-team': {
    id: 'vanguard-sales-team',
    tag: 'SALES PRODUCTIVITY',
    labName: 'Vanguard Dental Arts',
    location: 'Dallas, TX',
    techs: '35 Technicians',
    systems: 'Magic Touch & Dentronix',
    headline: 'How a 4-person sales team eliminated manual spreadsheets and closed 28 new accounts in 6 months.',
    challenge:
      'Vanguard’s four field reps spent hours every Monday cross-referencing invoice reports and messy spreadsheets just to figure out which dental offices to visit that week.',
    playbook: [
      'Introduced DentalPulse Daily Field Route Playbooks with priority-ranked practice lists.',
      'Automated clinical conversation briefs summarizing each doctor’s preferred materials, recent turnaround times, and outstanding estimates.',
      'Eliminated manual weekly reporting meetings in favor of real-time pipeline dashboards.',
    ],
    metrics: [
      { value: '28', label: 'New Clinic Accounts Won' },
      { value: '8 hrs', label: 'Saved per Rep per Week' },
      { value: '3.2x', label: 'More Clinic Visits Logged' },
    ],
    quote: {
      text: 'Our reps went from spreadsheet administrators to true dental consult partners. The daily game plans give them total focus from 8 AM every day.',
      author: 'Elena F.',
      role: 'General Manager, Vanguard Dental Studio',
    },
  },
};

interface CaseStudyModalProps {
  storyId: string | null;
  onClose: () => void;
}

export function CaseStudyModal({ storyId, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (storyId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [storyId, onClose]);

  if (!storyId) return null;

  const story = CASE_STUDY_DATA[storyId] || CASE_STUDY_DATA['apex-dental-ceramics'];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[90vh] bg-[#0A0A0A] border border-[#2A2A2A] rounded-[28px] overflow-hidden text-white flex flex-col shadow-2xl relative animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#222222] flex items-start justify-between gap-4 bg-[#121212]">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[12px] font-bold text-[#12F095] tracking-wider uppercase">
              {story.tag}
            </span>
            <h3 className="text-[22px] sm:text-[28px] font-extrabold text-white leading-tight">
              {story.labName}
            </h3>
            <span className="text-[13px] text-[#9A9A9A]">
              {story.location} • {story.techs} • {story.systems}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study details"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-[#BDBDBD] hover:text-white flex items-center justify-center shrink-0 transition-colors focus:outline-none"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-[15px] sm:text-[16px]">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#161616] border border-[#222222]">
            {story.metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left p-2">
                <div className="text-[28px] sm:text-[32px] font-extrabold text-[#12F095] leading-none">
                  {m.value}
                </div>
                <div className="text-[13px] text-[#BDBDBD] font-medium mt-1.5 leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h4 className="text-[20px] sm:text-[24px] font-bold text-white leading-snug">
            {story.headline}
          </h4>

          {/* The Challenge */}
          <div>
            <h5 className="font-mono text-[13px] font-bold text-[#12F095] tracking-wider uppercase mb-2">
              THE CHALLENGE
            </h5>
            <p className="text-[#BDBDBD] leading-relaxed">
              {story.challenge}
            </p>
          </div>

          {/* The DentalPulse Playbook */}
          <div>
            <h5 className="font-mono text-[13px] font-bold text-[#12F095] tracking-wider uppercase mb-3">
              THE DENTALPULSE PLAYBOOK
            </h5>
            <ul className="space-y-2.5 text-[#BDBDBD]">
              {story.playbook.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#12F095]/15 text-[#12F095] flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial Quote Callout */}
          <div className="p-5 rounded-2xl bg-[#141414] border-l-4 border-[#12F095]">
            <p className="text-[16px] sm:text-[17px] italic text-[#E6E6E6] leading-relaxed m-0">
              “{story.quote.text}”
            </p>
            <div className="mt-3 text-[14px]">
              <b className="text-white block">{story.quote.author}</b>
              <span className="text-[#9A9A9A]">{story.quote.role}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer / CTA */}
        <div className="p-6 border-t border-[#222222] bg-[#121212] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[14px] text-[#8A8A8A] text-center sm:text-left">
            Ready to achieve similar retention and growth in your lab?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-[14px] font-semibold text-[#BDBDBD] hover:text-white transition-colors"
            >
              Close
            </button>
            <Link
              href="/#book-demo"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#12F095] hover:bg-[#00df83] text-[#0A0A0A] font-bold text-[14px] rounded-full transition-all text-center shadow-md"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
