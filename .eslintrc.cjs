module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:tailwindcss/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],

        // Disable prop-types.
        "react/prop-types": ["off"],

        // enforce semicolons, because no semicolons is a mess and prone to errors
        "semi": ["error", "always"],

        // NO unused variables, except for variables that start with an underscore (e.g. _id, _name, _index, etc.)
        // This way we can deliberately express that we will not use the variable, but we need it for the function signature.
        "no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
    },
};
