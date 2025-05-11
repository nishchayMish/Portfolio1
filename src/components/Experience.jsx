import React from 'react';
import { motion } from 'framer-motion';
import uno from '../assets/uno.png';
import dos from '../assets/dos.png';

const experiences = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    description: 'Assisted in the development of a web-based platform using React.js enhancing interactivity.',
    image: uno,
  },
  {
    id: 2,
    title: 'Freelance App Dev Project',
    description: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    image: dos,
  },
];

// Animation variant
const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Experience = () => {
  return (
    <div className="px-6 md:px-12 py-16 w-full bg-[#030014] text-white">
      <h1 className="mt-10 text-4xl md:text-4xl font-bold tracking-tight mb-12">
        My <span className="text-purple-500">Work Experience</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative overflow-hidden rounded-2xl p-[2px] group"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute w-full h-full animate-glowBar rounded-2xl border border-white/10" />
              <div className="glow-bar absolute w-[10px] h-[10px] bg-white rounded-full blur-[0.5px] animate-glowLine" />
            </div>

            {/* Card Content */}
            <div className="relative z-10 flex gap-6 items-start bg-gradient-to-r from-[#121826] to-[#1a1f2e] border border-white/10 p-6 rounded-2xl shadow-lg">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h2 className="text-xl font-semibold mb-2">{exp.title}</h2>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glowing animation styles */}
      <style>{`
        @keyframes glowLine {
          0% {
            top: 0; left: 0;
            width: 100%; height: 2px;
          }
          25% {
            top: 0; left: 100%;
            width: 2px; height: 100%;
          }
          50% {
            top: 100%; left: 100%;
            width: 100%; height: 2px;
          }
          75% {
            top: 100%; left: 0;
            width: 2px; height: 100%;
          }
          100% {
            top: 0; left: 0;
            width: 100%; height: 2px;
          }
        }

        .animate-glowLine {
          animation: glowLine 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Experience;
