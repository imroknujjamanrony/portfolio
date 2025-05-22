"use client";

import projects from "@/data/projects.json"; // Make sure the path is correct
import Card from "./Card";

export default function Projects() {
  return (
    <div className="mt-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
          <span className="text-purple-400">My Projects</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Explore some of the work I’ve done using modern technologies and
          creative design.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
