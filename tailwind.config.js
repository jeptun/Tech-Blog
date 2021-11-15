module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        magicBlack: {
          500:"#202023",
          600: "#27272F",
        },
        mudblack: "#171c21",
        antiquewhite: "#f0e7db",
        antiquewhitey: "#F1EDE6",
        royalblue: "#5661F2",
        poisongreen: "#29D67F",
        
      },
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
