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
      fontFamily: {
    sans: ['"Google Sans Code"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  },
    keyframes: {
    glow: {
      '0%, 100%': { textShadow: '0 0 0px #fff' },
      '50%': { textShadow: '0 0 16px #fff, 0 0 32px #f87171' },
    },
  },
  animation: {
    glow: 'glow 1.5s ease-in-out infinite',
  },
    },
  },
  plugins: [],
}

