/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8fafc", // light gray background
        secondary: "#fcd34d", // soft yellow accent
        "secondary-light": "#fde68a", // lighter hover
        text: "#1f2937", // main text
        "text-light": "#374151", // secondary text
      },
    },
  },
  plugins: [],
};
