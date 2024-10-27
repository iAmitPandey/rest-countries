/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Nunito", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
    },
  },
  plugins: [],
};
