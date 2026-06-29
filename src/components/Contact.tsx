"use client";

import { FormEvent } from "react";
import { contact, socialLinks } from "@/data/portfolio";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const linkedIn = socialLinks.find((s) => s.icon === "linkedin");
  const github = socialLinks.find((s) => s.icon === "github");

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

      <div
        className="flex flex-wrap justify-center gap-8 mb-12"
        data-aos="fade-up"
      >
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 text-[1.6rem] text-white hover:text-primary transition-colors"
          >
            <FaEnvelope className="text-[2.4rem] text-primary" />
            {contact.email}
          </a>
        )}
        {linkedIn && (
          <a
            href={linkedIn.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[1.6rem] text-white hover:text-primary transition-colors"
          >
            <FaLinkedinIn className="text-[2.4rem] text-primary" />
            LinkedIn
          </a>
        )}
        {github && (
          <a
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[1.6rem] text-white hover:text-primary transition-colors"
          >
            <FaGithub className="text-[2.4rem] text-primary" />
            GitHub
          </a>
        )}
      </div>

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
