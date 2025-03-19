import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [selectedZone, setSelectedZone] = useState("diamant");
  const navigate = useNavigate();

  useEffect(() => {
    const storedZone = localStorage.getItem("selectedZone");
    if (storedZone) {
      setSelectedZone(storedZone);
    }
  }, []);

  const handleStartGame = () => {
    localStorage.setItem("totalScore", "0");
    localStorage.removeItem("quizStarted");
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
        Découvrez notre collection d'arbres, participez à des quiz amusants, et explorez notre univers à travers des QR codes interactifs !
      </p>

      <div className="mb-6">
        <label className="text-lg font-semibold">Choisissez une zone :</label>
        <select
          value={selectedZone}
          onChange={(e) => {
            setSelectedZone(e.target.value);
            localStorage.setItem("selectedZone", e.target.value);
          }}
          className="ml-2 p-2 rounded-lg text-green-800"
        >
          <option value="perle">Perle (~50 min)</option>
          <option value="diamant">Diamant (~40 min)</option>
          <option value="platine">Platine (~30 min)</option>
        </select>
      </div>

      <button
        onClick={handleStartGame}
        className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
      >
        Lancer l'activité
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
