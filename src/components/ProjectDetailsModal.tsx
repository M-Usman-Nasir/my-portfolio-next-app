"use client";

import { useEffect } from "react";
import { ProjectItem } from "@/data/portfolio";
import { FaArrowUpRightFromSquare, FaLayerGroup, FaXmark } from "react-icons/fa6";

interface ProjectDetailsModalProps {
  project: ProjectItem;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal = ({
  project,
  isOpen,
  onClose,
}: ProjectDetailsModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const titleId = `project-modal-title-${project.title.replace(/\s+/g, "-")}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close project details"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-dark rounded-[2rem] border-2 border-white/10 shadow-[0_0_2rem_#191f36] p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-[2.4rem] text-white/70 hover:text-white transition-colors"
          aria-label="Close"
        >
          <FaXmark />
        </button>

        {project.domain && (
          <span className="tag-stack w-fit mb-3">{project.domain}</span>
        )}
        <h2 id={titleId} className="text-[2.8rem] font-bold mb-6 pr-10 leading-tight">
          {project.title}
        </h2>

        {project.problem && (
          <section className="mb-5">
            <h3 className="text-[1.5rem] font-bold text-primary mb-2">Problem</h3>
            <p className="text-[1.4rem] opacity-90">{project.problem}</p>
          </section>
        )}

        {project.outcome && (
          <section className="mb-5">
            <h3 className="text-[1.5rem] font-bold text-primary mb-2">Solution</h3>
            <p className="text-[1.4rem] opacity-90">{project.outcome}</p>
          </section>
        )}

        {project.role && (
          <section className="mb-5">
            <h3 className="text-[1.5rem] font-bold text-primary mb-2">My Role</h3>
            <p className="text-[1.4rem] opacity-90">{project.role}</p>
          </section>
        )}

        {project.contribution && project.contribution.length > 0 && (
          <section className="mb-5">
            <h3 className="text-[1.5rem] font-bold text-primary mb-2">
              Contribution
            </h3>
            <ul className="space-y-2">
              {project.contribution.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[1.4rem] opacity-90"
                >
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.scope && (
          <section className="mb-6">
            <h3 className="text-[1.5rem] font-bold text-primary mb-2">Scope</h3>
            <p className="flex items-center gap-2 text-[1.4rem] opacity-90">
              <FaLayerGroup className="shrink-0 text-primary" />
              {project.scope}
            </p>
          </section>
        )}

        <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10">
          {project.status === "live" && project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full text-muted text-[1.4rem] font-semibold transition-transform duration-300 hover:scale-105"
            >
              {project.ctaLabel ?? "View Live"}
              <FaArrowUpRightFromSquare />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center px-5 py-3 rounded-full border-2 border-white/20 text-[1.4rem] font-semibold hover:border-primary transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
