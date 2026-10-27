"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function BookDemoForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    labName: '',
    phone: '',
    role: 'Owner / C-suite',
    accounts: '100–300',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instantaneous booking submission
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      labName: '',
      phone: '',
      role: 'Owner / C-suite',
      accounts: '100–300',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="flex-1 min-w-[320px] max-w-[620px]">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className="bg-white border border-[#E6E6E6] rounded-[28px] p-6 sm:p-10 flex flex-col gap-5 shadow-[0_40px_70px_-50px_rgba(0,0,0,0.45)]"
          >
            <h2 className="m-0 mb-1 text-[22px] sm:text-[24px] font-extrabold text-[#0A0A0A]">
              Tell us about your lab
            </h2>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="d-first" className="text-[14px] font-bold text-[#0A0A0A]">
                  First name <span className="text-[#067A47]">*</span>
                </label>
                <input
                  id="d-first"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="min-h-[48px] px-3.5 rounded-[12px] border border-[#D6D6D6] bg-white text-[16px] text-[#0A0A0A] focus:outline-none focus:border-[#067A47] focus:ring-1 focus:ring-[#067A47] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="d-last" className="text-[14px] font-bold text-[#0A0A0A]">
                  Last name <span className="text-[#067A47]">*</span>
                </label>
                <input
                  id="d-last"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="min-h-[48px] px-3.5 rounded-[12px] border border-[#D6D6D6] bg-white text-[16px] text-[#0A0A0A] focus:outline-none focus:border-[#067A47] focus:ring-1 focus:ring-[#067A47] transition-all"
                />
              </div>
            </div>

            {/* Work Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="d-email" className="text-[14px] font-bold text-[#0A0A0A]">
                Work email <span className="text-[#067A47]">*</span>
              </label>
              <input
                id="d-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@yourlab.com"
                value={formData.email}
                onChange={handleChange}
                className="min-h-[48px] px-3.5 rounded-[12px] border border-[#D6D6D6] bg-white text-[16px] text-[#0A0A0A] placeholder-[#999999] focus:outline-none focus:border-[#067A47] focus:ring-1 focus:ring-[#067A47] transition-all"
              />
            </div>

            {/* Lab Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="d-lab" className="text-[14px] font-bold text-[#0A0A0A]">
                  Lab name <span className="text-[#067A47]">*</span>
                </label>
                <input
                  id="d-lab"
                  name="labName"
                  type="text"
                  required
                  autoComplete="organization"
                  value={formData.labName}
                  onChange={handleChange}
                  className="min-h-[48px] px-3.5 rounded-[12px] border border-[#D6D6D6] bg-white text-[16px] text-[#0A0A0A] focus:outline-none focus:border-[#067A47] focus:ring-1 focus:ring-[#067A47] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="d-phone" className="text-[14px] font-bold text-[#0A0A0A]">
                  Phone <span className="font-medium text-[#5C5C5C]">(optional)</span>
                </label>
                <input
                  id="d-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="min-h-[48px] px-3.5 rounded-[12px] border border-[#D6D6D6] bg-white text-[16px] text-[#0A0A0A] focus:outline-none focus:border-[#067A47] focus:ring-1 focus:ring-[#067A47] transition-all"
                />
              </div>
            </div>

            {/* Role & Lab Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="d-role" className="text-[14px] font-bold text-[#0A0A0A]">
                  Your role
                </label>
                <select
                  id="d-role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="min-h-[48px] px-3 rounded-[12px] border border-[#D6D6D6] bg-white text-[15px] sm:text-[16px] text-[#0A0A0A] focus:outline-none focus:border-[#067A47] focus:ring-1 focus:ring-[#067A47] transition-all cursor-pointer"
                >
                  <option value="Owner / C-suite">Owner / C-suite</option>
                  <option value="Sales or CS manager">Sales or CS manager</option>
                  <option value="Sales representative">Sales representative</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="d-size" className="text-[14px] font-bold text-[#0A0A0A]">
                  Active dentist accounts
                </label>
                <select
                  id="d-size"
                  name="accounts"
                  value={formData.accounts}
                  onChange={handleChange}
                  className="min-h-[48px] px-3 rounded-[12px] border border-[#D6D6D6] bg-white text-[15px] sm:text-[16px] text-[#0A0A0A] focus:outline-none focus:border-[#067A47] focus:ring-1 focus:ring-[#067A47] transition-all cursor-pointer"
                >
                  <option value="Under 100">Under 100</option>
                  <option value="100–300">100–300</option>
                  <option value="300–1,000">300–1,000</option>
                  <option value="1,000+">1,000+</option>
                </select>
              </div>
            </div>

            {/* Improvement Goals Textarea */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="d-msg" className="text-[14px] font-bold text-[#0A0A0A]">
                What would you like to improve?{' '}
                <span className="font-medium text-[#5C5C5C]">(optional)</span>
              </label>
              <textarea
                id="d-msg"
                name="message"
                rows={3}
                placeholder="E.g. reduce dentist churn, increase aligner cross-sells..."
                value={formData.message}
                onChange={handleChange}
                className="p-3.5 rounded-[12px] border border-[#D6D6D6] bg-white text-[16px] text-[#0A0A0A] placeholder-[#999999] focus:outline-none focus:border-[#067A47] focus:ring-1 focus:ring-[#067A47] resize-y transition-all"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-1.5 min-h-[54px] w-full rounded-full bg-[#0A0A0A] hover:bg-[#222222] text-white text-[17px] font-extrabold cursor-pointer transition-colors shadow-sm"
            >
              Book my demo
            </motion.button>

            {/* Privacy Disclaimer */}
            <p className="m-0 text-[13px] text-[#5C5C5C] text-center leading-normal">
              By submitting, you agree to our{' '}
              <a href="#privacy" className="text-[#067A47] hover:underline font-medium">
                privacy policy
              </a>
              . We’ll never share your data.
            </p>
          </motion.form>
        ) : (
          /* Confirmation Success Card */
          <motion.div
            key="success"
            role="status"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28 }}
            className="bg-[#0A0A0A] text-white rounded-[28px] p-8 sm:p-12 flex flex-col gap-5 items-start shadow-[0_40px_70px_-50px_rgba(0,0,0,0.6)]"
          >
            {/* Green Check Icon Badge */}
            <span className="w-14 h-14 rounded-[16px] bg-[#12F095] text-[#0A0A0A] flex items-center justify-center shadow-[0_0_20px_rgba(18,240,149,0.3)]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>

            <h2 className="m-0 text-[28px] sm:text-[32px] font-extrabold tracking-[-0.02em] text-white">
              You’re on the list.
            </h2>

            <p className="m-0 text-[16px] sm:text-[17px] leading-[1.6] text-[#BDBDBD]">
              Our team will email you within one business day to pick a time. In the meantime, see
              what Dental Pulse could be worth to your lab.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/roi"
                  className="inline-block bg-[#12F095] text-[#0A0A0A] font-extrabold text-[15px] sm:text-[16px] px-6 py-3.5 rounded-full hover:bg-[#00df83] transition-colors shadow-sm"
                >
                  Calculate ROI
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleReset}
                className="bg-transparent text-white border border-[#3A3A3A] hover:border-[#666666] font-bold text-[15px] sm:text-[16px] px-6 py-3.5 rounded-full cursor-pointer transition-colors"
              >
                Back to form
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
