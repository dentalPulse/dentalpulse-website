"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Prompt {
  label: string;
  answer: string;
}

const SAMPLE_PROMPTS: Prompt[] = [
  {
    label: 'Which dentists are at risk this month?',
    answer:
      'Three accounts need attention: Lakeside Family Dentistry (no cases in 23 days), Bright Smile Dental (volume down 41%) and Park Ave Orthodontics (remakes up 3×). Want a win-back game plan for each?',
  },
  {
    label: 'Where can I cross-sell?',
    answer:
      '42 practices send you crowns but no implants. Riverbend Dental alone could add about $18K a year — I can build a campaign for the whole segment.',
  },
  {
    label: 'How is my retention trending?',
    answer:
      'Retention is 91.4% year to date, up 2.1 points. Most of the gain came from the North territory, where reps acted on 90% of risk alerts.',
  },
];

export function Hero() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [hasAnswer, setHasAnswer] = useState(false);

  const handleAsk = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      // Check if matches known prompt
      const matched = SAMPLE_PROMPTS.find(
        (p) => p.label.toLowerCase() === query.trim().toLowerCase()
      );
      if (matched) {
        setAnswer(matched.answer);
      } else {
        setAnswer(
          'Connect your lab’s data and I’ll answer that with your real numbers. Book a demo to see Pulse AI working on your own customers.'
        );
      }
      setHasAnswer(true);
    } else {
      setAnswer('Try asking about at-risk dentists, cross-sell opportunities or retention trends.');
      setHasAnswer(true);
    }
  };

  const handleSelectPrompt = (prompt: Prompt) => {
    setQuery(prompt.label);
    setAnswer(prompt.answer);
    setHasAnswer(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white pt-16 sm:pt-20 md:pt-28 pb-40 sm:pb-48 md:pb-60 px-4 sm:px-6 text-center [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:28px_28px]">
      {/* Background Pulse Trace Animation */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="absolute left-0 top-16 md:top-24 w-full h-[400px] pointer-events-none"
      >
        <path
          d="M0 230 H400 L440 230 L470 110 L515 350 L550 160 L580 230 H860 L890 230 L915 150 L945 300 L970 230 H1440"
          fill="none"
          stroke="#12F095"
          strokeOpacity="0.16"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="dp-trace"
          d="M0 230 H400 L440 230 L470 110 L515 350 L550 160 L580 230 H860 L890 230 L915 150 L945 300 L970 230 H1440"
          fill="none"
          stroke="#12F095"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{ filter: 'drop-shadow(0 0 8px rgba(18,240,149,0.9))' }}
        />
      </svg>

      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Main Headline */}
        <h1 className="relative mx-auto max-w-[860px] text-[34px] xs:text-[40px] sm:text-[56px] md:text-[76px] lg:text-[88px] font-extrabold leading-[1.04] tracking-[-0.045em] text-white">
          <span>The AI growth platform built for</span>{' '}
          <span className="relative inline-block text-[#12F095]">
            <span>dental labs.</span>
            {/* Hand-drawn Underline SVG */}
            <svg
              aria-hidden="true"
              viewBox="0 0 300 20"
              preserveAspectRatio="none"
              className="absolute left-0 -bottom-2.5 sm:-bottom-4 w-full h-3.5 sm:h-5 pointer-events-none"
            >
              <path
                d="M4 14 C60 4 120 4 170 10 S260 16 296 6"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Pulse AI Search & Prompt Card */}
        <div className="relative max-w-[760px] mx-auto mt-10 sm:mt-16 md:mt-18">
          {/* Live Indicator Tag */}
          <div className="inline-flex items-center gap-2 mb-3.5 font-mono text-[13px] font-semibold tracking-[0.08em] text-[#12F095]">
            <span className="dp-live w-2 h-2 rounded-full bg-[#12F095] shadow-[0_0_10px_#12F095]" />
            PULSE AI
          </div>

          {/* Interactive Card */}
          <div className="bg-white text-[#0A0A0A] rounded-[22px] sm:rounded-[24px] p-2 sm:p-2.5 text-left shadow-[0_0_0_1px_rgba(18,240,149,0.55),0_0_0_8px_rgba(18,240,149,0.10),0_40px_90px_-20px_rgba(18,240,149,0.45)]">
            <form onSubmit={handleAsk} className="flex items-center gap-2 sm:gap-3 p-1 sm:pl-2">
              {/* EKG Icon Box */}
              <span
                aria-hidden="true"
                className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-[12px] sm:rounded-[14px] bg-[#0A0A0A] flex items-center justify-center p-2 sm:p-2.5 overflow-hidden"
              >
                <Image
                  src="/logo_mark_white.png"
                  alt="Pulse AI"
                  width={30}
                  height={20}
                  className="w-auto h-[16px] sm:h-[20px] object-contain"
                />
              </span>

              {/* Text Input */}
              <label htmlFor="pulse-q" className="sr-only">
                Ask Pulse AI
              </label>
              <input
                id="pulse-q"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask me anything about your lab’s growth…"
                className="flex-1 min-w-0 min-h-[46px] sm:min-h-[56px] border-none outline-none bg-transparent font-sans text-[14px] sm:text-[18px] text-[#0A0A0A] placeholder-[#6E6E6E]"
              />

              {/* Ask Button */}
              <button
                type="submit"
                className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 min-h-[44px] sm:min-h-[52px] px-3.5 sm:px-6 rounded-[14px] sm:rounded-[16px] bg-[#0A0A0A] text-white font-sans text-[14px] sm:text-[16px] font-bold hover:bg-[#1a1a1a] transition-colors cursor-pointer"
              >
                <span>Ask</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="hidden xs:inline-block sm:inline-block"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>

            {/* Answer Display Area */}
            {hasAnswer && (
              <div
                role="status"
                className="mt-2.5 mx-1 mb-1 p-3.5 sm:p-4 rounded-[16px] bg-[#F2F2F2] flex flex-col gap-1.5 animate-in fade-in duration-200"
              >
                <div className="flex items-center gap-2 text-[12px] font-extrabold text-[#06663C]">
                  <span>PULSE AI</span>
                  <span className="font-semibold text-[#5C5C5C] bg-white border border-[#E6E6E6] px-2 py-0.5 rounded-full text-[11px]">
                    Sample answer
                  </span>
                </div>
                <div className="text-[14px] sm:text-[15px] text-[#0A0A0A] leading-relaxed">
                  {answer}
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompt Chips */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-4.5">
            {SAMPLE_PROMPTS.map((prompt) => (
              <button
                key={prompt.label}
                type="button"
                onClick={() => handleSelectPrompt(prompt)}
                className="min-h-[38px] sm:min-h-[42px] px-3 sm:px-4 py-1.5 rounded-full border border-[#333333] bg-white/[0.06] text-[#E6E6E6] hover:text-white hover:bg-white/[0.12] hover:border-[#12F095] font-sans text-[12px] sm:text-[14px] font-semibold transition-all cursor-pointer text-left"
              >
                {prompt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
