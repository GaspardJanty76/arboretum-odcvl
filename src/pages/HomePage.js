import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [selectedZone, setSelectedZone] = useState("diamant"); // Zone par défaut
  const navigate = useNavigate();

  // Récupérer la zone sélectionnée depuis localStorage lors du chargement
  useEffect(() => {
    const storedZone = localStorage.getItem("selectedZone");
    if (storedZone) {
      setSelectedZone(storedZone); // Mettre à jour l'état si une zone est trouvée
    }
  }, []); // Cette fonction s'exécute uniquement au premier rendu

  const handleStartGame = () => {
    localStorage.setItem("totalScore", "0");
    localStorage.removeItem("quizStarted");
    // Sauvegarder selectedZone dans localStorage avant de naviguer
    localStorage.setItem("selectedZone", selectedZone); 
    navigate(`/jeu?zone=${selectedZone}`);
  };

  const handleQrCodes = () => {
    navigate(`/qr-codes`);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-600 via-green-400 to-green-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Bienvenue dans l'Arboretum
      </h1>
      <p className="text-lg md:text-xl px-4 mb-6 text-center max-w-2xl">
        Découvrez notre collection d'arbres, participez à des quizz amusants, et explorez notre univers à travers des QR codes interactifs !
      </p>

      {/* Sélecteur de zone */}
      <div className="mb-6">
        <label className="text-lg font-semibold">Choisissez une zone :</label>
        <select
          value={selectedZone}
          onChange={(e) => {
            setSelectedZone(e.target.value);  // Mettre à jour l'état de selectedZone
            localStorage.setItem("selectedZone", e.target.value);  // Sauvegarder la nouvelle zone dans localStorage
          }}
          className="ml-2 p-2 rounded-lg text-green-800"
        >
          <option value="diamant">Diamant</option>
          <option value="perle">Perle</option>
          <option value="platine">Platine</option>
        </select>
      </div>

      <button
        onClick={handleStartGame}
        className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
      >
        Jouer au Quiz
      </button>
      <br />
      <button
        onClick={handleQrCodes}
        className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
      >
        Qr codes
      </button>
    </div>
  );
}

export default HomePage;
