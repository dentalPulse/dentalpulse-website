'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

type CheckoutModalProps = {
  planName: string;
  billingInterval: 'monthly' | 'yearly';
  basePriceMonthly: number;
  includedUsers: number;
  onClose: () => void;
};

type FormState = {
  labName: string;
  yourName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const COUNTRY_CODES = [
  { code: '+1', flag: '🇺🇸', label: 'US/CA (+1)' },
  { code: '+44', flag: '🇬🇧', label: 'UK (+44)' },
  { code: '+61', flag: '🇦🇺', label: 'AU (+61)' },
  { code: '+91', flag: '🇮🇳', label: 'IN (+91)' },
  { code: '+49', flag: '🇩🇪', label: 'DE (+49)' },
  { code: '+33', flag: '🇫🇷', label: 'FR (+33)' },
  { code: '+34', flag: '🇪🇸', label: 'ES (+34)' },
  { code: '+39', flag: '🇮🇹', label: 'IT (+39)' },
  { code: '+81', flag: '🇯🇵', label: 'JP (+81)' },
  { code: '+971', flag: '🇦🇪', label: 'AE (+971)' },
  { code: '+52', flag: '🇲🇽', label: 'MX (+52)' },
  { code: '+55', flag: '🇧🇷', label: 'BR (+55)' },
  { code: '+41', flag: '🇨🇭', label: 'CH (+41)' },
  { code: '+31', flag: '🇳🇱', label: 'NL (+31)' },
  { code: '+64', flag: '🇳🇿', label: 'NZ (+64)' },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SETUP_FEE_USD = 499;
const EXTRA_SEAT_USD_MONTHLY = 25;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://uat-api.dentalpulseai.com/api/v1';

export function CheckoutModal({
  planName,
  billingInterval,
  basePriceMonthly,
  includedUsers,
  onClose,
}: CheckoutModalProps) {
  useLockBodyScroll(true);

  const [currentTab, setCurrentTab] = useState<1 | 2 | 3>(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const [form, setForm] = useState<FormState>({
    labName: '',
    yourName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [countryCode, setCountryCode] = useState<string>('+1');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const [numUsers, setNumUsers] = useState<number>(includedUsers);
  const [includeSetupFee, setIncludeSetupFee] = useState<boolean>(true);
  const [showIncludedTooltip, setShowIncludedTooltip] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Synchronize numUsers if includedUsers changes
  useEffect(() => {
    setNumUsers(includedUsers);
  }, [includedUsers]);

  // Pricing calculations
  const extraSeats = Math.max(0, numUsers - includedUsers);
  const intervalLabel = billingInterval === 'yearly' ? 'yr' : 'mo';
  const effectiveBaseRate = billingInterval === 'yearly' ? basePriceMonthly * 10 : basePriceMonthly;
  const extraSeatRate = billingInterval === 'yearly' ? EXTRA_SEAT_USD_MONTHLY * 10 : EXTRA_SEAT_USD_MONTHLY;
  const additionalCost = extraSeats * extraSeatRate;
  const subscriptionTotal = effectiveBaseRate + additionalCost;
  const totalWithSetup = subscriptionTotal + SETUP_FEE_USD;

  // Esc key closes modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  function updateField(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next.phone;
      return next;
    });
    // Strictly accept only numbers (digits 0-9), max 14 digits
    const numericOnly = e.target.value.replace(/\D/g, '').slice(0, 14);
    setForm((f) => ({ ...f, phone: numericOnly }));
  }

  function goToStep(nextStep: 1 | 2 | 3) {
    setDirection(nextStep > currentTab ? 1 : -1);
    setCurrentTab(nextStep);
  }

  function handleNextTab1() {
    setError(null);
    const errors: Record<string, string> = {};

    if (!form.labName.trim() || form.labName.trim().length < 2) {
      errors.labName = 'Please enter your lab name (at least 2 characters).';
    }
    if (!form.yourName.trim() || form.yourName.trim().length < 2) {
      errors.yourName = 'Please enter your name.';
    }
    if (!form.email.trim()) {
      errors.email = 'Please enter your email.';
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      errors.phone = 'Please enter your phone number.';
    } else if (form.phone.trim().length < 7 || form.phone.trim().length > 14) {
      errors.phone = 'Please enter a valid phone number (7–14 digits).';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError('Please fill in all required fields correctly.');
      return;
    }

    setFieldErrors({});
    goToStep(2);
  }

  function handleNextTab2() {
    setError(null);
    const errors: Record<string, string> = {};

    if (!form.password) {
      errors.password = 'Please enter a password.';
    } else if (form.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }

    if (!form.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password.';
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError('Please provide a valid password (min. 8 characters) and matching confirmation.');
      return;
    }

    setFieldErrors({});
    goToStep(3);
  }

  async function handleFinalSubmit(withSetup: boolean) {
    setError(null);
    setSubmitting(true);
    setIncludeSetupFee(withSetup);

    try {
      // E.164 format with selected country code
      const formattedPhone = `${countryCode}${form.phone.trim()}`;

      const payload = {
        name: form.yourName.trim(),
        email: form.email.trim(),
        phone: formattedPhone,
        lab_name: form.labName.trim(),
        password: form.password,
        plan_name: planName,
        billing_interval: billingInterval,
        num_users: numUsers,
        include_setup_fee: withSetup,
      };

      const res = await fetch(`${API_BASE_URL}/billing/checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.checkout_url) {
        // Direct browser redirect to the real hosted Stripe checkout page
        window.location.href = data.checkout_url;
        return;
      }

      // Extract error message from API response
      let errorMsg = 'Failed to create checkout session. Please try again.';
      if (data?.detail) {
        if (Array.isArray(data.detail)) {
          errorMsg = data.detail.map((d: any) => d.msg || `${d.loc?.slice(-1)}: invalid`).join(', ');
        } else if (typeof data.detail === 'string') {
          errorMsg = data.detail;
        }
      } else if (data?.message) {
        errorMsg = data.message;
      }

      setError(errorMsg);
      setSubmitting(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Network error connecting to payment gateway.');
      setSubmitting(false);
    }
  }

  // Animation variants for tab transitions
  const tabVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 28 : -28,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.22 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -28 : 28,
      opacity: 0,
      transition: { duration: 0.16 },
    }),
  };

  const tabsMeta = [
    { id: 1, label: '1 · Details' },
    { id: 2, label: '2 · Users' },
    { id: 3, label: '3 · Setup' },
  ];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xs px-3 sm:px-4 py-4 overflow-y-auto no-scrollbar"
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="w-full max-w-[560px] h-[640px] max-h-[92vh] flex flex-col rounded-[24px] sm:rounded-[28px] bg-white p-5 sm:p-7 shadow-2xl relative my-auto border border-gray-100 overflow-hidden text-left"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          {/* ============================================================== */}
          {/* 1. FIXED TOP HEADER: Logo, Plan Badge, Close & Stepper Tabs     */}
          {/* ============================================================== */}
          <div className="shrink-0 mb-3 sm:mb-4">
            {/* Logo + Badge + Close */}
            <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                <Image
                  src="/dental_pulse.png"
                  alt="Dental Pulse"
                  width={130}
                  height={26}
                  className="h-5 sm:h-6 w-auto object-contain"
                  priority
                />
                <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-[12px] font-semibold bg-[#E3FCEF] text-[#067A47] border border-[#B8F7E1] tracking-wide">
                  {planName} · ${effectiveBaseRate}/{intervalLabel}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition cursor-pointer shrink-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Stepper Tabs */}
            <div className="grid grid-cols-3 gap-3">
              {tabsMeta.map((tab) => {
                const isPassedOrActive = currentTab >= tab.id;
                return (
                  <div
                    key={tab.id}
                    onClick={() => {
                      if (tab.id < currentTab) {
                        goToStep(tab.id as 1 | 2 | 3);
                      }
                    }}
                    className={`flex flex-col gap-2 ${tab.id < currentTab ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    {/* Progress Line */}
                    <div className="h-[3px] w-full rounded-full bg-gray-200 overflow-hidden relative">
                      <motion.div
                        className="h-full bg-[#00E396] rounded-full"
                        initial={false}
                        animate={{ width: isPassedOrActive ? '100%' : '0%' }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      />
                    </div>
                    {/* Step Label */}
                    <span
                      className={`text-[12px] transition-colors ${
                        isPassedOrActive ? 'text-gray-900 font-semibold' : 'text-gray-400 font-medium'
                      }`}
                    >
                      {tab.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================== */}
          {/* 2. SCROLLABLE MIDDLE CONTENT AREA (Only this part scrolls)      */}
          {/* ============================================================== */}
          <div className="flex-1 overflow-y-auto pr-1 text-left min-h-0 [scrollbar-width:thin] [scrollbar-color:#D1D5DB_transparent]">
            <AnimatePresence mode="wait" custom={direction}>
              {/* TAB 1: DETAILS */}
              {currentTab === 1 && (
                <motion.div
                  key="tab-1-details"
                  custom={direction}
                  variants={tabVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-4 pb-2"
                >
                  <div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-gray-900 tracking-tight leading-snug">
                      Let’s set up your account
                    </h3>
                    <p className="text-[13px] text-gray-500 mt-0.5">
                      Tell us a little about you and your lab.
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {/* Lab name */}
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-900 mb-1.5">
                        Lab name
                      </label>
                      <input
                        type="text"
                        value={form.labName}
                        onChange={updateField('labName')}
                        placeholder="e.g. Apex Dental Laboratory"
                        className={`w-full px-4 py-2.5 sm:py-3 rounded-2xl border text-gray-900 text-[14px] focus:border-[#00E396] focus:ring-1 focus:ring-[#00E396] outline-none transition placeholder:text-gray-400 bg-white ${
                          fieldErrors.labName ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                        }`}
                        autoFocus
                        required
                      />
                      {fieldErrors.labName && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">
                          {fieldErrors.labName}
                        </p>
                      )}
                    </div>

                    {/* Your name */}
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-900 mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        value={form.yourName}
                        onChange={updateField('yourName')}
                        placeholder="e.g. Dr. John Doe"
                        className={`w-full px-4 py-2.5 sm:py-3 rounded-2xl border text-gray-900 text-[14px] focus:border-[#00E396] focus:ring-1 focus:ring-[#00E396] outline-none transition placeholder:text-gray-400 bg-white ${
                          fieldErrors.yourName ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                        }`}
                        required
                      />
                      {fieldErrors.yourName && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">
                          {fieldErrors.yourName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-900 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={updateField('email')}
                        placeholder="example@domain.com"
                        className={`w-full px-4 py-2.5 sm:py-3 rounded-2xl border text-gray-900 text-[14px] focus:border-[#00E396] focus:ring-1 focus:ring-[#00E396] outline-none transition placeholder:text-gray-400 bg-white ${
                          fieldErrors.email ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                        }`}
                        required
                      />
                      {fieldErrors.email && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number with Country Code */}
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-900 mb-1.5">
                        Phone number
                      </label>
                      <div className="flex items-center gap-2.5">
                        {/* Country Code Selector */}
                        <div className="relative shrink-0">
                          <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            aria-label="Country Code"
                            className="h-[44px] sm:h-[48px] pl-3 pr-7 rounded-2xl border border-gray-200 text-gray-900 text-[13px] sm:text-[14px] font-semibold bg-white focus:border-[#00E396] focus:ring-1 focus:ring-[#00E396] outline-none transition cursor-pointer appearance-none"
                          >
                            {COUNTRY_CODES.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.flag} {c.code}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="8" height="5" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M1 1l4 4 4-4" />
                            </svg>
                          </div>
                        </div>

                        {/* Local Phone digits only */}
                        <input
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={form.phone}
                          onChange={handlePhoneChange}
                          placeholder="Digits only (e.g. 2025550123)"
                          className={`flex-1 min-w-0 h-[44px] sm:h-[48px] px-4 rounded-2xl border text-gray-900 text-[14px] focus:border-[#00E396] focus:ring-1 focus:ring-[#00E396] outline-none transition placeholder:text-gray-400 bg-white ${
                            fieldErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                          }`}
                          required
                        />
                      </div>
                      {fieldErrors.phone && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: USERS & PASSWORD */}
              {currentTab === 2 && (
                <motion.div
                  key="tab-2-users"
                  custom={direction}
                  variants={tabVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-4 pb-2"
                >
                  <div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-gray-900 tracking-tight leading-snug">
                      How many people will use Dental Pulse?
                    </h3>
                    <p className="text-[13px] text-gray-500 mt-0.5">
                      Your {planName} plan includes {includedUsers} users. Need more? Add them for $25 per user / month.
                    </p>
                  </div>

                  {/* User Counter Card */}
                  <div className="border border-gray-200 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between bg-white text-left">
                    <div>
                      <span className="block text-[15px] font-bold text-gray-900">Users</span>
                      <span className="block text-[12px] text-gray-400 mt-0.5">
                        {includedUsers} included in plan
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setNumUsers((prev) => Math.max(includedUsers, prev - 1))}
                        disabled={numUsers <= includedUsers}
                        aria-label="Decrease users"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer bg-white"
                      >
                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none">
                          <line x1="1" y1="1" x2="13" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>

                      <span className="min-w-[32px] text-center text-[18px] font-bold text-gray-900 select-none">
                        {numUsers}
                      </span>

                      <button
                        type="button"
                        onClick={() => setNumUsers((prev) => prev + 1)}
                        aria-label="Increase users"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#00E396] hover:bg-[#00c984] text-black font-bold text-xl flex items-center justify-center transition cursor-pointer shadow-xs"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Breakdown Summary */}
                  <div className="bg-[#F8F9FA] rounded-2xl p-3.5 sm:p-4 space-y-2 text-[13px] text-left">
                    <div className="flex items-center justify-between text-gray-700">
                      <span>{planName} plan · {includedUsers} users</span>
                      <span className="font-semibold text-gray-900">${effectiveBaseRate}/{intervalLabel}</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-700">
                      <span>Additional users · {extraSeats} × ${extraSeatRate}/{intervalLabel}</span>
                      <span className="font-semibold text-gray-900">${additionalCost}/{intervalLabel}</span>
                    </div>

                    <div className="border-t border-gray-200/80 pt-2 flex items-center justify-between">
                      <span className="font-bold text-gray-900 text-[14px]">Subscription</span>
                      <span className="font-bold text-gray-900 text-[15px]">${subscriptionTotal}/{intervalLabel}</span>
                    </div>
                  </div>

                  {/* Account Password Inputs (Tab 2) */}
                  <div className="pt-2 border-t border-gray-100 text-left space-y-2.5">
                    <div>
                      <label className="block text-[14px] font-bold text-gray-900">
                        Create account password
                      </label>
                      <p className="text-[12px] text-gray-500 mt-0.5">
                        Set a password to log into your Dental Pulse dashboard.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[13px] font-semibold text-gray-900 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={form.password}
                            onChange={updateField('password')}
                            placeholder="Min. 8 characters"
                            className={`w-full pl-3.5 pr-10 py-2.5 rounded-2xl border text-gray-900 text-[14px] focus:border-[#00E396] focus:ring-1 focus:ring-[#00E396] outline-none transition placeholder:text-gray-400 bg-white ${
                              fieldErrors.password ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                            }`}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition cursor-pointer p-1"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                <line x1="1" y1="1" x2="23" y2="23" />
                              </svg>
                            ) : (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            )}
                          </button>
                        </div>
                        {fieldErrors.password && (
                          <p className="text-[11px] text-red-500 font-medium mt-1">
                            {fieldErrors.password}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[13px] font-semibold text-gray-900 mb-1">
                          Confirm password
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={form.confirmPassword}
                            onChange={updateField('confirmPassword')}
                            placeholder="Re-enter password"
                            className={`w-full pl-3.5 pr-10 py-2.5 rounded-2xl border text-gray-900 text-[14px] focus:border-[#00E396] focus:ring-1 focus:ring-[#00E396] outline-none transition placeholder:text-gray-400 bg-white ${
                              fieldErrors.confirmPassword ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                            }`}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition cursor-pointer p-1"
                            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                          >
                            {showConfirmPassword ? (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                <line x1="1" y1="1" x2="23" y2="23" />
                              </svg>
                            ) : (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            )}
                          </button>
                        </div>
                        {fieldErrors.confirmPassword && (
                          <p className="text-[11px] text-red-500 font-medium mt-1">
                            {fieldErrors.confirmPassword}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: SETUP & ORDER BREAKDOWN */}
              {currentTab === 3 && (
                <motion.div
                  key="tab-3-setup"
                  custom={direction}
                  variants={tabVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-3.5 pb-2"
                >
                  <div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-gray-900 tracking-tight leading-snug">
                      Want us to set it up for you?
                    </h3>
                    <p className="text-[13px] text-gray-500 mt-0.5">
                      Our team can get Dental Pulse live for your lab so you see value from week one.
                    </p>
                  </div>

                  {/* Setup Support Card (Selectable / Toggleable) */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setIncludeSetupFee((prev) => !prev)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIncludeSetupFee((prev) => !prev);
                      }
                    }}
                    className={`rounded-2xl border-2 p-3.5 sm:p-4 text-left transition-all relative cursor-pointer select-none ${
                      includeSetupFee
                        ? 'border-[#00E396] bg-emerald-50/20 shadow-xs'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0B0F17] flex items-center justify-center shrink-0">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#00E396"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="block text-[15px] font-bold text-gray-900">
                              Setup support
                            </span>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                includeSetupFee
                                  ? 'bg-[#E8FDF3] text-[#057A47]'
                                  : 'bg-gray-100 text-gray-500'
                              }`}
                            >
                              {includeSetupFee ? 'Selected' : 'Optional'}
                            </span>
                          </div>
                          <span className="block text-[12px] text-gray-500 mt-0.5">
                            Done-for-you onboarding
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className={`block text-[16px] sm:text-[17px] font-bold ${includeSetupFee ? 'text-gray-900' : 'text-gray-400'}`}>
                            ${SETUP_FEE_USD}
                          </span>
                          <span className="block text-[11px] text-gray-400">
                            one-time
                          </span>
                        </div>

                        {/* Interactive Checkbox Indicator */}
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                            includeSetupFee
                              ? 'bg-[#00E396] text-[#0B0F17]'
                              : 'border-2 border-gray-300 bg-white'
                          }`}
                        >
                          {includeSetupFee && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* What's included button */}
                    <div className="mt-3 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowIncludedTooltip((prev) => !prev);
                        }}
                        className="rounded-full border border-emerald-300 text-[#057A47] bg-[#E8FDF3] hover:bg-[#D4F8E6] text-[12px] font-semibold px-3 py-1 transition flex items-center gap-1.5 cursor-pointer"
                      >
                        What’s included?
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-200 ${showIncludedTooltip ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>

                    {/* Inline Expandable What's Included Drawer */}
                    {showIncludedTooltip && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 pt-3 border-t border-gray-100 space-y-2 text-[12px] text-gray-600 animate-in fade-in duration-200"
                      >
                        {[
                          'Connecting your lab software & importing case history',
                          'Dashboards, churn risk alerts & health scores configured',
                          'Win-back & cross-sell playbooks set up',
                          'Live training sessions for your lab team',
                          'Dedicated onboarding specialist for 30 days',
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <svg className="w-3.5 h-3.5 text-[#00E396] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Dynamic Order Calculation Summary Box */}
                  <div className="bg-[#F8F9FA] border border-gray-200/80 rounded-2xl p-3.5 sm:p-4 space-y-2.5 text-left text-[13px]">
                    <div className="flex items-center justify-between text-gray-700">
                      <span>{planName} plan ({numUsers} users)</span>
                      <span className="font-semibold text-gray-900">${subscriptionTotal}/{intervalLabel}</span>
                    </div>

                    {extraSeats > 0 && (
                      <div className="flex items-center justify-between text-gray-500 text-[12px] pl-2">
                        <span>↳ Includes {extraSeats} extra user{extraSeats > 1 ? 's' : ''}</span>
                        <span>+${additionalCost}/{intervalLabel}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-gray-700">
                      <span>Setup &amp; onboarding assistance</span>
                      <span className={`font-semibold ${includeSetupFee ? 'text-gray-900' : 'text-gray-400'}`}>
                        {includeSetupFee ? `+$${SETUP_FEE_USD} one-time` : 'Not selected ($0)'}
                      </span>
                    </div>

                    <div className="border-t border-gray-200/80 pt-2 flex items-center justify-between">
                      <div>
                        <span className="block font-bold text-gray-900 text-[14px]">
                          Total due today:
                        </span>
                        {includeSetupFee && (
                          <span className="block text-[11px] text-gray-500">
                            ${subscriptionTotal}/{intervalLabel} recurring thereafter
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className={`text-[17px] font-extrabold ${includeSetupFee ? 'text-[#067A47]' : 'text-gray-900'}`}>
                          ${includeSetupFee ? totalWithSetup : subscriptionTotal}
                        </span>
                        {!includeSetupFee && (
                          <span className="text-[12px] font-medium text-gray-500">/{intervalLabel}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============================================================== */}
          {/* 3. FIXED BOTTOM ACTION BUTTONS: Always Visible & Sticky         */}
          {/* ============================================================== */}
          <div className="shrink-0 pt-3.5 mt-2 border-t border-gray-100 bg-white">
            {error && (
              <p className="text-[12px] text-red-500 font-medium pb-2 text-center">
                {error}
              </p>
            )}

            {/* Tab 1 Actions */}
            {currentTab === 1 && (
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                onClick={handleNextTab1}
                className="w-full py-3 sm:py-3.5 rounded-full bg-[#111827] hover:bg-black text-white text-[15px] font-semibold transition cursor-pointer shadow-sm text-center"
              >
                Next
              </motion.button>
            )}

            {/* Tab 2 Actions */}
            {currentTab === 2 && (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => goToStep(1)}
                  className="px-6 sm:px-7 py-3 rounded-full border border-gray-200 text-gray-900 text-[14px] font-semibold hover:bg-gray-50 transition cursor-pointer"
                >
                  Back
                </button>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="button"
                  onClick={handleNextTab2}
                  className="flex-1 py-3 rounded-full bg-[#111827] hover:bg-black text-white text-[14px] font-semibold transition cursor-pointer shadow-sm text-center"
                >
                  Next
                </motion.button>
              </div>
            )}

            {/* Tab 3 Actions: Single "Proceed to Payment" action */}
            {currentTab === 3 && (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => goToStep(2)}
                  className="px-6 sm:px-7 py-3 rounded-full border border-gray-200 text-gray-900 text-[14px] font-semibold hover:bg-gray-50 transition cursor-pointer"
                >
                  Back
                </button>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="button"
                  disabled={submitting}
                  onClick={() => handleFinalSubmit(includeSetupFee)}
                  className="flex-1 py-3 sm:py-3.5 rounded-full bg-[#111827] hover:bg-black text-white text-[14px] sm:text-[15px] font-semibold transition cursor-pointer shadow-sm text-center disabled:opacity-60 flex items-center justify-center gap-1.5"
                >
                  {submitting ? (
                    'Redirecting to checkout…'
                  ) : (
                    <span>
                      Proceed to Payment · Pay{' '}
                      <span className="font-bold text-[#00E396]">
                        ${includeSetupFee ? totalWithSetup : subscriptionTotal}
                        {!includeSetupFee ? `/${intervalLabel}` : ''}
                      </span>
                    </span>
                  )}
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
