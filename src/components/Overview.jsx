import React from 'react';
import Card from './Card';

import mobile from '../assets/mobile.png';
import backend from '../assets/backend.png';
import web from '../assets/web.png';

const userDetails = [
    { id: 1, name: 'Frontend Developer', icon: mobile },
    { id: 2, name: 'Backend Developer', icon: backend },
    { id: 3, name: 'React Native Developer', icon: web },
];  

const Overview = () => {
  return (
    <div className='px-6 md:px-12 py-16 w-full bg-[#030014]'>
      <h1 className='text-white text-4xl font-semibold'>Overview</h1>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

        {
            userDetails.map((user) => (
                <Card key={user.id} name={user.name} icon={user.icon} />
            ))
        }

      </div>
    </div>
  );
};

export default Overview;
