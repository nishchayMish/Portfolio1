import React from 'react';
import headerImg from '../assets/headerImg.svg';
import { motion } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const paragraphVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.5 },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.6, duration: 0.4 },
  },
};

// Smooth Bounce effect for the image using Framer Motion
const bounceVariant = {
  hidden: { y: 0 },
  visible: {
    y: [0, -20, 0], // Smooth bounce effect with less extreme values
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut", // Smooth and consistent easing
    },
  },
};

const Main = () => {
  return (
    <div className='landingPage flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-12 py-16 text-white'>

      {/* Left Content (Animated) */}
      <motion.div
        initial="hidden"
        animate="visible"
        className='mt-[30px] md:mt-[300px] md:w-1/2 flex flex-col gap-6'
      >
        <motion.h1
          variants={textVariant}
          className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'
        >
          Providing{' '}
          <span className='bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text'>
            the best
          </span>
          <br />
          Project experience
        </motion.h1>

        <motion.p
          variants={paragraphVariant}
          className='text-base text-gray-300 leading-relaxed md:hidden'
        >
          I build modern, responsive apps that look great and work fast. My focus is on{' '}
          <span className='bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold'>
            clean design
          </span>{' '}
          and usability.
        </motion.p>

        <motion.p
          variants={paragraphVariant}
          className='hidden md:block text-lg text-gray-300 leading-relaxed'
        >
          I specialize in building modern, responsive, and scalable web applications that solve real-world problems. 
          My goal is to deliver digital products that are both{' '}
          <span className='bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold'>
            aesthetically pleasing and highly functional
          </span>
          , with a strong emphasis on performance, accessibility, and user experience. Whether it's designing intuitive UIs or writing clean, maintainable code, I focus on delivering excellence.
        </motion.p>

        <motion.button
          variants={buttonVariant}
          className='w-fit cursor-pointer px-6 py-3 mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition text-white font-semibold shadow-lg'
        >
          Download CV
        </motion.button>
      </motion.div>

      {/* Right Image with Smooth Bounce Effect */}
      <motion.div
        variants={bounceVariant}
        initial="hidden"
        animate="visible"
        className='mt-[300px] md:w-1/2 mb-10 md:mb-0 flex justify-center'
      >
        <img
          src={headerImg}
          alt="Header Illustration"
          className='w-[300px] sm:w-[400px] md:w-[500px]'
        />
      </motion.div>
    </div>
  );
};

export default Main;
