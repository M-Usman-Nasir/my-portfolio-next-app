import { experience } from "@/data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-[5%] md:px-[9%] py-16 bg-muted"
    >
      <h2 className="section-heading mb-4" data-aos="fade-down">
        {experience.heading}{" "}
        <span>{experience.headingAccent}</span>
      </h2>
      <p
        className="text-center text-[1.6rem] text-white/70 mb-16 max-w-3xl mx-auto"
        data-aos="fade-down"
      >
        {experience.subtitle}
      </p>

      <div className="max-w-4xl mx-auto space-y-8">
        {experience.items.map((item, index) => (
          <div
            key={`${item.company}-${item.period}`}
            className="bg-dark p-8 rounded-[2rem] border-2 border-dark hover:border-primary transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-[2.2rem] font-bold mb-2">{item.role}</h3>
            <p className="text-[1.5rem] text-primary font-semibold mb-1">
              {item.company} · {item.period}
            </p>
            {item.location && (
              <p className="text-[1.4rem] text-white/60 mb-4">{item.location}</p>
            )}

            {item.workedOn && item.workedOn.length > 0 && (
              <div className="mb-4">
                <p className="text-[1.4rem] font-semibold mb-2">Worked on:</p>
                <ul className="space-y-2">
                  {item.workedOn.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-3 text-[1.4rem] text-white/90"
                    >
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <ul className="space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-[1.4rem] text-white/90"
                  >
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
