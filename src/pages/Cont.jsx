import React, { useState, useEffect } from "react";
import { logOut, getUser } from "../components/firebase";
import { useNavigate } from "react-router-dom";

export const Cont = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getUser(); // Funcție care returnează utilizatorul logat
    setUser(currentUser);
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login"); // Redirecționează utilizatorul către login
    } catch (error) {
      console.error("Eroare la logout", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-6">
      <h1 className="text-4xl font-semibold text-white mb-8">
        Salut, {user ? user.displayName : "Utilizator"}
      </h1>

      <button
        onClick={handleLogout}
        className="py-2 px-6 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-105"
      >
        Ieșire
      </button>
    </div>
  );
};
