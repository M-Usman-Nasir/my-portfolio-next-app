"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/data/portfolio";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa6";
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full px-[5%] md:px-[9%] py-4 md:py-8 flex justify-between items-center transition-shadow duration-300 bg-white/95 dark:bg-dark backdrop-blur-sm ${
        isSticky ? "shadow-lg shadow-black/10 dark:shadow-black/20" : ""
      }`}
    >
      <Link href="/" className="inline-flex items-center gap-3 text-dark dark:text-white">
        {site.logoImage && !logoError ? (
          <>
            <Image
              src={site.logoImage}
              alt=""
              aria-hidden
              width={48}
              height={48}
              className="h-11 w-11 shrink-0"
              priority
              onError={() => setLogoError(true)}
            />
            <span className="text-[2.2rem] md:text-[2.5rem] font-bold leading-none">
              {site.logo}
            </span>
          </>
        ) : (
          <span className="text-[2.5rem] font-bold">{site.logo}</span>
        )}
      </Link>

      <div className="flex items-center md:hidden">
        <ThemeToggle />
        <button
          type="button"
          className="inline-flex items-center justify-center w-12 h-12 ml-2 rounded-xl border border-gray-200 dark:border-white/15 text-[2.8rem] text-dark dark:text-white transition-colors hover:border-primary hover:text-primary"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-[7.2rem] z-40 bg-black/40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <nav
        className={
          menuOpen
            ? "flex md:hidden flex-col gap-2 fixed inset-x-0 top-[7.2rem] z-50 w-full max-h-[calc(100dvh-7.2rem)] overflow-y-auto px-[5%] py-5 bg-white dark:bg-dark border-t border-gray-200 dark:border-white/10 shadow-2xl"
            : "hidden md:flex md:static md:flex-row md:items-center md:w-auto md:max-h-none md:overflow-visible md:px-0 md:py-0 md:bg-transparent md:border-0 md:shadow-none"
        }
      >
        {menuOpen && (
          <p className="text-[1.3rem] font-bold uppercase tracking-wider text-dark/50 dark:text-white/50 px-1 pb-1">
            Menu
          </p>
        )}
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`mobileNavLink md:hidden ${active ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              <span>{link.label}</span>
              <FaChevronRight
                className={`text-[1.4rem] shrink-0 ${
                  active ? "text-primary" : "text-dark/30 dark:text-white/30"
                }`}
              />
            </Link>
          );
        })}
        {navLinks.map((link) => (
          <Link
            key={`desktop-${link.href}`}
            href={link.href}
            className={`menuLink hidden md:inline-block md:ml-8 lg:ml-12 ${
              isActive(link.href) ? "active" : ""
            }`}
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
