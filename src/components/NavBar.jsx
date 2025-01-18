import React, { useEffect, useState } from 'react';
import { FaUser, FaHome } from 'react-icons/fa'; // Importăm pictogramele din react-icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in when the component is mounted
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Actualizează starea pe baza tokenului
  }, []);

  // Navighează la cont sau la pagina principală în funcție de starea de login
  const handleAccountClick = () => {
    if (isLoggedIn) {
      navigate('/cont'); 
    } else {
      navigate('/login'); // Dacă utilizatorul nu este logat, merge la pagina de login
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between md:justify-center items-center space-x-4 md:space-x-8 text-orange-400 font-semibold">
        {/* Pictogramă Home */}
        <li className="flex items-center">
          <a
            onClick={(e) => {
              e.preventDefault(); // Prevent default behavior of the anchor tag
              navigate('/'); // Navigate to home page
            }}
            className="hover:text-lg transition-all duration-75 flex items-center justify-center cursor-pointer"
          >
            <FaHome className="text-2xl md:text-xl" />
            <span className="hidden md:inline ml-2">Acasă</span>
          </a>
        </li>

        
      </ul>
    </nav>
  );
};

export default Navbar;
