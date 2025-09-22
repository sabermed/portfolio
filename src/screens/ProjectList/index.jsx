import React from "react";
import "./ProjectList.scss";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { ContactFooter } from "../../components/ContactFooter/ContactFooter";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { projects } from "../../data/projects"; 

const ProjectList = () => {

  return (
    <div className="project-list-page">
      <NavigationHeader background="white" textColor="black" />

      <main className="main-content">
        <div className="container">
          <header className="page-header">
            <h1>WORKS</h1>
            <p>
              A collection of projects I've worked on, spanning web development,
              e-commerce, and interactive applications.
            </p>
          </header>

          <div className="projects-grid">
            {projects.map((project) => (
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
        </div>
      </main>

      <ContactFooter />
    </div>
  );
};

export default ProjectList;
