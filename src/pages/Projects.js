import React from "react";

function Projects() {
  const projectList = [
    { name: "Portfolio Website", description: "My personal portfolio built with React.js." },
    { name: "AI Contract Analyzer", description: "A project to help non-lawyers analyze contracts." },
    { name: "GitHub Setup Guide", description: "A step-by-step guide for beginners to use GitHub." },
  ];

  return (
    <div className="container"> {/* Add container class */}
      <h1>My Projects</h1>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      <footer>
        <p>Connect with me on <a href="https://github.com/yourprofile">GitHub</a></p>
      </footer>
    </div>
  );
}

export default Projects;