/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-Purple": "#B78EFE",
        "brand-White": "#F5F5F5",
        "brand-Black": "#333333",
      },
    },
  },
  plugins: [],
};
