# 05.1_vimos_product-tailwind

## Setup tailwind

[installation](https://tailwindcss.com/docs/installation)

Building css on Live Server
``
npx tailwind -i ./src/input.css -o ./src/output.css --watch
``

### Customizing the default theme

Owned custom propreties used in private project

- Font Family
- Colors

[Custom propreties](https://tailwindcss.com/docs/theme#customizing-the-default-theme)

### Using CSS and @layer

When you need to add truly custom CSS rules to a Tailwind project

- Base
- Compoments
- Utilities

[Using @layer](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer)

### Functions & Directives

A reference for the custom functions and directives Tailwind exposes to your CSS

[Directives](https://tailwindcss.com/docs/functions-and-directives#layer)

### Using multiple css file

The ability to organize your CSS into multiple files of input.css

- Base
- Compoments
- Utilities

``
npm install -D postcss-import
``

[Post CSS](https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor)