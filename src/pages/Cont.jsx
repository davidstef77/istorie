import React, { useState, useEffect } from "react";
import { logOut, getUser } from "../components/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../components/firebase"; // Configurarea Firebase
import { useNavigate } from "react-router-dom";

export const Cont = () => {
  const [user, setUser] = useState(null); // Utilizatorul logat
  const [scores, setScores] = useState([]); // Rezultatele testelor
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getUser(); // Obține utilizatorul logat
    setUser(currentUser);

    if (currentUser) {
      fetchScores(currentUser.uid); // Obține scorurile utilizatorului
    }
  }, []);

  // Funcție pentru a obține scorurile utilizatorului din Firebase
  const fetchScores = async (userId) => {
    try {
      const scoresCollection = collection(db, "results");
      const q = query(scoresCollection, where("userId", "==", userId)); // Filtrează după ID-ul utilizatorului
      const querySnapshot = await getDocs(q);
      const userScores = querySnapshot.docs.map((doc) => doc.data());
      setScores(userScores);
    } catch (error) {
      console.error("Eroare la obținerea scorurilor:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login"); // Redirecționează utilizatorul către pagina de login
    } catch (error) {
      console.error("Eroare la logout", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-6">
      <h1 className="text-4xl font-semibold text-white mb-8">
        Salut, {user ? user.displayName : "Utilizator"}
      </h1>

      {/* Chenar cu punctajele */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Rezultatele tale la teste:
        </h2>
        {scores.length > 0 ? (
          <ul className="space-y-4">
            {scores.map((score, index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-700 p-4 rounded-md text-white"
              >
                <span className="font-medium">{score.test}</span>
                <span className="font-semibold">{score.score} puncte</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Nu ai completat încă niciun test.</p>
        )}
      </div>

      {/* Buton de logout */}
      <button
        onClick={handleLogout}
        className="py-2 px-6 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-105"
      >
        Ieșire
      </button>
    </div>
  );
};
