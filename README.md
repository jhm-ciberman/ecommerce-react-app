# Coderhouse - Ecommerce project

A simple ecommerce project for the Coderhouse ReactJS course. The project uses ReactJS and TailwindCSS.

![image](https://github.com/jhm-ciberman/ecommerce-react-app/assets/7988351/174e786e-b561-4e6e-8b3b-d55983de5e64)


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

## Populating the database

To populate the database with products, first copy your `service-account-key.json` file to the `admin` folder. Then run the following commands:

```bash
cd admin && npm install && node import-products.js
```

The script will create a `products` collection in your database and populate it with the products from the fake store API. (https://fakestoreapi.com/products)

- DO NOT upload this script to a production server. It is only meant to be run once in a local environment to populate the database with products.
- DO NOT run this script twice. It will duplicate the products in the database.

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


