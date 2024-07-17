export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCEED5", // Définir une couleur primaire personnalisée
        secondary: "#003459",
        colorwhite: "#FFFFFF", // Définir une couleur secondaire personnalisée
        colorblack: "#000000", // Vous pouvez ajouter d'autres couleurs personnalisées ici si nécessaire
      },
      fontFamily: {
        custom: ['"Lato-Black.ttf"', "sans-serif"],
        sans: ["Roboto", "Arial", "sans-serif"], // Définir une police de caractères personnalisée
        // Vous pouvez ajouter d'autres polices personnalisées ici si nécessaire
      },
      boxShadow: {
        custom: "0px 5px 15px 5px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
