/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nhs-blue': '#005EB8',
        'nhs-dark-blue': '#003087',
        'nhs-light-blue': '#E8F4FD',
        'nhs-green': '#00A499',
        'nhs-grey-1': '#425563',
        'nhs-grey-2': '#768692',
        'nhs-grey-3': '#E8EDEE',
      },
    },
  },
  plugins: [],
} 