import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
import { blog } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Blog",
  description: blog.subtitle,
};

export default function BlogPage() {
  return <BlogList />;
}
