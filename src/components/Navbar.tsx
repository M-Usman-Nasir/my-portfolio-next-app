"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/data/portfolio";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full px-[5%] md:px-[9%] py-8 flex justify-between items-center transition-shadow duration-300 ${
        isSticky ? "bg-dark shadow-lg shadow-black/20" : "bg-dark"
      }`}
    >
      <Link href="/" className="text-[2.5rem] font-bold text-white">
        {site.logo}
      </Link>

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
            ? "block absolute top-full left-0 w-full px-[3%] py-4 bg-dark border-t border-black/20 shadow-lg max-h-[70vh] overflow-y-auto"
            : "hidden"
        } md:block md:static md:w-auto md:p-0 md:border-0 md:shadow-none md:max-h-none md:overflow-visible`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`menuLink block md:inline-block md:ml-8 lg:ml-12 ${
              isActive(link.href) ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
