import React from 'react';
import {  FaLanguage, FaCrown } from 'react-icons/fa';
import { GiBattleAxe} from 'react-icons/gi'

const StartPage = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-12 bg-black min-h-screen">
      <h1 className="text-5xl font-serif text-white drop-shadow-lg">
        Cuprins
      </h1>
      <div className="flex flex-col items-start space-y-6 p-6 bg-gray-800 rounded-lg shadow-md max-w-4xl w-full">
        <a href='/razboaiele_daco-romane'>
          <div
            className="flex items-center text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <GiBattleAxe className="mr-3 text-red-400" />
            1. Războaiele daco-romane
          </div>
        </a>
        <hr className="border-gray-700 w-full" />
        <a href='/romanizarea'><div
          className="flex items-center text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <FaLanguage className="mr-3 text-blue-400" />
          2. Romanizarea și influența asupra limbii române
        </div> </a>
        
        <hr className="border-gray-700 w-full" />
        <a href='/mostenirea'><div
          className="flex items-center text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <FaCrown className="mr-3 text-green-400" />
          3. Moștenirea culturală și identitatea națională a românilor
        </div>
        </a>
      </div>
    </div>
  );
};

export default StartPage;
