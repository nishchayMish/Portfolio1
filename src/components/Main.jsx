import React from 'react';
import headerImg from '../assets/headerImg.svg';

const Main = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-12 py-16 bg-[#030014] text-white'>

      {/* Left Content */}
      <div className='mt-[30px] md:mt-[300px] md:w-1/2 flex flex-col gap-6'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
          Providing{' '}
          <span className='bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text'>
            the best
          </span>
          <br />
          Project experience
        </h1>

        {/* Short paragraph for small devices */}
        <p className='text-base text-gray-300 leading-relaxed md:hidden'>
          I build modern, responsive apps that look great and work fast. My focus is on <span className='bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold'>clean design</span> and usability.
        </p>

        {/* Long paragraph for medium and larger devices */}
        <p className='hidden md:block text-lg text-gray-300 leading-relaxed'>
          I specialize in building modern, responsive, and scalable web applications that solve real-world problems. 
          My goal is to deliver digital products that are both <span className='bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold'>aesthetically pleasing 
          and highly functional </span>, with a strong emphasis on performance, accessibility, and user experience. Whether it's designing intuitive UIs or writing clean, maintainable code, I focus on delivering excellence.
        </p>

        <button className='w-fit cursor-pointer px-6 py-3 mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition text-white font-semibold shadow-lg'>
          Download CV
        </button>
      </div>

      {/* Right Image */}
      <div className='bounce mt-[300px] md:w-1/2 mb-10 md:mb-0 flex justify-center'>
        <img src={headerImg} alt="Header Illustration" className='w-[300px] sm:w-[400px] md:w-[500px]' />
      </div>
    </div>
  );
};

export default Main;
