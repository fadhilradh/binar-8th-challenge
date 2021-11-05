module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/assets/main-bg.jpg')",
        carousel: "url('/assets/about-bg.svg')",
        features: "url('/assets/Group (1).svg')",
        sysreq: "url('/assets/requirements.png')",
        quotes: "url('/assets/bg-5.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
