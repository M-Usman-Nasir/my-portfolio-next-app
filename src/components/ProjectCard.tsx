import Image from "next/image";
import { ProjectItem } from "@/data/portfolio";
import { FaArrowUpRightFromSquare, FaLayerGroup } from "react-icons/fa6";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
  muted?: boolean;
}

const statusConfig = {
  live: { label: "Live", className: "badge-live" },
  "demo-on-request": { label: "Demo on Request", className: "badge-demo" },
  "coming-soon": { label: "Coming Soon", className: "badge-soon" },
};

const ProjectCard = ({ project, index = 0, muted = false }: ProjectCardProps) => {
  const badge = statusConfig[project.status];
  const initial = project.title.charAt(0).toUpperCase();
  const visibleStack = project.stack.slice(0, 3);

  return (
    <div
      className={`group relative rounded-[2rem] overflow-hidden shadow-[0_0_1rem_#191f36] ${
        muted ? "opacity-90" : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="relative aspect-[4/3] w-full">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top opacity-70 transition-opacity duration-500 group-hover:opacity-50"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-muted to-dark">
            <span className="text-[8rem] font-bold text-primary/40">{initial}</span>
          </div>
        )}
        <span
          className={`absolute top-4 right-4 z-10 ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-dark via-dark/90 to-transparent translate-y-[calc(100%-8rem)] group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-[2.4rem] font-bold mb-2 leading-tight">
          {project.title}
        </h4>
        <p className="text-[1.4rem] mb-3 line-clamp-3 opacity-90">
          {project.description}
        </p>

        {project.scope && (
          <p className="flex items-center gap-2 text-[1.3rem] text-primary mb-3">
            <FaLayerGroup className="shrink-0" />
            {project.scope}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {visibleStack.map((tag) => (
            <span key={tag} className="tag-stack">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.status === "live" && project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full text-muted text-[1.4rem] font-semibold transition-transform duration-300 hover:scale-105"
            >
              {project.ctaLabel ?? "View Live"}
              <FaArrowUpRightFromSquare />
            </a>
          )}

          {project.status === "demo-on-request" && (
            <>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary rounded-full text-dark text-[1.4rem] font-semibold transition-transform duration-300 hover:scale-105"
              >
                {project.ctaLabel ?? "Request Demo"}
              </a>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="inline-flex justify-center items-center w-12 h-12 bg-white rounded-full text-muted text-[1.6rem] transition-transform duration-300 hover:scale-110"
                >
                  <FaArrowUpRightFromSquare />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
