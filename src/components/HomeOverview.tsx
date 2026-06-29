import Link from "next/link";
import { clientProjects, navLinks } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

const exploreLinks = navLinks.filter((link) => link.href !== "/");

const HomeOverview = () => {
  const featuredProjects = clientProjects.items.slice(0, 3);

  return (
    <section className="px-[5%] md:px-[9%] py-16 bg-muted">
      <h2 className="section-heading mb-4" data-aos="fade-down">
        Explore{" "}
        <span>Portfolio</span>
      </h2>
      <p
        className="text-center text-[1.6rem] text-white/70 mb-12 max-w-3xl mx-auto"
        data-aos="fade-down"
      >
        An overview of my work, skills, experience, and how to get in touch.
      </p>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16"
        data-aos="fade-up"
      >
        {exploreLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-dark p-5 rounded-xl border-2 border-dark hover:border-primary transition-colors duration-300 text-center text-[1.5rem] font-semibold"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div data-aos="fade-up">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 max-w-6xl mx-auto">
          <h3 className="text-[2.4rem] font-bold">
            Featured{" "}
            <span className="text-primary">Client Work</span>
          </h3>
          <Link href="/projects" className="btn-primary">
            View all projects
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOverview;
