"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export interface ArticleContent {
  id: string;
  category: string;
  readTime: string;
  title: string;
  overview: string;
  keyTakeaways: string[];
  playbookTactic: string;
}

const ARTICLES_DATABASE: Record<string, ArticleContent> = {
  'early-warning-playbook': {
    id: 'early-warning-playbook',
    category: 'Featured Guide • Retention',
    readTime: '9 min read',
    title: 'The early-warning playbook: 7 signals a dentist is about to leave your lab',
    overview:
      'Dentists rarely announce when they are switching labs. The transition usually happens quietly over 3 to 6 weeks. Recognizing early micro-shifts in ordering volume and material selection gives lab owners a 30-day window to step in and save the account.',
    keyTakeaways: [
      'Gaps extending beyond 12 days for accounts that usually ship weekly cases.',
      'Sudden drop in high-margin aesthetic restorations while low-cost diagnostic wax-ups continue.',
      'Increase in shade adjustment or turnaround questions forwarded from dental assistants.',
      'Unanswered case estimates or digital intraoral scans routed without lab prescriptions.',
    ],
    playbookTactic:
      'Set an automated volume velocity trigger in DentalPulse: flag any tier-1 clinic whose 30-day case submission drops by more than 20% compared to their rolling 90-day average.',
  },
  'spot-at-risk-account': {
    id: 'spot-at-risk-account',
    category: 'Retention',
    readTime: '6 min read',
    title: 'How to spot an at-risk dental account before it churns',
    overview:
      'Tracking monthly invoice totals is too late—by month-end, the dentist has already trialed another milling center. Learn how leading labs monitor real-time weekly case velocity to protect their core accounts.',
    keyTakeaways: [
      'Monitor weekly case arrivals instead of waiting for monthly billing exports.',
      'Track changes in doctor turnaround sensitivity and delivery requests.',
      'Pair at-risk alerts with immediate field visits from assigned sales reps.',
    ],
    playbookTactic:
      'DentalPulse automatically syncs with Magic Touch, LabTrac, or Evident every night to highlight quiet churn patterns before revenue disappears.',
  },
  'share-of-wallet-expansion': {
    id: 'share-of-wallet-expansion',
    category: 'Growth',
    readTime: '8 min read',
    title: 'Share of wallet: finding the categories your dentists send elsewhere',
    overview:
      'Most dental practices divide their restorative work across 2 to 4 labs: sending crowns to one, implants to another, and clear aligners to a third. Uncover hidden margin by cross-selling into categories they already prescribe.',
    keyTakeaways: [
      'Audit single-product accounts: general dentists ordering only single-unit zirconia crowns.',
      'Identify doctors placing implants who are not ordering custom titanium abutments from your lab.',
      'Introduce targeted clinical samples and shade kits tailored to their exact chairside preferences.',
    ],
    playbookTactic:
      'Filter your customer database in DentalPulse for "High Crown Volume + Zero Implant Orders" to generate an immediate outbound target list.',
  },
  'sales-rep-weekly-routine': {
    id: 'sales-rep-weekly-routine',
    category: 'Sales',
    readTime: '5 min read',
    title: 'A weekly routine for lab sales reps that actually sticks',
    overview:
      'Lab reps often spend 60% of their work week digging through paper delivery slips and guessing which clinics to visit. Discover the structured 5-day cadence used by top-performing dental sales teams.',
    keyTakeaways: [
      'Monday 8 AM: Review prioritized at-risk alerts and weekly volume goals.',
      'Tuesday–Thursday: Conduct 6 to 8 targeted doctor and office manager visits per day.',
      'Friday Afternoon: Log doctor notes, follow-up promises, and review next week’s target map.',
    ],
    playbookTactic:
      'DentalPulse Daily Game Plans deliver mobile talking points directly to each rep’s phone every morning with practice details and recent case histories.',
  },
  'whatsapp-sms-email-communication': {
    id: 'whatsapp-sms-email-communication',
    category: 'Marketing',
    readTime: '7 min read',
    title: 'WhatsApp, SMS or email? Reaching dentists where they read',
    overview:
      'Dentists spend their days gloved up chairside and ignore traditional lab promotional emails. Here is how modern dental labs achieve 68%+ response rates using multi-channel engagement.',
    keyTakeaways: [
      'Use SMS for time-sensitive case holds, margin queries, and delivery updates.',
      'Use WhatsApp for clinical shade photos, case staging, and instant doctor approvals.',
      'Reserve Email for monthly educational newsletters, billing statements, and new material announcements.',
    ],
    playbookTactic:
      'DentalPulse lets labs schedule automated multi-channel messaging directly from customer segments without switching communication apps.',
  },
  'real-cost-of-losing-dentist': {
    id: 'real-cost-of-losing-dentist',
    category: 'Retention',
    readTime: '6 min read',
    title: 'The real cost of losing a dentist — and how to calculate it',
    overview:
      'When a $3,500/month dental account leaves, the lab does not just lose $42,000 this year—they lose $210,000+ in 5-year customer lifetime value (LTV). Calculate your lab’s true retention ROI.',
    keyTakeaways: [
      'Factor in replacement customer acquisition cost (CAC): marketing spend, sales commissions, and free trial crowns.',
      'Calculate compounding technician downtime and unrecovered fixed facility overhead.',
      'Protecting 2 accounts per quarter generates more bottom-line profit than signing 5 new discount clinics.',
    ],
    playbookTactic:
      'Use the DentalPulse ROI calculator to benchmark your lab’s customer retention rate against industry standards.',
  },
  'dental-lab-kpi-cheat-sheet': {
    id: 'dental-lab-kpi-cheat-sheet',
    category: 'Guides',
    readTime: 'Guide • 12 min',
    title: 'The dental lab KPI cheat sheet: numbers every owner should track',
    overview:
      'A comprehensive guide to the 6 core financial, operational, and commercial metrics that dictate laboratory profitability, valuation, and resilience.',
    keyTakeaways: [
      'Remake Rate: Target < 2.5% for general crown & bridge; track clinician error vs lab error.',
      'Customer Retention Rate: Target > 92% annual revenue retention.',
      'Average Revenue Per Account (ARPA): Measure category expansion quarter-over-quarter.',
      'Labor Efficiency Ratio: Technical labor cost as a percentage of total billable revenue.',
    ],
    playbookTactic:
      'DentalPulse aggregates these metrics into an executive dashboard updated every night without spreadsheet exports.',
  },
  'remake-data-retention-signal': {
    id: 'remake-data-retention-signal',
    category: 'Growth',
    readTime: '5 min read',
    title: 'Turning remake data into a retention signal',
    overview:
      'Remakes are not just an internal lab cost—they are the #1 catalyst that drives doctors into competitor arms. Learn how to transform remake logs into proactive relationship builders.',
    keyTakeaways: [
      'Two consecutive remakes for the same dentist increases 60-day churn risk by 4x.',
      'Tag remakes by root cause: prep clearance, impression distortion, or lab finishing.',
      'Trigger an immediate consultation call from your master technician before sending the third unit.',
    ],
    playbookTactic:
      'Set DentalPulse to auto-notify the customer service manager whenever a top-tier account registers 2 remakes in 30 days.',
  },
  'onboarding-new-dentists-first-90-days': {
    id: 'onboarding-new-dentists-first-90-days',
    category: 'Sales',
    readTime: '6 min read',
    title: 'Onboarding new dentists: the first 90 days',
    overview:
      '65% of accounts that churn leave within their first 90 days due to mismatched shade expectations or billing friction. Here is the proven 3-phase clinical onboarding framework.',
    keyTakeaways: [
      'Cases 1–3: Dedicated technician review, direct prep feedback, and fast-track shipping.',
      'Day 30: Personal call from the lab owner to calibrate contact tightness and occlusal preferences.',
      'Day 60: Introduce cross-sell capabilities once the core restorative foundation is solidified.',
    ],
    playbookTactic:
      'Automate your 90-day onboarding sequence in DentalPulse so no new doctor slips through the cracks.',
  },
  'building-segments-buying-behavior': {
    id: 'building-segments-buying-behavior',
    category: 'Marketing',
    readTime: '7 min read',
    title: 'Building segments from real buying behaviour',
    overview:
      'Stop sending blast emails to all doctors on your list. Segmenting by ordering frequency, material affinity, and technology adoption triples engagement rates.',
    keyTakeaways: [
      'Segment: Digital Intraoral Scanner users vs traditional PVS impression clinics.',
      'Segment: High-volume zirconia practices with potential for clear aligner expansion.',
      'Segment: At-risk clinics requiring concierge support and technical visits.',
    ],
    playbookTactic:
      'Build dynamic boolean segments in DentalPulse (e.g. "Monthly Revenue > $2K AND Implant Units = 0") that update automatically each day.',
  },
};

interface ArticleReaderModalProps {
  articleId: string | null;
  onClose: () => void;
}

import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

export function ArticleReaderModal({ articleId, onClose }: ArticleReaderModalProps) {
  useLockBodyScroll(!!articleId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (articleId) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [articleId, onClose]);

  if (!articleId) return null;

  const article =
    ARTICLES_DATABASE[articleId] || ARTICLES_DATABASE['early-warning-playbook'];

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
            <div className="flex items-center gap-3">
              <span className="font-mono text-[12px] font-bold text-[#12F095] tracking-wider uppercase">
                {article.category}
              </span>
              <span className="text-[12px] text-[#7A7A7A]">•</span>
              <span className="text-[12px] font-mono text-[#9A9A9A] uppercase">
                {article.readTime}
              </span>
            </div>
            <h3 className="text-[20px] sm:text-[26px] font-extrabold text-white leading-tight m-0">
              {article.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close article reader"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-[#BDBDBD] hover:text-white flex items-center justify-center shrink-0 transition-colors focus:outline-none"
          >
            <svg
              width="20"
              height="20"
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
            <h4 className="font-mono text-[12px] font-bold text-[#12F095] tracking-wider uppercase mb-2">
              CLINICAL &amp; BUSINESS OVERVIEW
            </h4>
            <p className="text-[#BDBDBD] leading-relaxed m-0">
              {article.overview}
            </p>
          </div>

          {/* Key Takeaways */}
          <div>
            <h4 className="font-mono text-[12px] font-bold text-[#12F095] tracking-wider uppercase mb-3">
              ACTIONABLE LAB TAKEAWAYS
            </h4>
            <ul className="space-y-2.5 text-[#BDBDBD] p-0 m-0 list-none">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#12F095]/15 text-[#12F095] flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DentalPulse Automated Playbook Callout */}
          <div className="p-5 rounded-2xl bg-[#141414] border-l-4 border-[#12F095]">
            <h5 className="font-mono text-[12px] font-bold text-white tracking-wider uppercase m-0 mb-1.5">
              AUTOMATE THIS IN DENTALPULSE
            </h5>
            <p className="text-[14px] text-[#BDBDBD] leading-relaxed m-0">
              {article.playbookTactic}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#222222] bg-[#121212] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[14px] text-[#8A8A8A] text-center sm:text-left">
            Want to see how this playbook operates on your lab data?
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
              href="/book-demo"
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
