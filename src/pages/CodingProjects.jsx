import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./CodingProjects.css";

function CodingProjects() {
  const projects = [
    {
      id: 5,
      title: "Evergreen Escape",
      timeline: "January 2025",
      playlink: "https://mazegame-n6m2.onrender.com/",
      sourcecode: "https://github.com/weblab-class/loafnt-FWJK35-userThu",
      description:
        "A multiplayer co-op infinitely generating maze exploration game with bullet-hell style combat encounters",
      fullDescription:
        'Evergreen Escape is an infinitely generating maze game created for a month-long web development\
      class at MIT called WebLab. The entire website was written in JavaScript using React and Vite, and features a unique maze\
      generation algorithm that won the award for "Most Innovative Backend Feature" out of over 40 submissions \
      in the WebLab competition. The rendering and game engine were written entirely from scratch, with zero external libraries\
      besides a random number generator and React itself. ',
      image: "/evergreen.gif",
    },
    {
      id: 4,
      title: "Clore",
      timeline: "January 2024 - June 2024",
      playlink: "https://dgull.itch.io/clore",
      description:
        "A single-player zero-gravity movement platformer with original textures, 5 levels, and a challenging boss fight.",
      fullDescription:
        "Clore is a movement platformer made for a game design class using Unity Game Engine. It features custom textures,\
      simple but challenging controls, and a bossfight at the end that requires the play to put together all of the\
       skills they've learned throughout the 5 unique levels.",
      image: "/clore.gif",
    },

    {
      id: 2,
      title: "Em3rge",
      timeline: "April 2023 - June 2023",
      sourcecode: "https://github.com/FWJK35/em3rge",
      description:
        "A 3D particle simulation with adjustable properties to study emergent behavior",
      fullDescription:
        "Em3rge is a 3D particle simulation based on Tom Mohr's \"Particle Life\". \
      While Mohr's version is 2D, my group and I wanted to explore the possibilities of emergent behavior\
      in a 3rd dimension. All physical interaction rules are customizable to the user, including world properties\
      and specific interactions between particles that determine attraction and repulsion. The rendering system\
      was also written from scratch, and implements techniques used in many modern games such as culling.\
      It shows that complex structures can emerge from chaos with the perfect blend of design and luck.",
      image: "/em3rge.gif",
    },
    {
      id: 3,
      title: "Harmony",
      timeline: "November 2022 - January 2023",
      sourcecode: "https://github.com/FWJK35/harmony",
      description:
        "A fully-functional, Turing-complete esoteric programming language with customizable \
        keywords based on popular texting slang",
      fullDescription:
        "Harmony is a programming language interpreter written fully in Java. It \
      takes a text file input and parses through it using a set of custom keywords to identify and execute\
      code functions. It has an indentation-based syntactic stye similar to Python, and is \
      Turing-complete, having all the necessary building blocks to code itself from scratch. It can get input,\
      define variables, functions, run loops, check conditionals, and more. All variables are auto-cast to\
      types, so String + Int = String syntax is valid.",
      image: "/harmony.gif",
    },
    {
      id: 1,
      title: "Wordle Solver",
      timeline: "March 2022 - May 2022",
      sourcecode: "https://github.com/FWJK35/wordlesolver",
      description:
        'A visual display of an algorithm I wrote to solve the popular New York Times game "Wordle"',
      fullDescription:
        "This wordle solver uses a custom algorithm to check through all permutations of\
         possible answers and possible guesses, finding an average number answers eliminated with each guess.\
         It then guesses the top choice, and uses the information gathered to further narrow down the list of\
         choices until it is left with only a single one. The visual representation randomly chooses a word\
         from a data set, and uses its own algorithm to guess the word in at most 4 guesses, beating the average human.",
      image: "/wordlesolver.gif",
    },
    // Add more projects as needed
  ];

  return (
    <div className="coding-projects">
      <h2>Coding Projects</h2>
      <h4>
        A list of my most significant programming projects, with most recent
        ones first
      </h4>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default CodingProjects;
