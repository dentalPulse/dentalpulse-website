import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
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
  title: "DentalPulse | See clearly. Grow smarter.",
  description: "Turn everyday lab data into smarter actions and sustainable growth. AI-powered analytics for dental labs.",
  keywords: ["dental lab software", "dental analytics", "dental pulse", "lab data management", "AI dental analytics", "dental lab growth"],
  authors: [{ name: "DentalPulse" }],
  creator: "DentalPulse",
  publisher: "DentalPulse",
  robots: "index, follow",
  alternates: {
    canonical: "https://dentalpulse.com", // Replace with actual URL
  },
  icons: {
    icon: "/Dental_Pulse_Logo_Black.ico",
    apple: "/Dental_Pulse_Logo_Black.ico",
  },
  openGraph: {
    title: "DentalPulse | See clearly. Grow smarter.",
    description: "AI-powered analytics and complete customer intelligence for dental labs.",
    url: "https://dentalpulse.com",
    siteName: "DentalPulse",
    images: [
      {
        url: "/dental_pulse.png",
        width: 732,
        height: 133,
        alt: "DentalPulse",
      }
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
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
