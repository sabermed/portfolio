import React from "react";
import "./HeroSection.scss";
import { NavigationHeader } from "../../../components/NavigationHeader/NavigationHeader"

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <NavigationHeader />
      <div className="hero-content">
        <h1 className="main-title">SABER MOHAMED</h1>
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