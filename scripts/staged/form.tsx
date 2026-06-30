"use client";

import { FormEvent, useState } from "react";
import { contact, hero, socialLinks } from "@/data/portfolio";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

type FormStatus = "idle" | "submitting" | "success" | "error";
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(contact.formConfigWarning);
      return;
    }
    setStatus("submitting");
    setErrorMessage("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = (await response.json()) as { success?: boolean; message?: string };
      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
        return;
      }
      setStatus("error");
      setErrorMessage(result.message ?? contact.formErrorMessage);
    } catch {
      setStatus("error");
      setErrorMessage(contact.formErrorMessage);
    }
  };

  const linkedIn = socialLinks.find((s) => s.icon === "linkedin");
  const github = socialLinks.find((s) => s.icon === "github");

  return (
    <section id="contact" className="min-h-screen px-[5%] md:px-[9%] py-16">
      <h2 className="section-heading mb-4" data-aos="fade-down">
        {contact.heading} <span>{contact.headingAccent}</span>
      </h2>
      <p className="text-center text-[1.6rem] text-dark/70 dark:text-white/70 mb-12 max-w-[70rem] mx-auto" data-aos="fade-down">{contact.subtitle}</p>
      <div className="flex flex-wrap justify-center gap-8 mb-12" data-aos="fade-up">
        {contact.email && (
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 text-[1.6rem] text-dark dark:text-white hover:text-primary transition-colors">
            <FaEnvelope className="text-[2.4rem] text-primary" />{contact.email}
          </a>
        )}
        {linkedIn && (
          <a href={linkedIn.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[1.6rem] text-dark dark:text-white hover:text-primary transition-colors">
            <FaLinkedinIn className="text-[2.4rem] text-primary" />LinkedIn
          </a>
        )}
        {github && (
          <a href={github.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[1.6rem] text-dark dark:text-white hover:text-primary transition-colors">
            <FaGithub className="text-[2.4rem] text-primary" />GitHub
          </a>
        )}
        <a href={hero.cvPath} download className="inline-flex items-center gap-3 text-[1.6rem] text-dark dark:text-white hover:text-primary transition-colors">Download Resume</a>
      </div>
      {!accessKey && <p className="max-w-[70rem] mx-auto mb-6 text-center text-[1.4rem] text-amber-600 dark:text-amber-400" role="status">{contact.formConfigWarning}</p>}
      <form onSubmit={handleSubmit} className="max-w-[70rem] mx-auto text-center" data-aos="fade-up">
        <input type="hidden" name="access_key" value={accessKey ?? ""} />
        <div className="flex flex-wrap justify-between gap-4">
          <input type="text" name="name" placeholder={contact.fields.fullName} required disabled={status === "submitting"} className="w-full md:w-[49%] p-6 text-[1.6rem] text-dark dark:text-white bg-gray-100 dark:bg-muted rounded-lg my-3 border border-gray-200 dark:border-transparent disabled:opacity-60" />
          <input type="email" name="email" placeholder={contact.fields.email} required disabled={status === "submitting"} className="w-full md:w-[49%] p-6 text-[1.6rem] text-dark dark:text-white bg-gray-100 dark:bg-muted rounded-lg my-3 border border-gray-200 dark:border-transparent disabled:opacity-60" />
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <input type="tel" name="phone" placeholder={contact.fields.phone} disabled={status === "submitting"} className="w-full md:w-[49%] p-6 text-[1.6rem] text-dark dark:text-white bg-gray-100 dark:bg-muted rounded-lg my-3 border border-gray-200 dark:border-transparent disabled:opacity-60" />
          <input type="text" name="subject" placeholder={contact.fields.subject} disabled={status === "submitting"} className="w-full md:w-[49%] p-6 text-[1.6rem] text-dark dark:text-white bg-gray-100 dark:bg-muted rounded-lg my-3 border border-gray-200 dark:border-transparent disabled:opacity-60" />
        </div>
        <textarea name="message" rows={10} placeholder={contact.fields.message} required disabled={status === "submitting"} className="w-full p-6 text-[1.6rem] text-dark dark:text-white bg-gray-100 dark:bg-muted rounded-lg my-3 resize-none border border-gray-200 dark:border-transparent disabled:opacity-60" />
        <input type="submit" value={status === "submitting" ? contact.submittingLabel : contact.submitLabel} disabled={status === "submitting" || !accessKey} className="btn-primary mt-8 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed" />
        {status === "success" && <p className="mt-6 text-[1.6rem] text-green-600 dark:text-green-400" role="status">{contact.formSuccessMessage}</p>}
        {status === "error" && <p className="mt-6 text-[1.6rem] text-red-600 dark:text-red-400" role="alert">{errorMessage || contact.formErrorMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
