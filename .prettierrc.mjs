/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.md',
      options: {
        singleQuote: false,
      },
    },
  ],
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
};
