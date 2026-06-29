import Link from "next/link";
import { whatISolve } from "@/data/portfolio";
import {
  FaBuilding,
  FaDumbbell,
  FaGraduationCap,
  FaHeartPulse,
  FaHouseChimney,
} from "react-icons/fa6";

const iconMap = {
  healthcare: FaHeartPulse,
  enterprise: FaBuilding,
  edtech: FaGraduationCap,
  crm: FaDumbbell,
  property: FaHouseChimney,
};

const WhatISolve = () => {
  return (
    <section id="services" className="min-h-screen px-[5%] md:px-[9%] py-16">
      <h2 className="section-heading mb-20" data-aos="fade-down">
        {whatISolve.heading}{" "}
        <span>{whatISolve.headingAccent}</span>
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {whatISolve.items.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <div
              key={item.title}
              className="bg-muted p-8 pb-12 rounded-[2rem] border-2 border-dark transition-all duration-500 hover:border-primary hover:scale-[1.02]"
            >
              <Icon className="text-[5rem] text-primary mb-4" />
              <h3 className="text-[2.2rem] font-bold mb-3">{item.title}</h3>
              <p className="text-[1.5rem] mb-4 text-white/90">{item.problem}</p>
              <p className="text-[1.3rem] text-primary/80 mb-6">
                e.g. {item.relatedProject}
              </p>
              <Link href="/projects" className="btn-primary">
                See Projects
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatISolve;
