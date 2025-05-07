import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Overview from './Overview'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'

const Hero = () => {
  return (
    <div className='h-screen w-full bg-[#030014]'>
        <Navbar />
        <Main/>
        <Overview />
        <Experience />
        <Skills />
        <Projects />
    </div>
  )
}

export default Hero