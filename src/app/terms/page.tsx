import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_CONTACT } from '@/data/navigationData';

export const metadata: Metadata = {
  title: 'Terms of Use | DentalPulse',
  description:
    'Read the Terms of Use governing access to and use of the DentalPulse customer intelligence platform and website.',
  alternates: {
    canonical: 'https://dentalpulse.com/terms',
  },
  openGraph: {
    title: 'Terms of Use | DentalPulse',
    description:
      'Read the Terms of Use governing access to and use of the DentalPulse customer intelligence platform and website.',
    url: 'https://dentalpulse.com/terms',
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="flex-1 w-full bg-white text-[#0A0A0A]">
      {/* Dark Hero Header */}
      <section className="w-full bg-[#0A0A0A] text-white py-16 sm:py-20 px-4 sm:px-6 border-b border-[#222222]">
        <div className="max-w-[900px] mx-auto">
          <span className="inline-block font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-[#12F095] mb-3">
            LEGAL AGREEMENT
          </span>
          <h1 className="text-[36px] sm:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.1] text-white">
            Terms of Use
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the DentalPulse website and software-as-a-service platform (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Use (&ldquo;Terms&rdquo;). If you are entering into these Terms on behalf of a dental laboratory or other legal entity, you represent that you have the authority to bind such entity to these Terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              2. Description of Service
            </h2>
            <p>
              DentalPulse provides cloud-based CRM, analytics, dashboard reporting, and marketing automation tools for dental laboratories. We grant you a limited, non-exclusive, non-transferable right to access and use the Service during your active subscription term in accordance with your selected plan.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              3. Account Registration &amp; Security
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete registration information when creating your account.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your user accounts.</li>
              <li>You agree to notify DentalPulse immediately of any unauthorized use of your account.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              4. Subscriptions, Billing &amp; Cancellation
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-[#0A0A0A]">Subscription Plans:</strong> Services are billed in advance on a monthly or annual basis according to the plan and user seat count selected at checkout.
              </li>
              <li>
                <strong className="text-[#0A0A0A]">Extra Users &amp; Setup Services:</strong> Additional user seats and optional onboarding setup services are billed at the rates disclosed at checkout.
              </li>
              <li>
                <strong className="text-[#0A0A0A]">Renewals:</strong> Subscriptions automatically renew at the end of each billing cycle unless cancelled prior to the renewal date.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              5. Customer Data &amp; Acceptable Use
            </h2>
            <p>
              You retain all ownership rights to the data you upload or sync to DentalPulse. You grant DentalPulse a limited license to host, process, and display your data solely as needed to provide the Service. You agree not to use the Service to send unlawful spam communications, violate applicable telemarketing or privacy laws, or attempt to reverse-engineer the platform.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              6. Intellectual Property
            </h2>
            <p>
              The DentalPulse platform, including its software, algorithms, visual interfaces, trademarks, and documentation, is owned by DentalPulse and protected by copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A] tracking-[-0.02em]">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, DentalPulse shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of the Service. Our total cumulative liability shall not exceed the fees paid by you to DentalPulse in the twelve (12) months preceding the claim.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-[20px] bg-[#F9FAFB] border border-[#E5E7EB] space-y-3">
            <h2 className="text-[20px] font-extrabold text-[#0A0A0A]">
              8. Contact Information
            </h2>
            <p className="m-0">
              Questions regarding these Terms of Use can be directed to our team at:
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
                href="/privacy"
                className="text-[14px] font-bold text-[#067A47] hover:underline"
              >
                View Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
