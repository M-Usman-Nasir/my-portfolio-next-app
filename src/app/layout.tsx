import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import AosInit from "@/components/AosInit";
import { site } from "@/data/portfolio";
import "./globals.css";
import "aos/dist/aos.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "Full-Stack Engineer",
    "AI Engineer",
    "Next.js Developer",
    "Freelance Developer",
    "Usman Nasir",
    "Mohammad Usman Nasir",
    "Healthcare Software",
    "CRM Developer",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
    creator: site.twitterHandle,
  },
  icons: {
    icon: "/brand/favicon.ico",
    apple: "/brand/apple-icon.png",
  },
};

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${nunito.variable} antialiased`}>
        <AosInit />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
