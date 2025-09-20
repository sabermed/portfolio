import React from 'react'
import "./ProjectCard.scss"

function ProjectCard({ id=null, title="", image="", alt="", slug="", category="", year="" }) {
  return (
    <div key={id} className="project-card">
      <div className="project-image-container">
        <img
          src={image}
          alt={alt}
          className="project-image"
        />
        <div className="project-overlay">
          <a href={`/project/${slug}`} className="view-project">
            View Project
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <div className="project-meta">
          <span className="category">{category}</span>
          <span className="year">{year}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard