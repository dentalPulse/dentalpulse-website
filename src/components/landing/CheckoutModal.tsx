'use client';
import React, { useEffect, useState } from 'react';

type CheckoutModalProps = {
  planName: string;
  billingInterval: 'monthly' | 'yearly';
  onClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  labName: string;
};

const EMPTY_FORM: FormState = { name: '', email: '', phone: '', labName: '' };

// Same origin as the backend's CORS_ORIGINS default (see app/config.py) —
// this site is one of the allowed browser origins for POST /billing/checkout-session.
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:7000/api/v1';

export function CheckoutModal({ planName, billingInterval, onClose }: CheckoutModalProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch(`${API_BASE_URL}/billing/checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          lab_name: form.labName,
          plan_name: planName,
          billing_interval: billingInterval,
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-[440px] rounded-2xl bg-white p-6 md:p-8 shadow-xl relative"
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
          <Field label="Work email" value={form.email} onChange={updateField('email')} type="email" autoComplete="email" required />
          <Field label="Phone number" value={form.phone} onChange={updateField('phone')} type="tel" autoComplete="tel" required />
          <Field label="Lab name" value={form.labName} onChange={updateField('labName')} type="text" autoComplete="organization" required />

          {error && <p className="text-[13px] text-red-600">{error}</p>}

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
