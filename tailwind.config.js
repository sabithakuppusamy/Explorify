/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Temp fonts
    fontFamily: {
      title: "Space Grotesk, sans-serif",
      main: "Space Grotesk, sans-serif",
    },

    // Breakpoints for responsive design
    screens: {
      sm: "screen and (max-width: 640px)",
      md: "screen and (max-width: 768px)",
      lg: "screen and (max-width: 1024px)",
      xl: "screen and (max-width: 1280px)",
    },
    extend: {},
  },
  plugins: [],
};
