import React, { useRef } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandThreejs } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Hermes Online Store",
      description: "An e-commerce platform built using React, HTML, and CSS.",
      image: "https://via.placeholder.com/300x200",
      technologies: [<FaReact className='text-blue-500' />, <FaHtml5 className='text-orange-500' />, <FaCss3Alt className='text-blue-500' />, <FaGithub className='text-gray-500' />],
    },
    {
      id: 2,
      name: "Crypto Sphere",
      description: "Track your favorite cryptocurrencies with real-time updates.",
      image: "https://via.placeholder.com/300x200",
      technologies: [<FaReact className='text-blue-500' />, <IoLogoFirebase className='text-yellow-500' />, <FaHtml5 className='text-orange-500' />, <FaCss3Alt className='text-blue-500' />, <FaGithub className='text-gray-500' />],
    },
    {
      id: 3,
      name: "Netflix Clone",
      description: "A clone of Netflix with Firebase authentication and movie listings.",
      image: "https://via.placeholder.com/300x200",
      technologies: [<FaReact className='text-blue-500' />, <IoLogoFirebase className='text-yellow-500' />, <FaHtml5 className='text-orange-500' />, <FaCss3Alt className='text-blue-500' />, <FaGithub className='text-gray-500' />],
    },
    {
      id: 4,
      name: "Recreated Apple's Iphone website",
      description: "A clone of Apple's iPhone website using React and and used animation libraries like Three.js, Framer-motion, GSAP.",
      image: "https://via.placeholder.com/300x200",
      technologies: [<FaReact className='text-blue-500' />, <FaHtml5 className='text-orange-500' />,
       <FaCss3Alt className='text-blue-500' />, <TbBrandFramerMotion className='text-yellow-500'/>, <TbBrandThreejs className='text-blue-500'/>, <FaGithub className='text-gray-500' />],
    },
  ];

  const handleMouseMove = (e, cardRef) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (cardRef) => {
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div className='px-6 md:px-12 py-16 w-full bg-[#030014]'>
      <h2 className='text-white text-4xl font-bold mb-8'>
        My <span className='text-indigo-500'>Projects</span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => {
          const cardRef = useRef(null);

          return (
            <div
              key={project.id}
              ref={cardRef}
              className=' group bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col min-h-[420px] transition-all duration-300 ease-out will-change-transform border border-indigo-500 hover:shadow-[0_0_15px_#6366f1]'
              onMouseMove={(e) => handleMouseMove(e, cardRef)}
              onMouseLeave={() => handleMouseLeave(cardRef)}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <img
                src="https://th.bing.com/th/id/R.78a13c9eb31108addb76f77ada4589ff?rik=b%2fIodCIvyGbxCA&riu=http%3a%2f%2ffiles.all-free-download.com%2fdownloadfiles%2fwallpapers%2f1920_1080%2fpeaceful_lake_wallpaper_landscape_nature_1208.jpg&ehk=6EYMLnN48Cs4mGNjCqvvjwaPz6MF2KRLIUOhJG57Z8g%3d&risl=&pid=ImgRaw&r=0"
                alt={project.name}
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h3 className='text-white text-xl font-semibold mb-2'>{project.name}</h3>
              <p className='text-white text-sm mb-4 flex-grow'>{project.description}</p>
              <div className='flex justify-between items-center mt-auto'>
                <div className='flex space-x-2'>{project.technologies}</div>
                <button className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-transform duration-200 transform hover:scale-105 hover:shadow-md'>
                  Live Demo
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
