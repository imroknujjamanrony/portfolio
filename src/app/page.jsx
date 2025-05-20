import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <section className="w-11/12 mx-auto ">
      <Banner />
      <AboutMe></AboutMe>
      <SkillsSection />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}
