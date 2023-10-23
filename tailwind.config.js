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
        },
    },
};
