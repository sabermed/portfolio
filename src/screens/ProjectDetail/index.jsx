import React from "react";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { ContactFooter } from "../../components/ContactFooter/ContactFooter";
import "./ProjectDetail.scss";

// Import project images
import projectMain from "../../assets/projects/project1.png";

const ProjectDetail = () => {
  // This would typically come from props or routing params
  const project = {
    id: 1,
    title: "Platform McKinsey",
    subtitle: "Streamlining FinalDocs submission",
    description: "I was the design lead for Platform McKinsey - an internal one stop shop and workspace for technologists to access cloud-based tooling.",
    mainImage: projectMain,
    category: "Product",
    productName: "Platform McKinsey",
    tools: [
      "Product design",
      "Heuristic UX audit", 
      "Interactive prototyping",
      "User research & testing"
    ],
    role: "Full Stack Developer",
    year: "2024",
    nextProject: {
      title: "Learning Platform",
      slug: "learning-platform"
    }
  };

  const projectImages = [
    projectMain,
    projectMain,
    projectMain,
    projectMain
  ];

  return (
    <div className="project-detail-page">
      <NavigationHeader background="white" textColor="black" />
      
      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section className="project-hero">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              
              <div className="hero-image">
                <img src={project.mainImage} alt={project.title} />
              </div>
            </div>
          </section>

          {/* Project Info Section */}
          <section className="project-info">
            <div className="info-grid">
              <div className="info-left">
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="info-right">
                <div className="info-block">
                  <h3>Product</h3>
                  <p>{project.productName}</p>
                </div>
                
                <div className="info-block">
                  <h3>Tools</h3>
                  <ul>
                    {project.tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="info-block">
                  <h3>My Role</h3>
                  <p>{project.role}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Gallery */}
          <section className="project-gallery">
            <div className="gallery-grid">
              {projectImages.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </section>

          {/* Next Project */}
          <section className="next-project">
            <div className="next-project-content">
              <div className="next-project-text">
                <span className="next-label">Next Project</span>
                <h2>{project.nextProject.title}</h2>
              </div>
              <div className="next-project-arrow">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.500156 26.359C0.51235 27.1874 1.19373 27.849 2.02207 27.8368L15.5206 27.6381C16.3489 27.6259 17.0106 26.9445 16.9984 26.1162C16.9862 25.2878 16.3048 24.6262 15.4765 24.6384L3.47775 24.815L3.30113 12.8163C3.28894 11.988 2.60756 11.3264 1.77922 11.3386C0.950881 11.3508 0.289266 12.0321 0.301459 12.8605L0.500156 26.359ZM25.6309 2L24.5547 0.955066L0.923838 25.292L1.99999 26.3369L3.07615 27.3819L26.707 3.04493L25.6309 2Z" fill="black"/>
                </svg>
              </div>
            </div>
            <button className="next-project-btn" onClick={() => window.location.href = `/project/${project.nextProject.slug}`}>
              <span>Next Project</span>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33337 20H31.6667M31.6667 20L23.3334 11.6667M31.6667 20L23.3334 28.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </section>
        </div>
      </main>

      <ContactFooter />
    </div>
  );
};

export default ProjectDetail;