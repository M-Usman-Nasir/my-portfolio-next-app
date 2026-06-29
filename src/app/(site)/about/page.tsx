import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Usman Nasir",
};

export default function AboutPage() {
  return <About />;
}
