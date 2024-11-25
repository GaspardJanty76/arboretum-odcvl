/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          backgroundCustom: '#FBF5E9', // Ajout de ta couleur personnalisée
        },
      },
    },
    plugins: [],
  };