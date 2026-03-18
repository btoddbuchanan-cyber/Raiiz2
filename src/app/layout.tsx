import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "RAIIZ Innovations | The Agentic Interface for Construction",
    template: "%s | RAIIZ Innovations",
  },
  description:
    "RAIIZ is the unifying AI platform for the $16.5T construction industry — aligning architects, engineers, government incentives, and production-line logic into high-velocity workflows.",
  keywords: [
    "construction technology",
    "AI platform",
    "sustainable building",
    "construction innovation",
    "green building",
    "agentic AI",
  ],
  authors: [{ name: "RAIIZ Innovations Inc." }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "RAIIZ Innovations",
    title: "RAIIZ Innovations | The Agentic Interface for Construction",
    description:
      "One Platform. Total Market Alignment. The Catalyst for Performance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAIIZ Innovations",
    description:
      "The Agentic Interface for the $16.5T Construction Industry",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RAIIZ Innovations Inc.",
    url: "https://raiiz2.vercel.app",
    description:
      "The agentic interface for the $16.5T construction industry.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25th Floor, 700 West Georgia St.",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      postalCode: "V7Y 1K8",
      addressCountry: "CA",
    },
    telephone: "+1-236-900-2006",
    sameAs: [
      "https://www.linkedin.com/company/raiiz-innovations",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${outfit.variable} antialiased bg-bg-primary text-text-primary`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
