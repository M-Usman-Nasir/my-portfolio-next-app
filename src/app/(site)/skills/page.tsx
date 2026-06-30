import type { Metadata } from "next";
import TechStack from "@/components/TechStack";
import { techStack } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Skills",
  description: techStack.intro,
};

export default function SkillsPage() {
  return <TechStack />;
}
