import React, { useRef } from 'react';
import Hero from './components/Hero';

const App = () => {
  // Create refs for each section
  const mainRef = useRef(null);
  const overviewRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='overflow-x-hidden'>
      <Hero
        scrollToMain={() => scrollToSection(mainRef)}
        scrollToOverview={() => scrollToSection(overviewRef)}
        scrollToExperience={() => scrollToSection(experienceRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToTestimonials={() => scrollToSection(testimonialsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        mainRef={mainRef}
        overviewRef={overviewRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        testimonialsRef={testimonialsRef}
        contactRef={contactRef}
      />
    </div>
  );
};

export default App;
