import type { Metadata } from "next";
import About from "@/components/About";
import { about } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: about.subtitle,
};

export default function AboutPage() {
  return <About />;
}
