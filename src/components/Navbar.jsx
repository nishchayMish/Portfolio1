import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import glaxy from '../assets/glaxy.png';
import blackhole from '../assets/blackhole.webm';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Home', 'Skills', 'Projects', 'Contact'];

  return (
    <div className='relative w-full'>
      {/* Background Video */}
      <video autoPlay loop muted className='w-full h-[500px] scale-[1.2] sm:scale-[1] rotate-180 object-cover mb-10 absolute top-[-150px]'>
        <source src={blackhole} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-[#07041c]/60 backdrop-blur-md flex items-center justify-between border-b border-gray-800 z-10 px-4 sm:px-6 md:px-10">
        
        {/* Logo + Name */}
        <div className='flex items-center'>
          <img src={glaxy} alt="Logo" className='w-[50px] h-[60px] object-contain'/>
          <h2 className='text-white tracking-tight font-semibold text-xl sm:text-2xl ml-2'>Nishchay Mishra</h2>
        </div>

        {/* Desktop Nav Links */}
        <div className='hidden mr-0 lg:mr-40 lg:flex gap-10 bg-gray-700 px-6 py-2 rounded-full border border-gray-50'>
          {navLinks.map((item) => (
            <h2
              key={item}
              className='text-base text-white cursor-pointer transition duration-300 hover:text-cyan-400'
            >
              {item}
            </h2>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className='hidden md:flex gap-4 text-white text-2xl'>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 transition duration-300 hover:scale-110'>
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition duration-300 hover:scale-110'>
            <FaGithub />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 transition duration-300 hover:scale-110'>
            <FaInstagram />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#07041c] flex flex-col justify-center items-center gap-10 z-50">
          {/* Close Icon */}
          <div
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer hover:text-red-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </div>

          {/* Nav Links */}
          {navLinks.map((item) => (
            <h2
              key={item}
              className='text-2xl text-white cursor-pointer transition duration-300 hover:text-cyan-400'
              onClick={() => setMenuOpen(false)} // auto-close on click
            >
              {item}
            </h2>
          ))}

          {/* Social Icons */}
          <div className='flex gap-6 text-white text-3xl'>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 transition duration-300 hover:scale-110'>
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition duration-300 hover:scale-110'>
              <FaGithub />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 transition duration-300 hover:scale-110'>
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
