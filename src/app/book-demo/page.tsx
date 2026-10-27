import React from 'react';
import type { Metadata } from 'next';
import { BookDemoLeft } from '@/components/book-demo/BookDemoLeft';
import { BookDemoForm } from '@/components/book-demo/BookDemoForm';

export const metadata: Metadata = {
  title: 'Book a 30-Minute Lab Demo | DentalPulse',
  description:
    'See your dental lab’s customers clearly in 30 minutes. Schedule a tailored walkthrough with the Dental Pulse team.',
  alternates: {
    canonical: 'https://dentalpulse.com/book-demo',
  },
  openGraph: {
    title: 'Book a 30-Minute Lab Demo | DentalPulse',
    description:
      'See your dental lab’s customers clearly in 30 minutes. Schedule a tailored walkthrough with the Dental Pulse team.',
    url: 'https://dentalpulse.com/book-demo',
  },
};

export default function BookDemoPage() {
  return (
    <div className="flex-1 w-full py-12 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white text-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 justify-between items-start">
        <BookDemoLeft />
        <BookDemoForm />
      </div>
    </div>
  );
}
