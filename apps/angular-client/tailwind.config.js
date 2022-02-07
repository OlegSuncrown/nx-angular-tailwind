const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path'); 
const sharedTailwindConfig = require('../../libs/shared/styles/tailwind-preset/tailwind.config');

module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        quiz: {
          300: "#373B62",
          400: '#A769C3',
          500: '#7E55B2',
          600: '#714785',
          700: '#533461',
          800: '#1B1D31',
          900: '#12131E',
        },
      },
    },
  },
  plugins: [],
};