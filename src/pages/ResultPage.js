import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const { globalScore, selectedZone } = location.state || { globalScore: 0, selectedZone: localStorage.getItem("selectedZone") || "Zone inconnue" };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-green-600 py-6 px-6 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Arboretum <span className="text-yellow-300">| Les Résultats</span>
        </h1>
        <a href="https://odcvl.org/le-manoir-d-argueil">
          <img
            src="/images/logo_odcvl.png"
            alt="Logo ODCVL"
            className="w-16 h-16 object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>
      </header>

      <main className="flex-grow px-4 md:px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-green-600">Félicitations !</h2>
        <p className="text-xl mt-4">
          Vous avez terminé le quiz {selectedZone} avec un score de :
        </p>
        <p className="text-4xl font-bold text-green-700 mt-2">
          {globalScore} bonne(s) réponse(s) !
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-md shadow hover:bg-green-600"
          >
            Retour à l'accueil
          </a>
        </div>
      </main>

      <footer className="bg-green-600 text-white text-center py-4">
        <p>&copy;Arboretum Manoir d'argueil ODCVL.</p>
      </footer>
    </div>
  );
}

export default ResultPage;
