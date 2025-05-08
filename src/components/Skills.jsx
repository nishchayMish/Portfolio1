import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiFirebase, SiMongodb, SiRedux,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
};

const Skills = () => {
  return (
    <div className="px-6 md:px-12 py-16 w-full bg-[#030014] text-white">
      <motion.h1
        className="text-4xl font-bold mb-12 px-2 md:px-2"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className='text-amber-500'>Skills</span>
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-[300px] md:h-40 bg-[#1f1f2e] rounded-xl shadow-xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:bg-[#26263c]"
            variants={cardVariants}
          >
            <div className="text-4xl sm:text-5xl mb-2">{skill.icon}</div>
            <p className="text-sm sm:text-base font-medium mt-2 text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
