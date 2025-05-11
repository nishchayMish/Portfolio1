import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Overview from './Overview';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Hero = ({
  scrollToMain,
  scrollToOverview,
  scrollToExperience,
  scrollToSkills,
  scrollToProjects,
  scrollToTestimonials,
  scrollToContact,
  mainRef,
  overviewRef,
  experienceRef,
  skillsRef,
  projectsRef,
  testimonialsRef,
  contactRef,
}) => {
  return (
    <div className='h-screen w-full bg-[#030014]'>
      <Navbar
        scrollToMain={scrollToMain}
        scrollToOverview={scrollToOverview}
        scrollToExperience={scrollToExperience}
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
        scrollToTestimonials={scrollToTestimonials}
        scrollToContact={scrollToContact}
      />
      {/* Sections */}
      <div ref={mainRef}>
        <Main />
      </div>
      <div ref={overviewRef}>
        <Overview />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Hero;
