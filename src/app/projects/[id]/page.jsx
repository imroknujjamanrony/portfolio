"use client";

import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import projects from "@/data/projects.json";
import { motion } from "framer-motion";

export default function ProjectDetails({ params }) {
  const scrollRef = useRef();

  const project = projects.find((p) => p.id.toString() === params.id);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollY = 0;

    const scrollStep = () => {
      scrollY += 1;
      if (scrollY >= container.scrollHeight - container.clientHeight) {
        scrollY = 0;
      }
      container.scrollTop = scrollY;
    };

    const interval = setInterval(scrollStep, 30);
    return () => clearInterval(interval);
  }, []);

  if (!project)
    return <div className="text-white text-center">Project not found</div>;

  return (
    <div className="min-h-screen px-4 md:px-16 py-10 bg-[#0f172a] text-white space-y-12">
      {/* Title & Description */}
      <div className="text-center space-y-4 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-300">
          {project.projectName}
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          {project.description}
        </p>
      </div>

      {/* Responsive Flex Layout */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Auto-Scroll Image */}
        <div
          ref={scrollRef}
          className="md:w-1/2 max-h-[500px] overflow-y-scroll rounded-xl border border-gray-700 shadow-lg scrollbar-hide"
        >
          <img
            src={project.image}
            alt="Project Screenshot"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 space-y-8">
          {/* Core Features */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-3">
              Core Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.coreFeatures.map((feature, idx) => (
                <motion.li
                  key={idx}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex gap-2"
                >
                  <FaArrowRight className="mt-1 text-purple-400" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          {project.techStack && (
            <div>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {project.challenges?.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-red-400 mb-3">
                Challenges
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.challenges.map((challenge, idx) => (
                  <motion.li
                    key={idx}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex gap-2"
                  >
                    <FaArrowRight className="mt-1 text-purple-400" />
                    <span>{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Plans */}
          {project.futurePlans?.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-3">
                Future Plans
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.futurePlans.map((plan, idx) => (
                  <motion.li
                    key={idx}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex gap-2"
                  >
                    <FaArrowRight className="mt-1 text-purple-400" />
                    <span>{plan}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 px-5 py-2 rounded-md border border-gray-600 hover:bg-gray-700 transition"
            >
              View Code
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black px-5 py-2 rounded-md hover:bg-green-400 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
