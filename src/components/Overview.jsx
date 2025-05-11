import React from 'react';
import Card from './Card';

import mobile from '../assets/mobile.png';
import backend from '../assets/backend.png';
import web from '../assets/web.png';
import { motion } from 'framer-motion';

const userDetails = [
    { id: 1, name: 'Frontend Developer', icon: mobile },
    { id: 2, name: 'Backend Developer', icon: backend },
    { id: 3, name: 'React Native Developer', icon: web },
];

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const Overview = () => {
  return (
    <div className='px-6 md:px-12 py-16 w-full bg-[#030014]'>
      <h1 className='text-white text-4xl font-semibold'>Overview</h1>

      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}  // triggers when 20% of the element is in view
        variants={cardVariant}
      >
        {userDetails.map((user) => (
            <motion.div key={user.id} variants={cardVariant}>
              <Card name={user.name} icon={user.icon} />
            </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Overview;
