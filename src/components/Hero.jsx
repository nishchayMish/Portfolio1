import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Overview from './Overview'
import Experience from './Experience'

const Hero = () => {
  return (
    <div className='h-screen w-full bg-[#030014]'>
        <Navbar />
        <Main/>
        <Overview />
        <Experience />
    </div>
  )
}

export default Hero