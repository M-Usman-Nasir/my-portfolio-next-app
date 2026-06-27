import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatISolve from "@/components/WhatISolve";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhatISolve />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
