/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'bacground-primary': '#f3f4f6',
        'input-default': '#d1d5db',
        'input-error': '#f87171',
        'text-input-error': '#f87171',
      },
    },
  },
  plugins: [],
};
