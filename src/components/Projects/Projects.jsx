import React from 'react';
import './Projects.css';

// Import project images
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import project6 from '../../assets/project6.png';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with real-time data visualization and reporting capabilities.",
      image: project1,
      technologies: ["React", "D3.js", "Node.js"],
      backgroundColor: "#F5F1EB",
      link: "#"
    },
    {
      id: 2,
      title: "Food Delivery App",
      description: "Mobile-first food delivery platform with seamless ordering and tracking experience.",
      image: project2,
      technologies: ["React Native", "Firebase", "Stripe"],
      backgroundColor: "#FF7A3D",
      link: "#"
    },
    {
      id: 3,
      title: "SaaS Platform",
      description: "Scalable SaaS platform for business automation with advanced user management.",
      image: project3,
      technologies: ["Vue.js", "Laravel", "PostgreSQL"],
      backgroundColor: "#6366F1",
      link: "#"
    },
    {
      id: 4,
      title: "E-Learning Platform",
      description: "Interactive online learning platform with course management and progress tracking.",
      image: project4,
      technologies: ["React", "Express", "MongoDB"],
      backgroundColor: "#93C5FD",
      link: "#"
    },
    {
      id: 5,
      title: "Arabic Learning App",
      description: "Mobile application for learning Arabic language with interactive lessons and quizzes.",
      image: project5,
      technologies: ["Flutter", "Firebase", "Node.js"],
      backgroundColor: "#10B981",
      link: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Modern portfolio website with dynamic animations and responsive design.",
      image: project6,
      technologies: ["React", "GSAP", "CSS3"],
      backgroundColor: "#D4A574",
      link: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">
            Featured Projects
          </h2>
        </div>
        
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              style={{ backgroundColor: project.backgroundColor }}
            >
              <div className="project-card__image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                
                <div className="project-card__technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;