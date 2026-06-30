import type { Metadata } from "next";
import { Suspense } from "react";
import ProjectsPage from "@/components/ProjectsPage";
import { clientProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: clientProjects.subtitle,
};

export default function ProjectsRoutePage() {
  return (
    <Suspense fallback={<div className="min-h-screen px-[5%] py-16" />}>
      <ProjectsPage />
    </Suspense>
  );
}
