import React, { useState } from "react";
import { signInWithGoogle } from "../firebase"; // Importă funcțiile din firebase.js
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Importă useNavigate

const LogIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Creează instanța navigate
  
  // Handle login cu Google
  const handleLogin = async () => {
    try {
      const userData = await signInWithGoogle();
      // Navighează către pagina de cont după autentificare
      navigate("/cont");
    } catch (error) {
      setErrorMessage("Eroare la autentificare.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-6">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Autentificare
      </h1>

      {/* Secțiunea de login cu Google */}
      <div className="flex flex-col items-center w-full sm:w-96  rounded-lg p-8 shadow-xl space-y-6">
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center space-x-3"
        >
          <FaGoogle className="text-xl" />
          <span className="font-semibold">Autentifică-te cu Google</span>
        </button>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
        )}
      </div>

      
    </div>
  );
};

export default LogIn;
