# Coderhouse - Ecommerce project

A simple ecommerce project for the Coderhouse ReactJS course. The project uses ReactJS and TailwindCSS.

## Installation

```bash
git clone git@github.com:jhm-ciberman/ecommerce-react-app.git
npm install
```

## Running the app

```bash
npm run dev
```

## Code style and formatting

This project [ESLint](https://eslint.org/) for code style and formatting. To run the linter, use the following command:

```bash
npm run lint
```

You can also install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode.

Although the coderhouse course is in Spanish, this project is written in English.
If you have any complaint about this, feel free to click [here](https://englishacademy.coderhouse.com/).

## Building for production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Notes

This project uses tailwind so it's recomended that you instruct in your `.vscode/settings.json` to use tailwind for autocompletion:

```json
{
    "files.associations": {
        "*.css": "tailwindcss",
        "*.jsx": "javascriptreact",
    },
    "editor.quickSuggestions": {
        "strings": "on"
    },
}
```


