import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QRScanner from 'react-qr-scanner';
import treesData from '../data/treesData';
import parse from 'html-react-parser';

function Game() {
  const [searchParams] = useSearchParams();
  const initialIndex = parseInt(searchParams.get('currentIndex')) || 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [currentHint, setCurrentHint] = useState('');
  const [errorToastShown, setErrorToastShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const treeKeys = Object.keys(treesData);
    if (treeKeys[currentIndex]) {
      setCurrentHint(treesData[treeKeys[currentIndex]].hint);
    }
  }, [currentIndex]);

  const handleScan = (data) => {
    if (data) {
      const url = new URL(data.text);
      const treeName = url.pathname.split('/').pop();

      const treeKeys = Object.keys(treesData);
      const correctTreeKey = treeKeys[currentIndex];

      if (treeName === correctTreeKey) {
        setTimeout(() => {
          if (currentIndex < treeKeys.length - 1) {
            navigate(`/arbre/${treeName}?nextIndex=${currentIndex + 1}&isQuiz=true`);
          } else {
            navigate(`/arbre/${treeName}?isQuiz=true`);
          }
        }, 1000);
      } else {
        if (!errorToastShown) {
          toast.error('Aïe, ce n\'est pas le bon arbre, retentez votre chance !', { theme: 'dark' });
          setErrorToastShown(true);
          setTimeout(() => setErrorToastShown(false), 3000);
        }
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    toast.error('Erreur de lecture du QR code.', { theme: 'dark' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-100 via-green-50 to-white text-gray-800">
      <header className="bg-green-600 py-6 px-6 flex justify-between items-center shadow-lg">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            Arboretum <span className="text-yellow-300">| Le Jeu</span>
          </h1>
        </div>
        <a href="https://odcvl.org/le-manoir-d-argueil">
          <img
            src="/images/logo_odcvl.png"
            alt="Logo ODCVL"
            className="w-16 h-16 object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>
      </header>

      <ToastContainer />

      <main className="flex-grow px-4 py-6 flex flex-col items-center">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-green-800 mb-4">Indice</h2>
          <p className="text-gray-700 text-lg">{parse(currentHint)}</p>
        </div>

        <div className="mt-10 w-full max-w-xs md:max-w-sm relative">
          <div className="bg-gray-100 border-2 border-dashed border-green-500 rounded-xl overflow-hidden shadow-lg">
            <QRScanner
              delay={300}
              style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}
              onError={handleError}
              onScan={handleScan}
              constraints={{ audio: false, video: { facingMode: 'environment' } }}
            />
          </div>
        </div>

        <p className="text-center text-gray-600 italic mt-6">
          Scannez le QR code pour trouver l'arbre correspondant !
        </p>
      </main>

      <footer className="bg-green-600 text-white text-center py-4 mt-6">
        <p className="text-sm">
          &copy; 2025 Arboretum Manoir d'Argueil ODCVL.
        </p>
      </footer>
    </div>
  );
}

export default Game;
