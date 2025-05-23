"use client";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Education from "./components/Education";

import Footer from "./components/Footer";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Home() {
  const bottomToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
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
  );
}
