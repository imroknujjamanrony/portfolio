"use client";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Education from "./components/Education";

import Footer from "./components/Footer";
import ParticlesBg from "./components/Particles/Particles";

import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Home() {
  const bottomToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <ParticlesBg />
      </div>

      <section className="w-11/12 mx-auto ">
        <Banner />
        <AboutMe></AboutMe>
        <SkillsSection />
        <Education />
        <Projects />
        <Contact />
        <Footer />
        <FaArrowCircleUp
          onClick={bottomToTop}
          className="fixed bottom-4 right-3 size-10 z-50 cursor-pointer"
        />
      </section>
    </>
  );
}
