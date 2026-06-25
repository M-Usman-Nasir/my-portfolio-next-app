"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/portfolio";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const offset = el.offsetTop - 150;
        const height = el.offsetHeight;
        const id = section.getAttribute("id");

        if (id && scrollY >= offset && scrollY < offset + height) {
          setActiveSection(id);
        }
      });

      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-[5%] md:px-[9%] py-8 flex justify-between items-center transition-shadow duration-300 ${
        isSticky ? "bg-dark shadow-lg shadow-black/20" : "bg-dark"
      }`}
    >
      <a href="#home" className="text-[2.5rem] font-bold text-white">
        {site.logo}
      </a>

      <button
        type="button"
        className="md:hidden text-[3.6rem] text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      <nav
        className={`${
          menuOpen
            ? "block absolute top-full left-0 w-full px-[3%] py-4 bg-dark border-t border-black/20 shadow-lg"
            : "hidden"
        } md:block md:static md:w-auto md:p-0 md:border-0 md:shadow-none`}
      >
        {navLinks.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.href}
              href={link.href}
              className={`menuLink block md:inline-block md:ml-16 ${
                isActive ? "active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
