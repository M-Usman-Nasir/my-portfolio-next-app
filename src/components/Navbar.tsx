"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/data/portfolio";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [logoError, setLogoError] = useState(false);

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
      className={`sticky top-0 z-50 w-full px-[5%] md:px-[9%] py-8 flex justify-between items-center transition-shadow duration-300 bg-white/95 dark:bg-dark ${
        isSticky ? "shadow-lg shadow-black/10 dark:shadow-black/20" : ""
      }`}
    >
      <Link href="/" className="inline-flex items-center gap-3 text-dark dark:text-white">
        {site.logoImage && !logoError ? (
          <Image
            src={site.logoImage}
            alt={site.logo}
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
            onError={() => setLogoError(true)}
          />
        ) : (
          <span className="text-[2.5rem] font-bold">{site.logo}</span>
        )}
      </Link>

      <div className="flex items-center md:hidden">
        <ThemeToggle />
        <button
          type="button"
          className="text-[3.6rem] text-dark dark:text-white ml-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <nav
        className={`${
          menuOpen
            ? "block absolute top-full left-0 w-full px-[3%] py-4 bg-white dark:bg-dark border-t border-gray-200 dark:border-black/20 shadow-lg max-h-[70vh] overflow-y-auto"
            : "hidden"
        } md:flex md:static md:w-auto md:p-0 md:border-0 md:shadow-none md:max-h-none md:overflow-visible md:items-center`}
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
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
