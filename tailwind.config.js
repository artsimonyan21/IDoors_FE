/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxxs: "320px",
        xxs: "380px",
        xs: "480px",
        sm: "580px",
        md: "768px",
        lg: "1024px",
        xl: "1250px",
        "2xl": "1450px",
        "3xl": "1530px",
      },
      colors: {
        "blue-1": "#33638e",
        "light-1": "#E5E5E5",
        "gray-1": "#BFB7B7",
      },
      gridTemplateColumns: {
        "grid-1": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      maxWidth: {
        "max-device": "1920px",
      },
    },
  },
  plugins: [],
};
