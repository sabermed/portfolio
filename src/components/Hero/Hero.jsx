import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Hero.css';
import heroImage from '../../assets/profile.png';

// Character component for letter-by-letter animation
const AnimatedCharacters = ({ text, className }) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="char"
          style={{
            display: 'inline-block',
            opacity: 0,
            transform: 'translateY(20px)',
            willChange: 'transform, opacity'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  // State to control image animation
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Create refs for animation targets
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const introTextRef = useRef(null);
  const locationTextRef = useRef(null);
  const locationContainerRef = useRef(null);
  const nameContainerRef = useRef(null);
  
  // Image loaded handler
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  useEffect(() => {
    // Get all characters for letter-by-letter animation
    const fullStackChars = document.querySelectorAll('.full-stack-title .char');
    const developerChars = document.querySelectorAll('.developer-title .char');
    const locationChars = document.querySelectorAll('.location-text .char');
    const nameChars = document.querySelectorAll('.name-text .char');
    
    // Set initial state for text elements
    gsap.set([
      introTextRef.current,
      locationTextRef.current,
      experienceRef.current
    ], { 
      autoAlpha: 0,
      y: 20
    });
    
    // Set initial state for experience
    gsap.set(experienceRef.current, { x: -30, autoAlpha: 0 });
    
    // Make container elements visible
    gsap.set([locationContainerRef.current, nameContainerRef.current], { 
      autoAlpha: 1
    });
    
    // Create a main timeline
    const masterTl = gsap.timeline({ 
      defaults: { 
        ease: "power2.out",
        duration: 0.7
      }
    });
    
    // Animation sequence with synchronized timing
    masterTl
      // Initial pause for dramatic effect
      .addLabel('start')
      
      // Intro text and location text animate together
      .to([introTextRef.current, locationTextRef.current], { 
        duration: 0.6, 
        autoAlpha: 1, 
        y: 0,
        stagger: 0.05
      }, 'start+=0.1')
      
      // Add label for text animations
      .addLabel('text', 'start+=0.3')
      
      // Animate title characters
      .to(fullStackChars, {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
        stagger: 0.015,
        ease: "power2.out"
      }, 'text')
      
      // Developer appears with slight delay
      .to(developerChars, {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
        stagger: 0.015,
        ease: "power2.out"
      }, 'text+=0.15')
      
      // Location text and name animate together
      .to(locationChars, {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
        stagger: 0.015,
        ease: "power2.out"
      }, 'text+=0.2')
      
      // Slide in experience div from left
      .to(experienceRef.current, {
        duration: 0.7,
        x: 0,
        autoAlpha: 1,
        ease: "power2.out"
      }, 'text+=0.3')
      
      // Name appears last
      .to(nameChars, {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
        stagger: 0.01,
        ease: "power2.out"
      }, 'text+=0.4');
    
    // Separate animation for image container
    if (imageLoaded && imageContainerRef.current && imageRef.current) {
      setTimeout(() => {
        if (imageContainerRef.current) {
          imageContainerRef.current.classList.add('animate-in');
        }
      }, 300);
      
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.add('animate-in');
        }
      }, 350); // Slight delay after container
      }
    
    // Cleanup function
    return () => {
      masterTl.kill();
    };
  }, [imageLoaded]);

  return (
    <div className='hero' ref={heroRef}>
      {/* Hero Content */}
      <div className="hero__content">
        {/* Left Content */}
        <div className="hero__left">
          <p className="hero__intro-text" ref={introTextRef}>Hello im a,</p>
          <h2 className="hero__title">
            <AnimatedCharacters text="Full Stack" className="full-stack-title" />
            <br />
            <AnimatedCharacters text="Developer" className="developer-title" />
          </h2>
          <div className="hero__experience" ref={experienceRef}>
            <span>3+ Years of Experience</span>
          </div>
        </div>

        {/* Center Profile Image */}
        <div className="hero__center">
          <div className="hero__image-container" ref={imageContainerRef}>
            <img 
              src={heroImage} 
              alt="Saber Mohamed"
              className="hero__image"
              ref={imageRef}
              onLoad={handleImageLoad}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="hero__right">
          <p className="hero__location-text" ref={locationTextRef}>located in,</p>
          <h3 className="hero__location" ref={locationContainerRef}>
            <AnimatedCharacters text="Mahdia, Tunisia" className="location-text" />
          </h3>
        </div>
      </div>

      {/* Large Name Text */}
      <div className="hero__name">
        <h2 ref={nameContainerRef}>
          <AnimatedCharacters text="SABER MOHAMED" className="name-text" />
        </h2>
      </div>
    </div>
  );
};

export default Hero;