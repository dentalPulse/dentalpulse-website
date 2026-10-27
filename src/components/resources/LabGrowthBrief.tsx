"use client";

import React, { useState } from 'react';

export function LabGrowthBrief() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    setStatus('submitting');
    // Simulate brief network delay for polish
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setErrorMessage('');
    }, 600);
  };

  return (
    <section className="w-full pb-24 px-6">
      <div className="max-w-[1240px] mx-auto bg-[#EEFDF5] border border-[#BDF5DA] rounded-[28px] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-sm">
        {/* Left Column: Headline + Value Prop */}
        <div className="max-w-[560px]">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-[1.1] m-0">
            The Lab Growth Brief
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#333333] leading-[1.6] mt-3 m-0">
            One practical idea for retaining and growing dental accounts, delivered monthly.
          </p>
        </div>

        {/* Right Column: Interactive Subscription Form */}
        <div className="w-full lg:max-w-[480px]">
          {status === 'success' ? (
            <div className="p-4 rounded-2xl bg-white border border-[#BDF5DA] flex items-center justify-between gap-3 shadow-sm animate-in fade-in duration-200">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#12F095]/20 text-[#067A47] flex items-center justify-center font-bold text-[14px]">
                  ✓
                </span>
                <span className="text-[15px] font-semibold text-[#0A0A0A]">
                  You’re subscribed to The Lab Growth Brief!
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-[13px] font-bold text-[#067A47] hover:underline shrink-0"
              >
                Reset
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2.5 w-full relative"
            >
              <label htmlFor="nl-email" className="sr-only">
                Work email
              </label>
              <input
                id="nl-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="you@yourlab.com"
                required
                className="flex-1 min-h-[52px] px-5 py-3 rounded-full border border-[#A6EFCB] bg-white font-inherit text-[16px] text-[#0A0A0A] placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#067A47] transition-all shadow-sm"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="min-h-[52px] px-7 py-3 rounded-full bg-[#0A0A0A] hover:bg-[#222222] text-white font-bold text-[16px] cursor-pointer transition-colors shadow-sm shrink-0 disabled:opacity-70"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          {status === 'error' && errorMessage && (
            <p className="text-[13px] font-medium text-red-600 mt-2 px-3 m-0">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
