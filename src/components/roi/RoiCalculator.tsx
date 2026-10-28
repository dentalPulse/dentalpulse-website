"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PLAN_DEFS = [
  { id: 'starter', label: 'Starter · $499/mo', m: 499 },
  { id: 'growth', label: 'Growth · $799/mo', m: 799 },
  { id: 'growth-ai', label: 'Growth AI · $999/mo', m: 999 },
];

export function RoiCalculator() {
  // Input State
  const [accounts, setAccounts] = useState(300);
  const [rev, setRev] = useState(12000);
  const [churn, setChurn] = useState(15);
  const [cac, setCac] = useState(2000);
  const [red, setRed] = useState(3);
  const [up, setUp] = useState(5);
  const [plan, setPlan] = useState(2); // Growth AI default

  // Reactive Math Engine
  const calc = useMemo(() => {
    const money = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
    const short = (n: number) =>
      n >= 1000000
        ? '$' + (n / 1000000).toFixed(2) + 'M'
        : n >= 1000
        ? '$' + Math.round(n / 1000) + 'K'
        : money(n);

    const saved = (accounts * red) / 100;
    const kept = saved * rev;
    const retainedAccounts = accounts * (1 - Math.max(0, churn - red) / 100);
    const cross = (retainedAccounts * rev * up) / 100;
    const cacSaved = saved * cac;
    const total = kept + cross + cacSaved;
    const cost = PLAN_DEFS[plan].m * 12;
    const roi = cost > 0 ? total / cost : 0;
    const payback = total > 0 ? cost / (total / 12) : 0;
    const net = Math.max(0, total - cost);

    const pctA = total > 0 ? (kept / total) * 100 : 0;
    const pctB = total > 0 ? (cross / total) * 100 : 0;
    const pctC = total > 0 ? (cacSaved / total) * 100 : 0;

    return {
      accountsLabel: accounts.toLocaleString('en-US'),
      revLabel: money(rev),
      churnLabel: `${churn}%`,
      cacLabel: money(cac),
      redLabel: `${red} pts`,
      upLabel: `${up}%`,
      totalLabel: short(total),
      roiLabel: `${roi.toFixed(1)}×`,
      costLabel: money(cost),
      savedLabel: saved % 1 === 0 ? String(saved) : saved.toFixed(1),
      keptLabel: money(kept),
      crossLabel: money(cross),
      cacSavedLabel: money(cacSaved),
      paybackLabel: payback > 0 ? (payback < 1 ? '< 1 month' : `${payback.toFixed(1)} months`) : '—',
      netLabel: short(net),
      pctA: Math.min(100, Math.max(0, pctA)),
      pctB: Math.min(100, Math.max(0, pctB)),
      pctC: Math.min(100, Math.max(0, pctC)),
    };
  }, [accounts, rev, churn, cac, red, up, plan]);

  // Helper for dynamic slider fill gradient
  const getSliderStyle = (val: number, min: number, max: number) => {
    const percentage = ((val - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #067A47 0%, #067A47 ${percentage}%, #E6E6E6 ${percentage}%, #E6E6E6 100%)`,
    };
  };

  return (
    <section className="w-full bg-white pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Form Inputs */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex-[1.2] bg-white border border-[#E6E6E6] rounded-[24px] p-5 sm:p-10 flex flex-col gap-6 sm:gap-7 shadow-sm"
        >
          <h2 className="m-0 text-[22px] font-extrabold text-[#0A0A0A]">Your lab today</h2>

          {/* Slider 1: Active Accounts */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-[15px]">
              <label htmlFor="roi-acc" className="font-semibold text-[#0A0A0A]">
                Active dentist accounts
              </label>
              <output htmlFor="roi-acc" className="font-extrabold text-[#0A0A0A] font-mono text-[16px]">
                {calc.accountsLabel}
              </output>
            </div>
            <input
              id="roi-acc"
              type="range"
              min="50"
              max="1000"
              step="10"
              value={accounts}
              onChange={(e) => setAccounts(Number(e.target.value))}
              style={getSliderStyle(accounts, 50, 1000)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#067A47]"
            />
          </div>

          {/* Slider 2: Average Yearly Revenue */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-[15px]">
              <label htmlFor="roi-rev" className="font-semibold text-[#0A0A0A]">
                Average yearly revenue per account
              </label>
              <output htmlFor="roi-rev" className="font-extrabold text-[#0A0A0A] font-mono text-[16px]">
                {calc.revLabel}
              </output>
            </div>
            <input
              id="roi-rev"
              type="range"
              min="2000"
              max="60000"
              step="1000"
              value={rev}
              onChange={(e) => setRev(Number(e.target.value))}
              style={getSliderStyle(rev, 2000, 60000)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#067A47]"
            />
          </div>

          {/* Slider 3: Churn Rate */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-[15px]">
              <label htmlFor="roi-churn" className="font-semibold text-[#0A0A0A]">
                Accounts lost per year
              </label>
              <output htmlFor="roi-churn" className="font-extrabold text-[#0A0A0A] font-mono text-[16px]">
                {calc.churnLabel}
              </output>
            </div>
            <input
              id="roi-churn"
              type="range"
              min="2"
              max="40"
              step="1"
              value={churn}
              onChange={(e) => setChurn(Number(e.target.value))}
              style={getSliderStyle(churn, 2, 40)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#067A47]"
            />
          </div>

          {/* Slider 4: CAC */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-[15px]">
              <label htmlFor="roi-cac" className="font-semibold text-[#0A0A0A]">
                Cost to win a new dentist
              </label>
              <output htmlFor="roi-cac" className="font-extrabold text-[#0A0A0A] font-mono text-[16px]">
                {calc.cacLabel}
              </output>
            </div>
            <input
              id="roi-cac"
              type="range"
              min="0"
              max="10000"
              step="250"
              value={cac}
              onChange={(e) => setCac(Number(e.target.value))}
              style={getSliderStyle(cac, 0, 10000)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#067A47]"
            />
          </div>

          <div className="h-[1px] bg-[#EFEFEF] my-1" />

          <h2 className="m-0 text-[22px] font-extrabold text-[#0A0A0A]">With Dental Pulse</h2>

          {/* Slider 5: Churn Points Reduction */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-[15px]">
              <label htmlFor="roi-red" className="font-semibold text-[#0A0A0A]">
                Fewer accounts lost (points)
              </label>
              <output htmlFor="roi-red" className="font-extrabold text-[#0A0A0A] font-mono text-[16px]">
                {calc.redLabel}
              </output>
            </div>
            <input
              id="roi-red"
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={red}
              onChange={(e) => setRed(Number(e.target.value))}
              style={getSliderStyle(red, 0, 10)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#067A47]"
            />
          </div>

          {/* Slider 6: Cross-sell Lift */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-[15px]">
              <label htmlFor="roi-up" className="font-semibold text-[#0A0A0A]">
                Cross-sell lift on retained accounts
              </label>
              <output htmlFor="roi-up" className="font-extrabold text-[#0A0A0A] font-mono text-[16px]">
                {calc.upLabel}
              </output>
            </div>
            <input
              id="roi-up"
              type="range"
              min="0"
              max="15"
              step="0.5"
              value={up}
              onChange={(e) => setUp(Number(e.target.value))}
              style={getSliderStyle(up, 0, 15)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#067A47]"
            />
          </div>

          {/* Plan Selector */}
          <fieldset className="border-none m-0 p-0 flex flex-col gap-3">
            <legend className="text-[15px] font-semibold text-[#0A0A0A]">Plan</legend>
            <div className="flex flex-wrap gap-2.5">
              {PLAN_DEFS.map((p, idx) => {
                const isSelected = plan === idx;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlan(idx)}
                    aria-pressed={isSelected}
                    className={`cursor-pointer text-[14px] font-bold px-4 py-2.5 rounded-full transition-all min-h-[44px] ${
                      isSelected
                        ? 'bg-[#0A0A0A] text-white border border-[#0A0A0A] shadow-sm'
                        : 'bg-white text-[#0A0A0A] border border-[#D6D6D6] hover:border-[#0A0A0A]'
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </form>

        {/* Right Column: Estimated Impact Card */}
        <div className="flex-1 bg-[#0A0A0A] text-white rounded-[24px] p-5 sm:p-10 flex flex-col justify-between gap-6 shadow-xl">
          <div>
            <div className="font-mono text-[13px] font-semibold text-[#12F095] tracking-[0.06em] uppercase">
              ESTIMATED YEARLY IMPACT
            </div>
            <div
              aria-live="polite"
              className="text-[38px] xs:text-[46px] sm:text-[60px] lg:text-[72px] font-extrabold tracking-[-0.04em] leading-none text-white mt-3"
            >
              {calc.totalLabel}
            </div>
            <div className="text-[14px] sm:text-[16px] text-[#BDBDBD] mt-3">
              <span className="text-[#12F095] font-bold">{calc.roiLabel}</span> return on a {calc.costLabel} yearly plan
            </div>
          </div>

          {/* Multi-segment Distribution Bar */}
          <div
            aria-hidden="true"
            className="w-full flex h-3.5 rounded-full overflow-hidden bg-[#161616] border border-[#2A2A2A]"
          >
            <span
              style={{ width: `${calc.pctA}%` }}
              className="block h-full bg-[#12F095] transition-all duration-300"
              title="Revenue kept"
            />
            <span
              style={{ width: `${calc.pctB}%` }}
              className="block h-full bg-[#8CF7C9] transition-all duration-300"
              title="New cross-sell revenue"
            />
            <span
              style={{ width: `${calc.pctC}%` }}
              className="block h-full bg-[#FFFFFF] transition-all duration-300"
              title="Acquisition cost avoided"
            />
          </div>

          {/* Detailed Line Item Breakdowns */}
          <div className="flex flex-col gap-1 text-[13px] sm:text-[15px]">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 xs:gap-3 py-3 border-b border-[#2A2A2A]">
              <span className="flex items-center gap-2 text-[#E6E6E6]">
                <span className="w-2.5 h-2.5 rounded-[3px] bg-[#12F095] shrink-0" />
                Revenue kept from <strong className="text-white font-semibold">{calc.savedLabel}</strong> retained dentists
              </span>
              <b className="font-mono text-white text-[14px] sm:text-[15px] shrink-0 self-end xs:self-center">{calc.keptLabel}</b>
            </div>

            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 xs:gap-3 py-3 border-b border-[#2A2A2A]">
              <span className="flex items-center gap-2 text-[#E6E6E6]">
                <span className="w-2.5 h-2.5 rounded-[3px] bg-[#8CF7C9] shrink-0" />
                New cross-sell revenue
              </span>
              <b className="font-mono text-white text-[14px] sm:text-[15px] shrink-0 self-end xs:self-center">{calc.crossLabel}</b>
            </div>

            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 xs:gap-3 py-3 border-b border-[#2A2A2A]">
              <span className="flex items-center gap-2 text-[#E6E6E6]">
                <span className="w-2.5 h-2.5 rounded-[3px] bg-[#FFFFFF] shrink-0" />
                Acquisition cost avoided
              </span>
              <b className="font-mono text-white text-[14px] sm:text-[15px] shrink-0 self-end xs:self-center">{calc.cacSavedLabel}</b>
            </div>
          </div>

          {/* 2 Summary KPI Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-[#161616] border border-[#2A2A2A] rounded-[16px] p-4 sm:p-5 flex flex-col justify-center">
              <div className="text-[13px] text-[#BDBDBD] font-medium">Payback period</div>
              <div className="text-[22px] sm:text-[26px] font-extrabold text-white mt-1">
                {calc.paybackLabel}
              </div>
            </div>
            <div className="bg-[#161616] border border-[#2A2A2A] rounded-[16px] p-4 sm:p-5 flex flex-col justify-center">
              <div className="text-[13px] text-[#BDBDBD] font-medium">Net gain / year</div>
              <div className="text-[22px] sm:text-[26px] font-extrabold text-[#12F095] mt-1 font-mono">
                {calc.netLabel}
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full mt-2">
            <Link
              href="/book-demo"
              className="block w-full text-center bg-[#12F095] text-[#0A0A0A] font-extrabold text-[15px] sm:text-[16px] py-4 px-6 rounded-full hover:bg-[#00df83] transition-colors shadow-lg"
            >
              Get a detailed ROI review in your demo
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
