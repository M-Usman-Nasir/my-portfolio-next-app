"use client";

import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const STORAGE_KEY = "theme";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem(STORAGE_KEY);
    const dark = stored !== "light";
    setIsDark(dark);
    root.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem(STORAGE_KEY, nextDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center justify-center w-12 h-12 ml-4 text-[2.4rem] text-dark dark:text-white hover:text-primary transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <HiSun /> : <HiMoon />}
    </button>
  );
};

export default ThemeToggle;
