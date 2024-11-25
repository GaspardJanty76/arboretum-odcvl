import React from "react";
import { Link } from "react-router-dom";

const trees = [
  { id: 1, name: "Chêne" },
  { id: 2, name: "Érable" },
  { id: 3, name: "Pin" },
];

const createSlug = (name) => {
  return name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Bienvenue à l'Arboretum</h1>
    </div>
  ); 
}

export default HomePage;
