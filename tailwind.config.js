/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
        theme: {
          "100": "#4f46e5", "200": "#4338ca", "800": "#04081f", "900": "#020716", "700": "#1B1A55", "600": "#535C91", "500": "#9290C3"
        }
      }
    },
  },
  plugins: [],
}

