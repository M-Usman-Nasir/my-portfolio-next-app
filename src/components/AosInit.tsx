"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 200,
      once: true,
      offset: 80,
    });
  }, []);

  return null;
}
