import React from "react";
import "./ProjectsSection.scss";


import p1 from "../../../assets/projects/project1.png"
import p2 from "../../../assets/projects/project2.png"
import p3 from "../../../assets/projects/project3.png"
import p4 from "../../../assets/projects/project4.png"
import ProjectCard from "../../../components/Project/ProjectCard";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "1 / Meeting App",
    image: p1,
    alt: "Meeting App Project 1",
    category: "Web Application",
    year: "2024",
    slug: "meeting-app-1"
  },
  {
    id: 2,
    title: "2 / Learning Platform", 
    image: p2,
    alt: "Learning Platform",
    category: "E-Learning",
    year: "2024",
    slug: "learning-platform"
  },
  {
    id: 3,
    title: "3 / E-Commerce Platform",
    image: p3,
    alt: "E-Commerce Platform",
    category: "E-Commerce",
    year: "2023",
    slug: "ecommerce-platform"
  },
  {
    id: 4,
    title: "4 / Portfolio Website",
    image: p4,
    alt: "Portfolio Website",
    category: "Portfolio",
    year: "2023",
    slug: "portfolio-website"
  },
];

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

        <div className="projects-cta">
          <button className="more-work-btn" onClick={onMoreWorkClick}>
            More Work
          </button>
        </div>
      </div>
    </section>
  );
};