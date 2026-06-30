import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { contact } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.subtitle,
};

export default function ContactPage() {
  return <Contact />;
}
