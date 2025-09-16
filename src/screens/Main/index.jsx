import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection/AboutMeSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";

function index() {
  return (
    <main className="main">
      <HeaderSection />
      <AboutMeSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default index;