/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      modal: { max: "320px" },
    },
    extend: {
      colors: {
        primary: "#6E3EFF",
        base: "#F7F7F7",
        white: "#FFFFFF",
        border: "#DADADA",
        black: "#1A1A1A",
        "body-text": "#555555",
      },
      borderWidth: {
        "ui-border": "1px",
      },
      fontFamily: {
        "ui-regular": ["ui-regular", "sans-serif"],
        "ui-semi": ["ui-semi", "sans-serif"],
        "ui-bold": ["ui-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
