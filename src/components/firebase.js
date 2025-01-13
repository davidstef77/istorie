import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Configurația Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFhijdzNZQVN3cnxO9ra2vUBm_8sSGCoc",
  authDomain: "istorie-d86a7.firebaseapp.com",
  databaseURL: "https://istorie-d86a7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "istorie-d86a7",
  storageBucket: "istorie-d86a7.firebasestorage.app",
  messagingSenderId: "432205113421",
  appId: "1:432205113421:web:6fa2be38d0394963c55404",
  measurementId: "G-JVH38D96DG"
};

// Inițializare Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obține obiectul de autentificare

// Google Sign-In
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in: ", user.email);

    // Salvează utilizatorul în localStorage, adăugând și medaliile (sau alte date suplimentare)
    const userData = {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      // Poți adăuga și alte informații aici, de exemplu, medalii
      medals: []  // Inițial, medaliile pot fi un array gol
    };
    localStorage.setItem('user', JSON.stringify(userData));

    return userData;
  } catch (error) {
    console.error("Google sign-in error:", error.message);
    throw error;
  }
};

// Sign out
const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");

    // Șterge datele utilizatorului din localStorage la logout
    localStorage.removeItem('user');
  } catch (error) {
    console.error("Sign-out error:", error.message);
  }
};

// Obține utilizatorul din localStorage dacă nu este logat în Firebase
export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Recuperează utilizatorul din localStorage
  if (user) {
    return user;
  } else {
    return auth.currentUser; // Dacă nu găsești utilizatorul în localStorage, verifică în Firebase
  }
};

export { auth, signInWithGoogle, logOut };
