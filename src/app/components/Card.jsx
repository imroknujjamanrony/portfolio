import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Card({ project }) {
  const scrollRef = useRef();

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

    const interval = setInterval(scrollStep, 30); // Adjust speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-white rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-start justify-between">
      {/* Left Section: Text */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-purple-300">
          {project.projectName}
        </h2>
        <p className="text-gray-300">{project.description}</p>

        {/* Tech Stack */}
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          {project.coreFeatures.map((tech, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaArrowRight className="mt-1 text-purple-400" />
              <span>{tech}</span>
            </li>
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
      >
        <img
          src={project.image}
          alt="Project"
          className="w-full"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
