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
          toast.error('Aïe, ce n\'est pas le bon arbre, retentez votre chance !');
          setErrorToastShown(true);
          setTimeout(() => setErrorToastShown(false), 3000);
        }
      }
      
    }
  };

  const handleError = (err) => {
    console.error(err);
    toast.error('Erreur de lecture du QR code.');
  };

  return (
    <div>
      <header className="bg-green-600 py-6 px-6 flex justify-between items-center shadow-lg">
        <div>
          <h1 className="text-4xl font-bold text-white">Arboretum | Le jeu</h1>
        </div>
        <a href="https://odcvl.org/le-manoir-d-argueil">
          <img
            src="/images/logo_odcvl.png"
            alt="Logo ODCVL"
            className="w-24 h-24 object-contain"
          />
        </a>
      </header>
      <ToastContainer />
      <main>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Indice : 
          <br></br>
          <span className="text-green-600">{parse(currentHint)}</span>
        </h2>
        <div className="flex justify-center mb-8">
          <QRScanner
            delay={300}
            style={{ width: '100%', maxWidth: '400px', borderRadius: '12px', overflow: 'hidden' }}
            onError={handleError}
            onScan={handleScan}
            key="environment"
          
            constraints={{ audio: false, video: { facingMode: "environment" }}}
          />
        </div>
        <p className="text-center text-gray-600 italic">
          Scannez le QR code pour trouver l'arbre correspondant !
        </p>
      </main>
      <footer className="bg-green-600 text-white text-center py-4">
        <p>&copy; 2024 Arboretum Manoir d'argueil ODCVL.</p>
      </footer>
    </div>
  );
}

export default Game;
