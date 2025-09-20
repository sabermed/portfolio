import React from "react";
import "./ProjectsSection.scss";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import { useNavigate } from "react-router-dom";

import { selected_projects } from "../../../data/projects"; 

export const ProjectsSection = () => {
  const navigate = useNavigate();

  const onMoreWorkClick = () => {
    navigate("/works")
  }

  return (
    <section className="projects-section">
      <div className="container">
        <header className="projects-header">
          <h2>Selected Work<sup className="project-count">[6]</sup></h2>
        </header>

        <div className="projects-grid">
          {selected_projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              alt={project.alt}
              slug={project.slug}
              category={project.category}
              year={project.year}
            />
          ))}
        </div>

        <div className="projects-cta">
          <button className="more-work-btn" onClick={onMoreWorkClick}>
            More Work
          </button>
        </div>
      </div>
    </section>
  );
};