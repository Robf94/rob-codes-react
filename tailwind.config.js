import daisyui from "daisyui";
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        darkBgText: "#fae2de",
        hover: "#539e8adb",
        shadow: "#c5c5c5b3",
        shadowHover: "#9c9c9cb3",
        shadowActive: "#7d7d7db3",
      },
      spacing: {
        nav: "var(--navbar-height)",
      },
    },
    borderRadius: {
      none: "0",
      sm: "5px",
      md: "10px",
      lg: "20px",
      xl: "30px",
      full: "9999px",
    },
  },
  plugins: [daisyui, flowbite.plugin()],
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
