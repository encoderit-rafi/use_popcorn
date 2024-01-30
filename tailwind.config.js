/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_primary: "#6741d9",
        custom_primary_light: "#7950f2",
        custom_text: "#dee2e6",
        custom_text_dark: "#adb5bd",
        custom_background_100: "#343a40",
        custom_background_500: "#2b3035",
        custom_red: "#fa5252",
        custom_red_dark: "#e03131",
      },
    },
  },
  plugins: [],
};
