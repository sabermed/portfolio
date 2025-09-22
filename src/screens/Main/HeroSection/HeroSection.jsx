import React from "react";
import { motion } from "framer-motion";
import { NavigationHeader } from "../../../components/NavigationHeader/NavigationHeader";
import { letterSlideUp, subtitleReveal, descriptionReveal } from "./animate";
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  const nameWords = ["SABER", "MOHAMED"];
  
  return (
    <div className={styles.heroSection}>
      <NavigationHeader />
      <div className={styles.heroContent}>
        <h1 className={styles.mainTitle}>
          {nameWords.map((word, wordIndex) => (
            <span key={wordIndex} className={styles.wordContainer}>
              {word.split('').map((char, charIndex) => (
                <span key={charIndex} className={styles.letterMask}>
                  <motion.span 
                    className={styles.letter}
                    variants={letterSlideUp}
                    initial="initial"
                    animate="open"
                    custom={wordIndex * word.length + charIndex}
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
              {wordIndex < nameWords.length - 1 && <span className={styles.spaceMask}></span>}
            </span>
          ))}
        </h1>
        
        <div className={styles.heroContentSub}>
          <motion.div 
            className={styles.subtitle}
            variants={subtitleReveal}
            initial="initial"
            animate="open"
          >
            FULL-STACK DEVELOPER &
            SOLUTION ARCHITECT
          </motion.div>
          
          <motion.div 
            className={styles.description}
            variants={descriptionReveal}
            initial="initial"
            animate="open"
          >
            expert in pixel-perfect websites
            <br />
            development & highly performance
            <br />
            backend apis
          </motion.div>
        </div>
      </div>
    </div>
  );
};