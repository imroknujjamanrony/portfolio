"use client";

import { useState } from "react";
import Card from "./Card";

export default function Projects() {
  const [data, setData] = useState([]);
  fetch("/projects.json")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("Error fetching projects:", error));

  return (
    <div>
      <h1>Projects</h1>
      <p>Here are some of my projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {data.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
