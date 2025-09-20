import React from "react";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { ContactFooter } from "../../components/ContactFooter/ContactFooter";
import "./ProjectList.scss";

// Import project images
import p1 from "../../assets/projects/project1.png";
import p2 from "../../assets/projects/project2.png";
import p3 from "../../assets/projects/project3.png";
import p4 from "../../assets/projects/project4.png";
import ProjectCard from "../../components/Project/ProjectCard";

const projects = [
  {
    id: 1,
    title: "1 / Meeting App",
    image: p1,
    alt: "Meeting App Project 1",
    category: "Web Application",
    year: "2024",
    slug: "meeting-app-1",
  },
  {
    id: 2,
    title: "2 / Learning Platform",
    image: p2,
    alt: "Learning Platform",
    category: "E-Learning",
    year: "2024",
    slug: "learning-platform",
  },
  {
    id: 3,
    title: "3 / E-Commerce Platform",
    image: p3,
    alt: "E-Commerce Platform",
    category: "E-Commerce",
    year: "2023",
    slug: "ecommerce-platform",
  },
  {
    id: 4,
    title: "4 / Portfolio Website",
    image: p4,
    alt: "Portfolio Website",
    category: "Portfolio",
    year: "2023",
    slug: "portfolio-website",
  },
  {
    id: 5,
    title: "5 / Dashboard Analytics",
    image: p1,
    alt: "Dashboard Analytics",
    category: "Dashboard",
    year: "2023",
    slug: "dashboard-analytics",
  },
  {
    id: 6,
    title: "6 / Mobile Banking App",
    image: p2,
    alt: "Mobile Banking App",
    category: "Mobile App",
    year: "2022",
    slug: "mobile-banking",
  },
];

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
