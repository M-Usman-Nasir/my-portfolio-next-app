"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { hero, socialLinks } from "@/data/portfolio";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socialIconMap = {
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    let typedInstance: { destroy: () => void } | undefined;

    void import("typed.js").then(({ default: Typed }) => {
      if (!typedRef.current) return;

      typedInstance = new Typed(typedRef.current, {
        strings: hero.typedStrings,
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
      });
    });

    return () => typedInstance?.destroy();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 px-[5%] md:px-[9%] py-16"
    >
      <div
        className="flex-1 order-2 md:order-1 text-center md:text-left"
        data-aos="fade-down"
      >
        <h3 className="text-[2.6rem] md:text-[3.2rem] font-bold">
          {hero.greeting}
        </h3>
        <h1 className="text-[5rem] md:text-[5.6rem] font-bold leading-tight">
          {hero.name}
        </h1>
        <h3 className="text-[2.6rem] md:text-[3.2rem] font-bold mb-8">
          {hero.rolePrefix}{" "}
          <span className="text-primary">
            <span ref={typedRef} />
          </span>
        </h3>
        <p className="text-[1.6rem] mb-4">{hero.bio}</p>
        <p className="text-[1.5rem] text-dark/80 dark:text-white/80 mb-4">{hero.tagline}</p>

        <div className="flex justify-center md:justify-start gap-4 my-8">
          {socialLinks.map((social) => {
            const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex justify-center items-center w-16 h-16 border-2 border-primary rounded-full text-[2rem] text-primary transition-all duration-500 hover:bg-primary hover:text-muted hover:shadow-[0_0_1rem_#5982f4]"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <a href={hero.cvPath} className="btn-primary" download target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </div>

      <div
        className="flex-1 order-1 md:order-2 flex justify-center"
        data-aos="fade-up"
      >
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          width={400}
          height={400}
          priority
          className="w-[70vw] md:w-[25vw] max-w-[400px] rounded-[10%] p-1 shadow-[0_0_15px_rgba(255,255,255,0.5)] object-cover animate-float"
        />
      </div>
    </section>
  );
};

export default Hero;
