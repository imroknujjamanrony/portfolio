"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Card({ project }) {
  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollY = 0;
    let animationFrameId;

    const scrollStep = () => {
      if (container.scrollHeight <= container.clientHeight) {
        // No scrolling needed if content fits
        return;
      }
      scrollY += 1;
      if (scrollY >= container.scrollHeight - container.clientHeight) {
        scrollY = 0;
      }
      container.scrollTop = scrollY;

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-white rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-start justify-between"
    >
      {/* Left Section: Text */}
      <div className="flex-1 space-y-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-purple-300"
        >
          {project.projectName}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-300"
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          {project.coreFeatures.map((tech, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={listItemVariants}
              className="flex items-start gap-2"
            >
              <FaArrowRight className="mt-1 text-purple-400" />
              <span>{tech}</span>
            </motion.li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-4 py-1 rounded-md hover:bg-gray-700 transition"
          >
            Code
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black px-4 py-1 rounded-md border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
          >
            Live Demo
          </a>
          <Link href={`/projects/${project.id}`}>
            <button className="bg-gray-700 px-4 py-1 rounded-md hover:bg-gray-600 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section: Auto-Scrolling Vertical Image */}
      <div
        ref={scrollRef}
        className="w-full md:w-[300px] h-[400px] overflow-y-scroll rounded-xl border border-gray-700 shadow-md"
        style={{ scrollBehavior: "auto" }} // disable smooth scroll for programmatic scrollTop changes
      >
        <img
          src={project.image}
          alt="Project"
          className="w-full"
          style={{ objectFit: "cover" }}
        />
      </div>
    </motion.div>
  );
}
