import { LearningProjectItem } from "@/data/portfolio";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

interface LearningProjectCardProps {
  project: LearningProjectItem;
  index?: number;
}

const LearningProjectCard = ({
  project,
  index = 0,
}: LearningProjectCardProps) => {
  const visibleStack = project.stack.slice(0, 3);
  const hasGithub = Boolean(project.githubUrl);
  const hasDemo = Boolean(project.url);

  return (
    <div
      className="flex flex-col rounded-xl p-4 bg-muted/50 border border-white/10 h-full"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <h4 className="text-[1.6rem] font-bold mb-2 leading-tight">
        {project.title}
      </h4>

      <div className="flex flex-wrap gap-2 mb-3">
        {visibleStack.map((tag) => (
          <span key={tag} className="tag-stack text-[1.1rem] px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>

      {(hasGithub || hasDemo) && (
        <div className="mt-auto flex items-center gap-3 pt-2">
          {hasGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="inline-flex items-center gap-2 text-[1.3rem] text-primary hover:underline"
            >
              <FaGithub />
              GitHub
            </a>
          )}
          {hasDemo && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} demo`}
              className="inline-flex items-center gap-2 text-[1.3rem] text-white/80 hover:text-primary"
            >
              Demo
              <FaArrowUpRightFromSquare className="text-[1.2rem]" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default LearningProjectCard;
