import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Overview from './Overview'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Hero = () => {
  return (
    <div className='h-screen w-full bg-[#030014]'>
        <Navbar />
        <Main/>
        <Overview />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
    </div>
  )
}

export default Hero