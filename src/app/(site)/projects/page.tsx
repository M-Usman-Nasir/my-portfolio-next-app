import type { Metadata } from "next";
import { Suspense } from "react";
import ProjectsPage from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Usman Nasir",
};

export default function ProjectsRoutePage() {
  return (
    <Suspense fallback={<div className="min-h-screen px-[5%] py-16" />}>
      <ProjectsPage />
    </Suspense>
  );
}
