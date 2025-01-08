import React from 'react';
import HeroImage from '../assets/imagini/3-decebal.jpg';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  
  return (
    
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center relative"
      style={{ backgroundImage: `url(${HeroImage})` }}
      overflow-x-hidden
    >
      <div className="text-center text-white p-6">
        <h1 className="text-5xl font-extrabold mb-4">Etnogeneza românească</h1>
        <p className="text-lg mb-6">Explorând originile națiunii române</p>
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-full shadow-md hover:bg-yellow-600" ><a href='/start'>
          Începe acum
          </a></button>
      </div>
    </div>
  );
};

export default Hero;
