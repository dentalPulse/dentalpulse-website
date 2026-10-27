import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookDemoLeft } from '@/components/book-demo/BookDemoLeft';
import { BookDemoForm } from '@/components/book-demo/BookDemoForm';

export const metadata: Metadata = {
  title: 'Dental Pulse | Book a Demo',
  description:
    'See your dental lab’s customers clearly in 30 minutes. Schedule a tailored walkthrough with the Dental Pulse team.',
  openGraph: {
    title: 'Dental Pulse | Book a Demo',
    description:
      'See your dental lab’s customers clearly in 30 minutes. Schedule a tailored walkthrough with the Dental Pulse team.',
    url: 'https://dentalpulse.com/book-demo',
  },
};

export default function BookDemoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A0A0A]">
      <Header />
      <main className="flex-1 py-16 sm:py-20 lg:py-24 px-6">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-14 justify-between items-start">
          <BookDemoLeft />
          <BookDemoForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
