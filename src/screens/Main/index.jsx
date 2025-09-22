import { ContactFooter } from "../../components/ContactFooter/ContactFooter";
import { AboutMeSection } from "./AboutMeSection/AboutMeSection";
import { ServicesSection } from "./ServicesSection/ServicesSection";
import { ProjectsSection } from "./ProjectsSection/ProjectsSection";
import { HeroSection } from "./HeroSection/HeroSection";

function Main() {
  return (
    <main className="main">
      <HeroSection />
      <section id="about">
        <AboutMeSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <ProjectsSection />
      <ContactFooter />
    </main>
  );
}

export default Main;