import React, { useRef } from "react";
import { QRCodeSVG } from "qrcode.react"; // Utilisation de QRCodeSVG
import treeData from "../data/treesData";

function QRCodePage() {
  const printRef = useRef(null);

  const handlePrint = () => {
    if (printRef.current) {
      const printContent = printRef.current.innerHTML;
      const printWindow = window.open("", "_blank");
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>QR Codes des Arbres</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f9f8f6;
                padding: 20px;
              }
              .qr-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
              }
              .qr-item {
                text-align: center;
                margin: 10px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 8px;
              }
              .qr-item h2 {
                margin-top: 10px;
                font-size: 16px;
              }
            </style>
          </head>
          <body>
            ${printContent}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f8f6] text-gray-800">
      <header className="bg-green-600 py-6 px-6 text-center w-full shadow-lg">
        <h1 className="text-4xl font-bold text-white">QR Codes des Arbres</h1>
      </header>
      <button
        onClick={handlePrint}
        className="mt-6 px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300 self-center"
      >
        Imprimer tous les QR Codes
      </button>
      <main
        ref={printRef}
        className="flex-grow w-full px-4 md:px-8 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Object.entries(treeData).map(([treeName, treeInfo]) => (
          <div
            key={treeName}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center qr-item"
          >
            <QRCodeSVG
              value={`${window.location.origin}/arbre/${treeName}`}
              size={128}
            />
            <h2 className="mt-4 text-xl font-semibold text-green-600">
              {treeInfo.name}
            </h2>
          </div>
        ))}
      </main>

      <footer className="bg-green-600 text-white text-center py-4 w-full mt-auto">
        <p>&copy; 2025 Arboretum Manoir d'Argueil ODCVL.</p>
      </footer>
    </div>
  );
}

export default QRCodePage;
