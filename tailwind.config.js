/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {

    fontFamily: {
      'sans': ['kantumruy Pro ', 'sans-serif']
    },

    extend: {
      colors: {
        Primary: "#022278",
        Secondary: "#FFB600",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin')
  ],
};
