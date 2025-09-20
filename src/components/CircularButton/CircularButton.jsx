import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic/Magnetic';
import './CircularButton.scss';

const CircularButton = ({ 
  children, 
  onClick, 
  size = 180, 
  className = '',
  variant = 'primary',
  enableMagnetic = true,
  enableHoverEffect = true,
  hoverBackgroundColor = '#455CE9',
  ...props 
}) => {
  const circle = useRef(null);
  const timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    if (enableHoverEffect && circle.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .to(circle.current, { 
          top: "-25%", 
          width: "150%", 
          duration: 0.4, 
          ease: "power3.in" 
        }, "enter")
        .to(circle.current, { 
          top: "-150%", 
          width: "125%", 
          duration: 0.25 
        }, "exit");
    }

    // Cleanup timeline on unmount
    return () => {
      if (timeline.current) timeline.current.kill();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [enableHoverEffect]);

  const manageMouseEnter = () => {
    if (!enableHoverEffect || !timeline.current) return;
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    if (!enableHoverEffect || !timeline.current) return;
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  const buttonContent = (
    <button 
      className={`circular-button ${variant} ${enableHoverEffect ? 'has-hover-effect' : ''} ${enableMagnetic ? 'magnetic-enabled' : ''} ${className}`}
      onClick={onClick}
      style={{ '--btn-size': `${size}px` }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      {...props}
    >
      <span className="button-text">{children}</span>
      {enableHoverEffect && (
        <div 
          ref={circle} 
          className="hover-circle"
          style={{ backgroundColor: hoverBackgroundColor }}
        />
      )}
    </button>
  );

  return enableMagnetic ? (
    <Magnetic>{buttonContent}</Magnetic>
  ) : (
    buttonContent
  );
};

export default CircularButton;