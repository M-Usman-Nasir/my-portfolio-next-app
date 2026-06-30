import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import { testimonials } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Testimonials",
  description: testimonials.subtitle,
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
