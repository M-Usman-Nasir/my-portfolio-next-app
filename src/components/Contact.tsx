"use client";

import { FormEvent } from "react";
import { contact } from "@/data/portfolio";

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-[5%] md:px-[9%] py-16"
    >
      <h2
        className="section-heading mb-4"
        data-aos="fade-down"
      >
        {contact.heading}{" "}
        <span>{contact.headingAccent}</span>
      </h2>
      <p
        className="text-center text-[1.6rem] text-white/70 mb-12 max-w-[70rem] mx-auto"
        data-aos="fade-down"
      >
        {contact.subtitle}
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-[70rem] mx-auto text-center"
        data-aos="fade-up"
      >
        <div className="flex flex-wrap justify-between gap-4">
          <input
            type="text"
            placeholder={contact.fields.fullName}
            required
            className="w-full md:w-[49%] p-6 text-[1.6rem] text-white bg-muted rounded-lg my-3"
          />
          <input
            type="email"
            placeholder={contact.fields.email}
            required
            className="w-full md:w-[49%] p-6 text-[1.6rem] text-white bg-muted rounded-lg my-3"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <input
            type="tel"
            placeholder={contact.fields.phone}
            className="w-full md:w-[49%] p-6 text-[1.6rem] text-white bg-muted rounded-lg my-3"
          />
          <input
            type="text"
            placeholder={contact.fields.subject}
            className="w-full md:w-[49%] p-6 text-[1.6rem] text-white bg-muted rounded-lg my-3"
          />
        </div>
        <textarea
          rows={10}
          placeholder={contact.fields.message}
          required
          className="w-full p-6 text-[1.6rem] text-white bg-muted rounded-lg my-3 resize-none"
        />
        <input
          type="submit"
          value={contact.submitLabel}
          className="btn-primary mt-8 cursor-pointer"
        />
      </form>
    </section>
  );
};

export default Contact;
