import type { Metadata } from "next";
import TechStack from "@/components/TechStack";

export const metadata: Metadata = {
  title: "Skills | Usman Nasir",
};

export default function SkillsPage() {
  return <TechStack />;
}
