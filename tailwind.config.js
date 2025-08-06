/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f87171", // red
          foreground: "#fff",
        },
        destructive: {
          DEFAULT: "#f59e42", // orange
          foreground: "#fff",
        },
        warning: {
          DEFAULT: "#fde047", // yellow
          foreground: "#000",
        },
      },
    },
  },
  plugins: [],
}

