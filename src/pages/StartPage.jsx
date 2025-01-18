import React from "react";
import { FaLanguage, FaCrown } from "react-icons/fa";
import { GiBattleAxe, GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import myvideo1 from "../assets/My Video1.mp4";

// Componentă pentru fiecare link de capitol
const ChapterLink = ({ to, icon, label, iconColor }) => (
  <Link to={to}>
    <div className="flex items-center text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 cursor-pointer">
      {React.cloneElement(icon, { className: `mr-3 ${iconColor}` })}
      {label}
    </div>
  </Link>
);

// Componentă pentru fiecare test
const TestCard = ({ to, label, icon, iconColor }) => (
  <Link to={to}>
    <div className="flex flex-col items-center justify-center text-center bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 cursor-pointer">
      {React.cloneElement(icon, { className: `text-4xl ${iconColor} mb-4` })}
      <span className="text-2xl font-semibold text-gray-200">{label}</span>
    </div>
  </Link>
);

const StartPage = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-12 bg-black min-h-screen">
      {/* Titlu */}
      <h1 className="text-5xl font-serif text-white drop-shadow-lg">Introducere</h1>

      {/* Videoclipul de introducere */}
      <div className="w-full max-w-4xl">
        <video
          src={myvideo1}
          controls
          className="w-full rounded-lg shadow-md mb-8"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Titlu Capitole */}
      <h1 className="text-5xl font-serif text-white drop-shadow-lg">Capitole</h1>

      {/* Lista de capitole */}
      <div className="flex flex-col items-start space-y-6 p-6 bg-gray-800 rounded-lg shadow-md max-w-4xl w-full">
        <ChapterLink
          to="/razboaiele_daco-romane"
          icon={<GiBattleAxe />}
          label="1. Războaiele daco-romane"
          iconColor="text-red-400"
        />
        <hr className="border-gray-700 w-full" />
        <ChapterLink
          to="/romanizarea"
          icon={<FaLanguage />}
          label="2. Romanizarea și influența asupra limbii române"
          iconColor="text-blue-400"
        />
        <hr className="border-gray-700 w-full" />
        <ChapterLink
          to="/mostenirea"
          icon={<FaCrown />}
          label="3. Moștenirea culturală și identitatea națională a românilor"
          iconColor="text-green-400"
        />
      </div>

      {/* Titlu Teste */}
      <h2 className="text-4xl font-serif text-yellow-400 mt-12">Teste</h2>

      {/* Lista de teste */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <TestCard
          to="/test-razboi"
          label="Test: Războaiele daco-romane"
          icon={<GiCheckMark />}
          iconColor="text-red-400"
        />
        <TestCard
          to="/test-romanizarea"
          label="Test: Romanizarea"
          icon={<GiCheckMark />}
          iconColor="text-blue-400"
        />
        <TestCard
          to="/test-mostenirea"
          label="Test: Moștenirea culturală"
          icon={<GiCheckMark />}
          iconColor="text-green-400"
        />
      </div>
    </div>
  );
};

export default StartPage;
