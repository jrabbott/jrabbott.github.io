/** @type {import("prettier").Config} */
export default {
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'always',
    plugins: ['prettier-plugin-astro/dist/index.js'],
    overrides: [
        {
            files: ['*.json', '*.yml', '*.yaml'],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ['**/*.astro', '**\\*.astro', '*.astro'],
            options: {
                parser: 'astro',
            },
        },
    ],
};
