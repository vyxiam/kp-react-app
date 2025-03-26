const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // join(
    //   __dirname,
    //   '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    // ),
    // ...createGlobPatternsForDependencies(__dirname),
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
    "./app/**/*.{js,ts,jsx,tsx,html}",
    "./node_modules/@kp-react-lib/kp-react-common/src/**/*.{js,jsx,ts,tsx}",
    "./../../node_modules/@kp-react-lib/kp-react-common/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
