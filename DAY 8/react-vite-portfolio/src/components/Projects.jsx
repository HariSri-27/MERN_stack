import React, { useState } from "react";

function Projects() {
  const [showDescription, setShowDescription] = useState(false);

  const projects = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio built with React."
    },
    {
      name: "Todo App",
      description: "Task management app using React Hooks."
    },
    {
      name: "Weather App",
      description: "Weather forecast app using API integration."
    }
  ];

  return (
    <section id="projects" style={{ padding: "40px", textAlign: "center" }}>
      <h2>My Projects</h2>

      {projects.map((project, index) => (
        <div key={index} style={{
          border: "1px solid #ccc",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px"
        }}>
          <h3>{project.name}</h3>

          {showDescription && <p>{project.description}</p>}

          <button onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? "Show Less" : "Show More"}
          </button>
        </div>
      ))}
    </section>
  );
}

export default Projects;