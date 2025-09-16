import React from "react";
import "./ProjectsSection.scss";


import p1 from "../../../../assets/projects/project1.png"
import p2 from "../../../../assets/projects/project2.png"
import p3 from "../../../../assets/projects/project3.png"
import p4 from "../../../../assets/projects/project4.png"

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "1 / Meeting App",
      image: p1,
      alt: "Meeting App Project 1",
    },
    {
      id: 2,
      title: "2 / Meeting App",
      image: p2,
      alt: "Meeting App Project 2",
    },
    {
      id: 3,
      title: "3 / E-Commerce Platform",
      image: p3,
      alt: "E-Commerce Platform",
    },
    {
      id: 4,
      title: "4 / Portfolio Website",
      image: p4,
      alt: "Portfolio Website",
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <header className="projects-header">
          <h2>Selected Work<sup className="project-count">[6]</sup></h2>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <h3>{project.title}</h3>
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="project-image"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <button className="more-work-btn">
            More Work
          </button>
        </div>
      </div>
    </section>
  );
};