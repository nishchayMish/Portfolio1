import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import glaxy from '../assets/glaxy.png';
import blackhole from '../assets/blackhole.webm';

const navLinks = ['Home', 'Experience', 'Skills', 'Projects', 'Contact'];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Navbar = ({
  scrollToHome,
  scrollToExperience,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='relative w-full'>
      <video
        autoPlay
        loop
        muted
        className='w-full h-[500px] scale-[1.2] sm:scale-[1] rotate-180 object-cover mb-10 absolute top-[-150px]'
      >
        <source src={blackhole} type='video/webm' />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-[#07041c]/60 backdrop-blur-md flex items-center justify-between border-b border-gray-800 z-10 px-4 sm:px-6 md:px-10">
        {/* Logo + Name */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className='flex items-center'
        >
          <img src={glaxy} alt="Logo" className='w-[50px] h-[60px] object-contain' />
          <h2 className='text-white tracking-tight font-semibold text-xl sm:text-2xl ml-2'>Nishchay Mishra</h2>
        </motion.div>

        {/* Desktop Nav Links */}
        <motion.div
          className='hidden mr-0 lg:mr-40 lg:flex gap-10 bg-gray-700 px-6 py-2 rounded-full border border-gray-50'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((item, index) => (
            <motion.a
              key={index}
              onClick={() => {
                switch (item) {
                  case 'Home':
                    scrollToHome();
                    break;
                  case 'Experience':
                    scrollToExperience();
                    break;
                  case 'Skills':
                    scrollToSkills();
                    break;
                  case 'Projects':
                    scrollToProjects();
                    break;
                  case 'Contact':
                    scrollToContact();
                    break;
                  default:
                    break;
                }
              }}
              variants={itemVariants}
              className='text-base text-white cursor-pointer transition duration-300 hover:text-cyan-400'
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className='hidden md:flex gap-4 text-white text-2xl'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://www.linkedin.com/in/nishchay-mishra-6832a9229/"
            target="_blank"
            rel="noopener noreferrer"
            className='hover:text-blue-500 transition duration-300 hover:scale-110'
            variants={itemVariants}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/nishchayMish"
            target="_blank"
            rel="noopener noreferrer"
            className='hover:text-gray-300 transition duration-300 hover:scale-110'
            variants={itemVariants}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://x.com/Nishchay9436512"
            target="_blank"
            rel="noopener noreferrer"
            className='hover:text-blue-400 transition duration-300 hover:scale-110'
            variants={itemVariants}
          >
            <FaXTwitter />
          </motion.a>
        </motion.div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#07041c]/60 backdrop-blur-md border border-white/10 flex flex-col justify-center items-center gap-10 z-50"
          >
            <div
              className="absolute top-6 right-6 text-white text-3xl cursor-pointer hover:text-red-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 text-center"
            >
              {navLinks.map((item, index) => (
                <motion.a
                  key={index}
                  onClick={() => {
                    switch (item) {
                      case 'Home':
                        scrollToHome();
                        break;
                      case 'Experience':
                        scrollToExperience();
                        break;
                      case 'Skills':
                        scrollToSkills();
                        break;
                      case 'Projects':
                        scrollToProjects();
                        break;
                      case 'Contact':
                        scrollToContact();
                        break;
                      default:
                        break;
                    }
                    setMenuOpen(false); // Close the menu after click
                  }}
                  variants={itemVariants}
                  className='text-2xl text-white cursor-pointer transition duration-300 hover:text-cyan-400'
                >
                  {item}
                </motion.a>
              ))}
              <motion.div className='flex gap-6 text-white text-3xl justify-center' variants={containerVariants}>
                <motion.a
                  href="https://www.linkedin.com/in/nishchay-mishra-6832a9229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:text-blue-500 transition duration-300 hover:scale-110'
                  variants={itemVariants}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://github.com/nishchayMish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:text-gray-300 transition duration-300 hover:scale-110'
                  variants={itemVariants}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://x.com/Nishchay9436512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:text-blue-400 transition duration-300 hover:scale-110'
                  variants={itemVariants}
                >
                  <FaXTwitter />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
