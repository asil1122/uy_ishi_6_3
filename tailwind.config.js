/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      container:{
        center: true,
        padding: '20px',
        screens: {
          lg: '1200px',
        }
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textColor: "var(--color-text)",
        grey: "var(--color-grey)",
        bodyColor: "var(--color-bg)",
        error: "var(--color-error)",
      }
    },
  },
  plugins: [],
}