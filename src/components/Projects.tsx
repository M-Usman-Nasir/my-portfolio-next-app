import {
  clientProjects,
  personalProjects,
  projects,
  ProjectItem,
} from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  items: ProjectItem[];
  columns?: string;
}

const ProjectGrid = ({
  items,
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}: ProjectGridProps) => (
  <div className={`grid ${columns} gap-10`}>
    {items.map((project, index) => (
      <ProjectCard
        key={project.title}
        project={project}
        index={index}
      />
    ))}
  </div>
);

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen px-[5%] md:px-[9%] py-16"
    >
      <h2 className="section-heading mb-20" data-aos="fade-down">
        {projects.heading}{" "}
        <span>{projects.headingAccent}</span>
      </h2>

      <div id="client-work" className="mb-20">
        <h3
          className="text-[3.2rem] font-bold text-center mb-4"
          data-aos="fade-down"
        >
          {clientProjects.heading}{" "}
          <span className="text-primary">{clientProjects.headingAccent}</span>
        </h3>
        <ProjectGrid items={clientProjects.items} />
      </div>

      <div id="personal-projects">
        <h3
          className="text-[3.2rem] font-bold text-center mb-2"
          data-aos="fade-down"
        >
          {personalProjects.heading}{" "}
          <span className="text-primary">{personalProjects.headingAccent}</span>
        </h3>
        {personalProjects.subtitle && (
          <p
            className="text-center text-[1.6rem] text-white/60 mb-10"
            data-aos="fade-down"
          >
            {personalProjects.subtitle}
          </p>
        )}
        <ProjectGrid
          items={personalProjects.items}
          columns="grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Projects;
