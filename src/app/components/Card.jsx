// export default function Card({ project }) {
//   return (
//     <div className="bg-[#0f172a] text-white rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-start justify-between">
//       {/* Left Section: Text */}
//       <div className="flex-1 space-y-4">
//         <h2 className="text-2xl font-bold text-purple-300">
//           {project.projectName}
//         </h2>
//         <p className="text-gray-300">{project.description}</p>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2">
//           {project.coreFeatures.map((tech, idx) => (
//             <span
//               key={idx}
//               className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-600"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4 pt-2">
//           <a
//             href={project.codeLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border border-gray-600 px-4 py-1 rounded-md hover:bg-gray-700 transition"
//           >
//             Code
//           </a>
//           <a
//             href={project.liveDemo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-black px-4 py-1 rounded-md border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
//           >
//             Live Demo
//           </a>
//           <button className="bg-gray-700 px-4 py-1 rounded-md hover:bg-gray-600 transition">
//             View Details
//           </button>
//         </div>
//       </div>

//       {/* Right Section: Image */}
//       <div className="w-full md:w-1/2">
//         <img
//           src={project.image}
//           alt="Project"
//           className="rounded-xl border border-gray-700 shadow-md"
//         />
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";

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
    <div className="bg-[#0f172a] text-white rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-start justify-between">
      {/* Left Section: Text */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-purple-300">
          {project.projectName}
        </h2>
        <p className="text-gray-300">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.coreFeatures.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

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
          <button className="bg-gray-700 px-4 py-1 rounded-md hover:bg-gray-600 transition">
            View Details
          </button>
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
