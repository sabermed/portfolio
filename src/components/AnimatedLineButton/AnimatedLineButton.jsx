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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on element's position relative to viewport
      // When element is below viewport: progress = 0 (button fully left)
      // When element is centered in viewport: progress = 1 (button at final position)
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start animation when element enters viewport, complete when centered
      const startPoint = windowHeight;
      const endPoint = windowHeight / 2 - elementHeight / 2;
      
      let progress = 0;
      if (elementTop <= startPoint && elementTop >= endPoint) {
        progress = (startPoint - elementTop) / (startPoint - endPoint);
      } else if (elementTop < endPoint) {
        progress = 1;
      }
      
      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform based on scroll progress
  const getTransform = () => {
    // From translate(-100%, -50%) to translate(-50%, -50%)
    const xOffset = -100 + (scrollProgress * 50); // -100% to -50%
    return `translate(${xOffset}%, -50%)`;
  };

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
      <div 
        className="button-slide-wrapper"
        style={{
          transform: getTransform()
        }}
      >
        {React.cloneElement(children, { 
          size: buttonSize
        })}
      </div>
    </div>
  );
};

export default AnimatedLineButton;