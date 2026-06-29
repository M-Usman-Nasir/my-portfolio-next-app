import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Usman Nasir",
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
