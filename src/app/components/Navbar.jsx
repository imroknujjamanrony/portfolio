"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/portfolio logo gpt2.png";
import { usePathname } from "next/navigation";
import { LuHardDriveDownload } from "react-icons/lu";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setIsClient(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ["about", "skills", "education", "projects", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjusted for navbar height
          behavior: "smooth",
        });
        setActiveSection(sectionId);
      }
    }
  };

  const links = [
    { name: "Home", path: "/", section: null },
    { name: "About", path: "/", section: "about" },
    { name: "Skills", path: "/", section: "skills" },
    { name: "Education", path: "/", section: "education" },
    { name: "Projects", path: "/", section: "projects" },
    { name: "Contact", path: "/", section: "contact" },
  ];

  const isActiveLink = (link) => {
    if (!isClient) return false;

    if (link.section === null) {
      return (
        activeSection === "" ||
        (typeof window !== "undefined" && window.scrollY < 100)
      );
    }

    return activeSection === link.section;
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="navbar fixed z-50 w-full backdrop-blur-md bg-black/40 shadow-lg text-white px-3 sm:px-6 md:px-10 py-2"
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown - Simplified DaisyUI implementation */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black/90 backdrop-blur-md rounded-box w-52 text-white"
          >
            {links.map((link, index) => (
              <li key={index}>
                {link.section ? (
                  <button
                    onClick={(e) => scrollToSection(e, link.section)}
                    className={`w-full py-2 px-2 text-left text-sm sm:text-base ${
                      isActiveLink(link) ? "text-accent font-semibold" : ""
                    } hover:text-cyan-300`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.path}
                    className={`block py-2 px-2 text-sm sm:text-base ${
                      isActiveLink(link) ? "text-accent font-semibold" : ""
                    } hover:text-cyan-300`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="btn btn-ghost text-xl flex items-center gap-2"
        >
          <Image
            src={logo}
            width={40}
            height={40}
            alt="logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <h2 className="text-xl sm:text-2xl font-semibold">
            Roni <span className="text-cyan-300">.</span>
          </h2>
        </Link>
      </div>

      {/* Navbar Center for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, index) => (
            <li key={index}>
              {link.section ? (
                <button
                  onClick={(e) => scrollToSection(e, link.section)}
                  className={`capitalize font-medium px-2 transition-all hover:text-accent ${
                    isActiveLink(link)
                      ? "text-accent border-b-2 border-accent"
                      : ""
                  }`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  href={link.path}
                  onClick={() => {
                    setActiveSection("");
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`capitalize font-medium px-2 transition-all hover:text-accent ${
                    isActiveLink(link)
                      ? "text-accent border-b-2 border-accent"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/10VWyvpj1gh6yrmZyHbT0oQvDAa0i1k82/view?usp=sharing"
          target="_blank"
          className="group bg-transparent flex items-center gap-1 border-2 border-green-300 hover:bg-[#00FF9F] hover:text-black transition-all text-white rounded-full px-4 py-1.5 text-sm sm:text-base"
        >
          Resume
          <LuHardDriveDownload className="hidden group-hover:inline" />
        </a>
      </div>
    </motion.div>
  );
}
// have to add mouse pointer effefcs
