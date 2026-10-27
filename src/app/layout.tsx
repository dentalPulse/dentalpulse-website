import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { organizationSchema, websiteSchema } from "@/data/seoData";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dentalpulse.com"),
  title: {
    default: "DentalPulse | See clearly. Grow smarter.",
    template: "%s | DentalPulse",
  },
  description: "Turn everyday lab data into smarter actions and sustainable growth. AI-powered analytics and customer intelligence for dental labs.",
  keywords: [
    "dental lab software",
    "dental lab CRM",
    "dental analytics",
    "dental pulse",
    "lab data management",
    "AI dental analytics",
    "dental lab growth",
    "lab management software",
  ],
  authors: [{ name: "DentalPulse" }],
  creator: "DentalPulse",
  publisher: "DentalPulse",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dentalpulse.com",
  },
  icons: {
    icon: "/Dental_Pulse_Logo_Black.ico",
    apple: "/Dental_Pulse_Logo_Black.ico",
  },
  openGraph: {
    title: "DentalPulse | See clearly. Grow smarter.",
    description: "AI-powered customer intelligence and automated growth playbooks for dental laboratories.",
    url: "https://dentalpulse.com",
    siteName: "DentalPulse",
    images: [
      {
        url: "/dental_pulse.png",
        width: 732,
        height: 133,
        alt: "DentalPulse Customer Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalPulse | See clearly. Grow smarter.",
    description: "Turn everyday lab data into smarter actions and sustainable growth.",
    images: ["/dental_pulse.png"],
    creator: "@DentalPulse",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Schema.org Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Schema.org WebSite Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {/* Skip to Content for WCAG 2.1 AA Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-[#12F095] focus:text-black focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global Persistent Navigation Header */}
        <Header />

        {/* Semantic Main Content Container */}
        <main id="main-content" className="flex-1 w-full flex flex-col">
          {children}
        </main>

        {/* Global Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}
