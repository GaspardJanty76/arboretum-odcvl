import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-600 via-green-400 to-green-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Bienvenue dans l'Arboretum
      </h1>
      <p className="text-lg md:text-xl mb-6 text-center max-w-2xl">
        Découvrez notre collection d'arbres, participez à des quizz amusants, et
        explorez notre univers à travers des QR codes interactifs !
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/jeu"
          className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
        >
          Jouer au Quizz
        </Link>
        <Link
          to="/qr-codes"
          className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
        >
          Imprimer les QR codes
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
