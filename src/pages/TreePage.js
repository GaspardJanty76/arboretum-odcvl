import React, { useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import treesData from "../data/treesData";
import './TreePage.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TreePage() {
  const { treeName } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tree = treesData[treeName];
  const nextIndex = searchParams.get('nextIndex');
  const success = searchParams.get('success');
  const isQuiz = searchParams.get('isQuiz') === 'true';

  useEffect(() => {
    if (success === "true") {
      toast.success('Bravo, c’est le bon arbre !', { position: "top-center"});
    }
  }, [success]);

  if (!tree) {
    return <h1 className="text-center text-red-600">Arbre non trouvé</h1>;
  }

  const treeUrl = `https://f376-194-3-2-195.ngrok-free.app/arbre/${treeName}`;
  
  const treeNames = Object.keys(treesData);
  const currentIndex = treeNames.indexOf(treeName);

  const isLastTree = currentIndex === treeNames.length - 1;

  const handleNext = () => {
    if (nextIndex !== null) {
      if (isQuiz) {
        navigate(`/quiz?nextIndex=${nextIndex}&treeName=${treeName}`);
      } else {
        navigate(`/arbre/${treeName}?nextIndex=${nextIndex}`);
      }
    } else {
      navigate(`/quiz?treeName=${treeName}`);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-green-600 py-6 px-6 flex justify-between items-center shadow-lg">
        <div>
          <h1 className="text-4xl font-bold text-white">{tree.name}</h1>
          <h2 className="text-xl italic text-gray-200">{tree.latin}</h2>
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

      <main className="flex-grow px-4 md:px-8 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-2xl font-semibold text-green-600">Description</h3>
          <p className="text-gray-800 mt-2">{tree.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-600 text-white rounded-lg p-4">
            <h3 className="text-2xl font-semibold">Fruit</h3>
            <p className="mt-2">{tree.fruit}</p>
            <img
              src={tree.fruitImage}
              alt={`Fruit de ${tree.name}`}
              className="object-cover h-48 w-full my-4 rounded-md shadow-lg"
            />
          </div>

          <div className="bg-green-600 text-white rounded-lg p-4">
            <h3 className="text-2xl font-semibold">Fleur</h3>
            <p className="mt-2">{tree.fleur}</p>
            <img
              src={tree.fleureImage}
              alt={`Fleur de ${tree.name}`}
              className="object-cover h-48 w-full my-4 rounded-md shadow-lg"
            />
          </div>

          <div className="bg-green-600 text-white rounded-lg p-4">
            <h3 className="text-2xl font-semibold">Histoire</h3>
            <p className="mt-2">{tree.histoire}</p>
          </div>
          <div className="bg-green-600 text-white rounded-lg p-4">
            <h3 className="text-2xl font-semibold">Feuille</h3>
            <p className="mt-2">{tree.feuille}</p>
            <img
              src={tree.feuilleImage}
              alt={`Feuille de ${tree.name}`}
              className="object-cover h-48 w-full my-4 rounded-md shadow-lg"
            />
          </div>
          <div className="bg-green-600 text-white rounded-lg p-4">
            <h3 className="text-2xl font-semibold">Saisons</h3>
            <p className="mt-2">{tree.saison}</p>
          </div>
        </div>

        {isQuiz && (
  (isLastTree || nextIndex !== null || nextIndex === null) && (
    <div className="text-center mt-8">
      <button
        onClick={handleNext}
        className="px-6 py-3 bg-green-500 text-white font-bold rounded-md shadow hover:bg-green-600"
      >
        ➔ Passer au Quiz
      </button>
    </div>
  )
)}

      </main>

      <footer className="bg-green-600 text-white text-center py-4">
        <p>&copy;Arboretum Manoir d'argueil ODCVL.</p>
      </footer>
    </div>
  );
}

export default TreePage;
