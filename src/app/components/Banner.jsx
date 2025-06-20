"use client";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaReact,
  FaArrowRight,
} from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import dynamic from "next/dynamic";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { useActiveSection } from "@/provider/ActiveSectionProvider";

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const LottieAni = dynamic(() => import("./LottieAni"), {
  ssr: false,
  loading: () => (
    <div className="w-[300px] h-[300px] bg-gray-800/20 animate-pulse rounded-lg" />
  ),
});

export default function Banner() {
  const { setActiveSection } = useActiveSection();
  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    smoothScrollTo(sectionId, () => {
      setActiveSection(sectionId); // Update active section after scroll
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariant}
      className="min-h-screen py-10 px-4 sm:px-8 lg:px-20 text-white flex flex-col-reverse lg:flex-row items-center justify-between gap-10"
    >
      {/* Left Section */}
      <motion.div
        variants={containerVariant}
        className="flex-1 w-full space-y-6 text-center lg:text-left"
      >
        <motion.h3
          className="uppercase tracking-widest flex items-center justify-center lg:justify-start gap-2 text-gray-400"
          whileHover={{ scale: 1.1 }}
        >
          <FaReact className="animate-spin [animation-duration:3s]" />
          Software Developer
          <FaReact className="animate-spin [animation-duration:3s]" />
        </motion.h3>

        <motion.h1
          variants={childVariant}
          custom={1}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Hello I'm{" "}
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-[#00FF9F] inline-block"
          >
            {typeof window !== "undefined" && (
              <Typewriter
                options={{
                  strings: ["Md Roknujjaman", "Rony"],
                  autoStart: true,
                  loop: true,
                }}
              />
            )}
          </motion.span>
        </motion.h1>

        <motion.p
          variants={childVariant}
          custom={2}
          className="text-gray-400 max-w-2xl mx-auto lg:mx-0"
          whileHover={{ scale: 1.01 }}
        >
          I'm a Web developer passionate about building scalable and efficient
          web applications. I focus on creating seamless user experiences with
          optimized performance, clean architecture, and modern technologies.
        </motion.p>

        {/* Tech Stack */}
        <motion.div variants={childVariant} custom={3} className="pt-4">
          <ul className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm font-medium">
            {[
              {
                text: "JavaScript",
                color: "text-yellow-400",
                border: "border-yellow-400",
              },
              {
                text: "React",
                color: "text-blue-400",
                border: "border-blue-400",
              },
              {
                text: "Express.js",
                color: "text-gray-400",
                border: "border-gray-400",
              },
              {
                text: "MongoDB",
                color: "text-green-400",
                border: "border-green-400",
              },
              { text: "Next.js", color: "text-white", border: "border-white" },
            ].map(({ text, color, border }, i) => (
              <motion.li
                whileHover={{ scale: 1.2, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                key={i}
                className={`px-4 py-1.5 ${color} ${border} border rounded-full bg-transparent hover:bg-white/10 transition`}
              >
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Buttons and Social */}
        <motion.div
          variants={childVariant}
          custom={4}
          className="flex flex-col items-center lg:items-start gap-6 mt-6"
        >
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              onClick={(e) => handleScrollTo(e, "projects")}
              whileHover={{ scale: 1.1 }}
              className="border border-[#00FF9F] text-[#00FF9F] px-6 py-2 rounded-full hover:bg-[#00FF9F] hover:text-black transition-all flex items-center gap-2"
            >
              Projects <GoProjectSymlink />
            </motion.button>
            <motion.button
              onClick={(e) => handleScrollTo(e, "contact")}
              whileHover={{ scale: 1.1 }}
              className="border border-[#00FF9F] text-[#00FF9F] px-6 py-2 rounded-full hover:bg-[#00FF9F] hover:text-black transition-all flex items-center gap-2"
            >
              Contacts <FaArrowRight />
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-5 text-2xl">
            <a
              href="https://www.linkedin.com/in/md-roknujjaman-rony-906780210/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer text-white hover:text-[#00FF9F] transition"
              >
                <FaLinkedin />
              </motion.span>
            </a>

            <a
              href="https://github.com/imroknujjamanrony"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer text-white hover:text-[#00FF9F] transition"
              >
                <FaGithub />
              </motion.span>
            </a>

            <a
              href="https://x.com/RoknujjamanRon2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer text-white hover:text-[#00FF9F] transition"
              >
                <FaTwitter />
              </motion.span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section - Lottie Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center items-center"
      >
        <LottieAni />
      </motion.div>
    </motion.div>
  );
}
