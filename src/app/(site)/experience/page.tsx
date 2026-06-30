import type { Metadata } from "next";
import Experience from "@/components/Experience";
import { experience } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description: experience.subtitle,
};

export default function ExperiencePage() {
  return <Experience />;
}
