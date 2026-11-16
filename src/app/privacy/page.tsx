import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_CONTACT } from '@/data/navigationData';

export const metadata: Metadata = {
  title: 'Privacy Policy | DentalPulse',
  description:
    'Learn how DentalPulse collects, protects, and uses information across our AI-powered customer intelligence platform for dental laboratories.',
  alternates: {
    canonical: 'https://dentalpulse.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | DentalPulse',
    description:
      'Learn how DentalPulse collects, protects, and uses information across our AI-powered customer intelligence platform for dental laboratories.',
    url: 'https://dentalpulse.com/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 w-full bg-white text-[#0A0A0A]">
      {/* Dark Hero Header */}
      <section className="w-full bg-[#0A0A0A] text-white py-16 sm:py-20 px-4 sm:px-6 border-b border-[#222222]">
        <div className="max-w-[900px] mx-auto">
          <span className="inline-block font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-[#12F095] mb-3">
            LEGAL &amp; PRIVACY
          </span>
          <h1 className="text-[36px] sm:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.1] text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3]">
            Last updated: October 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto space-y-10 text-[15px] sm:text-[16px] leading-[1.75] text-[#374151]">
          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              1. Overview
            </h2>
            <p>
              DentalPulse (&ldquo;DentalPulse,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides an AI-powered customer intelligence, CRM, and automated marketing platform designed specifically for dental laboratories. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, request a demo, or use our software-as-a-service platform.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              2. Information We Collect
            </h2>
            <p>We collect information in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-[#0A0A0A]">Account &amp; Contact Information:</strong> When you book a demo, subscribe to a plan, or contact us, we collect your name, work email address, phone number, dental laboratory name, role, and billing details.
              </li>
              <li>
                <strong className="text-[#0A0A0A]">Laboratory &amp; Integration Data:</strong> When you connect your lab management software (e.g., Magic Touch, Atlanta Based Systems), accounting software (e.g., QuickBooks Online), or CRM via our Open API, we process account metadata, invoice totals, case volume trends, and communication logs on your behalf as a data processor.
              </li>
              <li>
                <strong className="text-[#0A0A0A]">Usage &amp; Device Data:</strong> We automatically collect standard technical information such as browser type, IP address, pages visited, and interaction timestamps to improve platform performance and security.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              3. How We Use Your Information
            </h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain the DentalPulse platform and customer dashboards.</li>
              <li>Schedule and conduct personalized product walkthroughs and onboarding sessions.</li>
              <li>Generate predictive analytics, churn risk signals, and growth recommendations for your laboratory.</li>
              <li>Process subscription payments and send billing notifications via our payment processor (Stripe).</li>
              <li>Send service updates, security alerts, and support communications.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              4. Data Ownership &amp; Confidentiality
            </h2>
            <p>
              Your laboratory retains full ownership of all customer records, dentist account lists, and lab production data synced into DentalPulse. We never sell, rent, or share your laboratory data or dentist customer lists with third parties or competing laboratories.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              5. Data Security &amp; Retention
            </h2>
            <p>
              We implement industry-standard technical and organizational safeguards, including TLS encryption in transit, encryption at rest, role-based access controls, and isolated tenant data environments. We retain your data only for as long as necessary to provide our services or comply with legal obligations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              6. Third-Party Subprocessors
            </h2>
            <p>
              We partner with trusted infrastructure and service providers (such as cloud hosting providers, Stripe for billing, and email/SMS delivery gateways) strictly to deliver the DentalPulse service. All subprocessors are bound by strict confidentiality and data protection agreements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              7. Your Privacy Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, export, or request deletion of your personal information. You can exercise these rights at any time by contacting our privacy team.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-[20px] bg-[#F9FAFB] border border-[#E5E7EB] space-y-3">
            <h2 className="text-[20px] font-extrabold text-[#0A0A0A]">
              8. Contact Us
            </h2>
            <p className="m-0">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="text-[14px] sm:text-[15px] text-[#0A0A0A] font-medium space-y-1">
              <div>DentalPulse</div>
              <div>{COMPANY_CONTACT.addressLine1}, {COMPANY_CONTACT.addressLine2}</div>
              <div>
                Email:{' '}
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="text-[#067A47] font-bold hover:underline"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/terms"
                className="text-[14px] font-bold text-[#067A47] hover:underline"
              >
                View Terms of Use &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
