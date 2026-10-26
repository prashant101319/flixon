import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import Providers from "@/components/Providers";
import { site } from "@/config/site";
import { founder } from "@/data/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Cloud, AI & Mobile App Development Company`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "cloud consulting",
    "AWS migration",
    "AI development company",
    "generative AI",
    "AI agents",
    "mobile app development",
    "Flutter app development",
    "Next.js development",
    "IT services India",
    site.name,
  ],
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Cloud, AI & Mobile App Development`,
    description: site.description,
    url: site.url,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060a13",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    foundingDate: String(site.founded),
    founder: { "@type": "Person", name: founder.name, jobTitle: founder.role, ...(founder.linkedin ? { sameAs: founder.linkedin } : {}) },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.pincode,
      addressCountry: "IN",
    },
    sameAs: Object.values(site.social),
  };

  return (
    <html lang="en-IN" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-ink font-sans text-slate-300 antialiased">
        <a href="#main" className="sr-only z-[100] rounded-full bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
