const defaultTheme = require("tailwindcss/defaultTheme");

const fontFamily = defaultTheme.fontFamily;
fontFamily["sans"] = ["Play"];

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: fontFamily,
    extend: {
      backgroundImage: {
        main: "url('/assets/main-bg.jpg')",
        carousel: "url('/assets/about-bg.svg')",
        features: "url('/assets/Group (1).svg')",
        sysreq: "url('/assets/requirements.png')",
        quotes: "url('/assets/bg-5.png')",
      },
      colors: {
        primary: "#F59E0B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
