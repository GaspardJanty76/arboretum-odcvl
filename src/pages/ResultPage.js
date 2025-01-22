import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const { globalScore } = location.state || { globalScore: 0 };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-green-600 py-6 px-6 flex justify-center items-center shadow-lg">
        <h1 className="text-4xl font-bold text-white">Résultats Finaux</h1>
      </header>

      <main className="flex-grow px-4 md:px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-green-600">Félicitations !</h2>
        <p className="text-xl mt-4">
          Vous avez terminé le quizz avec un score de :
        </p>
        <p className="text-4xl font-bold text-green-700 mt-2">
          {globalScore} bonnes réponses !
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
        <p>&copy; 2024 Arboretum Manoir d'argueil ODCVL.</p>
      </footer>
    </div>
  );
}

export default ResultPage;
