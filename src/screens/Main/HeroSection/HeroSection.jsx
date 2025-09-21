import React from "react";
import "./HeroSection.scss";
import { NavigationHeader } from "../../../components/NavigationHeader/NavigationHeader"

export const HeroSection = () => {
  const nameWords = ["SABER", "MOHAMED"];
  
  return (
    <div className="hero-section">
      <NavigationHeader />
      <div className="hero-content">
        <h1 className="main-title">
          {nameWords.map((word, wordIndex) => (
            <span key={wordIndex} className="word-container">
              {word.split('').map((char, charIndex) => (
                <span key={charIndex} className="letter-mask">
                  <span 
                    className="letter"
                    style={{
                      animationDelay: `${0.3 + (wordIndex * word.length * 0.025) + (charIndex * 0.025)}s`
                    }}
                  >
                    {char}
                  </span>
                </span>
              ))}
              {wordIndex < nameWords.length - 1 && <span className="space-mask"></span>}
            </span>
          ))}
        </h1>
        <div className="hero-content-sub">
          <div className="subtitle">
            FULL-STACK DEVELOPER &
            FRONTEND SPECIALIST
          </div>
          <div className="description">
            expert in pixel-perfect websites
            <br />
            development & highly performance
            <br />
            backend apis
          </div>
        </div>
      </div>
    </div>
  );
};