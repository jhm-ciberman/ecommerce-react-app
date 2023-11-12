/*eslint-env node*/
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            display: ["Abril Fatface", "serif"],
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                "primary": colors.amber,
            },
            letterSpacing: { // tracking
                "2widest": "0.2em",
                "3widest": "0.3em",
                "5widest": "0.5em",
            },
        },
    },
};
