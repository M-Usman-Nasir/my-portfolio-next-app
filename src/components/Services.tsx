import { services } from "@/data/portfolio";
import { FaAndroid, FaCode, FaPalette } from "react-icons/fa6";

const iconMap = {
  code: FaCode,
  palette: FaPalette,
  android: FaAndroid,
};

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen px-[5%] md:px-[9%] py-16"
    >
      <h2
        className="section-heading mb-20"
        data-aos="fade-down"
      >
        {services.heading}{" "}
        <span>{services.headingAccent}</span>
      </h2>

      <div
        className="flex flex-wrap justify-center items-stretch gap-8"
        data-aos="fade-up"
      >
        {services.items.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];

          return (
            <div
              key={service.title}
              className="flex-1 min-w-[28rem] max-w-[40rem] bg-muted p-8 pb-16 rounded-[2rem] text-center border-2 border-dark transition-all duration-500 hover:border-primary hover:scale-[1.02]"
            >
              <Icon className="text-[7rem] text-primary mx-auto mb-4" />
              <h3 className="text-[2.6rem] font-bold mb-4">{service.title}</h3>
              <p className="text-[1.6rem] mb-8">{service.description}</p>
              <a href="#contact" className="btn-primary">
                Explore
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
