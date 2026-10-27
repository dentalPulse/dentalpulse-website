import React from 'react';
import Link from 'next/link';

export function AboutContactCTA() {
  return (
    <section className="w-full pb-28 px-6">
      <div className="max-w-[1240px] mx-auto bg-[#0A0A0A] text-white rounded-[32px] p-8 sm:p-14 lg:p-20 flex flex-col lg:flex-row justify-between gap-12 border border-[#222222] shadow-2xl relative overflow-hidden">
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#12F095]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Left Column: Heading, Subtitle & Primary CTA */}
        <div className="flex-1 max-w-[560px] relative z-10">
          <h2 className="text-[30px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.06] tracking-[-0.035em] text-white m-0">
            Let’s talk about your lab.
          </h2>
          <p className="mt-4 mb-8 text-[17px] sm:text-[18px] text-[#BDBDBD] leading-[1.6]">
            Whether you’re curious, comparing options or ready to start, our team is happy to help.
          </p>
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center bg-[#12F095] hover:bg-[#0fd683] text-[#0A0A0A] font-extrabold text-[16px] px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a demo
          </Link>
        </div>

        {/* Right Column: Address, Email & Social Channels */}
        <div className="flex-1 lg:max-w-[340px] flex flex-col gap-7 text-[16px] relative z-10 lg:border-l lg:border-[#222222] lg:pl-12">
          {/* Address */}
          <div>
            <div className="font-mono text-[12px] font-bold text-[#12F095] mb-2 tracking-wider uppercase">
              ADDRESS
            </div>
            <span className="text-[#BDBDBD] leading-[1.6] block">
              8 The Green, Suite A<br />
              Dover, DE 19901, USA
            </span>
          </div>

          {/* Email */}
          <div>
            <div className="font-mono text-[12px] font-bold text-[#12F095] mb-2 tracking-wider uppercase">
              EMAIL
            </div>
            <a
              href="mailto:info@dentalpulseai.com"
              className="text-white hover:text-[#12F095] transition-colors font-medium inline-block"
            >
              info@dentalpulseai.com
            </a>
          </div>

          {/* Follow */}
          <div>
            <div className="font-mono text-[12px] font-bold text-[#12F095] mb-2 tracking-wider uppercase">
              FOLLOW
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/company/dentalpulseai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#12F095] transition-colors font-medium text-[15px]"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/dentalpulseai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#12F095] transition-colors font-medium text-[15px]"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/people/Dental-Pulse/61594145142887/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#12F095] transition-colors font-medium text-[15px]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
