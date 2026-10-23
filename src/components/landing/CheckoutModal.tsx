'use client';
import React, { useEffect, useState } from 'react';

type CheckoutModalProps = {
  planName: string;
  billingInterval: 'monthly' | 'yearly';
  basePriceMonthly: number;
  includedUsers: number;
  onClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  labName: string;
  password: string;
  confirmPassword: string;
};

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  labName: '',
  password: '',
  confirmPassword: '',
};

// Curated list of dial codes for supported regions
const COUNTRY_CODES = [
  { code: '+91', label: 'India (+91)' },
  { code: '+1', label: 'US / Canada (+1)' },
  { code: '+44', label: 'United Kingdom (+44)' },
  { code: '+971', label: 'UAE (+971)' },
  { code: '+966', label: 'Saudi Arabia (+966)' },
  { code: '+65', label: 'Singapore (+65)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+49', label: 'Germany (+49)' },
  { code: '+33', label: 'France (+33)' },
  { code: '+64', label: 'New Zealand (+64)' },
  { code: '+27', label: 'South Africa (+27)' },
  { code: '+974', label: 'Qatar (+974)' },
  { code: '+92', label: 'Pakistan (+92)' },
  { code: '+880', label: 'Bangladesh (+880)' },
  { code: '+94', label: 'Sri Lanka (+94)' },
  { code: '+60', label: 'Malaysia (+60)' },
  { code: '+63', label: 'Philippines (+63)' },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SETUP_FEE_USD = 499;
const EXTRA_SEAT_USD_MONTHLY = 25;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:7000/api/v1';

export function CheckoutModal({
  planName,
  billingInterval,
  basePriceMonthly,
  includedUsers,
  onClose,
}: CheckoutModalProps) {
  const [currentTab, setCurrentTab] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [countryCode, setCountryCode] = useState('+91');
  const [numUsers, setNumUsers] = useState(includedUsers);
  const [includeSetupFee, setIncludeSetupFee] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pricing computations
  const extraSeats = Math.max(0, numUsers - includedUsers);
  const effectiveBaseRate = billingInterval === 'yearly' ? basePriceMonthly * 10 : basePriceMonthly;
  const effectiveExtraSeatRate = billingInterval === 'yearly' ? EXTRA_SEAT_USD_MONTHLY * 10 : EXTRA_SEAT_USD_MONTHLY;
  const subscriptionTotal = effectiveBaseRate + extraSeats * effectiveExtraSeatRate;
  const total = subscriptionTotal + (includeSetupFee ? SETUP_FEE_USD : 0);
  const intervalLabel = billingInterval === 'yearly' ? 'year' : 'month';

  // Esc key closes modal, body & html scroll locking to remove background scrollbars
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [onClose]);

  function updateField(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };
  }

  function handleNumUsersChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value, 10);
    setNumUsers(Number.isNaN(value) ? includedUsers : Math.max(includedUsers, value));
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    // Restrict strictly to digits only
    const digitsOnly = e.target.value.replace(/\D/g, '');
    setForm((f) => ({ ...f, phone: digitsOnly.slice(0, 15) }));
  }

  function handlePhoneKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // Block non-numeric characters, while allowing control and navigation keys
    if (
      !/^\d$/.test(e.key) &&
      !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(e.key) &&
      !((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x', 'z'].includes(e.key.toLowerCase()))
    ) {
      e.preventDefault();
    }
  }

  // Tab 1 validation
  function handleNextTab1() {
    setError(null);
    if (!form.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      setError('Please enter a valid work email address.');
      return;
    }
    if (form.phone.trim().length < 4) {
      setError('Please enter a valid phone number.');
      return;
    }
    setCurrentTab(2);
  }

  // Tab 2 validation
  function handleNextTab2() {
    setError(null);
    if (!form.labName.trim()) {
      setError('Please enter your lab name.');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setCurrentTab(3);
  }

  // Tab switch handler for header tabs
  function handleTabClick(tabIndex: 1 | 2 | 3) {
    if (tabIndex === currentTab) return;
    if (tabIndex === 1) {
      setError(null);
      setCurrentTab(1);
    } else if (tabIndex === 2) {
      // Validate tab 1 before jumping to 2
      if (!form.name.trim() || !EMAIL_PATTERN.test(form.email.trim()) || form.phone.trim().length < 4) {
        handleNextTab1();
        return;
      }
      setError(null);
      setCurrentTab(2);
    } else if (tabIndex === 3) {
      // Validate tab 1 and tab 2 before jumping to 3
      if (!form.name.trim() || !EMAIL_PATTERN.test(form.email.trim()) || form.phone.trim().length < 4) {
        handleNextTab1();
        return;
      }
      if (!form.labName.trim() || form.password.length < 8 || form.password !== form.confirmPassword) {
        handleNextTab2();
        return;
      }
      setError(null);
      setCurrentTab(3);
    }
  }

  async function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setError(null);

    // Final safety check of all required data
    if (!form.name.trim() || !EMAIL_PATTERN.test(form.email.trim()) || form.phone.trim().length < 4) {
      setCurrentTab(1);
      setError('Please check your user information.');
      return;
    }
    if (!form.labName.trim() || form.password.length < 8 || form.password !== form.confirmPassword) {
      setCurrentTab(2);
      setError('Please check your lab information and password.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/billing/checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: `${countryCode}${form.phone.trim()}`,
          lab_name: form.labName.trim(),
          plan_name: planName,
          billing_interval: billingInterval,
          num_users: numUsers,
          include_setup_fee: includeSetupFee,
          password: form.password,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.detail || 'Something went wrong. Please try again.');
      }

      const { checkout_url } = await res.json();
      window.location.href = checkout_url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-4 overflow-y-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-[480px] rounded-2xl bg-white p-5 sm:p-6 shadow-2xl relative my-auto transition-all"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-left mb-3.5 pr-6">
          <h3 id="checkout-modal-title" className="text-[19px] font-bold text-gray-900 leading-snug">
            Subscribe to {planName}
          </h3>
          <p className="text-[12.5px] text-gray-500 mt-0.5">
            Billed {billingInterval}. Complete 3 quick steps to activate your subscription.
          </p>
        </div>

        {/* 3 Tabs Navigation Bar */}
        <div className="flex items-center gap-1.5 p-1 bg-gray-100/90 rounded-xl mb-4">
          <button
            type="button"
            onClick={() => handleTabClick(1)}
            className={`flex-1 py-1.5 px-2 rounded-lg text-[12px] font-semibold transition cursor-pointer flex items-center justify-center gap-1.5 ${
              currentTab === 1
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                currentTab === 1 ? 'bg-brand-primary text-black font-bold' : 'bg-gray-300 text-gray-700'
              }`}
            >
              1
            </span>
            <span>Your Info</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabClick(2)}
            className={`flex-1 py-1.5 px-2 rounded-lg text-[12px] font-semibold transition cursor-pointer flex items-center justify-center gap-1.5 ${
              currentTab === 2
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                currentTab === 2 ? 'bg-brand-primary text-black font-bold' : 'bg-gray-300 text-gray-700'
              }`}
            >
              2
            </span>
            <span>Lab Details</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabClick(3)}
            className={`flex-1 py-1.5 px-2 rounded-lg text-[12px] font-semibold transition cursor-pointer flex items-center justify-center gap-1.5 ${
              currentTab === 3
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                currentTab === 3 ? 'bg-brand-primary text-black font-bold' : 'bg-gray-300 text-gray-700'
              }`}
            >
              3
            </span>
            <span>Setup & Pay</span>
          </button>
        </div>

        {/* Tab Form Container */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (currentTab === 1) handleNextTab1();
            else if (currentTab === 2) handleNextTab2();
            else handleSubmit();
          }}
          className="flex flex-col"
        >
          {/* TAB 1: USER DATA */}
          {currentTab === 1 && (
            <div className="flex flex-col gap-3.5">
              <Field
                label="Your name"
                placeholder="e.g. Dr. John Doe"
                value={form.name}
                onChange={updateField('name')}
                type="text"
                autoComplete="name"
                autoFocus
                required
              />

              <Field
                label="Work email"
                placeholder="john@dentallab.com"
                value={form.email}
                onChange={updateField('email')}
                type="email"
                autoComplete="email"
                required
              />

              <label className="flex flex-col gap-1 text-left">
                <span className="text-[13px] font-medium text-gray-700">Phone number</span>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="h-10 px-2 rounded-lg border border-gray-300 text-[13px] text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary shrink-0 bg-white"
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code + c.label} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    value={form.phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    placeholder="9876543210"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoComplete="tel-national"
                    required
                    className="h-10 flex-1 min-w-0 px-3.5 rounded-lg border border-gray-300 text-[14px] text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  />
                </div>
              </label>

              {error && (
                <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 text-[13px] text-left">
                  {error}
                </div>
              )}

              {/* Navigation for Tab 1: Cancel & Next */}
              <div className="flex items-center justify-between gap-3 pt-3 mt-1 border-t border-gray-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-[14px] font-medium transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleNextTab1}
                  className="px-5 py-2 rounded-lg bg-brand-primary hover:brightness-95 text-black text-[14px] font-semibold transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  Next
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: LAB DATA & PASSWORD WITH SHOW/HIDE */}
          {currentTab === 2 && (
            <div className="flex flex-col gap-3">
              <Field
                label="Lab name"
                placeholder="e.g. Apex Dental Laboratory"
                value={form.labName}
                onChange={updateField('labName')}
                type="text"
                autoComplete="organization"
                autoFocus
                required
              />

              <label className="flex flex-col gap-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-gray-700">Number of users</span>
                  <span className="text-[11px] text-gray-500 font-normal">
                    Includes {includedUsers} users
                  </span>
                </div>
                <input
                  type="number"
                  min={includedUsers}
                  step={1}
                  value={numUsers}
                  onChange={handleNumUsersChange}
                  className="h-10 px-3.5 rounded-lg border border-gray-300 text-[14px] text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
                <span className="text-[11px] text-gray-400">
                  Extra seats are +${effectiveExtraSeatRate}/{intervalLabel} each.
                </span>
              </label>

              <PasswordField
                label="Set a password"
                placeholder="At least 8 characters"
                value={form.password}
                onChange={updateField('password')}
                showPassword={showPassword}
                onToggleShow={() => setShowPassword((prev) => !prev)}
                autoComplete="new-password"
                required
              />

              <PasswordField
                label="Confirm password"
                placeholder="Re-enter your password"
                value={form.confirmPassword}
                onChange={updateField('confirmPassword')}
                showPassword={showConfirmPassword}
                onToggleShow={() => setShowConfirmPassword((prev) => !prev)}
                autoComplete="new-password"
                required
              />

              <p className="text-[11px] text-gray-400 text-left -mt-1">
                This is your DentalPulse login — you&apos;ll use it to sign in at app.dentalpulseai.com right after payment.
              </p>

              {error && (
                <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 text-[13px] text-left">
                  {error}
                </div>
              )}

              {/* Navigation for Tab 2: Back, Cancel & Next */}
              <div className="flex items-center justify-between gap-3 pt-3 mt-1 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setCurrentTab(1);
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-[14px] font-medium transition cursor-pointer flex items-center gap-1.5"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Back
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3.5 py-2 rounded-lg text-gray-500 hover:text-gray-800 text-[14px] font-medium transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleNextTab2}
                    className="px-5 py-2 rounded-lg bg-brand-primary hover:brightness-95 text-black text-[14px] font-semibold transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                  >
                    Next
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SETUP ASSISTANCE & PAYMENT (OPTIONAL TAB) */}
          {currentTab === 3 && (
            <div className="flex flex-col gap-3.5">
              <div className="text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[13px] font-semibold text-gray-900">
                    Add one-time setup assistance fee?
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    Optional
                  </span>
                </div>
                <p className="text-[12px] text-gray-500 mb-2.5">
                  Choose whether you would like our specialist team to assist in configuring your dental lab workflow.
                </p>

                {/* Setup Assistance Radio Group */}
                <div className="flex flex-col gap-2">
                  <label
                    className={`flex items-start gap-3 p-3 rounded-xl border transition cursor-pointer ${
                      includeSetupFee
                        ? 'border-brand-primary bg-emerald-50/40 shadow-xs ring-1 ring-brand-primary'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="setupAssistance"
                      value="yes"
                      checked={includeSetupFee === true}
                      onChange={() => setIncludeSetupFee(true)}
                      className="mt-0.5 h-4 w-4 accent-brand-primary cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-bold text-gray-900">Yes, add setup assistance</span>
                        <span className="text-[13px] font-bold text-gray-900">+${SETUP_FEE_USD}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Our expert team personally configures your lab setup, data import, and staff onboarding.
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-3 p-3 rounded-xl border transition cursor-pointer ${
                      !includeSetupFee
                        ? 'border-brand-primary bg-emerald-50/40 shadow-xs ring-1 ring-brand-primary'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="setupAssistance"
                      value="no"
                      checked={includeSetupFee === false}
                      onChange={() => setIncludeSetupFee(false)}
                      className="mt-0.5 h-4 w-4 accent-brand-primary cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-bold text-gray-900">No, I will set up on my own</span>
                        <span className="text-[12px] font-semibold text-gray-400">$0</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Standard self-service onboarding with full documentation and knowledge base access.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order & Pricing Summary Card */}
              <div className="rounded-xl bg-gray-50 p-3 border border-gray-100 flex flex-col gap-1.5 text-left">
                <div className="flex items-center justify-between text-[12px] text-gray-600">
                  <span>{planName} plan ({billingInterval})</span>
                  <span className="font-semibold text-gray-900">${effectiveBaseRate.toLocaleString()}</span>
                </div>

                {extraSeats > 0 && (
                  <div className="flex items-center justify-between text-[12px] text-gray-600">
                    <span>
                      {extraSeats} Extra user seat{extraSeats > 1 ? 's' : ''} (+${effectiveExtraSeatRate}/{intervalLabel})
                    </span>
                    <span className="font-semibold text-gray-900">+${(extraSeats * effectiveExtraSeatRate).toLocaleString()}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-[12px] text-gray-600">
                  <span>One-time setup assistance</span>
                  <span className="font-semibold text-gray-900">
                    {includeSetupFee ? `+$${SETUP_FEE_USD}` : '$0'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[14px] font-bold text-gray-900 border-t border-gray-200 pt-2 mt-0.5">
                  <span>Total due today</span>
                  <span className="text-[14.5px]">
                    ${total.toLocaleString()}{' '}
                    <span className="text-[11.5px] font-normal text-gray-500">
                      / {includeSetupFee ? `${intervalLabel} + one-time` : intervalLabel}
                    </span>
                  </span>
                </div>
              </div>

              {error && (
                <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 text-[13px] text-left">
                  {error}
                </div>
              )}

              {/* Navigation for Tab 3: Back, Cancel & Continue to payment */}
              <div className="flex items-center justify-between gap-3 pt-3 mt-1 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setCurrentTab(2);
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-[14px] font-medium transition cursor-pointer flex items-center gap-1.5"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Back
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3 py-2 rounded-lg text-gray-500 hover:text-gray-800 text-[14px] font-medium transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-5 py-2 rounded-lg bg-brand-primary hover:brightness-95 text-black font-bold text-[14px] transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-xs"
                  >
                    {submitting ? 'Redirecting to payment…' : 'Continue to payment'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  ...inputProps
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-1 text-left">
      <span className="text-[13px] font-medium text-gray-700">{label}</span>
      <input
        {...inputProps}
        className="h-10 px-3.5 rounded-lg border border-gray-300 text-[14px] text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
      />
    </label>
  );
}

function PasswordField({
  label,
  value,
  onChange,
  showPassword,
  onToggleShow,
  autoComplete,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  onToggleShow: () => void;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1 text-left">
      <span className="text-[13px] font-medium text-gray-700">{label}</span>
      <div className="relative">
        <input
          value={value}
          onChange={onChange}
          type={showPassword ? 'text' : 'password'}
          autoComplete={autoComplete}
          placeholder={placeholder}
          minLength={8}
          required={required}
          className="h-10 w-full pl-3.5 pr-10 rounded-lg border border-gray-300 text-[14px] text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
        />
        <button
          type="button"
          onClick={onToggleShow}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-700 transition cursor-pointer"
        >
          {showPassword ? (
            /* Eye Off Icon */
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          ) : (
            /* Eye Icon */
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
    </label>
  );
}
