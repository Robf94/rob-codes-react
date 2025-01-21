import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBgText: "#fae2de",
        hover: "#539e8adb",
        shadow: "#c5c5c5b3",
        shadowHover: "#9c9c9cb3",
        shadowActive: "#7d7d7db3",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        myColors: {
          primary: "#539e8a",
          secondary: "#f6c5be",
          accent: "#fae2de",
        },
      },
    ],
  },
};
