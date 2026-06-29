import Image from "next/image";
import {
  PersonalProjectItem,
  projectPlaceholderImage,
} from "@/data/portfolio";
import { FaArrowUpRightFromSquare, FaLayerGroup } from "react-icons/fa6";

interface PersonalProjectCardProps {
  project: PersonalProjectItem;
  index?: number;
}

const statusConfig = {
  live: { label: "Live", className: "badge-live" },
  "coming-soon": { label: "Coming Soon", className: "badge-soon" },
};

const PersonalProjectCard = ({
  project,
  index = 0,
}: PersonalProjectCardProps) => {
  const badge = statusConfig[project.status];
  const imageSrc = project.image ?? projectPlaceholderImage;

  return (
    <div
      className="flex flex-col rounded-[2rem] overflow-hidden shadow-[0_0_1rem_#191f36] bg-dark h-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="relative p-4 md:p-5 pb-0">
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted/40 border border-white/10">
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            className="object-contain object-center p-2"
          />
        </div>
        <span
          className={`absolute top-7 right-7 md:top-8 md:right-8 z-10 ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6 pt-4">
        {project.domain && (
          <span className="tag-stack w-fit mb-2">{project.domain}</span>
        )}
        <h4 className="text-[2.4rem] font-bold mb-2 leading-tight">
          {project.title}
        </h4>
        <p className="text-[1.4rem] font-semibold text-primary mb-2">
          {project.problem}
        </p>
        <p className="text-[1.4rem] mb-3 opacity-90">{project.description}</p>

        <div className="mb-3">
          <p className="text-[1.3rem] font-semibold mb-2 opacity-95">Features</p>
          <ul className="list-disc list-inside text-[1.3rem] opacity-90 space-y-1">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <p className="flex items-start gap-2 text-[1.3rem] text-primary mb-4">
          <FaLayerGroup className="shrink-0 mt-1" />
          <span>{project.architecture}</span>
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tag) => (
            <span key={tag} className="tag-stack">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3">
          {project.status === "live" && project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full text-muted text-[1.4rem] font-semibold transition-transform duration-300 hover:scale-105"
            >
              View Live
              <FaArrowUpRightFromSquare />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectCard;
