import type { Metadata } from "next";
import WhatISolve from "@/components/WhatISolve";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack and AI engineering services for healthcare, enterprise web, EdTech, CRM, and property platforms.",
};

export default function ServicesPage() {
  return <WhatISolve />;
}
