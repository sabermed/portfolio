import React, { useState, useEffect, useRef } from 'react';
import './AnimatedLineButton.scss';

const AnimatedLineButton = ({ 
  children, 
  buttonSize = 180, 
  threshold = 0.5, 
  className = '',
  lineColor = '#7E888F',
  ...props 
}) => {
  const containerRef = useRef(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsButtonVisible(true);
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div 
      className={`animated-line-button-container ${className}`}
      ref={containerRef}
      style={{ 
        '--btn-size': `${buttonSize}px`,
        '--line-color': lineColor
      }}
      {...props}
    >
      <div className="animated-line" />
      {/* New wrapper div for slide animation */}
      <div className={`button-slide-wrapper ${isButtonVisible ? 'slide-in' : ''}`}>
        {React.cloneElement(children, { 
          size: buttonSize
          // Removed isVisible prop since wrapper handles animation
        })}
      </div>
    </div>
  );
};

export default AnimatedLineButton;