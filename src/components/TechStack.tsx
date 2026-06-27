import { techStack } from "@/data/portfolio";

const TechStack = () => {
  return (
    <section
      id="stack"
      className="min-h-screen px-[5%] md:px-[9%] py-16 bg-muted"
    >
      <h2 className="section-heading mb-4" data-aos="fade-down">
        {techStack.heading}{" "}
        <span>{techStack.headingAccent}</span>
      </h2>
      <p
        className="text-center text-[1.6rem] text-white/70 mb-16"
        data-aos="fade-down"
      >
        {techStack.intro}
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        data-aos="fade-up"
      >
        {techStack.categories.map((category) => (
          <div
            key={category.label}
            className="bg-dark p-6 rounded-[2rem] border-2 border-dark hover:border-primary transition-colors duration-300"
          >
            <h3 className="text-[2rem] font-bold mb-4 text-primary">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span key={item} className="tag-stack">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
