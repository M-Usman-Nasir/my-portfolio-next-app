import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import AosInit from "@/components/AosInit";
import "./globals.css";
import "aos/dist/aos.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio | Usman Nasir",
  description:
    "Crafting intuitive, responsive, and performance-driven applications for the web and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} antialiased`}>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
