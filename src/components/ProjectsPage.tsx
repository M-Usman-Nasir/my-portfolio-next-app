"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  clientProjects,
  learningProjects,
  personalProjects,
  projects,
} from "@/data/portfolio";
import LearningProjectCard from "./LearningProjectCard";
import PersonalProjectCard from "./PersonalProjectCard";
import ProjectCard from "./ProjectCard";

type ProjectFilter = "all" | "client" | "personal" | "learning";

const filters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "client", label: "Client Projects" },
  { id: "personal", label: "Personal Projects" },
  { id: "learning", label: "Learning Projects" },
];

const isValidFilter = (value: string | null): value is ProjectFilter =>
  value === "all" ||
  value === "client" ||
  value === "personal" ||
  value === "learning";

const ProjectsPage = () => {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [filter, setFilter] = useState<ProjectFilter>("all");

  useEffect(() => {
    if (isValidFilter(filterParam)) {
      setFilter(filterParam);
    }
  }, [filterParam]);

  return (
    <section className="min-h-screen px-[5%] md:px-[9%] py-16">
      <h2 className="section-heading mb-8" data-aos="fade-down">
        {projects.heading}{" "}
        <span>{projects.headingAccent}</span>
      </h2>

      <div
        className="flex flex-wrap justify-center gap-3 mb-12"
        data-aos="fade-down"
      >
        {filters.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilter(tab.id)}
            className={`px-5 py-2 rounded-full text-[1.4rem] font-semibold border-2 transition-colors duration-300 ${
              filter === tab.id
                ? "border-primary bg-primary/20 text-primary"
                : "border-gray-300 dark:border-white/20 text-dark/80 dark:text-white/80 hover:border-primary/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {(filter === "all" || filter === "client") && (
        <div className={filter === "all" ? "mb-16" : ""}>
          {filter === "all" && (
            <p className="text-[1.4rem] text-primary font-semibold mb-6 text-center">
              Client Projects
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {clientProjects.items.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      )}

      {(filter === "all" || filter === "personal") && (
        <div className={filter === "all" ? "mb-16" : ""}>
          {filter === "all" && (
            <p className="text-[1.4rem] text-primary font-semibold mb-6 text-center">
              Personal Projects
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {personalProjects.items.map((project, index) => (
              <PersonalProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      )}

      {(filter === "all" || filter === "learning") && (
        <div>
          {filter === "all" && (
            <p className="text-[1.4rem] text-primary font-semibold mb-6 text-center">
              Learning Projects
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {learningProjects.items.map((project, index) => (
              <LearningProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
