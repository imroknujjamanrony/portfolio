import projects from "@/data/projects.json"; // ✅ Absolute path

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold">{project.projectName}</h1>
      <p className="text-gray-300">{project.description}</p>
      {/* Render more fields as needed */}
    </div>
  );
}
