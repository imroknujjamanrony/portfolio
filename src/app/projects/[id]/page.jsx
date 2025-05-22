"use client";
import projects from "@/public/projects.json";
import { useParams } from "next/navigation";
export default function ProjectDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>hello im form dynamic project</h1>
    </div>
  );
}
