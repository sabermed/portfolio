import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { ContactFooter } from "../../components/ContactFooter/ContactFooter";
import { getProjectBySlug, getNextProject } from "../../data/projects";
import { ctaTexts } from "../../data/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProjectDetail.module.scss";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Refs for GSAP animations
  const heroImageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const thumbnailsRef = useRef(null);
  
  // Handle case where project is not found
  if (!project) {
    return (
      <div className={styles.projectDetailPage}>
        <NavigationHeader background="black" textColor="white" />
        <main className={styles.mainContent}>
          <div className={styles.container}>
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <h1>Project Not Found</h1>
              <p>The project you're looking for doesn't exist.</p>
              <button onClick={() => window.location.href = '/works'}>
                View All Projects
              </button>
            </div>
          </div>
        </main>
        <ContactFooter />
      </div>
    );
  }

  const nextProject = getNextProject(project.id);

  // GSAP Animations
  useEffect(() => {
    // Title and description animations only
    if (titleRef.current && descriptionRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(descriptionRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Remove auto-rotate gallery images useEffect

  const handleImageSelect = (index) => {
    setCurrentImageIndex(index);
    scrollToThumbnail(index);
  };

  const handlePrevImage = () => {
    const newIndex = currentImageIndex === 0 ? project.gallery.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    scrollToThumbnail(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = currentImageIndex === project.gallery.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    scrollToThumbnail(newIndex);
  };

  // Function to scroll thumbnail into center view
  const scrollToThumbnail = (index) => {
    if (thumbnailsRef.current) {
      const thumbnail = thumbnailsRef.current.children[index];
      if (thumbnail) {
        const containerWidth = thumbnailsRef.current.offsetWidth;
        const thumbnailLeft = thumbnail.offsetLeft;
        const thumbnailWidth = thumbnail.offsetWidth;
        
        // Calculate scroll position to center the thumbnail
        const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        
        thumbnailsRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  // Auto-center on component mount
  useEffect(() => {
    if (project.gallery && project.gallery.length > 0) {
      // Small delay to ensure DOM is rendered
      setTimeout(() => scrollToThumbnail(currentImageIndex), 100);
    }
  }, [project.gallery, currentImageIndex]);

  // Handle drag/swipe for thumbnails
  const handleTouchStart = (e) => {
    if (thumbnailsRef.current) {
      thumbnailsRef.current.startX = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (thumbnailsRef.current && thumbnailsRef.current.startX) {
      const endX = e.changedTouches[0].clientX;
      const diff = thumbnailsRef.current.startX - endX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          handleNextImage(); // Swipe left - next image
        } else {
          handlePrevImage(); // Swipe right - previous image
        }
      }
    }
  };

  return (
    <div className={styles.projectDetailPage}>
      <NavigationHeader background="black" textColor="white" />
      
      <main className={styles.mainContent}>
        {/* Hero Section - Title/Description Above Image */}
        <section className={styles.projectHero}>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <span className={styles.projectCategory}>{project.category}</span>
              <h1 ref={titleRef} className={styles.projectTitle}>
                {project.title.replace(/^\d+\s\/\s/, '')}
              </h1>
              <p ref={descriptionRef} className={styles.projectDescription}>
                {project.description}
              </p>
            </div>
          </div>
          
          {/* Parallax Image */}
          <div className={styles.heroImageContainer}>
            <img 
              ref={heroImageRef}
              src={project.mainImage} 
              alt={project.alt}
              className={styles.heroImage}
            />
          </div>
        </section>

        {/* Project Overview Section */}
        <section className={styles.projectOverview}>
          <div className={styles.container}>
            <div className={styles.overviewGrid}>
              <div className={styles.overviewContent}>
                <h2>Project Overview</h2>
                <p className={styles.longDescription}>{project.longDescription}</p>
                
                {/* Technology Stack */}
                <div className={styles.techSection}>
                  <h3>Technology Stack</h3>
                  <div className={styles.techGrid}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techItem}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Simple meta info instead of cards */}
              <div className={styles.projectMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Client</span>
                  <span className={styles.metaValue}>{project.client}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Year</span>
                  <span className={styles.metaValue}>{project.year}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>{project.role}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>{project.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <section className={styles.projectGallery}>
            <div className={styles.container}>
              <div className={styles.galleryHeader}>
                <h2>Visual Journey</h2>
              </div>
              
              <div className={styles.galleryMain}>
                <div className={styles.mainImageContainer}>
                  <img 
                    src={project.gallery[currentImageIndex]} 
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className={styles.mainImage}
                    key={currentImageIndex}
                  />
                  <div className={styles.imageCounter}>
                    {String(currentImageIndex + 1).padStart(2, '0')} / {String(project.gallery.length).padStart(2, '0')}
                  </div>
                  
                  {/* Navigation Arrows */}
                  {project.gallery.length > 1 && (
                    <>
                      <button 
                        className={`${styles.navArrow} ${styles.prevArrow}`}
                        onClick={handlePrevImage}
                        aria-label="Previous image"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button 
                        className={`${styles.navArrow} ${styles.nextArrow}`}
                        onClick={handleNextImage}
                        aria-label="Next image"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                
                {/* Optimized Thumbnails */}
                {project.gallery.length > 1 && (
                  <div className={styles.galleryThumbnailsWrapper}>
                    <div 
                      ref={thumbnailsRef}
                      className={styles.galleryThumbnails}
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                    >
                      {project.gallery.map((image, index) => (
                        <div 
                          key={index}
                          className={`${styles.thumbnail} ${index === currentImageIndex ? styles.active : ''}`}
                          onClick={() => handleImageSelect(index)}
                        >
                          <img src={image} alt={`Thumbnail ${index + 1}`} loading="lazy" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Scroll indicators for many images */}
                    {project.gallery.length > 6 && (
                      <div className={styles.scrollIndicators}>
                        <div className={styles.scrollHint}>Swipe or scroll to see more</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Features & Challenges Split Section */}
        <section className={styles.featuresChallenges}>
          <div className={styles.container}>
            <div className={styles.splitGrid}>
              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className={styles.featuresSection}>
                  <h3>Key Features</h3>
                  <div className={styles.featuresList}>
                    {project.features.map((feature, index) => (
                      <div key={index} className={styles.featureItem}>
                        <span className={styles.featureNumber}>0{index + 1}</span>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className={styles.challengesSection}>
                  <h3>Challenges Solved</h3>
                  <div className={styles.challengesList}>
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className={styles.challengeItem}>
                        <div className={styles.challengeIcon}>⚡</div>
                        <p>{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Project Links CTA */}
        {(project.liveUrl || project.githubUrl) && (
          <section className={styles.projectCta}>
            <div className={styles.container}>
              <div className={styles.ctaContent}>
                <h3>Explore the Project</h3>
                <div className={styles.ctaButtons}>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.ctaButton} ${styles.primary}`}>
                      <span>View Live Demo</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.ctaButton} ${styles.secondary}`}>
                      <span>View Code</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Next Project */}
        <section className={styles.nextProject}>
          <div className={styles.container}>
            <div className={styles.nextProjectContent}>
              <div className={styles.nextProjectText}>
                <span className={styles.nextLabel}>Next Project</span>
                <h2 className={styles.nextTitle}>{nextProject.title.replace(/^\d+\s\/\s/, '')}</h2>
                <p className={styles.nextDescription}>{nextProject.description}</p>
                <button 
                  className={styles.nextButton}
                  onClick={() => window.location.href = `/project/${nextProject.slug}`}
                >
                  <span>Explore Next Project</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className={styles.nextProjectPreview}>
                <img src={nextProject.image} alt={nextProject.alt} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactFooter />
    </div>
  );
};

export default ProjectDetail;