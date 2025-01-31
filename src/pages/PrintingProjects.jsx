import React from "react";
import "./PrintingProjects.css";
import ProjectCard from "../components/ProjectCard";

function PrintingProjects() {
  const projects = [
    {
      id: 8,
      title: "Gyoumei Himejima Nichirin",
      timeline: "May 2023 - June 2023",
      description:
        "A cosplay mace-axe belonging to Gyoumei Himejima from the manga/anime Demon Slayer. The mace is printed using\
        icosahedonal geometry to optimize for print time, filament usage, and quality",
      image: "/gyoumei.png",
    },
    {
      id: 7,
      title: "Bridget Waist-Handcuff",
      timeline: "April 2023",
      description:
        "A cosplay handcuff worn around the waist by the character Bridget in the video game Guilty Gear: Strive. Designed in\
        easily-assembled parts for shipment to customers.",
      image: "/handcuff.png",
    },
    {
      id: 6,
      title: "RGX Firefly Butterfly Knife",
      timeline: "August 2023",
      description:
        "A replica of the RGX Firefly butterfly knife from the video game VALORANT. Designed and printed\
        in different colors with no painting.",
      image: "/firefly.gif",
    },
    {
      id: 5,
      title: "Holocron Ring Box",
      timeline: "May 2022 - June 2022",
      description:
        "A mechanically-driven ring box with twisting corners to reveal a ring pedestal",
      image: "/ringbox.gif",
    },
    {
      id: 4,
      title: "Tengen Uzui Swords",
      timeline: "April 2022 - May 2022",
      description:
        "A pair of cosplay swords belonging to Tengen Uzui from the manga/anime Demon Slayer. Printed \
        using separate colors with no painting.",
      image: "/tengenswords.png",
    },
  ];

  return (
    <div className="printing-projects">
      <h2>3D Printing Projects</h2>
      <h4>
        A list of my most challenging 3D printing projects, with most recent
        ones first. All projects shown are designed entirely by myself.
      </h4>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default PrintingProjects;
