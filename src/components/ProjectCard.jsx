import React, { useState } from "react";
import "./ProjectCard.css";

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
      <h5>{project.timeline}</h5>
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
      {isExpanded ? <p>Read less</p> : <p>Read more</p>}
    </div>
  );
}

export default ProjectCard;
