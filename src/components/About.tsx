import Image from "next/image";
import { about } from "@/data/portfolio";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 px-[5%] md:px-[9%] py-16 bg-muted"
    >
      <div className="flex-1 flex justify-center" data-aos="fade-right">
        <Image
          src={about.image}
          alt={about.imageAlt}
          width={500}
          height={500}
          className="w-[90vw] md:w-[35vw] max-w-[500px] rounded-[10%] object-cover"
        />
      </div>

      <div className="flex-1" data-aos="fade-left">
        <h2 className="text-[4.5rem] font-bold text-left leading-tight mb-4">
          {about.heading}{" "}
          <span className="text-primary">{about.headingAccent}</span>
        </h2>
        <h3 className="text-[2.6rem] font-bold mb-4">{about.subtitle}</h3>
        <p className="text-[1.6rem] my-6">{about.description}</p>
        <ul className="space-y-3 mb-8">
          {about.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[1.5rem] text-white/90"
            >
              <span className="text-primary mt-1">▸</span>
              {item}
            </li>
          ))}
        </ul>
        <a href={about.ctaHref} className="btn-primary">
          {about.ctaLabel}
        </a>
      </div>
    </section>
  );
};

export default About;
