import React, { useState, useRef } from 'react'
import "./ProjectCard.scss"
import Cursor from './Cursor'

function ProjectCard({ id=null, title="", image="", alt="", slug="", category="", year="" }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleImageMouseEnter = () => {
    setIsHovered(true);
  };

  const handleImageMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleCardClick = () => {
    window.location.href = `/project/${slug}`;
  };

  return (
    <div 
      key={id} 
      className="project-card"
      ref={cardRef}
      onClick={handleCardClick}
    >
      <div 
        className="project-image-container"
        onMouseEnter={handleImageMouseEnter}
        onMouseLeave={handleImageMouseLeave}
        onMouseMove={handleImageMouseMove}
      >
        <img
          src={image}
          alt={alt}
          className="project-image"
        />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <div className="project-meta">
          <span className="category">{category}</span>
          <span className="year">{year}</span>
        </div>
      </div>
      
      <Cursor isVisible={isHovered} mousePosition={mousePosition} />
    </div>
  )
}

export default ProjectCard