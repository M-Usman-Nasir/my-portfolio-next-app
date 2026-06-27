"use client";

import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    void import("aos").then((AOS) => {
      AOS.default.init({
        duration: 2000,
        delay: 200,
        once: true,
        offset: 80,
      });
    });
  }, []);

  return null;
}
