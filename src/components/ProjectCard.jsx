import React, { useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`project-card ${isExpanded ? "expanded" : ""}`}>
      <h3>{project.title}</h3>
      <h5>{project.timeline}</h5>
      <div>
        {project.playlink ? (
          <a className="project-link" href={project.playlink}>
            Play
          </a>
        ) : (
          <></>
        )}
        {project.playlink && project.sourcecode ? <span> | </span> : <></>}
        {project.sourcecode ? (
          <a className="project-link" href={project.sourcecode}>
            Source Code
          </a>
        ) : (
          <></>
        )}
      </div>

      <img
        src={project.image}
        alt={project.title}
        className={isExpanded ? "enlarged" : ""}
        onClick={toggleExpand}
      />
      {isExpanded && project.fullDescription ? (
        <p>{project.fullDescription}</p>
      ) : (
        <p>{project.description}</p>
      )}
      {project.fullDescription ? (
        isExpanded ? (
          <p className="readmore" onClick={toggleExpand}>
            Read less
          </p>
        ) : (
          <p className="readmore" onClick={toggleExpand}>
            Read more
          </p>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProjectCard;
