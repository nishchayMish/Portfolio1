import React from 'react';

const Card = ({ name, icon }) => {
  return (
    <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-[length:400%_400%] animate-gradient-border">
      <div className="bg-[#0f0f2d] rounded-2xl p-6 flex flex-col items-center justify-center text-white w-full h-full">
        <div className="w-20 h-20 mb-4 flex justify-center items-center bg-[#1a1a3d] rounded-full shadow-md overflow-hidden">
          <img
            src={icon}
            alt={name}
            className="w-10 h-10 object-contain transition-transform duration-1000 group-hover:rotate-180"
          />
        </div>
        <h2 className="text-lg font-semibold tracking-wide">{name}</h2>
      </div>
    </div>
  );
};

export default Card;
