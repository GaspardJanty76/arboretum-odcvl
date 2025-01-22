import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import treeData from "../data/treesData";

function QRCodePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <header className="bg-green-600 py-6 px-6 text-center w-full shadow-lg">
        <h1 className="text-4xl font-bold text-white">QR Codes des Arbres</h1>
      </header>

      <main className="w-full px-4 md:px-8 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(treeData).map(([treeName, treeInfo]) => (
          <div
            key={treeName}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
          >
            <QRCodeCanvas
              value={`${window.location.origin}/arbre/${treeName}`}
              size={128}
            />

            <h2 className="mt-4 text-xl font-semibold text-green-600">
              {treeInfo.name}
            </h2>
          </div>
        ))}
      </main>

      <footer className="bg-green-600 text-white text-center py-4 w-full">
        <p>&copy; 2024 Arboretum Manoir d'Argueil ODCVL.</p>
      </footer>
    </div>
  );
}

export default QRCodePage;
