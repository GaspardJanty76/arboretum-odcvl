import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Quizz() {
  useEffect(() => {
    // Affiche un toast de succès à l'entrée sur la page du quiz
    toast.success('Bravo, c’est le bon arbre !');
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-green-600 py-6 px-6 flex justify-between items-center shadow-lg">
        <h1 className="text-4xl font-bold text-white">Quizz</h1>
        <a href="https://odcvl.org/le-manoir-d-argueil">
          <img
            src="/images/logo_odcvl.png"
            alt="Logo ODCVL"
            className="w-24 h-24 object-contain"
          />
        </a>
      </header>

      {/* Container pour afficher les notifications */}
      <ToastContainer />

      <main className="flex-grow px-4 md:px-8 py-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Félicitations, vous avez trouvé tous les arbres et terminé le parcours ! Préparez-vous pour le quiz !
        </h2>
        {/* Ajoutez ici le contenu du quiz ou des instructions */}
      </main>

      <footer className="bg-green-600 text-white text-center py-4">
        <p>&copy; 2024 Arboretum Manoir d'argueil ODCVL.</p>
      </footer>
    </div>
  );
}

export default Quizz;
