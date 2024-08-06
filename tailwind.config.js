/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "340px",
      // => @media (min-width: 640px) { ... }

      desktop: "1000px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      backgroundImage: {
        header:
          "url('https://www.golestan.com/wp-content/uploads/2023/01/header-back-1.png')",
          recipe:
          "url('./public/images/recipe-baner-1.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
};
