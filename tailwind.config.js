/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./bioradar/webapp_static/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          bg: "#fcfcf0",
          contrast: "#f8fef4",
          pink: "#bd3b67",
          green: "#689660",
          dark: "#020404",
          cream: "#fcfcf0",
          sage: "#f8fef4",
          border: "#e2e6d8",
          card: "#ffffff",
          muted: "#5a6258"
        }
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"Poppins"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Bungee"', 'cursive', 'sans-serif'],
        display: ['"Bungee"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'eco-sm': '0 2px 8px rgba(2, 4, 4, 0.04)',
        'eco-md': '0 6px 20px rgba(2, 4, 4, 0.06)',
        'eco-lg': '0 12px 32px rgba(2, 4, 4, 0.08)',
        'eco-halo': '0 0 28px rgba(104, 150, 96, 0.18)',
        'eco-pink-halo': '0 0 28px rgba(189, 59, 103, 0.16)',
      },
      borderRadius: {
        'eco-xl': '1.5rem',
        'eco-2xl': '2rem',
        'eco-3xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
