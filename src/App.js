import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TreePage from "./pages/TreePage";
import Game from "./pages/Game";
import Quizz from './components/Quizz';
import ResultPage from './pages/ResultPage';
import QRCodePage from "./pages/QRCodePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-backgroundCustom">
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<Quizz />} />
            <Route path="/arbre/:treeName" element={<TreePage />} />
            <Route path="/jeu" element={<Game />} />
            <Route path="/fin" element={<ResultPage />} />
            <Route path="/qr-codes" element={<QRCodePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
