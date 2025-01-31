import React from "react";
import ProjectCard from "../components/ProjectCard";

function CodingProjects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Short description",
      fullDescription: "Full description",
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Short description",
      fullDescription: "Full description",
      image: "path/to/image2.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <div className="coding-projects">
      <h2>Coding Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default CodingProjects;
