import { testimonials } from "@/data/portfolio";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="px-[5%] md:px-[9%] py-16 bg-gray-100 dark:bg-muted"
    >
      <h2 className="section-heading mb-4" data-aos="fade-down">
        {testimonials.heading}{" "}
        <span>{testimonials.headingAccent}</span>
      </h2>
      <p
        className="text-center text-[1.6rem] text-dark/70 dark:text-white/70 mb-12 max-w-3xl mx-auto"
        data-aos="fade-down"
      >
        {testimonials.subtitle}
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {testimonials.items.map((item, index) => (
          <blockquote
            key={`${item.name}-${index}`}
            className="bg-white dark:bg-muted/50 rounded-xl p-6 border border-gray-200 dark:border-white/10 h-full flex flex-col"
          >
            <p className="text-[1.4rem] italic text-dark/90 dark:text-white/90 mb-4 flex-1">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer>
              <p className="text-[1.5rem] font-bold">{item.name}</p>
              <p className="text-[1.3rem] text-dark/60 dark:text-white/60">
                {item.role}
                {"company" in item && item.company ? ` · ${item.company}` : ""}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
