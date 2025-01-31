import React, { useState } from "react";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`project-card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <h3>{project.title}</h3>
      <img
        src={project.image}
        alt={project.title}
        className={isExpanded ? "enlarged" : ""}
      />
      {isExpanded ? (
        <p>{project.fullDescription}</p>
      ) : (
        <p>{project.description}</p>
      )}
    </div>
  );
}

export default ProjectCard;
