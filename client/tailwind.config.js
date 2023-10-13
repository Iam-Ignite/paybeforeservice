/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6E3EFF",
        base: "#F7F7F7",
        white: "#FFFFFF",
        border: "#DADADA",
        black: "#1A1A1A",
        "body-text": "#555555"
      },
      borderWidth: {
        "ui-border": "1px"
      },
      fontFamily: {
        "ui-regular": ["ui-regular", 'sans-serif'],
        "ui-semi": ["ui-semi", "sans-serif"],
        "ui-bold": ["ui-bold", "sans-serif"]
      }
    },
  },
  plugins: [],
}

