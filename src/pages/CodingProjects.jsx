import React from "react";
import ProjectCard from "../components/ProjectCard";
//import assetlist from "../assets/assetlist";

function CodingProjects() {
  const projects = [
    {
      id: 4,
      title: "Clore",
      timeline: "January 2024 - June 2024",
      description:
        "A single-player zero-gravity movement platformer with original textures, 5 levels, and a challenging boss fight.",
      fullDescription: "Full description",
      image: "/clore.gif",
    },

    {
      id: 2,
      title: "Em3rge",
      timeline: "April 2023 - June 2023",
      description:
        "A 3D particle simulation with adjustable properties to study emergent behavior",
      fullDescription: "Full description",
      image: "/em3rge.gif",
    },
    {
      id: 3,
      title: "Harmony",
      timeline: "November 2022 - January 2023",
      description:
        "A fully-functional, Turing-complete esoteric programming language with customizable keywords based on popular texting slang",
      fullDescription: "Full description",
      image: "/harmony.gif",
    },
    {
      id: 1,
      title: "Wordle Solver",
      timeline: "March 2022 - May 2022",
      description:
        'A visual display of an algorithm I wrote to solve the popular New York Times game "Wordle"',
      fullDescription: "Full description",
      image: "/wordlesolver.gif",
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
