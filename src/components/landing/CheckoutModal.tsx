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

const EMPTY_FORM: FormState = { name: '', email: '', phone: '', labName: '', password: '', confirmPassword: '' };

// Curated, not exhaustive — covers the markets this is actually sold in
// today plus the common ones a prospect might be calling from. The backend
// (app/billing/service.py::_validate_phone, via the `phonenumbers` library)
// is the real validator; this list only has to get the dial code right,
// not police every country's number format.
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

// Placeholder — must match the backend's STRIPE_PRICE_SETUP_FEE amount (see
// app/config.py). Display-only; the real charge always comes from whatever
// Price that Stripe ID actually points to, not this number.
const SETUP_FEE_USD = 499;

// Placeholder — must match the backend's STRIPE_PRICE_EXTRA_SEAT_MONTHLY
// amount. Display-only; same rate for every plan (app/billing/plans.py's
// EXTRA_SEAT_PRICE_IDS — one shared Price, not per-plan).
const EXTRA_SEAT_USD_MONTHLY = 10;

// Same origin as the backend's CORS_ORIGINS default (see app/config.py) —
// this site is one of the allowed browser origins for POST /billing/checkout-session.
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:7000/api/v1';

export function CheckoutModal({ planName, billingInterval, basePriceMonthly, includedUsers, onClose }: CheckoutModalProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [countryCode, setCountryCode] = useState('+91');
  const [numUsers, setNumUsers] = useState(includedUsers);
  const [includeSetupFee, setIncludeSetupFee] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Flat base price (covers includedUsers) + the shared extra-seat rate for
  // every seat beyond that — NOT a pure per-seat replacement of the plan
  // price. Yearly is 10x both components ("2 months free"), matching the
  // backend's Price setup (app/billing/plans.py).
  const extraSeats = Math.max(0, numUsers - includedUsers);
  const effectiveBaseRate = billingInterval === 'yearly' ? basePriceMonthly * 10 : basePriceMonthly;
  const effectiveExtraSeatRate = billingInterval === 'yearly' ? EXTRA_SEAT_USD_MONTHLY * 10 : EXTRA_SEAT_USD_MONTHLY;
  const subscriptionTotal = effectiveBaseRate + extraSeats * effectiveExtraSeatRate;
  const total = subscriptionTotal + (includeSetupFee ? SETUP_FEE_USD : 0);
  const intervalLabel = billingInterval === 'yearly' ? 'year' : 'month';

  // Esc to close, and lock background scroll while the modal is open —
  // standard modal hygiene, this page has no other overlay to conflict with.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  function updateField(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };
  }

  function handleNumUsersChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value, 10);
    setNumUsers(Number.isNaN(value) ? includedUsers : Math.max(includedUsers, value));
  }

  const passwordsMatch = form.password.length > 0 && form.password === form.confirmPassword;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!EMAIL_PATTERN.test(form.email.trim())) {
      setError('Enter a valid email address.');
      return;
    }
    if (form.phone.trim().length < 4) {
      setError('Enter a valid phone number.');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (!passwordsMatch) {
      setError('Passwords do not match.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/billing/checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: `${countryCode}${form.phone.trim()}`,
          lab_name: form.labName,
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
      // Full redirect, not a fetch — the browser needs to actually navigate
      // to Stripe's hosted Checkout page to collect card details.
      window.location.href = checkout_url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-8 overflow-y-auto"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-[440px] rounded-2xl bg-white p-6 md:p-8 shadow-xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h3 id="checkout-modal-title" className="text-[20px] font-bold text-gray-900 mb-1">
          Subscribe to {planName}
        </h3>
        <p className="text-[13px] text-gray-500 mb-6">
          Billed {billingInterval}. Tell us a bit about your lab, then complete payment securely with Stripe.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field label="Your name" value={form.name} onChange={updateField('name')} type="text" autoComplete="name" required />
          <Field
            label="Work email"
            value={form.email}
            onChange={updateField('email')}
            type="email"
            autoComplete="email"
            pattern={EMAIL_PATTERN.source}
            required
          />

          <label className="flex flex-col gap-1.5 text-left">
            <span className="text-[13px] font-medium text-gray-700">Phone number</span>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="h-11 px-2 rounded-lg border border-gray-300 text-[13px] text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary shrink-0"
                aria-label="Country code"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code + c.label} value={c.code}>{c.label}</option>
                ))}
              </select>
              <input
                value={form.phone}
                onChange={updateField('phone')}
                type="tel"
                autoComplete="tel-national"
                required
                className="h-11 flex-1 min-w-0 px-3.5 rounded-lg border border-gray-300 text-[14px] text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
              />
            </div>
          </label>

          <Field label="Lab name" value={form.labName} onChange={updateField('labName')} type="text" autoComplete="organization" required />

          <label className="flex flex-col gap-1.5 text-left">
            <span className="text-[13px] font-medium text-gray-700">Number of users</span>
            <input
              type="number"
              min={includedUsers}
              step={1}
              value={numUsers}
              onChange={handleNumUsersChange}
              className="h-11 px-3.5 rounded-lg border border-gray-300 text-[14px] text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
            />
            <span className="text-[11px] text-gray-400">
              {planName} includes {includedUsers} users. Extra seats are +${effectiveExtraSeatRate}/{intervalLabel} each.
            </span>
          </label>

          <Field
            label="Set a password"
            value={form.password}
            onChange={updateField('password')}
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
          <Field
            label="Confirm password"
            value={form.confirmPassword}
            onChange={updateField('confirmPassword')}
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
          <p className="text-[11px] text-gray-400 -mt-2">
            This is your DentalPulse login — you&apos;ll use it to sign in at app.dentalpulseai.com right after payment.
          </p>

          <label className="flex items-start gap-2.5 text-left cursor-pointer">
            <input
              type="checkbox"
              checked={includeSetupFee}
              onChange={(e) => setIncludeSetupFee(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-brand-primary cursor-pointer"
            />
            <span className="text-[13px] text-gray-700">
              Add one-time setup assistance (+${SETUP_FEE_USD}) — our team sets everything up for you.
            </span>
          </label>

          {error && <p className="text-[13px] text-red-600">{error}</p>}

          <div className="flex items-center justify-between text-[14px] font-semibold text-gray-900 border-t border-gray-100 pt-3">
            <span>Total due today</span>
            <span>${total.toLocaleString()} / {includeSetupFee ? `${intervalLabel} + one-time` : intervalLabel}</span>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full py-3 rounded-[10px] bg-brand-primary text-black font-bold text-[15px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Redirecting to payment…' : 'Continue to payment'}
          </button>
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
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-[13px] font-medium text-gray-700">{label}</span>
      <input
        {...inputProps}
        className="h-11 px-3.5 rounded-lg border border-gray-300 text-[14px] text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
      />
    </label>
  );
}
