import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import treeData from '../data/treesData';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(
    parseInt(localStorage.getItem('totalScore') || '0')
  );

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const treeName = searchParams.get('treeName');
  const nextIndex = searchParams.get('nextIndex');
  const tree = treeData[treeName];

  useEffect(() => {
    if (currentQuestionIndex === 0 && !localStorage.getItem('quizStarted')) {
      localStorage.setItem('quizStarted', 'true');
      setTotalScore(0);
      localStorage.setItem('totalScore', '0');
    }
  }, []);

  if (!tree) {
    return (
      <div>
        <h1>Erreur: Arbre non trouvé !</h1>
        <p>L'arbre spécifié n'existe pas. Veuillez vérifier les paramètres.</p>
      </div>
    );
  }

  const currentQuestion = tree.question;

  const isImage = (choice) => /\.(jpg|jpeg|png|gif|svg)$/i.test(choice);

  const handleAnswerClick = (choice) => {
    setSelectedAnswer(choice);

    if (choice === currentQuestion.correctAnswer) {
      setIsAnswerCorrect(true);
      const updatedTotalScore = totalScore + 1;
      setTotalScore(updatedTotalScore);
      localStorage.setItem('totalScore', updatedTotalScore);
    } else {
      setIsAnswerCorrect(false);
    }

    setTimeout(() => setShowResult(true), 2000);
  };

  const handleFinishQuiz = () => {
    navigate('/fin', { state: { globalScore: totalScore } });
    localStorage.removeItem('quizStarted');
    localStorage.removeItem('totalScore');
  };

  const handleNext = () => {
    if (nextIndex) {
      navigate(`/jeu?currentIndex=${nextIndex}`);
    } else {
      handleFinishQuiz();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-green-600 py-6 px-6 flex justify-between items-center shadow-lg">
        <h1 className="text-4xl font-bold text-white">Quizz Arboretum</h1>
        <a href="https://odcvl.org/le-manoir-d-argueil">
          <img
            src="/images/logo_odcvl.png"
            alt="Logo ODCVL"
            className="w-24 h-24 object-contain"
          />
        </a>
      </header>

      <main className="flex-grow px-4 md:px-8 py-6">
        {!showResult ? (
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Question {currentQuestionIndex + 1}/{1}
            </h2>
            <p className="text-xl mb-4">{currentQuestion.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(choice)}
                  disabled={selectedAnswer !== null}
                  className={`py-3 px-6 rounded-lg shadow font-bold text-white flex justify-center items-center ${
                    selectedAnswer
                      ? choice === currentQuestion.correctAnswer
                        ? 'bg-green-500'
                        : choice === selectedAnswer
                        ? 'bg-red-500'
                        : 'bg-gray-400'
                      : 'bg-gray-500 hover:bg-gray-600'
                  }`}
                >
                  {isImage(choice) ? (
                    <img
                      src={choice}
                      alt={`Option ${index + 1}`}
                      className="max-h-48 w-full object-contain"
                    />
                  ) : (
                  <span className="text-center text-lg">{choice}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Résultat</h2>
            <p className="text-xl">Score actuel : {totalScore}</p>
            <div className="mt-6">
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-green-500 text-white font-bold rounded-md shadow hover:bg-green-600"
              >
                {nextIndex ? "Voir l'arbre suivant" : "Voir les résultats"}
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-green-600 text-white text-center py-4">
        <p>&copy; 2024 Arboretum Manoir d'argueil ODCVL.</p>
      </footer>
    </div>
  );
}

export default Quiz;
